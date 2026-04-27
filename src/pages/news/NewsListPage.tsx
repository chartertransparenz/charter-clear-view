import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { Badge } from "@/components/ui/badge";
import { allNewsItems } from "@/news/items/index";
import type { NewsStatus, NewsContentType, NewsCategory } from "@/news/types";

const BASE_URL = "https://chartertransparenz.de";

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

type FilterGroup = "Alle" | "Mittelmeer" | "Karibik & Fernreviere" | NewsCategory;

const FILTER_GROUPS: FilterGroup[] = [
  "Alle",
  "Mittelmeer",
  "Karibik & Fernreviere",
  "Vorschriften & Formalitäten",
  "Ankern & Bojen",
  "Gebühren & Permit-Kosten",
  "Einreise & Schengen",
];

const MEDITERRANEAN_REGIONS = [
  "Kroatien",
  "Griechenland",
  "Italien",
  "Spanien",
  "Spanien / Balearen",
  "Türkei",
  "Türkei / Göcek",
  "Montenegro",
  "Malta",
  "Frankreich",
  "Portugal",
  "EU-weit / Italien",
];

const REMOTE_REGIONS = [
  "Karibik",
  "Bahamas",
  "BVI",
  "US Virgin Islands",
  "Seychellen",
  "Thailand",
  "Australien",
  "Neuseeland",
  "Malediven",
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsListPage() {
  const [activeFilter, setActiveFilter] = useState<FilterGroup>("Alle");

  const filtered = allNewsItems.filter((item) => {
    if (activeFilter === "Alle") return true;
    if (activeFilter === "Mittelmeer") {
      return MEDITERRANEAN_REGIONS.some((r) =>
        item.region.toLowerCase().includes(r.toLowerCase()) ||
        r.toLowerCase().includes(item.region.toLowerCase())
      );
    }
    if (activeFilter === "Karibik & Fernreviere") {
      return REMOTE_REGIONS.some((r) =>
        item.region.toLowerCase().includes(r.toLowerCase()) ||
        r.toLowerCase().includes(item.region.toLowerCase())
      );
    }
    return item.category === activeFilter;
  });

  return (
    <>
      <Meta
        title="Aktuelle Törn-Hinweise – Yachtcharter News | CharterTransparenz"
        description="Neue Regeln, Gebühren, Revier-Updates und Sicherheitshinweise für Yachtcharter-Kunden. Immer aktuell, klar erklärt."
        ogImage={`${BASE_URL}/og/home.jpg`}
        canonical={`${BASE_URL}/news`}
        ogType="website"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Page Header */}
        <div className="pt-24 pb-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-ocean-blue tracking-wide uppercase mb-3">
                Revier-Updates
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Aktuelle Törn-Hinweise
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Neue Regeln, Gebühren, Revier-Updates und Sicherheitshinweise für
                Yachtcharter-Kunden. Klar erklärt, ohne Alarm.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border-b border-gray-100 sticky top-16 z-10">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
              {FILTER_GROUPS.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveFilter(group)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === group
                      ? "bg-ocean-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="container mx-auto px-4 py-12">
          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-16">
              Keine Hinweise in dieser Kategorie gefunden.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news/${item.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="flex flex-col flex-1 p-5">
                    {/* Status + Region */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${STATUS_CLASS[item.status]}`}
                      >
                        {STATUS_LABEL[item.status]}
                      </Badge>
                      <span className="text-xs text-gray-400 whitespace-nowrap truncate max-w-[120px]">
                        {item.region}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-ocean-blue transition-colors">
                      {item.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {item.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">
                          {TYPE_LABEL[item.content_type]}
                        </span>
                        <span className="text-xs text-gray-300">·</span>
                        <span className="text-xs text-gray-400">
                          ab {formatDate(item.effective_from)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-ocean-blue group-hover:text-ocean-dark transition-colors">
                        Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Note */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 text-sm text-gray-600 leading-relaxed">
            <p className="font-medium text-gray-700 mb-2">Hinweis zur Aktualität</p>
            <p>
              Diese Hinweise basieren auf den zum Zeitpunkt der Veröffentlichung verfügbaren
              Informationen. Revier-Regeln, Gebühren und Vorschriften können sich kurzfristig
              ändern. Prüfen Sie vor dem Törn immer die aktuellen Informationen beim
              Vercharterer und bei den zuständigen Behörden.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
