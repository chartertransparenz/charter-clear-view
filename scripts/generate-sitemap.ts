// Dynamic Sitemap Generator with Build-Time lastmod
// Generates sitemap.xml with current build timestamp
// Force rebuild: 2025-10-13T19:50:00Z

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

const BUILD_TIME = new Date().toISOString(); // YYYY-MM-DDThh:mm:ssZ

interface SitemapUrl {
  loc: string;
  lastmod: string;
}

const URLS: SitemapUrl[] = [
  // Homepage
  { loc: '/', lastmod: BUILD_TIME },
  
  // Legal Pages
  { loc: '/impressum', lastmod: BUILD_TIME },
  { loc: '/datenschutz', lastmod: BUILD_TIME },
  
  // Service & Hub Pages
  { loc: '/ueber-uns', lastmod: BUILD_TIME },
  { loc: '/faq', lastmod: BUILD_TIME },
  { loc: '/reviere/alle-reviere', lastmod: BUILD_TIME },
  
  // Main Territory Hubs
  { loc: '/reviere/atlantik', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas', lastmod: BUILD_TIME },
  
  // Mediterranean Hub
  { loc: '/reviere/mittelmeer', lastmod: BUILD_TIME },
  
  // Croatia
  { loc: '/reviere/mittelmeer/kroatien', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/istrien', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/kvarner', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/zadar', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dalmatien-split', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dubrovnik', lastmod: BUILD_TIME },
  
  // Greece
  { loc: '/reviere/mittelmeer/griechenland', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/ionisches-meer', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/kykladen', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/dodekanes', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/sporaden', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/athen-saronischer-golf', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/nordgriechenland', lastmod: BUILD_TIME },
  
  // Turkey
  { loc: '/reviere/mittelmeer/tuerkei', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/tuerkische-aegaeis', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/bodrum', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/marmaris', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/goecek-fethiye', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/kas-kalkan', lastmod: BUILD_TIME },
  
  // Italy
  { loc: '/reviere/mittelmeer/italien', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien/costa-smeralda', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/toskana-elba', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/amalfikueste', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sizilien', lastmod: BUILD_TIME },
  
  // Spain
  { loc: '/reviere/mittelmeer/spanien', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/mallorca', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/ibiza', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/menorca', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/costa-brava', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/valencia', lastmod: BUILD_TIME },
  
  // France
  { loc: '/reviere/mittelmeer/frankreich', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/cote-azur', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/korsika', lastmod: BUILD_TIME },
  
  // Other Mediterranean Countries
  { loc: '/reviere/mittelmeer/malta', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/montenegro', lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/slowenien', lastmod: BUILD_TIME },
  
  // Canary Islands
  { loc: '/reviere/atlantik/kanaren', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/gran-canaria', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/teneriffa', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/lanzarote', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/fuerteventura', lastmod: BUILD_TIME },
  
  // Azores
  { loc: '/reviere/atlantik/azoren', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/sao-miguel', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/terceira', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/faial', lastmod: BUILD_TIME },
  
  // French Atlantic Coast
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/biskaya', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie', lastmod: BUILD_TIME },
  
  // Caribbean
  { loc: '/reviere/karibik/bvi', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/usvi', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bahamas', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/antigua', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-martin', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-vincent-grenadinen', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/leeward-inseln', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/windward-inseln', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/kuba', lastmod: BUILD_TIME },
  
  // Caribbean Charter Locations
  { loc: '/reviere/karibik/charter-standorte/tortola', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/st-thomas', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/antigua', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/martinique', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/havanna', lastmod: BUILD_TIME },
  
  // South Pacific
  { loc: '/reviere/suedpazifik/franzoesisch-polynesien', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien/whitsundays', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/neukaledonien', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/fidschi', lastmod: BUILD_TIME },
  
  // South Pacific Charter Locations
  { loc: '/reviere/suedpazifik/charter-standorte/raiatea', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/bora-bora', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/rangiroa', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/noumea', lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/neuseeland', lastmod: BUILD_TIME },
  
  // Indian Ocean - Asian Routes
  { loc: '/reviere/indischer-ozean/asien', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/malaysia', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/langkawi-tioman', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/phuket', lastmod: BUILD_TIME },
  
  // Indian Ocean - Seychelles
  { loc: '/reviere/indischer-ozean/seychellen', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/mahe', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/praslin', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/la-digue', lastmod: BUILD_TIME },
  
  // Indian Ocean - Maldives
  { loc: '/reviere/indischer-ozean/malediven', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/malediven/male', lastmod: BUILD_TIME },
  
  // Northern Europe
  { loc: '/reviere/nord-europa/deutsche-ostsee', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee/charter-standorte', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/belgien', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/holland', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/daenemark', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/schweden', lastmod: BUILD_TIME },
  
  // Americas & Bahamas
  { loc: '/reviere/amerika-bahamas/bahamas', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/nassau', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/georgetown-exumas', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cancun', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cozumel', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/belize', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-west', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-largo', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/newport', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/boston', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/annapolis', lastmod: BUILD_TIME },
  
  // Partner Hub
  { loc: '/yachtcharter-partner', lastmod: BUILD_TIME },
  
  // Individual Partner Pages
  { loc: '/yachtcharter-partner/pitter-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/croatia-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/angelina-yachtcharter', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ncp-mare', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ultra-sailing', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/waypoint', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/istion-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kavas-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/vernicos-yachts', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/athenian-yachts', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/olympic-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/five-seasons-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dalmatia-charter', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dream-yacht', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/navigare-yachting', lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kiriacoulis', lastmod: BUILD_TIME },
];

// Helpers: normalize path, compute priority, load JSON paths
const normalizePath = (p: string): string => {
  let path = p.trim();
  if (!path.startsWith('/')) path = '/' + path;
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  return path;
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
  
  const urlEntries = paths.map(loc => {
    // Only homepage gets <priority>1.0</priority>
    const priorityTag = loc === '/' ? '\n    <priority>1.0</priority>' : '';
    
    return `  <url>
    <loc>https://chartertransparenz.de${loc}</loc>
    <lastmod>${BUILD_TIME}</lastmod>${priorityTag}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- generated by ct-custom-sitemap -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Main execution
console.log('\n🗺️  Generating sitemap.xml...\n');

try {
  const sitemap = generateSitemap();
  writeFileSync(join('dist', 'sitemap.xml'), sitemap, 'utf8');

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
