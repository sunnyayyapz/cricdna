import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Swords, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface H2HRecord {
  batter: string;
  bowler: string;
  balls_faced: number;
  runs_scored: number;
  dismissals: number;
  strike_rate: number;
  average: number;
  boundaries: number;
  sixes: number;
  dot_ball_pct: number;
}

export default function MatchupSearchPage() {
  const [batter, setBatter] = useState("");
  const [bowler, setBowler] = useState("");
  const [searchBatter, setSearchBatter] = useState("");
  const [searchBowler, setSearchBowler] = useState("");

  // Fetch search results when user has typed a query
  const hasSearch = searchBatter.length > 1 || searchBowler.length > 1;
  const { data: searchResults, isLoading: searchLoading } = useQuery<H2HRecord[]>({
    queryKey: [
      `/api/stats/head-to-head?${new URLSearchParams(
        Object.fromEntries(
          [
            searchBatter && ["batter", searchBatter],
            searchBowler && ["bowler", searchBowler],
          ].filter(Boolean) as [string, string][]
        )
      ).toString()}`,
    ],
    enabled: hasSearch,
  });

  // Fetch top 20 matchups by balls faced (fetches all, slices client-side)
  const { data: allMatchups, isLoading: topLoading } = useQuery<H2HRecord[]>({
    queryKey: ["/api/stats/head-to-head"],
  });

  const topMatchups = allMatchups
    ?.slice()
    .sort((a, b) => b.balls_faced - a.balls_faced)
    .slice(0, 20);

  function handleSearch() {
    setSearchBatter(batter.trim());
    setSearchBowler(bowler.trim());
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  function selectMatchup(record: H2HRecord) {
    setBatter(record.batter);
    setBowler(record.bowler);
    setSearchBatter(record.batter);
    setSearchBowler(record.bowler);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <Swords size={22} className="text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-xl sm:text-2xl font-display font-bold text-foreground">
            Head-to-Head Matchups
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Search any batter vs bowler combination from IPL history (500+ matchups)
        </p>
      </div>

      {/* Search inputs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            data-testid="matchup-batter-input"
            placeholder="Batter name (e.g. Kohli)"
            value={batter}
            onChange={(e) => setBatter(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-9"
          />
        </div>
        <div className="flex items-center justify-center sm:px-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">vs</span>
        </div>
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            data-testid="matchup-bowler-input"
            placeholder="Bowler name (e.g. Bumrah)"
            value={bowler}
            onChange={(e) => setBowler(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-9"
          />
        </div>
        <button
          data-testid="matchup-search-btn"
          onClick={handleSearch}
          className="px-5 py-2 rounded-md bg-emerald-600 dark:bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors flex items-center gap-1.5"
        >
          <Search size={14} />
          Search
        </button>
      </div>

      {/* Search results */}
      {hasSearch && (
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Search Results
          </h2>
          {searchLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
          ) : !searchResults || searchResults.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground text-sm">
              No matchups found. Try different names.
            </div>
          ) : (
            <div className="space-y-3">
              {searchResults.map((r, i) => (
                <MatchupCard key={`${r.batter}-${r.bowler}-${i}`} record={r} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Top 20 matchups */}
      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Top 20 Matchups by Balls Faced
        </h2>
        {topLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 rounded" />
            ))}
          </div>
        ) : (
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 text-left">
                    <th className="px-3 py-2.5 font-medium text-muted-foreground">#</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground">Batter</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground">Bowler</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">Balls</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">Runs</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">SR</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">Avg</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">Outs</th>
                    <th className="px-3 py-2.5 font-medium text-muted-foreground text-right">Dot%</th>
                  </tr>
                </thead>
                <tbody>
                  {topMatchups?.map((r, i) => (
                    <tr
                      key={`${r.batter}-${r.bowler}`}
                      data-testid={`top-matchup-row-${i}`}
                      onClick={() => selectMatchup(r)}
                      className="border-t border-border hover:bg-muted/30 cursor-pointer transition-colors"
                    >
                      <td className="px-3 py-2 text-muted-foreground">{i + 1}</td>
                      <td className="px-3 py-2 font-medium text-foreground">{r.batter}</td>
                      <td className="px-3 py-2 text-foreground">{r.bowler}</td>
                      <td className="px-3 py-2 text-right text-foreground">{r.balls_faced}</td>
                      <td className="px-3 py-2 text-right text-foreground">{r.runs_scored}</td>
                      <td className="px-3 py-2 text-right">
                        <span className={cn(
                          "font-medium",
                          r.strike_rate >= 150 ? "text-emerald-600 dark:text-emerald-400" :
                          r.strike_rate < 100 ? "text-red-600 dark:text-red-400" : "text-foreground"
                        )}>
                          {r.strike_rate.toFixed(1)}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-foreground">
                        {r.average > 0 ? r.average.toFixed(1) : "—"}
                      </td>
                      <td className="px-3 py-2 text-right text-foreground">{r.dismissals}</td>
                      <td className="px-3 py-2 text-right text-muted-foreground">
                        {r.dot_ball_pct.toFixed(1)}%
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

/* ─── Matchup Card ──────────────────────────────────────────────────────────── */

function MatchupCard({ record }: { record: H2HRecord }) {
  const r = record;
  return (
    <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors">
      {/* Names row */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-display font-semibold text-foreground">{r.batter}</span>
        <ArrowRight size={14} className="text-muted-foreground" />
        <span className="font-display font-semibold text-foreground">{r.bowler}</span>
      </div>
      {/* Stats grid */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        <StatCell label="Balls" value={String(r.balls_faced)} />
        <StatCell label="Runs" value={String(r.runs_scored)} />
        <StatCell
          label="SR"
          value={r.strike_rate.toFixed(1)}
          highlight={r.strike_rate >= 150 ? "green" : r.strike_rate < 100 ? "red" : undefined}
        />
        <StatCell label="Avg" value={r.average > 0 ? r.average.toFixed(1) : "—"} />
        <StatCell label="Outs" value={String(r.dismissals)} />
        <StatCell label="4s" value={String(r.boundaries)} />
        <StatCell label="6s" value={String(r.sixes)} />
        <StatCell label="Dot%" value={`${r.dot_ball_pct.toFixed(1)}%`} />
      </div>
    </div>
  );
}

function StatCell({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "green" | "red";
}) {
  return (
    <div className="text-center">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{label}</div>
      <div
        className={cn(
          "text-sm font-semibold",
          highlight === "green" && "text-emerald-600 dark:text-emerald-400",
          highlight === "red" && "text-red-600 dark:text-red-400",
          !highlight && "text-foreground"
        )}
      >
        {value}
      </div>
    </div>
  );
}
