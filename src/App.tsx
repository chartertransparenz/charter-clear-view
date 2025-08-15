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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
