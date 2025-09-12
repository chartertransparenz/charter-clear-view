import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Index = () => {
  useEffect(() => {
    console.info('[Index] with Navigation + Hero');
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
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-semibold">Navigation + Hero Test</h1>
        <p className="mt-2 opacity-80">Hero-Bereich hinzugefügt.</p>
      </main>
    </div>
  );
};

export default Index;

