import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LockScreen from "./pages/LockScreen";
import TheOnePercent from "./pages/TheOnePercent";
import PolaroidMemories from "./pages/PolaroidMemories";
import TheConstant from "./pages/TheConstant";
import StarsThatDontFade from "./pages/StarsThatDontFade";
import HowWeGrew from "./pages/HowWeGrew";
import ForDifferentDays from "./pages/ForDifferentDays";
import UnakuMattum from "./pages/UnakuMattum";
import FriendshipCalculator from "./pages/FriendshipCalculator";
import NoDatesJustImpact from "./pages/NoDatesJustImpact";
import FinalPage from "./pages/FinalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LockScreen />} />
        <Route path="/the-one-percent" element={<TheOnePercent />} />
        <Route path="/polaroid-memories" element={<PolaroidMemories />} />
        <Route path="/the-constant" element={<TheConstant />} />
        <Route path="/stars" element={<StarsThatDontFade />} />
        <Route path="/how-we-grew" element={<HowWeGrew />} />
        <Route path="/for-different-days" element={<ForDifferentDays />} />
        <Route path="/unaku-mattum" element={<UnakuMattum />} />
        <Route path="/friendship-calculator" element={<FriendshipCalculator />} />
        <Route path="/no-dates" element={<NoDatesJustImpact />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
