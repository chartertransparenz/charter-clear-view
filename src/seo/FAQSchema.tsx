// src/seo/FAQSchema.tsx
import { JsonLd } from "./JsonLd";

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQSchema = ({ items }: { items: FAQItem[] }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return <JsonLd json={faqSchema} />;
};