// Audit of the HTML that crawlers receive (FIX-3)
// Fetches every sitemap URL from a running site WITHOUT executing JavaScript
// and checks title, description, canonical, H1, text and structured data.
//
//   npx tsx scripts/audit-prerender.ts https://chartertransparenz.de [report.md]
//
// Exit code 1 if any URL has an error.

import { writeFileSync } from "fs";

const BASE = (process.argv[2] || "https://chartertransparenz.de").replace(/\/$/, "");
const REPORT = process.argv[3];
const SITE = "https://chartertransparenz.de";
const UA = "Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)";
const MIN_WORDS = 150;

const decode = (s: string) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&");
const all = (html: string, re: RegExp) => [...html.matchAll(re)].map((m) => decode(m[1] ?? "").trim());

type Row = {
  url: string; type: string; status: number; title: string; titleUnique: boolean; desc: boolean;
  canonicals: number; canonicalOk: boolean; h1: number; words: number; jsonld: string; issues: string[];
};

const typeOf = (p: string) =>
  p === "/" ? "Startseite" : p.startsWith("/blog") ? "Blog" : p.startsWith("/news") ? "News"
  : p.startsWith("/reviere") ? "Revier" : p.startsWith("/yachtcharter-partner") ? "Partner" : "Info";

async function get(url: string) {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA }, redirect: "manual" });
      return { status: r.status, html: await r.text() };
    } catch (e) {
      if (i >= 3) throw e;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function main() {
  const sitemap = (await get(`${BASE}/sitemap.xml`)).html;
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const rows: Row[] = [];

  for (const path of paths) {
    const { status, html } = await get(BASE + path);
    const head = html.split("</head>")[0];
    const body = (html.split("</head>")[1] || "")
      .replace(/<(script|style|noscript|template)[^>]*>[\s\S]*?<\/\1>/gi, " ");
    const titles = all(head, /<title[^>]*>([\s\S]*?)<\/title>/gi);
    const descs = all(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/gi);
    const canons = all(head, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/gi);
    const h1 = all(body, /<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    const words = decode(body.replace(/<[^>]+>/g, " ")).split(/\s+/).filter(Boolean).length;
    const types = all(html, /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)
      .flatMap((j) => [...j.matchAll(/"@type"\s*:\s*"([A-Za-z]+)"/g)].map((m) => m[1]));
    const expected = path === "/" ? [SITE, `${SITE}/`] : [SITE + path.replace(/\/$/, "")];

    const issues: string[] = [];
    if (status !== 200) issues.push(`HTTP ${status}`);
    if (titles.length !== 1) issues.push(`${titles.length} titles`);
    if (descs.length !== 1) issues.push(`${descs.length} descriptions`);
    if (canons.length !== 1) issues.push(`${canons.length} canonicals`);
    if (canons.length && !expected.includes(canons[0])) issues.push(`canonical ${canons[0]}`);
    if (!h1.length) issues.push("no H1");
    if (h1.length > 1) issues.push(`${h1.length} H1`);
    if (words < MIN_WORDS) issues.push(`only ${words} words`);

    rows.push({
      url: path, type: typeOf(path), status, title: titles[0] || "", titleUnique: true, desc: descs.length > 0,
      canonicals: canons.length, canonicalOk: canons.length === 1 && expected.includes(canons[0]),
      h1: h1.length, words, jsonld: [...new Set(types)].join(" "), issues,
    });
  }

  const titleCount = new Map<string, number>();
  rows.forEach((r) => titleCount.set(r.title, (titleCount.get(r.title) || 0) + 1));
  for (const r of rows) {
    if (r.title && titleCount.get(r.title)! > 1) {
      r.titleUnique = false;
      r.issues.push("title not unique");
    }
  }

  const failed = rows.filter((r) => r.issues.length);
  const yes = (b: boolean) => (b ? "ja" : "**nein**");
  const lines = [
    `# Prerender-Audit`, ``,
    `Quelle: ${BASE} (Abruf ohne JavaScript, User-Agent GPTBot), ${new Date().toISOString().slice(0, 10)}`, ``,
    `Geprüft: ${rows.length} URLs aus der Sitemap. Fehlerfrei: ${rows.length - failed.length}. Mit Auffälligkeit: ${failed.length}.`, ``,
    `| URL | Typ | HTTP | Title | individuell | Description | Canonicals | Canonical korrekt | H1 | Wörter | Strukturierte Daten | Auffälligkeit |`,
    `|---|---|---|---|---|---|---|---|---|---|---|---|`,
    ...rows.map((r) =>
      `| ${r.url} | ${r.type} | ${r.status} | ${yes(!!r.title)} | ${yes(r.titleUnique)} | ${yes(r.desc)} | ${r.canonicals} | ${yes(r.canonicalOk)} | ${r.h1} | ${r.words} | ${r.jsonld || "–"} | ${r.issues.join(", ") || "–"} |`),
  ];
  if (REPORT) writeFileSync(REPORT, lines.join("\n") + "\n", "utf8");

  for (const r of failed) console.log(`❌ ${r.url}: ${r.issues.join(", ")}`);
  console.log(`\n${rows.length} URLs geprüft, ${rows.length - failed.length} fehlerfrei, ${failed.length} mit Auffälligkeit`);
  process.exit(failed.length ? 1 : 0);
}

main();
