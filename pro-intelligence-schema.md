# Pro Player Intelligence Schema

Data designed for professional cricketers, coaches, and analyst teams — not just fans.

## New Interfaces

```typescript
// Wagon-wheel style scoring zone data
export interface ScoringZone {
  zone: string; // "Third Man", "Point", "Cover", "Mid-off", "Straight", "Mid-on", "Midwicket", "Square Leg", "Fine Leg"
  runsScored: number;
  ballsFaced: number;
  boundaries: number; // 4s
  sixes: number;
  dotBalls: number;
  strikeRate: number;
  shotTypes: string; // dominant shot type(s) — e.g., "Cut, Late Cut" or "Pull, Hook" or "Drive, Loft"
}

// For bowlers: where they concede/take wickets
export interface BowlingZone {
  zone: string; // "Short", "Good Length", "Full", "Yorker", "Wide Outside Off", "Wide Down Leg"
  ballsBowled: number;
  runsConceded: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  description: string; // tactical note — e.g., "Primary wicket-taking length, generates seam movement"
}

// Situational splits
export interface SituationalSplit {
  situation: string; // "Batting First", "Chasing", "Chasing 180+", "Under Pressure (RRR > 10)", "Batting at #3", "Batting at #4", "First 10 balls", "After 30 balls"
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  narrative: string; // 1-2 sentence tactical note
}

// For bowlers: situational bowling
export interface BowlingSituationalSplit {
  situation: string; // "Defending", "Bowling first", "Death (18-20 overs)", "Powerplay with new ball", "After dropped catch", "When team total > 180"
  overs: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  narrative: string;
}

// Matchup threat assessment for upcoming IPL 2026
export interface ThreatMatchup {
  opponentId: number;
  opponentName: string;
  opponentTeam: string;
  threatLevel: "extreme" | "high" | "moderate" | "low";
  record: string; // e.g., "42 balls, 68 runs, 2 dismissals"
  tacticalNote: string; // 2-3 sentences of coaching-level tactical analysis
  suggestedPlan: string; // 1-2 sentences of what to DO about this threat
}

// Coaching-level tactical recommendations
export interface TacticalRecommendation {
  category: string; // "Batting", "Bowling", "Fielding", "Mental", "Fitness"
  priority: "critical" | "high" | "medium";
  title: string; // Short title — e.g., "Expand leg-side scoring vs left-arm spin"
  analysis: string; // 3-4 sentences of WHY this matters, backed by data
  actionPlan: string; // 2-3 sentences of specific drills, adjustments, or approaches
}

// The complete pro intelligence package
export interface ProIntelligence {
  playerId: number;
  
  // Scoring zones (for batters/WK-batters/all-rounders who bat)
  scoringZones: ScoringZone[];
  
  // Bowling zones (for bowlers/all-rounders who bowl)
  bowlingZones: BowlingZone[];
  
  // Situational awareness
  battingSituational: SituationalSplit[]; // For batters
  bowlingSituational: BowlingSituationalSplit[]; // For bowlers
  
  // Threat matrix — top 5 opponents they need to prepare for
  threatMatchups: ThreatMatchup[];
  
  // Coaching tactical recommendations — 3-4 per player
  tacticalRecommendations: TacticalRecommendation[];
  
  // Clutch performance data
  clutchStats: {
    superOverRecord: string; // e.g., "2 from 3, scored 14(6) avg"
    lastOverFinishes: number; // wins batting in last over
    totalLastOverAttempts: number;
    dotBallPctUnderPressure: number; // when RRR > 12
    boundaryPctUnderPressure: number;
    avgWhenChasing180Plus: number;
    srWhenChasing180Plus: number;
    performanceInEliminators: string; // narrative summary
  };
  
  // Coach's pre-match briefing note
  coachBriefing: string; // 4-6 sentences — what the coach would say about this player in a team meeting. Tactical, specific, actionable.
}
```

## Rules for data generation

CRITICAL: This data is for PLAYERS AND COACHES, not fans. Every piece of information should answer "what do I DO with this?"

### Scoring Zones (batters/all-rounders)
- 9 zones around the wicket (Think wagon wheel sectors)
- Include dominant shot types per zone (not generic — "late cut behind square" not just "cut")
- Runs, balls, boundaries, sixes, dots, SR per zone
- This tells the player WHERE they're productive and WHERE they're vulnerable

### Bowling Zones (bowlers/all-rounders)
- 6 length/line categories
- Balls bowled, runs, wickets, economy, dot %
- Tactical description of what happens at each length
- This tells the bowler where their weapons are and where batters attack them

### Situational Splits
- Batters: 6-8 situations (first/second innings, chasing big totals, batting positions, early in innings, set batter, under pressure)
- Bowlers: 5-6 situations (defending, bowling first, death, powerplay, after being hit, clutch moments)
- Each with a tactical narrative — not just numbers

### Threat Matchups
- Top 5 most dangerous opponents from IPL 2026 player pool
- Based on head-to-head data + stylistic matchups
- Must include tactical note AND a suggested counter-plan
- This is what the coaching staff would show in a pre-match presentation

### Tactical Recommendations
- 3-4 per player
- Each has: category, priority, title, deep analysis (with data), and an action plan
- Think: what would a batting coach tell Kohli? What drills would a bowling coach set for Bumrah?
- Should reference specific technical adjustments, not vague suggestions

### Clutch Stats
- Super over record, last-over finishes, pressure situations
- Quantitative where possible, narrative for qualitative

### Coach Briefing
- 4-6 sentences written AS IF the head coach is briefing the team
- "Against [player], we need to..."
- Specific, actionable, references data

## Players (30)
Same 30 as before — IDs 1-30. Roles determine which fields matter:
- Batters/WK-batters: scoringZones, battingSituational, threatMatchups (vs bowlers), tacticalRecommendations, clutchStats, coachBriefing
- Bowlers: bowlingZones, bowlingSituational, threatMatchups (vs batters), tacticalRecommendations, clutchStats, coachBriefing
- All-rounders: ALL fields (both scoring and bowling zones, both situational splits)
