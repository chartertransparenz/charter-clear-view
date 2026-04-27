import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { getNewsItemBySlug, allNewsItems } from "@/news/items/index";
import type { NewsStatus, NewsContentType } from "@/news/types";

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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getNewsItemBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return <Navigate to="/news" replace />;
  }

  const canonical = `${BASE_URL}/news/${item.slug}`;
  const seoTitle = item.seo_title ?? `${item.title} | CharterTransparenz`;
  const metaDesc =
    item.meta_description ??
    `${item.excerpt} – Aktuelle Törn-Hinweise von CharterTransparenz.`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.excerpt,
    datePublished: item.published_at,
    dateModified: item.updated_at,
    publisher: {
      "@type": "Organization",
      name: "CharterTransparenz",
      url: BASE_URL,
    },
    mainEntityOfPage: canonical,
  };

  // Related items: same region or category, excluding current
  const related = allNewsItems
    .filter(
      (n) =>
        n.slug !== item.slug &&
        (n.region === item.region || n.category === item.category)
    )
    .slice(0, 3);

  return (
    <>
      <Meta
        title={seoTitle}
        description={metaDesc}
        ogImage={`${BASE_URL}/og/home.jpg`}
        canonical={canonical}
        ogType="article"
      />
      <JsonLd json={articleSchema} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Breadcrumb */}
        <div className="pt-20 pb-0 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
              <Link to="/" className="hover:text-ocean-blue transition-colors">
                Start
              </Link>
              <span>/</span>
              <Link to="/news" className="hover:text-ocean-blue transition-colors">
                Törn-Hinweise
              </Link>
              <span>/</span>
              <span className="text-gray-700 truncate max-w-xs">{item.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <div className="container mx-auto px-4 py-10 max-w-3xl">

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant="outline"
              className={`text-xs font-medium ${STATUS_CLASS[item.status]}`}
            >
              {STATUS_LABEL[item.status]}
            </Badge>
            <Badge variant="outline" className="text-xs text-gray-500 border-gray-200">
              {TYPE_LABEL[item.content_type]}
            </Badge>
            <Badge variant="outline" className="text-xs text-gray-500 border-gray-200">
              {item.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {item.title}
          </h1>

          {/* Info row */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
            <span>
              <span className="font-medium text-gray-700">Revier:</span> {item.region}
            </span>
            <span>
              <span className="font-medium text-gray-700">Wirksam ab:</span>{" "}
              {formatDate(item.effective_from)}
            </span>
            <span>
              <span className="font-medium text-gray-700">Veröffentlicht:</span>{" "}
              {formatDate(item.published_at)}
            </span>
            {item.updated_at !== item.published_at && (
              <span>
                <span className="font-medium text-gray-700">Aktualisiert:</span>{" "}
                {formatDate(item.updated_at)}
              </span>
            )}
          </div>

          {/* Excerpt / Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
            {item.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-gray prose-headings:font-semibold prose-headings:text-gray-900 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-gray-800 max-w-none">
            {item.content}
          </div>

          {/* Impact + Advice boxes */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Bedeutung für Charterkunden
              </p>
              <p className="text-sm text-blue-900 leading-relaxed">
                {item.customer_impact}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
                Empfohlene Maßnahmen
              </p>
              <p className="text-sm text-green-900 leading-relaxed">
                {item.action_advice}
              </p>
            </div>
          </div>

          {/* Source */}
          {item.source_name && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-600">
              <span className="font-medium text-gray-700">Quelle: </span>
              {item.source_url ? (
                <a
                  href={item.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean-blue hover:underline"
                >
                  {item.source_name}
                </a>
              ) : (
                item.source_name
              )}
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100 text-sm text-amber-800 leading-relaxed">
            Regeln können sich kurzfristig ändern. Prüfen Sie vor dem Törn immer die
            aktuellen Informationen beim Vercharterer und bei den zuständigen Behörden.
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-ocean-light/20 rounded-xl border border-ocean-light/40 text-center">
            <p className="text-gray-700 mb-2 font-medium">
              Unsicher, ob dieser Hinweis Ihren Törn betrifft?
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Wenn Sie unsicher sind, ob diese Regel Ihren Törn betrifft, prüfen wir
              das gerne gemeinsam. Wir zeigen Ihnen transparent, worauf Sie bei der
              Törnplanung achten sollten.
            </p>
            <Link
              to="/#anfrage"
              className="inline-block bg-ocean-dark text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-ocean-blue transition-colors"
            >
              Unverbindlich anfragen
            </Link>
          </div>

          {/* Back + Related */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/news"
                className="text-sm text-ocean-blue hover:text-ocean-dark transition-colors"
              >
                ← Alle Törn-Hinweise
              </Link>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-4">
                  Weitere Hinweise
                </h2>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/news/${r.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow bg-white"
                    >
                      <Badge
                        variant="outline"
                        className={`text-xs shrink-0 mt-0.5 ${STATUS_CLASS[r.status]}`}
                      >
                        {STATUS_LABEL[r.status]}
                      </Badge>
                      <span className="text-sm text-gray-800 group-hover:text-ocean-blue transition-colors leading-snug">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
