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
        "@type": "LocalBusiness",
        "name": "CharterTransparenz",
        "url": "https://chartertransparenz.de",
        "logo": "https://chartertransparenz.de/logo.png",
        "image": "https://chartertransparenz.de/og/home.jpg",
        "description": "Premium Yachtcharter weltweit – 30 Jahre Erfahrung, 8.000+ Segelyachten & Katamarane, 250+ verifizierte Partner in 30+ Ländern.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Goethestraße 24",
          "addressLocality": "Kressbronn",
          "postalCode": "88079",
          "addressCountry": "DE"
        },
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+49-7543-499080",
          "contactType": "customer service",
          "areaServed": "EU",
          "availableLanguage": "German"
        }],
        "sameAs": [
          "https://www.facebook.com/chartertransparenz",
          "https://www.instagram.com/chartertransparenz"
        ]
      }} />
      <div className="min-h-screen">
        <Navigation />
        <FloatingCTA />
        <FloatingWhatsApp />
        <Hero />
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
