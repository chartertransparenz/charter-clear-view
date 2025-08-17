import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Territory pages
import Mediterranean from "./pages/territories/Mediterranean";
import Croatia from "./pages/territories/mediterranean/Croatia";
import Greece from "./pages/territories/mediterranean/Greece";
import Italy from "./pages/territories/mediterranean/Italy";
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

// Spanish regions
import Balearics from "./pages/territories/mediterranean/spain/Balearics";

// Atlantic territories
import Atlantic from "./pages/territories/Atlantic";

// Caribbean territories
import Caribbean from "./pages/territories/Caribbean";
import BritishVirginIslands from "./pages/territories/caribbean/BritishVirginIslands";
import USVirginIslands from "./pages/territories/caribbean/USVirginIslands";
import LeewardIslands from "./pages/territories/caribbean/LeewardIslands";
import WindwardIslands from "./pages/territories/caribbean/WindwardIslands";
import Cuba from "./pages/territories/caribbean/Cuba";

// Indian Ocean territories
import IndianOcean from "./pages/territories/IndianOcean";
import Thailand from "./pages/territories/Thailand";
import Seychelles from "./pages/territories/Seychelles";

// North Europe territories
import NorthEurope from "./pages/territories/NorthEurope";

// Pacific territories
import Pacific from "./pages/territories/Pacific";

// America territories
import Americas from "./pages/territories/Americas";

// Expedition territories
import Expeditions from "./pages/territories/Expeditions";

// Australia
import Australia from "./pages/territories/Australia";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Set German locale for the application
    document.documentElement.lang = 'de';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
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
            
            {/* Spanish region routes */}
            <Route path="/reviere/mittelmeer/spanien/balearen" element={<Balearics />} />
            
            {/* Atlantic routes */}
            <Route path="/reviere/atlantik" element={<Atlantic />} />

            {/* Caribbean routes */}
            <Route path="/reviere/karibik" element={<Caribbean />} />
            <Route path="/reviere/karibik/britische-jungferninseln" element={<BritishVirginIslands />} />
            <Route path="/reviere/karibik/us-jungferninseln" element={<USVirginIslands />} />
            <Route path="/reviere/karibik/leeward-inseln" element={<LeewardIslands />} />
            <Route path="/reviere/karibik/windward-inseln" element={<WindwardIslands />} />
            <Route path="/reviere/karibik/kuba" element={<Cuba />} />
            
            {/* Caribbean Charter Location routes */}
            <Route path="/reviere/karibik/charter-standorte/tortola" element={<Tortola />} />
            <Route path="/reviere/karibik/charter-standorte/st-thomas" element={<StThomas />} />
            <Route path="/reviere/karibik/charter-standorte/antigua" element={<Antigua />} />
            <Route path="/reviere/karibik/charter-standorte/martinique" element={<Martinique />} />
            <Route path="/reviere/karibik/charter-standorte/havanna" element={<Havanna />} />

            {/* Indian Ocean routes */}
            <Route path="/reviere/indischer-ozean" element={<IndianOcean />} />
            <Route path="/reviere/thailand" element={<Thailand />} />
            <Route path="/reviere/seychellen" element={<Seychelles />} />

            {/* North Europe routes */}
            <Route path="/reviere/nord-europa" element={<NorthEurope />} />

            {/* Pacific routes */}
            <Route path="/reviere/suedpazifik" element={<Pacific />} />

             {/* America & Bahamas routes */}
             <Route path="/reviere/amerika-bahamas" element={<Americas />} />

            {/* Expedition routes */}
            <Route path="/reviere/expedition" element={<Expeditions />} />

            {/* Australia route */}
            <Route path="/reviere/australien" element={<Australia />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
