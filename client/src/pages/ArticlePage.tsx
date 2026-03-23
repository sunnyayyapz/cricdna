import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar, User, BarChart3, Table2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  CartesianGrid,
} from "recharts";

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

interface Player {
  id: number;
  name: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: string;
  dnaScore: number;
  keyInsight: string;
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  "pitch-report": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "toss-report": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "match-preview": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  rankings: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  analysis: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

function categoryLabel(cat: string) {
  return cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Page Component ────────────────────────────────────────────────────────────

export default function ArticlePage() {
  const [, params] = useRoute("/article/:slug");
  const slug = params?.slug || "";
  const [, navigate] = useLocation();

  const { data: article, isLoading } = useQuery<Article>({
    queryKey: ["/api/articles", slug],
    queryFn: async () => {
      const res = await fetch(`/api/articles/${slug}`);
      if (!res.ok) throw new Error("Article not found");
      return res.json();
    },
    enabled: !!slug,
  });

  const { data: allArticles } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: allPlayers } = useQuery<Player[]>({
    queryKey: ["/api/allplayers"],
    enabled: !!article && article.relatedPlayerIds.length > 0,
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-48 w-full rounded-xl" />
        <div className="space-y-3">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-muted-foreground text-lg">Article not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-emerald-400 hover:underline"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const relatedPlayers =
    allPlayers?.filter((p) => article.relatedPlayerIds.includes(p.id)) || [];

  const relatedArticles = (allArticles || [])
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const paragraphs = article.content.split("\n\n");

  return (
    <div className="pb-12" data-testid="article-page">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
          data-testid="back-button"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold border",
              categoryColors[article.category] || categoryColors.analysis
            )}
          >
            {categoryLabel(article.category)}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar size={12} />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={12} />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <User size={12} />
            {article.author}
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
          {article.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {article.subtitle}
        </p>

        {/* Chart Data — Recharts BarChart */}
        {article.chartData && article.chartData.length > 0 && (
          <div className="bg-card border border-border rounded-xl p-4 mb-6" data-testid="article-chart">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 size={14} className="text-cyan-400" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Data Visualization</span>
            </div>
            <div className="h-48 sm:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={article.chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 11, fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#a1a1aa" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#18181b",
                      border: "1px solid #3f3f46",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    labelStyle={{ color: "#a1a1aa" }}
                    itemStyle={{ color: "#e4e4e7" }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {article.chartData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color || "#10b981"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Data Table — styled HTML table */}
        {article.dataTable && article.dataTable.rows.length > 0 && (
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-6" data-testid="article-data-table">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-accent/30">
              <Table2 size={14} className="text-amber-400" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Data Table</span>
              <span className="text-[10px] text-muted-foreground/60 ml-auto">{article.dataTable.rows.length} rows</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {article.dataTable.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-3 py-2 text-left text-[11px] font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {article.dataTable.rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className={cn(
                        "border-b border-border/50 hover:bg-accent/30 transition-colors",
                        rowIdx % 2 === 0 ? "bg-transparent" : "bg-accent/10"
                      )}
                    >
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className="px-3 py-2 text-xs text-foreground/80 whitespace-nowrap font-mono"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-5">
          {paragraphs.map((para, idx) => {
            if (para.startsWith("**") && para.includes("**")) {
              const parts = para.split(/\*\*/g);
              return (
                <p key={idx} className="text-base text-foreground/90 leading-relaxed">
                  {parts.map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-foreground font-semibold">
                        {part}
                      </strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            // Handle italic with *text*
            if (para.includes("*") && !para.startsWith("**")) {
              const parts = para.split(/\*/g);
              return (
                <p key={idx} className="text-base text-foreground/90 leading-relaxed">
                  {parts.map((part, i) =>
                    i % 2 === 1 ? (
                      <em key={i} className="text-foreground/70">{part}</em>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            return (
              <p key={idx} className="text-base text-foreground/90 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
            {article.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs text-muted-foreground border-border"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>

      {/* Related Players */}
      {relatedPlayers.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            Related Players
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedPlayers.map((player) => (
              <Link key={player.id} href={`/player/${player.id}`}>
                <a
                  className="group flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
                  data-testid={`related-player-${player.id}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate group-hover:text-emerald-400 transition-colors">
                      {player.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{player.teamShort}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-emerald-400 border-emerald-500/30 font-bold text-xs flex-shrink-0"
                  >
                    {player.dnaScore}
                  </Badge>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* More Stories */}
      {relatedArticles.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((a) => (
              <Link key={a.id} href={`/article/${a.slug}`}>
                <a
                  className="group block rounded-lg border border-border bg-card p-4 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all"
                  data-testid={`more-story-${a.slug}`}
                >
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border mb-2",
                      categoryColors[a.category] || categoryColors.analysis
                    )}
                  >
                    {categoryLabel(a.category)}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-emerald-400 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground/60 text-[11px] mt-1.5">{a.author} · {a.readTime}</p>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
