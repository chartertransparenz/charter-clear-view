import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for production
const BASE_URL = 'https://chartertransparenz.de';

// Routes to prerender for Caribbean
const routes = [
  { 
    path: '/reviere/karibik', 
    title: 'Yachtcharter Karibik – Bahamas, BVI & St. Martin', 
    description: 'Segeln in der Karibik: Bahamas, Britische Jungferninseln, USVI, St. Martin & Grenadinen. Tropisches Klima & türkisfarbenes Meer.' 
  },
  { 
    path: '/reviere/karibik/bahamas', 
    title: 'Yachtcharter Bahamas – Exumas & Nassau entdecken', 
    description: 'Segeln auf den Bahamas: Exumas, Nassau & paradiesische Strände. Perfekt für Katamaran-Charter & Inselhüpfen.' 
  },
  { 
    path: '/reviere/karibik/bvi', 
    title: 'Yachtcharter BVI – Britische Jungferninseln', 
    description: 'Segeln auf den BVI: Tortola, Virgin Gorda & Jost Van Dyke. Karibisches Inselhüpfen in den Britischen Jungferninseln.' 
  },
  { 
    path: '/reviere/karibik/usvi', 
    title: 'Yachtcharter USVI – US Jungferninseln', 
    description: 'Segeln ab St. Thomas & St. John. Traumhafte Strände & ideale Routen in den US Jungferninseln.' 
  },
  { 
    path: '/reviere/karibik/antigua', 
    title: 'Yachtcharter Antigua – Segeln im Herzen der Karibik', 
    description: 'Segeln ab Antigua: English Harbour, Nelson\'s Dockyard & traumhafte Buchten. Perfekt für Karibik-Charter.' 
  },
  { 
    path: '/reviere/karibik/st-martin', 
    title: 'Yachtcharter St. Martin – Französische & niederländische Seite', 
    description: 'Segeln ab St. Martin: Marigot, Orient Bay & Simpson Bay. Idealer Ausgangspunkt für Karibik-Inselhüpfen.' 
  },
  { 
    path: '/reviere/karibik/st-vincent-grenadinen', 
    title: 'Yachtcharter St. Vincent & Grenadinen – Tobago Cays entdecken', 
    description: 'Segeln in den Grenadinen: Bequia, Mustique, Tobago Cays & Union Island. Karibik pur.' 
  }
];

function generateBreadcrumbJsonLd(path: string): string {
  const parts = path.split('/').filter(Boolean);
  const items = [
    { name: 'Start', url: `${BASE_URL}/`, position: 1 }
  ];
  
  let currentPath = '';
  parts.forEach((part, index) => {
    if (part === 'reviere') {
      items.push({
        name: 'Reviere',
        url: `${BASE_URL}/#reviere`,
        position: index + 2
      });
      return;
    }
    
    currentPath += `/${part}`;
    
    let name = part.charAt(0).toUpperCase() + part.slice(1);
    // Map technical names to display names
    if (part === 'karibik') name = 'Karibik';
    if (part === 'bahamas') name = 'Bahamas';
    if (part === 'bvi') name = 'BVI';
    if (part === 'usvi') name = 'USVI';
    if (part === 'antigua') name = 'Antigua';
    if (part === 'st-martin') name = 'St. Martin';
    if (part === 'st-vincent-grenadinen') name = 'St. Vincent & Grenadinen';
    
    items.push({
      name,
      url: `${BASE_URL}/reviere${currentPath}`,
      position: index + 2
    });
  });
  
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.url
    }))
  };
  
  return JSON.stringify(breadcrumbList);
}

function generateHTML(route: { path: string; title: string; description: string }): string {
  const canonicalUrl = `${BASE_URL}${route.path}`;
  const ogImage = `${BASE_URL}/og/karibik.jpg`; // Default OG image, can be customized per route
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(route.path);
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>${route.title}</title>
  <meta name="description" content="${route.description}">
  
  <!-- Canonical -->
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${route.title}">
  <meta property="og:description" content="${route.description}">
  <meta property="og:image" content="${ogImage}">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonicalUrl}">
  <meta name="twitter:title" content="${route.title}">
  <meta name="twitter:description" content="${route.description}">
  <meta name="twitter:image" content="${ogImage}">
  
  <!-- Structured Data - Breadcrumb -->
  <script type="application/ld+json">
    ${breadcrumbJsonLd}
  </script>
  
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;
}

// Main execution
console.log('🚀 Starting Caribbean prerendering...');

const distPath = path.join(__dirname, '..', 'dist');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  const htmlPath = path.join(routePath, 'index.html');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Generate and write HTML
  const html = generateHTML(route);
  fs.writeFileSync(htmlPath, html, 'utf-8');
  
  console.log(`✅ Generated: ${route.path}/index.html`);
});

console.log('✨ Caribbean prerendering complete!');
