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
  { loc: '/ueber-uns', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/faq', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/impressum', priority: 0.3, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/datenschutz', priority: 0.3, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // All Reviere Hub
  { loc: '/reviere/alle-reviere', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Croatia Routes
  { loc: '/reviere/mittelmeer/kroatien', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/istrien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/kvarner', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/zadar', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dalmatien-split', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dubrovnik', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Greece Routes
  { loc: '/reviere/mittelmeer/griechenland', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/ionisches-meer', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/kykladen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/dodekanes', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/sporaden', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/athen-saronischer-golf', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/nordgriechenland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Turkey Routes
  { loc: '/reviere/mittelmeer/tuerkei', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/tuerkische-aegaeis', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/bodrum', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/marmaris', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/goecek-fethiye', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/kas-kalkan', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Italy Routes
  { loc: '/reviere/mittelmeer/italien', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien/costa-smeralda', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/toskana-elba', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/amalfikueste', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sizilien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Spain Routes
  { loc: '/reviere/mittelmeer/spanien', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/mallorca', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/ibiza', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/menorca', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/costa-brava', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/valencia', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // France Routes
  { loc: '/reviere/mittelmeer/frankreich', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/cote-azur', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/korsika', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Other Mediterranean
  { loc: '/reviere/mittelmeer/malta', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/montenegro', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/slowenien', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Atlantic Hub
  { loc: '/reviere/atlantik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Canary Islands
  { loc: '/reviere/atlantik/kanaren', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/gran-canaria', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/teneriffa', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/lanzarote', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/fuerteventura', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Azores
  { loc: '/reviere/atlantik/azoren', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/sao-miguel', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/terceira', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/faial', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // French Atlantic Coast
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/biskaya', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Caribbean Hub
  { loc: '/reviere/karibik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bvi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/usvi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bahamas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/antigua', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-martin', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-vincent-grenadinen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/leeward-inseln', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/windward-inseln', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/kuba', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Caribbean Charter Locations
  { loc: '/reviere/karibik/charter-standorte/tortola', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/st-thomas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/antigua', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/martinique', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/havanna', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // South Pacific Hub
  { loc: '/reviere/suedpazifik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/franzoesisch-polynesien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien/whitsundays', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/neukaledonien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/fidschi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // South Pacific Charter Locations
  { loc: '/reviere/suedpazifik/charter-standorte/raiatea', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/bora-bora', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/rangiroa', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/noumea', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/neuseeland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Indian Ocean Hub
  { loc: '/reviere/indischer-ozean', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Asian Routes
  { loc: '/reviere/indischer-ozean/asien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/malaysia', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/langkawi-tioman', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/phuket', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Seychelles
  { loc: '/reviere/indischer-ozean/seychellen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/mahe', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/praslin', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/la-digue', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Maldives
  { loc: '/reviere/indischer-ozean/malediven', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/malediven/male', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Northern Europe Hub
  { loc: '/reviere/nord-europa', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee/charter-standorte', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/belgien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/holland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/daenemark', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/schweden', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Americas & Bahamas Hub
  { loc: '/reviere/amerika-bahamas', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/nassau', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/georgetown-exumas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cancun', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cozumel', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/belize', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-west', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-largo', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/newport', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/boston', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/annapolis', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Partner Pages
  { loc: '/yachtcharter-partner', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/pitter-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/croatia-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/angelina-yachtcharter', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ncp-mare', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ultra-sailing', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/waypoint', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/istion-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kavas-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/vernicos-yachts', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/athenian-yachts', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/olympic-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/five-seasons-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dalmatia-charter', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dream-yacht', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/navigare-yachting', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kiriacoulis', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
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
