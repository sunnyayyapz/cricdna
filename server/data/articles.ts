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
    slug: "rr-vs-mi-match-13-recap-jaiswal-77-rain-11-overs",
    title: "RR vs MI (Match 13) recap: Jaiswal’s 77* turns an 11-over shootout into a statement win",
    subtitle: "Rajasthan posted 150/3 in 11 overs and strangled Mumbai’s chase to win by 27 — a reminder that powerplay clarity beats ‘normal-innings’ thinking.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "MI", "Match 13", "Guwahati"],
    featured: true,
    content: `
Rajasthan Royals beat Mumbai Indians by 27 runs in a rain-shortened 11-over match at Guwahati, finishing with 150/3 and then restricting MI to 123/9. The scoreline is simple; the lesson is not. Short games punish teams that try to play “T20 in miniature”. They reward the side that commits earliest to a boundary-first plan, then defends it with wicket pressure.

RR’s innings was built around one unbroken idea: win the first 20 balls. Yashasvi Jaiswal stayed unbeaten on 77 off 32, striking 10 fours and 4 sixes, and Vaibhav Sooryavanshi added 39 off 14 with five sixes. Mumbai did get wickets — AM Ghazanfar finished with 2/21 — but in 11 overs you can’t trade wickets for run-rate unless you take them in clusters. RR’s 150/3 implied a run-rate of 13.64; that effectively forced MI to chase at 13.73 from ball one.

Mumbai’s chase never stabilised. Their two highest scorers were Sherfane Rutherford (25 off 8) and Naman Dhir (25 off 13), but the top order couldn’t launch. Rohit Sharma made 5, Suryakumar Yadav 6, and Hardik Pandya 9; when a chase needs 151 from 66 balls, you can’t afford “settling in” overs at the top. RR’s bowling plan was classic short-format discipline: hard lengths, pace-off into the pitch, and a relentless search for wickets.

The wicket-takers tell the story. Nandre Burger went 2/21, Ravi Bishnoi 2/25, and Sandeep Sharma 2/26. That’s six wickets spread across three roles: early-overs pace, middle-overs control, and end-overs execution. Mumbai ended 123/9, meaning they lost almost a wicket per over; at that rate, the chase collapses even if one batter lands a cameo.

Three takeaways.

1) In reduced-overs cricket, “par” is a moving target. RR treated 150 as reachable and played like it. MI’s bowling, even when taking wickets, did not reduce RR’s boundary options.

2) Chases require one anchor and one accelerator — even in 11 overs. Mumbai never established either. Their best scoring bursts came after they were already behind the rate.

3) Wickets are the only currency that consistently lowers an opponent’s scoring ceiling in a shootout. RR defended 151 not by protecting boundaries alone, but by constantly resetting the chase with dismissals.

RR moved further up the table momentum-wise; MI were left with a tactical question: in shortened games, who are the two batters you want facing 70% of the balls? Until that answer is clear, chaos will keep finding them.
`,
    relatedPlayerIds: [7, 2, 3, 11, 13],
    matchId: 13,
    chartData: [
      { label: "RR", value: 150, color: "#E91E63" },
      { label: "MI", value: 123, color: "#1E88E5" }
    ],
    dataTable: {
      headers: ["Key performers", "Figure"],
      rows: [
        ["Yashasvi Jaiswal", "77* (32)"],
        ["Vaibhav Sooryavanshi", "39 (14)"],
        ["Nandre Burger", "2/21"],
        ["Ravi Bishnoi", "2/25"],
        ["Sandeep Sharma", "2/26"],
        ["AM Ghazanfar (MI)", "2/21"],
        ["Top MI scorers", "Rutherford 25 (8), Dhir 25 (13)"],
        ["Result", "RR won by 27 runs (11 overs each)"],
      ]
    }
  },
  {
    id: 2,
    slug: "rr-vs-mi-match-13-recap-why-mi-top-order-couldnt-launch",
    title: "Why MI couldn’t launch in Match 13: losing the first 3.2 overs twice",
    subtitle: "In an 11-over chase, the powerplay is not a phase — it’s the match. RR won it with wickets and forced MI into low-percentage shots.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "MI", "Powerplay", "Tactics"],
    featured: false,
    content: `
Mumbai’s loss to Rajasthan in Guwahati looked like a pure batting failure: 123/9 chasing 151 in 11 overs. But the pattern is more specific. MI effectively lost the game twice — once with the ball inside RR’s first 3.2 overs, and once with the bat inside their own first 3.2 overs.

Start with the format. When a match is reduced to 11 overs, the powerplay scales down (3.2 overs) and becomes disproportionately valuable. A team’s goal is no longer “be 50/1 after 6”. It’s closer to “be 55/0 after 3.2”. That’s how RR played: Jaiswal and Sooryavanshi treated every ball as a boundary opportunity, lifting RR to a platform that made 150 feel inevitable.

MI’s bowling didn’t create a braking mechanism. They did take wickets later — AM Ghazanfar’s 2/21 was their best return — but those dismissals arrived after the opening pair had already converted the early overs into a scoreboard advantage. In short games, late wickets don’t matter unless they also remove boundary hitters. Otherwise, the run-rate remains inflated.

Then MI batted, and the same early-overs deficit reappeared. The chase needed 151 from 66 balls: a required rate of 13.73. Losing Rohit Sharma (5) and Suryakumar Yadav (6) early meant that MI’s middle order had to attempt “double acceleration”: first to recover from wickets, then to beat the rate. That leads to a predictable sequence — a few boundaries, then a forced shot, then another wicket.

Even the cameos show the constraint. Sherfane Rutherford’s 25 off 8 and Naman Dhir’s 25 off 13 were productive, but they came inside an innings that kept shedding wickets. Rajasthan’s bowlers were not chasing dot balls; they were chasing dismissals. Burger (2/21), Bishnoi (2/25), and Sandeep (2/26) collectively made sure MI never had a set pair long enough to plan an over.

From a process perspective, MI need a “short-game trigger”. In reduced-overs chases, teams should pre-commit roles:

• One batter is authorised to take 70% boundary shots for 15 balls, regardless of risk.
• One batter is responsible for strike rotation plus selective targeting (usually the weaker bowler).

MI’s top order has the talent for it, but the commitment has to be explicit. If you hesitate, the rate dictates your options. And if the rate dictates your options, the field dictates your dismissal.

The cleanest summary: RR’s batting made 150. RR’s bowling made 151 feel like 175 by ensuring MI’s innings never had stability. In short games, stability is not “calm”. It’s “two batters, one plan.”
`,
    relatedPlayerIds: [7, 3, 11, 13],
    matchId: 13,
    chartData: [
      { label: "Required RPO", value: 13.73, color: "#F4511E" },
      { label: "MI actual RPO", value: 11.18, color: "#1E88E5" }
    ]
  },
  {
    id: 3,
    slug: "rr-vs-mi-match-13-recap-bowling-map-burger-bishnoi-sandeep",
    title: "Burger, Bishnoi, Sandeep: RR’s three-lane defence plan that closed Match 13",
    subtitle: "You don’t defend 151 in 11 overs by ‘holding’ runs. You defend it by taking wickets across phases — RR did it with pace, control, and end-over discipline.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "Bowling", "MI", "Match 13"],
    featured: false,
    content: `
RR’s victory over MI in Guwahati will be remembered for the batting — Jaiswal’s 77* and a 150/3 total in just 11 overs. But the more repeatable part is how Rajasthan defended it. When games shrink, bowling plans can’t be reactive. RR’s plan was structured across lanes: pace in the first over window, spin control in the middle, and a clean finishing over.

Lane one: early wickets. MI required 13.73 per over from the start. That means the opening overs are about disruption, not economy. RR’s quicks and hard-length options attacked the stumps and forced big swings at balls that weren’t quite there. The result was a chase that never had a stable base.

Lane two: middle-overs control with wicket threat. In short chases, spin isn’t only for run control; it’s for “mis-hit creation”. Ravi Bishnoi’s 2/25 was expensive on a per-over basis, but that’s irrelevant when his job is to remove set batters and break partnerships. MI lost wickets at a rate that prevented them from ever lining up matchups.

Lane three: calm finishing. When a side needs 35 from the final over, the bowling side is already winning. RR ensured it stayed that way by continuing to hunt wickets rather than slipping into defensive lines. Burger’s 2/21 and Sandeep’s 2/26 meant MI were effectively batting with a tail long before the last over.

It’s worth noting the symmetry: MI’s best bowling return was AM Ghazanfar’s 2/21, but those wickets did not change RR’s boundary access because Jaiswal stayed. RR’s wickets, in contrast, removed MI’s boundary access because they removed the players most capable of it early.

For future reduced-overs matches, this is the blueprint:

1) Pick one bowler to own the first 8 balls — attack, accept risk.
2) Pick one wicket-taking option for balls 9–36 — make the batter hit against the spin.
3) Pick one “closeout” bowler for the last over — back your best execution.

RR did all three. MI, chasing 151, needed one batter to play a perfect innings. RR’s bowling made sure no one even got the chance.
`,
    relatedPlayerIds: [7, 23],
    matchId: 13,
    dataTable: {
      headers: ["RR wicket-takers", "Return"],
      rows: [
        ["Nandre Burger", "2/21"],
        ["Ravi Bishnoi", "2/25"],
        ["Sandeep Sharma", "2/26"],
        ["Result", "MI 123/9 (11)"],
      ]
    }
  },
  {
    id: 4,
    slug: "dc-vs-gt-match-14-preview-arun-jaitley-high-run-rate",
    title: "DC vs GT (Match 14) preview: Delhi’s run-fest venue meets Gujarat’s need for control",
    subtitle: "Arun Jaitley Stadium’s recent scoring profile screams ‘boundary game’ — and it puts a premium on bowling plans, not just names.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "DC", "GT", "Match 14", "Arun Jaitley Stadium"],
    featured: false,
    content: `
Match 14 brings Delhi Capitals and Gujarat Titans to Arun Jaitley Stadium, a ground that has leaned hard into big totals in recent seasons. Venue numbers in our dataset show an average first-innings score of 200.3 and death-overs scoring of 11.59 runs per over — the kind of profile that turns “good” death bowling into a survival skill.

Delhi will feel comfortable in that environment because they can build a chase or set a target with multiple hitters. Gujarat, meanwhile, come in needing their first points and, more importantly, needing a defensive plan that works when the boundary is easy to find.

The venue tells us two practical things.

First, you don’t win here by ‘starting slow’. The powerplay run rate at this venue is 9.5, and the middle overs still go at 8.6. That means even the “quiet” phase is productive. Teams that try to play conservative cricket often discover they are 15 short.

Second, toss decisions are not as clear-cut as the narrative suggests. Our toss dataset for Arun Jaitley Stadium, Delhi shows 23 matches with 13 wins batting first and 10 wins batting second. Captains still choose to field first often, but the outcomes aren’t overwhelmingly chase-favoured.

So what should each side optimise?

For DC: maximise batting depth. On a ground where death overs can go at 11.6, having a No. 7 who can hit changes your ceiling because you can attack from over 12 without fearing collapse.

For GT: define overs of control. A common mistake at high-scoring venues is spreading your best bowlers across the innings. Instead, GT should identify two “squeeze overs” in the middle where they can take pace off or use their best matchups to create dots. Dot balls are rare here — which makes every dot valuable.

Key matchup lens: if Shubman Gill plays, he’s the kind of batter who can make a 200 chase feel normal. DC’s counter is to deny his acceleration window — not necessarily by getting him out, but by preventing the ‘two boundaries in an over’ pattern that breaks bowling plans.

CricDNA call: expect 190+ to be a par score, and expect the winner to be the side that executes the last four overs better, not the side that wins the powerplay.
`,
    relatedPlayerIds: [5, 30, 26, 22, 12],
    matchId: 14,
    chartData: [
      { label: "Avg 1st inns", value: 200.3, color: "#43A047" },
      { label: "Avg 2nd inns", value: 182.7, color: "#1E88E5" },
      { label: "Death RPO", value: 11.59, color: "#F4511E" }
    ],
    dataTable: {
      headers: ["Arun Jaitley (Delhi) venue snapshot", "Value"],
      rows: [
        ["Matches (dataset)", "23"],
        ["Avg 1st inns", "200.3"],
        ["Avg 2nd inns", "182.7"],
        ["Powerplay RPO", "9.5"],
        ["Middle RPO", "8.6"],
        ["Death RPO", "11.59"],
        ["Bat 1st win%", "56.5%"],
      ]
    }
  },
  {
    id: 5,
    slug: "kkr-vs-lsg-match-15-preview-eden-chase-bias",
    title: "KKR vs LSG (Match 15) preview: Eden’s chase bias vs LSG’s history of closing tight games",
    subtitle: "Eden Gardens trends still point to the chase — but KKR’s best route is to own the death overs with wickets in hand.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "LSG", "Match 15", "Eden Gardens"],
    featured: false,
    content: `
Match 15 at Eden Gardens is one of those fixtures where the venue almost acts like an extra team. Our Eden dataset shows 77 matches with 47 wins for teams batting second and an average first-innings score of 160.2. The scoring pattern is also revealing: the death overs score at 9.37 per over, materially higher than the powerplay (7.28).

That shapes strategy for both Kolkata Knight Riders and Lucknow Super Giants.

If you win the toss at Eden, there’s a strong historical argument for bowling first. Teams have chosen to field first 63.6% of the time in our venue dataset, and the outcome distribution supports that preference. Even the toss-specific subset in our toss dataset for “Eden Gardens, Kolkata” shows batting first hasn’t been especially rewarding (toss-bat-first wins: 1 from 5).

But fixtures are not won by trend charts alone. The more actionable piece is how you construct an innings here. Eden rewards teams that keep wickets for the last five overs, because that’s where the run-rate jumps. If you’re 70/3 after 10, you can still end at 165. If you’re 70/5, you probably end at 145.

So for KKR, the question is simple: who carries the innings to over 15 with resources intact? For LSG, the question is about matchups — which bowlers can deny KKR the death-overs jump by taking wickets between overs 11 and 15.

A micro-lens from our head-to-head dataset: Rohit Sharma has historically struggled against Sunil Narine (143 runs from 134 balls but dismissed 8 times). That’s not directly KKR vs LSG, but it’s a reminder of what Narine-type bowling does at Eden: it turns boundary hitters into risk managers.

CricDNA call: expect the winning side to be the one that turns overs 11–15 into wicket-taking overs. At Eden, if you only “contain”, you’re usually one over short.
`,
    relatedPlayerIds: [23, 27, 22, 3, 13],
    matchId: 15,
    chartData: [
      { label: "Bat 2nd wins", value: 47, color: "#1E88E5" },
      { label: "Bat 1st wins", value: 30, color: "#999999" }
    ],
    dataTable: {
      headers: ["Eden Gardens snapshot", "Value"],
      rows: [
        ["Matches", "77"],
        ["Avg 1st inns", "160.2"],
        ["Avg 2nd inns", "147.1"],
        ["Powerplay RPO", "7.28"],
        ["Death RPO", "9.37"],
        ["Field first (toss choice)", "63.6%"],
      ]
    }
  },
  {
    id: 6,
    slug: "rr-vs-rcb-match-16-preview-bats-first-mindset-barsapara",
    title: "RR vs RCB (Match 16) preview: after the 11-over chaos, who brings the ‘full-innings’ discipline?",
    subtitle: "Barsapara hosted an 11-over slugfest; the next game at the venue demands a different skill — pacing 20 overs without losing intent.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "RCB", "Match 16", "Guwahati"],
    featured: false,
    content: `
Rajasthan Royals return to Barsapara in Guwahati for Match 16 against Royal Challengers Bengaluru. The venue’s last impression was Match 13’s rain-cut 11-over shootout — but the tactical demands of a 20-over match are different. The core question for both sides is: can you keep the same intent while adding innings structure?

RR come in with confidence after smashing 150/3 in 11 overs against MI and then taking wickets throughout the chase. RCB arrive as a team that typically plays best when their top three create a dominant first 10 overs and their bowlers can defend with scoreboard pressure.

From a game-model view:

• RR’s edge is boundary acceleration. Jaiswal’s unbeaten 77 from 32 shows how quickly they can access a ceiling score when the surface is true.

• RCB’s edge is stability plus finishing. If Virat Kohli anchors the first half, it frees hitters around him to attack matchups without panic.

A matchup lens from our head-to-head dataset: Kohli has generally handled spin from Ravindra Jadeja well (179 off 160 balls, only 3 dismissals). That’s a proxy indicator: when Kohli is allowed to settle into spin, he can keep the innings moving without high-risk shots — which is exactly what you need in a full 20-over innings.

Because we don’t have a Barsapara venue profile in our local dataset, we’ll keep the preview grounded in what is repeatable across venues: the winner is often the team that maintains wicket resources through overs 7–15. RR’s batting is explosive; RCB’s challenge is to force them into a “two-down by over 6” position where the middle overs become about rebuilding.

CricDNA call: whichever side wins the wicket column in overs 7–12 is likely to win the match. This is the phase that decides whether a total becomes 165 or 195.
`,
    relatedPlayerIds: [7, 1, 29, 2, 18],
    matchId: 16,
    chartData: [
      { label: "RR score (11 overs, M13)", value: 150, color: "#E91E63" },
      { label: "Scaled to 20 overs", value: 273, color: "#999999" }
    ]
  },
  {
    id: 7,
    slug: "arun-jaitley-stadium-delhi-is-a-death-overs-lab",
    title: "Arun Jaitley Stadium is a death-overs lab: why 16–20 decides more games here",
    subtitle: "With death overs scoring at 11.59 in our dataset, the last 24 balls are where plans either hold or shatter.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "Arun Jaitley Stadium", "Death overs", "Strategy"],
    featured: false,
    content: `
Some venues reward a “safe start” approach. Arun Jaitley Stadium rewards the opposite: build an innings that lets you hit hard at the end. The raw numbers in our venue dataset are stark — average first-innings score 200.3, and death-overs scoring at 11.59 runs per over. That’s not just high; it’s structurally high. It means the last five overs contribute a disproportionately large share of the total.

Why does that matter? Because most teams still plan their innings like a generic T20 template: powerplay acceleration, middle-over consolidation, then finishing. At Delhi, consolidation can become a trap. If you “bank” too many balls in overs 7–15, you might find that even a good finish only gets you to par.

A better model for this ground is:

1) Powerplay: score, but don’t over-commit. The venue powerplay run-rate is already 9.5; you can get 55 without taking reckless risks.

2) Overs 7–15: target a single bowler. Instead of taking 8–9 off everyone, identify the one matchup you can hit for 12–14 and force the bowling side to change plans. At Delhi, disrupting bowling rotations is often more valuable than “keeping wickets”.

3) Overs 16–20: hit with depth. A death rate of 11.6 means you can add 55–60 late — but only if you have hitters available. That pushes selection logic toward batting depth and all-round options.

For bowlers, the response is equally specific. “Good yorkers” are not enough because the surface rewards even decent contact. You need variation sequences: hard-length into the pitch, slower balls that land in the same spot as your hard ball, and wide-yorker lines that force the batter to hit into the longer boundary.

This is why DC vs GT in Match 14 is so interesting: both sides will likely have enough batting to get close to 200. The outcome will be decided by two overs: one squeeze over in the middle, and one execution over at the death.

CricDNA lens: if a team finishes 20 overs with more than six dot balls in the last five overs, they’ve probably won the match. At Delhi, dots are wickets in disguise.
`,
    relatedPlayerIds: [30, 26, 12, 19],
    chartData: [
      { label: "Powerplay RPO", value: 9.5, color: "#1E88E5" },
      { label: "Middle RPO", value: 8.6, color: "#43A047" },
      { label: "Death RPO", value: 11.59, color: "#F4511E" }
    ]
  },
  {
    id: 8,
    slug: "eden-gardens-why-chasing-is-still-the-default",
    title: "Eden Gardens: why chasing is still the default call (and when you should ignore it)",
    subtitle: "Chasing has won 47 of 77 games in our dataset — but the ‘why’ matters more than the headline.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "Eden Gardens", "Toss", "Strategy"],
    featured: false,
    content: `
Eden Gardens has been one of the clearest “chase venues” in the league: 47 wins batting second vs 30 batting first in our dataset, with teams opting to field first 63.6% of the time. It’s tempting to reduce that to dew and call it a day. But the more tactical explanation is that Eden gives captains two advantages when chasing: information and a death-overs runway.

Information is obvious — knowing the target helps batters select risk. The less obvious piece is how Eden’s scoring phases work. The venue’s death-overs scoring is 9.37 runs per over, meaning the best time to score is late. Chasing teams can hold wickets, keep the rate in touch, and then surge.

That suggests a specific batting plan when chasing:

• Build to over 14 with wickets. Eden’s middle-overs rate (7.51) is not slow, so you don’t have to force the pace early.
• Identify the “pivot over” where you start targeting one bowler to break the chase open.
• Keep one boundary hitter set for overs 17–20.

When should you ignore the chase bias? Two situations.

1) If your bowling attack is built for defence: multiple wicket-takers plus a death specialist. In that case, batting first can be fine because you can turn a 165 into a scoreboard squeeze.

2) If the pitch is visibly slowing. Eden can sometimes start true and then grip later; if you think the surface will deteriorate, batting first can protect you.

For Match 15 (KKR vs LSG), the venue suggests a chase-heavy decision. But both teams should really plan for the same truth: the match will swing in the last five overs. The team that arrives there with options, not hope, will win.
`,
    relatedPlayerIds: [23, 27, 22],
    chartData: [
      { label: "Bat 2nd wins", value: 47, color: "#1E88E5" },
      { label: "Bat 1st wins", value: 30, color: "#999999" }
    ],
    dataTable: {
      headers: ["Eden Gardens (dataset)", "Value"],
      rows: [
        ["Matches", "77"],
        ["Avg 1st inns", "160.2"],
        ["Bat 2nd wins", "47"],
        ["Toss: field first", "63.6%"],
        ["Death RPO", "9.37"],
      ]
    }
  },
  {
    id: 9,
    slug: "matchups-that-matter-narine-vs-rohit-example",
    title: "Matchups that matter: why one bowler can quietly reshape a chase",
    subtitle: "A single head-to-head pattern can change shot selection. The key is using it as a ‘plan’, not a ‘prediction’.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "6 min",
    tags: ["IPL 2026", "Matchups", "Head-to-head", "Strategy"],
    featured: false,
    content: `
Fans love head-to-head stats because they feel like certainty. Teams use them differently: as planning signals. The difference matters. A matchup number should not tell you “who will win”. It should tell you “where the risk is”.

Take an example from our head-to-head dataset: Rohit Sharma vs Sunil Narine. Rohit has scored 143 runs from 134 balls against Narine, but has been dismissed 8 times. That’s a low average (17.88) despite a decent strike rate (106.72). The practical message isn’t “Rohit can’t bat against Narine”. It’s that Narine creates wicket risk while still being hard to hit for big runs.

How does that translate into tactics?

If you’re the batting side: you may decide to reduce exposure. That could mean using a left-right pair, sending a different batter to take the matchup, or simply planning that Rohit’s job is to rotate rather than attack.

If you’re the bowling side: you can use the matchup as a pressure tool. Bowl Narine early enough that the batter can’t “wait him out”, and set fields that tempt the lofted shot.

The best teams build these micro-plans around venue context. Eden Gardens, for example, rewards wicket-taking in the middle because the death overs are naturally faster. If you can buy two wickets between overs 7 and 12 via a matchup bowler, you often take 15–20 runs off the opponent’s ceiling.

The caution: head-to-head numbers are often shaped by small samples or conditions. That’s why the right use is “decision support”, not prophecy. Use it to decide who bowls which over, or which batter targets which bowler — and then adapt when the game shows you something new.

CricDNA view: the best matchup is the one you can repeat. If a bowler consistently forces a batter into low-control shots, the rest of the fielding side gets easier jobs.
`,
    relatedPlayerIds: [13, 23],
    dataTable: {
      headers: ["Example (head-to-head)", "Value"],
      rows: [
        ["Rohit vs Narine", "143 runs off 134 balls"],
        ["Dismissals", "8"],
        ["Strike rate", "106.72"],
        ["Average", "17.88"],
        ["Dot ball %", "40.3%"],
      ]
    }
  },
  {
    id: 10,
    slug: "ipl-2026-early-season-what-small-samples-can-still-tell-us",
    title: "IPL 2026 early-season lens: what small samples can still tell us (and what they can’t)",
    subtitle: "After two weeks, you can’t crown a champion — but you can spot the teams with repeatable process edges.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-08",
    readTime: "7 min",
    tags: ["IPL 2026", "Analysis", "Strategy", "Trends"],
    featured: false,
    content: `
The first two weeks of an IPL season create a familiar analytics trap: loud scorelines and small samples. An 11-over game produces a 150/3 and suddenly everyone is “the best batting unit”. A 250/3 happens and every bowler is “washed”. Reality is slower.

So what can we trust early?

1) Role clarity. Teams that know who attacks, who stabilises, and who finishes look coherent even when they lose. Role clarity is visible in batting order decisions and in bowling allocation — who gets overs 17 and 19, who bowls the first over, who is held for matchups.

2) Wicket-taking capacity. Wickets translate across venues and conditions. RR’s win over MI in Match 13 is a good illustration: even in a shortened chase where boundaries are easier, wickets kept arriving (MI 123/9). That’s a repeatable edge.

3) Venue adaptation. The best sides don’t play “their game” everywhere — they play the venue’s game. Delhi’s Arun Jaitley Stadium is a late-overs run engine (death overs 11.59), while Eden is a chase-biased venue with late scoring (death overs 9.37). Teams that adapt early collect points before the rest of the league adjusts.

What should we avoid concluding?

• Net run rate narratives based on one extreme match.
• “Player is out of form” verdicts based on two innings.
• Bowling quality judgments from one high-scoring venue.

A better question is: does a team’s plan make sense for the venue and the match situation? In shortened games, that means pre-committed aggression. In high-scoring venues, that means bowling plans that create dots and wickets rather than hoping the ball holds.

CricDNA takeaway: the table is noisy in week two, but process is already visible. Track the teams that win their key phase — powerplay with the bat, middle overs with wickets, death overs with execution. Those are the edges that survive the long season.
`,
    relatedPlayerIds: [7, 30, 23, 2]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "player",
    title: "Player of the day",
    value: "Yashasvi Jaiswal — 77* (32)",
    description: "A 240+ strike-rate innings in a reduced-overs match that turned ‘par’ into ‘pressure’.",
    playerIds: [7]
  },
  {
    type: "stat",
    title: "Venue watch: Arun Jaitley Stadium (Delhi)",
    value: "Avg 1st inns 200.3",
    description: "High scoring through the innings, with death overs at 11.59 RPO in our dataset — expect 190+ to be par.",
    teamColors: ["#1E88E5", "#43A047", "#F4511E"]
  },
  {
    type: "matchup",
    title: "Matchup lens",
    value: "Rohit vs Narine: 8 dismissals",
    description: "Head-to-head numbers aren’t prophecy, but they highlight where wicket-risk can reshape a chase.",
    playerIds: [13, 23],
    teamColors: ["#512DA8", "#1E88E5"]
  }
];
