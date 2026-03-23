import type { Express } from "express";
import { createServer, type Server } from "http";
import { players, teams } from "./data/players";
import { allPlayers, type SquadPlayer } from "./data/allPlayers";
import { schedule } from "./data/schedule";
import { matchPreviews } from "./data/matchPreviews";
import { matchups } from "./data/matchups";
import { deepInsights } from "./data/deepInsights";
import { proIntelligence1 } from "./data/proIntelligence1";
import { proIntelligence2 } from "./data/proIntelligence2";

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

  // GET /api/schedule/upcoming — Matches from today onwards
  app.get("/api/schedule/upcoming", (_req, res) => {
    const today = "2026-03-22";
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

  return httpServer;
}
