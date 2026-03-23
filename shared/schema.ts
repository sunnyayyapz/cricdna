// CricketDNA shared types — no DB for MVP, just TypeScript interfaces

export type DriftType = 'GROWTH' | 'DECLINE' | 'VOLATILITY' | 'RECOVERY';
export type DriftSeverity = 'high' | 'medium' | 'low';
export type PlayerRole = 'Batter' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
export type BattingStyle = 'RHB' | 'LHB';
export type BowlingStyle = 'RF' | 'RMF' | 'RFM' | 'RMS' | 'LF' | 'LFM' | 'LMS' | 'RA' | 'RAO' | 'SLA' | 'SLW' | 'RM' | 'N/A';
export type TrendDirection = 'improving' | 'declining' | 'stable' | 'recovery';
export type Format = 'Test' | 'ODI' | 'T20I' | 'IPL';

export interface DriftEvent {
  id: string;
  playerId: string;
  type: DriftType;
  dimension: string;
  magnitude: string;
  period: string;
  oppositionContext: string;
  conditionsContext: string;
  narrative: string;
  fantasySignal: string;
  severity: DriftSeverity;
  detectedAt: string;
}

export interface FormatStats {
  format: Format;
  matches: number;
  innings?: number;
  runs?: number;
  average?: number;
  strikeRate?: number;
  hundreds?: number;
  fifties?: number;
  highScore?: string;
  wickets?: number;
  bowlingAverage?: number;
  economy?: number;
  bestBowling?: string;
}

export interface RadarDimension {
  dimension: string;
  current: number;
  peak: number;
}

export interface CareerTimelinePoint {
  period: string;
  dnaScore: number;
  label?: string;
}

export interface InningsDataPoint {
  match: number;
  score?: number;
  wickets?: number;
  economy?: number;
  label?: string;
}

export interface DismissalPatterns {
  caught: number;
  bowled: number;
  lbw: number;
  runOut: number;
  stumped: number;
  hitWicket: number;
}

export interface PhasePerformance {
  phase: string;
  battingAvg?: number;
  strikeRate?: number;
  runs?: number;
  wickets?: number;
  economy?: number;
}

export interface Player {
  id: string;
  name: string;
  country: string;
  flag: string;
  role: PlayerRole;
  battingStyle: BattingStyle;
  bowlingStyle: BowlingStyle;
  age: number;
  dnaScore: number;
  dnaScoreTrend: TrendDirection;
  formats: Format[];
  formatStats: FormatStats[];
  careerTimeline: CareerTimelinePoint[];
  radarData: RadarDimension[];
  driftEvents: DriftEvent[];
  inningsData: InningsDataPoint[];
  dismissalPatterns: DismissalPatterns;
  phaseData: PhasePerformance[];
  // Quick stats
  totalMatches: number;
  totalRuns?: number;
  totalWickets?: number;
  highestScore?: string;
  bestBowling?: string;
  latestDriftAlert?: string;
  iccRanking?: number;
}

export interface CompareResponse {
  player1: Player;
  player2: Player;
}

export interface PlayersListResponse {
  players: Player[];
  total: number;
}
