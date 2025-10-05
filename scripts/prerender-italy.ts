// SSG Postbuild Script für Italien-Routen
// Generiert statisches HTML mit SEO-Tags für Italien-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  {
    path: "/reviere/mittelmeer/italien",
    title: "Yachtcharter Italien – Sardinien, Elba & Sizilien",
    desc: "Segeln in Italien: Entdecken Sie Sardinien, Elba, Sizilien & Amalfiküste. Yachtcharter mit Vielfalt & mediterranem Flair.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/italien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Italien", "https://chartertransparenz.de/reviere/mittelmeer/italien"]
    ]
  },
  {
    path: "/reviere/mittelmeer/italien/sardinien",
    title: "Yachtcharter Sardinien – Costa Smeralda & Maddalena",
    desc: "Segeln in Sardinien: Exklusive Costa Smeralda & Maddalena-Archipel. Kristallklares Wasser & Luxusmarinas erwarten Sie.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Italien", "https://chartertransparenz.de/reviere/mittelmeer/italien"],
      ["Sardinien", "https://chartertransparenz.de/reviere/mittelmeer/italien/sardinien"]
    ]
  },
  {
    path: "/reviere/mittelmeer/italien/toskana-elba",
    title: "Yachtcharter Toskana & Elba – Segeln im Tyrrhenischen Meer",
    desc: "Entdecken Sie Elba & die toskanische Küste. Yachtcharter mit kurzen Distanzen, Natur & mediterranem Charme.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana-elba",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Italien", "https://chartertransparenz.de/reviere/mittelmeer/italien"],
      ["Toskana & Elba", "https://chartertransparenz.de/reviere/mittelmeer/italien/toskana-elba"]
    ]
  },
  {
    path: "/reviere/mittelmeer/italien/amalfikueste",
    title: "Yachtcharter Amalfiküste – Capri, Positano & Neapel",
    desc: "Segeln an der Amalfiküste: Erleben Sie Capri, Positano & Neapel vom Wasser aus. UNESCO-Küste mit mediterranem Flair.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Italien", "https://chartertransparenz.de/reviere/mittelmeer/italien"],
      ["Amalfiküste", "https://chartertransparenz.de/reviere/mittelmeer/italien/amalfikueste"]
    ]
  },
  {
    path: "/reviere/mittelmeer/italien/sizilien",
    title: "Yachtcharter Sizilien – Äolische Inseln & Palermo",
    desc: "Segeln in Sizilien: Entdecken Sie die Äolischen Inseln, Palermo & vulkanische Landschaften. Sonne & Kultur pur.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Italien", "https://chartertransparenz.de/reviere/mittelmeer/italien"],
      ["Sizilien", "https://chartertransparenz.de/reviere/mittelmeer/italien/sizilien"]
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

  // Build breadcrumb JSON-LD with WebPage structure
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: r.breadcrumb.map(([name, url], i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebPage",
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
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/italy-sailing.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/italy-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Italy SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  
  for (const r of ROUTES) {
    const dir = join("dist", r.path);
    mkdirSync(dir, { recursive: true });
    
    const finalHtml = inject(tpl, r);
    writeFileSync(join(dir, "index.html"), finalHtml, "utf8");
    
    console.log(`✓ Wrote: dist${r.path}/index.html`);
  }
  
  console.log("\n✅ Italy SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Italy SSG prerender failed:", error);
  process.exit(1);
}
