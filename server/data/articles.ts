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
    slug: "gt-vs-kkr-match-25-preview-ahmedabad-narendra-modi-stadium-par-186",
    title: "GT vs KKR (Match 25) preview: Ahmedabad’s par is already high — and that changes every matchup",
    subtitle: "Narendra Modi Stadium’s dataset average first-innings score is 186.6; if KKR start slow, they’ll spend the whole chase paying interest.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "GT", "KKR", "Ahmedabad", "Match 25"],
    featured: true,
    content: `
Tonight’s fixture is Gujarat Titans vs Kolkata Knight Riders (Match 25) at the Narendra Modi Stadium, Ahmedabad.

The venue numbers in CricDNA’s dataset explain why this ground keeps producing “fast” games. Narendra Modi Stadium’s average first-innings score is 186.6 and average second-innings score is 170.1. Those are not normal T20 baselines; they’re a reminder that you can do plenty right and still concede 195.

### The Ahmedabad rule: powerplay damage matters less than middle-overs damage
At some venues, conceding 60 in the powerplay is a crisis. In Ahmedabad, it’s often just the entry price.

The match is more likely to be decided in overs 7–15, where the batting side typically goes from 8–9 rpo to 10+ without needing “death overs” chaos. CricDNA’s venue splits show a middle-overs run rate of 8.55 and a death-overs run rate of 10.75 here.

For GT, that suits a template built around controlled hitting: keep wickets, then take the weak over twice. For KKR, whose tournament has been rough, it’s a tougher puzzle because you can’t rely on “one big over” to catch up later — the required rate stays high even when you’re scoring at 9.

### Key battles
- **Gill’s tempo vs KKR’s middle-overs plans:** If Shubman Gill is able to play his clean 45(32)-type innings, it stabilizes GT’s innings shape and lets the finishers take high-value risks.
- **Narine/Rinku lanes vs GT’s execution:** KKR’s upside typically comes when they win the matchup phase: find a bowler to target and keep hitting that lane.

### Toss approach
Toss data for Narendra Modi Stadium shows a slight historical lean to fielding first, but not a decisive one. Teams that chose to field first after winning the toss have won 48.1% (13/27), while batting first after winning the toss has a 33.3% win rate (2/6).

That suggests captains prefer to know the chase, but the data also says: if you bat first, you must aim above the venue baseline — think 195+.

**CricDNA call:** Ahmedabad is not about “who hits more sixes.” It’s about who keeps their worst five overs from becoming 55 runs.
`,
    relatedPlayerIds: [5, 23, 27],
    chartData: [
      { label: "Ahmedabad avg 1st inns", value: 186.6, color: "#1A237E" },
      { label: "Ahmedabad avg 2nd inns", value: 170.1, color: "#512DA8" }
    ],
    dataTable: {
      headers: ["Narendra Modi Stadium (dataset)", "Value"],
      rows: [
        ["Avg 1st inns", "186.6"],
        ["Avg 2nd inns", "170.1"],
        ["Highest total", "243"],
        ["Middle overs RPO", "8.55"],
        ["Death overs RPO", "10.75"],
        ["Toss: field-first win%", "48.1% (13/27)" ]
      ]
    }
  },
  {
    id: 2,
    slug: "gt-vs-kkr-pitch-report-narendra-modi-stadium-batting-friendly-186",
    title: "GT vs KKR pitch report: Ahmedabad is batting-friendly by default — plan for 190, not 170",
    subtitle: "Venue history says 180 is only ‘par-ish’ here; the safest totals are the ones that force the chase above 10 rpo by over 12.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "pitch report", "GT", "KKR", "Ahmedabad"],
    featured: false,
    content: `
When people call Narendra Modi Stadium a “good batting pitch,” they usually mean it as a vibe. CricDNA’s dataset puts numbers behind that vibe.

Across 33 matches in our venue data, Ahmedabad’s average first-innings score is 186.6 and the average second-innings score is 170.1. The highest total in the dataset is 243, while the lowest is 89 — which is the other truth about high-scoring grounds: when a top order fails, collapses can look ugly.

### What the surface typically rewards
This ground tends to reward:
- clean power-hitting once batters are set,
- teams that keep wickets for overs 16–20,
- bowling plans that protect the “free” overs.

### The par-score framing
At venues where the average first-innings score is ~150–160, a 175 can feel imposing. At Ahmedabad, 175 can be chaseable without the chasing side playing exceptionally well.

If you bat first, your goal should be to create a chase equation that can’t be solved by “two good overs.” Practically, that usually means 195+ and at least one wicket taken in the first 3–4 overs to slow the chase’s easiest phase.

### Bowling to survive
Because the middle-overs run rate is already 8.55 here (with 10.75 at the death), bowlers need plans that minimize boundary length. That often means:
- hard lengths into the pitch (rather than full),
- wide yorker lanes at the death,
- using your best matchups early rather than saving everything for the 19th.

**CricDNA call:** this pitch doesn’t give you a free 180. It asks you to defend your worst overs. If you lose two overs for 40, you’re chasing the game.
`,
    relatedPlayerIds: [5, 12, 23],
    chartData: [
      { label: "Powerplay RPO", value: 8.46, color: "#1976D2" },
      { label: "Middle RPO", value: 8.55, color: "#FB8C00" },
      { label: "Death RPO", value: 10.75, color: "#D32F2F" }
    ],
    dataTable: {
      headers: ["Ahmedabad pitch context", "Number"],
      rows: [
        ["Matches", "33"],
        ["Avg 1st inns", "186.6"],
        ["Avg 2nd inns", "170.1"],
        ["Highest total", "243"],
        ["Lowest total", "89" ]
      ]
    }
  },
  {
    id: 3,
    slug: "gt-vs-kkr-toss-report-ahmedabad-why-field-first-isnt-a-lock",
    title: "GT vs KKR toss report: Ahmedabad isn’t a ‘must-chase’ venue — it’s a ‘must-bowl-well’ venue",
    subtitle: "Teams overwhelmingly choose to field first here, but the win-rate edge is modest. The bigger lever is limiting the 10.75 death-overs run rate.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "toss report", "GT", "KKR", "Ahmedabad"],
    featured: false,
    content: `
If you look at toss choices in Ahmedabad, captains clearly have a preference: they usually field first. CricDNA’s venue data lists a toss_field_pct of 81.8% at Narendra Modi Stadium.

But preference isn’t the same as advantage.

### What the toss data says
In CricDNA’s toss dataset for Narendra Modi Stadium (33 matches), teams that chose to field first after winning the toss won 48.1% (13/27). Teams that batted first after winning the toss won 33.3% (2/6).

That’s not a huge “chasing edge.” It’s more a signal that teams feel safer chasing because they can set a clearer batting plan.

### What actually decides outcomes here
The venue’s run-rate splits are the real story:
- powerplay RPO: 8.46
- middle-overs RPO: 8.55
- death-overs RPO: 10.75

When the baseline is already high, bowling is less about taking 3 wickets early and more about preventing the runaway over. If you can keep the death overs closer to 9.5 instead of 11+, you’ll win matches at this ground.

### The recommended call for Match 25
If you win the toss:
- **Field first** if you trust your death bowling execution and want scoreboard clarity.
- **Bat first** if you have a top order built to go 60+ in the powerplay and still keep 7 wickets for the last five.

**CricDNA call:** the toss is a comfort choice. The game is decided by who bowls fewer overs at 12+.
`,
    relatedPlayerIds: [2, 12],
    chartData: [
      { label: "Toss: field-first win%", value: 48.1, color: "#43A047" },
      { label: "Toss: bat-first win%", value: 33.3, color: "#F4511E" }
    ]
  },
  {
    id: 4,
    slug: "rcb-vs-dc-match-26-preview-chinnaswamy-chase-bias-56",
    title: "RCB vs DC (Match 26) preview: Chinnaswamy makes you brave — and it rewards the team with more batting layers",
    subtitle: "Chasing has historically been strong here and the toss data leans field-first (56.1% win rate), but afternoon conditions can flip the instinct.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "RCB", "DC", "Bengaluru", "Match 26"],
    featured: false,
    content: `
Royal Challengers Bengaluru vs Delhi Capitals (Match 26) is scheduled at M. Chinnaswamy Stadium, Bengaluru on April 18 (3:30 PM IST).

Chinnaswamy is the league’s ultimate “pressure venue”: small boundaries, fast outfield, and a scoring pace that turns normal overs into bad overs.

### What the venue data says
CricDNA’s dataset for M Chinnaswamy Stadium (65 matches) has:
- average first-innings score: 168.1
- highest total: 263
- bat-second wins: 37 vs bat-first wins: 26

That’s the venue in one snapshot: it’s possible to defend, but you’d rather chase.

### Why the matchup is fascinating
RCB arrive with a top order capable of changing the match inside eight overs. DC arrive with a bowling group that can control middle overs if their best bowlers hit length and deny “slot” balls.

The game often becomes: can DC force RCB into a 35/2 powerplay? Or will RCB get 55/0 and turn the rest into a batting drill?

### Toss approach
Toss data for Chinnaswamy shows a strong preference to field first (57 of 65 toss winners chose to field), and those teams won 56.1% (32/57). Bat-first after winning the toss has a 37.5% win rate (3/8).

So, the default is still “field first” — but Match 26 is an afternoon start. Heat, dryness, and reduced dew can make setting a total viable.

**CricDNA call:** Chinnaswamy doesn’t forgive timid batting. The team with deeper batting (more hitters through No.7) will hold the late-innings advantage.
`,
    relatedPlayerIds: [1, 16, 22, 30, 26],
    chartData: [
      { label: "Bat 1st wins", value: 26, color: "#D32F2F" },
      { label: "Bat 2nd wins", value: 37, color: "#1E88E5" }
    ],
    dataTable: {
      headers: ["Chinnaswamy (dataset)", "Number"],
      rows: [
        ["Matches", "65"],
        ["Avg 1st inns", "168.1"],
        ["Highest total", "263"],
        ["Toss: field-first win%", "56.1% (32/57)" ]
      ]
    }
  },
  {
    id: 5,
    slug: "rcb-vs-dc-pitch-report-chinnaswamy-168-263-boundaries",
    title: "RCB vs DC pitch report: why 168 is the average, but 200 is the mindset at Chinnaswamy",
    subtitle: "If you’re batting first, your real job is to protect yourself from one 6-over slowdown — because you can’t buy back those runs later.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "pitch report", "RCB", "DC", "Bengaluru"],
    featured: false,
    content: `
Chinnaswamy’s reputation is obvious: it’s a batting ground. But the strategic reason it’s hard is more specific: it reduces the value of “containment” bowling.

CricDNA’s venue dataset for M Chinnaswamy Stadium (65 matches) lists an average first-innings score of 168.1, with a highest total of 263. Those numbers make two things true at once:
1) you *can* win with 175 if you bowl exceptionally well,
2) you should *plan* as if 200 will be required.

### How the pitch shapes innings
The run-rate splits tell you where the innings accelerates:
- powerplay RPO: 7.07
- middle-overs RPO: 8.08
- death-overs RPO: 10.59

That last number is the key. If you keep wickets, the death overs are a high-value phase. The teams that struggle here are the ones that reach over 15 with only 4 wickets in hand — because they can’t fully cash in.

### Bowling notes
At Chinnaswamy, bowlers should optimize for:
- denying straight boundaries (use wide lines),
- mixing pace (avoid predictable 135–140 slot lengths),
- taking at least one powerplay wicket to slow the easiest overs.

**CricDNA call:** batting first at Chinnaswamy isn’t about “starting fast.” It’s about ensuring you have the right batters still in at over 16.
`,
    relatedPlayerIds: [2, 26, 30],
    chartData: [
      { label: "Powerplay RPO", value: 7.07, color: "#1976D2" },
      { label: "Middle RPO", value: 8.08, color: "#FB8C00" },
      { label: "Death RPO", value: 10.59, color: "#D32F2F" }
    ],
    dataTable: {
      headers: ["Chinnaswamy pitch context", "Number"],
      rows: [
        ["Avg 1st inns", "168.1"],
        ["Highest total", "263"],
        ["Bat 2nd wins", "37"],
        ["Bat 1st wins", "26" ]
      ]
    }
  },
  {
    id: 6,
    slug: "rcb-vs-dc-toss-report-chinnaswamy-field-first-56-heat",
    title: "RCB vs DC toss report: Chinnaswamy’s numbers scream ‘field first’, but day games need context",
    subtitle: "Field-first after winning the toss wins 56.1% here; still, afternoon heat can make batting-first the ‘least bad’ option.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "toss report", "RCB", "DC", "Bengaluru"],
    featured: false,
    content: `
Chinnaswamy toss decisions are usually simple: win the toss, field first.

CricDNA’s toss dataset for M Chinnaswamy Stadium (65 matches) shows that teams choosing to field first after winning the toss have won 56.1% (32/57). Teams batting first after winning the toss have won 37.5% (3/8).

### Why captains still prefer chasing
At high-scoring venues, chasing does three things:
1) removes the need to guess par,
2) lets you plan your risk windows,
3) makes it easier to keep wickets for the death overs.

### The day-game complication
Match 26 is a 3:30 PM start. Afternoon conditions usually mean:
- less dew,
- potentially drier surface as the game goes on,
- more physical fatigue for the side fielding first.

That doesn’t erase the historical preference — it just means you should factor team makeup. If you have quality spinners and your batting is built to set 200+, batting first can be viable.

**CricDNA call:** if you can’t defend at least 190, you should chase. If you can set 205 with depth, batting first becomes an option.
`,
    relatedPlayerIds: [30, 26],
    chartData: [
      { label: "Field first win%", value: 56.1, color: "#43A047" },
      { label: "Bat first win%", value: 37.5, color: "#F4511E" }
    ]
  },
  {
    id: 7,
    slug: "analysis-gill-vs-kohli-two-anchors-different-venues",
    title: "Analysis: Gill and Kohli are both anchors — but Ahmedabad and Bengaluru demand different versions of them",
    subtitle: "At a 186.6 venue, ‘anchor’ means avoiding the 20-ball slowdown; at Chinnaswamy, it means keeping the death-overs ceiling intact.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "batting", "Gill", "Kohli", "tactics"],
    featured: false,
    content: `
The term “anchor” is often used as criticism in T20s, but it’s really just a role: the batter who keeps the innings structurally stable. Today’s two big fixtures put that role under a microscope.

### Ahmedabad: an anchor can’t be slow
Narendra Modi Stadium’s venue baseline is already high (186.6 average first-innings score). That means the cost of a 12-ball quiet patch is huge — because the other team will score at 9+ anyway.

So for Gujarat, Shubman Gill’s best anchor version is “high tempo stability”: 45 off 32, 55 off 40 — innings that protect wickets without dropping the run rate below par.

### Bengaluru: an anchor can’t waste the death
Chinnaswamy’s average first-innings score is 168.1, but it comes with a death-overs run rate of 10.59. That means your best value comes late if you have hitters in.

For RCB, Virat Kohli’s best anchor version is “death-over access”: rotate, keep the big hitters alive, and ensure you have 6–7 wickets by over 15.

### Why these roles win matches
Anchors are not about aesthetics. They are about making sure the innings reaches the final phase with the right resources.

**CricDNA call:** anchor value is venue-dependent. The same 40(32) can be good in one ground and match-losing in another.
`,
    relatedPlayerIds: [5, 1],
    dataTable: {
      headers: ["Venue", "What ‘good anchoring’ means"],
      rows: [
        ["Ahmedabad (avg 1st inns 186.6)", "High-tempo stability; avoid long slow patches"],
        ["Chinnaswamy (death RPO 10.59)", "Keep wickets for late overs; maximize ceiling" ]
      ]
    }
  },
  {
    id: 8,
    slug: "analysis-why-kkrs-margin-is-thinner-at-186-venues",
    title: "Analysis: why KKR’s margin is thinner at 186 venues than at 156 venues",
    subtitle: "High-baseline grounds reduce the value of ‘one great spell’. If you leak two overs, you’ll chase the game all night.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "GT", "venue analysis", "Ahmedabad"],
    featured: false,
    content: `
Not all batting-friendly venues are the same. There’s a difference between a 160-par ground and a 186-par ground.

Narendra Modi Stadium’s average first-innings score is 186.6. That’s a high baseline. The implication is simple: your “average over” is already expensive.

### The risk for KKR
KKR’s best path to upset results is often creating wickets in clusters and then controlling the middle. But at a venue where the middle-overs run rate is 8.55 by default, control has to be elite — merely “good” won’t slow the game enough.

And because the death-overs run rate is 10.75, any slip at the end can be fatal. Even if KKR bowl a perfect 3-over spell, one loose over for 18 can erase it.

### How KKR can still win
To win in Ahmedabad, the playbook usually includes:
- at least one wicket in the first 3 overs,
- forcing the opposition into “two-pace” hitting (harder than it sounds here),
- keeping the death overs under 33 runs.

**CricDNA call:** at 186 venues, your margin for error is thin. The match is decided by your worst overs, not your best ones.
`,
    relatedPlayerIds: [23, 12, 5],
    chartData: [
      { label: "Avg 1st inns (Ahmedabad)", value: 186.6, color: "#512DA8" },
      { label: "Avg 1st inns (Chinnaswamy)", value: 168.1, color: "#D32F2F" }
    ]
  },
  {
    id: 9,
    slug: "analysis-dc-bowling-plan-chinnaswamy-wide-lines",
    title: "Analysis: DC’s best Chinnaswamy plan is ‘wide, hard, and early wickets’",
    subtitle: "With chasing historically strong here, DC’s leverage is powerplay disruption — otherwise the death overs become too expensive.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "DC", "RCB", "bowling tactics", "Bengaluru"],
    featured: false,
    content: `
A Chinnaswamy defense starts with a painful truth: containment bowling is rarely enough. The venue’s death-overs run rate in CricDNA’s dataset is 10.59. If RCB have wickets, they will cash in.

So Delhi’s plan has to be proactive.

### 1) Take a wicket early
Chasing has historically been strong here (37 bat-second wins vs 26 batting-first wins). If RCB are chasing and get an uncomplicated start, the chase becomes a calculation rather than a contest.

An early wicket doesn’t just remove a batter; it changes RCB’s intent tempo for 2–3 overs.

### 2) Bowl wide more often than feels comfortable
At small grounds, straight-line bowling gets punished. Wide lines (especially to big hitters) reduce the “easy” swing path.

### 3) Protect the death overs from becoming 45
Because the death-overs baseline is 10.59 rpo, the difference between “fine” and “lost” is often two deliveries. DC need their best execution bowler to own one late over.

**CricDNA call:** at Chinnaswamy, the only safe plan is the one that creates discomfort in the first six.
`,
    relatedPlayerIds: [22, 26, 30],
    dataTable: {
      headers: ["DC priorities", "Why"],
      rows: [
        ["Powerplay wicket", "Slows chase tempo; changes batting intent"],
        ["Wide lines", "Reduces straight boundary path"],
        ["Death execution", "Stops 45+ finish at 10.59 baseline" ]
      ]
    }
  },
  {
    id: 10,
    slug: "rankings-watch-venue-extremes-ahmedabad-chinnaswamy",
    title: "Rankings watch: the teams that handle venue extremes climb fastest",
    subtitle: "Ahmedabad’s 186.6 baseline and Chinnaswamy’s chasing edge reward adaptability. The best sides win ugly at slow venues and still win shootouts.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "rankings", "venue analysis", "GT", "RCB"],
    featured: false,
    content: `
Points tables change weekly, but “venue adaptability” shows up early.

### Why extremes matter
Some grounds ask you to win 155 games. Others ask you to win 205 games. The teams that can’t shift gears become inconsistent — and inconsistency is how you miss playoffs.

Ahmedabad is a high-baseline venue in CricDNA’s dataset (186.6 average first-innings score). Chinnaswamy is a high-variance chasing venue (37 bat-second wins vs 26 batting-first wins).

If a team can win at both types of grounds, they usually have two things:
- batting depth (multiple ways to score),
- bowling plans that change by venue.

### What to watch in the next week
- Teams that keep their worst overs under control at Ahmedabad will steal close games.
- Teams that manage wickets smartly at Chinnaswamy will win more chases than they lose.

**CricDNA call:** adaptability is a standings edge. It doesn’t look dramatic in one match, but it wins you two extra games across a season.
`,
    relatedPlayerIds: [5, 1],
    chartData: [
      { label: "Ahmedabad avg 1st inns", value: 186.6, color: "#512DA8" },
      { label: "Chinnaswamy avg 1st inns", value: 168.1, color: "#D32F2F" }
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Venue baseline: Ahmedabad",
    value: "186.6",
    description: "Narendra Modi Stadium’s dataset average first-innings score is 186.6 (33 matches), with a 10.75 death-overs run rate — a true high-baseline venue.",
    teamColors: ["#512DA8", "#1A237E"]
  },
  {
    type: "stat",
    title: "Chinnaswamy toss lean",
    value: "56.1%",
    description: "At M Chinnaswamy Stadium, teams choosing to field first after winning the toss have won 56.1% (32/57) in CricDNA’s dataset.",
    teamColors: ["#1E88E5", "#D32F2F"]
  },
  {
    type: "player",
    title: "Anchor lens",
    value: "Gill vs Kohli",
    description: "Same role, different demands: Ahmedabad needs high-tempo stability; Bengaluru needs wicket-preservation to unlock the 10.59 death-overs baseline.",
    playerIds: [5, 1]
  }
];
