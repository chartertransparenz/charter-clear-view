// src/seo/MetaDynamic.tsx
// ⚠️ DEPRECATED FOR SEO TAGS ⚠️
// Use this component ONLY for non-SEO meta tags (viewport, theme-color, etc.)
// SEO tags (title, description, canonical, OG, Twitter) are managed by prerender scripts
// to ensure exactly 1 tag per page and prevent duplicate/conflicting SEO signals

import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: "website" | "article";
  twitterCard?: "summary_large_image" | "summary";
};

export function Meta({
  title, description, canonical, ogImage,
  ogType = "website", twitterCard = "summary_large_image",
}: Props) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Indexing per Umgebung */}
      {/* In Preview/Stage: <meta name="robots" content="noindex,nofollow" /> */}
    </Helmet>
  );
}