// SSG Postbuild Script für Griechenland-Routen
// Generiert statisches HTML mit SEO-Tags für 6 Griechenland-Seiten
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROUTES = [
  {
    path: "/reviere/mittelmeer/griechenland",
    title: "Yachtcharter Griechenland – Ionisches Meer, Kykladen & mehr",
    desc: "Segeln in Griechenland: Entdecken Sie Ionisches Meer, Kykladen, Sporaden & Dodekanes – ideale Reviere für Ihren Yachtcharter.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"]
    ]
  },
  {
    path: "/reviere/mittelmeer/griechenland/ionisches-meer",
    title: "Yachtcharter Ionisches Meer – Korfu, Lefkas & Kefalonia",
    desc: "Segeln im Ionischen Meer: Entspannte Törns rund um Korfu, Lefkas & Kefalonia. Perfekt für Familien und Einsteiger.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland/ionisches-meer",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"],
      ["Ionisches Meer", "https://chartertransparenz.de/reviere/mittelmeer/griechenland/ionisches-meer"]
    ]
  },
  {
    path: "/reviere/mittelmeer/griechenland/athen-saronischer-golf",
    title: "Yachtcharter Athen & Saronischer Golf – Segeln ab Athen",
    desc: "Segeln ab Athen: Entdecken Sie den Saronischen Golf mit Poros, Hydra & Spetses. Kurze Distanzen & kulturelle Highlights.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland/athen-saronischer-golf",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"],
      ["Athen & Saronischer Golf", "https://chartertransparenz.de/reviere/mittelmeer/griechenland/athen-saronischer-golf"]
    ]
  },
  {
    path: "/reviere/mittelmeer/griechenland/kykladen",
    title: "Yachtcharter Kykladen – Mykonos, Santorini & Paros",
    desc: "Segeln auf den Kykladen: Inselhüpfen zu Mykonos, Santorini & Paros. Kristallklares Wasser & lebendige Hafenorte.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland/kykladen",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"],
      ["Kykladen", "https://chartertransparenz.de/reviere/mittelmeer/griechenland/kykladen"]
    ]
  },
  {
    path: "/reviere/mittelmeer/griechenland/dodekanes",
    title: "Yachtcharter Dodekanes – Rhodos, Kos & Symi",
    desc: "Segeln im Dodekanes: Entdecken Sie Rhodos, Kos & Symi. Sonnenreiche Törns entlang der türkischen Küste.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland/dodekanes",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"],
      ["Dodekanes", "https://chartertransparenz.de/reviere/mittelmeer/griechenland/dodekanes"]
    ]
  },
  {
    path: "/reviere/mittelmeer/griechenland/sporaden",
    title: "Yachtcharter Sporaden – Skiathos, Skopelos & Alonnisos",
    desc: "Segeln auf den Sporaden: Grüne Inseln wie Skiathos, Skopelos & Alonnisos. Natur pur im Ägäischen Meer.",
    canon: "https://chartertransparenz.de/reviere/mittelmeer/griechenland/sporaden",
    breadcrumb: [
      ["Start", "https://chartertransparenz.de"],
      ["Reviere", "https://chartertransparenz.de/reviere"],
      ["Mittelmeer", "https://chartertransparenz.de/reviere/mittelmeer"],
      ["Griechenland", "https://chartertransparenz.de/reviere/mittelmeer/griechenland"],
      ["Sporaden", "https://chartertransparenz.de/reviere/mittelmeer/griechenland/sporaden"]
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
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/ac12d7be-4a6e-4ac7-90b1-6d045810cae8.png">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Greece SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  
  for (const r of ROUTES) {
    const dir = join("dist", r.path);
    mkdirSync(dir, { recursive: true });
    
    const finalHtml = inject(tpl, r);
    writeFileSync(join(dir, "index.html"), finalHtml, "utf8");
    
    console.log(`✓ Wrote: dist${r.path}/index.html`);
  }
  
  console.log("\n✅ Greece SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Greece SSG prerender failed:", error);
  process.exit(1);
}
