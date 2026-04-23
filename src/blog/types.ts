import type { ReactNode } from "react";

export type BlogCategory =
  | "Reviere & Destinationen"
  | "Charterwissen & Kosten"
  | "Törnplanung & Vorbereitung"
  | "Yachtwahl & Bordleben"
  | "Segelpraxis & Sicherheit"
  | "Inspiration & Erfahrungsberichte";

export const ALL_CATEGORIES: BlogCategory[] = [
  "Reviere & Destinationen",
  "Charterwissen & Kosten",
  "Törnplanung & Vorbereitung",
  "Yachtwahl & Bordleben",
  "Segelpraxis & Sicherheit",
  "Inspiration & Erfahrungsberichte",
];

export interface BlogPostMeta {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  ogImage: string;
  category: BlogCategory;
  date: string;        // ISO: "2025-04-15"
  teaser: string;
  heroImage: string;
  heroImageAlt: string;
  readingTime: number; // minutes
  relatedSlugs: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: ReactNode;
  faq?: Array<{ question: string; answer: string }>;
}
