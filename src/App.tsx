import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Footer from "@/components/Footer";

// Core pages - loaded immediately
import Index from "./pages/Index";
import About from '@/pages/About';
import Impressum from '@/pages/Impressum';
import FAQ from '@/pages/FAQ';
import NotFound from "./pages/NotFound";

// Territory pages - lazy loaded
const Mediterranean = lazy(() => import("./pages/territories/Mediterranean"));
const Croatia = lazy(() => import("./pages/territories/mediterranean/Croatia"));
const Greece = lazy(() => import("./pages/territories/mediterranean/Greece"));
const Italy = lazy(() => import("./pages/territories/mediterranean/Italy"));
const Caribbean = lazy(() => import("./pages/territories/Caribbean"));
const Atlantic = lazy(() => import("./pages/territories/Atlantic"));
const Americas = lazy(() => import("./pages/territories/Americas"));
const BritishVirginIslands = lazy(() => import("./pages/territories/caribbean/BritishVirginIslands"));
const USVirginIslands = lazy(() => import("./pages/territories/caribbean/USVirginIslands"));
const AllTerritories = lazy(() => import("./pages/AllTerritories"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/reviere/alle-reviere" element={<AllTerritories />} />
              
              {/* Mediterranean routes */}
              <Route path="/reviere/mittelmeer" element={<Mediterranean />} />
              <Route path="/reviere/mittelmeer/kroatien" element={<Croatia />} />
              <Route path="/reviere/mittelmeer/griechenland" element={<Greece />} />
              <Route path="/reviere/mittelmeer/italien" element={<Italy />} />
              
              {/* Caribbean routes */}
              <Route path="/reviere/karibik" element={<Caribbean />} />
              <Route path="/reviere/karibik/british-virgin-islands" element={<BritishVirginIslands />} />
              <Route path="/reviere/karibik/us-virgin-islands" element={<USVirginIslands />} />
              
              {/* Atlantic routes */}
              <Route path="/reviere/atlantik" element={<Atlantic />} />
              
              {/* Americas routes */}
              <Route path="/reviere/amerika" element={<Americas />} />
              
              {/* Catch all other routes and redirect to home or show 404 */}
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