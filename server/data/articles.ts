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
    slug: "ipl-2026-match-29-pbks-vs-lsg-recap-arya-connolly-180-stand-powers-254-and-a-54-run-win",
    title: "IPL 2026 Match 29 (PBKS vs LSG) recap: Arya + Connolly light up Mullanpur as Punjab post 254 and win by 54",
    subtitle: "Punjab Kings piled up 254/7 and limited Lucknow Super Giants to 200/5 to stay unbeaten in IPL 2026 on April 19.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "7 min",
    tags: ["IPL 2026", "PBKS", "LSG", "Match 29", "Mullanpur"],
    featured: true,
    relatedPlayerIds: [4, 22, 30],
    matchId: 29,
    chartData: [
      { label: "Mullanpur PP RPO (hist.)", value: 8.61, color: "#ff7f0e" },
      { label: "Mullanpur Middle RPO (hist.)", value: 7.28, color: "#1f77b4" },
      { label: "Mullanpur Death RPO (hist.)", value: 10.18, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Mullanpur (IPL/T20 history)", "Value", "Match 29 lens"],
      rows: [
        ["Avg 1st inns", "163.0", "254/7 was miles above the venue baseline"],
        ["Avg 2nd inns", "155.4", "A 250+ chase needed a near-perfect 20 overs"],
        ["Toss: field first", "70.0%", "Captains often back chasing here"],
        ["Bat first win%", "50.0%", "Not a one-way chasing ground despite toss bias"],
        ["Highest score", "219", "PBKS pushed past the historical ceiling"]
      ]
    },
    content: `Punjab Kings produced the kind of innings that bends a tournament’s run-rate curve. Against Lucknow Super Giants at Mullanpur, PBKS stacked 254/7 and then defended it comfortably, winning by 54 runs.

The headline was the second-wicket stand: Priyansh Arya’s 93 off 37 and Cooper Connolly’s 87 off 46 turned a good batting surface into a batting exhibition. What made it so damaging is how early the acceleration began. Even at a venue where the historical powerplay rate is already high (8.61 runs per over), Punjab’s tempo kept climbing instead of plateauing.

Why is that significant? Mullanpur’s numbers usually create “two-phase” scoring: a quick powerplay, a controlled middle, and then a sharp final push. Historically, the middle overs are the slowest block here (7.28 RPO), while the death overs jump to 10.18. PBKS effectively skipped the slow block by keeping boundary pressure constant through the middle.

Lucknow’s chase never truly found the rhythm required for a 255 target. Even if you start well, you must preserve hitting capacity for overs 11–20; at this ground, the average second-innings score is 155.4, and the venue’s highest listed total is 219. A 250+ chase needs not just a good start, but sustained 12–13 RPO for 15 overs — and that’s before wickets and matchup management come into play.

Rishabh Pant’s 43 (23), Aiden Markram’s 42 and Mitchell Marsh’s 40 were competitive cameos, but the context was brutal: each “good over” still left LSG behind the required rate. Chasing teams here are often encouraged by toss trends (70% of toss winners choose to field first), yet the overall bat-first win rate sits at 50%. That tells you the surface isn’t purely about dew or chasing comfort — it’s about whether the chasing side has enough depth and intent to absorb the middle-overs squeeze.

From PBKS’ perspective, the blueprint is clear: maximize their top-three leverage, and turn par-score grounds into outlier-score grounds. This win also has a table-impact subtext: huge wins improve net run rate quickly, and in close playoff races that can be worth as much as an extra point.

For LSG, the immediate correction is tactical rather than purely batting: against totals above 230, you cannot afford “information overs” in the middle. One batter must commit to a risk-heavy plan against spin, because waiting until the last five overs to surge is mathematically too late. Match 29 was a reminder that sometimes the game is decided not by who bats better — but by who forces the opponent to play a different sport.`
  },
  {
    id: 2,
    slug: "ipl-2026-match-28-kkr-vs-rr-recap-eden-gardens-chase-4-wicket-win-two-balls-left",
    title: "IPL 2026 Match 28 (KKR vs RR) recap: Kolkata finally get over the line at Eden Gardens with a 4-wicket win",
    subtitle: "KKR chased down RR’s total and won by 4 wickets with two balls remaining at Eden Gardens on April 19.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "RR", "Match 28", "Kolkata"],
    featured: false,
    relatedPlayerIds: [23, 7, 20, 27],
    matchId: 28,
    chartData: [
      { label: "Eden PP RPO (hist.)", value: 7.28, color: "#ff7f0e" },
      { label: "Eden Middle RPO (hist.)", value: 7.51, color: "#1f77b4" },
      { label: "Eden Death RPO (hist.)", value: 9.37, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Eden Gardens (history)", "Value", "What it suggests"],
      rows: [
        ["Avg 1st inns", "160.2", "Par is lower than most 2020s IPL venues"],
        ["Bat second win%", "61.0%", "Chasing is historically advantaged"],
        ["Toss: field first", "63.6%", "Captains often align with the chase bias"],
        ["Highest score", "232", "But one innings can still run away"]
      ]
    },
    content: `KKR’s season needed a stabilizer, and Match 28 delivered it. Kolkata beat Rajasthan Royals by four wickets at Eden Gardens, finishing the chase with two balls remaining.

Even without every ball-by-ball detail, the result itself tells a tactical story: Eden Gardens continues to reward teams that can keep wickets in hand and attack late. Historically, batting second has won 47 of 77 games here (61%), and toss winners choose to field first about 63.6% of the time. In other words, the venue’s “default” game script is a chase — and KKR executed that script.

Eden’s scoring profile also matters for how you build a chase. The powerplay rate historically sits at 7.28 RPO, rising only marginally in the middle (7.51), and then jumping to 9.37 at the death. That makes it less of a “flat deck” and more of a venue where run-making becomes easier once the ball softens and batters have time to assess pace and grip.

For Rajasthan, the lesson is that simply reaching par isn’t enough if you don’t own at least one phase. The average first-innings score here is 160.2. If RR posted something around that mark, it’s competitive — but the bowling plan has to be built around taking wickets in the middle overs. Eden’s middle-overs rate is modest, so defending teams must treat overs 7–15 as wicket-taking overs, not “containment.” Containment just leaves the required rate manageable and allows the chasing side to line up matchups for the final five.

For Kolkata, the finishing detail is the most encouraging part: winning with two balls left means they were not merely clinging on; they had enough control to avoid the last-over lottery. Close chases are often decided by decision quality — when to take on spin, when to preserve strike, and when to accept a quiet over. Those micro-decisions are also where teams rediscover confidence.

KKR’s path forward is to replicate the Eden template away from home: build chases around wicket preservation, treat the middle overs as a risk-managed phase (not a passive one), and keep a clear plan for death overs where Eden’s numbers show scoring spikes.

For RR, the concern is the opposite: if they cannot create scoreboard pressure at a chasing-leaning venue, they’ll need either a bowling outlier (powerplay burst) or a batting outlier (190+). Eden isn’t a ground where 170 automatically wins — it’s a ground where your middle overs decide whether 170 is defendable.`
  },
  {
    id: 3,
    slug: "ipl-2026-sunday-double-header-what-we-learned-kkr-keep-their-nerve-pbks-break-the-run-rate-scale",
    title: "IPL 2026 Sunday takeaways: KKR win the close one, PBKS break the run-rate scale",
    subtitle: "Two very different games on April 19 revealed why venue context and phase control still rule T20 outcomes.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "Analysis", "KKR", "RR", "PBKS", "LSG"],
    featured: false,
    relatedPlayerIds: [4, 23, 7, 22],
    content: `Sunday’s IPL double-header offered a clean contrast between two types of T20 wins.

In Kolkata, KKR beat RR by four wickets with two balls to spare — a chase that fits Eden Gardens’ historical lean. At Eden, batting second has won 61% of matches, and toss winners pick fielding first about 63.6% of the time. The venue’s phase scoring is also “incremental”: powerplay 7.28 RPO, middle 7.51, death 9.37. That structure rewards teams that can keep the chase tidy and then accelerate with intent once the finishing overs arrive.

In Mullanpur, PBKS demolished the concept of “par.” Their 254/7 is extraordinary in a ground where the average first innings is 163.0 and the listed historical high is 219. The venue’s phase template (8.61 PP, 7.28 middle, 10.18 death) suggests a game where you surge early, take a breath, and then surge again. Punjab’s key innovation was refusing the breath. Their middle-overs tempo stayed aggressive enough to turn a strong powerplay into a tournament-leading total.

So what’s the common thread between a nail-biter and a blowout? Phase ownership.

1) Eden rewards discipline in the chase. You don’t need to win the first six overs; you need to avoid losing them. Given the relatively modest middle overs rate, the defending side is always tempted to “protect” instead of attack. Chasing sides should exploit that by holding wickets and planning a late surge.

2) Mullanpur rewards boundary pressure. Because toss winners often choose to field (70%), teams can talk themselves into the belief that chasing is “easier.” But the bat-first win percentage is 50%, which is a warning: if you allow a batting side to get to 230+, dew won’t rescue you.

3) Outlier totals change the rest of your season. A 54-run win and a 254 total does two things: it adds points and it inflates net run rate in a way that can protect you later. When PBKS post that kind of total, they’re not just winning Match 29 — they’re buying table insulation.

As the tournament moves into the grind of back-to-back fixtures, teams that understand venue baselines — and then deliberately decide whether to play to them or break them — will keep winning more often than teams that rely on “form.” Sunday underlined that the game is still about planning phases, not just picking XIs.`
  },
  {
    id: 4,
    slug: "ipl-2026-match-30-gt-vs-mi-preview-ahmedabad-pace-vs-power-and-a-scoreboard-first-innings-par-186",
    title: "IPL 2026 Match 30 (GT vs MI) preview: Ahmedabad asks for 190, and both teams have the hitters",
    subtitle: "Narendra Modi Stadium trends point to a high-scoring night; execution in the middle overs may decide it on April 20.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "GT", "MI", "Match 30", "Ahmedabad"],
    featured: false,
    relatedPlayerIds: [13, 11, 12, 2, 5],
    matchId: 30,
    chartData: [
      { label: "Ahmedabad Avg 1st inns", value: 186.6, color: "#1f77b4" },
      { label: "Ahmedabad Avg 2nd inns", value: 170.1, color: "#ff7f0e" },
      { label: "Ahmedabad Death RPO", value: 10.75, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Narendra Modi Stadium (history)", "Value", "Implication for Match 30"],
      rows: [
        ["Toss: field first", "81.8%", "Captains heavily prefer chasing setups"],
        ["Bat first win%", "48.5%", "But scoreboard pressure still works"],
        ["Powerplay RPO", "8.46", "Expect fast starts"],
        ["Middle overs RPO", "8.55", "Minimal slowdown if set batters survive"],
        ["Death overs RPO", "10.75", "Finishing overs can swing games"]
      ]
    },
    content: `Match 30 brings Mumbai Indians to Ahmedabad to face Gujarat Titans at a venue that has quietly become one of the league’s most consistently high-scoring stages.

The Narendra Modi Stadium’s historical baseline is telling: average first-innings score 186.6 and average second-innings score 170.1. That gap does not automatically mean chasing is easy; it means teams batting first often reach 180–200, and the chasing side is forced into continuous aggression.

Toss trends here are extreme: 81.8% of toss winners choose to field first. That suggests captains want clarity on the chase and back their batters under lights. But the win split is nearly even (bat-first win% 48.5%). The practical takeaway is simple: the toss helps, but it doesn’t protect you from a well-constructed 195.

From a phase perspective, Ahmedabad is unusual because it doesn’t slow down in the middle. Powerplay scoring sits at 8.46 RPO and the middle overs are actually slightly higher at 8.55. That means the match is likely to be decided by two things: (1) who loses fewer wickets between overs 7–15, and (2) who maximizes the death overs, where the rate jumps to 10.75.

So where does that leave GT vs MI?

For MI, the upside is obvious: they have multiple batters who can turn death overs into a 50-run block. The danger is equally clear: on a ground where the middle overs are not naturally restrictive, defensive bowling plans get punished. If Mumbai’s bowlers miss lengths by even small margins, the set batters can keep the run rate at 9+ without taking extravagant risks.

For GT, the match is about sequencing: using the powerplay to secure a platform, then targeting the middle overs as the “keep scoring, don’t collapse” phase. If GT carry wickets into the final five, Ahmedabad’s death-overs profile supports a late surge.

A useful benchmark for both teams is to treat 190 as par and 205 as a winning total. Anything below 180 is chase-friendly here, regardless of the scoreboard optics.

Prediction lens: whichever team wins the middle overs (not necessarily the powerplay) will likely win Match 30. This is a venue where you can’t hide a quiet stretch — the ground’s numbers imply there is no quiet stretch.`
  },
  {
    id: 5,
    slug: "ipl-2026-match-30-gt-vs-mi-ahmedabad-pitch-report-why-the-middle-overs-are-never-slow-here",
    title: "GT vs MI pitch report (Ahmedabad): why the middle overs are rarely slow at Narendra Modi Stadium",
    subtitle: "Ahmedabad’s historical scoring shows sustained run-making; teams should plan for 8.5+ through overs 7–15.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "5 min",
    tags: ["IPL 2026", "Pitch report", "GT", "MI", "Ahmedabad"],
    featured: false,
    relatedPlayerIds: [2, 12, 11],
    matchId: 30,
    chartData: [
      { label: "Powerplay RPO", value: 8.46, color: "#ff7f0e" },
      { label: "Middle overs RPO", value: 8.55, color: "#1f77b4" },
      { label: "Death overs RPO", value: 10.75, color: "#2ca02c" }
    ],
    content: `When people talk about “good batting pitches,” they usually mean one of two things: either the ball comes on nicely early, or the death overs are short-boundary chaos. Ahmedabad is different. Its most important feature is that it doesn’t slow down in the middle.

Historically at the Narendra Modi Stadium, powerplay scoring is strong (8.46 runs per over), but the middle overs are marginally higher (8.55). That’s a rare profile in IPL venues: most grounds dip in overs 7–15 when spinners settle in and batters protect wickets. In Ahmedabad, the data suggests batters can keep taking 8–10 an over without a drastic rise in risk.

What causes that? Typically it’s a combination of true bounce, fast outfields, and predictable pace-off lengths. Bowling teams can still succeed — but only by being proactive. If you allow set batters to “get in,” the venue does not naturally rescue you with grip or two-paced bounce.

The overall scoring baselines reinforce the same point: average first-innings score is 186.6, average second-innings is 170.1, and the highest listed total is 243. This is not a 160-par ground. If you’re building a plan for GT vs MI, start with 190 as a baseline and then ask: where do we find 15 extra runs?

That’s where phase design matters:

1) Powerplay: You want 50+ without losing more than two wickets. The pitch allows stroke-making, but the ball is also at its hardest — so the best bowlers will attack.

2) Middle overs: This is the defining block. Because 8.55 is “normal” here, batting teams should not accept 7-an-over consolidation. Conversely, bowling sides must hunt wickets. A wicket at the start of this phase is worth two overs of dot-ball pressure.

3) Death overs: Scoring naturally spikes to 10.75. That doesn’t mean every over goes for 12; it means the batting side can realistically plan a 55–60 finish if they arrive with hitters set.

A final, practical note: toss behavior is extreme here (81.8% choose to field). If you bat first and post 200+, you are already pushing against the venue’s chasing preference. If you bat second and lose early wickets, you can’t rely on “pitch easing” later — it is already easy.

So the pitch report is simple: plan to score throughout. Ahmedabad is the rare IPL venue where the middle overs are not a resting place. They are a runway.`
  },
  {
    id: 6,
    slug: "ipl-2026-match-30-gt-vs-mi-toss-report-why-captains-almost-always-field-first-in-ahmedabad",
    title: "GT vs MI toss report (Ahmedabad): why captains overwhelmingly choose to field first",
    subtitle: "At Narendra Modi Stadium, 81.8% of toss winners field first, but bat-first wins are still 48.5% — the toss isn’t everything.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "5 min",
    tags: ["IPL 2026", "Toss report", "GT", "MI", "Ahmedabad"],
    featured: false,
    relatedPlayerIds: [13, 2, 11],
    matchId: 30,
    dataTable: {
      headers: ["Toss decision (Ahmedabad)", "Count", "Win%"],
      rows: [
        ["Field first", "27 of 33", "48.1%"],
        ["Bat first", "6 of 33", "33.3%"],
        ["Overall bat-second wins", "17 of 33", "51.5%"],
        ["Overall bat-first wins", "16 of 33", "48.5%"]
      ]
    },
    content: `If you want a single statistic that describes Ahmedabad’s tactical culture, it’s this: captains field first 81.8% of the time at the Narendra Modi Stadium.

That’s not a small preference; it’s a near-consensus. The reasons are familiar in IPL logic: chase clarity, potential dew, and the belief that you can “pace” a chase better than you can build a total from scratch. But the second part of the data is equally important: bat-first teams still win 48.5% of matches here. So while captains love chasing, the advantage is modest, not overwhelming.

For Match 30 (GT vs MI), this creates a useful decision framework.

If you win the toss and field:
- You’re aligning with the venue’s strongest behavioral trend.
- You’ll likely get a more readable chase.
- But you must accept that the bowling innings might be expensive anyway, because the pitch supports steady run-making across phases.

If you win the toss and bat:
- You’re betting against convention.
- But you can create scoreboard pressure, especially because the average first innings is already high (186.6).
- And you can shape matchups to attack the opposition’s weaker death-overs bowlers.

The split inside toss decisions is also revealing. Teams that field first after winning the toss have a 48.1% win rate here — basically a coin flip. Teams that bat first after winning the toss win 33.3% of the time, but note the tiny sample (6 matches). The real point is not “always field.” It’s “fielding doesn’t guarantee anything.”

So what should GT and MI prioritize?

1) A plan for the middle overs. Because Ahmedabad’s middle-overs scoring is high (8.55 RPO), the team that creates wickets in overs 7–15 often controls the game, regardless of toss.

2) Death-over resources. With a historical death-overs rate of 10.75, you need at least two bowlers you trust at the end. If you don’t, your toss decision becomes irrelevant.

3) Par-score realism. Treat 190 as par and 205 as strong. If you bat first and finish on 175, you are handing the chasing team a task the venue has seen many times.

Expect the toss winner to field, because that’s what Ahmedabad does. But the team that wins the key overs will still decide Match 30.`
  },
  {
    id: 7,
    slug: "ipl-2026-season-trend-why-250-plus-totals-change-team-selection-more-than-any-other-metric",
    title: "IPL 2026 trend: why 250+ totals change team selection more than any other metric",
    subtitle: "Punjab’s 254/7 vs LSG is a reminder that once totals move past 230, roles, bowling plans, and even toss logic shift.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "Analysis", "Batting", "Run rate"],
    featured: false,
    relatedPlayerIds: [4, 1, 3, 13],
    content: `A 250+ score is not just “a big total.” It changes the match ecosystem.

When Punjab Kings hit 254/7, it wasn’t merely an exceptional batting card — it was a signal that the traditional T20 playbook has a ceiling. Most teams plan for par scores around 170–190 depending on venue. Once you move beyond 230, the opposition’s bowling plan, chasing plan, and even selection logic has to transform.

Start with the chase. In a normal 190 chase, you can afford a couple of quiet overs to manage matchups or protect a batter from a tough bowler. In a 250 chase, you cannot. Every over that goes for 6–7 effectively ends your chase unless you immediately compensate with a 20-run over — and those are rare, even on flat pitches.

Then consider bowling roles. Most sides carry one “middle overs control” spinner and two death specialists. But 250+ totals put stress on the middle overs specialists too, because the batting side can hit through the middle without falling behind the game. That forces captains into earlier high-risk bowling changes.

Venue context matters here. Mullanpur’s historical first-innings average is 163.0, and its highest listed total is 219. Punjab didn’t just score big; they scored beyond the ground’s usual ceiling. When a side can do that, it tells the rest of the league that your “safe” defensive plans aren’t safe.

This is why 250+ games tend to reshape selections in the following ways:

1) Extra batting depth. Teams start favoring an extra hitter at No. 7/8, because they fear being outgunned.

2) More pace-off options. If raw pace gets hit, cutters and hard length become valuable. Variety is the only way to survive 20 overs.

3) Spin that attacks, not just contains. Containment spinners become the first casualty. You need wicket-taking threats who can break partnerships.

4) Toss logic becomes less decisive. At Mullanpur, 70% of toss winners field first, yet bat-first wins are 50%. Once totals go extreme, the toss is just a preference, not an advantage.

The broader trend is this: as IPL scoring grows, the middle overs are becoming the battleground. If batting sides can keep 8.5–9 through overs 7–15, your death overs will always be under siege.

Punjab’s 254/7 may end up being remembered not just as a highlight, but as a tactical inflection point. When a team proves it can break a venue ceiling, every opponent has to ask a new question: do we have enough batting to keep up — and do we have enough variation to slow them down?`
  },
  {
    id: 8,
    slug: "kkr-eden-gardens-strategy-why-chasing-still-works-here-and-how-bowlers-can-fight-back",
    title: "KKR at Eden Gardens: why chasing still works here — and how bowlers can fight back",
    subtitle: "Eden’s numbers point to a chase tilt, but wicket-taking middle overs can still flip matches.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "Eden Gardens", "Analysis"],
    featured: false,
    relatedPlayerIds: [23, 27, 7],
    content: `Eden Gardens can look like a contradiction: a big stadium with a reputation for spin, but a clear historical advantage for chasing.

The numbers clarify the story. Across 77 matches, Eden’s average first-innings score is 160.2 and the average second-innings score is 147.1. Yet batting second wins 47 times (61%). Toss winners choose to field first 63.6% of the time. That suggests captains believe in the chase — and the results broadly support them.

Why does chasing work? Because Eden is a “manageable chase” venue. The par score is not 190; it’s closer to 160. That keeps required rates in a range where batters can plan. Add a death-overs scoring spike (9.37 RPO historically), and a chasing side can keep wickets in hand knowing it can surge late.

But that doesn’t mean bowlers are helpless. The most important block at Eden is the middle overs. The historical middle-overs rate is 7.51 — not low enough to strangle a chase, but low enough that a wicket or two can change the geometry.

So how do bowlers fight back at Eden?

1) Attack early in the middle. Overs 7–10 are the “decision” overs. If the set batter is allowed to settle into a 1s-and-2s rhythm, the chase becomes routine.

2) Use pace change more than turn. Eden’s big outfield rewards miscues, so slower balls and cutters can be as valuable as pure spin.

3) Protect the boundary on one side and force the hitter to go long. Many Eden dismissals come from batters trying to clear the square boundaries against the spin.

4) Don’t overreact to a quiet over. Because Eden’s death overs jump to 9.37, a batting side will always have a late gear. The defending side must preserve its best death resources for overs 16–20, even if that means “absorbing” a 10-run over earlier.

KKR’s win over RR in Match 28 was a reminder that Eden rewards composure. Winning with two balls remaining means their chase stayed under control, even if there were pressure moments. For Kolkata, the repeatable takeaway is that they don’t need to chase like a 200 pitch — they need to chase like Eden.

For visiting teams, the message is simple: if you bat first, don’t just aim for 160. Aim to win a phase. A par total without middle-overs wickets is rarely enough at Eden Gardens.`
  },
  {
    id: 9,
    slug: "pbks-batting-structure-what-unbeaten-teams-do-differently-when-their-top-order-fires",
    title: "PBKS batting structure: what unbeaten teams do differently when their top order fires",
    subtitle: "Punjab’s unbeaten run has been powered by top-order leverage and clear phase targets rather than constant reshuffles.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "PBKS", "Batting", "Analysis"],
    featured: false,
    relatedPlayerIds: [4, 11, 22],
    content: `Unbeaten teams rarely win because they “find something new” every match. More often, they win because they do the same important things well and force the opponent into errors.

Punjab Kings’ April 19 win over LSG is a perfect example. The innings was explosive, but the structure behind it was straightforward: maximize top-order time and refuse the middle-overs slowdown.

This is where venue context helps explain what PBKS are doing. At Mullanpur, the historical pattern is clear: fast powerplay (8.61 RPO), slower middle (7.28), and a late surge (10.18). Many teams unconsciously follow that template. PBKS, at their best, treat the template as optional.

When your top order fires, you get two strategic benefits:

1) You win the boundary battle without needing late-overs heroics. A 180-run partnership in 13 overs means you don’t need a perfect death phase.

2) You reduce risk for your finishers. Instead of asking No. 6/7 to score 50 off 20, you ask them to score 25 off 12 with freedom.

The hardest part is the middle overs. The middle overs are where teams “give back” momentum. PBKS avoided that by keeping boundary options open and rotating strike aggressively when the big hits weren’t available. That’s how you keep the run rate above the opponent’s comfort zone.

It also influences bowling strategy. When a side knows it can score through the middle, bowlers are forced to take higher-risk options (short balls, wide yorkers, surprise spin). That increases error rate. Many 250+ innings are created not just by great batting, but by the bowling side abandoning its best lengths.

So what should PBKS protect going forward?

- Clear phase targets: 55 in the powerplay, 85–90 by 10 overs, and wickets in hand for a 60+ finish.
- Role clarity: don’t reshuffle just because one player has a quiet game.
- Matchup planning: attack the “containment” bowler early so the opposition loses a safe option.

Punjab’s unbeaten status is ultimately a function of repeatable process. If their top order keeps buying them time, and they keep refusing the middle-overs pause, they’ll remain one of the hardest teams to outscore in IPL 2026.`
  },
  {
    id: 10,
    slug: "ipl-2026-match-31-srh-vs-dc-preview-hyderabad-uppal-chase-bias-vs-dc-bowling-matchups",
    title: "IPL 2026 Match 31 (SRH vs DC) preview: Uppal chase bias meets DC’s matchup bowling",
    subtitle: "Hyderabad’s Rajiv Gandhi Stadium trends reward chasing; the middle overs will test both teams on April 21.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-20",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "DC", "Match 31", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [8, 6, 4, 30, 16],
    matchId: 31,
    chartData: [
      { label: "Uppal Avg 1st inns", value: 156.1, color: "#1f77b4" },
      { label: "Uppal Avg 2nd inns", value: 147.0, color: "#ff7f0e" },
      { label: "Uppal Death RPO", value: 9.56, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Rajiv Gandhi Stadium, Uppal (history)", "Value", "Match 31 note"],
      rows: [
        ["Bat second wins", "30 of 49", "Chasing has won 61.2%"],
        ["Toss: field first", "53.1%", "Captains lean to chase, but not extreme"],
        ["Powerplay RPO", "6.69", "Early overs can be cagey"],
        ["Middle overs RPO", "7.20", "Spinners can control tempo"],
        ["Death overs RPO", "9.56", "Finishers still have a late gear"]
      ]
    },
    content: `Match 31 takes us to Hyderabad, where the Rajiv Gandhi International Stadium (Uppal) has a clearer identity than most: it’s a chase-leaning venue with a relatively modest par score.

Across 49 matches, teams batting second have won 30 times (61.2%). Toss winners choose to field first 53.1% of the time — a mild preference rather than a hard rule. The numbers suggest two things: (1) teams like knowing their chase, and (2) the ground tends to keep required rates manageable.

But Uppal is not a pure batting paradise. The powerplay scoring is low by IPL standards (6.69 RPO). The middle overs also stay controlled (7.20). That means the match is often decided by who “breaks” the game open in the late middle — overs 11–15 — before the death overs spike to 9.56.

For SRH vs DC, that sets up a classic tactical clash.

If SRH bat first, their goal should be to avoid a powerplay crawl. On a ground where early scoring is naturally suppressed, 35/1 after six can still be fine — but only if you have a clear plan to attack in overs 7–12. A 160 target is defendable here, but only when you’ve won at least one phase.

If DC chase, they should treat the first six overs as survival-plus: keep wickets, steal any bad-ball boundaries, and aim to be within 10 of par pace. Uppal rewards late chases because the death overs allow acceleration, and the outfield generally supports boundary conversion.

Bowling is where DC can make the game uncomfortable. Uppal’s middle overs rate (7.20) indicates a venue where control spinners and cutters can squeeze without needing miracle turn. For SRH, that means their batting order must be prepared to manufacture 8–9 an over against “good” overs, not just feast on loose ones.

A realistic read: par is 160. Win the middle overs, and the chase bias won’t matter. Lose them, and the game will feel like it’s slipping even if the required rate looks fine on paper.`
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Venue outlier watch",
    value: "PBKS 254/7 at Mullanpur",
    description: "Mullanpur’s historical avg 1st inns is 163.0; PBKS blew past it by 91 runs — a net run-rate booster as well as a win.",
    teamColors: ["#d71920", "#1f77b4"]
  },
  {
    type: "matchup",
    title: "Toss trend",
    value: "Ahmedabad: 81.8% field-first",
    description: "At Narendra Modi Stadium, captains overwhelmingly chase, but bat-first teams still win 48.5% — execution matters more than the toss.",
    teamColors: ["#0f2c52", "#0056a3"]
  },
  {
    type: "player",
    title: "Player focus",
    value: "Rishabh Pant",
    description: "Pant’s 43 off 23 in a 255 chase shows LSG’s intent; they’ll need one batter to sustain aggression through the middle overs in future big chases.",
    playerIds: [4]
  }
];
