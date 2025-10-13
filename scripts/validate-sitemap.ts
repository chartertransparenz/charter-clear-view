// Sitemap Validator - Ensures completeness and integrity
// Validates URL count, checks for duplicates, and verifies structure

import { readFileSync } from 'fs';
import { join } from 'path';

const EXPECTED_MIN_URLS = 200;
const SITEMAP_PATH = join('dist', 'sitemap.xml');

try {
  console.log('\n📋 Validating sitemap.xml...\n');
  
  const sitemap = readFileSync(SITEMAP_PATH, 'utf8');
  
  // Count URLs
  const urlMatches = sitemap.match(/<loc>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;

  console.log(`   URLs found: ${urlCount}/${EXPECTED_MIN_URLS}`);

  if (urlCount < EXPECTED_MIN_URLS) {
    throw new Error(`❌ Sitemap incomplete: ${urlCount} URLs (expected ≥${EXPECTED_MIN_URLS})`);
  }

  // Extract all URLs
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  
  // Check for duplicates
  const duplicates = urls.filter((url, i) => urls.indexOf(url) !== i);
  
  if (duplicates.length > 0) {
    throw new Error(`❌ Duplicate URLs found: ${duplicates.join(', ')}`);
  }

  console.log(`   No duplicates ✓`);
  
  // Verify structure
  if (!sitemap.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    throw new Error('❌ Missing XML declaration');
  }
  
  if (!sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
    throw new Error('❌ Missing or incorrect urlset declaration');
  }

  console.log(`   Valid XML structure ✓`);
  
  // Check for partner pages
  const partnerUrls = urls.filter(url => url.includes('yachtcharter-partner'));
  console.log(`   Partner pages: ${partnerUrls.length}/17`);
  
  if (partnerUrls.length < 17) {
    console.warn(`   ⚠️  Warning: Expected 17 partner pages, found ${partnerUrls.length}`);
  }
  
  console.log(`\n✅ Sitemap validation passed!\n`);

} catch (error) {
  console.error('\n❌ Sitemap validation failed:', error);
  process.exit(1);
}
