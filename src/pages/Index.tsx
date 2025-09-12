import { useEffect } from "react";
import Navigation from "../components/Navigation";

const Index = () => {
  useEffect(() => {
    console.info('[Index] with Navigation');
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
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-semibold">Startseite mit Navigation</h1>
        <p className="mt-2 opacity-80">Navigation hinzugefügt - Test läuft.</p>
      </main>
    </div>
  );
};

export default Index;

