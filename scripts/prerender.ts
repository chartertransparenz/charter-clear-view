// Central build-time prerender (FIX-3)
// Renders every URL from dist/ct-sitemap.xml with the React app itself
// (SSR bundle from src/entry-prerender.tsx) and writes static HTML with the
// full page content, H1, structured data and exactly one title, description
// and canonical. New pages are picked up as soon as they are in the sitemap
// (scripts/generate-sitemap.ts) – no per-page script needed.
//
// Run after `vite build` and the legacy prerender-*.ts scripts:
//   vite build --ssr src/entry-prerender.tsx --outDir dist-ssr && tsx scripts/prerender.ts
//
// Meta priority per page:
//   1. react-helmet-async tags rendered by the page itself
//   2. tags already written for this route by a legacy prerender-*.ts script
//   3. entry in src/seo/meta.config.ts whose canonical matches the URL
//   4. derived from the rendered page (H1, first paragraph) – reported as warning
//
// Social preview image (og:image*, twitter:image): scripts/og-images.ts (FIX-8),
// result per URL in dist/og/manifest.json.

process.env.NODE_ENV = process.env.NODE_ENV || "production";

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { pathToFileURL } from "url";
import { META } from "../src/seo/meta.config";
import { applyOgImage, writeDefaultImage, type OgResult } from "./og-images";

const SITE = "https://chartertransparenz.de";
const DIST = "dist";
const SSR_ENTRY = join("dist-ssr", "entry-prerender.js");
const BRAND = "CharterTransparenz";

type Render = (url: string) => Promise<{
  html: string;
  head: { title: string; priority: string; meta: string; link: string; script: string };
}>;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const decode = (s: string) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&");

const textOf = (html: string) =>
  decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const normalize = (url: string) => url.replace(/\/+$/, "") || "/";

// --- head helpers -----------------------------------------------------------

const TITLE_RE = /<title[^>]*>[\s\S]*?<\/title>\s*/gi;
const CANONICAL_RE = /<link[^>]+rel=["']canonical["'][^>]*>\s*/gi;

/** Key of a meta tag: its name or property attribute. */
const metaKey = (tag: string) => (tag.match(/\s(?:name|property)=["']([^"']+)["']/i) || [])[1];

const removeMeta = (head: string, key: string) =>
  head.replace(/<meta[^>]*>\s*/gi, (tag) => (metaKey(tag) === key ? "" : tag));

const getMeta = (head: string, key: string) => {
  const tag = (head.match(/<meta[^>]*>/gi) || []).find((t) => metaKey(t) === key);
  return tag ? decode((tag.match(/\scontent=["']([^"']*)["']/i) || [])[1] || "") : "";
};

const getTitle = (head: string) => textOf((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");

const getCanonical = (head: string) =>
  ((head.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [""])[0].match(/href=["']([^"']+)["']/i) || [])[1] || "";

/** Overlay Helmet output on the template head: Helmet wins per tag key. */
function applyHelmet(head: string, helmet: { title: string; priority: string; meta: string; link: string; script: string }) {
  let h = head;
  const add: string[] = [];
  const metaTags = helmet.priority + helmet.meta;
  const linkTags = helmet.priority + helmet.link;

  if (textOf(helmet.title)) {
    h = h.replace(TITLE_RE, "");
    add.push(helmet.title);
  }
  for (const tag of metaTags.match(/<meta[^>]*>/gi) || []) {
    const key = metaKey(tag);
    if (key) h = removeMeta(h, key);
    add.push(tag);
  }
  for (const tag of linkTags.match(/<link[^>]*>/gi) || []) {
    if (/rel=["']canonical["']/i.test(tag)) h = h.replace(CANONICAL_RE, "");
    add.push(tag);
  }
  if (helmet.script.trim()) add.push(helmet.script);

  return add.length ? h.replace("</head>", `  ${add.join("\n    ")}\n  </head>`) : h;
}

const LD_RE = /<script[^>]+application\/ld\+json[^>]*>[\s\S]*?<\/script>\s*/gi;
const ldType = (tag: string) => (tag.match(/"@type"\s*:\s*"([A-Za-z]+)"/) || [])[1];

/** Drop legacy head JSON-LD whose @type the page already renders itself. */
function dedupeJsonLd(head: string, appHtml: string, helmetScript: string) {
  const own = new Set(((appHtml + helmetScript).match(LD_RE) || []).map(ldType).filter(Boolean));
  return head.replace(LD_RE, (tag) => (own.has(ldType(tag)) ? "" : tag));
}

/** Fill in title / description / canonical that are still missing. */
function completeHead(head: string, url: string, appHtml: string, warnings: string[]) {
  let h = head;
  const add: string[] = [];
  const canon = url === "/" ? `${SITE}/` : `${SITE}${url}`;
  const meta = Object.values(META).find((m) => normalize(m.canonical()) === normalize(canon));

  const title = getTitle(h);
  if (!title || title === BRAND) {
    let t = meta?.title;
    if (!t) {
      const h1 = textOf((appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "");
      t = h1 ? `${h1} | ${BRAND}` : BRAND;
      warnings.push(`title derived from H1: "${t}"`);
    }
    h = h.replace(TITLE_RE, "");
    add.push(`<title data-rh="true">${escapeHtml(t)}</title>`);
  }

  if (!getMeta(h, "description")) {
    let d = meta?.description;
    if (!d) {
      // Main content starts at the H1 (skips navigation); <p> but not <path>.
      const h1At = appHtml.search(/<h1[\s>]/i);
      const main = h1At >= 0 ? appHtml.slice(h1At) : appHtml;
      const paragraphs = (main.match(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi) || []).map(textOf);
      const p = paragraphs.find((x) => x.length >= 80) || paragraphs.find(Boolean) || "";
      d = p.length > 160 ? p.slice(0, 157).replace(/\s+\S*$/, "") + " …" : p;
      warnings.push(`description derived from page text`);
    }
    if (d) add.push(`<meta data-rh="true" name="description" content="${escapeHtml(d)}">`);
  }

  if (!getCanonical(h)) {
    add.push(`<link data-rh="true" rel="canonical" href="${escapeHtml(canon)}">`);
  }

  return add.length ? h.replace("</head>", `  ${add.join("\n    ")}\n  </head>`) : h;
}

// --- main -------------------------------------------------------------------

async function main() {
  console.log("\n🚀 Starting central prerender...\n");

  const sitemap = readFileSync(join(DIST, "ct-sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => normalize(new URL(m[1]).pathname));
  if (!urls.length) throw new Error("no URLs in dist/ct-sitemap.xml");

  const fallback = readFileSync(join(DIST, "spa-fallback.html"), "utf8");
  const [, fallbackBody] = fallback.split("</head>");
  if (!fallbackBody?.includes('<div id="root"></div>')) throw new Error("spa-fallback.html: empty #root not found");

  const { render } = (await import(pathToFileURL(SSR_ENTRY).href)) as { render: Render };

  let warned = 0;
  const ogManifest: Record<string, OgResult> = {};
  for (const url of urls) {
    const out = url === "/" ? join(DIST, "index.html") : join(DIST, url, "index.html");
    // Head from the route's existing HTML (legacy script output) if present,
    // body always from the clean fallback so no old injected markup remains.
    const template = existsSync(out) ? readFileSync(out, "utf8") : fallback;
    const [templateHead] = template.split("</head>");

    const { html, head: helmet } = await render(url);

    const warnings: string[] = [];
    if (!/<h1[\s>]/i.test(html)) warnings.push("page has no <h1>");
    const legacyHead = dedupeJsonLd(`${templateHead}</head>`, html, helmet.script);
    const metaHead = completeHead(applyHelmet(legacyHead, helmet), url, html, warnings);
    const legacyOgHead = template === fallback ? "" : templateHead;
    const { head, result: og } = await applyOgImage(metaHead, url, html, helmet.priority + helmet.meta, legacyOgHead);
    ogManifest[url] = og;
    const body = fallbackBody.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    mkdirSync(join(out, ".."), { recursive: true });
    writeFileSync(out, head + body, "utf8");

    const words = textOf(html).split(" ").length;
    console.log(`✓ ${url} (${words} words, og: ${og.source})${warnings.length ? "  ⚠️  " + warnings.join("; ") : ""}`);
    if (warnings.length) warned++;
  }

  await writeDefaultImage();
  writeFileSync(join(DIST, "og", "manifest.json"), JSON.stringify(ogManifest, null, 2), "utf8");
  const bySource = Object.values(ogManifest).reduce<Record<string, number>>((n, o) => ({ ...n, [o.source]: (n[o.source] || 0) + 1 }), {});

  console.log(`\n✅ Prerendered ${urls.length} URLs (${warned} with derived meta)`);
  console.log(`🖼️  Preview images: ${JSON.stringify(bySource)}\n`);
}

main().catch((error) => {
  console.error("\n❌ Central prerender failed:", error);
  process.exit(1);
});
