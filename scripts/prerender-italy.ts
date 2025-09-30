import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://chartertransparenz.de';
const DIST_DIR = path.join(__dirname, '../dist');

interface PageConfig {
  path: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  ogImage: string;
}

const italyPages: PageConfig[] = [
  {
    path: '/reviere/mittelmeer/italien',
    title: 'Yachtcharter Italien – Sardinien, Elba & Sizilien',
    description: 'Segeln in Italien: Entdecken Sie Sardinien, Elba, Sizilien & Amalfiküste. Yachtcharter mit Vielfalt & mediterranem Flair.',
    ogImage: '/og/italien.jpg',
    breadcrumbs: [
      { name: 'Start', url: '/' },
      { name: 'Reviere', url: '/reviere/alle-reviere' },
      { name: 'Mittelmeer', url: '/reviere/mittelmeer' },
      { name: 'Italien', url: '/reviere/mittelmeer/italien' }
    ]
  },
  {
    path: '/reviere/mittelmeer/italien/sardinien',
    title: 'Yachtcharter Sardinien – Costa Smeralda & Maddalena',
    description: 'Segeln in Sardinien: Exklusive Costa Smeralda & Maddalena-Archipel. Kristallklares Wasser & Luxusmarinas erwarten Sie.',
    ogImage: '/og/sardinien.jpg',
    breadcrumbs: [
      { name: 'Start', url: '/' },
      { name: 'Reviere', url: '/reviere/alle-reviere' },
      { name: 'Mittelmeer', url: '/reviere/mittelmeer' },
      { name: 'Italien', url: '/reviere/mittelmeer/italien' },
      { name: 'Sardinien', url: '/reviere/mittelmeer/italien/sardinien' }
    ]
  },
  {
    path: '/reviere/mittelmeer/italien/toskana-elba',
    title: 'Yachtcharter Toskana & Elba – Segeln im Tyrrhenischen Meer',
    description: 'Entdecken Sie Elba & die toskanische Küste. Yachtcharter mit kurzen Distanzen, Natur & mediterranem Charme.',
    ogImage: '/og/toskana.jpg',
    breadcrumbs: [
      { name: 'Start', url: '/' },
      { name: 'Reviere', url: '/reviere/alle-reviere' },
      { name: 'Mittelmeer', url: '/reviere/mittelmeer' },
      { name: 'Italien', url: '/reviere/mittelmeer/italien' },
      { name: 'Toskana & Elba', url: '/reviere/mittelmeer/italien/toskana-elba' }
    ]
  },
  {
    path: '/reviere/mittelmeer/italien/amalfikueste',
    title: 'Yachtcharter Amalfiküste – Capri, Positano & Neapel',
    description: 'Segeln an der Amalfiküste: Erleben Sie Capri, Positano & Neapel vom Wasser aus. UNESCO-Küste mit mediterranem Flair.',
    ogImage: '/og/amalfikueste.jpg',
    breadcrumbs: [
      { name: 'Start', url: '/' },
      { name: 'Reviere', url: '/reviere/alle-reviere' },
      { name: 'Mittelmeer', url: '/reviere/mittelmeer' },
      { name: 'Italien', url: '/reviere/mittelmeer/italien' },
      { name: 'Amalfiküste', url: '/reviere/mittelmeer/italien/amalfikueste' }
    ]
  },
  {
    path: '/reviere/mittelmeer/italien/sizilien',
    title: 'Yachtcharter Sizilien – Äolische Inseln & Palermo',
    description: 'Segeln in Sizilien: Entdecken Sie die Äolischen Inseln, Palermo & vulkanische Landschaften. Sonne & Kultur pur.',
    ogImage: '/og/sizilien.jpg',
    breadcrumbs: [
      { name: 'Start', url: '/' },
      { name: 'Reviere', url: '/reviere/alle-reviere' },
      { name: 'Mittelmeer', url: '/reviere/mittelmeer' },
      { name: 'Italien', url: '/reviere/mittelmeer/italien' },
      { name: 'Sizilien', url: '/reviere/mittelmeer/italien/sizilien' }
    ]
  }
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateBreadcrumbJsonLd(breadcrumbs: Array<{ name: string; url: string }>): string {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${BASE_URL}${crumb.url}`
  }));

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  }, null, 2);
}

function injectMetaTags(html: string, page: PageConfig): string {
  const canonical = `${BASE_URL}${page.path}`;
  const ogImageUrl = `${BASE_URL}${page.ogImage}`;
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(page.breadcrumbs);

  const metaTags = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${ogImageUrl}" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonical}" />
    <meta property="twitter:title" content="${escapeHtml(page.title)}" />
    <meta property="twitter:description" content="${escapeHtml(page.description)}" />
    <meta property="twitter:image" content="${ogImageUrl}" />
    
    <!-- JSON-LD Breadcrumb -->
    <script type="application/ld+json">
${breadcrumbJsonLd}
    </script>
  `;

  return html.replace('</head>', `${metaTags}\n  </head>`);
}

async function prerenderItalyPages() {
  console.log('🇮🇹 Starting Italy prerendering...');

  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`index.html not found at ${indexHtmlPath}`);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  for (const page of italyPages) {
    const targetDir = path.join(DIST_DIR, page.path.slice(1));
    const targetFile = path.join(targetDir, 'index.html');

    fs.mkdirSync(targetDir, { recursive: true });

    const htmlWithMeta = injectMetaTags(baseHtml, page);
    fs.writeFileSync(targetFile, htmlWithMeta, 'utf-8');

    console.log(`✅ Prerendered: ${page.path}`);
  }

  console.log('🇮🇹 Italy prerendering complete!');
}

prerenderItalyPages().catch((error) => {
  console.error('❌ Italy prerendering failed:', error);
  process.exit(1);
});
