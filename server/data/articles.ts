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
    slug: "kkr-vs-pbks-no-result-eden-rain",
    title: "KKR vs PBKS: No Result at Eden — why abandoned games still change the table",
    subtitle: "A three-over cameo, then rain: but the strategic impact shows up in points pressure and rest cycles.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-07",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "PBKS", "Eden Gardens", "No Result"],
    featured: true,
    content: `
Kolkata Knight Riders vs Punjab Kings ended as a No Result at Eden Gardens after just 3.4 overs, with KKR 25/2 before the rain closed the night. On the surface, it’s an anti-game. In tournament terms, it’s still information.

First, points pressure changes. A washed-out match gives both sides one point, which is neither a win nor a loss but it does two things: it keeps you in touch while reducing the number of “must-win” fixtures later. In an 84-match league, that sounds small; in a tight mid-table cluster, one free point can be the difference between “win to stay alive” and “win to push top four.”

Second, abandoned games affect player management. With no full workload, pace stocks can be held back for the next fixture, but batting rhythm can also stall. Teams often prefer continuity early in the season; a No Result interrupts repetition — especially for new combinations. The teams that handle it best treat the abandoned match as a training day: review plans, adjust matchups, and move on.

Third, Eden’s underlying bias still matters even if the match didn’t happen. Historical venue data shows Eden Gardens has favoured chasing: 47 wins batting second vs 30 batting first, with an average first-innings score of 160.2. The toss trend aligns with that — teams choose to field first 63.6% of the time. Even in a rain-hit week, captains will keep leaning into the chase bias because the sample is large.

So what should KKR and PBKS take from 3.4 overs? Mostly, that Eden doesn’t demand invention in the first six overs — it demands clarity in the last five. The venue’s death-overs scoring rate (9.37 runs per over) is materially higher than the powerplay (7.28) and middle overs (7.51). The best teams build innings to access that finishing window with wickets in hand.

The larger point: washed-out games remove opportunity. If you’re a side still trying to find your best XI or to bank net run rate through a dominant win, losing 40 overs hurts more than the shared point helps. That’s why abandoned matches often feel “fine” for teams with stable structures and “annoying” for teams still searching.
`,
    relatedPlayerIds: [23, 27, 17],
    chartData: [
      { label: "Overs possible", value: 20, color: "#999999" },
      { label: "Overs played", value: 3.4, color: "#1E88E5" }
    ],
    dataTable: {
      headers: ["Eden Gardens venue snapshot", "Value"],
      rows: [
        ["Matches", "77"],
        ["Avg 1st inns", "160.2"],
        ["Bat 2nd wins", "47"],
        ["Bat 1st wins", "30"],
        ["Toss: field first", "63.6%"],
        ["Death RPO", "9.37"]
      ]
    },
    matchId: 12,
  },
  {
    id: 2,
    slug: "rr-vs-mi-pitch-report-barsapara-guwahati-2026",
    title: "RR vs MI pitch report: Barsapara rewards clean hitting — but new-ball wickets decide the chase",
    subtitle: "Guwahati’s scoring profile makes powerplay execution more valuable than mid-overs ‘containment’.",
    category: "pitch-report",
    author: "CricDNA Insights",
    publishedAt: "2026-04-07",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "MI", "Barsapara Stadium", "Pitch Report"],
    featured: false,
    content: `
Barsapara Stadium in Guwahati has quietly become a venue where momentum is expensive to recover. The surfaces tend to be true, and when the ball skids on, boundary options open up square of the wicket. That pushes teams towards a simple philosophy: make the powerplay count, then keep wickets to cash in late.

Even without a massive historical database in public discourse, the tactical lens remains stable: if the pitch plays evenly, bowling plans must win early. Once set batters are in, length errors become boundaries, and the game turns into a finishing contest.

For Rajasthan Royals, the batting template is about building a platform for the hitters. Yashasvi Jaiswal’s role is to make the first six overs feel like twelve. Sanju Samson and the middle order then choose the risk profile: do they keep the run-rate smooth through 7–15, or do they aim for a second mini-surge around the 10th? Either way, the finishing overs decide whether a “good” 175 becomes a “defendable” 195.

For Mumbai Indians, the surface suits their approach because they can stack boundary options across phases. Rohit Sharma and Suryakumar Yadav are at their best when they can access pace on the ball. Hardik Pandya adds a high-leverage over range — the ability to turn 13 per over into 10 with two boundary overs. The key is sequencing: if MI can keep a left-right combination running, the bowlers struggle to settle into a single line.

Bowling on this kind of pitch is less about a perfect ball and more about a perfect plan:
- First 2 overs: attack stumps, hunt wickets.
- Overs 3–6: protect the wide boundary, force hits into the long side.
- Death: wide yorkers and pace-off into the pitch — but only after you’ve shown hard length.

Par score call: treat 185 as a working par. If dew arrives, add 10–15 and expect captains to prefer chasing.
`,
    relatedPlayerIds: [7, 20, 13, 3, 11],
    matchId: 13,
  },
  {
    id: 3,
    slug: "rr-vs-mi-toss-report-guwahati-2026",
    title: "RR vs MI toss report: Field first is the default call — but only if you trust your powerplay bowling",
    subtitle: "Chasing logic is strong in evening games, yet one bad powerplay can make the decision look wrong.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-07",
    readTime: "5 min",
    tags: ["IPL 2026", "RR", "MI", "Toss", "Strategy"],
    featured: false,
    content: `
Most IPL toss decisions are driven by two realities: dew and information. Dew reduces grip for spinners and makes yorkers harder to execute; information makes chasing easier because you can calibrate risk to a target.

That’s why the field-first choice has become the league’s default. At venues with a meaningful chase edge, captains can ‘buy’ better conditions for batting. The catch is that chasing is only comfortable when you don’t bleed too many runs in the powerplay.

The RR vs MI matchup brings that trade-off into focus. If you field first, you are asking your bowlers to win the first six overs — either through wickets or through denying boundaries. If you fail, the opponent gets to bat with freedom, and the chase becomes a 200-plus problem.

From a tactics standpoint, the toss decision should be tied to two questions:
1) Do we have two bowlers we trust to take the new ball and hit hard lengths under pressure?
2) Can we defend the boundary-side with our best fielding unit on the park?

For Mumbai, that means planning overs for Jasprit Bumrah and using him for wicket probability rather than “saving him” for the end. For Rajasthan, it means deciding whether they want early swing and seam or to hold back their matchups for middle overs.

A practical recommendation: if the surface looks true and dew is expected, field first. But if your powerplay attack is missing a strike bowler, batting first and protecting a 190+ total can be the lower-variance route.
`,
    relatedPlayerIds: [2, 13, 7, 20],
    matchId: 13,
    chartData: [
      { label: "Toss choice: field first", value: 63.6, color: "#43A047" },
      { label: "Toss choice: bat first", value: 36.4, color: "#FB8C00" }
    ],
  },
  {
    id: 4,
    slug: "rr-vs-mi-match-preview-key-battles-2026",
    title: "RR vs MI match preview: the game turns on Bumrah’s first spell and RR’s left-hand power",
    subtitle: "If MI win the powerplay, they control the chase; if RR keep wickets, their finishing ceiling rises.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-07",
    readTime: "7 min",
    tags: ["IPL 2026", "RR", "MI", "Match Preview"],
    featured: false,
    content: `
Rajasthan Royals vs Mumbai Indians in Guwahati is a matchup of two teams built around different kinds of pressure. RR’s pressure is created by boundary options across the batting card; MI’s pressure is created by the ability to win high-leverage overs with elite skill.

Three themes to watch:

1) Powerplay wicket probability
On truer surfaces, the easiest overs to bowl are often the first two. That’s why the best bowling sides treat the powerplay as a wicket-hunting window. Mumbai’s plan should revolve around Bumrah taking responsibility early. If he removes one of RR’s left-hand engines, RR’s run-rate curve flattens.

2) RR’s left-hand matchups
RR’s top order can load up left-hand power (Jaiswal and potentially support acts around him). That creates matchup questions: do MI counter with angle across the left-hander, or do they go straight to hard-length and accept the risk of pull shots? The more predictable the plan, the easier it becomes to line up.

3) Middle-overs risk management
Many IPL games are lost between overs 7 and 15 not because teams score too slowly, but because they lose too many wickets trying to accelerate without a base. For RR, the best route is a ‘controlled’ middle phase: keep the run-rate in touch, then explode late. For MI, the best route is to force RR into overhitting by squeezing for three overs and removing the set batter.

A realistic scoring lens: 185 is a workable par; 200 is a statement. If dew arrives, chasing becomes cleaner and the first-innings side must overperform by 10–15 runs.

Prediction model (qualitative): MI have the higher upside in tight chases because their best players operate in the most valuable overs. RR have the higher upside in batting-first blowouts if they keep wickets through 15.
`,
    relatedPlayerIds: [2, 13, 3, 11, 7, 20],
    matchId: 13,
  },
  {
    id: 5,
    slug: "dc-vs-gt-pitch-report-arun-jaitley-2026",
    title: "DC vs GT pitch report: Arun Jaitley Stadium is a phase-acceleration ground — expect a late-innings surge",
    subtitle: "Delhi rewards batters who can change gears after over 12; bowlers must protect the straight boundary.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-07",
    readTime: "6 min",
    tags: ["IPL 2026", "DC", "GT", "Arun Jaitley Stadium", "Pitch Report"],
    featured: false,
    content: `
Arun Jaitley Stadium (Delhi) is a venue where the innings often looks ‘normal’ for 12 overs and then suddenly becomes unrecognisable. The short straight boundary and the fast outfield create a finishing boost — a late-innings surge that can turn 160 into 185 quickly.

The toss data also leans towards chasing. At Delhi’s venue record in our dataset, teams have chosen to field first more often than bat first, and the win rates show a mild advantage to fielding first. That doesn’t mean batting first is wrong; it means the batting-first side must plan for a higher par.

For Delhi Capitals, the batting plan is straightforward: keep wickets for the last five. If Rishabh Pant is in the middle at the death, DC’s boundary ceiling rises because he can access pace-off and pace-on equally.

For Gujarat Titans, the contest is about controlling the finishing window. Rashid Khan is the middle-overs lock — but the match often gets decided after him. GT’s pace bowlers must land wide yorkers and slower balls into the pitch. Any missed length in overs 16–20 becomes a slot ball at Delhi.

Two micro-keys:
- Use your best boundary riders early. Saving fielding specialists for later often costs you 8–10 “cheap” runs in the powerplay.
- Don’t over-bowl spin if dew is heavy. One wet over can undo three good overs.

Par score call: 180 is par, 195 is strong, and 205 is defendable only with early wickets.
`,
    relatedPlayerIds: [4, 30, 12],
    matchId: 14,
  },
  {
    id: 6,
    slug: "dc-vs-gt-toss-report-delhi-2026",
    title: "DC vs GT toss report: why captains prefer chasing in Delhi — and when batting first is smarter",
    subtitle: "If dew is obvious, field first. If the pitch looks slow, bat first and defend with spin before it skids on.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-04-07",
    readTime: "5 min",
    tags: ["IPL 2026", "DC", "GT", "Toss", "Arun Jaitley Stadium"],
    featured: false,
    content: `
Toss decisions in Delhi usually come down to a single question: will the ball stay dry? If dew arrives, it reduces grip for spinners and turns yorkers into half-volleys. That makes chasing easier because batting conditions improve through the night.

Our venue-level toss snapshot for Delhi shows a field-first preference and a slightly better success rate for teams that chase. The lesson is not “always field.” The lesson is “field when you have control at the start.”

For DC vs GT, the toss is also a personnel decision:
- If DC trust their new-ball pair to hit hard lengths, fielding first lets them attack before the pitch becomes a batting conveyor belt.
- If GT want Rashid Khan to bowl with maximum grip, batting first might be smarter so he operates before dew.

A smart compromise captains often use: if you’re unsure, field first. The chase gives you a clearer risk map. But if the surface looks dry and tacky at toss time, the better play can be batting first, taking 10–15 runs of extra par, and turning the game into a scoreboard squeeze.
`,
    relatedPlayerIds: [4, 12, 30, 5],
    matchId: 14,
    chartData: [
      { label: "Delhi: toss field first", value: 56.7, color: "#43A047" },
      { label: "Delhi: toss bat first", value: 43.3, color: "#FB8C00" }
    ],
  },
  {
    id: 7,
    slug: "dc-vs-gt-match-preview-pace-vs-spin-2026",
    title: "DC vs GT match preview: a pace-at-the-death test with Rashid’s middle-overs lock",
    subtitle: "The winning side is likely the one that protects overs 16–20, not the one that wins the first six.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-07",
    readTime: "7 min",
    tags: ["IPL 2026", "DC", "GT", "Match Preview"],
    featured: false,
    content: `
Delhi Capitals vs Gujarat Titans is a match where both sides can point to a single “control lever.” For GT, it’s Rashid Khan’s four overs as the middle-overs governor. For DC, it’s whether Pant and the finishers can manufacture a late surge at a venue built for it.

Key matchup: Pant vs Rashid
Even when Rashid doesn’t take three wickets, he changes the run equation because he forces batters to hit to bigger pockets. If Pant can find a method to score at 8.5–9 without taking high risk, DC can turn the last five overs into a 60-run window.

GT’s batting: build for overs 16–20
GT’s most reliable pathway is to arrive at the death with wickets. Shubman Gill’s role is to keep the innings intact and prevent a collapse. The hitters then attack the short straight boundary. If GT lose early wickets, they can still recover, but their ceiling lowers.

DC’s bowling: defend the straight line
Delhi punishes bowlers who miss full length on the stumps. DC’s seamers need disciplined wide lines, and their spinners must vary pace. The goal is to force boundary attempts to the longer side rather than allowing free access to straight hitting.

What a winning score looks like:
- Batting first: 185 is a competitive baseline.
- With dew: 200 starts to feel necessary.

This is a match that will likely be decided by one bad death over. The side that sequences better — dot ball into slower ball into wide yorker — will take the points.
`,
    relatedPlayerIds: [4, 5, 12, 30],
    matchId: 14,
  },
  {
    id: 8,
    slug: "ipl-2026-chasing-advantage-why-field-first",
    title: "IPL 2026 analysis: why ‘field first’ has become the default — and how teams exploit it",
    subtitle: "Chasing is an information advantage, but the best sides also build bowling plans that scale under dew.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-07",
    readTime: "7 min",
    tags: ["IPL 2026", "Strategy", "Chasing", "Toss"],
    featured: false,
    content: `
Across the league, captains increasingly treat the toss as a tool to manage variance. The decision to field first isn’t just tradition; it’s an attempt to buy two advantages at once: better conditions for batting later, and the ability to calibrate risk against a known target.

You can see the logic in venue data. Eden Gardens, for example, has produced 47 chasing wins vs 30 batting-first wins, and teams choose to field first 63.6% of the time. In other words, captains are reacting to what the ground has historically rewarded.

But the best teams don’t stop at ‘choose to chase.’ They build plans that scale under dew. Under wet conditions, the ball slides, spinners lose bite, and yorkers become harder to land. So teams shift to:
- hard length into the pitch,
- wide lines to protect the straight boundary,
- and boundary riders placed for the likely miss.

The tactical edge comes from pairing the toss call with roster flexibility. If your XI has two bowlers who can execute at the death with a wet ball, the chase advantage is meaningful. If not, the toss can become a trap: you field first, concede 205, and then discover that “information” doesn’t make 10.25 an over comfortable.

The counter-strategy is batting first with intent. Teams that bat first successfully do two things: they overperform par by 10–15 runs, and they take wickets early to break the chase structure. A strong batting-first side doesn’t defend 180; it defends 195 with two powerplay wickets.

So the league’s new equilibrium is not “chase always wins.” It’s “chase is the default, but the best sides win either way because their plans are phase-specific.”
`,
    relatedPlayerIds: [2, 12, 23],
    chartData: [
      { label: "Eden: field first choice", value: 63.6, color: "#43A047" },
      { label: "Wankhede: field first choice", value: 69.9, color: "#43A047" },
      { label: "Chinnaswamy: field first choice", value: 87.7, color: "#43A047" }
    ],
  },
  {
    id: 9,
    slug: "ipl-2026-death-overs-why-9-rpo-matters",
    title: "IPL 2026 analysis: death overs are the new par — why 9.3 RPO at Eden changes squad building",
    subtitle: "If venues pay you 9+ at the death, teams need finishers and yorker specialists more than ever.",
    category: "analysis",
    author: "CricDNA Insights",
    publishedAt: "2026-04-07",
    readTime: "6 min",
    tags: ["IPL 2026", "Death Overs", "Strategy", "Squad Building"],
    featured: false,
    content: `
When death overs scoring pushes past nine runs an over, the game’s incentives change. It becomes harder for bowlers to “win” overs 16–20, and easier for batters to plan innings around a late surge.

Eden Gardens is a clear illustration: the venue’s death-overs run rate sits at 9.37, compared to 7.28 in the powerplay and 7.51 in the middle overs. That gap tells you how teams should build innings: arrive at the 16th with wickets, then attack relentlessly.

Squad building follows the same logic. A team can survive with one powerplay specialist; it struggles without finishing hitters and death-overs bowlers. The modern roster needs:
- at least two batters who can score at 12+ at the death,
- one bowler with a reliable wide yorker,
- and one bowler with pace-off skills that don’t become predictable.

The overlooked part is fielding. When venues inflate death scoring, you need boundary riders who save “one a match.” Over a season, that’s 10–15 runs of value — effectively a free batter.

So what does ‘par’ look like now? In many games, 175 is no longer safe because it doesn’t buy you a cushion against a 60-run finish. Par is becoming 185, and strong is becoming 200. That is why teams that bat deep and bowl at the death are the teams that sustain winning streaks.
`,
    relatedPlayerIds: [1, 2, 11, 9],
    dataTable: {
      headers: ["Phase", "Runs per over"],
      rows: [
        ["Powerplay", "7.28"],
        ["Middle", "7.51"],
        ["Death", "9.37"]
      ]
    },
  },
  {
    id: 10,
    slug: "ipl-2026-week-one-what-matters",
    title: "IPL 2026: Week-one checklist — the four metrics that predict who stays in the top four",
    subtitle: "Margins, wickets in hand, death-overs execution, and toss adaptability are already separating contenders.",
    category: "analysis",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-07",
    readTime: "7 min",
    tags: ["IPL 2026", "Metrics", "Analysis", "Top Four"],
    featured: false,
    content: `
The first week of an IPL season is deceptive: standings are shaped by small samples and one blowout can rewrite net run rate. But even early, some indicators are more stable than results. If you want a simple contender checklist, four ideas hold.

1) Win big at least once
Dominant wins are net run rate multipliers. They give you margin to absorb a close loss later without being pushed out by tie-breakers.

2) Protect wickets through 15
Most chasing collapses start when a team loses three wickets between overs 7 and 14. The best sides treat the middle overs as a “keep wickets, keep rate in touch” phase. If you have wickets at the death, you have options.

3) Own overs 16–20
At multiple venues, death-overs scoring is inflating. Eden’s death rate (9.37 RPO) is a good proxy for what’s happening league-wide: finishing is no longer a luxury. It’s the default way to win.

4) Be flexible on the toss
Toss trends push teams to field first. Smart sides do not become one-dimensional; they can bat first and still create a defendable game by taking powerplay wickets and using matchup bowling.

Put together, these metrics are less about style and more about repeatability. You can’t control whether a catch drops, but you can control whether you have wickets at the death, whether you have two bowlers who can execute with a wet ball, and whether you understand what par looks like at your venue.

If you’re building a predictive lens for April: track powerplay wickets taken, death overs economy, and boundary differential. The top-four profile will emerge quickly.
`,
    relatedPlayerIds: [],
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Tonight’s leverage battle",
    value: "Bumrah vs Jaiswal",
    description: "Powerplay wickets are disproportionately valuable on true surfaces; MI’s best route is to win the first spell.",
    playerIds: [2, 7],
    teamColors: ["#005DAA", "#254AA5"],
  },
  {
    type: "stat",
    title: "Venue trend: Eden Gardens",
    value: "63.6% field-first",
    description: "Eden has 47 chasing wins vs 30 batting-first wins, aligning with a strong field-first bias at the toss.",
    teamColors: ["#5B2C83", "#D71920"],
  },
  {
    type: "player",
    title: "Finishing window matters",
    value: "Death overs 9.37 RPO",
    description: "At Eden, late-innings scoring is materially higher than early phases, increasing the value of finishers and yorker specialists.",
    playerIds: [1, 2, 11, 9],
  },
];
