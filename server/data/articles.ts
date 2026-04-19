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
    slug: "ipl-2026-match-26-rcb-vs-dc-recap-miller-stubbs-chase-down-176-at-chinnaswamy",
    title: "IPL 2026 Match 26 (RCB vs DC) recap: Miller + Stubbs finish a 176 chase at Chinnaswamy",
    subtitle: "Delhi Capitals chased 176 and finished on 179/4 (19.5 ov) to beat RCB by 6 wickets with 1 ball left in Bengaluru on April 18.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "7 min",
    tags: ["IPL 2026", "RCB", "DC", "Match 26", "Bengaluru"],
    featured: true,
    relatedPlayerIds: [22, 16, 11, 30, 1],
    matchId: 26,
    chartData: [
      { label: "Powerplay RPO", value: 8.51, color: "#1f77b4" },
      { label: "Middle overs RPO", value: 8.86, color: "#ff7f0e" },
      { label: "Death overs RPO", value: 10.97, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Chinnaswamy (historical)", "Value", "Why it mattered for Match 26"],
      rows: [
        ["Avg 1st inns", "189.1", "175/8 was below par by venue standards"],
        ["Avg 2nd inns", "179.8", "176 is routinely chaseable here"],
        ["Toss: field first", "100%", "Captains historically back chasing"],
        ["Highest score", "287", "One explosive phase can flip the game"]
      ]
    },
    content: `
Delhi Capitals’ six-wicket win over Royal Challengers Bengaluru in Match 26 wasn’t a surprise because of the names involved — it was predictable because of the venue.

RCB posted **175/8**, and DC chased **176** to finish at **179/4 in 19.5 overs**, winning with **one ball remaining** ([IPLT20 match report](https://www.iplt20.com/news/4301/tata-ipl-2026-match-26-rcb-vs-dc-match-report)) ([ESPNcricinfo](https://www.espncricinfo.com/series/ipl-2026-1510719)). The finishing came from a familiar IPL axis: an anchor inning that kept the chase stable, followed by a late over that turned pressure into points.

### Why the chase looked “gettable” from ball one
CricDNA’s venue dataset for **M Chinnaswamy Stadium, Bengaluru** describes the modern template: **189.1** average first-innings score, **179.8** average second-innings score, and a historical scoring curve that only accelerates as the innings progresses — **8.51 rpo** in the powerplay, **8.86** in the middle, then **10.97** at the death ([venueStats.json](../server/data/venueStats.json)).

That math changes how you read 175. At many grounds it’s a strong total; here it’s “good, not safe.” DC didn’t need to play an extraordinary chase — they needed to keep wickets and take the game to the last five overs, where the ground consistently pays hitters.

### The hidden turning point: early wickets didn’t break the chase
The IPLT20 match report notes DC were rocked early, before stabilising through a mature innings by **Tristan Stubbs (Player of the Match)** and the decisive finishing from **David Miller** ([IPLT20 match report](https://www.iplt20.com/news/4301/tata-ipl-2026-match-26-rcb-vs-dc-match-report)). Chinnaswamy chases often work this way: powerplay losses feel dramatic, but the venue’s baseline run rate means the chase remains “alive” as long as you avoid a total collapse.

This is where DC’s chase model looked smarter than RCB’s defense model. DC accepted that a few overs would be about survival. They also trusted that the same ground which inflates totals would inflate finishing possibilities.

### The decisive over: death-overs venue bias, weaponised
Miller’s final-over burst was the headline because it was spectacular — but analytically it was also an expression of venue bias. When a stadium’s historical death-overs run rate sits near **11 rpo**, the final over isn’t an exception; it’s where matches often get decided ([venueStats.json](../server/data/venueStats.json)).

If the ball isn’t moving and the boundary dimensions allow one mis-executed length to travel, a 15-run “must defend” over becomes a structural disadvantage for the fielding side.

### What RCB could have done differently
RCB’s 175/8 wasn’t far away. But at this venue, your margin comes from *one extra scoring pocket*:
- a sixth batter who adds 15 more at the death, or
- a bowling plan that forces hitters to go square instead of straight.

Without that extra pocket, you’re defending “par-minus” with a par bowling plan.

### CricDNA takeaway
Chinnaswamy rewards teams that **treat the chase like a two-act play**: stay within touching distance, then cash in late. DC did exactly that, and the scoreboard reflects it.
`
  },
  {
    id: 2,
    slug: "ipl-2026-match-26-rcb-vs-dc-analysis-why-175-wasnt-enough-at-chinnaswamy",
    title: "Match 26 analysis: Why 175 wasn’t enough at Chinnaswamy (and rarely is)",
    subtitle: "Bengaluru’s phase scoring curve makes ‘defendable’ totals look fragile, especially at the death.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "DC", "Bengaluru", "strategy"],
    featured: false,
    relatedPlayerIds: [],
    matchId: 26,
    chartData: [
      { label: "Avg 1st inns", value: 189.1, color: "#6baed6" },
      { label: "RCB score", value: 175, color: "#2171b5" },
      { label: "Avg 2nd inns", value: 179.8, color: "#9ecae1" }
    ],
    content: `
The simplest way to understand RCB’s loss to Delhi Capitals is to stop treating **175** like a “biggish total” and start treating it like a **venue-adjusted number**.

RCB made **175/8**, but DC chased down **176** and finished **179/4 in 19.5 overs** ([ESPNcricinfo](https://www.espncricinfo.com/series/ipl-2026-1510719)) ([IPLT20 match report](https://www.iplt20.com/news/4301/tata-ipl-2026-match-26-rcb-vs-dc-match-report)). If this game was played at a slower surface, 175 could have demanded risk; at Chinnaswamy it simply demanded patience.

### The Chinnaswamy baseline is not “high scoring” — it’s compounding
CricDNA’s venue dataset lists **189.1** as the average first-innings score and **179.8** as the average second-innings score at M Chinnaswamy Stadium, Bengaluru ([venueStats.json](../server/data/venueStats.json)). That alone tells you 175 is more like “slightly below par” than “tournament-defining.”

More importantly, the run rate *compounds* across phases:
- Powerplay: **8.51 rpo**
- Middle overs: **8.86 rpo**
- Death: **10.97 rpo**

That curve matters because it rewards teams that arrive at over 15 with wickets in hand. The last five overs are not an explosion; they are the venue’s expectation ([venueStats.json](../server/data/venueStats.json)).

### Why DC’s early wobble didn’t reduce their win probability much
The IPLT20 match report describes DC being rattled early before Stubbs anchored and Miller finished ([IPLT20 match report](https://www.iplt20.com/news/4301/tata-ipl-2026-match-26-rcb-vs-dc-match-report)). At a venue where chasing teams average nearly 180, early wickets mostly change *who finishes* — not whether the chase stays possible.

That’s the key tactical lesson: if you’re defending 175 here, you need more than wickets; you need **dot-ball pressure** in the middle to force a 12+ required rate before the death overs.

### The defensive plan that usually works here
Chinnaswamy defenses typically require two conditions:
1) You keep the batting side to 45–50 in the powerplay (so they don’t get ahead of the curve).
2) You win at least two overs in the 11–16 window (so the finishers don’t enter with “manageable” maths).

Without those conditions, the finishing advantage swings to the batting team. That is what happened when Miller was able to attack in the final over.

### CricDNA takeaway
At this stadium, a defendable total is usually **190+**, or a total with a plan that squeezes the middle. 175 can win, but it has to be defended like 200 — with precision, not hope.
`
  },
  {
    id: 3,
    slug: "ipl-2026-match-27-srh-vs-csk-recap-abhishek-15-ball-fifty-sets-up-10-run-win",
    title: "IPL 2026 Match 27 (SRH vs CSK) recap: Abhishek’s 15-ball fifty sets up SRH’s 10-run win",
    subtitle: "SRH made 194/9 and held CSK to 184/8 to win by 10 runs in Hyderabad on April 18.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "7 min",
    tags: ["IPL 2026", "SRH", "CSK", "Match 27", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [28, 8, 10, 14, 9],
    matchId: 27,
    chartData: [
      { label: "Avg 1st inns (Uppal)", value: 156.1, color: "#fb6a4a" },
      { label: "SRH score", value: 194, color: "#cb181d" },
      { label: "Avg 2nd inns (Uppal)", value: 147.0, color: "#fcae91" }
    ],
    dataTable: {
      headers: ["Uppal (historical)", "Value", "Signal"],
      rows: [
        ["Avg 1st inns", "156.1", "194 is well above normal par"],
        ["Bat-second win%", "61.2%", "Chasing is usually preferred"],
        ["Powerplay RPO", "6.69", "Fast starts are extra valuable"],
        ["Death RPO", "9.56", "Wickets at the end can still swing games"]
      ]
    },
    content: `
Sunrisers Hyderabad’s 10-run win over Chennai Super Kings in Match 27 was a rare IPL combination: a **powerplay blitz** that built a big total, followed by a **bowling squeeze** that turned a chase into a slow suffocation.

SRH posted **194/9**, and CSK replied with **184/8**, falling short by **10 runs** in Hyderabad ([NDTV Sports](https://sports.ndtv.com/ipl-2026/srh-vs-csk-live-score-sunrisers-hyderabad-vs-chennai-super-kings-cricket-match-scorecard-live-updates-ipl-2026-ms-dhoni-sanju-samson-ishan-kishan-11376080)) ([IPLT20 match results](https://www.iplt20.com/matches/results)). The match story begins with **Abhishek Sharma’s 15-ball fifty** and continues with CSK’s inability to sustain momentum after a strong mid-chase position ([NDTV Sports](https://sports.ndtv.com/ipl-2026/srh-vs-csk-live-score-sunrisers-hyderabad-vs-chennai-super-kings-cricket-match-scorecard-live-updates-ipl-2026-ms-dhoni-sanju-samson-ishan-kishan-11376080)).

### Why 194 mattered more at this ground
CricDNA’s venue dataset for **Rajiv Gandhi International Stadium, Uppal** lists an average first-innings score of **156.1** and average second-innings score of **147.0** ([venueStats.json](../server/data/venueStats.json)). In other words, 194 is not a “good” total here — it’s a distortion of the ground’s normal run environment.

This is why Abhishek’s powerplay burst mattered: Uppal’s historical powerplay run rate is **6.69 rpo** ([venueStats.json](../server/data/venueStats.json)). If you score at 9–10 rpo early at a venue that usually starts slower, you don’t just add runs; you force the opposition to play outside the venue’s default rhythm.

### The chase pivot: from ‘on track’ to ‘overpriced’
NDTV’s match coverage notes CSK needed **84 off the final 10 overs** at one point, but could not close it out ([NDTV Sports](https://sports.ndtv.com/ipl-2026/srh-vs-csk-live-score-sunrisers-hyderabad-vs-chennai-super-kings-cricket-match-scorecard-live-updates-ipl-2026-ms-dhoni-sanju-samson-ishan-kishan-11376080)). That is the point where many chases are won — but it’s also where losing one set batter can flip the required rate from “comfortable” to “sharp.”

Uppal’s death-overs run rate is **9.56 rpo** historically ([venueStats.json](../server/data/venueStats.json)). In simple terms: you can finish well here, but you still need clean execution. SRH’s wickets in the back half ensured CSK couldn’t keep their best hitters for the last acceleration.

### CricDNA takeaway
At Uppal, huge totals are less common, which means they carry extra psychological weight. SRH used the powerplay to create that weight — and then bowled like a team defending 210.
`
  },
  {
    id: 4,
    slug: "ipl-2026-match-28-kkr-vs-rr-pitch-report-eden-gardens-chasing-advantage",
    title: "KKR vs RR, Match 28 pitch report: Eden Gardens rewards chasing, but par is still around 160",
    subtitle: "Eden’s historical chase edge is real (47 wins vs 30 batting-first), but the surface demands smart matchups in the middle overs.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "RR", "Match 28", "Eden Gardens", "pitch report"],
    featured: false,
    relatedPlayerIds: [7, 12, 20, 21, 23],
    matchId: 28,
    chartData: [
      { label: "Avg 1st inns", value: 160.2, color: "#3182bd" },
      { label: "Avg 2nd inns", value: 147.1, color: "#9ecae1" },
      { label: "Bat-second wins", value: 47, color: "#31a354" }
    ],
    dataTable: {
      headers: ["Eden Gardens metric", "Value", "Read"],
      rows: [
        ["Total matches", "77", "Large sample: trends are meaningful"],
        ["Bat-first win%", "39.0%", "Chasing advantage is consistent"],
        ["Toss field%", "63.6%", "Most captains choose to chase"],
        ["Death overs RPO", "9.37", "Finishing overs are high-value"]
      ]
    },
    content: `
Eden Gardens has a reputation for being a “big night, big totals” venue — and that’s true on its best days. But the more consistent truth is this: **Eden rewards the team that manages the chase better**, especially when the dew arrives and the outfield speeds up.

CricDNA’s venue dataset for **Eden Gardens (Kolkata)** shows **77** IPL matches, with **47 wins chasing** and **30 wins batting first** (bat-first win% **39.0%**) ([venueStats.json](../server/data/venueStats.json)). Captains choose to field first **63.6%** of the time ([venueStats.json](../server/data/venueStats.json)), which reflects the same idea: chasing is usually the cleaner option.

### What is a “good” first-innings score here?
Historically, Eden’s average first-innings score is **160.2**, with an average chase of **147.1** ([venueStats.json](../server/data/venueStats.json)). That gap hints at two common patterns:
1) Teams setting a target often lose because the ball gets easier to hit later.
2) Teams chasing can pace the innings and target the weakest overs.

So for Match 28, think of “par” as 160–170. Anything beyond that is obviously useful, but Eden’s chase bias means even 180 needs to be defended well.

### Phase scoring: where Eden creates separation
Eden’s scoring profile shows a steady progression: **7.28 rpo** in the powerplay, **7.51** in the middle, and **9.37** at the death ([venueStats.json](../server/data/venueStats.json)). This is a classic “hold wickets for the finish” ground.

For batting teams, the biggest mistake is using too many resources early. For bowling teams, the biggest mistake is not planning for the last five overs as a distinct battle.

### Matchups to watch
Even without perfect ball-by-ball data, the head-to-head dataset highlights why Eden middle overs are about matchups:
- **Rohit Sharma vs Sunil Narine**: 143 runs off 134 balls with **8 dismissals** (SR **106.72**, average **17.88**) — Narine has historically kept Rohit quiet and taken him out ([headToHead.json](../server/data/headToHead.json)).

If KKR use Narine early against RR’s top order equivalents and control the matchup, they can buy themselves a “cheap” over or two — which is gold at Eden.

### CricDNA takeaway
If you win the toss, the numbers point to chasing. If you bat first, treat 170 as a minimum and plan your innings to arrive at over 15 with hitters intact.
`
  },
  {
    id: 5,
    slug: "ipl-2026-match-28-kkr-vs-rr-toss-report-eden-gardens-field-first-edge",
    title: "KKR vs RR, Match 28 toss report: Field first is the percentage play at Eden Gardens",
    subtitle: "At Eden, teams that field first after winning the toss win 63.3% of the time historically.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "5 min",
    tags: ["IPL 2026", "KKR", "RR", "Match 28", "toss"],
    featured: false,
    relatedPlayerIds: [12, 21, 23, 7, 20],
    matchId: 28,
    chartData: [
      { label: "Toss field-first win%", value: 63.3, color: "#31a354" },
      { label: "Toss bat-first win%", value: 42.9, color: "#756bb1" }
    ],
    dataTable: {
      headers: ["Eden Gardens toss trend", "Count", "Wins", "Win%"],
      rows: [
        ["Chose to field", "49", "31", "63.3%"],
        ["Chose to bat", "28", "12", "42.9%"]
      ]
    },
    content: `
If you only get one decision before the first ball, Eden Gardens is one of the venues where the decision has real historical weight.

In CricDNA’s toss dataset for **Eden Gardens**, teams that win the toss choose to **field first** far more often (**49** times vs **28** choosing to bat), and they also win more often: **31 wins out of 49** when fielding first (win% **63.3%**) versus **12 wins out of 28** when batting first (win% **42.9%**) ([tossStats.json](../server/data/tossStats.json)).

### Why the toss matters more at Eden
Eden’s venue profile shows a chase bias: **47 wins batting second** compared to **30 wins batting first** ([venueStats.json](../server/data/venueStats.json)). The underlying reason is typically late-innings ease: a faster outfield, a slightly skiddier ball, and (often) dew.

The toss data doesn’t “guarantee” a chase win. It just tells you what has worked for a long time. Your job is to understand what you’re buying by bowling first:
- clearer planning (you know the target)
- the ability to time your overs for your best bowlers
- a higher chance that conditions get better for batting

### What teams should do with the information
If KKR or RR win the toss:
1) Field first unless you strongly expect a dry, abrasive surface that will slow down.
2) Pick an XI that can exploit the powerplay with swing/seam (to stop 55+ powerplays).
3) Keep a wicket-taking option for overs 7–12 to prevent the batting side from arriving at 15 overs with 7 wickets.

### CricDNA takeaway
The percentage call for Match 28 is simple: **field first**. Eden’s history says it’s the decision that gives you the biggest edge before a ball is bowled.
`
  },
  {
    id: 6,
    slug: "ipl-2026-match-28-kkr-vs-rr-preview-the-eden-chase-game-and-middle-overs-matchups",
    title: "KKR vs RR, Match 28 preview: Eden’s chase game and the middle-overs matchups that decide it",
    subtitle: "Eden Gardens is a chase-friendly venue, but the game is usually won in overs 7–15 through matchup control.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "7 min",
    tags: ["IPL 2026", "KKR", "RR", "Match 28", "preview"],
    featured: false,
    relatedPlayerIds: [7, 12, 20, 21, 23],
    matchId: 28,
    content: `
Sunday afternoon at Eden Gardens brings a predictable question: how big is big enough?

Historically, Eden is a chasing venue — **47 wins batting second vs 30 batting first** across 77 matches ([venueStats.json](../server/data/venueStats.json)). That doesn’t mean “batting second always wins.” It means the team chasing often gets the conditions, the clarity, and the phase-by-phase pacing advantage.

### The venue template
Eden’s historical run rates by phase are:
- Powerplay: **7.28 rpo**
- Middle: **7.51 rpo**
- Death: **9.37 rpo**

This is a venue where the game usually stays even until over 12–13, then swings on whether the chasing side has wickets and whether the bowling side has matchup control ([venueStats.json](../server/data/venueStats.json)).

### The matchup lens: where overs 7–15 are decided
The head-to-head dataset surfaces a useful archetype: elite spinners who both slow and dismiss.

One of the clearest examples is **Rohit Sharma vs Sunil Narine**: 8 dismissals, average **17.88**, and a strike rate of **106.72** across 134 balls ([headToHead.json](../server/data/headToHead.json)). Even if Rohit isn’t in this specific match, the lesson holds: Narine-style bowlers can make a top-order batter play at a suboptimal pace and then take them out.

For Match 28, the team that wins the middle overs will likely win the match:
- If KKR’s spinners create dot-ball pressure, RR’s finishers will enter with a “too-steep” chase.
- If RR handle the middle without losing wickets, Eden’s death overs become a boundary hunt.

### What “par” looks like
Eden’s average first-innings score is **160.2** ([venueStats.json](../server/data/venueStats.json)). So treat 160 as baseline par, 175 as competitive, and 190 as strong — but remember the chase bias.

### CricDNA takeaway
At Eden, plans beat panic. Batting second is an advantage, but only if you protect wickets through the middle and reach the death overs with hitters ready.
`
  },
  {
    id: 7,
    slug: "ipl-2026-match-29-pbks-vs-lsg-preview-mullanpur-wants-a-full-20-overs-batting-innings",
    title: "PBKS vs LSG, Match 29 preview: Mullanpur wants a full 20-over batting innings",
    subtitle: "With an average first-innings score of 163 and a death-overs run rate above 10, this venue punishes collapses.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "7 min",
    tags: ["IPL 2026", "PBKS", "LSG", "Match 29", "preview", "New Chandigarh"],
    featured: false,
    relatedPlayerIds: [22, 2, 17],
    matchId: 29,
    chartData: [
      { label: "Avg 1st inns", value: 163.0, color: "#3182bd" },
      { label: "Avg 2nd inns", value: 155.4, color: "#9ecae1" },
      { label: "Death RPO", value: 10.18, color: "#31a354" }
    ],
    content: `
Match 29 at New Chandigarh (Mullanpur) is the kind of fixture where the game can feel slow for 10 overs and then speed up dramatically.

CricDNA’s venue dataset for **Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur** shows an average first-innings score of **163.0** and average chase of **155.4** ([venueStats.json](../server/data/venueStats.json)). The death-overs run rate is **10.18 rpo** — meaning the final five overs are a genuine scoring window if you keep wickets in hand ([venueStats.json](../server/data/venueStats.json)).

### What the venue is telling both teams
This is a near coin-flip venue on results: bat-first wins **5**, bat-second wins **5** across 10 matches ([venueStats.json](../server/data/venueStats.json)). Toss trends show captains still lean toward fielding: **70%** of toss winners choose to bowl first ([venueStats.json](../server/data/venueStats.json)).

But there’s a more useful read than “field first”: *don’t waste overs*. The powerplay run rate is a brisk **8.61 rpo**, then it slows to **7.28** in the middle before jumping again at the death ([venueStats.json](../server/data/venueStats.json)).

That means batting innings succeed here when they are shaped like:
- a strong powerplay (without reckless risks)
- a middle overs phase that prioritises wickets
- a planned death-overs acceleration

### The toss angle
The toss dataset for this stadium shows:
- If you bat first after winning the toss: 2 wins from 3 (66.7%).
- If you field first after winning the toss: 4 wins from 7 (57.1%).

The sample is small (10 matches), but it suggests the toss isn’t everything — execution is ([tossStats.json](../server/data/tossStats.json)).

### CricDNA takeaway
The team that treats overs 13–20 as a “second innings” — with hitters preserved and clear targets for bowlers — will likely win Match 29.
`
  },
  {
    id: 8,
    slug: "ipl-2026-match-30-gt-vs-mi-preview-ahmedabad-death-overs-are-the-real-match",
    title: "GT vs MI, Match 30 preview: In Ahmedabad, the real match is the last five overs",
    subtitle: "Narendra Modi Stadium has a death-overs run rate of 10.75 historically; totals need a finishing plan.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "7 min",
    tags: ["IPL 2026", "GT", "MI", "Match 30", "preview", "Ahmedabad"],
    featured: false,
    relatedPlayerIds: [5, 13, 2, 12],
    matchId: 30,
    chartData: [
      { label: "Powerplay RPO", value: 8.46, color: "#1f77b4" },
      { label: "Middle overs RPO", value: 8.55, color: "#ff7f0e" },
      { label: "Death overs RPO", value: 10.75, color: "#2ca02c" }
    ],
    content: `
Two days after Ahmedabad hosted a chase that stayed alive until the 20th over, the venue hosts another fixture where the same question will dominate: can you finish?

CricDNA’s venue dataset for **Narendra Modi Stadium, Ahmedabad** lists an average first-innings score of **186.6** and average chase of **170.1** ([venueStats.json](../server/data/venueStats.json)). But the most important number is the phase scoring curve:
- Powerplay: **8.46 rpo**
- Middle: **8.55 rpo**
- Death: **10.75 rpo**

That last number is why Ahmedabad matches are rarely “done” at 15 overs ([venueStats.json](../server/data/venueStats.json)).

### What it means for GT vs MI
When death overs are that productive, the winning side is usually the one that:
1) preserves hitters for the final five, and
2) has bowlers who can either take wickets or execute yorkers under pressure.

### Matchup lens: the Narine effect (a proxy for elite spin control)
The head-to-head dataset offers a useful idea about controlling top-order rhythm: **Virat Kohli vs Sunil Narine** has a strike rate of **105.43** across 129 balls, with **4 dismissals** and a dot-ball rate of **34.9%** ([headToHead.json](../server/data/headToHead.json)).

Even though Narine isn’t in this match, the principle is relevant: if MI can slow GT’s top order for 3–4 overs, they can delay the death-overs explosion. If GT’s top order bats through, MI will be defending at the venue’s most dangerous phase.

### CricDNA takeaway
At Ahmedabad, your “total” is not your 20 overs — it’s your last 30 balls. GT and MI should build their innings and bowling plans around that reality.
`
  },
  {
    id: 9,
    slug: "ipl-2026-tactical-notes-the-chase-premium-where-field-first-wins-most",
    title: "IPL 2026 tactical notes: The chase premium — where field-first wins most",
    subtitle: "Three venues show clear historical advantage to chasing; build team plans around the toss and the phases.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "6 min",
    tags: ["IPL 2026", "tactics", "venues", "toss"],
    featured: false,
    relatedPlayerIds: [],
    chartData: [
      { label: "Eden Gardens (field-first win%)", value: 63.3, color: "#31a354" },
      { label: "M Chinnaswamy (field-first win%)", value: 56.1, color: "#74c476" },
      { label: "Uppal, Hyderabad (field-first win%)", value: 0, color: "#aaaaaa" }
    ],
    dataTable: {
      headers: ["Venue", "Matches", "Field-first (toss) win%", "Interpretation"],
      rows: [
        ["Eden Gardens", "77", "63.3%", "Strong chase edge"],
        ["M Chinnaswamy Stadium", "65", "56.1%", "Chasing often preferred"],
        ["Mullanpur (New Chandigarh)", "10", "57.1%", "Small sample; execution > toss"]
      ]
    },
    content: `
IPL matches are decided by players, but the *shape* of those matches is often decided by venues. The easiest place to see this is toss behaviour and win rates.

CricDNA’s toss dataset captures a simple question: when teams win the toss, do they bat or field — and what has worked historically? ([tossStats.json](../server/data/tossStats.json))

### Venue 1: Eden Gardens — a real chase premium
At Eden Gardens, teams that field first after winning the toss win **63.3%** of the time (31 wins in 49 matches), compared to **42.9%** when batting first (12 wins in 28) ([tossStats.json](../server/data/tossStats.json)).

That aligns with Eden’s overall chase record: **47 wins batting second vs 30 batting first** ([venueStats.json](../server/data/venueStats.json)).

### Venue 2: M Chinnaswamy — totals are big, but so are finishing overs
At M Chinnaswamy Stadium (Bangalore), teams choosing to field first after winning the toss win **56.1%** of the time (32 wins in 57) ([tossStats.json](../server/data/tossStats.json)).

The venue scoring curve explains why: powerplay **8.51 rpo**, middle **8.86**, death **10.97** ([venueStats.json](../server/data/venueStats.json)). When finishing overs are that productive, the team chasing can keep the game alive and time its acceleration.

### Venue 3: New Chandigarh (Mullanpur) — small sample, but a clear hint
At Mullanpur, toss winners choose to field **70%** of the time, and win **57.1%** when they do so (4 wins in 7) ([tossStats.json](../server/data/tossStats.json)). The sample is only 10 matches, so treat it as a hint, not a rule.

### CricDNA takeaway
The toss isn’t everything, but it is a *signal*. When the data says chasing is a premium play, teams should treat batting depth and death-over bowling as priority skills — not optional extras.
`
  },
  {
    id: 10,
    slug: "ipl-2026-head-to-head-lens-how-elite-spinners-change-batting-tempo",
    title: "Head-to-head lens: How elite spinners change batting tempo (and win matches)",
    subtitle: "Dot-ball pressure and dismissals are the real ‘economy’ — a look through the head-to-head dataset.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-19",
    readTime: "6 min",
    tags: ["IPL 2026", "analysis", "matchups", "spin"],
    featured: false,
    relatedPlayerIds: [13, 1, 12, 18],
    chartData: [
      { label: "Rohit vs Narine (dismissals)", value: 8, color: "#e34a33" },
      { label: "Kohli vs Narine (dismissals)", value: 4, color: "#fc8d59" },
      { label: "Kohli vs Jadeja (dismissals)", value: 3, color: "#fdbb84" }
    ],
    dataTable: {
      headers: ["Matchup", "Balls", "Runs", "Strike rate", "Dismissals", "Dot%"],
      rows: [
        ["Rohit Sharma vs Sunil Narine", "134", "143", "106.72", "8", "40.3%"],
        ["Virat Kohli vs Sunil Narine", "129", "136", "105.43", "4", "34.9%"],
        ["Virat Kohli vs Ravindra Jadeja", "160", "179", "111.87", "3", "31.9%"]
      ]
    },
    content: `
The most powerful bowling spells in the IPL rarely look dramatic on a highlight reel. They look like **dot balls**, quiet singles, and a batter who can’t find their favourite zones.

CricDNA’s head-to-head dataset captures this in a direct way: it combines runs, balls, dismissals and dot-ball percentage for specific batter-vs-bowler pairs ([headToHead.json](../server/data/headToHead.json)).

### Matchup 1: Rohit Sharma vs Sunil Narine — control plus wickets
Rohit has scored **143** runs off **134** balls against Narine, at a strike rate of **106.72** — but the real story is **8 dismissals** and a dot-ball rate of **40.3%** ([headToHead.json](../server/data/headToHead.json)).

This is what a “matchup win” looks like for a bowler. It’s not just economy. It’s slowing the batter and also taking them out.

### Matchup 2: Virat Kohli vs Sunil Narine — slowdown without total shutdown
Kohli’s numbers against Narine show a similar pattern: **136** off **129** balls (SR **105.43**), **4 dismissals**, dot-ball rate **34.9%** ([headToHead.json](../server/data/headToHead.json)).

For teams, this is strategically useful because it suggests Narine can be used as a “tempo breaker” — a bowler who changes the scoring rhythm of a chase even if he isn’t taking wickets every over.

### Matchup 3: Virat Kohli vs Ravindra Jadeja — safer, but still not free
Against Jadeja, Kohli has scored **179** off **160** balls (SR **111.87**) with **3 dismissals** and dot-ball rate **31.9%** ([headToHead.json](../server/data/headToHead.json)).

The pattern across all three matchups is consistent: elite spinners create value by forcing a batter to play an innings they don’t want to play.

### CricDNA takeaway
If you want to win IPL matches, don’t just chase wickets — chase the opponent’s tempo. The head-to-head data shows which bowlers can do both.
`
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Matchup watch: Rohit vs Narine",
    value: "8 dismissals",
    description: "Rohit Sharma has been dismissed 8 times by Sunil Narine, with a dot-ball rate of 40.3% — a classic tempo-and-wicket matchup.",
    playerIds: [13, 12]
  },
  {
    type: "stat",
    title: "Toss trend: Eden Gardens",
    value: "63.3% field-first wins",
    description: "At Eden, teams that field first after winning the toss win 63.3% of the time (31/49).",
    teamColors: ["#3a225d", "#ea1a4b"]
  },
  {
    type: "player",
    title: "Chase anchor: KL Rahul",
    value: "5222 runs (avg 46.21)",
    description: "KL Rahul’s career IPL record (5222 runs at 46.21, SR 136.03) underlines why anchors still matter in high-pressure chases.",
    playerIds: [22]
  }
];
