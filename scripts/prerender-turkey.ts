// SSG Postbuild Script für Türkei-Routen
// Generiert statisches HTML mit SEO-Tags für Türkei-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  {
    path: "/reviere/mittelmeer/tuerkei",
    title: "Yachtcharter Türkei – Bodrum, Marmaris, Göcek & Kaş",
    desc: "Segeln Türkei: türkisblaue Buchten, antike Stätten & herzliche Gastfreundschaft. Bodrum, Marmaris, Göcek/Fethiye & Kaş/Kalkan. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/tuerkei",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Türkei", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"]
    ]
  },
  {
    path: "/reviere/mittelmeer/tuerkei/bodrum",
    title: "Yachtcharter Bodrum | Bodrum-Halbinsel & Gökova-Bucht – Türkei",
    desc: "Segeln Bodrum: antike Städte, türkisblaue Buchten & moderne Marinas. Von der Johanniterfestung durch die Gökova-Bucht. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Türkei", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"],
      ["Bodrum", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum"]
    ]
  },
  {
    path: "/reviere/mittelmeer/tuerkei/marmaris",
    title: "Yachtcharter Marmaris | Marmaris, Datça & Bozburun – Türkei",
    desc: "Segeln Marmaris: geschützte Buchten, lebendige Marina & authentische Fischerdörfer. Von Marmaris durch die Halbinsel Datça & Bozburun. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Türkei", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"],
      ["Marmaris", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris"]
    ]
  },
  {
    path: "/reviere/mittelmeer/tuerkei/goecek-fethiye",
    title: "Yachtcharter Göcek | Göcek, Fethiye & 12 Inseln – Türkei",
    desc: "Segeln Göcek & Fethiye: versteckte Buchten, lykische Küste & die berühmten 12 Inseln. Paradies für Segler in der Türkei. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/goecek-fethiye",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Türkei", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"],
      ["Göcek & Fethiye", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/goecek-fethiye"]
    ]
  },
  {
    path: "/reviere/mittelmeer/tuerkei/kas-kalkan",
    title: "Yachtcharter Kaş | Kaş, Kalkan & Kekova – Lykische Küste",
    desc: "Segeln Kaş & Kalkan: antike lykische Städte, versunkene Ruinen von Kekova & kristallklares Wasser. Abenteuer an der Türkischen Riviera. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Türkei", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei"],
      ["Kaş & Kalkan", "https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan"]
    ]
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
  let h = html
    // Remove existing title
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    // Remove all meta description tags
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    // Remove all canonical links
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    // Remove all JSON-LD scripts
    .replace(/<script[^>]+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    // Remove all OG tags
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "")
    // Remove all Twitter tags
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "");

  // Build breadcrumb JSON-LD
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: r.breadcrumb.map(([name, url], i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@id": url,
        name: name
      }
    }))
  };

  // Build new head content
  const head = [
    `<title>${escapeHtml(r.title)}</title>`,
    `<meta name="description" content="${escapeHtml(r.desc)}">`,
    `<link rel="canonical" href="${escapeHtml(r.canon)}">`,
    `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>`,
    `<meta property="og:title" content="${escapeHtml(r.title)}">`,
    `<meta property="og:description" content="${escapeHtml(r.desc)}">`,
    `<meta property="og:url" content="${escapeHtml(r.canon)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/turkey-sailing.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/turkey-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Turkey SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  
  for (const r of ROUTES) {
    const dir = join("dist", r.path);
    mkdirSync(dir, { recursive: true });
    
    const finalHtml = inject(tpl, r);
    writeFileSync(join(dir, "index.html"), finalHtml, "utf8");
    
    console.log(`✓ Wrote: dist${r.path}/index.html`);
  }
  
  console.log("\n✅ Turkey SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Turkey SSG prerender failed:", error);
  process.exit(1);
}
