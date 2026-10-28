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
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
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
    `<title data-rh="true">${escapeHtml(HOMEPAGE.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<link data-rh="true" rel="canonical" href="${escapeHtml(HOMEPAGE.canon)}">`,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(HOMEPAGE.title)}">`,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(HOMEPAGE.canon)}">`,
    `<meta data-rh="true" property="og:type" content="website">`,
    `<meta data-rh="true" property="og:image" content="https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(HOMEPAGE.title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(HOMEPAGE.desc)}">`,
    `<meta data-rh="true" name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/hero-sailing.jpg">`
  ].join("\n    ");

  // Inject new head content before </head>
  return h.replace("</head>", `    ${head}\n  </head>`);
};

// Main execution
console.log("\n🚀 Starting Homepage SSG prerender...\n");

try {
  const tpl = readFileSync("dist/index.html", "utf8");

  // Neutral SPA fallback for routes without their own HTML (see _redirects).
  // Must not carry homepage title/description/canonical, otherwise every
  // non-prerendered page inherits them.
  const fallback = tpl.replace("</head>", `    <title>CharterTransparenz</title>\n  </head>`);
  writeFileSync("dist/spa-fallback.html", fallback, "utf8");
  console.log("✓ Wrote: dist/spa-fallback.html");

  const finalHtml = inject(tpl);
  writeFileSync("dist/index.html", finalHtml, "utf8");
  
  console.log("✓ Wrote: dist/index.html");
  console.log("\n✅ Homepage SSG prerender completed successfully!\n");
} catch (error) {
  console.error("\n❌ Homepage SSG prerender failed:", error);
  process.exit(1);
}
