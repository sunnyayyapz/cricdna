import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useLocation } from "wouter";
import {
  Calendar, MapPin, Clock, Flame, Zap, Snowflake,
  ArrowLeft, Swords, Trophy, Target, Eye, ChevronRight
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

interface PlayerToWatch {
  playerId: number;
  team: string;
  reason: string;
  form: "hot" | "warm" | "cold";
  keyMetric: string;
  matchupEdge: string;
}

interface MatchPreviewData {
  matchId: number;
  headline: string;
  narrative: string;
  keyBattles: string[];
  venueInsight: string;
  playersToWatch: PlayerToWatch[];
  prediction: string;
  match?: {
    id: number;
    matchNumber: number;
    date: string;
    day: string;
    time: string;
    homeTeam: string;
    awayTeam: string;
    venue: string;
    status: string;
  };
}

interface AllPlayer {
  id: number;
  name: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: string;
}

function FormIndicator({ form }: { form: "hot" | "warm" | "cold" }) {
  switch (form) {
    case "hot":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/15 text-orange-500">
          <Flame size={11} /> Hot
        </span>
      );
    case "warm":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/15 text-amber-400">
          <Zap size={11} /> Warm
        </span>
      );
    case "cold":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-400/15 text-blue-400">
          <Snowflake size={11} /> Cold
        </span>
      );
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function PlayerToWatchCard({ player, allPlayers }: { player: PlayerToWatch; allPlayers?: AllPlayer[] }) {
  const playerData = allPlayers?.find((p) => p.id === player.playerId);
  const teamColor = TEAM_COLORS[player.team] || "#666";

  return (
    <div
      data-testid={`player-watch-${player.playerId}`}
      className="bg-card border border-card-border rounded-xl p-4 transition-all hover:border-primary/30"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: teamColor }}
          />
          <Link href={`/player/${player.playerId}`}>
            <a className="font-semibold text-sm text-foreground hover:text-primary transition-colors">
              {playerData?.name ?? `Player #${player.playerId}`}
            </a>
          </Link>
        </div>
        <FormIndicator form={player.form} />
      </div>

      {playerData && (
        <div className="flex items-center gap-1.5 mb-3">
          <span
            className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
            style={{ backgroundColor: teamColor }}
          >
            {player.team}
          </span>
          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
            {playerData.role}
          </Badge>
        </div>
      )}

      {/* Why to watch */}
      <p className="text-xs text-muted-foreground leading-relaxed italic mb-3 border-l-2 border-primary/20 pl-3">
        {player.reason}
      </p>

      {/* Key metric */}
      <div className="text-xs font-bold text-foreground mb-2">
        <Target size={11} className="inline mr-1 text-primary" />
        {player.keyMetric}
      </div>

      {/* Matchup edge */}
      <p className="text-[11px] text-muted-foreground">
        <Swords size={10} className="inline mr-1" />
        {player.matchupEdge}
      </p>
    </div>
  );
}

function PreviewSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="h-24 w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default function MatchPreviewPage() {
  const params = useParams<{ id: string }>();
  const matchId = params.id;

  const { data: preview, isLoading } = useQuery<MatchPreviewData>({
    queryKey: ["/api/matches", matchId, "preview"],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/matches/${matchId}/preview`);
      return res.json();
    },
  });

  const { data: allPlayers } = useQuery<AllPlayer[]>({
    queryKey: ["/api/allplayers"],
  });

  if (isLoading) return <PreviewSkeleton />;
  if (!preview) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center text-muted-foreground">
        <p>Match preview not found.</p>
        <Link href="/matches">
          <a className="text-primary text-sm mt-2 inline-block">← Back to Matches</a>
        </Link>
      </div>
    );
  }

  const match = preview.match;
  const homeColor = match ? TEAM_COLORS[match.homeTeam] || "#666" : "#666";
  const awayColor = match ? TEAM_COLORS[match.awayTeam] || "#666" : "#666";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Back nav + matchup link */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/matches">
          <a className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> All Matches
          </a>
        </Link>
        <Link href={`/matches/${matchId}/matchups`}>
          <a
            data-testid="link-matchups"
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View Matchups <ChevronRight size={14} />
          </a>
        </Link>
      </div>

      {/* Hero header */}
      {match && (
        <div
          className="relative rounded-xl overflow-hidden mb-6"
          style={{
            background: `linear-gradient(135deg, ${homeColor}22 0%, transparent 40%, ${awayColor}22 100%)`,
          }}
        >
          <div className="border border-card-border rounded-xl p-5 sm:p-8">
            <div className="flex items-center gap-1.5 mb-2">
              <Badge variant="secondary" className="text-[10px] font-semibold">
                Match {match.matchNumber}
              </Badge>
              <Badge variant="outline" className="text-[10px]">
                {match.status}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black"
                  style={{ backgroundColor: homeColor }}
                >
                  {match.homeTeam}
                </div>
                <div className="text-left sm:text-right">
                  <div className="font-bold text-base text-foreground">{TEAM_NAMES[match.homeTeam] || match.homeTeam}</div>
                  <div className="text-xs text-muted-foreground">Home</div>
                </div>
              </div>

              <span className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest">vs</span>

              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="font-bold text-base text-foreground">{TEAM_NAMES[match.awayTeam] || match.awayTeam}</div>
                  <div className="text-xs text-muted-foreground">Away</div>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black"
                  style={{ backgroundColor: awayColor }}
                >
                  {match.awayTeam}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mt-2">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {formatDate(match.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {match.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {match.venue}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Match Narrative */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Eye size={16} className="text-primary" />
          Match Narrative
        </h2>
        <div className="border-l-4 border-primary/30 pl-4 py-2">
          <h3 className="font-semibold text-sm text-foreground mb-2">{preview.headline}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{preview.narrative}</p>
        </div>
      </section>

      {/* Key Battles */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Swords size={16} className="text-primary" />
          Key Battles
        </h2>
        <div className="flex flex-wrap gap-2">
          {preview.keyBattles.map((battle, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-accent border border-border text-xs text-foreground font-medium"
            >
              ⚔️ {battle}
            </span>
          ))}
        </div>
      </section>

      {/* Venue Insight */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          Venue Insight
        </h2>
        <div className="bg-card border border-card-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{preview.venueInsight}</p>
        </div>
      </section>

      {/* Players to Watch */}
      <section className="mb-8">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Flame size={16} className="text-primary" />
          Players to Watch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.playersToWatch.map((p) => (
            <PlayerToWatchCard key={p.playerId} player={p} allPlayers={allPlayers} />
          ))}
        </div>
      </section>

      {/* Prediction */}
      <section className="mb-4">
        <h2 className="text-base font-bold font-display text-foreground mb-3 flex items-center gap-2">
          <Trophy size={16} className="text-primary" />
          Prediction
        </h2>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <blockquote className="text-sm text-foreground italic leading-relaxed">
            "{preview.prediction}"
          </blockquote>
        </div>
      </section>
    </div>
  );
}
