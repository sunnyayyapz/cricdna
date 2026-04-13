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
    slug: "mi-vs-rcb-match-20-recap-salt-78-patidar-53-240-222-wankhede",
    title: "MI vs RCB (Match 20) recap: 240 at Wankhede and RCB still had overs to spare",
    subtitle: "Phil Salt’s 78 set up 240/4, and RCB’s bowling held its nerve as MI finished 222/5 — an 18-run win in a game where every ‘good’ over mattered.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "7 min",
    tags: ["IPL 2026", "MI", "RCB", "Match 20", "Wankhede"],
    featured: true,
    content: `
RCB’s season has a clear tell: when their top order gets the first eight overs right, they turn games into pace chases for the opposition. Match 20 at Wankhede was the cleanest version of that script. Bengaluru made 240/4 and still had enough control to beat Mumbai’s 222/5 by 18 runs.

### The innings that broke the par-score
Wankhede is a ground where teams have historically chased well, but “chaseable” only applies up to a point. Venue history in CricDNA’s dataset has Wankhede’s average first-innings score at 160.6, with bat-first and bat-second wins almost split (36 vs 37). In that context, 240 isn’t just above par — it’s the kind of total that forces the chasing side to play every over as a powerplay.

RCB’s powerplay (71/0 inside six overs, per the match notes available in public score summaries) mattered because it wasn’t reckless. It was boundary-first intent with wicket-security. Phil Salt’s 78 off 36 was the innings’ accelerator, but the more important structural piece was the platform: no early damage means you can spend the middle overs hunting matchups rather than repairing.

Rajat Patidar’s 53 off 20 then did what elite No.3/4 hitters do in 240 games: he turned a strong start into a ceiling. The innings moved from “good 200” to “we might get 240” in about 12 balls.

### Why Mumbai’s chase still fell short
Mumbai did a lot right. They scored 222, and a 222 chase usually wins at many venues. But against 240, you can’t afford any phase that merely keeps up.

The chase also had an obvious shape: the required rate stayed above 11 for almost the entire innings. Once the equation stays that steep, the chasing team becomes vulnerable to even one quiet over or one wicket that slows the next over. That’s exactly where RCB’s attack found control — not by bowling dot-ball spells, but by making Mumbai “work” for boundaries.

### What to take forward
For RCB, the takeaway is repeatable: maximize the first-innings ceiling at small grounds, then defend by winning the “errors” game. For Mumbai, the lesson is harsher: in 230+ chases, you need at least one batter who can produce a 20-ball 60 without needing a set platform.

**CricDNA call:** this wasn’t decided by a single moment. It was decided by which side converted powerplay momentum into an end-overs advantage — and RCB did it twice.
`,
    relatedPlayerIds: [16, 1, 29, 13, 2, 3],
    matchId: 20,
    chartData: [
      { label: "RCB", value: 240, color: "#D32F2F" },
      { label: "MI", value: 222, color: "#1E88E5" }
    ],
    dataTable: {
      headers: ["Match 20", "Key detail"],
      rows: [
        ["Result", "RCB won by 18 runs"],
        ["RCB", "240/4 (20)"],
        ["MI", "222/5 (20)"],
        ["Player of the Match", "Phil Salt 78 (36)"],
        ["Venue lens", "Wankhede avg 1st inns 160.6; wins split 36 (bat 1st) vs 37 (bat 2nd)"],
        ["Toss lens", "At Wankhede, field-first after winning toss has 51.0% win rate (26/51)" ]
      ]
    }
  },
  {
    id: 2,
    slug: "lsg-vs-gt-match-19-recap-165-chase-ekana-7w-win",
    title: "LSG vs GT (Match 19) recap: GT’s 7-wicket chase showed the value of keeping wickets for the last five",
    subtitle: "LSG’s 164/8 looked workable at Ekana, but GT reached 165/3 in 18.4 overs — a chase built on low-risk accumulation and a late shift to boundary mode.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "GT", "Match 19", "Lucknow", "Ekana"],
    featured: false,
    content: `
Lucknow’s Ekana has a reputation for making teams earn their boundaries, so totals between 160 and 175 often sit in the “hard but defendable” range. In Match 19, LSG got to 164/8 — and Gujarat still made the chase look smoother than the scoreboard usually allows.

GT won by 7 wickets, getting 165/3 in 18.4 overs. That margin matters because it signals control: the chase never became a last-over lottery.

### Why 164/8 wasn’t enough
A total of 164 can be fine, but the “/8” is the tell. In most T20 innings, losing 8 wickets costs you optionality. It reduces the number of risk-free overs you can take in the middle, and it often forces batters to leave 10–15 runs on the table at the death.

Ekana’s venue profile in CricDNA’s dataset underscores the point: it’s a lower-scoring ground than the pure batting venues, with an average first-innings score of 148.6. But that doesn’t mean you can coast. It means every additional 8–10 runs is valuable because the chase equation stays manageable for longer.

### How GT structured the chase
Gujarat’s chase finishing at 18.4 overs with 7 wickets in hand suggests a specific pattern: enough early stability to avoid “rate panic”, then a decisive late push.

In tricky venues, the best chases usually look boring for 12 overs. That’s not a criticism — it’s a design. Wickets in hand convert into better options in the last five overs, because the set batter can take on higher-variance shots without the fear of collapse.

### What this means for both teams
For LSG, the immediate question is phase planning. At home, you want to be the side that defines the pace of the game. If you end at 164/8, you’ve implicitly handed the opposition a clear chase: don’t lose early wickets, and the target will be reachable.

For GT, this win reinforces a durable identity: they can win away games by adapting their tempo to the venue rather than forcing a single batting model.

**CricDNA call:** in low- to mid-scoring games, “wickets saved” can be as valuable as “boundaries hit”. Gujarat won the wicket-economy battle, and the scoreboard followed.
`,
    relatedPlayerIds: [5, 12, 17],
    matchId: 19,
    chartData: [
      { label: "LSG", value: 164, color: "#00ACC1" },
      { label: "GT", value: 165, color: "#1A237E" }
    ],
    dataTable: {
      headers: ["Match 19", "Key detail"],
      rows: [
        ["Result", "GT won by 7 wickets"],
        ["LSG", "164/8 (20)"],
        ["GT", "165/3 (18.4)"],
        ["Venue lens", "Ekana avg 1st inns score 148.6"],
        ["Why it mattered", "LSG used 8 wickets; GT used 3 — more finishing options" ]
      ]
    }
  },
  {
    id: 3,
    slug: "match-20-micro-battle-salt-vs-bumrah-powerplay-logic",
    title: "Match 20 micro-battle: why ‘survive Bumrah’ isn’t enough at Wankhede",
    subtitle: "When the average first-innings score is ~160, a single elite over can’t pull a 240 game back. The real question becomes: who wins the non-elite overs?",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "Match 20", "MI", "RCB", "Bumrah", "Salt"],
    featured: false,
    content: `
The instinctive story from MI vs RCB (Match 20) will be “too many runs, not enough Bumrah.” But that framing is incomplete in modern IPL games at small grounds.

Wankhede’s historical average first-innings score in CricDNA’s dataset is 160.6. That’s already a strong scoring environment. Yet RCB went to 240/4. That gap is too big to attribute to one bowler’s impact — even if that bowler is Jasprit Bumrah.

### The structural problem: innings are won in the middle overs now
In 240 games, the batting side can absorb 4–6 balls of high-quality bowling because the rest of the innings provides enough boundary volume. That’s why “survive Bumrah” is no longer a complete plan.

The winning teams separate themselves in the overs where the field is spread, the bowler isn’t a specialist, and the batter is set. Those are the overs where a 7-ball 18 becomes “normal”, and the run rate climbs without feeling like a slog.

### Why Salt mattered beyond the highlights
Phil Salt’s 78 off 36 isn’t just a strike-rate event; it changes the opposition’s bowling map. A fast-starting opener forces the defending captain to consider early spin, defensive fields, and more aggressive bowling changes. Each adjustment usually costs something — either a matchup you’d rather avoid later, or an over you’d rather keep for the death.

### What Mumbai need to shift
Mumbai’s dataset profile at Wankhede shows a near-even split between batting first and chasing wins (36 vs 37). That tells you the venue isn’t “unfair” — it’s high-scoring but balanced.

So the fix isn’t to pray for 140 games. It’s to build plans for 200+ games: deeper batting that can maintain 10+ rpo without hero shots, and bowling strategies that minimize the number of ‘free’ overs.

**CricDNA call:** elite overs are table stakes. The league is decided by what happens in the overs teams *expect* to be safe.
`,
    relatedPlayerIds: [2, 16],
    dataTable: {
      headers: ["Wankhede reality check", "Number"],
      rows: [
        ["Avg 1st inns score", "160.6"],
        ["Bat 1st wins", "36"],
        ["Bat 2nd wins", "37"],
        ["Match 20 RCB", "240/4"],
        ["Match 20 MI", "222/5" ]
      ]
    }
  },
  {
    id: 4,
    slug: "match-19-why-wickets-are-currency-at-ekana",
    title: "Match 19 tactical note: at Ekana, wickets are currency, not just risk",
    subtitle: "LSG’s 164/8 left them no second-gear at the end; GT’s 165/3 showed how ‘quiet’ overs become a weapon when you keep depth.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "Match 19", "LSG", "GT", "Ekana", "tactics"],
    featured: false,
    content: `
Ekana games can tempt teams into the wrong conclusion. Because the average first-innings score in CricDNA’s dataset is 148.6, sides assume “we only need 160.” That’s true — but it hides the more important point: the path to 160 matters as much as the number.

LSG reached 164/8. Gujarat reached 165/3. Both are mid-160 totals, but one is fragile and one is flexible.

### The wicket-flexibility model
When you have 6–7 wickets left at the start of the death overs, you can choose: target a specific bowler, pick a specific pocket, or take two overs to set up one big over.

When you have 2–3 wickets left at the death, you can’t choose. You have to protect the tail. That protection usually costs you boundary attempts and turns “good balls” into “dots”.

That’s why wickets are currency at Ekana. The ground reduces boundary frequency; your substitute for boundaries is *optionality*. Optionality comes from depth.

### How to apply this going forward
LSG’s batting can still win at home, but they need clearer risk windows: one batter commits to a high-variance over against the fifth bowler, while the other holds shape. GT’s chase indicates they already play this way — they kept enough wickets to flip tempo late.

**CricDNA call:** at lower-scoring venues, preserve wickets early not because you’re afraid — because it buys you the right to attack later.
`,
    relatedPlayerIds: [5, 12],
    chartData: [
      { label: "LSG wickets used", value: 8, color: "#00ACC1" },
      { label: "GT wickets used", value: 3, color: "#1A237E" }
    ]
  },
  {
    id: 5,
    slug: "srh-vs-rr-match-21-preview-ekana-lessons-uppal",
    title: "SRH vs RR (Match 21) preview: Uppal rewards clear phase plans — not constant hitting",
    subtitle: "Hyderabad’s venue data shows chasing edges, but the real separator is middle-overs control. RR’s balance meets SRH’s ceiling in a matchup that can swing fast.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "7 min",
    tags: ["IPL 2026", "SRH", "RR", "Match 21", "Hyderabad"],
    featured: false,
    content: `
Match 21 takes us to Hyderabad: Sunrisers Hyderabad vs Rajasthan Royals at the Rajiv Gandhi International Stadium.

The venue profile in CricDNA’s dataset suggests a mild chasing bias. At Rajiv Gandhi International Stadium, Uppal (49 matches), the average first-innings score is 158.5 and the average second-innings score is 148.6. In simple terms: it isn’t a flat 200 venue, but it punishes teams that lose control in the middle.

### How the venue usually plays
The common pattern at Uppal is a powerplay where you can score, a middle phase where the ball grips just enough to force mistakes, and a death phase where set batters can still cash in.

That means both SRH and RR have a planning question: do you try to win the game in the first eight overs, or do you build for an 18-over innings where wickets in hand decide the last five?

### Matchups to watch
- **SRH top order vs RR powerplay bowling:** SRH’s best path is early boundaries, but it has to come without the “all-out attack” collapses that leave them 3 down by the 9th.
- **RR’s middle overs vs SRH’s spin/hold bowlers:** If RR can keep 7+ wickets for the last five, they’ll be hard to contain.

### Toss approach
Toss data for Rajiv Gandhi International Stadium, Uppal shows that teams choosing to field first after winning the toss have won 52.3% (23 wins from 44). That’s a small edge, but meaningful — especially if dew arrives.

**CricDNA call:** this is a venue where 180 can win, but only if the batting innings is structured. Expect the smarter middle-overs team to take it.
`,
    relatedPlayerIds: [28, 7, 8, 25],
    matchId: 21,
    dataTable: {
      headers: ["Hyderabad venue lens", "Value"],
      rows: [
        ["Matches (dataset)", "49"],
        ["Avg 1st inns", "158.5"],
        ["Avg 2nd inns", "148.6"],
        ["Toss: field-first win%", "52.3% (23/44)" ]
      ]
    }
  },
  {
    id: 6,
    slug: "csk-vs-kkr-match-22-preview-chepauk-control-game",
    title: "CSK vs KKR (Match 22) preview: Chepauk is a control game — and both sides can play it",
    subtitle: "Chennai’s average first-innings score sits in the mid-150s in CricDNA’s dataset, with a historical edge to chasing. Expect a spin-and-angles match rather than a pure boundary race.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "KKR", "Match 22", "Chepauk"],
    featured: false,
    content: `
Match 22 is a marquee at MA Chidambaram Stadium, Chepauk: Chennai Super Kings vs Kolkata Knight Riders.

Chepauk’s venue profile in CricDNA’s dataset (48 matches) captures why this ground feels different. The average first-innings score is 153.8, average second-innings score is 144.5, and teams have won more often chasing (30 bat-second wins vs 18 batting-first).

### The tactical shape
At Chepauk, batting isn’t only about shots — it’s about *sequencing*. The teams that win here typically do three things:
1) protect wickets in the middle,
2) manufacture boundary opportunities late,
3) bowl cutters/spin into the pitch with fields that tempt the wrong hit.

### What decides CSK vs KKR
- **Spin matchups:** both teams can stack spin overs. The side that forces the opponent to attack the *wrong* bowler will win the middle.
- **Powerplay discipline:** you don’t need 70/0 here. You need a platform that keeps your best hitters alive for overs 15–20.

### Toss approach
Chepauk’s toss stats in CricDNA’s dataset show a strong edge for fielding first: teams choosing to field first after winning the toss have won 69.7% (23/33). That’s massive for a venue that can slow down — and it reflects how hard it can be to judge a par score.

**CricDNA call:** expect a 165–175 par feel, and a match decided by who makes fewer “ego shots” against the spin.
`,
    relatedPlayerIds: [14, 18, 23],
    matchId: 22,
    chartData: [
      { label: "Chepauk avg 1st inns", value: 153.8, color: "#FFB300" },
      { label: "Chepauk avg 2nd inns", value: 144.5, color: "#43A047" }
    ],
    dataTable: {
      headers: ["Chepauk (dataset)", "Number"],
      rows: [
        ["Matches", "48"],
        ["Avg 1st inns", "153.8"],
        ["Avg 2nd inns", "144.5"],
        ["Bat 1st wins", "18"],
        ["Bat 2nd wins", "30"],
        ["Toss: field-first win%", "69.7% (23/33)" ]
      ]
    }
  },
  {
    id: 7,
    slug: "rcb-vs-lsg-match-23-preview-chinnaswamy-pace-of-game",
    title: "RCB vs LSG (Match 23) preview: at Chinnaswamy, the first eight overs decide what ‘par’ means",
    subtitle: "Bengaluru is the classic high-variance venue — short boundaries, fast outfield, and totals that swing quickly if the powerplay slips.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "7 min",
    tags: ["IPL 2026", "RCB", "LSG", "Match 23", "Bengaluru"],
    featured: false,
    content: `
RCB barely have time to breathe after a 240 game, because Match 23 takes them back to Bengaluru to face Lucknow Super Giants.

Chinnaswamy’s venue profile in CricDNA’s dataset explains why teams treat it like a different sport. Over 65 matches, the average first-innings score is 169.7 and the average second-innings score is 159.5. The highest total in the dataset at this venue is 263.

### The venue rule: you can’t “wait to attack”
At Chinnaswamy, a conservative 42/1 powerplay is often a losing position, not because it’s “bad”, but because it caps your ceiling. You usually need to reach the 10-over mark with scoring options still open.

### Matchups to watch
- **RCB’s top order vs LSG’s new ball:** RCB will want another fast start, because their batting becomes extremely hard to contain when the ball is hard.
- **LSG’s response after Match 19:** after being chased down, LSG’s key will be wicket-preservation. In Bengaluru, depth matters even more because every batter is a boundary threat.

### Toss approach
Chinnaswamy toss stats in CricDNA’s dataset show teams choosing to field first after winning the toss have won 55.4% (31/56). With potential dew and the challenge of defending 190+, chasing often becomes the preferred choice.

**CricDNA call:** expect a 190–205 par feel, but the team that wins the powerplay *without losing 2+ wickets* will control the match’s pace.
`,
    relatedPlayerIds: [1, 16, 22],
    matchId: 23,
    chartData: [
      { label: "Chinnaswamy avg 1st inns", value: 169.7, color: "#D32F2F" },
      { label: "Chinnaswamy avg 2nd inns", value: 159.5, color: "#1E88E5" }
    ],
    dataTable: {
      headers: ["Chinnaswamy (dataset)", "Value"],
      rows: [
        ["Matches", "65"],
        ["Avg 1st inns", "169.7"],
        ["Avg 2nd inns", "159.5"],
        ["Highest total (dataset)", "263"],
        ["Toss: field-first win%", "55.4% (31/56)" ]
      ]
    }
  },
  {
    id: 8,
    slug: "rankings-watch-rcb-top-order-mi-chase-signal",
    title: "Rankings watch: RCB’s top-order surge vs MI’s chase ceiling",
    subtitle: "Early-season narratives aren’t tables yet, but patterns show up fast: RCB are maximizing powerplays, while MI are being forced into 12+ required-rate chases.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "rankings", "RCB", "MI", "trend"],
    featured: false,
    content: `
It’s still early enough in IPL 2026 that points tables can lie. But the underlying patterns don’t.

### RCB: ceiling-first batting
Match 20 is the clearest example: 240/4 at Wankhede, driven by a dominant powerplay and a mid-innings acceleration. When RCB win the first eight overs without losing 2+ wickets, they effectively move the “par” line up by 15–25 runs.

That’s a rankings-level edge because it travels. A batting model built on early dominance reduces pressure on the death overs and makes their bowling plans simpler.

### MI: chases getting steeper
Mumbai’s issue isn’t batting quality — it’s the *equations* they’re being forced into. Chasing 240 meant playing 20 overs at 12 an over. Even an excellent innings (222/5) ends as a loss.

In the long season, teams that repeatedly face 11–12 required rates tend to burn wickets and lose optionality. That shows up later as inconsistent finishes.

### The venue context matters
Wankhede is historically balanced in CricDNA’s dataset (36 bat-first wins, 37 chasing wins). So when a game becomes one-sided there, it’s rarely “pitch randomness.” It’s usually execution — and in Match 20, RCB executed more overs at an elite level.

**CricDNA call:** if these shapes continue for a week, RCB will look like a top-two side on underlying performance, while MI will need either better powerplay bowling or more top-order volatility to change match equations.
`,
    relatedPlayerIds: [1, 16, 13],
    dataTable: {
      headers: ["Trend", "What it means"],
      rows: [
        ["RCB: ceiling-first starts", "More 200+ totals; simpler defenses"],
        ["MI: steep chase equations", "Higher wicket pressure; more variance"],
        ["Wankhede context", "Historically balanced: 36 bat-1st wins vs 37 chases" ]
      ]
    }
  },
  {
    id: 9,
    slug: "analytics-note-toss-biases-wankhede-chepauk-hyderabad",
    title: "Analytics note: three venues, three different toss incentives",
    subtitle: "Wankhede is near-neutral, Chepauk heavily favors field-first, and Hyderabad offers a smaller chasing edge — meaning ‘always chase’ is the wrong heuristic.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "toss", "venue analysis", "Wankhede", "Chepauk", "Hyderabad"],
    featured: false,
    content: `
One of the biggest strategic leaks in IPL decision-making is treating the toss as a generic “choose to chase” moment. CricDNA’s toss dataset shows why that’s too simple.

### Wankhede: close to neutral
At Wankhede Stadium (73 matches in the toss dataset), fielding first after winning the toss has a 51.0% win rate (26/51). That’s basically neutral — suggesting team strength and execution dominate.

### Chepauk: a strong field-first edge
At MA Chidambaram Stadium, Chepauk (48 matches), field-first after winning the toss has a 69.7% win rate (23/33). That’s a major incentive to chase because par scores are hard to judge, and conditions can change.

### Hyderabad: a smaller chasing lean
At Rajiv Gandhi International Stadium, Uppal (44 toss decisions captured), field-first win rate is 52.3% (23/44). That’s an edge, but not enough to override team composition or matchups.

### The practical takeaway
The toss should be a venue-specific decision:
- If you’re at Chepauk, chasing is often the default unless you have an exceptional spin batting plan.
- At Wankhede, pick the option that fits your lineup.
- At Hyderabad, use dew/conditions as the tie-breaker.

**CricDNA call:** teams that treat toss decisions as venue-specific gain small advantages that compound across a season.
`,
    relatedPlayerIds: [2, 18],
    chartData: [
      { label: "Wankhede field-first win%", value: 51.0, color: "#1E88E5" },
      { label: "Hyderabad field-first win%", value: 52.3, color: "#FB8C00" },
      { label: "Chepauk field-first win%", value: 69.7, color: "#43A047" }
    ]
  },
  {
    id: 10,
    slug: "player-focus-patidar-finishers-shape-the-modern-ipl",
    title: "Player focus: why modern IPL ‘finishers’ are often No.3/4 hitters like Patidar",
    subtitle: "Match 20’s decisive burst came before the death overs. In high-scoring games, the best ‘finishing’ can happen in overs 12–16.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-13",
    readTime: "6 min",
    tags: ["IPL 2026", "batting", "Patidar", "RCB", "tactics"],
    featured: false,
    content: `
The word “finisher” still makes people picture a last-five-overs specialist. But Match 20 at Wankhede reminds us that in 220–240 games, finishing can happen earlier.

RCB’s 240/4 was built on two kinds of innings: Phil Salt’s powerplay launch, and the mid-innings detonation from Rajat Patidar (53 off 20). Patidar’s burst came in the phase where bowlers expect to stabilize — overs 12 to 16 — and that’s why it was so valuable.

### Why No.3/4 hitters matter more now
When the powerplay is strong, No.3/4 batters inherit the game’s biggest leverage moment: the ball is still hard enough to hit, but the field is back enough that singles are available. If you can hit boundaries *and* rotate, the run rate climbs without extra risk.

That’s also why the “middle overs” are no longer a quiet zone. They’re the phase where you can set up the death overs without needing a miracle.

### What teams should look for
In recruitment terms, the modern finisher profile includes:
- boundary range against pace-off,
- the ability to start fast (first 10 balls),
- low dot-ball impact when fields are spread.

### The ripple effect
When a team has that kind of hitter at 3/4, it reduces late-innings pressure. It also changes bowling behavior: captains are forced to bring their best bowlers back earlier, which can weaken the death.

**CricDNA call:** Patidar-style impact is a format cheat code. The best finishers are often the ones who finish the match *before* it reaches the last four overs.
`,
    relatedPlayerIds: [29, 16],
    dataTable: {
      headers: ["What changed", "Why it matters"],
      rows: [
        ["Finishing moves earlier", "Decisive runs can be overs 12–16"],
        ["No.3/4 leverage", "Hard ball + spread field = high control"],
        ["Match 20 example", "RCB 240/4 powered by Salt (PP) + Patidar (middle)" ]
      ]
    }
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Wankhede wasn’t the decider — ceiling was",
    value: "RCB 240/4, MI 222/5",
    description: "Wankhede’s dataset average first-innings score is 160.6, but Match 20 blew past it. In 230+ games, the team that creates ‘free’ overs usually wins.",
    teamColors: ["#D32F2F", "#1E88E5"]
  },
  {
    type: "stat",
    title: "Chepauk toss edge",
    value: "69.7%",
    description: "At MA Chidambaram Stadium (Chepauk), teams choosing to field first after winning the toss have won 69.7% (23/33) in CricDNA’s dataset.",
    teamColors: ["#FFB300", "#43A047"]
  },
  {
    type: "player",
    title: "Player of the day",
    value: "Phil Salt — 78 (36)",
    description: "Salt’s powerplay launch set up 240/4, turning a balanced Wankhede into a pace-chase for MI.",
    playerIds: [16],
    teamColors: ["#D32F2F"]
  }
];
