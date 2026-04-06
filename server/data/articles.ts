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
    slug: "rcb-vs-csk-recap-rcb-250-chinnaswamy",
    title: "RCB vs CSK: 250/3 sets up 43-run win as Chinnaswamy turns into a finishing clinic",
    subtitle: "Patidar\u2013David acceleration and early CSK collapse decided the game in phases.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "CSK", "Match Recap", "Batting Depth"],
    featured: true,
    content: `
Royal Challengers Bengaluru put out a statement night at the M. Chinnaswamy Stadium: 250/3, relentless boundary-hunting, and enough separation early in the chase to turn the last ten overs into damage control.

Chennai Super Kings’ decision to field first never looked irrational on a ground where totals routinely get hunted down, but it did assume they could control phases. They couldn’t. RCB’s build was modern T20: stable base, then a long finishing window. Phil Salt’s 46 off 30 got the powerplay moving, Devdutt Padikkal’s 50 off 29 kept the scoring rate above 12 without the innings stalling, and the closer pair of Rajat Patidar (48* off 19) and Tim David (70* off 25) turned a “big” total into an “unfair” one.

The most decisive part wasn’t just the raw 250; it was how the innings segmented. The Patidar–Padikkal 58 off 21 removed any mid-innings squeeze, and the Patidar–David 99 off 35 made the last five overs feel like the match’s entire margin.

CSK’s chase never reset after the first three overs. Six batters fell for single-digit scores, and the top order collapsed before the innings had a shape. The late counterpunches from Sarfaraz Khan (50 off 25), Prashan Veer (43 off 29) and Jamie Overton (37 off 16) made the scoreline look closer than the process.

Bhuvneshwar Kumar’s 3/41 was the control point: wickets plus overs that forced CSK to swing earlier than ideal. With support from Jacob Duffy and Krunal Pandya, RCB never had to protect a par total; they were defending an excess.

Tactically, this match underlined two season themes: (1) Chinnaswamy is a “batting first is fine if you don’t leave runs late” venue, and (2) chasing 12+ for 20 overs is not a chase, it’s a 120-ball heist. RCB made sure CSK needed a heist.

What it means: RCB’s top-order depth gives them multiple scoring templates, and their wicket-taking in the powerplay keeps games from becoming pure shootouts. CSK, meanwhile, can’t afford a third straight start-of-innings collapse; they’ll need earlier intent and better matchup planning against swing and hard lengths.
`,
    relatedPlayerIds: [1, 10, 16, 29, 14],
    chartData: [{"label": "RCB total", "value": 250, "color": "#D71920"}, {"label": "CSK chase", "value": 207, "color": "#F7D117"}],
    dataTable: {"headers": ["RCB key scores", "Figures"], "rows": [["Tim David", "70* (25)"], ["Devdutt Padikkal", "50 (29)"], ["Rajat Patidar", "48* (19)"], ["Phil Salt", "46 (30)"], ["Bhuvneshwar Kumar", "3/41"], ["Jacob Duffy", "2 wkts"], ["Krunal Pandya", "2 wkts"]]},
    matchId: 11,
  },
  {
    id: 2,
    slug: "srh-vs-lsg-recap-one-ball-chase",
    title: "SRH vs LSG: One-ball finish highlights why chase control beats chaos",
    subtitle: "LSG win by 5 wickets (1 ball left) \u2014 the chase was about wicket preservation and sequence bowling.",
    category: "analysis",
    author: "CricDNA Insights",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "LSG", "Chase Strategy"],
    featured: false,
    content: `
Lucknow Super Giants edged Sunrisers Hyderabad by five wickets at Hyderabad, with one ball remaining — a result that reinforced how thin the margins are when venues reward six-hitting but also punish one bad over.

Without full ball-by-ball context, the key takeaway is structural: LSG’s chase management got them home despite the pressure of a late finish. In these games, the winning side usually does two things better than the opponent: it protects wickets through the middle overs and preserves a finishing option for the last 24 balls.

For SRH, the recurring question is whether their run-making comes in the right order. Their batting is built for surges — Travis Head and Abhishek Sharma can change the powerplay in 18 balls — but a five-wicket defeat suggests they either left runs late or didn’t have enough scoreboard “paranoia” at the death.

For LSG, the value is clarity: if Pant anchors and the hitters around him keep the required rate under control, they don’t need a perfect chase. They need a chase that never spikes.

The practical lesson for both teams is matchup discipline. On batting-friendly grounds, bowling plans must be less about “good balls” and more about “good sequences”: two dots to buy a slower ball, or a wide yorker only after you’ve moved the batter’s feet. The teams that sequence well win the one-ball games.
`,
    relatedPlayerIds: [4, 6, 8, 9],
    matchId: 10,
  },
  {
    id: 3,
    slug: "ipl-2026-nrr-early-shape",
    title: "IPL 2026: Early NRR patterns are already creating \u201cmargin pressure\u201d teams",
    subtitle: "RCB\u2019s +2.501 and CSK\u2019s -2.517 show why one blowout changes April strategy.",
    category: "rankings",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["IPL 2026", "Points Table", "NRR", "Strategy"],
    featured: false,
    content: `
The early IPL table is noisy, but it still reveals something useful: net run rate is already being shaped by “batting depth wins” rather than one-off cameos. After RCB’s 43-run win over CSK, Bengaluru sit on four points with a net run rate of +2.501, ahead of three other unbeaten sides on four points.

At this stage, points are binary; NRR is the story. Massive first-innings totals (like 250/3) are NRR multipliers because they create two advantages: they push the opposition into high-risk strokes early, and they allow bowlers to attack stumps with protection behind.

The bottom is equally instructive. CSK are winless after three games and have sunk to -2.517 NRR. That is not just “three losses” — it’s “three losses with damage.” When NRR gets this negative in April, it forces a team to chase not just wins but margins later.

Strategically, early-season NRR shapes decision-making. Teams with strong NRR can play slightly more conservatively in tight chases; teams with weak NRR start making ‘net run’ choices — promoting hitters, accelerating earlier, taking on higher variance.

If you want a simple projection: the top four after two weeks are rarely the final four, but the teams that bank NRR through dominant wins are the ones that can survive a mid-season wobble.
`,
    relatedPlayerIds: [],
    chartData: [{"label": "RCB NRR", "value": 2.501, "color": "#D71920"}, {"label": "CSK NRR", "value": -2.517, "color": "#F7D117"}, {"label": "RR NRR", "value": 2.233, "color": "#254AA5"}],
  },
  {
    id: 4,
    slug: "kkr-vs-pbks-pitch-report-eden-2026",
    title: "KKR vs PBKS pitch report: Eden Gardens is a finishing venue \u2014 plan for the last 5 overs",
    subtitle: "Eden\u2019s phase scoring and chase bias point to a 185+ baseline and a death-overs skills test.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["KKR", "PBKS", "Eden Gardens", "Pitch Report"],
    featured: false,
    content: `
Eden Gardens has always rewarded tempo, but the recent data shows a venue that is even more explicitly phase-driven. Across 77 IPL matches at Eden Gardens, the average first-innings score is 160.2 and teams chasing win more often (47 vs 30). That aligns with toss behaviour: sides choose to field first about 63.6% of the time.

For KKR vs PBKS, that points to a simple blueprint: if you’re bowling first, you want to keep the powerplay under 45 without losing your best death options; if you’re batting first, you need a ‘par plus’ total, because the venue has historically favoured chases.

What should the pitch play like? The run-rate by phase at Eden (powerplay 7.28, middle 7.51, death 9.37) suggests the wicket doesn’t dramatically slow; it asks bowlers to survive the last five overs. Expect cutters and wide yorkers from the 16th over onwards, and a premium on boundary-side fielding.

Matchup lens:
- PBKS’ pace options need length discipline to Rinku Singh’s leg-side power; anything back-of-a-length without pace-off becomes a slot ball here.
- KKR’s Varun Chakravarthy can be the middle-overs governor if he forces PBKS to hit straight rather than square.

Par score call: 185 is a baseline. Anything above 200 is a game you can defend if you take wickets in the first six.
`,
    relatedPlayerIds: [27, 23],
  },
  {
    id: 5,
    slug: "kkr-vs-pbks-toss-report-eden-2026",
    title: "KKR vs PBKS toss report: Why Eden captains keep choosing to field first",
    subtitle: "Our dataset shows a strong field-first preference and better win rate when chasing at Eden.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["KKR", "PBKS", "Toss", "Eden Gardens"],
    featured: false,
    content: `
At Eden Gardens, the toss is less superstition and more math. In 77 recorded matches at Eden Gardens in our dataset, captains chose to field first 49 times versus 28 choosing to bat first. The win-rate also tilts toward fielding first (63.3% vs 42.9%).

For KKR vs PBKS, that means one likely decision: if you win the toss, you field. The question then becomes how you allocate overs so the chase stays under control.

If KKR bowl first:
- Use Bumrah-style logic even without Bumrah: protect your best ‘hard length’ over for overs 3-4 when the batter wants to ramp the rate.
- Keep Varun Chakravarthy for the 7-14 window; Eden’s middle-overs run rate is still high, so the only way to win is to take wickets, not just contain.

If PBKS bowl first:
- Sequence pace-off balls at the death; Eden’s death RPO (9.37) is a warning that predictable yorkers get hit.

If you’re forced to bat first, 55+ in the powerplay is almost mandatory. Eden is a chase venue; leaving 15 runs for the last five overs is a losing trade.
`,
    relatedPlayerIds: [23, 27],
  },
  {
    id: 6,
    slug: "kkr-vs-pbks-match-preview-eden-2026",
    title: "KKR vs PBKS match preview: Eden\u2019s chase bias meets PBKS momentum",
    subtitle: "The game will likely swing in overs 7-15: wickets, not dots, decide Eden matches.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["KKR", "PBKS", "Preview", "Matchups"],
    featured: false,
    content: `
Punjab Kings arrive with momentum; KKR arrive needing a cleaner template. On current season form, PBKS have banked wins by protecting their chase structure, while KKR’s early losses have come from giving away one decisive phase.

The Eden Gardens context pushes this game toward a familiar pattern: powerplay aggression followed by middle-overs wicket protection. If PBKS keep wickets in hand through 12 overs, their finishing options can erase most required rates at Eden.

For KKR, two levers matter:
1) Make the powerplay overs “two-paced” with pace-off and hard lengths. Eden is a boundary venue; you can’t win by bowling ‘good lines’ alone.
2) Get Varun Chakravarthy bowling to the set batters, not the new batters. His value is in breaking partnerships, not in ‘quiet overs’.

Key matchups to watch:
- Rinku Singh vs PBKS death bowling: if Rinku gets 20 balls, KKR’s ceiling jumps.
- Varun Chakravarthy vs Shreyas Iyer-style anchors (PBKS’s middle): if Varun creates dots, PBKS are forced into high-risk sweeps.

Prediction lens: whichever team wins the “overs 7-15” wicket battle wins. Eden rarely allows you to defend without middle-overs breakthroughs.
`,
    relatedPlayerIds: [23, 27],
  },
  {
    id: 7,
    slug: "ipl-2026-phase-batting-template",
    title: "IPL 2026: The phase-batting template that\u2019s beating \u201cperfect technique\u201d",
    subtitle: "Aggressive powerplays + preserved finishers is the new stable strategy \u2014 depth enables risk.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["Strategy", "Batting", "Powerplay", "Death Overs"],
    featured: false,
    content: `
The biggest tactical shift in early IPL 2026 is not a new shot; it’s the acceptance that the powerplay is no longer “set up” time. Teams are treating it as a scoring phase that must reach 55-60 even when wickets fall.

That makes finishing depth more valuable than ever. RCB’s 250/3 against CSK is a case study: the top order didn’t need to bat till the 18th because the lower-middle order could start at 200 strike rate. When you have that depth, you can take higher-variance options earlier.

The counter-argument is volatility: aggressive powerplays can create collapses. But the early table suggests teams are choosing volatility because it buys them two things: net run rate buffers and less dependence on the toss.

If you’re building a winning template, it looks like this:
- Powerplay: attack one side of the ground; accept 1-2 wickets.
- Middle: protect the set batter; hit spin straight.
- Death: keep one hitter unused until over 16.

Expect the teams with the deepest 7-8 batting to separate by mid-season.
`,
    relatedPlayerIds: [1, 16, 29, 10],
  },
  {
    id: 8,
    slug: "ipl-venues-eden-vs-delhi-run-scoring",
    title: "IPL venues: Eden vs Arun Jaitley \u2014 same run-fest, different captaincy problems",
    subtitle: "Both are high-scoring, but the chase/defend trade-offs differ sharply by phase scoring.",
    category: "analysis",
    author: "CricDNA Insights",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["Venues", "Eden Gardens", "Arun Jaitley", "Tactics"],
    featured: false,
    content: `
Venue analysis is the easiest way to make pre-match decisions less emotional. Compare Eden Gardens and Arun Jaitley Stadium in our dataset and you get two “high-scoring” grounds with different risk profiles.

Eden Gardens (sample 77 matches) has an average first-innings score of 160.2, while Arun Jaitley (sample 23 matches for the Delhi-labeled venue) sits higher at 200.3. But the more important split is in the death overs: Eden’s death RPO is 9.37; Arun Jaitley’s is 11.59. Both are brutal, but Delhi is borderline unbowlable if you miss your wide yorker.

So the practical implication:
- Eden rewards chasing; build a chase plan.
- Delhi rewards batting depth; build a defendable excess.

If you’re a captain choosing between batting and bowling first, your question should be: do I trust my death bowling more than my batting depth? The data says that’s the real toss decision.
`,
    relatedPlayerIds: [],
    chartData: [{"label": "Eden avg 1st inns", "value": 160.2, "color": "#6A1B9A"}, {"label": "Delhi avg 1st inns", "value": 200.3, "color": "#1B5E20"}],
  },
  {
    id: 9,
    slug: "ipl-2026-avoiding-powerplay-collapses",
    title: "Avoiding powerplay collapses: why intent sequencing matters more than technique",
    subtitle: "Collapses happen when roles overlap; aligned tempos create stability even at high scoring rates.",
    category: "analysis",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["Batting", "Powerplay", "Role Clarity", "Risk"],
    featured: false,
    content: `
Early-season collapses are not “bad batting”; they’re often bad intent sequencing. CSK’s chase against RCB is a reminder that if your top order plays three different tempos, you get a collapse that looks like panic.

A better model is tempo alignment:
- One batter attacks the hard-length zone.
- One batter plays the “strike rotation plus one boundary per over” role.
- The third batter is the insurance policy who can still hit 160+ if needed.

When teams lose multiple wickets inside the first three overs, it’s usually because all three batters tried to do the same job: hit over the top against a new ball that is still doing enough.

The coaching takeaway is simple: the best way to avoid collapse is not “play straighter.” It’s “decide the risk windows before the innings starts.”
`,
    relatedPlayerIds: [14, 10, 1],
  },
  {
    id: 10,
    slug: "ipl-2026-season-checkpoint-week-2",
    title: "IPL 2026 season checkpoint: Why April margins decide May pressure",
    subtitle: "Unbeaten starts are useful, but flexible templates and middle-overs wickets decide the finalists.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-06",
    readTime: "6 min",
    tags: ["Season", "Playoffs", "NRR", "Trends"],
    featured: false,
    content: `
A week into IPL 2026, four teams have already created separation: unbeaten starts plus net run rate. The season is still young, but the playoff maths never changes.

Historically, 16 points is the soft qualification line, 18 points is safer. That means a team that starts 0-3 has already spent its margin for error: it must win roughly two out of every three games from here just to get back to the bubble.

But the real battle is the “middle nine” games. This is where squads with deeper bowling rotations and flexible batting orders bank points while others burn energy solving the same problems.

Watch for these indicators over the next two weeks:
- Teams that can win both batting-first and chasing games.
- Teams that take wickets in overs 7-15 (middle-overs control).
- Teams that protect net run rate in losses.

If you want one early prediction: the finalists will be the teams that can win ugly. April is for winning pretty; May is for surviving.
`,
    relatedPlayerIds: [],
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {"type": "matchup", "title": "Tonight: KKR vs PBKS", "value": "Eden Gardens", "description": "Chase-friendly venue; overs 7-15 wickets decide the matchup.", "playerIds": [23, 27], "teamColors": ["#3A225D", "#D71920"]},
  {"type": "stat", "title": "RCB batting peak", "value": "250/3", "description": "RCB\u2019s innings vs CSK showcased finishing depth and phase acceleration.", "teamColors": ["#D71920", "#F7D117"]},
  {"type": "player", "title": "Finisher spotlight", "value": "Tim David 70* (25)", "description": "High-impact death-overs hitting set up RCB\u2019s 43-run cushion.", "playerIds": [16], "teamColors": ["#D71920"]},
];
