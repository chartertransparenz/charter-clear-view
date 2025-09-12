import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.info('[Index] minimal render');
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
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-semibold">Startseite (Minimal)</h1>
        <p className="mt-2 opacity-80">Temporärer Minimal-Render zur Fehlereingrenzung.</p>
      </main>
    </div>
  );
};

export default Index;

