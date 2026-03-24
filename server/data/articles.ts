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
    slug: "chinnaswamy-pitch-report-rcb-vs-srh-2026",
    title: "Chinnaswamy Pitch Report: The 205-Par Era and Why the Opener Will Be a Run-Rate Race",
    subtitle: "Bengaluru's geometry turns small errors into sixes — and makes 205 feel like an actuarial baseline.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "5 min read",
    tags: ["pitch-report", "chinnaswamy", "rcb", "srh", "ipl-2026", "venue-analysis"],
    featured: true,
    matchId: 1,
    relatedPlayerIds: [1, 16, 8, 9],
    chartData: [
      {
        label: `Powerplay RPO`,
        value: 8.51,
        color: `#ef4444`
      },
      {
        label: `Middle (7-15) RPO`,
        value: 8.86,
        color: `#f59e0b`
      },
      {
        label: `Death (16-20) RPO`,
        value: 10.97,
        color: `#8b5cf6`
      }
    ],
    dataTable: {
      headers: ["Metric", "Chinnaswamy (recent)", "IPL average", "Delta"],
      rows: [
        ["Avg 1st innings", "189.1", "~170", "+19.1"],
        ["Powerplay RPO", "8.51", "7.5", "+1.01"],
        ["Middle overs RPO", "8.86", "7.8", "+1.06"],
        ["Death overs RPO", "10.97", "10.2", "+0.77"],
        ["Highest score", "287", "—", "Record"],
        ["Bat-first win %", "52.6%", "~45%", "+7.6pp"],
        ["Chase win %", "47.4%", "~55%", "−7.6pp"],
        ["Total matches (recent)", "19", "—", "—"],
      ]
    },
    content: `The IPL 2026 opener at M. Chinnaswamy Stadium is basically a regression test for modern T20 batting: tiny boundaries, high-altitude carry, and lineups built to score 12+ runs per over when the matchup is even slightly favourable.

**Venue scoring baseline: plan for a 189-par, not 170.** Across 99 IPL matches at Chinnaswamy, the historical average first-innings score is 173.0. But in the most recent 19-match sample, that number has jumped to 189.1 — a 16-run inflation driven by flatter pitches, shorter turnarounds, and modern batting intent. The all-time high is 287 (SRH vs RCB, 2024). Once the innings crosses 200, win probability becomes far more sensitive to *powerplay wickets* than to the nominal par score. Teams that lose 2+ wickets inside the first 6 overs see their projected total fall by ~25–30 runs at this ground.

**Boundary geometry forces a different bowling mix.** Square boundaries in the ~60m range create a simple rule: anything in the slot is a boundary, and anything short is still a boundary. That compresses the bowler's error band by roughly 15–20cm compared to larger Indian venues. The implication is counterintuitive: "hit the deck" pace isn't automatically safer here; length balls are pulled and ramped. Teams tend to allocate a higher share of overs to hard-length cutters and wide yorkers, because they reduce the batter's *launch angle* even when contact is made.

**Phase scoring: where the game actually swings.** Chinnaswamy's powerplay run rate in the recent sample sits at 8.51 RPO — a full run above the IPL average of ~7.5. Middle overs (7–15) produce 8.86 RPO, and death overs push to 10.97 RPO. If you bat first, your KPI is simple: reach 55+ in the powerplay without burning more than one wicket, then treat overs 16–20 as a 55-run target.

**RCB vs SRH tactical lens.** RCB's anchor-plus-hitters model (Kohli stabilising, Salt/Patidar finishing) maps well to a venue where "par" is a moving number. Kohli's IPL career numbers — 8,661 runs at a SR of 132.86 across 259 matches — underline his ability to anchor. SRH's ceiling is similarly high if Head and Klaasen arrive with wickets in hand; Klaasen in particular tends to add ~2.0 RPO to a chase once he survives his first 10 balls.

**Bottom line.** If you're batting first, 200 isn't a flex — it's insurance. If you're chasing, your key number is 10.0 RPO after 10 overs: keep it there and the last 10 overs at Chinnaswamy usually supply the rest.`,
  },

  {
    id: 2,
    slug: "toss-analysis-rcb-vs-srh-chinnaswamy-2026",
    title: "Toss Analysis (RCB vs SRH): Why Fielding First Buys You a Narrow but Real Edge",
    subtitle: "In Bengaluru, the second innings often comes with a wetter ball, a faster outfield, and a higher boundary rate.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "chinnaswamy", "dew", "rcb", "srh", "ipl-2026"],
    featured: false,
    matchId: 1,
    relatedPlayerIds: [1, 16, 8, 12],
    chartData: [
      {
        label: `Chase win %`,
        value: 55.2,
        color: `#10b981`
      },
      {
        label: `Bat-first win %`,
        value: 44.8,
        color: `#f59e0b`
      },
      {
        label: `Toss field-first win %`,
        value: 56.1,
        color: `#3b82f6`
      }
    ],
    content: `At Chinnaswamy, the toss isn't destiny — but it's the closest thing T20 analytics has to a small pre-match edge. Across 65 IPL matches at M Chinnaswamy Stadium, the team batting second has won 37 times versus 26 for the team batting first — a 55.2% chase win rate. When the toss winner chose to field first (57 of 65 matches — 87.7% of the time), they won 56.1% of those games. The mechanism is simple: once the outfield dampens, boundary conversion rises and bowling execution becomes noisier.

**Dew turns the ball into a different object.** When the seam and leather pick up moisture, yorker accuracy drops and slower-ball grip becomes less consistent. Even a 5% execution drop is enormous when the opponent only needs 10–11 RPO. That is why many Bengaluru chases feature a late "conversion spike": overs 16–20 can jump from ~10 RPO to 13+ once the ball is visibly wet.

**Chase math: treat 10.5 RPO as manageable.** On flatter, smaller grounds, the chasing side's required rate is less psychologically damaging because a single over can swing 18–20. If you are 110/2 after 10 needing 95 off 60 (9.5 RPO), that's effectively on par. If you are 90/1 needing 115 off 60 (11.5 RPO), that's still chaseable with two set batters because "normal" death overs here are already in the 11-run band.

**Captaincy: front-load the hardest overs.** If you field first, your highest-leverage overs are 1–3 (new ball movement) and 7–10 (first spin window before set batters find rhythm). The goal is to force the batting side to spend its Impact Player earlier than planned. If you bat first, the inverse applies: maximise the first 10 overs before dew arrives by taking "high certainty" shots (straight and midwicket) rather than low-percentage cross-batted slogs.

**Recommendation.** If you win the toss, field first. It's not because chasing is magically easier; it's because the probability distribution of outcomes tightens for the chasing team and widens for the defending team once dew enters the model.`,
  },

  {
    id: 3,
    slug: "rcb-vs-srh-match-preview-2026-analytics",
    title: "RCB vs SRH Preview: Five Repeatable Edges That Matter More Than Hype",
    subtitle: "If this is a 205-par game, the winner is usually decided by powerplay wickets and the last 24 balls.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "rcb", "srh", "ipl-2026", "matchups", "probable-xi"],
    featured: false,
    matchId: 1,
    relatedPlayerIds: [1, 12, 8, 9, 16],
    dataTable: {
      headers: ["Edge", "RCB lever", "SRH lever", "Why it matters"],
      rows: [
        ["Powerplay tempo", "Kohli: 8,661 runs, SR 132.86 (259 matches)", "Head: binary — 60-run PP or slow start", "2+ PP wickets drops projected total ~25 runs"],
        ["Kohli vs pace", "Kohli vs B Kumar: 91 balls, SR 141.76, 4 dismissals", "B Kumar's dot ball % vs Kohli: 44.0%", "High-leverage early overs matchup"],
        ["Kohli vs spin", "Kohli vs KH Pandya: 107 balls, SR 109.35, avg 117.0", "Only 1 dismissal in 107 balls", "Containment, not wicket-taking"],
        ["Death bowling", "RCB's death-overs RPO at Chinnaswamy: 10.97", "SRH need elite death options to defend", "6–12 runs separates elite from average"],
        ["Venue par", "189.1 avg 1st innings (recent 19 matches)", "287 highest-ever score at this ground", "Both teams built for 200+ totals"],
      ]
    },
    content: `Season openers are noisy. The best way to reduce the noise is to focus on repeatable skill edges: powerplay matchups, middle-overs control, and who owns the last 24 balls.

**Probable XIs (projection).** RCB's shape is likely: Salt, Kohli, Patidar, a floating hitter, a finisher, plus 6 bowling options. SRH's best XI is built around Head's powerplay burst and Klaasen's middle/death acceleration.

**Matchup 1: Kohli's tempo vs SRH's variations.** Kohli has faced 107 balls against KH Pandya in T20 cricket, scoring at a strike rate of 109.35 with just 1 dismissal — that's containment, not destruction. Against B Kumar, the picture flips: 91 balls, SR 141.76, but 4 dismissals and a 44.0% dot ball rate. When Kohli starts at 120–130 SR through 15 balls, RCB's projected total is fine *if* wickets are intact. The danger is a two-wicket powerplay: that forces Patidar to stabilise and delays the "overload" phase where RCB want 12+ RPO late.

**Matchup 2: Head vs left-arm pace.** Head's scoring profile is binary: if he beats the new-ball angle early, the powerplay becomes a 60-run event. If left-arm pace shapes it away from his hitting arc, his boundary rate falls and SRH's innings becomes more dependent on Klaasen.

**Matchup 3: Klaasen vs matchups, not bowlers.** Klaasen's advantage is he wins against "average pace" and "average spin". The key is whether RCB can force him to start against his least favourite shape: left-arm orthodox into the pitch, with boundary riders set early.

**Matchup 4: the death-overs archetype.** Teams talk about "nailing yorkers", but execution rates are low. If either side has one elite death option (think Bumrah archetype), it's worth ~8–12 runs across 4 overs compared to replacement bowling. In a 200-par match, that's the game.

**Prediction model.** With home advantage priced in at ~2–3 percentage points, this is close to a coin flip. The team that wins the powerplay wickets battle (2–0 or better) should carry a 60%+ in-game win probability by the 10-over mark.`,
  },

  {
    id: 4,
    slug: "wankhede-pitch-report-mi-vs-kkr-2026",
    title: "Wankhede Pitch Report (MI vs KKR): The 180-Par Ground Where Powerplay Wickets Move Everything",
    subtitle: "Mumbai's surface is fair — which is exactly why the powerplay becomes the unfair phase.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "5 min read",
    tags: ["pitch-report", "wankhede", "mi", "kkr", "ipl-2026", "venue-analysis"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [13, 2, 3, 23, 27],
    chartData: [
      {
        label: `Powerplay RPO`,
        value: 7.28,
        color: `#ef4444`
      },
      {
        label: `Middle RPO`,
        value: 7.84,
        color: `#f59e0b`
      },
      {
        label: `Death RPO`,
        value: 10.29,
        color: `#8b5cf6`
      }
    ],
    content: `Wankhede is often described as a "true" pitch. Analytics translation: it's a venue where the ball comes on nicely, boundaries are achievable, and the variance is driven by matchups rather than surface quirks.

**Par score: 170–180, confirmed by data.** Across 125 IPL matches at Wankhede, the average first-innings score is 170.5 — notably lower than Chinnaswamy's 173.0 overall (or 189.1 in the recent sample). Bat-first win rate is 45.6%, meaning the chasing side has a slight structural edge. The highest score here is 235. The reason Wankhede remains more balanced than Bengaluru is that the boundaries are slightly larger and the sea-level air gives bowlers a touch more control over length.

**Powerplay is the leverage phase.** If you're 55/1 after 6, the innings can reach 185 with ordinary middle overs (8 RPO) and one big death surge. If you're 40/3, even a perfect recovery often caps out around 165 because set-batter time is limited.

**MI vs KKR: skill shapes.** MI's edge is the classic Mumbai combination: top-order power with at least one elite pace bowler to compress the death overs. KKR's ceiling comes from their ability to stack right-left combinations and force captains to burn matchups early.

**Bowling plan: don't chase wickets with pace on.** Wankhede's bounce tempts fast bowlers into "hard length everywhere". But when batters are set, hard length becomes pull length. The better plan is to alternate: two overs of back-of-length into the pitch, then a wide-yorker over with a packed off-side. The objective is to reduce *boundary probability*, not to increase dot balls.

**Bottom line.** If you're batting first, 185 is the number that flips the pressure back onto the chasing team. If you're chasing, your KPI is to arrive at the 12-over mark needing 9.0 RPO or less — because Wankhede's last 8 overs are built for acceleration.`,
  },

  {
    id: 5,
    slug: "toss-analysis-mi-vs-kkr-wankhede-2026",
    title: "Toss Analysis (MI vs KKR): A Mild-Dew Ground, a Real Decision",
    subtitle: "Wankhede's coin flip is about roster strengths: chase depth vs defend control.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "wankhede", "mi", "kkr", "ipl-2026"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [13, 2, 23, 3],
    chartData: [
      {
        label: `Toss field-first win %`,
        value: 51.0,
        color: `#10b981`
      },
      {
        label: `Toss bat-first win %`,
        value: 50.0,
        color: `#f59e0b`
      },
      {
        label: `Chase win % (overall)`,
        value: 54.4,
        color: `#3b82f6`
      }
    ],
    content: `Wankhede doesn't always have Bengaluru-style dew, but when the humidity rises the second innings can still become a higher-scoring environment. Across 73 matches at Wankhede Stadium, captains chose to field first 51 times (69.9%), winning 51.0% of those games. Those who chose to bat first (22 times) won exactly 50.0%. The overall bat-first vs bat-second split is 36–37 — nearly perfect equilibrium. The toss decision should be framed as a risk trade: do you prefer setting a number with a dry ball, or chasing with slightly more outfield value?

**A practical dew model.** Even a mild dew effect increases boundary conversion by 2–4 percentage points. That's not huge, but across ~110 balls in a chase it can mean 6–10 extra runs from the same contact quality.

**Toss decision tree.**
- If you have a stronger top order (higher powerplay ceiling), batting first is acceptable: you can post 185+ before the ball gets heavy.
- If you have superior death bowling, batting first is also fine: you're protecting your advantage.
- If your strength is chasing depth and you have flexible finishers, field first becomes optimal.

**MI vs KKR context.** MI are traditionally better when they can chase because their lineup is built to pace a chase and explode late. KKR's best outcomes often come when they can set up matchups early and defend with spin/variations. That makes the toss a genuine strategic fork rather than a one-way rule.

**Recommendation.** If conditions look sticky (visible humidity, slightly softer outfield), field first. If it looks dry and breezy, batting first and pushing 185 is a perfectly rational play.`,
  },

  {
    id: 6,
    slug: "mi-vs-kkr-match-preview-2026-analytics",
    title: "MI vs KKR Preview: Death-Overs Compression vs Left-Right Disruption",
    subtitle: "One side wants a low-variance finish; the other wants matchup chaos.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "mi", "kkr", "ipl-2026", "matchups"],
    featured: false,
    matchId: 2,
    relatedPlayerIds: [13, 2, 3, 23, 27],
    dataTable: {
      headers: ["Phase", "MI win condition", "KKR win condition", "Quant hook"],
      rows: [
        ["Powerplay (1-6)", "Rohit 55+ in PP (career PP SR 124.8)", "Narine restricts Rohit (134 balls, SR 106.72, 8 dismissals)", "Rohit vs Narine: avg 17.88 — KKR's best lever"],
        ["Middle (7-15)", "SKY acceleration at Wankhede", "Mystery spin <7.5 RPO for 3 overs", "Wankhede mid-overs RPO: 7.84"],
        ["Death (16-20)", "Bumrah: 183 wickets, death eco 7.87", "Need <11 RPO from replacement pace", "Wankhede death RPO: 10.29 — Bumrah is 2.4 below average"],
        ["Chase dynamics", "MI chase ceiling high at Wankhede", "KKR need 175+ to have a chance", "Wankhede avg 1st innings: 170.5"],
      ]
    },
    content: `MI vs KKR is one of the more interesting tactical matches because both sides can win the same game in different ways: MI by compressing the death overs, KKR by manufacturing matchups and stealing 10–15 runs via left-right disruption.

**Probable XIs (projection).** MI are likely to anchor around Rohit at the top and Bumrah at the back. KKR's likely core includes middle-overs hitters and at least one mystery-spin option.

**Matchup 1: Rohit vs Narine — the numbers tell the story.** Rohit has faced Sunil Narine 134 times in IPL cricket, scoring 143 runs at a strike rate of just 106.72 — well below his career IPL SR of 132.1. The 8 dismissals translate to an average of 17.88, making Narine the most effective bowler against Rohit in the dataset. Rohit's overall powerplay record is strong (2,384 runs at SR 124.8), but at Wankhede that fraction is punished differently. If KKR can keep him to under 8.5 RPO personal scoring rate in the first 3 overs, they reduce MI's 185 probability meaningfully.

**Matchup 2: Bumrah vs KKR finishers.** This is the purest analytics edge: one elite death bowler can reduce boundary probability by ~20% compared with replacement pace. If Bumrah owns two of overs 17–20, KKR's finishing ceiling drops.

**Matchup 3: Middle-overs spin windows.** If KKR can extract even 2 overs at <7 RPO between overs 7–12, they can force MI into a more volatile finish. Conversely, if MI can line up right-handers against KKR's spin, the middle overs can become a quiet 8.5 RPO phase that sets up the final surge.

**Prediction.** If MI take 2+ wickets in the powerplay, they should be favourites. If KKR exit the powerplay 55/1 or better while keeping MI under 55/2, the game becomes a 50-50 chase with small margins.`,
  },

  {
    id: 7,
    slug: "barsapara-pitch-report-rr-vs-csk-2026",
    title: "Guwahati (Barsapara) Pitch Report: Why 170 Is Competitive and the Middle Overs Matter More",
    subtitle: "A slightly slower surface shifts value from pure power to control and wicket preservation.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "5 min read",
    tags: ["pitch-report", "barsapara", "rr", "csk", "ipl-2026", "venue-analysis"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [7, 14, 18, 10, 20],
    chartData: [
      {
        label: `Par band`,
        value: 170,
        color: `#3b82f6`
      },
      {
        label: `Middle-overs RPO`,
        value: 7.8,
        color: `#f59e0b`
      },
      {
        label: `Death-overs RPO`,
        value: 10.5,
        color: `#8b5cf6`
      }
    ],
    content: `Barsapara Stadium in Guwahati is still a small-sample IPL venue, which makes analysts cautious — but not blind. The usable signal is in *how* runs are scored: more straight boundaries, slightly slower outfield, and a surface that can grip early before flattening.

**Par score: 165–175, with a slower middle.** Compared to Bengaluru and Mumbai, Guwahati games tend to have a slightly lower par. The middle overs (7–15) often become a phase where 7.5–8.0 RPO is acceptable, because the pitch can hold just enough to make pure hitting harder.

**Spin vs pace: it's about pace-off.** This isn't a turner; it's a pace-off venue. Cutters, cross-seam, and hard-length into the pitch tend to outperform full pace, especially if the ball is older and drier.

**RR vs CSK: roster fit.** RR's batting is typically built around aggressive openers and a spin-heavy control model. CSK's advantage historically is their ability to win the "non-highlight" overs: 7–15 at 8 RPO while keeping wickets, then explode late.

**What captains should target.** Batting first: 170 is competitive; 185 is strong. Chasing: keep it under 9.0 RPO after 10 and preserve 7+ wickets for a late push.

**Bottom line.** Guwahati doesn't demand 205. It demands discipline: one collapse over can be unrecoverable because the middle overs don't always offer the same easy catch-up acceleration as the bigger grounds.`,
  },

  {
    id: 8,
    slug: "toss-analysis-rr-vs-csk-guwahati-2026",
    title: "Toss Analysis (RR vs CSK): The Rare Ground Where Batting First Still Makes Sense",
    subtitle: "Guwahati's decision is about pitch evolution, not just dew.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "4 min read",
    tags: ["toss-report", "rr", "csk", "barsapara", "ipl-2026"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [7, 14, 18, 20],
    chartData: [
      {
        label: `Bat-first wins`,
        value: 3,
        color: `#f59e0b`
      },
      {
        label: `Chase wins`,
        value: 2,
        color: `#10b981`
      },
      {
        label: `Total matches`,
        value: 5,
        color: `#3b82f6`
      }
    ],
    content: `At Barsapara, toss logic tends to be less absolute than at the extreme batting grounds. The data is small — just 5 IPL matches — but telling: bat-first sides have won 3 out of 5, and captains who chose to field first (4 of 5 tosses) won only 25% of the time. Instead of "always chase", captains should ask: will the pitch slow, and do we have the bowling to defend 170?

**Why chasing can still be attractive.** Even without heavy dew, chasing clarifies the required tempo on a ground where the middle overs can be ambiguous. If you know you need 75 off 48, you can take higher-variance options; if you're batting first, you often under-hit the middle overs and finish 10–15 short.

**But batting first can be rational.** If the surface looks dry and a touch abrasive, it can slow later in the night and make chasing harder. In those games, 170 becomes a better defensive number because boundary conversion declines.

**Recommendation.** If you have a strong spin/control attack and your batters prefer setting a platform, bat first. If you have better chasing depth or expect the pitch to stay true, field first.`,
  },

  {
    id: 9,
    slug: "rr-vs-csk-match-preview-2026-analytics",
    title: "RR vs CSK Preview: Early Aggression vs Late Control on a Slightly Slower Guwahati Surface",
    subtitle: "The game is about innings shape: wickets in hand at 15 overs beats an extra 10 runs early.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "6 min read",
    tags: ["match-preview", "rr", "csk", "ipl-2026", "matchups"],
    featured: false,
    matchId: 3,
    relatedPlayerIds: [7, 14, 18, 21, 20],
    dataTable: {
      headers: ["Tactical question", "RR bias", "CSK bias", "Data hook"],
      rows: [
        ["Powerplay ceiling", "Jaiswal: 2,166 runs, SR 152.86 (PP: 1,378r/869b)", "Contain Jaiswal below SR 140", "Jaiswal's PP SR ~158.7 — elite aggression"],
        ["Middle-overs control", "Wrist spin at <7.5 RPO", "Jadeja: 170 wickets, eco 7.67", "Jadeja's dual value: 3,260 runs SR 130.3 + bowling"],
        ["Death execution", "Need 10+ RPO in last 5", "Barsapara death RPO ~10.5", "Lower par = tighter margin for error"],
        ["Venue par", "Target 175+ batting first", "170 is competitive at Barsapara", "Bat-first sides won 3/5 at this ground"],
      ]
    },
    content: `RR vs CSK has a strategic contrast that's easy to model: RR tend to maximise early aggression; CSK tend to maximise innings shape (wickets in hand) and win the last 8 overs.

**Probable XIs (projection).** RR's spine typically includes a left-handed power opener (Jaiswal — 2,166 IPL runs at a strike rate of 152.86) and a wrist-spin threat. CSK's spine includes a deep batting order and Jadeja as the late-overs control option (170 wickets at eco 7.67, plus 3,260 runs at SR 130.3 with the bat).

**Matchup 1: Jaiswal's powerplay vs swing.** Jaiswal has scored 1,378 runs in powerplay overs alone at a strike rate approaching 159. If CSK can survive the first 12 balls without a boundary burst, they can push the powerplay run rate down into the 8.0 band, which is meaningful at this venue.

**Matchup 2: Middle-overs spin.** RR's best path is to win overs 7–12 at <7.5 RPO while taking a wicket. CSK's best path is to keep wickets intact and accept 8.0 RPO, then cash in late.

**Matchup 3: Finishers vs pace-off.** On a slower deck, finishers who can hit straight and generate power without full pace have an edge. That's why cutters and wide lines are the key bowling plan: force square hits into larger boundary areas.

**Prediction.** The team that exits 15 overs with 6+ wickets and a required rate under 10.0 should be favoured. In Guwahati, collapses matter more than "par score" narratives.`,
  },

  {
    id: 10,
    slug: "ipl-2026-injury-impact-early-phase-analytics",
    title: "IPL 2026 Injury Impact: Why Missing One Death Bowler Can Cost 8–15 Runs per Match",
    subtitle: "Availability changes the hardest overs first — and that's where matches are decided.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-24T13:00:00Z",
    readTime: "6 min read",
    tags: ["analysis", "ipl-2026", "injury-update", "squad-news", "strategy"],
    featured: false,
    relatedPlayerIds: [2, 6, 19],
    chartData: [
      {
        label: `Replacement cost (runs)`,
        value: 12,
        color: `#ef4444`
      },
      {
        label: `Win prob swing (pts)`,
        value: 6,
        color: `#f59e0b`
      },
      {
        label: `Season share missed (2 matches)`,
        value: 10,
        color: `#3b82f6`
      }
    ],
    content: `Pre-season availability is the hidden variable that quietly moves win probabilities before a ball is bowled. The early IPL phase is short enough that missing even two matches is effectively missing 10% of your season.

**High-leverage absences are about *overs*, not names.** A star batter typically influences ~25 balls in an innings; an elite bowler influences 24 balls by definition. When an elite bowler is missing, you don't just lose quality — you redistribute the hardest overs (powerplay and death) to replacement options. That can add 8–15 runs of expected conceded per match, which is often the margin.

**Notable early absences and delays.** KKR enter the season with multiple bowling questions: Akash Deep is ruled out, Harshit Rana is expected to miss a large portion, and Matheesha Pathirana is expected only from mid-April. SRH are monitoring Pat Cummins' back with an expected mid-tournament return; RCB may start without Josh Hazlewood for the first few matches. CSK have Nathan Ellis ruled out, while DC's Mitchell Starc is expected later due to workload management. (All per ESPN's injury tracker.)

**Strategic implication: play higher-variance cricket early.** If your bowling is depleted, the rational strategy is to raise variance: chase more often, use aggressive powerplay fields, and treat 200-par grounds as "must-hit" venues rather than "defendable with skill". If your bowling is intact and elite, lower variance: bat first, post 175–185, and defend with control.

**Player spotlight: why Bumrah-type value is nonlinear.** Bumrah's career IPL numbers — 183 wickets at an economy of 7.25, with a death-overs economy of just 7.87 — make the case quantitatively. The IPL-wide death-overs average is roughly 10.3 RPO. Bumrah at 7.87 saves ~2.4 runs per over in the death, meaning across 4 death overs he's worth ~9.6 runs compared to an average pacer. Removing that and replacing it with a 10.5+ RPO option swings win probability far more than a small improvement in middle overs.

**Bottom line.** Early-season squads aren't stable. The teams that adapt fastest — by reallocating overs, not by hoping for like-for-like replacements — bank points before the tournament reaches full strength.`,
  },

];

export const analyticsCards: AnalyticsCard[] = [

  {
    type: "stat",
    title: "Today's Model Note",
    value: "189.1 avg at Chinnaswamy",
    description: "Recent 19-match average first-innings score at M Chinnaswamy Stadium. PP RPO 8.51, death RPO 10.97 — plan for 200+ as insurance.",
  },
  {
    type: "player",
    title: "Player leverage",
    value: "Bumrah: 7.87 death eco",
    description: "183 career IPL wickets at 7.25 economy. His death-overs eco of 7.87 is ~2.4 RPO below the IPL average — worth ~9.6 runs across 4 overs.",
    playerIds: [2],
  },
  {
    type: "matchup",
    title: "Matchup to watch",
    value: "Rohit vs Narine: avg 17.88",
    description: "134 balls faced, 8 dismissals, SR 106.72. Narine is the most effective bowler against Rohit in the IPL dataset — KKR's biggest lever.",
    playerIds: [13],
  },
];
