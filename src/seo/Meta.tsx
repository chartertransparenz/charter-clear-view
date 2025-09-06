// src/seo/Meta.tsx
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogImage: string;
  ogType?: "website" | "article";
  twitterCard?: "summary_large_image" | "summary";
};

export function Meta({
  title, description, keywords, canonical, ogImage,
  ogType = "website", twitterCard = "summary_large_image",
}: Props) {
  // Environment-spezifische Robots Meta Tags
  const isProduction = window.location.hostname === 'chartertransparenz.de';
  const robotsContent = isProduction ? 'index,follow' : 'noindex,nofollow';

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      
      {/* Robots für Environment */}
      <meta name="robots" content={robotsContent} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Charter Transparenz" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}