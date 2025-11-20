import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// France route SEO configuration
const ROUTE = {
  path: '/reviere/mittelmeer/frankreich',
  title: 'Yachtcharter Frankreich – Côte d\'Azur & Korsika | Chartertransparenz.de',
  desc: 'Entdecken Sie die französische Mittelmeerküste per Yachtcharter: Von der glamourösen Côte d\'Azur mit Saint-Tropez bis zur wilden Schönheit Korsikas.',
  canon: 'https://chartertransparenz.de/reviere/mittelmeer/frankreich',
  ogImage: 'https://chartertransparenz.de/lovable-uploads/e32df4c1-7d47-469f-8ff7-db2d74c7acc7.png',
  breadcrumb: [
    { position: 1, name: "Start", item: "https://chartertransparenz.de/" },
    { position: 2, name: "Reviere", item: "https://chartertransparenz.de/reviere" },
    { position: 3, name: "Mittelmeer", item: "https://chartertransparenz.de/reviere/mittelmeer" },
    { position: 4, name: "Frankreich", item: "https://chartertransparenz.de/reviere/mittelmeer/frankreich" }
  ]
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function inject(html: string, r: typeof ROUTE): string {
  // Remove existing SEO tags
  let cleaned = html
    .replace(/<title>.*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '')
    .replace(/<meta\s+property="og:title"[^>]*>/i, '')
    .replace(/<meta\s+property="og:description"[^>]*>/i, '')
    .replace(/<meta\s+property="og:url"[^>]*>/i, '')
    .replace(/<meta\s+property="og:image"[^>]*>/i, '')
    .replace(/<meta\s+property="og:type"[^>]*>/i, '')
    .replace(/<meta\s+name="twitter:card"[^>]*>/i, '')
    .replace(/<meta\s+name="twitter:title"[^>]*>/i, '')
    .replace(/<meta\s+name="twitter:description"[^>]*>/i, '')
    .replace(/<meta\s+name="twitter:image"[^>]*>/i, '')
    .replace(/<script\s+type="application\/ld\+json">.*?<\/script>/is, '');

  // Create breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": r.breadcrumb.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };

  // Build new head tags
  const newTags = `
    <title>${escapeHtml(r.title)}</title>
    <meta name="description" content="${escapeHtml(r.desc)}">
    <link rel="canonical" href="${r.canon}">
    <meta property="og:title" content="${escapeHtml(r.title)}">
    <meta property="og:description" content="${escapeHtml(r.desc)}">
    <meta property="og:url" content="${r.canon}">
    <meta property="og:image" content="${r.ogImage}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(r.title)}">
    <meta name="twitter:description" content="${escapeHtml(r.desc)}">
    <meta name="twitter:image" content="${r.ogImage}">
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  `;

  // Inject before </head>
  return cleaned.replace('</head>', `${newTags}\n  </head>`);
}

// Main execution
try {
  console.log('Generating France page...');
  
  const baseHtml = readFileSync('dist/index.html', 'utf-8');
  const finalHtml = inject(baseHtml, ROUTE);
  
  // Write to flat file (as required by current setup)
  writeFileSync('dist/reviere-mittelmeer-frankreich.html', finalHtml);
  
  console.log('✓ France page generated at: dist/reviere-mittelmeer-frankreich.html');
} catch (err) {
  console.error('✗ Failed to generate France page:', err);
  process.exit(1);
}
