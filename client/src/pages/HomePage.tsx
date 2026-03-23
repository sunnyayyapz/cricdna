import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Calendar,
  Dna,
  Zap,
  ArrowRight,
  Swords,
  BarChart3,
  TrendingUp,
  Table2,
  Activity,
  MapPin,
} from "lucide-react";
import { useMemo } from "react";
// Recharts removed from homepage — charts only render inside articles

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface DataTable {
  headers: string[];
  rows: string[][];
}

interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: "pitch-report" | "toss-report" | "match-preview" | "rankings" | "analysis";
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
  relatedPlayerIds: number[];
  chartData?: ChartData[];
  dataTable?: DataTable;
  matchId?: number;
}

interface AnalyticsCard {
  type: "player" | "matchup" | "stat";
  title: string;
  value: string;
  description: string;
  playerIds?: number[];
  teamColors?: string[];
}

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

interface Player {
  id: number;
  name: string;
  team: string;
  teamShort: string;
  teamColor: string;
  dnaScore: number;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const teamColors: Record<string, string> = {
  RCB: "#E4002B", CSK: "#FFCB05", MI: "#004BA0", KKR: "#3A225D",
  RR: "#EA1A85", DC: "#17479E", SRH: "#FF822A", PBKS: "#ED1B24",
  LSG: "#A72056", GT: "#1C1C2B",
};

const categoryColors: Record<string, string> = {
  "pitch-report": "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/30",
  "toss-report": "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30",
  "match-preview": "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
  rankings: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/30",
  analysis: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function categoryLabel(cat: string) {
  return cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function timeAgo(dateStr: string) {
  const now = new Date();
  const d = new Date(dateStr);
  const hours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

const shortDays: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu",
  Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

function formatMatchDate(date: string, day: string) {
  const d = new Date(date + "T00:00:00");
  const short = shortDays[day] || day.slice(0, 3);
  return `${short}, ${d.getDate()} ${d.toLocaleDateString("en-IN", { month: "short" })}`;
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border", categoryColors[category] || categoryColors.analysis)}>
      {categoryLabel(category)}
    </span>
  );
}



// ─── A) Score Ticker ───────────────────────────────────────────────────────────

function istToPst(istTime: string) {
  // Convert IST time to PST (IST is UTC+5:30, PST is UTC-8, so PST = IST - 13:30)
  const match = istTime.match(/(\d+):(\d+)/);
  if (!match) return istTime;
  let hours = parseInt(match[1], 10);
  let minutes = parseInt(match[2], 10);
  // Subtract 13 hours 30 minutes
  minutes -= 30;
  if (minutes < 0) { minutes += 60; hours -= 1; }
  hours -= 13;
  if (hours < 0) hours += 24;
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHour}:${minutes.toString().padStart(2, "0")} ${period} PST`;
}

function formatTickerDate(date: string, day: string, time: string) {
  const d = new Date(date + "T00:00:00");
  const short = shortDays[day] || day.slice(0, 3);
  const monthDay = `${d.getDate()} ${d.toLocaleDateString("en-US", { month: "short" })}`;
  return `${short} ${monthDay}, ${istToPst(time)}`;
}

function ScoreTicker() {
  const { data: matches, isLoading } = useQuery<ScheduleMatch[]>({ queryKey: ["/api/schedule/upcoming"] });

  if (isLoading) {
    return (
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-2 overflow-hidden">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="flex-shrink-0 h-12 w-[160px] rounded-lg" />)}
        </div>
      </div>
    );
  }

  const upcoming = (matches || []).slice(0, 20);

  return (
    <div className="sticky top-14 z-40 bg-white dark:bg-gray-900 border-b border-border" data-testid="score-ticker">
      <div className="max-w-7xl mx-auto flex items-center gap-0 overflow-x-auto px-4" style={{ scrollbarWidth: "thin" }}>
        <div className="flex-shrink-0 pr-3 flex items-center gap-1.5 border-r border-border py-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">IPL</span>
        </div>
        {upcoming.map((m) => (
          <Link key={m.id} href={`/matches/${m.id}`}>
            <a className="flex-shrink-0 flex flex-col items-center px-4 py-2 border-r border-border/50 hover:bg-accent/50 transition-colors min-w-[150px]" data-testid={`ticker-match-${m.id}`}>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs" style={{ color: teamColors[m.homeTeam] }}>{m.homeTeam}</span>
                <span className="text-muted-foreground text-[10px]">vs</span>
                <span className="font-bold text-xs" style={{ color: teamColors[m.awayTeam] }}>{m.awayTeam}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-0.5">{formatTickerDate(m.date, m.day, m.time)}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── B) Analytics Dashboard Header ─────────────────────────────────────────────

function AnalyticsDashboardHeader({
  featuredArticle,
  analyticsCard,
}: {
  featuredArticle: Article | undefined;
  analyticsCard: AnalyticsCard | undefined;
}) {
  const [, navigate] = useLocation();

  if (!featuredArticle && !analyticsCard) {
    return (
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <Skeleton className="h-[320px] rounded-xl" />
      </div>
    );
  }

  // Use the featured article as the hero — single coherent piece
  if (!featuredArticle) {
    return (
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <Skeleton className="h-[280px] rounded-xl" />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-4" data-testid="analytics-dashboard-header">
      <Link href={`/article/${featuredArticle.slug}`}>
        <a className="group block rounded-xl border border-border bg-card hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-lg transition-all overflow-hidden" data-testid="hero-article-link">
          <div className="p-5 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge category={featuredArticle.category} />
              <span className="text-muted-foreground text-[11px]">{featuredArticle.readTime}</span>
              {featuredArticle.chartData && (
                <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-[11px] font-medium">
                  <BarChart3 size={11} /> Charts
                </span>
              )}
              {featuredArticle.dataTable && (
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-[11px] font-medium">
                  <Table2 size={11} /> {featuredArticle.dataTable.rows.length} rows
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground font-display leading-tight mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {featuredArticle.title}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              {featuredArticle.subtitle}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground/60 text-xs">{featuredArticle.author} · {timeAgo(featuredArticle.publishedAt)}</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">Read article →</span>
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
}

// ─── C) Match Analytics Cards ──────────────────────────────────────────────────

function MatchAnalyticsCards({
  articlesByMatch,
  schedule,
}: {
  articlesByMatch: Map<number, Article[]>;
  schedule: ScheduleMatch[];
}) {
  const matchIds = Array.from(articlesByMatch.keys()).slice(0, 3);

  if (matchIds.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 pt-4" data-testid="match-analytics-cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {matchIds.map((matchId) => {
          const articles = articlesByMatch.get(matchId) || [];
          const match = schedule.find((s) => s.id === matchId);
          if (!match) return null;

          const homeColor = teamColors[match.homeTeam] || "#71717a";
          const awayColor = teamColors[match.awayTeam] || "#71717a";

          return (
            <Card key={matchId} className="p-4 bg-card border-border relative overflow-hidden" data-testid={`match-card-${matchId}`}>
              {/* Team color top border */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1" style={{ background: homeColor }} />
                <div className="flex-1" style={{ background: awayColor }} />
              </div>

              {/* Match header */}
              <div className="flex items-center justify-between mb-3 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm" style={{ color: homeColor }}>{match.homeTeam}</span>
                  <span className="text-muted-foreground text-[10px]">vs</span>
                  <span className="font-bold text-sm" style={{ color: awayColor }}>{match.awayTeam}</span>
                </div>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{formatMatchDate(match.date, match.day)}</span>
              </div>

              {/* Article pills */}
              <div className="space-y-1.5">
                {articles.slice(0, 3).map((article) => (
                  <Link key={article.id} href={`/article/${article.slug}`}>
                    <a className="group flex items-start gap-2 py-1 hover:bg-accent/40 rounded px-1 -mx-1 transition-colors" data-testid={`match-article-pill-${article.id}`}>
                      <CategoryBadge category={article.category} />
                      <span className="text-xs text-foreground leading-snug line-clamp-1 group-hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex-1">
                        {article.title}
                      </span>
                      {article.chartData && <BarChart3 size={10} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />}
                      {article.dataTable && <Table2 size={10} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />}
                    </a>
                  </Link>
                ))}
              </div>

              {/* Link to match */}
              <Link href={`/matches/${matchId}`}>
                <a className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-2 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors">
                  Full match analysis
                  <ArrowRight size={10} />
                </a>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

// ─── D) Article Feed (grouped by match) ────────────────────────────────────────

function ArticleFeedRow({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="group flex items-start gap-4 py-3 border-b border-border/50 last:border-0 hover:bg-accent/30 px-2 -mx-2 rounded transition-colors" data-testid={`article-feed-${article.slug}`}>
        {/* Left: category + text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <CategoryBadge category={article.category} />
            {article.chartData && (
              <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                <BarChart3 size={10} />
                <span className="text-[9px] font-bold uppercase">Chart</span>
              </span>
            )}
            {article.dataTable && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Table2 size={10} />
                <span className="text-[9px] font-bold uppercase">{article.dataTable.rows.length} rows</span>
              </span>
            )}
          </div>
          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground/70 text-xs leading-relaxed line-clamp-1 mt-0.5">
            {article.subtitle}
          </p>
          <span className="text-muted-foreground/50 text-[11px] mt-1 block">
            {article.author} · {timeAgo(article.publishedAt)} · {article.readTime}
          </span>
        </div>


      </a>
    </Link>
  );
}

function MatchGroupHeader({ match }: { match: ScheduleMatch }) {
  const homeColor = teamColors[match.homeTeam] || "#71717a";
  const awayColor = teamColors[match.awayTeam] || "#71717a";

  return (
    <div className="flex items-center gap-3 py-2 px-2 -mx-2 bg-accent/30 rounded-md mb-1">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full" style={{ background: homeColor }} />
        <span className="font-bold text-xs" style={{ color: homeColor }}>{match.homeTeam}</span>
        <span className="text-muted-foreground text-[10px]">vs</span>
        <span className="font-bold text-xs" style={{ color: awayColor }}>{match.awayTeam}</span>
        <span className="w-2 h-2 rounded-full" style={{ background: awayColor }} />
      </div>
      <span className="text-[10px] text-muted-foreground">Match #{match.matchNumber} · {formatMatchDate(match.date, match.day)}</span>
      <Link href={`/matches/${match.id}`}>
        <a className="ml-auto text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-500 dark:hover:text-emerald-300">View →</a>
      </Link>
    </div>
  );
}

function ArticleFeed({
  articlesByMatch,
  ungroupedArticles,
  schedule,
}: {
  articlesByMatch: Map<number, Article[]>;
  ungroupedArticles: Article[];
  schedule: ScheduleMatch[];
}) {
  const matchIds = Array.from(articlesByMatch.keys());

  return (
    <div className="space-y-4" data-testid="article-feed">
      {matchIds.map((matchId) => {
        const articles = articlesByMatch.get(matchId) || [];
        const match = schedule.find((s) => s.id === matchId);
        if (!match) return null;

        return (
          <div key={matchId}>
            <MatchGroupHeader match={match} />
            <div>
              {articles.map((a) => (
                <ArticleFeedRow key={a.id} article={a} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Ungrouped articles (no matchId) */}
      {ungroupedArticles.length > 0 && (
        <div>
          <div className="flex items-center gap-2 py-2 px-2 -mx-2 bg-accent/30 rounded-md mb-1">
            <Activity size={12} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Season Analysis</span>
          </div>
          {ungroupedArticles.map((a) => (
            <ArticleFeedRow key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── E) Sidebar ────────────────────────────────────────────────────────────────

function Sidebar({
  analyticsCards,
}: {
  analyticsCards: AnalyticsCard[];
}) {
  const { data: topPlayers, isLoading: playersLoading } = useQuery<Player[]>({
    queryKey: ["/api/allplayers?sort=dnaScore&limit=5"],
    queryFn: async () => {
      const res = await fetch("/api/allplayers?sort=dnaScore&limit=5");
      return res.json();
    },
  });

  const { data: upcomingMatches, isLoading: matchesLoading } = useQuery<ScheduleMatch[]>({
    queryKey: ["/api/schedule/upcoming"],
  });

  const nextMatches = (upcomingMatches || []).slice(0, 6);

  const cardConfig: Record<string, { border: string; badge: string; icon: React.ReactNode }> = {
    player: { border: "border-l-emerald-500", badge: "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", icon: <Dna size={12} /> },
    matchup: { border: "border-l-blue-500", badge: "bg-blue-100 dark:bg-blue-500/15 text-blue-400", icon: <Swords size={12} /> },
    stat: { border: "border-l-purple-500", badge: "bg-purple-100 dark:bg-purple-500/15 text-purple-400", icon: <BarChart3 size={12} /> },
  };

  return (
    <aside className="space-y-3">
      {/* DNA Leaderboard */}
      <Card className="p-4 bg-card border-border" data-testid="dna-leaderboard">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
            <span className="w-1 h-3.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <Dna size={14} className="text-emerald-500" />
            DNA Leaderboard
          </h3>
          <Link href="/explore">
            <a className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300">See all →</a>
          </Link>
        </div>
        {playersLoading ? (
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-8 rounded" />)}
          </div>
        ) : (
          <div>
            {(topPlayers || []).slice(0, 5).map((player, idx) => (
              <Link key={player.id} href={`/player/${player.id}`}>
                <a className={cn("flex items-center justify-between py-2 px-2 hover:bg-accent/40 transition-colors group rounded", idx % 2 === 1 && "bg-muted/30")}>
                  <div className="flex items-center gap-2.5">
                    <span className={cn(
                      "text-xs font-bold w-4 text-center flex-shrink-0",
                      idx === 0 ? "text-amber-600 dark:text-amber-400" : idx === 1 ? "text-gray-400" : idx === 2 ? "text-orange-400" : "text-muted-foreground"
                    )}>
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <span className="text-sm font-semibold text-foreground group-hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block">{player.name}</span>
                      <span className="text-[10px] text-muted-foreground">{player.teamShort}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground dark:text-emerald-400 font-mono tabular-nums flex-shrink-0">{player.dnaScore}</span>
                </a>
              </Link>
            ))}
          </div>
        )}
      </Card>

      {/* Analytics Cards stacked */}
      {analyticsCards.length > 0 && (
        <div className="space-y-2">
          {analyticsCards.map((card, idx) => {
            const cfg = cardConfig[card.type] || cardConfig.stat;
            return (
              <div
                key={idx}
                className={cn("bg-card border border-border rounded-xl p-3 border-l-4", cfg.border)}
                data-testid={`sidebar-analytics-${card.type}`}
              >
                <span className={cn("inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mb-1.5", cfg.badge)}>
                  {cfg.icon}
                  {card.title}
                </span>
                <span className={cn(
                  "text-xl font-bold font-mono tabular-nums block",
                  card.type === "player" ? "text-emerald-600 dark:text-emerald-400" : card.type === "matchup" ? "text-blue-600 dark:text-blue-400" : "text-purple-600 dark:text-purple-400"
                )}>
                  {card.value}
                </span>
                <p className="text-muted-foreground text-[11px] mt-1 leading-snug line-clamp-2">{card.description}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Upcoming Matches */}
      <Card className="p-4 bg-card border-border" data-testid="upcoming-matches-sidebar">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
            <span className="w-1 h-3.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <Calendar size={14} className="text-muted-foreground" />
            Upcoming
          </h3>
          <Link href="/matches">
            <a className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300">All →</a>
          </Link>
        </div>
        {matchesLoading ? (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-14 rounded" />)}
          </div>
        ) : (
          <div className="divide-y divide-border/30">
            {nextMatches.map((m) => (
              <Link key={m.id} href={`/matches/${m.id}`}>
                <a className="block py-2 hover:bg-accent/40 transition-colors rounded px-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-sm text-foreground">
                      <span style={{ color: teamColors[m.homeTeam] }}>{m.homeTeam}</span>
                      {" vs "}
                      <span style={{ color: teamColors[m.awayTeam] }}>{m.awayTeam}</span>
                    </span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{formatMatchDate(m.date, m.day)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <MapPin size={10} />
                    <span className="truncate">{m.venue.split(",")[0]}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        )}
      </Card>
    </aside>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { data: allArticles, isLoading: articlesLoading } = useQuery<Article[]>({ queryKey: ["/api/articles"] });
  const { data: analyticsCardsData, isLoading: analyticsLoading } = useQuery<AnalyticsCard[]>({ queryKey: ["/api/articles/analytics-cards"] });
  const { data: scheduleData } = useQuery<ScheduleMatch[]>({ queryKey: ["/api/schedule"] });

  const { featuredArticle, articlesByMatch, ungroupedArticles } = useMemo(() => {
    if (!allArticles || allArticles.length === 0) {
      return { featuredArticle: undefined, articlesByMatch: new Map<number, Article[]>(), ungroupedArticles: [] as Article[] };
    }

    const featuredArticle = allArticles.find((a) => a.featured);

    // Group by matchId (exclude featured from feed)
    const feedArticles = allArticles.filter((a) => a.id !== featuredArticle?.id);
    const byMatch = new Map<number, Article[]>();
    const ungrouped: Article[] = [];

    for (const article of feedArticles) {
      if (article.matchId) {
        const existing = byMatch.get(article.matchId) || [];
        existing.push(article);
        byMatch.set(article.matchId, existing);
      } else {
        ungrouped.push(article);
      }
    }

    return { featuredArticle, articlesByMatch: byMatch, ungroupedArticles: ungrouped };
  }, [allArticles]);

  if (articlesLoading) {
    return (
      <div className="pb-8" data-testid="home-page">
        <div className="sticky top-14 z-40 bg-background/95 border-b border-border h-10 flex items-center px-4 gap-3 overflow-hidden">
          {[...Array(8)].map((_, i) => <Skeleton key={i} className="flex-shrink-0 h-6 w-[160px] rounded" />)}
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Skeleton className="h-[300px] rounded-xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-[180px] rounded-xl" />)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8 space-y-3">
              {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-[70px] rounded-lg" />)}
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-3">
              <Skeleton className="h-56 rounded-lg" />
              <Skeleton className="h-44 rounded-lg" />
              <Skeleton className="h-44 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-8" data-testid="home-page">
      {/* A) Score Ticker */}
      <ScoreTicker />

      {/* B) Featured Article Hero */}
      <AnalyticsDashboardHeader
        featuredArticle={featuredArticle}
        analyticsCard={analyticsCardsData?.[0]}
      />

      {/* C) Article Feed + Sidebar */}
      <main className="max-w-7xl mx-auto px-4 pt-5" data-testid="main-content">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 rounded-full bg-emerald-500 flex-shrink-0" />
              <h2 className="font-display font-bold text-base text-foreground">Analytics Feed</h2>
            </div>
            <ArticleFeed
              articlesByMatch={articlesByMatch}
              ungroupedArticles={ungroupedArticles}
              schedule={scheduleData || []}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Sidebar analyticsCards={analyticsCardsData || []} />
          </div>
        </div>
      </main>
    </div>
  );
}
