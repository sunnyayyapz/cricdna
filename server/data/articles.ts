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
    slug: "kkr-vs-lsg-match-15-recap-lsg-chase-182-mukul-choudhary-54",
    title: "KKR vs LSG (Match 15) recap: 182 wasn’t big enough once LSG kept wickets for the last 5 overs",
    subtitle: "KKR posted 181/4, but LSG’s chase (182/7) was built on a calm finish and the right risk profile.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "7 min",
    tags: ["IPL 2026", "KKR", "LSG", "Match 15", "Kolkata"],
    featured: true,
    content: `
Lucknow Super Giants beat Kolkata Knight Riders by 3 wickets in Match 15 at Eden Gardens after chasing 182 (KKR 181/4, LSG 182/7). On a venue where the average first-innings score is 196.8 and the death overs run rate sits at 11.62 rpo, 181 is competitive but not “safe” — especially if the chasing team reaches the last five overs with enough resources. That was the story: KKR built a good total, but LSG kept just enough wickets intact to play the finishing overs on their terms.

Start with KKR’s innings. 181/4 is a strong batting card because it means you avoided the one thing Eden Gardens punishes: a middle-overs stall. The ground’s scoring profile is unusually balanced for modern IPL — powerplay rpo (9.06) and middle-overs rpo (8.77) are both high, so the team that wins is often the one that avoids “two dead overs” rather than the one that hits a spectacular final over. KKR’s 181 suggests they were steady enough across phases, and losing only four wickets is typically a winning template.

So why did the chase still get home? Because chases at Eden are not just about boundary count; they are about sequencing risk. The toss data at this venue shows captains overwhelmingly prefer to field first (18 of 23 matches), and while the win rates by toss decision are not huge, the preference itself tells you how teams perceive the surface: it’s easier to plan a chase with the dew/conditions than to guess a par score. LSG leaned into that planning advantage and carried their chase into the final stretch.

The finishing act was Mukul Choudhary’s 54* off 27. That is the exact innings archetype you need in a 182 chase: not a 90-ball anchor, but a 25–30 ball finish where you turn 8.5 required into 6.5 required before the last over arrives. When a finisher stays unbeaten, he also removes the riskiest part of a chase — the “new batter under pressure” scenario.

KKR will look back at two tactical margins. First, did they create enough wicket-taking threat in the middle overs? Eden’s historic bat-first win % is 54.5, so setting a target is viable — but only if you can take wickets between overs 7 and 15 to stop the chase from becoming a two-hitter endgame. Second, did they use their death overs defensively or aggressively? On a ground where the last five overs average 11.62 rpo, “defensive” often means you lose slowly.

For LSG, the takeaway is repeatable: carry a finisher to the end, keep the required rate flat, and make the last five overs a calculation rather than a gamble. For KKR, the consolation is that the batting template worked — but at Eden Gardens, 181 is only par if you also win the wicket battle in the middle.
`,
    relatedPlayerIds: [24, 23, 22, 27],
    matchId: 15,
    chartData: [
      { label: "KKR", value: 181, color: "#5E35B1" },
      { label: "LSG", value: 182, color: "#00ACC1" }
    ],
    dataTable: {
      headers: ["Match", "Detail"],
      rows: [
        ["Result", "LSG won by 3 wickets"],
        ["KKR", "181/4 (20)"],
        ["LSG", "182/7 (20)"],
        ["Key innings", "Mukul Choudhary 54* (27)"],
        ["Venue trend", "Eden avg 1st inns 196.8; death 11.62 rpo"],
        ["Toss preference", "Field first in 78.3% of Eden matches"],
      ]
    }
  },
  {
    id: 2,
    slug: "kkr-vs-lsg-match-15-analysis-eden-gardens-par-score-problem",
    title: "KKR vs LSG: the Eden Gardens par-score problem (and why 180 keeps feeling light)",
    subtitle: "Eden’s phase scoring profile makes ‘par’ a moving target — especially if you don’t win the death overs.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "Eden Gardens", "Tactics", "KKR", "LSG"],
    featured: false,
    content: `
Match 15 ended with a familiar Eden Gardens theme: the chasing side got home despite a good-looking first-innings total. KKR’s 181/4 is a number that wins at many venues. But Eden is not “many venues”. Its historical scoring profile is high across all phases — powerplay 9.06 rpo, middle overs 8.77 rpo, death overs 11.62 rpo — which means the match rarely offers a natural slowdown point. When there’s no slowdown, the defending team needs wickets, not just dots.

This is where teams misread the par score. Par is not a single number; it’s a function of how many wickets the chasing team has at the 15-over mark. If the chasing side has 6–7 wickets in hand, then the last five overs can be played at Eden’s natural death-overs pace (around 11.6 rpo) without extreme risk. That makes 180 vulnerable. If the chasing side has only 3–4 wickets in hand, then 180 suddenly looks big because boundaries require higher-risk swings.

Eden’s bat-first win percentage is 54.5, so setting a target is absolutely viable. But there is a hidden clause: bat-first teams tend to win when they either push beyond the venue average (196.8) or when they take wickets in the bridge overs. The toss stats add context: captains choose to field first 78.3% of the time at this venue. That isn’t because setting a target is impossible; it’s because captains believe they can read the surface better in a chase and time their accelerations.

So what should teams do differently?

1) Stop treating 180 as a “finish line”. At Eden, 180 is a checkpoint. If you’re 120/2 after 14 overs, you should be thinking 200+, not “180 is good.”

2) Build a wicket plan for overs 7–15. The middle overs at Eden still score at 8.77 rpo, which means defensive lines are punished. The bowling unit must hunt matchups that produce mistakes — even if that costs the odd boundary.

3) If you’re defending, keep your best death-overs bowler for two of the last five. The venue’s death pace (11.62) means one loose over can flip the chase.

Match 15 was decided by those dynamics. LSG carried enough resources into the finish, and once that happens at Eden, the numbers stop being intimidating. The defending side is forced to bowl “perfect overs” on a ground built to punish imperfection.
`,
    relatedPlayerIds: [22, 23, 24],
    matchId: 15,
    chartData: [
      { label: "Eden avg 1st inns", value: 196.8, color: "#1E88E5" },
      { label: "KKR made", value: 181, color: "#5E35B1" },
      { label: "Eden death rpo", value: 11.62, color: "#F4511E" }
    ],
    dataTable: {
      headers: ["Eden Gardens snapshot", "Value"],
      rows: [
        ["Matches in dataset", "23"],
        ["Avg 1st innings", "196.8"],
        ["Bat first win %", "54.5"],
        ["Toss field first %", "78.3"],
        ["Death overs pace", "11.62 rpo"],
      ]
    }
  },
  {
    id: 3,
    slug: "kkr-vs-lsg-match-15-analysis-the-chase-template-182",
    title: "A 182 chase template: keep the rate flat, keep the finisher alive",
    subtitle: "LSG’s chase showed the simplest truth of T20 math: wickets are future overs.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "Chase", "LSG", "KKR", "Strategy"],
    featured: false,
    content: `
A chase of 182 often creates a psychological trap. The target is high enough to demand intent, but not so high that you can justify reckless hitting. The winning teams solve that tension by treating wickets like “future overs.” Preserve them, and the last five overs become a controlled calculation; lose them, and the chase becomes a coin flip.

At Eden Gardens, this concept matters even more because the venue’s baseline scoring is high across phases. The powerplay is quick (9.06 rpo), the middle overs are still rapid (8.77 rpo), and the death overs are explosive (11.62 rpo). That means your chase does not require a single miracle over — it requires you to avoid a cluster of dot balls that forces a miracle.

LSG’s chase to 182/7 illustrates the template. The innings’ defining feature was not that LSG were never in trouble — they were 7 down by the end — but that they still had a batter who could finish. Mukul Choudhary’s 54* off 27 is the perfect finishing innings because it compresses risk into the right window. You don’t need 20 boundaries; you need two overs where you win the matchup and convert pressure into runs.

This is also where bowlers often help the chase, unintentionally. When a defending side senses the game slipping, it can get seduced into “searching for wickets” with lower-probability plans: slower balls outside off, wide yorkers that become full tosses, or over-rotating the field and giving away easy singles. The chase then becomes easier because the batting side can keep the rate flat with low-risk runs.

If you’re defending 181 at Eden, the best weapon is not a desperate wicket ball — it’s a disciplined over that produces dots *without* conceding release singles. The venue data says bat-first wins happen 54.5% of the time, so defending is very possible. But it requires control in the bridge overs so the chasing side reaches the death with fewer resources.

For KKR, the immediate lesson is to connect the innings: batting to 181 was good, but bowling must either create middle-over wickets or reduce the chase’s finishing resources. For LSG, the win reinforces a principle that travels to any venue: don’t chase the target; chase the probability. Keep wickets in hand, keep the rate flat, and choose your one acceleration window.
`,
    relatedPlayerIds: [24, 22, 23],
    matchId: 15,
    dataTable: {
      headers: ["Chase principle", "Why it works"],
      rows: [
        ["Keep wickets", "Lets you attack late without panic"],
        ["Keep rate flat", "Avoids a 20+ run over requirement"],
        ["Pick 1 acceleration window", "Concentrates risk where matchups are best"],
      ]
    }
  },
  {
    id: 4,
    slug: "rr-vs-rcb-match-16-preview-venue-tactics-and-key-battles",
    title: "RR vs RCB (Match 16) preview: can RR slow RCB’s batting engine without losing the powerplay?",
    subtitle: "A high-tempo matchup where early wickets and death-overs execution should decide the margin.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "RCB", "Match 16", "Preview"],
    featured: false,
    content: `
Match 16 brings Rajasthan Royals against Royal Challengers Bengaluru, with the surface likely to reward positive batting. The venue record in our dataset for M Chinnaswamy Stadium, Bengaluru is brutally clear: teams field first every time (toss field-first rate 100%), the average first innings is 189.1, and the highest score recorded is 287. Those numbers don’t guarantee a run-fest every night, but they do tell you the strategic shape: you want clarity, and you want depth.

RCB arrive with the most obvious blueprint: out-bat opponents. The quickest way to do that at a ground with a 8.51 powerplay rpo and 10.97 death-overs rpo is to keep wickets through the middle and then cash in late. That’s why the ‘resource curve’ matters more than a single cameo: a 45 off 28 from a top-order player is often worth more than a 25 off 10 if it preserves a finisher for the last five.

RR’s counter-plan is to break RCB’s innings into two parts. First, win the powerplay with wickets, not containment. At Chinnaswamy, containment is fragile because mis-hits still travel. Second, squeeze the middle overs through matchup bowling — forcing RCB to hit into their longer boundary or against their slower-ball options.

Key player levers:

• Yashasvi Jaiswal (RR) sets RR’s ceiling. A fast powerplay is the easiest way to avoid a chasing crisis later.

• Virat Kohli (RCB) is still the best “stability + tempo” blend among RCB batters. If he bats deep, RCB can time the acceleration and push beyond the venue average.

• Rajat Patidar (RCB) is the swing factor in the middle overs: if he wins his matchup against spin, RCB’s innings never slows.

What should we watch?

1) Toss and first-innings target. With a 100% field-first trend at this venue, expect the captain to chase unless conditions are unusually dry.

2) The last five overs. Chinnaswamy’s death pace (10.97 rpo) means the team that keeps resources for overs 16–20 usually wins the ‘expected runs’ battle.

The simplest preview conclusion: RR need early wickets; RCB need to keep the rate healthy without burning too many resources early. If either side executes their plan, the match becomes a pure run-probability contest.
`,
    relatedPlayerIds: [7, 1, 29],
    matchId: 16,
    chartData: [
      { label: "Chinnaswamy avg 1st inns", value: 189.1, color: "#1E88E5" },
      { label: "Chinnaswamy powerplay rpo", value: 8.51, color: "#43A047" },
      { label: "Chinnaswamy death rpo", value: 10.97, color: "#F4511E" }
    ],
    dataTable: {
      headers: ["Chinnaswamy venue stats", "Value"],
      rows: [
        ["Matches in dataset", "19"],
        ["Avg 1st innings", "189.1"],
        ["Avg 2nd innings", "179.8"],
        ["Toss field first %", "100"],
        ["Highest score", "287"],
      ]
    }
  },
  {
    id: 5,
    slug: "rr-vs-rcb-match-16-pitch-report-what-the-phases-say",
    title: "RR vs RCB pitch report (Match 16): expect boundaries, but the middle overs decide who reaches 200",
    subtitle: "Chinnaswamy’s phase scoring is stacked; the best batting sides keep the middle overs above 8.8 rpo.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "5 min",
    tags: ["IPL 2026", "Pitch report", "RR", "RCB", "Bengaluru"],
    featured: false,
    content: `
When teams talk about the M Chinnaswamy Stadium, Bengaluru, they usually talk about two things: the boundaries and the chase. The data supports both instincts. In our venue dataset (19 matches), the average first-innings score is 189.1 and teams have chosen to field first in every game (100% toss field-first). That tells you captains believe the best way to win here is to know your number and manage your chase.

But the more useful insight is the phase profile. Chinnaswamy’s powerplay runs at 8.51 rpo, the middle overs at 8.86 rpo, and the death overs at 10.97 rpo. Notice what that means: there is no “easy slowdown” period. If you drift for 12 balls, the game moves away from you.

So what should batters aim for?

1) A powerplay with intent but not chaos. Because mis-hits still fly, you don’t need maximum risk to score. A 50–55 powerplay with one wicket is often more valuable than 65 with three wickets.

2) Middle-overs momentum. The middle overs average 8.86 rpo, which is unusually high. That’s why teams that have a strong spin-hitting pair or a batter who can hit pace off the pitch often dominate here.

3) Two finishing hitters. The death overs pace (10.97) is explosive but slightly lower than Eden’s; it still demands resources. If you enter the last five with only one set batter, you risk leaving 12–15 runs on the table.

For bowlers, the pitch report is blunt: you cannot defend with ‘good length’ alone. The best defensive plan at Chinnaswamy is to combine one wicket-taking over in the powerplay with a hard matchup plan in the middle. If you get to overs 16–20 with the batting side 6–7 down, you can choke the finish. If you get there with the batting side 4 down, you’re asking for perfection.

Expect a match where 190 feels like par, 200 is a serious statement, and anything below 175 is a chase you should back. If the surface plays to history, the real contest will be whether RR or RCB can keep the middle overs above the venue baseline.
`,
    relatedPlayerIds: [1, 7, 29],
    matchId: 16,
    chartData: [
      { label: "Powerplay rpo", value: 8.51, color: "#43A047" },
      { label: "Middle overs rpo", value: 8.86, color: "#1E88E5" },
      { label: "Death overs rpo", value: 10.97, color: "#F4511E" }
    ],
    dataTable: {
      headers: ["Par score guide", "Interpretation"],
      rows: [
        ["<175", "Chase favoured"],
        ["175–190", "Even, depends on wickets"],
        ["190–205", "Strong total"],
        [">205", "Above-par statement"],
      ]
    }
  },
  {
    id: 6,
    slug: "rr-vs-rcb-match-16-toss-report-why-everyone-fields-first",
    title: "RR vs RCB toss report (Match 16): why captains keep choosing to field first in Bengaluru",
    subtitle: "With a 100% field-first trend in our dataset, the toss is less a choice and more a convention.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "4 min",
    tags: ["IPL 2026", "Toss", "RR", "RCB", "Bengaluru"],
    featured: false,
    content: `
The global IPL trend is to field first, and the overall numbers confirm it: across 1,169 matches in our toss dataset, teams chose to field first 764 times, winning 53.8% of those games. Bat-first toss choices occurred 405 times with a 45.9% win rate. Those percentages don’t prove causation, but they do explain why captains often treat “bowl first” as the default.

At M Chinnaswamy Stadium, Bengaluru, that default becomes extreme. In our venue dataset, the toss field-first percentage is 100%. That means every captain in the sample believed that chasing — with full information about the target — was the safer path.

Why does this happen?

1) The ground doesn’t offer a natural slowdown. With an 8.86 rpo middle-overs baseline, teams don’t feel ‘safe’ defending 175. Chasing lets you decide exactly how aggressive to be.

2) The highest score in the dataset is 287. When a venue shows that kind of ceiling, captains become wary of setting a target and still being “10 short.”

3) Psychological clarity. In high-scoring venues, the biggest batting errors come from tempo confusion: batting first, you can over-accelerate and lose wickets; chasing, you can calibrate risk ball by ball.

So what does a toss report recommend for RR vs RCB?

• If you win the toss, field first unless there is clear evidence of a dry surface that will slow later.

• If you lose the toss and bat first, plan your innings around 200, not 180. Use the venue average (189.1) as a guide, but aim above it.

• For the bowling side, the toss only matters if you can exploit the first six overs. A wicket in overs 1–3 is worth more here than two quiet overs with no breakthroughs.

The toss will be talked about, as always. But in Bengaluru, the bigger question is not “bat or bowl?” It’s: can the team with the ball create early mistakes on a surface designed to reward confident hitting?
`,
    relatedPlayerIds: [1, 7, 29],
    matchId: 16,
    chartData: [
      { label: "Overall: field first win%", value: 53.8, color: "#1E88E5" },
      { label: "Overall: bat first win%", value: 45.9, color: "#EF5350" },
      { label: "Bengaluru: field first %", value: 100, color: "#43A047" }
    ],
    dataTable: {
      headers: ["Toss trend", "Value"],
      rows: [
        ["Overall matches", "1169"],
        ["Field-first chosen", "764 (53.8% wins)"],
        ["Bat-first chosen", "405 (45.9% wins)"],
        ["Bengaluru field-first", "100% of venue sample"],
      ]
    }
  },
  {
    id: 7,
    slug: "pbks-vs-srh-match-17-preview-what-decides-new-chandigarh",
    title: "PBKS vs SRH (Match 17) preview: the matchup that decides whether this is a 170 game or a 200 game",
    subtitle: "Without clear venue history in our dataset for this ground name, we lean on league-wide toss and phase principles.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "PBKS", "SRH", "Match 17", "Preview"],
    featured: false,
    content: `
Punjab Kings vs Sunrisers Hyderabad is a stylistic contest: PBKS typically try to win with batting depth and aggressive middle overs, while SRH lean on pace power and game-control through matchups. The key is how the pitch behaves early. On surfaces that grip, SRH’s spin/variation options become more valuable. On surfaces that slide on, PBKS’s hitters can compress risk into short bursts.

Our venueStats dataset does not include a record matching the exact schedule name “PCA MYS International Stadium, New Chandigarh”, so we avoid pretending to have ground-specific averages. Instead, we lean on two robust guides: league-wide toss trends and phase scoring logic.

League-wide, teams field first more often and win more often. Across 1,169 matches, field-first has a 53.8% win rate, while bat-first choices win 45.9%. This suggests the same macro logic applies here: if conditions might change (dew, hardness), chasing gives captains clarity.

So what decides Match 17?

1) Can PBKS keep wickets for the last five overs? Modern T20 totals are often decided not by “how you start” but by “how many hitters survive.” A side that arrives at over 16 with 7 wickets in hand can score at 11–12 rpo without outrageous risk.

2) Can SRH create a bridge-overs wicket burst? The easiest way to defend 180 is to reduce the opposition’s finishing resources. One over with two wickets is more valuable than three overs of 6.5 rpo.

3) The left-right balance. SRH’s bowling plan often becomes predictable if a single-handedness partnership settles. PBKS can manipulate matchups with left-right combos and force suboptimal overs.

Player levers to track:

• Pat Cummins (SRH) often defines SRH’s control overs. His job is to make the run rate feel expensive.

• Heinrich Klaasen (SRH) is still the most explosive ‘death overs’ hitter in their setup. If SRH chase, his overs 16–20 impact is enormous.

• Kagiso Rabada (PBKS) is the obvious wicket-taker. If he strikes in the powerplay, SRH’s chase becomes rebuild-heavy.

Expect a game where the toss matters because it shapes planning, and where the decisive phase is likely overs 7–15: the segment that determines whether the finish is a controlled chase or a desperate one.
`,
    relatedPlayerIds: [6, 9, 17],
    matchId: 17,
    dataTable: {
      headers: ["What decides PBKS vs SRH", "Why"],
      rows: [
        ["Wickets in hand at 15 overs", "Sets the death-overs ceiling"],
        ["Bridge-overs wickets", "Reduces finishing hitters"],
        ["Toss decision", "Chasing offers clarity in variable conditions"],
      ]
    }
  },
  {
    id: 8,
    slug: "csk-vs-dc-match-18-preview-chepauk-game-plan",
    title: "CSK vs DC (Match 18) preview: DC’s chase ceiling meets CSK’s home control",
    subtitle: "A matchup that should be decided by who wins the middle overs: singles, matchups, and the ‘bridge’ after the first wicket.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "CSK", "DC", "Match 18", "Preview"],
    featured: false,
    content: `
Chennai Super Kings vs Delhi Capitals is a clash of tempo philosophies. DC have already shown they can chase big totals when their top order gets them ahead of the curve. CSK at home typically try to win with innings management: keep the game “small” through the middle and then win the last five with better resources.

Even without leaning on venue-specific numbers here, the universal T20 truth holds: the middle overs decide whether a team is chasing a target or chasing a miracle. That’s why DC’s recent pattern matters. In their 210 chase against GT, DC’s start was excellent, but the bridge overs after the opening stand broke became expensive — wickets and dot balls forced them into a boundary-or-bust finish.

Against CSK, DC cannot afford a similar bridge. CSK have historically been one of the best at turning overs 7–15 into a pressure lane: making singles feel slow and boundaries feel risky. If DC’s middle order can keep the strike moving, their chase ceiling remains among the best in the tournament.

Key levers:

• Ruturaj Gaikwad is CSK’s tempo controller. If he bats through 15 overs, CSK can set a target that forces DC into risk.

• Axar Patel is DC’s control bowler and a lineup-balancer. His overs can define whether CSK accelerate early or have to wait.

• KL Rahul remains DC’s chase engine. The difference between 45 off 35 and 45 off 28 is often the match in high-tempo games.

What should we watch?

1) Powerplay trade. If CSK start at 45/1, they will back themselves to squeeze later. If they start at 60/0, DC will need wickets, not containment.

2) Bridge overs. After the first wicket, can the new batter settle without bleeding dots? DC’s ability to manage this passage is the biggest indicator of whether they win.

3) Finishers’ resource battle. The side that arrives at over 16 with more wickets usually wins.

This match shapes up as a middle-overs chessboard. DC’s best path is to keep the chase equation honest. CSK’s best path is to make DC feel like they need a ‘special over’ to win.
`,
    relatedPlayerIds: [10, 30, 22],
    matchId: 18,
    dataTable: {
      headers: ["Phase", "Advantage cue"],
      rows: [
        ["Powerplay", "Who wins wickets vs tempo"],
        ["Overs 7–15", "Singles + matchup discipline"],
        ["Overs 16–20", "Wickets in hand decides ceiling"],
      ]
    }
  },
  {
    id: 9,
    slug: "season-analysis-why-teams-are-fielding-first-ipl-2026",
    title: "Season analysis: why ‘field first’ keeps winning (and when it doesn’t)",
    subtitle: "The numbers say field-first has an edge — but the real advantage is informational, not magical.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "Toss", "Analysis", "Strategy"],
    featured: false,
    content: `
The toss is the most over-discussed 30 seconds in T20, but it does matter — especially when conditions shift during the match. The cleanest way to talk about it is with probabilities. Across 1,169 matches in our toss dataset, teams chose to field first 764 times and won 53.8% of those games. When teams chose to bat first (405 times), they won 45.9%. That is a meaningful edge, but it’s not a guarantee.

So why does field-first win more often?

1) Information. Chasing teams know the exact target and can calibrate risk. This reduces the number of “tempo errors” — overs where a team either over-attacks and loses wickets or under-attacks and leaves too much for the end.

2) Conditions. Dew, hardness, and visibility can change. When the ball gets wetter, grip reduces and defending becomes harder. When the pitch slows, chasing becomes harder. Captains try to guess which way it will move.

3) Role clarity. Chasing gives clear roles: one player anchors, one attacks, one finishes. Batting first sometimes creates confusion: do you aim for 180 or 200? The wrong answer costs you 10–15 runs.

But field-first doesn’t always help. There are two situations where batting first can be superior:

• When the pitch is expected to slow sharply. In those games, setting a target and then bowling into a deteriorating surface is the advantage.

• When your bowling is stronger than your chasing. If your team is better at controlling and taking wickets than timing chases, batting first can let you play to strengths.

The best way to use toss data is not to treat it as destiny, but as a prompt: if you field first, plan your chase in phases and keep wickets. If you bat first, treat 180 as a baseline, not a finish line, especially at venues with high phase run rates.

As IPL 2026 progresses, teams that win consistently will be the teams that make fewer tempo errors — regardless of the toss. The toss gives you a framework; execution still decides the match.
`,
    relatedPlayerIds: [1, 2, 6, 12],
    chartData: [
      { label: "Field first win%", value: 53.8, color: "#1E88E5" },
      { label: "Bat first win%", value: 45.9, color: "#EF5350" }
    ],
    dataTable: {
      headers: ["Overall toss dataset", "Figure"],
      rows: [
        ["Matches", "1169"],
        ["Field-first chosen", "764"],
        ["Field-first wins", "411 (53.8%)"],
        ["Bat-first chosen", "405"],
        ["Bat-first wins", "186 (45.9%)"],
      ]
    }
  },
  {
    id: 10,
    slug: "season-venue-index-eden-vs-bengaluru-why-phase-rates-matter",
    title: "Venue index: Eden vs Bengaluru — two high-scoring grounds, two different pressure points",
    subtitle: "Eden’s death overs explode faster; Bengaluru stays high throughout. Your bowling plan must match the ground.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-10",
    readTime: "6 min",
    tags: ["IPL 2026", "Venue", "Eden Gardens", "Bengaluru", "Analysis"],
    featured: false,
    content: `
Not all high-scoring venues are high-scoring in the same way. Eden Gardens and M Chinnaswamy Stadium both produce big totals, but they stress different parts of your bowling plan.

Eden Gardens (23 matches in our dataset) has an average first innings of 196.8. Its powerplay rpo is 9.06, middle overs 8.77, and the death overs jump to 11.62. That jump is the key. If you arrive at the last five overs without having reduced the batting side’s resources, Eden will punish you.

Bengaluru (19 matches) has an average first innings of 189.1. Its phase rates are 8.51 (powerplay), 8.86 (middle), and 10.97 (death). The scoring is consistently high, which means the ‘pressure point’ is different: you can’t simply “survive the middle” and then defend at the end. You must win at least one phase — by taking wickets, by forcing low-risk singles into high-risk hits, or by creating a matchup choke.

Look at how captains behave.

• Eden: teams field first 78.3% of the time.

• Bengaluru: in our dataset, teams field first 100% of the time.

Both venues push captains toward chasing, but for slightly different reasons. Eden’s ceiling is high and the death overs are extreme. Bengaluru’s scoring stays high throughout, which makes target-setting feel uncertain.

If you’re building a bowling plan, here’s the practical difference:

1) Eden plan: prioritise middle-overs wickets and death-overs precision. If you don’t take wickets by over 15, your death overs will be exposed.

2) Bengaluru plan: prioritise early wickets and middle-overs matchup control. If you don’t create an early mistake, the batting side can keep the rate high without risk.

This is why venue-aware strategy matters. Teams often copy a successful plan from one ground to another and wonder why it fails. The ground shapes the risk curve. Eden rewards the team that preserves finishing resources. Bengaluru rewards the team that keeps phase scoring high while losing as few wickets as possible.

Match 15 and Match 16 sit on either side of that venue index. If you understand the pressure point, you can predict the tactics — and often the winner.
`,
    relatedPlayerIds: [1, 22, 23],
    chartData: [
      { label: "Eden avg 1st inns", value: 196.8, color: "#5E35B1" },
      { label: "Bengaluru avg 1st inns", value: 189.1, color: "#D32F2F" },
      { label: "Eden death rpo", value: 11.62, color: "#F4511E" },
      { label: "Bengaluru death rpo", value: 10.97, color: "#FB8C00" }
    ],
    dataTable: {
      headers: ["Venue", "Key numbers"],
      rows: [
        ["Eden Gardens", "Avg 1st inns 196.8; death 11.62 rpo; field-first 78.3%"],
        ["Bengaluru", "Avg 1st inns 189.1; death 10.97 rpo; field-first 100%"],
      ]
    }
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "matchup",
    title: "Eden Gardens: defendability index",
    value: "196.8 avg 1st inns",
    description: "At Eden Gardens the average first-innings score is 196.8 and death overs run at 11.62 rpo — totals under 190 often need middle-overs wickets to hold.",
    teamColors: ["#5E35B1", "#00ACC1"]
  },
  {
    type: "stat",
    title: "League toss edge",
    value: "53.8%",
    description: "Across 1,169 matches, teams choosing to field first won 53.8% of the time (vs 45.9% for bat first), highlighting the planning advantage in chases.",
  },
  {
    type: "player",
    title: "Finisher spotlight",
    value: "Mukul Choudhary 54* (27)",
    description: "In Match 15, the unbeaten 54 off 27 anchored the chase’s final phase and prevented a high-pressure new-batter scenario.",
    playerIds: [24]
  }
];
