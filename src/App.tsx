import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Footer from "@/components/Footer";

// Core pages only - test basic functionality
import Index from "./pages/Index";
import About from '@/pages/About';
import Impressum from '@/pages/Impressum';
import FAQ from '@/pages/FAQ';
import NotFound from "./pages/NotFound";

// Territory pages - comprehensive routing
import { lazy } from "react";

// Main territory regions
const Mediterranean = lazy(() => import("./pages/territories/Mediterranean"));
const Caribbean = lazy(() => import("./pages/territories/Caribbean"));
const Atlantic = lazy(() => import("./pages/territories/Atlantic"));
const Americas = lazy(() => import("./pages/territories/Americas"));
const Pacific = lazy(() => import("./pages/territories/Pacific"));
const IndianOcean = lazy(() => import("./pages/territories/IndianOcean"));
const NorthEurope = lazy(() => import("./pages/territories/NorthEurope"));
const Expeditions = lazy(() => import("./pages/territories/Expeditions"));

// Mediterranean subpages
const Croatia = lazy(() => import("./pages/territories/mediterranean/Croatia"));
const Greece = lazy(() => import("./pages/territories/mediterranean/Greece"));
const Italy = lazy(() => import("./pages/territories/mediterranean/Italy"));
const Spain = lazy(() => import("./pages/territories/Spain"));
const France = lazy(() => import("./pages/territories/France"));
const Turkey = lazy(() => import("./pages/territories/Turkey"));

// Caribbean subpages
const BritishVirginIslands = lazy(() => import("./pages/territories/caribbean/BritishVirginIslands"));
const USVirginIslands = lazy(() => import("./pages/territories/caribbean/USVirginIslands"));
const WindwardIslands = lazy(() => import("./pages/territories/caribbean/WindwardIslands"));
const LeewardIslands = lazy(() => import("./pages/territories/caribbean/LeewardIslands"));
const Cuba = lazy(() => import("./pages/territories/caribbean/Cuba"));

// Atlantic subpages
const Azores = lazy(() => import("./pages/territories/atlantic/Azores"));
const CanaryIslands = lazy(() => import("./pages/territories/atlantic/CanaryIslands"));
const FrenchAtlanticCoast = lazy(() => import("./pages/territories/atlantic/FrenchAtlanticCoast"));

// Americas subpages
const Bahamas = lazy(() => import("./pages/territories/americas/Bahamas"));
const FloridaKeys = lazy(() => import("./pages/territories/americas/FloridaKeys"));
const Mexico = lazy(() => import("./pages/territories/americas/Mexico"));
const USAEastCoast = lazy(() => import("./pages/territories/americas/USAEastCoast"));
const Belize = lazy(() => import("./pages/territories/americas/Belize"));

// Other regions
const Australia = lazy(() => import("./pages/territories/Australia"));
const Thailand = lazy(() => import("./pages/territories/Thailand"));
const Seychelles = lazy(() => import("./pages/territories/Seychelles"));

const AllTerritories = lazy(() => import("./pages/AllTerritories"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/reviere/alle-reviere" element={<AllTerritories />} />
              
              {/* Main territory regions */}
              <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
              <Route path="/reviere/karibik" element={<Caribbean />} />
              <Route path="/reviere/atlantik" element={<Atlantic />} />
              <Route path="/reviere/amerika" element={<Americas />} />
              <Route path="/reviere/pazifik" element={<Pacific />} />
              <Route path="/reviere/indischer-ozean" element={<IndianOcean />} />
              <Route path="/reviere/nordeuropa" element={<NorthEurope />} />
              <Route path="/reviere/expeditionen" element={<Expeditions />} />
              
              {/* Mediterranean subpages */}
              <Route path="/reviere/mittelmeer/kroatien" element={<Croatia />} />
              <Route path="/reviere/mittelmeer/griechenland" element={<Greece />} />
              <Route path="/reviere/mittelmeer/italien" element={<Italy />} />
              <Route path="/reviere/mittelmeer/spanien" element={<Spain />} />
              <Route path="/reviere/mittelmeer/frankreich" element={<France />} />
              <Route path="/reviere/mittelmeer/tuerkei" element={<Turkey />} />
              
              {/* Caribbean subpages */}
              <Route path="/reviere/karibik/british-virgin-islands" element={<BritishVirginIslands />} />
              <Route path="/reviere/karibik/us-virgin-islands" element={<USVirginIslands />} />
              <Route path="/reviere/karibik/windward-islands" element={<WindwardIslands />} />
              <Route path="/reviere/karibik/leeward-islands" element={<LeewardIslands />} />
              <Route path="/reviere/karibik/kuba" element={<Cuba />} />
              
              {/* Atlantic subpages */}
              <Route path="/reviere/atlantik/azoren" element={<Azores />} />
              <Route path="/reviere/atlantik/kanaren" element={<CanaryIslands />} />
              <Route path="/reviere/atlantik/franzoesische-atlantikkueste" element={<FrenchAtlanticCoast />} />
              
              {/* Americas subpages */}
              <Route path="/reviere/amerika/bahamas" element={<Bahamas />} />
              <Route path="/reviere/amerika/florida-keys" element={<FloridaKeys />} />
              <Route path="/reviere/amerika/mexiko" element={<Mexico />} />
              <Route path="/reviere/amerika/usa-ostkueste" element={<USAEastCoast />} />
              <Route path="/reviere/amerika/belize" element={<Belize />} />
              
              {/* Other regions */}
              <Route path="/reviere/pazifik/australien" element={<Australia />} />
              <Route path="/reviere/pazifik/thailand" element={<Thailand />} />
              <Route path="/reviere/indischer-ozean/seychellen" element={<Seychelles />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;