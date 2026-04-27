import type { NewsItem } from "../types";
import { kroatienAnkernAbstaendeKontrollen2026 } from "./kroatien-ankern-abstaende-kontrollen-2026";
import { neueEuGrenzregelnNonEuCrewYachtcharter } from "./neue-eu-grenzregeln-non-eu-crew-yachtcharter";
import { montenegroDutyFreeDieselOhneMindestaufenthalt } from "./montenegro-duty-free-diesel-ohne-mindestaufenthalt";
import { tuerkeiGoecekBojenfelder2026 } from "./tuerkei-goecek-bojenfelder-2026";
// Import: 2026-04-24
import { sardinienLaMaddalenaNachtankerverbot2026 } from "./sardinien-la-maddalena-nachtankerverbot-2026";
import { eesItalienNonEuCrewUpdate2026 } from "./ees-italien-non-eu-crew-update-2026";
import { etiasReisegenehmigungEu2026 } from "./etias-reisegenehmigung-eu-2026";
import { bahamasCruisingPermits2026 } from "./bahamas-cruising-permits-2026";

// Registry: alle News-Items in umgekehrt chronologischer Reihenfolge
export const allNewsItems: NewsItem[] = [
  sardinienLaMaddalenaNachtankerverbot2026,
  eesItalienNonEuCrewUpdate2026,
  etiasReisegenehmigungEu2026,
  bahamasCruisingPermits2026,
  kroatienAnkernAbstaendeKontrollen2026,
  neueEuGrenzregelnNonEuCrewYachtcharter,
  montenegroDutyFreeDieselOhneMindestaufenthalt,
  tuerkeiGoecekBojenfelder2026,
];

export function getNewsItemBySlug(slug: string): NewsItem | undefined {
  return allNewsItems.find((item) => item.slug === slug);
}

export function getNewsItemsForBlog(): NewsItem[] {
  return allNewsItems.filter((item) => item.show_on_blog);
}

export function getNewsItemsForRegion(regionSlug: string): NewsItem[] {
  return allNewsItems.filter(
    (item) => item.show_on_region_page && item.linked_region_slug === regionSlug
  );
}

export function getFeaturedNewsItems(): NewsItem[] {
  return allNewsItems.filter((item) => item.is_featured);
}
