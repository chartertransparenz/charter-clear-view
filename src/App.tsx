import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Mediterranean from "./pages/territories/Mediterranean";
import Caribbean from "./pages/territories/Caribbean";
import Pacific from "./pages/territories/Pacific";
import Atlantic from "./pages/territories/Atlantic";
import IndianOcean from "./pages/territories/IndianOcean";
import NorthEurope from "./pages/territories/NorthEurope";
import Expeditions from "./pages/territories/Expeditions";
import Croatia from "./pages/territories/Croatia";
import Greece from "./pages/territories/Greece";
import Italy from "./pages/territories/Italy";
import Spain from "./pages/territories/Spain";
import Turkey from "./pages/territories/Turkey";
import France from "./pages/territories/France";
import BVI from "./pages/territories/BVI";
import Thailand from "./pages/territories/Thailand";
import Seychelles from "./pages/territories/Seychelles";
import Australia from "./pages/territories/Australia";
import Americas from "./pages/territories/Americas";

// Mediterranean Countries
import MediterraneanFrance from "./pages/territories/mediterranean/France";
import MediterraneanGreece from "./pages/territories/mediterranean/Greece";
import MediterraneanItaly from "./pages/territories/mediterranean/Italy";
import MediterraneanCroatia from "./pages/territories/mediterranean/Croatia";
import MediterraneanSpain from "./pages/territories/mediterranean/Spain";
import MediterraneanTurkey from "./pages/territories/mediterranean/Turkey";
import Malta from "./pages/territories/mediterranean/Malta";
import Montenegro from "./pages/territories/mediterranean/Montenegro";
import Slovenia from "./pages/territories/mediterranean/Slovenia";

// Caribbean Regions
import BritishVirginIslands from "./pages/territories/caribbean/BritishVirginIslands";
import Cuba from "./pages/territories/caribbean/Cuba";
import LeewardIslands from "./pages/territories/caribbean/LeewardIslands";
import USVirginIslands from "./pages/territories/caribbean/USVirginIslands";
import WindwardIslands from "./pages/territories/caribbean/WindwardIslands";

// Pacific Regions
import Polynesia from "./pages/territories/pacific/Polynesia";
import PacificAustralia from "./pages/territories/pacific/Australia";
import FrenchPolynesia from "./pages/territories/pacific/FrenchPolynesia";
import NewCaledonia from "./pages/territories/pacific/NewCaledonia";

// Atlantic Regions
import Azores from "./pages/territories/atlantic/Azores";
import FrenchAtlanticCoast from "./pages/territories/atlantic/FrenchAtlanticCoast";
import CanaryIslands from "./pages/territories/atlantic/CanaryIslands";

// Indian Ocean Regions
import Asia from "./pages/territories/indian-ocean/Asia";
import Maldives from "./pages/territories/indian-ocean/Maldives";
import IndianOceanSeychelles from "./pages/territories/indian-ocean/Seychelles";

// North Europe Regions
import GermanBalticSea from "./pages/territories/north-europe/GermanBalticSea";
import NorthSea from "./pages/territories/north-europe/NorthSea";
import Scandinavia from "./pages/territories/north-europe/Scandinavia";

// Americas Regions
import Bahamas from "./pages/territories/americas/Bahamas";
import Belize from "./pages/territories/americas/Belize";
import Mexico from "./pages/territories/americas/Mexico";

// Mediterranean Subregions
import CoteAzur from "./pages/territories/mediterranean/france/CoteAzur";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
          <Route path="/reviere/karibik" element={<Caribbean />} />
          <Route path="/reviere/suedpazifik" element={<Pacific />} />
          <Route path="/reviere/atlantik" element={<Atlantic />} />
          <Route path="/reviere/indischer-ozean" element={<IndianOcean />} />
          <Route path="/reviere/nord-europa" element={<NorthEurope />} />
          <Route path="/reviere/expeditionen" element={<Expeditions />} />
          <Route path="/reviere/kroatien" element={<Croatia />} />
          <Route path="/reviere/griechenland" element={<Greece />} />
          <Route path="/reviere/italien" element={<Italy />} />
          <Route path="/reviere/spanien" element={<Spain />} />
          <Route path="/reviere/tuerkei" element={<Turkey />} />
          <Route path="/reviere/frankreich" element={<France />} />
          <Route path="/reviere/britische-jungferninseln" element={<BVI />} />
          <Route path="/reviere/thailand" element={<Thailand />} />
          <Route path="/reviere/seychellen" element={<Seychelles />} />
          <Route path="/reviere/australien" element={<Australia />} />
          <Route path="/reviere/amerika-bahamas" element={<Americas />} />
          
          {/* Mediterranean Countries */}
          <Route path="/reviere/mittelmeer/frankreich" element={<MediterraneanFrance />} />
          <Route path="/reviere/mittelmeer/griechenland" element={<MediterraneanGreece />} />
          <Route path="/reviere/mittelmeer/italien" element={<MediterraneanItaly />} />
          <Route path="/reviere/mittelmeer/kroatien" element={<MediterraneanCroatia />} />
          <Route path="/reviere/mittelmeer/spanien" element={<MediterraneanSpain />} />
          <Route path="/reviere/mittelmeer/tuerkei" element={<MediterraneanTurkey />} />
          <Route path="/reviere/mittelmeer/malta" element={<Malta />} />
          <Route path="/reviere/mittelmeer/montenegro" element={<Montenegro />} />
          <Route path="/reviere/mittelmeer/slowenien" element={<Slovenia />} />
          
          {/* Caribbean Regions */}
          <Route path="/reviere/karibik/british-virgin-islands" element={<BritishVirginIslands />} />
          <Route path="/reviere/karibik/kuba" element={<Cuba />} />
          <Route path="/reviere/karibik/leeward-inseln" element={<LeewardIslands />} />
          <Route path="/reviere/karibik/us-virgin-islands" element={<USVirginIslands />} />
          <Route path="/reviere/karibik/windward-inseln" element={<WindwardIslands />} />
          
          {/* Pacific Regions */}
          <Route path="/reviere/suedpazifik/polynesien" element={<Polynesia />} />
          <Route path="/reviere/suedpazifik/australien" element={<PacificAustralia />} />
          <Route path="/reviere/suedpazifik/franzoesisch-polynesien" element={<FrenchPolynesia />} />
          <Route path="/reviere/suedpazifik/neukaledonien" element={<NewCaledonia />} />
          
          {/* Atlantic Regions */}
          <Route path="/reviere/atlantik/azoren" element={<Azores />} />
          <Route path="/reviere/atlantik/franzoesische-atlantikkueste" element={<FrenchAtlanticCoast />} />
          <Route path="/reviere/atlantik/kanaren" element={<CanaryIslands />} />
          
          {/* Indian Ocean Regions */}
          <Route path="/reviere/indischer-ozean/asien" element={<Asia />} />
          <Route path="/reviere/indischer-ozean/malediven" element={<Maldives />} />
          <Route path="/reviere/indischer-ozean/seychellen" element={<IndianOceanSeychelles />} />
          
          {/* North Europe Regions */}
          <Route path="/reviere/nord-europa/deutsche-ostsee" element={<GermanBalticSea />} />
          <Route path="/reviere/nord-europa/nordsee" element={<NorthSea />} />
          <Route path="/reviere/nord-europa/skandinavien" element={<Scandinavia />} />
          
          {/* Americas Regions */}
          <Route path="/reviere/amerika-bahamas/bahamas" element={<Bahamas />} />
          <Route path="/reviere/amerika-bahamas/belize" element={<Belize />} />
          <Route path="/reviere/amerika-bahamas/mexiko" element={<Mexico />} />
          
          {/* Mediterranean Subregions */}
          <Route path="/reviere/mittelmeer/frankreich/cote-azur" element={<CoteAzur />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
