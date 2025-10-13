// SSG Postbuild Script für Partner-Seiten
// Generiert statisches HTML mit SEO-Tags für 17 Partner-Seiten (Hub + 16 Partner)
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { PARTNERS_META } from "../src/seo/partners-meta.config";

interface Route {
  path: string;
  slug?: string;
  title: string;
  desc: string;
  canon: string;
  image: string;
}

const ROUTES: Route[] = [
  // Hub page
  {
    path: "/yachtcharter-partner",
    title: "Yachtcharter-Partner | Geprüfte Charter-Anbieter weltweit",
    desc: "Unsere geprüften Yachtcharter-Partner in Kroatien, Griechenland & weltweit. Moderne Flotten, transparente Preise, persönlicher Service. Jetzt vergleichen!",
    canon: "https://chartertransparenz.de/yachtcharter-partner",
    image: "https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg"
  },
  // Individual partner pages
  ...Object.entries(PARTNERS_META).map(([slug, meta]) => ({
    path: `/yachtcharter-partner/${slug}`,
    slug,
    ...meta
  }))
];

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inject = (html: string, r: Route) => {
  // Remove ALL existing head tags to prevent duplicates
  let h = html
    // Remove existing title
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    // Remove all meta description tags
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    // Remove all canonical links
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    // Remove all OG tags
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, "")
    // Remove all Twitter tags
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, "");

  // Build new head content
  const head = [
    `<title>${escapeHtml(r.title)}</title>`,
    `<meta name="description" content="${escapeHtml(r.desc)}">`,
    `<link rel="canonical" href="${escapeHtml(r.canon)}">`,
    `<meta property="og:title" content="${escapeHtml(r.title)}">`,
    `<meta property="og:description" content="${escapeHtml(r.desc)}">`,
    `<meta property="og:url" content="${escapeHtml(r.canon)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="${escapeHtml(r.image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(r.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(r.desc)}">`,
    `<meta name="twitter:image" content="${escapeHtml(r.image)}">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Partner Pages SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  let totalWritten = 0;

  for (const r of ROUTES) {
    const finalHtml = inject(tpl, r);
    
    // Determine output path
    let outPath: string;
    if (r.path === "/yachtcharter-partner") {
      // Hub page: /yachtcharter-partner/index.html
      outPath = join("dist", "yachtcharter-partner", "index.html");
    } else {
      // Individual pages: /yachtcharter-partner/[slug]/index.html
      outPath = join("dist", r.path, "index.html");
    }

    // Create directory if it doesn't exist
    mkdirSync(join(outPath, ".."), { recursive: true });
    
    // Write file
    writeFileSync(outPath, finalHtml, "utf8");
    console.log(`✓ Wrote: ${outPath}`);
    totalWritten++;
  }

  console.log(`\n✅ Partner Pages SSG prerender completed successfully!`);
  console.log(`   Total pages: ${totalWritten} (1 hub + 16 partners)\n`);
} catch (error) {
  console.error("\n❌ Partner Pages SSG prerender failed:", error);
  process.exit(1);
}
