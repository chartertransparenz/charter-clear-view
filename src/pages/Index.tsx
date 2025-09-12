import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Territories from "../components/Territories";
import Services from "../components/Services";

const Index = () => {
  useEffect(() => {
    console.info('[Index] with Navigation + Hero + Territories + Services');
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
      <Navigation />
      <Hero />
      <Territories />
      <Services />
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-semibold">Navigation + Hero + Territories + Services Test</h1>
        <p className="mt-2 opacity-80">Weitere Komponenten hinzugefügt.</p>
      </main>
    </div>
  );
};

export default Index;

