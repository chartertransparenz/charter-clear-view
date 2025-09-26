#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';
import { ITALY_META } from '../src/config/meta-italy';

const DIST_DIR = 'dist';
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');

function ensureDirectoryExists(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function injectMetaTags(html: string, route: string) {
  const config = ITALY_META[route];
  if (!config) return html;

  // Clean existing generic meta tags and canonical
  let cleanedHtml = html
    .replace(/<link rel="canonical"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Inject route-specific meta tags in head
  const headCloseIndex = cleanedHtml.indexOf('</head>');
  if (headCloseIndex === -1) return html;

  // Build JSON-LD scripts
  const jsonLdScripts = config.structuredData
    .map(data => `    <script type="application/ld+json">${JSON.stringify(data, null, 0)}</script>`)
    .join('\n');

  const metaInjection = `
    <!-- Route-specific SEO meta tags -->
    <title>${config.title}</title>
    <meta name="description" content="${config.description}">
    <link rel="canonical" href="${config.canonical}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${config.title}">
    <meta property="og:description" content="${config.description}">
    <meta property="og:url" content="${config.canonical}">
    <meta property="og:image" content="${config.ogImage}">
    
    <!-- Twitter -->
    <meta name="twitter:title" content="${config.title}">
    <meta name="twitter:description" content="${config.description}">
    <meta name="twitter:image" content="${config.ogImage}">
    
    <!-- JSON-LD Structured Data -->
${jsonLdScripts}
  `;

  return cleanedHtml.slice(0, headCloseIndex) + metaInjection + cleanedHtml.slice(headCloseIndex);
}

function main() {
  // Check if template exists
  if (!fs.existsSync(TEMPLATE_FILE)) {
    console.error('Template index.html not found. Run build first.');
    process.exit(1);
  }

  // Load template
  const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');
  console.log('Loaded template from', TEMPLATE_FILE);

  // Process each Italian route
  Object.keys(ITALY_META).forEach(route => {
    // Create route path (remove leading slash)
    const routePath = route.startsWith('/') ? route.slice(1) : route;
    const outputPath = path.join(DIST_DIR, routePath, 'index.html');
    
    // Inject meta tags for this route
    const processedHtml = injectMetaTags(template, route);
    
    // Ensure directory exists and write file
    ensureDirectoryExists(outputPath);
    fs.writeFileSync(outputPath, processedHtml, 'utf-8');
    
    console.log(`✓ Generated: ${outputPath}`);
  });

  console.log(`\n🎉 Prerendered ${Object.keys(ITALY_META).length} Italian routes`);
}

main();