import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Legend, ResponsiveContainer, Tooltip,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { GitCompare } from "lucide-react";

interface PlayerSummary {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: string;
  dnaScore: number;
  dnaScoreTrend: string;
  keyInsight: string;
  stats: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    wickets?: number;
  };
}

interface Player extends PlayerSummary {
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
  radarData: { axis: string; current: number; peak: number }[];
  driftEvents: {
    id: string;
    type: "GROWTH" | "DECLINE" | "VOLATILITY" | "RECOVERY";
    dimension: string;
    magnitude: string;
    narrative: string;
    fantasySignal: string;
    period: string;
  }[];
}

function DnaRingSmall({ score, color }: { score: number; color: string }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const scoreColor = score >= 75 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
        <circle
          cx="36" cy="36" r={radius}
          fill="none"
          stroke={scoreColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 36 36)"
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-base font-bold tabular-nums leading-none" style={{ color: scoreColor }}>{score}</div>
        <div className="text-[9px] text-muted-foreground">DNA</div>
      </div>
    </div>
  );
}

function PlayerSelectCard({ player }: { player: Player }) {
  return (
    <div className="flex flex-col items-center gap-2 py-3">
      <DnaRingSmall score={player.dnaScore} color={player.teamColor} />
      <div className="text-center">
        <div className="font-semibold text-sm text-foreground">{player.name} {player.countryFlag}</div>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span
            className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
            style={{ backgroundColor: player.teamColor }}
          >{player.teamShort}</span>
          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">{player.role}</Badge>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 max-w-[160px]">{player.keyInsight}</p>
      </div>
    </div>
  );
}

export default function ComparePage() {
  const [player1Id, setPlayer1Id] = useState<string>("");
  const [player2Id, setPlayer2Id] = useState<string>("");

  const { data: allPlayers, isLoading: loadingList } = useQuery<PlayerSummary[]>({
    queryKey: ["/api/players"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/players");
      return res.json();
    },
  });

  const compareEnabled = !!player1Id && !!player2Id && player1Id !== player2Id;

  const { data: comparePlayers, isLoading: loadingCompare } = useQuery<Player[]>({
    queryKey: ["/api/compare", player1Id, player2Id],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/compare?ids=${player1Id},${player2Id}`);
      return res.json();
    },
    enabled: compareEnabled,
  });

  const p1 = comparePlayers?.[0];
  const p2 = comparePlayers?.[1];

  // Merge radar data for both players
  const mergedRadar = p1 && p2
    ? p1.radarData.map((r, i) => ({
        axis: r.axis,
        [p1.name]: r.current,
        [p2.name]: p2.radarData[i]?.current ?? 0,
      }))
    : [];

  // Stats to compare
  const compareStats = (p1 && p2)
    ? [
        { label: "Matches", v1: p1.stats.matches, v2: p2.stats.matches, higherIsBetter: true },
        { label: "Runs", v1: p1.stats.runs, v2: p2.stats.runs, higherIsBetter: true },
        { label: "Average", v1: p1.stats.average, v2: p2.stats.average, higherIsBetter: true },
        { label: "Strike Rate", v1: p1.stats.strikeRate, v2: p2.stats.strikeRate, higherIsBetter: true },
        { label: "Highest", v1: p1.stats.highest, v2: p2.stats.highest, higherIsBetter: true },
        { label: "50s", v1: p1.stats.fifties, v2: p2.stats.fifties, higherIsBetter: true },
        { label: "100s", v1: p1.stats.hundreds, v2: p2.stats.hundreds, higherIsBetter: true },
        ...(p1.stats.wickets != null || p2.stats.wickets != null
          ? [{ label: "Wickets", v1: p1.stats.wickets ?? 0, v2: p2.stats.wickets ?? 0, higherIsBetter: true }]
          : []),
      ]
    : [];

  const COLORS = ["hsl(var(--primary))", "#f59e0b"];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <GitCompare size={18} className="text-primary" />
        <span className="text-xs font-semibold text-primary uppercase tracking-widest">Compare</span>
      </div>
      <h1 className="text-xl font-bold font-display text-foreground mb-4">Head-to-Head Analysis</h1>

      {/* Selector row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-xs text-muted-foreground font-medium mb-1.5">Player 1</div>
          <Select value={player1Id} onValueChange={setPlayer1Id}>
            <SelectTrigger data-testid="select-player1" className="h-9 text-sm">
              <SelectValue placeholder="Select player..." />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              {allPlayers?.map((p) => (
                <SelectItem
                  key={p.id}
                  value={String(p.id)}
                  disabled={String(p.id) === player2Id}
                  data-testid={`player1-option-${p.id}`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-5 text-center text-[10px] font-bold text-white rounded px-0.5"
                      style={{ backgroundColor: p.teamColor }}
                    >{p.teamShort}</span>
                    {p.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="text-xs text-muted-foreground font-medium mb-1.5">Player 2</div>
          <Select value={player2Id} onValueChange={setPlayer2Id}>
            <SelectTrigger data-testid="select-player2" className="h-9 text-sm">
              <SelectValue placeholder="Select player..." />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              {allPlayers?.map((p) => (
                <SelectItem
                  key={p.id}
                  value={String(p.id)}
                  disabled={String(p.id) === player1Id}
                  data-testid={`player2-option-${p.id}`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block w-5 text-center text-[10px] font-bold text-white rounded px-0.5"
                      style={{ backgroundColor: p.teamColor }}
                    >{p.teamShort}</span>
                    {p.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Empty state */}
      {!compareEnabled && (
        <div className="text-center py-16 text-muted-foreground">
          <GitCompare size={36} className="mx-auto mb-3 opacity-20" />
          <p className="text-sm">Select two different players to compare</p>
        </div>
      )}

      {/* Loading */}
      {compareEnabled && loadingCompare && (
        <div className="space-y-4">
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
      )}

      {/* Compare content */}
      {p1 && p2 && (
        <div className="space-y-5">
          {/* DNA Score cards side by side */}
          <div className="grid grid-cols-2 gap-4">
            {[p1, p2].map((p, i) => (
              <div key={p.id} className="bg-card border border-card-border rounded-xl" data-testid={`compare-card-${p.id}`}>
                <PlayerSelectCard player={p} />
              </div>
            ))}
          </div>

          {/* Overlay radar */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3">Skill Comparison</h2>
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={mergedRadar}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="axis"
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name={p1.name}
                  dataKey={p1.name}
                  stroke={COLORS[0]}
                  fill={COLORS[0]}
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Radar
                  name={p2.name}
                  dataKey={p2.name}
                  stroke={COLORS[1]}
                  fill={COLORS[1]}
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Legend
                  formatter={(value) => (
                    <span style={{ fontSize: 11, color: "hsl(var(--muted-foreground))" }}>{value}</span>
                  )}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 12 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats table */}
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border bg-muted/30 text-xs font-medium text-muted-foreground">
              <div className="px-3 py-2 truncate" style={{ color: p1.teamColor }}>{p1.name}</div>
              <div className="px-3 py-2 text-center">Stat</div>
              <div className="px-3 py-2 text-right truncate" style={{ color: p2.teamColor }}>{p2.name}</div>
            </div>
            {compareStats.map((row, i) => {
              const v1Better = row.higherIsBetter ? row.v1 > row.v2 : row.v1 < row.v2;
              const v2Better = row.higherIsBetter ? row.v2 > row.v1 : row.v2 < row.v1;
              return (
                <div
                  key={row.label}
                  className={cn("grid grid-cols-3 border-b border-border last:border-0 text-xs", i % 2 === 0 ? "" : "bg-muted/10")}
                >
                  <div className={cn("px-3 py-2.5 tabular-nums font-semibold", v1Better ? "text-green-500 dark:text-green-400" : "text-foreground")}>
                    {typeof row.v1 === "number" ? row.v1.toLocaleString() : row.v1}
                  </div>
                  <div className="px-3 py-2.5 text-center text-muted-foreground">{row.label}</div>
                  <div className={cn("px-3 py-2.5 text-right tabular-nums font-semibold", v2Better ? "text-green-500 dark:text-green-400" : "text-foreground")}>
                    {typeof row.v2 === "number" ? row.v2.toLocaleString() : row.v2}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drifts side-by-side */}
          <div>
            <h2 className="text-sm font-semibold text-foreground mb-3">Active Drift Alerts</h2>
            <div className="grid grid-cols-2 gap-4">
              {[p1, p2].map((p, i) => (
                <div key={p.id}>
                  <div className="text-xs font-medium mb-2" style={{ color: p.teamColor }}>{p.name}</div>
                  {p.driftEvents.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No active drifts</p>
                  ) : (
                    <div className="space-y-2">
                      {p.driftEvents.map((d) => {
                        const typeColors: Record<string, string> = {
                          GROWTH: "border-l-green-500",
                          DECLINE: "border-l-red-500",
                          VOLATILITY: "border-l-amber-500",
                          RECOVERY: "border-l-blue-500",
                        };
                        return (
                          <div
                            key={d.id}
                            className={cn("bg-muted/30 border border-border rounded-lg border-l-4 p-2.5", typeColors[d.type])}
                          >
                            <div className="text-[10px] font-bold text-muted-foreground mb-0.5">{d.type}</div>
                            <div className="text-xs font-medium text-foreground leading-snug">{d.dimension}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{d.narrative}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
