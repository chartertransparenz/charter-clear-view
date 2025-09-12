import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Footer from "./components/Footer";
import { HelmetProviderContext } from "./contexts/HelmetContext";

import SanityCheck from "./pages/SanityCheck";

// Territory pages
const Mediterranean = lazy(() => import("./pages/territories/Mediterranean"));
const Croatia = lazy(() => import("./pages/territories/mediterranean/Croatia"));
const Greece = lazy(() => import("./pages/territories/mediterranean/Greece"));
const Italy = lazy(() => import("./pages/territories/mediterranean/Italy"));
const Spain = lazy(() => import("./pages/territories/mediterranean/Spain"));
const Turkey = lazy(() => import("./pages/territories/mediterranean/Turkey"));
const France = lazy(() => import("./pages/territories/mediterranean/France"));
const Malta = lazy(() => import("./pages/territories/mediterranean/Malta"));
const Montenegro = lazy(() => import("./pages/territories/mediterranean/Montenegro"));
const Slovenia = lazy(() => import("./pages/territories/mediterranean/Slovenia"));

// Core pages (lazy)
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Impressum = lazy(() => import('./pages/Impressum'));
const FAQ = lazy(() => import('./pages/FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Croatian regions
const Istria = lazy(() => import("./pages/territories/mediterranean/croatia/Istria"));
const KvarnerBay = lazy(() => import("./pages/territories/mediterranean/croatia/KvarnerBay"));
const NorthernDalmatia = lazy(() => import("./pages/territories/mediterranean/croatia/NorthernDalmatia"));
const CentralDalmatia = lazy(() => import("./pages/territories/mediterranean/croatia/CentralDalmatia"));
const SouthernDalmatia = lazy(() => import("./pages/territories/mediterranean/croatia/SouthernDalmatia"));

// Greek regions
const Cyclades = lazy(() => import("./pages/territories/mediterranean/greece/Cyclades"));
const IonicIslands = lazy(() => import("./pages/territories/mediterranean/greece/IonicIslands"));
const Dodecanese = lazy(() => import("./pages/territories/mediterranean/greece/Dodecanese"));
const Sporades = lazy(() => import("./pages/territories/mediterranean/greece/Sporades"));
const AthenSaronischerGolf = lazy(() => import("./pages/territories/mediterranean/greece/AthenSaronischerGolf"));
const Nordgriechenland = lazy(() => import("./pages/territories/mediterranean/greece/Nordgriechenland"));

// Spanish regions
const Balearics = lazy(() => import("./pages/territories/mediterranean/spain/Balearics"));
const CostaBrava = lazy(() => import("./pages/territories/mediterranean/spain/CostaBrava"));
const Valencia = lazy(() => import("./pages/territories/mediterranean/spain/Valencia"));

// French regions
const CoteAzur = lazy(() => import("./pages/territories/mediterranean/france/CoteAzur"));
const Korsika = lazy(() => import("./pages/territories/mediterranean/france/Korsika"));

// Turkish regions
const TuerkischeAegaeis = lazy(() => import("./pages/territories/mediterranean/turkey/TuerkischeAegaeis"));

// Turkey territory sub-pages
const Bodrum = lazy(() => import("./pages/territories/mediterranean/turkey/Bodrum"));
const Marmaris = lazy(() => import("./pages/territories/mediterranean/turkey/Marmaris"));
const GoecekFethiye = lazy(() => import("./pages/territories/mediterranean/turkey/GoecekFethiye"));
const KasKalkan = lazy(() => import("./pages/territories/mediterranean/turkey/KasKalkan"));

// Italian regions
const Sardinien = lazy(() => import("./pages/territories/mediterranean/italy/Sardinien"));
const Sizilien = lazy(() => import("./pages/territories/mediterranean/italy/Sizilien"));
const Toskana = lazy(() => import("./pages/territories/mediterranean/italy/Toskana"));
const CostaSmeralda = lazy(() => import("./pages/territories/mediterranean/italy/costa-smeralda/CostaSmeralda"));
const Amalfikuste = lazy(() => import("./pages/territories/mediterranean/italy/Amalfikuste"));

// Atlantic territories
const Atlantic = lazy(() => import("./pages/territories/Atlantic"));
const Azores = lazy(() => import("./pages/territories/atlantic/Azores"));
const SaoMiguel = lazy(() => import("./pages/territories/atlantic/azores/SaoMiguel"));
const Terceira = lazy(() => import("./pages/territories/atlantic/azores/Terceira"));
const Faial = lazy(() => import("./pages/territories/atlantic/azores/Faial"));
const FrenchAtlanticCoast = lazy(() => import("./pages/territories/atlantic/FrenchAtlanticCoast"));
const Biskaya = lazy(() => import("./pages/territories/atlantic/french-atlantic-coast/Biskaya"));
const BrittanyNormandy = lazy(() => import("./pages/territories/atlantic/french-atlantic-coast/BrittanyNormandy"));
const CanaryIslands = lazy(() => import("./pages/territories/atlantic/CanaryIslands"));
const GranCanaria = lazy(() => import("./pages/territories/atlantic/canary-islands/GranCanaria"));
const Tenerife = lazy(() => import("./pages/territories/atlantic/canary-islands/Tenerife"));
const Lanzarote = lazy(() => import("./pages/territories/atlantic/canary-islands/Lanzarote"));
const Fuerteventura = lazy(() => import("./pages/territories/atlantic/canary-islands/Fuerteventura"));

// Caribbean territories
const Caribbean = lazy(() => import("./pages/territories/Caribbean"));

// Indian Ocean territories
const IndianOcean = lazy(() => import("./pages/territories/IndianOcean"));
const Asia = lazy(() => import("./pages/territories/indian-ocean/Asia"));
const Malaysia = lazy(() => import("./pages/territories/indian-ocean/asia/Malaysia"));
const Thailand = lazy(() => import("./pages/territories/Thailand"));
const LangkawiTioman = lazy(() => import("./pages/territories/indian-ocean/asia/thailand/LangkawiTioman"));
const Phuket = lazy(() => import("./pages/territories/indian-ocean/asia/thailand/Phuket"));
const SeychellesIndianOcean = lazy(() => import("./pages/territories/indian-ocean/Seychelles"));
const Mahe = lazy(() => import("./pages/territories/indian-ocean/seychelles/Mahe"));
const Maldives = lazy(() => import("./pages/territories/indian-ocean/Maldives"));
const Male = lazy(() => import("./pages/territories/indian-ocean/maldives/Male"));
const Praslin = lazy(() => import("./pages/territories/indian-ocean/seychelles/Praslin"));
const LaDigue = lazy(() => import("./pages/territories/indian-ocean/seychelles/LaDigue"));
const Seychelles = lazy(() => import("./pages/territories/Seychelles"));

// North Europe territories
const NorthEurope = lazy(() => import("./pages/territories/NorthEurope"));
const GermanBalticSea = lazy(() => import("./pages/territories/north-europe/GermanBalticSea"));
const DeutscheOstsee = lazy(() => import("./pages/territories/north-europe/german-baltic-sea/DeutscheOstsee"));
const NorthSea = lazy(() => import("./pages/territories/north-europe/NorthSea"));
const Scandinavia = lazy(() => import("./pages/territories/north-europe/Scandinavia"));
const Belgium = lazy(() => import("./pages/territories/north-europe/nordsee/Belgium"));
const Holland = lazy(() => import("./pages/territories/north-europe/nordsee/Holland"));
const Denmark = lazy(() => import("./pages/territories/north-europe/skandinavien/Denmark"));
const Sweden = lazy(() => import("./pages/territories/north-europe/skandinavien/Sweden"));

// Pacific territories
const Pacific = lazy(() => import("./pages/territories/Pacific"));
const FrenchPolynesia = lazy(() => import("./pages/territories/pacific/FrenchPolynesia"));
const NewCaledonia = lazy(() => import("./pages/territories/pacific/NewCaledonia"));

// America territories
const Americas = lazy(() => import("./pages/territories/Americas"));
const Bahamas = lazy(() => import("./pages/territories/americas/Bahamas"));
const Mexico = lazy(() => import("./pages/territories/americas/Mexico"));
const Belize = lazy(() => import("./pages/territories/americas/Belize"));
const FloridaKeys = lazy(() => import("./pages/territories/americas/FloridaKeys"));
const USAEastCoast = lazy(() => import("./pages/territories/americas/USAEastCoast"));

// Americas Charter Locations
const Cancun = lazy(() => import("./pages/territories/americas/charter-locations/Cancun"));
const Cozumel = lazy(() => import("./pages/territories/americas/charter-locations/Cozumel"));
const KeyWest = lazy(() => import("./pages/territories/americas/charter-locations/KeyWest"));
const KeyLargo = lazy(() => import("./pages/territories/americas/charter-locations/KeyLargo"));
const Nassau = lazy(() => import("./pages/territories/americas/charter-locations/Nassau"));
const Georgetown = lazy(() => import("./pages/territories/americas/charter-locations/Georgetown"));
const Newport = lazy(() => import("./pages/territories/americas/charter-locations/Newport"));
const Boston = lazy(() => import("./pages/territories/americas/charter-locations/Boston"));
const Annapolis = lazy(() => import("./pages/territories/americas/charter-locations/Annapolis"));

// Expedition territories
const Expeditions = lazy(() => import("./pages/territories/Expeditions"));

// Australia
const Australia = lazy(() => import("./pages/territories/Australia"));
const BVI = lazy(() => import("./pages/territories/BVI"));

// Caribbean territories
const BritishVirginIslands = lazy(() => import("./pages/territories/caribbean/BritishVirginIslands"));
const USVirginIslands = lazy(() => import("./pages/territories/caribbean/USVirginIslands"));
const LeewardIslands = lazy(() => import("./pages/territories/caribbean/LeewardIslands"));
const WindwardIslands = lazy(() => import("./pages/territories/caribbean/WindwardIslands"));
const Cuba = lazy(() => import("./pages/territories/caribbean/Cuba"));

// Caribbean Charter Locations
const Tortola = lazy(() => import("./pages/territories/caribbean/charter-locations/Tortola"));
const StThomas = lazy(() => import("./pages/territories/caribbean/charter-locations/StThomas"));
const Antigua = lazy(() => import("./pages/territories/caribbean/charter-locations/Antigua"));
const Martinique = lazy(() => import("./pages/territories/caribbean/charter-locations/Martinique"));
const Havanna = lazy(() => import("./pages/territories/caribbean/charter-locations/Havanna"));

// Pacific Charter Locations
const Raiatea = lazy(() => import("./pages/territories/pacific/charter-locations/Raiatea"));
const BoraBora = lazy(() => import("./pages/territories/pacific/charter-locations/BoraBora"));
const Rangiroa = lazy(() => import("./pages/territories/pacific/charter-locations/Rangiroa"));
const WhitsundayIslands = lazy(() => import("./pages/territories/pacific/charter-locations/WhitsundayIslands"));
const Noumea = lazy(() => import("./pages/territories/pacific/charter-locations/Noumea"));
const Fiji = lazy(() => import("./pages/territories/pacific/charter-locations/Fiji"));
const NewZealand = lazy(() => import("./pages/territories/pacific/charter-locations/NewZealand"));
const AllTerritories = lazy(() => import("./pages/AllTerritories"));

const queryClient = new QueryClient();

function App() {
  console.info('[App] render start');
  useEffect(() => {
    // Set German locale for the application
    document.documentElement.lang = 'de';
    console.info('[App] mounted, locale set to de');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProviderContext>
        <TooltipProvider>
          <BrowserRouter>
          <Suspense fallback={<div className="p-6">Lädt…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviere/alle-reviere" element={<AllTerritories />} />
            
            {/* Mediterranean routes */}
            <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
            
            {/* Mediterranean country routes */}
            <Route path="/reviere/mittelmeer/kroatien" element={<Croatia />} />
            <Route path="/reviere/mittelmeer/griechenland" element={<Greece />} />
            <Route path="/reviere/mittelmeer/italien" element={<Italy />} />
            <Route path="/reviere/mittelmeer/spanien" element={<Spain />} />
            <Route path="/reviere/mittelmeer/tuerkei" element={<Turkey />} />
            <Route path="/reviere/mittelmeer/frankreich" element={<France />} />
            <Route path="/reviere/mittelmeer/malta" element={<Malta />} />
            <Route path="/reviere/mittelmeer/montenegro" element={<Montenegro />} />
            <Route path="/reviere/mittelmeer/slowenien" element={<Slovenia />} />
            
            {/* Croatian region routes */}
            <Route path="/reviere/mittelmeer/kroatien/istrien" element={<Istria />} />
            <Route path="/reviere/mittelmeer/kroatien/kvarner-bucht" element={<KvarnerBay />} />
            <Route path="/reviere/mittelmeer/kroatien/norddalmatien" element={<NorthernDalmatia />} />
            <Route path="/reviere/mittelmeer/kroatien/mitteldalmatien" element={<CentralDalmatia />} />
            <Route path="/reviere/mittelmeer/kroatien/sueddalmatien" element={<SouthernDalmatia />} />
            
            {/* Greek region routes */}
            <Route path="/reviere/mittelmeer/griechenland/kykladen" element={<Cyclades />} />
            <Route path="/reviere/mittelmeer/griechenland/ionische-inseln" element={<IonicIslands />} />
            <Route path="/reviere/mittelmeer/griechenland/dodekanes" element={<Dodecanese />} />
            <Route path="/reviere/mittelmeer/griechenland/sporaden" element={<Sporades />} />
            <Route path="/reviere/mittelmeer/griechenland/athen-saronischer-golf" element={<AthenSaronischerGolf />} />
            <Route path="/reviere/mittelmeer/griechenland/nordgriechenland" element={<Nordgriechenland />} />
            
            {/* Spanish region routes */}
            <Route path="/reviere/mittelmeer/spanien/balearen" element={<Balearics />} />
            <Route path="/reviere/mittelmeer/spanien/costa-brava" element={<CostaBrava />} />
            <Route path="/reviere/mittelmeer/spanien/valencia" element={<Valencia />} />
            
            {/* French region routes */}
            <Route path="/reviere/mittelmeer/frankreich/cote-azur" element={<CoteAzur />} />
            <Route path="/reviere/mittelmeer/frankreich/korsika" element={<Korsika />} />
            
            {/* Turkish region routes */}
            <Route path="/reviere/mittelmeer/tuerkei/tuerkische-aegaeis" element={<TuerkischeAegaeis />} />
            <Route path="/reviere/mittelmeer/tuerkei/bodrum" element={<Bodrum />} />
            <Route path="/reviere/mittelmeer/tuerkei/marmaris" element={<Marmaris />} />
            <Route path="/reviere/mittelmeer/tuerkei/goecek-fethiye" element={<GoecekFethiye />} />
            <Route path="/reviere/mittelmeer/tuerkei/kas-kalkan" element={<KasKalkan />} />
            
            {/* Italian region routes */}
            <Route path="/reviere/mittelmeer/italien/sardinien" element={<Sardinien />} />
            <Route path="/reviere/mittelmeer/italien/sardinien/costa-smeralda" element={<CostaSmeralda />} />
            <Route path="/reviere/mittelmeer/italien/sizilien" element={<Sizilien />} />
            <Route path="/reviere/mittelmeer/italien/toskana" element={<Toskana />} />
            <Route path="/reviere/mittelmeer/italien/amalfikuste" element={<Amalfikuste />} />
            
            {/* Atlantic routes */}
            <Route path="/reviere/atlantik" element={<Atlantic />} />
            <Route path="/reviere/atlantik/azoren" element={<Azores />} />
            <Route path="/reviere/atlantik/azoren/sao-miguel" element={<SaoMiguel />} />
            <Route path="/reviere/atlantik/azoren/terceira" element={<Terceira />} />
            <Route path="/reviere/atlantik/azoren/faial" element={<Faial />} />
            <Route path="/reviere/atlantik/franzoesische-atlantikkueste" element={<FrenchAtlanticCoast />} />
            <Route path="/reviere/atlantik/franzoesische-atlantikkueste/biskaya" element={<Biskaya />} />
            <Route path="/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie" element={<BrittanyNormandy />} />
            <Route path="/reviere/atlantik/kanaren" element={<CanaryIslands />} />
            <Route path="/reviere/atlantik/kanaren/gran-canaria" element={<GranCanaria />} />
            <Route path="/reviere/atlantik/kanaren/teneriffa" element={<Tenerife />} />
            <Route path="/reviere/atlantik/kanaren/lanzarote" element={<Lanzarote />} />
            <Route path="/reviere/atlantik/kanaren/fuerteventura" element={<Fuerteventura />} />

            {/* Caribbean routes */}
            <Route path="/reviere/karibik" element={<Caribbean />} />
            <Route path="/reviere/karibik/britische-jungferninseln" element={<BritishVirginIslands />} />
            <Route path="/reviere/karibik/us-jungferninseln" element={<USVirginIslands />} />
            <Route path="/reviere/karibik/us-virgin-islands" element={<USVirginIslands />} />
            <Route path="/reviere/karibik/leeward-inseln" element={<LeewardIslands />} />
            <Route path="/reviere/karibik/windward-inseln" element={<WindwardIslands />} />
            <Route path="/reviere/karibik/kuba" element={<Cuba />} />
            
            {/* Caribbean Charter Location routes */}
            <Route path="/reviere/karibik/charter-standorte/tortola" element={<Tortola />} />
            <Route path="/reviere/karibik/charter-standorte/st-thomas" element={<StThomas />} />
            <Route path="/reviere/karibik/charter-standorte/antigua" element={<Antigua />} />
            <Route path="/reviere/karibik/charter-standorte/martinique" element={<Martinique />} />
            <Route path="/reviere/karibik/charter-standorte/havanna" element={<Havanna />} />

            {/* Pacific routes */}
            <Route path="/reviere/suedpazifik" element={<Pacific />} />
            <Route path="/reviere/suedpazifik/neukaledonien" element={<NewCaledonia />} />

            {/* Pacific Charter Location routes */}
            <Route path="/reviere/suedpazifik/charter-standorte/raiatea" element={<Raiatea />} />
            <Route path="/reviere/suedpazifik/charter-standorte/bora-bora" element={<BoraBora />} />
            <Route path="/reviere/suedpazifik/charter-standorte/rangiroa" element={<Rangiroa />} />
        <Route path="/reviere/suedpazifik/australien/whitsundays" element={<WhitsundayIslands />} />
        <Route path="/reviere/suedpazifik/charter-standorte/noumea" element={<Noumea />} />
        <Route path="/reviere/suedpazifik/fidschi" element={<Fiji />} />
        <Route path="/reviere/suedpazifik/charter-standorte/neuseeland" element={<NewZealand />} />

            {/* Indian Ocean routes */}
            <Route path="/reviere/indischer-ozean" element={<IndianOcean />} />
            <Route path="/reviere/indischer-ozean/asien" element={<Asia />} />
            <Route path="/reviere/indischer-ozean/asien/malaysia" element={<Malaysia />} />
            <Route path="/reviere/indischer-ozean/asien/thailand" element={<Thailand />} />
            <Route path="/reviere/indischer-ozean/asien/thailand/langkawi-tioman" element={<LangkawiTioman />} />
            <Route path="/reviere/indischer-ozean/asien/thailand/phuket" element={<Phuket />} />
            <Route path="/reviere/indischer-ozean/seychellen" element={<SeychellesIndianOcean />} />
            <Route path="/reviere/indischer-ozean/seychellen/mahe" element={<Mahe />} />
            <Route path="/reviere/indischer-ozean/seychellen/praslin" element={<Praslin />} />
            <Route path="/reviere/indischer-ozean/seychellen/la-digue" element={<LaDigue />} />
            <Route path="/reviere/indischer-ozean/malediven" element={<Maldives />} />
            <Route path="/reviere/indischer-ozean/malediven/male" element={<Male />} />

            {/* North Europe routes */}
            <Route path="/reviere/nord-europa" element={<NorthEurope />} />
            <Route path="/reviere/nord-europa/deutsche-ostsee" element={<GermanBalticSea />} />
            <Route path="/reviere/nord-europa/deutsche-ostsee/charter-standorte" element={<DeutscheOstsee />} />
            <Route path="/reviere/nord-europa/nordsee" element={<NorthSea />} />
            <Route path="/reviere/nord-europa/skandinavien" element={<Scandinavia />} />
            <Route path="/reviere/nord-europa/nordsee/belgien" element={<Belgium />} />
            <Route path="/reviere/nord-europa/nordsee/holland" element={<Holland />} />
            <Route path="/reviere/nord-europa/skandinavien/daenemark" element={<Denmark />} />
            <Route path="/reviere/nord-europa/skandinavien/schweden" element={<Sweden />} />

            {/* Pacific routes */}
            <Route path="/reviere/suedpazifik" element={<Pacific />} />
            <Route path="/reviere/suedpazifik/franzoesisch-polynesien" element={<FrenchPolynesia />} />
            <Route path="/reviere/suedpazifik/australien" element={<Australia />} />

             {/* America & Bahamas routes */}
             <Route path="/reviere/amerika-bahamas" element={<Americas />} />
             <Route path="/reviere/amerika-bahamas/bahamas" element={<Bahamas />} />
             <Route path="/reviere/amerika-bahamas/bahamas/nassau" element={<Nassau />} />
             <Route path="/reviere/amerika-bahamas/bahamas/georgetown-exumas" element={<Georgetown />} />
             <Route path="/reviere/amerika-bahamas/mexiko" element={<Mexico />} />
             <Route path="/reviere/amerika-bahamas/mexiko/cancun" element={<Cancun />} />
             <Route path="/reviere/amerika-bahamas/mexiko/cozumel" element={<Cozumel />} />
             <Route path="/reviere/amerika-bahamas/belize" element={<Belize />} />
             <Route path="/reviere/amerika-bahamas/florida-keys" element={<FloridaKeys />} />
             <Route path="/reviere/amerika-bahamas/florida-keys/key-west" element={<KeyWest />} />
             <Route path="/reviere/amerika-bahamas/florida-keys/key-largo" element={<KeyLargo />} />
             <Route path="/reviere/amerika-bahamas/usa-ostkueste" element={<USAEastCoast />} />
             <Route path="/reviere/amerika-bahamas/usa-ostkueste/newport" element={<Newport />} />
             <Route path="/reviere/amerika-bahamas/usa-ostkueste/boston" element={<Boston />} />
             <Route path="/reviere/amerika-bahamas/usa-ostkueste/annapolis" element={<Annapolis />} />

            {/* Expedition routes */}
            <Route path="/reviere/expeditionen" element={<Expeditions />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
      </HelmetProviderContext>
    </QueryClientProvider>
  );
}

export default App;
