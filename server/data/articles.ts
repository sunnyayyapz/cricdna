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
    slug: "ipl-2026-match-24-mi-vs-pbks-recap-196-was-a-wankhede-chase-not-a-defense",
    title: "IPL 2026 Match 24 (MI vs PBKS) recap: 196 was a Wankhede chase, not a defense",
    subtitle: "PBKS hunted down 196 in 16.3 overs (198/3) after MI posted 195/6 on April 16 in Mumbai.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "MI", "PBKS", "Match 24", "Wankhede"],
    featured: true,
    content: `
Mumbai’s **195/6** should be a winning total on most grounds. At Wankhede, it is often just a starting point.

Punjab Kings’ chase to **198/3 in 16.3 overs** was shaped by two realities we already know about this venue:

1) Wankhede is built for chases.
2) If you give a strong batting side a clean ball for 10 overs, they can finish the match before your plans even begin.

### The venue context: why the chase always feels alive at Wankhede
CricDNA’s venue numbers for **Wankhede Stadium, Mumbai** list an **average first-innings score of 176.8** across 52 matches and an **average second-innings score of 167.7**.

But the more useful tells are the tactical indicators:
- Teams have won batting first only **40.4%** of the time.
- Captains choose to field first in **84.6%** of matches.
- The death-overs run rate is **10.76**.

Those three numbers describe a ground where defending is difficult because the finishing overs are naturally expensive, and because chasing teams routinely back themselves.

### MI’s innings: one massive anchor, a good total, and still not enough
MI’s innings was defined by Quinton de Kock’s unbeaten **112* off 60** (from match reporting) and the way it rescued a wobble.

From a strategy view, MI did two things right:
- They posted a score above the venue average.
- They kept the innings stable enough to launch at the end.

The problem is that at Wankhede, “above average” isn’t the same as “safe”. A venue with a 10.76 death-overs run rate is built for quick comebacks.

### PBKS’ chase: one partnership turned it into a 16-over match
PBKS were briefly two down early, but then the game flipped on the third-wicket stand.

Prabhsimran Singh’s **80* off 39** and Shreyas Iyer’s **66 off 35** (from match reporting) is the perfect chasing combination at Wankhede:
- One batter keeps boundary pressure constant.
- The other keeps the chase ahead of the required rate with clean risk selection.

Once PBKS were scoring comfortably above the venue’s already-healthy middle-overs run rate (**8.03**), MI’s path to defending 195 depended on constant wickets. They didn’t find them.

### The key MI issue the result exposes: wicketless “control” overs don’t win here
Wankhede doesn’t punish bowlers for being merely average; it punishes them for being unthreatening.

If you can’t create dismissal chances in overs 7–15, the chase becomes a math problem PBKS are happy to solve. This is also why teams field first so often here: you want the advantage of knowing whether you need 9s or 11s at the death.

### What this match says about PBKS and MI
- PBKS look like a team built to chase 180+ because their top order can score at pace without losing shape.
- MI’s batting can still post competitive totals, but their defense needs an earlier wicket phase because Wankhede doesn’t allow a “hold them to 8 an over” middle.

At this venue, 195 isn’t a statement. It’s an invitation.
    `,
    relatedPlayerIds: [2, 11, 16],
    matchId: 24,
    chartData: [
      { label: "Wankhede avg 1st inns", value: 176.8, color: "#1f77b4" },
      { label: "MI 195/6", value: 195, color: "#d62728" },
      { label: "PBKS 198/3", value: 198, color: "#2ca02c" }
    ]
  },
  {
    id: 2,
    slug: "match-24-micro-analysis-how-pbks-won-the-middle-overs-at-wankhede",
    title: "Match 24 micro-analysis: how PBKS won the middle overs at Wankhede",
    subtitle: "At a venue with an 8.03 middle-overs run rate, PBKS turned overs 7–15 into a runway.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "PBKS", "MI", "Wankhede", "Tactical"],
    featured: false,
    content: `
PBKS didn’t win Match 24 in the powerplay alone. They won it because the middle overs never slowed them down.

That matters because Wankhede’s “normal” scoring rhythm is already fast.

CricDNA’s venue dataset for **Wankhede Stadium, Mumbai** shows these phase run rates:
- Powerplay: **7.54 rpo**
- Middle overs: **8.03 rpo**
- Death overs: **10.76 rpo**

So the question in any chase here is simple: can the bowling side force the middle overs into a low-risk, low-boundary stretch? MI could not.

### What a successful Wankhede defense usually needs
On grounds with this scoring profile, defending teams generally need one of two things:

1) **Middle-overs wickets** to reset set batters.
2) **A grip-based bowling option** (hard length, cutters, a match-up spinner) that reliably drops the scoring below the venue’s middle-overs baseline.

If you have neither, you end up “waiting for the death” while the chase is already decided.

### PBKS’ innings structure: why it stayed ahead of the game
Even without a full ball-by-ball, the scoreboard and match reporting tell you enough:
- PBKS chased 196 in **16.3 overs**, which means they were scoring at nearly 12 rpo.
- A 139-run partnership between Prabhsimran Singh and Shreyas Iyer (from match reporting) suggests overs 7–15 were dominated rather than merely survived.

The technical feature of the stand was role clarity:
- Prabhsimran provided the boundary spikes.
- Iyer provided the “no-dot” rhythm that prevents bowlers from building sequences.

### Why MI’s plan didn’t bite
Wankhede is not a venue where defensive fields win you time. In fact, because chasing teams are comfortable with 10–12 per over late, a single quiet over doesn’t change their risk model.

MI’s only real lever was wickets. When those didn’t arrive, PBKS could keep choosing high-percentage boundary options.

### What to take forward: how to bowl here
If you’re a team defending totals at Wankhede, the numbers tell you what you must do:
- Bowl at least **one wicket phase** before the 15th over.
- Accept that the death will be expensive (10.76 rpo venue baseline) and plan your resources accordingly.

PBKS didn’t need a miracle finish. They just made sure the middle overs never became a squeeze.
    `,
    relatedPlayerIds: [11, 2, 16],
    chartData: [
      { label: "Powerplay rpo", value: 7.54, color: "#1f77b4" },
      { label: "Middle rpo", value: 8.03, color: "#ff7f0e" },
      { label: "Death rpo", value: 10.76, color: "#2ca02c" }
    ]
  },
  {
    id: 3,
    slug: "match-24-why-195-is-not-safe-at-wankhede-historical-context",
    title: "Match 24: why 195 is not safe at Wankhede — the historical context",
    subtitle: "Wankhede’s chase tilt is structural: only 40.4% wins for teams batting first in CricDNA’s venue dataset.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "Wankhede", "Venue trends", "MI", "PBKS"],
    featured: false,
    content: `
When a team scores 195 and still loses with more than three overs to spare, the instinct is to blame execution.

At Wankhede, the more honest answer is: *this is what the venue has always threatened to do.*

CricDNA’s venue dataset for **Wankhede Stadium, Mumbai** captures the pattern in simple numbers:
- **52** matches in the sample.
- **176.8** average first-innings score.
- **40.4%** win rate for teams batting first.
- Captains choose to field first in **84.6%** of matches.

That combination tells you two things:
1) Captains believe the chase is the better game plan.
2) Results have rewarded that belief often enough to make it repeatable behaviour.

### Why the chase advantage exists here
The chase advantage at Wankhede is not only “dew”. It’s a scoring geometry problem.

With a venue death-overs run rate of **10.76**, chases have a built-in finishing gear. That means chasing sides can absorb one quiet over and still finish with a burst.

Now compare that to a defending innings:
- If you’re defending 180–200, you need several overs in the 7–15 phase that are meaningfully below the venue’s middle-overs baseline (**8.03**).
- If you can’t do that, you arrive at the death defending a rate that batters already believe is gettable.

### How Match 24 fits the trend
MI’s 195 was above the venue average. PBKS still chased it down quickly.

That doesn’t automatically mean MI bowled poorly — it can also mean they didn’t create the one thing a Wankhede defense requires: wickets during the chase’s “setup” overs.

### The practical takeaway
If you’re playing at Wankhede, think in two target bands:
- **180–190:** competitive but fragile.
- **200+:** still not guaranteed, but it begins to force the chasing side into risk in the middle overs.

Match 24 was not a freak. It was a reminder that Wankhede totals have to be either huge, or paired with early strike bowling.
    `,
    relatedPlayerIds: [13, 2, 11],
    dataTable: {
      headers: ["Venue", "Matches", "Avg 1st inns", "Bat-first win%", "Toss field%"],
      rows: [["Wankhede Stadium, Mumbai", "52", "176.8", "40.4%", "84.6%"]]
    }
  },
  {
    id: 4,
    slug: "preview-ipl-2026-match-25-gt-vs-kkr-narendra-modi-stadium-conditions-and-key-battles",
    title: "IPL 2026 Match 25 preview (GT vs KKR): Ahmedabad’s scoring pace and the overs that decide it",
    subtitle: "Narendra Modi Stadium’s average first innings is 186.6 — a venue where 190 is normal and 210 is control.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "GT", "KKR", "Ahmedabad", "Match 25"],
    featured: false,
    content: `
Match 25 takes IPL 2026 to a ground that changes how teams think about “par”: **Narendra Modi Stadium, Ahmedabad**.

CricDNA’s venue dataset lists:
- **33** matches
- **186.6** average first-innings score
- **170.1** average second-innings score
- Captains field first **81.8%** of the time

That last number matters: even on a high-scoring ground, captains still prefer to chase because it gives clarity in a venue where the scoring ceiling is high.

### The surface profile: fast in every phase
Ahmedabad is not a venue with one “quiet” phase.

CricDNA’s phase run rates are:
- Powerplay: **8.46 rpo**
- Middle overs: **8.55 rpo**
- Death overs: **10.75 rpo**

That means the match is rarely decided by one 25-run death over alone. It’s decided by whether you can keep scoring above 8.5 without giving away clusters of wickets.

### What GT vs KKR should be planning for
On grounds like this, teams win by winning micro-battles:

1) **Overs 7–10** against the first change bowlers.
2) **Overs 13–16** when batters try to bridge into the death.

If you lose either with wickets, you can still score 190. But you usually can’t score 215.

### Match-up lens (macro)
Without leaning on player-specific splits, the strategic contrast is straightforward:
- If GT have top-order stability (Gill as the anchor profile), they can keep the innings smooth and attack late.
- If KKR can force GT into early rebuild mode, they can keep the game inside the 185–195 band.

### CricDNA targets
Given the venue average of **186.6**, the bands look like this:
- **185–195:** competitive.
- **200+:** advantage.
- **210+:** you begin to control the chase.

If dew shows up and the ball skids, chasing becomes even more attractive — which explains why captains field first over 80% of the time here.

Expect a game where the “best” innings isn’t the one with the most sixes, but the one with the fewest quiet overs.
    `,
    relatedPlayerIds: [5, 27, 25],
    matchId: 25,
    chartData: [
      { label: "Ahmedabad avg 1st inns", value: 186.6, color: "#1f77b4" },
      { label: "Competitive band", value: 195, color: "#ff7f0e" },
      { label: "Control band", value: 210, color: "#2ca02c" }
    ]
  },
  {
    id: 5,
    slug: "pitch-report-narendra-modi-stadium-ahmedabad-par-score-and-phase-rates",
    title: "Pitch report: Narendra Modi Stadium, Ahmedabad — why 190 is average and 210 is the real goal",
    subtitle: "Ahmedabad’s phase run rates are high across the board: 8.46 (PP), 8.55 (middle), 10.75 (death).",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "Pitch report", "Ahmedabad", "GT", "KKR"],
    featured: false,
    content: `
Ahmedabad is a venue that removes the comfort of “par”. If you aim for 175–180 here, you are building a defense on hope.

CricDNA’s venue dataset for **Narendra Modi Stadium, Ahmedabad** pegs the **average first-innings score at 186.6**. That means 190 is not an outlier; it is the midpoint.

### Why this venue forces you to stay aggressive
The phase run rates show why the innings rarely slows naturally:
- Powerplay: **8.46 rpo**
- Middle overs: **8.55 rpo**
- Death overs: **10.75 rpo**

When the middle overs baseline is already 8.55, you don’t need to “manufacture” a high scoring rate. You just need to avoid giving away dots and wickets.

### What a batting-first side should aim for
A practical way to frame targets at this ground:

- **180–190:** competitive only if you take early wickets in the chase.
- **195–205:** strong, because it forces the chasing side to keep pushing.
- **210+:** control, because the chasing side must attack in the middle overs rather than waiting for the death.

This is especially important because captains choose to field first in **81.8%** of matches here, which suggests teams consistently expect conditions to stay good for chasing.

### Bowling plans that work (theoretical)
On venues like this, bowlers win not by “drying up” an innings, but by forcing false shots.

Two levers tend to matter:
- A change-of-pace option that creates mistimed hits.
- Hard lengths that push batters into cross-batted shots.

If you are predictable, the pitch doesn’t rescue you.

### What to watch in GT vs KKR
If we see a team post 205+, it’s usually because they won overs 7–15 without losing shape.

If we see a team stumble at 175–185, it’s usually because wickets arrived in clusters. At Ahmedabad, that is the easiest way to make a “good” pitch look tricky.
    `,
    relatedPlayerIds: [5, 25, 23],
    chartData: [
      { label: "Powerplay rpo", value: 8.46, color: "#1f77b4" },
      { label: "Middle rpo", value: 8.55, color: "#ff7f0e" },
      { label: "Death rpo", value: 10.75, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Venue", "Matches", "Avg 1st inns", "Avg 2nd inns", "Toss field%"],
      rows: [["Narendra Modi Stadium, Ahmedabad", "33", "186.6", "170.1", "81.8%"]]
    }
  },
  {
    id: 6,
    slug: "toss-report-gt-vs-kkr-ahmedabad-why-fielding-first-is-the-default",
    title: "Toss report (GT vs KKR): why Ahmedabad captains almost always field first",
    subtitle: "With 81.8% toss-field decisions, Ahmedabad is a clarity-first venue for captains.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "5 min",
    tags: ["IPL 2026", "Toss", "GT", "KKR", "Ahmedabad"],
    featured: false,
    content: `
The toss at Ahmedabad tends to be less about “conditions read” and more about “strategy default”.

CricDNA’s venue dataset for **Narendra Modi Stadium, Ahmedabad** shows captains choose to field first in **81.8%** of matches. That is a remarkably stable behavioural signal.

### Why captains back the chase here
There are three reasons captains love clarity on high-scoring venues:

1) **Target discipline**: if you know you need 10.5 an over, you pick your bowlers to attack.
2) **Resource planning**: you can hold wickets for the death overs, where the venue baseline is **10.75 rpo**.
3) **No “par illusion”**: teams don’t want to be the side that posts 185 and finds out it was 30 short.

### How the phase run rates shape toss thinking
Ahmedabad’s run rates by phase (CricDNA venue dataset):
- Powerplay: **8.46 rpo**
- Middle: **8.55 rpo**
- Death: **10.75 rpo**

When the *middle* overs are already above 8.5, chasing teams can keep the required rate in control without taking extreme risks.

### What the toss decision should change for GT vs KKR
If you field first:
- You’re committing to a chase that likely needs to be above the 8.5 rhythm from early on.
- You need to save at least two boundary-prevention options for the death.

If you bat first:
- You should assume 190 is not enough unless you also build wicket-taking pressure.

The toss isn’t a guarantee. But at Ahmedabad, it consistently signals one belief: teams prefer to know the number.
    `,
    relatedPlayerIds: [5, 23],
    chartData: [
      { label: "Field first (toss)", value: 81.8, color: "#2ca02c" },
      { label: "Bat first (toss)", value: 18.2, color: "#d62728" }
    ]
  },
  {
    id: 7,
    slug: "preview-rcb-vs-dc-chinnaswamy-high-tempo-and-the-chase-instinct",
    title: "RCB vs DC preview: Chinnaswamy’s high tempo and the chase instinct",
    subtitle: "Chinnaswamy’s sample shows 100% toss-field preference and a 189.1 average first innings score.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "DC", "Bengaluru", "Chinnaswamy"],
    featured: false,
    content: `
Chinnaswamy games tend to feel like batting contests, but the best way to describe the venue is: *it compresses innings.*

CricDNA’s venue dataset entry for **M Chinnaswamy Stadium, Bengaluru** lists:
- **19** matches
- **189.1** average first-innings score
- **179.8** average second-innings score
- **100%** toss-field preference
- Death-overs run rate of **10.97**

Those numbers explain why captains chase here: the finishing gear is strong, and totals that look large can still be hunted down.

### What RCB vs DC should expect from the surface
The key is not only the overall average, but how constant the tempo is:
- Powerplay rpo: **8.51**
- Middle rpo: **8.86**
- Death rpo: **10.97**

If your “middle” baseline is nearly 9 an over, the only way a bowling side wins control is with wickets.

### Batting plans
If RCB bat first:
- The innings has to stay aggressive through overs 7–15, because slowing down doesn’t actually create safety.
- Aiming at **200+** is sensible, not extravagant.

If DC chase:
- The goal is to keep wickets for the death.
- You can absorb one 6-run over because the venue provides natural 15–20 run bursts late.

### Bowling plans
At this venue, defensive bowling rarely works unless it is paired with dismissals.

The simplest way to “win” an over is a wicket, not a 7-run concession.

### CricDNA targets
With a first-innings average of **189.1**, a practical par band is:
- **190–200:** competitive.
- **205+:** advantage.

Bengaluru doesn’t forgive passive innings. Expect this match to be decided by who keeps intent in the middle overs.
    `,
    relatedPlayerIds: [1, 4, 22],
    matchId: 26,
    chartData: [
      { label: "Chinnaswamy avg 1st inns", value: 189.1, color: "#1f77b4" },
      { label: "Par band", value: 200, color: "#ff7f0e" },
      { label: "Advantage band", value: 205, color: "#2ca02c" }
    ]
  },
  {
    id: 8,
    slug: "preview-kkr-vs-rr-eden-gardens-why-200-is-common-and-220-wins-games",
    title: "KKR vs RR preview: Eden Gardens — why 200 is common and 220 wins games",
    subtitle: "Eden’s average first innings is 196.8 with an 11.62 death-overs run rate.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "RR", "Eden Gardens", "Kolkata"],
    featured: false,
    content: `
Eden Gardens is the loudest scoring venue in CricDNA’s current dataset.

Across 23 matches, **Eden Gardens, Kolkata** has an **average first-innings score of 196.8** and an **average second-innings score of 175.7**.

The phase profile tells you why matches here turn into boundary races:
- Powerplay: **9.06 rpo**
- Middle: **8.77 rpo**
- Death: **11.62 rpo**

### What those numbers mean in practice
On most grounds, 200 feels like a ceiling. At Eden, it is close to par.

The death-overs baseline at **11.62** changes everything:
- It shortens chases (you don’t need to be ahead early if you have wickets late).
- It makes defenses fragile (one missed yorker becomes a 20-run over).

### How KKR vs RR could be decided
Because the baseline scoring is high, the swing factors usually become:

1) **Powerplay wickets**: losing two wickets in the first six on a venue built for 9+ rpo can cap your ceiling.
2) **Boundary prevention at the death**: “good” death bowling at Eden might still be 10 an over.

### Target bands
If you bat first at Eden, build the innings around these bands:
- **190–205:** competitive.
- **210–220:** strong.
- **225+:** control.

### What to watch
The innings that wins at Eden is usually not the one that starts fastest. It’s the one that arrives at over 15 with wickets in hand.

With the venue giving natural acceleration late, your real job is to keep the top and middle order intact long enough to cash in.
    `,
    relatedPlayerIds: [27, 20, 7],
    matchId: 28,
    chartData: [
      { label: "Eden avg 1st inns", value: 196.8, color: "#1f77b4" },
      { label: "Eden death rpo", value: 11.62, color: "#d62728" }
    ]
  },
  {
    id: 9,
    slug: "season-analysis-ipl-2026-venue-extremes-three-grounds-setting-the-tempo",
    title: "IPL 2026 venue extremes: three grounds quietly setting the season’s tempo",
    subtitle: "Wankhede (chase tilt), Ahmedabad (high baseline), Eden (maximum tempo) create different winning skills.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "Analysis", "Venues", "Trends"],
    featured: false,
    content: `
A good IPL season read isn’t only about which teams are top. It’s about *which grounds are shaping what “good cricket” looks like.*

Three venues in CricDNA’s dataset define three different skills:

### 1) Wankhede: the chase-skills venue
- Avg 1st inns: **176.8**
- Bat-first win%: **40.4%**
- Toss field%: **84.6%**

At Wankhede, teams win by being elite at chasing and by taking wickets early when defending. “Control” overs without dismissals don’t move the needle.

### 2) Ahmedabad: the high-baseline venue
- Avg 1st inns: **186.6**
- Powerplay rpo: **8.46**
- Middle rpo: **8.55**

Ahmedabad forces you to keep intent through the middle overs because 8.5 is already the default. If you want an advantage, you need to push past 200.

### 3) Eden Gardens: the maximum-tempo venue
- Avg 1st inns: **196.8**
- Death rpo: **11.62**

Eden doesn’t just reward hitters; it rewards teams who can keep wickets intact into the final five overs. The venue gives you acceleration as long as you still have batters to use it.

### Why this matters for team-building
These venues reward different roster strengths:
- Wankhede rewards chase composition and wicket-taking pace.
- Ahmedabad rewards deep batting and middle-overs continuity.
- Eden rewards finishing power and death-over composure.

As IPL 2026 progresses, the “best team” might simply be the one whose style travels across these venue types.

The takeaway: don’t evaluate performances in a vacuum. In this season’s first month, the grounds are already teaching teams what plans are sustainable.
    `,
    relatedPlayerIds: [2, 1, 27],
    dataTable: {
      headers: ["Venue", "Avg 1st inns", "Bat-first win%", "Toss field%", "Death rpo"],
      rows: [
        ["Wankhede Stadium, Mumbai", "176.8", "40.4%", "84.6%", "10.76"],
        ["Narendra Modi Stadium, Ahmedabad", "186.6", "48.5%", "81.8%", "10.75"],
        ["Eden Gardens, Kolkata", "196.8", "54.5%", "78.3%", "11.62"]
      ]
    }
  },
  {
    id: 10,
    slug: "analysis-what-an-ipl-2026-bowling-plan-looks-like-on-high-tempo-venues",
    title: "What a bowling plan looks like on high-tempo venues in IPL 2026",
    subtitle: "On grounds with 10.7+ death-overs run rates, wickets matter more than one quiet over.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-17",
    readTime: "7 min",
    tags: ["IPL 2026", "Analysis", "Bowling", "Tactics"],
    featured: false,
    content: `
IPL teams often talk about “controlling the middle overs”. On high-tempo venues, that phrase can be misleading.

If the venue’s natural scoring rhythm is already high, a 7-run over doesn’t create control unless it comes with a wicket.

CricDNA’s venue dataset highlights why. Look at the death-overs run rates:
- Wankhede: **10.76**
- Ahmedabad: **10.75**
- Chinnaswamy (Bengaluru entry): **10.97**
- Eden Gardens: **11.62**

On these grounds, chasing teams believe they can score 50–60 in the last five if they have wickets. That belief changes how they bat in overs 7–15.

### Principle 1: create a wicket phase
The best bowling innings on a high-tempo pitch usually has one “wicket phase” where you take 2+ wickets in 3–4 overs.

Without it, batters can keep the innings shape intact and cash in late.

### Principle 2: accept that the death will be expensive
If the venue baseline is already 10.7+ at the death, you shouldn’t plan for 8 an over. Plan for 10–11, and instead win the innings earlier.

### Principle 3: keep one disruptive option for overs 7–12
Middle overs on these venues often sit around 8.5–8.9 rpo. To beat that, you need disruption:
- a hard length that forces mistimed hits,
- or a change of pace that creates miscues.

### Principle 4: align fields to wicket plans, not run plans
Defensive fields reduce boundaries but also reduce wicket chances. On high-tempo venues, reducing boundaries is not enough.

You need catching positions when the batter is trying to hit into the pitch’s natural scoring zones.

### The takeaway
High-tempo venues don’t reward “pretty” bowling. They reward bowling that creates dismissals.

That is why Match 24 at Wankhede was so instructive: a good total and a decent start still weren’t enough without a wicket phase. On modern IPL surfaces, the safest defense is still a set of wickets.
    `,
    relatedPlayerIds: [2, 19, 12],
    chartData: [
      { label: "Wankhede death rpo", value: 10.76, color: "#1f77b4" },
      { label: "Ahmedabad death rpo", value: 10.75, color: "#ff7f0e" },
      { label: "Chinnaswamy death rpo", value: 10.97, color: "#2ca02c" },
      { label: "Eden death rpo", value: 11.62, color: "#d62728" }
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Match 25 venue baseline (Ahmedabad)",
    value: "186.6 avg 1st inns",
    description: "Narendra Modi Stadium has a 186.6 average first-innings score and 81.8% toss-field preference, so 190 is par and chasing is the default plan.",
    teamColors: ["#1f77b4", "#9467bd"]
  },
  {
    type: "stat",
    title: "Wankhede bat-first disadvantage",
    value: "40.4% bat-first win",
    description: "Across 52 matches in CricDNA’s dataset, Wankhede teams batting first win only 40.4%, matching the captain instinct to field first (84.6%)."
  },
  {
    type: "player",
    title: "Anchor spotlight",
    value: "Gill + Kohli = stability in high-tempo games",
    description: "On venues with 8.5+ middle-overs baselines, anchors who keep strike rotation high let finishers attack the death without desperation.",
    playerIds: [5, 1]
  }
];
