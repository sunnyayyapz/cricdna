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
    slug: "srh-vs-rr-match-21-recap-debut-pace-blows-away-a-top-table-chase",
    title: "SRH vs RR (Match 21) recap: Debut pace blows away a top-table chase",
    subtitle: "Ishan Kishan\u2019s 91 powered 216/6, then Praful Hinge and Sakib Hussain took 8 wickets between them to bowl RR out for 159.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "RR", "Match 21", "Hyderabad"],
    featured: true,
    content: `
Sunrisers Hyderabad’s season needed a statement, and they got one in Match 21: 216/6 and then a full dismantling of a table-topping Rajasthan Royals chase.

### The score that mattered wasn’t 216 — it was the shape of 216
A total of 216/6 is obviously big, but what made it strategically brutal was that SRH didn’t ‘all-in’ early. They still had wickets in hand to hit through the death.

Ishan Kishan’s Ishan Kishan 91 (44) set the tone: boundary density without surrendering the innings. And once the platform existed, SRH’s middle/death-overs hitting ensured the Royals’ bowlers never got a phase where they could relax.

### A debut spell that changed the match in 11 balls
Rajasthan’s chase never got breathing room because SRH’s new-ball execution did the opposite of ‘contain’: it attacked stumps and forced top-order strokes before the surface truly settled.

Debutant Praful Hinge was the catalyst, finishing with Praful Hinge 4/34 & Sakib Hussain 4/24. That’s the match: four wickets up front means the required rate becomes irrelevant — you’re no longer chasing a number, you’re chasing survival.

### Rajasthan’s only way back — and why it still wasn’t enough
To RR’s credit, they found a lifeline through a single partnership and counterpunching in the middle overs, but the chase had already lost too many wickets.

**CricDNA read:** this win was built on one simple trade: SRH spent pace and aggression early to buy the right to defend 216 like a 240.
    `,
    relatedPlayerIds: [28, 9, 7, 18],
    matchId: 21,
    chartData: [{"label": "SRH", "value": 216, "color": "#F57C00"}, {"label": "RR", "value": 159, "color": "#1565C0"}],
    dataTable: {"headers": ["Match 21", "Detail"], "rows": [["Result", "SRH won by 57 runs"], ["SRH", "216/6"], ["RR", "159"], ["PoM", "Praful Hinge"]]},
  },
  {
    id: 2,
    slug: "rr-s-159-chase-collapse-the-danger-of-intent-without-innings-control",
    title: "RR\u2019s 159 chase collapse: the danger of \u201cintent\u201d without innings control",
    subtitle: "On a surface good enough for 216, RR still needed adaptability \u2014 the reset never came after early wickets.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "7 min",
    tags: ["IPL 2026", "RR", "SRH", "chase strategy"],
    featured: false,
    content: `
Rajasthan Royals losing a game isn’t a shock; the manner of the loss is. Being skittled for 159 while chasing 217 is not just a bad chase — it’s a structural warning.

### Collapses are decision-making failures, not pitch failures
SRH scored 216, so the surface clearly offered value for shots. The collapse was decision-making under early seam and then the inability to reset risk once wickets fell.

### The hidden cost: losing the matchups
When you’re 4-5 down early, you can’t choose matchups; matchups choose you. Even a strong middle-order partnership can’t revive the chase if the tail is exposed too soon.

**CricDNA read:** RR didn’t lose because 217 was too much. They lost because they treated a collapse like a normal chase.
    `,
    relatedPlayerIds: [7, 18, 20, 12],
  },
  {
    id: 3,
    slug: "kishan-s-91-and-the-structured-216-what-srh-finally-got-right",
    title: "Kishan\u2019s 91 and the \u201cstructured 216\u201d: what SRH finally got right",
    subtitle: "A captain\u2019s innings that kept wickets in hand and made 216 defendable once the new ball struck.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "Ishan Kishan", "batting phases"],
    featured: false,
    content: `
When SRH put up 216/6, the headline number was loud. The more important bit was how calmly they got there.

### Kishan’s 91 as a phase-winning innings
Ishan Kishan’s Ishan Kishan 91 (44) won phases: powerplay acceleration, middle-overs dot-ball reduction, and a death-overs setup with wickets in hand.

### Why 216 was defendable
Hyderabad can be chase-friendly, but chases still rely on a stable top order. By taking early wickets, SRH turned a chasing venue into a pressure cooker.

**CricDNA read:** this wasn’t a 216 built on chaos. It was a 216 built on structure — and that’s why it survived.
    `,
    relatedPlayerIds: [9, 28],
  },
  {
    id: 4,
    slug: "csk-vs-kkr-match-22-pitch-report-chepauk-tempo-spin-and-a-par-score-that-keeps-rising",
    title: "CSK vs KKR (Match 22) pitch report: Chepauk tempo, spin, and a par-score that keeps rising",
    subtitle: "Chepauk still rewards spin and discipline, but the \u201csafe\u201d first-innings number is higher than its reputation suggests.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "KKR", "Chepauk", "pitch"],
    featured: false,
    content: `
Match 22 at Chepauk is the kind of fixture where the toss can lie to you. The ground is famous for grip and spin, but modern IPL nights increasingly produce 170–190 par scores and late-innings boundary spikes.

### Pitch expectations
CricDNA venue file: total matches 48, average 1st innings 166.0, bat-first win % 64.6, and toss teams field first 29.2% of the time.

Chepauk’s key tactical idea is tempo: teams that go too hard too early often stall in the middle overs, while teams that leave too much for the end risk getting strangled by spin.

**CricDNA call:** if dew is light, bat first and aim 175+. If dew is heavy, chasing becomes viable — but only with wickets in hand at 12 overs.
    `,
    relatedPlayerIds: [10, 23],
  },
  {
    id: 5,
    slug: "csk-vs-kkr-match-22-toss-report-dew-vs-spin-is-the-real-call-at-chepauk",
    title: "CSK vs KKR (Match 22) toss report: dew vs spin is the real call at Chepauk",
    subtitle: "The default \u201cbowl first\u201d instinct can backfire in Chennai if the pitch stays dry and the ball grips.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "6 min",
    tags: ["IPL 2026", "CSK", "KKR", "toss", "Chepauk"],
    featured: false,
    content: `
Chepauk is one of the rare IPL venues where the toss doesn’t automatically dictate a single decision — but it still shapes the game.

### What teams usually choose
CricDNA venue file: total matches 48, average 1st innings 166.0, bat-first win % 64.6, and toss teams field first 29.2% of the time.

Historically, captains like to field first because chasing gives clarity. At Chepauk, that logic collides with an older truth: if the surface dries, batting second can feel like hitting on a different pitch.

**CricDNA call:** the toss choice should be based on dew expectation, not habit.
    `,
    relatedPlayerIds: [10, 23],
  },
  {
    id: 6,
    slug: "csk-vs-kkr-match-22-preview-the-middle-overs-match-hidden-inside-the-rivalry",
    title: "CSK vs KKR (Match 22) preview: the middle-overs match hidden inside the rivalry",
    subtitle: "Chepauk will reward the side that controls overs 7\u201315 \u2014 with spin, strike rotation, and low-error batting.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "KKR", "Match 22", "preview"],
    featured: false,
    content: `
Match 22 is a classic contrast: Chennai’s home conditions and spin control vs Kolkata’s need for a clean batting template.

### A simple matchup lens
If KKR allow CSK to reach the 10-over mark with only one wicket down, Chennai can set up a finishing burst. If KKR strike twice early, Chepauk becomes a ‘spin chase’ where every dot ball grows in value.

### One data matchup to watch
In CricDNA’s batter-vs-bowler table, V Kohli has scored 179 runs off 160 balls vs RA Jadeja at a strike rate of 111.87 with 3 dismissals — a reminder that even elite batters can be managed with the right matchups.

**CricDNA call:** this is a “who plays the middle overs better” match — not a pure hitting contest.
    `,
    relatedPlayerIds: [18, 1, 23],
  },
  {
    id: 7,
    slug: "venue-driven-ipl-why-the-same-team-plays-like-two-different-teams-in-one-season",
    title: "Venue-driven IPL: why the same team plays like two different teams in one season",
    subtitle: "Using CricDNA\u2019s venue file to explain why par scores and phase scoring change match scripts.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "6 min",
    tags: ["IPL 2026", "venues", "strategy", "data"],
    featured: false,
    content: `
A week of IPL 2026 has reinforced a simple truth: venues aren’t just backdrops, they are strategy engines.

### What the venue file says
Across CricDNA’s venue dataset, bat-second wins dominate at some grounds, while others reward batting first. That difference changes captaincy: risk tolerance, bowling changes, even which all-rounder you pick.

### A practical shortcut
Before every match, identify average first-innings score, bat-first win percentage, and death-overs run rate. That triad tells you the match script the ground usually rewards.

**CricDNA takeaway:** smart teams don’t just pick their XI — they pick the match plan that the ground usually rewards.
    `,
    relatedPlayerIds: [2, 6, 12],
  },
  {
    id: 8,
    slug: "early-season-batting-trends-role-clarity-beats-form-in-the-first-20-matches",
    title: "Early-season batting trends: role clarity beats \u201cform\u201d in the first 20 matches",
    subtitle: "Why phases matter more than raw tallies, and how teams can stop building duplicate batting lineups.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "7 min",
    tags: ["IPL 2026", "batting", "phases", "analysis"],
    featured: false,
    content: `
The Orange Cap race is fun, but the deeper story is role clarity. Early-season run tallies are noisy; role execution is more predictive.

### The three batter roles that win IPL seasons
Powerplay ceiling hitter, middle-overs stabilizer, and death-overs finisher. Most teams lose balance by picking duplicates.

**CricDNA takeaway:** the cap races are outputs. Roles are inputs.
    `,
    relatedPlayerIds: [1, 5, 25],
  },
  {
    id: 9,
    slug: "toss-strategy-101-combining-venue-history-with-team-habits-for-better-decisions",
    title: "Toss strategy 101: combining venue history with team habits for better decisions",
    subtitle: "How to use CricDNA toss and venue datasets to remove guesswork from bat/field calls.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "6 min",
    tags: ["IPL 2026", "toss", "strategy"],
    featured: false,
    content: `
The fastest way to lose an IPL season is to treat the toss as trivia. In a league where margins are thin, the toss is a tactical lever.

### What the toss dataset is good for
Combine team toss habits with venue bat-first win rates to get a decision map.

**CricDNA takeaway:** toss + venue tendencies should decide your match plan before ball one.
    `,
    relatedPlayerIds: [11, 30, 2],
  },
  {
    id: 10,
    slug: "phase-discipline-the-repeatable-skill-that-separates-contenders-from-chaos-teams",
    title: "Phase discipline: the repeatable skill that separates contenders from chaos teams",
    subtitle: "A tactical framework to read any match: powerplay structure, middle-overs intent, and death-overs execution.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-14",
    readTime: "7 min",
    tags: ["IPL 2026", "tactics", "phases"],
    featured: false,
    content: `
Most IPL analysis focuses on totals and stars. The season is usually decided by “phase discipline”: how teams manage powerplay risk, middle-overs dot balls, and death overs execution.

### Phase discipline in one sentence
Win one phase hard, don’t lose the other two.

**CricDNA takeaway:** IPL is not 20 overs of chaos — it’s 20 overs of phase decisions.
    `,
    relatedPlayerIds: [2, 6, 17, 19],
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Match 22 at Chepauk",
    value: "CSK vs KKR",
    description: "Middle-overs control will decide this: spin matchup management vs risk-managed strike rotation.",
    playerIds: [10, 23],
    teamColors: ["#F9C74F", "#6A1B9A"],
  },
  {
    type: "player",
    title: "Debut impact (Match 21)",
    value: "Hinge 4/34, Sakib 4/24",
    description: "SRH’s new-ball aggression bought them the right to defend 216 like a 240.",
    playerIds: [28, 9],
  },
  {
    type: "stat",
    title: "Chepauk venue snapshot",
    value: "Avg 1st inns 166.0",
    description: "Use venue tendencies as a pre-toss decision map: par score + bat-first win % + death-overs run rate.",
  },
];