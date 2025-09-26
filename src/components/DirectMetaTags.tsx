import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getItalyMetaConfig } from "@/config/meta-italy";

/**
 * Direct DOM manipulation for meta tags - works with Vite CSR setup
 * Immediately sets meta tags without React Helmet dependency
 */
export const DirectMetaTags = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Get meta configuration for current route
    const metaConfig = getItalyMetaConfig(location.pathname);
    
    if (!metaConfig) {
      console.log("DirectMetaTags: No config found for", location.pathname);
      return;
    }

    console.log("DirectMetaTags: Applying config for", location.pathname, metaConfig);
    
    const { title, description, canonical, ogImage, structuredData } = metaConfig;
    
    // Set document title
    document.title = title;
    
    // Helper function to set or update meta tag
    const setMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Helper function to set link element
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };
    
    // Set basic meta tags
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    
    // Set canonical URL
    setLink('canonical', canonical);
    
    // Set Open Graph meta tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Charter Transparenz', true);
    setMeta('og:url', canonical, true);
    setMeta('og:image', ogImage, true);
    
    // Set Twitter Card meta tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Add JSON-LD structured data
    structuredData.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
    
    console.log("DirectMetaTags: Successfully applied meta tags");
    
  }, [location.pathname]);
  
  return null; // This component only manipulates DOM, no rendering
};