import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Search, TrendingUp, TrendingDown, Minus, ArrowUpRight, Activity, Dna } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SquadPlayer {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: string;
  isProbableXI: boolean;
  isUncapped: boolean;
  existing: boolean;
  dnaScore: number;
  dnaScoreTrend: "improving" | "declining" | "stable" | "recovery";
  keyInsight: string;
  stats: {
    matches: number;
    innings: number;
    runs: number;
    average: number;
    strikeRate: number;
    highest: number;
    hundreds: number;
    fifties: number;
    wickets?: number;
    bowlingAvg?: number;
    economy?: number;
    bestBowling?: string;
  };
}

interface Team {
  short: string;
  name: string;
  color: string;
}

function TrendIcon({ trend }: { trend: string }) {
  switch (trend) {
    case "improving":
      return <TrendingUp size={14} className="text-green-500" />;
    case "declining":
      return <TrendingDown size={14} className="text-red-500" />;
    case "recovery":
      return <ArrowUpRight size={14} className="text-blue-400" />;
    default:
      return <Minus size={14} className="text-amber-400" />;
  }
}

function dnaScoreColor(score: number): string {
  if (score >= 75) return "text-green-500 dark:text-green-400";
  if (score >= 50) return "text-amber-500 dark:text-amber-400";
  return "text-red-500 dark:text-red-400";
}

function dnaScoreBg(score: number): string {
  if (score >= 75) return "bg-green-500/10 border-green-500/20";
  if (score >= 50) return "bg-amber-500/10 border-amber-500/20";
  return "bg-red-500/10 border-red-500/20";
}

function playerInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.substring(0, 2).toUpperCase();
}

function PlayerCard({ player }: { player: SquadPlayer }) {
  const [, navigate] = useLocation();
  const initials = playerInitials(player.name);
  const isBench = !player.isProbableXI;

  return (
    <div
      role="button"
      tabIndex={0}
      data-testid={`player-card-${player.id}`}
      onClick={() => navigate(player.existing ? `/player/${player.id}` : `/player/${player.id}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/player/${player.id}`)}
      className={cn(
        "group bg-card border border-card-border rounded-xl p-4 cursor-pointer transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5",
        isBench && "opacity-70 hover:opacity-100"
      )}
    >
      {/* Header row: avatar + name + flag */}
      <div className="flex items-start gap-3 mb-3">
        {/* Initials avatar */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
          style={{ backgroundColor: player.teamColor }}
          data-testid={`player-avatar-${player.id}`}
        >
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              data-testid={`player-name-${player.id}`}
              className="font-semibold text-sm text-foreground leading-tight"
            >
              {player.name}
            </span>
            <span className="text-sm">{player.countryFlag}</span>
            {player.existing && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-primary/10 text-primary border border-primary/20">
                <Dna size={9} /> DNA
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            {/* Team badge */}
            <span
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
              style={{ backgroundColor: player.teamColor }}
              data-testid={`player-team-${player.id}`}
            >
              {player.teamShort}
            </span>
            {/* Role badge */}
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
              {player.role}
            </Badge>
            {player.isUncapped && (
              <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 text-amber-500 border-amber-500/30">
                Uncapped
              </Badge>
            )}
            {isBench && (
              <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 text-muted-foreground">
                Bench
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* DNA Score */}
      <div className={cn("flex items-center gap-2 p-2 rounded-lg border mb-3", dnaScoreBg(player.dnaScore))}>
        <div className="flex-1">
          <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-0.5">DNA Score</div>
          <div className={cn("text-2xl font-bold tabular-nums leading-none", dnaScoreColor(player.dnaScore))} data-testid={`player-dna-score-${player.id}`}>
            {player.dnaScore}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <TrendIcon trend={player.dnaScoreTrend} />
          <span className="text-[9px] text-muted-foreground capitalize">{player.dnaScoreTrend}</span>
        </div>
      </div>

      {/* Key insight */}
      <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed" data-testid={`player-insight-${player.id}`}>
        {player.keyInsight}
      </p>

      {/* Mini stats */}
      <div className="flex gap-3 mt-3 pt-3 border-t border-border">
        <div className="text-center">
          <div className="text-[10px] text-muted-foreground">Avg</div>
          <div className="text-xs font-semibold tabular-nums text-foreground">{player.stats.average.toFixed(1)}</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-muted-foreground">SR</div>
          <div className="text-xs font-semibold tabular-nums text-foreground">{player.stats.strikeRate.toFixed(1)}</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-muted-foreground">Runs</div>
          <div className="text-xs font-semibold tabular-nums text-foreground">{player.stats.runs.toLocaleString()}</div>
        </div>
        {player.stats.wickets != null && player.stats.wickets > 0 && (
          <div className="text-center">
            <div className="text-[10px] text-muted-foreground">Wkts</div>
            <div className="text-xs font-semibold tabular-nums text-foreground">{player.stats.wickets}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlayerCardSkeleton() {
  return (
    <div className="bg-card border border-card-border rounded-xl p-4 space-y-3">
      <div className="flex items-start gap-3">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <div className="flex-1 space-y-1.5">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [squadFilter, setSquadFilter] = useState("all");
  const [uncappedOnly, setUncappedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("dnaScore");

  const { data: teams } = useQuery<Team[]>({
    queryKey: ["/api/teams"],
  });

  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (teamFilter !== "all") params.set("team", teamFilter);
  if (roleFilter !== "all") params.set("role", roleFilter);
  if (squadFilter === "probableXI") params.set("squad", "probableXI");
  if (squadFilter === "bench") params.set("squad", "bench");
  if (uncappedOnly) params.set("uncapped", "true");
  if (sortBy) params.set("sort", sortBy);

  const queryString = params.toString();

  const { data: players, isLoading } = useQuery<SquadPlayer[]>({
    queryKey: ["/api/allplayers", search, teamFilter, roleFilter, squadFilter, uncappedOnly.toString(), sortBy],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/allplayers${queryString ? `?${queryString}` : ""}`);
      return res.json();
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Hero */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <Activity size={18} className="text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">IPL 2026</span>
        </div>
        <h1 className="text-xl font-bold font-display text-foreground mb-1.5">
          Player Intelligence
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl">
          AI-powered drift detection and performance analytics for all 250 IPL 2026 players
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          data-testid="search-input"
          type="search"
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-9 text-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger data-testid="filter-team" className="h-8 text-xs w-auto min-w-[130px]">
            <SelectValue placeholder="All Teams" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teams</SelectItem>
            {teams?.map((t) => (
              <SelectItem key={t.short} value={t.short}>
                {t.short} — {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger data-testid="filter-role" className="h-8 text-xs w-auto min-w-[130px]">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Batter">Batter</SelectItem>
            <SelectItem value="Bowler">Bowler</SelectItem>
            <SelectItem value="All-rounder">All-rounder</SelectItem>
            <SelectItem value="Wicketkeeper-Batter">Wicketkeeper-Batter</SelectItem>
          </SelectContent>
        </Select>

        <Select value={squadFilter} onValueChange={setSquadFilter}>
          <SelectTrigger data-testid="filter-squad" className="h-8 text-xs w-auto min-w-[120px]">
            <SelectValue placeholder="Squad Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Players</SelectItem>
            <SelectItem value="probableXI">Probable XI</SelectItem>
            <SelectItem value="bench">Bench</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger data-testid="sort-by" className="h-8 text-xs w-auto min-w-[130px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dnaScore">DNA Score</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="stats.average">Batting Avg</SelectItem>
          </SelectContent>
        </Select>

        {/* Uncapped toggle */}
        <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
          <Switch
            data-testid="toggle-uncapped"
            checked={uncappedOnly}
            onCheckedChange={setUncappedOnly}
            className="scale-75"
          />
          Uncapped
        </label>

        {(teamFilter !== "all" || roleFilter !== "all" || squadFilter !== "all" || uncappedOnly || search) && (
          <button
            data-testid="clear-filters"
            onClick={() => {
              setSearch("");
              setTeamFilter("all");
              setRoleFilter("all");
              setSquadFilter("all");
              setUncappedOnly(false);
            }}
            className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors"
          >
            Clear
          </button>
        )}

        <span className="ml-auto text-xs text-muted-foreground self-center tabular-nums">
          {players?.length ?? 0} players
        </span>
      </div>

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => <PlayerCardSkeleton key={i} />)
          : players?.map((p) => <PlayerCard key={p.id} player={p} />)
        }
      </div>

      {!isLoading && players?.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Search size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No players found matching your filters</p>
        </div>
      )}
    </div>
  );
}
