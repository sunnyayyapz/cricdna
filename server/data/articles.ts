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
    slug: "pbks-vs-srh-match-17-recap-223-chase-iyer-59-arya-51",
    title: "PBKS vs SRH (Match 17) recap: the chase that proved 219 wasn’t safe in New Chandigarh",
    subtitle: "SRH smashed 219/6, but PBKS hunted it down with 223/4 in 18.5 overs — an innings built on powerplay damage and a captain’s finishing surge.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "7 min",
    tags: ["IPL 2026", "PBKS", "SRH", "Match 17", "New Chandigarh"],
    featured: true,
    content: `
Sunrisers Hyderabad put up 219/6 and still lost. Punjab Kings chased 223/4 in 18.5 overs and won by 6 wickets — the kind of result that doesn’t just move points, it changes what teams call “par”.

### SRH’s innings: 120/0 after 8 overs, then the brakes
The match had a clear split. SRH were 120/0 after 8 overs — a statement start driven by Abhishek Sharma (74 off 27) and Travis Head in a brutal opening stand. The ball was hard, the pitch true, and SRH’s intent was obvious: win the boundary count early and make the chase psychologically heavy.

But from that peak, SRH scored 99/6 in the last 12 overs. That isn’t a collapse in the classic sense — they still got to 219 — but it’s a loss of control. Once the openers fell, the innings shifted from “free hit” batting to innings management. Punjab’s bowlers didn’t need to be perfect; they just needed to stop the compounding. Even 1–2 boundary-less overs in the middle are expensive when you’ve started at 15 rpo, because the innings no longer has room to *raise* the ceiling.

### PBKS’s chase: win the powerplay, then keep the match in one over’s reach
Punjab’s chase was the mirror image: early damage, then calculated finishing. Priyansh Arya’s 51 off 18 and Prabhsimran’s support created a runway. The crucial tactical outcome of a 50 in 16 balls is not just runs — it’s that the required rate stops being a constraint.

When SRH briefly hit back with a triple-strike (Shivang Kumar taking 3 wickets), the game should have swung. Instead, it revealed the chase’s real axis: Shreyas Iyer. His 59 off 26 was a captain’s innings because it arrived *after* the wobble and turned the chase back into a clean equation. The Harshal Patel over that went for multiple boundaries and sixes was effectively the match: one bad over at 11.5 rpo required rate becomes unrecoverable.

### What this means for both teams
For SRH, the lesson is uncomfortable but fixable: their best batting is so explosive that they can mistake “a good start” for “a controlled innings”. If you’re 120/0 after 8, the goal should be 240 — not 219 with late wickets.

For PBKS, the lesson is identity-shaping: they can chase. Not just on small totals, but in games where the opposition puts up a huge number and still feels unsafe.

This match also reinforces something CricDNA keeps coming back to: in high scoring games, phase dominance beats highlight shots. SRH owned the first 8 overs; PBKS owned the chase’s structure.
`,
    relatedPlayerIds: [28, 9],
    matchId: 17,
    chartData: [
      { label: "SRH", value: 219, color: "#FF6F00" },
      { label: "PBKS", value: 223, color: "#D32F2F" }
    ],
    dataTable: {
      headers: ["Match 17", "Detail"],
      rows: [
        ["Result", "PBKS won by 6 wickets"],
        ["SRH", "219/6 (20)"],
        ["PBKS", "223/4 (18.5)"],
        ["SRH highlight", "Abhishek Sharma 74 (27)"],
        ["PBKS highlight", "Shreyas Iyer 59 (26), Priyansh Arya 51 (18)"],
        ["Key phase", "SRH 120/0 after 8 overs"],
      ]
    }
  },
  {
    id: 2,
    slug: "csk-vs-dc-match-18-recap-samson-115-overton-4-18",
    title: "CSK vs DC (Match 18) recap: Samson’s 115* and Overton’s 4/18 delivered CSK’s season reset",
    subtitle: "CSK posted 212/2 and defended it by 23; the innings had a 113-run opening platform and a 37-run late burst.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "DC", "Match 18", "Chennai"],
    featured: false,
    content: `
Chennai Super Kings finally found their first win of IPL 2026 — and they did it in the cleanest way possible at Chepauk: set a big total, then take wickets through the chase. CSK made 212/2, DC replied with 189 all out, and CSK won by 23 runs.

### The innings shape: platform, then acceleration
Chepauk isn’t always a 210 ground, which is why CSK’s structure matters. The opening partnership was the difference-maker: 113 runs in 67 balls set up an innings where risk could be delayed rather than forced. The second punch came late: CSK added 37 off the last 15 balls to move from “good” to “too many”.

Sanju Samson’s unbeaten 115 off 56 was the innings of the match because it combined two hard skills that rarely coexist at Chepauk — boundary power and dismissal avoidance. The unbeaten part is underrated: every wicket avoided is an over of “no settling-in tax” for the next batter.

### DC’s chase: too much left for the last five
DC’s chase was never dead, but it was never under full control either. Chasing 213, you need either a powerplay surge or a middle-overs overtake. DC did neither consistently enough, and the run rate sat in that dangerous band where one quiet over turns into a required boundary-per-over endgame.

The decisive moment was CSK’s death bowling plus wicket-taking. Jamie Overton’s 4/18 is a match-ending spell on any surface, but especially on a ground where “just give singles” can still win you overs. Anshul Kamboj’s 3/35 added the second layer: DC couldn’t line up one bowler to attack because wickets kept interrupting set batters.

### What this signals going forward
For CSK, this win is more than points. It is a tactical reset: batting depth used to reach 210+, and a bowling plan that gets wickets at the death rather than merely defending length.

For DC, the lesson is the one chasing teams hate: 213 isn’t lost by one bad over; it’s lost by 8–10 balls where you don’t find a boundary while the target keeps moving away.
`,
    relatedPlayerIds: [14, 20],
    matchId: 18,
    chartData: [
      { label: "CSK", value: 212, color: "#FFB300" },
      { label: "DC", value: 189, color: "#1976D2" }
    ],
    dataTable: {
      headers: ["Match 18", "Detail"],
      rows: [
        ["Result", "CSK won by 23 runs"],
        ["CSK", "212/2 (20)"],
        ["DC", "189 all out"],
        ["CSK highlight", "Sanju Samson 115* (56)"],
        ["Bowling highlight", "Jamie Overton 4/18"],
        ["Key stand", "113-run opening partnership"],
      ]
    }
  },
  {
    id: 3,
    slug: "match-17-analysis-srh-120-0-after-8-why-219-still-lost",
    title: "Match 17 tactical takeaway: how do you score 219 and still lose?",
    subtitle: "SRH’s 120/0 after 8 overs created a 240 ceiling, but the last 12 overs produced only 99/6.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "PBKS", "Match 17", "Strategy"],
    featured: false,
    content: `
In T20, “219 should win” is a slogan, not a law. Match 17 is a useful lesson in innings distribution: scoring fast early is only valuable if you protect the innings from giving runs back later.

SRH were 120/0 after 8 overs. That phase implies a final total in the 235–250 range if you simply avoid a collapse. The last 12 overs, however, brought 99 runs and 6 wickets. The run rate didn’t just dip — the wicket loss removed the ability to return to 12–14 rpo at the death.

### Why the dip matters
When you begin at 15 rpo, the opposition’s goal becomes simple: buy time. If they can string together even two “8-run overs” while taking a wicket, they’ve changed the innings state. That’s because boundaries are not additive; they are *compounding*. The team with set batters and the freedom to take risks at the death tends to finish stronger.

### The chase exposes the real problem: one over decides the margin
Punjab’s chase shows why SRH needed more than 219. Once PBKS started quickly, the chase’s only true danger window was a cluster of wickets. SRH did get it — Shivang Kumar’s burst. But then one expensive Harshal Patel over, where Shreyas Iyer hit multiple sixes and boundaries, erased the chaos.

That’s the core of high-scoring games: you can’t “defend” 219 by being slightly better; you must force the chase to run through multiple high-risk overs. SRH created only one such over.

### What SRH can adjust
A simple adjustment is to value “batting time” after an explosive start. If you’re 120/0 after 8, you don’t need extra risk until overs 16–20. Preserve wickets, rotate, and cash in later. In other words: don’t turn an advantage into a coin flip.

Match 17 is going to be quoted for the runs. Coaches will use it for the wickets.
`,
    relatedPlayerIds: [28, 9],
    matchId: 17,
    chartData: [
      { label: "SRH after 8 overs", value: 120, color: "#FF6F00" },
      { label: "SRH runs overs 9-20", value: 99, color: "#90A4AE" }
    ]
  },
  {
    id: 4,
    slug: "match-18-analysis-chepauk-why-212-is-a-big-total",
    title: "Match 18 tactical takeaway: at Chepauk, 212 is not just big — it changes the chase map",
    subtitle: "Venue history says bat-first is rewarded (64.6% wins) and death scoring is lower (9.48 rpo). 212 pushes the chase beyond the usual finish line.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "CSK", "DC", "Chepauk", "Venue stats"],
    featured: false,
    content: `
Chepauk has a reputation: spin, control, and totals that “feel defendable”. CricDNA’s venue profile backs that up. MA Chidambaram Stadium (Chepauk) has an average first-innings score of 166.0, a bat-first win percentage of 64.6%, and a death-overs scoring rate of 9.48 rpo.

Those numbers matter because they define the chase map. On a 10.5–11 rpo death ground, you can always tell yourself “we’ll get 55 off 30.” At Chepauk, the typical last-five pace is lower, which means the chase needs to be in control earlier.

### Why 212 is a structural total
CSK’s 212/2 didn’t just exceed the venue average — it pushed DC into a chase that required above-normal scoring in every phase. If Chepauk’s long-run powerplay run rate is 7.44 rpo and middle overs 7.56, the baseline chase rhythm is around 150–160 through 20 overs. To reach 213, you need to add roughly 50 runs of “above average” production.

That’s only possible if you keep wickets and hit boundary spikes. DC couldn’t maintain those spikes without losing set batters, and Overton’s 4/18 ensured the chase kept resetting.

### The broader takeaway
This match is a reminder that venue context still matters in a high-scoring era. A 212 total at Wankhede is “big but chaseable.” At Chepauk, it becomes “one mistake too many.”

For teams playing in Chennai, the playbook remains consistent: bat first when you can, and aim above 175 — because anything above 200 becomes a genuinely rare chase shape at this ground.
`,
    relatedPlayerIds: [18, 26],
    matchId: 18,
    chartData: [
      { label: "Chepauk avg 1st inns", value: 166.0, color: "#546E7A" },
      { label: "Chepauk bat-first win %", value: 64.6, color: "#42A5F5" },
      { label: "Chepauk death rpo", value: 9.48, color: "#26A69A" }
    ]
  },
  {
    id: 5,
    slug: "lsg-vs-gt-match-19-preview-ekana-par-180",
    title: "LSG vs GT (Match 19) preview: Ekana’s chase bias makes wickets in hand the real advantage",
    subtitle: "Ekana’s venue profile is 175.4 first-innings average with a 72.7% toss-field preference — a ground where clarity often beats guesswork.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "GT", "Match 19", "Lucknow"],
    featured: false,
    content: `
Match 19 is a classic “control vs chaos” fixture: Lucknow Super Giants vs Gujarat Titans at Ekana Stadium. The venue profile is unusually clear for IPL: average first-innings score 175.4, average second-innings score 166.0, and a massive toss-field percentage of 72.7%.

That last number tells you how captains think. They back themselves to chase with information — knowing what the pitch is doing and what the par is on the day.

### What par looks like here
A working par score is 180. It’s slightly above the venue average, and it reflects modern batting depth. Ekana isn’t a minefield, but it can be two-paced enough that a 160 chase becomes difficult if you lose wickets.

### Key matchup logic
- **LSG batting:** the story is about order and role clarity. Rishabh Pant and Nicholas Pooran are the “ceiling” batters — but Ekana often asks you to build a base first.
- **GT bowling:** Rashid Khan’s overs in the middle are the natural choke point. If he can force dots without being hit out of the attack, the chase becomes a problem.

### Toss recommendation
Venue history makes the recommendation simple: field first. If you bowl well and keep LSG to 170–175, the chase tends to stay in your control. If you bat first, you need to avoid the trap total.

Ekana’s hidden rule is this: the team with six wickets at the 15th over usually has access to the 10.12 death-overs rpo ceiling. Lose wickets early, and the same ceiling disappears.
`,
    relatedPlayerIds: [4, 5, 12],
    matchId: 19,
    chartData: [
      { label: "Avg 1st inns", value: 175.4, color: "#546E7A" },
      { label: "Avg 2nd inns", value: 166.0, color: "#90A4AE" },
      { label: "Toss field %", value: 72.7, color: "#42A5F5" }
    ]
  },
  {
    id: 6,
    slug: "mi-vs-rcb-match-20-preview-wankhede-high-scoring",
    title: "MI vs RCB (Match 20) preview: at Wankhede, you don’t defend totals — you defend wickets",
    subtitle: "Wankhede’s venue average is 166, but the real feature is the 9.95 death-overs rpo: if hitters are set, the last five overs are a runway.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "MI", "RCB", "Match 20", "Wankhede"],
    featured: false,
    content: `
Match 20 is a Sunday night blockbuster: Mumbai Indians vs Royal Challengers Bengaluru at Wankhede Stadium.

The ground’s CricDNA profile explains why captains love chasing here. Wankhede has an average first-innings score of 166.0, but more importantly a death-overs scoring rate of 9.95 rpo and a toss-field percentage close to 70%. That combination means one thing: teams believe they can finish.

### What kind of game should we expect?
If you’re batting first, 185 should be the minimum ambition, and 200 is the safe zone. That’s not because 166 is low; it’s because modern chases at Wankhede are decided by how many wickets the chasing side keeps for the last five overs.

### MI’s path to a win
MI’s best blueprint is simple: win the powerplay with either bat or ball. If Rohit and the top order can take the first six overs above the venue’s 7.1 powerplay rpo baseline, MI can set up a total that forces RCB to take risks early.

### RCB’s path to a win
RCB are built for Wankhede: top-order stability plus multiple finishers. If Virat Kohli gives them a platform, they can access the death overs scoring ceiling without needing miracles.

### Toss recommendation
Field first. The data says captains prefer it, and the ground’s late-overs scoring profile makes the chase the more predictable path.
`,
    relatedPlayerIds: [13, 1, 3, 2],
    matchId: 20,
    chartData: [
      { label: "Wankhede avg 1st inns", value: 166.0, color: "#546E7A" },
      { label: "Wankhede death rpo", value: 9.95, color: "#26A69A" },
      { label: "Wankhede toss-field %", value: 69.9, color: "#42A5F5" }
    ]
  },
  {
    id: 7,
    slug: "pitch-report-lsg-vs-gt-ekana-red-black-soil",
    title: "LSG vs GT pitch report: Ekana’s red-black soil mix and why 160 can feel like 185",
    subtitle: "Ekana has a 175.4 average first innings, but the middle overs are often where ‘par’ is decided.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "GT", "Pitch report", "Lucknow"],
    featured: false,
    content: `
Ekana Stadium is one of the more deceptive IPL venues. The headline numbers say it’s a 175 ground (average first innings 175.4), with a 10.12 death-overs rpo that can produce explosive finishes. But the way games actually feel here is often controlled by the middle overs.

### What the venue data suggests
CricDNA’s venue profile shows powerplay scoring around 7.99 rpo and middle overs 7.88 rpo. That “flat” profile is the hint: Ekana doesn’t always reward pure power early. Batters often have to work singles and boundary pockets until the death.

### What that means for team plans
- **Batters:** treat overs 7–15 as the phase to avoid wickets. If you arrive at the 15th with 6+ wickets, you can cash in at 10+ rpo.
- **Bowlers:** this is a ground where variation matters. If you can win just two overs in the middle with dots and a wicket, you can drag a 180 chase back into a 165 chase.

### A practical “par” rule
If a team is 80/1 at 10 overs, 175–185 is very reachable.
If a team is 80/3 at 10 overs, even 165 can be competitive.

Ekana rewards the side that keeps its innings intact more than the side that swings hardest.
`,
    relatedPlayerIds: [4, 12, 17],
    matchId: 19,
    chartData: [
      { label: "Powerplay rpo", value: 7.99, color: "#26A69A" },
      { label: "Middle rpo", value: 7.88, color: "#26A69A" },
      { label: "Death rpo", value: 10.12, color: "#26A69A" }
    ]
  },
  {
    id: 8,
    slug: "toss-report-mi-vs-rcb-wankhede-chase-bias",
    title: "MI vs RCB toss report: why Wankhede captains still field first",
    subtitle: "Wankhede’s toss-field preference is 69.9%, and its second-innings average (154.4) hides how sharp the finish can be with dew and wickets in hand.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "5 min",
    tags: ["IPL 2026", "MI", "RCB", "Toss report", "Mumbai"],
    featured: false,
    content: `
At Wankhede, teams almost always talk themselves into the chase. CricDNA’s venue profile explains why: toss-field percentage is 69.9%, and the death overs scoring rate sits at 9.95 rpo.

### Why the second-innings average can mislead
Wankhede’s average second-innings score is 154.4, which looks modest compared to some modern venues. But averages blend too many match states: collapses, small chases, and rain-reductions. What captains actually care about is the finishing runway.

If your top six can keep wickets intact, the last five overs at Wankhede are rarely defensive overs. Even “good” death bowling often concedes enough for a chasing side to close.

### The key question: what do you want to control?
- **If you field first:** you get information about grip, bounce, and whether dew arrives.
- **If you bat first:** you must guess whether 175 is enough.

For MI vs RCB, both sides have the hitters to exploit a chase. That makes the toss decision even simpler: field first and back your batting depth.

One caveat: if the pitch looks unusually dry and slow (rare for Wankhede), batting first becomes more attractive. But the default play remains the chase.
`,
    relatedPlayerIds: [1, 2, 13, 3],
    matchId: 20,
    chartData: [
      { label: "Toss field %", value: 69.9, color: "#42A5F5" },
      { label: "Avg 1st inns", value: 166.0, color: "#546E7A" },
      { label: "Avg 2nd inns", value: 154.4, color: "#90A4AE" }
    ]
  },
  {
    id: 9,
    slug: "season-trend-when-220-is-not-enough",
    title: "Season trend: when 220 is not enough, the only defence is wickets",
    subtitle: "PBKS chasing 223 after conceding 219 highlights the new high-scoring truth: totals don’t defend themselves.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "7 min",
    tags: ["IPL 2026", "Strategy", "High scoring", "Chasing"],
    featured: false,
    content: `
The early part of IPL 2026 is producing a familiar feeling: totals that used to be match-winning are now just “competitive.” Match 17 was the cleanest illustration — SRH made 219/6 and still lost to 223/4.

This doesn’t mean bowling is irrelevant. It means the currency of defence has shifted from runs to wickets.

### Why wickets are the only real control lever
Runs can be scored later if the required rate is manageable; wickets cannot be earned back. When the chase keeps 7–8 wickets for the last five overs, the chasing side has access to the full finishing toolkit: matchups, reverse-sweeps, pace-on power, and the freedom to target one weak link.

In Match 17, SRH’s best chance came via a cluster of wickets — and they got it. But one over from Harshal Patel went for too much and the chase returned to a low-risk equation.

### The practical rule for captains
If you concede 200+, your bowling plan must contain a wicket schedule:
- one wicket inside the first 3 overs,
- one wicket in overs 7–10,
- and one wicket between overs 14–17.

Miss any of those, and you end up trying to defend via economy alone — which is increasingly unrealistic at venues with high death-overs scoring.

### What teams can do tactically
- Use your best matchup bowler earlier, not later.
- Be willing to attack with fields even when the run rate is high.
- Accept singles; hunt wickets.

That is the only stable defence in an era where 220 can still be chased with time to spare.
`,
    relatedPlayerIds: [2, 12, 28],
    chartData: [
      { label: "SRH total", value: 219, color: "#FF6F00" },
      { label: "PBKS chase", value: 223, color: "#D32F2F" }
    ]
  },
  {
    id: 10,
    slug: "rankings-venue-incentives-ekana-vs-wankhede-vs-chepauk",
    title: "Rankings lens: three venues, three different incentives — Ekana vs Wankhede vs Chepauk",
    subtitle: "A quick venue comparison using CricDNA’s dataset: chase bias in Lucknow and Mumbai, set-and-squeeze logic in Chennai.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-12",
    readTime: "6 min",
    tags: ["IPL 2026", "Rankings", "Venue stats", "Toss"],
    featured: false,
    content: `
If you want to understand IPL tactics quickly, compare venue incentives. CricDNA’s dataset shows three clear venue archetypes relevant to today’s fixtures.

### Ekana (Lucknow)
- Avg 1st inns: 175.4
- Toss field %: 72.7
- Death rpo: 10.12
Interpretation: a chase-tilted venue where information and wickets in hand unlock late acceleration.

### Wankhede (Mumbai)
- Avg 1st inns: 166.0
- Toss field %: 69.9
- Death rpo: 9.95
Interpretation: a chase-friendly ground where finishing is strong, and 180 rarely feels safe.

### Chepauk (Chennai)
- Avg 1st inns: 166.0
- Toss field %: 29.2
- Death rpo: 9.48
Interpretation: a bat-first ground where middle-overs control and spin/variation have higher leverage.

The same league produces three different decision environments. The best teams don’t carry one strategy — they carry a flexible one.
`,
    relatedPlayerIds: [18, 12],
    chartData: [
      { label: "Ekana toss-field %", value: 72.7, color: "#42A5F5" },
      { label: "Wankhede toss-field %", value: 69.9, color: "#42A5F5" },
      { label: "Chepauk toss-field %", value: 29.2, color: "#42A5F5" }
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "player",
    title: "Player of the day",
    value: "Shreyas Iyer — 59 (26)",
    description: "A captain’s counter-punch after a mini-wobble turned a 220 chase into a controlled finish.",
    playerIds: [24],
    teamColors: ["#D32F2F", "#FF6F00"]
  },
  {
    type: "matchup",
    title: "Matchup to watch next",
    value: "MI vs RCB at Wankhede",
    description: "Wankhede’s late-overs runway (death rpo 9.95) rewards the team that keeps wickets for the finish.",
    playerIds: [13, 1, 3, 2],
    teamColors: ["#1565C0", "#D32F2F"]
  },
  {
    type: "stat",
    title: "Venue signal",
    value: "Chepauk bat-first win %: 64.6%",
    description: "Chennai remains a set-and-squeeze venue; 200+ first-innings totals become structurally tough chases.",
    teamColors: ["#FFB300", "#1976D2"]
  }
];
