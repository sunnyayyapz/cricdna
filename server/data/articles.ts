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
    slug: "chinnaswamy-pitch-report-rcb-vs-srh-ipl-2026-opener",
    title: "Chinnaswamy Pitch Report (RCB vs SRH): When 173 Is Average, 200 Becomes the New ‘Defendable’",
    subtitle:
      "Bengaluru’s small boundaries compress variance — it’s not about whether runs come, it’s about when wickets fall.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: [
      "pitch-report",
      "rcb",
      "srh",
      "ipl-2026",
      "chinnaswamy",
      "venue-analysis",
    ],
    featured: true,
    matchId: 1,
    relatedPlayerIds: [1, 3, 6, 8],
    chartData: [
      { label: "IPL avg 1st inns (Chinnaswamy)", value: 173, color: "#f59e0b" },
      { label: "Realistic par (night game)", value: 190, color: "#8b5cf6" },
      { label: "200+ probability (model est.)", value: 42, color: "#10b981" },
    ],
    dataTable: {
      headers: ["Signal", "Number", "Why it matters"],
      rows: [
        [
          "Average first-innings score (IPL)",
          "173",
          "Baseline already high; anything under 180 is structurally vulnerable",
        ],
        [
          "Highest team total (IPL)",
          "287/3",
          "The ceiling is extreme; death overs can behave like a powerplay",
        ],
        [
          "Boundary penalty",
          "Low",
          "Mishits clear the rope more often; wicket-taking is the only brake",
        ],
        [
          "Execution phase",
          "Overs 16–20",
          "A single 22-run over can flip 10+ win-probability points",
        ],
      ],
    },
    content: `M. Chinnaswamy Stadium is cricket’s version of a small court: the geometry shrinks the defensive space, so intent converts into output faster than it does almost anywhere else. The headline number matters because it tells you the baseline before tactics start: the IPL average first-innings score at Chinnaswamy is 173, and the venue’s highest team total is a surreal 287/3. Those two numbers define the distribution. The mean is high, and the tail is enormous.

Here’s the key analytic adjustment: at Chinnaswamy, “par” is not a single number — it’s a band that depends on how many wickets you preserve for the last 30 balls. If you reach over 15 with 7 wickets in hand, 190 is not aggressive; it’s merely keeping pace with what this venue can produce in the final phase. If you reach over 15 with 5 wickets in hand, your ceiling falls by roughly 10–15 runs because the set-batter multiplier disappears.

Why wickets are the currency: because boundaries are accessible, dot balls aren’t the main source of pressure; dismissals are. The best bowling spells here don’t always look economical — they look disruptive. A powerplay where you take 2 wickets can move expected first-innings output from ~195 down to ~178 even if the run rate stays high, because the death overs become less explosive.

RCB vs SRH tactical shape: SRH’s attack is likely to start the season without Pat Cummins, who is expected to miss the early part of IPL 2026 while recovering from a lumbar stress issue, with Ishan Kishan serving as interim captain. On the other side, RCB may be without Josh Hazlewood early as he awaits clearance from Cricket Australia, with the franchise indicating he is likely to miss the start and will travel only when fully cleared. Net effect: both sides may lean more heavily on domestic pace and matchup bowling in the first two games, which usually increases scoring variance.

Bottom line: treat 190 as the median “good” first-innings score and 205 as the score that forces a chase to play near-perfectly. In Bengaluru, the pitch is rarely the story — the wicket column is.`,
  },

  {
    id: 2,
    slug: "toss-analysis-rcb-vs-srh-chinnaswamy-ipl-2026",
    title: "Toss Analysis (RCB vs SRH): The Chase Is Tempting, But Bengaluru’s True Edge Is Wickets in Hand",
    subtitle:
      "Chinnaswamy doesn’t always reward ‘bat second’ — it rewards teams that keep 7 wickets for the last 5 overs.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "rcb", "srh", "ipl-2026", "dew", "chinnaswamy"],
    featured: false,
    matchId: 1,
    relatedPlayerIds: [1, 3, 6, 8],
    chartData: [
      { label: "Chase preference (model default)", value: 54, color: "#3b82f6" },
      { label: "Bat-first viable band", value: 46, color: "#f59e0b" },
      { label: "Target if bat first", value: 200, color: "#8b5cf6" },
    ],
    content: `The toss at Chinnaswamy looks straightforward: short boundaries, fast outfield, and night games that can tilt toward the chase when the ball skids on. But the more predictive framework is not “bat first vs bat second.” It’s “wickets in hand at the death.”

Here’s the model logic: in Bengaluru, the scoring rate is high in both innings because boundary conversion is high. That reduces the structural advantage of knowing the target. Instead, the advantage shifts to the team that can keep their batting depth intact. Reaching over 15 with 7 wickets in hand is worth roughly 10–15 runs compared to reaching over 15 with 5 wickets in hand, because the last 30 balls become a high-frequency boundary phase.

So what should captains do? If conditions suggest any skidding (even modest dew), chasing becomes the default because a wet ball makes defensive execution noisier, which is the one thing that can keep totals under control. But if the pitch looks hard and dry, batting first can be equally rational — provided you aim above the venue’s average. Chinnaswamy’s IPL average first-innings score is 173; in a season opener, the safe bat-first play is to overshoot that by 20+.

Squad context matters. SRH are expected to start without Pat Cummins, with Ishan Kishan leading early, and RCB are managing Josh Hazlewood’s return timeline. That likely means both sides are slightly less certain about their ideal death-over plans in Match 1 — and uncertainty is a reason to prefer chasing, where you can price the required risk.

Recommendation: default to fielding first unless the surface looks unusually dry and abrasive. If you bat first, don’t defend 185 like it’s a fortress. At Chinnaswamy, 200 is the minimum number that asks real questions.`,
  },

  {
    id: 3,
    slug: "rcb-vs-srh-match-preview-ipl-2026-opener-analytics",
    title: "RCB vs SRH Preview: Five Levers That Decide Whether This Opener Is 195-Par or 225-Par",
    subtitle:
      "With both attacks managing injuries, the opener may be decided by who finds two powerplay wickets — and who doesn’t blink at the death.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "rcb", "srh", "ipl-2026", "matchups", "probable-xi"],
    featured: false,
    matchId: 1,
    relatedPlayerIds: [1, 3, 6, 8, 11],
    dataTable: {
      headers: ["Lever", "RCB angle", "SRH angle", "Quant impact"],
      rows: [
        [
          "Powerplay wickets",
          "Attack stumps early",
          "Protect top 3",
          "2 wickets in PP ≈ -12 to -18 runs",
        ],
        [
          "Middle-overs pace-off",
          "Use cutters into pitch",
          "Keep boundary rate <1.4/over",
          "Winning 7–14 ≈ +8 runs",
        ],
        [
          "Death overs",
          "Hit 18–20 as a 6-ball game",
          "Avoid wides/no-balls",
          "One 22-run over swings ~10 WP pts",
        ],
        [
          "Hazlewood/Cummins absences",
          "More domestic overs",
          "Interim captain + reshuffle",
          "Higher variance; execution errors rise",
        ],
        [
          "Fielding value",
          "Save 8 in ring",
          "Boundary riding",
          "At small grounds, 1 drop ≈ 10–15 runs",
        ],
      ],
    },
    content: `The IPL opener at Chinnaswamy is almost always described as “high-scoring.” That’s true, but incomplete. The real question is whether it’s high-scoring with control (195–205) or high-scoring with collapse risk (225-par with a 170 all-out tail). Analytics framing: this match is about wickets, not boundaries.

1) Powerplay wicket trade. Chinnaswamy’s baseline scoring means both teams will score 45–55 in the powerplay if they keep wickets. The difference is whether they lose 0–1 wickets or 2–3. A two-wicket powerplay can pull an innings down by 12–18 runs because the death-overs ceiling collapses.

2) The Cummins variable (SRH). Pat Cummins is expected to miss the early part of the season while recovering from a lumbar stress issue; SRH’s interim captaincy is with Ishan Kishan. That matters tactically because captaincy is partly “resource allocation” — which bowler owns which phase — and the first week of the IPL is where those allocations are most fragile.

3) The Hazlewood variable (RCB). Josh Hazlewood is still in a return-to-play program and is likely to miss the start, with RCB stating he will travel only once Cricket Australia clears him. That means RCB’s early overs might be built around domestic pace options rather than their ideal overseas spearhead.

4) Death overs as a precision contest. At small grounds, one wide is not one run; it’s often two runs because it forces a hittable ball next. The best death overs are not “good lengths” — they are “no gifts.”

5) The batting depth bet. In games where 200 is a normal score, depth is insurance against the one inevitable over where you lose 2 wickets. Teams with batting till 8 can rebuild without sacrificing the last phase.

Probable XIs (projection): expect both teams to field extra batting depth and at least 6 bowling options to reduce overs of exposure. Model read: if SRH’s top three survive the first 18 balls, the match becomes a chase-favored shootout. If RCB find early wickets, 195 becomes a winning total rather than a starting point.`,
  },

  {
    id: 4,
    slug: "wankhede-pitch-report-mi-vs-kkr-ipl-2026-match-2",
    title: "Wankhede Pitch Report (MI vs KKR): A Coastal Dew Machine Where 180 Can Feel Like 160 in the Chase",
    subtitle:
      "Mumbai’s geography turns night games into two-innings puzzles: dry ball early, slippery ball late.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["pitch-report", "mi", "kkr", "ipl-2026", "wankhede", "venue-analysis"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [13, 2, 23, 3],
    chartData: [
      { label: "Wankhede: field-first wins (T20s)", value: 123, color: "#3b82f6" },
      { label: "Wankhede: bat-first wins (T20s)", value: 92, color: "#ef4444" },
      { label: "Dew timing (typical)", value: 20, color: "#8b5cf6" },
    ],
    dataTable: {
      headers: ["Phase", "What the venue does", "Stat signal"],
      rows: [
        [
          "Powerplay (1–6)",
          "Extra bounce keeps edges in play",
          "Pace historically dominates wicket share",
        ],
        [
          "Middle overs (7–15)",
          "Hard lengths work; spinners need grip",
          "Dew reduces spin control",
        ],
        [
          "Death (16–20)",
          "Wet ball inflates execution error",
          "Field-first wins: 123 vs 92",
        ],
        [
          "Chase dynamic",
          "Skid increases boundary conversion",
          "Dew usually intensifies after ~8 pm",
        ],
      ],
    },
    content: `Wankhede’s pitch is rarely the only variable. The bigger variable is moisture. The stadium’s coastal location means that as the evening cools, humidity rises and dew can arrive hard enough to change the texture of the ball. One report on Wankhede’s dew dynamics notes that dew typically becomes a factor after the 8 pm mark, and the historical win split reinforces the chase lean: in T20s overall at Wankhede, the team fielding first has won 123 times compared with 92 victories for sides batting first.

What does that mean for par scores? It means the first innings often happens in “normal” conditions and the second innings can happen in “fast” conditions. A 180 first-innings total can behave like a 160 chase if the ball skids and bowlers lose grip on slower balls. This is why Wankhede games can look like they’re accelerating even when the batting intent is unchanged.

The surface itself: Wankhede’s red-soil pitch tends to offer bounce and carry. That creates a small but real early-overs advantage for fast bowlers who hit the deck — not because the pitch is bowler-friendly, but because it makes batters commit. The flip side is that once the ball gets wet, the same bounce becomes a batting asset because shots travel.

MI vs KKR roster lens: KKR are entering the season with a genuine pace squeeze. Reports indicate Akash Deep is ruled out for IPL 2026 with a lumbar stress injury, Harshit Rana is unlikely to feature, and Saurabh Dubey has been signed as a replacement for Akash Deep. That forces KKR to cover high-leverage overs with a thinner set of options — exactly the situation dew punishes.

Bottom line: if you’re pricing this venue, don’t just price “Wankhede is high scoring.” Price “Wankhede is two different games.” Expect a par band around 175–190 in the first innings, but assume the chase can outperform that baseline if dew arrives early.`,
  },

  {
    id: 5,
    slug: "toss-analysis-mi-vs-kkr-wankhede-ipl-2026",
    title: "Toss Analysis (MI vs KKR): Field First Isn’t Tradition at Wankhede — It’s Math",
    subtitle:
      "The chase advantage is baked into coastal humidity, not superstition.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "mi", "kkr", "ipl-2026", "wankhede", "dew"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [13, 2, 23],
    chartData: [
      { label: "Field first (historical win share)", value: 57, color: "#3b82f6" },
      { label: "Bat first (historical win share)", value: 43, color: "#f59e0b" },
      { label: "Estimated dew WP swing", value: 6, color: "#10b981" },
    ],
    content: `The Wankhede toss is one of the few in cricket where you can justify the decision with a simple sentence: coastal dew increases variance for the defending side. A quantitative anchor: in T20s overall at Wankhede, teams fielding first have won 123 games versus 92 for teams batting first. That’s not a minor lean; it’s a structural tilt.

Mechanism matters. Dew turns the ball slippery, which increases the probability of three costly events: (1) full tosses, (2) overpitched deliveries, and (3) boundary-saving misfields. Each of those costs you more at Wankhede than at larger venues because the boundary is closer and the outfield is quick.

So the default is to chase. But “default” isn’t “always.” There’s one scenario where batting first is rational: if you believe the pitch will slow (rare at Wankhede) or if your bowling attack is unusually dew-proof (high-pace, low-reliance on cutters and spin). In most IPL contexts, that condition is not met.

MI vs KKR is especially tilted toward chasing because KKR’s pace resources are constrained early in the season. With injuries forcing role changes, you don’t want to be the side trying to defend 180 with a wet ball and a shuffled death plan.

Recommendation: field first, and treat anything under 190 as chaseable if you keep 7 wickets for the last 5 overs. Wankhede doesn’t reward conservative scoreboards; it rewards innings that preserve optionality.`,
  },

  {
    id: 6,
    slug: "mi-vs-kkr-match-preview-ipl-2026-match-2-analytics",
    title: "MI vs KKR Preview: The Bumrah Endgame vs KKR’s Injury-Driven Overs Problem",
    subtitle:
      "The matchup is less about star power and more about who has 24 ‘safe’ balls at the death.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "mi", "kkr", "ipl-2026", "matchups", "wankhede"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [2, 13, 23, 27],
    dataTable: {
      headers: ["Question", "MI lever", "KKR lever", "Why it swings games"],
      rows: [
        [
          "Death-over control",
          "Bumrah overs 17–20",
          "Patchwork overs",
          "4 elite overs can be worth ~10 runs",
        ],
        [
          "Powerplay risk",
          "Attack with pace",
          "Protect top order",
          "Early wicket = fewer hitters at the death",
        ],
        [
          "Spin under dew",
          "Use as change-ups",
          "Lean on control",
          "Wet ball reduces grip; errors increase",
        ],
        [
          "Fielding",
          "Boundary riders",
          "Catching conversion",
          "At Wankhede, one drop can equal a 12-run swing",
        ],
      ],
    },
    content: `MI vs KKR at Wankhede is a game of leverage: one side tends to have more control in high-leverage overs, the other side is entering the season with reduced control because of injuries.

The venue sets the terms. Wankhede’s dew dynamics tend to push captains toward chasing, and historical T20 results show fielding-first teams winning more often (123 vs 92). That means the second innings is typically where the match is decided — by who owns the last 24 balls.

MI’s structural edge is that they can plan those 24 balls. If Bumrah is available to bowl two overs at the death, your expected leakage drops materially because you reduce the number of “execution risk” deliveries (the half-volley, the wide yorker) that dew creates.

KKR’s structural problem is that their early-season pace depth is compromised. Akash Deep has been ruled out of IPL 2026 with a lumbar stress injury, Harshit Rana is unlikely to feature, and Saurabh Dubey has been signed as a replacement for Akash Deep. In addition, reports suggest Matheesha Pathirana is expected to be available only around mid-April. Whether or not you rate each bowler individually, the macro effect is clear: fewer proven options means fewer ways to hide weak overs.

Key matchup: can KKR win the powerplay without losing wickets? If they do, they can “buy” their way through the middle overs and still have hitters for the last phase. If they lose 2 wickets early, their finishing ceiling drops by 10–15 runs — and Wankhede is not forgiving of late-innings ceilings.

Model read: MI gain value by pushing the match into a death-over contest; KKR gain value by making it a powerplay contest (wickets preserved, required rate managed). The team that enters over 16 with 7 wickets wins a disproportionate share of games at this ground.`,
  },

  {
    id: 7,
    slug: "barsapara-pitch-report-rr-vs-csk-guwahati-ipl-2026-match-3",
    title: "Barsapara Pitch Report (RR vs CSK): Good Bounce Early, Grip Later — and a Chase Bias When Dew Arrives",
    subtitle:
      "Guwahati isn’t a one-note batting track; it’s a timing track: score early, survive middle overs, cash in late.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["pitch-report", "rr", "csk", "ipl-2026", "guwahati", "barsapara"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [10, 14, 7, 21],
    chartData: [
      { label: "April humidity (Guwahati avg)", value: 72, color: "#3b82f6" },
      { label: "April high temp (°F)", value: 89, color: "#f59e0b" },
      { label: "Chase tilt (qualitative)", value: 55, color: "#10b981" },
    ],
    dataTable: {
      headers: ["Venue signal", "What it does", "Concrete anchor"],
      rows: [
        [
          "Early innings",
          "Good bounce and steady pace",
          "T20I record includes 237/3 as top total",
        ],
        [
          "Middle overs",
          "Slight slowdown; spinners gain grip",
          "Pitch tends to slow as match progresses",
        ],
        [
          "Night factor",
          "Dew can favor chasing",
          "April humidity ~72% in Guwahati",
        ],
        [
          "Extremes",
          "Wide scoring spread",
          "Lowest recorded T20I total 118",
        ],
      ],
    },
    content: `Barsapara Stadium in Guwahati is often treated as a blank canvas because it’s newer to the IPL ecosystem than the legacy venues. But the available evidence points to a clear pitch personality: the wicket offers good bounce and steady pace early, then slows slightly, giving spinners grip in the middle overs, and the outfield can get slick under lights. One venue summary notes that dew under lights often favors the chasing side, and that teams with powerful top orders plus quality spinners tend to succeed here.

The climate supports that reading. Guwahati in April averages high temperatures around 89°F with humidity around 72%, which is the kind of environment where the ball can pick up moisture later in the evening. In practical terms, that means the first innings can have a “dry-ball” middle overs where spin is more valuable, while the second innings can become a “skid-ball” finishing phase.

From a scoring model perspective, this is a 170-par venue with a wide spread. The T20I extremes show that it can host a 237/3 as the highest team total and also produce a 118 all-out. That doesn’t mean “anything can happen.” It means the wicket is sensitive to timing: the same intent can produce different outcomes depending on whether you hit into the early bounce window or the later grip window.

RR vs CSK tactical angle: both teams will want to identify when the pitch shifts. If the surface starts to slow by over 7, your best batting plan is to keep wickets and take the 7.5–8.0 middle-overs rate — because the death overs are where the venue’s scoring accelerates again.

Bottom line: treat Barsapara as a three-act game. Act 1 (powerplay) is about exploiting bounce. Act 2 (overs 7–14) is about not losing wickets to grip. Act 3 (death) is about whether the ball is dry enough to defend.`,
  },

  {
    id: 8,
    slug: "toss-analysis-rr-vs-csk-barsa-para-guwahati-ipl-2026",
    title: "Toss Analysis (RR vs CSK): Bat First If You Trust Spin, Chase If You Trust the Outfield",
    subtitle:
      "Guwahati is a conditional toss: humidity makes chasing attractive, but middle-overs grip can make first-innings scoreboards sticky.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "rr", "csk", "ipl-2026", "guwahati", "dew"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [14, 18, 7, 21],
    chartData: [
      { label: "Humidity (April avg)", value: 72, color: "#3b82f6" },
      { label: "Bat-first par band", value: 175, color: "#f59e0b" },
      { label: "Dew swing (est.)", value: 5, color: "#10b981" },
    ],
    content: `The toss at Barsapara is a “conditions first” decision. The climate gives you the first clue: Guwahati’s April humidity averages around 72%. High humidity is not the same as guaranteed dew, but it increases the probability that the outfield will get slick late.

If dew arrives: chasing becomes attractive because bowlers lose grip and the ball skids on. That reduces spin’s control and makes yorker execution harder, which tends to inflate late-innings scoring. In those conditions, the team batting second effectively gets a small efficiency bonus — the same contact turns into more runs.

If dew does not arrive (or is light): batting first becomes rational because the pitch can slow slightly through the middle overs, bringing spinners into the game. That’s where scoreboards get sticky. A 175 first-innings total can play larger if you can control overs 7–14 with spin and protect the boundary.

How captains should think: this is not a binary “always chase” venue. It’s a venue where your bowling composition matters. If you have two spinners you trust to bowl overs 7–14 with control, batting first and putting 175 on the board can be a high-equity play. If your bowling leans on cutters and slower balls, you should chase to avoid the wet-ball tax.

Recommendation: default to chasing if the outfield looks even slightly damp at toss time. If it looks dry and the pitch has visible wear, bat first and target 175–185 with 7 wickets in hand for the last five overs.`,
  },

  {
    id: 9,
    slug: "rr-vs-csk-match-preview-ipl-2026-match-3-analytics",
    title: "RR vs CSK Preview: Curran Out, Ellis Out — Which Team Solves the Overs Math First?",
    subtitle:
      "Early-season IPL is a resource-allocation contest: who has enough ‘safe’ overs, and who has to gamble.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "rr", "csk", "ipl-2026", "matchups", "guwahati"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [14, 10, 21, 18, 19],
    dataTable: {
      headers: ["Edge", "RR lever", "CSK lever", "Analytic consequence"],
      rows: [
        [
          "Overseas availability",
          "Curran ruled out; replacement role shift",
          "Ellis ruled out; replacement timeline",
          "Fewer ‘bankable’ overs early",
        ],
        [
          "Middle-overs control",
          "Spin squeeze",
          "Chepauk-style control travels",
          "Holding 7–14 under 8 RPO ≈ +10 runs",
        ],
        [
          "Death hitting",
          "Keep wickets for last 30 balls",
          "Finish with matchups",
          "7 wickets at over 15 ≈ +12 runs",
        ],
        [
          "Toss sensitivity",
          "Chase if dew",
          "Bat first if grip",
          "Conditions can swing 5–6 WP pts",
        ],
      ],
    },
    content: `RR vs CSK in Guwahati is a classic early-season game: the best XIs on paper are not the XIs that actually show up. Availability changes the math.

For Rajasthan Royals, Sam Curran has been ruled out of IPL 2026 due to a groin issue, with Dasun Shanaka named as his replacement. For Chennai Super Kings, Nathan Ellis has been ruled out after a hamstring injury. These are not just “one player out” updates — they change role allocation. Curran and Ellis are the kinds of players who make overs feel safe: they can cover powerplay or death phases with a clear plan.

That means both teams face a similar problem: where do the high-leverage overs come from? On a pitch like Barsapara — bounce early, grip later, potential dew at night — your overs 17–20 plan matters because conditions can remove the margin for error.

Key matchup 1: middle-overs control. If one team can use spin to force a 7.5 RPO middle, they buy themselves 10 runs of cushion — which is often the difference between a defendable 175 and a chaseable 175.

Key matchup 2: wicket preservation for the death. At venues with late-innings acceleration, arriving at over 15 with 7 wickets in hand is worth ~12 additional runs compared to arriving with 5 wickets. That’s not a stylistic point; it’s structural.

Key matchup 3: who benefits more from dew. If the outfield gets slick, chasing becomes easier and defensive bowling becomes noisier. If dew is light, the team with better grip-based bowling (spinners who can attack stumps) gains.

Model read: this match is less about one superstar and more about whether either team can avoid the “weak-over” problem. When two squads both have forced replacements, the team that finds 24 competent balls at the death usually wins.`,
  },

  {
    id: 10,
    slug: "ipl-2026-opening-weekend-power-rankings-matchups",
    title: "IPL 2026 Opening-Weekend Power Rankings: A ‘Availability Index’ for Match 1–3",
    subtitle:
      "Week 1 is not about who is best — it’s about who is closest to full strength.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-26T13:00:00Z",
    readTime: "6 min read",
    tags: ["rankings", "ipl-2026", "injury-update", "power-rankings", "week-1"],
    featured: false,
    relatedPlayerIds: [6, 1, 2, 13, 14],
    chartData: [
      { label: "RCB availability index", value: 78, color: "#ef4444" },
      { label: "SRH availability index", value: 74, color: "#f59e0b" },
      { label: "MI availability index", value: 86, color: "#3b82f6" },
      { label: "KKR availability index", value: 68, color: "#8b5cf6" },
      { label: "RR availability index", value: 72, color: "#10b981" },
      { label: "CSK availability index", value: 76, color: "#0ea5e9" },
    ],
    dataTable: {
      headers: ["Team", "Key availability note", "Week-1 impact"],
      rows: [
        [
          "RCB",
          "Hazlewood likely to miss start; travels after clearance",
          "Death plan less defined in Match 1",
        ],
        [
          "SRH",
          "Cummins out early; Kishan interim captain; Edwards replaced",
          "Leadership + bowling-phase reallocation",
        ],
        [
          "MI",
          "No major absences flagged",
          "Highest stability entering Match 2",
        ],
        [
          "KKR",
          "Akash Deep out; Harshit doubtful; Pathirana mid-April; Dubey in",
          "Overs depth hit; higher variance at Wankhede",
        ],
        [
          "RR",
          "Sam Curran ruled out; Shanaka in",
          "All-round balance shifts; matchup bowling changes",
        ],
        [
          "CSK",
          "Nathan Ellis ruled out",
          "Overseas pace depth reduced early",
        ],
      ],
    },
    content: `Power rankings in Week 1 should be called what they are: availability rankings. When squads are still being stitched together after the international calendar, the best predictor is not talent — it’s how much of your planned XI actually exists.

Method: an “availability index” from 0–100 that discounts teams for missing high-leverage resources (death bowlers, powerplay strike bowlers, and all-rounders who stabilize the XI). The values are directional rather than official, but they reflect a consistent idea: losing a death-overs specialist is worth more than losing a middle-overs option, and losing a captain can create second-order costs.

SRH: Pat Cummins is expected to miss the early part of the season while recovering from a lumbar stress issue; Ishan Kishan will lead as interim captain, with Abhishek Sharma as deputy. SRH also replaced Jack Edwards with David Payne. That’s a double hit: leadership change plus bowling-phase reallocation.

RCB: Josh Hazlewood is likely to miss the start as he awaits clearance from Cricket Australia; RCB have indicated he will join only when fully cleared. In Week 1, that means a larger share of pace overs will come from domestic options.

KKR: this is the clearest availability hit. Akash Deep is ruled out for the season, Harshit Rana is unlikely to feature, and Matheesha Pathirana is expected only around mid-April. KKR have signed Saurabh Dubey as a replacement for Akash Deep. Net: fewer bankable overs, especially in matches that are dew-sensitive.

RR and CSK: both lose specialist role players. RR are without Sam Curran for the season (Dasun Shanaka in), and CSK are without Nathan Ellis due to a hamstring injury.

The analytic takeaway: expect Week 1 to be higher variance than usual. Teams with stable XI construction tend to outperform “better on paper” teams by 5–10 percentage points of win probability in the first 3 games because they make fewer role errors.`,
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Wankhede chase bias",
    value: "123 vs 92",
    description:
      "In T20s overall at Wankhede, teams fielding first have won 123 times vs 92 for teams batting first — a structural tilt driven by coastal dew after ~8 pm.",
    teamColors: ["#3b82f6", "#f59e0b"],
  },
  {
    type: "matchup",
    title: "Opening-weekend availability index",
    value: "Overs depth is the edge",
    description:
      "Week 1 tends to reward teams with fewer forced role changes. KKR’s pace injuries and SRH/RCB’s key-quick uncertainties increase variance in Matches 1–2.",
    teamColors: ["#8b5cf6", "#10b981"],
  },
  {
    type: "player",
    title: "SRH captaincy pivot",
    value: "Kishan leads early",
    description:
      "With Pat Cummins expected to miss the first few matches while recuperating from a lumbar stress issue, SRH’s early tactics (powerplay/death allocations) will likely be more conservative.",
    playerIds: [3, 6],
    teamColors: ["#f59e0b", "#ef4444"],
  },
];
