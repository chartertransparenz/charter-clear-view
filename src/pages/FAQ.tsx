import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import TopDestinations from "@/components/TopDestinations";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";


const FAQPage = () => {
  const m = META.faq;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <div className="min-h-screen">
        <Navigation />
        <FAQ />
        <TopDestinations />
      </div>
    </>
  );
};

export default FAQPage;