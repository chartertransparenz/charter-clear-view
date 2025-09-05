import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Essential territory pages
const Mediterranean = lazy(() => import("./pages/territories/Mediterranean"));
const Croatia = lazy(() => import("./pages/territories/mediterranean/Croatia"));
const Greece = lazy(() => import("./pages/territories/mediterranean/Greece"));
const Italy = lazy(() => import("./pages/territories/mediterranean/Italy"));
const Caribbean = lazy(() => import("./pages/territories/Caribbean"));
const AllTerritories = lazy(() => import("./pages/AllTerritories"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Test with minimal Index replacement
const SimpleIndex = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Yachtcharter Preisvergleich</h1>
      <p className="text-lg mb-8">30 Jahre Erfahrung im Yachtcharter</p>
      <div className="space-y-4">
        <a href="/reviere/mittelmeer" className="block text-blue-600 hover:underline">→ Mittelmeer</a>
        <a href="/reviere/karibik" className="block text-blue-600 hover:underline">→ Karibik</a>
        <a href="/reviere/alle-reviere" className="block text-blue-600 hover:underline">→ Alle Reviere</a>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<SimpleIndex />} />
          <Route path="/reviere/alle-reviere" element={<AllTerritories />} />
          
          {/* Mittelmeer Routen */}
          <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
          <Route path="/reviere/mittelmeer/kroatien" element={<Croatia />} />
          <Route path="/reviere/mittelmeer/griechenland" element={<Greece />} />
          <Route path="/reviere/mittelmeer/italien" element={<Italy />} />
          
          {/* Karibik Routen */}
          <Route path="/reviere/karibik" element={<Caribbean />} />
          
          <Route path="*" element={<div className="p-8"><h1>Seite nicht gefunden</h1></div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;