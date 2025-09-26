import { useEffect, useMemo } from 'react';

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string; // Deprecated but kept for backwards compatibility
  canonical?: string;
  ogTitle?: string; // Backwards compatibility - uses title if not provided
  ogDescription?: string; // Backwards compatibility - uses description if not provided
  ogImage?: string;
  ogUrl?: string; // Backwards compatibility - uses canonical if not provided
  twitterTitle?: string; // Backwards compatibility - uses ogTitle/title if not provided
  twitterDescription?: string; // Backwards compatibility - uses ogDescription/description if not provided
  twitterImage?: string; // Backwards compatibility - uses ogImage if not provided
  robots?: string;
  structuredData?: object | object[]; // Support both single object and array
}

export const useMetaTags = ({
  title,
  description,
  keywords, // Deprecated, ignored
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = "index, follow",
  structuredData = []
}: MetaTagsConfig) => {
  // SSR Guard
  if (typeof document === "undefined") return;

  // Normalize structuredData to always be an array
  const normalizedStructuredData = Array.isArray(structuredData) ? structuredData : [structuredData].filter(Boolean);

  // Stable dependency for structured data
  const stableStructuredData = useMemo(() => 
    JSON.stringify(normalizedStructuredData), 
    [normalizedStructuredData]
  );

  useEffect(() => {
    const createdElements = new Set<Element>();

    // 1) Title - remember previous state & restore later
    const prevTitle = document.title;
    if (title) document.title = title;

    // 2) Description
    const descEl = ensureTag('meta[name="description"]', createdElements);
    const prevDesc = descEl?.getAttribute("content") || "";
    if (description) setAttr(descEl, "content", description);

    // 3) Canonical (always absolute)
    const linkCanonical = ensureLink('canonical', createdElements);
    const prevCanonical = linkCanonical?.getAttribute("href") || "";
    if (canonical) {
      const absoluteCanonical = canonical.startsWith('http') ? canonical : `https://chartertransparenz.de${canonical}`;
      setAttr(linkCanonical, "href", absoluteCanonical);
    }

    // 4) Robots
    const robotsEl = ensureTag('meta[name="robots"]', createdElements);
    const prevRobots = robotsEl?.getAttribute("content") || "";
    if (robots) setAttr(robotsEl, "content", robots);

    // 5) Open Graph (complete coverage) - with backwards compatibility
    const ogTitleEl = ensureTag('meta[property="og:title"]', createdElements);
    const ogDescEl = ensureTag('meta[property="og:description"]', createdElements);
    const ogImageEl = ensureTag('meta[property="og:image"]', createdElements);
    const ogUrlEl = ensureTag('meta[property="og:url"]', createdElements);
    const ogTypeEl = ensureTag('meta[property="og:type"]', createdElements);
    const ogSiteNameEl = ensureTag('meta[property="og:site_name"]', createdElements);

    const prevOg = {
      title: ogTitleEl?.getAttribute("content") || "",
      desc: ogDescEl?.getAttribute("content") || "",
      img: ogImageEl?.getAttribute("content") || "",
      url: ogUrlEl?.getAttribute("content") || "",
      type: ogTypeEl?.getAttribute("content") || "",
      siteName: ogSiteNameEl?.getAttribute("content") || "",
    };

    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;
    const finalOgUrl = ogUrl || canonical;

    if (finalOgTitle) setAttr(ogTitleEl, "content", finalOgTitle);
    if (finalOgDescription) setAttr(ogDescEl, "content", finalOgDescription);
    if (ogImage) {
      const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://chartertransparenz.de${ogImage}`;
      setAttr(ogImageEl, "content", absoluteOgImage);
    }
    if (finalOgUrl) {
      const absoluteCanonical = finalOgUrl.startsWith('http') ? finalOgUrl : `https://chartertransparenz.de${finalOgUrl}`;
      setAttr(ogUrlEl, "content", absoluteCanonical);
    }
    setAttr(ogTypeEl, "content", "website");
    setAttr(ogSiteNameEl, "content", "Charter Transparenz");

    // 6) Twitter Cards (enhanced) - with backwards compatibility
    const twitterCardEl = ensureTag('meta[name="twitter:card"]', createdElements);
    const twitterTitleEl = ensureTag('meta[name="twitter:title"]', createdElements);
    const twitterDescEl = ensureTag('meta[name="twitter:description"]', createdElements);
    const twitterImageEl = ensureTag('meta[name="twitter:image"]', createdElements);

    const prevTwitter = {
      card: twitterCardEl?.getAttribute("content") || "",
      title: twitterTitleEl?.getAttribute("content") || "",
      desc: twitterDescEl?.getAttribute("content") || "",
      img: twitterImageEl?.getAttribute("content") || "",
    };

    const finalTwitterTitle = twitterTitle || finalOgTitle;
    const finalTwitterDescription = twitterDescription || finalOgDescription;
    const finalTwitterImage = twitterImage || ogImage;

    setAttr(twitterCardEl, "content", "summary_large_image");
    if (finalTwitterTitle) setAttr(twitterTitleEl, "content", finalTwitterTitle);
    if (finalTwitterDescription) setAttr(twitterDescEl, "content", finalTwitterDescription);
    if (finalTwitterImage) {
      const absoluteTwitterImage = finalTwitterImage.startsWith('http') ? finalTwitterImage : `https://chartertransparenz.de${finalTwitterImage}`;
      setAttr(twitterImageEl, "content", absoluteTwitterImage);
    }

    // 7) JSON-LD (multiple schemas, safe cleanup)
    const jsonLdEls: HTMLScriptElement[] = [];
    normalizedStructuredData.forEach(obj => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.textContent = JSON.stringify(obj);
      document.head.appendChild(el);
      jsonLdEls.push(el);
    });

    // Cleanup: restore exact previous state
    return () => {
      document.title = prevTitle;

      if (descEl) setAttr(descEl, "content", prevDesc);
      if (linkCanonical) setAttr(linkCanonical, "href", prevCanonical);
      if (robotsEl) setAttr(robotsEl, "content", prevRobots);

      if (ogTitleEl) setAttr(ogTitleEl, "content", prevOg.title);
      if (ogDescEl) setAttr(ogDescEl, "content", prevOg.desc);
      if (ogImageEl) setAttr(ogImageEl, "content", prevOg.img);
      if (ogUrlEl) setAttr(ogUrlEl, "content", prevOg.url);
      if (ogTypeEl) setAttr(ogTypeEl, "content", prevOg.type);
      if (ogSiteNameEl) setAttr(ogSiteNameEl, "content", prevOg.siteName);

      if (twitterCardEl) setAttr(twitterCardEl, "content", prevTwitter.card);
      if (twitterTitleEl) setAttr(twitterTitleEl, "content", prevTwitter.title);
      if (twitterDescEl) setAttr(twitterDescEl, "content", prevTwitter.desc);
      if (twitterImageEl) setAttr(twitterImageEl, "content", prevTwitter.img);

      // Remove all JSON-LD scripts
      jsonLdEls.forEach(el => el.remove());

      // Remove newly created elements
      createdElements.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [title, description, canonical, ogImage, robots, stableStructuredData]);
};

function ensureTag(selector: string, createdElements: Set<Element>): HTMLMetaElement {
  let el = document.head.querySelector(selector) as HTMLMetaElement;
  if (!el) {
    el = document.createElement("meta");
    // Extract name/property from selector like meta[name="description"]
    const match = selector.match(/\[(name|property)=\"([^\"]+)\"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
    createdElements.add(el);
  }
  return el;
}

function ensureLink(rel: string, createdElements: Set<Element>): HTMLLinkElement {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
    createdElements.add(el);
  }
  return el;
}

function setAttr(el: Element | null, name: string, value: string) {
  if (el) el.setAttribute(name, value);
}

// Utility function to generate structured data
export const generateStructuredData = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Charter Transparenz",
    "url": "https://chartertransparenz.de",
    "logo": "https://chartertransparenz.de/logo.png",
    "sameAs": [
      "https://www.facebook.com/chartertransparenz",
      "https://www.instagram.com/chartertransparenz"
    ]
  }),

  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  service: (destination: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Yachtcharter",
    "name": `Yachtcharter ${destination}`,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Charter Transparenz",
      "url": "https://chartertransparenz.de",
      "logo": "https://chartertransparenz.de/logo.png"
    },
    "areaServed": destination,
    "offers": {
      "@type": "Offer",
      "category": "Yachtcharter",
      "availability": "https://schema.org/InStock"
    }
  })
};