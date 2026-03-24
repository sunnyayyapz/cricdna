import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ExplorePage from "@/pages/ExplorePage";
import ArticlePage from "@/pages/ArticlePage";
import PlayerProfilePage from "@/pages/PlayerProfilePage";
import ComparePage from "@/pages/ComparePage";
import MatchesPage from "@/pages/MatchesPage";
import MatchPreviewPage from "@/pages/MatchPreviewPage";
import TeamMatchupPage from "@/pages/TeamMatchupPage";
import AdminPage from "@/pages/AdminPage";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/article/:slug" component={ArticlePage} />
        <Route path="/player/:id" component={PlayerProfilePage} />
        <Route path="/compare" component={ComparePage} />
        <Route path="/matches" component={MatchesPage} />
        <Route path="/matches/:id" component={MatchPreviewPage} />
        <Route path="/matches/:id/matchups" component={TeamMatchupPage} />
        <Route path="/admin" component={AdminPage} />
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
