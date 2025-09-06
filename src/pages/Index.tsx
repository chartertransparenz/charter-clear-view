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
// import { META } from "@/seo/meta.config";
// import { Meta } from "@/seo/Meta";

const Index = () => {
  console.log("Index component loading");
  // const m = META.home;
  // console.log("Meta config loaded:", m);
  
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

  console.log("Rendering Index component");
  return (
    <>
      {/* <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      /> */}
      <div className="min-h-screen">
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
    </>
  );
};

export default Index;
