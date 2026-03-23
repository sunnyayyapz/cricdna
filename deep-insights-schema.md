# Deep Insights Schema Additions

Add these new interfaces and fields to the Player type in players.ts:

## New Interfaces

```typescript
export interface FormatSplit {
  format: string; // "T20I", "IPL", "Other T20"
  matches: number;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  highest: number;
  // For bowlers:
  wickets?: number;
  bowlingAvg?: number;
  economy?: number;
}

export interface BowlingAttackSplit {
  type: string; // "vs Pace", "vs Spin"
  innings: number;
  runs: number;
  balls: number;
  strikeRate: number;
  average: number;
  dismissals: number;
  dotBallPct: number; // percentage
}

export interface VenueStat {
  venue: string; // e.g. "M. Chinnaswamy, Bengaluru"
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  // For bowlers:
  wickets?: number;
  economy?: number;
}

// For bowlers: bowling phase data
export interface BowlerPhaseData {
  phase: string; // "Powerplay", "Middle", "Death"
  overs: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  average: number;
}
```

## Updated Player Interface — add these fields

```typescript
// Inside Player interface, ADD:
formatSplits: FormatSplit[];
bowlingAttackSplits: BowlingAttackSplit[]; // vs pace / vs spin (for batters)
venueStats: VenueStat[]; // top 4-5 IPL venues
strengthsNarrative: string; // 2-3 sentence analytical narrative about strengths
weaknessesNarrative: string; // 2-3 sentence analytical narrative about weaknesses
analystNote: string; // 3-5 sentence expert analyst overview — deeper than keyInsight
bowlerPhaseData?: BowlerPhaseData[]; // Only for bowlers/all-rounders
```

## Rules for data generation

- formatSplits: T20I stats, IPL stats, and Other T20 (franchise outside IPL). Numbers should be realistic and sum up close to the overall stats.
- bowlingAttackSplits: Only for batters/WK-batters. vs Pace and vs Spin splits. 
- venueStats: Top 4-5 IPL venues where the player has played most. Realistic stats.
- strengthsNarrative: 2-3 sentences of ANALYTICAL writing about what makes this player strong. Reference specific stats, situations, conditions. Not just "he's a good player."
- weaknessesNarrative: 2-3 sentences about vulnerabilities. Reference specific opposition types, conditions, game situations where the player struggles.
- analystNote: 3-5 sentences of expert-level cricket analysis. Should read like a Cricbuzz or ESPNcricinfo analysis piece. Reference recent form, career trajectory, tactical insights, role evolution.
- bowlerPhaseData: For bowlers and all-rounders ONLY. Powerplay, Middle, Death overs bowling splits with overs, wickets, economy, dot ball %, average.
