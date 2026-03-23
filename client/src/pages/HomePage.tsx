import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Calendar,
  MapPin,
  Dna,
  Trophy,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  User,
  Zap,
  ArrowRight,
  Swords,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { useRef, useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: "preview" | "analysis" | "player-story" | "rankings" | "breaking" | "opinion";
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  featured: boolean;
  content: string;
  relatedPlayerIds: number[];
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
  preview: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  analysis: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "player-story": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  rankings: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  breaking: "bg-red-500/20 text-red-400 border-red-500/30",
  opinion: "bg-gray-500/20 text-gray-400 border-gray-500/30",
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

function SectionHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-display font-bold text-base text-foreground flex items-center gap-2", className)}>
      <span className="w-1 h-4 rounded-full bg-emerald-500 flex-shrink-0" />
      {children}
    </h2>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border", categoryColors[category] || categoryColors.opinion)}>
      {categoryLabel(category)}
    </span>
  );
}

// ─── A) Score Ticker ───────────────────────────────────────────────────────────

function ScoreTicker() {
  const { data: matches, isLoading } = useQuery<ScheduleMatch[]>({ queryKey: ["/api/schedule/upcoming"] });

  if (isLoading) {
    return (
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-border overflow-hidden">
        <div className="flex items-center gap-0 overflow-hidden">
          <div className="flex-shrink-0 px-3 flex items-center gap-1.5 border-r border-border h-10">
            <Skeleton className="w-2 h-2 rounded-full" />
            <Skeleton className="w-8 h-3" />
          </div>
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="flex-shrink-0 h-10 w-[180px]" />)}
        </div>
      </div>
    );
  }

  const upcoming = (matches || []).slice(0, 12);

  return (
    <div className="sticky top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-border overflow-hidden" data-testid="score-ticker">
      <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {/* Live badge */}
        <div className="flex-shrink-0 px-3 flex items-center gap-1.5 border-r border-border h-10">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">IPL</span>
        </div>

        {upcoming.map((m) => (
          <Link key={m.id} href={`/matches/${m.id}`}>
            <a
              className="flex-shrink-0 flex items-center gap-2 px-3 h-10 border-r border-border/50 hover:bg-accent/50 transition-colors"
              data-testid={`ticker-match-${m.id}`}
            >
              <span className="font-semibold text-xs" style={{ color: teamColors[m.homeTeam] }}>{m.homeTeam}</span>
              <span className="text-muted-foreground text-[10px]">vs</span>
              <span className="font-semibold text-xs" style={{ color: teamColors[m.awayTeam] }}>{m.awayTeam}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-[10px] text-amber-400">{formatMatchDate(m.date, m.day)}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── B) Hero Section — Split Design ────────────────────────────────────────────

function HeroSection({ article, analyticsCard }: { article: Article | undefined; analyticsCard: AnalyticsCard | undefined }) {
  const [, navigate] = useLocation();

  if (!article && !analyticsCard) {
    return (
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[320px] lg:min-h-[400px]">
          <Skeleton className="lg:col-span-7 rounded-l-xl h-full min-h-[280px]" />
          <Skeleton className="lg:col-span-5 rounded-r-xl h-full min-h-[280px]" />
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-4" data-testid="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[320px] lg:min-h-[400px]">

        {/* LEFT: Data Insight of the Day — 7 columns */}
        <div className="lg:col-span-7 bg-gradient-to-br from-card to-background rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border border-border lg:border-r-0 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-transparent pointer-events-none" />

          {/* Label */}
          <div className="flex items-center gap-2 mb-3 relative">
            <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              <Zap size={12} />
              Data Insight of the Day
            </span>
            <span className="text-muted-foreground/50 text-[10px]">Updated today</span>
          </div>

          {analyticsCard ? (
            <div className="relative flex-1 flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground font-display leading-tight mb-3">
                {analyticsCard.type === "matchup" ? analyticsCard.value : analyticsCard.title}
              </h1>

              {/* Big stat display */}
              <div className="bg-background/60 rounded-xl p-4 mb-3 border border-border">
                <div className="flex items-end gap-4">
                  <div>
                    <span className="text-4xl sm:text-5xl font-bold text-emerald-400 font-mono tabular-nums">
                      {analyticsCard.type === "stat" ? analyticsCard.value : analyticsCard.type === "player" ? analyticsCard.value : "94.7"}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {analyticsCard.type === "stat" ? "strike rate" : analyticsCard.type === "player" ? "" : "matchup rating"}
                    </span>
                  </div>
                  {/* Mini visual bars */}
                  <div className="flex-1 flex items-end gap-1 h-12 hidden sm:flex">
                    {[65, 80, 45, 92, 70, 88, 55, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-emerald-500/30" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-2">
                  {analyticsCard.description}
                </p>
              </div>

              <button
                onClick={() => navigate("/explore")}
                className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors group self-start"
                data-testid="hero-explore-cta"
              >
                Explore full analysis
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          )}
        </div>

        {/* RIGHT: Top Editorial Story — 5 columns */}
        {article ? (
          <Link href={`/article/${article.slug}`}>
            <a className="lg:col-span-5 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden border border-border lg:border-l-0 flex flex-col group" data-testid="hero-article">
              <div className="relative flex-shrink-0 h-48 lg:h-56 bg-accent">
                <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  IPL 2026
                </span>
              </div>
              <div className="flex-1 p-5 bg-card flex flex-col justify-between">
                <div>
                  <CategoryBadge category={article.category} />
                  <h2 className="text-lg font-bold text-foreground font-display leading-snug mt-2 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-3">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {article.subtitle}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-muted-foreground/60 text-xs">{article.author} · {timeAgo(article.publishedAt)}</span>
                  <span className="text-sm text-emerald-400 font-semibold">Read →</span>
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <div className="lg:col-span-5 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none border border-border lg:border-l-0">
            <Skeleton className="h-full min-h-[300px]" />
          </div>
        )}
      </div>
    </section>
  );
}

// ─── C) Analytics Strip ────────────────────────────────────────────────────────

function AnalyticsStrip({ cards }: { cards: AnalyticsCard[] }) {
  const cardConfig: Record<string, { border: string; badge: string; icon: React.ReactNode }> = {
    player: {
      border: "border-l-emerald-500",
      badge: "bg-emerald-500/15 text-emerald-400",
      icon: <Dna size={12} />,
    },
    matchup: {
      border: "border-l-blue-500",
      badge: "bg-blue-500/15 text-blue-400",
      icon: <Swords size={12} />,
    },
    stat: {
      border: "border-l-purple-500",
      badge: "bg-purple-500/15 text-purple-400",
      icon: <BarChart3 size={12} />,
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pt-4" data-testid="analytics-strip">
      <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible pb-2 lg:pb-0" style={{ scrollbarWidth: "none" }}>
        {cards.map((card, idx) => {
          const cfg = cardConfig[card.type] || cardConfig.stat;
          return (
            <div
              key={idx}
              className={cn(
                "min-w-[260px] lg:min-w-0 flex-shrink-0 lg:flex-shrink bg-card border border-border rounded-xl p-4 relative overflow-hidden border-l-4 h-[160px] flex flex-col",
                cfg.border
              )}
              data-testid={`analytics-card-${card.type}`}
            >
              {/* Badge */}
              <span className={cn("inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mb-2", cfg.badge)}>
                {cfg.icon}
                {card.title}
              </span>

              {/* Value */}
              <div className="flex-1 flex flex-col justify-center">
                <span className={cn(
                  "text-2xl font-bold font-mono tabular-nums leading-none",
                  card.type === "player" ? "text-emerald-400" : card.type === "matchup" ? "text-blue-400" : "text-purple-400"
                )}>
                  {card.value}
                </span>
                <p className="text-muted-foreground text-xs mt-1.5 leading-snug line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── D) Article Cards ──────────────────────────────────────────────────────────

function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="group block" data-testid={`article-card-${article.slug}`}>
        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-accent mb-2">
          <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        </div>
        <CategoryBadge category={article.category} />
        <h3 className="text-base font-bold text-foreground font-display leading-snug mt-1 mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground/60 text-xs">{article.author} · {timeAgo(article.publishedAt)}</p>
      </a>
    </Link>
  );
}

function ArticleListRow({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="flex gap-4 py-3 group" data-testid={`article-card-${article.slug}`}>
        <div className="flex-shrink-0 w-[120px] h-[80px] rounded-md overflow-hidden bg-accent">
          <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <CategoryBadge category={article.category} />
          <h3 className="text-sm font-semibold text-foreground leading-snug mt-0.5 mb-0.5 group-hover:text-emerald-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground/60 text-[11px]">{article.author} · {timeAgo(article.publishedAt)}</p>
        </div>
      </a>
    </Link>
  );
}

function CompactArticleLink({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="group flex items-start gap-2 py-2 border-b border-border/50 last:border-0 hover:bg-accent/50 px-2 -mx-2 rounded transition-colors" data-testid={`top-story-${article.slug}`}>
        <ChevronRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
        <span className="text-sm text-foreground leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors">{article.title}</span>
      </a>
    </Link>
  );
}

// ─── D) Main Content Grid (12-col) ────────────────────────────────────────────

function MainContentGrid({
  featuredPair,
  listArticles,
  topStories,
}: {
  featuredPair: Article[];
  listArticles: Article[];
  topStories: Article[];
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

  const nextMatches = (upcomingMatches || []).slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 pt-5" data-testid="main-content">
      <div className="grid grid-cols-12 gap-5">

        {/* ── Main content: 8 columns ────────────────────────────── */}
        <div className="col-span-12 lg:col-span-8 space-y-5">

          {/* Zone 1: Featured Stories 2-col */}
          {featuredPair.length > 0 && (
            <div>
              <SectionHeader className="mb-3">Featured</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featuredPair.map((a) => (
                  <FeaturedArticleCard key={a.id} article={a} />
                ))}
              </div>
            </div>
          )}

          {/* Zone 2: Article list rows */}
          {listArticles.length > 0 && (
            <div>
              <SectionHeader className="mb-2">Latest Stories</SectionHeader>
              <div className="divide-y divide-border/50">
                {listArticles.map((a) => (
                  <ArticleListRow key={a.id} article={a} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Sidebar: 4 columns ─────────────────────────────────── */}
        <aside className="col-span-12 lg:col-span-4 space-y-3">

          {/* Top Stories */}
          {topStories.length > 0 && (
            <Card className="p-4 bg-card border-border">
              <h3 className="font-display font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                <span className="w-1 h-3.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <Trophy size={14} className="text-emerald-500" />
                Top Stories
              </h3>
              <div>
                {topStories.map((a) => <CompactArticleLink key={a.id} article={a} />)}
              </div>
            </Card>
          )}

          {/* DNA Leaderboard */}
          <Card className="p-4 bg-card border-border" data-testid="dna-leaderboard">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
                <span className="w-1 h-3.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <Dna size={14} className="text-emerald-500" />
                DNA Leaderboard
              </h3>
              <Link href="/explore">
                <a className="text-xs text-emerald-400 hover:text-emerald-300">See all →</a>
              </Link>
            </div>
            {playersLoading ? (
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-8 rounded" />)}
              </div>
            ) : (
              <div className="divide-y divide-border/30">
                {(topPlayers || []).slice(0, 5).map((player, idx) => (
                  <Link key={player.id} href={`/player/${player.id}`}>
                    <a className="flex items-center justify-between py-2 px-1 hover:bg-accent/40 transition-colors group rounded">
                      <div className="flex items-center gap-2.5">
                        <span className={cn(
                          "text-xs font-bold w-4 text-center flex-shrink-0",
                          idx === 0 ? "text-amber-400" : idx === 1 ? "text-gray-400" : idx === 2 ? "text-orange-400" : "text-muted-foreground"
                        )}>
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors truncate block">{player.name}</span>
                          <span className="text-[10px] text-muted-foreground">{player.teamShort}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-emerald-400 font-mono tabular-nums flex-shrink-0">{player.dnaScore}</span>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </Card>

          {/* Upcoming Matches */}
          <Card className="p-4 bg-card border-border" data-testid="upcoming-matches-sidebar">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
                <span className="w-1 h-3.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <Calendar size={14} className="text-muted-foreground" />
                Upcoming Matches
              </h3>
              <Link href="/matches">
                <a className="text-xs text-emerald-400 hover:text-emerald-300">All →</a>
              </Link>
            </div>
            {matchesLoading ? (
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-16 rounded" />)}
              </div>
            ) : (
              <div className="divide-y divide-border/30">
                {nextMatches.map((m) => (
                  <Link key={m.id} href={`/matches/${m.id}`}>
                    <a className="block py-2.5 hover:bg-accent/40 transition-colors rounded px-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-bold text-sm text-foreground">
                          <span style={{ color: teamColors[m.homeTeam] }}>{m.homeTeam}</span>
                          {" vs "}
                          <span style={{ color: teamColors[m.awayTeam] }}>{m.awayTeam}</span>
                        </span>
                        <span className="text-[10px] text-amber-400 font-medium">{formatMatchDate(m.date, m.day)}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span>{m.time}</span>
                        <span>·</span>
                        <span className="truncate">{m.venue.split(",")[0]}</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </Card>
        </aside>
      </div>
    </main>
  );
}

// ─── E) Category Rows ──────────────────────────────────────────────────────────

function CategoryRow({ title, articles }: { title: string; articles: Article[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  if (articles.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 pt-2" data-testid={`category-row-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center justify-between mb-2">
        <SectionHeader>{title}</SectionHeader>
        <div className="flex gap-1">
          <button onClick={() => scroll("left")} className="p-1 rounded-md border border-border hover:bg-accent transition-colors" aria-label="Scroll left"><ChevronLeft size={16} /></button>
          <button onClick={() => scroll("right")} className="p-1 rounded-md border border-border hover:bg-accent transition-colors" aria-label="Scroll right"><ChevronRightIcon size={16} /></button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {articles.map((article) => (
          <div key={article.id} className="flex-shrink-0 w-72">
            <Link href={`/article/${article.slug}`}>
              <a className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all" data-testid={`cat-article-${article.slug}`}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <CategoryBadge category={article.category} />
                  <h3 className="font-semibold text-sm leading-snug text-foreground mt-1 line-clamp-2 group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground/60 text-[11px] mt-1">{article.author} · {timeAgo(article.publishedAt)}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { data: allArticles, isLoading: articlesLoading } = useQuery<Article[]>({ queryKey: ["/api/articles"] });
  const { data: analyticsCardsData, isLoading: analyticsLoading } = useQuery<AnalyticsCard[]>({ queryKey: ["/api/articles/analytics-cards"] });

  // Partition articles into non-overlapping sections
  const { hero, featuredPair, listArticles, topStories, catPreviews, catPlayerStories } = useMemo(() => {
    if (!allArticles || allArticles.length === 0) {
      return { hero: undefined, featuredPair: [], listArticles: [], topStories: [], catPreviews: [], catPlayerStories: [] };
    }

    const usedIds = new Set<number>();

    // Hero: featured article
    const hero = allArticles.find((a) => a.featured);
    if (hero) usedIds.add(hero.id);

    const remaining = allArticles.filter((a) => !usedIds.has(a.id));

    // Featured pair: first 2 non-featured articles (Zone 1)
    const featuredPair = remaining.slice(0, 2);
    featuredPair.forEach((a) => usedIds.add(a.id));

    // List articles: next 6 articles (Zone 2)
    const afterFeatured = remaining.filter((a) => !usedIds.has(a.id));
    const listArticles = afterFeatured.slice(0, 6);
    listArticles.forEach((a) => usedIds.add(a.id));

    // Top Stories sidebar: next 5 articles
    const afterList = afterFeatured.filter((a) => !usedIds.has(a.id));
    const topStories = afterList.slice(0, 5);
    topStories.forEach((a) => usedIds.add(a.id));

    // Category rows: everything remaining, split by category
    const tail = allArticles.filter((a) => !usedIds.has(a.id));
    const catPreviews = tail.filter((a) => a.category === "preview");
    const catPlayerStories = tail.filter((a) => a.category === "player-story");

    return { hero, featuredPair, listArticles, topStories, catPreviews, catPlayerStories };
  }, [allArticles]);

  const primaryAnalyticsCard = analyticsCardsData?.[0];

  if (articlesLoading) {
    return (
      <div className="pb-8" data-testid="home-page">
        {/* Ticker skeleton */}
        <div className="sticky top-14 z-40 bg-background/95 border-b border-border h-10 flex items-center px-4 gap-3 overflow-hidden">
          {[...Array(8)].map((_, i) => <Skeleton key={i} className="flex-shrink-0 h-6 w-[160px] rounded" />)}
        </div>
        {/* Hero skeleton */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <Skeleton className="lg:col-span-7 h-[400px] rounded-l-xl" />
            <Skeleton className="lg:col-span-5 h-[400px] rounded-r-xl" />
          </div>
        </div>
        {/* Analytics strip skeleton */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-[160px] rounded-xl" />)}
          </div>
        </div>
        {/* Content skeleton */}
        <div className="max-w-7xl mx-auto px-4 pt-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8 space-y-3">
              {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-[80px] rounded-lg" />)}
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
      <ScoreTicker />
      <HeroSection article={hero} analyticsCard={primaryAnalyticsCard} />
      {analyticsCardsData && analyticsCardsData.length > 0 && (
        <AnalyticsStrip cards={analyticsCardsData} />
      )}
      <MainContentGrid
        featuredPair={featuredPair}
        listArticles={listArticles}
        topStories={topStories}
      />
      {catPreviews.length > 0 && <CategoryRow title="Match Previews" articles={catPreviews} />}
      {catPlayerStories.length > 0 && <CategoryRow title="Player Stories" articles={catPlayerStories} />}
    </div>
  );
}
