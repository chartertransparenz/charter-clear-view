// Social preview images (FIX-8), used by scripts/prerender.ts
// Picks one image per page, writes a 1200x630 JPG derivative to dist/og/img/
// and sets the og:image* / twitter:image tags. Originals are never changed.
//
// Image priority per page:
//   1. page    – og:image set by the page itself (Helmet), else the first
//                content image of the rendered page (hero / article image)
//   2. area    – country image from a legacy prerender-*.ts script, else the
//                fallback of the site section (blog, news, reviere, partner)
//   3. global  – CharterTransparenz default image
// A candidate is used only if the file exists in dist, is JPG/PNG/WebP, at
// least MIN_W x MIN_H and landscape enough for a 1.91:1 crop.

import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join, basename, extname } from "path";
import { createHash } from "crypto";
import sharp from "sharp";

const SITE = "https://chartertransparenz.de";
const DIST = "dist";
const OUT_DIR = join(DIST, "og", "img");
const W = 1200;
const H = 630;
const MIN_W = 800;
const MIN_H = 400;
const MAX_BYTES = 400 * 1024;

type Source = "page" | "area" | "global";
type Candidate = { src: string; alt: string };

const FALLBACKS: Record<string, Candidate> = {
  global: { src: "/lovable-uploads/5ed77d3d-0796-4844-abb5-9507d269869c.webp", alt: "Blick über Hafen und Inseln an der Adria – CharterTransparenz" },
  blog: { src: "/images/charter_with_skipper.jpg", alt: "Crew an Bord einer Segelyacht – Charter-Blog von CharterTransparenz" },
  news: { src: "/lovable-uploads/58d61b25-e0c3-44d0-9e60-202f1de6c843.webp", alt: "Segelyacht vor Anker in türkisem Wasser – Törn-Hinweise von CharterTransparenz" },
  reviere: { src: "/lovable-uploads/453b22cb-8862-431e-af5b-cae084d68d17.webp", alt: "Segelyachten in einer Bucht von oben – Charterreviere bei CharterTransparenz" },
  partner: { src: "/lovable-uploads/626a5986-a8dd-495e-97d7-9c028042f1a4.webp", alt: "Charteryacht unter Segeln – Yachtcharter-Partner von CharterTransparenz" },
};

// Overview pages show many unrelated images; they use their section fallback.
const LIST_PAGES = new Set(["/blog", "/news", "/yachtcharter-partner", "/reviere/alle-reviere"]);

// Images that are technically fine but not suitable as a preview.
const EXCLUDED = new Set(["/lovable-uploads/48ae290b-f7f7-4f0a-82a5-2771aa15fb3a.webp"]); // "Seite im Aufbau" placeholder

const sectionOf = (url: string) =>
  url.startsWith("/blog") ? "blog"
  : url.startsWith("/news") ? "news"
  : url.startsWith("/reviere") ? "reviere"
  : url.startsWith("/yachtcharter-partner") ? "partner"
  : "global";

const decode = (s: string) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Site-relative path of an image URL, or null for other hosts. */
function localPath(src: string) {
  const s = decode(src.trim());
  if (s.startsWith(SITE + "/")) return s.slice(SITE.length).split(/[?#]/)[0];
  if (s.startsWith("/") && !s.startsWith("//")) return s.split(/[?#]/)[0];
  return null;
}

/** Content images of the rendered page in document order (no nav, footer, logos, SVG). */
function contentImages(appHtml: string): Candidate[] {
  const navEnd = appHtml.search(/<\/nav>/i);
  const footer = appHtml.search(/<footer[\s>]/i);
  const main = appHtml.slice(navEnd >= 0 ? navEnd : 0, footer >= 0 ? footer : undefined);
  const out: Candidate[] = [];
  const re = /<img\s[^>]*>|url\((?:&quot;|["'])?([^)"'&]+)(?:&quot;|["'])?\)/gi;
  for (const m of main.matchAll(re)) {
    if (m[1]) {
      if (/^(\/|https?:)/.test(m[1])) out.push({ src: m[1], alt: "" });
      continue;
    }
    const src = (m[0].match(/\ssrc="([^"]+)"/i) || [])[1];
    const alt = decode((m[0].match(/\salt="([^"]*)"/i) || [])[1] || "");
    if (src && !/logo/i.test(src + " " + alt)) out.push({ src, alt });
  }
  return out;
}

const metaContent = (head: string, key: string) => {
  const tag = (head.match(/<meta[^>]*>/gi) || []).find((t) => new RegExp(`\\s(?:name|property)=["']${key}["']`, "i").test(t));
  return tag ? decode((tag.match(/\scontent=["']([^"']*)["']/i) || [])[1] || "") : "";
};

// --- derivative generation ---------------------------------------------------

const checked = new Map<string, { ok: boolean; reason?: string; out?: string; bytes?: number }>();

async function derivative(path: string) {
  if (checked.has(path)) return checked.get(path)!;
  const result = await (async () => {
    if (EXCLUDED.has(path)) return { ok: false, reason: "excluded" };
    if (!/\.(jpe?g|png|webp)$/i.test(path)) return { ok: false, reason: "format" };
    const file = join(DIST, decodeURI(path));
    if (!existsSync(file)) return { ok: false, reason: "missing" };
    const meta = await sharp(file).metadata().catch(() => null);
    if (!meta) return { ok: false, reason: "unreadable" };
    const w = meta.width ?? 0;
    const h = meta.height ?? 0;
    if (w < MIN_W || h < MIN_H) return { ok: false, reason: `too small ${w}x${h}` };
    // Wide hero banners (about 1300x450) still keep two thirds in a 1.91:1 crop.
    if (w / h < 1.2 || w / h > 3.3) return { ok: false, reason: `aspect ${w}x${h}` };

    const name = basename(path, extname(path)).toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 60);
    const hash = createHash("sha1").update(path).digest("hex").slice(0, 6);
    const out = `/og/img/${name}-${hash}.jpg`;
    let buf: Buffer = Buffer.alloc(0);
    for (const quality of [82, 74, 66, 58]) {
      buf = await sharp(file).rotate().resize(W, H, { fit: "cover", position: "centre" })
        .flatten({ background: "#ffffff" }).jpeg({ quality, mozjpeg: true }).toBuffer();
      if (buf.length <= MAX_BYTES) break;
    }
    mkdirSync(OUT_DIR, { recursive: true });
    writeFileSync(join(DIST, out), buf);
    return { ok: true, out, bytes: buf.length };
  })();
  checked.set(path, result);
  return result;
}

// --- public API --------------------------------------------------------------

export type OgResult = { image: string; source: Source; from: string; bytes: number; rejected: string[] };

/**
 * Choose the preview image for a page and write the og:image* / twitter tags.
 * `helmetHead` is the page's own Helmet output, `legacyHead` the head written
 * by a legacy prerender-*.ts script (may be empty).
 */
export async function applyOgImage(head: string, url: string, appHtml: string, helmetHead: string, legacyHead: string) {
  const section = sectionOf(url);
  const tiers: [Source, Candidate[]][] = [
    ["page", LIST_PAGES.has(url) ? [] : [
      ...(metaContent(helmetHead, "og:image") ? [{ src: metaContent(helmetHead, "og:image"), alt: metaContent(helmetHead, "og:image:alt") }] : []),
      ...contentImages(appHtml).slice(0, 4),
    ]],
    ["area", [
      ...(metaContent(legacyHead, "og:image") ? [{ src: metaContent(legacyHead, "og:image"), alt: "" }] : []),
      ...(section !== "global" ? [FALLBACKS[section]] : []),
    ]],
    ["global", [FALLBACKS.global]],
  ];

  const rejected: string[] = [];
  let pick: { source: Source; c: Candidate; out: string; bytes: number } | null = null;
  outer: for (const [source, candidates] of tiers) {
    for (const c of candidates) {
      const path = localPath(c.src);
      if (!path) { rejected.push(`${c.src} (external)`); continue; }
      const d = await derivative(path);
      if (d.ok) { pick = { source, c: { ...c, src: path }, out: d.out!, bytes: d.bytes! }; break outer; }
      if (source !== "page" || d.reason !== "missing") rejected.push(`${path} (${d.reason})`);
    }
  }
  if (!pick) throw new Error(`${url}: no usable preview image (global fallback broken?)`);

  const title = metaContent(head, "og:title") || decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const description = metaContent(head, "og:description") || metaContent(head, "description");
  const canonical = ((head.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [""])[0].match(/href=["']([^"']+)["']/i) || [])[1] || "";
  const alt = pick.c.alt || (pick.source === "global" ? FALLBACKS.global.alt : title);
  const image = SITE + pick.out;

  // Replace all image tags, keep existing og/twitter text tags and fill gaps.
  let h = head.replace(/<meta[^>]*>\s*/gi, (tag) =>
    /\s(?:name|property)=["'](?:og:image(?::[a-z_]+)?|twitter:image(?::alt)?)["']/i.test(tag) ? "" : tag);
  const tag = (attr: "property" | "name", key: string, value: string) =>
    `<meta data-rh="true" ${attr}="${key}" content="${escapeHtml(value)}">`;
  const add: string[] = [];
  if (!metaContent(h, "og:title") && title) add.push(tag("property", "og:title", title));
  if (!metaContent(h, "og:description") && description) add.push(tag("property", "og:description", description));
  if (!metaContent(h, "og:url") && canonical) add.push(tag("property", "og:url", canonical));
  if (!metaContent(h, "og:type")) add.push(tag("property", "og:type", "website"));
  add.push(
    tag("property", "og:image", image),
    tag("property", "og:image:type", "image/jpeg"),
    tag("property", "og:image:width", String(W)),
    tag("property", "og:image:height", String(H)),
    tag("property", "og:image:alt", alt),
  );
  if (!metaContent(h, "twitter:card")) add.push(tag("name", "twitter:card", "summary_large_image"));
  if (!metaContent(h, "twitter:title") && title) add.push(tag("name", "twitter:title", title));
  if (!metaContent(h, "twitter:description") && description) add.push(tag("name", "twitter:description", description));
  add.push(tag("name", "twitter:image", image), tag("name", "twitter:image:alt", alt));
  h = h.replace("</head>", `  ${add.join("\n    ")}\n  </head>`);

  const result: OgResult = { image, source: pick.source, from: pick.c.src, bytes: pick.bytes, rejected };
  return { head: h, result };
}

/** Global fallback also at /og/home.jpg, the default path used by <Meta> in the browser. */
export async function writeDefaultImage() {
  const d = await derivative(FALLBACKS.global.src);
  if (!d.ok) throw new Error(`global preview image unusable: ${d.reason}`);
  copyFileSync(join(DIST, d.out!), join(DIST, "og", "home.jpg"));
}
