import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ContactSection } from "@/components/ContactSection";

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col bg-background selection:bg-primary/30 selection:text-foreground">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <ExperienceSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
