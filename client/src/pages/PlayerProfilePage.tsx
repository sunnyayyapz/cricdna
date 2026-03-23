import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  ArrowLeft, TrendingUp, TrendingDown, Minus, ArrowUpRight,
  ChevronDown, ChevronUp, Target, Flame, Shield, MapPin,
  BarChart3, Crosshair, Brain, Zap, AlertTriangle, Swords,
  Compass, Clock, Trophy, Activity, AlertCircle, Lightbulb,
  Radar as RadarIcon, Users
} from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ComposedChart, Line,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormatSplit {
  format: string;
  matches: number;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  highest: number;
  wickets?: number;
  bowlingAvg?: number;
  economy?: number;
}

interface BowlingAttackSplit {
  type: string;
  innings: number;
  runs: number;
  balls: number;
  strikeRate: number;
  average: number;
  dismissals: number;
  dotBallPct: number;
}

interface VenueStat {
  venue: string;
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  wickets?: number;
  economy?: number;
}

interface BowlerPhaseData {
  phase: string;
  overs: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  average: number;
}

interface DeepInsight {
  playerId: number;
  formatSplits: FormatSplit[];
  bowlingAttackSplits: BowlingAttackSplit[];
  venueStats: VenueStat[];
  strengthsNarrative: string;
  weaknessesNarrative: string;
  analystNote: string;
  bowlerPhaseData: BowlerPhaseData[];
}

interface Player {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  age: number;
  dnaScore: number;
  dnaScoreTrend: "improving" | "declining" | "stable" | "recovery";
  isRichProfile: boolean;
  isProbableXI?: boolean;
  isUncapped?: boolean;
  price?: string;
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
  careerTimeline: { period: string; dnaScore: number; innings: number }[];
  driftEvents: {
    id: string;
    type: "GROWTH" | "DECLINE" | "VOLATILITY" | "RECOVERY";
    dimension: string;
    magnitude: string;
    period: string;
    oppositionContext: string;
    conditionsContext: string;
    narrative: string;
    fantasySignal: string;
    severity: "high" | "medium" | "low";
    detectedAt: string;
  }[];
  recentInnings: { match: string; opponent: string; score: number; balls: number; date: string }[];
  phaseData: { phase: string; runs: number; strikeRate: number; average: number }[];
  dismissalPatterns: Record<string, number>;
  keyInsight: string;
  deepInsights: DeepInsight | null;
  proIntelligence: ProIntelligence | null;
}

// ─── Pro Intelligence Types ──────────────────────────────────────────────────

interface ScoringZone {
  zone: string;
  runsScored: number;
  ballsFaced: number;
  boundaries: number;
  sixes: number;
  dotBalls: number;
  strikeRate: number;
  shotTypes: string;
}

interface BowlingZone {
  zone: string;
  ballsBowled: number;
  runsConceded: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  description: string;
}

interface SituationalSplit {
  situation: string;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  narrative: string;
}

interface BowlingSituationalSplit {
  situation: string;
  overs: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  narrative: string;
}

interface ThreatMatchup {
  opponentId: number;
  opponentName: string;
  opponentTeam: string;
  threatLevel: "extreme" | "high" | "moderate" | "low";
  record: string;
  tacticalNote: string;
  suggestedPlan: string;
}

interface TacticalRecommendation {
  category: string;
  priority: "critical" | "high" | "medium";
  title: string;
  analysis: string;
  actionPlan: string;
}

interface ClutchStats {
  superOverRecord: string;
  lastOverFinishes: number;
  totalLastOverAttempts: number;
  dotBallPctUnderPressure: number;
  boundaryPctUnderPressure: number;
  avgWhenChasing180Plus: number;
  srWhenChasing180Plus: number;
  performanceInEliminators: string;
}

interface ProIntelligence {
  playerId: number;
  scoringZones: ScoringZone[];
  bowlingZones: BowlingZone[];
  battingSituational: SituationalSplit[];
  bowlingSituational: BowlingSituationalSplit[];
  threatMatchups: ThreatMatchup[];
  tacticalRecommendations: TacticalRecommendation[];
  clutchStats: ClutchStats;
  coachBriefing: string;
}

// ─── Shared Components ───────────────────────────────────────────────────────

function DnaScoreRing({ score }: { score: number }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const scoreColor = score >= 75 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="8" className="text-muted/30" />
        <circle
          cx="50" cy="50" r={radius} fill="none" stroke={scoreColor} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold tabular-nums leading-none" style={{ color: scoreColor }} data-testid="dna-score-value">
          {score}
        </span>
        <span className="text-[10px] text-muted-foreground font-medium mt-0.5">DNA</span>
      </div>
    </div>
  );
}

function TrendBadge({ trend }: { trend: string }) {
  const config: Record<string, { label: string; className: string; icon: React.ReactNode }> = {
    improving: { label: "Improving", className: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/20", icon: <TrendingUp size={11} /> },
    declining: { label: "Declining", className: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/20", icon: <TrendingDown size={11} /> },
    stable: { label: "Stable", className: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20", icon: <Minus size={11} /> },
    recovery: { label: "Recovery", className: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20", icon: <ArrowUpRight size={11} /> },
  };
  const c = config[trend] || config.stable;
  return (
    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border", c.className)}>
      {c.icon}{c.label}
    </span>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
        <Icon size={13} className="text-primary" />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-foreground leading-tight">{title}</h2>
        {subtitle && <p className="text-[10px] text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-card border border-card-border rounded-lg px-3 py-2.5 text-center">
      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
      <div className="text-base font-bold tabular-nums text-foreground mt-0.5">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground">{sub}</div>}
    </div>
  );
}

function DriftCard({ drift, expanded: externalExpanded }: { drift: Player["driftEvents"][number]; expanded?: boolean }) {
  const [expanded, setExpanded] = useState(externalExpanded ?? false);
  const typeConfig = {
    GROWTH: { accent: "border-l-green-500", badgeClass: "bg-green-500/10 text-green-600 dark:text-green-400" },
    DECLINE: { accent: "border-l-red-500", badgeClass: "bg-red-500/10 text-red-600 dark:text-red-400" },
    VOLATILITY: { accent: "border-l-amber-500", badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
    RECOVERY: { accent: "border-l-blue-500", badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  };
  const tc = typeConfig[drift.type];

  return (
    <div className={cn("bg-card border border-card-border rounded-lg border-l-4 overflow-hidden", tc.accent)}>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold mr-1.5", tc.badgeClass)}>
              {drift.type}
            </span>
            <span className="text-xs font-semibold text-foreground">{drift.dimension}</span>
          </div>
          <Badge variant="outline" className="text-[10px] flex-shrink-0">{drift.magnitude}</Badge>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{drift.narrative}</p>

        {/* Opposition & Conditions Context */}
        {(drift.oppositionContext || drift.conditionsContext) && (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {drift.oppositionContext && (
              <div className="flex items-start gap-1.5 text-[11px]">
                <Crosshair size={11} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground"><span className="font-medium text-foreground">Opposition:</span> {drift.oppositionContext}</span>
              </div>
            )}
            {drift.conditionsContext && (
              <div className="flex items-start gap-1.5 text-[11px]">
                <MapPin size={11} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground"><span className="font-medium text-foreground">Conditions:</span> {drift.conditionsContext}</span>
              </div>
            )}
          </div>
        )}

        <button
          data-testid={`drift-expand-${drift.id}`}
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[11px] text-primary mt-2 hover:underline"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Show less" : "Fantasy signal & context"}
        </button>
      </div>
      {expanded && (
        <div className="px-3 pb-3 pt-0 space-y-2">
          <div className="text-xs text-muted-foreground border-t border-border pt-2">
            <span className="font-medium text-foreground">Fantasy Signal: </span>
            {drift.fantasySignal}
          </div>
          <div className="flex flex-wrap gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground">{drift.period}</span>
            <span className={cn("px-2 py-0.5 rounded-full", drift.severity === "high" ? "bg-red-500/10 text-red-500" : drift.severity === "medium" ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500")}>
              {drift.severity} severity
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Narrative Card Component ────────────────────────────────────────────────

function NarrativeCard({ icon: Icon, title, content, accentClass }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
  accentClass: string;
}) {
  return (
    <div className={cn("bg-card border border-card-border rounded-xl p-4 border-l-4", accentClass)}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} className="text-foreground" />
        <h3 className="text-xs font-bold text-foreground uppercase tracking-wide">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

// ─── Format Splits Table ─────────────────────────────────────────────────────

function FormatSplitsTable({ splits, isBatter }: { splits: FormatSplit[]; isBatter: boolean }) {
  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <SectionHeader icon={BarChart3} title="Format Breakdown" subtitle="T20I vs IPL vs Other T20 career splits" />
      <div className="overflow-x-auto px-4 pb-4">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 text-left text-muted-foreground font-medium">Format</th>
              <th className="py-2 text-right text-muted-foreground font-medium">Mat</th>
              <th className="py-2 text-right text-muted-foreground font-medium">Inn</th>
              {isBatter ? (
                <>
                  <th className="py-2 text-right text-muted-foreground font-medium">Runs</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">Avg</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">SR</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">HS</th>
                </>
              ) : (
                <>
                  <th className="py-2 text-right text-muted-foreground font-medium">Wkt</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">Avg</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">Econ</th>
                  <th className="py-2 text-right text-muted-foreground font-medium">SR</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {splits.map((s, i) => (
              <tr key={s.format} className={cn("border-b border-border last:border-0", i % 2 === 1 ? "bg-muted/10" : "")}>
                <td className="py-2 font-medium text-foreground">{s.format}</td>
                <td className="py-2 text-right tabular-nums text-muted-foreground">{s.matches}</td>
                <td className="py-2 text-right tabular-nums text-muted-foreground">{s.innings}</td>
                {isBatter ? (
                  <>
                    <td className="py-2 text-right tabular-nums font-semibold text-foreground">{s.runs.toLocaleString()}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.average.toFixed(1)}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.strikeRate.toFixed(1)}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.highest}</td>
                  </>
                ) : (
                  <>
                    <td className="py-2 text-right tabular-nums font-semibold text-foreground">{s.wickets ?? 0}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.bowlingAvg?.toFixed(1) ?? "—"}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.economy?.toFixed(2) ?? "—"}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{s.strikeRate.toFixed(1)}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── vs Pace/Spin Split Card ─────────────────────────────────────────────────

function AttackSplitCard({ splits }: { splits: BowlingAttackSplit[] }) {
  if (!splits || splits.length === 0) return null;
  const maxSR = Math.max(...splits.map(s => s.strikeRate));

  return (
    <div className="bg-card border border-card-border rounded-xl p-4">
      <SectionHeader icon={Target} title="vs Pace & Spin" subtitle="Batting performance breakdown by bowling type" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {splits.map((s) => {
          const srPct = (s.strikeRate / Math.max(maxSR, 1)) * 100;
          const isPace = s.type.includes("Pace");
          return (
            <div key={s.type} className="border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={cn("w-2 h-2 rounded-full", isPace ? "bg-blue-500" : "bg-amber-500")} />
                <span className="text-xs font-bold text-foreground">{s.type}</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                <div className="flex justify-between"><span className="text-muted-foreground">SR</span><span className="font-semibold tabular-nums text-foreground">{s.strikeRate.toFixed(1)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Avg</span><span className="font-semibold tabular-nums text-foreground">{s.average.toFixed(1)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Runs</span><span className="tabular-nums text-foreground">{s.runs}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Balls</span><span className="tabular-nums text-foreground">{s.balls}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Dismissals</span><span className="tabular-nums text-foreground">{s.dismissals}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Dot %</span><span className="tabular-nums text-foreground">{s.dotBallPct}%</span></div>
              </div>
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className={cn("h-full rounded-full transition-all duration-700", isPace ? "bg-blue-500" : "bg-amber-500")} style={{ width: `${srPct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Venue Stats ─────────────────────────────────────────────────────────────

function VenueStatsCard({ venues, isBowler }: { venues: VenueStat[]; isBowler: boolean }) {
  if (!venues || venues.length === 0) return null;

  return (
    <div className="bg-card border border-card-border rounded-xl p-4">
      <SectionHeader icon={MapPin} title="Venue Performance" subtitle="Top IPL grounds by career appearances" />
      <div className="space-y-2.5">
        {venues.map((v) => {
          const maxVal = isBowler
            ? Math.max(...venues.map(x => x.wickets ?? 0))
            : Math.max(...venues.map(x => x.runs));
          const pct = isBowler
            ? ((v.wickets ?? 0) / Math.max(maxVal, 1)) * 100
            : (v.runs / Math.max(maxVal, 1)) * 100;

          return (
            <div key={v.venue}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-foreground truncate max-w-[200px]">{v.venue}</span>
                <div className="flex gap-3 text-[10px] text-muted-foreground tabular-nums flex-shrink-0">
                  <span>{v.matches} mat</span>
                  {isBowler ? (
                    <>
                      <span>{v.wickets ?? 0} wkt</span>
                      <span>Eco {v.economy?.toFixed(1) ?? "—"}</span>
                    </>
                  ) : (
                    <>
                      <span>{v.runs} runs</span>
                      <span>Avg {v.average.toFixed(1)}</span>
                      <span>SR {v.strikeRate.toFixed(1)}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-primary/70 transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Bowler Phase Performance ────────────────────────────────────────────────

function BowlerPhaseCard({ phases }: { phases: BowlerPhaseData[] }) {
  if (!phases || phases.length === 0) return null;

  const PHASE_COLORS: Record<string, string> = {
    "Powerplay": "#3b82f6",
    "Middle": "#22c55e",
    "Death": "#ef4444",
  };

  return (
    <div className="bg-card border border-card-border rounded-xl p-4">
      <SectionHeader icon={Target} title="Bowling Phase Analysis" subtitle="Performance split by match phase" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {phases.map((p) => {
          const color = PHASE_COLORS[p.phase] || "#a855f7";
          return (
            <div key={p.phase} className="border border-border rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-foreground mb-2" style={{ color }}>
                {p.phase}
              </div>
              <div className="text-lg font-bold tabular-nums text-foreground">{p.wickets}</div>
              <div className="text-[10px] text-muted-foreground mb-2">wickets</div>
              <div className="grid grid-cols-2 gap-1 text-[10px]">
                <div className="bg-muted/30 rounded px-1.5 py-1">
                  <div className="text-muted-foreground">Economy</div>
                  <div className="font-semibold tabular-nums text-foreground">{p.economy.toFixed(2)}</div>
                </div>
                <div className="bg-muted/30 rounded px-1.5 py-1">
                  <div className="text-muted-foreground">Dot %</div>
                  <div className="font-semibold tabular-nums text-foreground">{p.dotBallPct}%</div>
                </div>
                <div className="bg-muted/30 rounded px-1.5 py-1">
                  <div className="text-muted-foreground">Overs</div>
                  <div className="font-semibold tabular-nums text-foreground">{p.overs}</div>
                </div>
                <div className="bg-muted/30 rounded px-1.5 py-1">
                  <div className="text-muted-foreground">Average</div>
                  <div className="font-semibold tabular-nums text-foreground">{p.average.toFixed(1)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Recent Innings Enhanced ─────────────────────────────────────────────────

function TacticalRecCard({ rec, priorityColor, priorityBadge }: { rec: TacticalRecommendation; priorityColor: string; priorityBadge: string }) {
  const [expanded, setExpanded] = useState(false);
  const categoryIcons: Record<string, React.ReactNode> = {
    Batting: <Target size={12} className="text-primary" />,
    Bowling: <Crosshair size={12} className="text-primary" />,
    Fielding: <Shield size={12} className="text-primary" />,
    Mental: <Brain size={12} className="text-primary" />,
    Fitness: <Activity size={12} className="text-primary" />,
  };
  return (
    <div className={cn("border border-card-border rounded-lg border-l-4 p-3", priorityColor)} data-testid={`tactical-rec-${rec.category.toLowerCase()}`}>
      <div className="flex items-center justify-between mb-1.5 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center gap-2">
          {categoryIcons[rec.category] || <Compass size={12} className="text-primary" />}
          <span className="text-xs font-bold text-foreground">{rec.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase", priorityBadge)}>
            {rec.priority}
          </span>
          {expanded ? <ChevronUp size={12} className="text-muted-foreground" /> : <ChevronDown size={12} className="text-muted-foreground" />}
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 bg-muted/40 rounded">{rec.category}</span>
      </div>
      {expanded && (
        <div className="space-y-2 mt-2">
          <div className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Analysis: </span>{rec.analysis}
          </div>
          <div className="flex items-start gap-1.5 text-[11px] bg-primary/5 rounded-md p-2">
            <Lightbulb size={12} className="text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground"><span className="font-semibold">Action Plan:</span> {rec.actionPlan}</span>
          </div>
        </div>
      )}
      {!expanded && (
        <p className="text-[10px] text-muted-foreground line-clamp-2">{rec.analysis}</p>
      )}
    </div>
  );
}

function RecentInningsChart({ innings }: { innings: Player["recentInnings"] }) {
  if (!innings || innings.length === 0) return null;

  const chartData = innings.map((inn) => ({
    match: inn.match.replace("IPL ", "").replace("T20I ", ""),
    score: inn.score,
    sr: inn.balls > 0 ? parseFloat(((inn.score / inn.balls) * 100).toFixed(1)) : 0,
    balls: inn.balls,
    opponent: inn.opponent,
  }));

  const barColor = (score: number) => {
    if (score >= 50) return "#22c55e";
    if (score >= 25) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="bg-card border border-card-border rounded-xl p-4">
      <SectionHeader icon={Flame} title="Recent Innings" subtitle="Scores with strike rate overlay" />
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={chartData} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="match" tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} />
          <YAxis yAxisId="score" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} width={30} />
          <YAxis yAxisId="sr" orientation="right" domain={[0, 250]} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} width={35} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 11 }}
            labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            formatter={(value: number, name: string) => {
              if (name === "score") return [`${value}`, "Score"];
              if (name === "sr") return [`${value}`, "SR"];
              return [value, name];
            }}
            labelFormatter={(label: string, payload: Array<{ payload?: { opponent?: string; balls?: number } }>) => {
              const item = payload?.[0]?.payload;
              return item ? `${label} (${item.balls}b vs ${item.opponent})` : label;
            }}
          />
          <Bar yAxisId="score" dataKey="score" radius={[4, 4, 0, 0]} name="score">
            {chartData.map((entry, index) => (
              <Cell key={index} fill={barColor(entry.score)} />
            ))}
          </Bar>
          <Line yAxisId="sr" type="monotone" dataKey="sr" stroke="#a855f7" strokeWidth={2} dot={{ fill: "#a855f7", r: 3 }} name="sr" />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-sm bg-green-500" /> 50+</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-sm bg-amber-500" /> 25-49</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-2 rounded-sm bg-red-500" /> &lt;25</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-1 rounded-sm bg-purple-500" /> Strike Rate</div>
      </div>
    </div>
  );
}

// ─── Squad Player Profile (non-rich) ─────────────────────────────────────────

function SquadPlayerProfile({ player, navigate, isBatter, isBowler, isAllRounder }: {
  player: Player;
  navigate: (to: string) => void;
  isBatter: boolean;
  isBowler: boolean;
  isAllRounder: boolean;
}) {
  const scoreColor = player.dnaScore >= 75 ? "#22c55e" : player.dnaScore >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Back */}
      <button
        data-testid="back-button"
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to Explore
      </button>

      {/* Player Header */}
      <div className="bg-card border border-card-border rounded-xl p-4 sm:p-5 mb-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <DnaScoreRing score={player.dnaScore} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl font-bold font-display text-foreground" data-testid="player-name">{player.name}</h1>
              <span className="text-lg">{player.countryFlag}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: player.teamColor }} data-testid="player-team-badge">
                {player.teamShort}
              </span>
              <Badge variant="secondary" className="text-xs">{player.role}</Badge>
              <TrendBadge trend={player.dnaScoreTrend} />
              {player.isUncapped && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20">Uncapped</span>
              )}
              {player.isProbableXI && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/20">Probable XI</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground mb-2">
              <span>{player.battingStyle}</span>
              <span className="text-border">|</span>
              <span>{player.bowlingStyle}</span>
              <span className="text-border">|</span>
              <span>Age {player.age}</span>
              {player.price && (
                <>
                  <span className="text-border">|</span>
                  <span className="font-semibold text-foreground">{player.price}</span>
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{player.keyInsight}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4 pt-4 border-t border-border">
          <StatCard label="Matches" value={player.stats.matches} />
          <StatCard label="Innings" value={player.stats.innings} />
          {(isBatter || isAllRounder) && <StatCard label="Runs" value={player.stats.runs.toLocaleString()} />}
          {(isBatter || isAllRounder) && <StatCard label="Average" value={player.stats.average.toFixed(1)} />}
          {(isBatter || isAllRounder) && <StatCard label="Strike Rate" value={player.stats.strikeRate.toFixed(1)} />}
          {(isBatter || isAllRounder) && <StatCard label="Highest" value={player.stats.highest} />}
          {(isBatter || isAllRounder) && <StatCard label="50s/100s" value={`${player.stats.fifties}/${player.stats.hundreds}`} />}
          {(isBowler || isAllRounder) && player.stats.wickets != null && <StatCard label="Wickets" value={player.stats.wickets} />}
          {(isBowler || isAllRounder) && player.stats.bowlingAvg != null && <StatCard label="Bowl Avg" value={player.stats.bowlingAvg.toFixed(1)} />}
          {(isBowler || isAllRounder) && player.stats.economy != null && <StatCard label="Economy" value={player.stats.economy.toFixed(2)} />}
          {(isBowler || isAllRounder) && player.stats.bestBowling && <StatCard label="Best" value={player.stats.bestBowling} />}
        </div>
      </div>

      {/* Team Context Card */}
      <div className="bg-card border border-card-border rounded-xl p-4 sm:p-5 mb-5">
        <SectionHeader icon={Users} title="Team Context" subtitle={`${player.team} — IPL 2026`} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Squad Role</div>
            <div className="text-sm font-semibold text-foreground">{player.isProbableXI ? "Probable XI" : "Squad"}</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Auction Price</div>
            <div className="text-sm font-semibold text-foreground">{player.price || "N/A"}</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Status</div>
            <div className="text-sm font-semibold text-foreground">{player.isUncapped ? "Uncapped" : "Capped"}</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Country</div>
            <div className="text-sm font-semibold text-foreground">{player.countryFlag} {player.country}</div>
          </div>
        </div>
      </div>

      {/* DNA Score Breakdown */}
      <div className="bg-card border border-card-border rounded-xl p-4 sm:p-5 mb-5">
        <SectionHeader icon={Activity} title="DNA Score Analysis" />
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6" className="text-muted/30" />
              <circle
                cx="40" cy="40" r="34" fill="none" stroke={scoreColor} strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 34}
                strokeDashoffset={2 * Math.PI * 34 - (player.dnaScore / 100) * 2 * Math.PI * 34}
                transform="rotate(-90 40 40)"
                style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold tabular-nums" style={{ color: scoreColor }}>{player.dnaScore}</span>
              <span className="text-[8px] text-muted-foreground">DNA</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground mb-1">
              {player.dnaScore >= 80 ? "Elite Performer" :
               player.dnaScore >= 65 ? "Strong Contributor" :
               player.dnaScore >= 50 ? "Developing Talent" :
               player.dnaScore >= 35 ? "Emerging Prospect" : "Raw Talent"}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {player.dnaScore >= 80 ? `${player.name} ranks among the top-tier performers in T20 cricket with a DNA score of ${player.dnaScore}. Consistently impactful across formats and conditions.` :
               player.dnaScore >= 65 ? `With a DNA score of ${player.dnaScore}, ${player.name} is a reliable contributor who delivers consistent performances and adds significant value to the squad.` :
               player.dnaScore >= 50 ? `${player.name}'s DNA score of ${player.dnaScore} reflects a developing talent with clear upside. Key performances are beginning to emerge at this level.` :
               player.dnaScore >= 35 ? `At ${player.dnaScore}, ${player.name} is an emerging prospect. The raw tools are evident — consistent opportunities at the IPL level will be crucial for development.` :
               `${player.name} carries a DNA score of ${player.dnaScore}, reflecting limited exposure at the highest level. This is often the profile of uncapped players entering their first IPL season — high upside but unproven.`}
            </p>
          </div>
        </div>

        {/* Performance Snapshot */}
        <div className="border-t border-border pt-3 mt-1">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium">Performance Snapshot</div>
          <div className="space-y-2">
            {(isBatter || isAllRounder) && player.stats.runs > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Batting Impact</span>
                  <span className="font-semibold tabular-nums text-foreground">{player.stats.runs} runs @ {player.stats.strikeRate.toFixed(1)} SR</span>
                </div>
                <div className="h-1.5 bg-muted/40 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${Math.min(100, player.stats.strikeRate / 2)}%`, backgroundColor: player.stats.strikeRate >= 140 ? "#22c55e" : player.stats.strikeRate >= 120 ? "#f59e0b" : "#ef4444" }} />
                </div>
              </div>
            )}
            {(isBowler || isAllRounder) && player.stats.wickets != null && player.stats.wickets > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Bowling Impact</span>
                  <span className="font-semibold tabular-nums text-foreground">{player.stats.wickets} wkts @ {player.stats.economy?.toFixed(2) || "N/A"} econ</span>
                </div>
                <div className="h-1.5 bg-muted/40 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${Math.min(100, player.stats.economy ? (12 - player.stats.economy) * 12.5 : 50)}%`, backgroundColor: (player.stats.economy || 9) <= 7 ? "#22c55e" : (player.stats.economy || 9) <= 8.5 ? "#f59e0b" : "#ef4444" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-muted/30 border border-dashed border-border rounded-xl p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Lightbulb size={14} className="text-amber-500" />
          <span className="text-xs font-semibold text-foreground">Full DNA Profile Coming Soon</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Detailed analytics including radar charts, drift detection, phase analysis, tactical playbooks, and situational intelligence are currently available for the top 30 featured players.
          {" " + player.name}'s full DNA profile will be unlocked as the IPL 2026 season progresses.
        </p>
      </div>
    </div>
  );
}


// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PlayerProfilePage() {
  const [, params] = useRoute("/player/:id");
  const [, navigate] = useLocation();
  const id = params?.id;

  const { data: player, isLoading } = useQuery<Player>({
    queryKey: ["/api/players", id],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/players/${id}`);
      return res.json();
    },
    enabled: !!id,
  });

  const [driftTypeFilter, setDriftTypeFilter] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-28 w-full rounded-xl" />
        <Skeleton className="h-80 w-full rounded-xl" />
      </div>
    );
  }

  if (!player) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-muted-foreground">
        Player not found.
      </div>
    );
  }

  const isBatter = player.role === "Batter" || player.role === "Wicketkeeper-Batter";
  const isBowler = player.role === "Bowler";
  const isAllRounder = player.role === "All-rounder";

  // Squad-only player profile (non-rich)
  if (!player.isRichProfile) {
    return <SquadPlayerProfile player={player} navigate={navigate} isBatter={isBatter} isBowler={isBowler} isAllRounder={isAllRounder} />;
  }

  const filteredDrifts = driftTypeFilter
    ? player.driftEvents.filter((d) => d.type === driftTypeFilter)
    : player.driftEvents;

  const dismissalData = Object.entries(player.dismissalPatterns).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const CHART_COLORS = ["#22c55e", "#f59e0b", "#3b82f6", "#a855f7", "#ef4444", "#ec4899"];

  const hasBowlingPhase = player.deepInsights?.bowlerPhaseData && player.deepInsights.bowlerPhaseData.length > 0;
  const hasAttackSplits = player.deepInsights?.bowlingAttackSplits && player.deepInsights.bowlingAttackSplits.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Back */}
      <button
        data-testid="back-button"
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to Explore
      </button>

      {/* Player Header Card */}
      <div className="bg-card border border-card-border rounded-xl p-4 sm:p-5 mb-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <DnaScoreRing score={player.dnaScore} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl font-bold font-display text-foreground" data-testid="player-name">{player.name}</h1>
              <span className="text-lg">{player.countryFlag}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: player.teamColor }} data-testid="player-team-badge">
                {player.teamShort}
              </span>
              <Badge variant="secondary" className="text-xs">{player.role}</Badge>
              <TrendBadge trend={player.dnaScoreTrend} />
              <span className="text-[10px] text-muted-foreground">{player.battingStyle} | {player.bowlingStyle} | Age {player.age}</span>
            </div>
            <p className="text-xs text-muted-foreground">{player.keyInsight}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4 pt-4 border-t border-border">
          <StatCard label="Matches" value={player.stats.matches} />
          {(isBatter || isAllRounder) && <StatCard label="Runs" value={player.stats.runs.toLocaleString()} />}
          {(isBatter || isAllRounder) && <StatCard label="Average" value={player.stats.average.toFixed(1)} />}
          {(isBatter || isAllRounder) && <StatCard label="Strike Rate" value={player.stats.strikeRate.toFixed(1)} />}
          {(isBowler || isAllRounder) && player.stats.wickets != null && <StatCard label="Wickets" value={player.stats.wickets} />}
          {(isBowler || isAllRounder) && player.stats.economy != null && <StatCard label="Economy" value={player.stats.economy.toFixed(2)} />}
          {isBatter && <StatCard label="Highest" value={player.stats.highest} />}
          {isBatter && <StatCard label="50s/100s" value={`${player.stats.fifties}/${player.stats.hundreds}`} />}
          {isBowler && player.stats.bowlingAvg != null && <StatCard label="Bowl Avg" value={player.stats.bowlingAvg.toFixed(1)} />}
          {isBowler && player.stats.bestBowling && <StatCard label="Best" value={player.stats.bestBowling} />}
        </div>
      </div>

      {/* ─── Analyst Note (hero narrative) ─── */}
      {player.deepInsights?.analystNote && (
        <div className="bg-card border border-card-border rounded-xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={14} className="text-primary" />
            <h2 className="text-xs font-bold text-foreground uppercase tracking-wide">Analyst Note</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{player.deepInsights.analystNote}</p>
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-muted/50 h-9">
          <TabsTrigger data-testid="tab-overview" value="overview" className="text-xs h-7">DNA Overview</TabsTrigger>
          <TabsTrigger data-testid="tab-performance" value="performance" className="text-xs h-7">Performance</TabsTrigger>
          <TabsTrigger data-testid="tab-insights" value="insights" className="text-xs h-7">Deep Insights</TabsTrigger>
          <TabsTrigger data-testid="tab-drifts" value="drifts" className="text-xs h-7">Drift History</TabsTrigger>
          {player.proIntelligence && <TabsTrigger data-testid="tab-tactical" value="tactical" className="text-xs h-7">Tactical Playbook</TabsTrigger>}
          {player.proIntelligence && <TabsTrigger data-testid="tab-situational" value="situational" className="text-xs h-7">Situational Intel</TabsTrigger>}
        </TabsList>

        {/* === TAB 1: DNA Overview === */}
        <TabsContent value="overview" className="space-y-5">
          {/* Strengths & Weaknesses Cards */}
          {player.deepInsights && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <NarrativeCard
                icon={Zap}
                title="Strengths"
                content={player.deepInsights.strengthsNarrative}
                accentClass="border-l-green-500"
              />
              <NarrativeCard
                icon={AlertTriangle}
                title="Weaknesses"
                content={player.deepInsights.weaknessesNarrative}
                accentClass="border-l-red-500"
              />
            </div>
          )}

          {/* Skill Radar */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <SectionHeader icon={Target} title="Skill Radar" subtitle="Current form vs career peak" />
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={player.radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Career Peak" dataKey="peak" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted-foreground))" fillOpacity={0.1} strokeWidth={1.5} strokeDasharray="4 2" />
                <Radar name="Current" dataKey="current" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} strokeWidth={2} />
                <Legend formatter={(value) => <span style={{ fontSize: 11, color: "hsl(var(--muted-foreground))" }}>{value}</span>} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Career Timeline */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <SectionHeader icon={TrendingUp} title="DNA Score Timeline" subtitle="Performance trajectory across T20 events" />
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={player.careerTimeline}>
                <defs>
                  <linearGradient id="dnaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="period" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} />
                <YAxis domain={[40, 100]} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickLine={false} axisLine={false} width={30} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 12 }}
                  labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                  itemStyle={{ color: "hsl(var(--muted-foreground))" }}
                />
                <Area type="monotone" dataKey="dnaScore" stroke="hsl(var(--primary))" fill="url(#dnaGrad)" strokeWidth={2} dot={{ fill: "hsl(var(--primary))", r: 3, strokeWidth: 0 }} name="DNA Score" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Active Drift Alerts */}
          {player.driftEvents.length > 0 && (
            <div>
              <SectionHeader icon={Shield} title="Active Drift Alerts" subtitle={`${player.driftEvents.length} events detected`} />
              <div className="space-y-2">
                {player.driftEvents.slice(0, 3).map((drift) => (
                  <DriftCard key={drift.id} drift={drift} />
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* === TAB 2: Performance === */}
        <TabsContent value="performance" className="space-y-5">
          {/* Recent Innings Enhanced */}
          <RecentInningsChart innings={player.recentInnings} />

          {/* Phase Performance — Batting */}
          {(isBatter || isAllRounder) && player.phaseData.length > 0 && player.phaseData.some(p => p.runs > 0) && (
            <div className="bg-card border border-card-border rounded-xl p-4">
              <SectionHeader icon={BarChart3} title="Batting Phase Performance" subtitle="Powerplay, Middle & Death overs" />
              <div className="space-y-3">
                {player.phaseData.map((phase) => {
                  const maxRuns = Math.max(...player.phaseData.map((p) => p.runs));
                  const pct = maxRuns > 0 ? (phase.runs / maxRuns) * 100 : 0;
                  return (
                    <div key={phase.phase}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-foreground">{phase.phase}</span>
                        <div className="flex gap-4 text-[11px] text-muted-foreground tabular-nums">
                          <span>{phase.runs} runs</span>
                          <span>SR {phase.strikeRate.toFixed(1)}</span>
                          <span>Avg {phase.average.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bowler Phase Performance */}
          {hasBowlingPhase && (
            <BowlerPhaseCard phases={player.deepInsights!.bowlerPhaseData} />
          )}

          {/* Dismissal Patterns — batters only */}
          {(isBatter || isAllRounder) && dismissalData.length > 0 && (
            <div className="bg-card border border-card-border rounded-xl p-4">
              <SectionHeader icon={Shield} title="Dismissal Patterns" subtitle="How they get out" />
              <div className="flex items-center gap-4">
                <ResponsiveContainer width={160} height={160}>
                  <PieChart>
                    <Pie data={dismissalData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value">
                      {dismissalData.map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 11 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {dismissalData.map((d, i) => (
                    <div key={d.name} className="flex items-center gap-1.5 text-xs">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                      <span className="text-muted-foreground">{d.name}</span>
                      <span className="font-medium tabular-nums text-foreground ml-auto">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stats table */}
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-3 py-2.5 text-left text-muted-foreground font-medium">Stat</th>
                  <th className="px-3 py-2.5 text-right text-muted-foreground font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Matches", value: player.stats.matches },
                  ...((isBatter || isAllRounder) ? [
                    { label: "Innings", value: player.stats.innings },
                    { label: "Runs", value: player.stats.runs.toLocaleString() },
                    { label: "Average", value: player.stats.average.toFixed(2) },
                    { label: "Strike Rate", value: player.stats.strikeRate.toFixed(2) },
                    { label: "Highest Score", value: player.stats.highest },
                    { label: "Centuries", value: player.stats.hundreds },
                    { label: "Half-centuries", value: player.stats.fifties },
                  ] : []),
                  ...((isBowler || isAllRounder) && player.stats.wickets != null ? [
                    { label: "Wickets", value: player.stats.wickets },
                    { label: "Bowling Average", value: player.stats.bowlingAvg?.toFixed(2) ?? "—" },
                    { label: "Economy Rate", value: player.stats.economy?.toFixed(2) ?? "—" },
                    { label: "Best Bowling", value: player.stats.bestBowling ?? "—" },
                  ] : []),
                ].map((row, i) => (
                  <tr key={i} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "" : "bg-muted/10")}>
                    <td className="px-3 py-2 text-muted-foreground">{row.label}</td>
                    <td className="px-3 py-2 text-right font-semibold tabular-nums text-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* === TAB 3: Deep Insights === */}
        <TabsContent value="insights" className="space-y-5">
          {player.deepInsights ? (
            <>
              {/* Format Splits */}
              {player.deepInsights.formatSplits.length > 0 && (
                <FormatSplitsTable splits={player.deepInsights.formatSplits} isBatter={isBatter || isAllRounder} />
              )}

              {/* vs Pace/Spin */}
              {hasAttackSplits && (
                <AttackSplitCard splits={player.deepInsights.bowlingAttackSplits} />
              )}

              {/* Venue Performance */}
              {player.deepInsights.venueStats.length > 0 && (
                <VenueStatsCard venues={player.deepInsights.venueStats} isBowler={isBowler} />
              )}

              {/* Bowler Phase (also shown in Performance, duplicated here for insights context) */}
              {hasBowlingPhase && (
                <BowlerPhaseCard phases={player.deepInsights.bowlerPhaseData} />
              )}
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground text-sm">Deep insights not available for this player.</div>
          )}
        </TabsContent>

        {/* === TAB 4: Drift History === */}
        <TabsContent value="drifts" className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {[null, "GROWTH", "DECLINE", "VOLATILITY", "RECOVERY"].map((type) => (
              <button
                key={type ?? "all"}
                data-testid={`drift-filter-${type ?? "all"}`}
                onClick={() => setDriftTypeFilter(type)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                  driftTypeFilter === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/30 text-muted-foreground border-border hover:text-foreground"
                )}
              >
                {type ?? "All"}
              </button>
            ))}
          </div>

          {filteredDrifts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">No drift events found.</div>
          ) : (
            <div className="space-y-2">
              {filteredDrifts.map((drift) => (
                <DriftCard key={drift.id} drift={drift} expanded />
              ))}
            </div>
          )}
        </TabsContent>

        {/* === TAB 5: Tactical Playbook === */}
        {player.proIntelligence && (
          <TabsContent value="tactical" className="space-y-5">
            {/* Coach Briefing */}
            <div className="bg-card border border-card-border rounded-xl p-4 border-l-4 border-l-primary">
              <div className="flex items-center gap-2 mb-2">
                <Brain size={14} className="text-primary" />
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wide">Coach's Briefing</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">"{player.proIntelligence.coachBriefing}"</p>
            </div>

            {/* Scoring Zones (batters) */}
            {player.proIntelligence.scoringZones.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Target} title="Scoring Zones" subtitle="Wagon wheel breakdown by region" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {player.proIntelligence.scoringZones.map((z) => {
                    const maxSR = Math.max(...player.proIntelligence!.scoringZones.map(sz => sz.strikeRate));
                    const intensity = Math.min(z.strikeRate / Math.max(maxSR, 1), 1);
                    const bgColor = intensity > 0.8 ? "bg-green-500/15" : intensity > 0.5 ? "bg-amber-500/10" : "bg-muted/30";
                    return (
                      <div key={z.zone} className={cn("border border-border rounded-lg p-2.5", bgColor)}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-bold text-foreground">{z.zone}</span>
                          <span className="text-[10px] font-semibold tabular-nums text-primary">SR {z.strikeRate.toFixed(0)}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-muted-foreground tabular-nums mb-1.5">
                          <span>{z.runsScored} runs</span>
                          <span>{z.ballsFaced} balls</span>
                          <span>{z.boundaries}x4 {z.sixes}x6</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-muted-foreground">Dot%: {z.dotBalls > 0 && z.ballsFaced > 0 ? ((z.dotBalls / z.ballsFaced) * 100).toFixed(0) : 0}%</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-1 italic">{z.shotTypes}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bowling Zones (bowlers) */}
            {player.proIntelligence.bowlingZones.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Target} title="Bowling Zones" subtitle="Where they bowl and what happens" />
                <div className="space-y-2">
                  {player.proIntelligence.bowlingZones.map((z) => {
                    const maxWkt = Math.max(...player.proIntelligence!.bowlingZones.map(bz => bz.wickets), 1);
                    const pct = (z.wickets / maxWkt) * 100;
                    return (
                      <div key={z.zone} className="border border-border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-foreground">{z.zone}</span>
                          <div className="flex gap-3 text-[10px] tabular-nums text-muted-foreground">
                            <span className="font-semibold text-foreground">{z.wickets} wkt</span>
                            <span>Eco {z.economy.toFixed(1)}</span>
                            <span>Dot {z.dotBallPct}%</span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1.5">
                          <div className="h-full rounded-full bg-primary/70 transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="text-[10px] text-muted-foreground">{z.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Threat Matrix */}
            {player.proIntelligence.threatMatchups.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Swords} title="Threat Matrix" subtitle="Top opponents to prepare for in IPL 2026" />
                <div className="space-y-2">
                  {player.proIntelligence.threatMatchups.map((t) => {
                    const threatColors: Record<string, string> = {
                      extreme: "border-l-red-500 bg-red-500/5",
                      high: "border-l-amber-500 bg-amber-500/5",
                      moderate: "border-l-blue-500 bg-blue-500/5",
                      low: "border-l-green-500 bg-green-500/5",
                    };
                    const threatBadge: Record<string, string> = {
                      extreme: "bg-red-500/15 text-red-600 dark:text-red-400",
                      high: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
                      moderate: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
                      low: "bg-green-500/15 text-green-600 dark:text-green-400",
                    };
                    return (
                      <div key={t.opponentId} className={cn("border border-card-border rounded-lg border-l-4 p-3", threatColors[t.threatLevel])}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-foreground">{t.opponentName}</span>
                            <span className="text-[10px] text-muted-foreground">({t.opponentTeam})</span>
                          </div>
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase", threatBadge[t.threatLevel])}>
                            {t.threatLevel}
                          </span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mb-1.5 tabular-nums">{t.record}</div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed mb-1.5">{t.tacticalNote}</p>
                        <div className="flex items-start gap-1.5 text-[11px] bg-primary/5 rounded-md p-2">
                          <Lightbulb size={12} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground"><span className="font-semibold">Plan:</span> {t.suggestedPlan}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tactical Recommendations */}
            {player.proIntelligence.tacticalRecommendations.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Compass} title="Tactical Recommendations" subtitle="Coaching-level action items" />
                <div className="space-y-3">
                  {player.proIntelligence.tacticalRecommendations.map((rec, i) => {
                    const priorityColor = rec.priority === "critical" ? "border-l-red-500" : rec.priority === "high" ? "border-l-amber-500" : "border-l-blue-500";
                    const priorityBadge = rec.priority === "critical" ? "bg-red-500/15 text-red-600 dark:text-red-400" : rec.priority === "high" ? "bg-amber-500/15 text-amber-600 dark:text-amber-400" : "bg-blue-500/15 text-blue-600 dark:text-blue-400";
                    return (
                      <TacticalRecCard key={i} rec={rec} priorityColor={priorityColor} priorityBadge={priorityBadge} />
                    );
                  })}
                </div>
              </div>
            )}
          </TabsContent>
        )}

        {/* === TAB 6: Situational Intelligence === */}
        {player.proIntelligence && (
          <TabsContent value="situational" className="space-y-5">
            {/* Clutch Performance */}
            <div className="bg-card border border-card-border rounded-xl p-4">
              <SectionHeader icon={Trophy} title="Clutch Performance" subtitle="When it matters most" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-muted/30 rounded-lg p-2.5 text-center">
                  <div className="text-[10px] text-muted-foreground">Last Over Finishes</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{player.proIntelligence.clutchStats.lastOverFinishes}/{player.proIntelligence.clutchStats.totalLastOverAttempts}</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2.5 text-center">
                  <div className="text-[10px] text-muted-foreground">Dot % Under Pressure</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{player.proIntelligence.clutchStats.dotBallPctUnderPressure}%</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2.5 text-center">
                  <div className="text-[10px] text-muted-foreground">Boundary % Under Pressure</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{player.proIntelligence.clutchStats.boundaryPctUnderPressure}%</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2.5 text-center">
                  <div className="text-[10px] text-muted-foreground">Chasing 180+ Avg/SR</div>
                  <div className="text-sm font-bold tabular-nums text-foreground">{player.proIntelligence.clutchStats.avgWhenChasing180Plus}/{player.proIntelligence.clutchStats.srWhenChasing180Plus}</div>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2 text-[11px]">
                  <Trophy size={11} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-medium text-foreground">Super Overs:</span> {player.proIntelligence.clutchStats.superOverRecord}</span>
                </div>
                <div className="flex items-start gap-2 text-[11px]">
                  <Activity size={11} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-medium text-foreground">Eliminators:</span> {player.proIntelligence.clutchStats.performanceInEliminators}</span>
                </div>
              </div>
            </div>

            {/* Batting Situational Splits */}
            {player.proIntelligence.battingSituational.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Clock} title="Batting Situational Splits" subtitle="Performance by game context" />
                <div className="space-y-2">
                  {player.proIntelligence.battingSituational.map((s, i) => (
                    <div key={i} className="border border-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-foreground">{s.situation}</span>
                        <div className="flex gap-3 text-[10px] tabular-nums text-muted-foreground">
                          <span>{s.innings} inn</span>
                          <span className="font-semibold text-foreground">{s.runs} runs</span>
                          {s.average != null && <span>Avg {s.average.toFixed(1)}</span>}
                          {s.strikeRate != null && <span>SR {s.strikeRate.toFixed(1)}</span>}
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">{s.narrative}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bowling Situational Splits */}
            {player.proIntelligence.bowlingSituational.length > 0 && (
              <div className="bg-card border border-card-border rounded-xl p-4">
                <SectionHeader icon={Clock} title="Bowling Situational Splits" subtitle="Performance by match phase and context" />
                <div className="space-y-2">
                  {player.proIntelligence.bowlingSituational.map((s, i) => (
                    <div key={i} className="border border-border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-foreground">{s.situation}</span>
                        <div className="flex gap-3 text-[10px] tabular-nums text-muted-foreground">
                          {s.overs != null && <span>{s.overs.toFixed(1)} ov</span>}
                          <span className="font-semibold text-foreground">{s.wickets} wkt</span>
                          {s.economy != null && <span>Eco {s.economy.toFixed(1)}</span>}
                          <span>Dot {s.dotBallPct}%</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">{s.narrative}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
