import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import {
  ArrowLeft, Calendar, MapPin, Clock, Swords, Users,
  Shield, ChevronRight, Globe, Zap
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TEAM_COLORS: Record<string, string> = {
  CSK: "#FFCB05", DC: "#17479E", GT: "#1B2133", KKR: "#3A225D",
  LSG: "#A72056", MI: "#004BA0", PBKS: "#ED1B24", RR: "#EA1A85",
  RCB: "#E4002B", SRH: "#FF822A",
};
const TEAM_NAMES: Record<string, string> = {
  CSK: "Chennai Super Kings", DC: "Delhi Capitals", GT: "Gujarat Titans",
  KKR: "Kolkata Knight Riders", LSG: "Lucknow Super Giants", MI: "Mumbai Indians",
  PBKS: "Punjab Kings", RR: "Rajasthan Royals", RCB: "Royal Challengers Bengaluru",
  SRH: "Sunrisers Hyderabad",
};

interface SquadPlayer {
  id: number;
  name: string;
  role: string;
  teamShort: string;
  teamColor: string;
  country: string;
  countryFlag: string;
  isProbableXI: boolean;
  isUncapped: boolean;
  battingStyle: string;
  bowlingStyle: string;
}

interface MatchupData {
  batterId: number;
  bowlerId: number;
  ballsFaced: number;
  runs: number;
  dismissals: number;
  strikeRate: number;
  average: number;
  dots: number;
  boundaries: number;
  sixes: number;
  narrative: string;
  advantage: "batter" | "bowler" | "even";
  strengthNote: string;
  weaknessNote: string;
}

interface MatchInfo {
  id: number;
  matchNumber: number;
  date: string;
  day: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
}

function AdvantageTag({ advantage }: { advantage: "batter" | "bowler" | "even" }) {
  const styles = {
    batter: "bg-green-500/15 text-green-500 border-green-500/20",
    bowler: "bg-red-500/15 text-red-500 border-red-500/20",
    even: "bg-gray-500/15 text-gray-400 border-gray-500/20",
  };
  const labels = {
    batter: "Batter ↑",
    bowler: "Bowler ↑",
    even: "Even",
  };
  return (
    <span className={cn("inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold border", styles[advantage])}>
      {labels[advantage]}
    </span>
  );
}

function RoleIcon({ role }: { role: string }) {
  const letter = role === "Batter" ? "B" : role === "Bowler" ? "Bw" : role === "All-rounder" ? "AR" : "WK";
  return (
    <span className="text-[9px] font-bold text-muted-foreground bg-muted/50 px-1 py-0.5 rounded">
      {letter}
    </span>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function ProbableXIPanel({
  team,
  players,
  color,
}: {
  team: string;
  players: SquadPlayer[];
  color: string;
}) {
  const xi = players.filter((p) => p.isProbableXI).slice(0, 11);
  const overseas = xi.filter((p) => p.country !== "India").length;
  const batters = xi.filter((p) => p.role === "Batter" || p.role === "Wicketkeeper-Batter").length;
  const bowlers = xi.filter((p) => p.role === "Bowler").length;
  const allRounders = xi.filter((p) => p.role === "All-rounder").length;

  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: `3px solid ${color}` }}>
        <div
          className="w-6 h-6 rounded flex items-center justify-center text-white text-[9px] font-black"
          style={{ backgroundColor: color }}
        >
          {team.charAt(0)}
        </div>
        <span className="font-bold text-sm text-foreground">{TEAM_NAMES[team] || team}</span>
        <Badge variant="secondary" className="ml-auto text-[9px]">XI</Badge>
      </div>

      <div className="p-3">
        <ol className="space-y-1">
          {xi.map((p, i) => (
            <li
              key={p.id}
              className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-accent/50 transition-colors"
            >
              <span className="text-[10px] font-bold text-muted-foreground w-4 text-right tabular-nums">
                {i + 1}
              </span>
              <span className="text-xs font-medium text-foreground flex-1 truncate">
                {p.countryFlag} {p.name}
              </span>
              <RoleIcon role={p.role} />
              {p.isUncapped && (
                <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1 rounded">UC</span>
              )}
            </li>
          ))}
        </ol>

        {/* Quick stats */}
        <div className="flex gap-3 mt-3 pt-3 border-t border-border text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Globe size={10} /> {overseas} overseas
          </span>
          <span>{batters} bat · {bowlers} bowl · {allRounders} AR</span>
        </div>
      </div>
    </div>
  );
}

function MatchupExplorer({
  matchups,
  batters,
  bowlers,
  allPlayers,
  tabKey,
}: {
  matchups: MatchupData[];
  batters: SquadPlayer[];
  bowlers: SquadPlayer[];
  allPlayers: SquadPlayer[];
  tabKey: string;
}) {
  const [selectedBatter, setSelectedBatter] = useState<number | null>(
    batters.length > 0 ? batters[0].id : null
  );

  // Reset selected batter when tab changes
  const [prevTab, setPrevTab] = useState(tabKey);
  if (tabKey !== prevTab) {
    setPrevTab(tabKey);
    if (batters.length > 0) {
      setSelectedBatter(batters[0].id);
    }
  }

  const playerName = (id: number) => allPlayers.find((p) => p.id === id)?.name ?? `Player #${id}`;

  const batterMatchups = matchups.filter((m) => m.batterId === selectedBatter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
      {/* Batter selector */}
      <div className="bg-card border border-card-border rounded-xl p-3">
        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
          Select Batter
        </div>
        <div className="space-y-0.5 max-h-[400px] overflow-y-auto">
          {batters.map((b) => (
            <button
              key={b.id}
              data-testid={`select-batter-${b.id}`}
              onClick={() => setSelectedBatter(b.id)}
              className={cn(
                "w-full text-left px-2.5 py-2 rounded-lg text-xs transition-colors",
                selectedBatter === b.id
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-accent/50"
              )}
            >
              {b.countryFlag} {b.name}
              <span className="block text-[10px] text-muted-foreground mt-0.5">{b.role}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Matchup results */}
      <div className="space-y-3">
        {batterMatchups.length === 0 ? (
          <div className="bg-card border border-card-border rounded-xl p-6 text-center text-sm text-muted-foreground">
            No matchup data available for this batter
          </div>
        ) : (
          batterMatchups.map((mu) => (
            <div
              key={`${mu.batterId}-${mu.bowlerId}`}
              className="bg-card border border-card-border rounded-xl p-4"
              data-testid={`matchup-${mu.batterId}-${mu.bowlerId}`}
            >
              {/* Bowler name + advantage */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Swords size={13} className="text-muted-foreground" />
                  <span className="font-semibold text-sm text-foreground">
                    vs {playerName(mu.bowlerId)}
                  </span>
                </div>
                <AdvantageTag advantage={mu.advantage} />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-3">
                {[
                  { label: "Balls", value: mu.ballsFaced },
                  { label: "Runs", value: mu.runs },
                  { label: "SR", value: mu.strikeRate.toFixed(1) },
                  { label: "Avg", value: mu.average.toFixed(1) },
                  { label: "Dots", value: mu.dots },
                  { label: "4s", value: mu.boundaries },
                  { label: "6s", value: mu.sixes },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                    <div className="text-xs font-bold tabular-nums text-foreground">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Dismissals badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] text-muted-foreground">Dismissals:</span>
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded",
                  mu.dismissals === 0
                    ? "bg-green-500/10 text-green-500"
                    : mu.dismissals >= 3
                    ? "bg-red-500/10 text-red-500"
                    : "bg-amber-500/10 text-amber-500"
                )}>
                  {mu.dismissals}
                </span>
              </div>

              {/* Narrative */}
              <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-3 mb-3">
                {mu.narrative}
              </p>

              {/* Strength/weakness pills */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                  ✓ {mu.strengthNote}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                  ✗ {mu.weaknessNote}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function MatchupSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-20 w-full rounded-xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-60 w-full rounded-xl" />
        <Skeleton className="h-60 w-full rounded-xl" />
      </div>
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}

export default function TeamMatchupPage() {
  const params = useParams<{ id: string }>();
  const matchId = params.id;
  const [tab, setTab] = useState<"home" | "away">("home");

  const { data: matchupData, isLoading: loadingMatchups } = useQuery<{
    matchups: MatchupData[];
    match: MatchInfo;
  }>({
    queryKey: ["/api/matches", matchId, "matchups"],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/matches/${matchId}/matchups`);
      return res.json();
    },
  });

  const match = matchupData?.match;
  const homeTeam = match?.homeTeam ?? "";
  const awayTeam = match?.awayTeam ?? "";

  const { data: homeSquad, isLoading: loadingHome } = useQuery<SquadPlayer[]>({
    queryKey: ["/api/teams", homeTeam, "squad"],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/teams/${homeTeam}/squad`);
      return res.json();
    },
    enabled: !!homeTeam,
  });

  const { data: awaySquad, isLoading: loadingAway } = useQuery<SquadPlayer[]>({
    queryKey: ["/api/teams", awayTeam, "squad"],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/teams/${awayTeam}/squad`);
      return res.json();
    },
    enabled: !!awayTeam,
  });

  const isLoading = loadingMatchups || loadingHome || loadingAway;

  if (isLoading) return <MatchupSkeleton />;
  if (!matchupData || !match) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center text-muted-foreground">
        <p>Matchup data not found.</p>
        <Link href="/matches">
          <a className="text-primary text-sm mt-2 inline-block">← Back to Matches</a>
        </Link>
      </div>
    );
  }

  const homeColor = TEAM_COLORS[homeTeam] || "#666";
  const awayColor = TEAM_COLORS[awayTeam] || "#666";
  const allSquadPlayers = [...(homeSquad || []), ...(awaySquad || [])];

  // For matchup explorer: determine batters and bowlers based on tab
  const homeBatters = (homeSquad || []).filter(
    (p) => p.isProbableXI && (p.role === "Batter" || p.role === "Wicketkeeper-Batter" || p.role === "All-rounder")
  );
  const awayBatters = (awaySquad || []).filter(
    (p) => p.isProbableXI && (p.role === "Batter" || p.role === "Wicketkeeper-Batter" || p.role === "All-rounder")
  );
  const homeBowlers = (homeSquad || []).filter(
    (p) => p.isProbableXI && (p.role === "Bowler" || p.role === "All-rounder")
  );
  const awayBowlers = (awaySquad || []).filter(
    (p) => p.isProbableXI && (p.role === "Bowler" || p.role === "All-rounder")
  );

  const tabBatters = tab === "home" ? homeBatters : awayBatters;
  const tabBowlers = tab === "home" ? awayBowlers : homeBowlers;

  // Filter matchups for the selected direction
  const tabMatchups = matchupData.matchups.filter((mu) => {
    const batterIds = tabBatters.map((b) => b.id);
    const bowlerIds = tabBowlers.map((b) => b.id);
    return batterIds.includes(mu.batterId) && bowlerIds.includes(mu.bowlerId);
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Back nav */}
      <div className="flex items-center justify-between mb-4">
        <Link href={`/matches/${matchId}`}>
          <a className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Match Preview
          </a>
        </Link>
      </div>

      {/* Header */}
      <div
        className="rounded-xl border border-card-border p-4 sm:p-6 mb-6"
        style={{
          background: `linear-gradient(135deg, ${homeColor}18 0%, transparent 40%, ${awayColor}18 100%)`,
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
          <span className="font-bold text-base text-foreground">{homeTeam}</span>
          <span className="text-xs font-bold text-muted-foreground/50 uppercase">vs</span>
          <span className="font-bold text-base text-foreground">{awayTeam}</span>
        </div>
        <h1 className="text-center text-sm font-bold font-display text-foreground mb-2">
          Player Matchups
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(match.date)}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {match.time}</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> {match.venue}</span>
        </div>
      </div>

      {/* Probable XI side-by-side */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Users size={16} className="text-primary" />
          Probable Playing XIs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeSquad && (
            <ProbableXIPanel team={homeTeam} players={homeSquad} color={homeColor} />
          )}
          {awaySquad && (
            <ProbableXIPanel team={awayTeam} players={awaySquad} color={awayColor} />
          )}
        </div>
      </section>

      {/* Matchup Explorer */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Swords size={16} className="text-primary" />
          Matchup Explorer
        </h2>

        {/* Toggle tabs */}
        <div className="flex rounded-lg border border-border overflow-hidden mb-4">
          <button
            data-testid="tab-home-batters"
            onClick={() => setTab("home")}
            className={cn(
              "flex-1 px-3 py-2 text-xs font-medium transition-colors",
              tab === "home"
                ? "text-white"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
            style={tab === "home" ? { backgroundColor: homeColor } : undefined}
          >
            {homeTeam} Batters vs {awayTeam} Bowlers
          </button>
          <button
            data-testid="tab-away-batters"
            onClick={() => setTab("away")}
            className={cn(
              "flex-1 px-3 py-2 text-xs font-medium transition-colors border-l border-border",
              tab === "away"
                ? "text-white"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
            style={tab === "away" ? { backgroundColor: awayColor } : undefined}
          >
            {awayTeam} Batters vs {homeTeam} Bowlers
          </button>
        </div>

        <MatchupExplorer
          matchups={tabMatchups}
          batters={tabBatters}
          bowlers={tabBowlers}
          allPlayers={allSquadPlayers}
          tabKey={tab}
        />
      </section>

      {/* Quick Team Comparison */}
      <section className="mb-4">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Shield size={16} className="text-primary" />
          Team Composition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { team: homeTeam, squad: homeSquad, color: homeColor },
            { team: awayTeam, squad: awaySquad, color: awayColor },
          ].map(({ team, squad, color }) => {
            const xi = (squad || []).filter((p) => p.isProbableXI);
            const overseas = xi.filter((p) => p.country !== "India").length;
            const pace = xi.filter((p) =>
              p.bowlingStyle.toLowerCase().includes("fast") ||
              p.bowlingStyle.toLowerCase().includes("medium") ||
              p.bowlingStyle.toLowerCase().includes("pace")
            ).length;
            const spin = xi.filter((p) =>
              p.bowlingStyle.toLowerCase().includes("spin") ||
              p.bowlingStyle.toLowerCase().includes("leg") ||
              p.bowlingStyle.toLowerCase().includes("off break") ||
              p.bowlingStyle.toLowerCase().includes("slow")
            ).length;
            const battingDepth = xi.filter((p) =>
              p.role === "Batter" || p.role === "Wicketkeeper-Batter" || p.role === "All-rounder"
            ).length;

            return (
              <div
                key={team}
                className="bg-card border border-card-border rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center text-white text-[8px] font-black"
                    style={{ backgroundColor: color }}
                  >
                    {team.charAt(0)}
                  </div>
                  <span className="font-bold text-sm text-foreground">{team}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-[10px] text-muted-foreground">Overseas</div>
                    <div className="text-sm font-bold text-foreground tabular-nums">{overseas}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-muted-foreground">Pace/Spin</div>
                    <div className="text-sm font-bold text-foreground tabular-nums">{pace}/{spin}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-muted-foreground">Bat Depth</div>
                    <div className="text-sm font-bold text-foreground tabular-nums">{battingDepth}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
