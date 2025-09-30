// SSG Postbuild Script für Karibik-Routen
// Generiert statisches HTML mit SEO-Tags für 10 Karibik-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  {
    path: "/reviere/karibik",
    title: "Yachtcharter Karibik – Bahamas, BVI & St. Martin",
    desc: "Segeln in der Karibik: Bahamas, Britische Jungferninseln, USVI, St. Martin & Grenadinen. Tropisches Klima & türkisfarbenes Meer.",
    canon: "https://chartertransparenz.de/reviere/karibik",
    ogImage: "https://chartertransparenz.de/og/karibik.jpg"
  },
  {
    path: "/reviere/karibik/bahamas",
    title: "Yachtcharter Bahamas – Exumas & Nassau entdecken",
    desc: "Segeln auf den Bahamas: Exumas, Nassau & paradiesische Strände. Perfekt für Katamaran-Charter & Inselhüpfen.",
    canon: "https://chartertransparenz.de/reviere/karibik/bahamas",
    ogImage: "https://chartertransparenz.de/og/bahamas.jpg"
  },
  {
    path: "/reviere/karibik/bvi",
    title: "Yachtcharter BVI – Britische Jungferninseln",
    desc: "Segeln auf den BVI: Tortola, Virgin Gorda & Jost Van Dyke. Karibisches Inselhüpfen in den Britischen Jungferninseln.",
    canon: "https://chartertransparenz.de/reviere/karibik/bvi",
    ogImage: "https://chartertransparenz.de/og/bvi.jpg"
  },
  {
    path: "/reviere/karibik/usvi",
    title: "Yachtcharter USVI – US Jungferninseln",
    desc: "Segeln ab St. Thomas & St. John. Traumhafte Strände & ideale Routen in den US Jungferninseln.",
    canon: "https://chartertransparenz.de/reviere/karibik/usvi",
    ogImage: "https://chartertransparenz.de/og/usvi.jpg"
  },
  {
    path: "/reviere/karibik/antigua",
    title: "Yachtcharter Antigua – Segeln im Herzen der Karibik",
    desc: "Segeln ab Antigua: English Harbour, Nelson's Dockyard & traumhafte Buchten. Perfekt für Karibik-Charter.",
    canon: "https://chartertransparenz.de/reviere/karibik/antigua",
    ogImage: "https://chartertransparenz.de/og/antigua.jpg"
  },
  {
    path: "/reviere/karibik/st-martin",
    title: "Yachtcharter St. Martin – Französische & niederländische Seite",
    desc: "Segeln ab St. Martin: Marigot, Orient Bay & Simpson Bay. Idealer Ausgangspunkt für Karibik-Inselhüpfen.",
    canon: "https://chartertransparenz.de/reviere/karibik/st-martin",
    ogImage: "https://chartertransparenz.de/og/st-martin.jpg"
  },
  {
    path: "/reviere/karibik/st-vincent-grenadinen",
    title: "Yachtcharter St. Vincent & Grenadinen – Tobago Cays entdecken",
    desc: "Segeln in den Grenadinen: Bequia, Mustique, Tobago Cays & Union Island. Karibik pur.",
    canon: "https://chartertransparenz.de/reviere/karibik/st-vincent-grenadinen",
    ogImage: "https://chartertransparenz.de/og/st-vincent-grenadinen.jpg"
  },
  {
    path: "/reviere/karibik/kuba",
    title: "Yachtcharter Kuba – Segeln ab Cienfuegos",
    desc: "Segeln in Kuba: Authentische Karibikkultur, Cienfuegos, Cayo Largo & unberührte Inseln. Charter für erfahrene Segler.",
    canon: "https://chartertransparenz.de/reviere/karibik/kuba",
    ogImage: "https://chartertransparenz.de/og/kuba.jpg"
  },
  {
    path: "/reviere/karibik/leeward-inseln",
    title: "Yachtcharter Leeward Islands – Antigua, St. Martin & Guadeloupe",
    desc: "Segeln in den Leeward Islands: Kulturelle Vielfalt, französisches Flair & perfekte Passatwinde. Antigua, St. Martin, Guadeloupe & St. Barth entdecken.",
    canon: "https://chartertransparenz.de/reviere/karibik/leeward-inseln",
    ogImage: "https://chartertransparenz.de/og/leeward-inseln.jpg"
  },
  {
    path: "/reviere/karibik/windward-inseln",
    title: "Yachtcharter Windward Islands – Martinique, St. Lucia & Grenadinen",
    desc: "Segeln in den Windward Islands: Martinique, St. Lucia, St. Vincent & Tobago Cays. Sportliches Segeln mit Passatwinden. One-Way-Törns ideal.",
    canon: "https://chartertransparenz.de/reviere/karibik/windward-inseln",
    ogImage: "https://chartertransparenz.de/og/windward-inseln.jpg"
  }
];

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inject = (html: string, r: (typeof ROUTES)[number]) => {
  // Remove ALL existing head tags to prevent duplicates
  // NOTE: We do NOT inject Breadcrumb JSON-LD here because it's already 
  // rendered by the <JsonLd> component in the React pages
  let h = html
    // Remove existing title
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    // Remove all meta description tags
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    // Remove all canonical links
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    // Remove all JSON-LD scripts (React will render these)
    .replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    // Remove all OG tags
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "")
    // Remove all Twitter tags
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "");

  // Build new head content (without Breadcrumb JSON-LD)
  const head = [
    `<title>${escapeHtml(r.title)}</title>`,
    `<meta name="description" content="${escapeHtml(r.desc)}">`,
    `<link rel="canonical" href="${escapeHtml(r.canon)}">`,
    `<meta property="og:title" content="${escapeHtml(r.title)}">`,
    `<meta property="og:description" content="${escapeHtml(r.desc)}">`,
    `<meta property="og:url" content="${escapeHtml(r.canon)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="${escapeHtml(r.ogImage)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="${escapeHtml(r.ogImage)}">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Caribbean SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  
  for (const r of ROUTES) {
    const dir = join("dist", r.path);
    mkdirSync(dir, { recursive: true });
    
    const finalHtml = inject(tpl, r);
    writeFileSync(join(dir, "index.html"), finalHtml, "utf8");
    
    console.log(`✓ Wrote: dist${r.path}/index.html`);
  }
  
  console.log("\n✅ SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ SSG prerender failed:", error);
  process.exit(1);
}
