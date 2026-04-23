import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { Badge } from "@/components/ui/badge";
import { allPosts } from "@/blog/posts/index";
import { ALL_CATEGORIES, type BlogCategory } from "@/blog/types";

const BASE_URL = "https://chartertransparenz.de";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "Reviere & Destinationen":        "bg-ocean-light/60 text-ocean-dark",
  "Charterwissen & Kosten":         "bg-sunset/15 text-amber-800",
  "Törnplanung & Vorbereitung":     "bg-green-50 text-green-800",
  "Yachtwahl & Bordleben":          "bg-wave/60 text-ocean-dark",
  "Segelpraxis & Sicherheit":       "bg-red-50 text-red-800",
  "Inspiration & Erfahrungsberichte": "bg-purple-50 text-purple-800",
};

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "Alle">("Alle");

  const filtered =
    activeCategory === "Alle"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Meta
        title="Blog – Charterwissen, Reviere & Tipps | CharterTransparenz"
        description="Fundiertes Wissen rund um Yachtcharter: Reviere, Kosten, Törnplanung und Segelpraxis – klar erklärt von erfahrenen Charter-Experten."
        ogImage={`${BASE_URL}/og/home.jpg`}
        canonical={`${BASE_URL}/blog`}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Page Header */}
        <div className="pt-24 pb-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-ocean-blue tracking-wide uppercase mb-3">
                Wissen &amp; Orientierung
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Charter-Blog
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fundiertes Wissen für Ihren nächsten Törn – Reviere, Kosten,
                Planung und Segelpraxis, klar und ohne Werbetexte erklärt.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-100 sticky top-16 z-10">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory("Alle")}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "Alle"
                    ? "bg-ocean-dark text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Alle
              </button>
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-ocean-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="container mx-auto px-4 py-12">
          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-16">
              Keine Artikel in dieser Kategorie gefunden.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Category + Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          CATEGORY_COLORS[post.category]
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-ocean-blue transition-colors">
                      {post.title}
                    </h2>

                    {/* Teaser */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {post.teaser}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        {post.readingTime} Min. Lesezeit
                      </span>
                      <span className="text-sm font-medium text-ocean-blue group-hover:text-ocean-dark transition-colors">
                        Weiterlesen →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
