import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Clock,
  Calendar,
  MapPin,
  Dna,
  Trophy,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  User,
} from "lucide-react";
import { useRef } from "react";

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

// ─── Helpers ───────────────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  preview: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  analysis: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "player-story": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  rankings: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  breaking: "bg-red-500/20 text-red-400 border-red-500/30",
  opinion: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

function categoryLabel(cat: string) {
  return cat
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function timeAgo(dateStr: string) {
  const now = new Date();
  const d = new Date(dateStr);
  const diffMs = now.getTime() - d.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

function formatMatchDate(date: string, day: string) {
  const d = new Date(date + "T00:00:00");
  return `${day}, ${d.toLocaleDateString("en-IN", { month: "short", day: "numeric" })}`;
}

// ─── Sub-Components ────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border",
        categoryColors[category] || categoryColors.opinion
      )}
    >
      {categoryLabel(category)}
    </span>
  );
}

// ─── A) Live Scores Bar ────────────────────────────────────────────────────────

function LiveScoresBar() {
  const { data: matches, isLoading } = useQuery<ScheduleMatch[]>({
    queryKey: ["/api/schedule/upcoming"],
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return (
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex gap-3 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-14 w-52 flex-shrink-0 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  const upcoming = (matches || []).slice(0, 10);

  return (
    <div className="border-b border-border bg-card/50" data-testid="live-scores-bar">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto py-2.5 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {upcoming.map((m) => (
            <Link key={m.id} href={`/matches/${m.id}`}>
              <a
                className="flex-shrink-0 flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-background/80 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all min-w-[200px]"
                data-testid={`match-card-${m.id}`}
              >
                <div className="flex flex-col items-center gap-0.5 min-w-0">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className="text-foreground">{m.homeTeam}</span>
                    <span className="text-muted-foreground text-xs">vs</span>
                    <span className="text-foreground">{m.awayTeam}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={10} />
                    <span>{formatMatchDate(m.date, m.day)}</span>
                    <span className="text-emerald-500">•</span>
                    <span>{m.time}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground/70 truncate max-w-[180px]">
                    {m.venue.split(",")[0]}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── B) Hero Article ───────────────────────────────────────────────────────────

function HeroArticle() {
  const { data: article, isLoading } = useQuery<Article>({
    queryKey: ["/api/articles/featured"],
  });

  if (isLoading || !article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Skeleton className="w-full aspect-[21/9] rounded-xl" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6" data-testid="hero-article">
      <Link href={`/article/${article.slug}`}>
        <a className="group block relative overflow-hidden rounded-xl aspect-[21/9] sm:aspect-[21/9]">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <CategoryBadge category={article.category} />
              <span className="text-xs text-white/70">{article.readTime}</span>
            </div>
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 group-hover:text-emerald-300 transition-colors">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-white/80 line-clamp-2 max-w-3xl">
              {article.subtitle}
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-white/60">
              <span className="flex items-center gap-1">
                <User size={12} />
                {article.author}
              </span>
              <span>{timeAgo(article.publishedAt)}</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

// ─── C) Quick Links Strip ──────────────────────────────────────────────────────

function QuickLinksStrip() {
  const links = [
    { label: "IPL 2026 Schedule", target: "/matches" },
    { label: "Power Rankings", slug: "ipl-2026-power-rankings-all-10-teams-before-ball-one" },
    { label: "Injury Updates", slug: "injury-crisis-12-key-players-miss-ipl-2026-start" },
    { label: "Team Previews", target: "/explore" },
  ];

  const [, navigate] = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4" data-testid="quick-links">
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => {
              if (link.target) {
                navigate(link.target);
              } else if (link.slug) {
                navigate(`/article/${link.slug}`);
              }
            }}
            className="flex-shrink-0 px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
            data-testid={`quick-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── D) Article Cards ──────────────────────────────────────────────────────────

function HorizontalArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a
        className="group flex gap-4 p-3 rounded-lg border border-border bg-card hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all"
        data-testid={`article-card-${article.slug}`}
      >
        <div className="flex-shrink-0 w-28 sm:w-36 aspect-[3/2] rounded-md overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between min-w-0 flex-1 py-0.5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CategoryBadge category={article.category} />
            </div>
            <h3 className="font-semibold text-sm leading-snug text-foreground line-clamp-2 group-hover:text-emerald-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5 hidden sm:block">
              {article.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-1">
            <span>{article.author}</span>
            <span>•</span>
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

function VerticalArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a
        className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all"
        data-testid={`article-card-${article.slug}`}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <CategoryBadge category={article.category} />
            <span className="text-[11px] text-muted-foreground">{article.readTime}</span>
          </div>
          <h3 className="font-semibold text-sm leading-snug text-foreground line-clamp-2 group-hover:text-emerald-400 transition-colors">
            {article.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
            {article.subtitle}
          </p>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-2">
            <span>{article.author}</span>
            <span>•</span>
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

function CompactArticleLink({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <a
        className="group flex items-start gap-2 py-2.5 border-b border-border/50 last:border-0 hover:bg-accent/50 px-2 -mx-2 rounded transition-colors"
        data-testid={`top-story-${article.slug}`}
      >
        <ChevronRight size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
        <span className="text-sm text-foreground leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors">
          {article.title}
        </span>
      </a>
    </Link>
  );
}

// ─── D) Main Content Area ──────────────────────────────────────────────────────

function MainContentArea() {
  const { data: articles, isLoading: articlesLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: topPlayers, isLoading: playersLoading } = useQuery<Player[]>({
    queryKey: ["/api/allplayers", "?sort=dnaScore&limit=5"],
    queryFn: async () => {
      const res = await fetch("/api/allplayers?sort=dnaScore&limit=5");
      return res.json();
    },
  });

  const { data: upcomingMatches, isLoading: matchesLoading } = useQuery<ScheduleMatch[]>({
    queryKey: ["/api/schedule/upcoming"],
  });

  const nonFeatured = (articles || []).filter((a) => !a.featured);
  const feedArticles = nonFeatured.slice(0, 12);
  const topStories = nonFeatured.slice(0, 5);
  const nextMatches = (upcomingMatches || []).slice(0, 3);

  if (articlesLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-lg" />
            ))}
          </div>
          <div className="space-y-4">
            <Skeleton className="h-64 rounded-lg" />
            <Skeleton className="h-48 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6" data-testid="main-content">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Article Feed (2/3) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
            Latest Stories
          </h2>
          {feedArticles.map((article, idx) =>
            idx % 3 === 0 ? (
              <VerticalArticleCard key={article.id} article={article} />
            ) : (
              <HorizontalArticleCard key={article.id} article={article} />
            )
          )}
        </div>

        {/* RIGHT: Sidebar (1/3) */}
        <aside className="space-y-5">
          {/* Top Stories */}
          <Card className="p-4 bg-card border-border">
            <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
              <Trophy size={14} className="text-emerald-500" />
              Top Stories
            </h3>
            <div>
              {topStories.map((article) => (
                <CompactArticleLink key={article.id} article={article} />
              ))}
            </div>
          </Card>

          {/* DNA Leaderboard */}
          <Card className="p-4 bg-card border-border" data-testid="dna-leaderboard">
            <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
              <Dna size={14} className="text-emerald-500" />
              DNA Leaderboard
            </h3>
            {playersLoading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-8 rounded" />
                ))}
              </div>
            ) : (
              <div className="space-y-1">
                {(topPlayers || []).slice(0, 5).map((player, idx) => (
                  <Link key={player.id} href={`/player/${player.id}`}>
                    <a className="flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-accent/50 transition-colors group">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-muted-foreground w-4">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-sm font-medium text-foreground group-hover:text-emerald-400 transition-colors">
                            {player.name}
                          </span>
                          <span className="text-xs text-muted-foreground ml-1.5">
                            {player.teamShort}
                          </span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-emerald-400 border-emerald-500/30 font-bold text-xs"
                      >
                        {player.dnaScore}
                      </Badge>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </Card>

          {/* Upcoming Matches */}
          <Card className="p-4 bg-card border-border" data-testid="upcoming-matches-sidebar">
            <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
              <Calendar size={14} className="text-emerald-500" />
              Upcoming Matches
            </h3>
            {matchesLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-14 rounded" />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {nextMatches.map((m) => (
                  <Link key={m.id} href={`/matches/${m.id}`}>
                    <a className="block p-2.5 rounded-md border border-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-foreground">
                          {m.homeTeam} vs {m.awayTeam}
                        </span>
                        <span className="text-[10px] text-emerald-500 font-medium">
                          Match {m.matchNumber}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Calendar size={10} />
                        <span>{formatMatchDate(m.date, m.day)}</span>
                        <span>•</span>
                        <span>{m.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 mt-0.5">
                        <MapPin size={9} />
                        <span className="truncate">{m.venue}</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </Card>
        </aside>
      </div>
    </div>
  );
}

// ─── E) Category Sections (Horizontal Scrolling) ──────────────────────────────

function CategoryRow({ title, category }: { title: string; category: string }) {
  const { data: articles } = useQuery<Article[]>({
    queryKey: ["/api/articles", `?category=${category}`],
    queryFn: async () => {
      const res = await fetch(`/api/articles?category=${category}`);
      return res.json();
    },
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  if (!articles || articles.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6" data-testid={`category-${category}`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display font-bold text-lg text-foreground">{title}</h2>
        <div className="flex gap-1">
          <button
            onClick={() => scroll("left")}
            className="p-1 rounded-md border border-border hover:bg-accent transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1 rounded-md border border-border hover:bg-accent transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {articles.map((article) => (
          <div key={article.id} className="flex-shrink-0 w-72">
            <VerticalArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="pb-10 space-y-6" data-testid="home-page">
      <LiveScoresBar />
      <HeroArticle />
      <QuickLinksStrip />
      <MainContentArea />
      <CategoryRow title="Match Previews" category="preview" />
      <CategoryRow title="Player Stories" category="player-story" />
    </div>
  );
}
