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
    slug: "ipl-2026-match-25-gt-vs-kkr-recap-gill-86-made-180-feel-average-in-ahmedabad",
    title: "IPL 2026 Match 25 (GT vs KKR) recap: Gill’s 86 made 180 feel average in Ahmedabad",
    subtitle: "GT chased 181/5 in 19.4 overs after KKR were bowled out for 180 at the Narendra Modi Stadium on April 17.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "7 min",
    tags: ["IPL 2026", "GT", "KKR", "Match 25", "Ahmedabad"],
    featured: true,
    relatedPlayerIds: [5],
    matchId: 25,
    chartData: [
      { label: "Powerplay RPO", value: 8.46, color: "#1f77b4" },
      { label: "Middle overs RPO", value: 8.55, color: "#ff7f0e" },
      { label: "Death overs RPO", value: 10.75, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Metric", "Narendra Modi Stadium (historical)", "What it means"],
      rows: [
        ["Avg 1st inns", "186.6", "Par totals skew high"],
        ["Avg 2nd inns", "170.1", "Chasing stays live"],
        ["Toss: field first", "81.8%", "Captains back the chase"],
        ["Bat-first win%", "48.5%", "Near coin-flip despite big scores"]
      ]
    },
    content: `
Gujarat Titans’ chase of **181** against Kolkata Knight Riders was not just a “two balls to spare” finish — it was a reminder that **Ahmedabad has quietly become one of the league’s high-output venues**, where even decent first-innings scores can look a touch light if you don’t control the best batter in the game.

The headline numbers are clear: KKR were **bowled out for 180**, and GT got home at **181/5 in 19.4 overs** to win by **five wickets** ([ESPNcricinfo](https://www.espncricinfo.com/series/ipl-2026-1510719)) ([IPLT20 match results](https://www.iplt20.com/matches/results)). The chase revolved around **Shubman Gill’s 86 off 50** ([IPLT20 match report](https://www.iplt20.com/news/4299/tata-ipl-2026-match-25-gt-vs-kkr-match-report)).

### Venue context: why 180 rarely “shuts the game” in Ahmedabad
CricDNA’s venue dataset for **Narendra Modi Stadium, Ahmedabad** has an **average first-innings score of 186.6** and an **average second-innings score of 170.1** ([venueStats.json](../server/data/venueStats.json)). The scoring profile is blunt: the **death overs run-rate averages 10.75 rpo**, after 8.46 rpo in the powerplay and 8.55 rpo in the middle ([venueStats.json](../server/data/venueStats.json)).

That profile does two things:
1) It makes “good totals” feel chaseable because the venue naturally creates late-innings acceleration.
2) It punishes teams that don’t keep wickets in hand, because the last five overs are where matches swing.

### The game’s tactical hinge: Gill neutralised the spin threat
The IPLT20 match report framed it as a composed chase built around Gill’s timing and control ([IPLT20 match report](https://www.iplt20.com/news/4299/tata-ipl-2026-match-25-gt-vs-kkr-match-report)). That matters against KKR, because their best template is to make the middle overs feel like a net in quicksand — dot balls, boundary denial, and forced risk.

Gill’s innings didn’t need constant boundary-hunting; it needed **repeatability**. His 50-ball 86 essentially “priced in” the required rate so GT could enter the death overs with options rather than panic.

### Why KKR’s 180 wasn’t “bad” — but it wasn’t defended well enough
KKR being bowled out for 180 is the quiet sub-plot ([IPLT20 match results](https://www.iplt20.com/matches/results)). When a side is all out, you usually see one of two patterns: (a) a collapse after a strong base, or (b) aggressive intent without enough batting depth.

Either way, the outcome in Ahmedabad is the same: **180 asks your bowlers to be perfect**, because the ground historically sits near a coin-flip on bat-first vs chase despite big scores — **bat-first win% is 48.5%** and captains choose to field first **81.8%** of the time ([venueStats.json](../server/data/venueStats.json)).

### CricDNA takeaway
If you’re a team planning at the Narendra Modi Stadium, treat 180 like a “competitive” number, not a “safe” number. The venue’s scoring curve is built to keep the chase alive, and one elite top-order innings can compress the game into 14-15 overs of control and 4-5 overs of finishing.

For GT, it’s another reminder that **when Gill bats deep, their chase model becomes simple**: keep wickets, stay within the venue’s natural run-rate bands, and back the death overs where this stadium consistently rewards clean hitting.
`
  },
  {
    id: 2,
    slug: "ipl-2026-match-25-gt-vs-kkr-analysis-kkr-need-innings-of-60-not-30s",
    title: "GT vs KKR, Match 25: KKR’s real problem isn’t strike-rate — it’s missing a 60+ anchor",
    subtitle: "KKR reached 180 but were bowled out; in Ahmedabad, losing all 10 wickets is the hidden tax.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "GT", "batting", "Match 25"],
    featured: false,
    relatedPlayerIds: [],
    matchId: 25,
    content: `
The scoreboard says KKR made **180** and still lost. That will tempt a familiar post-match diagnosis: “We didn’t bowl well enough.” The more useful diagnosis is subtler — **KKR gave away value by getting bowled out**.

In the modern IPL, being all out isn’t just “losing a wicket” ten times. It removes your ability to exploit venue-specific scoring spikes. And in Ahmedabad, the spike is loud: the venue’s **death overs run-rate averages 10.75 rpo** historically ([venueStats.json](../server/data/venueStats.json)).

KKR’s innings ending on the final ball means they didn’t leave themselves a “second finish”. Their batting plan was one-dimensional: score now, hope the score is enough. Gujarat’s plan, by contrast, was structurally stronger: bat through, then use the death overs like a multiplier.

### Why wickets matter more than “tempo” at this ground
Narendra Modi Stadium’s historical profile is unusually consistent across phases: **8.46 rpo** in the powerplay, **8.55 rpo** in the middle, then a jump to **10.75 rpo** at the death ([venueStats.json](../server/data/venueStats.json)). That means teams that reach the 15-over mark with wickets in hand can routinely take 55-65 in the last five without needing miracle hitting.

So if you’re KKR, the question becomes:
- Did we build an innings that could cash in at the end?

Being bowled out suggests “no”. Even if you land at 180, the innings is often worth 10-15 more if you keep 6-7 wickets alive for the last push.

### The anchor that matters is not slow — it’s durable
KKR don’t need a 40-ball 40. They need a 45-ball 60 — an innings that absorbs a wicket or two without bleeding scoring, then switches gears once the bowlers return for the final set.

This is why Gill’s innings was the match’s most important “shape”: **86 off 50** doesn’t just add runs; it reduces volatility. The IPLT20 match report calls it the backbone of the chase ([IPLT20 match report](https://www.iplt20.com/news/4299/tata-ipl-2026-match-25-gt-vs-kkr-match-report)). It also allowed Gujarat to finish with calm, not chaos.

### CricDNA takeaway
At Ahmedabad, don’t think in totals — think in **phases plus wickets**. The venue says 180 is competitive, but the death overs say you should expect the chase to keep breathing. If you get bowled out, you’re not just “out of batters.” You’re out of options.
`
  },
  {
    id: 3,
    slug: "ipl-2026-match-25-gt-vs-kkr-analysis-gill-batting-deep-is-a-team-strategy",
    title: "Match 25: Gill batting deep isn’t a personal milestone — it’s GT’s clearest team strategy",
    subtitle: "GT’s chase model fits Ahmedabad’s phase scoring: stay level early, explode late.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "6 min",
    tags: ["IPL 2026", "GT", "Shubman Gill", "chasing", "Ahmedabad"],
    featured: false,
    relatedPlayerIds: [5],
    matchId: 25,
    chartData: [
      { label: "Avg 1st inns", value: 186.6, color: "#1f77b4" },
      { label: "Avg 2nd inns", value: 170.1, color: "#ff7f0e" }
    ],
    content: `
One of the easiest mistakes in T20 analysis is to treat “batted through” as a badge of honour rather than a tactic. In Gujarat Titans’ chase against KKR, Shubman Gill’s **86 off 50** was the tactic ([IPLT20 match report](https://www.iplt20.com/news/4299/tata-ipl-2026-match-25-gt-vs-kkr-match-report)).

GT chased **181/5 in 19.4 overs** to win by five wickets ([ESPNcricinfo](https://www.espncricinfo.com/series/ipl-2026-1510719)) ([IPLT20 match results](https://www.iplt20.com/matches/results)). But the deeper story is “how”: GT didn’t try to win the game in the powerplay. They tried to arrive at over 15 with the chase intact.

### Ahmedabad rewards continuity
Narendra Modi Stadium’s historical averages are high: **186.6** in the first innings, **170.1** in the second ([venueStats.json](../server/data/venueStats.json)). Those numbers describe a ground where par is high, but also where chasing is normal. Captains choose to field first **81.8%** of the time ([venueStats.json](../server/data/venueStats.json)), which is basically a public admission: “We back ourselves to chase here.”

### Why Gill’s role is structural
In a chase of 181, you can get there in many ways. The most stable way is:
- Don’t lose early wickets.
- Keep the required rate within the venue’s natural band.
- Enter the last five overs with wickets, then let the venue do what it usually does.

Ahmedabad’s phase run-rates tell you exactly why this works: 8.46 rpo (powerplay) → 8.55 rpo (middle) → **10.75 rpo (death)** ([venueStats.json](../server/data/venueStats.json)). If your best batter is still in at the death, you don’t need hero shots. You need execution.

Gill’s 86 (50) effectively turned the chase into a controlled negotiation rather than a sprint. And once he’d done the hard part — occupying overs without losing scoring — the finish became manageable even if a wicket or two fell.

### CricDNA takeaway
When GT are chasing at Ahmedabad, “Gill batting deep” isn’t a luxury; it’s the easiest way to make the venue’s death-overs bias work for them. If he’s there at over 16, GT can finish with method.
`
  },
  {
    id: 4,
    slug: "ipl-2026-match-26-rcb-vs-dc-preview-chinnaswamy-is-a-190-par-ground",
    title: "Match 26 preview (RCB vs DC): At Chinnaswamy, 190 is par — the real game is wickets in hand",
    subtitle: "Bengaluru’s phase run-rates explain why chases swing late even when totals look huge.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "DC", "Match 26", "Bengaluru"],
    featured: false,
    relatedPlayerIds: [1, 29, 30, 4],
    matchId: 26,
    chartData: [
      { label: "Powerplay RPO", value: 8.51, color: "#1f77b4" },
      { label: "Middle overs RPO", value: 8.86, color: "#ff7f0e" },
      { label: "Death overs RPO", value: 10.97, color: "#2ca02c" }
    ],
    content: `
RCB vs DC at the M Chinnaswamy Stadium rarely needs narrative help — the venue creates drama on its own. The useful question is not “Will there be runs?” It’s “How will teams manage the run spikes without losing control?”

CricDNA’s venue dataset for **M Chinnaswamy Stadium, Bengaluru** lists an **average first-innings score of 189.1** and an **average second-innings score of 179.8** ([venueStats.json](../server/data/venueStats.json)). In other words: this is a ground where 170 is often below-par, 180 is defendable only with perfect execution, and 200 is never safe.

### Phase scoring: the Chinnaswamy curve is brutally flat
The most revealing numbers are the phase run-rates:
- Powerplay: **8.51 rpo**
- Middle overs: **8.86 rpo**
- Death overs: **10.97 rpo**
([venueStats.json](../server/data/venueStats.json))

That “flatness” matters. Some venues have a slow middle that lets bowlers recover. Bengaluru doesn’t. If you bowl one loose over in the middle, you don’t just concede 12 — you lose your chance to drag the innings back to par.

### Toss and innings choice
Bengaluru is also extreme on captaincy behaviour: the dataset shows captains chose to field first **100%** of the time in this sample ([venueStats.json](../server/data/venueStats.json)). It’s not because defending is impossible; it’s because the venue’s scoring volatility makes chasing feel more controllable.

### Matchup lens
For RCB, the simplest template is: keep the top order intact long enough to cash in at the death, because **10.97 rpo** is the venue’s average finishing pace ([venueStats.json](../server/data/venueStats.json)). For DC, the bowling plan has to be wicket-first — not “containment-first” — because Bengaluru doesn’t reward passive bowling.

### CricDNA call
Expect the match to be decided by a 10-over window rather than “the full 40 overs.” If either side reaches over 15 with 7 wickets in hand, Bengaluru usually provides the finishing fuel.
`
  },
  {
    id: 5,
    slug: "ipl-2026-match-26-rcb-vs-dc-pitch-report-chinnaswamy-batting-first-is-still-a-valid-play",
    title: "RCB vs DC pitch report: Chinnaswamy screams ‘chase’, but batting first is still a valid play",
    subtitle: "Bengaluru’s averages are huge, yet the win split is near even in CricDNA’s dataset.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "5 min",
    tags: ["IPL 2026", "RCB", "DC", "Pitch report", "Chinnaswamy"],
    featured: false,
    relatedPlayerIds: [1, 30],
    matchId: 26,
    dataTable: {
      headers: ["Stat", "Chinnaswamy (Bengaluru)", "Read"],
      rows: [
        ["Avg 1st inns", "189.1", "Totals inflate fast"],
        ["Avg 2nd inns", "179.8", "Chases stay within reach"],
        ["Bat-first wins", "10", "Not a graveyard for defending"],
        ["Bat-second wins", "9", "Chasing edge is small"]
      ]
    },
    content: `
Bengaluru is often discussed like a one-rule venue: “Win the toss, chase.” The numbers do show that captains habitually choose to field. But CricDNA’s venue split suggests a more nuanced reality: **bat-first wins (10) vs bat-second wins (9)** in this dataset ([venueStats.json](../server/data/venueStats.json)).

### What the pitch usually offers
The ground’s scoring base is high:
- **Avg first innings: 189.1**
- **Avg second innings: 179.8**
([venueStats.json](../server/data/venueStats.json))

So the pitch is typically true. That doesn’t mean bowling is irrelevant; it means the bowler’s value comes from wickets and hard lengths, not from “squeezing.”

### Why batting first can still work
When both teams are capable chasers, chasing becomes a psychological advantage — you always know what you need. But that also means a strong batting-first side can “over-par” the game.

If you bat first and post 205+, you force the chasing team to take risks earlier than they want. At a venue where the middle overs already run at **8.86 rpo** historically ([venueStats.json](../server/data/venueStats.json)), the chase can slip into over-aggression.

### CricDNA call
The pitch should be batting-friendly. If you win the toss, fielding first will still be the default. But if conditions look dry and the ball is gripping, batting first and pushing past the venue’s par (roughly 190) can be a match-winning move.
`
  },
  {
    id: 6,
    slug: "ipl-2026-match-26-rcb-vs-dc-toss-report-the-toss-isnt-a-decision-its-a-reflex",
    title: "RCB vs DC toss report: At Chinnaswamy, the toss isn’t a decision — it’s a reflex",
    subtitle: "CricDNA’s dataset shows teams have chosen to field first in 100% of matches in this sample.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "4 min",
    tags: ["IPL 2026", "RCB", "DC", "Toss", "Chinnaswamy"],
    featured: false,
    relatedPlayerIds: [],
    matchId: 26,
    content: `
If you want one number that explains captaincy at Bengaluru, it’s this: teams have chosen to **field first 100%** of the time in CricDNA’s sample for **M Chinnaswamy Stadium, Bengaluru** ([venueStats.json](../server/data/venueStats.json)).

That does not mean batting first can’t win — the win split is close. But it tells you what captains believe: chasing is the safer way to manage a run-heavy venue.

### Why captains chase here
Bengaluru’s phase scoring gives the answer:
- Powerplay: **8.51 rpo**
- Middle: **8.86 rpo**
- Death: **10.97 rpo**
([venueStats.json](../server/data/venueStats.json))

When all three phases score quickly, totals become less predictive. If a team is always “one over away” from flipping the game, captains prefer the informational advantage of a chase.

### CricDNA call
If RCB/DC win the toss, expect the default: bowl first. The only reason to bat first is if you believe conditions will get harder (slower pitch, gripping ball) and you can still post a total well above the venue’s par band.
`
  },
  {
    id: 7,
    slug: "ipl-2026-match-27-srh-vs-csk-preview-hyderabad-is-a-batters-ground-with-a-chasing-lean",
    title: "Match 27 preview (SRH vs CSK): Hyderabad is a batter’s ground — but the chase has a slight edge",
    subtitle: "Rajiv Gandhi (Uppal) averages 189.4 first innings and 181.9 second innings in CricDNA’s dataset.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "CSK", "Match 27", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [8, 9, 14, 10, 18],
    matchId: 27,
    chartData: [
      { label: "Avg 1st inns", value: 189.4, color: "#1f77b4" },
      { label: "Avg 2nd inns", value: 181.9, color: "#ff7f0e" }
    ],
    content: `
SRH vs CSK at Hyderabad is another fixture where the venue dictates most of the strategic conversation. CricDNA’s dataset for **Rajiv Gandhi International Stadium, Uppal, Hyderabad** lists an **average first-innings score of 189.4** and an **average second-innings score of 181.9** ([venueStats.json](../server/data/venueStats.json)).

Those are not “slightly high” numbers. They are outright batter-friendly, suggesting you should expect the game to stay in reach deep into the second innings.

### How Hyderabad scores
The phase run-rates are aggressive throughout:
- Powerplay: **8.81 rpo**
- Middle: **8.58 rpo**
- Death: **10.73 rpo**
([venueStats.json](../server/data/venueStats.json))

The middle isn’t a slowdown. That’s the key. Teams can keep scoring without taking reckless risks, which is why 200 doesn’t automatically lock the match.

### Toss and game plan
The dataset shows a mild preference to chase: bat-second wins (10) vs bat-first wins (8), and teams choose to field first **57.9%** of the time ([venueStats.json](../server/data/venueStats.json)). It’s not an overwhelming bias, but it’s enough to nudge captains toward bowling first.

### CricDNA call
Expect a run-heavy match where bowling plans are wicket-first. The side that manages the death overs better — with yorkers, wide lines, and smart matchups — is the side that will control the only “low-scoring” phase Hyderabad offers.
`
  },
  {
    id: 8,
    slug: "ipl-2026-match-28-kkr-vs-rr-preview-eden-gardens-is-a-chasers-venue-dont-underestimate-165",
    title: "Match 28 preview (KKR vs RR): Eden Gardens is a chaser’s venue — don’t underestimate 165",
    subtitle: "Eden’s bat-second win% is 61.0% in CricDNA’s venue dataset.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "RR", "Match 28", "Eden Gardens"],
    featured: false,
    relatedPlayerIds: [7, 12, 20, 23],
    matchId: 28,
    chartData: [
      { label: "Bat first win%", value: 39.0, color: "#d62728" },
      { label: "Bat second win%", value: 61.0, color: "#2ca02c" }
    ],
    content: `
KKR return home to Eden Gardens for Match 28, and the venue numbers are loud enough to influence tactics before the first ball. CricDNA’s dataset for **Eden Gardens** shows teams win batting second **47 times out of 77** — a **61.0%** chasing success rate ([venueStats.json](../server/data/venueStats.json)).

That chasing tilt matters because it changes how you should read “par.” At Eden, you don’t need 200 to feel safe. You need a plan that holds under chase pressure.

### What Eden usually demands
Eden’s historical averages are more modest than Bengaluru/Hyderabad:
- Avg first innings: **160.2**
- Avg second innings: **147.1**
([venueStats.json](../server/data/venueStats.json))

But the death overs still move: **9.37 rpo** historically, after 7.28 rpo in the powerplay and 7.51 in the middle ([venueStats.json](../server/data/venueStats.json)). This is why 165-175 can be defendable if you take wickets — and why it can still be chased if you leak boundaries late.

### Toss behaviour
Teams choose to field first **63.6%** of the time at Eden ([venueStats.json](../server/data/venueStats.json)). It’s not as extreme as Bengaluru, but it’s a consistent signal: captains prefer to know the target.

### CricDNA call
If you’re batting first, push past 170 and protect your death overs. If you’re chasing, treat the middle overs as your “base-building” phase and keep wickets intact so you can exploit Eden’s late scoring bump.
`
  },
  {
    id: 9,
    slug: "ipl-2026-analysis-what-makes-a-chasing-venue-three-stats-that-predict-the-toss-decision",
    title: "Three numbers that create a chasing venue (and why captains keep choosing to field)",
    subtitle: "Toss behaviour is usually logical: it’s about death-overs pace, win split, and volatility.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "7 min",
    tags: ["IPL 2026", "toss", "venues", "analysis"],
    featured: false,
    relatedPlayerIds: [],
    dataTable: {
      headers: ["Venue", "Toss field%", "Bat-first win%", "Death RPO"],
      rows: [
        ["Chinnaswamy (Bengaluru)", "100.0", "52.6", "10.97"],
        ["Narendra Modi (Ahmedabad)", "81.8", "48.5", "10.75"],
        ["Eden Gardens (Kolkata)", "63.6", "39.0", "9.37"],
        ["Rajiv Gandhi (Hyderabad)", "57.9", "44.4", "10.73"]
      ]
    },
    content: `
The toss is often reduced to superstition. In reality, most toss decisions in the IPL are grounded in three venue signals:

1) **How fast the death overs score**
2) **How strong the chasing win-rate is**
3) **How volatile the scoring is across phases**

You can see all three at work when you compare four IPL 2026 venues using CricDNA’s venue dataset.

### 1) Death overs pace: the venue’s “multiplier”
When death overs are fast, captains prefer chasing because they can hold back hitters and still expect a late surge.

- Bengaluru’s death overs average **10.97 rpo** ([venueStats.json](../server/data/venueStats.json)).
- Ahmedabad’s death overs average **10.75 rpo** ([venueStats.json](../server/data/venueStats.json)).
- Hyderabad’s death overs average **10.73 rpo** ([venueStats.json](../server/data/venueStats.json)).

If you know you can score 55-65 in the last five with wickets, the chase becomes “controllable.”

### 2) Chasing win split: evidence beats instinct
Eden Gardens is the clean example: teams win batting second **61.0%** of the time in this sample ([venueStats.json](../server/data/venueStats.json)). Captains choose to field first **63.6%** of the time ([venueStats.json](../server/data/venueStats.json)). The behaviour matches the record.

### 3) Volatility: flat scoring makes totals less predictive
Bengaluru is the best example of phase flatness: powerplay **8.51 rpo**, middle **8.86**, death **10.97** ([venueStats.json](../server/data/venueStats.json)). When the middle isn’t slow, teams can keep pace in a chase without taking extreme risk.

### CricDNA takeaway
The toss is rarely “50-50” in practice because venues aren’t neutral. If you want to predict toss choices, don’t guess. Look at (a) death overs, (b) win split, and (c) whether the middle overs allow a chase to stay alive.
`
  },
  {
    id: 10,
    slug: "ipl-2026-analysis-why-180-is-not-a-universal-par-total",
    title: "Why 180 isn’t a universal par total: Bengaluru vs Eden tells the whole story",
    subtitle: "A one-number idea of ‘par’ fails because venues have different phase profiles.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-18",
    readTime: "7 min",
    tags: ["IPL 2026", "venues", "par score", "analysis"],
    featured: false,
    relatedPlayerIds: [],
    chartData: [
      { label: "Bengaluru avg 1st inns", value: 189.1, color: "#1f77b4" },
      { label: "Eden avg 1st inns", value: 160.2, color: "#ff7f0e" },
      { label: "Ahmedabad avg 1st inns", value: 186.6, color: "#2ca02c" },
      { label: "Hyderabad avg 1st inns", value: 189.4, color: "#9467bd" }
    ],
    content: `
Fans love a clean benchmark: “180 is par.” Match 25 (GT vs KKR) is a good example of why that idea breaks. KKR made 180 and lost, while on other grounds 180 can still be defendable.

The answer is venue shape. CricDNA’s venue dataset shows that “par” is not one number — it’s a band tied to phase scoring.

### Bengaluru: 180 is often a starting point
At **M Chinnaswamy Stadium, Bengaluru**, the average first innings is **189.1** ([venueStats.json](../server/data/venueStats.json)). The venue’s middle overs run at **8.86 rpo** and death overs at **10.97 rpo** ([venueStats.json](../server/data/venueStats.json)). That means 180 is often below the venue’s natural output.

### Eden Gardens: 180 can be above-par — but chasing still wins often
At **Eden Gardens**, the average first innings is **160.2** and death overs are **9.37 rpo** ([venueStats.json](../server/data/venueStats.json)). Here, 180 is more like “over-par.” Yet the chasing win rate is still strong: bat-second wins **61.0%** of the time in this sample ([venueStats.json](../server/data/venueStats.json)).

### Ahmedabad and Hyderabad: big totals, big chases
Ahmedabad’s average first innings is **186.6** ([venueStats.json](../server/data/venueStats.json)) and Hyderabad’s is **189.4** ([venueStats.json](../server/data/venueStats.json)). Both venues also have death-overs pace above **10.7 rpo** ([venueStats.json](../server/data/venueStats.json)). That combination makes 180 feel “competitive” but not “safe.”

### CricDNA takeaway
Stop arguing about whether 180 is par in the abstract. Ask a better question: what does the venue’s phase curve say a batting side can score, and what does the venue’s chase record say about how defendable targets really are?
`
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "player",
    title: "Player of the day",
    value: "Shubman Gill — 86 (50)",
    description: "Gill’s 86 off 50 anchored GT’s chase of 181 with two balls to spare in Ahmedabad.",
    playerIds: [5]
  },
  {
    type: "stat",
    title: "Venue signal",
    value: "Ahmedabad: death overs 10.75 rpo",
    description: "Narendra Modi Stadium’s historical death-overs pace makes 180 a ‘competitive’ total, not a ‘safe’ one."
  },
  {
    type: "matchup",
    title: "Next up: chase-friendly Bengaluru",
    value: "RCB vs DC at Chinnaswamy",
    description: "Bengaluru averages 189.1 first innings and captains field first almost every time in CricDNA’s dataset.",
    teamColors: ["#D71920", "#2563eb"]
  }
];
