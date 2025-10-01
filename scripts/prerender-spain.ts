// SSG Postbuild Script für Spanien-Routen
// Generiert statisches HTML mit SEO-Tags für Spanien & Kanaren-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  // Spain Mediterranean routes
  {
    path: "/reviere/mittelmeer/spanien",
    title: "Yachtcharter Spanien | Balearen, Costa Brava, Valencia",
    desc: "Segeln Spanien: sonnige Balearen, Costa Brava & Valencia. Traumhafte Buchten, lebendige Häfen & spanische Kultur. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/balearen",
    title: "Yachtcharter Balearen – Mallorca, Ibiza & Menorca",
    desc: "Segeln auf den Balearen: Entdecken Sie Mallorca, Ibiza & Menorca. Inselhüpfen mit Traumstränden & mediterranem Flair.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Balearen", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/balearen/mallorca",
    title: "Yachtcharter Mallorca – Segeln ab Palma & Port d'Andratx",
    desc: "Mallorca per Yacht entdecken: Palma, Andratx & Cala d'Or. Buchten, Küstenvielfalt & mediterranes Lebensgefühl.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/mallorca",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Balearen", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"],
      ["Mallorca", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/mallorca"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/balearen/ibiza",
    title: "Yachtcharter Ibiza – Inselhüpfen mit Formentera",
    desc: "Ibiza & Formentera: Segeln, Nachtleben & glasklares Wasser. Entspannung & Party im perfekten Mix.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/ibiza",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Balearen", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"],
      ["Ibiza", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/ibiza"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/balearen/menorca",
    title: "Yachtcharter Menorca – Mahón, Ciutadella & Naturbuchten",
    desc: "Segeln auf Menorca: Ruhiger & familiärer als Mallorca & Ibiza. Entdecken Sie Mahón, Ciutadella & unberührte Naturbuchten.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/menorca",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Balearen", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen"],
      ["Menorca", "https://chartertransparenz.de/reviere/mittelmeer/spanien/balearen/menorca"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/costa-brava",
    title: "Yachtcharter Costa Brava | Barcelona, Girona, Roses – Katalanische Küste",
    desc: "Segeln Costa Brava: wilde Küste, versteckte Buchten & katalanische Kultur. Von Barcelona zu den Traumstränden der Costa Brava. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/costa-brava",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Costa Brava", "https://chartertransparenz.de/reviere/mittelmeer/spanien/costa-brava"]
    ]
  },
  {
    path: "/reviere/mittelmeer/spanien/valencia",
    title: "Yachtcharter Valencia | Valencia, Alicante, Castellón – Levante",
    desc: "Segeln Valencia: moderne Marinas, goldene Strände & valencianische Kultur. Von der Stadt der Künste zu den Stränden der Levante. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/spanien/valencia",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Spanien", "https://chartertransparenz.de/reviere/mittelmeer/spanien"],
      ["Valencia", "https://chartertransparenz.de/reviere/mittelmeer/spanien/valencia"]
    ]
  },
  
  // Canary Islands Atlantic routes
  {
    path: "/reviere/atlantik/kanaren",
    title: "Yachtcharter Kanaren – Teneriffa, Gran Canaria & Lanzarote",
    desc: "Segeln auf den Kanaren: Ganzjährig Sonne & Passatwinde. Entdecken Sie Teneriffa, Gran Canaria & Lanzarote per Yacht.",
    canon: "https://chartertransparenz.de/reviere/atlantik/kanaren",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Atlantik", "https://chartertransparenz.de/reviere/atlantik"],
      ["Kanaren", "https://chartertransparenz.de/reviere/atlantik/kanaren"]
    ]
  },
  {
    path: "/reviere/atlantik/kanaren/gran-canaria",
    title: "Yachtcharter Gran Canaria | Las Palmas, Puerto Rico – Kanarische Inseln",
    desc: "Segeln Gran Canaria: Ganzjährig perfektes Wetter, moderne Marinas & vielfältige Küsten. Von Las Palmas durch die goldenen Dünen. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/atlantik/kanaren/gran-canaria",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Atlantik", "https://chartertransparenz.de/reviere/atlantik"],
      ["Kanaren", "https://chartertransparenz.de/reviere/atlantik/kanaren"],
      ["Gran Canaria", "https://chartertransparenz.de/reviere/atlantik/kanaren/gran-canaria"]
    ]
  },
  {
    path: "/reviere/atlantik/kanaren/teneriffa",
    title: "Yachtcharter Teneriffa | Santa Cruz, Los Cristianos – Vulkaninsel",
    desc: "Segeln Teneriffa: majestätischer Teide, schwarze Sandstrände & ganzjähriges Segelwetter. Von Santa Cruz entlang der Vulkanküste. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/atlantik/kanaren/teneriffa",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Atlantik", "https://chartertransparenz.de/reviere/atlantik"],
      ["Kanaren", "https://chartertransparenz.de/reviere/atlantik/kanaren"],
      ["Teneriffa", "https://chartertransparenz.de/reviere/atlantik/kanaren/teneriffa"]
    ]
  },
  {
    path: "/reviere/atlantik/kanaren/lanzarote",
    title: "Yachtcharter Lanzarote | Arrecife, Marina Rubicón – Feuerinsel",
    desc: "Segeln Lanzarote: Vulkanlandschaften, César Manrique Kunst & ganzjährig ideale Bedingungen. Von Arrecife durch die Feuerinsel. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/atlantik/kanaren/lanzarote",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Atlantik", "https://chartertransparenz.de/reviere/atlantik"],
      ["Kanaren", "https://chartertransparenz.de/reviere/atlantik/kanaren"],
      ["Lanzarote", "https://chartertransparenz.de/reviere/atlantik/kanaren/lanzarote"]
    ]
  },
  {
    path: "/reviere/atlantik/kanaren/fuerteventura",
    title: "Yachtcharter Fuerteventura | Corralejo, Morro Jable – Strandparadies",
    desc: "Segeln Fuerteventura: endlose Strände, türkisblaues Wasser & konstante Passatwinde. Von Corralejo durch das Strandparadies. Jetzt anfragen!",
    canon: "https://chartertransparenz.de/reviere/atlantik/kanaren/fuerteventura",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/#reviere"],
      ["Atlantik", "https://chartertransparenz.de/reviere/atlantik"],
      ["Kanaren", "https://chartertransparenz.de/reviere/atlantik/kanaren"],
      ["Fuerteventura", "https://chartertransparenz.de/reviere/atlantik/kanaren/fuerteventura"]
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
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/spain-sailing.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/spain-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Spain & Canary Islands SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  
  for (const r of ROUTES) {
    const dir = join("dist", r.path);
    mkdirSync(dir, { recursive: true });
    
    const finalHtml = inject(tpl, r);
    writeFileSync(join(dir, "index.html"), finalHtml, "utf8");
    
    console.log(`✓ Wrote: dist${r.path}/index.html`);
  }
  
  console.log("\n✅ Spain & Canary Islands SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Spain & Canary Islands SSG prerender failed:", error);
  process.exit(1);
}
