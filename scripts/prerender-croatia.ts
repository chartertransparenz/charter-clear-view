import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { CROATIA_META } from '../src/config/meta-croatia';

// Ensure directory exists
function ensureDirectoryExists(filePath: string) {
  const dir = dirname(filePath);
  return fs.mkdir(dir, { recursive: true });
}

// Inject meta tags for a specific route
function injectMetaTags(html: string, route: string) {
  const meta = CROATIA_META.find(m => m.path === route);
  if (!meta) return html;

  // Remove existing meta tags and canonical
  let cleanHtml = html
    .replace(/<title>.*?<\/title>/i, '')
    .replace(/<meta name="description".*?>/i, '')
    .replace(/<link rel="canonical".*?>/i, '')
    .replace(/<script type="application\/ld\+json">.*?<\/script>/is, '');

  // Generate breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": meta.breadcrumb.map(([name, url], index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name,
      "item": url
    }))
  };

  // Inject new meta tags
  const metaTags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:image" content="https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://chartertransparenz.de/lovable-uploads/7c05b27a-9c71-42e6-a256-4389bb513bcd.png" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
  `;

  return cleanHtml.replace('</head>', `${metaTags}\n  </head>`);
}

async function main() {
  try {
    // Read the template HTML
    const templatePath = join(process.cwd(), 'dist', 'index.html');
    const templateHtml = await fs.readFile(templatePath, 'utf-8');

    // Process each Croatia route
    for (const meta of CROATIA_META) {
      const routePath = meta.path.startsWith('/') ? meta.path.slice(1) : meta.path;
      const outputPath = join(process.cwd(), 'dist', routePath, 'index.html');
      
      // Inject meta tags
      const processedHtml = injectMetaTags(templateHtml, meta.path);
      
      // Ensure directory exists
      await ensureDirectoryExists(outputPath);
      
      // Write the processed HTML
      await fs.writeFile(outputPath, processedHtml, 'utf-8');
      
      console.log(`✅ Generated: ${outputPath}`);
    }

    console.log(`🎉 Croatia prerendering complete! Generated ${CROATIA_META.length} routes.`);
  } catch (error) {
    console.error('❌ Croatia prerendering failed:', error);
    process.exit(1);
  }
}

main();