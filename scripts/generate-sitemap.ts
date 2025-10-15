// Dynamic Sitemap Generator with Build-Time lastmod
// Generates sitemap.xml with current build timestamp
// Force rebuild: 2025-10-13T19:50:00Z

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

const BUILD_TIME = new Date().toISOString(); // YYYY-MM-DDThh:mm:ssZ

interface SitemapUrl {
  loc: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod: string;
}

const URLS: SitemapUrl[] = [
  // Homepage (Priority 1.0)
  { loc: '/', priority: 1.0, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Legal Pages (Priority 0.3)
  { loc: '/impressum', priority: 0.3, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/datenschutz', priority: 0.3, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Service & Hub Pages (Priority 0.8)
  { loc: '/ueber-uns', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/faq', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/alle-reviere', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Main Territory Hubs (Priority 0.8)
  { loc: '/reviere/atlantik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Mediterranean Hub (Priority 0.8)
  { loc: '/reviere/mittelmeer', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Croatia (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/kroatien', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/istrien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/kvarner', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/zadar', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dalmatien-split', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dubrovnik', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Greece (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/griechenland', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/ionisches-meer', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/kykladen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/dodekanes', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/sporaden', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/athen-saronischer-golf', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/nordgriechenland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Turkey (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/tuerkei', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/tuerkische-aegaeis', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/bodrum', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/marmaris', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/goecek-fethiye', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/kas-kalkan', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Italy (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/italien', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien/costa-smeralda', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/toskana-elba', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/amalfikueste', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sizilien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Spain (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/spanien', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/mallorca', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/ibiza', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/menorca', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/costa-brava', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/valencia', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // France (Priority 0.7 for country, 0.6 for regions)
  { loc: '/reviere/mittelmeer/frankreich', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/cote-azur', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/korsika', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Other Mediterranean Countries (Priority 0.7)
  { loc: '/reviere/mittelmeer/malta', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/montenegro', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/slowenien', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Canary Islands (Priority 0.7 for region, 0.6 for islands)
  { loc: '/reviere/atlantik/kanaren', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/gran-canaria', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/teneriffa', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/lanzarote', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/fuerteventura', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Azores (Priority 0.7 for region, 0.6 for islands)
  { loc: '/reviere/atlantik/azoren', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/sao-miguel', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/terceira', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/faial', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // French Atlantic Coast (Priority 0.7 for region, 0.6 for areas)
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste', priority: 0.7, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/biskaya', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Caribbean (Priority 0.6 for all)
  { loc: '/reviere/karibik/bvi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/usvi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bahamas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/antigua', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-martin', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-vincent-grenadinen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/leeward-inseln', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/windward-inseln', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/kuba', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Caribbean Charter Locations (Priority 0.6)
  { loc: '/reviere/karibik/charter-standorte/tortola', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/st-thomas', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/antigua', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/martinique', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/havanna', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // South Pacific (Priority 0.6 for all)
  { loc: '/reviere/suedpazifik/franzoesisch-polynesien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien/whitsundays', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/neukaledonien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/fidschi', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // South Pacific Charter Locations (Priority 0.6)
  { loc: '/reviere/suedpazifik/charter-standorte/raiatea', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/bora-bora', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/rangiroa', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/noumea', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/neuseeland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Indian Ocean - Asian Routes (Priority 0.6)
  { loc: '/reviere/indischer-ozean/asien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/malaysia', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/langkawi-tioman', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/phuket', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Indian Ocean - Seychelles (Priority 0.6)
  { loc: '/reviere/indischer-ozean/seychellen', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/mahe', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/praslin', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/la-digue', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Indian Ocean - Maldives (Priority 0.6)
  { loc: '/reviere/indischer-ozean/malediven', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/malediven/male', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Northern Europe (Priority 0.6)
  { loc: '/reviere/nord-europa/deutsche-ostsee', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee/charter-standorte', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/belgien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/holland', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/daenemark', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/schweden', priority: 0.6, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Americas & Bahamas (Priority 0.6)
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
  
  // Partner Hub (Priority 0.8)
  { loc: '/yachtcharter-partner', priority: 0.8, changefreq: 'weekly', lastmod: BUILD_TIME },
  
  // Individual Partner Pages (Priority 0.6)
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

// Helpers: normalize path, compute priority, load JSON paths
const normalizePath = (p: string): string => {
  let path = p.trim();
  if (!path.startsWith('/')) path = '/' + path;
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  return path;
};

const getPriority = (path: string): number => {
  if (path === '/') return 1.0;
  if (path === '/impressum' || path === '/datenschutz') return 0.3;
  if (['/yachtcharter-partner', '/reviere/alle-reviere', '/faq', '/ueber-uns'].includes(path)) return 0.8;
  if (/^\/reviere\/[^/]+$/.test(path)) return 0.8; // Hubs Ebene 2
  if (/^\/reviere\/[^/]+\/[^/]+$/.test(path)) return 0.7; // Länder-Übersichten
  return 0.6; // Detailseiten
};

const loadPathsFromJson = (): string[] | null => {
  try {
    const jsonPath = join('scripts', 'sitemap-paths.json');
    if (!existsSync(jsonPath)) return null;
    const raw = readFileSync(jsonPath, 'utf8');
    const arr = JSON.parse(raw) as string[];
    return Array.from(new Set(arr.map(normalizePath)));
  } catch {
    return null;
  }
};

function generateSitemap(): string {
  const jsonPaths = loadPathsFromJson();
  const paths = jsonPaths ?? Array.from(new Set(URLS.map(u => normalizePath(u.loc))));
  const urlEntries = paths.map(loc => `  <url>
    <loc>https://chartertransparenz.de${loc}</loc>
    <lastmod>${BUILD_TIME}</lastmod>
    <priority>${getPriority(loc)}</priority>
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
  writeFileSync(join('dist', 'sitemap-v2.xml'), sitemap, 'utf8');

  // Calculate SHA256 hash for verification
  const hash = createHash('sha256').update(sitemap, 'utf8').digest('hex');

  const jsonPaths = loadPathsFromJson();
  const count = (sitemap.match(/<loc>/g) || []).length;
  
  console.log(`✅ Sitemap generated with ${count} URLs${jsonPaths ? ' (from scripts/sitemap-paths.json)' : ' (from fallback list)'}`);
  console.log(`   Build time: ${BUILD_TIME}`);
  console.log(`\n🔐 SHA256 Hash: ${hash}`);
  
  // Log first 10 URL entries for verification
  const urlMatches = sitemap.match(/<url>[\s\S]*?<\/url>/g) || [];
  console.log(`\n📋 First 10 URL entries:\n`);
  urlMatches.slice(0, 10).forEach((entry, idx) => {
    const locMatch = entry.match(/<loc>(.*?)<\/loc>/);
    const priorityMatch = entry.match(/<priority>(.*?)<\/priority>/);
    if (locMatch && priorityMatch) {
      console.log(`${idx + 1}. ${locMatch[1]} (priority: ${priorityMatch[1]})`);
    }
  });
  console.log('');
} catch (error) {
  console.error('\n❌ Sitemap generation failed:', error);
  process.exit(1);
}
