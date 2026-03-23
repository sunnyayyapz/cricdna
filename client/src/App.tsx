import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";
import ExplorePage from "@/pages/ExplorePage";
import PlayerProfilePage from "@/pages/PlayerProfilePage";
import ComparePage from "@/pages/ComparePage";
import MatchesPage from "@/pages/MatchesPage";
import MatchPreviewPage from "@/pages/MatchPreviewPage";
import TeamMatchupPage from "@/pages/TeamMatchupPage";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={ExplorePage} />
        <Route path="/player/:id" component={PlayerProfilePage} />
        <Route path="/compare" component={ComparePage} />
        <Route path="/matches" component={MatchesPage} />
        <Route path="/matches/:id" component={MatchPreviewPage} />
        <Route path="/matches/:id/matchups" component={TeamMatchupPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router hook={useHashLocation}>
            <AppRouter />
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
