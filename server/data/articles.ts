export interface ChartData { label: string; value: number; color?: string; }
export interface DataTable { headers: string[]; rows: string[][]; }
export interface Article {
  id: number; slug: string; title: string; subtitle: string;
  category: "pitch-report" | "toss-report" | "match-preview" | "rankings" | "analysis";
  author: string; publishedAt: string; readTime: string; tags: string[];
  featured: boolean; content: string; relatedPlayerIds: number[];
  chartData?: ChartData[]; dataTable?: DataTable; matchId?: number;
}
export interface AnalyticsCard {
  type: "player" | "matchup" | "stat"; title: string; value: string;
  description: string; playerIds?: number[]; teamColors?: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "ipl-2026-match-23-rcb-vs-lsg-recap-146-was-never-a-chinnaswamy-total",
    title: "IPL 2026 Match 23 (RCB vs LSG) recap: 146 was never a Chinnaswamy total — RCB kept it simple",
    subtitle: "RCB chased 147 in 15.1 overs (149/5) after bowling LSG out for 146 on April 15 in Bengaluru.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "7 min",
    tags: ["IPL 2026", "RCB", "LSG", "Match 23", "Bengaluru"],
    featured: true,
    content: `
RCB’s five-wicket win over LSG in Bengaluru looked routine on the scoreboard: **LSG 146 all out**, **RCB 149/5 in 15.1 overs**. But the real story was how comfortably Bengaluru’s conditions let RCB play the low-risk version of a chase.

### Why 146 was always behind the venue
CricDNA’s venue dataset for **M. Chinnaswamy Stadium** pegs the **average first-innings score at 168.1**. A 146 target is not just “below par” — it’s the sort of number that removes the need for risk in the middle overs.

There’s also a structural bias towards chasing. In CricDNA’s toss dataset for Chinnaswamy, teams have chosen to field first in **57 of 65** games, and that decision has produced a **56.1% win rate**. When captains behave the same way for years, it’s usually because the ground offers repeatable patterns.

### The bowling: making the innings end early
A side doesn’t get bowled out for 146 at a high-scoring venue unless the bowling side keeps attacking the stumps and the set batters.

The innings shape mattered more than one individual spell. LSG never built the 35–45 ball partnership that usually stabilises the middle overs in T20s — which means the final phase becomes “all swing, no insurance.” That is exactly when wickets tumble.

### The chase: powerplay intent, then no drama
RCB’s chase was a template for sub-160 targets:

1) Win the powerplay with intent.
2) Avoid collapses (singles count when the asking rate is under control).
3) Keep wickets for a short finish.

The key advantage of a 147 chase is that even a quiet over doesn’t hurt. You can rotate strike, wait for the bowler you want, and still close the match with overs to spare.

### What it signals for RCB’s home games
If you’re RCB, the simplest route to controlling home matches is bowling oppositions below the venue’s natural scoring band. On a ground where the historical average first innings sits around 168, pulling opponents down into the mid-140s forces them to play a “perfect” bowling innings to defend — and that’s rare.

That’s the cleanest takeaway from Match 23: RCB didn’t need a spectacular chase. They just needed to make sure the game never became chaotic.
    `,
    relatedPlayerIds: [1, 22, 29],
    matchId: 23,
    chartData: [
      { label: "Chinnaswamy avg 1st inns", value: 168.1, color: "#1f77b4" },
      { label: "LSG total", value: 146, color: "#d62728" }
    ]
  },
  {
    id: 2,
    slug: "ipl-2026-match-22-csk-vs-kkr-recap-192-5-was-too-much-at-chepauk",
    title: "IPL 2026 Match 22 (CSK vs KKR) recap: 192/5 was always too much — Chepauk asked KKR to be perfect",
    subtitle: "CSK made 192/5 and held KKR to 160/7 in Chennai, winning by 32 runs.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "KKR", "Chepauk"],
    featured: false,
    content: `
Some wins are built in the first innings. CSK’s **192/5** in Chennai pushed the game into a narrow corridor for KKR — and when the chase ended at **160/7**, CSK walked away with a **32-run** result.

### The Chepauk baseline: why 190+ is a power score
CricDNA’s venue numbers for **M. A. Chidambaram Stadium, Chennai** set an **average first-innings score of 161.2**. That’s important: if the venue’s “normal” is low 160s, then 190+ isn’t just good — it forces the chasing side to play an innings that exceeds the venue’s usual rhythm.

In practical terms, a 190 chase at Chepauk requires:
- Above-average powerplay tempo.
- A middle overs plan that beats control bowling.
- A death-overs finish that still has wickets in hand.

Most teams miss at least one of those.

### Match shape: when a chase is asked to be brave too early
KKR’s chase ending at 160/7 suggests the same pattern that often shows up at Chennai: the chase asks batters to attack spin and medium pace *earlier than they want to*. When you take risks before you are set, you donate wickets.

### The small tactical detail: making overs 7–15 “expensive enough”
At Chepauk, the easiest place to defend is the middle. Even if you concede 7–8 per over, you’re still squeezing the chase if the required rate is already above venue average.

That’s why CSK’s first innings mattered so much: by getting well ahead of the venue’s 161 baseline, CSK could bowl for control without feeling they needed constant wickets.

### What CSK can bank going forward
The blueprint is clear:
- If CSK can consistently post 175–195 at Chennai, their bowling only needs to be disciplined, not magical.
- Opponents are pushed into high-risk shot-making against fields set for mistakes.

Chepauk rewards teams that set the game’s tempo in innings one. CSK did that, and the rest followed.
    `,
    relatedPlayerIds: [14, 18, 10],
    matchId: 22,
    chartData: [
      { label: "Chepauk avg 1st inns", value: 161.2, color: "#1f77b4" },
      { label: "CSK 1st inns", value: 192, color: "#2ca02c" },
      { label: "KKR chase", value: 160, color: "#d62728" }
    ]
  },
  {
    id: 3,
    slug: "bengaluru-chases-why-chinnaswamy-captains-keep-fielding-first",
    title: "Bengaluru chases: why Chinnaswamy captains keep fielding first (and why it keeps working)",
    subtitle: "The numbers show a persistent preference to chase at Bengaluru — and a small but real win-rate edge.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Venue trends", "RCB", "Chinnaswamy"],
    featured: false,
    content: `
Bengaluru is one of the IPL’s most predictable venues in one specific way: captains almost always choose to field first.

CricDNA’s toss dataset for **M. Chinnaswamy Stadium** shows teams have chosen to field in **57 of 65** matches, and the chasing decision has produced a **56.1% win rate**. That’s not a massive edge — but in a league where margins are thin, it’s enough to influence behaviour.

### It’s not only dew — it’s the scoring profile
CricDNA’s venue dataset pegs Chinnaswamy’s **average first-innings score at 168.1** and the **death-overs run rate at 10.59**. That second number is the tell.

A high death-overs run rate does two things:
- It makes “par” totals fragile (you can lose 25–30 runs in two overs).
- It makes chasing simpler, because you can plan for a late surge even if the middle overs slow down.

### The tactical benefit: bowling to a known number
When you chase, you get clarity. That clarity changes the batting’s risk model:
- If the required rate is below 8, you can play for strike rotation.
- You can target specific bowlers instead of forcing shots against your toughest match-ups.

For the fielding side, it’s also easier to bowl at this venue when you *don’t* have to protect 180+. 160–170 is defendable only if you win several micro-battles.

### What this means for IPL 2026 games here
Unless teams start preparing radically different surfaces, the incentives stay the same:
- Captains will keep choosing to chase.
- First-innings sides will be pushed to aim above the 168 average.

The important nuance: chasing isn’t “guaranteed.” It’s just the option that gives the most repeatable plan, especially when the venue’s late-overs scoring is naturally explosive.
    `,
    relatedPlayerIds: [1, 13, 11],
    chartData: [
      { label: "Field first decisions", value: 57, color: "#9467bd" },
      { label: "Bat first decisions", value: 8, color: "#8c564b" }
    ],
    dataTable: {
      headers: ["Venue", "Matches", "Avg 1st inns", "Field-first win%"],
      rows: [["M. Chinnaswamy Stadium", "65", "168.1", "56.1%"]]
    }
  },
  {
    id: 4,
    slug: "preview-dc-vs-mi-arun-jaitley-stadium-pace-off-and-short-boundaries",
    title: "DC vs MI preview: Delhi’s small boundaries, big tempo — and the powerplay that could decide it",
    subtitle: "At Arun Jaitley Stadium, early momentum matters: a fast-scoring venue with a meaningful chasing tilt.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "DC", "MI", "Delhi"],
    featured: false,
    content: `
This DC vs MI match-up is built for speed. Delhi’s Arun Jaitley Stadium historically rewards clean hitting and quick starts, and the venue numbers suggest that teams who control the powerplay often control the game.

CricDNA’s venue dataset for **Arun Jaitley Stadium, Delhi** lists **85 total matches**, with an **average first-innings score of 166.1**. That’s a strong batting base — but it doesn’t mean totals automatically defend. The chase average is also high, and teams often back themselves to find a finish.

### What the venue tells us to watch
Delhi’s venue profile is best understood in phases.

- **Powerplay scoring** tends to be brisk: a fast start is “normal,” not exceptional.
- **Death overs** can swing games quickly — a 20-run over isn’t rare if yorkers miss.

That’s why the first six overs are critical: you want to score without losing too many wickets, because wicket insurance is what unlocks your finish.

### DC’s path: turn middle overs into a squeeze
On high-scoring grounds, the team that fields well and bowls the *least bad* overs 7–15 often wins. DC can target that phase: slow the game down, force MI to take risks, and then attack the stumps at the death.

### MI’s path: boundary pressure, then match-ups
MI’s squads typically lean on stacked batting and late overs muscle. On this ground, the plan is clear: keep boundary pressure constant so the required rate never dips for DC.

### CricDNA keys
1) **Powerplay wickets** are worth extra on fast venues — they reduce the opponent’s finishing ceiling.
2) If you’re batting first, aim above the venue’s **166.1** baseline.
3) If you’re chasing, keep wickets for overs 16–20. Delhi rewards teams that can hit after absorbing a quiet over.

Expect a match where the “best” innings isn’t about one player making 90, but about a top 3 that gets you ahead of the rate while preserving wickets.
    `,
    relatedPlayerIds: [4, 2, 13],
    chartData: [
      { label: "Delhi avg 1st inns", value: 166.1, color: "#1f77b4" },
      { label: "Target to aim for", value: 180, color: "#2ca02c" }
    ]
  },
  {
    id: 5,
    slug: "pitch-report-delhi-arun-jaitley-stadium-what-a-par-score-looks-like",
    title: "Pitch report: Arun Jaitley Stadium, Delhi — what a par score looks like (and why 175 isn’t safe)",
    subtitle: "Delhi is a run-friendly venue with a high first-innings average and enough chasing comfort to keep captains aggressive.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Pitch report", "Delhi"],
    featured: false,
    content: `
Arun Jaitley Stadium often looks like a “batting wicket” on TV, but the more accurate description is *a tempo wicket*: the game moves quickly, and mistakes are punished immediately.

CricDNA’s venue dataset lists **85 matches** here, with an **average first-innings score of 166.1**. In modern IPL terms, that means:
- 160 is rarely enough.
- 170 is competitive.
- 180+ is where you begin to feel control.

### Phase-by-phase: why the wicket plays fast
Delhi rewards batters in two ways:
1) The ball comes on nicely early, which makes powerplay boundary-hitting reliable.
2) The outfield tends to be quick, so “good shots” turn into fours.

Bowling plans that succeed here are usually simple:
- Protect the straight boundary.
- Bowl hard lengths into the pitch to force mishits.
- Keep your yorker plan ready for the death.

### What a par score should be
Using the venue average as a base, a good rule of thumb is to add 10–15 runs for “winning comfort.”

That puts a practical par band around **175–185**, especially if you don’t have elite death bowling.

### What captains should do at the toss
Even on good batting pitches, the chase can be attractive if you trust your batting depth. The safest strategy is still: take the option that gives you the clearest plan (and Delhi often rewards the side that executes match-ups with the most discipline).

If you bat first, don’t aim for “not losing.” Aim for a number that forces the chase to be brave.
    `,
    relatedPlayerIds: [4, 13, 11],
    chartData: [
      { label: "Venue avg 1st inns", value: 166.1, color: "#1f77b4" },
      { label: "Strong par band (low)", value: 175, color: "#ff7f0e" },
      { label: "Strong par band (high)", value: 185, color: "#2ca02c" }
    ]
  },
  {
    id: 6,
    slug: "toss-report-delhi-why-fielding-first-is-often-the-default",
    title: "Toss report: Delhi — why fielding first is often the default, and when to bat anyway",
    subtitle: "Toss choices are rarely random: the venue’s scoring profile and late-overs volatility push captains to chase.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "5 min",
    tags: ["IPL 2026", "Toss report", "Delhi"],
    featured: false,
    content: `
In IPL planning meetings, “what do you do if you win the toss?” is usually answered with a shrug. In Delhi, it’s answered with a plan.

CricDNA’s venue dataset suggests the ground plays fast, with an **average first-innings score of 166.1**. On fast-scoring venues, captains often prefer to chase because it reduces uncertainty: you know whether 8.5 an over is good or bad from ball one.

### Why chasing is appealing in high-tempo games
Chasing gives you two big advantages:
- **Risk calibration:** you can rotate strike until the match-up you want arrives.
- **Death overs clarity:** you know exactly how many you need, so you can hold hitters back.

### When batting first can still be the smarter call
There are two common reasons to bat first even on chase-friendly grounds:
1) You have a bowling unit that defends well at the death.
2) You expect the surface to slow, making timing harder later.

The strategic point is simple: fielding first is the “default” only if you believe conditions won’t worsen for batting.

### A practical toss heuristic
- If you believe **180+** is on the table, batting first can be a power play.
- If you think the pitch is a flat 165–175 surface, chasing keeps you in control.

On this ground, the best teams don’t just follow convention — they follow their best route to overs 16–20 with wickets in hand.
    `,
    relatedPlayerIds: [13, 4, 11],
    dataTable: {
      headers: ["Venue", "Matches", "Avg 1st inns"],
      rows: [["Arun Jaitley Stadium, Delhi", "85", "166.1"]]
    }
  },
  {
    id: 7,
    slug: "season-trend-why-ipl-venues-with-high-death-rates-create-chaos",
    title: "Season trend watch: why high death-overs run rates create chaos (and how teams can plan for it)",
    subtitle: "Death-overs scoring is the IPL’s biggest volatility driver — it can flatten “good” bowling spells.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "7 min",
    tags: ["IPL 2026", "Analysis", "Strategy"],
    featured: false,
    content: `
If you want one statistic that explains why IPL games swing late, use death-overs run rate. When overs 16–20 are naturally expensive at a venue, a match can flip even if the bowling side has “won” the first 15 overs.

CricDNA’s venue dataset gives a clean example: **Chinnaswamy Stadium’s death-overs run rate is 10.59**. That one number changes tactics:
- Captains hold overs from their best death bowlers, sometimes at the cost of the middle.
- Batting sides keep hitters in reserve, even if they lose a wicket early.
- Fielding sides set conservative fields because one miss becomes four.

### The hidden cost: good plans become fragile
On a 10.5+ death-rate ground, a “good” over (8 runs) is actually a win. But it’s also hard to produce five good overs in a row. One missed yorker can undo 12 balls of discipline.

That fragility pushes teams into two extremes:
1) **All-in attack** (hunt wickets, accept runs).
2) **All-in control** (protect boundaries, hope for errors).

### What smart teams do differently
The best teams build death plans in layers:
- One specialist for overs 16 and 18.
- One “hard length” bowler who can survive if yorkers miss.
- A batting order that can accelerate without needing 25 balls of set time.

### A useful mental model
Instead of asking, “Are we a good death team?”, ask:
- Can we defend one bad over?
- Can we still score if the opponent nails two yorker overs?

That’s why high-death-rate venues create chaos: they amplify small execution errors into 15-run swings.
    `,
    relatedPlayerIds: [2, 19, 18],
    chartData: [
      { label: "Chinnaswamy death RPO", value: 10.59, color: "#d62728" },
      { label: "Eden Gardens death RPO", value: 9.37, color: "#1f77b4" }
    ]
  },
  {
    id: 8,
    slug: "player-spotlight-virat-kohli-anchors-and-tempo-in-chases",
    title: "Player spotlight: Virat Kohli chases — why anchoring is still a weapon when the par score is clear",
    subtitle: "On chase-friendly grounds, a top-order anchor can reduce risk without reducing scoring.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Virat Kohli", "Chasing"],
    featured: false,
    content: `
Modern T20 discourse often treats anchoring as a problem. But anchoring only becomes a problem when it’s passive. When the target is known, an anchor can be the safest way to keep the chase on rails.

Match 23 in Bengaluru was a good example. With **147 to chase**, RCB never needed a “perfect” over. The job was to avoid giving the bowling side belief.

### Why anchors matter more in chases than in first innings
In a first innings, you have uncertainty — you don’t know if 165 will be enough. That uncertainty tempts batters into “insurance” shots.

In a chase, the target is fixed. If the required rate is manageable, an anchor can:
- Reduce collapse risk by valuing singles.
- Preserve hitters for overs 16–20.
- Force the bowling side to defend every over without the cushion of wickets.

### The venue effect
At a ground like Chinnaswamy (avg first innings **168.1**, death RPO **10.59**), a chase is often about timing your boundary bursts. You don’t have to be reckless early because the venue itself supplies late acceleration.

### The real anchor KPI
Anchors shouldn’t be judged by strike rate in isolation. The better question is: did they keep the required rate below the opposition’s comfort level?

If the required rate stays flat while wickets are preserved, the chase becomes inevitable.

That’s why Kohli-style innings still matter in IPL 2026: anchoring is not about going slow. It’s about making the match boring for the bowling team.
    `,
    relatedPlayerIds: [1, 13, 3]
  },
  {
    id: 9,
    slug: "preview-rcb-home-template-how-to-bowl-first-and-win-the-game-by-over-10",
    title: "RCB’s home template: how to bowl first and win the game by over 10",
    subtitle: "On high-scoring grounds, the fastest route to control is making the opposition bat under pressure early.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "Strategy", "Bengaluru"],
    featured: false,
    content: `
The simplest way to win at Bengaluru isn’t to score 210. It’s to make sure the opposition never gets there.

CricDNA’s venue data shows Chinnaswamy has an **average first-innings score of 168.1**. That number creates a psychological trap for batting first: teams feel they must start fast, because everyone assumes big totals are mandatory.

### The bowling-first advantage
When you bowl first, you can do two things:
- Attack early with boundary-protection fields that still keep catchers in play.
- Use the score pressure later (the batting side feels they’re behind even at 80/1).

On this ground, the “win by over 10” idea is real. If you can keep the opposition to a run rate that points to 155–165, you’ve already won the major strategic battle.

### What Match 23 reinforced
LSG’s 146 all out was an extreme version of the plan working. But the principle is repeatable:
- Take wickets during the acceleration attempt.
- Avoid the one over that gives away 25.

### What opponents should change
Teams batting first at Bengaluru should stop chasing a fantasy number and instead focus on innings shape:
- Get to 50/1 or 55/1 without panic.
- Build a partnership through overs 7–15.
- Save the all-out attack for overs 16–20.

If you skip the partnership phase, the venue doesn’t rescue you — it amplifies the collapse.
    `
    ,
    relatedPlayerIds: [1, 2, 11]
  },
  {
    id: 10,
    slug: "rankings-power-scores-why-venue-adjusted-par-matters-more-than-raw-totals",
    title: "Rankings idea: why venue-adjusted par matters more than raw totals (and how to read IPL scorelines)",
    subtitle: "A 170 in Chennai can be ‘bigger’ than a 190 in Bengaluru. Context turns totals into meaning.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "7 min",
    tags: ["IPL 2026", "Rankings", "Venue-adjusted"],
    featured: false,
    content: `
One of the easiest ways to misread IPL form is to treat all totals as equal. They aren’t. A score has meaning only relative to the venue that produced it.

CricDNA’s venue dataset highlights the difference clearly:
- **Chennai (M. A. Chidambaram Stadium)** average first innings: **161.2**.
- **Bengaluru (M. Chinnaswamy Stadium)** average first innings: **168.1**.

A 175 in Chennai is +13.8 above the venue average. A 175 in Bengaluru is only +6.9. That doesn’t make the Bengaluru 175 bad — it just means it’s less “dominant.”

### Why this matters for rankings and power scores
Venue-adjustment improves two ranking questions:
1) Which batting line-ups are truly outscoring conditions?
2) Which bowling attacks are truly suppressing scoring?

Without adjustment, teams that play more games on high-scoring grounds can look better than they are.

### A simple venue-adjusted lens for fans
When you see a scoreline, do this:
- Find the venue average.
- Calculate the margin above or below it.
- Interpret the match through that margin.

By that lens, CSK’s **192/5** in Chennai (Match 22) is an enormous first-innings performance: +30.8 above venue average. Meanwhile, LSG’s 146 in Bengaluru (Match 23) is -22.1 below.

That’s why these two scorelines feel so different: the venue turns them from numbers into outcomes.
    `,
    relatedPlayerIds: [14, 1, 18],
    dataTable: {
      headers: ["Venue", "Avg 1st inns", "Example score", "Above/Below avg"],
      rows: [
        ["Chennai", "161.2", "192", "+30.8"],
        ["Bengaluru", "168.1", "146", "-22.1"]
      ]
    }
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Chinnaswamy chase bias",
    value: "Field-first 57/65",
    description: "Teams have chosen to field first in 57 of 65 matches at Bengaluru, with a 56.1% win rate when doing so.",
    teamColors: ["#C8102E", "#0057B8"]
  },
  {
    type: "matchup",
    title: "Delhi par score",
    value: "175–185",
    description: "With an average first-innings score of 166.1 at Arun Jaitley Stadium, teams batting first should target 175–185 for control.",
    teamColors: ["#2563EB", "#1E3A8A"]
  },
  {
    type: "player",
    title: "Anchor value in chases",
    value: "Keep RRR flat",
    description: "In manageable chases, anchoring is about keeping the required rate stable while preserving wickets for the finish.",
    playerIds: [1, 13]
  }
];
