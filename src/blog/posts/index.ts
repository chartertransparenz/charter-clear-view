import type { BlogPost } from "../types";
import { yachtcharterChalkidikiThessalonikiNikitiKeramoti } from "./yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti";
import { autopilotYachtcharterAusguckpflichtKvr5 } from "./autopilot-yachtcharter-ausguckpflicht-kvr-5";
import { kroatienYachtcharterSicherheitsregeln } from "./kroatien-yachtcharter-sicherheitsregeln";
import { egadiInselnYachtcharterPermitBojenAnkern } from "./egadi-inseln-yachtcharter-permit-bojen-ankern";
import { cabreraYachtcharterPermitBojen } from "./cabrera-yachtcharter-permit-bojen";
import { digitaleMautKroatien2027 } from "./digitale-maut-kroatien-2027";
import { richtigAnkernYachtcharter } from "./richtig-ankern-yachtcharter";
import { yachtcharterGriechenlandWelchesRevierPasst } from "./yachtcharter-griechenland-welches-revier-passt";
import { neueAnkerregelnKroatien202670MeterZone } from "./neue-ankerregeln-kroatien-2026-70-meter-zone";
import { wasKostetYachtcharter } from "./was-kostet-yachtcharter";
import { kroatienEinsteiger } from "./kroatien-einsteiger";
import { bareboatOderSkipper } from "./bareboat-oder-skipper";

// Registry: alle Blog-Posts in umgekehrt chronologischer Reihenfolge
export const allPosts: BlogPost[] = [
  yachtcharterChalkidikiThessalonikiNikitiKeramoti,
  autopilotYachtcharterAusguckpflichtKvr5,
  kroatienYachtcharterSicherheitsregeln,
  egadiInselnYachtcharterPermitBojenAnkern,
  cabreraYachtcharterPermitBojen,
  digitaleMautKroatien2027,
  richtigAnkernYachtcharter,
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
