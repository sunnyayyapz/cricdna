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
    slug: "csk-vs-kkr-match-22-recap-192-wasnt-the-edge-the-early-wickets-were",
    title: "CSK vs KKR (Match 22) recap: 192 wasn’t the edge — the early wickets were",
    subtitle: "CSK posted 192/5, then controlled the chase to win by 32 runs as KKR finished 160/7.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "7 min",
    tags: ["IPL 2026", "CSK", "KKR", "Match 22", "Chennai"],
    featured: true,
    content: `
Match 22 at Chennai had two stories running in parallel: a modern Chepauk total (CSK 192/5) and an old-school Chepauk squeeze that made a 193 chase feel steeper than it looked.

NDTV’s result line gives the essentials: CSK 192/5, KKR 160/7 — a 32-run win for Chennai.

### Why 192 was “just enough” — and also more than enough
Chepauk’s reputation is still spin-first, but this season’s IPL has stretched par totals everywhere. The more useful lens is venue context: CricDNA’s venue dataset for **MA Chidambaram Stadium, Chepauk** lists **48 matches**, an **average first-innings score of 166.0**, and a **bat-first win percentage of 64.6%**.

So 192 is not a miracle total — it’s a total that *forces* the chasing side to keep up with the game without ever letting the bowlers relax.

### The chase pressure: rate isn’t the only number
KKR’s 160/7 tells you they never got to the point where finishing was routine. When a chasing side is seven down at the end, it usually means two things happened:
1) the new ball (or early overs) took away stable partnership time, and
2) the middle overs never got “easy” enough for catch-up.

That second point is the Chepauk classic: you can still score, but you can’t score with low risk for long. Every over carries a choice between rotation and boundary attempts.

### A quick innings-shape recap
From NDTV’s match snapshot, CSK’s 192/5 implies a controlled build rather than a collapse-and-recover. When you finish with five down, you typically preserve the right to accelerate late.

For KKR, 160/7 suggests the opposite: a chase spent trading wickets for bursts of momentum — and losing the trade.

### CricDNA takeaway
If you want a repeatable win model at Chennai, it’s not “score 200.” It’s “bat first, get to 175+ with wickets in hand, and make overs 7–15 uncomfortable.” CSK did the first part with 192, and the second part by never letting KKR reach a stable, low-risk gear.

    `,
    relatedPlayerIds: [10, 21, 23, 18],
    matchId: 22,
    chartData: [
      { label: "CSK", value: 192, color: "#F9C74F" },
      { label: "KKR", value: 160, color: "#6A1B9A" }
    ],
    dataTable: {
      headers: ["Match 22", "Detail"],
      rows: [
        ["Result", "CSK won by 32 runs"],
        ["CSK", "192/5"],
        ["KKR", "160/7"],
        ["Venue", "MA Chidambaram Stadium, Chennai" ]
      ]
    }
  },
  {
    id: 2,
    slug: "csk-192-5-at-chepauk-the-real-value-was-wickets-in-hand",
    title: "CSK’s 192/5 at Chepauk: the real value was wickets in hand",
    subtitle: "On a ground where teams bat first only ~29% after winning the toss historically, CSK still made batting first pay.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "CSK", "Chepauk", "batting", "phases"],
    featured: false,
    content: `
A lot of recaps will boil Match 22 down to “CSK scored 192 and defended it.” That’s the outcome. The process was more interesting: CSK got a high total **without** gifting the innings away.

### Why this matters at Chennai
CricDNA’s venue dataset says Chepauk has **48 matches**, **avg first-innings 166.0**, and **bat-first win percentage 64.6%**. The hidden part of that is toss behavior: teams choose to field first here more often than you’d expect. CricDNA’s venue dataset lists the **toss-field percentage at 29.2%** at MA Chidambaram Stadium (Chepauk).

In other words: the venue historically rewards batting first, but captains don’t always behave that way. That gap is opportunity.

### “Wickets in hand” is a scoring engine
Finishing 192/5 implies CSK kept resources for the death. That changes how bowlers operate in overs 16–20: yorkers become predictable, slower balls become readable, and field settings become defensive.

At venues where the **death-overs run rate** is lower, a wicket-laden innings can still stall. Chepauk’s reputation fits that. But in modern IPL, the key is still the same: arrive at the final five overs with enough hitters left to force errors.

### The chase pressure multiplier
A total like 192 becomes “bigger” when the chasing side can’t settle in. KKR’s 160/7 (per NDTV) indicates they spent the innings paying wicket-tax for momentum.

### CricDNA takeaway
CSK didn’t just put up runs — they built an innings with a safety net. When you do that at a venue with a strong bat-first win profile, you don’t need perfection with the ball; you just need enough pressure to make the chase take risky paths.

    `,
    relatedPlayerIds: [10, 14, 23, 21],
    chartData: [
      { label: "Venue avg 1st inns (Chepauk)", value: 166.0, color: "#90CAF9" },
      { label: "CSK 1st inns (Match 22)", value: 192, color: "#F9C74F" }
    ]
  },
  {
    id: 3,
    slug: "kkr-160-7-chasing-193-when-the-middle-overs-never-belong-to-you",
    title: "KKR’s 160/7 chasing 193: when the middle overs never belong to you",
    subtitle: "Chases fail in Chennai not because shots are impossible, but because low-risk scoring windows are short.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "7 min",
    tags: ["IPL 2026", "KKR", "CSK", "chase", "analysis"],
    featured: false,
    content: `
KKR finishing 160/7 while chasing 193 looks like a “just not enough” chase. In reality, it’s a common Chennai pattern: the game is lost in the overs where you’re meant to keep up quietly.

### The Chennai problem: you can score, but can you score safely?
Chepauk’s averages from CricDNA’s venue dataset (48 matches, avg first innings 166.0, bat-first win 64.6%) tell you that the venue doesn’t *prevent* scoring — it punishes stalls.

In a chase, the worst possible outcome is to be forced into boundary-hunting earlier than planned. Once that happens, wicket probability spikes.

### What 160/7 implies
Without over-by-over data we can still infer the chase shape:
- Seven down means KKR didn’t have a long, stable partnership.
- It also means the required run rate likely climbed above comfort well before the last four overs.

That is the nightmare script at Chennai: you’re constantly choosing between “play safe and fall behind” or “take on the matchup and risk another wicket.”

### CricDNA takeaway
If you’re chasing 190+ at Chennai, you need one of two things: a powerplay that beats the required rate without losing 2+ wickets, or a middle-overs partnership that keeps the asking rate flat. KKR got neither, and the scoreboard recorded the consequence.

    `,
    relatedPlayerIds: [23, 21, 10],
    dataTable: {
      headers: ["Chase", "What it usually signals"],
      rows: [
        ["160/7", "Wickets traded for bursts; no stable catch-up phase"],
        ["Chasing 193", "Required rate forces earlier boundary attempts"],
        ["At Chennai", "Low-risk scoring windows are short"]
      ]
    }
  },
  {
    id: 4,
    slug: "eden-gardens-pitch-notes-why-200-isnt-a-safety-total-anymore",
    title: "Eden Gardens pitch notes: why 200 isn’t a safety total anymore",
    subtitle: "CricDNA venue numbers show a high-scoring Kolkata — especially in the powerplay and death.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "Eden Gardens", "pitch", "Kolkata"],
    featured: false,
    content: `
If you’re previewing an IPL night in Kolkata, start by discarding the old idea that 180 is “good.” CricDNA’s venue dataset for **Eden Gardens, Kolkata** shows **23 matches**, an **average first-innings score of 196.8**, and a **death-overs run rate of 11.62**.

### What that suggests about the surface
A high average first-innings score can come from two different pitch types:
- true pitches where batters cash in throughout, or
- venues where the powerplay and death are explosive, but the middle overs are manageable.

Eden’s phase numbers point to the latter: **powerplay RPO 9.06**, **middle-overs RPO 8.77**, and **death RPO 11.62** in CricDNA’s venue dataset.

### Practical par score bands
On this ground, par isn’t a single number. Use bands:
- **Bat first:** 195 is competitive, 205+ is strong.
- **Chase:** if you’re 55+ after 6 overs with only one wicket down, you’re “on script.”

### CricDNA call
Pick bowlers who can survive the last five overs. If your death plan is thin, your safest strategy is to maximize batting depth and aim above 200.

    `,
    relatedPlayerIds: [23, 1, 3],
    chartData: [
      { label: "Powerplay RPO", value: 9.06, color: "#64B5F6" },
      { label: "Middle RPO", value: 8.77, color: "#81C784" },
      { label: "Death RPO", value: 11.62, color: "#E57373" }
    ]
  },
  {
    id: 5,
    slug: "eden-gardens-toss-report-why-field-first-is-popular-but-not-always-correct",
    title: "Eden Gardens toss report: why field first is popular — but not always correct",
    subtitle: "CricDNA data shows teams choose to field first ~78% of the time here, even as first-innings averages push 200.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "toss", "Eden Gardens", "strategy"],
    featured: false,
    content: `
At Eden Gardens, the toss decision is often made before captains even walk out: “field first.” CricDNA’s venue dataset lists a **toss-field percentage of 78.3%** for Eden Gardens, Kolkata.

### The tension: preference vs payoff
CricDNA also lists **avg first-innings 196.8** at Eden Gardens (23 matches). That’s a big number, and it changes what “field first” really means: you might be choosing to chase 200+.

### When fielding first makes sense
- Dew is clearly expected.
- Your bowling has two death specialists you trust.
- Your batting has an anchor + two finishers who can absorb pressure.

### When batting first can be the percentage play
- Dry evening, no obvious dew.
- Your batting lineup is deeper than your death bowling.
- You can maximize the powerplay (Eden’s powerplay RPO in CricDNA’s venue dataset is 9.06).

### CricDNA call
Don’t treat “field first” as a rule. Treat it as a conditional decision: if you can’t control the last five overs, set a target and force the opponent to chase at 10+ from ball one.

    `,
    relatedPlayerIds: [11, 2, 23],
    dataTable: {
      headers: ["Eden Gardens (CricDNA)", "Value"],
      rows: [
        ["Matches", "23"],
        ["Avg 1st inns", "196.8"],
        ["Bat-first win %", "54.5%"],
        ["Toss teams field first", "78.3%"],
      ]
    }
  },
  {
    id: 6,
    slug: "next-match-preview-using-venue-script-as-the-first-team-sheet",
    title: "Next-match preview framework: use the venue script as the first team sheet",
    subtitle: "Before you pick XIs, pick a plan: powerplay pace, middle control, and death coverage by venue.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "preview", "strategy", "venues"],
    featured: false,
    content: `
With schedule data in-repo currently listing only Matches 1–20, CricDNA’s daily preview work leans on a stable method: build the match plan from the venue’s scoring script first, then fit player roles into that plan.

### Two venue scripts that show up repeatedly
**High-run venues** (Delhi, Kolkata, Ahmedabad) demand death-overs insurance. CricDNA’s venue dataset shows:
- **Arun Jaitley Stadium, Delhi:** avg first innings **200.3** and death RPO **11.59**.
- **Eden Gardens, Kolkata:** avg first innings **196.8** and death RPO **11.62**.
- **Narendra Modi Stadium, Ahmedabad:** avg first innings **186.6** and death RPO **10.75**.

**Chase-leaning venues** (Mumbai) reward composure and bowling plans that survive the late overs. CricDNA’s venue dataset lists **Wankhede Stadium, Mumbai** with avg first innings **176.8**, bat-first win % **40.4%**, and death RPO **10.76**.

### CricDNA call
If the venue’s death RPO is ~11+, treat your sixth bowling option as mandatory, not optional. If the venue’s bat-first win % is below 45%, chasing becomes a real option — but only with batting depth to absorb early damage.

    `,
    relatedPlayerIds: [2, 11, 6, 19],
    chartData: [
      { label: "Delhi avg 1st inns", value: 200.3, color: "#FFB74D" },
      { label: "Kolkata avg 1st inns", value: 196.8, color: "#BA68C8" },
      { label: "Ahmedabad avg 1st inns", value: 186.6, color: "#90CAF9" },
      { label: "Mumbai avg 1st inns", value: 176.8, color: "#81C784" }
    ]
  },
  {
    id: 7,
    slug: "season-macro-why-the-ipl-2026-first-innings-par-has-shifted-up-a-tier",
    title: "Season macro: why IPL 2026 first-innings par has shifted up a tier",
    subtitle: "Venue averages from CricDNA suggest more grounds now live in the 185–205 range.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "7 min",
    tags: ["IPL 2026", "analysis", "par score", "venues"],
    featured: false,
    content: `
The fastest way to get IPL strategy wrong in 2026 is to behave like 175 is still the “safe” batting-first number.

CricDNA’s venue dataset highlights how many flagship IPL venues now carry first-innings averages far above the old baseline:
- **Arun Jaitley Stadium, Delhi:** avg first innings **200.3**.
- **Eden Gardens, Kolkata:** avg first innings **196.8**.
- **Narendra Modi Stadium, Ahmedabad:** avg first innings **186.6**.
- **Wankhede Stadium, Mumbai:** avg first innings **176.8**.

### What’s driving it (in match-planning terms)
Regardless of the underlying reasons (impact player, batting depth, conditions), the tactical outcome is consistent:
- Powerplays are faster.
- Death overs are more explosive.
- “Anchor innings” have to score quicker to stay valuable.

CricDNA’s phase scoring reinforces this. Delhi’s venue file lists a **powerplay run rate of 9.5** and a **death run rate of 11.59**. Eden’s file lists **powerplay 9.06** and **death 11.62**.

### CricDNA takeaway
Treat par as venue-specific, not tournament-wide. But also accept the shift: on multiple grounds, 190 is no longer “attacking” — it’s simply staying in the game.

    `,
    relatedPlayerIds: [1, 5, 3, 25],
    dataTable: {
      headers: ["Venue", "Avg 1st inns (CricDNA)", "Death RPO"],
      rows: [
        ["Delhi", "200.3", "11.59"],
        ["Kolkata", "196.8", "11.62"],
        ["Ahmedabad", "186.6", "10.75"],
        ["Mumbai", "176.8", "10.76"],
      ]
    }
  },
  {
    id: 8,
    slug: "bowling-in-2026-the-death-overs-are-now-a-specialist-job-again",
    title: "Bowling in 2026: the death overs are now a specialist job again",
    subtitle: "With multiple venues showing 10.7–11.6 death RPO, captains need clearer end-overs roles.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "bowling", "death overs", "analysis"],
    featured: false,
    content: `
In earlier IPL cycles, teams could “get away with” a part-time fifth bowler at the death if the pitch helped or the batting collapsed. In 2026, the numbers argue for a different philosophy.

### The venue evidence
CricDNA’s venue dataset shows death-overs run rates that punish non-specialists:
- **Eden Gardens, Kolkata:** death RPO **11.62**.
- **Arun Jaitley Stadium, Delhi:** death RPO **11.59**.
- **Wankhede Stadium, Mumbai:** death RPO **10.76**.
- **Narendra Modi Stadium, Ahmedabad:** death RPO **10.75**.

When the death is consistently above 10.5 RPO, the game is telling you that “average” end overs are not enough.

### What captains should do differently
1) **Pre-assign over 18 and 20** to your best execution bowler.
2) **Protect matchups**: don’t burn your specialist in over 15 to fix a middle-overs mistake.
3) **Pick XI for coverage**: if you have only one death bowler, choose batting depth *and* target 200.

### CricDNA takeaway
Teams that win consistently in 2026 will look the least creative at the death — because they will be the most prepared.

    `,
    relatedPlayerIds: [2, 6, 17, 19],
    chartData: [
      { label: "Kolkata death RPO", value: 11.62, color: "#BA68C8" },
      { label: "Delhi death RPO", value: 11.59, color: "#FFB74D" },
      { label: "Mumbai death RPO", value: 10.76, color: "#81C784" },
      { label: "Ahmedabad death RPO", value: 10.75, color: "#90CAF9" }
    ]
  },
  {
    id: 9,
    slug: "toss-decision-map-how-to-use-toss-field-percentages-without-overfitting",
    title: "Toss decision map: how to use toss-field percentages without overfitting",
    subtitle: "Venue-level toss tendencies are a hint, not a command — combine them with win percentages.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "toss", "strategy", "data"],
    featured: false,
    content: `
Toss decisions get treated like folklore. CricDNA’s datasets let you treat them like a decision problem.

### Step 1: start with venue tendencies
From CricDNA’s venue dataset:
- **Wankhede Stadium, Mumbai:** toss-field % **84.6%** and bat-first win % **40.4%**.
- **Narendra Modi Stadium, Ahmedabad:** toss-field % **81.8%** and bat-first win % **48.5%**.
- **Eden Gardens, Kolkata:** toss-field % **78.3%** and bat-first win % **54.5%**.
- **Arun Jaitley Stadium, Delhi:** toss-field % **78.3%** and bat-first win % **56.5%**.

### Step 2: interpret the pair, not the single number
If toss-field % is high *and* bat-first win % is low (Mumbai), chasing is genuinely advantaged.
If toss-field % is high but bat-first win % is also high (Kolkata, Delhi), captains may be choosing to chase even when setting a target can be just as strong.

### CricDNA takeaway
Use toss tendency as a prompt for the real question: “What outcome does this venue reward most often — and do we have the bowling/batting profile to play that outcome?”

    `,
    relatedPlayerIds: [11, 30, 2, 6],
    dataTable: {
      headers: ["Venue", "Toss-field %", "Bat-first win %"],
      rows: [
        ["Mumbai (Wankhede)", "84.6%", "40.4%"],
        ["Ahmedabad (Narendra Modi)", "81.8%", "48.5%"],
        ["Kolkata (Eden)", "78.3%", "54.5%"],
        ["Delhi (Arun Jaitley)", "78.3%", "56.5%"],
      ]
    }
  },
  {
    id: 10,
    slug: "mini-rankings-which-venues-are-the-true-run-engines-right-now",
    title: "Mini-rankings: which venues are the true run engines right now",
    subtitle: "Delhi and Kolkata sit at the top of CricDNA’s first-innings average list among current main venues.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-15",
    readTime: "6 min",
    tags: ["IPL 2026", "rankings", "venues", "data"],
    featured: false,
    content: `
If you want a fast way to anticipate match scripts, rank venues by what they usually produce — not what you hope they will produce.

Using CricDNA’s venue dataset, here’s a mini table of major IPL venues by **average first-innings score**:
- **Arun Jaitley Stadium, Delhi:** **200.3** (23 matches)
- **Eden Gardens, Kolkata:** **196.8** (23 matches)
- **Narendra Modi Stadium, Ahmedabad:** **186.6** (33 matches)
- **Wankhede Stadium, Mumbai:** **176.8** (52 matches)
- **MA Chidambaram Stadium, Chepauk:** **166.0** (48 matches)

### How to use this list
- At the top venues, batting depth is a weapon; defendable totals start around 195.
- In the mid tier (Ahmedabad/Mumbai), toss and dew shape outcomes more strongly.
- In the lower tier (Chennai), middle-overs control has more value than raw boundary count.

### CricDNA takeaway
Venue rankings aren’t trivia — they’re a planning tool. Start here, then adjust for form and matchups.

    `,
    relatedPlayerIds: [1, 2, 18, 19],
    dataTable: {
      headers: ["Venue", "Matches", "Avg 1st inns"],
      rows: [
        ["Delhi", "23", "200.3"],
        ["Kolkata", "23", "196.8"],
        ["Ahmedabad", "33", "186.6"],
        ["Mumbai", "52", "176.8"],
        ["Chennai", "48", "166.0"],
      ]
    }
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Match 22 result",
    value: "CSK won by 32 runs",
    description: "Chennai 192/5 set the pressure; Kolkata ended 160/7 and never found a low-risk catch-up phase.",
  },
  {
    type: "stat",
    title: "Highest-scoring venue signal",
    value: "Delhi avg 1st inns 200.3",
    description: "CricDNA venue data suggests multiple grounds now live in the 185–205 par band; plan death bowling accordingly.",
  },
  {
    type: "matchup",
    title: "Venue-script shortlist",
    value: "Kolkata/Delhi/Ahmedabad/Mumbai",
    description: "Kolkata (avg 196.8) and Delhi (avg 200.3) demand death-overs specialists; Mumbai’s low bat-first win % keeps chasing live.",
    playerIds: [2, 19],
    teamColors: ["#BA68C8", "#FFB74D"],
  },
];
