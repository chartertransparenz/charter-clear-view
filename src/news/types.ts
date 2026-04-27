import type { ReactNode } from "react";

export type NewsContentType = "basis_hinweis" | "update" | "kurzmeldung";

export type NewsStatus = "in_kraft" | "angekuendigt" | "update" | "unklar";

export type NewsPriority = "hoch" | "mittel" | "niedrig";

export type NewsCategory =
  | "Vorschriften & Formalitäten"
  | "Revier & Sicherheit"
  | "Ankern & Bojen"
  | "Marinas & Infrastruktur"
  | "Einreise & Schengen"
  | "Gebühren & Permit-Kosten"
  | "Anreise & Logistik"
  | "Apps & Navigation";

export const ALL_NEWS_CATEGORIES: NewsCategory[] = [
  "Vorschriften & Formalitäten",
  "Revier & Sicherheit",
  "Ankern & Bojen",
  "Marinas & Infrastruktur",
  "Einreise & Schengen",
  "Gebühren & Permit-Kosten",
  "Anreise & Logistik",
  "Apps & Navigation",
];

export interface NewsItemMeta {
  slug: string;
  title: string;
  excerpt: string;
  content_type: NewsContentType;
  region: string;
  country_or_area: string;
  status: NewsStatus;
  effective_from: string;   // ISO date: "2026-01-01"
  published_at: string;     // ISO date
  updated_at: string;       // ISO date
  priority: NewsPriority;
  category: NewsCategory;
  source_name: string;
  source_url: string;
  customer_impact: string;
  action_advice: string;
  show_on_blog: boolean;
  show_on_region_page: boolean;
  linked_region_slug: string;
  canonical_topic_key: string;
  // optional
  seo_title?: string;
  meta_description?: string;
  is_featured?: boolean;
  is_update_of?: string;
  related_base_slug?: string;
}

export interface NewsItem extends NewsItemMeta {
  content: ReactNode;
}
