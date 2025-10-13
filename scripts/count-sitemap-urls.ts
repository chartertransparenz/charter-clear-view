// Quick script to count URLs in sitemap generator
import { readFileSync } from 'fs';

const content = readFileSync('scripts/generate-sitemap.ts', 'utf8');

// Extract the URLS array
const urlsMatch = content.match(/const URLS: SitemapUrl\[\] = \[([\s\S]*?)\];/);

if (!urlsMatch) {
  console.error('❌ Could not find URLS array');
  process.exit(1);
}

// Count the number of { loc: entries
const locMatches = urlsMatch[1].match(/{ loc:/g);
const urlCount = locMatches ? locMatches.length : 0;

console.log('\n📊 Sitemap URL Count\n');
console.log(`Total URLs: ${urlCount}`);
console.log(`Expected: 136`);
console.log(`Match: ${urlCount === 136 ? '✅ YES' : '❌ NO'}`);

if (urlCount !== 136) {
  console.log(`\n⚠️  Difference: ${urlCount - 136} URLs`);
}

console.log('');
