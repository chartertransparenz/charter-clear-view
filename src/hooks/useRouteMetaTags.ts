import { useLocation } from "react-router-dom";
import { useMetaTags } from "./useMetaTags";
import { getItalyMetaConfig } from "@/config/meta-italy";

/**
 * Hook that automatically applies meta tags based on current route
 * Supports Italian yacht charter pages with centralized configuration
 */
export const useRouteMetaTags = () => {
  const location = useLocation();
  
  // Get meta configuration for current route
  const metaConfig = getItalyMetaConfig(location.pathname);
  
  // Apply meta tags if configuration exists
  if (metaConfig) {
    useMetaTags({
      title: metaConfig.title,
      description: metaConfig.description,
      canonical: metaConfig.canonical,
      ogTitle: metaConfig.title,
      ogDescription: metaConfig.description,
      ogImage: metaConfig.ogImage,
      ogUrl: metaConfig.canonical,
      structuredData: metaConfig.structuredData
    });
  }
};