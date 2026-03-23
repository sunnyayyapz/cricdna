export interface FormatSplit {
  format: string;
  matches: number;
  innings: number;
  runs: number;
  average: number;
  strikeRate: number;
  highest: number;
  wickets?: number;
  bowlingAvg?: number;
  economy?: number;
}

export interface BowlingAttackSplit {
  type: string;
  innings: number;
  runs: number;
  balls: number;
  strikeRate: number;
  average: number;
  dismissals: number;
  dotBallPct: number;
}

export interface VenueStat {
  venue: string;
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  wickets?: number;
  economy?: number;
}

export interface BowlerPhaseData {
  phase: string;
  overs: number;
  wickets: number;
  economy: number;
  dotBallPct: number;
  average: number;
}

export interface DeepInsight {
  playerId: number;
  formatSplits: FormatSplit[];
  bowlingAttackSplits: BowlingAttackSplit[];
  venueStats: VenueStat[];
  strengthsNarrative: string;
  weaknessesNarrative: string;
  analystNote: string;
  bowlerPhaseData: BowlerPhaseData[];
}

export const deepInsights: Record<number, DeepInsight> = {

  // ── 1. Virat Kohli ──────────────────────────────────────────────────────────
  1: {
    playerId: 1,
    formatSplits: [
      { format: "T20I", matches: 125, innings: 122, runs: 4188, average: 52.35, strikeRate: 137.16, highest: 122 },
      { format: "IPL", matches: 267, innings: 258, runs: 8661, average: 39.55, strikeRate: 132.86, highest: 113 },
      { format: "Other T20", matches: 28, innings: 27, runs: 812, average: 35.31, strikeRate: 128.48, highest: 94 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 178, runs: 5420, balls: 3940, strikeRate: 137.56, average: 41.37, dismissals: 131, dotBallPct: 32.4 },
      { type: "vs Spin", innings: 178, runs: 3241, balls: 2738, strikeRate: 118.36, average: 35.50, dismissals: 91, dotBallPct: 38.2 },
    ],
    venueStats: [
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 78, runs: 2932, average: 52.36, strikeRate: 139.42 },
      { venue: "Wankhede Stadium Mumbai", matches: 28, runs: 854, average: 36.69, strikeRate: 130.18 },
      { venue: "Eden Gardens Kolkata", matches: 18, runs: 542, average: 33.88, strikeRate: 127.58 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 14, runs: 498, average: 41.50, strikeRate: 134.23 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 16, runs: 420, average: 30.00, strikeRate: 119.65 },
    ],
    strengthsNarrative: "Kohli's off-side play against right-arm fast-medium bowling is arguably the finest in T20 history — his cover and straight drives off the front foot generate a SR of 148+ against that bowling type, underpinned by a career powerplay average of 40.2 that no other top-order player in the IPL era matches. His conversion of 25+ scores to 50+ (68 fifties in 267 IPL matches, at a rate of 26%) is extraordinary for a batter who plays the anchor role. The 2024-2025 phase saw a deliberate evolution: Kohli increased his slog-sweep usage against off-spinners by 34%, lifting his overall IPL SR from a career 132.9 to 144.7 across those two seasons.",
    weaknessesNarrative: "The most exploitable chink in Kohli's T20 armour is quality leg-spin, particularly when bowled into the rough outside leg stump — his SR against leg-spin has declined from a career 134.2 to 118.4 in the last 24 T20 innings, reflecting an increasing tendency to play the ball to the on-side and limit his scoring zones. On slow, turning surfaces like MA Chidambaram in Chennai, his dot-ball percentage climbs to 40%+ against quality spin, and his average at that venue (30.0 in IPL) is nearly 22 runs below his home-ground figure. Additionally, his single-digit failure rate in the IPL is rising — six ducks or single-digit scores in 2024-25 combined suggest vulnerability to moving deliveries in the first three balls of an innings when the ball is still hard.",
    analystNote: "Kohli enters IPL 2026 as the most decorated active T20 batter in history — an Orange Cap in 2024 (741 runs) followed by a near-repeat in 2025 (657 runs at 54.75) confirms that his post-T20I retirement form has been his most consistent sustained period since the legendary 2016 season. The tactical shift from pure accumulator to powerplay aggressor mirrors how he reinvented himself in Test cricket post-2022, suggesting this is a planned evolution rather than an age-related desperation. The one open question for 2026 is the spin vulnerability: with CSK (Noor Ahmad), KKR (Varun Chakravarthy), and MI's revamped spin attack all posing threats, Kohli will need to either improve his numbers against leg-spin or accept that his run-rate in those contests will cost RCB at home on Bengaluru's increasingly slower surfaces. At 37, the window for another Orange Cap run remains real — his floor is elite.",
    bowlerPhaseData: [],
  },

  // ── 2. Jasprit Bumrah ───────────────────────────────────────────────────────
  2: {
    playerId: 2,
    formatSplits: [
      { format: "T20I", matches: 75, innings: 72, runs: 28, average: 4.67, strikeRate: 71.79, highest: 10, wickets: 92, bowlingAvg: 16.74, economy: 5.82 },
      { format: "IPL", matches: 145, innings: 141, runs: 48, average: 5.33, strikeRate: 82.76, highest: 16, wickets: 184, bowlingAvg: 21.18, economy: 7.24 },
      { format: "Other T20", matches: 20, innings: 17, runs: 5, average: 1.67, strikeRate: 55.56, highest: 5, wickets: 28, bowlingAvg: 18.75, economy: 6.44 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Wankhede Stadium Mumbai", matches: 52, runs: 0, average: 0, strikeRate: 0, wickets: 68, economy: 6.94 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 14, runs: 0, average: 0, strikeRate: 0, wickets: 18, economy: 7.42 },
      { venue: "Eden Gardens Kolkata", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 15, economy: 7.18 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 12, economy: 7.05 },
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 11, economy: 7.36 },
    ],
    strengthsNarrative: "Bumrah's defining skill is the ability to deliver an accurate yorker at 145+ kph with the same wrist position as a slower ball — a deception that produces a dot-ball percentage of 52% in the death overs, the highest of any bowler with 100+ death-over overs in the T20I era. His unique 45-degree delivery angle from the crease means right-hand batters face extreme foot-movement challenges in the last 4 overs, contributing to an economy of 6.78 over 304 IPL wickets while still averaging only 19.52. In the powerplay, his back-of-a-length deliveries at 140+ kph generate 22% more false shots than the average IPL pace bowler, making him equally lethal at both ends of an innings.",
    weaknessesNarrative: "Bumrah's primary constraint is workload management — MI have limited him to 3-4 overs per game in multi-day fixture congestion, and the back stress fracture of 2025 confirmed the structural risk in his unusual bowling action. His cost when expensive is higher than average: on the rare occasions he goes for 12+ in an over, it's invariably a dew-affected or unusually flat surface where his seam position finds no grip, pointing to a conditions dependency that high-quality seamers sometimes exhibit. At 32, the question of how many high-intensity T20 campaigns his back can sustain is cricket's most pressing injury management challenge.",
    analystNote: "Bumrah's back-to-back T20 World Cup dominance — 15 wickets at 8.26 in 2024, 14 wickets at 12.43 in 2026 — places him in a tier of tournament-level fast bowling excellence occupied historically only by Glenn McGrath and Shane Bond. His return from the 2025 back stress fracture at near-peak pace (confirming 143-149 kph consistently in T20WC 2026 warm-ups) suggests his rehabilitation has been model-level. For IPL 2026, the key tactical question is how MI deploy him against the newly aggressive SRH lineup featuring Head, Klaasen, and Abhishek Sharma — three players who specifically target pace at the death. His split-finger delivery, developed during his 2025 recovery, adds a new dimension that batters haven't yet had full exposure to in franchise cricket. The prognosis is excellent, but MI's match-by-match load management will remain the central narrative.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 187, wickets: 82, economy: 6.42, dotBallPct: 48.2, average: 14.63 },
      { phase: "Middle", overs: 218, wickets: 72, economy: 7.08, dotBallPct: 43.1, average: 22.47 },
      { phase: "Death", overs: 201, wickets: 150, economy: 6.94, dotBallPct: 52.4, average: 9.32 },
    ],
  },

  // ── 3. Suryakumar Yadav ─────────────────────────────────────────────────────
  3: {
    playerId: 3,
    formatSplits: [
      { format: "T20I", matches: 82, innings: 79, runs: 2630, average: 47.82, strikeRate: 167.94, highest: 117 },
      { format: "IPL", matches: 168, innings: 162, runs: 4580, average: 34.43, strikeRate: 152.14, highest: 103 },
      { format: "Other T20", matches: 29, innings: 27, runs: 373, average: 20.72, strikeRate: 138.66, highest: 85 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 182, runs: 4520, balls: 2812, strikeRate: 160.78, average: 36.74, dismissals: 123, dotBallPct: 26.8 },
      { type: "vs Spin", innings: 182, runs: 3063, balls: 2050, strikeRate: 149.41, average: 33.33, dismissals: 92, dotBallPct: 31.4 },
    ],
    venueStats: [
      { venue: "Wankhede Stadium Mumbai", matches: 55, runs: 1892, average: 40.26, strikeRate: 159.83 },
      { venue: "DY Patil Stadium Mumbai", matches: 14, runs: 498, average: 38.31, strikeRate: 164.36 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 16, runs: 512, average: 36.57, strikeRate: 162.54 },
      { venue: "Eden Gardens Kolkata", matches: 14, runs: 368, average: 28.31, strikeRate: 144.86 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 12, runs: 314, average: 28.55, strikeRate: 148.11 },
    ],
    strengthsNarrative: "SKY's 360-degree game is anchored by his remarkable ability to hit deliveries outside off stump through midwicket — a shot that produces a boundary on 38% of occasions when he plays it, forcing opposition captains to abandon standard off-side lines and expose gaps elsewhere. His T20I SR of 167.94, the highest in history among batters with 1000+ T20I runs, is powered by an extraordinary percentage of boundaries through unconventional angles: 41% of his IPL sixes come from balls outside off stump, compared to a tour average of 22% for right-hand batters. Against both pace and spin he maintains SRs above 148, making him the only batter in the top 20 by T20I runs who doesn't have a meaningful type-of-bowling vulnerability.",
    weaknessesNarrative: "SKY's conversion rate from 50 to 100 has declined sharply — from 12.5% career to just 4.8% across IPL 2024-25 — as he attempts the high-risk boundary-hitting approach even when well-set and the game is already won. This suggests a psychological component: the same aggressive mindset that generates his elite floor is counterproductively applied in situations where risk management would serve the team better. His T20I inconsistency between 2023 and January 2026 (21 innings, 218 runs, no fifties) hinted at a technical issue against high-full deliveries angled into his body from right-arm bowlers — Nortje and Ngidi's back-of-a-length body-line was particularly effective during South Africa's 2024 home series.",
    analystNote: "The 2025-26 form turnaround is one of the most striking in recent T20 history — from 13.6 average and 123 SR across 21 T20I innings to Player of the Series vs New Zealand (242 runs, 80.66 avg) and then captaining India to a second consecutive T20WC title. SKY's IPL 2025 record of 16 consecutive 25+ scores — unprecedented in IPL history — is evidence of a recalibrated approach where he's accepting the singles that his instincts once rejected. The shoulder and sports hernia surgeries of 2024-25 appear fully resolved, and his weight management in the off-season has visibly improved his movement to the pitch of the ball. MI's 2026 batting lineup around SKY — Rohit, Tilak, Hardik — means he'll bat at No. 3 or 4 with licence to be the innings accelerator, the role where his numbers are strongest (overs 10-15 SR: 162.4). The ceiling remains as high as any batter alive.",
    bowlerPhaseData: [],
  },

  // ── 4. Rishabh Pant ─────────────────────────────────────────────────────────
  4: {
    playerId: 4,
    formatSplits: [
      { format: "T20I", matches: 66, innings: 57, runs: 1329, average: 23.25, strikeRate: 126.28, highest: 61 },
      { format: "IPL", matches: 112, innings: 104, runs: 3172, average: 34.16, strikeRate: 147.98, highest: 128 },
      { format: "Other T20", matches: 23, innings: 26, runs: 261, average: 18.64, strikeRate: 128.57, highest: 44 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 126, runs: 2892, balls: 2004, strikeRate: 144.31, average: 30.44, dismissals: 95, dotBallPct: 34.2 },
      { type: "vs Spin", innings: 126, runs: 1870, balls: 1358, strikeRate: 137.70, average: 31.17, dismissals: 60, dotBallPct: 37.8 },
    ],
    venueStats: [
      { venue: "Arun Jaitley Stadium Delhi", matches: 32, runs: 874, average: 32.37, strikeRate: 148.21 },
      { venue: "Wankhede Stadium Mumbai", matches: 14, runs: 468, average: 42.55, strikeRate: 156.00 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 385, average: 38.50, strikeRate: 152.77 },
      { venue: "BRSABV Ekana Stadium Lucknow", matches: 8, runs: 212, average: 26.50, strikeRate: 137.66 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 272, average: 27.20, strikeRate: 140.41 },
    ],
    strengthsNarrative: "Pant's most unique offensive weapon is the reverse sweep against pace — a shot he plays earlier in his innings than any comparable batter, often as early as the 2nd ball he faces from a given bowler. This unpredictability forces death-over bowlers out of their preferred lines immediately, generating an above-average wide ball rate of 3.8% against him in the IPL. His IPL average of 34.16 — substantially higher than his T20I average of 23.25 — reflects that he thrives when batting without the result-pressure of bilateral series, producing the cavalier approach that his natural game demands. His keeping adds a stumping conversion rate of 78% — above the IPL average of 68% — making him a genuinely elite wicketkeeper-batter proposition.",
    weaknessesNarrative: "Pant's biggest weakness is a 61% T20I failure rate — innings where he scores fewer than 15 — which stems from a reflex to attempt high-risk strokes before reading the bowler's hand properly. Specifically, his hoick to the leg side against cutters early in his innings has led to 24% of his T20I dismissals, a higher proportion than in the IPL where he's more patient. On slow BRSABV Ekana pitches in Lucknow, where he'll be batting in IPL 2026, his career figures are modestly below his overall average, and his LSG teammates' requirements may demand a more measured approach that sits uncomfortably with his natural instincts. The side strain of January 2026 is a minor concern given his injury history.",
    analystNote: "Pant's ₹27cr LSG acquisition was the defining transfer of the IPL 2025 auction cycle and the early signs are that the investment is generating returns: his 118* vs KKR in IPL 2025 was the knock that confirmed his physical recovery from the 2022 car accident is essentially complete. The role clarity question — will he open or bat at No. 4 for LSG? — is the central variable for fantasy managers and opposition coaches alike. Opening Pant gives LSG's innings a chaotic, unpredictable quality; batting lower gives him the floating role he's less well-suited to. His T20WC 2024 performances (42 vs PAK, 88 vs RCB in IPL preceding form) showed what he can do when confident, and the 2026 campaign will reveal whether LSG's team structure unlocks or constrains his potential.",
    bowlerPhaseData: [],
  },

  // ── 5. Shubman Gill ─────────────────────────────────────────────────────────
  5: {
    playerId: 5,
    formatSplits: [
      { format: "T20I", matches: 41, innings: 38, runs: 912, average: 24.00, strikeRate: 131.76, highest: 63 },
      { format: "IPL", matches: 91, innings: 88, runs: 3218, average: 42.34, strikeRate: 148.22, highest: 129 },
      { format: "Other T20", matches: 9, innings: 11, runs: 344, average: 31.27, strikeRate: 136.51, highest: 84 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 94, runs: 2680, balls: 1882, strikeRate: 142.40, average: 40.61, dismissals: 66, dotBallPct: 33.8 },
      { type: "vs Spin", innings: 94, runs: 1794, balls: 1308, strikeRate: 137.15, average: 34.50, dismissals: 52, dotBallPct: 37.6 },
    ],
    venueStats: [
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 22, runs: 934, average: 58.38, strikeRate: 155.24 },
      { venue: "Wankhede Stadium Mumbai", matches: 12, runs: 452, average: 45.20, strikeRate: 148.36 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 10, runs: 356, average: 39.56, strikeRate: 141.27 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 312, average: 34.67, strikeRate: 138.67 },
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 8, runs: 258, average: 36.86, strikeRate: 143.33 },
    ],
    strengthsNarrative: "Gill's IPL record over the last three seasons — culminating in 650 runs at 50 average and 155.88 SR in 2025 — is built on a technically superior cover drive that generates runs at a 14% higher rate than the tour average when the ball is full and wide. His IPL average of 42.34 across 91 matches is among the top five for active players with 50+ IPL matches, and his captaincy of GT has matured his match-reading ability: he now consistently takes the aerial route against spinners in the 8th-12th over window, a phase where his average has risen from 34 in 2022 to 52 in 2025. His improved sweep game is the most visible evolution — he now averages 57.3 in innings where he plays the sweep at least twice.",
    weaknessesNarrative: "The disconnect between Gill's IPL dominance and T20I struggles (263 runs in 14 T20I innings at 23.9 average in 2025 with no fifties) is cricket's most baffling form paradox. The technical explanation lies in two specific vulnerabilities: straight deliveries that angle back into the stumps from quality fast bowlers (Anrich Nortje and Kagiso Rabada have dismissed him four times each with this ball), and the inability to manufacture singles and twos when set in T20Is compared to IPL, suggesting a mindset shift he hasn't yet resolved at international level. He was dropped for T20WC 2026 despite being GT captain and India T20I vice-captain, confirming that selectors have exhausted their patience with the inconsistency.",
    analystNote: "Gill's career is at a crossroads: an elite franchise performer who cannot replicate his form for India in T20Is. The hypothesis gaining traction among analysts is that GT's batting order — built around him — has created a bespoke comfort zone with specific field settings and bowling plans from opposition teams that India's international opponents don't provide. His IPL 2025 captaincy, combined with GT's aggressive team template (they scored at 10.8 per over in 2025), has allowed him to lead from the front and set his own tempo; India's more cautious international template requires a different kind of discipline that he hasn't mastered. For IPL 2026, he remains among the top five batting assets in the auction — his floor is exceptional. The question is whether India ever brings him back for T20Is or whether franchise cricket becomes his permanent domain.",
    bowlerPhaseData: [],
  },

  // ── 6. Pat Cummins ──────────────────────────────────────────────────────────
  6: {
    playerId: 6,
    formatSplits: [
      { format: "T20I", matches: 56, innings: 52, runs: 362, average: 22.63, strikeRate: 151.04, highest: 66, wickets: 66, bowlingAvg: 21.83, economy: 7.68 },
      { format: "IPL", matches: 65, innings: 62, runs: 362, average: 16.45, strikeRate: 150.21, highest: 52, wickets: 68, bowlingAvg: 27.43, economy: 8.80 },
      { format: "Other T20", matches: 8, innings: 11, runs: 46, average: 9.20, strikeRate: 136.76, highest: 24, wickets: 11, bowlingAvg: 22.64, economy: 7.92 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 24, runs: 0, average: 0, strikeRate: 0, wickets: 26, economy: 9.06 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 13, economy: 8.74 },
      { venue: "Wankhede Stadium Mumbai", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 12, economy: 8.28 },
      { venue: "Arun Jaitley Stadium Delhi", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 10, economy: 8.42 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 8, economy: 8.66 },
    ],
    strengthsNarrative: "Cummins's T20WC 2024 back-to-back hat-tricks against Bangladesh — the first player to achieve consecutive T20I hat-tricks — distilled his greatest strength: the ability to bowl a wicket-taking delivery at any point in an innings under extreme pressure. His back-of-a-length bowling at 140+ kph extracts awkward bounce that right-hand batters struggle to pull cleanly, generating a false-shot percentage of 28% — 6% above the pace-bowling tour average. As a lower-order batter, his SR of 149.42 with 145 IPL wickets at his end adds genuine six-hitting capability that most pace bowlers cannot match, giving SRH a true 7-8 batsman in their lineup.",
    weaknessesNarrative: "Cummins's IPL economy of 8.24 career — high even by fast bowler standards in Indian franchise cricket — is the consequence of his captaincy burden affecting his death-overs consistency: he bowls his most expensive overs immediately after making tactical decisions, suggesting the cognitive load of captaincy disrupts his pre-delivery routine. His back injury forced him out of T20WC 2026, and at 33, the frequency of these workload-related fitness concerns is increasing with each multi-format calendar. His economy spikes to 10.8+ in matches where SRH are chasing totals above 200, indicating a fatigue component in sustained high-intensity batting conditions.",
    analystNote: "Cummins returns to IPL 2026 with a fitness question mark that Australian cricket's medical staff are carefully managing. His absence from T20WC 2026 removed him from the franchise-cricket conversation for three months, and SRH will need to determine their strategy for managing a 33-year-old captain-bowler whose pace-bowling and leadership are inseparable but whose back cannot sustain 14-16 matches in the March-June Indian summer. When fit and captaining without pressure, his combination of new-ball wicket-taking (powerplay economy 7.14 career IPL) and lower-order hitting makes him the most impactful pure pace bowler in the SRH lineup. The hat-trick pedigree and T20WC credentials are real — the 2026 question is durability.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 96, wickets: 42, economy: 7.14, dotBallPct: 44.6, average: 16.31 },
      { phase: "Middle", overs: 118, wickets: 44, economy: 8.62, dotBallPct: 37.8, average: 23.27 },
      { phase: "Death", overs: 102, wickets: 59, economy: 9.06, dotBallPct: 33.2, average: 15.68 },
    ],
  },

  // ── 7. Yashasvi Jaiswal ─────────────────────────────────────────────────────
  7: {
    playerId: 7,
    formatSplits: [
      { format: "T20I", matches: 33, innings: 32, runs: 988, average: 35.29, strikeRate: 163.32, highest: 100 },
      { format: "IPL", matches: 56, innings: 55, runs: 1901, average: 36.56, strikeRate: 160.59, highest: 124 },
      { format: "Other T20", matches: 1, innings: 1, runs: 0, average: 0, strikeRate: 0, highest: 0 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 58, runs: 1736, balls: 1046, strikeRate: 165.96, average: 36.17, dismissals: 48, dotBallPct: 26.4 },
      { type: "vs Spin", innings: 58, runs: 1153, balls: 746, strikeRate: 154.56, average: 34.94, dismissals: 33, dotBallPct: 31.8 },
    ],
    venueStats: [
      { venue: "Sawai Mansingh Stadium Jaipur", matches: 18, runs: 742, average: 49.47, strikeRate: 163.44 },
      { venue: "Wankhede Stadium Mumbai", matches: 8, runs: 284, average: 47.33, strikeRate: 162.29 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 6, runs: 222, average: 44.40, strikeRate: 167.67 },
      { venue: "Eden Gardens Kolkata", matches: 6, runs: 188, average: 37.60, strikeRate: 158.44 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 6, runs: 172, average: 34.40, strikeRate: 153.57 },
    ],
    strengthsNarrative: "Jaiswal's T20I powerplay strike rate of 166 — the highest among all Indian T20I openers in history — is the product of two specific skills: an early-innings pull shot that he plays from fuller lengths than any peer (committing to the pull even against back-of-a-length deliveries at 140+ kph), and a wristy inside-out drive that converts wide deliveries into boundary-rate 68% scoring opportunities. His 559 IPL 2025 runs at 159 SR included the fastest IPL fifty for RR (13 balls vs PBKS), confirming that his aggression is controlled rather than chaotic — he was dismissed for fewer than 10 just three times across 14 innings that season.",
    weaknessesNarrative: "Left-arm pace is Jaiswal's documented Achilles heel — he's been dismissed cutting at wide deliveries from left-arm seamers 14 times in his last 40 T20 innings, including multiple dismissals to Mitchell Starc's away-swinger. Against quality left-arm pace when the ball is angled across him, his wide-reaching cut shot is caught in the gully/point region at 33% frequency — abnormally high for a top-tier opener. He's also susceptible to the off-cutter early in his innings: on pitches with lateral movement (Kolkata, Mohali), his false-shot percentage in the first 5 balls of his innings jumps to 34%, double the figure later in the same innings.",
    analystNote: "At 24, Jaiswal is arguably the most exciting batting talent in world cricket, with a growth trajectory that suggests his current 35.23 IPL average will continue rising as he converts starts into bigger scores more consistently. His SMAT 2025 century (101 vs Baroda, 50 balls) in the off-season maintained his red-ball and domestic momentum, and there are no technical impediments to sustained improvement. The left-arm pace vulnerability is the one tactical challenge for 2026: DC has Mitchell Starc, who has now dismissed him twice in the IPL, and the early-match battle between these two will be one of the defining individual contests of IPL 2026. RR's decision to build their batting order around Jaiswal as the anchor opener reflects confidence in both his consistency and his evolving leadership role.",
    bowlerPhaseData: [],
  },

  // ── 8. Travis Head ──────────────────────────────────────────────────────────
  8: {
    playerId: 8,
    formatSplits: [
      { format: "T20I", matches: 42, innings: 38, runs: 1082, average: 28.47, strikeRate: 157.33, highest: 80 },
      { format: "IPL", matches: 45, innings: 44, runs: 1399, average: 34.98, strikeRate: 170.03, highest: 102 },
      { format: "Other T20", matches: 4, innings: 6, runs: 0, average: 0, strikeRate: 0, highest: 0 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 58, runs: 1522, balls: 910, strikeRate: 167.25, average: 32.38, dismissals: 47, dotBallPct: 24.8 },
      { type: "vs Spin", innings: 58, runs: 959, balls: 584, strikeRate: 164.21, average: 28.21, dismissals: 34, dotBallPct: 29.6 },
    ],
    venueStats: [
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 16, runs: 627, average: 41.80, strikeRate: 175.42 },
      { venue: "Wankhede Stadium Mumbai", matches: 8, runs: 318, average: 39.75, strikeRate: 174.73 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 6, runs: 214, average: 42.80, strikeRate: 168.50 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 6, runs: 174, average: 34.80, strikeRate: 162.62 },
      { venue: "Eden Gardens Kolkata", matches: 5, runs: 158, average: 31.60, strikeRate: 160.20 },
    ],
    strengthsNarrative: "Head's IPL career strike rate of 170.03 is among the highest in tournament history for players with 30+ matches, driven by an exceptionally flat-footed but aggressive stance that allows him to generate power from short-arm punches rather than full backswings — meaning he can score at near-maximum power even in the first ball of an innings. His T20I century (80 off 25 balls vs Scotland) and IPL century against MI (102*) both came from the characteristic Head mode: aerial attack on any ball short of a length on the off side, with pull shots generating 64% boundary rate when executed. He's the one batter in the top 10 by T20 SR who also operates as an effective change-up spinner for SRH, offering genuine utility.",
    weaknessesNarrative: "Head's Achilles heel is international T20 bowling of genuine quality — his scores of 2, 5, and 19 against Rabada and Nortje in the South Africa T20I series (Aug 2025) reflect a vulnerability to high-pace deliveries aimed at the top of the off stump. His average of 28.47 in T20Is is modest for a player of his IPL stature, and the pattern suggests that in conditions with genuine pace and movement (as opposed to India's flat-track batting paradise), his aggressive mindset leaves him exposed. The inability to modulate — to take a singles-based approach when the bowling is excellent — is both his greatest strength and his significant limitation.",
    analystNote: "Head is the IPL's premier powerplay destroyer, and SRH's batting template is essentially architected around his ability to post 40-50 in the first 6 overs. His IPL SR of 170+ maintained across two full seasons is not a small-sample anomaly — it's a genuine reflection of a specific skill: the ability to maximize scoring against pace on Indian flat tracks. The T20I form dip (2, 5, 19 vs SA) is contextualised by Australian home conditions in August — significantly different from the Hyderabad deck where he thrives. For IPL 2026, SRH's tactical challenge is managing Head's partnership with Abhishek Sharma at the top — two batters who both prefer to dominate the powerplay — without creating a structural imbalance when one fails. Head's bowling will remain a valuable safety valve for Cummins's load management.",
    bowlerPhaseData: [],
  },

  // ── 9. Heinrich Klaasen ─────────────────────────────────────────────────────
  9: {
    playerId: 9,
    formatSplits: [
      { format: "T20I", matches: 64, innings: 54, runs: 1542, average: 30.84, strikeRate: 143.96, highest: 80 },
      { format: "IPL", matches: 72, innings: 67, runs: 2132, average: 40.23, strikeRate: 170.72, highest: 105 },
      { format: "Other T20", matches: 35, innings: 33, runs: 806, average: 24.42, strikeRate: 128.74, highest: 76 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 68, runs: 1010, balls: 672, strikeRate: 150.30, average: 30.61, dismissals: 33, dotBallPct: 28.4 },
      { type: "vs Spin", innings: 68, runs: 1470, balls: 769, strikeRate: 191.16, average: 42.00, dismissals: 35, dotBallPct: 20.8 },
    ],
    venueStats: [
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 26, runs: 962, average: 48.10, strikeRate: 178.44 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 358, average: 39.78, strikeRate: 172.60 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 8, runs: 268, average: 38.29, strikeRate: 168.87 },
      { venue: "Wankhede Stadium Mumbai", matches: 8, runs: 244, average: 34.86, strikeRate: 162.67 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 6, runs: 194, average: 38.80, strikeRate: 158.20 },
    ],
    strengthsNarrative: "Klaasen's IPL SR against spin of 191 — the highest in tournament history among batters with 200+ balls faced vs spin — is built on an extraordinary ability to use his 6'1 frame to get to the pitch of deliveries and hit spinners over the sightscreen at non-conventional angles. His IPL 2025 average of 44.27 and the 105* off 39 balls (3rd fastest IPL century) vs KKR — where he hit 10 sixes, six of them off spin — exemplify how he turns the middle overs (typically the least productive phase for big-hitting) into his most destructive period. The T20WC 2024 final 23-ball fifty vs India confirmed his ability to replicate this at international level under maximum pressure.",
    weaknessesNarrative: "Klaasen's IPL dominance is increasingly conditions-specific — his SA20 2025/26 average of 19.7 and MLC 2025 average of 15.8 confirm that the flat Indian pitches and shorter IPL boundaries amplify skills that don't translate as readily elsewhere. In conditions where the ball moves off the seam in the first three overs (SA20's Cape Town and Paarl venues are prime examples), he's more vulnerable to getting a leading edge or getting squared up by pace. His international retirement in June 2025 has also removed him from competitive cricket for extended periods between IPL seasons, raising the question of whether match sharpness against international-quality bowling is diminishing.",
    analystNote: "Klaasen is SRH's central batting asset for IPL 2026, and the franchise's decision to retain him at ₹23cr was a straightforward one given his two-season IPL average of 42+. His retirement from international cricket means his entire focus is now on franchise cricket, which could mean even better IPL preparation — but the SA20 form (0/29/22 in his last three before February 2026) suggests a form dip that needs addressing before March. If Klaasen is firing alongside Head, SRH's middle-order is among the most destructive in the competition; if both misfire, their lineup depth below them is concerning. The player to watch for him in 2026 is Varun Chakravarthy — the KKR spinner has a specific plan against right-hand batters who rely on the sweep, and KKR's two meetings with SRH will be a significant tactical test.",
    bowlerPhaseData: [],
  },

  // ── 10. Ruturaj Gaikwad ─────────────────────────────────────────────────────
  10: {
    playerId: 10,
    formatSplits: [
      { format: "T20I", matches: 23, innings: 20, runs: 791, average: 39.55, strikeRate: 143.54, highest: 123 },
      { format: "IPL", matches: 62, innings: 60, runs: 2253, average: 40.23, strikeRate: 137.46, highest: 108 },
      { format: "Other T20", matches: 9, innings: 11, runs: 91, average: 13.00, strikeRate: 129.29, highest: 42 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 64, runs: 1782, balls: 1278, strikeRate: 139.44, average: 42.43, dismissals: 42, dotBallPct: 33.8 },
      { type: "vs Spin", innings: 64, runs: 1353, balls: 980, strikeRate: 138.06, average: 36.57, dismissals: 37, dotBallPct: 36.4 },
    ],
    venueStats: [
      { venue: "MA Chidambaram Stadium Chennai", matches: 24, runs: 884, average: 44.20, strikeRate: 135.58 },
      { venue: "Wankhede Stadium Mumbai", matches: 8, runs: 298, average: 42.57, strikeRate: 138.14 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 6, runs: 226, average: 45.20, strikeRate: 143.31 },
      { venue: "DY Patil Stadium Mumbai", matches: 6, runs: 202, average: 40.40, strikeRate: 136.49 },
      { venue: "Eden Gardens Kolkata", matches: 6, runs: 188, average: 37.60, strikeRate: 134.29 },
    ],
    strengthsNarrative: "Gaikwad is the most technically sound opening batter in the IPL — his tight defence and wrist position through the V (between mid-off and mid-on) provide an unbreakable foundation that generates boundaries when the ball is full, through areas that most batters cannot access against swing bowling. His IPL average of 40.23 across 62 matches makes him the most consistent CSK batter of the post-Faf era, and his T20I century (123* vs Australia) showcased the ability to convert a start into a statement innings that his IPL record corroborates (two IPL centuries and 20 fifties). His Orange Cap-caliber IPL 2023 (890 runs) proved he has the physical and tactical endurance to sustain performance across a full 16-match season.",
    weaknessesNarrative: "Gaikwad's powerplay strike rate of 127.5 — the lowest among regular IPL openers with 50+ matches — limits his ability to capitalise on the field restrictions in the first six overs and creates pressure on his middle-order colleagues to compensate for the subdued start. His IPL 2021 Orange Cap and 2023 campaign both ended with him eventually falling prey to high-pace deliveries aimed at the top of the off stump after set periods: he's dismissed in the 8-15 over window by that ball 34% more often than other openers. The elbow fracture in IPL 2025 is the most significant concern entering 2026 — it limited him to 5 matches, and the side effects on his batting grip and shot execution will only be fully assessed in match conditions.",
    analystNote: "Gaikwad enters IPL 2026 with the highest motivation of any CSK batter — a point to prove after an injury-curtailed 2025, and the added weight of CSK's captaincy. His 2024 season (583 runs at 53 average, 4 fifties, 1 century) proved his ceiling is genuinely Orange Cap territory, and full fitness should restore those numbers. The T20I exile (no selection since Zimbabwe 2024) is a separate conversation from his IPL worth: he remains CSK's most important batting asset, and his understanding of MA Chidambaram's slow pitch — where he averages 44.20 against an IPL tour average of 32.8 for openers — gives the team a structural advantage at home. The 2026 CSK team, with Sanju Samson likely opening alongside him, has genuine contender quality if Gaikwad returns to peak form.",
    bowlerPhaseData: [],
  },

  // ── 11. Hardik Pandya ───────────────────────────────────────────────────────
  11: {
    playerId: 11,
    formatSplits: [
      { format: "T20I", matches: 94, innings: 84, runs: 1614, average: 27.30, strikeRate: 147.52, highest: 71, wickets: 61, bowlingAvg: 25.36, economy: 8.54 },
      { format: "IPL", matches: 156, innings: 148, runs: 3051, average: 29.14, strikeRate: 147.92, highest: 91, wickets: 114, bowlingAvg: 29.17, economy: 8.88 },
      { format: "Other T20", matches: 40, innings: 33, runs: 372, average: 23.25, strikeRate: 138.66, highest: 68, wickets: 17, bowlingAvg: 26.18, economy: 8.62 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Wankhede Stadium Mumbai", matches: 44, runs: 892, average: 30.76, strikeRate: 152.48, wickets: 32, economy: 8.64 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 18, runs: 348, average: 26.77, strikeRate: 144.78, wickets: 12, economy: 8.82 },
      { venue: "Eden Gardens Kolkata", matches: 14, runs: 262, average: 23.82, strikeRate: 142.40, wickets: 10, economy: 9.04 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 248, average: 27.56, strikeRate: 148.21, wickets: 8, economy: 8.56 },
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 12, runs: 198, average: 24.75, strikeRate: 145.59, wickets: 7, economy: 8.42 },
    ],
    strengthsNarrative: "Hardik's death-overs batting SR of 193+ is the defining metric of his unique value — no other active T20 all-rounder in the world can finish innings at that rate while also bowling four qualifying overs. His 3/20 in the T20WC 2024 final against South Africa, including the decisive dismissal of Miller in the 19th over, illustrated his ability to bowl under maximum pressure at optimal pace (135-140 kph) with cutters that betray pace. As a lower-middle-order batter for MI, his ability to hit sixes off the first ball he faces — backed by a data analysis that reveals he scores a boundary from the first ball in 31% of his innings — is structurally invaluable in close-match situations.",
    weaknessesNarrative: "The chronic back and hamstring concerns that have shadowed Hardik since 2019 remain the single biggest constraint on his career production. In IPL 2024, he bowled 3+ overs in only 7 of 14 matches, severely limiting his all-round contribution and directly correlating with MI's bottom-place finish. When he's reduced to a batting-only role or bowling only 2 overs, his fantasy and real-world value is cut approximately in half — the bowling contribution (typically 14 wickets per season when fit) is not easily replaceable. His captaincy at MI in 2024 also visibly affected his batting, suggesting that the mental bandwidth required to field-set and bat at No. 5/6 in high-pressure situations simultaneously is not his optimal configuration.",
    analystNote: "Hardik's IPL 2024 to T20WC 2024 transformation — from last-place MI captain averaging 18 to World Cup hero with 3/20 in the final — is the most dramatic form reversal in T20 history. His IPL 2025 (224 runs at SR 163, 14 wickets) proved that the World Cup form wasn't circumstantial. For IPL 2026, MI have structured their batting order around him as the death-overs anchor, with Rohit and Tilak building the platform and Hardik accelerating through overs 15-20. The question is always bowling fitness: if he can reliably bowl four overs, he's the most valuable player at the IPL auction on a per-rupee-impact basis. His T20I #1 ranking — the first Indian all-rounder to achieve it — is a testament to the complete nature of his game when healthy.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 82, wickets: 22, economy: 8.14, dotBallPct: 36.4, average: 30.41 },
      { phase: "Middle", overs: 128, wickets: 48, economy: 8.68, dotBallPct: 32.8, average: 23.25 },
      { phase: "Death", overs: 148, wickets: 122, economy: 9.42, dotBallPct: 30.2, average: 11.42 },
    ],
  },

  // ── 12. Rashid Khan ─────────────────────────────────────────────────────────
  12: {
    playerId: 12,
    formatSplits: [
      { format: "T20I", matches: 85, innings: 80, runs: 562, average: 16.53, strikeRate: 148.94, highest: 52, wickets: 126, bowlingAvg: 12.48, economy: 6.27 },
      { format: "IPL", matches: 120, innings: 114, runs: 548, average: 12.46, strikeRate: 146.52, highest: 79, wickets: 178, bowlingAvg: 19.08, economy: 7.09 },
      { format: "Other T20", matches: 46, innings: 46, runs: 97, average: 6.47, strikeRate: 133.37, highest: 34, wickets: 47, bowlingAvg: 16.70, economy: 6.44 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 36, runs: 0, average: 0, strikeRate: 0, wickets: 52, economy: 7.18 },
      { venue: "Wankhede Stadium Mumbai", matches: 14, runs: 0, average: 0, strikeRate: 0, wickets: 18, economy: 7.42 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 19, economy: 7.06 },
      { venue: "Eden Gardens Kolkata", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 16, economy: 7.34 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 14, economy: 7.56 },
    ],
    strengthsNarrative: "Rashid's most dangerous delivery is the fast googly — bowled at 88-94 kph, up to 12 kph faster than his legbreak — which he disguises through an identical grip and release position that even experienced batters read incorrectly approximately 65% of the time. His T20I economy of 6.27 and IPL career economy of 7.09 (across 178 wickets) demonstrate that the combination of wicket-taking and run-restriction at a quality that no other wrist spinner sustains over extended periods. The first bowler to 700 T20 wickets, his longevity at the top of the rankings is unprecedented in the format and reflects both extraordinary skill and a pragmatic self-management approach to fitness.",
    weaknessesNarrative: "Rashid's IPL economy of 8.4 (2024) and 9.35 (2025) — dramatically above his 7.09 career IPL figure — represents a post-surgery hangover that he's still working through. His back surgery in late 2023 required a length adjustment: he temporarily lost the ability to land the googly on a good length consistently, and batters responded by targeting his shorter deliveries aggressively on IPL flat tracks. On slow, turning surfaces (T20WC 2026 in India/Sri Lanka), the dip and turn compensate for length errors; on flat Ahmedabad and Mumbai pitches, his margin for error is minimal and experienced IPL batters — particularly left-handers like Tilak Varma and Jaiswal — have increasingly targeted him with sweeps.",
    analystNote: "Rashid's T20WC 2026 performance — death-overs economy of 7.92 (2nd best among 800+ balls bowlers in the tournament) and the tournament's leading spinner by wickets — confirmed what the IPL economy numbers were obscuring: the real Rashid Khan is back. His IPL 2026 will be the definitive test of whether the surgery recovery has translated fully to franchise cricket conditions. GT's home ground in Ahmedabad is the biggest challenge — the flat drop-in pitch provides minimal assistance, and his economy there in 2024-25 was 9.1, the worst of any major venue. Coach Vikram Rathour's work with Rashid on his length control (specifically landing the googly on the 6-metre mark rather than the 5.5-metre mark) is the tactical story to follow. The talent is unambiguous; the question is whether the back allows him to execute the micro-adjustments at the level his reputation demands.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 68, wickets: 28, economy: 6.48, dotBallPct: 43.8, average: 15.71 },
      { phase: "Middle", overs: 286, wickets: 188, economy: 7.12, dotBallPct: 41.2, average: 10.84 },
      { phase: "Death", overs: 128, wickets: 135, economy: 7.92, dotBallPct: 36.4, average: 7.51 },
    ],
  },

  // ── 13. Rohit Sharma ────────────────────────────────────────────────────────
  13: {
    playerId: 13,
    formatSplits: [
      { format: "T20I", matches: 159, innings: 153, runs: 4231, average: 32.54, strikeRate: 140.89, highest: 118 },
      { format: "IPL", matches: 243, innings: 234, runs: 6542, average: 31.65, strikeRate: 133.84, highest: 121 },
      { format: "Other T20", matches: 29, innings: 28, runs: 504, average: 24.00, strikeRate: 136.59, highest: 98 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 158, runs: 3808, balls: 2696, strikeRate: 141.25, average: 32.83, dismissals: 116, dotBallPct: 31.8 },
      { type: "vs Spin", innings: 158, runs: 2734, balls: 2092, strikeRate: 130.68, average: 30.38, dismissals: 90, dotBallPct: 36.4 },
    ],
    venueStats: [
      { venue: "Wankhede Stadium Mumbai", matches: 72, runs: 2408, average: 38.83, strikeRate: 141.18 },
      { venue: "DY Patil Stadium Mumbai", matches: 18, runs: 562, average: 35.13, strikeRate: 138.52 },
      { venue: "Eden Gardens Kolkata", matches: 16, runs: 464, average: 33.14, strikeRate: 135.87 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 18, runs: 482, average: 29.88, strikeRate: 131.42 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 14, runs: 398, average: 31.84, strikeRate: 133.56 },
    ],
    strengthsNarrative: "Rohit's pull shot remains one of the most technically complete strokes in T20 cricket — he generates the shot from a length two feet shorter than most batters attempt it, and his transfer of weight onto the back foot is so efficient that he can clear the midwicket fence even when hurried. His T20I powerplay average of 34.2 across 153 innings is exceptional for an opener, and his six-hitting in the powerplay (300+ IPL sixes, 2nd all-time) confirms that the boundary-hitting threat is sustainable even at 38. His experience against every bowling type in every condition means he virtually never gives his wicket cheaply to unfamiliar opposition plans — he has only been dismissed for fewer than 5 runs in 8% of his IPL innings, the lowest failure rate among IPL 11,000-run club members.",
    weaknessesNarrative: "Left-arm pace has become an exploitable blueprint against Rohit — 12 dismissals by left-arm seamers since 2023 at an average of just 7.65, including to Mitchell Starc's wide outswinger and Boult's back-of-a-length angled delivery. Teams have adjusted field settings to this knowledge and Rohit hasn't yet fully counter-adapted. His conversion rate from 50+ scores to 75+ has also declined significantly at 38, suggesting the physical demands of sustaining concentration across an extended innings are increasing. His IPL 2025 average of 29.86 — below his career IPL figure of 31.65 — confirms a gradual but measurable decline from the T20WC 2024 peak.",
    analystNote: "Rohit Sharma's T20WC 2024 farewell from the format — the 92(41) vs Australia that set the tone for India's title run — was the crowning achievement of a T20I career spanning 159 matches. His continued IPL presence is now framed as a franchise asset rather than a national selector's puzzle, which paradoxically gives him freedom to operate as the aggressive IPL opener MI need rather than the accumulator India sometimes required. At 38, the 400+ IPL runs per season guarantee is likely to hold for at least two more IPL campaigns given his extraordinary physical conditioning. The left-arm pace vulnerability is MI's tactical problem to manage — they don't face Starc at DC until later in the season, giving Rohit time to build form. His captaincy influence within MI's team dynamics, even without the armband, remains enormous.",
    bowlerPhaseData: [],
  },

  // ── 14. MS Dhoni ────────────────────────────────────────────────────────────
  14: {
    playerId: 14,
    formatSplits: [
      { format: "T20I", matches: 98, innings: 85, runs: 1617, average: 37.60, strikeRate: 126.13, highest: 72 },
      { format: "IPL", matches: 263, innings: 239, runs: 5245, average: 38.28, strikeRate: 135.21, highest: 84 },
      { format: "Other T20", matches: 15, innings: 16, runs: 194, average: 27.71, strikeRate: 130.20, highest: 58 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 162, runs: 2964, balls: 2292, strikeRate: 129.33, average: 38.50, dismissals: 77, dotBallPct: 38.6 },
      { type: "vs Spin", innings: 162, runs: 2281, balls: 1714, strikeRate: 133.08, average: 37.39, dismissals: 61, dotBallPct: 41.2 },
    ],
    venueStats: [
      { venue: "MA Chidambaram Stadium Chennai", matches: 96, runs: 2108, average: 42.16, strikeRate: 138.62 },
      { venue: "Wankhede Stadium Mumbai", matches: 22, runs: 412, average: 34.33, strikeRate: 130.80 },
      { venue: "Eden Gardens Kolkata", matches: 20, runs: 388, average: 32.33, strikeRate: 128.58 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 16, runs: 308, average: 28.00, strikeRate: 126.23 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 16, runs: 286, average: 26.00, strikeRate: 121.36 },
    ],
    strengthsNarrative: "Dhoni's death-overs SR of 151+ in IPL 2025 — still in the top tier of finishing despite batting at No. 7 at 44 — is powered by the helicopter shot that remains one of T20 cricket's most effective one-off weapons: generated by extreme wrist rotation on a full-length delivery on the leg side, it converts what should be a block into a six with a probability rate of 67% when he executes it clean. His keeping record behind the stumps remains exceptional — 83% stumping conversion rate, the highest among wicketkeepers with 50+ stumping opportunities in the IPL — and the tactical acuity that informs his field placements and bowling changes has CSK among the consistently best-run teams in the tournament across his captaincy tenure.",
    weaknessesNarrative: "At 44, Dhoni's batting has become functionally specialist — a powerplay dot-ball rate exceeding 40% means he contributes almost nothing in the first 15 balls of any innings, and his hesitancy against spinning deliveries in the middle overs (rotation strike of only 108 vs spin in overs 7-15) limits his ability to keep the score moving when CSK needs momentum during their batting phase. His IPL 2025 highest score of 30* across 13 innings is below the threshold where opposition planning shifts from passive monitoring to active containment. The reality is that Dhoni's value in 2026 will be measured primarily through his keeping and captaincy — two areas where he still performs at an elite level — rather than the bat.",
    analystNote: "Dhoni's IPL 2026 is almost certainly his last, and CSK have structured the squad to allow him to operate as a keeping captain and finisher without the pressure of being their primary batting match-winner. The Sanju Samson acquisition is particularly significant in this context: it means Dhoni doesn't need to bat early or anchor — he can wait for the death overs where his helicopter shot and calm temperament are most effective. At 376 T20 matches and counting, his leadership legacy is secured regardless of 2026 outcomes. The authentic question is whether his death-overs finishing (15-ball cameos that can still swing close matches) can occur often enough to offset the innings-early-departure risk. CSK's 2026 playoff prospects depend more on Gaikwad, Samson, and Jadeja's health than on Dhoni's bat.",
    bowlerPhaseData: [],
  },

  // ── 15. Tilak Varma ─────────────────────────────────────────────────────────
  15: {
    playerId: 15,
    formatSplits: [
      { format: "T20I", matches: 26, innings: 22, runs: 987, average: 44.86, strikeRate: 145.57, highest: 120 },
      { format: "IPL", matches: 67, innings: 64, runs: 1792, average: 40.73, strikeRate: 143.84, highest: 84 },
      { format: "Other T20", matches: 10, innings: 14, runs: 110, average: 22.00, strikeRate: 135.80, highest: 54 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 54, runs: 1622, balls: 1108, strikeRate: 146.39, average: 42.68, dismissals: 38, dotBallPct: 30.4 },
      { type: "vs Spin", innings: 54, runs: 1267, balls: 882, strikeRate: 143.65, average: 39.59, dismissals: 32, dotBallPct: 35.8 },
    ],
    venueStats: [
      { venue: "Wankhede Stadium Mumbai", matches: 22, runs: 782, average: 43.44, strikeRate: 147.28 },
      { venue: "DY Patil Stadium Mumbai", matches: 8, runs: 298, average: 42.57, strikeRate: 145.37 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 8, runs: 268, average: 44.67, strikeRate: 148.61 },
      { venue: "Eden Gardens Kolkata", matches: 6, runs: 198, average: 39.60, strikeRate: 140.43 },
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 6, runs: 184, average: 36.80, strikeRate: 138.35 },
    ],
    strengthsNarrative: "Tilak Varma's three successive T20 centuries — 107*, 120* vs South Africa in T20Is followed by 151 in SMAT — is a feat without parallel in the history of the format and reflects the extraordinary combination of technique and power that makes him India's most complete young middle-order batter. His T20I average of 44.86 at SR 145.57 is the best risk-reward ratio for a No. 4 batter in Indian cricket history, while his death-overs average of 44.8 at SR 168.4 confirms he's equally lethal as a finisher. Against short balls — once flagged as a vulnerability by MI coaching staff — his improvement has been startling: his pull-shot boundary percentage improved from 28% (IPL 2023) to 58% (IPL 2025) as his weight transfer and trigger movement were refined.",
    weaknessesNarrative: "Tilak's middle-overs scoring rate against quality spin (particularly leg-spin in the 8-14 over window) remains below his overall SR — his dot-ball percentage against leg-break deliveries in overs 8-14 is 42%, compared to 31% career, suggesting MI's tactical instruction to consolidate in that phase prioritises team needs over personal statistics. Teams have begun targeting him with left-arm spin at the start of his innings, exploiting the slight late-movement vulnerability that all left-hand batters face against quality left-arm spin. His IPL experience (67 matches, 40.73 average) is still relatively modest by the standards of peers like Kohli or Rohit, meaning he's still encountering first-time bowling plans that require adaptation.",
    analystNote: "Tilak Varma is the most straightforwardly exciting batting prospect in Indian cricket — three consecutive T20 centuries at age 22, an Asia Cup final POTM, and T20WC 2026 title contributions place him in a rarefied category for his age. His testicular torsion surgery in early 2026 was a brief health scare that has been fully resolved, and his T20WC fitness and form (31, 25, 44 in three knockout innings) confirmed readiness. MI have structured their 2026 auction rebuild around him as the franchise cornerstone, likely batting at No. 3-4 alongside SKY in a complementary middle-order axis. The historical parallel is Dhoni in 2007-2010 — a middle-order batter whose combination of average and strike rate was uniquely superior to peers — and Tilak's 2026 trajectory suggests he'll match or exceed that benchmark within two to three seasons.",
    bowlerPhaseData: [],
  },

  // ── 16. Phil Salt ───────────────────────────────────────────────────────────
  16: {
    playerId: 16,
    formatSplits: [
      { format: "T20I", matches: 42, innings: 40, runs: 1462, average: 38.47, strikeRate: 165.15, highest: 141 },
      { format: "IPL", matches: 32, innings: 31, runs: 838, average: 29.93, strikeRate: 175.84, highest: 89 },
      { format: "Other T20", matches: 6, innings: 9, runs: 179, average: 35.80, strikeRate: 165.74, highest: 62 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 52, runs: 1506, balls: 844, strikeRate: 178.44, average: 38.62, dismissals: 39, dotBallPct: 20.4 },
      { type: "vs Spin", innings: 52, runs: 973, balls: 628, strikeRate: 154.94, average: 35.96, dismissals: 27, dotBallPct: 30.8 },
    ],
    venueStats: [
      { venue: "Arun Jaitley Stadium Delhi", matches: 14, runs: 444, average: 37.00, strikeRate: 178.32 },
      { venue: "Wankhede Stadium Mumbai", matches: 6, runs: 214, average: 42.80, strikeRate: 181.36 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 6, runs: 188, average: 37.60, strikeRate: 175.70 },
      { venue: "Eden Gardens Kolkata", matches: 4, runs: 132, average: 33.00, strikeRate: 170.13 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 4, runs: 108, average: 27.00, strikeRate: 163.64 },
    ],
    strengthsNarrative: "Salt is the fastest genuine scorer in world T20 cricket — his IPL SR of 175+ across two seasons is maintained not through one or two specific shots but through a systemic approach to boundary-seeking: he plays 62% of pace deliveries outside off as either drives or cuts (far above the 44% tour average), accepting a higher edge probability in exchange for extraordinary boundary conversion. His 141* vs South Africa — an innings that helped England post 303 in a T20I — proved he can maintain this approach against elite bowling in conditions where others revert to consolidation mode. His T20I century average of 4 (four centuries in the last 18 months) is the best rate in world cricket.",
    weaknessesNarrative: "Salt's well-documented weakness is good-length spin on the stumps in the middle overs — his SR drops to 131 against spin on stumps, a fall of 44 points from his against-pace SR. Teams have blueprinted this vulnerability extensively: in T20WC 2026, India and Pakistan both deployed their best finger-spinners in the first two overs Salt faced, resulting in consecutive dismissals for 5 and 0. On slow, turning pitches in Chennai and Kolkata, this vulnerability is compounded by his difficulty reading the googly, and his pull shot against short balls from pace — which accounts for 46% of his IPL midwicket dismissals — remains a technical risk that high-quality short-ball plans exploit.",
    analystNote: "Salt arrives at IPL 2026 as the most talked-about overseas opener in the competition — his 141* vs South Africa and ESPNcricinfo's T20I batting performance of the year award have made him an in-demand asset across franchise cricket globally. DC's acquisition is their most significant batting coup since the Salt-less era when they struggled to post competitive totals. The interesting structural question is whether Salt and KL Rahul can coexist at the top of DC's order: both are openers, both want to bat first, and their contrasting styles (Salt: maximum intent from ball one; Rahul: calculated acceleration) could either complement or conflict. Salt's T20WC 2026 form collapse (5, 2, 0, 3 in four matches) doesn't concern seasoned franchise coaches — IPL conditions are his optimal environment.",
    bowlerPhaseData: [],
  },

  // ── 17. Kagiso Rabada ───────────────────────────────────────────────────────
  17: {
    playerId: 17,
    formatSplits: [
      { format: "T20I", matches: 58, innings: 54, runs: 162, average: 10.13, strikeRate: 107.28, highest: 31, wickets: 75, bowlingAvg: 19.48, economy: 7.18 },
      { format: "IPL", matches: 98, innings: 94, runs: 218, average: 13.63, strikeRate: 112.37, highest: 44, wickets: 118, bowlingAvg: 31.22, economy: 8.58 },
      { format: "Other T20", matches: 7, innings: 11, runs: 19, average: 9.50, strikeRate: 105.56, highest: 14, wickets: 9, bowlingAvg: 24.11, economy: 8.24 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 18, runs: 0, average: 0, strikeRate: 0, wickets: 22, economy: 8.28 },
      { venue: "Wankhede Stadium Mumbai", matches: 14, runs: 0, average: 0, strikeRate: 0, wickets: 16, economy: 8.44 },
      { venue: "Eden Gardens Kolkata", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 13, economy: 8.72 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 12, economy: 8.86 },
      { venue: "Punjab Cricket Association Stadium Mohali", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 11, economy: 8.14 },
    ],
    strengthsNarrative: "Rabada's powerplay new-ball bowling is among the best in T20 cricket — he generates back-of-a-length bounce at 140-150 kph with a bowling action that releases from closer to the stumps than most fast bowlers, creating an angled trajectory that is extremely difficult to play square on the on-side. His fastest-to-100 IPL wickets record and 32 T20WC wickets (surpassing Dale Steyn as South Africa's second-highest tournament wicket-taker) confirm a sustained level of wicket-taking across formats and surfaces. His IPL 2025 economy improvement (8.21 from 8.84 in 2024) reflects deliberate refinement of his yorker execution following work with GT's bowling coach.",
    weaknessesNarrative: "Rabada's IPL economy of 8.52 career — expensive relative to his T20I figure of 7.18 — is partly structural (IPL batters are more aggressive) but partly technical: he has a tendency in the 4th-6th over of the powerplay to fall short of a length, which generates pull-shot opportunities at a rate 24% higher than in his 1st-3rd over. His injury pattern — ankle inflammation (August 2025), rib injury (December 2025), no-ball under pressure in T20WC 2026 — suggests both physical fragility and pressure-management challenges that multiply in the high-stakes IPL playoff environment. His IPL average of 31.22 (vs T20I average of 19.48) confirms that the flat GT Ahmedabad pitch is his most significant ongoing challenge.",
    analystNote: "Rabada's narrative entering IPL 2026 is one of consolidation rather than peak — he's the most expensive fast bowler in the GT lineup but his returns have been consistent rather than spectacular in recent seasons. His T20WC 2026 form (14 wickets at 22.4) was solid but not career-defining, and the near-miss no-ball against Afghanistan — which could have cost SA the game — added a pressure-management dimension to a previously spotless big-match record. For GT, Rabada's value is clearest in the powerplay: paired with Shami or Mohammed Siraj, his new-ball partnership can restrict any IPL top order. Whether his death-overs economy (career IPL death economy 9.8) can be improved with more deliberate variation-heavy planning is the coaching challenge GT will need to address.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 112, wickets: 58, economy: 7.88, dotBallPct: 42.4, average: 15.22 },
      { phase: "Middle", overs: 94, wickets: 46, economy: 8.42, dotBallPct: 36.8, average: 17.26 },
      { phase: "Death", overs: 68, wickets: 98, economy: 9.82, dotBallPct: 28.6, average: 6.82 },
    ],
  },

  // ── 18. Ravindra Jadeja ─────────────────────────────────────────────────────
  18: {
    playerId: 18,
    formatSplits: [
      { format: "T20I", matches: 74, innings: 52, runs: 515, average: 22.39, strikeRate: 127.46, highest: 46, wickets: 54, bowlingAvg: 24.83, economy: 7.13 },
      { format: "IPL", matches: 228, innings: 208, runs: 3085, average: 27.54, strikeRate: 129.84, highest: 77, wickets: 162, bowlingAvg: 27.62, economy: 7.62 },
      { format: "Other T20", matches: 26, innings: 38, runs: 175, average: 17.50, strikeRate: 121.53, highest: 38, wickets: 8, bowlingAvg: 34.50, economy: 7.86 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "MA Chidambaram Stadium Chennai", matches: 84, runs: 1062, average: 30.34, strikeRate: 128.44, wickets: 58, economy: 7.28 },
      { venue: "Wankhede Stadium Mumbai", matches: 18, runs: 218, average: 24.22, strikeRate: 126.16, wickets: 14, economy: 7.68 },
      { venue: "Eden Gardens Kolkata", matches: 16, runs: 188, average: 23.50, strikeRate: 124.50, wickets: 12, economy: 7.44 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 14, runs: 172, average: 22.93, strikeRate: 120.28, wickets: 10, economy: 7.56 },
      { venue: "Arun Jaitley Stadium Delhi", matches: 12, runs: 148, average: 21.14, strikeRate: 123.33, wickets: 9, economy: 7.72 },
    ],
    strengthsNarrative: "Jadeja's middle-overs economy of sub-7.5 in the IPL — sustained across 328 T20 matches — is predicated on an accurate, flat delivery trajectory that barely clears the stumps and forces batters to play every ball. His left-arm angle creates a natural drift away from right-hand batters, generating LBW probability 22% above the spin-bowling average, and his fielding — arguably the best in Indian cricket history — creates direct pressure on batters to not run singles against his bowling end, effectively taking 2-3 singles per innings off the scoreboard. His IPL 2023 final performance (finishing the game for CSK with a boundary off the final ball) remains the defining moment of his T20 legacy.",
    weaknessesNarrative: "Jadeja's batting output in T20s has declined steadily — his IPL 2025 SR of 128 and average of 25.4 are the lowest single-season marks of his career — reflecting the diminishing reflexes against express pace at 37 that are common in ageing all-rounders. His bowling in T20s has also been gradually declining: his wicket frequency has dropped from one wicket per 17.8 balls (2019-21 peak) to one per 24.6 balls (2024-25), partly because IPL batters have expanded their sweep and reverse-sweep options to negate his flat-trajectory accuracy. His T20I retirement after 2024 removes the one context where his dual contribution remained clearly competitive.",
    analystNote: "Jadeja's IPL 2026 will likely be his penultimate or final IPL season, and CSK have been planning the transition: Noor Ahmad's emergence as the primary spinner reduces the bowling burden on Jadeja, and Samson's acquisition provides the batting impact that Jadeja's declining bat can no longer reliably provide. His value to CSK in 2026 is therefore multi-dimensional but not primarily statistical — the fielding, the experience in CSK's team culture, the match-winning capability in dead-rubber games. In tight playoff conditions, however, Axar Patel and Kuldeep Yadav's superior forms at international level reflect the shifted spinner hierarchy, and Jadeja's IPL standing will depend on whether his Chennai-specific skills remain competitive for another season.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 28, wickets: 8, economy: 6.84, dotBallPct: 46.2, average: 24.00 },
      { phase: "Middle", overs: 448, wickets: 152, economy: 7.34, dotBallPct: 42.6, average: 21.62 },
      { phase: "Death", overs: 136, wickets: 64, economy: 8.48, dotBallPct: 32.4, average: 18.06 },
    ],
  },

  // ── 19. Mitchell Starc ──────────────────────────────────────────────────────
  19: {
    playerId: 19,
    formatSplits: [
      { format: "T20I", matches: 42, innings: 38, runs: 88, average: 6.77, strikeRate: 81.48, highest: 20, wickets: 51, bowlingAvg: 20.47, economy: 7.42 },
      { format: "IPL", matches: 52, innings: 49, runs: 112, average: 9.33, strikeRate: 98.25, highest: 29, wickets: 62, bowlingAvg: 24.79, economy: 8.18 },
      { format: "Other T20", matches: 23, innings: 25, runs: 9, average: 4.50, strikeRate: 81.82, highest: 12, wickets: 31, bowlingAvg: 22.68, economy: 7.88 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Arun Jaitley Stadium Delhi", matches: 16, runs: 0, average: 0, strikeRate: 0, wickets: 18, economy: 7.94 },
      { venue: "Eden Gardens Kolkata", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 14, economy: 8.42 },
      { venue: "Wankhede Stadium Mumbai", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 10, economy: 8.28 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 6, runs: 0, average: 0, strikeRate: 0, wickets: 8, economy: 8.62 },
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 6, runs: 0, average: 0, strikeRate: 0, wickets: 7, economy: 8.74 },
    ],
    strengthsNarrative: "Starc's left-arm angle produces a trajectory that angles away from right-hand batters and back in from left-handers, making him uniquely dangerous to both batting types — but it's specifically his ability to swing the new ball at 145+ kph that sets him apart from other IPL seamers. His maiden IPL 5-wicket haul (5/35 vs SRH in IPL 2025) demonstrated that his powerplay new-ball bowling on Delhi's Arun Jaitley pitch — where the extra carry suits his high-arm action — can dismantle any top order. His record ₹24.75cr KKR purchase in 2024 and his DC retention demonstrate that franchise cricket values his combination of left-arm swing and death-overs yorker accuracy as a rare commodity.",
    weaknessesNarrative: "Starc's IPL economy of 8.12 career — among the highest for premier overseas bowlers — reflects the challenge of bowling full in Indian conditions where flat pitches offer little lateral movement and batters have learned to premeditate against his full-length style. His T20I retirement and personal-reasons withdrawal during IPL 2025 (subsequently reversed) raise availability and commitment questions that are legitimate considerations for DC's match planning. At 36, maintaining his pace above 143 kph across a full IPL campaign of 14-16 matches is a physical challenge the Brisbane Heat had managed carefully in BBL 2025-26.",
    analystNote: "Starc's IPL 2025 (5/35 and the 200th T20 wicket) settled the debate about whether his record KKR purchase was justified — he delivered match-winning performances at the highest level of franchise cricket. His move to DC, where Arun Jaitley's extra pace will assist his high-arm action more than the Wankhede's flatter conditions, is tactically astute. The open question for 2026 is his availability across all 14 DC fixtures: if he plays every match, DC have the most threatening pace attack in the IPL; if he misses 3-4 matches as in 2025, the load falls on Kuldeep, Rabada (GT), and the supporting cast. His left-arm angle against Jaiswal (RR) — where he's dismissed the opener twice — will be a specific tactical advantage in two important IPL fixtures.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 102, wickets: 52, economy: 7.68, dotBallPct: 43.8, average: 15.08 },
      { phase: "Middle", overs: 78, wickets: 34, economy: 8.38, dotBallPct: 36.4, average: 19.24 },
      { phase: "Death", overs: 84, wickets: 58, economy: 8.98, dotBallPct: 32.6, average: 13.03 },
    ],
  },

  // ── 20. Sanju Samson ────────────────────────────────────────────────────────
  20: {
    playerId: 20,
    formatSplits: [
      { format: "T20I", matches: 42, innings: 38, runs: 1222, average: 36.24, strikeRate: 147.58, highest: 111 },
      { format: "IPL", matches: 173, innings: 164, runs: 4652, average: 31.24, strikeRate: 143.22, highest: 119 },
      { format: "Other T20", matches: 24, innings: 26, runs: 229, average: 20.82, strikeRate: 132.95, highest: 68 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 108, runs: 2862, balls: 1998, strikeRate: 143.24, average: 32.52, dismissals: 88, dotBallPct: 32.6 },
      { type: "vs Spin", innings: 108, runs: 1790, balls: 1262, strikeRate: 141.84, average: 29.34, dismissals: 61, dotBallPct: 36.8 },
    ],
    venueStats: [
      { venue: "Sawai Mansingh Stadium Jaipur", matches: 44, runs: 1568, average: 42.38, strikeRate: 148.72 },
      { venue: "Wankhede Stadium Mumbai", matches: 14, runs: 448, average: 35.83, strikeRate: 144.64 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 368, average: 34.11, strikeRate: 140.08 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 8, runs: 228, average: 32.57, strikeRate: 136.52 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 262, average: 29.11, strikeRate: 135.77 },
    ],
    strengthsNarrative: "Samson's T20WC 2026 performance — 321 runs in 5 innings, Player of the Tournament, three consecutive 80+ scores in knockout matches — confirmed what his three T20I centuries against Bangladesh and South Africa in late 2024 had hinted: he's in the form of his life and has matured into a big-stage player. His 97* in the final and the consecutive 89s in the quarter- and semi-finals reflect an ability to bat with clinical precision under maximum pressure that eluded him earlier in his career. His on-side play against pace — particularly the pull and flick through midwicket — is his strongest scoring zone, generating a 62% boundary rate and providing 38% of his T20I runs in these matches.",
    weaknessesNarrative: "The Samson paradox — alternating between purple patches of century-making brilliance and sequences of single-digit scores — hasn't fully resolved. Between his late-2024 T20I centuries and the T20WC 2026 heroics, he was dropped from the XI and struggled against England (seaming conditions, multiple single-digit scores) and New Zealand. His IPL 2025 was truncated at 9 innings (285 runs) by rib and finger injuries, and the consistency gap between his peak performances and his average match output remains the biggest uncertainty about how his CSK role will function. Against moving deliveries early in his innings, particularly when wide of off stump, his front-foot drive has a false-shot rate 18% above the IPL average.",
    analystNote: "Samson's move to CSK from RR is the most emotionally significant transfer of the IPL 2026 auction — RR built their franchise identity partly around him over 11 seasons before the separation. At CSK, he's likely to open alongside Gaikwad, providing a formidable top-order combination: Gaikwad's technical solidity and Samson's explosive power make them theoretically one of the best opening pairs available. The question is whether the T20WC 2026 form — which peaked precisely when it needed to — carries over to the IPL's 14-match regular season grind. CSK's MA Chidambaram home ground, with its slower surfaces, historically suits controlled power-hitting rather than Samson's more expansive approach, but his T20WC performances on turning Sri Lankan surfaces suggest he's adapted. At 31, this may be his championship window.",
    bowlerPhaseData: [],
  },

  // ── 21. Noor Ahmad ──────────────────────────────────────────────────────────
  21: {
    playerId: 21,
    formatSplits: [
      { format: "T20I", matches: 22, innings: 20, runs: 44, average: 3.67, strikeRate: 64.71, highest: 15, wickets: 32, bowlingAvg: 15.22, economy: 6.56 },
      { format: "IPL", matches: 22, innings: 21, runs: 28, average: 4.67, strikeRate: 71.79, highest: 12, wickets: 30, bowlingAvg: 22.03, economy: 8.08 },
      { format: "Other T20", matches: 13, innings: 13, runs: 12, average: 3.00, strikeRate: 66.67, highest: 8, wickets: 14, bowlingAvg: 19.43, economy: 7.21 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "MA Chidambaram Stadium Chennai", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 14, economy: 7.28 },
      { venue: "Wankhede Stadium Mumbai", matches: 4, runs: 0, average: 0, strikeRate: 0, wickets: 5, economy: 8.42 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 4, runs: 0, average: 0, strikeRate: 0, wickets: 4, economy: 8.64 },
      { venue: "Eden Gardens Kolkata", matches: 4, runs: 0, average: 0, strikeRate: 0, wickets: 5, economy: 8.12 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 4, runs: 0, average: 0, strikeRate: 0, wickets: 4, economy: 8.78 },
    ],
    strengthsNarrative: "Noor Ahmad's left-arm wrist spin is the rarest bowling action in franchise cricket — only a handful of bowlers in IPL history have offered this delivery type, meaning batters have minimal reference data to prepare specific counter-strategies. His 24 IPL wickets in 14 innings in 2025 at just 18 years old represent the best single-season debut by any spinner in recent IPL history, and his 5/3 in the Asia Cup 2025 showcased the destruction he can cause when conditions assist. His googly-disguised-as-chinaman is his primary wicket-taking ball: it spins away from right-hand batters at a rate that generates stumped/beaten-outside-off dismissals at 3.2 times the IPL spinner average.",
    weaknessesNarrative: "Noor's IPL economy of 8.08 — significantly higher than his international T20 economy of 6.56 — confirms that flat-track IPL pitches limit the drift and turn that amplify his wicket-taking on standard surfaces. Experienced IPL batters (Kohli, Rohit, Klaasen) have already developed preliminary counter-plans involving the switch-hit and pre-meditated reverse sweep, which neutralise the left-arm angle advantage. At 19 with only 57 career T20 matches, he's still in the rapid learning phase — his expensive overs (0/35 vs SA internationally) come when batters attack his shorter variations, a length discipline issue he hasn't fully resolved.",
    analystNote: "Noor Ahmad is the most exciting young bowling talent in franchise cricket entering 2026 — at 19, his trajectory is genuinely comparable to a young Rashid Khan's IPL emergence. His Asia Cup 5/3 performance alongside Varun Chakravarthy created what many described as the most lethal T20 spin partnership at Asia Cup level, and CSK clearly view him as the long-term replacement for Jadeja's bowling role. His SA20 2026 form (8.82 economy, 4 wickets in 7 matches at Paarl and Cape Town) showed the expected conditions-dependency, but CSK's MA Chidambaram home ground is the ideal surface for him — slow, turning, and with the extra bounce that amplifies his action. If he maintains the IPL 2025 wicket rate while reducing economy by one run per over (achievable with better length control in the middle overs), he becomes the best value spinner in the tournament.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 14, wickets: 6, economy: 7.24, dotBallPct: 40.8, average: 16.83 },
      { phase: "Middle", overs: 62, wickets: 32, economy: 7.86, dotBallPct: 39.2, average: 15.25 },
      { phase: "Death", overs: 22, wickets: 26, economy: 9.18, dotBallPct: 28.4, average: 7.77 },
    ],
  },

  // ── 22. KL Rahul ────────────────────────────────────────────────────────────
  22: {
    playerId: 22,
    formatSplits: [
      { format: "T20I", matches: 72, innings: 68, runs: 2565, average: 37.72, strikeRate: 139.15, highest: 132 },
      { format: "IPL", matches: 123, innings: 119, runs: 4692, average: 46.45, strikeRate: 136.64, highest: 132 },
      { format: "Other T20", matches: 22, innings: 22, runs: 230, average: 25.56, strikeRate: 128.49, highest: 62 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 128, runs: 3044, balls: 2186, strikeRate: 139.24, average: 47.57, dismissals: 64, dotBallPct: 32.2 },
      { type: "vs Spin", innings: 128, runs: 1648, balls: 1218, strikeRate: 135.30, average: 44.54, dismissals: 37, dotBallPct: 36.8 },
    ],
    venueStats: [
      { venue: "Punjab Cricket Association Stadium Mohali", matches: 28, runs: 1348, average: 56.17, strikeRate: 144.57 },
      { venue: "BRSABV Ekana Stadium Lucknow", matches: 18, runs: 794, average: 52.93, strikeRate: 148.22 },
      { venue: "Arun Jaitley Stadium Delhi", matches: 8, runs: 318, average: 45.43, strikeRate: 150.00 },
      { venue: "Wankhede Stadium Mumbai", matches: 10, runs: 388, average: 43.11, strikeRate: 139.86 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 10, runs: 362, average: 40.22, strikeRate: 136.84 },
    ],
    strengthsNarrative: "KL Rahul is the IPL's highest career average holder among regular batters with 50+ matches (46.21), a figure that reflects his extraordinary ability to build innings without the high-risk dismissal patterns that other high-average batters accumulate. His IPL 2025 (539 runs at 53.9 average, SR 150 including his maiden IPL century 112*) represented a deliberate evolution: an increased powerplay aggression rate that lifted his career SR from 136 to 150 in that single season. His keeping is underrated — a stumping success rate of 76% and above-average reviews-upholding record make him one of the better keeper-batters in the IPL beyond the pure batting statistics.",
    weaknessesNarrative: "Rahul's powerplay conservatism — historically averaging a SR of 128.5 in the first six overs, the lowest among regular IPL openers with 100+ powerplay innings — has been the primary reason for his T20I exile since 2023, despite an impressive average in that format too. Selectors want an opener who can strike at 145+ in the powerplay, and Rahul's instinct is always to build from behind a ball before accelerating, which sets a slower platform than India's aggressive template demands. His injury record (thigh, groin, hamstring issues across 2022-24) has also reduced his T20I reliability in the selectors' minds, even though his IPL availability has been generally excellent.",
    analystNote: "Rahul's DC move for IPL 2026 is his highest-profile change since his Punjab Kings captaincy — pairing him with Phil Salt at the top of DC's batting order creates a fascinating stylistic contrast. Salt's 175+ SR and Rahul's 150+ SR from IPL 2025 means DC's opening partnership has the highest combined strike rate of any regular IPL opening pair in recent history, if both are fit. The captaincy question is interesting: DC already have Axar Patel as IPL captain, but Rahul's experience and Axar's bowling responsibilities may create a shared leadership model. At 34, Rahul is entering what should be his final 2-3 elite IPL seasons, and the DC environment — with fewer batting demands and more tactical clarity around his anchor role — may suit him better than the LSG captaincy did.",
    bowlerPhaseData: [],
  },

  // ── 23. Varun Chakravarthy ──────────────────────────────────────────────────
  23: {
    playerId: 23,
    formatSplits: [
      { format: "T20I", matches: 38, innings: 36, runs: 10, average: 2.50, strikeRate: 38.46, highest: 10, wickets: 64, bowlingAvg: 11.64, economy: 7.28 },
      { format: "IPL", matches: 78, innings: 76, runs: 6, average: 2.00, strikeRate: 42.86, highest: 8, wickets: 96, bowlingAvg: 20.88, economy: 7.72 },
      { format: "Other T20", matches: 6, innings: 8, runs: 0, average: 0, strikeRate: 0, highest: 0, wickets: 11, bowlingAvg: 18.36, economy: 7.24 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Eden Gardens Kolkata", matches: 28, runs: 0, average: 0, strikeRate: 0, wickets: 36, economy: 7.44 },
      { venue: "Wankhede Stadium Mumbai", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 12, economy: 7.88 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 11, economy: 7.32 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 10, economy: 7.68 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 9, economy: 7.92 },
    ],
    strengthsNarrative: "Varun Chakravarthy's reinvented googly — bowled at 88-96 kph with a wrist position that accounts for 79% of his recent wickets — is the most discussed bowling variation in T20 cricket since Shane Warne's flipper. His 81 middle-overs wickets since January 2024 at a bowling strike rate of 12.3 represent a dominance in the 7-16 over phase that no other spinner globally can match, and his maiden T20I 5-wicket haul (5/17 vs South Africa) confirmed this dominance at the highest level. At world No. 1 T20I ranking (818 points), he's the first Indian bowler to hold that position, validating a comeback that began with quiet rebuilding of his action after the T20WC 2021 disappointment.",
    weaknessesNarrative: "Varun's four most expensive T20I spells have all come against South Africa, whose left-hand-heavy batting lineup — Bavuma, Stubbs, and de Kock — has discovered a vulnerability in his delivery pattern when batters step across to use the pace. Left-hand batters are attacking him with the sweep and the pre-meditated slog more frequently, lifting his average against that batting type by 38% compared to his average against right-handers. At 35, the concern over how long the mystery lasts — how many more IPL seasons before opposition teams have fully decoded his variations — is a legitimate analytical question that coaches and selectors are beginning to ask.",
    analystNote: "Varun's story is one of T20 cricket's great narrative arcs — from the invisible 2021 T20WC performance to the world's best T20I spinner five years later through technical reinvention and relentless self-belief. His IPL 2026 at Eden Gardens will be his 7th season at KKR, and the conditions there (Kolkata's extra bounce and occasional grip) are the most favourable in the IPL for his style. KKR's strategy of pairing him with Mitchell Starc (now at DC) — which they no longer have — and using Anrich Nortje's pace to pressure batters before Varun's spin is likely to be replaced with Bumrah/Rabada's approach in cross-team planning. The domestic succession planning around him (Anukul Roy, Suyash Sharma) suggests KKR expect him to be at or near peak for two more seasons before a phased transition.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 22, wickets: 8, economy: 7.04, dotBallPct: 44.2, average: 19.38 },
      { phase: "Middle", overs: 244, wickets: 112, economy: 7.54, dotBallPct: 43.8, average: 16.44 },
      { phase: "Death", overs: 58, wickets: 51, economy: 8.24, dotBallPct: 34.6, average: 9.39 },
    ],
  },

  // ── 24. Mayank Yadav ────────────────────────────────────────────────────────
  24: {
    playerId: 24,
    formatSplits: [
      { format: "T20I", matches: 3, innings: 3, runs: 1, average: 1.00, strikeRate: 100.00, highest: 1, wickets: 4, bowlingAvg: 15.75, economy: 7.88 },
      { format: "IPL", matches: 6, innings: 6, runs: 0, average: 0, strikeRate: 0, highest: 1, wickets: 9, bowlingAvg: 18.44, economy: 8.56 },
      { format: "Other T20", matches: 0, innings: 0, runs: 0, average: 0, strikeRate: 0, highest: 0 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "BRSABV Ekana Stadium Lucknow", matches: 4, runs: 0, average: 0, strikeRate: 0, wickets: 6, economy: 8.42 },
      { venue: "Wankhede Stadium Mumbai", matches: 2, runs: 0, average: 0, strikeRate: 0, wickets: 3, economy: 8.88 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 2, runs: 0, average: 0, strikeRate: 0, wickets: 2, economy: 9.12 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 1, runs: 0, average: 0, strikeRate: 0, wickets: 1, economy: 8.64 },
      { venue: "Punjab Cricket Association Stadium Mohali", matches: 0, runs: 0, average: 0, strikeRate: 0, wickets: 1, economy: 7.44 },
    ],
    strengthsNarrative: "Mayank Yadav's ceiling is as high as any fast bowler in world cricket when operating at full fitness — the fastest ball in IPL 2024 history (156.7 kph), a debut maiden over in T20Is (only the third Indian to achieve this), and 3/27 in his IPL debut announced a pace bowling talent that India hasn't produced since the peak Ishant Sharma era. At 150+ kph, his back-of-a-length deliveries generate extra bounce from good lengths that right-hand batters cannot pull cleanly, producing a false-shot percentage of 34% — the highest of any Indian bowler in recent T20 data. When available, he's the most threatening new-ball option in the LSG armoury.",
    weaknessesNarrative: "Mayank's career total of 9 T20 matches across two years tells the central story: back stress fractures have limited him to brief, tantalising glimpses rather than sustained contribution. His IPL 2025 comeback at 130-140 kph (well below his 156.7 kph peak) was physically cautious, and the re-injury after only 2 matches confirmed that the underlying structural issue hasn't been fully resolved. At reduced pace (130-140 kph), his deliveries lose the extra bounce and surprise factor that makes him unplayable — at that speed, he's a competent medium-fast bowler rather than the express quick LSG are paying for.",
    analystNote: "Mayank enters IPL 2026 at 90% fitness according to BCCI medical staff, with LSG having carefully managed his rehabilitation through a customised strength and conditioning programme. The cautious optimism around him is tempered by the reality of his injury pattern: two significant breakdowns in two years is not the profile of a body that will comfortably sustain 14-16 IPL matches at full pace. LSG's strategy will likely involve a careful match-by-match fitness assessment with a hard overs-per-match limit, and they may look to build towards a second-half-of-the-season peak if he starts the tournament restricted to 2-3 overs per game. The talent is indisputable — if IPL 2026 yields 15+ matches and wickets at sub-20 average, it would represent his breakthrough season and set the stage for a genuine superstar trajectory.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 16, wickets: 7, economy: 7.88, dotBallPct: 46.8, average: 18.00 },
      { phase: "Middle", overs: 12, wickets: 4, economy: 8.84, dotBallPct: 38.4, average: 26.50 },
      { phase: "Death", overs: 6, wickets: 2, economy: 10.33, dotBallPct: 26.8, average: 31.00 },
    ],
  },

  // ── 25. Jos Buttler ─────────────────────────────────────────────────────────
  25: {
    playerId: 25,
    formatSplits: [
      { format: "T20I", matches: 124, innings: 118, runs: 3582, average: 36.55, strikeRate: 143.04, highest: 101 },
      { format: "IPL", matches: 117, innings: 114, runs: 3942, average: 40.64, strikeRate: 151.86, highest: 124 },
      { format: "Other T20", matches: 20, innings: 20, runs: 432, average: 24.00, strikeRate: 142.11, highest: 77 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 158, runs: 4642, balls: 3092, strikeRate: 150.13, average: 39.17, dismissals: 118, dotBallPct: 28.4 },
      { type: "vs Spin", innings: 158, runs: 3314, balls: 2218, strikeRate: 149.41, average: 38.09, dismissals: 87, dotBallPct: 32.8 },
    ],
    venueStats: [
      { venue: "Sawai Mansingh Stadium Jaipur", matches: 42, runs: 1822, average: 52.06, strikeRate: 156.42 },
      { venue: "Wankhede Stadium Mumbai", matches: 14, runs: 548, average: 42.15, strikeRate: 151.80 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 12, runs: 462, average: 42.00, strikeRate: 155.05 },
      { venue: "Eden Gardens Kolkata", matches: 12, runs: 408, average: 37.09, strikeRate: 148.36 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 10, runs: 354, average: 39.33, strikeRate: 152.59 },
    ],
    strengthsNarrative: "Buttler's innovation index in T20 batting — the scoop, the ramp, the reverse sweep, the switch-hit — is the most diverse of any active top-order batter, generating shots from 360 degrees of the ground and forcing field-setting captains into impossible compromises. His IPL 2025 (538 runs at 59.78 average, 163 SR) was his most efficient season, characterised by extreme shot selection discipline: he played unconventional shots only when the field was set to prevent conventional boundaries, rather than defaulting to innovation for its own sake. His IPL record at Sawai Mansingh — over 1,800 runs in 42 matches at an average exceeding 52 — is the most dominant individual venue record in franchise cricket.",
    weaknessesNarrative: "Buttler's T20WC 2026 collapse — four consecutive single-digit scores including 0(2) and 2(3) — exposed a specific vulnerability that teams have been developing for two years: good-length spin on the stumps in the first three balls of his innings. His high backswing takes longer to bring down against spin at the start than against pace, and quality subcontinental spinners who bowl on a good length outside off have dismissed him early with the ball that skids on. His weakness against left-arm spin in particular (Jadeja: dismissed him 4 times, Axar: 3 times in T20Is) is now thoroughly documented and represents the primary tactical challenge for RR's opponents in IPL 2026.",
    analystNote: "Buttler's career narrative is increasingly one of two parallel realities: the IPL franchise specialist who averages 40+ at 150+ SR in one of T20 cricket's most reliably elite records, and the T20I batter who has visibly declined from a 2021-22 peak that no other English batter has approached. His T20WC 2026 failure was so stark — the contrast between 538 IPL runs at 163 SR and four consecutive single-digit T20WC scores — that England have reportedly begun discussions about his international T20 future. For RR in IPL 2026, the question is whether Buttler's motivation remains at peak levels after 12 years and 252 IPL innings — Jaiswal's presence creates an ideal partnership where Buttler can play the floating role if needed, but the chemistry at the top of the order will need careful management.",
    bowlerPhaseData: [],
  },

  // ── 26. Kuldeep Yadav ───────────────────────────────────────────────────────
  26: {
    playerId: 26,
    formatSplits: [
      { format: "T20I", matches: 38, innings: 36, runs: 88, average: 8.00, strikeRate: 76.52, highest: 35, wickets: 70, bowlingAvg: 15.04, economy: 6.80 },
      { format: "IPL", matches: 96, innings: 92, runs: 148, average: 12.33, strikeRate: 80.43, highest: 32, wickets: 118, bowlingAvg: 23.04, economy: 8.06 },
      { format: "Other T20", matches: 18, innings: 20, runs: 13, average: 4.33, strikeRate: 76.47, highest: 12, wickets: 9, bowlingAvg: 28.89, economy: 7.42 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Arun Jaitley Stadium Delhi", matches: 28, runs: 0, average: 0, strikeRate: 0, wickets: 34, economy: 7.72 },
      { venue: "Wankhede Stadium Mumbai", matches: 12, runs: 0, average: 0, strikeRate: 0, wickets: 12, economy: 8.44 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 10, economy: 8.62 },
      { venue: "Eden Gardens Kolkata", matches: 10, runs: 0, average: 0, strikeRate: 0, wickets: 11, economy: 7.96 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 8, runs: 0, average: 0, strikeRate: 0, wickets: 9, economy: 8.28 },
    ],
    strengthsNarrative: "Kuldeep's best T20I bowling strike rate (11.86 balls per wicket) among all full-member bowlers with 50+ wickets is powered by a left-arm wrist spin action that generates natural drift away from right-hand batters — the same drift that makes his flipper (the ball that doesn't turn) his most lethal variation, because batters read turn and are beaten through the gate by the skidder. Post-knee surgery in 2021, his reinvented slower ball (bowled 12 kph below his quickest at 72 kph) has become a signature variation that produces a boundary prevention rate of 82% when deployed on a good length outside off stump. His 16 IPL 2024 wickets in just 11 innings cemented his place as India's second choice spinner after Varun Chakravarthy.",
    weaknessesNarrative: "Kuldeep's IPL economy of 8.04 — 1.09 runs per over more expensive than his T20I figure — reflects the specific challenge of bowling in shorter IPL boundaries, where his flight and loop are more easily targeted. When he bowls at venues like Wankhede and Chinnaswamy, experienced batters use the straight slog over long-on against his half-tracker, generating a 68% boundary rate against that specific delivery. His first-over economy in the IPL (8.8, the highest of any over he typically bowls) suggests the adjustment period when reading conditions takes longer than ideal — something opposition batting coaches exploit with left-hand-batter-heavy top orders.",
    analystNote: "Kuldeep's form through 2025-26 represents the peak of his reinvented career — world No. 2 T20I spinner behind Varun, multiple wickets in the NZ T20I series (Jan 2026), and a solid T20WC 2026 contribution. His partnership with Axar Patel for DC provides a complementary spin axis: Axar's flat left-arm accuracy controls runs, while Kuldeep's dipping variations take wickets. The Arun Jaitley pitch — with its extra bounce from the sandy pitch base — assists his variations more than any other IPL venue, making his home performances measurably superior to away matches. The challenge for DC is how to deploy this spin pair optimally in away matches at flat Ahmedabad and Wankhede while maintaining the momentum from their home matches. At 31, Kuldeep is in the prime of his T20 career.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 18, wickets: 8, economy: 7.04, dotBallPct: 43.2, average: 15.75 },
      { phase: "Middle", overs: 228, wickets: 128, economy: 7.88, dotBallPct: 41.4, average: 14.06 },
      { phase: "Death", overs: 48, wickets: 61, economy: 9.18, dotBallPct: 30.8, average: 7.23 },
    ],
  },

  // ── 27. Rinku Singh ─────────────────────────────────────────────────────────
  27: {
    playerId: 27,
    formatSplits: [
      { format: "T20I", matches: 18, innings: 17, runs: 391, average: 39.10, strikeRate: 142.18, highest: 66 },
      { format: "IPL", matches: 82, innings: 72, runs: 1298, average: 34.16, strikeRate: 148.18, highest: 69 },
      { format: "Other T20", matches: 4, innings: 6, runs: 75, average: 18.75, strikeRate: 131.58, highest: 44 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 50, runs: 876, balls: 578, strikeRate: 151.56, average: 36.50, dismissals: 24, dotBallPct: 28.4 },
      { type: "vs Spin", innings: 50, runs: 422, balls: 292, strikeRate: 144.52, average: 28.13, dismissals: 15, dotBallPct: 32.8 },
    ],
    venueStats: [
      { venue: "Eden Gardens Kolkata", matches: 26, runs: 482, average: 40.17, strikeRate: 162.43 },
      { venue: "Wankhede Stadium Mumbai", matches: 10, runs: 212, average: 35.33, strikeRate: 155.88 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 8, runs: 164, average: 32.80, strikeRate: 150.46 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 6, runs: 118, average: 29.50, strikeRate: 144.68 },
      { venue: "BRSABV Ekana Stadium Lucknow", matches: 6, runs: 112, average: 28.00, strikeRate: 141.77 },
    ],
    strengthsNarrative: "Rinku Singh's death-overs strike rate of 215+ — validated across 72 IPL innings with 924 career IPL death-overs runs — is the product of a uniquely developed ability to hit sixes off the last two balls of an over on any delivery including well-directed yorkers. His 5 sixes in the final over against GT in IPL 2023 remains the only instance in IPL history, and it crystallised a specific skill: the ability to generate maximum power from minimum backswing under maximum psychological pressure. His left-hand bat creates an angle against right-arm pace in the death that generates more scoring zones than right-handers face, and his fearless approach to high-risk situations is backed by extraordinary natural timing.",
    weaknessesNarrative: "Rinku's T20I scores of 1, 11, 9, 8, 0 in recent series reflect a fundamental role clarity issue at international level: he's developed exclusively as a specialist finisher who enters at No. 5-6 with 4-5 overs remaining, but in T20Is he's often required to build an innings from the top of a collapse against quality bowling. His IPL conversion rate (no century or even a 70+ score across 104 matches) reflects the specialist nature of his role — he's optimised for 15-25 ball batting windows, not extended innings. His average of 28+ in the IPL requires contextualising: a significant proportion of those innings are unbeaten death-over cameos where lower averages are structurally impossible.",
    analystNote: "Rinku's value for KKR in IPL 2026 is precisely defined and extremely high within that definition: he's the best death-overs finisher in franchise cricket when KKR needs 15-25 runs in the last 2-3 overs. KKR's decision to retain him at ₹13cr reflects that precise valuation — in a competition where matches are routinely decided in the final over, having the only player who has ever hit 5 sixes in a final over is worth considerably more than the retention figure suggests. The T20I form inconsistency is a separate puzzle for selectors, but the IPL utility is unquestioned. His NZ T20I performances in January 2026 (44*(20), 39(30)) showed that when used in his natural finisher role internationally, the IPL form translates — the question is whether India's selectors will consistently trust him in that specific deployment.",
    bowlerPhaseData: [],
  },

  // ── 28. Abhishek Sharma ─────────────────────────────────────────────────────
  28: {
    playerId: 28,
    formatSplits: [
      { format: "T20I", matches: 46, innings: 44, runs: 1864, average: 42.36, strikeRate: 190.37, highest: 135, wickets: 4, bowlingAvg: 38.50, economy: 8.42 },
      { format: "IPL", matches: 68, innings: 65, runs: 1228, average: 21.54, strikeRate: 169.28, highest: 141, wickets: 12, bowlingAvg: 34.25, economy: 8.86 },
      { format: "Other T20", matches: 9, innings: 9, runs: 161, average: 23.00, strikeRate: 162.63, highest: 72 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Rajiv Gandhi Intl Stadium Hyderabad", matches: 20, runs: 442, average: 26.00, strikeRate: 172.46, wickets: 5, economy: 8.64 },
      { venue: "Wankhede Stadium Mumbai", matches: 10, runs: 268, average: 29.78, strikeRate: 176.32 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 8, runs: 214, average: 26.75, strikeRate: 173.17 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 6, runs: 174, average: 29.00, strikeRate: 169.90 },
      { venue: "Punjab Cricket Association Stadium Mohali", matches: 6, runs: 158, average: 26.33, strikeRate: 167.02 },
    ],
    strengthsNarrative: "Abhishek Sharma's T20I strike rate of 190.37 — the highest among all batters with 1,000+ T20I runs in history — is built on the broadest possible scoring range: he hits boundaries to all 9 zones of the ground, with no single zone accounting for more than 14% of his boundary count, meaning there's no obvious scoring-prevention field that opponents can set. His 135 vs England (India's highest T20I score) and 141* vs PBKS (fastest Indian IPL century at 40 balls) represent the two most destructive innings in their respective contexts within a 12-month period. At 24 with 96 T20I sixes in 46 innings, he averages one six every 4.8 balls faced — a rate approached only by SKY (5.1 balls per six in his peak 2022-23 period).",
    weaknessesNarrative: "Abhishek's T20WC 2026 group stage — three ducks in the tournament's most high-pressure matches — exposed a specific vulnerability that coaches have been discussing since 2025: his high backlift generates extraordinary power but leaves the off-stump gap wider than average in the first two balls of his innings, before he's read the bowler's hand. Quality new-ball bowling angled across him by Shaheen Shah Afridi (who dismissed him twice in the WC) and Anrich Nortje exploits this gap. His IPL average of 21.54 — well below his T20I average of 42.36 — reflects the higher failure rate in IPL conditions where he faces quality powerplay bowling in his opening innings more consistently than in T20Is where he's usually protected.",
    analystNote: "Abhishek's rise to ICC world No. 1 T20I batter at 24 is cricket's most exciting recent development — his generation will watch the T20WC 2026 final 52(21) as the defining innings of his career breakthrough, the moment when the high-ceiling potential fused with the composure that elite cricket demands. SRH's tactical deployment of him alongside Travis Head at the top — both left-hand batters, both prefer pace on the ball — is an unusual partnership that works because they feed off each other's aggressive intent rather than requiring one to be the stabiliser. His bowling (left-arm orthodox, IPL economy 8.82) is an additional all-round dimension that few No. 1 T20I batters possess. For IPL 2026, the development narrative is about average stabilisation: can he close the gap between his T20I average (42) and IPL average (21) by eliminating the early-innings first-two-balls vulnerability that quality IPL attacks have identified?",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 18, wickets: 4, economy: 8.34, dotBallPct: 34.2, average: 37.50 },
      { phase: "Middle", overs: 34, wickets: 9, economy: 8.82, dotBallPct: 30.8, average: 33.33 },
      { phase: "Death", overs: 12, wickets: 5, economy: 10.25, dotBallPct: 22.4, average: 24.60 },
    ],
  },

  // ── 29. Devdutt Patidar (Rajat Patidar) ────────────────────────────────────
  29: {
    playerId: 29,
    formatSplits: [
      { format: "T20I", matches: 0, innings: 0, runs: 0, average: 0, strikeRate: 0, highest: 0 },
      { format: "IPL", matches: 42, innings: 41, runs: 1111, average: 30.86, strikeRate: 154.31, highest: 112 },
      { format: "Other T20", matches: 22, innings: 26, runs: 658, average: 40.12, strikeRate: 174.80, highest: 151 },
    ],
    bowlingAttackSplits: [
      { type: "vs Pace", innings: 38, runs: 682, balls: 428, strikeRate: 159.35, average: 31.00, dismissals: 22, dotBallPct: 28.6 },
      { type: "vs Spin", innings: 38, runs: 429, balls: 252, strikeRate: 170.24, average: 31.00, dismissals: 14, dotBallPct: 22.4 },
    ],
    venueStats: [
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 18, runs: 528, average: 37.71, strikeRate: 162.45 },
      { venue: "Wankhede Stadium Mumbai", matches: 6, runs: 188, average: 37.60, strikeRate: 158.47 },
      { venue: "Eden Gardens Kolkata", matches: 4, runs: 138, average: 46.00, strikeRate: 155.06 },
      { venue: "Narendra Modi Stadium Ahmedabad", matches: 4, runs: 114, average: 38.00, strikeRate: 152.00 },
      { venue: "Punjab Cricket Association Stadium Mohali", matches: 4, runs: 108, average: 27.00, strikeRate: 148.97 },
    ],
    strengthsNarrative: "Patidar's ability to hit spin is the most technically elite in the RCB lineup — his SR of 225+ against spinners in IPL 2024 was the highest in the tournament, powered by exceptional footwork that allows him to reach the pitch of the delivery or go deep into his crease against the same bowler in consecutive deliveries, depending on the length. His SMAT 2024 campaign (428 runs at 61.14 average, SR 186) and his IPL 2022 playoff century (112 off 54 balls for RCB vs LSG) established his big-match credentials before his captaincy role was confirmed. Leading RCB to their maiden IPL title in 2025 — the most significant achievement in RCB's history — adds a leadership dimension that enhances his franchise value beyond the numbers.",
    weaknessesNarrative: "Patidar's IPL 2025 decline — SR from 177 to 142, average from 30.38 to 23.83 — was significantly influenced by the finger injury he played through and the knee surgery in October-November 2025. His powerplay strike rate (138.5) is the lowest of any RCB top-order regular, meaning he relies on middle and death-overs acceleration to compensate for a conservative first-six-overs approach. His lack of T20I caps (0 matches despite domestic dominance) reflects the selector's view that his powerplay conservatism doesn't fit India's aggressive opening template — a concern that IPL captaincy has not fully addressed.",
    analystNote: "Patidar enters IPL 2026 as a freshly crowned IPL-winning captain — a status that brings enormous pressure but also confirms tactical acuity and leadership quality that pure statistics don't capture. RCB's first IPL title was built partly around his ability to manage Kohli's innings requirements alongside his own batting needs, and the team dynamics he created will be a reference point for his 2026 captaincy approach. The injury concerns (finger and knee in 2025) are legitimate pre-season monitoring items, but his SMAT 2025 campaign suggested return to near-peak form. The 0 T20I caps remains the elephant in the room — his domestic record warrants international consideration and the logical conclusion is that IPL 2026 is his audition for a potential belated T20I debut. At 31, this window is narrow.",
    bowlerPhaseData: [],
  },

  // ── 30. Axar Patel ──────────────────────────────────────────────────────────
  30: {
    playerId: 30,
    formatSplits: [
      { format: "T20I", matches: 68, innings: 48, runs: 602, average: 22.30, strikeRate: 135.44, highest: 65, wickets: 78, bowlingAvg: 21.44, economy: 7.40 },
      { format: "IPL", matches: 162, innings: 148, runs: 1826, average: 20.29, strikeRate: 131.44, highest: 66, wickets: 132, bowlingAvg: 27.18, economy: 7.48 },
      { format: "Other T20", matches: 26, innings: 44, runs: 190, average: 14.62, strikeRate: 128.38, highest: 42, wickets: 15, bowlingAvg: 26.27, economy: 7.52 },
    ],
    bowlingAttackSplits: [],
    venueStats: [
      { venue: "Arun Jaitley Stadium Delhi", matches: 48, runs: 698, average: 22.52, strikeRate: 134.62, wickets: 42, economy: 7.22 },
      { venue: "Wankhede Stadium Mumbai", matches: 18, runs: 222, average: 19.30, strikeRate: 128.90, wickets: 16, economy: 7.56 },
      { venue: "M. Chinnaswamy Stadium Bengaluru", matches: 16, runs: 202, average: 20.20, strikeRate: 131.17, wickets: 14, economy: 7.42 },
      { venue: "Eden Gardens Kolkata", matches: 14, runs: 182, average: 20.22, strikeRate: 129.79, wickets: 12, economy: 7.68 },
      { venue: "MA Chidambaram Stadium Chennai", matches: 12, runs: 154, average: 18.57, strikeRate: 126.23, wickets: 11, economy: 7.14 },
    ],
    strengthsNarrative: "Axar Patel's flat left-arm accuracy — maintained at a length that generates LBW probability 28% above the spin average for right-hand batters — is the IPL's most reliable middle-overs economy weapon, producing a sub-7.5 economy in the IPL's phases 7-16 across 256 T20 matches. His 3/27 in the T20WC 2026 final against New Zealand was a masterclass in pressure bowling: three variations — fast flat delivery, slower-arm ball, and the delivery that angles into the stumps from round the wicket — each producing a wicket from the left-hand side of NZ's batting. His improved batting SR of 157 (IPL 2025 career best) adds genuine lower-order hitting capability, and his DC captaincy role since IPL 2024 has demonstrably improved his tactical reading of opposition batters.",
    weaknessesNarrative: "Axar's primary bowling weakness is the left-hand batter — his natural angle and drift goes into the body of left-hand batters, reducing his variation options and generating a 38% higher scoring rate for left-hand batters compared to right-handers in the IPL. Teams with significant left-hand batting depth — SRH (Abhishek, Head), DC's own team in training scenarios — target him with the on-side sweep and chip shot, which generates boundary rates 22% above the tour average. His batting average of 20.29 in the IPL — while improving in SR — still reflects the limited role he occupies in DC's batting order, where he typically enters too late to build a substantial innings.",
    analystNote: "Axar Patel's dual evolution across 2024-2026 — from senior all-rounder to DC captain, and from reliable bowler to genuinely threatening lower-order batter — makes him one of the IPL's most improved assets. His T20WC 2026 contributions in both 2024 and 2026 finals (3/27 in the 2026 final is career-defining) confirm that the pressure of ICC events amplifies rather than diminishes his quality. For IPL 2026, DC's challenge is integrating Salt and KL Rahul's batting requirements with Axar's captaincy calls — specifically, when to promote him to bat higher against spin-heavy attacks where his left-arm angle becomes both a batting and bowling advantage. At 32, his physical condition remains excellent for an all-rounder with his workload, and a third successive top-five IPL finish for DC under his captaincy would cement his legacy as DC's greatest ever all-round impact player.",
    bowlerPhaseData: [
      { phase: "Powerplay", overs: 28, wickets: 10, economy: 6.96, dotBallPct: 46.8, average: 19.60 },
      { phase: "Middle", overs: 342, wickets: 148, economy: 7.28, dotBallPct: 43.8, average: 16.84 },
      { phase: "Death", overs: 118, wickets: 67, economy: 8.12, dotBallPct: 34.4, average: 14.30 },
    ],
  },
};
