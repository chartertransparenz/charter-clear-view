import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  structuredData?: object;
}

export const useMetaTags = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = "index, follow",
  structuredData
}: MetaTagsConfig) => {
  useEffect(() => {
    // Set page title in document
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robots);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', ogTitle || title);
    updateOGTag('og:description', ogDescription || description);
    updateOGTag('og:type', 'website');
    
    if (ogImage) {
      updateOGTag('og:image', ogImage);
    }
    
    if (ogUrl) {
      updateOGTag('og:url', ogUrl);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', twitterTitle || ogTitle || title);
    updateTwitterTag('twitter:description', twitterDescription || ogDescription || description);
    
    if (twitterImage || ogImage) {
      updateTwitterTag('twitter:image', twitterImage || ogImage || '');
    }

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to reset to defaults when component unmounts
    return () => {
      document.title = 'Premium Yachtcharter weltweit | Segelyacht & Katamaran mieten';
      
      const defaultDescription = 'Premium Yachtcharter weltweit ⭐ Segelyacht & Katamaran mieten ✓ 8.000+ Yachten ✓ Mittelmeer, Karibik, Atlantik ✓ Beste Preise & Service seit 25+ Jahren';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', defaultDescription);
      }
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, robots, structuredData]);
};

// Utility function to generate structured data
export const generateStructuredData = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium Yachtcharter",
    "url": "https://premium-yachtcharter.com",
    "logo": "https://premium-yachtcharter.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/premiumyachtcharter",
      "https://www.instagram.com/premiumyachtcharter"
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
      "name": "Premium Yachtcharter"
    },
    "areaServed": destination,
    "offers": {
      "@type": "Offer",
      "category": "Yachtcharter",
      "availability": "https://schema.org/InStock"
    }
  })
};