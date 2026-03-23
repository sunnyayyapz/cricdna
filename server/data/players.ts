export interface DriftEvent {
  id: string;
  type: "GROWTH" | "DECLINE" | "VOLATILITY" | "RECOVERY";
  dimension: string;
  magnitude: string;
  period: string;
  oppositionContext: string;
  conditionsContext: string;
  narrative: string;
  fantasySignal: string;
  severity: "high" | "medium" | "low";
  detectedAt: string;
}

export interface PlayerStats {
  matches: number;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  highest: number;
  hundreds: number;
  fifties: number;
  wickets?: number;
  bowlingAvg?: number;
  economy?: number;
  bestBowling?: string;
}

export interface RadarPoint {
  axis: string;
  current: number;
  peak: number;
}

export interface TimelinePoint {
  period: string;
  dnaScore: number;
  innings: number;
}

export interface InningsScore {
  match: string;
  opponent: string;
  score: number;
  balls: number;
  date: string;
}

export interface PhaseData {
  phase: string;
  runs: number;
  strikeRate: number;
  average: number;
}

export interface Player {
  id: number;
  name: string;
  country: string;
  countryFlag: string;
  team: string;
  teamShort: string;
  teamColor: string;
  role: "Batter" | "Bowler" | "All-rounder" | "Wicketkeeper-Batter";
  battingStyle: string;
  bowlingStyle: string;
  age: number;
  dnaScore: number;
  dnaScoreTrend: "improving" | "declining" | "stable" | "recovery";
  stats: PlayerStats;
  radarData: RadarPoint[];
  careerTimeline: TimelinePoint[];
  driftEvents: DriftEvent[];
  recentInnings: InningsScore[];
  phaseData: PhaseData[];
  dismissalPatterns: Record<string, number>;
  keyInsight: string;
}

export const players: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Royal Challengers Bengaluru",
    teamShort: "RCB",
    teamColor: "#E4002B",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    age: 37,
    dnaScore: 86,
    dnaScoreTrend: "stable",
    stats: { matches: 267, innings: 258, runs: 8661, average: 39.55, strikeRate: 132.86, highest: 113, hundreds: 8, fifties: 68, wickets: 4, bowlingAvg: 51.0, economy: 8.8, bestBowling: "1/13" },
    radarData: [
      { axis: "Technique", current: 88, peak: 95 },
      { axis: "Power", current: 78, peak: 88 },
      { axis: "Consistency", current: 82, peak: 94 },
      { axis: "Adaptability", current: 76, peak: 88 },
      { axis: "Big Match", current: 85, peak: 96 },
      { axis: "Conversion", current: 72, peak: 90 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 88, innings: 14 },
      { period: "T20WC 2021", dnaScore: 82, innings: 6 },
      { period: "IPL 2022", dnaScore: 58, innings: 16 },
      { period: "IPL 2023", dnaScore: 78, innings: 14 },
      { period: "T20WC 2024", dnaScore: 92, innings: 8 },
      { period: "IPL 2024", dnaScore: 91, innings: 15 },
      { period: "IPL 2025", dnaScore: 88, innings: 15 },
      { period: "IPL 2026*", dnaScore: 86, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d1",
        type: "GROWTH",
        dimension: "Strike Rate Evolution",
        magnitude: "+12 SR from career average",
        period: "IPL 2024-2025",
        oppositionContext: "Dominated GT, SRH, and MI pace attacks with aggressive intent from ball one",
        conditionsContext: "Flat Bengaluru and Mumbai decks rewarding front-foot driving",
        narrative: "Kohli's post-T20I retirement renaissance has been remarkable. His IPL strike rate jumped to 144.7 in 2025, up from a career 132.9, fueled by deliberate early aggression. He scored 657 runs at 54.75 with 8 fifties in IPL 2025, maintaining an Orange Cap-worthy season after winning it in 2024 with 741 runs. The shift from accumulator to aggressor mirrors his 2016 peak but with more refined shot selection.",
        fantasySignal: "Premium anchor pick at Bengaluru and Mumbai. His floor is elite — 8 fifties in 15 innings means consistent returns. Captain material on flat decks.",
        severity: "high",
        detectedAt: "2025-06-15"
      },
      {
        id: "d2",
        type: "DECLINE",
        dimension: "Strike Rate vs Spin",
        magnitude: "-14% from career average",
        period: "IPL 2024-2025",
        oppositionContext: "Struggled against quality leg-spinners — Chahal, Rashid Khan, Varun Chakravarthy",
        conditionsContext: "Slower turning tracks in Chennai and Hyderabad",
        narrative: "Despite the overall SR improvement, Kohli's strike rate against spin has dipped to 118.4 in the last 24 T20 innings, down from a career rate of 132.7. The decline is most pronounced against quality leg-spin, where his scoring zones have shifted almost exclusively through the leg side — suggesting a technical adjustment limiting his scoring options against turning deliveries.",
        fantasySignal: "Discount slightly for slow-turning venues like Chennai and Kolkata. His anchor role means the floor remains high — but upside is capped against spin-heavy attacks.",
        severity: "medium",
        detectedAt: "2025-11-20"
      }
    ],
    recentInnings: [
      { match: "IPL vs MI", opponent: "MI", score: 72, balls: 48, date: "2025-05-18" },
      { match: "IPL vs CSK", opponent: "CSK", score: 23, balls: 21, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 82, balls: 54, date: "2025-05-06" },
      { match: "IPL vs DC", opponent: "DC", score: 12, balls: 11, date: "2025-04-30" },
      { match: "IPL vs KKR", opponent: "KKR", score: 55, balls: 38, date: "2025-04-24" },
      { match: "IPL vs GT", opponent: "GT", score: 91, balls: 57, date: "2025-04-18" },
      { match: "IPL vs RR", opponent: "RR", score: 67, balls: 44, date: "2025-04-12" },
      { match: "IPL vs LSG", opponent: "LSG", score: 55, balls: 41, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 48, balls: 30, date: "2025-03-30" },
      { match: "IPL vs MI", opponent: "MI", score: 73, balls: 48, date: "2025-03-24" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 2350, strikeRate: 130.5, average: 40.2 },
      { phase: "Middle", runs: 4520, strikeRate: 132.8, average: 42.4 },
      { phase: "Death", runs: 1791, strikeRate: 148.2, average: 34.8 }
    ],
    dismissalPatterns: { caught: 44, bowled: 18, lbw: 14, stumped: 8, runOut: 6, hitWicket: 1, others: 9 },
    keyInsight: "Post-T20I retirement IPL renaissance — fastest Indian to 13,000 T20 runs with elite consistency"
  },
  {
    id: 2,
    name: "Jasprit Bumrah",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Mumbai Indians",
    teamShort: "MI",
    teamColor: "#004BA0",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    age: 32,
    dnaScore: 95,
    dnaScoreTrend: "improving",
    stats: { matches: 240, innings: 230, runs: 81, average: 5.40, strikeRate: 82.65, highest: 16, hundreds: 0, fifties: 0, wickets: 304, bowlingAvg: 19.52, economy: 6.78, bestBowling: "5/10" },
    radarData: [
      { axis: "Accuracy", current: 96, peak: 97 },
      { axis: "Variation", current: 92, peak: 93 },
      { axis: "Economy", current: 95, peak: 96 },
      { axis: "Wicket-Taking", current: 92, peak: 93 },
      { axis: "Death Bowling", current: 97, peak: 98 },
      { axis: "New Ball", current: 93, peak: 94 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 85, innings: 16 },
      { period: "T20WC 2021", dnaScore: 88, innings: 5 },
      { period: "IPL 2022", dnaScore: 90, innings: 14 },
      { period: "IPL 2023", dnaScore: 91, innings: 15 },
      { period: "T20WC 2024", dnaScore: 97, innings: 8 },
      { period: "IPL 2025", dnaScore: 92, innings: 12 },
      { period: "T20WC 2026", dnaScore: 96, innings: 8 },
      { period: "IPL 2026*", dnaScore: 95, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d3",
        type: "GROWTH",
        dimension: "T20 World Cup Dominance",
        magnitude: "Player of Tournament level",
        period: "T20WC 2024-2026",
        oppositionContext: "Dismantled top orders across both World Cups — 15 wkts at 8.26 in 2024, 14 wkts at 12.43 in 2026",
        conditionsContext: "Effective across Caribbean pitches (2024) and Indian/Sri Lankan conditions (2026)",
        narrative: "Bumrah has established himself as the greatest T20 World Cup fast bowler of his generation. His T20WC 2024 campaign yielded 15 wickets at an economy of 4.17, earning Player of the Tournament. In T20WC 2026, he was joint top wicket-taker with 14 scalps, regaining the #1 T20I bowling ranking. His ability to deliver yorkers at 145+ kph consistently makes him virtually unplayable at the death.",
        fantasySignal: "The single safest bowler pick in any T20 format. His dual-phase dominance (powerplay + death) makes him a must-have. Premium price justified by floor alone.",
        severity: "high",
        detectedAt: "2026-03-15"
      },
      {
        id: "d4",
        type: "RECOVERY",
        dimension: "Back Injury Comeback",
        magnitude: "Full recovery to peak",
        period: "2025-2026",
        oppositionContext: "Missed Champions Trophy 2025 due to back stress fracture, returned for T20WC 2026",
        conditionsContext: "Managed workload carefully — played 12 IPL 2025 matches vs usual 14-16",
        narrative: "After a back stress fracture forced him out of the Champions Trophy 2025, Bumrah's comeback was meticulously managed. MI limited him to 12 IPL 2025 matches where he still took 18 wickets at 6.68 economy. By T20WC 2026, he was bowling at full pace again, delivering 4/15 against New Zealand in the group stage to signal complete recovery.",
        fantasySignal: "Workload management means slightly fewer IPL innings but peak quality when he plays. Monitor MI's rotation policy in 2026.",
        severity: "medium",
        detectedAt: "2026-02-10"
      }
    ],
    recentInnings: [
      { match: "T20WC vs NZ", opponent: "NZ", score: 2, balls: 4, date: "2026-03-10" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 1, balls: 3, date: "2026-03-06" },
      { match: "T20I vs NZ", opponent: "NZ", score: 0, balls: 1, date: "2026-01-22" },
      { match: "IPL vs RCB", opponent: "RCB", score: 3, balls: 5, date: "2025-05-18" },
      { match: "IPL vs DC", opponent: "DC", score: 0, balls: 2, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 7, balls: 6, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 1, balls: 3, date: "2025-04-30" },
      { match: "IPL vs KKR", opponent: "KKR", score: 0, balls: 1, date: "2025-04-24" },
      { match: "IPL vs GT", opponent: "GT", score: 4, balls: 5, date: "2025-04-18" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 2, balls: 4, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "World's #1 T20I bowler — back-to-back World Cup dominance with 29 combined wickets across 2024-2026"
  },
  {
    id: 3,
    name: "Suryakumar Yadav",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Mumbai Indians",
    teamShort: "MI",
    teamColor: "#004BA0",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 35,
    dnaScore: 84,
    dnaScoreTrend: "recovery",
    stats: { matches: 279, innings: 268, runs: 7583, average: 35.57, strikeRate: 155.12, highest: 117, hundreds: 4, fifties: 50 },
    radarData: [
      { axis: "Technique", current: 75, peak: 88 },
      { axis: "Power", current: 90, peak: 96 },
      { axis: "Consistency", current: 70, peak: 85 },
      { axis: "Adaptability", current: 88, peak: 94 },
      { axis: "Big Match", current: 82, peak: 88 },
      { axis: "Conversion", current: 60, peak: 72 }
    ],
    careerTimeline: [
      { period: "IPL 2021", dnaScore: 78, innings: 14 },
      { period: "Ind v Eng T20I 2022", dnaScore: 92, innings: 6 },
      { period: "T20WC 2022", dnaScore: 95, innings: 6 },
      { period: "IPL 2023", dnaScore: 88, innings: 14 },
      { period: "T20WC 2024", dnaScore: 82, innings: 8 },
      { period: "IPL 2025", dnaScore: 88, innings: 16 },
      { period: "Ind v NZ T20I 2026", dnaScore: 90, innings: 5 },
      { period: "T20WC 2026", dnaScore: 85, innings: 8 }
    ],
    driftEvents: [
      {
        id: "d5",
        type: "RECOVERY",
        dimension: "Form Revival Post Slump",
        magnitude: "+25 SR recovery from 2025 T20I low",
        period: "Jan-Mar 2026",
        oppositionContext: "Scored 242 runs in 5 innings vs NZ at avg 80.66, named Player of Series; then 242 runs in T20WC 2026",
        conditionsContext: "Indian home conditions in Bengaluru and Mumbai — returned to scoring on familiar pitches",
        narrative: "After a brutal 2025 T20I slump — 218 runs in 21 innings at 13.6 average and 123 SR with no fifties — SKY mounted a stunning comeback against New Zealand in January 2026. His 242 runs in 5 innings at 80.66 average earned him Player of the Series. He carried that form into T20WC 2026, captaining India to their second consecutive title with 242 runs in 8 innings. The sports hernia surgeries of 2024-2025 appear fully behind him.",
        fantasySignal: "Buy the comeback. His IPL 2025 (717 runs, MVP) proved the T20I slump was temporary. At his best, no one in world cricket offers his ceiling at No. 3/4.",
        severity: "high",
        detectedAt: "2026-02-01"
      },
      {
        id: "d6",
        type: "DECLINE",
        dimension: "Conversion Rate (50 to 100)",
        magnitude: "-60% from peak",
        period: "IPL 2024-2025",
        oppositionContext: "Dismissed between 50-70 in 7 of last 9 IPL half-centuries — across all opposition",
        conditionsContext: "Pattern persists across all venues — suggests intent/fatigue, not conditions",
        narrative: "SKY's 50-to-100 conversion has cratered from 12.5% career to just 4.8% across the last two IPL seasons. His record 16 consecutive 25+ scores in IPL 2025 showed extraordinary consistency, but the big daddy hundreds have dried up. He's being dismissed attempting high-risk shots with the game already in control — the risk calculus that defines his genius is misfiring in the conversion zone.",
        fantasySignal: "Recalibrate expectations: he delivers 30-ball 50s reliably but the 100s are rare. Floor is excellent, ceiling less explosive than 2022-23 peak.",
        severity: "medium",
        detectedAt: "2025-10-15"
      }
    ],
    recentInnings: [
      { match: "T20WC vs NZ", opponent: "NZ", score: 47, balls: 30, date: "2026-03-10" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 62, balls: 38, date: "2026-03-06" },
      { match: "T20I vs NZ", opponent: "NZ", score: 75, balls: 42, date: "2026-01-26" },
      { match: "T20I vs NZ", opponent: "NZ", score: 88, balls: 50, date: "2026-01-22" },
      { match: "IPL vs RCB", opponent: "RCB", score: 56, balls: 34, date: "2025-05-20" },
      { match: "IPL vs CSK", opponent: "CSK", score: 71, balls: 42, date: "2025-05-08" },
      { match: "IPL vs LSG", opponent: "LSG", score: 88, balls: 52, date: "2025-04-26" },
      { match: "IPL vs SRH", opponent: "SRH", score: 63, balls: 38, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 34, balls: 22, date: "2025-03-30" },
      { match: "IPL vs KKR", opponent: "KKR", score: 42, balls: 28, date: "2025-03-24" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 920, strikeRate: 142.5, average: 28.3 },
      { phase: "Middle", runs: 4280, strikeRate: 158.8, average: 38.1 },
      { phase: "Death", runs: 2383, strikeRate: 175.4, average: 32.6 }
    ],
    dismissalPatterns: { caught: 46, bowled: 14, lbw: 10, stumped: 6, runOut: 8, hitWicket: 2, others: 14 },
    keyInsight: "Captained India to back-to-back T20 World Cup titles — 360-degree genius bouncing back from 2025 T20I slump"
  },
  {
    id: 4,
    name: "Rishabh Pant",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Lucknow Super Giants",
    teamShort: "LSG",
    teamColor: "#ACE5F3",
    role: "Wicketkeeper-Batter",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 28,
    dnaScore: 78,
    dnaScoreTrend: "recovery",
    stats: { matches: 201, innings: 187, runs: 4762, average: 30.85, strikeRate: 141.62, highest: 128, hundreds: 2, fifties: 24 },
    radarData: [
      { axis: "Technique", current: 68, peak: 78 },
      { axis: "Power", current: 88, peak: 92 },
      { axis: "Consistency", current: 62, peak: 75 },
      { axis: "Adaptability", current: 75, peak: 82 },
      { axis: "Big Match", current: 78, peak: 85 },
      { axis: "Conversion", current: 58, peak: 70 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 75, innings: 16 },
      { period: "IPL 2021", dnaScore: 78, innings: 16 },
      { period: "IPL 2022", dnaScore: 82, innings: 14 },
      { period: "T20WC 2024", dnaScore: 76, innings: 6 },
      { period: "IPL 2024", dnaScore: 80, innings: 13 },
      { period: "IPL 2025", dnaScore: 72, innings: 14 },
      { period: "Ind v SA T20I 2024", dnaScore: 68, innings: 4 },
      { period: "IPL 2026*", dnaScore: 78, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d7",
        type: "VOLATILITY",
        dimension: "Innings Consistency",
        magnitude: "Avg swings from 40+ to sub-20 across series",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 446 runs at 40.55, SR 155 with 3 fifties. IPL 2025: 269 runs at 24.45, SR 133 — patchy start but 118* peak",
        conditionsContext: "Struggled on slow Lucknow pitches, thrived on flat Mumbai and Bengaluru decks",
        narrative: "Pant remains the most volatile premium asset in T20 cricket. His IPL 2024 was exceptional at 40.55 average and 155 SR, but IPL 2025 saw him average just 24.45 with a 133 SR before an explosive 118* reminded everyone of his ceiling. His T20I record (23.25 avg) remains significantly below his IPL output (34.16), and the 61% failure rate suggests he remains a high-risk, high-reward selection.",
        fantasySignal: "Explosive ceiling but volatile floor. Best deployed on flat decks where he can counterattack. The LSG move adds uncertainty around batting position and team dynamics.",
        severity: "high",
        detectedAt: "2025-08-12"
      },
      {
        id: "d8",
        type: "RECOVERY",
        dimension: "Post-Crash Physical Form",
        magnitude: "Full physical recovery confirmed",
        period: "IPL 2024-2025",
        oppositionContext: "Most expensive IPL buy ever at ₹27cr — LSG invested in his post-accident trajectory",
        conditionsContext: "Playing all formats again after missing entire 2023 season",
        narrative: "Two years after the life-threatening car accident, Pant's physical recovery is complete. His reflexes behind the stumps remain sharp, and his ability to play the reverse sweep at pace — his signature — has returned. The side strain in January 2026 was a minor setback, but he's back to full fitness for IPL 2026.",
        fantasySignal: "The physical concerns are behind him. Form and role clarity at LSG are the remaining variables to monitor.",
        severity: "low",
        detectedAt: "2025-06-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs MI", opponent: "MI", score: 78, balls: 42, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 35, balls: 24, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 52, balls: 31, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 14, balls: 11, date: "2025-04-30" },
      { match: "IPL vs KKR", opponent: "KKR", score: 118, balls: 62, date: "2025-04-24" },
      { match: "IPL vs GT", opponent: "GT", score: 8, balls: 7, date: "2025-04-18" },
      { match: "IPL vs DC", opponent: "DC", score: 22, balls: 18, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 5, balls: 6, date: "2025-04-06" },
      { match: "T20WC vs PAK", opponent: "PAK", score: 42, balls: 28, date: "2024-06-09" },
      { match: "IPL vs RCB", opponent: "RCB", score: 88, balls: 50, date: "2024-05-10" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 780, strikeRate: 132.2, average: 28.4 },
      { phase: "Middle", runs: 2620, strikeRate: 142.5, average: 33.8 },
      { phase: "Death", runs: 1362, strikeRate: 168.6, average: 30.2 }
    ],
    dismissalPatterns: { caught: 44, bowled: 16, lbw: 12, stumped: 4, runOut: 10, hitWicket: 2, others: 12 },
    keyInsight: "Most expensive IPL buy ever — explosive ceiling but 61% T20I failure rate makes him fantasy's ultimate high-risk pick"
  },
  {
    id: 5,
    name: "Shubman Gill",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Gujarat Titans",
    teamShort: "GT",
    teamColor: "#1B2133",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 26,
    dnaScore: 80,
    dnaScoreTrend: "improving",
    stats: { matches: 141, innings: 137, runs: 4474, average: 37.28, strikeRate: 139.52, highest: 129, hundreds: 4, fifties: 28 },
    radarData: [
      { axis: "Technique", current: 85, peak: 88 },
      { axis: "Power", current: 78, peak: 82 },
      { axis: "Consistency", current: 76, peak: 82 },
      { axis: "Adaptability", current: 72, peak: 78 },
      { axis: "Big Match", current: 70, peak: 75 },
      { axis: "Conversion", current: 74, peak: 78 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 58, innings: 12 },
      { period: "IPL 2022", dnaScore: 72, innings: 16 },
      { period: "IPL 2023", dnaScore: 92, innings: 17 },
      { period: "Ind v NZ T20I 2023", dnaScore: 65, innings: 3 },
      { period: "IPL 2024", dnaScore: 75, innings: 14 },
      { period: "Ind v SA T20I 2024", dnaScore: 60, innings: 4 },
      { period: "IPL 2025", dnaScore: 88, innings: 15 },
      { period: "IPL 2026*", dnaScore: 80, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d9",
        type: "GROWTH",
        dimension: "IPL Strike Rate Evolution",
        magnitude: "+17 SR improvement from IPL 2024 to 2025",
        period: "IPL 2025",
        oppositionContext: "650 runs in 15 innings at avg 50 and SR 155.88 with 6 fifties — dominated MI, SRH, RCB pace attacks",
        conditionsContext: "Particularly effective on flat Ahmedabad and Mumbai decks",
        narrative: "Gill's IPL 2025 was a breakout acceleration campaign. His strike rate jumped from 138 to 155.88, driven by an improved sweep game and willingness to hit over the top against spinners. As GT captain, his innings management has matured — he's anchoring less and accelerating more. The 650 runs at average 50 cemented his status as IPL's most improved top-order batter.",
        fantasySignal: "Reliable floor with improving ceiling. Ideal captain pick when GT plays at Ahmedabad. His IPL consistency (multiple 500+ seasons) makes him a low-risk, medium-reward selection.",
        severity: "high",
        detectedAt: "2025-06-15"
      },
      {
        id: "d10",
        type: "DECLINE",
        dimension: "T20I Form Disconnect",
        magnitude: "IPL avg 50 vs T20I avg 24 in 2025",
        period: "2024-2025",
        oppositionContext: "Struggled in T20Is with many single-digit scores — 4, 5, 10, 12, 5, 4 in last 15 T20I innings",
        conditionsContext: "Away conditions in South Africa and against quality international pace more challenging than IPL",
        narrative: "The stark disconnect between Gill's IPL dominance and T20I struggles is the biggest puzzle in Indian cricket. In 2025 T20Is, he managed just 263 runs in 14 innings at 23.9 average with no fifties. Footwork issues against quality pace, as noted by coach Sanjay Bangar, and vulnerability to straight deliveries have been exposed at the international level. He was dropped for T20WC 2026 despite being GT captain and India T20I vice-captain.",
        fantasySignal: "Elite IPL asset, unreliable T20I option. For IPL fantasy, he's a premium pick. For international T20 fantasy, avoid until form returns.",
        severity: "high",
        detectedAt: "2025-12-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs RCB", opponent: "RCB", score: 78, balls: 48, date: "2025-05-18" },
      { match: "IPL vs MI", opponent: "MI", score: 62, balls: 38, date: "2025-05-12" },
      { match: "IPL vs CSK", opponent: "CSK", score: 45, balls: 32, date: "2025-05-06" },
      { match: "IPL vs SRH", opponent: "SRH", score: 91, balls: 55, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 18, balls: 14, date: "2025-04-18" },
      { match: "T20I vs SA", opponent: "SA", score: 12, balls: 15, date: "2024-11-15" },
      { match: "T20I vs SA", opponent: "SA", score: 5, balls: 8, date: "2024-11-12" },
      { match: "T20I vs SA", opponent: "SA", score: 29, balls: 24, date: "2024-11-08" },
      { match: "IPL vs RR", opponent: "RR", score: 55, balls: 36, date: "2025-04-12" },
      { match: "IPL vs KKR", opponent: "KKR", score: 67, balls: 42, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1320, strikeRate: 131.5, average: 38.8 },
      { phase: "Middle", runs: 2280, strikeRate: 139.8, average: 38.2 },
      { phase: "Death", runs: 874, strikeRate: 163.4, average: 30.6 }
    ],
    dismissalPatterns: { caught: 42, bowled: 18, lbw: 14, stumped: 8, runOut: 6, others: 12 },
    keyInsight: "IPL titan (650 runs at 50 avg, SR 155 in 2025) with a puzzling T20I slump — dropped for World Cup despite vice-captaincy"
  },
  {
    id: 6,
    name: "Pat Cummins",
    country: "Australia",
    countryFlag: "🇦🇺",
    team: "Sunrisers Hyderabad",
    teamShort: "SRH",
    teamColor: "#FF822A",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    age: 33,
    dnaScore: 79,
    dnaScoreTrend: "stable",
    stats: { matches: 129, innings: 125, runs: 770, average: 17.50, strikeRate: 149.42, highest: 66, hundreds: 0, fifties: 1, wickets: 145, bowlingAvg: 25.72, economy: 8.24, bestBowling: "4/24" },
    radarData: [
      { axis: "Accuracy", current: 82, peak: 88 },
      { axis: "Variation", current: 80, peak: 84 },
      { axis: "Economy", current: 68, peak: 75 },
      { axis: "Wicket-Taking", current: 82, peak: 88 },
      { axis: "Death Bowling", current: 78, peak: 85 },
      { axis: "New Ball", current: 85, peak: 90 }
    ],
    careerTimeline: [
      { period: "IPL 2022", dnaScore: 72, innings: 14 },
      { period: "IPL 2023", dnaScore: 78, innings: 15 },
      { period: "T20WC 2024", dnaScore: 90, innings: 7 },
      { period: "IPL 2024", dnaScore: 82, innings: 16 },
      { period: "IPL 2025", dnaScore: 78, innings: 14 },
      { period: "Aus v SA T20I 2025", dnaScore: 65, innings: 3 },
      { period: "IPL 2026*", dnaScore: 79, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d11",
        type: "VOLATILITY",
        dimension: "Death Overs Economy",
        magnitude: "±3.2 runs per over variance",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 18 wkts at 31.44, econ 9.28. IPL 2025: 16 wkts at 28.13, econ 9.06 — expensive but wicket-taking",
        conditionsContext: "Economy spikes on flat Hyderabad deck, better on seaming tracks in Mumbai and Kolkata",
        narrative: "Cummins' IPL economy remains a concern at 8.81 career, but his wicket-taking ability compensates. His back-to-back hat-tricks against Bangladesh in T20WC 2024 showcased his big-match pedigree. In the IPL, however, his captaincy burden at SRH appears to impact his death-overs rhythm — his economy swings from 6.8 in best spells to 14.2 in worst.",
        fantasySignal: "High-risk bowler pick. His all-round contribution (SR 150+ with bat) adds value. Best when SRH posts big totals and he bowls without pressure.",
        severity: "medium",
        detectedAt: "2025-09-05"
      },
      {
        id: "d12",
        type: "DECLINE",
        dimension: "Availability Concerns",
        magnitude: "Ruled out of T20WC 2026",
        period: "2025-2026",
        oppositionContext: "Back injury ruled him out of Australia's T20WC 2026 campaign",
        conditionsContext: "Limited T20 cricket since mid-2025 due to workload management",
        narrative: "Cummins' back injury forced him out of Australia's T20WC 2026 squad, raising questions about his longevity in T20 franchise cricket. At 33, the fast bowler's body is under increasing strain from multi-format commitments. SRH will need to manage his workload carefully in IPL 2026.",
        fantasySignal: "Monitor injury updates closely pre-auction/draft. When fit, he's an elite asset. But availability risk is higher than peers.",
        severity: "high",
        detectedAt: "2026-01-15"
      }
    ],
    recentInnings: [
      { match: "IPL vs MI", opponent: "MI", score: 24, balls: 14, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 15, balls: 10, date: "2025-05-12" },
      { match: "IPL vs KKR", opponent: "KKR", score: 8, balls: 6, date: "2025-04-24" },
      { match: "T20WC vs BAN", opponent: "BAN", score: 12, balls: 8, date: "2024-06-15" },
      { match: "IPL vs DC", opponent: "DC", score: 32, balls: 18, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 0, balls: 2, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 18, balls: 12, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 5, balls: 4, date: "2025-03-30" },
      { match: "IPL vs CSK", opponent: "CSK", score: 22, balls: 14, date: "2025-03-24" },
      { match: "IPL vs LSG", opponent: "LSG", score: 10, balls: 7, date: "2025-03-18" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "SRH captain with T20WC hat-trick pedigree — explosive lower-order bat but back injury clouds 2026 availability"
  },
  {
    id: 7,
    name: "Yashasvi Jaiswal",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Rajasthan Royals",
    teamShort: "RR",
    teamColor: "#EA1A85",
    role: "Batter",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm leg break",
    age: 24,
    dnaScore: 86,
    dnaScoreTrend: "improving",
    stats: { matches: 90, innings: 88, runs: 2889, average: 35.23, strikeRate: 156.82, highest: 124, hundreds: 2, fifties: 16 },
    radarData: [
      { axis: "Technique", current: 84, peak: 88 },
      { axis: "Power", current: 88, peak: 92 },
      { axis: "Consistency", current: 78, peak: 82 },
      { axis: "Adaptability", current: 80, peak: 84 },
      { axis: "Big Match", current: 76, peak: 80 },
      { axis: "Conversion", current: 72, peak: 76 }
    ],
    careerTimeline: [
      { period: "IPL 2022", dnaScore: 55, innings: 10 },
      { period: "IPL 2023", dnaScore: 78, innings: 14 },
      { period: "Ind v WI T20I 2023", dnaScore: 82, innings: 3 },
      { period: "IPL 2024", dnaScore: 85, innings: 14 },
      { period: "T20WC 2024", dnaScore: 72, innings: 5 },
      { period: "IPL 2025", dnaScore: 88, innings: 14 },
      { period: "SMAT 2025", dnaScore: 80, innings: 3 },
      { period: "IPL 2026*", dnaScore: 86, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d13",
        type: "GROWTH",
        dimension: "Powerplay Dominance",
        magnitude: "T20I PP SR of 166 — highest among Indian openers",
        period: "2023-2025",
        oppositionContext: "T20I powerplay: 501 runs at 35.8 avg and 166 SR in 22 innings — dominated West Indian and Sri Lankan new-ball attacks",
        conditionsContext: "Fearless on all surfaces — equally effective on pace-friendly and spinning tracks",
        narrative: "Jaiswal has the highest powerplay strike rate (166) among Indian T20I openers, making him the most destructive force in the first six overs. His IPL 2025 was outstanding — 559 runs at average 43 and SR 159 with 6 fifties. His wristy drives and fearless pull shots against pace make him almost unplayable when set. The fastest IPL fifty (13 balls) for RR exemplifies his explosive ceiling.",
        fantasySignal: "Premium opening pick for powerplay bonus formats. His aggressive intent means high boundary counts. Best deployed at pace-friendly venues like Mumbai and Bengaluru.",
        severity: "high",
        detectedAt: "2025-06-20"
      },
      {
        id: "d14",
        type: "DECLINE",
        dimension: "Vulnerability vs Left-arm Pace",
        magnitude: "SR drops below 100 against left-arm quicks",
        period: "2024-2025",
        oppositionContext: "Specifically vulnerable to Starc, Shaheen, and Boult — dismissed cutting at wide deliveries",
        conditionsContext: "More pronounced when the ball seams away from left-handers on green pitches",
        narrative: "Jaiswal's Achilles heel is left-arm pace bowling. His compulsive cutting at wide deliveries outside off stump has been exploited repeatedly, particularly by Mitchell Starc in the IPL. While he scored a T20I century against Nepal and IPL 124 against MI, quality left-arm seamers have found consistent success against him.",
        fantasySignal: "Discount when facing teams with quality left-arm pace options like MI (Starc era) or Pakistan (Shaheen).",
        severity: "medium",
        detectedAt: "2025-11-01"
      }
    ],
    recentInnings: [
      { match: "SMAT vs Baroda", opponent: "Baroda", score: 101, balls: 50, date: "2025-12-15" },
      { match: "SMAT vs Mumbai", opponent: "Mumbai", score: 29, balls: 20, date: "2025-12-12" },
      { match: "IPL vs MI", opponent: "MI", score: 72, balls: 42, date: "2025-05-18" },
      { match: "IPL vs CSK", opponent: "CSK", score: 55, balls: 36, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 42, balls: 28, date: "2025-05-06" },
      { match: "IPL vs GT", opponent: "GT", score: 88, balls: 52, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 15, balls: 12, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 67, balls: 40, date: "2025-04-12" },
      { match: "T20I vs SA", opponent: "SA", score: 46, balls: 30, date: "2024-11-15" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 58, balls: 35, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1403, strikeRate: 158.0, average: 43.8 },
      { phase: "Middle", runs: 1050, strikeRate: 152.4, average: 32.8 },
      { phase: "Death", runs: 436, strikeRate: 168.2, average: 24.2 }
    ],
    dismissalPatterns: { caught: 40, bowled: 20, lbw: 12, stumped: 4, runOut: 8, hitWicket: 1, others: 15 },
    keyInsight: "India's most explosive T20 opener at 24 — highest PP strike rate (166) among Indian T20I batters with IPL 559 runs in 2025"
  },
  {
    id: 8,
    name: "Travis Head",
    country: "Australia",
    countryFlag: "🇦🇺",
    team: "Sunrisers Hyderabad",
    teamShort: "SRH",
    teamColor: "#FF822A",
    role: "Batter",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 32,
    dnaScore: 82,
    dnaScoreTrend: "stable",
    stats: { matches: 91, innings: 88, runs: 2481, average: 30.63, strikeRate: 164.85, highest: 102, hundreds: 1, fifties: 12 },
    radarData: [
      { axis: "Technique", current: 72, peak: 78 },
      { axis: "Power", current: 92, peak: 95 },
      { axis: "Consistency", current: 65, peak: 72 },
      { axis: "Adaptability", current: 70, peak: 76 },
      { axis: "Big Match", current: 88, peak: 92 },
      { axis: "Conversion", current: 60, peak: 68 }
    ],
    careerTimeline: [
      { period: "IPL 2023", dnaScore: 65, innings: 6 },
      { period: "IPL 2024", dnaScore: 88, innings: 15 },
      { period: "T20WC 2024", dnaScore: 85, innings: 7 },
      { period: "Aus v Sco T20I 2024", dnaScore: 92, innings: 3 },
      { period: "IPL 2025", dnaScore: 80, innings: 14 },
      { period: "Aus v SA T20I 2025", dnaScore: 55, innings: 3 },
      { period: "IPL 2026*", dnaScore: 82, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d15",
        type: "GROWTH",
        dimension: "IPL Impact Batting",
        magnitude: "SR 170+ across two IPL seasons",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 539 runs at SR 178 including 102* — SRH's destructive opener. IPL 2025: solid contributor at SR 170",
        conditionsContext: "Thrives on flat Hyderabad deck and pace-friendly surfaces",
        narrative: "Head has become the IPL's most feared opener since joining SRH. His career IPL strike rate of 170.03 is among the highest in tournament history for players with 30+ matches. His 80 off 25 balls against Scotland in T20I and IPL century against MI showcased the kind of explosive power that makes him a premium T20 asset. The left-hander's ability to hit both sides of the ground against pace is world-class.",
        fantasySignal: "Premium opening pick at pace-friendly venues. His SR floor of 150+ means even in failures he scores quickly. Volatile average (28-35) means captain pick carries risk.",
        severity: "medium",
        detectedAt: "2025-06-01"
      },
      {
        id: "d16",
        type: "DECLINE",
        dimension: "Recent T20I Form Dip",
        magnitude: "2, 5, 19 in last 3 T20Is vs South Africa",
        period: "Aug 2025",
        oppositionContext: "Failed against South Africa's pace battery of Rabada and Nortje in home conditions",
        conditionsContext: "Australian home conditions — typically his strength — proved challenging",
        narrative: "Head's T20I form has been inconsistent, with scores of 2, 5, and 19 against South Africa in August 2025 contrasting sharply with his IPL dominance. His average of 28.4 in T20Is remains modest for a player of his talent. The inconsistency suggests he's a conditions-dependent player who thrives in the Indian flat-track environment more than varied international surfaces.",
        fantasySignal: "IPL specialist — his T20I form is unreliable. For IPL fantasy, he's elite. For international fantasy, treat as a boom-or-bust selection.",
        severity: "medium",
        detectedAt: "2025-09-01"
      }
    ],
    recentInnings: [
      { match: "T20I vs SA", opponent: "SA", score: 19, balls: 14, date: "2025-08-25" },
      { match: "T20I vs SA", opponent: "SA", score: 5, balls: 6, date: "2025-08-22" },
      { match: "T20I vs SA", opponent: "SA", score: 2, balls: 4, date: "2025-08-19" },
      { match: "IPL vs MI", opponent: "MI", score: 72, balls: 38, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 45, balls: 26, date: "2025-05-12" },
      { match: "IPL vs DC", opponent: "DC", score: 18, balls: 12, date: "2025-05-06" },
      { match: "IPL vs GT", opponent: "GT", score: 88, balls: 48, date: "2025-04-26" },
      { match: "T20WC vs Ind", opponent: "IND", score: 76, balls: 43, date: "2024-06-24" },
      { match: "T20I vs Sco", opponent: "SCO", score: 80, balls: 25, date: "2024-09-08" },
      { match: "IPL vs KKR", opponent: "KKR", score: 62, balls: 35, date: "2025-04-18" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1120, strikeRate: 172.5, average: 32.4 },
      { phase: "Middle", runs: 920, strikeRate: 158.8, average: 28.8 },
      { phase: "Death", runs: 441, strikeRate: 178.2, average: 26.4 }
    ],
    dismissalPatterns: { caught: 42, bowled: 20, lbw: 12, stumped: 4, runOut: 6, hitWicket: 2, others: 14 },
    keyInsight: "IPL's most explosive opener with career SR 170 — big-match performer but T20I consistency remains elusive"
  },
  {
    id: 9,
    name: "Heinrich Klaasen",
    country: "South Africa",
    countryFlag: "🇿🇦",
    team: "Sunrisers Hyderabad",
    teamShort: "SRH",
    teamColor: "#FF822A",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 31,
    dnaScore: 85,
    dnaScoreTrend: "stable",
    stats: { matches: 107, innings: 100, runs: 2480, average: 33.78, strikeRate: 160.52, highest: 105, hundreds: 2, fifties: 10 },
    radarData: [
      { axis: "Technique", current: 72, peak: 78 },
      { axis: "Power", current: 95, peak: 97 },
      { axis: "Consistency", current: 75, peak: 80 },
      { axis: "Adaptability", current: 78, peak: 82 },
      { axis: "Big Match", current: 88, peak: 92 },
      { axis: "Conversion", current: 68, peak: 72 }
    ],
    careerTimeline: [
      { period: "SA20 2023", dnaScore: 72, innings: 8 },
      { period: "IPL 2023", dnaScore: 80, innings: 14 },
      { period: "IPL 2024", dnaScore: 88, innings: 14 },
      { period: "T20WC 2024", dnaScore: 90, innings: 8 },
      { period: "SA20 2025", dnaScore: 70, innings: 10 },
      { period: "IPL 2025", dnaScore: 88, innings: 14 },
      { period: "MLC 2025", dnaScore: 65, innings: 8 },
      { period: "IPL 2026*", dnaScore: 85, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d17",
        type: "GROWTH",
        dimension: "Elite Spin Destruction",
        magnitude: "SR 191 vs spin in IPL — best in tournament",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 479 runs at 39.91, SR 171. IPL 2025: 487 runs at 44.27, SR 173 including 105* off 39 balls vs KKR",
        conditionsContext: "Devastating on flat Hyderabad deck; effective even on turning Chennai and Kolkata surfaces",
        narrative: "Klaasen has established himself as the most destructive spin-hitter in T20 cricket. His 191 SR against spin in the IPL is the highest in tournament history among batters with 200+ balls faced. His 105* off 39 balls vs KKR in IPL 2025 — the 3rd fastest IPL century — was vintage Klaasen, using his 6'1 frame to get to the pitch of spinners and deposit them over the ropes. The fastest fifty in a T20 World Cup final (23 balls vs India, 2024) cements his big-match credentials.",
        fantasySignal: "Must-have in spin-heavy conditions. His ability to accelerate in death overs (SR 175+) makes him ideal for last-minute fantasy captain picks at venues with slow pitches.",
        severity: "high",
        detectedAt: "2025-06-10"
      },
      {
        id: "d18",
        type: "VOLATILITY",
        dimension: "Form Outside IPL",
        magnitude: "IPL avg 40+ vs SA20/MLC avg sub-25",
        period: "2024-2025",
        oppositionContext: "SA20 2025/26: 138 runs at 19.7 avg, SR 129, HS 29. MLC 2025: ~142 runs at 15.8 avg",
        conditionsContext: "Struggled on SA20 pace-friendly pitches and MLC varied conditions",
        narrative: "Klaasen's dominance is increasingly IPL-specific. While he averages 40+ in the IPL, his SA20 2025/26 (avg 19.7, SR 129) and MLC 2025 (avg 15.8) numbers paint a different picture. His retirement from international cricket in June 2025 to focus on franchise leagues hasn't translated to consistent performance outside India. The question is whether his IPL mastery is conditions-dependent.",
        fantasySignal: "IPL-specific premium asset. Avoid in SA20 and MLC fantasy lineups unless form improves. His ₹23cr IPL retention signals SRH's confidence in his Indian conditions dominance.",
        severity: "medium",
        detectedAt: "2026-01-20"
      }
    ],
    recentInnings: [
      { match: "SA20 vs Joburg", opponent: "JSK", score: 22, balls: 18, date: "2026-01-15" },
      { match: "SA20 vs Paarl", opponent: "PR", score: 29, balls: 24, date: "2026-01-10" },
      { match: "IPL vs KKR", opponent: "KKR", score: 105, balls: 39, date: "2025-05-18" },
      { match: "IPL vs MI", opponent: "MI", score: 62, balls: 36, date: "2025-05-12" },
      { match: "IPL vs RCB", opponent: "RCB", score: 45, balls: 28, date: "2025-05-06" },
      { match: "IPL vs DC", opponent: "DC", score: 78, balls: 42, date: "2025-04-26" },
      { match: "IPL vs CSK", opponent: "CSK", score: 18, balls: 14, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 55, balls: 32, date: "2025-04-12" },
      { match: "MLC vs DC", opponent: "DCU", score: 35, balls: 28, date: "2025-07-20" },
      { match: "SA20 vs CT", opponent: "CTB", score: 76, balls: 45, date: "2025-01-15" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 280, strikeRate: 135.2, average: 22.4 },
      { phase: "Middle", runs: 1180, strikeRate: 158.6, average: 35.8 },
      { phase: "Death", runs: 1020, strikeRate: 178.4, average: 38.2 }
    ],
    dismissalPatterns: { caught: 40, bowled: 18, lbw: 8, stumped: 2, runOut: 8, hitWicket: 2, others: 22 },
    keyInsight: "T20 cricket's greatest spin-hitter with 191 SR vs spin in IPL — retained at ₹23cr after retiring from internationals"
  },
  {
    id: 10,
    name: "Ruturaj Gaikwad",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Chennai Super Kings",
    teamShort: "CSK",
    teamColor: "#FFC425",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 28,
    dnaScore: 76,
    dnaScoreTrend: "recovery",
    stats: { matches: 94, innings: 91, runs: 3135, average: 40.19, strikeRate: 139.12, highest: 123, hundreds: 2, fifties: 20 },
    radarData: [
      { axis: "Technique", current: 82, peak: 86 },
      { axis: "Power", current: 72, peak: 78 },
      { axis: "Consistency", current: 78, peak: 85 },
      { axis: "Adaptability", current: 70, peak: 76 },
      { axis: "Big Match", current: 72, peak: 78 },
      { axis: "Conversion", current: 75, peak: 82 }
    ],
    careerTimeline: [
      { period: "IPL 2021", dnaScore: 82, innings: 16 },
      { period: "Ind v NZ T20I 2023", dnaScore: 78, innings: 3 },
      { period: "IPL 2023", dnaScore: 90, innings: 16 },
      { period: "Ind v Aus T20I 2023", dnaScore: 88, innings: 4 },
      { period: "IPL 2024", dnaScore: 85, innings: 14 },
      { period: "Ind v Zim T20I 2024", dnaScore: 72, innings: 4 },
      { period: "IPL 2025", dnaScore: 62, innings: 5 },
      { period: "IPL 2026*", dnaScore: 76, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d19",
        type: "DECLINE",
        dimension: "Injury-Hit IPL 2025",
        magnitude: "From 583 runs (2024) to 122 runs (2025)",
        period: "IPL 2025",
        oppositionContext: "Only 122 runs in 5 innings at 24.4 avg before elbow fracture ruled him out — CSK struggled without him",
        conditionsContext: "Limited sample on Chennai's typical slow turners",
        narrative: "Gaikwad's IPL 2025 was derailed by an elbow fracture after just 5 matches, forcing CSK to hand captaincy duties to MS Dhoni. His 122 runs at 24.4 average and 151 SR showed glimpses of his quality, but the small sample makes it hard to draw conclusions. His IPL 2024 (583 runs at 53 avg with 4 fifties and a century) confirmed his elite capability when fit.",
        fantasySignal: "Buy the dip if injury recovery is confirmed. His IPL average of 40.35 and Orange Cap-caliber IPL 2023 (890 runs) prove his ceiling. Monitor pre-season fitness updates.",
        severity: "high",
        detectedAt: "2025-05-15"
      },
      {
        id: "d20",
        type: "DECLINE",
        dimension: "T20I Exclusion",
        magnitude: "Dropped despite IPL dominance",
        period: "2024-2026",
        oppositionContext: "No T20I selection since Zimbabwe tour 2024 despite being CSK captain and IPL consistent performer",
        conditionsContext: "Competition from Jaiswal, Abhishek Sharma, and Gill for opening/top-order T20I spots",
        narrative: "Gaikwad's T20I career has stalled at 23 matches despite his IPL excellence. His T20I average of 39.56 and SR 143.54 are strong, but slow powerplay starts have been a concern for India's aggressive template. His T20I century (123* vs Australia) showed what he can do, but the selectors have preferred more explosive options at the top.",
        fantasySignal: "IPL-only asset for now. His CSK role as captain and No. 1 batter makes him a premium IPL pick, but don't rely on him for T20I fantasy teams.",
        severity: "medium",
        detectedAt: "2025-12-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs RCB", opponent: "RCB", score: 42, balls: 30, date: "2025-04-12" },
      { match: "IPL vs MI", opponent: "MI", score: 8, balls: 8, date: "2025-04-06" },
      { match: "IPL vs SRH", opponent: "SRH", score: 35, balls: 24, date: "2025-03-30" },
      { match: "IPL vs GT", opponent: "GT", score: 22, balls: 18, date: "2025-03-26" },
      { match: "IPL vs DC", opponent: "DC", score: 15, balls: 12, date: "2025-03-22" },
      { match: "IPL vs RR", opponent: "RR", score: 78, balls: 52, date: "2024-05-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 108, balls: 68, date: "2024-05-12" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 55, balls: 38, date: "2024-05-06" },
      { match: "T20I vs Zim", opponent: "ZIM", score: 46, balls: 32, date: "2024-07-10" },
      { match: "IPL vs LSG", opponent: "LSG", score: 82, balls: 55, date: "2024-04-26" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 850, strikeRate: 127.5, average: 35.4 },
      { phase: "Middle", runs: 1620, strikeRate: 140.8, average: 44.2 },
      { phase: "Death", runs: 665, strikeRate: 158.6, average: 36.2 }
    ],
    dismissalPatterns: { caught: 38, bowled: 20, lbw: 16, stumped: 6, runOut: 8, others: 12 },
    keyInsight: "CSK captain returning from elbow injury — IPL avg 40+ and Orange Cap-caliber 2023 season prove elite ceiling when fit"
  },
  {
    id: 11,
    name: "Hardik Pandya",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Mumbai Indians",
    teamShort: "MI",
    teamColor: "#004BA0",
    role: "All-rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    age: 32,
    dnaScore: 83,
    dnaScoreTrend: "improving",
    stats: { matches: 290, innings: 265, runs: 5037, average: 28.30, strikeRate: 146.42, highest: 91, hundreds: 0, fifties: 18, wickets: 192, bowlingAvg: 27.85, economy: 8.68, bestBowling: "4/16" },
    radarData: [
      { axis: "Bat Power", current: 88, peak: 92 },
      { axis: "Bowl Strike", current: 78, peak: 85 },
      { axis: "Consistency", current: 72, peak: 80 },
      { axis: "Versatility", current: 90, peak: 94 },
      { axis: "Death Impact", current: 92, peak: 96 },
      { axis: "Big Match", current: 90, peak: 95 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 75, innings: 14 },
      { period: "T20WC 2021", dnaScore: 72, innings: 5 },
      { period: "IPL 2022", dnaScore: 82, innings: 14 },
      { period: "IPL 2024", dnaScore: 60, innings: 14 },
      { period: "T20WC 2024", dnaScore: 95, innings: 8 },
      { period: "Ind v SA T20I 2024", dnaScore: 80, innings: 4 },
      { period: "IPL 2025", dnaScore: 78, innings: 15 },
      { period: "IPL 2026*", dnaScore: 83, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d21",
        type: "RECOVERY",
        dimension: "Post-IPL 2024 Resurgence",
        magnitude: "From avg 18 (IPL 2024) to T20WC hero",
        period: "T20WC 2024 to IPL 2025",
        oppositionContext: "T20WC 2024: 144 runs and 11 wickets — including 3/20 in the final vs SA. IPL 2025: 224 runs at SR 163, 14 wickets",
        conditionsContext: "Thrived in Caribbean conditions (T20WC) and Indian flat tracks (IPL) equally",
        narrative: "Hardik's redemption arc from IPL 2024 (216 runs at 18 avg, last place as MI captain) to T20 World Cup 2024 hero is one of cricket's great comeback stories. His 3/20 in the final against South Africa and crucial runs throughout made him the tournament's MVP all-rounder. He carried that form into IPL 2025 with improved bowling (14 wickets) while batting at a destructive SR of 163. The first Indian all-rounder to reach #1 T20I ranking underlines his stature.",
        fantasySignal: "Elite dual-threat pick. His death overs value (batting SR 193+, bowling econ 8.23) makes him essential at batting-friendly venues. The 2024 slump is firmly behind him.",
        severity: "high",
        detectedAt: "2025-06-15"
      },
      {
        id: "d22",
        type: "VOLATILITY",
        dimension: "Injury Management",
        magnitude: "Chronic back/hamstring concerns",
        period: "2022-2026",
        oppositionContext: "Missed multiple series and managed bowling loads — bowled 2-3 overs max in some IPL matches",
        conditionsContext: "Workload management means reduced bowling in dead rubbers and back-to-back fixtures",
        narrative: "Hardik's body remains the biggest variable in T20 cricket. His back and hamstring history means MI manage his bowling carefully — sometimes bowling just 2 overs in a match. When fully fit and bowling 4 overs, he's the most valuable T20 player in the world. The risk is him being reduced to a batting-only role, which halves his fantasy value.",
        fantasySignal: "Check bowling workload news before locking him in. Full-bowling Hardik is a must-pick. Batting-only Hardik is merely good, not elite.",
        severity: "medium",
        detectedAt: "2025-10-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs RCB", opponent: "RCB", score: 47, balls: 28, date: "2025-05-18" },
      { match: "IPL vs DC", opponent: "DC", score: 39, balls: 24, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 18, balls: 14, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 52, balls: 30, date: "2025-04-26" },
      { match: "T20I vs SA", opponent: "SA", score: 50, balls: 28, date: "2024-11-15" },
      { match: "T20WC Final vs SA", opponent: "SA", score: 15, balls: 12, date: "2024-06-29" },
      { match: "T20WC vs Aus", opponent: "AUS", score: 27, balls: 18, date: "2024-06-24" },
      { match: "IPL vs GT", opponent: "GT", score: 35, balls: 22, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 8, balls: 6, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 42, balls: 25, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 520, strikeRate: 128.5, average: 24.2 },
      { phase: "Middle", runs: 2180, strikeRate: 142.8, average: 30.4 },
      { phase: "Death", runs: 2337, strikeRate: 193.2, average: 32.8 }
    ],
    dismissalPatterns: { caught: 46, bowled: 16, lbw: 10, stumped: 2, runOut: 12, hitWicket: 1, others: 13 },
    keyInsight: "T20WC 2024 hero with 3/20 in the final — death overs SR 193 makes him T20 cricket's most impactful all-rounder when fully fit"
  },
  {
    id: 12,
    name: "Rashid Khan",
    country: "Afghanistan",
    countryFlag: "🇦🇫",
    team: "Gujarat Titans",
    teamShort: "GT",
    teamColor: "#1B2133",
    role: "All-rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm leg break",
    age: 27,
    dnaScore: 84,
    dnaScoreTrend: "recovery",
    stats: { matches: 251, innings: 240, runs: 1207, average: 14.37, strikeRate: 148.22, highest: 79, hundreds: 0, fifties: 0, wickets: 351, bowlingAvg: 17.56, economy: 6.42, bestBowling: "5/10" },
    radarData: [
      { axis: "Bat Power", current: 72, peak: 78 },
      { axis: "Bowl Strike", current: 90, peak: 96 },
      { axis: "Consistency", current: 82, peak: 92 },
      { axis: "Versatility", current: 85, peak: 90 },
      { axis: "Death Impact", current: 88, peak: 95 },
      { axis: "Big Match", current: 85, peak: 92 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 90, innings: 16 },
      { period: "T20WC 2021", dnaScore: 88, innings: 5 },
      { period: "IPL 2022", dnaScore: 85, innings: 16 },
      { period: "IPL 2023", dnaScore: 82, innings: 15 },
      { period: "IPL 2024", dnaScore: 72, innings: 14 },
      { period: "IPL 2025", dnaScore: 68, innings: 12 },
      { period: "T20WC 2026", dnaScore: 88, innings: 8 },
      { period: "IPL 2026*", dnaScore: 84, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d23",
        type: "RECOVERY",
        dimension: "Post-Surgery International Form",
        magnitude: "From IPL econ 9.35 to WC econ 6.2",
        period: "T20WC 2026",
        oppositionContext: "Strong T20WC 2026 — including 2/28 vs SA, 2/19 vs Canada, sharp spells vs WI (5 wkts in 12 overs, econ 4.25)",
        conditionsContext: "Returned to peak form on spinning Indian/Sri Lankan surfaces after struggling on flat IPL decks",
        narrative: "Rashid's back surgery post-2023 WC and rushed return caused a visible IPL dip — economy ballooned to 8.4 (2024) and 9.35 (2025), far from his career 7.09 IPL economy. But the T20WC 2026 showed the real Rashid is back. He became the first bowler to reach 700 T20 wickets during the tournament, and his death-overs economy of 7.92 (2nd best among 800+ balls bowlers) proved he's still the gold standard in T20 leg-spin. He just needed time to fully recover.",
        fantasySignal: "Buy the IPL dip if T20WC 2026 form carries over. His IPL economy was inflated by rushing back from surgery. A fully fit Rashid at 6.5-7.0 economy is a fantasy cheat code.",
        severity: "high",
        detectedAt: "2026-03-01"
      },
      {
        id: "d24",
        type: "DECLINE",
        dimension: "IPL Economy Inflation",
        magnitude: "+2.3 economy from career average",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 10 wkts at 36.7 avg, econ 8.4. IPL 2025: 9 wkts at 57.1 avg, econ 9.35",
        conditionsContext: "Flat Ahmedabad pitches and Wankhede provided no assistance — batters attacked his length balls",
        narrative: "Rashid's IPL numbers in 2024-2025 were the worst of his career. Back surgery in late 2023 followed by a rushed return to BBL and PSL compromised his length control. He missed the BBL and PSL in 2025 due to hamstring issues linked to the back surgery recovery. His 9 wickets at 57.1 average in IPL 2025 would be alarming for any other bowler — for Rashid, it's a clear injury hangover.",
        fantasySignal: "Risky IPL pick until economy proves it can return to sub-7.5. His T20WC form suggests the skill is intact, but IPL flat tracks remain a challenge post-surgery.",
        severity: "high",
        detectedAt: "2025-06-01"
      }
    ],
    recentInnings: [
      { match: "T20WC vs SA", opponent: "SA", score: 12, balls: 8, date: "2026-03-08" },
      { match: "T20WC vs WI", opponent: "WI", score: 22, balls: 14, date: "2026-03-04" },
      { match: "IPL vs MI", opponent: "MI", score: 15, balls: 10, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 8, balls: 6, date: "2025-05-12" },
      { match: "IPL vs CSK", opponent: "CSK", score: 25, balls: 15, date: "2025-04-26" },
      { match: "IPL vs SRH", opponent: "SRH", score: 5, balls: 4, date: "2025-04-18" },
      { match: "IPL vs DC", opponent: "DC", score: 18, balls: 12, date: "2025-04-12" },
      { match: "T20I vs CAN", opponent: "CAN", score: 8, balls: 5, date: "2026-02-20" },
      { match: "T20I vs UAE", opponent: "UAE", score: 12, balls: 8, date: "2026-02-15" },
      { match: "IPL vs KKR", opponent: "KKR", score: 32, balls: 18, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "First to 700 T20 wickets — IPL economy inflated post-surgery but T20WC 2026 proved the elite skill remains intact"
  },
  {
    id: 13,
    name: "Rohit Sharma",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Mumbai Indians",
    teamShort: "MI",
    teamColor: "#004BA0",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 38,
    dnaScore: 77,
    dnaScoreTrend: "declining",
    stats: { matches: 431, innings: 415, runs: 11277, average: 30.53, strikeRate: 135.18, highest: 121, hundreds: 6, fifties: 73, wickets: 15, bowlingAvg: 46.50, economy: 8.02, bestBowling: "2/11" },
    radarData: [
      { axis: "Technique", current: 78, peak: 92 },
      { axis: "Power", current: 82, peak: 95 },
      { axis: "Consistency", current: 72, peak: 88 },
      { axis: "Adaptability", current: 70, peak: 85 },
      { axis: "Big Match", current: 80, peak: 92 },
      { axis: "Conversion", current: 65, peak: 82 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 78, innings: 15 },
      { period: "T20WC 2021", dnaScore: 72, innings: 6 },
      { period: "IPL 2023", dnaScore: 80, innings: 16 },
      { period: "T20WC 2024", dnaScore: 88, innings: 8 },
      { period: "IPL 2024", dnaScore: 82, innings: 14 },
      { period: "IPL 2025", dnaScore: 78, innings: 15 },
      { period: "IPL 2026*", dnaScore: 77, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d25",
        type: "DECLINE",
        dimension: "Age-Related Decline",
        magnitude: "Declining conversion and SR from T20WC peak",
        period: "IPL 2024-2025",
        oppositionContext: "IPL 2024: 417 runs at 32 avg, SR 150, HS 105*. IPL 2025: 418 runs at 29.86, SR 149, 4 fifties. Consistent but below peak explosiveness",
        conditionsContext: "Still effective on flat Mumbai and Bengaluru decks but less dominant at slower venues",
        narrative: "Rohit's T20WC 2024 was a crowning achievement — 257 runs at SR 156 including the explosive 92(41) vs Australia that set the tone for India's title run. But post-retirement from T20Is, his IPL output has settled into a 'very good but not elite' zone. At 38, the pull shot remains devastating but his ability to accelerate against quality spin has dimmed. He's the 2nd player to 7000+ IPL runs and holds 300+ IPL sixes (2nd ever), but the ceiling is lowering.",
        fantasySignal: "Reliable floor play — 400+ IPL runs per season is virtually guaranteed. But captain picks are risky. Best as a safe anchor selection at pace-friendly venues.",
        severity: "medium",
        detectedAt: "2025-10-15"
      },
      {
        id: "d26",
        type: "GROWTH",
        dimension: "Left-Arm Pace Vulnerability Awareness",
        magnitude: "Dismissed 12 times by left-arm pace since 2023 at avg 7.65",
        period: "2023-2025",
        oppositionContext: "Starc, Boult, Shaheen, and other left-arm seamers have a specific plan — wide outswingers and cutters",
        conditionsContext: "Vulnerability more pronounced when the ball swings — less of an issue on dead Indian pitches",
        narrative: "A clear pattern has emerged: left-arm pace is Rohit's kryptonite in T20s. He's been dismissed 12 times by left-arm seamers since 2023 at an average of just 7.65. Teams are actively exploiting this by bowling left-arm pacers with the new ball against him. In the IPL, this means matchups against Starc (DC) and Boult (RR) are particularly dangerous for his fantasy returns.",
        fantasySignal: "Check opposition bowling lineup for left-arm pace options. If the opposition has a quality left-armer opening the bowling, discount Rohit's expected output significantly.",
        severity: "medium",
        detectedAt: "2025-08-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs RCB", opponent: "RCB", score: 42, balls: 30, date: "2025-05-18" },
      { match: "IPL vs DC", opponent: "DC", score: 55, balls: 38, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 18, balls: 14, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 72, balls: 45, date: "2025-04-26" },
      { match: "IPL vs KKR", opponent: "KKR", score: 8, balls: 6, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 62, balls: 40, date: "2025-04-12" },
      { match: "T20WC vs Aus", opponent: "AUS", score: 92, balls: 41, date: "2024-06-24" },
      { match: "T20WC vs Eng", opponent: "ENG", score: 57, balls: 39, date: "2024-06-27" },
      { match: "IPL vs RR", opponent: "RR", score: 35, balls: 28, date: "2025-04-06" },
      { match: "IPL vs LSG", opponent: "LSG", score: 105, balls: 62, date: "2024-05-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 3820, strikeRate: 142.5, average: 34.2 },
      { phase: "Middle", runs: 4960, strikeRate: 132.8, average: 30.4 },
      { phase: "Death", runs: 2497, strikeRate: 148.2, average: 24.6 }
    ],
    dismissalPatterns: { caught: 48, bowled: 16, lbw: 12, stumped: 4, runOut: 8, hitWicket: 2, others: 10 },
    keyInsight: "T20WC 2024 winning captain with 11,000+ T20 runs — still effective at 38 but left-arm pace vulnerability is exploitable"
  },
  {
    id: 14,
    name: "MS Dhoni",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Chennai Super Kings",
    teamShort: "CSK",
    teamColor: "#FFC425",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    age: 44,
    dnaScore: 62,
    dnaScoreTrend: "declining",
    stats: { matches: 376, innings: 340, runs: 7056, average: 38.09, strikeRate: 135.83, highest: 84, hundreds: 0, fifties: 24 },
    radarData: [
      { axis: "Technique", current: 60, peak: 82 },
      { axis: "Power", current: 65, peak: 90 },
      { axis: "Consistency", current: 50, peak: 78 },
      { axis: "Adaptability", current: 55, peak: 85 },
      { axis: "Big Match", current: 72, peak: 96 },
      { axis: "Conversion", current: 40, peak: 68 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 78, innings: 15 },
      { period: "IPL 2021", dnaScore: 72, innings: 16 },
      { period: "IPL 2023", dnaScore: 80, innings: 16 },
      { period: "IPL 2024", dnaScore: 68, innings: 14 },
      { period: "IPL 2025", dnaScore: 60, innings: 13 },
      { period: "IPL 2026*", dnaScore: 62, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d27",
        type: "DECLINE",
        dimension: "Batting Impact",
        magnitude: "196 runs in 13 innings at SR 135 in IPL 2025",
        period: "IPL 2025",
        oppositionContext: "Limited impact vs all attacks — highest score just 30*. CSK finished bottom of the table",
        conditionsContext: "Chennai's slow pitches made scoring difficult for all batters, but Dhoni's PP dot ball rate exceeded 40%",
        narrative: "At 44, Dhoni's batting has become a support act. His IPL 2025 yielded just 196 runs in 13 innings with a highest of 30*. The helicopter shot still surfaces occasionally, and his death-overs SR of 151 shows glimpses of the old magic. But powerplay dot ball rates above 40% and a reluctance to rotate strike early in his innings limit his impact. He resumed CSK captaincy after Gaikwad's injury, proving his leadership value transcends runs.",
        fantasySignal: "Sentimental pick only. His 400th T20 match milestone in IPL 2025 was a feel-good moment, but his actual fantasy returns are among the lowest for regular XI players. His WK designation adds marginal value.",
        severity: "high",
        detectedAt: "2025-06-01"
      },
      {
        id: "d28",
        type: "GROWTH",
        dimension: "Death Overs Finishing",
        magnitude: "SR 151+ in death overs despite overall decline",
        period: "IPL 2025",
        oppositionContext: "Still capable of late cameos — 16(17), 17(18) followed by explosive 12(8), 11(4) finishes",
        conditionsContext: "Most effective in death overs at home in Chennai where he reads conditions intuitively",
        narrative: "The Dhoni paradox persists: his overall numbers are modest, but when CSK needs 15-20 off the last 2 overs, he remains one of the most trusted finishers in T20 history. His death-overs strike rate of 151+ in IPL 2025, while lower than his peak, still puts him in the top tier of finishers for that specific phase. The problem is getting him to the death with enough balls remaining.",
        fantasySignal: "Only viable in formats that reward death-over finishing specifically. As a general fantasy pick, his floor is too low.",
        severity: "low",
        detectedAt: "2025-05-20"
      }
    ],
    recentInnings: [
      { match: "IPL vs SRH", opponent: "SRH", score: 16, balls: 17, date: "2025-05-18" },
      { match: "IPL vs MI", opponent: "MI", score: 17, balls: 18, date: "2025-05-12" },
      { match: "IPL vs RCB", opponent: "RCB", score: 12, balls: 8, date: "2025-05-06" },
      { match: "IPL vs GT", opponent: "GT", score: 11, balls: 4, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 6, balls: 10, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 30, balls: 22, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 22, balls: 16, date: "2025-04-06" },
      { match: "IPL vs LSG", opponent: "LSG", score: 18, balls: 14, date: "2025-03-30" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 25, balls: 18, date: "2025-03-24" },
      { match: "IPL vs MI", opponent: "MI", score: 15, balls: 12, date: "2025-03-18" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 420, strikeRate: 108.5, average: 22.4 },
      { phase: "Middle", runs: 3280, strikeRate: 130.8, average: 38.2 },
      { phase: "Death", runs: 3356, strikeRate: 155.6, average: 42.8 }
    ],
    dismissalPatterns: { caught: 42, bowled: 18, lbw: 8, stumped: 2, runOut: 12, hitWicket: 4, others: 14 },
    keyInsight: "T20 cricket's greatest finisher at 44 — death overs SR 151 still elite, but overall impact has faded significantly"
  },
  {
    id: 15,
    name: "Tilak Varma",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Mumbai Indians",
    teamShort: "MI",
    teamColor: "#004BA0",
    role: "Batter",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 23,
    dnaScore: 87,
    dnaScoreTrend: "improving",
    stats: { matches: 103, innings: 98, runs: 2889, average: 41.86, strikeRate: 145.12, highest: 120, hundreds: 2, fifties: 18, wickets: 4, bowlingAvg: 13.75, economy: 5.79, bestBowling: "1/5" },
    radarData: [
      { axis: "Technique", current: 82, peak: 86 },
      { axis: "Power", current: 85, peak: 90 },
      { axis: "Consistency", current: 84, peak: 88 },
      { axis: "Adaptability", current: 80, peak: 86 },
      { axis: "Big Match", current: 88, peak: 92 },
      { axis: "Conversion", current: 78, peak: 84 }
    ],
    careerTimeline: [
      { period: "IPL 2023", dnaScore: 72, innings: 14 },
      { period: "IPL 2024", dnaScore: 78, innings: 14 },
      { period: "Ind v SA T20I 2024", dnaScore: 95, innings: 4 },
      { period: "IPL 2025", dnaScore: 82, innings: 15 },
      { period: "Asia Cup 2025", dnaScore: 88, innings: 5 },
      { period: "T20WC 2026", dnaScore: 86, innings: 8 },
      { period: "IPL 2026*", dnaScore: 87, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d29",
        type: "GROWTH",
        dimension: "T20I Breakthrough",
        magnitude: "3 successive T20 100s — first ever",
        period: "Ind v SA T20I 2024 + SMAT 2024",
        oppositionContext: "Back-to-back T20I centuries vs South Africa (107*, 120*) followed by SMAT 151 — first player with 3 successive T20 100s across all T20s",
        conditionsContext: "Excelled on both flat Johannesburg pitches and Indian domestic surfaces",
        narrative: "Tilak Varma's emergence as India's premier middle-order T20 batter was confirmed by his extraordinary feat of three successive T20 centuries — two against South Africa and one in SMAT. At just 23, he averages 44.84 in T20Is at a SR of 145.55, making him one of the most complete young batters in world cricket. His improved handling of short balls, once a weakness, and his ability to score at 145+ SR while averaging 40+ is rare among middle-order players.",
        fantasySignal: "Future superstar and current premium pick. His consistency (avg 40+) with high SR (145+) at No. 4 is the ideal middle-order fantasy profile. MI have built their 2026 campaign around him.",
        severity: "high",
        detectedAt: "2024-12-01"
      },
      {
        id: "d30",
        type: "DECLINE",
        dimension: "Spin Vulnerability in Middle Overs",
        magnitude: "Low SR vs spin in middle overs — team instructs consolidation",
        period: "IPL 2024-2025",
        oppositionContext: "Dot ball percentage increases significantly vs quality spin (Rashid, Varun, Chahal) in overs 8-14",
        conditionsContext: "More pronounced on turning tracks in Chennai and Kolkata",
        narrative: "Tilak's one weakness is his middle-overs scoring rate against spin. While his overall SR is excellent, he tends to consolidate in the 8-14 over phase, which MI have instructed him to do as the anchor alongside Hardik and SKY. His dot ball percentage against leg-spin is notably higher than career average, suggesting teams can target him with spin in this window.",
        fantasySignal: "Monitor batting position — he's best when coming in during the powerplay or at the death. Middle-overs entries on slow pitches reduce his ceiling.",
        severity: "low",
        detectedAt: "2025-08-01"
      },
      {
        id: "d31",
        type: "RECOVERY",
        dimension: "Post-Surgery Comeback",
        magnitude: "Full recovery from testicular torsion surgery",
        period: "Early 2026",
        oppositionContext: "Missed NZ T20Is but returned for T20WC 2026 warm-up (38 off 24) and main tournament",
        conditionsContext: "Surgery in early 2026, quick recovery allowed participation in World Cup",
        narrative: "A testicular torsion surgery in early 2026 briefly threatened his T20WC participation. But Tilak's rapid recovery and 38(24) in the warm-up game confirmed his fitness. He was named Asia Cup 2025 final POTM (69*) before the surgery, and his T20WC 2026 contributions solidified India's middle order. At 23, he has decades of T20 cricket ahead.",
        fantasySignal: "Fully fit and in peak form. The surgery is behind him with no lasting impact. Lock him in as a top-5 middle-order pick for IPL 2026.",
        severity: "low",
        detectedAt: "2026-02-15"
      }
    ],
    recentInnings: [
      { match: "T20WC vs NZ", opponent: "NZ", score: 25, balls: 16, date: "2026-03-10" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 44, balls: 16, date: "2026-03-06" },
      { match: "T20WC vs WI", opponent: "WI", score: 31, balls: 27, date: "2026-03-02" },
      { match: "Asia Cup Final", opponent: "PAK", score: 69, balls: 42, date: "2025-10-15" },
      { match: "IPL vs RCB", opponent: "RCB", score: 55, balls: 38, date: "2025-05-18" },
      { match: "IPL vs DC", opponent: "DC", score: 42, balls: 28, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 84, balls: 52, date: "2025-05-06" },
      { match: "T20I vs SA", opponent: "SA", score: 120, balls: 72, date: "2024-11-15" },
      { match: "T20I vs SA", opponent: "SA", score: 107, balls: 58, date: "2024-11-12" },
      { match: "IPL vs CSK", opponent: "CSK", score: 35, balls: 24, date: "2025-04-26" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 380, strikeRate: 142.5, average: 32.4 },
      { phase: "Middle", runs: 1620, strikeRate: 138.8, average: 42.2 },
      { phase: "Death", runs: 889, strikeRate: 168.4, average: 44.8 }
    ],
    dismissalPatterns: { caught: 38, bowled: 16, lbw: 14, stumped: 8, runOut: 6, others: 18 },
    keyInsight: "Only player in history with 3 successive T20 100s — India's future No. 4 averaging 44 at SR 145 at just 23 years old"
  },
  {
    id: 16,
    name: "Phil Salt",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    team: "Delhi Capitals",
    teamShort: "DC",
    teamColor: "#004C93",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 29,
    dnaScore: 88,
    dnaScoreTrend: "improving",
    stats: { matches: 80, innings: 78, runs: 2479, average: 36.75, strikeRate: 172.85, highest: 141, hundreds: 4, fifties: 12 },
    radarData: [
      { axis: "Technique", current: 72, peak: 76 },
      { axis: "Power", current: 95, peak: 97 },
      { axis: "Consistency", current: 78, peak: 82 },
      { axis: "Adaptability", current: 72, peak: 76 },
      { axis: "Big Match", current: 75, peak: 80 },
      { axis: "Conversion", current: 70, peak: 76 }
    ],
    careerTimeline: [
      { period: "IPL 2023", dnaScore: 72, innings: 8 },
      { period: "Eng v WI T20I 2024", dnaScore: 85, innings: 4 },
      { period: "IPL 2024", dnaScore: 88, innings: 14 },
      { period: "T20WC 2024", dnaScore: 75, innings: 5 },
      { period: "IPL 2025", dnaScore: 90, innings: 14 },
      { period: "Eng v SA T20I 2025", dnaScore: 95, innings: 3 },
      { period: "T20WC 2026", dnaScore: 72, innings: 6 },
      { period: "IPL 2026*", dnaScore: 88, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d32",
        type: "GROWTH",
        dimension: "T20 Batting Performance of the Year",
        magnitude: "1363 T20 runs in 2025 at SR 158 with 4 T20I 100s",
        period: "2025",
        oppositionContext: "141* vs SA (helped England post 303 — highest T20I total vs a Test nation), 4 T20I centuries in 2024-25",
        conditionsContext: "Dominant across all conditions — 435 IPL runs at SR 182, 403 at SR 176 in 2025",
        narrative: "Phil Salt is the most destructive opener in world T20 cricket. His 2025 saw 1363 runs across all T20s at avg 34 and SR 158, named ESPNcricinfo's T20I batting performance of the year. His 141* against South Africa was one of the great T20I innings, helping England post 303. In the IPL, he's maintained an absurd SR of 175+ across two seasons for DC, making him the fastest scorer in the competition's history among regulars.",
        fantasySignal: "Must-have opener in any T20 format. His SR floor of 170+ means even a 20-ball knock delivers impact. Premium captain pick at pace-friendly venues.",
        severity: "high",
        detectedAt: "2025-12-01"
      },
      {
        id: "d33",
        type: "DECLINE",
        dimension: "Middle Overs vs Spin Vulnerability",
        magnitude: "SR drops to 131 vs spin on stumps",
        period: "2024-2025",
        oppositionContext: "Vulnerable to good length off-stump deliveries in middle overs — SR 130 against spin on stumps",
        conditionsContext: "Exposed on turning pitches in Chennai and Kolkata; death overs pull shot leads to 46% midwicket dismissals",
        narrative: "Salt's weakness is well-documented: good length deliveries outside off in the middle overs, and spin on the stumps. When teams bowl to this plan, his SR drops from 170+ to around 130. In the T20WC 2026, he managed just 5 vs India and 0 vs Pakistan before being dismissed cheaply, showing that elite T20I bowling can expose this limitation.",
        fantasySignal: "Discount against teams with quality middle-overs spin (India, Afghanistan). On pace-friendly pitches, he's unstoppable. On turners, he's mortal.",
        severity: "medium",
        detectedAt: "2026-03-10"
      }
    ],
    recentInnings: [
      { match: "T20WC vs IND", opponent: "IND", score: 5, balls: 6, date: "2026-03-08" },
      { match: "T20WC vs NZ", opponent: "NZ", score: 2, balls: 5, date: "2026-03-04" },
      { match: "T20I vs SA", opponent: "SA", score: 141, balls: 70, date: "2025-11-22" },
      { match: "T20I vs SL", opponent: "SL", score: 62, balls: 35, date: "2025-09-15" },
      { match: "IPL vs MI", opponent: "MI", score: 89, balls: 42, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 55, balls: 30, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 42, balls: 24, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 18, balls: 12, date: "2025-04-26" },
      { match: "IPL vs GT", opponent: "GT", score: 72, balls: 38, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 35, balls: 20, date: "2025-04-12" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1280, strikeRate: 182.5, average: 38.4 },
      { phase: "Middle", runs: 820, strikeRate: 158.8, average: 32.8 },
      { phase: "Death", runs: 379, strikeRate: 192.4, average: 28.6 }
    ],
    dismissalPatterns: { caught: 44, bowled: 18, lbw: 10, stumped: 6, runOut: 8, hitWicket: 2, others: 12 },
    keyInsight: "T20 cricket's fastest scorer — career SR 172 with 141* vs SA and back-to-back IPL seasons at SR 175+"
  },
  {
    id: 17,
    name: "Kagiso Rabada",
    country: "South Africa",
    countryFlag: "🇿🇦",
    team: "Gujarat Titans",
    teamShort: "GT",
    teamColor: "#1B2133",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    age: 31,
    dnaScore: 78,
    dnaScoreTrend: "stable",
    stats: { matches: 163, innings: 158, runs: 399, average: 12.47, strikeRate: 111.45, highest: 44, hundreds: 0, fifties: 0, wickets: 202, bowlingAvg: 28.82, economy: 8.52, bestBowling: "4/21" },
    radarData: [
      { axis: "Accuracy", current: 80, peak: 88 },
      { axis: "Variation", current: 78, peak: 82 },
      { axis: "Economy", current: 68, peak: 75 },
      { axis: "Wicket-Taking", current: 82, peak: 88 },
      { axis: "Death Bowling", current: 72, peak: 80 },
      { axis: "New Ball", current: 88, peak: 92 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 92, innings: 17 },
      { period: "SA v Ind T20I 2022", dnaScore: 78, innings: 3 },
      { period: "IPL 2023", dnaScore: 75, innings: 14 },
      { period: "T20WC 2024", dnaScore: 80, innings: 8 },
      { period: "IPL 2024", dnaScore: 72, innings: 14 },
      { period: "IPL 2025", dnaScore: 78, innings: 12 },
      { period: "T20WC 2026", dnaScore: 75, innings: 7 },
      { period: "IPL 2026*", dnaScore: 78, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d34",
        type: "GROWTH",
        dimension: "Powerplay Strike Bowling",
        magnitude: "Best powerplay wicket-taker in 2025",
        period: "IPL 2025",
        oppositionContext: "IPL 2025: 14 wkts at 24.7 avg, econ 8.21 — improved from 2024's 20 wkts at 34.9 avg, econ 8.84",
        conditionsContext: "Effective with new ball on all surfaces — generates bounce from back of length on any pitch",
        narrative: "Rabada's powerplay bowling remains world-class. His ability to generate pace (140-150 kph) and bounce from back of a length makes him one of the most dangerous new-ball bowlers in T20 cricket. He surpassed Dale Steyn as South Africa's 2nd-highest T20WC wicket-taker (32 wickets) and was the fastest bowler to 100 IPL wickets. His 2025 IPL improvement (economy down from 8.84 to 8.21) shows he's refining his plans.",
        fantasySignal: "Reliable premium bowler pick for powerplay wicket bonus formats. His economy is a concern (8.52 career), but his wicket-taking compensates.",
        severity: "medium",
        detectedAt: "2025-06-01"
      },
      {
        id: "d35",
        type: "VOLATILITY",
        dimension: "Injury and Availability",
        magnitude: "Ankle and rib injuries in 2025",
        period: "2025",
        oppositionContext: "Missed Australia ODIs (ankle inflammation Aug 2025) and SA20 start (rib injury Dec 2025)",
        conditionsContext: "Workload management increasingly necessary at 31 with multi-format commitments",
        narrative: "Rabada's body is showing the strain of being a multi-format fast bowler. Ankle inflammation in August 2025 and a rib injury in December 2025 forced him to miss significant cricket. His final-over no-ball against Afghanistan in T20WC 2026 — which nearly cost SA — highlighted the pressure-induced lapses that creep in when he's managing physical niggles.",
        fantasySignal: "Check fitness updates before drafting. When fully fit, he's elite. But the injury pattern suggests he'll miss 2-3 IPL matches per season.",
        severity: "medium",
        detectedAt: "2026-01-01"
      }
    ],
    recentInnings: [
      { match: "T20WC vs AFG", opponent: "AFG", score: 8, balls: 6, date: "2026-03-06" },
      { match: "T20WC vs WI", opponent: "WI", score: 4, balls: 4, date: "2026-03-02" },
      { match: "IPL vs MI", opponent: "MI", score: 12, balls: 10, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 0, balls: 2, date: "2025-05-12" },
      { match: "IPL vs DC", opponent: "DC", score: 15, balls: 12, date: "2025-04-26" },
      { match: "IPL vs CSK", opponent: "CSK", score: 3, balls: 4, date: "2025-04-18" },
      { match: "IPL vs SRH", opponent: "SRH", score: 22, balls: 16, date: "2025-04-12" },
      { match: "SA20 vs PR", opponent: "PR", score: 8, balls: 6, date: "2026-01-10" },
      { match: "T20I vs Ind", opponent: "IND", score: 5, balls: 5, date: "2024-11-12" },
      { match: "IPL vs KKR", opponent: "KKR", score: 10, balls: 8, date: "2025-04-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "Surpassed Steyn as SA's #2 T20WC wicket-taker — elite powerplay strike bowler with improving IPL economy"
  },
  {
    id: 18,
    name: "Ravindra Jadeja",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Chennai Super Kings",
    teamShort: "CSK",
    teamColor: "#FFC425",
    role: "All-rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox",
    age: 37,
    dnaScore: 74,
    dnaScoreTrend: "declining",
    stats: { matches: 328, innings: 298, runs: 3775, average: 26.22, strikeRate: 129.82, highest: 77, hundreds: 0, fifties: 6, wickets: 224, bowlingAvg: 27.42, economy: 7.48, bestBowling: "4/18" },
    radarData: [
      { axis: "Bat Power", current: 70, peak: 82 },
      { axis: "Bowl Strike", current: 72, peak: 82 },
      { axis: "Consistency", current: 68, peak: 78 },
      { axis: "Versatility", current: 85, peak: 92 },
      { axis: "Death Impact", current: 72, peak: 88 },
      { axis: "Big Match", current: 78, peak: 90 }
    ],
    careerTimeline: [
      { period: "IPL 2019", dnaScore: 78, innings: 16 },
      { period: "T20WC 2021", dnaScore: 72, innings: 5 },
      { period: "IPL 2023", dnaScore: 88, innings: 16 },
      { period: "T20WC 2024", dnaScore: 70, innings: 5 },
      { period: "IPL 2024", dnaScore: 75, innings: 15 },
      { period: "IPL 2025", dnaScore: 72, innings: 16 },
      { period: "IPL 2026*", dnaScore: 74, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d36",
        type: "DECLINE",
        dimension: "T20I Retirement Impact",
        magnitude: "Limited to IPL-only appearances",
        period: "Post T20WC 2024",
        oppositionContext: "Retired from T20Is after 2024 World Cup win — 74 T20I caps, 54 wickets, part of winning squad",
        conditionsContext: "IPL-only player now — CSK's senior all-rounder but declining impact",
        narrative: "Jadeja's retirement from T20Is after the 2024 World Cup win limits his T20 exposure to the IPL. His T20I career ended with 515 runs at SR 127 and 54 wickets at economy 7.13 — respectable but below his Test/ODI greatness. In the IPL, his economy of 7.67 and batting average of 27.86 make him a solid but no longer spectacular all-round option. His IPL 2023 final heroics (finishing the game for CSK) remain his peak T20 moment.",
        fantasySignal: "Reliable mid-range all-rounder pick. His economy control (sub-7.7) and occasional batting cameos add value. But his ceiling is lower than younger alternatives like Axar Patel.",
        severity: "medium",
        detectedAt: "2025-06-01"
      },
      {
        id: "d37",
        type: "GROWTH",
        dimension: "Middle Overs Economy Control",
        magnitude: "Consistent sub-7.5 econ in middle overs",
        period: "IPL 2024-2025",
        oppositionContext: "Economical against all teams in overs 7-15 — teams struggle to attack his flat trajectory",
        conditionsContext: "Most effective on Chennai's slow turners where his accuracy is rewarded",
        narrative: "Jadeja's middle-overs economy remains among the best in the IPL for all-rounders. His flat, quick delivery style on Chennai pitches makes run-scoring difficult. While his wicket hauls have decreased, his economy control — consistently under 7.5 in the middle phase — makes him valuable in a bowling unit alongside Noor Ahmad and the CSK pace attack.",
        fantasySignal: "Economy-based value pick. In formats that reward low economy, Jadeja is a safe floor selection. Don't expect wickets or big runs — he's a stabilizer.",
        severity: "low",
        detectedAt: "2025-05-20"
      }
    ],
    recentInnings: [
      { match: "IPL vs SRH", opponent: "SRH", score: 32, balls: 24, date: "2025-05-18" },
      { match: "IPL vs MI", opponent: "MI", score: 18, balls: 14, date: "2025-05-12" },
      { match: "IPL vs RCB", opponent: "RCB", score: 45, balls: 30, date: "2025-05-06" },
      { match: "IPL vs GT", opponent: "GT", score: 12, balls: 10, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 8, balls: 8, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 55, balls: 38, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 22, balls: 18, date: "2025-04-06" },
      { match: "T20WC vs AFG", opponent: "AFG", score: 7, balls: 5, date: "2024-06-20" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 38, balls: 26, date: "2025-03-30" },
      { match: "IPL vs LSG", opponent: "LSG", score: 15, balls: 12, date: "2025-03-24" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 320, strikeRate: 118.5, average: 20.4 },
      { phase: "Middle", runs: 1820, strikeRate: 128.8, average: 28.2 },
      { phase: "Death", runs: 1635, strikeRate: 152.6, average: 30.8 }
    ],
    dismissalPatterns: { caught: 40, bowled: 18, lbw: 12, stumped: 4, runOut: 10, hitWicket: 2, others: 14 },
    keyInsight: "CSK's veteran all-rounder with elite fielding — middle overs economy control remains valuable despite declining bat/ball impact"
  },
  {
    id: 19,
    name: "Mitchell Starc",
    country: "Australia",
    countryFlag: "🇦🇺",
    team: "Delhi Capitals",
    teamShort: "DC",
    teamColor: "#004C93",
    role: "Bowler",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm fast",
    age: 36,
    dnaScore: 80,
    dnaScoreTrend: "stable",
    stats: { matches: 117, innings: 112, runs: 209, average: 10.14, strikeRate: 95.43, highest: 29, hundreds: 0, fifties: 0, wickets: 144, bowlingAvg: 24.12, economy: 8.12, bestBowling: "5/35" },
    radarData: [
      { axis: "Accuracy", current: 78, peak: 88 },
      { axis: "Variation", current: 82, peak: 88 },
      { axis: "Economy", current: 65, peak: 72 },
      { axis: "Wicket-Taking", current: 85, peak: 92 },
      { axis: "Death Bowling", current: 82, peak: 90 },
      { axis: "New Ball", current: 88, peak: 95 }
    ],
    careerTimeline: [
      { period: "T20WC 2021", dnaScore: 78, innings: 5 },
      { period: "IPL 2024", dnaScore: 75, innings: 15 },
      { period: "T20WC 2024", dnaScore: 72, innings: 5 },
      { period: "IPL 2025", dnaScore: 82, innings: 17 },
      { period: "IPL 2026*", dnaScore: 80, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d38",
        type: "GROWTH",
        dimension: "IPL Career Best Season",
        magnitude: "5/35 and 200th T20 wicket in IPL 2025",
        period: "IPL 2025",
        oppositionContext: "IPL 2025: 284 runs at avg 23.7, SR 154 with bat; bowling highlights include 5/35 vs SRH (first IPL 5-wicket haul), 200th career T20 wicket",
        conditionsContext: "Delhi's Kotla pitch offered movement for left-armers — Starc thrived with the new ball",
        narrative: "Starc justified DC's massive ₹11.75cr investment in IPL 2025 with his career-best IPL season. His maiden 5-wicket haul (5/35 vs SRH) came in his 144th T20 match, and he reached 200 career T20 wickets during the season. The left-arm angle, yorker accuracy, and slower-ball variations made him lethal in death overs. His all-round contribution with the bat (SR 154) added unexpected value.",
        fantasySignal: "Premium fast bowler pick at venues with seam movement. His left-arm angle is a rare commodity in T20 cricket. DC's home ground suits his style.",
        severity: "high",
        detectedAt: "2025-06-01"
      },
      {
        id: "d39",
        type: "DECLINE",
        dimension: "T20I Retirement and Availability",
        magnitude: "Retired from T20Is — IPL only",
        period: "2025-2026",
        oppositionContext: "Announced T20I retirement — will only play IPL and potentially BBL going forward",
        conditionsContext: "Past elbow injuries and personal reasons withdrawal in 2025 raise availability questions",
        narrative: "Starc's T20I retirement means he's now an IPL-specialist asset. At 36, his body management is critical — past elbow injuries and a personal reasons withdrawal during IPL 2025 (returned quickly) suggest he may not play every match. However, when available, his left-arm pace over 145 kph and record IPL auction price (₹24.75cr in 2024 for KKR) confirm his elite status.",
        fantasySignal: "Monitor availability closely. Plan for 12-14 matches rather than the full IPL season. His per-match impact justifies the investment when he plays.",
        severity: "medium",
        detectedAt: "2025-10-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs SRH", opponent: "SRH", score: 12, balls: 8, date: "2025-05-18" },
      { match: "IPL vs MI", opponent: "MI", score: 5, balls: 6, date: "2025-05-12" },
      { match: "IPL vs RCB", opponent: "RCB", score: 29, balls: 18, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 0, balls: 2, date: "2025-04-26" },
      { match: "IPL vs GT", opponent: "GT", score: 8, balls: 6, date: "2025-04-18" },
      { match: "IPL vs KKR", opponent: "KKR", score: 15, balls: 12, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 3, balls: 4, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 18, balls: 14, date: "2025-03-30" },
      { match: "IPL vs LSG", opponent: "LSG", score: 0, balls: 1, date: "2025-03-24" },
      { match: "IPL vs DC", opponent: "DC", score: 10, balls: 8, date: "2024-05-10" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "Left-arm pace unicorn with maiden IPL 5-fer and 200th T20 wicket in 2025 — DC's strike weapon despite availability concerns"
  },
  {
    id: 20,
    name: "Sanju Samson",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Chennai Super Kings",
    teamShort: "CSK",
    teamColor: "#FFC425",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 31,
    dnaScore: 86,
    dnaScoreTrend: "improving",
    stats: { matches: 239, innings: 228, runs: 6103, average: 30.06, strikeRate: 145.42, highest: 119, hundreds: 4, fifties: 30 },
    radarData: [
      { axis: "Technique", current: 80, peak: 84 },
      { axis: "Power", current: 88, peak: 92 },
      { axis: "Consistency", current: 72, peak: 78 },
      { axis: "Adaptability", current: 78, peak: 82 },
      { axis: "Big Match", current: 90, peak: 92 },
      { axis: "Conversion", current: 68, peak: 74 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 75, innings: 14 },
      { period: "IPL 2022", dnaScore: 72, innings: 17 },
      { period: "IPL 2023", dnaScore: 68, innings: 16 },
      { period: "Ind v SA T20I 2024", dnaScore: 95, innings: 4 },
      { period: "IPL 2024", dnaScore: 82, innings: 14 },
      { period: "IPL 2025", dnaScore: 75, innings: 9 },
      { period: "T20WC 2026", dnaScore: 95, innings: 5 },
      { period: "IPL 2026*", dnaScore: 86, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d40",
        type: "GROWTH",
        dimension: "T20 World Cup 2026 Hero",
        magnitude: "Player of Tournament — 321 runs in 5 innings",
        period: "T20WC 2026",
        oppositionContext: "89 in semi-final, 97* in final vs NZ, 89 in quarter-final — first player with 3 consecutive 80+ in T20WC knockouts",
        conditionsContext: "Thrived on varied Indian and Sri Lankan surfaces — adapted to both pace and spin conditions",
        narrative: "Sanju Samson's T20WC 2026 was the defining moment of his career. Named Player of the Tournament with 321 runs in 5 innings, he was India's rock in every knockout game. His 97* in the final against New Zealand and consecutive 89s in the quarters and semis made him the first player with three successive 80+ scores in T20WC knockout matches. The three T20I centuries against Bangladesh and South Africa in late 2024 foreshadowed this explosion.",
        fantasySignal: "Premium T20I and IPL pick. His form trajectory post-2024 is the best in Indian cricket. The move to CSK adds intrigue — he'll likely open alongside Gaikwad.",
        severity: "high",
        detectedAt: "2026-03-15"
      },
      {
        id: "d41",
        type: "VOLATILITY",
        dimension: "Form Inconsistency Between Peaks",
        magnitude: "Multiple low-score patches between centuries",
        period: "2024-2025",
        oppositionContext: "Struggled in England and NZ T20I series 2025 (multiple single-digit scores), briefly dropped from XI",
        conditionsContext: "England's seaming conditions and NZ's pace exposed early-innings shot selection",
        narrative: "The Samson paradox persists even as his peaks get higher. Between the T20I centuries of late 2024 and his T20WC 2026 heroics, there were form dips vs England and NZ where he was briefly dropped. His IPL 2025 was cut short at 9 innings (285 runs) due to rib cage and finger injuries. The pattern of explosive purple patches followed by quiet spells makes him a fantasy rollercoaster.",
        fantasySignal: "When hot, he's the best batter in the world. When cold, he's a liability. Monitor recent form and back him during purple patches — his ceiling justifies the volatility.",
        severity: "medium",
        detectedAt: "2025-08-01"
      }
    ],
    recentInnings: [
      { match: "T20WC Final vs NZ", opponent: "NZ", score: 97, balls: 50, date: "2026-03-10" },
      { match: "T20WC SF vs ENG", opponent: "ENG", score: 89, balls: 46, date: "2026-03-08" },
      { match: "T20WC QF vs AUS", opponent: "AUS", score: 89, balls: 42, date: "2026-03-06" },
      { match: "T20WC vs PAK", opponent: "PAK", score: 24, balls: 15, date: "2026-03-01" },
      { match: "T20WC vs SL", opponent: "SL", score: 22, balls: 8, date: "2026-02-26" },
      { match: "IPL vs MI", opponent: "MI", score: 62, balls: 38, date: "2025-05-06" },
      { match: "IPL vs RCB", opponent: "RCB", score: 18, balls: 14, date: "2025-04-26" },
      { match: "T20I vs SA", opponent: "SA", score: 109, balls: 56, date: "2024-11-15" },
      { match: "T20I vs SA", opponent: "SA", score: 107, balls: 58, date: "2024-11-12" },
      { match: "T20I vs BAN", opponent: "BAN", score: 111, balls: 65, date: "2024-10-12" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1680, strikeRate: 148.5, average: 32.4 },
      { phase: "Middle", runs: 2880, strikeRate: 142.8, average: 30.2 },
      { phase: "Death", runs: 1543, strikeRate: 162.6, average: 28.8 }
    ],
    dismissalPatterns: { caught: 46, bowled: 16, lbw: 10, stumped: 4, runOut: 10, hitWicket: 2, others: 12 },
    keyInsight: "T20WC 2026 Player of Tournament — 321 runs in 5 innings with 3 consecutive 80+ in knockout rounds; traded to CSK"
  },
  {
    id: 21,
    name: "Noor Ahmad",
    country: "Afghanistan",
    countryFlag: "🇦🇫",
    team: "Chennai Super Kings",
    teamShort: "CSK",
    teamColor: "#FFC425",
    role: "Bowler",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm wrist spin",
    age: 19,
    dnaScore: 82,
    dnaScoreTrend: "improving",
    stats: { matches: 57, innings: 54, runs: 84, average: 5.60, strikeRate: 72.41, highest: 15, hundreds: 0, fifties: 0, wickets: 64, bowlingAvg: 22.68, economy: 7.62, bestBowling: "5/8" },
    radarData: [
      { axis: "Accuracy", current: 78, peak: 82 },
      { axis: "Variation", current: 85, peak: 90 },
      { axis: "Economy", current: 72, peak: 78 },
      { axis: "Wicket-Taking", current: 82, peak: 88 },
      { axis: "Death Bowling", current: 75, peak: 82 },
      { axis: "New Ball", current: 68, peak: 74 }
    ],
    careerTimeline: [
      { period: "BBL 2023", dnaScore: 68, innings: 10 },
      { period: "SA20 2024", dnaScore: 75, innings: 10 },
      { period: "IPL 2024", dnaScore: 72, innings: 8 },
      { period: "CPL 2024", dnaScore: 78, innings: 10 },
      { period: "IPL 2025", dnaScore: 88, innings: 14 },
      { period: "Asia Cup 2025", dnaScore: 92, innings: 4 },
      { period: "SA20 2026", dnaScore: 80, innings: 8 },
      { period: "IPL 2026*", dnaScore: 82, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d42",
        type: "GROWTH",
        dimension: "IPL Breakout Season",
        magnitude: "24 wickets in 14 innings — 2nd highest in IPL 2025",
        period: "IPL 2025",
        oppositionContext: "4/18 vs MI was his standout spell; consistent across all opponents for CSK",
        conditionsContext: "Chennai's turning pitches were ideal for his left-arm wrist spin variations",
        narrative: "Noor Ahmad's IPL 2025 breakout was the story of CSK's season. At just 18, he claimed 24 wickets in 14 innings — the 2nd highest in the tournament — justifying his ₹10cr auction price. His left-arm wrist spin offers a unique angle that batters struggle to pick, and his middle-overs economy on Chennai's slow surfaces made him CSK's primary wicket-taking threat. His Asia Cup 2025 performance (5/3) confirmed his international credentials.",
        fantasySignal: "Premium young spinner pick on turning pitches. His 24 IPL wickets prove he's not a one-season wonder. Best deployed when CSK plays at home in Chennai.",
        severity: "high",
        detectedAt: "2025-06-01"
      },
      {
        id: "d43",
        type: "VOLATILITY",
        dimension: "Economy in Non-Spinning Conditions",
        magnitude: "IPL economy 8.08 vs T20I economy 6.56",
        period: "2024-2025",
        oppositionContext: "More expensive on flat IPL decks (econ 8.08) compared to international T20s (econ 6.56)",
        conditionsContext: "Flat Wankhede and Chinnaswamy pitches exposed his length bowling; better on turning surfaces",
        narrative: "While Noor's wicket-taking is undeniable, his IPL economy of 8.08 is significantly higher than his T20I economy of 6.56. On non-turning pitches, established batters attack his shorter variations. At 19, there's time to develop this aspect, but teams should be aware that his economy can balloon on flat batting surfaces. His occasional expensive T20I spell (0/35 vs SA) shows the vulnerability exists at international level too.",
        fantasySignal: "Venue-dependent selection. Premium on turners, risky on flat tracks. Check pitch reports before locking him in.",
        severity: "medium",
        detectedAt: "2025-11-01"
      }
    ],
    recentInnings: [
      { match: "SA20 vs JSK", opponent: "JSK", score: 8, balls: 10, date: "2026-01-15" },
      { match: "Asia Cup vs PAK", opponent: "PAK", score: 2, balls: 4, date: "2025-10-12" },
      { match: "IPL vs MI", opponent: "MI", score: 7, balls: 8, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 0, balls: 2, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 5, balls: 6, date: "2025-04-26" },
      { match: "IPL vs GT", opponent: "GT", score: 3, balls: 4, date: "2025-04-18" },
      { match: "IPL vs DC", opponent: "DC", score: 12, balls: 10, date: "2025-04-12" },
      { match: "T20I vs SA", opponent: "SA", score: 15, balls: 12, date: "2025-11-20" },
      { match: "IPL vs KKR", opponent: "KKR", score: 0, balls: 1, date: "2025-04-06" },
      { match: "CPL vs TKR", opponent: "TKR", score: 4, balls: 5, date: "2024-09-15" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "19-year-old Afghan left-arm wrist spinner with 24 IPL 2025 wickets and Asia Cup 5/3 — CSK's breakout star"
  },
  {
    id: 22,
    name: "KL Rahul",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Delhi Capitals",
    teamShort: "DC",
    teamColor: "#004C93",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    age: 34,
    dnaScore: 77,
    dnaScoreTrend: "stable",
    stats: { matches: 217, innings: 210, runs: 7487, average: 43.52, strikeRate: 137.12, highest: 132, hundreds: 3, fifties: 52 },
    radarData: [
      { axis: "Technique", current: 85, peak: 92 },
      { axis: "Power", current: 75, peak: 82 },
      { axis: "Consistency", current: 82, peak: 88 },
      { axis: "Adaptability", current: 70, peak: 78 },
      { axis: "Big Match", current: 68, peak: 75 },
      { axis: "Conversion", current: 78, peak: 85 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 88, innings: 14 },
      { period: "T20WC 2021", dnaScore: 65, innings: 4 },
      { period: "IPL 2022", dnaScore: 78, innings: 15 },
      { period: "IPL 2024", dnaScore: 76, innings: 14 },
      { period: "Ind v SA T20I 2024", dnaScore: 62, innings: 3 },
      { period: "IPL 2025", dnaScore: 82, innings: 13 },
      { period: "IPL 2026*", dnaScore: 77, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d44",
        type: "GROWTH",
        dimension: "IPL 2025 Renaissance",
        magnitude: "539 runs at avg 53.9, SR 150 with maiden IPL 100",
        period: "IPL 2025",
        oppositionContext: "IPL 2025: 539 runs at 53.9 avg, SR 150 with 112* — his best IPL season by SR since 2020 (670 runs, Orange Cap)",
        conditionsContext: "Lucknow and away venues — proved effectiveness across all ground types",
        narrative: "KL Rahul's IPL 2025 for LSG was a reminder of his immense quality. His 539 runs at 53.9 average and 150 SR — including his maiden IPL century (112*) — was his most aggressive IPL season in years. The improved strike rate (up from 136 career to 150 in 2025) suggested a deliberate tactical shift towards more intent, particularly in the powerplay where he had historically been conservative.",
        fantasySignal: "Reliable high-floor pick with improved ceiling. His average (46.21 IPL career) is the highest among regular IPL batters. Safe captain pick at all venues.",
        severity: "medium",
        detectedAt: "2025-06-10"
      },
      {
        id: "d45",
        type: "DECLINE",
        dimension: "T20I Exile",
        magnitude: "No T20I selection since 2023 despite IPL dominance",
        period: "2022-2026",
        oppositionContext: "Axed from T20I setup post-2021 — missed T20WC 2024 and 2026; replaced by more aggressive options",
        conditionsContext: "Selectors prefer higher SR batters (Jaiswal, Abhishek Sharma, Samson) in T20I setup",
        narrative: "Despite an IPL career average of 46.21, Rahul hasn't played T20Is since 2023. His T20I average (37.75) and SR (139.13) are strong, but India's aggressive template demands more intent in the powerplay — where Rahul has historically been conservative. Frequent thigh, groin, and hamstring injuries (missing multiple T20I series 2022-24) damaged his reliability in the selectors' eyes.",
        fantasySignal: "IPL-only fantasy asset. His DC move for IPL 2026 opens new possibilities, but don't expect a T20I recall. Premium IPL pick, irrelevant for international fantasy.",
        severity: "high",
        detectedAt: "2025-12-01"
      }
    ],
    recentInnings: [
      { match: "IPL vs MI", opponent: "MI", score: 82, balls: 52, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 55, balls: 38, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 22, balls: 18, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 112, balls: 68, date: "2025-04-26" },
      { match: "IPL vs KKR", opponent: "KKR", score: 45, balls: 32, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 8, balls: 8, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 62, balls: 42, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 35, balls: 26, date: "2025-03-30" },
      { match: "IPL vs DC", opponent: "DC", score: 72, balls: 48, date: "2024-05-12" },
      { match: "IPL vs LSG", opponent: "LSG", score: 18, balls: 14, date: "2024-05-06" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 2120, strikeRate: 128.5, average: 42.4 },
      { phase: "Middle", runs: 3480, strikeRate: 136.8, average: 46.2 },
      { phase: "Death", runs: 1887, strikeRate: 158.4, average: 38.6 }
    ],
    dismissalPatterns: { caught: 42, bowled: 18, lbw: 14, stumped: 6, runOut: 8, hitWicket: 1, others: 11 },
    keyInsight: "IPL's highest career average (46.21) with improved SR of 150 in 2025 — DC's anchor despite T20I exile since 2023"
  },
  {
    id: 23,
    name: "Varun Chakaravarthy",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Kolkata Knight Riders",
    teamShort: "KKR",
    teamColor: "#3A225D",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm leg break",
    age: 35,
    dnaScore: 89,
    dnaScoreTrend: "improving",
    stats: { matches: 122, innings: 118, runs: 16, average: 4.00, strikeRate: 42.10, highest: 10, hundreds: 0, fifties: 0, wickets: 171, bowlingAvg: 18.82, economy: 7.68, bestBowling: "5/17" },
    radarData: [
      { axis: "Accuracy", current: 88, peak: 90 },
      { axis: "Variation", current: 92, peak: 94 },
      { axis: "Economy", current: 78, peak: 82 },
      { axis: "Wicket-Taking", current: 90, peak: 92 },
      { axis: "Death Bowling", current: 75, peak: 80 },
      { axis: "New Ball", current: 72, peak: 76 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 82, innings: 13 },
      { period: "T20WC 2021", dnaScore: 55, innings: 3 },
      { period: "IPL 2022", dnaScore: 60, innings: 12 },
      { period: "IPL 2024", dnaScore: 85, innings: 15 },
      { period: "Ind v SA T20I 2024", dnaScore: 92, innings: 4 },
      { period: "IPL 2025", dnaScore: 88, innings: 14 },
      { period: "T20WC 2026", dnaScore: 90, innings: 8 },
      { period: "IPL 2026*", dnaScore: 89, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d46",
        type: "GROWTH",
        dimension: "World No. 1 T20I Bowler",
        magnitude: "First Indian to hold #1 T20I bowling ranking (818 pts)",
        period: "2024-2026",
        oppositionContext: "27 wkts in 10 T20Is (Oct 2024-Jan 2025, avg 10.96, econ 7.40); T20WC 2026 joint top wkts (14); maiden 5/17 vs SA",
        conditionsContext: "Dominant on Indian surfaces but effective worldwide — 81 middle-overs wickets since 2024",
        narrative: "Varun Chakravarthy's reinvention is one of cricket's great comeback stories. After a disastrous T20WC 2021 and years in the wilderness, he rebuilt his technique in 2023, added a disguised googly (accounting for 79% of recent wickets), increased his pace to 90-110 kph, and emerged as the world's best T20I spinner. His 81 wickets in overs 7-16 since 2024 (SR 12.3, econ 7.55) make him the most dominant middle-overs bowler in world cricket. The maiden T20I 5-wicket haul (5/17 vs SA) confirmed his transformation.",
        fantasySignal: "Must-have spinner pick. His middle-overs dominance guarantees wickets. Leading IPL wicket-taker over the last 2 seasons — lock him in regardless of venue.",
        severity: "high",
        detectedAt: "2025-12-20"
      },
      {
        id: "d47",
        type: "VOLATILITY",
        dimension: "Expensive Spells Under Pressure",
        magnitude: "1/40 and 1/47 in recent T20Is",
        period: "Late 2025-2026",
        oppositionContext: "Expensive against SA (4 costliest T20I spells all vs SA), and occasional WC pressure spells",
        conditionsContext: "More vulnerable when left-hand batters target him — higher econ vs LHBs recently",
        narrative: "Despite his #1 ranking, Varun's occasional expensive spells are a concern. His 4 costliest T20I spells have all come against South Africa, and he had some expensive T20WC 2026 outings late in the tournament. Left-hand batters have found success against him recently, disrupting his googly-dominant strategy. At 35, the concern is whether the mystery wears off as more batters decode his variations.",
        fantasySignal: "Monitor matchups vs teams with strong left-hand batting lineups. Against right-hand-heavy teams, he's virtually unplayable.",
        severity: "medium",
        detectedAt: "2026-03-12"
      }
    ],
    recentInnings: [
      { match: "T20WC vs NZ", opponent: "NZ", score: 1, balls: 2, date: "2026-03-10" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 0, balls: 1, date: "2026-03-06" },
      { match: "IPL vs MI", opponent: "MI", score: 2, balls: 4, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 0, balls: 2, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 5, balls: 6, date: "2025-04-26" },
      { match: "T20I vs SA", opponent: "SA", score: 0, balls: 1, date: "2024-11-15" },
      { match: "IPL vs DC", opponent: "DC", score: 1, balls: 3, date: "2025-04-18" },
      { match: "IPL vs CSK", opponent: "CSK", score: 0, balls: 2, date: "2025-04-12" },
      { match: "IPL vs GT", opponent: "GT", score: 3, balls: 4, date: "2025-04-06" },
      { match: "T20I vs NZ", opponent: "NZ", score: 0, balls: 1, date: "2026-01-22" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "World #1 T20I bowler and first Indian to hold the ranking — 81 middle-overs wickets since 2024 with reinvented mystery spin"
  },
  {
    id: 24,
    name: "Mayank Yadav",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Lucknow Super Giants",
    teamShort: "LSG",
    teamColor: "#ACE5F3",
    role: "Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    age: 23,
    dnaScore: 68,
    dnaScoreTrend: "recovery",
    stats: { matches: 9, innings: 9, runs: 1, average: 1.00, strikeRate: 100.00, highest: 1, hundreds: 0, fifties: 0, wickets: 13, bowlingAvg: 17.62, economy: 8.52, bestBowling: "3/27" },
    radarData: [
      { axis: "Accuracy", current: 72, peak: 85 },
      { axis: "Variation", current: 68, peak: 78 },
      { axis: "Economy", current: 62, peak: 75 },
      { axis: "Wicket-Taking", current: 78, peak: 90 },
      { axis: "Death Bowling", current: 65, peak: 82 },
      { axis: "New Ball", current: 82, peak: 92 }
    ],
    careerTimeline: [
      { period: "IPL 2024", dnaScore: 88, innings: 4 },
      { period: "Ind v BAN T20I 2024", dnaScore: 75, innings: 3 },
      { period: "IPL 2025", dnaScore: 55, innings: 2 },
      { period: "IPL 2026*", dnaScore: 68, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d48",
        type: "DECLINE",
        dimension: "Chronic Back Injuries",
        magnitude: "Multiple stress fractures limiting availability to 9 T20 matches total",
        period: "2024-2026",
        oppositionContext: "Played only 6 IPL matches and 3 T20Is total — 2/40 vs MI and 0/60 vs PBKS in IPL 2025 comeback before re-injury",
        conditionsContext: "Reduced pace from 156.7 kph peak to 130-140 kph on return — back not supporting full pace bowling",
        narrative: "Mayank Yadav's potential is undeniable — IPL 2024 debut of 3/27 including the tournament's fastest ball (156.7 kph) and a T20I debut maiden over (3rd Indian ever). But back stress fractures have limited him to just 9 T20 matches across two years. His IPL 2025 comeback saw reduced pace (130-140 kph) and expensive figures before another injury after 2 matches. At 90% fitness in January 2026, he's targeting IPL 2026 but the pattern of breakdown is concerning.",
        fantasySignal: "Ultra-high-risk, ultra-high-reward pick. When fit and bowling 150+, he's the most exciting fast bowler in Indian cricket. But availability risk is extreme — avoid in season-long formats.",
        severity: "high",
        detectedAt: "2025-05-01"
      },
      {
        id: "d49",
        type: "GROWTH",
        dimension: "Raw Pace Potential",
        magnitude: "Fastest IPL ball (156.7 kph) and debut maiden over",
        period: "IPL 2024",
        oppositionContext: "3/27 on IPL debut; T20I debut maiden over vs Bangladesh (1/21, 1/30, 2/32 across 3 matches)",
        conditionsContext: "Express pace generated bounce and movement on flat Indian pitches — a rare ability",
        narrative: "When Mayank bowls at full tilt, he's potentially the fastest bowler in world cricket. His IPL 2024 debut was sensational — the fastest ball of the tournament (156.7 kph) and 3/27 that announced a genuine express quick. His T20I debut series against Bangladesh (4 wickets in 3 matches) confirmed the talent translates internationally. The question isn't ability — it's durability.",
        fantasySignal: "If pre-season reports indicate full fitness and 150+ kph pace, he's an immediate must-pick. Monitor LSG's injury bulletins obsessively.",
        severity: "medium",
        detectedAt: "2024-04-15"
      }
    ],
    recentInnings: [
      { match: "IPL vs PBKS", opponent: "PBKS", score: 0, balls: 1, date: "2025-04-12" },
      { match: "IPL vs MI", opponent: "MI", score: 0, balls: 2, date: "2025-04-06" },
      { match: "T20I vs BAN", opponent: "BAN", score: 1, balls: 2, date: "2024-10-12" },
      { match: "T20I vs BAN", opponent: "BAN", score: 0, balls: 1, date: "2024-10-09" },
      { match: "T20I vs BAN", opponent: "BAN", score: 0, balls: 1, date: "2024-10-06" },
      { match: "IPL vs RCB", opponent: "RCB", score: 0, balls: 1, date: "2024-04-18" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 0, balls: 1, date: "2024-04-12" },
      { match: "IPL vs MI", opponent: "MI", score: 0, balls: 2, date: "2024-04-06" },
      { match: "IPL vs DC", opponent: "DC", score: 0, balls: 1, date: "2024-03-30" },
      { match: "India A WC warmup", opponent: "BANA", score: 0, balls: 1, date: "2026-02-10" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "India's fastest bowler (156.7 kph) limited to 9 T20 matches by chronic back injuries — ultimate high-risk, high-reward asset"
  },
  {
    id: 25,
    name: "Jos Buttler",
    country: "England",
    countryFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    team: "Rajasthan Royals",
    teamShort: "RR",
    teamColor: "#EA1A85",
    role: "Wicketkeeper-Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    age: 35,
    dnaScore: 78,
    dnaScoreTrend: "declining",
    stats: { matches: 261, innings: 252, runs: 7956, average: 38.62, strikeRate: 149.42, highest: 124, hundreds: 5, fifties: 52 },
    radarData: [
      { axis: "Technique", current: 78, peak: 88 },
      { axis: "Power", current: 85, peak: 95 },
      { axis: "Consistency", current: 68, peak: 82 },
      { axis: "Adaptability", current: 72, peak: 85 },
      { axis: "Big Match", current: 72, peak: 88 },
      { axis: "Conversion", current: 65, peak: 80 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 82, innings: 13 },
      { period: "T20WC 2021", dnaScore: 90, innings: 6 },
      { period: "IPL 2022", dnaScore: 95, innings: 17 },
      { period: "T20WC 2024", dnaScore: 72, innings: 6 },
      { period: "IPL 2024", dnaScore: 78, innings: 14 },
      { period: "IPL 2025", dnaScore: 85, innings: 14 },
      { period: "T20WC 2026", dnaScore: 62, innings: 6 },
      { period: "IPL 2026*", dnaScore: 78, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d50",
        type: "GROWTH",
        dimension: "IPL 2025 Resurgence",
        magnitude: "538 runs at avg 59.78, SR 163 — best IPL SR season",
        period: "IPL 2025",
        oppositionContext: "5 fifties in 14 innings for RR — dominated most bowling attacks with signature scoops and ramps",
        conditionsContext: "Effective across all IPL venues — Jaipur, Mumbai, Bengaluru all yielded big scores",
        narrative: "Buttler's IPL 2025 was his most efficient season ever. His 538 runs at 59.78 average and 163 SR represented his highest strike rate in an IPL season, with 5 fifties showcasing remarkable consistency. His innovative scooping and ramping against pace remains world-class, and his power-hitting against both pace and spin makes him one of the most complete T20 openers ever. With 4 T20I centuries and IPL history of 4000+ runs, his franchise pedigree is undeniable.",
        fantasySignal: "Premium IPL pick, especially when opening. His average of 40+ in IPL makes him one of the safest high-SR picks. Captain material at pace-friendly venues.",
        severity: "high",
        detectedAt: "2025-06-01"
      },
      {
        id: "d51",
        type: "DECLINE",
        dimension: "T20I Form Collapse",
        magnitude: "4 consecutive single-digit scores in 2026",
        period: "Early 2026",
        oppositionContext: "T20WC 2026: 26 vs IND, 26 vs NEP, then 3(4), 3(4), 7(14), 0(2), 2(3) — rock bottom",
        conditionsContext: "Struggled on Indian subcontinent pitches with more spin assistance",
        narrative: "Buttler's T20I form has hit rock bottom. Four consecutive single-digit scores in the T20WC 2026, including 0(2) and 2(3), left him looking a shell of his 2021-22 peak. His weakness against spin on stumps has been ruthlessly exploited by Indian and Asian spinners. At 35, the reflexes for picking variations appear diminished. ESPN described his WC form as 'hitting rock bottom'. The contrast with his IPL 2025 SR of 163 couldn't be starker.",
        fantasySignal: "Avoid in T20I fantasy until form returns. The IPL remains his domain — but for international T20s, he's a liability right now.",
        severity: "high",
        detectedAt: "2026-03-10"
      }
    ],
    recentInnings: [
      { match: "T20WC vs IND", opponent: "IND", score: 26, balls: 17, date: "2026-03-08" },
      { match: "T20WC vs NEP", opponent: "NEP", score: 26, balls: 17, date: "2026-03-04" },
      { match: "T20WC vs NZ", opponent: "NZ", score: 3, balls: 4, date: "2026-03-01" },
      { match: "T20I vs SL", opponent: "SL", score: 7, balls: 14, date: "2026-02-15" },
      { match: "T20I vs SL", opponent: "SL", score: 0, balls: 2, date: "2026-02-12" },
      { match: "IPL vs MI", opponent: "MI", score: 78, balls: 42, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 55, balls: 32, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 88, balls: 50, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 42, balls: 28, date: "2025-04-18" },
      { match: "IPL vs CSK", opponent: "CSK", score: 62, balls: 38, date: "2025-04-12" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 2820, strikeRate: 152.5, average: 40.4 },
      { phase: "Middle", runs: 3240, strikeRate: 148.8, average: 38.2 },
      { phase: "Death", runs: 1896, strikeRate: 168.4, average: 32.6 }
    ],
    dismissalPatterns: { caught: 46, bowled: 18, lbw: 10, stumped: 8, runOut: 6, hitWicket: 2, others: 10 },
    keyInsight: "IPL 2025 best-ever SR season (163) contrasts starkly with T20WC 2026 collapse — franchise elite, international crisis"
  },
  {
    id: 26,
    name: "Kuldeep Yadav",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Delhi Capitals",
    teamShort: "DC",
    teamColor: "#004C93",
    role: "Bowler",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm wrist spin",
    age: 31,
    dnaScore: 83,
    dnaScoreTrend: "stable",
    stats: { matches: 152, innings: 148, runs: 249, average: 10.83, strikeRate: 79.30, highest: 35, hundreds: 0, fifties: 0, wickets: 197, bowlingAvg: 20.42, economy: 7.38, bestBowling: "4/20" },
    radarData: [
      { axis: "Accuracy", current: 85, peak: 88 },
      { axis: "Variation", current: 90, peak: 92 },
      { axis: "Economy", current: 80, peak: 84 },
      { axis: "Wicket-Taking", current: 88, peak: 92 },
      { axis: "Death Bowling", current: 72, peak: 78 },
      { axis: "New Ball", current: 75, peak: 80 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 65, innings: 9 },
      { period: "T20WC 2024", dnaScore: 82, innings: 6 },
      { period: "IPL 2024", dnaScore: 88, innings: 11 },
      { period: "Ind v SA T20I 2024", dnaScore: 80, innings: 4 },
      { period: "IPL 2025", dnaScore: 82, innings: 14 },
      { period: "Ind v NZ T20I 2026", dnaScore: 85, innings: 5 },
      { period: "T20WC 2026", dnaScore: 80, innings: 6 },
      { period: "IPL 2026*", dnaScore: 83, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d52",
        type: "GROWTH",
        dimension: "Best T20I Strike Rate Among Full-Member Bowlers",
        magnitude: "11.86 balls per wicket — best among bowlers with 50+ T20I wkts",
        period: "2024-2026",
        oppositionContext: "95 T20I wkts — IPL 2024 (16 wkts in 11 inns), IPL 2025 (15 wkts in 14 inns), key T20WC 2024 and 2026 contributor",
        conditionsContext: "Effective across all surfaces — deceptive variations trouble batters in all conditions",
        narrative: "Kuldeep Yadav has the best T20I bowling strike rate (11.86 balls per wicket) among all full-member bowlers with 50+ wickets. His left-arm wrist spin offers a unique angle that right-hand batters consistently struggle against. Post-knee surgery in 2021, his comeback has been exceptional — reinvented variations, better pace control, and improved tactical awareness have made him India's first-choice wrist spinner alongside Varun Chakravarthy.",
        fantasySignal: "Reliable wicket-taking spinner pick. His strike rate guarantees regular breakthroughs. Pair with Varun for a devastating spin combo in fantasy teams.",
        severity: "high",
        detectedAt: "2025-12-01"
      },
      {
        id: "d53",
        type: "VOLATILITY",
        dimension: "IPL Economy Fluctuation",
        magnitude: "IPL economy 8.04 vs T20I economy 6.95",
        period: "IPL 2024-2025",
        oppositionContext: "IPL economy higher than T20I due to shorter boundaries and aggressive batting approach in franchise cricket",
        conditionsContext: "Delhi's Kotla pitch helps spinners but away matches inflate economy significantly",
        narrative: "Like many spinners, Kuldeep's IPL economy (8.04) is significantly higher than his T20I numbers (6.95). In franchise cricket, aggressive batters target his slower variations, and shorter boundaries make his flight deliveries riskier. His 16 wickets in 11 IPL 2024 innings were excellent, but the economy creeps up when he bowls at Wankhede or Chinnaswamy.",
        fantasySignal: "Venue-sensitive pick. At Kotla and Chennai, he's premium. At Wankhede and Chinnaswamy, his value drops. Adjust expectations by ground.",
        severity: "low",
        detectedAt: "2025-06-01"
      }
    ],
    recentInnings: [
      { match: "T20WC vs ENG", opponent: "ENG", score: 0, balls: 2, date: "2026-03-06" },
      { match: "T20I vs NZ", opponent: "NZ", score: 2, balls: 4, date: "2026-01-22" },
      { match: "IPL vs MI", opponent: "MI", score: 5, balls: 6, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 0, balls: 2, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 8, balls: 10, date: "2025-04-26" },
      { match: "IPL vs CSK", opponent: "CSK", score: 3, balls: 4, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 12, balls: 14, date: "2025-04-12" },
      { match: "IPL vs KKR", opponent: "KKR", score: 0, balls: 1, date: "2025-04-06" },
      { match: "T20I vs SA", opponent: "SA", score: 23, balls: 18, date: "2024-11-12" },
      { match: "IPL vs RR", opponent: "RR", score: 5, balls: 6, date: "2025-03-30" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Middle", runs: 0, strikeRate: 0, average: 0 },
      { phase: "Death", runs: 0, strikeRate: 0, average: 0 }
    ],
    dismissalPatterns: {},
    keyInsight: "Best T20I bowling strike rate among 50+ wicket bowlers — India's premier left-arm wrist spinner with 197 T20 wickets"
  },
  {
    id: 27,
    name: "Rinku Singh",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Kolkata Knight Riders",
    teamShort: "KKR",
    teamColor: "#3A225D",
    role: "Batter",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 28,
    dnaScore: 76,
    dnaScoreTrend: "stable",
    stats: { matches: 104, innings: 95, runs: 1764, average: 33.28, strikeRate: 148.86, highest: 69, hundreds: 0, fifties: 6, wickets: 3, bowlingAvg: 6.33, economy: 7.12, bestBowling: "1/4" },
    radarData: [
      { axis: "Technique", current: 72, peak: 76 },
      { axis: "Power", current: 88, peak: 92 },
      { axis: "Consistency", current: 68, peak: 74 },
      { axis: "Adaptability", current: 72, peak: 76 },
      { axis: "Big Match", current: 82, peak: 88 },
      { axis: "Conversion", current: 55, peak: 62 }
    ],
    careerTimeline: [
      { period: "IPL 2022", dnaScore: 62, innings: 8 },
      { period: "IPL 2023", dnaScore: 85, innings: 14 },
      { period: "Ind v SA T20I 2023", dnaScore: 72, innings: 3 },
      { period: "IPL 2024", dnaScore: 78, innings: 14 },
      { period: "T20WC 2024", dnaScore: 60, innings: 3 },
      { period: "Ind v NZ T20I 2026", dnaScore: 75, innings: 5 },
      { period: "T20WC 2026", dnaScore: 65, innings: 5 },
      { period: "IPL 2026*", dnaScore: 76, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d54",
        type: "GROWTH",
        dimension: "Death Overs Finishing Legend",
        magnitude: "IPL death overs SR 215+ — among the best ever",
        period: "IPL 2023-2025",
        oppositionContext: "5 sixes in the final over vs GT in 2023 — the only player to achieve this in IPL history. Retained at ₹13cr by KKR",
        conditionsContext: "Death overs specialist across all venues — performs under maximum pressure",
        narrative: "Rinku Singh's legend was born with 5 sixes in a final over against GT in IPL 2023 — the only instance in IPL history. Since then, his death-overs strike rate of 215+ makes him one of the most dangerous finishers in T20 cricket. His calm temperament under pressure, ability to hit sixes at will in the last 4 overs, and left-hand angle against death bowlers make him an elite No. 5-6 option.",
        fantasySignal: "Premium finisher pick in formats that reward death-over hitting. His role is specific (No. 5-6, last 4-5 overs) but when deployed correctly, he's devastating.",
        severity: "high",
        detectedAt: "2025-06-01"
      },
      {
        id: "d55",
        type: "DECLINE",
        dimension: "T20I Consistency Issues",
        magnitude: "Scores of 1, 11, 9, 8, 0 in recent T20I series",
        period: "2024-2026",
        oppositionContext: "Failed in T20WC 2024 and SA/NZ T20I series — avg ~8 in WC phase, multiple single-digit scores",
        conditionsContext: "Struggles when asked to build innings from scratch rather than finish — role clarity issues at international level",
        narrative: "Rinku's IPL finishing prowess hasn't fully translated to T20Is. His recent international scores (1, 11, 9, 8, 0 in the WC/SA phase) expose a limitation: he's elite when entering at the death with 3-5 overs left, but struggles when asked to build an innings from a top-order collapse. His T20I average of 39.11 is inflated by a few big knocks; the median score is much lower. The recovery came against NZ in Jan 2026 (44*(20), 39(30)) but consistency remains elusive.",
        fantasySignal: "IPL specialist finisher. For T20I fantasy, treat as a situational pick only. His value depends entirely on batting position and game situation.",
        severity: "medium",
        detectedAt: "2026-01-20"
      }
    ],
    recentInnings: [
      { match: "T20I vs NZ", opponent: "NZ", score: 44, balls: 20, date: "2026-01-26" },
      { match: "T20I vs NZ", opponent: "NZ", score: 39, balls: 30, date: "2026-01-22" },
      { match: "T20WC vs PAK", opponent: "PAK", score: 8, balls: 6, date: "2026-03-01" },
      { match: "T20WC vs SL", opponent: "SL", score: 1, balls: 3, date: "2026-02-26" },
      { match: "Asia Cup Final", opponent: "PAK", score: 22, balls: 15, date: "2025-10-15" },
      { match: "IPL vs MI", opponent: "MI", score: 45, balls: 22, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 32, balls: 18, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 55, balls: 30, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 12, balls: 10, date: "2025-04-18" },
      { match: "IPL vs CSK", opponent: "CSK", score: 67, balls: 38, date: "2025-04-12" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 120, strikeRate: 118.5, average: 18.4 },
      { phase: "Middle", runs: 720, strikeRate: 138.8, average: 30.2 },
      { phase: "Death", runs: 924, strikeRate: 215.4, average: 42.8 }
    ],
    dismissalPatterns: { caught: 38, bowled: 18, lbw: 12, stumped: 4, runOut: 10, hitWicket: 2, others: 16 },
    keyInsight: "IPL's 5-sixes-in-an-over legend with death overs SR 215+ — elite finisher but T20I role clarity needed"
  },
  {
    id: 28,
    name: "Abhishek Sharma",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Sunrisers Hyderabad",
    teamShort: "SRH",
    teamColor: "#FF822A",
    role: "All-rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox",
    age: 24,
    dnaScore: 85,
    dnaScoreTrend: "improving",
    stats: { matches: 123, innings: 118, runs: 3253, average: 29.57, strikeRate: 174.62, highest: 141, hundreds: 4, fifties: 16, wickets: 18, bowlingAvg: 34.14, economy: 8.82, bestBowling: "2/13" },
    radarData: [
      { axis: "Bat Power", current: 94, peak: 96 },
      { axis: "Bowl Strike", current: 60, peak: 65 },
      { axis: "Consistency", current: 68, peak: 74 },
      { axis: "Versatility", current: 72, peak: 78 },
      { axis: "Death Impact", current: 75, peak: 82 },
      { axis: "Big Match", current: 78, peak: 85 }
    ],
    careerTimeline: [
      { period: "IPL 2022", dnaScore: 55, innings: 10 },
      { period: "IPL 2024", dnaScore: 82, innings: 15 },
      { period: "Ind v Zim T20I 2024", dnaScore: 75, innings: 4 },
      { period: "Ind v Eng T20I 2025", dnaScore: 92, innings: 5 },
      { period: "IPL 2025", dnaScore: 88, innings: 15 },
      { period: "T20WC 2026", dnaScore: 72, innings: 7 },
      { period: "IPL 2026*", dnaScore: 85, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d56",
        type: "GROWTH",
        dimension: "ICC #1 T20I Batter",
        magnitude: "875 rating points — highest by an Indian T20I batter",
        period: "2024-2026",
        oppositionContext: "T20I 135 vs England (2025, India's highest T20I score by a batter), IPL 141* vs PBKS (fastest IPL 100 by Indian, 40 balls), 96 T20I sixes in 46 innings",
        conditionsContext: "Devastating in all conditions — equally effective on pace-friendly and spin-friendly surfaces",
        narrative: "Abhishek Sharma's ascent to world No.1 T20I batter (875 points) has been meteoric. His T20I strike rate of 190.46 is the highest among all batters with 1000+ T20I runs. His 135 against England in 2025 broke India's T20I individual scoring record, and his IPL 141* vs PBKS (fastest IPL century by an Indian off 40 balls) confirmed his franchise dominance. At 24, he's the most explosive opener in world cricket with 96 sixes in just 46 T20I innings.",
        fantasySignal: "Premium captain pick in all formats. His SR of 190+ means even a 15-ball cameo delivers impact. The highest-upside batter in world T20 cricket right now.",
        severity: "high",
        detectedAt: "2026-03-15"
      },
      {
        id: "d57",
        type: "VOLATILITY",
        dimension: "T20WC 2026 Group Stage Collapse",
        magnitude: "3 ducks in group stage before 52(21) in final",
        period: "T20WC 2026",
        oppositionContext: "Failed vs quality attacks in group stage (ducks vs PAK, ENG, and SA) before explosive 52(21) in the final vs NZ",
        conditionsContext: "Vulnerability to high-quality new ball bowling when there's tournament pressure — recovered on familiar Indian pitches",
        narrative: "Abhishek's T20WC 2026 was a tale of two phases. Three ducks in the group stage (a stomach infection sidelined him for one game) had critics questioning his big-match temperament. But his 52 off just 21 balls in the final against New Zealand — when India needed early runs most — silenced doubters. The high backlift that generates his power is also his vulnerability against quality pace that exploits the gap early.",
        fantasySignal: "Accept the volatility — his ceiling is the highest in cricket. 3 ducks followed by a match-winning 52(21) is the Abhishek experience. Back him for upside, not safety.",
        severity: "medium",
        detectedAt: "2026-03-12"
      }
    ],
    recentInnings: [
      { match: "T20WC Final vs NZ", opponent: "NZ", score: 52, balls: 21, date: "2026-03-10" },
      { match: "T20WC vs WI", opponent: "WI", score: 10, balls: 11, date: "2026-03-04" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 9, balls: 7, date: "2026-03-02" },
      { match: "T20WC vs PAK", opponent: "PAK", score: 0, balls: 3, date: "2026-02-28" },
      { match: "T20I vs Zim", opponent: "ZIM", score: 55, balls: 30, date: "2025-08-15" },
      { match: "T20I vs Eng", opponent: "ENG", score: 135, balls: 62, date: "2025-01-28" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 141, balls: 58, date: "2025-05-12" },
      { match: "IPL vs MI", opponent: "MI", score: 45, balls: 24, date: "2025-05-06" },
      { match: "IPL vs RCB", opponent: "RCB", score: 72, balls: 38, date: "2025-04-26" },
      { match: "IPL vs DC", opponent: "DC", score: 18, balls: 12, date: "2025-04-18" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 1680, strikeRate: 192.5, average: 32.4 },
      { phase: "Middle", runs: 1120, strikeRate: 168.8, average: 28.2 },
      { phase: "Death", runs: 453, strikeRate: 178.4, average: 22.8 }
    ],
    dismissalPatterns: { caught: 44, bowled: 20, lbw: 10, stumped: 4, runOut: 8, hitWicket: 2, others: 12 },
    keyInsight: "ICC #1 T20I batter with SR 190 — India's T20I record holder (135 vs ENG) and fastest Indian IPL century (141* off 40 balls)"
  },
  {
    id: 29,
    name: "Rajat Patidar",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Royal Challengers Bengaluru",
    teamShort: "RCB",
    teamColor: "#E4002B",
    role: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off break",
    age: 31,
    dnaScore: 79,
    dnaScoreTrend: "stable",
    stats: { matches: 42, innings: 41, runs: 1111, average: 30.86, strikeRate: 154.31, highest: 112, hundreds: 1, fifties: 8 },
    radarData: [
      { axis: "Technique", current: 78, peak: 82 },
      { axis: "Power", current: 85, peak: 90 },
      { axis: "Consistency", current: 72, peak: 78 },
      { axis: "Adaptability", current: 70, peak: 76 },
      { axis: "Big Match", current: 82, peak: 88 },
      { axis: "Conversion", current: 68, peak: 74 }
    ],
    careerTimeline: [
      { period: "IPL 2022", dnaScore: 85, innings: 8 },
      { period: "IPL 2023", dnaScore: 72, innings: 12 },
      { period: "IPL 2024", dnaScore: 82, innings: 13 },
      { period: "SMAT 2024", dnaScore: 88, innings: 9 },
      { period: "IPL 2025", dnaScore: 75, innings: 13 },
      { period: "IPL 2026*", dnaScore: 79, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d58",
        type: "GROWTH",
        dimension: "Spin Destruction",
        magnitude: "SR 225+ vs spin in IPL 2024",
        period: "IPL 2024",
        oppositionContext: "IPL 2024: 395 runs in 13 innings at avg 30.38, SR 177 with 5 fifties — exceptional against spin bowling",
        conditionsContext: "Chinnaswamy's flat pitch and short boundaries amplified his spin-hitting ability",
        narrative: "Patidar's ability to hit spin is elite — his SR of 225+ against spinners in IPL 2024 was the highest in the tournament among batters with 200+ balls faced. His technique of using his feet to get to the pitch and hit over the top, combined with strong wrists for the sweep, makes him a nightmare for spinners. His SMAT 2024 campaign (428 runs at 61.14 avg, SR 186, 5 fifties including 81* in the final) confirmed his dominance in shorter formats.",
        fantasySignal: "Premium pick against spin-heavy attacks. At Chinnaswamy, his ceiling is enormous. Led RCB to their maiden IPL title in 2025 as captain — big-match credentials confirmed.",
        severity: "high",
        detectedAt: "2024-06-01"
      },
      {
        id: "d59",
        type: "DECLINE",
        dimension: "IPL 2025 Dip and Injuries",
        magnitude: "SR dropped from 177 (2024) to 142 (2025)",
        period: "IPL 2025",
        oppositionContext: "IPL 2025: 286 runs in 13 innings at avg 23.83, SR 142 — significant drop from 2024's brilliance",
        conditionsContext: "Knee injury in Oct-Nov 2025 limited movement; finger injury during IPL 2025 but played through it",
        narrative: "Patidar's IPL 2025 was a step down from his stellar 2024. His SR dropped from 177 to 142, and his average fell from 30.38 to 23.83. A finger injury during the tournament and subsequent knee issues in the off-season suggest physical limitations affected his performance. Despite this, he captained RCB to their maiden IPL title — proving his leadership value transcends personal runs. His lack of T20I caps (0 matches) remains puzzling given his domestic dominance.",
        fantasySignal: "Monitor fitness pre-IPL 2026. When fit, he's a top-3 pick at Chinnaswamy. Injury concerns warrant a wait-and-see approach for captain picks.",
        severity: "medium",
        detectedAt: "2025-11-15"
      }
    ],
    recentInnings: [
      { match: "IPL vs MI", opponent: "MI", score: 55, balls: 35, date: "2025-05-18" },
      { match: "IPL vs DC", opponent: "DC", score: 18, balls: 14, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 42, balls: 28, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 8, balls: 8, date: "2025-04-26" },
      { match: "IPL vs KKR", opponent: "KKR", score: 62, balls: 38, date: "2025-04-18" },
      { match: "SMAT Final vs TN", opponent: "TN", score: 81, balls: 42, date: "2024-12-22" },
      { match: "IPL vs GT", opponent: "GT", score: 35, balls: 24, date: "2025-04-12" },
      { match: "IPL vs RR", opponent: "RR", score: 45, balls: 30, date: "2025-04-06" },
      { match: "IPL vs PBKS", opponent: "PBKS", score: 72, balls: 42, date: "2024-05-12" },
      { match: "IPL Playoff vs LSG", opponent: "LSG", score: 112, balls: 58, date: "2022-05-25" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 220, strikeRate: 138.5, average: 24.4 },
      { phase: "Middle", runs: 620, strikeRate: 152.8, average: 32.8 },
      { phase: "Death", runs: 271, strikeRate: 182.4, average: 28.6 }
    ],
    dismissalPatterns: { caught: 38, bowled: 18, lbw: 10, stumped: 6, runOut: 8, hitWicket: 2, others: 18 },
    keyInsight: "RCB's title-winning captain with SR 225+ vs spin — 0 T20I caps despite being India's most devastating domestic T20 spin-hitter"
  },
  {
    id: 30,
    name: "Axar Patel",
    country: "India",
    countryFlag: "🇮🇳",
    team: "Delhi Capitals",
    teamShort: "DC",
    teamColor: "#004C93",
    role: "All-rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm orthodox",
    age: 32,
    dnaScore: 81,
    dnaScoreTrend: "improving",
    stats: { matches: 256, innings: 240, runs: 2618, average: 20.62, strikeRate: 133.98, highest: 66, hundreds: 0, fifties: 2, wickets: 225, bowlingAvg: 24.82, economy: 7.38, bestBowling: "4/16" },
    radarData: [
      { axis: "Bat Power", current: 75, peak: 80 },
      { axis: "Bowl Strike", current: 82, peak: 86 },
      { axis: "Consistency", current: 80, peak: 84 },
      { axis: "Versatility", current: 85, peak: 88 },
      { axis: "Death Impact", current: 78, peak: 82 },
      { axis: "Big Match", current: 88, peak: 92 }
    ],
    careerTimeline: [
      { period: "IPL 2020", dnaScore: 72, innings: 13 },
      { period: "T20WC 2021", dnaScore: 68, innings: 3 },
      { period: "IPL 2023", dnaScore: 78, innings: 16 },
      { period: "T20WC 2024", dnaScore: 82, innings: 6 },
      { period: "IPL 2024", dnaScore: 78, innings: 15 },
      { period: "IPL 2025", dnaScore: 82, innings: 14 },
      { period: "T20WC 2026", dnaScore: 88, innings: 8 },
      { period: "IPL 2026*", dnaScore: 81, innings: 0 }
    ],
    driftEvents: [
      {
        id: "d60",
        type: "GROWTH",
        dimension: "T20WC Big-Match Performer",
        magnitude: "3/27 in T20WC 2026 final vs NZ",
        period: "T20WC 2024-2026",
        oppositionContext: "Key contributor in both World Cup wins — reliable in knockout stages with tight economy and crucial wickets",
        conditionsContext: "Effective on all surfaces — his accuracy and arm ball variations work everywhere",
        narrative: "Axar Patel has become India's most reliable all-rounder in ICC events. His 3/27 in the T20WC 2026 final against New Zealand was a match-defining spell, complementing his contributions throughout both the 2024 and 2026 World Cup campaigns. As DC captain in IPL 2025 and India's T20I vice-captain, his leadership has grown alongside his on-field performances. His economy of 7.40 in T20Is — with effective powerplay and death-overs bowling — makes him the perfect utility pick.",
        fantasySignal: "Reliable all-round value pick. His dual contribution (bat + bowl) provides a safe floor. DC captaincy means he'll bat higher and bowl full quota — maximizing fantasy returns.",
        severity: "high",
        detectedAt: "2026-03-12"
      },
      {
        id: "d61",
        type: "GROWTH",
        dimension: "IPL 2025 Batting Improvement",
        magnitude: "263 runs at SR 157 — career-best IPL SR",
        period: "IPL 2025",
        oppositionContext: "IPL 2025: 263 runs at 26.3 avg, SR 157 with 5 wickets — batting strike rate improvement from career 133.99",
        conditionsContext: "Promoted in the order at DC, given license to attack in death overs",
        narrative: "Axar's batting evolution continues. His IPL 2025 strike rate of 157 was a career best, driven by DC's aggressive approach and his promotion in the batting order. While his average remains modest (26.3), the intent to score quickly aligns with DC's team template. Combined with his economical left-arm spin (7.35 IPL economy) and 128 IPL wickets, he's one of the most complete all-rounders in the competition.",
        fantasySignal: "Value all-rounder pick with improving batting upside. His SR improvement suggests he'll contribute more runs in 2026. Best when DC bats second and he gets death-overs opportunities.",
        severity: "medium",
        detectedAt: "2025-06-01"
      }
    ],
    recentInnings: [
      { match: "T20WC Final vs NZ", opponent: "NZ", score: 22, balls: 15, date: "2026-03-10" },
      { match: "T20WC vs ENG", opponent: "ENG", score: 18, balls: 12, date: "2026-03-06" },
      { match: "T20I vs NZ", opponent: "NZ", score: 35, balls: 22, date: "2026-01-26" },
      { match: "IPL vs MI", opponent: "MI", score: 42, balls: 26, date: "2025-05-18" },
      { match: "IPL vs RCB", opponent: "RCB", score: 28, balls: 18, date: "2025-05-12" },
      { match: "IPL vs SRH", opponent: "SRH", score: 55, balls: 34, date: "2025-05-06" },
      { match: "IPL vs CSK", opponent: "CSK", score: 12, balls: 10, date: "2025-04-26" },
      { match: "IPL vs KKR", opponent: "KKR", score: 38, balls: 24, date: "2025-04-18" },
      { match: "IPL vs GT", opponent: "GT", score: 8, balls: 6, date: "2025-04-12" },
      { match: "T20I vs SA", opponent: "SA", score: 65, balls: 42, date: "2024-11-15" }
    ],
    phaseData: [
      { phase: "Powerplay", runs: 280, strikeRate: 122.5, average: 18.4 },
      { phase: "Middle", runs: 1220, strikeRate: 130.8, average: 22.2 },
      { phase: "Death", runs: 1118, strikeRate: 158.6, average: 24.8 }
    ],
    dismissalPatterns: { caught: 40, bowled: 18, lbw: 14, stumped: 6, runOut: 8, hitWicket: 2, others: 12 },
    keyInsight: "India's ICC event MVP — 3/27 in T20WC 2026 final with DC captaincy and career-best IPL batting SR of 157"
  }
];

export const teams = [
  { short: "RCB", name: "Royal Challengers Bengaluru", color: "#E4002B" },
  { short: "MI", name: "Mumbai Indians", color: "#004BA0" },
  { short: "CSK", name: "Chennai Super Kings", color: "#FFC425" },
  { short: "GT", name: "Gujarat Titans", color: "#1B2133" },
  { short: "SRH", name: "Sunrisers Hyderabad", color: "#FF822A" },
  { short: "LSG", name: "Lucknow Super Giants", color: "#ACE5F3" },
  { short: "DC", name: "Delhi Capitals", color: "#004C93" },
  { short: "RR", name: "Rajasthan Royals", color: "#EA1A85" },
  { short: "KKR", name: "Kolkata Knight Riders", color: "#3A225D" },
  { short: "PBKS", name: "Punjab Kings", color: "#D71920" }
];
