import { getNewsCountForRegion } from "@/news/items/index";

interface Props {
  regionSlug: string;
}

/**
 * Kleiner, ruhiger Verweis auf aktuelle Törn-Hinweise.
 * Wird in der Besonderheit-Card (oder darunter) eingebettet,
 * wenn show_on_region_page-Hinweise für die Region vorliegen.
 * Verlinkung auf #aktuelle-toern-hinweise (NewsRegionTeaser weiter unten).
 */
export function NewsRegionHint({ regionSlug }: Props) {
  const count = getNewsCountForRegion(regionSlug);
  if (count === 0) return null;

  const label =
    count === 1
      ? "1 aktueller Törn-Hinweis"
      : `${count} aktuelle Törn-Hinweise`;

  return (
    <div className="mt-3 pt-2 border-t border-gray-100">
      <a
        href="#aktuelle-toern-hinweise"
        className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
      >
        {label} →
      </a>
    </div>
  );
}
