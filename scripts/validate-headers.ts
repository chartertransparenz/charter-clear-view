// HTTP Header Validation Script
// Checks for X-Robots-Tag: noindex and proper status codes

const CRITICAL_PAGES = [
  'https://chartertransparenz.de',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien/istrien',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien/kvarner',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien/zadar',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dalmatien-split',
  'https://chartertransparenz.de/reviere/mittelmeer/kroatien/dubrovnik',
  'https://chartertransparenz.de/reviere/mittelmeer/griechenland',
  'https://chartertransparenz.de/reviere/mittelmeer/tuerkei',
];

async function validateHeaders() {
  console.log('\n🔍 Starting HTTP header validation...\n');
  
  let errorCount = 0;
  
  for (const url of CRITICAL_PAGES) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      
      // 1. Check for X-Robots-Tag: noindex
      const robotsHeader = response.headers.get('X-Robots-Tag');
      if (robotsHeader?.toLowerCase().includes('noindex')) {
        console.error(`❌ ${url}: X-Robots-Tag contains 'noindex'`);
        errorCount++;
        continue;
      }
      
      // 2. Check status code
      if (response.status !== 200) {
        console.error(`❌ ${url}: Status ${response.status} (expected 200)`);
        errorCount++;
        continue;
      }
      
      console.log(`✅ ${url}: Headers OK`);
    } catch (error) {
      console.error(`❌ ${url}: Failed to fetch - ${error}`);
      errorCount++;
    }
  }
  
  if (errorCount > 0) {
    console.error(`\n❌ Header validation failed with ${errorCount} errors!\n`);
    process.exit(1);
  }
  
  console.log('\n✅ HTTP header validation completed successfully!\n');
}

validateHeaders();
