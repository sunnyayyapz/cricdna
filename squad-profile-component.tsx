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
