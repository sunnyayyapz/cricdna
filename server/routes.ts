import type { Express } from "express";
import { createServer, type Server } from "http";
import { players, teams } from "./data/players";
import { allPlayers, type SquadPlayer } from "./data/allPlayers";
import { schedule } from "./data/schedule";
import { matchPreviews } from "./data/matchPreviews";
import { matchups } from "./data/matchups";
import { deepInsights } from "./data/deepInsights";
import { articles, analyticsCards } from "./data/articles";
import { publishLog } from "./data/publishLog";
import { proIntelligence1 } from "./data/proIntelligence1";
import { proIntelligence2 } from "./data/proIntelligence2";
import { venueStats as venueStatsData } from "./data/venueStatsData";
import { headToHead as headToHeadData } from "./data/headToHeadData";
import { playerCareerStats as playerCareerData } from "./data/playerCareerStatsData";
import { tossStats as tossStatsData } from "./data/tossStatsData";
import { seasonTrends as seasonTrendsData } from "./data/seasonTrendsData";

const proIntelligence: Record<number, any> = { ...proIntelligence1, ...proIntelligence2 };

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // ─── Existing routes (unchanged) ──────────────────────────────────────────

  // GET /api/players — list all 30 rich-profile players with optional filtering
  app.get("/api/players", (req, res) => {
    const { search, team, role, sort } = req.query as Record<string, string>;

    let result = players.map((p) => ({
      id: p.id,
      name: p.name,
      country: p.country,
      countryFlag: p.countryFlag,
      team: p.team,
      teamShort: p.teamShort,
      teamColor: p.teamColor,
      role: p.role,
      dnaScore: p.dnaScore,
      dnaScoreTrend: p.dnaScoreTrend,
      keyInsight: p.keyInsight,
      stats: {
        matches: p.stats.matches,
        runs: p.stats.runs,
        average: p.stats.average,
        strikeRate: p.stats.strikeRate,
        wickets: p.stats.wickets,
      },
    }));

    if (search) {
      const s = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(s));
    }

    if (team && team !== "all") {
      result = result.filter((p) => p.teamShort === team);
    }

    if (role && role !== "all") {
      result = result.filter((p) => p.role === role);
    }

    if (sort === "dnaScore") {
      result.sort((a, b) => b.dnaScore - a.dnaScore);
    } else if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "stats.average") {
      result.sort((a, b) => b.stats.average - a.stats.average);
    }

    res.json(result);
  });

  // GET /api/players/:id — full player data + deep insights (falls back to squad data)
  app.get("/api/players/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const player = players.find((p) => p.id === id);
    if (player) {
      const insights = deepInsights[id];
      const proIntel = proIntelligence[id];
      return res.json({ ...player, isRichProfile: true, deepInsights: insights || null, proIntelligence: proIntel || null });
    }
    // Fallback to squad player data
    const squadPlayer = allPlayers.find((p) => p.id === id);
    if (!squadPlayer) {
      return res.status(404).json({ error: "Player not found" });
    }
    // Return squad player with a flag indicating it's not a rich profile
    res.json({
      ...squadPlayer,
      isRichProfile: false,
      radarData: [],
      careerTimeline: [],
      driftEvents: [],
      recentInnings: [],
      phaseData: [],
      dismissalPatterns: {},
      deepInsights: null,
      proIntelligence: null,
    });
  });

  // GET /api/players/:id/drifts — player drift events
  app.get("/api/players/:id/drifts", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const player = players.find((p) => p.id === id);
    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }
    res.json(player.driftEvents);
  });

  // GET /api/compare?ids=1,2 — full data for two players
  app.get("/api/compare", (req, res) => {
    const ids = (req.query.ids as string)?.split(",").map(Number) ?? [];
    const result = ids.map((id) => players.find((p) => p.id === id)).filter(Boolean);
    res.json(result);
  });

  // GET /api/teams — returns teams array
  app.get("/api/teams", (_req, res) => {
    res.json(teams);
  });

  // ─── New routes ───────────────────────────────────────────────────────────

  // GET /api/allplayers — All 250 players (lightweight list)
  app.get("/api/allplayers", (req, res) => {
    const { search, team, role, sort, squad, uncapped } = req.query as Record<string, string>;

    let result: SquadPlayer[] = allPlayers.map((sp) => {
      // For existing players (IDs 1-30), merge with rich player data
      if (sp.existing) {
        const richPlayer = players.find((p) => p.id === sp.id);
        if (richPlayer) {
          return {
            ...sp,
            dnaScore: richPlayer.dnaScore,
            dnaScoreTrend: richPlayer.dnaScoreTrend,
            keyInsight: richPlayer.keyInsight,
            stats: richPlayer.stats,
          };
        }
      }
      return sp;
    });

    if (search) {
      const s = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(s));
    }

    if (team && team !== "all") {
      result = result.filter((p) => p.teamShort === team);
    }

    if (role && role !== "all") {
      result = result.filter((p) => p.role === role);
    }

    if (squad === "probableXI") {
      result = result.filter((p) => p.isProbableXI);
    } else if (squad === "bench") {
      result = result.filter((p) => !p.isProbableXI);
    }

    if (uncapped === "true") {
      result = result.filter((p) => p.isUncapped);
    }

    if (sort === "dnaScore") {
      result.sort((a, b) => b.dnaScore - a.dnaScore);
    } else if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "stats.average") {
      result.sort((a, b) => b.stats.average - a.stats.average);
    }

    res.json(result);
  });

  // GET /api/schedule — All 20 matches
  app.get("/api/schedule", (_req, res) => {
    res.json(schedule);
  });

  // GET /api/schedule/upcoming — Today's matches and future only
  app.get("/api/schedule/upcoming", (_req, res) => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const upcoming = schedule.filter((m) => m.date >= today);
    res.json(upcoming);
  });

  // GET /api/matches/:id/preview — Match preview
  app.get("/api/matches/:id/preview", (req, res) => {
    const matchId = parseInt(req.params.id, 10);
    const preview = matchPreviews.find((mp) => mp.matchId === matchId);
    if (!preview) {
      return res.status(404).json({ error: "Match preview not found" });
    }
    // Attach schedule info
    const match = schedule.find((s) => s.id === matchId);
    res.json({ ...preview, match });
  });

  // GET /api/matches/:id/matchups — All batter/bowler matchups for a match
  app.get("/api/matches/:id/matchups", (req, res) => {
    const matchId = req.params.id;
    const matchData = matchups[matchId];
    if (!matchData) {
      return res.status(404).json({ error: "Matchup data not found" });
    }
    const match = schedule.find((s) => s.id === parseInt(matchId, 10));
    res.json({ matchups: matchData, match });
  });

  // GET /api/teams/:teamShort/squad — Full squad for a team
  app.get("/api/teams/:teamShort/squad", (req, res) => {
    const teamShort = req.params.teamShort.toUpperCase();
    const squadPlayers = allPlayers
      .filter((p) => p.teamShort === teamShort)
      .map((sp) => {
        if (sp.existing) {
          const richPlayer = players.find((p) => p.id === sp.id);
          if (richPlayer) {
            return {
              ...sp,
              dnaScore: richPlayer.dnaScore,
              dnaScoreTrend: richPlayer.dnaScoreTrend,
              keyInsight: richPlayer.keyInsight,
              stats: richPlayer.stats,
            };
          }
        }
        return sp;
      });

    if (squadPlayers.length === 0) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(squadPlayers);
  });

  // GET /api/teams/:teamShort/probable-xi — Probable XI for a team
  app.get("/api/teams/:teamShort/probable-xi", (req, res) => {
    const teamShort = req.params.teamShort.toUpperCase();
    const xi = allPlayers
      .filter((p) => p.teamShort === teamShort && p.isProbableXI)
      .map((sp) => {
        if (sp.existing) {
          const richPlayer = players.find((p) => p.id === sp.id);
          if (richPlayer) {
            return {
              ...sp,
              dnaScore: richPlayer.dnaScore,
              dnaScoreTrend: richPlayer.dnaScoreTrend,
              keyInsight: richPlayer.keyInsight,
              stats: richPlayer.stats,
            };
          }
        }
        return sp;
      });

    if (xi.length === 0) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(xi);
  });

  // ─── Article routes ──────────────────────────────────────────────────────

  // GET /api/articles — all articles with optional category and limit filters
  app.get("/api/articles", (req, res) => {
    const { category, limit } = req.query as Record<string, string>;
    let result = [...articles];
    if (category) {
      result = result.filter((a) => a.category === category);
    }
    if (limit) {
      result = result.slice(0, parseInt(limit, 10));
    }
    res.json(result);
  });

  // GET /api/articles/analytics-cards — analytics cards for homepage
  app.get("/api/articles/analytics-cards", (_req, res) => {
    res.json(analyticsCards);
  });

  // GET /api/articles/featured — the single featured article
  app.get("/api/articles/featured", (_req, res) => {
    const featured = articles.find((a) => a.featured);
    if (!featured) {
      return res.status(404).json({ error: "No featured article found" });
    }
    res.json(featured);
  });

  // GET /api/articles/:slug — single article by slug
  app.get("/api/articles/:slug", (req, res) => {
    const article = articles.find((a) => a.slug === req.params.slug);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  });

  // GET /api/admin/publish-log — publish history for admin dashboard
  app.get("/api/admin/publish-log", (_req, res) => {
    res.json(publishLog);
  });

  // ─── Real IPL Stats routes ─────────────────────────────────────────────────

  // GET /api/stats/venues — all venue stats (optional ?venue= filter)
  app.get("/api/stats/venues", (req, res) => {
    const venue = (req.query.venue as string)?.toLowerCase();
    if (venue) {
      const filtered = venueStatsData.filter((v: any) =>
        v.venue.toLowerCase().includes(venue) || v.city?.toLowerCase().includes(venue)
      );
      return res.json(filtered);
    }
    res.json(venueStatsData);
  });

  // GET /api/stats/venues/:venue — stats for a specific venue (partial match)
  app.get("/api/stats/venues/:venue", (req, res) => {
    const query = req.params.venue.toLowerCase();
    const match = venueStatsData.find(
      (v: any) => v.venue.toLowerCase().includes(query) || v.city?.toLowerCase().includes(query)
    );
    if (!match) {
      return res.status(404).json({ error: "Venue not found" });
    }
    res.json(match);
  });

  // GET /api/stats/head-to-head — all H2H data (optional ?batter= and ?bowler= filters)
  app.get("/api/stats/head-to-head", (req, res) => {
    const batter = (req.query.batter as string)?.toLowerCase();
    const bowler = (req.query.bowler as string)?.toLowerCase();
    let result = headToHeadData;
    if (batter) {
      result = result.filter((h: any) => h.batter.toLowerCase().includes(batter));
    }
    if (bowler) {
      result = result.filter((h: any) => h.bowler.toLowerCase().includes(bowler));
    }
    res.json(result);
  });

  // GET /api/stats/head-to-head/search — search specific matchup
  app.get("/api/stats/head-to-head/search", (req, res) => {
    const batter = (req.query.batter as string)?.toLowerCase();
    const bowler = (req.query.bowler as string)?.toLowerCase();
    if (!batter && !bowler) {
      return res.status(400).json({ error: "Provide at least ?batter= or ?bowler=" });
    }
    let result = headToHeadData;
    if (batter) {
      result = result.filter((h: any) => h.batter.toLowerCase().includes(batter));
    }
    if (bowler) {
      result = result.filter((h: any) => h.bowler.toLowerCase().includes(bowler));
    }
    res.json(result);
  });

  // GET /api/stats/players/:name — career stats for a player (partial match)
  app.get("/api/stats/players/:name", (req, res) => {
    const query = req.params.name.toLowerCase();
    const exactMatch = Object.entries(playerCareerData).find(
      ([key]) => key.toLowerCase() === query
    );
    if (exactMatch) {
      return res.json(exactMatch[1]);
    }
    const partialMatch = Object.entries(playerCareerData).find(
      ([key]) => key.toLowerCase().includes(query)
    );
    if (partialMatch) {
      return res.json(partialMatch[1]);
    }
    // Return all partial matches
    const matches = Object.entries(playerCareerData)
      .filter(([key]) => key.toLowerCase().includes(query))
      .map(([, val]) => val);
    if (matches.length === 0) {
      return res.status(404).json({ error: "Player not found" });
    }
    res.json(matches);
  });

  // GET /api/stats/toss — toss stats (optional ?venue= filter)
  app.get("/api/stats/toss", (req, res) => {
    const venue = (req.query.venue as string)?.toLowerCase();
    if (venue) {
      const filtered = (tossStatsData.venues || []).filter((v: any) =>
        v.venue.toLowerCase().includes(venue)
      );
      return res.json({ venues: filtered });
    }
    res.json(tossStatsData);
  });

  // GET /api/stats/seasons — all season trends
  app.get("/api/stats/seasons", (_req, res) => {
    res.json(seasonTrendsData);
  });

  return httpServer;
}
