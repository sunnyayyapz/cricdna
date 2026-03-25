export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface DataTable {
  headers: string[];
  rows: string[][];
}

export interface Article {
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

export interface AnalyticsCard {
  type: "player" | "matchup" | "stat";
  title: string;
  value: string;
  description: string;
  playerIds?: number[];
  teamColors?: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "mullanpur-pitch-report-pbks-vs-gt-2026",
    title: "Mullanpur Pitch Report (PBKS vs GT): The 170 Par That Can Turn Into 190 When Dew Shows Up",
    subtitle: "New Chandigarh’s new bowl is truer than its reputation — but night games shift the margin toward the chase.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["pitch-report", "pbks", "gt", "ipl-2026", "mullanpur", "venue-analysis"],
    featured: true,
    matchId: 4,
    relatedPlayerIds: [5, 17, 7, 25],
    chartData: [
      { label: `Expected 1st inns (median)`, value: 172, color: `#f59e0b` },
      { label: `Expected 1st inns (P75 w/ dew)`, value: 190, color: `#8b5cf6` },
      { label: `Chase advantage (est.)`, value: 54, color: `#10b981` },
    ],
    dataTable: {
      headers: ["Metric", "Mullanpur signal", "What it implies"],
      rows: [["Typical 1st-innings band", "165–180", "Balanced surface; set batters matter"], ["Dew effect", "Can push comps to 190+", "Fielding second execution noise"], ["Boundary size", "~65–70m", "Clearing is doable; mishits still punished"], ["Best bowling phase", "Overs 1–3", "New-ball wickets move par down ~15"]],
    },
    content: `Maharaja Yadavindra Singh International Cricket Stadium (New Chandigarh/Mullanpur) has been the rare new IPL venue that behaves like an adult: decent bounce, predictable carry, and just enough grip for spinners to matter when the ball gets older. The problem for bowlers is that the venue’s environmental variable (dew) can be worth more than the surface variable (pace vs spin) in a night game.

Par score lives in the 165–180 band, but the distribution is fat-tailed. Recent T20 previews for this ground peg first-innings outcomes around 165–180, with dew often pushing competitive totals beyond 190 when the ball becomes hard to grip. That’s not a contradiction; it’s a volatility story. When the ball is dry, cutters and cross-seam lengths can earn 10–12 dot balls per innings. When dew arrives, those same deliveries become hittable because execution error rises and the outfield speeds up.

Boundary geometry is not tiny, but it’s not Ahmedabad either. With boundaries generally in the 65–70m range, batters can clear the ropes without needing Chinnaswamy-level timing. The tradeoff is that mishits are more likely to be caught, which makes wicket preservation a bigger part of the expected-runs model. Teams that keep 7 wickets in hand at the 14-over mark can add 55–65 in the last six; teams down to 5 wickets often cap at 40–45.

Pace vs spin: early seam, late grip. Mullanpur has shown early assistance for fast bowlers, especially with a new ball that stays upright. The spin value typically rises after over 7 as the pitch starts to scuff, but it’s not a classic turning track. Your most valuable overs are still 1–3 (swing and hard length) and 17–20 (execution).

PBKS vs GT: tactical consequence. PBKS’ power hitters can turn a 48/1 powerplay into a 70/1 powerplay quickly, but their worst-case is a 35/3 start that forces rebuild mode on a ground where rebuilding costs you 10–15 runs at the death. GT’s more controlled batting template tends to travel well on true surfaces; their key is whether they can buy 2 wickets with the hard ball.

Bottom line: plan for 172 as the median first-innings score and 190 as the 75th percentile if dew is visible by innings break — because the last 30 balls can behave like a different sport.`,
  },

  {
    id: 2,
    slug: "toss-analysis-pbks-vs-gt-mullanpur-2026",
    title: "Toss Analysis (PBKS vs GT): When Dew Is the Tie-Breaker, Your Default Should Be to Chase",
    subtitle: "The coin flip matters most at new venues because captains don’t yet feel the true par — models do.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "pbks", "gt", "ipl-2026", "dew", "mullanpur"],
    featured: false,
    matchId: 4,
    relatedPlayerIds: [5, 17, 30, 12],
    chartData: [
      { label: `Field-first recommended (dew nights)`, value: 58, color: `#3b82f6` },
      { label: `Bat-first viable (dry nights)`, value: 42, color: `#f59e0b` },
      { label: `Est. dew WP swing`, value: 6, color: `#10b981` },
    ],
    content: `At Mullanpur, the most important pre-match question isn’t pace or spin. It’s how wet the ball will be at 9:45 pm. On grounds where the base surface is relatively neutral, dew becomes the dominant variable in the win-probability equation.

Why chasing is the sensible default: dew increases error for the defending side in two ways. First, slower-ball grip declines, so the expected variation tax you pay at the death rises by roughly 6–10 runs across the last five overs. Second, the outfield quickens, so the same contact quality converts into more boundaries. In a game where the median first-innings total is about 172, donating an extra 10 at the death is a material swing.

A simple decision rule: if the humidity is high and the outfield looks slick during warm-ups, field first. If it’s dry and breezy, batting first becomes viable because the ball should hold its shape and cutters will bite.

PBKS vs GT roster lens: PBKS generally prefer to chase because their hitters can solve a required rate late; GT tend to be comfortable defending if they have a reliable death bowler and one high-control spinner to own overs 7–14.

Recommendation: if conditions are typical for a North Indian night game — rising humidity after sunset — take the chase. The uncertainty isn’t about par; it’s about execution, and dew makes execution noisier for bowlers.`,
  },

  {
    id: 3,
    slug: "pbks-vs-gt-match-preview-2026-analytics",
    title: "PBKS vs GT Preview: Five Matchups That Decide Whether This Is 170-Par or 195-Par",
    subtitle: "On neutral pitches, outcomes hinge on who wins the first 18 balls and the last 18 balls.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "pbks", "gt", "ipl-2026", "matchups", "probable-xi"],
    featured: false,
    matchId: 4,
    relatedPlayerIds: [5, 25, 17, 12],
    dataTable: {
      headers: ["Lever", "PBKS", "GT", "Win condition"],
      rows: [["Powerplay", "Boundary surge", "Early wickets", "55/1 vs 40/3 swing ~15 runs"], ["Middle overs", "Boundary per over >1", "Dot-ball squeeze", "Turn 8.0 into 9.0 without wickets"], ["Death overs", "Exploit dew skid", "Execute yorkers", "+10 at death swings game"], ["Fielding", "Save 8+", "Convert catches", "Mishit-catch ground"], ["Toss", "Chase preference", "Defend if dry", "Decision changes with humidity"]],
    },
    content: `A balanced surface like Mullanpur is where T20 becomes most honest: no hiding behind a turning track or a 65m boundary. The winner is usually the team that does the two hard things: keep wickets in the powerplay and execute at the death.

Probable XIs (projection): PBKS should stack right-left flexibility at the top and aim for 6 bowling options to cover dew risk. GT’s optimal XI is usually bat deep, bowl with control: one powerplay wicket-taker, one middle-overs spinner, and two death specialists.

Matchup 1: powerplay wickets vs powerplay speed. A 55/1 powerplay tends to imply a 175 finish; a 40/3 powerplay implies about 160. That 15-run swing is the difference between defendable and chaseable.

Matchup 2: GT’s control overs vs PBKS’ boundary hunting. Middle overs are where good teams become great teams: turning 7.5 RPO into 8.5 RPO without losing a wicket.

Matchup 3: death overs under dew. If dew is present, yorker accuracy drops and full-toss probability rises — which can add 8–12 runs to the innings with identical intent.

Matchup 4: left-right disruption. Teams that create forced bowling changes in the first 8 overs effectively buy themselves 6–8 runs via weaker matchups.

Matchup 5: fielding value. On a ground where mishits can be caught, saving 8 runs in the ring is worth more than it is at tiny venues.

Model read: if this is a dew night, chasing is a structural advantage and the side batting first should aim for 185+. If it’s dry, 172–178 is often enough provided you take two wickets inside the first 4 overs.`,
  },

  {
    id: 4,
    slug: "ekana-pitch-report-lsg-vs-dc-2026",
    title: "Ekana Pitch Report (LSG vs DC): From Spin Trap to 175-Par—Why Lucknow Is No Longer a 150 Game",
    subtitle: "The surface still rewards spin, but the scoring baseline has crept upward with better batting plans and truer strips.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["pitch-report", "ekana", "lsg", "dc", "ipl-2026", "venue-analysis"],
    featured: false,
    matchId: 5,
    relatedPlayerIds: [4, 22, 30, 26],
    chartData: [
      { label: `Avg 1st inns (T20)`, value: 166, color: `#f59e0b` },
      { label: `Competitive target`, value: 175, color: `#8b5cf6` },
      { label: `Middle-overs spin tax (runs)`, value: 10, color: `#10b981` },
    ],
    dataTable: {
      headers: ["Segment", "Typical run-rate band", "What decides it"],
      rows: [["Powerplay", "7.5–8.5", "Wickets vs intent"], ["Overs 7–14", "7.0–8.0", "Spin control + boundary size"], ["Death", "10.0–12.0", "Set batters + matchup hunting"], ["Par", "165–175", "Strip selection (red vs black soil)"]],
    },
    content: `Ekana’s early IPL reputation was simple: slow, low, and a graveyard for chasing. Recent venue numbers complicate that story. Analytics takeaway: Lucknow is still spin-relevant, but it’s not automatically low-scoring anymore.

The baseline is mid-160s, not mid-140s. Venue data sources peg the average first-innings score at Ekana around the mid-160s in T20s, with year-to-year drift depending on which strip is rolled out.

Spin remains the control asset. Even on higher-scoring strips, Ekana rewards bowlers who can bowl into the pitch and change pace without losing length. Hold the middle overs to under 8.0 RPO and you buy yourself roughly 10–12 runs of cushion at the death.

Pace is about angles, not speed. The best plan is hard length with cutters, especially into larger square boundaries.

LSG vs DC: roster fit. LSG’s batting is usually optimized for a chase where set batters manage the middle and explode late. DC’s best outcomes come when their spinners win overs 7–14 and force low-percentage shots.

Bottom line: treat Ekana like a 170-par ground with a spin tax in the middle overs. Win the spin window, and you can make 175 feel like 195.`,
  },

  {
    id: 5,
    slug: "toss-analysis-lsg-vs-dc-ekana-2026",
    title: "Toss Analysis (LSG vs DC): Bowl First If You Trust Your Spinners, Bat First If You Trust Your Scoreboard",
    subtitle: "Lucknow’s toss is a game-theory problem: defendable totals exist, but chasing improves when dew flattens spin.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "ekana", "lsg", "dc", "ipl-2026", "dew", "spin"],
    featured: false,
    matchId: 5,
    relatedPlayerIds: [4, 30, 22, 26],
    chartData: [
      { label: `Field-first recommended (most nights)`, value: 54, color: `#3b82f6` },
      { label: `Bat-first (dry strip)`, value: 46, color: `#f59e0b` },
      { label: `Spin value drop w/ dew (runs)`, value: 8, color: `#ef4444` },
    ],
    content: `Ekana is one of the few IPL venues where both toss decisions can be correct — but not for the same reason.

Why bowling first can work: if your spinners are elite and you have a plan for overs 7–14, you can keep the opponent in the 160–170 band and chase it with the knowledge that the wicket often gets truer later. The key is that later can also mean wetter: dew reduces grip, which reduces spin’s control.

Why batting first can work: if you can post 175+ at Ekana, you create scoreboard pressure because the middle overs are still not a free-hitting zone.

Decision rule: if the pitch looks dry and abrasive, bat first and aim 175. If the pitch looks hard and the outfield looks like it will dew, field first because the second innings will be faster.

Recommendation: default to fielding first unless the pitch looks visibly dry and used.`,
  },

  {
    id: 6,
    slug: "lsg-vs-dc-match-preview-2026-analytics",
    title: "LSG vs DC Preview: The Spin Window, the KL/Pant Phase, and the 12-Ball Finish",
    subtitle: "At Ekana, the most predictive thing is how many wickets you keep for overs 16–20.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "lsg", "dc", "ipl-2026", "matchups", "ekana"],
    featured: false,
    matchId: 5,
    relatedPlayerIds: [22, 4, 30, 26],
    dataTable: {
      headers: ["Phase", "Key KPI", "Why it matters"],
      rows: [["PP (1–6)", "Lose ≤1 wicket", "Protects death ceiling"], ["Spin window (7–14)", "50–60 runs", "Controls par band"], ["Overs 15–17", "Keep RRR <10.5", "Avoid panic"], ["Death (18–20)", "45+ if 7 wkts", "Set batters monetize pace"]],
    },
    content: `Lucknow games often look calm for 12 overs and then suddenly end in a last-eight-overs avalanche. That’s not chaos; it’s structure. The pitch taxes boundary hitting early, then rewards set batters late.

Probable XIs (projection): expect both teams to prioritize spin depth. Batting depth matters because Ekana chases are rarely clean; you need hitters available when pace returns late.

Matchup 1: the spin window (7–14). If DC hold overs 7–14 to about 50 runs while taking a wicket, they reduce the opponent’s death-overs ceiling by 10–15 runs.

Matchup 2: KL Rahul’s control vs wicket risk. Rahul’s game is built for managing a spin-heavy middle, but accelerating too early increases dismissal risk.

Matchup 3: Pant as variance. Pant can compress the chase by creating a 20-run over, but he can also donate a wicket to the deep square boundary.

Matchup 4: death overs matchups. The most valuable resource is set batters at over 16. Arrive at 16 with 7 wickets and you can target 50+; arrive with 5 and you often cap at 35–40.

Matchup 5: fielding and singles. Because boundaries are harder early, ones and twos matter more.

Model read: expect a 165–175 game. The side that wins the spin window without losing more than one wicket should be favored even if they’re behind the required rate at 10 overs.`,
  },

  {
    id: 7,
    slug: "eden-gardens-pitch-report-kkr-vs-srh-2026",
    title: "Eden Gardens Pitch Report (KKR vs SRH): A 165 Average That Plays Like 180 When Chasing",
    subtitle: "Kolkata’s short boundaries and humid nights make the second innings disproportionately valuable.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["pitch-report", "eden-gardens", "kkr", "srh", "ipl-2026", "venue-analysis"],
    featured: false,
    matchId: 6,
    relatedPlayerIds: [23, 12, 6, 9],
    chartData: [
      { label: `Avg 1st inns`, value: 165, color: `#f59e0b` },
      { label: `Bat-2nd wins (of 98)`, value: 56, color: `#3b82f6` },
      { label: `Bat-1st wins (of 98)`, value: 41, color: `#ef4444` },
    ],
    dataTable: {
      headers: ["Eden Gardens metric", "Value", "Implication"],
      rows: [["Avg 1st inns", "~164–169", "Not automatically 200+"], ["Matches (IPL)", "~98", "Large sample"], ["Chase wins", "56", "Structural chase edge"], ["Bat-first wins", "41", "Need 180+ to defend"], ["Runs/over (summary)", "8.52", "Fast outfield + short boundaries"]],
    },
    content: `Eden Gardens is often mislabeled as just a batting paradise. The data says it’s a batting paradise with a spin subplot — and a chasing bias that shows up in the win split.

Baseline numbers: mid-160s first innings, chase-friendly outcomes. Published venue summaries put the average first-innings score at Eden Gardens around 164–169, with a chase-favored record: teams batting second have won 56 times versus 41 batting first (98 matches) in one widely circulated IPL summary.

Why the second innings plays faster: humidity reduces ball grip and increases skidding pace-on value. On a ground with quick outfield and reachable boundaries, that translates into higher boundary conversion late.

Spin still matters — but as control, not mystery. Eden is not Chennai; you win by controlling length and pace and forcing batters to hit to longer boundaries.

KKR vs SRH: the team that wins overs 7–12 can flip the game because it dictates how many wickets are available for the last 8 overs.

Bottom line: treat Eden as 168 median par with a chase inflation factor. If you bat first, aim 180; if you chase, be happy with 80–85 after 10 with wickets intact.`,
  },

  {
    id: 8,
    slug: "toss-analysis-kkr-vs-srh-eden-gardens-2026",
    title: "Toss Analysis (KKR vs SRH): The Data Says Chase, the Spinners Say ‘Maybe’",
    subtitle: "Eden’s coin flip is about whether you trust your spinners to beat dew.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "kkr", "srh", "eden-gardens", "ipl-2026", "dew"],
    featured: false,
    matchId: 6,
    relatedPlayerIds: [23, 12, 6, 9],
    chartData: [
      { label: `Default: field first`, value: 55, color: `#3b82f6` },
      { label: `Bat first (dry strip)`, value: 45, color: `#f59e0b` },
      { label: `Target if bat first`, value: 180, color: `#8b5cf6` },
    ],
    content: `Eden Gardens’ toss is a tug-of-war between two truths. Truth one: the overall record tilts toward chasing. Truth two: KKR’s identity is built on spin control, which is most valuable with a dry ball.

Chasing edge: with batting-second wins outnumbering batting-first wins (56 vs 41 in a commonly cited IPL summary), the default decision is to field first — especially in humid evening conditions.

When batting first is rational: if the surface looks used and dry, and you believe your spinners can defend with the ball gripping, batting first and targeting 180 is sound.

Recommendation: default to fielding first unless pitch inspection suggests a dry, abrasive strip.`,
  },

  {
    id: 9,
    slug: "kkr-vs-srh-match-preview-2026-analytics",
    title: "KKR vs SRH Preview: The Narine/Varun Middle Overs vs SRH’s Finishing Engine",
    subtitle: "If SRH keep 7 wickets for the last 8 overs, Eden becomes a runway.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "kkr", "srh", "ipl-2026", "matchups", "eden-gardens"],
    featured: false,
    matchId: 6,
    relatedPlayerIds: [23, 6, 9, 12],
    dataTable: {
      headers: ["Edge", "KKR lever", "SRH lever", "Why it matters"],
      rows: [["Middle overs", "Spin squeeze", "Rotate + boundary", "Controls death ceiling"], ["Powerplay", "Wicket preservation", "New-ball strikes", "2 PP wkts swing ~12 runs"], ["Finishing", "Depth", "Klaasen engine", "Raises late boundary rate"], ["Death bowling", "Elite execution", "Dew-proof plans", "Worth ~8 runs"], ["Fielding", "Boundary riders", "Catch conversion", "Mishits are catchable"]],
    },
    content: `KKR vs SRH is the perfect Eden Gardens match: one side built to control overs 7–14 with spin, the other built to turn overs 13–20 into a hitting contest.

Matchup 1: the KKR spin squeeze vs SRH’s intent. If KKR hold the middle overs to under 8.0 RPO while taking one wicket, they reduce SRH’s death-overs ceiling by 10–12 runs.

Matchup 2: Cummins’ new ball vs KKR’s anchors. A two-wicket powerplay drops expected par from about 180 to about 168.

Matchup 3: Klaasen as the multiplier. Klaasen raises the expected value of the whole innings by forcing wider lines and more error.

Matchup 4: death bowling under humidity. An elite death bowler is worth about 8 runs in expectation across four overs.

Matchup 5: fielding quality. Eden rewards athletic boundary riders because mishits can land short of the rope.

Model read: slight chase bias. SRH are in a good place if they’re within 95 after 10 with two or fewer wickets down.`,
  },

  {
    id: 10,
    slug: "spencer-johnson-to-csk-what-it-changes-ipl-2026",
    title: "Spencer Johnson to CSK: A Like-for-Like Replacement That Still Changes the Risk Profile",
    subtitle: "Ellis out, Johnson in — the raw skill set is similar, but the availability timeline makes it a roster math problem.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-25T13:00:00Z",
    readTime: "5 min read",
    tags: ["analysis", "csk", "injury-update", "ipl-2026", "spencer-johnson", "squad"],
    featured: false,
    relatedPlayerIds: [19, 14, 18, 17],
    chartData: [
      { label: `Expected join (day of month)`, value: 22, color: `#3b82f6` },
      { label: `Hamstring recurrence (Ellis)`, value: 1, color: `#ef4444` },
      { label: `Death-over margin (runs)`, value: 10, color: `#8b5cf6` },
    ],
    content: `CSK’s overseas fast-bowling depth has been a season-long spreadsheet exercise, and the Nathan Ellis injury makes it more so. ESPNcricinfo reported that CSK have signed Australian left-armer Spencer Johnson as Ellis’ replacement after Ellis suffered a recurrence of a prior hamstring injury, and that Johnson is expected to join only around April 21–23 as he recovers from a back issue.

Why it’s like-for-like in role, not in certainty: Ellis is a death-overs specialist profile. Johnson offers a different but adjacent toolkit: left-arm angle, skiddy pace, and the ability to change the batter’s sightline.

But availability is a real cost. A replacement who joins in late April has a different expected contribution than one available from Match 1. Missing even four matches of an elite overseas seamer is roughly 16 overs of high-leverage bowling you need to cover internally. If your next-best death option is average, you can leak 8–12 extra runs per match at the death — the kind of margin that flips close games.

How it changes CSK’s tactical plan: with uncertainty on Johnson’s readiness, CSK may need to front-load their best pace overs early (1–3) and patch the death until the overseas unit stabilizes.

Bottom line: Johnson is a reasonable skill replacement for Ellis, but the timeline risk means CSK’s early-season win probability depends disproportionately on whether their domestic pace unit can keep the death overs within a 45-run band.`,
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Dew swing alert",
    value: "+6 win-probability points",
    description: "At Mullanpur and Eden, late-evening humidity can shift the chase baseline by ~8–12 runs, translating to a ~6pp edge for the side batting second when totals are in the 170s.",
    teamColors: ["#2563eb", "#10b981"]
  },
  {
    type: "matchup",
    title: "Ekana 'spin window'",
    value: "Overs 7–14 decide par",
    description: "Lucknow still taxes boundary hitting in the middle overs; teams that keep 7 wickets for over 16 consistently add 10–15 more at the death.",
    teamColors: ["#7c3aed", "#f59e0b"]
  },
  {
    type: "player",
    title: "Roster risk: CSK pace depth",
    value: "Late-April reinforcement",
    description: "With Nathan Ellis out and Spencer Johnson projected to join in late April, CSK's early-season death-overs control leans more heavily on domestic pace execution.",
    playerIds: [19, 17, 18],
    teamColors: ["#fbbf24", "#0ea5e9"]
  }
];
