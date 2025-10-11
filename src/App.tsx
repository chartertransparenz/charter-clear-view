import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Footer from "@/components/Footer";
import { HelmetProviderContext } from "@/contexts/HelmetContext";
import Index from "./pages/Index";
import About from '@/pages/About';
import Impressum from '@/pages/Impressum';
import { Datenschutz } from '@/pages/Datenschutz';
import FAQ from '@/pages/FAQ';
import NotFound from "./pages/NotFound";

// Territory pages
import Mediterranean from "./pages/territories/Mediterranean";
import Croatia from "./pages/territories/mediterranean/Croatia";
import Greece from "./pages/territories/mediterranean/Greece";
import Italy from "./pages/territories/Italy";
import Spain from "./pages/territories/mediterranean/Spain";
import Turkey from "./pages/territories/mediterranean/Turkey";
import France from "./pages/territories/mediterranean/France";
import Malta from "./pages/territories/mediterranean/Malta";
import Montenegro from "./pages/territories/mediterranean/Montenegro";
import Slovenia from "./pages/territories/mediterranean/Slovenia";

// Croatian regions
import Istria from "./pages/territories/mediterranean/croatia/Istria";
import KvarnerBay from "./pages/territories/mediterranean/croatia/KvarnerBay";
import NorthernDalmatia from "./pages/territories/mediterranean/croatia/NorthernDalmatia";
import CentralDalmatia from "./pages/territories/mediterranean/croatia/CentralDalmatia";
import SouthernDalmatia from "./pages/territories/mediterranean/croatia/SouthernDalmatia";

// Greek regions
import Cyclades from "./pages/territories/mediterranean/greece/Cyclades";
import IonicIslands from "./pages/territories/mediterranean/greece/IonicIslands";
import Dodecanese from "./pages/territories/mediterranean/greece/Dodecanese";
import Sporades from "./pages/territories/mediterranean/greece/Sporades";
import AthenSaronischerGolf from "./pages/territories/mediterranean/greece/AthenSaronischerGolf";
import Nordgriechenland from "./pages/territories/mediterranean/greece/Nordgriechenland";

// Spanish regions
import Balearics from "./pages/territories/mediterranean/spain/Balearics";
import Mallorca from "./pages/territories/mediterranean/spain/Mallorca";
import Ibiza from "./pages/territories/mediterranean/spain/Ibiza";
import Menorca from "./pages/territories/mediterranean/spain/Menorca";
import CostaBrava from "./pages/territories/mediterranean/spain/CostaBrava";
import Valencia from "./pages/territories/mediterranean/spain/Valencia";

// French regions
import CoteAzur from "./pages/territories/mediterranean/france/CoteAzur";
import Korsika from "./pages/territories/mediterranean/france/Korsika";

// Turkish regions
import TuerkischeAegaeis from "./pages/territories/mediterranean/turkey/TuerkischeAegaeis";

// Turkey territory sub-pages
import Bodrum from "./pages/territories/mediterranean/turkey/Bodrum";
import Marmaris from "./pages/territories/mediterranean/turkey/Marmaris";
import GoecekFethiye from "./pages/territories/mediterranean/turkey/GoecekFethiye";
import KasKalkan from "./pages/territories/mediterranean/turkey/KasKalkan";

// Italian regions
import Sardinien from "./pages/territories/mediterranean/italy/Sardinien";
import Sizilien from "./pages/territories/mediterranean/italy/Sizilien";
import Toskana from "./pages/territories/mediterranean/italy/Toskana";
import CostaSmeralda from "./pages/territories/mediterranean/italy/costa-smeralda/CostaSmeralda";
import Amalfikuste from "./pages/territories/mediterranean/italy/Amalfikuste";

// Atlantic territories
import Atlantic from "./pages/territories/Atlantic";
import Azores from "./pages/territories/atlantic/Azores";
import SaoMiguel from "./pages/territories/atlantic/azores/SaoMiguel";
import Terceira from "./pages/territories/atlantic/azores/Terceira";
import Faial from "./pages/territories/atlantic/azores/Faial";
import FrenchAtlanticCoast from "./pages/territories/atlantic/FrenchAtlanticCoast";
import Biskaya from "./pages/territories/atlantic/french-atlantic-coast/Biskaya";
import BrittanyNormandy from "./pages/territories/atlantic/french-atlantic-coast/BrittanyNormandy";
import CanaryIslands from "./pages/territories/atlantic/CanaryIslands";
import GranCanaria from "./pages/territories/atlantic/canary-islands/GranCanaria";
import Tenerife from "./pages/territories/atlantic/canary-islands/Tenerife";
import Lanzarote from "./pages/territories/atlantic/canary-islands/Lanzarote";
import Fuerteventura from "./pages/territories/atlantic/canary-islands/Fuerteventura";

// Caribbean territories
import Caribbean from "./pages/territories/Caribbean";

// Indian Ocean territories
import IndianOcean from "./pages/territories/IndianOcean";
import Asia from "./pages/territories/indian-ocean/Asia";
import Malaysia from "./pages/territories/indian-ocean/asia/Malaysia";
import Thailand from "./pages/territories/Thailand";
import LangkawiTioman from "./pages/territories/indian-ocean/asia/thailand/LangkawiTioman";
import Phuket from "./pages/territories/indian-ocean/asia/thailand/Phuket";
import SeychellesIndianOcean from "./pages/territories/indian-ocean/Seychelles";
import Mahe from "./pages/territories/indian-ocean/seychelles/Mahe";
import Maldives from "./pages/territories/indian-ocean/Maldives";
import Male from "./pages/territories/indian-ocean/maldives/Male";
import Praslin from "./pages/territories/indian-ocean/seychelles/Praslin";
import LaDigue from "./pages/territories/indian-ocean/seychelles/LaDigue";
import Seychelles from "./pages/territories/Seychelles";

// North Europe territories
import NorthEurope from "./pages/territories/NorthEurope";
import GermanBalticSea from "./pages/territories/north-europe/GermanBalticSea";
import DeutscheOstsee from "./pages/territories/north-europe/german-baltic-sea/DeutscheOstsee";
import NorthSea from "./pages/territories/north-europe/NorthSea";
import Scandinavia from "./pages/territories/north-europe/Scandinavia";
import Belgium from "./pages/territories/north-europe/nordsee/Belgium";
import Holland from "./pages/territories/north-europe/nordsee/Holland";
import Denmark from "./pages/territories/north-europe/skandinavien/Denmark";
import Sweden from "./pages/territories/north-europe/skandinavien/Sweden";

// Pacific territories
import Pacific from "./pages/territories/Pacific";
import FrenchPolynesia from "./pages/territories/pacific/FrenchPolynesia";
import NewCaledonia from "./pages/territories/pacific/NewCaledonia";

// America territories
import Americas from "./pages/territories/Americas";
import Bahamas from "./pages/territories/americas/Bahamas";
import Mexico from "./pages/territories/americas/Mexico";
import Belize from "./pages/territories/americas/Belize";
import FloridaKeys from "./pages/territories/americas/FloridaKeys";
import USAEastCoast from "./pages/territories/americas/USAEastCoast";

// Americas Charter Locations
import Cancun from "./pages/territories/americas/charter-locations/Cancun";
import Cozumel from "./pages/territories/americas/charter-locations/Cozumel";
import KeyWest from "./pages/territories/americas/charter-locations/KeyWest";
import KeyLargo from "./pages/territories/americas/charter-locations/KeyLargo";
import Nassau from "./pages/territories/americas/charter-locations/Nassau";
import Georgetown from "./pages/territories/americas/charter-locations/Georgetown";
import Newport from "./pages/territories/americas/charter-locations/Newport";
import Boston from "./pages/territories/americas/charter-locations/Boston";
import Annapolis from "./pages/territories/americas/charter-locations/Annapolis";

// Expedition territories
import Expeditions from "./pages/territories/Expeditions";

// Australia
import Australia from "./pages/territories/Australia";
import BVI from "./pages/territories/BVI";

// Caribbean territories
import BritishVirginIslands from "./pages/territories/caribbean/BritishVirginIslands";
import USVirginIslands from "./pages/territories/caribbean/USVirginIslands";
import LeewardIslands from "./pages/territories/caribbean/LeewardIslands";
import WindwardIslands from "./pages/territories/caribbean/WindwardIslands";
import Cuba from "./pages/territories/caribbean/Cuba";
import Antigua from "./pages/territories/caribbean/Antigua";
import StMartin from "./pages/territories/caribbean/StMartin";
import StVincentGrenadinen from "./pages/territories/caribbean/StVincentGrenadinen";

// Caribbean Charter Locations
import Tortola from "./pages/territories/caribbean/charter-locations/Tortola";
import StThomas from "./pages/territories/caribbean/charter-locations/StThomas";
import AntiguaCharterLocation from "./pages/territories/caribbean/charter-locations/Antigua";
import Martinique from "./pages/territories/caribbean/charter-locations/Martinique";
import Havanna from "./pages/territories/caribbean/charter-locations/Havanna";

// Pacific Charter Locations
import Raiatea from "./pages/territories/pacific/charter-locations/Raiatea";
import BoraBora from "./pages/territories/pacific/charter-locations/BoraBora";
import Rangiroa from "./pages/territories/pacific/charter-locations/Rangiroa";
import WhitsundayIslands from "./pages/territories/pacific/charter-locations/WhitsundayIslands";
import Noumea from "./pages/territories/pacific/charter-locations/Noumea";
import Fiji from "./pages/territories/pacific/charter-locations/Fiji";
import NewZealand from "./pages/territories/pacific/charter-locations/NewZealand";
import AllTerritories from "./pages/AllTerritories";

// Partner pages
import PartnersOverview from "./pages/partners/Index";
import PitterYachting from "./pages/partners/PitterYachting";
import CroatiaYachting from "./pages/partners/CroatiaYachting";
import AngelinaYachtcharter from "./pages/partners/AngelinaYachtcharter";
import NcpMare from "./pages/partners/NcpMare";
import UltraSailing from "./pages/partners/UltraSailing";
import Waypoint from "./pages/partners/Waypoint";
import IstionYachting from "./pages/partners/IstionYachting";
import KavasYachting from "./pages/partners/KavasYachting";
import VernicosYachts from "./pages/partners/VernicosYachts";
import AthenianYachts from "./pages/partners/AthenianYachts";
import OlympicYachting from "./pages/partners/OlympicYachting";
import FiveSeasonsYachting from "./pages/partners/FiveSeasonsYachting";
import DalmatiaCharter from "./pages/partners/DalmatiaCharter";
import DreamYacht from "./pages/partners/DreamYacht";
import NavigareYachting from "./pages/partners/NavigareYachting";
import Kiriacoulis from "./pages/partners/Kiriacoulis";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Set German locale for the application
    document.documentElement.lang = 'de';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProviderContext>
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<div className="p-8 text-center">Laden...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<About />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
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
            
            {/* Croatian region routes - NEW canonical URLs */}
            <Route path="/reviere/mittelmeer/kroatien/istrien" element={<Istria />} />
            <Route path="/reviere/mittelmeer/kroatien/kvarner" element={<KvarnerBay />} />
            <Route path="/reviere/mittelmeer/kroatien/zadar" element={<NorthernDalmatia />} />
            <Route path="/reviere/mittelmeer/kroatien/dalmatien-split" element={<CentralDalmatia />} />
            <Route path="/reviere/mittelmeer/kroatien/dubrovnik" element={<SouthernDalmatia />} />
            
            {/* 301 Redirects from old Croatian URLs */}
            <Route path="/reviere/mittelmeer/kroatien/kvarner-bucht" element={<Navigate to="/reviere/mittelmeer/kroatien/kvarner" replace />} />
            <Route path="/reviere/mittelmeer/kroatien/norddalmatien" element={<Navigate to="/reviere/mittelmeer/kroatien/zadar" replace />} />
            <Route path="/reviere/mittelmeer/kroatien/mitteldalmatien" element={<Navigate to="/reviere/mittelmeer/kroatien/dalmatien-split" replace />} />
            <Route path="/reviere/mittelmeer/kroatien/sueddalmatien" element={<Navigate to="/reviere/mittelmeer/kroatien/dubrovnik" replace />} />
            
            {/* Greek region routes - NEW canonical URLs */}
            <Route path="/reviere/mittelmeer/griechenland/kykladen" element={<Cyclades />} />
            <Route path="/reviere/mittelmeer/griechenland/ionisches-meer" element={<IonicIslands />} />
            <Route path="/reviere/mittelmeer/griechenland/dodekanes" element={<Dodecanese />} />
            <Route path="/reviere/mittelmeer/griechenland/sporaden" element={<Sporades />} />
            <Route path="/reviere/mittelmeer/griechenland/athen-saronischer-golf" element={<AthenSaronischerGolf />} />
            <Route path="/reviere/mittelmeer/griechenland/nordgriechenland" element={<Nordgriechenland />} />
            
            {/* 301 Redirect from old Greek URL */}
            <Route path="/reviere/mittelmeer/griechenland/ionische-inseln" element={<Navigate to="/reviere/mittelmeer/griechenland/ionisches-meer" replace />} />
            
            {/* Spanish region routes */}
            <Route path="/reviere/mittelmeer/spanien/balearen" element={<Balearics />} />
            <Route path="/reviere/mittelmeer/spanien/balearen/mallorca" element={<Mallorca />} />
            <Route path="/reviere/mittelmeer/spanien/balearen/ibiza" element={<Ibiza />} />
            <Route path="/reviere/mittelmeer/spanien/balearen/menorca" element={<Menorca />} />
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
            
            {/* Italian region routes - NEW canonical URLs */}
            <Route path="/reviere/mittelmeer/italien/sardinien" element={<Sardinien />} />
            <Route path="/reviere/mittelmeer/italien/sardinien/costa-smeralda" element={<CostaSmeralda />} />
            <Route path="/reviere/mittelmeer/italien/sizilien" element={<Sizilien />} />
            <Route path="/reviere/mittelmeer/italien/toskana-elba" element={<Toskana />} />
            <Route path="/reviere/mittelmeer/italien/amalfikueste" element={<Amalfikuste />} />
            
            {/* 301 Redirects from old Italian URLs */}
            <Route path="/reviere/mittelmeer/italien/toskana" element={<Navigate to="/reviere/mittelmeer/italien/toskana-elba" replace />} />
            <Route path="/reviere/mittelmeer/italien/amalfikuste" element={<Navigate to="/reviere/mittelmeer/italien/amalfikueste" replace />} />
            
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

            {/* Caribbean routes - NEW canonical URLs */}
            <Route path="/reviere/karibik" element={<Caribbean />} />
            <Route path="/reviere/karibik/bvi" element={<BritishVirginIslands />} />
            <Route path="/reviere/karibik/usvi" element={<USVirginIslands />} />
            <Route path="/reviere/karibik/bahamas" element={<Bahamas />} />
            <Route path="/reviere/karibik/antigua" element={<Antigua />} />
            <Route path="/reviere/karibik/st-martin" element={<StMartin />} />
            <Route path="/reviere/karibik/st-vincent-grenadinen" element={<StVincentGrenadinen />} />

            {/* Redirects from old Caribbean URLs */}
            <Route path="/reviere/karibik/britische-jungferninseln" 
                   element={<Navigate to="/reviere/karibik/bvi" replace />} />
            <Route path="/reviere/karibik/us-jungferninseln" 
                   element={<Navigate to="/reviere/karibik/usvi" replace />} />
            <Route path="/reviere/karibik/us-virgin-islands" 
                   element={<Navigate to="/reviere/karibik/usvi" replace />} />

            {/* Old routes kept for backward compatibility */}
            <Route path="/reviere/karibik/leeward-inseln" element={<LeewardIslands />} />
            <Route path="/reviere/karibik/windward-inseln" element={<WindwardIslands />} />
            <Route path="/reviere/karibik/kuba" element={<Cuba />} />
            
            {/* Caribbean Charter Location routes */}
            <Route path="/reviere/karibik/charter-standorte/tortola" element={<Tortola />} />
            <Route path="/reviere/karibik/charter-standorte/st-thomas" element={<StThomas />} />
            <Route path="/reviere/karibik/charter-standorte/antigua" element={<AntiguaCharterLocation />} />
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

            {/* Partner routes */}
            <Route path="/yachtcharter-partner" element={<PartnersOverview />} />
            <Route path="/yachtcharter-partner/pitter-yachting" element={<PitterYachting />} />
            <Route path="/yachtcharter-partner/croatia-yachting" element={<CroatiaYachting />} />
            <Route path="/yachtcharter-partner/angelina-yachtcharter" element={<AngelinaYachtcharter />} />
            <Route path="/yachtcharter-partner/ncp-mare" element={<NcpMare />} />
            <Route path="/yachtcharter-partner/ultra-sailing" element={<UltraSailing />} />
            <Route path="/yachtcharter-partner/waypoint" element={<Waypoint />} />
            <Route path="/yachtcharter-partner/istion-yachting" element={<IstionYachting />} />
            <Route path="/yachtcharter-partner/kavas-yachting" element={<KavasYachting />} />
            <Route path="/yachtcharter-partner/vernicos-yachts" element={<VernicosYachts />} />
            <Route path="/yachtcharter-partner/athenian-yachts" element={<AthenianYachts />} />
            <Route path="/yachtcharter-partner/olympic-yachting" element={<OlympicYachting />} />
            <Route path="/yachtcharter-partner/five-seasons-yachting" element={<FiveSeasonsYachting />} />
            <Route path="/yachtcharter-partner/dalmatia-charter" element={<DalmatiaCharter />} />
            <Route path="/yachtcharter-partner/dream-yacht" element={<DreamYacht />} />
            <Route path="/yachtcharter-partner/navigare-yachting" element={<NavigareYachting />} />
            <Route path="/yachtcharter-partner/kiriacoulis" element={<Kiriacoulis />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
           <Footer />
            </Suspense>
         </TooltipProvider>
       </HelmetProviderContext>
     </QueryClientProvider>
  );
}

export default App;
