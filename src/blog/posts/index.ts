import type { BlogPost } from "../types";
import { yachtcharterGriechenlandWelchesRevierPasst } from "./yachtcharter-griechenland-welches-revier-passt";
import { neueAnkerregelnKroatien202670MeterZone } from "./neue-ankerregeln-kroatien-2026-70-meter-zone";
import { wasKostetYachtcharter } from "./was-kostet-yachtcharter";
import { kroatienEinsteiger } from "./kroatien-einsteiger";
import { bareboatOderSkipper } from "./bareboat-oder-skipper";

// Registry: alle Blog-Posts in umgekehrt chronologischer Reihenfolge
export const allPosts: BlogPost[] = [
  yachtcharterGriechenlandWelchesRevierPasst,
  neueAnkerregelnKroatien202670MeterZone,
  kroatienEinsteiger,
  bareboatOderSkipper,
  wasKostetYachtcharter,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);
}
