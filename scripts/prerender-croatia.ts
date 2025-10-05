// SSG Postbuild Script für Kroatien-Routen
// Generiert statisches HTML mit SEO-Tags für 6 Kroatien-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  {
    path: "/reviere/mittelmeer/kroatien",
    title: "Yachtcharter Kroatien | Segeln Adria – Split, Dubrovnik, Hvar",
    desc: "Segeln in Kroatien: 1.200+ Inseln, kurze Distanzen & klares Wasser. Ab Split, Dubrovnik, Hvar. Jetzt Segelyacht oder Katamaran anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"]
    ]
  },
  {
    path: "/reviere/mittelmeer/kroatien/istrien",
    title: "Yachtcharter Kroatien – Istrien & Kvarner Bucht",
    desc: "Rovinj, Pula & Kvarner. Ruhige Törns, schöne Altstädte & Buchten. Jetzt Istrien-Charter mit/ohne Skipper anfragen.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien/istrien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"],
      ["Istrien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien/istrien"]
    ]
  },
  {
    path: "/reviere/mittelmeer/kroatien/kvarner",
    title: "Yachtcharter Kroatien – Kvarner & Krk",
    desc: "Inselwelt der Kvarner Bucht: Krk, Cres & Lošinj. Gute Marinas, kurze Etappen. Jetzt Yacht im Kvarner buchen.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"],
      ["Kvarner & Krk", "https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner"]
    ]
  },
  {
    path: "/reviere/mittelmeer/kroatien/zadar",
    title: "Yachtcharter Kroatien – Zadar & Norddalmatien",
    desc: "Dugi Otok, Ugljan & Pag. Kurze Distanzen, viele Buchten. Jetzt Yacht ab Zadar vergleichen & buchen.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"],
      ["Zadar", "https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar"]
    ]
  },
  {
    path: "/reviere/mittelmeer/kroatien/dalmatien-split",
    title: "Yachtcharter Kroatien – Dalmatien ab Split",
    desc: "Hvar, Vis & Brač auf kurzen Etappen. Geprüfte Flotten, mit/ohne Skipper. Jetzt Yachtcharter in Dalmatien (ab Split) anfragen.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"],
      ["Dalmatien (Split)", "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split"]
    ]
  },
  {
    path: "/reviere/mittelmeer/kroatien/dubrovnik",
    title: "Yachtcharter Dubrovnik – Süddalmatien, Mljet & Elaphiten",
    desc: "Segeln ab Dubrovnik: Süddalmatien mit Elaphiten & Nationalpark Mljet. UNESCO-Altstadt, ruhige Buchten, Inselhüpfen bis Korčula & Lastovo.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Kroatien", "https://chartertransparenz.de/reviere/mittelmeer/kroatien"],
      ["Dubrovnik", "https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik"]
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
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/croatia-sailing.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/croatia-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Croatia SSG prerender...\n");

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
