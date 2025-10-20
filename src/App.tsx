import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prosjekter from "./pages/Prosjekter";
import ProsjekterTekniske from "./pages/ProsjekterTekniske";
import ProsjekterKreative from "./pages/ProsjekterKreative";
import Erfaring from "./pages/Erfaring";
import ErfaringIngenior from "./pages/ErfaringIngenior";
import ErfaringLedelse from "./pages/ErfaringLedelse";
import ErfaringDiverse from "./pages/ErfaringDiverse";
import Attester from "./pages/Attester";
import Utdanning from "./pages/Utdanning";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prosjekter" element={<Prosjekter />} />
          <Route path="/prosjekter/tekniske" element={<ProsjekterTekniske />} />
          <Route path="/prosjekter/kreative" element={<ProsjekterKreative />} />
          <Route path="/erfaring" element={<Erfaring />} />
          <Route path="/erfaring/ingenior" element={<ErfaringIngenior />} />
          <Route path="/erfaring/ledelse" element={<ErfaringLedelse />} />
          <Route path="/erfaring/diverse" element={<ErfaringDiverse />} />
          <Route path="/attester" element={<Attester />} />
          <Route path="/utdanning" element={<Utdanning />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
