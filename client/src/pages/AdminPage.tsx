import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  XCircle,
  Clock,
  GitCommit,
  FileText,
  Globe,
  ChevronDown,
  ChevronUp,
  Activity,
  Newspaper,
  Link as LinkIcon,
} from "lucide-react";
import { useState } from "react";

interface PublishEntry {
  date: string;
  timestamp: string;
  commitHash: string;
  articlesCount: number;
  articleTitles: string[];
  matchesCovered: string[];
  sources: string[];
  status: "success" | "failed";
  notes: string;
}

function formatDate(ts: string) {
  const d = new Date(ts);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(ts: string) {
  const d = new Date(ts);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
}

function timeSince(ts: string) {
  const now = new Date();
  const d = new Date(ts);
  const hours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function PublishCard({ entry, isLatest }: { entry: PublishEntry; isLatest: boolean }) {
  const [expanded, setExpanded] = useState(isLatest);

  return (
    <Card
      className={cn(
        "border-border bg-card overflow-hidden",
        isLatest && "ring-1 ring-emerald-500/30"
      )}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-accent/30 transition-colors"
        data-testid={`publish-entry-${entry.date}`}
      >
        <div className="flex items-center gap-3">
          {entry.status === "success" ? (
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
          ) : (
            <XCircle size={18} className="text-red-500 flex-shrink-0" />
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{formatDate(entry.timestamp)}</span>
              {isLatest && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded">
                  Latest
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{formatTime(entry.timestamp)} · {timeSince(entry.timestamp)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-sm font-bold text-foreground font-mono">{entry.articlesCount}</span>
            <span className="text-xs text-muted-foreground ml-1">articles</span>
          </div>
          {expanded ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-border p-4 space-y-4">
          {/* Status row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1 flex items-center gap-1">
                <Activity size={10} /> Status
              </div>
              <span className={cn("text-sm font-semibold", entry.status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500")}>
                {entry.status === "success" ? "Published" : "Failed"}
              </span>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1 flex items-center gap-1">
                <Newspaper size={10} /> Articles
              </div>
              <span className="text-sm font-semibold text-foreground">{entry.articlesCount}</span>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1 flex items-center gap-1">
                <GitCommit size={10} /> Commit
              </div>
              <span className="text-sm font-semibold text-foreground font-mono">{entry.commitHash}</span>
            </div>
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1 flex items-center gap-1">
                <Globe size={10} /> Matches
              </div>
              <span className="text-sm font-semibold text-foreground">{entry.matchesCovered.length}</span>
            </div>
          </div>

          {/* Notes */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1 font-medium">Notes</div>
            <p className="text-sm text-foreground leading-relaxed">{entry.notes}</p>
          </div>

          {/* Articles list */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium flex items-center gap-1">
              <FileText size={10} /> Articles Published ({entry.articlesCount})
            </div>
            <div className="space-y-1">
              {entry.articleTitles.map((title, idx) => (
                <div key={idx} className={cn("flex items-start gap-2 py-1.5 px-2 rounded text-sm", idx % 2 === 1 && "bg-muted/20")}>
                  <span className="text-muted-foreground text-xs font-mono w-5 flex-shrink-0 pt-0.5">{idx + 1}.</span>
                  <span className="text-foreground leading-snug">{title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Matches covered */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium">Matches Covered</div>
            <div className="flex flex-wrap gap-2">
              {entry.matchesCovered.map((match, idx) => (
                <Badge key={idx} variant="outline" className="text-xs font-medium">
                  {match}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2 font-medium flex items-center gap-1">
              <LinkIcon size={10} /> Sources Used
            </div>
            <div className="space-y-1">
              {entry.sources.map((source, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default function AdminPage() {
  const { data: log, isLoading } = useQuery<PublishEntry[]>({
    queryKey: ["/api/admin/publish-log"],
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-32 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
        <Skeleton className="h-24 rounded-xl" />
      </div>
    );
  }

  const entries = log || [];
  const latest = entries[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6" data-testid="admin-page">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold font-display text-foreground mb-1">Publish Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Daily auto-publish pipeline status. Articles are generated and deployed every day at 6:00 AM PDT.
        </p>
      </div>

      {/* Quick stats */}
      {latest && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <Card className="p-4 bg-card border-border text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Last Publish</div>
            <div className="text-sm font-semibold text-foreground">{timeSince(latest.timestamp)}</div>
          </Card>
          <Card className="p-4 bg-card border-border text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Status</div>
            <div className={cn("text-sm font-semibold", latest.status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500")}>
              {latest.status === "success" ? "Live" : "Failed"}
            </div>
          </Card>
          <Card className="p-4 bg-card border-border text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Total Runs</div>
            <div className="text-sm font-semibold text-foreground">{entries.length}</div>
          </Card>
          <Card className="p-4 bg-card border-border text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Next Run</div>
            <div className="text-sm font-semibold text-foreground">6:00 AM PDT</div>
          </Card>
        </div>
      )}

      {/* Publish history */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1 h-4 rounded-full bg-emerald-500 flex-shrink-0" />
        <h2 className="font-display font-bold text-base text-foreground">Publish History</h2>
      </div>

      <div className="space-y-3">
        {entries.map((entry, idx) => (
          <PublishCard key={entry.date} entry={entry} isLatest={idx === 0} />
        ))}
      </div>

      {entries.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          No publish runs yet. The first run is scheduled for 6:00 AM PDT tomorrow.
        </div>
      )}
    </div>
  );
}
