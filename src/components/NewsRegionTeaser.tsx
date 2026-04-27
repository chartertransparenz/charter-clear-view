import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { getNewsItemsForRegion } from "@/news/items/index";
import type { NewsStatus, NewsContentType } from "@/news/types";

const STATUS_LABEL: Record<NewsStatus, string> = {
  in_kraft: "In Kraft",
  angekuendigt: "Angekündigt",
  update: "Update",
  unklar: "Unklar",
};

const STATUS_CLASS: Record<NewsStatus, string> = {
  in_kraft: "bg-green-50 text-green-700 border-green-200",
  angekuendigt: "bg-amber-50 text-amber-700 border-amber-200",
  update: "bg-blue-50 text-blue-700 border-blue-200",
  unklar: "bg-gray-50 text-gray-600 border-gray-200",
};

const TYPE_LABEL: Record<NewsContentType, string> = {
  basis_hinweis: "Basis-Hinweis",
  update: "Aktualisierung",
  kurzmeldung: "Kurzmeldung",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface Props {
  regionSlug: string;
  regionLabel?: string;
}

export default function NewsRegionTeaser({ regionSlug, regionLabel }: Props) {
  const items = getNewsItemsForRegion(regionSlug);

  if (items.length === 0) return null;

  const heading = regionLabel
    ? `Aktuelle Hinweise für ${regionLabel}`
    : "Aktuelle Törn-Hinweise";

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="border-l-4 border-ocean-blue pl-5 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Neue Regeln, Gebühren und Revier-Updates für Ihren Törn.
        </p>
      </div>

      <div className="space-y-4">
        {items.slice(0, 3).map((item) => (
          <Link
            key={item.slug}
            to={`/news/${item.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 bg-white border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <Badge
                  variant="outline"
                  className={`text-xs font-medium ${STATUS_CLASS[item.status]}`}
                >
                  {STATUS_LABEL[item.status]}
                </Badge>
                <span className="text-xs text-gray-400">
                  {TYPE_LABEL[item.content_type]}
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">·</span>
                <span className="text-xs text-gray-400">
                  ab {formatDate(item.effective_from)}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-ocean-blue transition-colors leading-snug">
                {item.title}
              </p>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                {item.excerpt}
              </p>
            </div>
            <span className="text-sm font-medium text-ocean-blue group-hover:text-ocean-dark whitespace-nowrap transition-colors self-center">
              Details →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-right">
        <Link
          to="/news"
          className="text-sm text-ocean-blue hover:text-ocean-dark transition-colors"
        >
          Alle Törn-Hinweise ansehen →
        </Link>
      </div>
    </div>
  );
}
