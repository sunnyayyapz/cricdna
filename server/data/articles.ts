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
    slug: "rcb-vs-lsg-match-23-recap-146-wasnt-defendable-in-bengaluru-but-rcb-made-it-feel-like-120",
    title: "RCB vs LSG (Match 23) recap: 146 wasn’t defendable in Bengaluru — but RCB made it feel like 120",
    subtitle: "Rasikh Salam Dar’s 4/24 set up a 5-wicket win as RCB chased 147 in 15.1 overs (149/5 vs 146 all out).",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "7 min",
    tags: ["IPL 2026", "RCB", "LSG", "Match 23", "Bengaluru"],
    featured: true,
    content: `
Match 23 at the M. Chinnaswamy Stadium followed a pattern that Bengaluru fans have come to expect: the game was decided less by one big batting innings and more by whether the bowling side could force a below-par target.

Royal Challengers Bengaluru did exactly that. After opting to field, they dismissed Lucknow Super Giants for **146** and then cruised to **149/5 in 15.1 overs**, winning by five wickets with **29 balls to spare**.

### Why 146 was always chasing the game at this venue
CricDNA’s venue dataset for **M Chinnaswamy Stadium** lists **65 total matches** with an **average first-innings score of 168.1** and a **death-overs run rate of 10.59**. That context matters: a 146 target is not just “below par” — it’s a total that gives the chasing side permission to keep risk low for longer.

The other key Bengaluru lever is the toss. CricDNA’s toss dataset for **M Chinnaswamy Stadium** shows teams choosing to field first in **57 of 65** matches, with a **56.1% win rate** when doing so. In other words: teams at this ground don’t just chase because it’s fashionable — they chase because it usually keeps them in control.

### The bowling blueprint: wickets, not just dots
LSG’s innings never stabilised because wickets arrived in clusters.

- **Rasikh Salam Dar: 4/24** — the spell that shaped the scorecard.
- **Bhuvneshwar Kumar: 3/27** — control up top and damage late.
- **Krunal Pandya: 2/38** — wicket-taking in the middle overs.

When a side is bowled out for 146, it’s almost always because they failed to build a “second gear” partnership through overs 7–15. Even if you have a couple of solid knocks, you’re forced into a finish where hitters must go hard from ball one. That’s exactly the kind of finishing pressure Bengaluru bowling units tend to thrive on.

### The chase: aggressive powerplay, conservative finish
RCB’s chase was close to ideal: win the powerplay hard, then manage the rest.

**Virat Kohli’s 49 off 34** provided the anchor, but it also did something more important: it ensured that the required rate never climbed into a panic zone.

Even after Kohli fell short of fifty, the chase stayed in “process mode” — short partnerships, quick singles, and just enough boundary contact to shut the door.

### What this means for RCB’s season
A 149 chase at Bengaluru is not normally the headline. The headline is **how** you got it: by turning the opposition’s 20 overs into a wicket hunt.

If RCB keep winning the “target-setting” battle at Chinnaswamy — pushing opponents below the 160–175 band that this venue naturally supports — their batting depth becomes a luxury rather than a necessity.

    `,
    relatedPlayerIds: [1, 22, 29],
    matchId: 23,
    chartData: [
      { label: "LSG", value: 146, color: "#1E88E5" },
      { label: "RCB", value: 149, color: "#D32F2F" }
    ],
    dataTable: {
      headers: ["Match 23", "Detail"],
      rows: [
        ["Result", "RCB won by 5 wickets (29 balls remaining)"],
        ["LSG", "146 all out"],
        ["RCB", "149/5 (15.1)"],
        ["Top RCB batter", "Virat Kohli 49 (34)"],
        ["Top RCB bowler", "Rasikh Salam Dar 4/24"],
        ["Venue", "M. Chinnaswamy Stadium, Bengaluru" ]
      ]
    }
  },
  {
    id: 2,
    slug: "rcb-vs-lsg-match-23-tactical-recap-the-toss-decision-was-the-first-wicket",
    title: "RCB vs LSG (Match 23) tactical recap: the toss decision was the first wicket",
    subtitle: "Chinnaswamy data says fielding first is the default; RCB followed the venue’s script and cashed in.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "toss", "RCB", "LSG", "Chinnaswamy"],
    featured: false,
    content: `
Match 23 didn’t need a complicated narrative: Royal Challengers Bengaluru chose to bowl, dismissed Lucknow Super Giants for 146, and finished the chase at 149/5 with nearly five overs in hand.

But the most repeatable part of the win wasn’t a particular over or a particular shot. It was the **decision to field first**, which aligned perfectly with what the ground has historically rewarded.

### What the numbers say about Chinnaswamy and the toss
CricDNA’s toss dataset for **M Chinnaswamy Stadium** records **65 matches**, with teams choosing to field first in **57** of them. That preference is not cosmetic: field-first sides have won **32 of those 57** games, a **56.1% win rate**.

Compare that to batting-first after winning the toss: only **8** teams chose it, and they won **3** (a **37.5% win rate**). If you want a one-line summary of Bengaluru strategy, it’s this: the venue tends to reward captains who remove uncertainty by chasing.

### Why chasing reduces risk here
CricDNA’s venue dataset lists an **average first-innings score of 168.1** at **M Chinnaswamy Stadium**, and a high-scoring finishing profile with a **death-overs run rate of 10.59**.

Those are classic chasing-friendly indicators:
- the ceiling is high, so you can lose a wicket or two and still keep pace,
- the finish is fast, so 40 off 24 (or 30 off 18) is rarely “impossible”,
- and the outfield/pitch combination usually allows boundary access without reckless shot selection.

### RCB’s bowling: how a “good” 146 was created
It’s easy to say “146 is too low.” The better question is: how did RCB make it low?

LSG were pushed into a pattern of “start, stall, rebuild, lose wickets.” That’s the bowling template RCB should aim to repeat:
- take wickets early enough that the opposition can’t use overs 7–15 as a platform,
- force hitters to enter before the set batters can control the tempo,
- and make the last five overs a scramble rather than a launchpad.

The match figures underline it: **Rasikh Salam Dar 4/24**, **Bhuvneshwar Kumar 3/27**, and **Krunal Pandya 2/38**.

### The chase: the most important phase was the first six overs
Once 146 was on the board, the only way to let LSG back in was to start slowly and let the required run rate turn into a conversation.

RCB avoided that through early intent, with **Virat Kohli’s 49 off 34** setting the pace and keeping risk manageable for the middle order.

### CricDNA takeaway
At Chinnaswamy, “win the toss and chase” is not lazy thinking — it’s evidence-based. If RCB continue to combine that decision with wicket-taking bowling spells, they can win games even on nights when the batting doesn’t need to go superhuman.

    `,
    relatedPlayerIds: [1, 22],
    matchId: 23,
    chartData: [
      { label: "Toss: field first", value: 57, color: "#2E7D32" },
      { label: "Toss: bat first", value: 8, color: "#C62828" }
    ],
    dataTable: {
      headers: ["Chinnaswamy toss outcomes", "Value"],
      rows: [
        ["Matches in dataset", "65"],
        ["Field first (count)", "57"],
        ["Field first win %", "56.1%"],
        ["Bat first (count)", "8"],
        ["Bat first win %", "37.5%" ]
      ]
    }
  },
  {
    id: 3,
    slug: "rcb-vs-lsg-match-23-phase-story-where-lsg-lost-20-25-runs-without-noticing",
    title: "RCB vs LSG (Match 23) phase story: where LSG lost 20–25 runs without noticing",
    subtitle: "In Bengaluru, you can’t ‘save’ the death overs if you’re losing wickets through the middle.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "phase analysis", "LSG", "RCB"],
    featured: false,
    content: `
A total of 146 at Bengaluru is usually explained with one word: wickets.

Lucknow Super Giants weren’t short of intent — they were short of continuity. They were bowled out for **146**, and that meant they never got to enjoy the one thing this venue promises: a high-speed finish.

### Bengaluru’s scoring profile is built for late acceleration
CricDNA’s venue dataset for **M Chinnaswamy Stadium** shows a clear scoring curve:
- **Powerplay run rate: 7.07**
- **Middle-overs run rate: 8.08**
- **Death-overs run rate: 10.59**

The key here is the last number. A 10.59 death run rate means the ground naturally supports boundary conversion late in the innings. So why did LSG still end at 146?

Because death-overs acceleration only works if you reach it with enough wickets.

### The hidden tax: rebuilding costs more than dots
In T20 innings, the most expensive overs are not always maiden overs. They are the “rebuild overs” where batters are trying to survive, re-set, and then re-accelerate.

LSG’s innings had too many of those. The bowling figures tell you how the innings kept restarting:
- **Rasikh Salam Dar 4/24** meant multiple entry points for new batters.
- **Bhuvneshwar Kumar 3/27** ensured the innings didn’t settle even late.

Every new batter needs 6–10 balls to find the pace of the pitch and the bowler plan. Across 7 or 8 dismissals, that’s easily 20+ balls of “settling time.” At Bengaluru, 20 balls at a conservative rate is a 20–30 run penalty.

### What RCB did well: they didn’t overthink the middle overs
A lot of sides at Chinnaswamy chase wickets with too much pace, too many variations, and then bleed runs.

RCB found a better balance: enough control to keep singles manageable, and enough aggression to keep dismissals coming. That is why a below-par 146 did not even become a defendable 165-style story.

### CricDNA takeaway
LSG’s failure wasn’t just “they didn’t hit enough sixes.” The failure was structural: they couldn’t carry wickets into a venue where the last five overs are designed to be an advantage.

If LSG want to post competitive totals in Bengaluru, the template is simple: keep wickets intact through overs 7–15, then use the venue’s 10.59 death RPO to create the surge.

    `,
    relatedPlayerIds: [1, 4, 22],
    matchId: 23,
    chartData: [
      { label: "Powerplay RPO", value: 7.07, color: "#1565C0" },
      { label: "Middle RPO", value: 8.08, color: "#6A1B9A" },
      { label: "Death RPO", value: 10.59, color: "#C62828" }
    ]
  },
  {
    id: 4,
    slug: "mi-vs-pbks-match-24-preview-wankhede-will-punish-mistakes-but-not-the-toss",
    title: "MI vs PBKS (Match 24) preview: Wankhede will punish mistakes, but not the toss",
    subtitle: "Wankhede’s bat-first and bat-second records are nearly even; execution matters more than the coin.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "MI", "PBKS", "Match 24", "Wankhede"],
    featured: false,
    content: `
Match 24 brings Punjab Kings to Wankhede to face Mumbai Indians in one of the season’s most revealing tests: a high-trust batting venue where “plans” only work if the execution is precise.

Punjab arrive unbeaten (with one no-result) and have looked like a side with clear roles. Mumbai, meanwhile, are still searching for a repeatable template.

### What Wankhede historically rewards
CricDNA’s venue dataset for **Wankhede Stadium** lists **73 matches** with an **average first-innings score of 168.0** and a strong finishing profile: **death-overs run rate 10.76**.

That combination usually creates two truths:
1) anything under 165 is fragile, and
2) bowlers must win by creating errors, not by “containing”.

### The toss isn’t the advantage most people think it is
Wankhede often gets described as a chasing ground, but CricDNA’s toss dataset suggests it’s far more balanced.

For **Wankhede Stadium, Mumbai** (52 matches in the dataset), teams that field first after winning the toss have won **59.1%** of the time (26 wins from 44). Teams that bat first after winning the toss have won **37.5%** (3 wins from 8), which mostly reflects captain preference rather than an absolute truth.

Zooming out to **Wankhede Stadium** (73 matches), the overall win split is almost even: **bat first 36 wins, bat second 37 wins**.

So the real separator isn’t chase vs set — it’s powerplay intent, middle-overs wicket management, and death-overs execution.

### Match-up lens: what MI must fix vs PBKS
Punjab have been ruthless when given a target they can control. Mumbai’s best chance is to:
- attack PBKS’s top order early (two wickets in the powerplay changes the whole innings),
- keep a specialist for overs 16–20 (Wankhede’s 10.76 death RPO means “one bad over” can be 20+),
- and bat with clarity: aim 55–60 in the powerplay, then preserve wickets for the final 5.

### CricDNA call to watch
If this becomes a 190+ game, it will be decided by who hits fewer “false shots” under pace at the death.

If it becomes a 165–175 game, it will be decided by who loses fewer wickets in overs 7–15.

    `,
    relatedPlayerIds: [2, 11, 13, 17],
    matchId: 24,
    chartData: [
      { label: "Wankhede avg 1st inns", value: 168.0, color: "#F57C00" },
      { label: "Wankhede death RPO", value: 10.76, color: "#C62828" }
    ],
    dataTable: {
      headers: ["Wankhede snapshot", "Value"],
      rows: [
        ["Matches", "73"],
        ["Avg 1st inns", "168.0"],
        ["Bat first wins", "36"],
        ["Bat second wins", "37"],
        ["Death RPO", "10.76" ]
      ]
    }
  },
  {
    id: 5,
    slug: "mi-vs-pbks-match-24-pitch-report-wankhede-pace-carry-and-a-fast-finish",
    title: "MI vs PBKS (Match 24) pitch report: Wankhede’s ‘par’ is a moving target",
    subtitle: "With a 10.76 death-overs run rate in CricDNA’s dataset, the last five overs often decide everything.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "5 min",
    tags: ["IPL 2026", "pitch report", "Wankhede", "MI", "PBKS"],
    featured: false,
    content: `
Wankhede pitches can look “good for batting” in a generic sense, but CricDNA’s venue data shows something more specific: this ground is a finishing venue.

In CricDNA’s dataset, **Wankhede Stadium** has an **average first-innings score of 168.0** across **73 matches**. That’s healthy, but it’s not the headline.

The headline is the scoring speed by phase: **death-overs run rate 10.76**. When the last five overs naturally run at nearly 11 an over, the difference between 175 and 195 is often just two overs of execution.

### What type of bowling survives here
At Wankhede, bowlers survive by being accurate with their best ball, not by cycling through a bag of tricks.

In practical terms:
- hit the hard length early (don’t offer slot pace),
- protect the straight boundary late,
- and keep at least one over of your best death bowler for the 19th.

### What batters should plan for
Batters should expect pace-on value, but they still have to respect early movement and bounce.

A good Wankhede innings often looks like:
- powerplay: 45–55 with one wicket or fewer,
- overs 7–15: avoid the “two down and stuck” situation,
- death: target 55–65 if you have wickets.

### Par score guidance for Match 24
Using the venue average (168) and the death scoring profile (10.76), CricDNA’s practical par bands for Match 24 are:
- **bat first: 175–185 feels defendable**,
- **190+ is a strong total**,
- **under 165 needs exceptional powerplay bowling to hold**.

    `,
    relatedPlayerIds: [2, 17, 11],
    matchId: 24,
    chartData: [
      { label: "Powerplay RPO", value: 7.5, color: "#1565C0" },
      { label: "Middle RPO", value: 8.5, color: "#6A1B9A" },
      { label: "Death RPO", value: 10.76, color: "#C62828" }
    ]
  },
  {
    id: 6,
    slug: "mi-vs-pbks-match-24-toss-report-why-fielding-first-is-common-but-not-mandatory",
    title: "MI vs PBKS (Match 24) toss report: why fielding first is common, but not mandatory",
    subtitle: "Wankhede’s historical win split is basically even; captain preference tilts the toss trend.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "5 min",
    tags: ["IPL 2026", "toss", "Wankhede", "strategy"],
    featured: false,
    content: `
If you ask five captains what to do at Wankhede, three will say “bowl first” as if it’s a law.

CricDNA’s data suggests it’s not a law — it’s a preference.

### What CricDNA’s toss dataset shows
For **Wankhede Stadium, Mumbai** (52 matches), teams that won the toss chose to field first **44** times and won **26** of those games — a **59.1%** win rate.

Teams that chose to bat first did so only **8** times and won **3** (a **37.5%** win rate). The sample size is smaller, but the more important point is choice frequency: captains overwhelmingly *prefer* to chase.

### The bigger picture: outcomes are nearly 50/50
CricDNA’s venue dataset for **Wankhede Stadium** (73 matches) shows the overall win split is essentially even: **bat first wins 36, bat second wins 37**.

That tells us something useful:
- the venue is high scoring, but not one-directional,
- and if you bat first well (i.e., carry wickets to the death), you can win.

### Practical toss advice for Match 24
If you win the toss at Wankhede, choose based on your bowling resources:
- If you have two reliable death bowlers: bowling first is attractive because you can control the finishing overs.
- If your bowling is thin at the death: batting first can protect you, because you can put scoreboard pressure on the chase.

Either way, the game will be decided by execution at the death — Wankhede’s run rate there is too high for “average” overs.

    `,
    relatedPlayerIds: [2, 17, 11, 13],
    matchId: 24,
    chartData: [
      { label: "Toss: field first", value: 44, color: "#2E7D32" },
      { label: "Toss: bat first", value: 8, color: "#C62828" }
    ],
    dataTable: {
      headers: ["Wankhede (Mumbai) toss choices", "Value"],
      rows: [
        ["Matches in dataset", "52"],
        ["Field first (count)", "44"],
        ["Field first win %", "59.1%"],
        ["Bat first (count)", "8"],
        ["Bat first win %", "37.5%" ]
      ]
    }
  },
  {
    id: 7,
    slug: "kohli-orange-cap-structure-why-rcb-can-afford-a-moderate-powerplay-when-he-starts-fast",
    title: "Kohli and the Orange Cap race: why RCB can afford a ‘moderate’ powerplay when he starts fast",
    subtitle: "India TV reported Kohli leading with 228 runs; the bigger story is how that stabilises RCB’s chase model.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Orange Cap", "Virat Kohli", "RCB"],
    featured: false,
    content: `
The early-season Orange Cap conversation is often treated like trivia. But in IPL 2026, the run-leader list is already shaping team strategies.

According to India TV’s Match 23 update, **Virat Kohli is the current Orange Cap holder with 228 runs in five matches**.

Whether you treat that as a headline or not, it has a tactical consequence: when Kohli is consistently producing 35–60 runs at a healthy strike rate, RCB’s batting can play the game from the front.

### Why this matters more for chases than for first-innings totals
When chasing, the hardest thing to manage is not a “high required rate.” It’s uncertainty. One early wicket can turn a comfortable chase into a spiral.

An in-form opener reduces uncertainty by doing two things:
1) removing the powerplay risk (you don’t need to gamble to keep up), and
2) ensuring the middle order enters with a simple target: stay ahead of the rate, don’t collapse.

Match 23 was a clean example. Chasing 147, RCB didn’t need to chase boundaries for 20 overs. They just needed a powerplay foundation, and Kohli’s 49 off 34 delivered exactly that.

### The underrated skill: keeping the chase ‘boring’
In a season where 200+ scores have been common, it’s tempting to evaluate batting only by strike rate.

But for winning chases, “boring” is a skill. Boring means:
- the required run rate never spikes,
- the opposition can’t force rash shots,
- and the chase ends with overs to spare.

That is how RCB finished Match 23: 149/5 in 15.1 overs.

### What to watch next
If Kohli stays in this form band, RCB’s line-up becomes modular:
- If the pitch is flat, others can attack while he anchors.
- If the pitch is two-paced, he can bat deeper and protect the chase.

Either way, a run-leader at the top changes the entire risk profile of the innings.

    `,
    relatedPlayerIds: [1, 29, 16],
    chartData: [
      { label: "Kohli runs (reported)", value: 228, color: "#D32F2F" },
      { label: "5 matches", value: 5, color: "#455A64" }
    ]
  },
  {
    id: 8,
    slug: "wankhede-isnt-just-a-batters-ground-its-a-death-overs-ground",
    title: "Wankhede isn’t just a batter’s ground — it’s a death-overs ground",
    subtitle: "CricDNA’s dataset shows 10.76 runs per over at the death, which changes how you should value bowlers.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Wankhede", "death overs", "analysis"],
    featured: false,
    content: `
When people say “Wankhede is good for batting,” they usually mean one thing: the ball comes on and boundaries are accessible.

CricDNA’s venue data supports that, but it also adds a sharper insight: Wankhede is specifically a **death-overs accelerator**.

Across **73 matches**, CricDNA records an **average first-innings score of 168.0** at **Wankhede Stadium** — healthy, but not outrageous.

The standout number is the **death-overs run rate of 10.76**. At almost 11 an over, the last five overs are not a bonus phase; they are where most totals are defined.

### Why this changes bowling strategy
In many venues, teams can survive a slightly loose 18th over because the surface slows down.

At Wankhede, a loose over is a scoreboard event.

That means teams should value:
- yorker accuracy,
- wide yorker execution,
- slower-ball control (without losing length),
- and boundary-protection field settings.

### Why wickets matter even more than economy
In a venue where boundaries are common, economy can mislead.

A bowler who goes for 9.5 an over but takes two wickets in overs 16–20 can be more valuable than a bowler who goes for 8.5 and takes none.

The reason is simple: wickets reduce boundary attempts. They force new batters to re-calibrate, which is the only way to slow down an inherently fast finish.

### How to read Match 24 through this lens
For MI vs PBKS, look for one question:

Which side has more “death resources” they trust?

If MI can close with Bumrah-like control, they can defend even a slightly below-par score.

If PBKS can keep wickets in hand, they can turn 160 into 190 very quickly.

    `,
    relatedPlayerIds: [2, 17, 19],
    chartData: [
      { label: "Avg 1st inns", value: 168.0, color: "#F57C00" },
      { label: "Death RPO", value: 10.76, color: "#C62828" },
      { label: "Bat-second wins", value: 37, color: "#2E7D32" }
    ]
  },
  {
    id: 9,
    slug: "bengaluru-scoring-model-why-168-is-average-but-150-can-still-win",
    title: "Bengaluru scoring model: why 168 is average, but 150 can still win",
    subtitle: "The venue is high-scoring, yet chasing teams win more often — if bowling creates collapses.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "Bengaluru", "scoring", "analysis"],
    featured: false,
    content: `
The most common mistake fans make about Bengaluru is assuming every match must be a 200+ shootout.

CricDNA’s venue dataset for **M Chinnaswamy Stadium** shows an **average first-innings score of 168.1** across **65 matches**. That is high, but it’s also a mean — it includes collapses and low totals.

Match 23 was a reminder of the second part: Lucknow Super Giants were dismissed for 146.

### Why low totals happen even on high-scoring grounds
High-scoring grounds do not remove risk; they amplify mistakes.

At Chinnaswamy, the run rate rises through the innings (death at 10.59), so batting sides often plan for a late surge.

But that plan collapses if wickets fall through the middle. New batters arriving every few overs can’t access the death-overs scoring ceiling, because they spend too many balls “finding” their shots.

### The venue’s chasing bias is real
The toss data reinforces it.

In CricDNA’s toss dataset, teams chose to field first in **57 of 65** Chinnaswamy matches and won **56.1%** of those games.

That preference exists because chasing reduces uncertainty: you know whether 168 is enough, whether 185 is needed, and how hard you must push early.

### What this means for team-building
Bengaluru doesn’t just reward big hitters. It rewards:
- one top-order batter who can play at 140–160 strike rate without collapsing,
- and a bowling unit that can create collapses rather than “contain”.

That is how 150-ish chases (and 150-ish defenses) remain possible here.

    `,
    relatedPlayerIds: [1, 16, 29],
    chartData: [
      { label: "Avg 1st inns", value: 168.1, color: "#F57C00" },
      { label: "Bat-second wins", value: 37, color: "#2E7D32" },
      { label: "Bat-first wins", value: 26, color: "#C62828" }
    ]
  },
  {
    id: 10,
    slug: "ipl-2026-table-watch-why-nrr-will-matter-early-this-season",
    title: "IPL 2026 table watch: why NRR will matter early this season",
    subtitle: "Big-margin wins like RCB’s Match 23 chase can reshape the table before mid-season.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-16",
    readTime: "6 min",
    tags: ["IPL 2026", "points table", "NRR", "analysis"],
    featured: false,
    content: `
Early-season points tables are noisy, but net run rate (NRR) can start influencing the story much sooner than people expect.

After Match 23, multiple outlets noted that RCB moved to the top of the table. India TV’s update reported **RCB on 8 points (4 wins from 5) with NRR 1.503**, with Rajasthan Royals also on 8 points but behind on NRR.

Regardless of the exact ordering on any given day, the mechanism is clear: big-margin wins are NRR multipliers.

### Why Match 23 was an NRR-style win
RCB didn’t just win; they compressed the game.

They bowled LSG out for 146 and finished the chase at 149/5 in 15.1 overs — a win with **29 balls remaining**.

In NRR terms, chasing quickly matters because it increases your “runs per over” in the tournament calculation. Wins by five wickets are not equal; a five-wicket win with 29 balls left is far more valuable than a five-wicket win in the last over.

### Why this will matter for teams in the mid-pack
Most teams will cluster around similar points for the first half of the league stage.

When that happens, NRR becomes the difference between:
- sitting 2nd vs 5th,
- needing one win vs needing two,
- and “control your destiny” vs “depend on other results.”

### CricDNA takeaway
Treat early big wins like assets. They don’t just add two points — they add future flexibility.

Teams that chase efficiently, avoid collapses, and defend with wickets (rather than economy alone) build an NRR cushion that pays off when the season gets tight.

    `,
    relatedPlayerIds: [1, 29, 17],
    chartData: [
      { label: "RCB points (reported)", value: 8, color: "#D32F2F" },
      { label: "RCB NRR (reported)", value: 1.503, color: "#1565C0" }
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Match 23: RCB vs LSG",
    value: "RCB won by 5 wkts",
    description: "RCB chased 147 in 15.1 overs after bowling LSG out for 146; Kohli 49, Rasikh 4/24.",
    playerIds: [1, 22]
  },
  {
    type: "stat",
    title: "Venue watch: Wankhede death overs",
    value: "10.76 RPO",
    description: "CricDNA venue data flags Wankhede as a finishing venue; death-overs scoring is the key skill in Match 24.",
    teamColors: ["#005DAA", "#D71920"]
  },
  {
    type: "player",
    title: "Orange Cap tracker",
    value: "Kohli 228 runs (reported)",
    description: "Match 23 roundup reported Kohli leading the run charts with 228 in 5 matches; his starts are shaping RCB’s chase model.",
    playerIds: [1]
  }
];
