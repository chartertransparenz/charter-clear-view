// SSG Postbuild Script für Homepage
// Generiert statisches HTML mit SEO-Tags für die Root-Seite
import { readFileSync, writeFileSync } from "fs";

const HOMEPAGE = {
  title: "CharterTransparenz – Transparente Yachtcharter-Beratung weltweit",
  desc: "Unabhängige Yachtcharter-Beratung für Mittelmeer, Karibik & Atlantik. Faire Preise, ehrliche Empfehlungen, keine versteckten Kosten. Jetzt anfragen!",
  canon: "https://chartertransparenz.de",
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inject = (html: string) => {
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
    `<title>${escapeHtml(HOMEPAGE.title)}</title>`,
    `<meta name="description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<link rel="canonical" href="${escapeHtml(HOMEPAGE.canon)}">`,
    `<meta property="og:title" content="${escapeHtml(HOMEPAGE.title)}">`,
    `<meta property="og:description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<meta property="og:url" content="${escapeHtml(HOMEPAGE.canon)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(HOMEPAGE.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Homepage SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");
  const finalHtml = inject(tpl);
  writeFileSync("dist/index.html", finalHtml, "utf8");
  
  console.log("✓ Wrote: dist/index.html");
  console.log("\n✅ Homepage SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Homepage SSG prerender failed:", error);
  process.exit(1);
}
