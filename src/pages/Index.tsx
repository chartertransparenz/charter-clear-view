import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Territories from "@/components/Territories";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
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
        keywords={m.keywords}
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
        
        {/* Crawlbarer Einleitungstext für SEO */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-50 p-6 rounded-lg">
              <p className="text-lg leading-relaxed text-gray-800">
                <strong>Charter Transparenz – Ihr Yachtcharter-Experte seit 30 Jahren:</strong> Mieten Sie Segelyachten und Katamarane in den schönsten Revieren weltweit. Von der kroatischen Adria über die griechischen Inseln bis zur türkischen Riviera – wir bieten Ihnen transparente Preise, persönliche Beratung und 30 Jahre Charterexpertise. Entdecken Sie über 1.200 kroatische Inseln, segeln Sie zu Mykonos und Santorini oder erkunden Sie die Türkisküste der Türkei. Alle Yachten geprüft, alle Preise fair, alle Träume möglich. Starten Sie jetzt Ihr Segelabenteuer!
              </p>
            </div>
          </div>
        </section>
        
        <Territories />
        <Services />
        <Fleet />
        <Partners />
        <Contact />
        <TopDestinations />
      </div>
    </>
  );
};

export default Index;
