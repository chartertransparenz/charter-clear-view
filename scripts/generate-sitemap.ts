// Dynamic Sitemap Generator with Build-Time lastmod
// Generates sitemap.xml with current build timestamp
// Writes to: public/sitemap.xml (always) + dist/sitemap.xml (when dist/ exists after vite build)

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

const BUILD_TIME = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

interface SitemapUrl {
  loc: string;
  lastmod: string;
}

const URLS: SitemapUrl[] = [
  // ── Core pages ──────────────────────────────────────────────────────────
  { loc: '/',                 lastmod: BUILD_TIME },
  { loc: '/ueber-uns',        lastmod: BUILD_TIME },
  { loc: '/faq',              lastmod: BUILD_TIME },
  { loc: '/charter-anfrage',  lastmod: BUILD_TIME },

  // ── Legal ────────────────────────────────────────────────────────────────
  { loc: '/impressum',   lastmod: BUILD_TIME },
  { loc: '/datenschutz', lastmod: BUILD_TIME },

  // ── Blog ─────────────────────────────────────────────────────────────────
  { loc: '/blog', lastmod: BUILD_TIME },
  // Blog posts – use publication date for accurate lastmod
  { loc: '/blog/autopilot-yachtcharter-ausguckpflicht-kvr-5',    lastmod: '2026-08-21' },
  { loc: '/blog/kroatien-yachtcharter-sicherheitsregeln',        lastmod: '2026-07-17' },
  { loc: '/blog/egadi-inseln-yachtcharter-permit-bojen-ankern',  lastmod: '2026-06-09' },
  { loc: '/blog/cabrera-yachtcharter-permit-bojen',              lastmod: '2026-06-03' },
  { loc: '/blog/digitale-maut-kroatien-2027',                   lastmod: '2026-05-21' },
  { loc: '/blog/richtig-ankern-yachtcharter',                   lastmod: '2026-05-05' },
  { loc: '/blog/yachtcharter-griechenland-welches-revier-passt', lastmod: '2026-04-28' },
  { loc: '/blog/neue-ankerregeln-kroatien-2026-70-meter-zone', lastmod: '2026-04-27' },
  { loc: '/blog/kroatien-einsteiger',     lastmod: '2025-04-10' },
  { loc: '/blog/bareboat-oder-skipper',   lastmod: '2025-03-28' },
  { loc: '/blog/was-kostet-ein-yachtcharter', lastmod: '2025-03-15' },

  // ── News ─────────────────────────────────────────────────────────────────
  { loc: '/news', lastmod: BUILD_TIME },
  // News detail pages
  { loc: '/news/kroatien-hafenfeuer-kastela-bakarac-2026',               lastmod: '2026-09-04' },
  { loc: '/news/spanien-fuehrerscheinpflicht-mietboote-2026',            lastmod: '2026-09-04' },
  { loc: '/news/kroatien-waldbraende-loeschflugzeuge-chartercrews-2026', lastmod: '2026-08-21' },
  { loc: '/news/kroatien-vinisce-ankergebuehren-2026',                 lastmod: '2026-08-07' },
  { loc: '/news/zakynthos-navagio-beach-sperrung-2026',               lastmod: '2026-07-17' },
  { loc: '/news/montenegro-plava-spilja-motorbootverbot-2026',        lastmod: '2026-07-17' },
  { loc: '/news/mykonos-yacht-liegeplatz-online-reservierung-2026',   lastmod: '2026-07-17' },
  { loc: '/news/kroatien-peljesac-bruecke-sanierung-dubrovnik-2026', lastmod: '2026-07-10' },
  { loc: '/news/sardinien-la-maddalena-nachtankerverbot-2026',    lastmod: BUILD_TIME },
  { loc: '/news/ees-italien-non-eu-crew-update-2026',             lastmod: BUILD_TIME },
  { loc: '/news/etias-reisegenehmigung-eu-2026',                  lastmod: BUILD_TIME },
  { loc: '/news/bahamas-cruising-permits-2026',                   lastmod: BUILD_TIME },
  { loc: '/news/kroatien-ankern-abstaende-kontrollen-2026',       lastmod: BUILD_TIME },
  { loc: '/news/neue-eu-grenzregeln-non-eu-crew-yachtcharter',    lastmod: BUILD_TIME },
  { loc: '/news/montenegro-duty-free-diesel-ohne-mindestaufenthalt', lastmod: BUILD_TIME },
  { loc: '/news/tuerkei-goecek-bojenfelder-2026',                 lastmod: BUILD_TIME },
  { loc: '/news/sardinien-la-maddalena-sperrzone-kampfmittelfund-2026', lastmod: '2026-06-26' },
  { loc: '/news/kroatien-privlaka-kanal-losinj-bruecke-gesperrt-2026', lastmod: '2026-06-19' },
  { loc: '/news/kroatien-marina-preise-liegeplaetze-2026',             lastmod: '2026-06-12' },
  { loc: '/news/poros-ankern-festmachen-hafenbereich-2026',            lastmod: '2026-06-03' },
  { loc: '/news/balearen-posidonia-bojenfelder-buchungsstart-2026',   lastmod: '2026-06-12' },
  { loc: '/news/kroatien-kraftstoffpreise-charter-2026',              lastmod: '2026-08-28' },
  { loc: '/news/griechenland-anreise-ryanair-kerosin-2026',           lastmod: '2026-06-19' },
  { loc: '/news/treibstoffkrise-sommerfluege-2026-yachtcharter',     lastmod: '2026-05-15' },
  { loc: '/news/ees-update-griechenland-italien-portugal-2026',      lastmod: '2026-05-08' },
  { loc: '/news/griechenland-meeresschutz-buchten-ankern-2026',      lastmod: '2026-05-04' },
  { loc: '/news/kroatien-anreise-swiss-rijeka-2026',                 lastmod: '2026-05-04' },
  { loc: '/news/sardinien-capo-spartivento-meeresschutzgebiet-2026', lastmod: '2026-04-29' },
  { loc: '/news/bvi-charter-gebuehren-reform-fair-waters-2026',      lastmod: '2026-04-29' },

  // ── Reviere hub ──────────────────────────────────────────────────────────
  { loc: '/reviere/alle-reviere', lastmod: BUILD_TIME },

  // ── Mediterranean hub ─────────────────────────────────────────────────────
  { loc: '/reviere/mittelmeer', lastmod: BUILD_TIME },

  // Croatia
  { loc: '/reviere/mittelmeer/kroatien',                   lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/istrien',           lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/kvarner',           lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/zadar',             lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dalmatien-split',   lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/kroatien/dubrovnik',         lastmod: BUILD_TIME },

  // Greece
  { loc: '/reviere/mittelmeer/griechenland',                            lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/ionisches-meer',             lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/kykladen',                   lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/dodekanes',                  lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/sporaden',                   lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/athen-saronischer-golf',     lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/griechenland/nordgriechenland',           lastmod: BUILD_TIME },

  // Turkey
  { loc: '/reviere/mittelmeer/tuerkei',                         lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/tuerkische-aegaeis',      lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/bodrum',                  lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/marmaris',                lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/goecek-fethiye',          lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/tuerkei/kas-kalkan',              lastmod: BUILD_TIME },

  // Italy
  { loc: '/reviere/mittelmeer/italien',                             lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien',                   lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sardinien/costa-smeralda',    lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/toskana-elba',                lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/amalfikueste',                lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/italien/sizilien',                    lastmod: BUILD_TIME },

  // Spain
  { loc: '/reviere/mittelmeer/spanien',                       lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen',              lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/mallorca',     lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/ibiza',        lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/balearen/menorca',      lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/costa-brava',           lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/spanien/valencia',              lastmod: BUILD_TIME },

  // France
  { loc: '/reviere/mittelmeer/frankreich',            lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/cote-azur',  lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/frankreich/korsika',    lastmod: BUILD_TIME },

  // Other Mediterranean
  { loc: '/reviere/mittelmeer/malta',       lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/montenegro',  lastmod: BUILD_TIME },
  { loc: '/reviere/mittelmeer/slowenien',   lastmod: BUILD_TIME },

  // ── Atlantic ──────────────────────────────────────────────────────────────
  { loc: '/reviere/atlantik', lastmod: BUILD_TIME },

  // Canary Islands
  { loc: '/reviere/atlantik/kanaren',              lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/gran-canaria', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/teneriffa',    lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/lanzarote',    lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/kanaren/fuerteventura', lastmod: BUILD_TIME },

  // Azores
  { loc: '/reviere/atlantik/azoren',           lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/sao-miguel', lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/terceira',  lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/azoren/faial',     lastmod: BUILD_TIME },

  // French Atlantic
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste',                    lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/biskaya',            lastmod: BUILD_TIME },
  { loc: '/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie', lastmod: BUILD_TIME },

  // ── Caribbean ─────────────────────────────────────────────────────────────
  { loc: '/reviere/karibik',                       lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bvi',                   lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/usvi',                  lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/bahamas',               lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/antigua',               lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-martin',             lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/st-vincent-grenadinen', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/leeward-inseln',        lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/windward-inseln',       lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/kuba',                  lastmod: BUILD_TIME },
  // Caribbean charter locations
  { loc: '/reviere/karibik/charter-standorte/tortola',   lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/st-thomas', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/antigua',   lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/martinique', lastmod: BUILD_TIME },
  { loc: '/reviere/karibik/charter-standorte/havanna',   lastmod: BUILD_TIME },

  // ── South Pacific ─────────────────────────────────────────────────────────
  { loc: '/reviere/suedpazifik',                            lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/franzoesisch-polynesien',    lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien',                 lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/australien/whitsundays',     lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/neukaledonien',              lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/fidschi',                    lastmod: BUILD_TIME },
  // South Pacific charter locations
  { loc: '/reviere/suedpazifik/charter-standorte/raiatea',    lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/bora-bora',  lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/rangiroa',   lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/noumea',     lastmod: BUILD_TIME },
  { loc: '/reviere/suedpazifik/charter-standorte/neuseeland', lastmod: BUILD_TIME },

  // ── Indian Ocean ──────────────────────────────────────────────────────────
  { loc: '/reviere/indischer-ozean',                        lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien',                  lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/malaysia',         lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand',         lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/langkawi-tioman', lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/asien/thailand/phuket',  lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen',             lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/mahe',        lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/praslin',     lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/seychellen/la-digue',    lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/malediven',              lastmod: BUILD_TIME },
  { loc: '/reviere/indischer-ozean/malediven/male',         lastmod: BUILD_TIME },
  // Standalone Seychelles page (separate route in App.tsx)
  { loc: '/reviere/seychellen', lastmod: BUILD_TIME },

  // ── North Europe ──────────────────────────────────────────────────────────
  { loc: '/reviere/nord-europa',                                    lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee',                    lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/deutsche-ostsee/charter-standorte', lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee',                            lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/belgien',                    lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/nordsee/holland',                    lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien',                       lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/daenemark',             lastmod: BUILD_TIME },
  { loc: '/reviere/nord-europa/skandinavien/schweden',              lastmod: BUILD_TIME },

  // ── Americas & Bahamas ────────────────────────────────────────────────────
  { loc: '/reviere/amerika-bahamas',                        lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas',                lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/nassau',         lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/bahamas/georgetown-exumas', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko',                 lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cancun',          lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/mexiko/cozumel',         lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/belize',                 lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys',           lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-west',  lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/florida-keys/key-largo', lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste',          lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/newport',  lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/boston',   lastmod: BUILD_TIME },
  { loc: '/reviere/amerika-bahamas/usa-ostkueste/annapolis', lastmod: BUILD_TIME },
  // Standalone BVI page (separate route in App.tsx)
  { loc: '/reviere/bvi', lastmod: BUILD_TIME },

  // ── Partner pages ─────────────────────────────────────────────────────────
  { loc: '/yachtcharter-partner',                           lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/pitter-yachting',          lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/croatia-yachting',         lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/angelina-yachtcharter',    lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ncp-mare',                 lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/ultra-sailing',            lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/waypoint',                 lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/istion-yachting',          lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kavas-yachting',           lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/vernicos-yachts',          lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/athenian-yachts',          lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/olympic-yachting',         lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/five-seasons-yachting',    lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dalmatia-charter',         lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/dream-yacht',              lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/navigare-yachting',        lastmod: BUILD_TIME },
  { loc: '/yachtcharter-partner/kiriacoulis',              lastmod: BUILD_TIME },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const normalizePath = (p: string): string => {
  let path = p.trim();
  if (!path.startsWith('/')) path = '/' + path;
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  return path;
};

function generateSitemap(): string {
  const paths = Array.from(new Set(URLS.map(u => normalizePath(u.loc))));
  const lastmodMap = new Map(URLS.map(u => [normalizePath(u.loc), u.lastmod]));

  const urlEntries = paths.map(loc => {
    const lastmod = lastmodMap.get(loc) ?? BUILD_TIME;
    const priorityTag = loc === '/' ? '\n    <priority>1.0</priority>' : '';
    return `  <url>
    <loc>https://chartertransparenz.de${loc}</loc>
    <lastmod>${lastmod}</lastmod>${priorityTag}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- generated by ct-custom-sitemap -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

console.log('\n🗺️  Generating sitemap.xml...\n');

try {
  const sitemap = generateSitemap();
  const count = (sitemap.match(/<loc>/g) || []).length;

  // Always write to public/ so Vite copies it on next build
  writeFileSync(join('public', 'sitemap.xml'), sitemap, 'utf8');
  console.log(`   ✓ public/sitemap.xml`);

  // Write to dist/ct-sitemap.xml when dist/ exists (post-build step).
  // NOTE: Netlify's auto-sitemap plugin overwrites dist/sitemap.xml after the build command
  // finishes, so we only write to ct-sitemap.xml. A force-redirect in netlify.toml ensures
  // /sitemap.xml requests are served from ct-sitemap.xml.
  const distDir = join('dist');
  if (existsSync(distDir)) {
    writeFileSync(join('dist', 'ct-sitemap.xml'), sitemap, 'utf8');
    console.log(`   ✓ dist/ct-sitemap.xml`);
  } else {
    console.log(`   ℹ  dist/ not found – skipped (run as post-build step to populate dist/)`);
  }

  const hash = createHash('sha256').update(sitemap, 'utf8').digest('hex');

  console.log(`\n✅ Sitemap generated: ${count} URLs`);
  console.log(`   Build date:  ${BUILD_TIME}`);
  console.log(`   SHA256: ${hash}`);

  // Sample URLs
  const urlMatches = sitemap.match(/<url>[\s\S]*?<\/url>/g) || [];
  console.log(`\n📋 First 10 entries:`);
  urlMatches.slice(0, 10).forEach((entry, idx) => {
    const locMatch = entry.match(/<loc>(.*?)<\/loc>/);
    if (locMatch) console.log(`   ${idx + 1}. ${locMatch[1]}`);
  });
  console.log('');
} catch (error) {
  console.error('\n❌ Sitemap generation failed:', error);
  process.exit(1);
}
