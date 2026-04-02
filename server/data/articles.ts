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
    slug: "lsg-vs-dc-match-5-rizvi-70-not-out-chase",
    title: "LSG vs DC: Sameer Rizvi’s 70* scripts a calm chase in Lucknow",
    subtitle: "Delhi hunt down 142 with time to spare; LSG’s 141 all out never quite threatened par at Ekana.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "DC", "match report", "Sameer Rizvi"],
    featured: true,
    content: `Delhi Capitals made the Ekana chase look simpler than it usually is, pulling down a modest target after restricting Lucknow Super Giants to 141 in 18.4 overs. Sameer Rizvi’s unbeaten 70 off 47 was the innings that removed any late-overs drama: he balanced risk with strike-rotation, and only went into boundary mode when LSG’s bowlers missed lengths.

**Why 141 was light at Ekana**

LSG’s innings had two problems: wickets at regular intervals and a powerplay that didn’t generate enough separation. Abdul Samad’s 36 off 25 provided the only sustained counterpunch, but the deeper issue was that LSG never built a partnership that let them attack the 13–17 over window.

On a surface like Lucknow’s, par is not always a big number—but it still needs structure. A competitive Ekana total typically has one batter batting deep and one phase where the boundary rate spikes (often vs pace at the death). LSG got neither. Delhi’s bowlers maintained a hard-length plan into the pitch and forced LSG into low-percentage cross-batted shots.

**DC’s chase: control first, acceleration later**

Rizvi’s innings was shaped by a simple read: take singles whenever LSG offered spread fields, and punish the one ball an over that sat in the slot. The chase never required heroics, but it did require discipline—Ekana can turn a 7.5 RPO chase into a 9.5 RPO problem if you lose two wickets in the middle.

From a CricDNA lens, Delhi’s biggest win was keeping their boundary attempts targeted. Rather than swinging across the line to spinners, they waited for pace to over-correct, hit straight, and kept the asking rate in a narrow band. That’s how you avoid the Ekana trap.

**What this result says about both teams**

For DC, the early season pattern is clear: defendable bowling plans plus a chase template that values ‘balls in hand’ more than explosive starts. For LSG, the batting order needs a clearer role definition—who owns the innings if the top order is two down early, and who provides the final-overs spike?

In April you don’t win the league, but you can certainly lose momentum. DC have banked a low-risk win; LSG have a batting blueprint to fix before the schedule gets harder.`,
    relatedPlayerIds: [4, 30],
    matchId: 5,
    chartData: [
      { label: "LSG total", value: 141, color: "#1e3a8a" },
      { label: "DC chase", value: 145, color: "#2563eb" }
    ],
    dataTable: {
      headers: ["Team", "Score", "Overs"],
      rows: [
        ["LSG", "141 all out", "18.4"],
        ["DC", "145/4", "17.1"]
      ]
    }
  },
  {
    id: 2,
    slug: "lsg-vs-dc-match-5-bowling-plan-ekana",
    title: "LSG vs DC tactical recap: how Delhi’s hard-length plan shrank Ekana",
    subtitle: "A wicket-per-phase blueprint, minimal freebies, and forcing the hit to the long side.",
    category: "analysis",
    author: "CricDNA Insights",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "tactics", "Ekana", "DC", "LSG"],
    content: `Lucknow is one of those IPL venues where the game often hinges on ‘what you don’t give away’. The Ekana square boundaries invite you to aim for the pockets; the pitch invites you to drag length back; and the outfield speed punishes over-pitching. Delhi Capitals executed that equation better than Lucknow Super Giants in Match 5.

**1) Wicket-per-phase beats ‘one big over’**

The easiest way to defend at Ekana is not to chase a collapse with aggressive lines; it is to take one wicket in each phase and keep the scoring ceiling low. Delhi’s plan produced exactly that: early breakthroughs that stopped LSG from launching in the powerplay, and enough middle-overs control to prevent the ‘reset and surge’ partnership.

**2) Hard length, into the pitch**

When batters are unsure whether the ball will skid or hold, the safest shot becomes the safest for the bowler too: the straight-batted push for one. Delhi repeatedly hit a back-of-a-length spot and took the big hits out of play. The result wasn’t a dramatic collapse; it was a slow squeeze.

**3) Make the batter hit to the longer boundary**

A recurring micro-tactic at Ekana is to set the field for the miscued pull and the dragged slog. Bowlers who go wider on a slower pitch often leak; bowlers who go into the batter’s body create top edges. Delhi nudged LSG into exactly that decision tree.

**4) Why LSG couldn’t cash in at the death**

LSG’s finishing problem wasn’t only about execution; it was about the innings not being ‘set up’ for the death. If you reach the 14th over at 85/4, you’re asking hitters to manufacture from ball one, which increases dismissal risk and reduces boundary percentage.

The fix for LSG is structural: one top-four batter has to bat to the 17th over more often, especially in Lucknow, where a par total is built on continuity not fireworks.

**What to watch next**

Delhi’s template—reduce variance, win the small contests—travels well. For LSG, the home advantage only becomes real if they learn to score 10–15 extra without taking 2 extra risks. That’s the Ekana lesson.`,
    relatedPlayerIds: [30, 4],
    matchId: 5
  },
  {
    id: 3,
    slug: "lsg-vs-dc-match-5-key-performers-rizvi",
    title: "Key performers: Sameer Rizvi’s pacing and the ‘no-freebie’ bowling spell",
    subtitle: "A chase innings that kept options open; a bowling effort that made every boundary feel earned.",
    category: "analysis",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "5 min",
    tags: ["IPL 2026", "player analysis", "Sameer Rizvi", "DC"],
    content: `This was not a match of outrageous numbers; it was a match of clean decisions. And that’s often how games are won in Lucknow.

**Rizvi’s innings: a modern chase without the panic button**

Sameer Rizvi’s 70* off 47 was a ‘pacing’ innings—he scored fast enough to keep the required rate flat, but slow enough early to avoid gifting LSG the two-wicket swing that can flip Ekana chases. The most valuable part was not the boundaries; it was the refusal to over-hit spin.

When LSG went to the slower options, Rizvi used the crease, played late, and settled for singles if the ball wasn’t in his arc. When pace returned and the lengths drifted fuller, he hit straight and forced LSG to protect both long-on and long-off—opening up the square gaps again.

**The bowling: not dramatic, just efficient**

Delhi’s bowlers didn’t need a five-for; they needed to avoid the two overs that lose Ekana games: the 5th–6th over (when batters target pace) and the 17th–19th over (when teams try to brute-force a finish). By staying tight, they made LSG earn every boundary.

**The LSG takeaway**

The question for Lucknow is simple: who is the innings anchor when the top order wobbles? Ekana rewards teams that keep one batter set deep and choose their acceleration spots. Until LSG solve that, they’ll keep leaving 15–20 runs on the table.

Delhi, meanwhile, have already shown a repeatable identity: bowling control plus chase clarity. That combination usually ages well in an IPL season.`,
    relatedPlayerIds: [30, 4],
    matchId: 5
  },
  {
    id: 4,
    slug: "kkr-vs-srh-match-6-pitch-report-eden",
    title: "KKR vs SRH pitch report: Eden Gardens and the ‘two-pace’ middle overs",
    subtitle: "Eden’s numbers say chasing is king, but the pitch often turns tactical once the ball gets older.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "5 min",
    tags: ["IPL 2026", "KKR", "SRH", "Eden Gardens", "pitch report"],
    content: `Eden Gardens is one of the IPL’s most misunderstood venues. The headline numbers scream ‘chase ground’—but the deeper read is that Eden is a rhythm venue. If the surface is hard and true, it becomes a batting runway; if it’s slightly dry, the middle overs become a two-pace problem where timing is harder than power.

**What the venue numbers say**

In CricDNA’s venue dataset, Eden Gardens has produced an average first-innings score of 160.2 and an average second-innings score of 147.1, with chasing sides winning 47 of 77 matches (61%). The scoring pattern is also phase-specific: powerplay run rate 7.28, middle overs 7.51, and death overs 9.37. Translation: you can start steadily, but you must own the last five.

**What this means for KKR vs SRH**

KKR and SRH both have power hitters, but their winning paths differ. KKR often prefer using spin to create middle-overs control; SRH’s best nights are when they win the powerplay and keep attacking pace.

At Eden, the batting side that manages the 7–15 over period better usually gets to dictate the death. If the pitch slows even slightly, the ‘hit straight’ option becomes premium, and the team with better running between wickets can add 10–12 runs without boundaries.

**Conditions checklist**

- If there is visible grass and a hard sheen: expect 170+ to be par.
- If the surface looks dry and patchy: 155–165 can be defended with spin and wide yorkers.
- Dew factor: it often tilts the match toward chasing, so a batting-first team should aim to be 10–15 above par.

Eden doesn’t force one template—but it punishes teams that forget the middle overs are a different sport from the last five.`,
    relatedPlayerIds: [23, 3],
    matchId: 6,
    chartData: [
      { label: "Avg 1st inns", value: 160.2, color: "#7c3aed" },
      { label: "Avg 2nd inns", value: 147.1, color: "#a78bfa" },
      { label: "Chase win %", value: 61.0, color: "#22c55e" }
    ]
  },
  {
    id: 5,
    slug: "kkr-vs-srh-match-6-toss-report-eden",
    title: "KKR vs SRH toss report: why captains usually field first at Eden",
    subtitle: "Historical toss data shows a clear lean toward chasing; the key is protecting the death overs.",
    category: "toss-report",
    author: "CricDNA Insights",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "5 min",
    tags: ["IPL 2026", "KKR", "SRH", "toss", "Eden Gardens"],
    content: `If you win the toss at Eden Gardens, the default choice is usually to field first—and the numbers explain why.

**The Eden toss pattern**

CricDNA’s toss dataset for Eden Gardens (77 matches) shows teams choosing to field first 49 times. Those ‘toss-and-field’ sides won 31 matches, a 63.3% win rate. By contrast, teams that batted first after winning the toss won 12 of 28 (42.9%).

This is not purely about dew; it is about information. Chasing teams can calibrate risk once they see whether the pitch is true or two-paced.

**What it means tactically**

- If you field first: you must be excellent at the death (because Eden’s death-overs run rate is high).
- If you bat first: you need a total that defends even if the ball skids on later.

**Decision framework for KKR and SRH**

KKR’s ideal outcome when fielding is to use spin in the middle to create two ‘quiet’ overs and force the batting side into a 10+ RPO finish. SRH’s ideal outcome is to win the powerplay, then use pace variations to take wickets at the back end.

If conditions are dry and there is little dew, batting first becomes more viable—but the captain must still ask: can we defend our worst-case total if the pitch plays better later? At Eden, that worst case arrives more often than you think.

Historically, the toss is a nudge, not a guarantee. But at this venue, it’s a meaningful nudge.`,
    relatedPlayerIds: [23, 3],
    matchId: 6,
    dataTable: {
      headers: ["Toss decision", "Count", "Wins", "Win %"],
      rows: [
        ["Field first", "49", "31", "63.3"],
        ["Bat first", "28", "12", "42.9"],
      ]
    }
  },
  {
    id: 6,
    slug: "kkr-vs-srh-match-6-preview-key-matchups",
    title: "KKR vs SRH match preview: powerplay leverage, Narine’s matchups, and death-overs margins",
    subtitle: "Eden is a chasing ground on average; this game may swing on who wins overs 16–20.",
    category: "match-preview",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "SRH", "match preview", "Eden Gardens"],
    content: `Kolkata Knight Riders vs Sunrisers Hyderabad has become a stylistic contest: KKR want to win games through middle-overs control and spin matchups; SRH want to win through powerplay separation and brute-force death hitting. Eden Gardens, with its chase tilt and high death-overs scoring, is the perfect lab for that clash.

**1) The venue: chase tilt, but death overs decide**

Eden’s historical record is clear: chasing sides have won 61% of matches in CricDNA’s dataset. But the innings pattern is equally important—death overs here run at 9.37 per over on average. That means even a ‘controlled’ bowling innings can unravel if you leak two bad overs at the end.

**2) The key KKR lever: spin matchups**

KKR’s best Eden games come when they make the middle overs feel long. That typically requires one spinner who can bowl to the long side and one who can attack the stumps. If the pitch is even slightly dry, those overs can force SRH’s hitters into horizontal-bat risks.

**3) The SRH lever: powerplay strike rate**

SRH’s ideal plan is to score 55+ in the powerplay without losing more than one wicket. That lets them keep their best hitters for the final five. If they are 40/2 after six, KKR get to dictate matchups.

**A matchup to watch: Rohit vs Narine**

In CricDNA’s head-to-head dataset, Rohit Sharma has scored 143 off 134 balls against Sunil Narine and been dismissed 8 times (SR 106.7). That’s a rare ‘Rohit negative’ matchup and it shapes powerplay risk: if Narine bowls in the first six, Rohit’s boundary options narrow.

**Prediction model (qualitative)**

- If SRH chase: advantage SRH.
- If KKR bat first and get 175+: game becomes 50–50.
- If the pitch is dry and slow: advantage KKR’s spinners.

Eden rewards teams who keep their shape. The team that loses shape in overs 16–20 usually loses the match.`,
    relatedPlayerIds: [13, 23, 28, 3],
    matchId: 6
  },
  {
    id: 7,
    slug: "season-theme-early-ipl-2026-chasing-bias",
    title: "IPL 2026 early trend: why chasing feels safer (and when it backfires)",
    subtitle: "Across venues, captains are leaning into information + dew. The counter is simple: build 10–15 ‘insurance’ runs.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "season trend", "toss", "chasing"],
    content: `Five matches is not a season, but it is enough to see the early strategic preference: captains are treating information as currency. In IPL 2026’s opening week, the default move has been to field first, trust the chase, and back your hitters to solve the target.

**Why chasing is the early comfort choice**

There are three repeatable reasons.

1) **Dew reduces variance**: when the ball skids on and the outfield quickens, timing becomes easier and defensive spin becomes harder.
2) **Targets are simpler than par guesses**: teams are increasingly bad at estimating par on mixed-pace pitches, so they’d rather chase a known number.
3) **The Impact Player era rewards depth**: chasing sides can hold a hitter back, then activate an extra batter when the equation is clear.

**When chasing backfires**

Chasing fails when two conditions are met: the pitch slows more than expected and the bowling side is elite at defending the last five. In those games, the chase becomes a ‘death-overs problem’ where 40 needed off 24 becomes 55 needed off 24 after two quiet overs.

**The counter-strategy for batting first**

Batting first is still winnable, but the objective shifts. You don’t need a perfect 20-over innings; you need to build an ‘insurance’ cushion. The simplest method is to add 10–15 runs without adding 10–15 risks:

- Target the 7th–10th overs with low-risk boundary options (straight hits, hard running).
- Keep one set batter through the 15th over.
- Avoid the double-wicket over that forces new batters to swing immediately.

**What to watch next**

As the tournament moves to venues where the surface grips more, chasing will remain popular—but captains will start to bat first more often if they trust their spin to control the second innings.

Early IPL seasons reward teams with a clear identity. Right now, the clearest identity is simple: chase first, ask questions later.`,
    relatedPlayerIds: [11, 30]
  },
  {
    id: 8,
    slug: "analysis-narine-vs-rohit-history",
    title: "Narine vs Rohit: a rare powerplay matchup that changes KKR’s first-six plan",
    subtitle: "The numbers suggest Narine can be used earlier than usual—if KKR set the field correctly.",
    category: "analysis",
    author: "CricDNA Insights",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "5 min",
    tags: ["IPL 2026", "matchups", "Narine", "Rohit Sharma"],
    content: `Most IPL batter-bowler matchups are noisy; this one isn’t. Over a long sample in CricDNA’s head-to-head dataset, Sunil Narine has dismissed Rohit Sharma 8 times while conceding 143 runs from 134 balls.

That’s not only a strong wicket rate (roughly one dismissal every 16–17 balls), it is also a boundary suppression matchup: Rohit’s strike rate is 106.7, well below his typical powerplay output.

**Why it matters in 2026**

In the current IPL environment, the first six overs are often where games are ‘priced’. If one team scores 55/1 and the other scores 42/2, the rest of the innings is played on different risk curves. A matchup that can remove a top-order batter without hemorrhaging runs is therefore extremely valuable.

**How KKR can operationalise it**

- Bowl Narine inside the powerplay if the pitch is dry or holding.
- Protect long-on and deep midwicket to Rohit’s slog arc.
- Invite the straight hit: if Rohit goes straight early, the mis-hit is in play.

**How MI (or any batting side) counters**

The counter is not to ‘attack’ Narine—it is to reduce his wicket chance. That means playing him like an ODI powerplay: hard singles, minimal cross-batted shots, and taking the boundary only when he over-pitches.

Matchups don’t win games alone, but they shape what captains feel safe doing. If KKR lean into this one, the first six overs could tilt quickly.`,
    relatedPlayerIds: [23, 13]
  },
  {
    id: 9,
    slug: "analysis-venue-eden-death-overs",
    title: "Eden Gardens death overs: why ‘two bad overs’ is the real par equation",
    subtitle: "A venue where the last five can swing 25 runs either way, and captains must protect overs 18 and 20.",
    category: "analysis",
    author: "CricDNA Editorial",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "Eden Gardens", "death overs", "strategy"],
    content: `Eden Gardens is often labelled a high-scoring venue, but the useful way to think about it is ‘high-variance’. CricDNA’s venue data puts Eden’s average death-overs scoring at 9.37 per over—meaning a normal final five is about 47 runs. In practice, that final five is rarely normal.

**The Eden problem: overs 18 and 20**

At many grounds, you can hide one medium-pacer in an over 18. At Eden, that over is often the difference between 165 and 185. Because the ball tends to skid on and the boundaries are hittable, the penalty for missing yorkers is severe.

**How bowling sides protect themselves**

1) **Pre-plan your death roles**: decide who bowls 18 and 20 before the game starts.
2) **Use the wide yorker as a default**: at Eden, straight yorkers can become low full tosses if your release point drifts.
3) **Set fields for mis-hits, not for perfect shots**: deep extra cover and deep midwicket are ‘miscue’ catchers.

**How batting sides exploit it**

Batting sides should treat the 16th over as a launchpad. If you enter the 16th at 115/3, you can choose matchups. If you enter at 95/5, you are forced to attack whoever is bowling.

**A simple equation**

If par at Eden is around 170 on a good pitch, the difference between a ‘good death’ (40 in the last five) and a ‘bad death’ (60 in the last five) is 20 runs. That is effectively the match.

So when you watch KKR vs SRH, don’t only watch the powerplay. Watch overs 16–20 and ask: which team keeps the game to one bad over instead of two? That’s often the winner at Eden.`,
    relatedPlayerIds: [3, 28]
  },
  {
    id: 10,
    slug: "analysis-ekana-par-scores-template",
    title: "Ekana scoring template: how to build a defendable 160 without over-hitting",
    subtitle: "Lucknow rewards phase clarity: win the singles battle in the middle, then cash in at the end.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-02T13:00:00Z",
    readTime: "6 min",
    tags: ["IPL 2026", "Ekana", "tactics", "batting first"],
    content: `Ekana Stadium has a reputation: not always low-scoring, but always unforgiving if you lose shape. Match 5 reinforced that idea—LSG’s 141 was not a disaster total; it was a total without a phase spike.

**Why Ekana totals fail**

Most Ekana failures come from one of two patterns:

- **Over-attack in the middle**: batters try to hit spin over the leg side before they’ve assessed grip and bounce.
- **Under-attack at the death**: teams arrive at the last five with too many wickets down and too few set batters.

**A defendable template**

If you’re batting first at Ekana, a defendable 160 usually looks like this:

- Powerplay: 45–50 for 1 wicket
- Overs 7–15: 60–65 (high singles rate)
- Overs 16–20: 45+ with one set batter

That’s not a rigid plan—it’s an intent map. The key is that your acceleration is ‘earned’ by keeping wickets intact.

**How to manufacture runs without boundaries**

Ekana rewards teams that run hard. Two per over added through singles and twos is 20 runs in 10 overs. That’s the difference between 145 and 165—and it often decides matches here.

**Bowling implications**

If you have 160 at Ekana, your bowlers have a clear script: attack stumps in the powerplay, slow the ball in the middle, and protect the straight boundary late. If you only have 140, every plan becomes riskier.

Match 5 was a reminder: at certain venues, the best way to play ‘modern T20’ is to play smarter, not harder.`,
    relatedPlayerIds: [4, 30]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Matchup to watch (Eden)",
    value: "Rohit vs Narine",
    description: "Head-to-head sample: 143 runs off 134 balls, 8 dismissals for Rohit against Narine; low strike rate for a powerplay batter.",
    playerIds: [13, 23],
    teamColors: ["#6b21a8", "#0ea5e9"]
  },
  {
    type: "stat",
    title: "Venue trend (Eden Gardens)",
    value: "63.3%",
    description: "Teams that field first after winning the toss have won 31 of 49 matches at Eden in the CricDNA toss dataset.",
    teamColors: ["#22c55e", "#a3e635"]
  },
  {
    type: "player",
    title: "Player in focus",
    value: "Sameer Rizvi",
    description: "70* off 47 in Match 5 anchored a low-risk chase; a template innings for Ekana-style conditions.",
    playerIds: [30]
  }
];
