// SEO Validation Script - CI Guardrails
// Ensures exactly 1 title, 1 canonical, 1 description per page
// Prevents Helmet-managed SEO tags

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// Recursively find all index.html files
function findIndexFiles(dir: string, files: string[] = []): string[] {
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      findIndexFiles(fullPath, files);
    } else if (entry === 'index.html') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function validatePage(filePath: string) {
  const html = readFileSync(filePath, 'utf-8');
  const relativePath = filePath.replace('dist/', '');
  
  // 1. Count canonical links
  const canonicalMatches = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/gi);
  const canonicalCount = canonicalMatches ? canonicalMatches.length : 0;
  if (canonicalCount !== 1) {
    throw new Error(`❌ ${relativePath}: Found ${canonicalCount} canonical tags (expected 1)`);
  }
  
  // 2. Count meta descriptions
  const descMatches = html.match(/<meta[^>]+name=["']description["'][^>]*>/gi);
  const descCount = descMatches ? descMatches.length : 0;
  if (descCount !== 1) {
    throw new Error(`❌ ${relativePath}: Found ${descCount} meta descriptions (expected 1)`);
  }
  
  // 3. Count title tags
  const titleMatches = html.match(/<title[^>]*>[\s\S]*?<\/title>/gi);
  const titleCount = titleMatches ? titleMatches.length : 0;
  if (titleCount !== 1) {
    throw new Error(`❌ ${relativePath}: Found ${titleCount} title tags (expected 1)`);
  }
  
  // 4. Check for Helmet-managed SEO tags (data-rh="true")
  const helmetSeoRegex = /<(title|link[^>]+rel=["']canonical["']|meta[^>]+name=["']description["'])[^>]*data-rh=["']true["'][^>]*>/gi;
  const helmetSeoMatches = html.match(helmetSeoRegex);
  if (helmetSeoMatches && helmetSeoMatches.length > 0) {
    throw new Error(`❌ ${relativePath}: Found ${helmetSeoMatches.length} Helmet-managed SEO tags (forbidden)`);
  }
  
  // 5. Check H1 exists
  const h1Match = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
  if (!h1Match || !h1Match[0].replace(/<[^>]+>/g, '').trim()) {
    throw new Error(`❌ ${relativePath}: No H1 found in prerendered HTML`);
  }
  
  // 6. Count internal links
  const internalLinksMatches = html.match(/<a[^>]+href=["']\/[^"']*["'][^>]*>/gi);
  const internalLinksCount = internalLinksMatches ? internalLinksMatches.length : 0;
  if (internalLinksCount < 3) {
    console.warn(`⚠️  ${relativePath}: Only ${internalLinksCount} internal links (expected ≥3)`);
  }
  
  // 7. Check main content length
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    const mainText = mainMatch[1].replace(/<[^>]+>/g, '').trim();
    if (mainText.length < 500) {
      console.warn(`⚠️  ${relativePath}: Main content only ${mainText.length} chars (expected ≥500)`);
    }
  }
  
  console.log(`✅ ${relativePath}: SEO validation passed`);
}

// Main execution
console.log('\n🔍 Starting SEO validation...\n');

try {
  const indexFiles = findIndexFiles('dist');
  let errorCount = 0;
  
  for (const file of indexFiles) {
    try {
      validatePage(file);
    } catch (error) {
      console.error(String(error));
      errorCount++;
    }
  }
  
  if (errorCount > 0) {
    console.error(`\n❌ SEO validation failed with ${errorCount} errors!\n`);
    process.exit(1);
  }
  
  console.log('\n✅ SEO validation completed successfully!\n');
} catch (error) {
  console.error('\n❌ SEO validation failed:', error);
  process.exit(1);
}
