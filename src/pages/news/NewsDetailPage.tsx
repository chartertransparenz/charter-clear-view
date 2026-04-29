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
  update: "bg-sky-50 text-sky-700 border-sky-200",
  unklar: "bg-gray-50 text-gray-500 border-gray-200",
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

const DEFAULT_CTA =
  "Wenn Sie unsicher sind, ob dieser Hinweis Ihren Törn betrifft, prüfen wir das gerne gemeinsam mit Ihnen.";

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

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Breadcrumb */}
        <div className="pt-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
              <Link to="/" className="hover:text-gray-600 transition-colors">
                Start
              </Link>
              <span>/</span>
              <Link to="/news" className="hover:text-gray-600 transition-colors">
                Törn-Hinweise
              </Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-xs">{item.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <div className="container mx-auto px-4 py-10 max-w-3xl">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge
              variant="outline"
              className={`text-xs font-medium ${STATUS_CLASS[item.status]}`}
            >
              {STATUS_LABEL[item.status]}
            </Badge>
            <Badge variant="outline" className="text-xs text-gray-400 border-gray-200 bg-white">
              {TYPE_LABEL[item.content_type]}
            </Badge>
            <Badge variant="outline" className="text-xs text-gray-400 border-gray-200 bg-white">
              {item.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
            {item.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <span>
              <span className="text-gray-500">Revier:</span> {item.region}
            </span>
            <span>
              <span className="text-gray-500">Wirksam ab:</span>{" "}
              {formatDate(item.effective_from)}
            </span>
            <span>
              <span className="text-gray-500">Stand:</span>{" "}
              {formatDate(item.updated_at)}
            </span>
          </div>

          {/* Article image */}
          {item.image && (
            <figure className="mb-10">
              <img
                src={item.image}
                alt={item.imageAlt ?? item.title}
                className="w-full rounded-lg object-cover max-h-80"
              />
              {item.imageCaption && (
                <figcaption className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {item.excerpt}
          </p>

          {/* Article body */}
          <div className="
            prose prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4
            prose-ul:my-5 prose-ul:pl-6 prose-ul:list-disc
            prose-li:text-gray-700 prose-li:leading-relaxed prose-li:my-2
            prose-strong:text-gray-800 prose-strong:font-semibold
          ">
            {item.content}
          </div>

          {/* Source */}
          {item.source_name && (
            <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-400">
              <span className="text-gray-500">Quelle: </span>
              {item.source_url ? (
                <a
                  href={item.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 underline underline-offset-2 transition-colors"
                >
                  {item.source_name}
                </a>
              ) : (
                item.source_name
              )}
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Regeln können sich kurzfristig ändern. Prüfen Sie vor dem Törn immer die
            aktuellen Informationen beim Vercharterer und bei den zuständigen Behörden.
          </p>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              {item.cta_text ?? DEFAULT_CTA}
            </p>
            <Link
              to="/charter-anfrage"
              className="inline-block text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-5 py-2.5 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Unverbindlich anfragen
            </Link>
          </div>

          {/* Back + Related */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              to="/news"
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              ← Alle Törn-Hinweise
            </Link>

            {related.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Weitere Hinweise
                </p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/news/${r.slug}`}
                      className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                    >
                      <Badge
                        variant="outline"
                        className={`text-xs shrink-0 mt-0.5 ${STATUS_CLASS[r.status]}`}
                      >
                        {STATUS_LABEL[r.status]}
                      </Badge>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-snug">
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
