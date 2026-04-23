import { useEffect, Suspense, lazy } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRelatedPosts } from "@/blog/posts/index";
import { type BlogCategory } from "@/blog/types";

const CharterRequestForm = lazy(() => import("@/components/CharterRequestForm"));

const BASE_URL = "https://chartertransparenz.de";

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "Reviere & Destinationen":          "bg-ocean-light/60 text-ocean-dark",
  "Charterwissen & Kosten":           "bg-sunset/15 text-amber-800",
  "Törnplanung & Vorbereitung":       "bg-green-50 text-green-800",
  "Yachtwahl & Bordleben":            "bg-wave/60 text-ocean-dark",
  "Segelpraxis & Sicherheit":         "bg-red-50 text-red-800",
  "Inspiration & Erfahrungsberichte": "bg-purple-50 text-purple-800",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.relatedSlugs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle,
    description: post.metaDescription,
    image: `${BASE_URL}${post.ogImage}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "CharterTransparenz",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CharterTransparenz",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/lovable-uploads/c1b9b340-d2ee-4fa1-907f-0c1403219be9.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Meta
        title={post.seoTitle}
        description={post.metaDescription}
        ogImage={`${BASE_URL}${post.ogImage}`}
        canonical={`${BASE_URL}/blog/${post.slug}`}
      />
      <JsonLd json={articleSchema} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[320px] bg-gray-200 mt-16">
          <img
            src={post.heroImage}
            alt={post.heroImageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto px-4">
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
                  CATEGORY_COLORS[post.category]
                }`}
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Sticky Breadcrumb */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
          <div className="container mx-auto px-4 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Start</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="max-w-[200px] truncate">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Article */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime} Min. Lesezeit</span>
            </div>

            {/* Content */}
            <div className="blog-content">
              {post.content}
            </div>

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Häufige Fragen
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                        <span>{item.question}</span>
                        <span className="ml-4 text-ocean-blue text-xl font-light group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-ocean-light/20 border-t border-ocean-light/40 border-b border-ocean-light/30">
          <div className="container mx-auto px-4 py-14">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-medium text-ocean-blue uppercase tracking-wide mb-3">
                Persönliche Beratung
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Unsicher, welcher Törnplan zu Ihnen passt?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Wir beraten Sie unabhängig und ohne Verkaufsdruck – auf Basis von über 30 Jahren
                Charter-Erfahrung. Gerne besprechen wir Revier, Boot und Budget mit Ihnen persönlich.
              </p>
              <Suspense fallback={<Button size="lg" disabled>Anfrage stellen</Button>}>
                <CharterRequestForm>
                  <Button
                    size="lg"
                    className="bg-ocean-dark hover:bg-ocean-blue text-white border-0 shadow-sm transition-smooth"
                  >
                    Unverbindlich anfragen
                  </Button>
                </CharterRequestForm>
              </Suspense>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="container mx-auto px-4 py-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Weitere Artikel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={rel.heroImage}
                      alt={rel.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${
                        CATEGORY_COLORS[rel.category]
                      }`}
                    >
                      {rel.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-ocean-blue transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{rel.teaser}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
