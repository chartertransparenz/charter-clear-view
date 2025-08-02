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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/territories/mediterranean" element={<Mediterranean />} />
          <Route path="/territories/caribbean" element={<Caribbean />} />
          <Route path="/territories/pacific" element={<Pacific />} />
          <Route path="/territories/atlantic" element={<Atlantic />} />
          <Route path="/territories/indian-ocean" element={<IndianOcean />} />
          <Route path="/territories/north-europe" element={<NorthEurope />} />
          <Route path="/territories/expeditions" element={<Expeditions />} />
          <Route path="/territories/croatia" element={<Croatia />} />
          <Route path="/territories/greece" element={<Greece />} />
          <Route path="/territories/italy" element={<Italy />} />
          <Route path="/territories/spain" element={<Spain />} />
          <Route path="/territories/turkey" element={<Turkey />} />
          <Route path="/territories/france" element={<France />} />
          <Route path="/territories/bvi" element={<BVI />} />
          <Route path="/territories/thailand" element={<Thailand />} />
          <Route path="/territories/seychelles" element={<Seychelles />} />
          <Route path="/territories/australia" element={<Australia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
