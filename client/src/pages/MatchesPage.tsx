import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, MapPin, Clock, Eye, Swords, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScheduleMatch {
  id: number;
  matchNumber: number;
  date: string;
  day: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  status: string;
}

interface Team {
  short: string;
  name: string;
  color: string;
}

const TEAM_COLORS: Record<string, string> = {
  CSK: "#FFCB05",
  DC: "#17479E",
  GT: "#1B2133",
  KKR: "#3A225D",
  LSG: "#A72056",
  MI: "#004BA0",
  PBKS: "#ED1B24",
  RR: "#EA1A85",
  RCB: "#E4002B",
  SRH: "#FF822A",
};

function getTeamColor(teamShort: string): string {
  return TEAM_COLORS[teamShort] || "#666";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function MatchCard({ match }: { match: ScheduleMatch }) {
  const homeColor = getTeamColor(match.homeTeam);
  const awayColor = getTeamColor(match.awayTeam);

  return (
    <div
      data-testid={`match-card-${match.id}`}
      className="group bg-card border border-card-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
    >
      {/* Color accent bar */}
      <div className="h-1 flex">
        <div className="flex-1" style={{ backgroundColor: homeColor }} />
        <div className="flex-1" style={{ backgroundColor: awayColor }} />
      </div>

      <div className="p-4 sm:p-5">
        {/* Match number + date row */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5 font-semibold">
            Match {match.matchNumber}
          </Badge>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            <span>{formatDate(match.date)}</span>
            <span className="text-muted-foreground/50">·</span>
            <span>{match.day}</span>
          </div>
        </div>

        {/* Teams vs */}
        <div className="flex items-center justify-center gap-4 py-3">
          {/* Home team */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="font-bold text-sm text-foreground">{match.homeTeam}</span>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-black"
              style={{ backgroundColor: homeColor }}
            >
              {match.homeTeam.charAt(0)}
            </div>
          </div>

          <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">vs</span>

          {/* Away team */}
          <div className="flex items-center gap-2 flex-1">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-black"
              style={{ backgroundColor: awayColor }}
            >
              {match.awayTeam.charAt(0)}
            </div>
            <span className="font-bold text-sm text-foreground">{match.awayTeam}</span>
          </div>
        </div>

        {/* Venue + time */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin size={11} className="shrink-0" />
            <span className="truncate">{match.venue}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={11} className="shrink-0" />
            <span>{match.time}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Link href={`/matches/${match.id}`}>
            <a
              data-testid={`preview-btn-${match.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 px-3 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
            >
              <Eye size={13} />
              Preview
            </a>
          </Link>
          <Link href={`/matches/${match.id}/matchups`}>
            <a
              data-testid={`matchups-btn-${match.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 px-3 rounded-lg bg-accent text-foreground text-xs font-semibold hover:bg-accent/80 transition-colors"
            >
              <Swords size={13} />
              Matchups
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MatchCardSkeleton() {
  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="h-1 bg-muted" />
      <div className="p-4 sm:p-5 space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex justify-center gap-4 py-3">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-8 w-20" />
        </div>
        <Skeleton className="h-4 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </div>
  );
}

export default function MatchesPage() {
  const [tab, setTab] = useState<"all" | "upcoming">("all");
  const [teamFilter, setTeamFilter] = useState("all");

  const { data: teams } = useQuery<Team[]>({
    queryKey: ["/api/teams"],
  });

  const { data: allMatches, isLoading: loadingAll } = useQuery<ScheduleMatch[]>({
    queryKey: ["/api/schedule"],
  });

  const { data: upcomingMatches, isLoading: loadingUpcoming } = useQuery<ScheduleMatch[]>({
    queryKey: ["/api/schedule/upcoming"],
  });

  const isLoading = tab === "all" ? loadingAll : loadingUpcoming;
  let matches = tab === "all" ? allMatches : upcomingMatches;

  // Apply team filter
  if (matches && teamFilter !== "all") {
    matches = matches.filter(
      (m) => m.homeTeam === teamFilter || m.awayTeam === teamFilter
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <Calendar size={18} className="text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">IPL 2026</span>
        </div>
        <h1 className="text-xl font-bold font-display text-foreground mb-1.5">
          Match Centre
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl">
          Previews, matchup analysis, and probable XIs for every IPL 2026 fixture
        </p>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {/* Tab toggles */}
        <div className="flex rounded-lg border border-border overflow-hidden">
          <button
            data-testid="tab-all"
            onClick={() => setTab("all")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium transition-colors",
              tab === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            All Matches
          </button>
          <button
            data-testid="tab-upcoming"
            onClick={() => setTab("upcoming")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium transition-colors border-l border-border",
              tab === "upcoming"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            Upcoming
          </button>
        </div>

        {/* Team filter */}
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger data-testid="filter-team-matches" className="h-8 text-xs w-auto min-w-[130px]">
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

        <span className="ml-auto text-xs text-muted-foreground tabular-nums">
          {matches?.length ?? 0} matches
        </span>
      </div>

      {/* Match grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <MatchCardSkeleton key={i} />)
          : matches?.map((m) => <MatchCard key={m.id} match={m} />)
        }
      </div>

      {!isLoading && matches?.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Calendar size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No matches found for the selected filters</p>
        </div>
      )}
    </div>
  );
}
