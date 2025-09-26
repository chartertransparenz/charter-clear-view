import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getItalyMetaConfig } from "@/config/meta-italy";
import { useEffect } from "react";

/**
 * Enhanced SSR-compatible component that applies meta tags based on current route
 * Uses React Helmet Async with immediate DOM updates for better SEO
 */
export const RouteMetaTags = () => {
  const location = useLocation();
  
  // Get meta configuration for current route
  const metaConfig = getItalyMetaConfig(location.pathname);
  
  // Immediate DOM updates for critical SEO elements
  useEffect(() => {
    if (!metaConfig) {
      console.log("RouteMetaTags: No config found for", location.pathname);
      return;
    }

    console.log("RouteMetaTags: Applying config for", location.pathname);
    
    const { title, description, canonical } = metaConfig;
    
    // Immediately update document title (critical for SPA navigation)
    document.title = title;
    
    // Update meta description immediately
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.content = description;
    }
    
    // Update canonical immediately
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = canonical;
    }
    
  }, [location.pathname, metaConfig]);
  
  // Don't render Helmet if no meta config found
  if (!metaConfig) {
    return null;
  }
  
  const { title, description, canonical, ogImage, structuredData } = metaConfig;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Charter Transparenz" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {structuredData.map((data, index) => (
        <script 
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};