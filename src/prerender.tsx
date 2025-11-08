import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { META, type RegionKey } from './seo/meta.config';

// Simple function to get meta config for a URL
function getMetaConfig(url: string) {
  const regionMap: Record<string, RegionKey> = {
    '/reviere/mittelmeer/kroatien': 'kroatien',
    '/reviere/mittelmeer/kroatien/istrien': 'istrien',
    '/reviere/mittelmeer/kroatien/kvarner': 'kvarner',
    '/reviere/mittelmeer/kroatien/zadar': 'zadar',
    '/reviere/mittelmeer/kroatien/dalmatien-split': 'dalmatienSplit',
    '/reviere/mittelmeer/kroatien/dubrovnik': 'dubrovnik',
    '/reviere/mittelmeer/frankreich': 'frankreich',
  };

  const regionKey = regionMap[url];
  if (!regionKey) return null;

  const config = META[regionKey];
  return {
    title: config.title,
    description: config.description,
    canonical: config.canonical(),
    ogImage: config.ogImage.startsWith('/') ? `https://chartertransparenz.de${config.ogImage}` : config.ogImage
  };
}

export async function prerender(data: { url: string }) {
  const html = renderToString(
    <StaticRouter location={data.url}>
      <App />
    </StaticRouter>
  );

  // Get SEO metadata for the current route
  const metaConfig = getMetaConfig(data.url);
  
  if (!metaConfig) {
    return { html };
  }

  // HTML escape function
  const escapeHtml = (str: string) => 
    str.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#039;');

  // Create breadcrumb JSON-LD
  const breadcrumbItems = [
    { position: 1, name: "Start", item: "https://chartertransparenz.de/" },
    { position: 2, name: "Reviere", item: "https://chartertransparenz.de/reviere" },
    { position: 3, name: "Mittelmeer", item: "https://chartertransparenz.de/reviere/mittelmeer" }
  ];

  // Add country-specific breadcrumb
  if (data.url.includes('/kroatien')) {
    breadcrumbItems.push({ position: 4, name: "Kroatien", item: "https://chartertransparenz.de/reviere/mittelmeer/kroatien" });
  } else if (data.url.includes('/frankreich')) {
    breadcrumbItems.push({ position: 4, name: "Frankreich", item: "https://chartertransparenz.de/reviere/mittelmeer/frankreich" });
  }

  // Add specific region if it's a subpage
  if (data.url.includes('/istrien')) {
    breadcrumbItems.push({ position: 5, name: "Istrien", item: `https://chartertransparenz.de${data.url}` });
  } else if (data.url.includes('/kvarner')) {
    breadcrumbItems.push({ position: 5, name: "Kvarner", item: `https://chartertransparenz.de${data.url}` });
  } else if (data.url.includes('/zadar')) {
    breadcrumbItems.push({ position: 5, name: "Zadar", item: `https://chartertransparenz.de${data.url}` });
  } else if (data.url.includes('/dalmatien-split')) {
    breadcrumbItems.push({ position: 5, name: "Dalmatien ab Split", item: `https://chartertransparenz.de${data.url}` });
  } else if (data.url.includes('/dubrovnik')) {
    breadcrumbItems.push({ position: 5, name: "Dubrovnik", item: `https://chartertransparenz.de${data.url}` });
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };

  return {
    html,
    head: {
      lang: 'de',
      title: escapeHtml(metaConfig.title),
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: escapeHtml(metaConfig.description) } },
        { type: 'link', props: { rel: 'canonical', href: metaConfig.canonical } },
        { type: 'meta', props: { property: 'og:title', content: escapeHtml(metaConfig.title) } },
        { type: 'meta', props: { property: 'og:description', content: escapeHtml(metaConfig.description) } },
        { type: 'meta', props: { property: 'og:url', content: metaConfig.canonical } },
        { type: 'meta', props: { property: 'og:image', content: metaConfig.ogImage } },
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: escapeHtml(metaConfig.title) } },
        { type: 'meta', props: { name: 'twitter:description', content: escapeHtml(metaConfig.description) } },
        { type: 'meta', props: { name: 'twitter:image', content: metaConfig.ogImage } },
        { type: 'script', props: { 
          type: 'application/ld+json',
          dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbJsonLd) }
        }}
      ])
    }
  };
}