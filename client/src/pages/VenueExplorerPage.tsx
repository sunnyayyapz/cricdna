import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, ChevronDown, ArrowUpDown, Trophy, Target } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface VenueStats {
  venue: string;
  city: string;
  total_matches: number;
  avg_first_innings_score: number;
  avg_second_innings_score: number;
  highest_score: number;
  lowest_score: number;
  bat_first_wins: number;
  bat_second_wins: number;
  bat_first_win_pct: number;
  toss_field_pct: number;
  powerplay_rpo: number;
  middle_rpo: number;
  death_rpo: number;
  last_5_matches?: {
    date: string;
    team1: string;
    team2: string;
    score1: string;
    score2: string;
    winner: string;
  }[];
}

interface TossVenue {
  venue: string;
  matches: number;
  toss_bat_first: { count: number; wins: number; win_pct: number };
  toss_field_first: { count: number; wins: number; win_pct: number };
  overall: { bat_first_wins: number; bat_second_wins: number };
}

interface TossData {
  venues: TossVenue[];
}

type SortField = "total_matches" | "avg_first_innings_score" | "powerplay_rpo" | "death_rpo" | "bat_first_win_pct";
type SortDir = "asc" | "desc";

export default function VenueExplorerPage() {
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [sortField, setSortField] = useState<SortField>("total_matches");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data: venues, isLoading } = useQuery<VenueStats[]>({
    queryKey: ["/api/stats/venues"],
  });

  const { data: tossData } = useQuery<TossData>({
    queryKey: ["/api/stats/toss"],
  });

  const selected = venues?.find((v) => v.venue === selectedVenue);

  // Find matching toss data for the selected venue
  const tossVenue = useMemo(() => {
    if (!selected || !tossData?.venues) return null;
    const name = selected.venue.toLowerCase();
    return tossData.venues.find((t) =>
      t.venue.toLowerCase().includes(name.split(",")[0].split("Stadium")[0].trim().toLowerCase())
    ) || null;
  }, [selected, tossData]);

  // Phase RPO chart data for selected venue
  const phaseData = selected
    ? [
        { phase: "Powerplay", rpo: selected.powerplay_rpo },
        { phase: "Middle", rpo: selected.middle_rpo },
        { phase: "Death", rpo: selected.death_rpo },
      ]
    : [];

  // Top 15 venues by match count for comparison table
  const topVenues = useMemo(() => {
    if (!venues) return [];
    const sorted = [...venues]
      .sort((a, b) => {
        const aVal = a[sortField] ?? 0;
        const bVal = b[sortField] ?? 0;
        return sortDir === "desc" ? (bVal as number) - (aVal as number) : (aVal as number) - (bVal as number);
      });
    return sorted.slice(0, 15);
  }, [venues, sortField, sortDir]);

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  }

  function SortHeader({ field, label }: { field: SortField; label: string }) {
    const active = sortField === field;
    return (
      <th
        className="px-3 py-2.5 font-medium text-muted-foreground text-right cursor-pointer select-none hover:text-foreground transition-colors"
        onClick={() => toggleSort(field)}
      >
        <span className="inline-flex items-center gap-1 justify-end">
          {label}
          <ArrowUpDown size={12} className={cn(active ? "text-emerald-500" : "opacity-40")} />
        </span>
      </th>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <MapPin size={22} className="text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-xl sm:text-2xl font-display font-bold text-foreground">
            Venue Explorer
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Analytics for every IPL venue — phase scoring, toss trends, and recent results
        </p>
      </div>

      {/* Venue selector */}
      <div className="relative mb-6 max-w-md">
        <button
          data-testid="venue-selector"
          onClick={() => setDropdownOpen((o) => !o)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-md border border-border bg-background text-sm text-foreground hover:bg-muted/30 transition-colors"
        >
          <span className={cn(!selectedVenue && "text-muted-foreground")}>
            {selectedVenue || "Select a venue..."}
          </span>
          <ChevronDown size={16} className="text-muted-foreground" />
        </button>
        {dropdownOpen && venues && (
          <div className="absolute z-40 mt-1 w-full max-h-64 overflow-y-auto rounded-md border border-border bg-background shadow-lg">
            {venues
              .slice()
              .sort((a, b) => b.total_matches - a.total_matches)
              .map((v) => (
                <button
                  key={v.venue}
                  onClick={() => {
                    setSelectedVenue(v.venue);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm hover:bg-muted/50 transition-colors flex items-center justify-between",
                    v.venue === selectedVenue && "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                  )}
                >
                  <span>{v.venue}</span>
                  <span className="text-xs text-muted-foreground">{v.total_matches} matches</span>
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="space-y-4">
          <Skeleton className="h-48 rounded-lg" />
          <Skeleton className="h-64 rounded-lg" />
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div className="mb-10 space-y-5">
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <VenueStatCard label="Total Matches" value={String(selected.total_matches)} />
            <VenueStatCard label="Avg 1st Inn" value={selected.avg_first_innings_score.toFixed(1)} />
            <VenueStatCard label="Highest Score" value={String(selected.highest_score)} />
            <VenueStatCard label="Bat First Win%" value={`${selected.bat_first_win_pct.toFixed(1)}%`} />
          </div>

          {/* Toss analysis */}
          {tossVenue && (
            <div className="border border-border rounded-lg p-4">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
                <Trophy size={14} className="text-amber-500" /> Toss Analysis
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground mb-0.5">Field First Wins</div>
                  <div className="font-semibold text-foreground">
                    {tossVenue.toss_field_first.wins}/{tossVenue.toss_field_first.count}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({tossVenue.toss_field_first.win_pct.toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground mb-0.5">Bat First Wins</div>
                  <div className="font-semibold text-foreground">
                    {tossVenue.toss_bat_first.wins}/{tossVenue.toss_bat_first.count}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({tossVenue.toss_bat_first.win_pct.toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground mb-0.5">Choose to Field%</div>
                  <div className="font-semibold text-foreground">{selected.toss_field_pct.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-foreground mb-0.5">Overall Bat 1st Wins</div>
                  <div className="font-semibold text-foreground">
                    {tossVenue.overall.bat_first_wins}W / {tossVenue.overall.bat_second_wins}L
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase RPO chart */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
              <Target size={14} className="text-emerald-600 dark:text-emerald-400" /> Phase RPO
            </h3>
            <div className="h-48 sm:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={phaseData} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="phase"
                    tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, "auto"]}
                    label={{ value: "RPO", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "var(--muted-foreground)" } }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`${value.toFixed(2)} RPO`, "Run Rate"]}
                  />
                  <Bar dataKey="rpo" radius={[4, 4, 0, 0]} fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Last 5 matches */}
          {selected.last_5_matches && selected.last_5_matches.length > 0 && (
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-muted/30 border-b border-border">
                <h3 className="text-sm font-semibold text-foreground">Recent Matches</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/20 text-left">
                      <th className="px-3 py-2 font-medium text-muted-foreground">Date</th>
                      <th className="px-3 py-2 font-medium text-muted-foreground">Match</th>
                      <th className="px-3 py-2 font-medium text-muted-foreground">Score</th>
                      <th className="px-3 py-2 font-medium text-muted-foreground">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.last_5_matches.map((m, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">{m.date}</td>
                        <td className="px-3 py-2 text-foreground whitespace-nowrap">
                          {m.team1} vs {m.team2}
                        </td>
                        <td className="px-3 py-2 text-foreground whitespace-nowrap">
                          {m.score1} / {m.score2}
                        </td>
                        <td className="px-3 py-2 font-medium text-foreground">{m.winner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Venue comparison table */}
      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Top 15 Venues by Matches
        </h2>
        {isLoading ? (
          <Skeleton className="h-64 rounded-lg" />
        ) : (
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 text-left">
                    <th className="px-3 py-2.5 font-medium text-muted-foreground">Venue</th>
                    <SortHeader field="total_matches" label="Matches" />
                    <SortHeader field="avg_first_innings_score" label="Avg 1st Inn" />
                    <SortHeader field="powerplay_rpo" label="PP RPO" />
                    <SortHeader field="death_rpo" label="Death RPO" />
                    <SortHeader field="bat_first_win_pct" label="Bat 1st Win%" />
                  </tr>
                </thead>
                <tbody>
                  {topVenues.map((v) => (
                    <tr
                      key={v.venue}
                      data-testid={`venue-row-${v.venue}`}
                      onClick={() => {
                        setSelectedVenue(v.venue);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={cn(
                        "border-t border-border cursor-pointer transition-colors",
                        v.venue === selectedVenue
                          ? "bg-emerald-500/10"
                          : "hover:bg-muted/30"
                      )}
                    >
                      <td className="px-3 py-2 font-medium text-foreground max-w-[200px] truncate">
                        {v.venue}
                      </td>
                      <td className="px-3 py-2 text-right text-foreground">{v.total_matches}</td>
                      <td className="px-3 py-2 text-right text-foreground">
                        {v.avg_first_innings_score.toFixed(1)}
                      </td>
                      <td className="px-3 py-2 text-right text-foreground">
                        {v.powerplay_rpo.toFixed(2)}
                      </td>
                      <td className="px-3 py-2 text-right">
                        <span className={cn(
                          "font-medium",
                          v.death_rpo >= 10 ? "text-red-600 dark:text-red-400" : "text-foreground"
                        )}>
                          {v.death_rpo.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-foreground">
                        {v.bat_first_win_pct.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function VenueStatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border rounded-lg p-3 text-center">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
      <div className="text-lg font-display font-bold text-foreground">{value}</div>
    </div>
  );
}
