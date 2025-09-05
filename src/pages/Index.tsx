import { useEffect } from "react";
import { useMetaTags } from "@/hooks/useMetaTags";
import { StructuredData } from "@/components/StructuredData";
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

const Index = () => {
  useMetaTags({
    title: "Yachtcharter Preisvergleich | 30 Jahre Erfahrung",
    description: "Yachtcharter Preisvergleich ✓ 30+ Jahre Erfahrung ✓ Kroatien, Griechenland, Italien ab 890€/Woche. Jetzt Angebot anfragen!",
    keywords: ["Yachtcharter", "Segelyacht mieten", "Katamaran mieten", "Bootsverleih", "Charteryacht"],
    canonicalUrl: "https://chartertransparenz.de/"
  });

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

  return (
    <div className="min-h-screen">
      <StructuredData
        organization={{
          name: "CharterTransparenz",
          description: "Yachtcharter Preisvergleich mit 30 Jahren Erfahrung",
          url: "https://chartertransparenz.de",
          logo: "https://chartertransparenz.de/lovable-uploads/a9305207-ab9c-4262-8c60-767957fb449f.png",
          contactPoint: {
            telephone: "+49-123-456789",
            contactType: "customer service"
          }
        }}
      />
      <Navigation />
      <FloatingCTA />
      <FloatingWhatsApp />
      <Hero />
      <Territories />
      <Services />
      <Fleet />
      <Partners />
      <Contact />
      <TopDestinations />
      
    </div>
  );
};

export default Index;
