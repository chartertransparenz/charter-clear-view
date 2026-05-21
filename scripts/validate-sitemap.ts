// Dynamic sitemap validator comparing to optional JSON path list
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const SITEMAP_PATH = join('dist', 'ct-sitemap.xml');
const JSON_PATH = join('scripts', 'sitemap-paths.json');
const EXPECTED_URL_COUNT = 164;

function getExpectedPaths(): string[] | null {
  if (!existsSync(JSON_PATH)) return null;
  try {
    const raw = readFileSync(JSON_PATH, 'utf8');
    const arr = JSON.parse(raw) as string[];
    // normalize: ensure leading slash, remove trailing slash (except '/')
    const normalize = (p: string) => {
      let path = p.trim();
      if (!path.startsWith('/')) path = '/' + path;
      if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
      return path;
    };
    return Array.from(new Set(arr.map(normalize)));
  } catch (e) {
    console.warn('⚠️  Could not read scripts/sitemap-paths.json:', e);
    return null;
  }
}

try {
  console.log('\n📋 Validating sitemap.xml...');
  const sitemap = readFileSync(SITEMAP_PATH, 'utf8');

  // Extract URLs from generated sitemap
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const count = urls.length;

  // Determine expected set
  const expected = getExpectedPaths();
  const expectedCount = expected ? expected.length : EXPECTED_URL_COUNT;

  console.log(`   URLs found: ${count} / expected: ${expectedCount}`);

  if (count !== expectedCount) {
    throw new Error(`❌ Sitemap count mismatch: got ${count}, expected ${expectedCount}`);
  }

  // Duplicates check
  const dupes = urls.filter((u, i) => urls.indexOf(u) !== i);
  if (dupes.length > 0) {
    throw new Error(`❌ Duplicate URLs found: ${Array.from(new Set(dupes)).join(', ')}`);
  }
  console.log('   No duplicates ✓');

  // Basic XML structure check
  if (!sitemap.includes('<?xml version="1.0"')) throw new Error('❌ Missing XML declaration');
  if (!sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) throw new Error('❌ Missing urlset declaration');
  console.log('   XML structure ✓');

  // Optional: diff with expected paths
  if (expected) {
    const sitemapPaths = new Set(urls.map((u) => new URL(u).pathname));
    const expectedSet = new Set(expected);

    const missing = expected.filter((p) => !sitemapPaths.has(p));
    const extra = [...sitemapPaths].filter((p) => !expectedSet.has(p));

    if (missing.length) {
      console.warn(`   ⚠️ Missing ${missing.length} expected URLs`);
    }
    if (extra.length) {
      console.warn(`   ⚠️ ${extra.length} URLs present that are not in JSON list`);
    }

    // Print compact table header
    console.log('\n   url | in_sitemap | note');
    const sample = expected.slice(0, 10); // small sample to avoid noisy logs
    for (const p of sample) {
      const present = sitemapPaths.has(p) ? 'yes' : 'no';
      const note = present === 'yes' ? '' : 'missing';
      console.log(`   ${p} | ${present} | ${note}`);
    }
  }

  console.log('\n✅ Sitemap validation passed!\n');
} catch (error) {
  console.error('\n❌ Sitemap validation failed:', error);
  process.exit(1);
}
