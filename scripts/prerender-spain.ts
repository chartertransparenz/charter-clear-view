import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for production
const BASE_URL = 'https://chartertransparenz.de';

// Routes to prerender for Spain & Canary Islands
const routes = [
  // Spain Mediterranean routes
  { path: '/reviere/mittelmeer/spanien', title: 'Yachtcharter Spanien | Balearen, Costa Brava, Valencia', description: 'Segeln Spanien: sonnige Balearen, Costa Brava & Valencia. Traumhafte Buchten, lebendige Häfen & spanische Kultur. Jetzt anfragen!' },
  { path: '/reviere/mittelmeer/spanien/balearen', title: 'Yachtcharter Balearen – Mallorca, Ibiza & Menorca', description: 'Segeln auf den Balearen: Entdecken Sie Mallorca, Ibiza & Menorca. Inselhüpfen mit Traumstränden & mediterranem Flair.' },
  { path: '/reviere/mittelmeer/spanien/balearen/mallorca', title: 'Yachtcharter Mallorca – Segeln ab Palma & Port d\'Andratx', description: 'Mallorca per Yacht entdecken: Palma, Andratx & Cala d\'Or. Buchten, Küstenvielfalt & mediterranes Lebensgefühl.' },
  { path: '/reviere/mittelmeer/spanien/balearen/ibiza', title: 'Yachtcharter Ibiza – Inselhüpfen mit Formentera', description: 'Ibiza & Formentera: Segeln, Nachtleben & glasklares Wasser. Entspannung & Party im perfekten Mix.' },
  { path: '/reviere/mittelmeer/spanien/balearen/menorca', title: 'Yachtcharter Menorca – Mahón, Ciutadella & Naturbuchten', description: 'Segeln auf Menorca: Ruhiger & familiärer als Mallorca & Ibiza. Entdecken Sie Mahón, Ciutadella & unberührte Naturbuchten.' },
  { path: '/reviere/mittelmeer/spanien/costa-brava', title: 'Yachtcharter Costa Brava | Barcelona, Girona, Roses – Katalanische Küste', description: 'Segeln Costa Brava: wilde Küste, versteckte Buchten & katalanische Kultur. Von Barcelona zu den Traumstränden der Costa Brava. Jetzt anfragen!' },
  { path: '/reviere/mittelmeer/spanien/valencia', title: 'Yachtcharter Valencia | Valencia, Alicante, Castellón – Levante', description: 'Segeln Valencia: moderne Marinas, goldene Strände & valencianische Kultur. Von der Stadt der Künste zu den Stränden der Levante. Jetzt anfragen!' },
  
  // Canary Islands Atlantic routes
  { path: '/reviere/atlantik/kanaren', title: 'Yachtcharter Kanaren – Teneriffa, Gran Canaria & Lanzarote', description: 'Segeln auf den Kanaren: Ganzjährig Sonne & Passatwinde. Entdecken Sie Teneriffa, Gran Canaria & Lanzarote per Yacht.' },
  { path: '/reviere/atlantik/kanaren/gran-canaria', title: 'Yachtcharter Gran Canaria | Las Palmas, Puerto Rico – Kanarische Inseln', description: 'Segeln Gran Canaria: Ganzjährig perfektes Wetter, moderne Marinas & vielfältige Küsten. Von Las Palmas durch die goldenen Dünen. Jetzt anfragen!' },
  { path: '/reviere/atlantik/kanaren/teneriffa', title: 'Yachtcharter Teneriffa | Santa Cruz, Los Cristianos – Vulkaninsel', description: 'Segeln Teneriffa: majestätischer Teide, schwarze Sandstrände & ganzjähriges Segelwetter. Von Santa Cruz entlang der Vulkanküste. Jetzt anfragen!' },
  { path: '/reviere/atlantik/kanaren/lanzarote', title: 'Yachtcharter Lanzarote | Arrecife, Marina Rubicón – Feuerinsel', description: 'Segeln Lanzarote: Vulkanlandschaften, César Manrique Kunst & ganzjährig ideale Bedingungen. Von Arrecife durch die Feuerinsel. Jetzt anfragen!' },
  { path: '/reviere/atlantik/kanaren/fuerteventura', title: 'Yachtcharter Fuerteventura | Corralejo, Morro Jable – Strandparadies', description: 'Segeln Fuerteventura: endlose Strände, türkisblaues Wasser & konstante Passatwinde. Von Corralejo durch das Strandparadies. Jetzt anfragen!' }
];

function generateBreadcrumbJsonLd(path: string): string {
  const parts = path.split('/').filter(Boolean);
  const items = [
    { name: 'Reviere', url: `${BASE_URL}/reviere`, position: 1 }
  ];
  
  let currentPath = '';
  parts.forEach((part, index) => {
    if (part === 'reviere') return; // Skip the first 'reviere' part
    currentPath += `/${part}`;
    
    let name = part.charAt(0).toUpperCase() + part.slice(1);
    // Map technical names to display names
    if (part === 'mittelmeer') name = 'Mittelmeer';
    if (part === 'atlantik') name = 'Atlantik';
    if (part === 'spanien') name = 'Spanien';
    if (part === 'balearen') name = 'Balearen';
    if (part === 'mallorca') name = 'Mallorca';
    if (part === 'ibiza') name = 'Ibiza';
    if (part === 'menorca') name = 'Menorca';
    if (part === 'costa-brava') name = 'Costa Brava';
    if (part === 'valencia') name = 'Valencia';
    if (part === 'kanaren') name = 'Kanarische Inseln';
    if (part === 'gran-canaria') name = 'Gran Canaria';
    if (part === 'teneriffa') name = 'Teneriffa';
    if (part === 'lanzarote') name = 'Lanzarote';
    if (part === 'fuerteventura') name = 'Fuerteventura';
    
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
  const ogImage = `${BASE_URL}/og/spanien.jpg`; // Default OG image, can be customized per route
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
console.log('🚀 Starting Spain & Canary Islands prerendering...');

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

console.log('✨ Spain & Canary Islands prerendering complete!');
