// Social preview audit (FIX-8)
// Fetches every sitemap URL like a link-preview bot (no JavaScript) and checks
// the Open Graph / Twitter tags and the preview image itself.
//
//   npx tsx scripts/audit-og.ts https://chartertransparenz.de [report.md]
//
// The image source (page / area / global) comes from /og/manifest.json,
// written by scripts/prerender.ts. Exit code 1 if any page fails.

import { writeFileSync } from "fs";
import sharp from "sharp";

const base = (process.argv[2] || "https://chartertransparenz.de").replace(/\/+$/, "");
const reportPath = process.argv[3];
const UA = "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";

const decode = (s: string) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const metas = (html: string, key: string) =>
  (html.split("</head>")[0].match(/<meta[^>]*>/gi) || [])
    .filter((t) => new RegExp(`\\s(?:name|property)=["']${key}["']`, "i").test(t))
    .map((t) => decode((t.match(/\scontent=["']([^"']*)["']/i) || [])[1] || ""));

type Row = {
  url: string; image: string; absolute: boolean; status: number | string; type: string;
  kb: number; size: string; source: string; problems: string[];
};

const imageCache = new Map<string, Promise<{ status: number | string; type: string; bytes: number; w: number; h: number }>>();
function checkImage(src: string) {
  if (!imageCache.has(src)) {
    imageCache.set(src, (async () => {
      // Images are checked on the audited host so a preview deploy is tested itself.
      const res = await fetch(src.replace(/^https:\/\/chartertransparenz\.de/, base), { headers: { "User-Agent": UA } });
      const type = res.headers.get("content-type") || "";
      const buf = Buffer.from(await res.arrayBuffer());
      let w = 0, h = 0;
      if (type.startsWith("image/")) {
        const m = await sharp(buf).metadata().catch(() => ({ width: 0, height: 0 }));
        w = m.width ?? 0;
        h = m.height ?? 0;
      }
      return { status: res.status, type, bytes: buf.length, w, h };
    })().catch((e) => ({ status: `ERR ${e.message}`, type: "", bytes: 0, w: 0, h: 0 })));
  }
  return imageCache.get(src)!;
}

async function main() {
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  if (!urls.length) throw new Error(`no URLs in ${base}/sitemap.xml`);
  const manifest: Record<string, { source: string }> =
    await fetch(`${base}/og/manifest.json`).then((r) => (r.ok ? r.json() : {})).catch(() => ({}));

  const rows: Row[] = [];
  for (const url of urls) {
    const html = await (await fetch(base + url, { headers: { "User-Agent": UA } })).text();
    const problems: string[] = [];
    for (const key of ["og:title", "og:description", "og:url", "og:type", "og:image", "og:image:type", "og:image:width", "og:image:height", "og:image:alt", "twitter:card", "twitter:image"]) {
      const n = metas(html, key).filter(Boolean).length;
      if (n !== 1) problems.push(`${key} ×${n}`);
    }
    const image = metas(html, "og:image")[0] || "";
    if (image && metas(html, "twitter:image")[0] !== image) problems.push("twitter:image ≠ og:image");
    const absolute = /^https:\/\//.test(image);
    if (image && !absolute) problems.push("og:image not absolute https");

    let status: number | string = "-", type = "", kb = 0, size = "";
    if (image) {
      const img = await checkImage(image);
      status = img.status; type = img.type; kb = Math.round(img.bytes / 1024); size = img.w ? `${img.w}×${img.h}` : "";
      if (img.status !== 200) problems.push(`image HTTP ${img.status}`);
      if (!type.startsWith("image/")) problems.push(`image content-type ${type || "-"}`);
      if (img.bytes > 1024 * 1024) problems.push(`image ${kb} KB`);
      const declared = `${metas(html, "og:image:width")[0]}×${metas(html, "og:image:height")[0]}`;
      if (img.w && declared !== size) problems.push(`size ${size} ≠ declared ${declared}`);
      if (img.w && (img.w < 600 || img.h < 315)) problems.push("image too small");
    }
    const source = manifest[url.replace(/\/+$/, "") || "/"]?.source || "?";
    rows.push({ url, image: image.replace(/^https:\/\/[^/]+/, ""), absolute, status, type, kb, size, source, problems });
    process.stdout.write(problems.length ? `❌ ${url}: ${problems.join(", ")}\n` : "");
  }

  const ok = rows.filter((r) => !r.problems.length).length;
  const bySource = rows.reduce<Record<string, number>>((n, r) => ({ ...n, [r.source]: (n[r.source] || 0) + 1 }), {});
  const images = new Set(rows.map((r) => r.image)).size;
  const kbs = rows.map((r) => r.kb).sort((a, b) => a - b);
  const summary = `${rows.length} URLs geprüft, ${ok} mit funktionierendem Vorschaubild, ${rows.length - ok} mit Problem. ` +
    `Quelle: seitenspezifisch ${bySource.page || 0}, Bereich ${bySource.area || 0}, global ${bySource.global || 0}. ` +
    `${images} verschiedene Bilder, Dateigröße ${kbs[0]}–${kbs[kbs.length - 1]} KB.`;
  console.log(`\n${summary}`);

  if (reportPath) {
    const label: Record<string, string> = { page: "seitenspezifisch", area: "Bereichs-Fallback", global: "globaler Fallback" };
    const lines = [
      `# Social-Preview-Audit (FIX-8)`, ``,
      `Basis: ${base} · Stand: ${new Date().toISOString().slice(0, 10)} · Abruf als \`facebookexternalhit\`, ohne JavaScript`, ``,
      summary, ``,
      `| URL | og:image | absolut | HTTP | Content-Type | KB | Abmessungen | Quelle | Befund |`,
      `|---|---|---|---|---|---|---|---|---|`,
      ...rows.map((r) => `| ${r.url} | ${r.image || "–"} | ${r.absolute ? "ja" : "nein"} | ${r.status} | ${r.type} | ${r.kb} | ${r.size} | ${label[r.source] || r.source} | ${r.problems.join(", ") || "ok"} |`),
      ``,
    ];
    writeFileSync(reportPath, lines.join("\n"), "utf8");
  }
  process.exit(ok === rows.length ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
