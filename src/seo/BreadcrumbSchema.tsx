// src/seo/BreadcrumbSchema.tsx
import { JsonLd } from "./JsonLd";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <JsonLd json={breadcrumbSchema} />;
};