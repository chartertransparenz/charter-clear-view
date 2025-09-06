// Build-Zeit Prerendering Script
import { build } from 'vite';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const routes = [
  '/',
  '/ueber-uns',
  '/faq',
  '/impressum',
  '/reviere/mittelmeer',
  '/reviere/mittelmeer/kroatien',
  '/reviere/mittelmeer/kroatien/istrien',
  // ... weitere Routen
];

async function prerender() {
  // Build the app first
  await build({ mode: 'production' });
  
  const template = fs.readFileSync('dist/index.html', 'utf-8');
  
  routes.forEach(route => {
    const html = generateHTML(template, route);
    const filePath = path.join('dist', route === '/' ? 'index.html' : `${route}/index.html`);
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
  });
}

function generateHTML(template, route) {
  // Route-spezifische Meta-Tags basierend auf meta.config.ts
  const metaConfig = getMetaForRoute(route);
  
  return template
    .replace('<title>Charter Transparenz</title>', `<title>${metaConfig.title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${metaConfig.description}">`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="https://chartertransparenz.de${route}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${metaConfig.title}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${metaConfig.description}">`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${metaConfig.ogImage}">`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="https://chartertransparenz.de${route}">`);
}

function getMetaForRoute(route) {
  // Hier würdest du die Meta-Konfiguration basierend auf der Route zurückgeben
  // Momentan Beispiel-Implementation
  return {
    title: `Route ${route} - Charter Transparenz`,
    description: `Beschreibung für ${route}`,
    ogImage: 'https://chartertransparenz.de/og-default.jpg'
  };
}

prerender().catch(console.error);