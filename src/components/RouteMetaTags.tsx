import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getItalyMetaConfig } from "@/config/meta-italy";

/**
 * SSR-compatible component that automatically applies meta tags based on current route
 * Supports Italian yacht charter pages with centralized configuration
 */
export const RouteMetaTags = () => {
  const location = useLocation();
  
  // Get meta configuration for current route
  const metaConfig = getItalyMetaConfig(location.pathname);
  
  // Don't render anything if no meta config found
  if (!metaConfig) {
    return null;
  }
  
  const { title, description, canonical, ogImage, structuredData } = metaConfig;
  
  // Convert relative URLs to absolute
  const absoluteCanonical = canonical.startsWith('http') ? canonical : `https://chartertransparenz.de${canonical}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://chartertransparenz.de${ogImage}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      <link rel="canonical" href={absoluteCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Charter Transparenz" />
      <meta property="og:url" content={absoluteCanonical} />
      <meta property="og:image" content={absoluteOgImage} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      
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