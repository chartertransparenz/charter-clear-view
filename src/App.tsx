import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Alle Territory-Seiten - komplett
const Mediterranean = lazy(() => import("./pages/territories/Mediterranean"));
const Caribbean = lazy(() => import("./pages/territories/Caribbean"));
const Atlantic = lazy(() => import("./pages/territories/Atlantic"));
const Americas = lazy(() => import("./pages/territories/Americas"));
const Pacific = lazy(() => import("./pages/territories/Pacific"));
const IndianOcean = lazy(() => import("./pages/territories/IndianOcean"));
const NorthEurope = lazy(() => import("./pages/territories/NorthEurope"));
const Expeditions = lazy(() => import("./pages/territories/Expeditions"));
const Australia = lazy(() => import("./pages/territories/Australia"));
const BVI = lazy(() => import("./pages/territories/BVI"));
const Seychelles = lazy(() => import("./pages/territories/Seychelles"));
const Thailand = lazy(() => import("./pages/territories/Thailand"));

// Mittelmeer Unterseiten
const Croatia = lazy(() => import("./pages/territories/mediterranean/Croatia"));
const Greece = lazy(() => import("./pages/territories/mediterranean/Greece"));
const Italy = lazy(() => import("./pages/territories/mediterranean/Italy"));
const Spain = lazy(() => import("./pages/territories/Spain"));
const France = lazy(() => import("./pages/territories/France"));
const Turkey = lazy(() => import("./pages/territories/Turkey"));

// Karibik Unterseiten
const BritishVirginIslands = lazy(() => import("./pages/territories/caribbean/BritishVirginIslands"));
const USVirginIslands = lazy(() => import("./pages/territories/caribbean/USVirginIslands"));
const WindwardIslands = lazy(() => import("./pages/territories/caribbean/WindwardIslands"));
const LeewardIslands = lazy(() => import("./pages/territories/caribbean/LeewardIslands"));
const Cuba = lazy(() => import("./pages/territories/caribbean/Cuba"));

// Atlantik Unterseiten
const Azores = lazy(() => import("./pages/territories/atlantic/Azores"));
const CanaryIslands = lazy(() => import("./pages/territories/atlantic/CanaryIslands"));
const FrenchAtlanticCoast = lazy(() => import("./pages/territories/atlantic/FrenchAtlanticCoast"));

// Amerika Unterseiten
const Bahamas = lazy(() => import("./pages/territories/americas/Bahamas"));
const FloridaKeys = lazy(() => import("./pages/territories/americas/FloridaKeys"));
const Mexico = lazy(() => import("./pages/territories/americas/Mexico"));
const USAEastCoast = lazy(() => import("./pages/territories/americas/USAEastCoast"));
const Belize = lazy(() => import("./pages/territories/americas/Belize"));

// Charter Locations - Americas
const Annapolis = lazy(() => import("./pages/territories/americas/charter-locations/Annapolis"));
const Boston = lazy(() => import("./pages/territories/americas/charter-locations/Boston"));
const Cancun = lazy(() => import("./pages/territories/americas/charter-locations/Cancun"));
const Cozumel = lazy(() => import("./pages/territories/americas/charter-locations/Cozumel"));
const Georgetown = lazy(() => import("./pages/territories/americas/charter-locations/Georgetown"));
const KeyLargo = lazy(() => import("./pages/territories/americas/charter-locations/KeyLargo"));
const KeyWest = lazy(() => import("./pages/territories/americas/charter-locations/KeyWest"));
const Nassau = lazy(() => import("./pages/territories/americas/charter-locations/Nassau"));
const Newport = lazy(() => import("./pages/territories/americas/charter-locations/Newport"));

// Charter Locations - Caribbean
const Antigua = lazy(() => import("./pages/territories/caribbean/charter-locations/Antigua"));
const Havanna = lazy(() => import("./pages/territories/caribbean/charter-locations/Havanna"));
const Martinique = lazy(() => import("./pages/territories/caribbean/charter-locations/Martinique"));
const StThomas = lazy(() => import("./pages/territories/caribbean/charter-locations/StThomas"));
const Tortola = lazy(() => import("./pages/territories/caribbean/charter-locations/Tortola"));

// Azoren Unterseiten
const Faial = lazy(() => import("./pages/territories/atlantic/azores/Faial"));
const SaoMiguel = lazy(() => import("./pages/territories/atlantic/azores/SaoMiguel"));
const Terceira = lazy(() => import("./pages/territories/atlantic/azores/Terceira"));

// Kanaren Unterseiten
const Fuerteventura = lazy(() => import("./pages/territories/atlantic/canary-islands/Fuerteventura"));
const GranCanaria = lazy(() => import("./pages/territories/atlantic/canary-islands/GranCanaria"));
const Lanzarote = lazy(() => import("./pages/territories/atlantic/canary-islands/Lanzarote"));
const Tenerife = lazy(() => import("./pages/territories/atlantic/canary-islands/Tenerife"));

// Französische Atlantikküste Unterseiten
const Biskaya = lazy(() => import("./pages/territories/atlantic/french-atlantic-coast/Biskaya"));
const BrittanyNormandy = lazy(() => import("./pages/territories/atlantic/french-atlantic-coast/BrittanyNormandy"));

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
          
          {/* Hauptregionen */}
          <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
          <Route path="/reviere/karibik" element={<Caribbean />} />
          <Route path="/reviere/atlantik" element={<Atlantic />} />
          <Route path="/reviere/amerika" element={<Americas />} />
          <Route path="/reviere/pazifik" element={<Pacific />} />
          <Route path="/reviere/indischer-ozean" element={<IndianOcean />} />
          <Route path="/reviere/nordeuropa" element={<NorthEurope />} />
          <Route path="/reviere/expeditionen" element={<Expeditions />} />
          <Route path="/reviere/pazifik/australien" element={<Australia />} />
          <Route path="/reviere/bvi" element={<BVI />} />
          <Route path="/reviere/indischer-ozean/seychellen" element={<Seychelles />} />
          <Route path="/reviere/pazifik/thailand" element={<Thailand />} />
          
          {/* Mittelmeer Unterseiten */}
          <Route path="/reviere/mittelmeer/kroatien" element={<Croatia />} />
          <Route path="/reviere/mittelmeer/griechenland" element={<Greece />} />
          <Route path="/reviere/mittelmeer/italien" element={<Italy />} />
          <Route path="/reviere/mittelmeer/spanien" element={<Spain />} />
          <Route path="/reviere/mittelmeer/frankreich" element={<France />} />
          <Route path="/reviere/mittelmeer/tuerkei" element={<Turkey />} />
          
          {/* Karibik Unterseiten */}
          <Route path="/reviere/karibik/british-virgin-islands" element={<BritishVirginIslands />} />
          <Route path="/reviere/karibik/us-virgin-islands" element={<USVirginIslands />} />
          <Route path="/reviere/karibik/windward-islands" element={<WindwardIslands />} />
          <Route path="/reviere/karibik/leeward-islands" element={<LeewardIslands />} />
          <Route path="/reviere/karibik/kuba" element={<Cuba />} />
          
          {/* Atlantik Unterseiten */}
          <Route path="/reviere/atlantik/azoren" element={<Azores />} />
          <Route path="/reviere/atlantik/kanaren" element={<CanaryIslands />} />
          <Route path="/reviere/atlantik/franzoesische-atlantikkueste" element={<FrenchAtlanticCoast />} />
          
          {/* Amerika Unterseiten */}
          <Route path="/reviere/amerika/bahamas" element={<Bahamas />} />
          <Route path="/reviere/amerika/florida-keys" element={<FloridaKeys />} />
          <Route path="/reviere/amerika/mexiko" element={<Mexico />} />
          <Route path="/reviere/amerika/usa-ostkueste" element={<USAEastCoast />} />
          <Route path="/reviere/amerika/belize" element={<Belize />} />
          
          {/* Charter Locations - Americas */}
          <Route path="/charter-standorte/annapolis" element={<Annapolis />} />
          <Route path="/charter-standorte/boston" element={<Boston />} />
          <Route path="/charter-standorte/cancun" element={<Cancun />} />
          <Route path="/charter-standorte/cozumel" element={<Cozumel />} />
          <Route path="/charter-standorte/georgetown" element={<Georgetown />} />
          <Route path="/charter-standorte/key-largo" element={<KeyLargo />} />
          <Route path="/charter-standorte/key-west" element={<KeyWest />} />
          <Route path="/charter-standorte/nassau" element={<Nassau />} />
          <Route path="/charter-standorte/newport" element={<Newport />} />
          
          {/* Charter Locations - Caribbean */}
          <Route path="/charter-standorte/antigua" element={<Antigua />} />
          <Route path="/charter-standorte/havanna" element={<Havanna />} />
          <Route path="/charter-standorte/martinique" element={<Martinique />} />
          <Route path="/charter-standorte/st-thomas" element={<StThomas />} />
          <Route path="/charter-standorte/tortola" element={<Tortola />} />
          
          {/* Azoren Unterseiten */}
          <Route path="/reviere/atlantik/azoren/faial" element={<Faial />} />
          <Route path="/reviere/atlantik/azoren/sao-miguel" element={<SaoMiguel />} />
          <Route path="/reviere/atlantik/azoren/terceira" element={<Terceira />} />
          
          {/* Kanaren Unterseiten */}
          <Route path="/reviere/atlantik/kanaren/fuerteventura" element={<Fuerteventura />} />
          <Route path="/reviere/atlantik/kanaren/gran-canaria" element={<GranCanaria />} />
          <Route path="/reviere/atlantik/kanaren/lanzarote" element={<Lanzarote />} />
          <Route path="/reviere/atlantik/kanaren/teneriffa" element={<Tenerife />} />
          
          {/* Französische Atlantikküste Unterseiten */}
          <Route path="/reviere/atlantik/franzoesische-atlantikkueste/biskaya" element={<Biskaya />} />
          <Route path="/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie" element={<BrittanyNormandy />} />
          
          <Route path="*" element={<div className="p-8"><h1>Seite nicht gefunden</h1></div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;