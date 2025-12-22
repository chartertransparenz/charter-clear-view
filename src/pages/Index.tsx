import { useEffect, Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Territories from "@/components/Territories";
import Partners from "@/components/Partners";
const Contact = lazy(() => import("@/components/Contact"));
import TopDestinations from "@/components/TopDestinations";
import FloatingCTA from "@/components/FloatingCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NausysWidget from "@/components/NausysWidget";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";

const Index = () => {
  const m = META.home;
  
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CharterTransparenz",
        "url": "https://chartertransparenz.de",
        "logo": "https://chartertransparenz.de/logo.png",
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+49-xxx-xxxxxxx",
          "contactType": "customer service",
          "areaServed": "EU"
        }]
      }} />
      <div className="min-h-screen">
        <Navigation />
        <FloatingCTA />
        <FloatingWhatsApp />
        <Hero />
        <NausysWidget profileKey="default" customTitle="Yacht-Suche" />
        <Territories />
        <Fleet />
        <Partners />
        <Services />
        <Suspense fallback={<div className="p-6 text-center">Kontakt lädt…</div>}>
          <Contact />
        </Suspense>
        <TopDestinations />
      </div>
    </>
  );
};

export default Index;
