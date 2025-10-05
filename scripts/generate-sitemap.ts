// Dynamic Sitemap Generator with Build-Time lastmod
// Generates sitemap.xml with current build timestamp

import { writeFileSync } from 'fs';
import { join } from 'path';

const BUILD_TIME = new Date().toISOString(); // YYYY-MM-DDThh:mm:ssZ

interface SitemapUrl {
  loc: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod: string;
}

const URLS: SitemapUrl[] = [
  // Homepage & Main Pages
  { loc: '/', priority: 1.0, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/about', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/faq', priority: 0.7, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Croatia Routes
  { loc: '/reviere/mittelmeer/kroatien', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/istrien', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/kvarner', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/zadar', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dalmatien-split', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dubrovnik', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Greece Routes
  { loc: '/reviere/mittelmeer/griechenland', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/ionisches-meer', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/kykladen', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/dodekanes', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/sporaden', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/athen-saronischer-golf', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Turkey Routes
  { loc: '/reviere/mittelmeer/tuerkei', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/bodrum', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/marmaris', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/goecek-fethiye', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/kas-kalkan', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Italy Routes
  { loc: '/reviere/mittelmeer/italien', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/toskana-elba', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/amalfikueste', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sizilien', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Spain Routes
  { loc: '/reviere/mittelmeer/spanien', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/mallorca', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/ibiza', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/menorca', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/costa-brava', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/valencia', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Canary Islands
  { loc: '/reviere/atlantik/kanaren', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/gran-canaria', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/teneriffa', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/lanzarote', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/fuerteventura', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  
  // Caribbean Routes
  { loc: '/reviere/karibik', priority: 0.9, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bvi', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/usvi', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bahamas', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/antigua', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-martin', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-vincent-grenadinen', priority: 0.8, changefreq: 'monthly', lastmod: BUILD_TIME },
];

function generateSitemap(): string {
  const urlEntries = URLS.map(url => `  <url>
    <loc>https://chartertransparenz.de${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Main execution
console.log('\n🗺️  Generating sitemap.xml...\n');

try {
  const sitemap = generateSitemap();
  writeFileSync(join('dist', 'sitemap.xml'), sitemap, 'utf8');
  
  console.log(`✅ Sitemap generated with ${URLS.length} URLs`);
  console.log(`   Build time: ${BUILD_TIME}\n`);
} catch (error) {
  console.error('\n❌ Sitemap generation failed:', error);
  process.exit(1);
}
