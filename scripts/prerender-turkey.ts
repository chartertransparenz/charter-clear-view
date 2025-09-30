// scripts/prerender-turkey.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');

interface TurkeyPage {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  breadcrumb: object;
}

const turkeyPages: TurkeyPage[] = [
  {
    path: 'reviere/mittelmeer/tuerkei',
    title: 'Yachtcharter Türkei – Bodrum, Göcek & Marmaris',
    description: 'Segeln in der Türkei: Bodrum, Göcek/Fethiye, Marmaris & Antalya. Sonnensicher, viele Buchten & gute Marinas.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei',
    ogImage: 'https://chartertransparenz.de/og/tuerkei.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"}
      ]
    }
  },
  {
    path: 'reviere/mittelmeer/tuerkei/bodrum',
    title: 'Yachtcharter Bodrum – Gökova & Datça Golf',
    description: 'Segeln ab Bodrum: Gökova- und Datça-Golf mit Badebuchten & ruhigen Ankerplätzen. Ideal für Inselhüpfen.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum',
    ogImage: 'https://chartertransparenz.de/og/bodrum.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"},
        {"@type":"ListItem","position":4,"name":"Bodrum","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei/bodrum"}
      ]
    }
  },
  {
    path: 'reviere/mittelmeer/tuerkei/gocek-fethiye',
    title: 'Yachtcharter Göcek & Fethiye – Buchtenparadies',
    description: 'Göcek & Fethiye: Kurze Etappen, geschützte Buchten, Top-Infrastruktur. Perfekt für Familien & Einsteiger.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei/gocek-fethiye',
    ogImage: 'https://chartertransparenz.de/og/gocek-fethiye.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"},
        {"@type":"ListItem","position":4,"name":"Göcek & Fethiye","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei/gocek-fethiye"}
      ]
    }
  },
  {
    path: 'reviere/mittelmeer/tuerkei/marmaris',
    title: 'Yachtcharter Marmaris – Hisarönü & Bozburun',
    description: 'Ab Marmaris zu den Golfs von Hisarönü & Bozburun: Natur, glasklares Wasser & charmante Küstenorte.',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris',
    ogImage: 'https://chartertransparenz.de/og/marmaris.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"},
        {"@type":"ListItem","position":4,"name":"Marmaris","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei/marmaris"}
      ]
    }
  },
  {
    path: 'reviere/mittelmeer/tuerkei/kas-kalkan',
    title: 'Yachtcharter Kaş & Kalkan | Lykische Küste, Kekova – Antike Türkei',
    description: 'Segeln Kaş & Kalkan: authentische Fischerdörfer, versunkene Stadt Kekova & unberührte Buchten. Lykisches Erbe entdecken. Jetzt anfragen!',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan',
    ogImage: 'https://chartertransparenz.de/og/kaskalkan.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"},
        {"@type":"ListItem","position":4,"name":"Kaş & Kalkan","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei/kas-kalkan"}
      ]
    }
  },
  {
    path: 'reviere/mittelmeer/tuerkei/tuerkische-aegaeis',
    title: 'Yachtcharter Türkische Ägäis | Çeşme, Foça, Ayvalık – Westküste',
    description: 'Segeln Türkische Ägäis: windreiche Gewässer, antike Städte & authentische Kultur. Von Çeşme zu den griechischen Inseln. Jetzt anfragen!',
    canonical: 'https://chartertransparenz.de/reviere/mittelmeer/tuerkei/tuerkische-aegaeis',
    ogImage: 'https://chartertransparenz.de/og/tuerkischeaegaeis.jpg',
    breadcrumb: {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Start","item":"https://chartertransparenz.de/"},
        {"@type":"ListItem","position":2,"name":"Reviere","item":"https://chartertransparenz.de/#reviere"},
        {"@type":"ListItem","position":3,"name":"Türkei","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei"},
        {"@type":"ListItem","position":4,"name":"Türkische Ägäis","item":"https://chartertransparenz.de/reviere/mittelmeer/tuerkei/tuerkische-aegaeis"}
      ]
    }
  }
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateHTML(page: TurkeyPage): string {
  const escapedTitle = escapeHtml(page.title);
  const escapedDescription = escapeHtml(page.description);
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapedTitle}</title>
  <meta name="description" content="${escapedDescription}">
  <link rel="canonical" href="${page.canonical}">
  <meta property="og:title" content="${escapedTitle}">
  <meta property="og:description" content="${escapedDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${page.canonical}">
  <meta property="og:image" content="${page.ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapedTitle}">
  <meta name="twitter:description" content="${escapedDescription}">
  <meta name="twitter:image" content="${page.ogImage}">
  <script type="application/ld+json">${JSON.stringify(page.breadcrumb)}</script>
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;
}

console.log('🇹🇷 Prerendering Turkey pages...');

turkeyPages.forEach(page => {
  const pagePath = join(distDir, page.path);
  mkdirSync(pagePath, { recursive: true });
  const htmlPath = join(pagePath, 'index.html');
  const html = generateHTML(page);
  writeFileSync(htmlPath, html, 'utf-8');
  console.log(`✅ ${page.path}`);
});

console.log('✅ Turkey prerendering complete!');
