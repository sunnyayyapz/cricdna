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
    slug: "rr-vs-rcb-match-16-recap-sooryavanshi-78-jurel-81-chase-202",
    title: "RR vs RCB (Match 16) recap: Sooryavanshi’s powerplay burst turned a 202 chase into an 18-over finish",
    subtitle: "RCB’s 201/8 looked defendable, but RR reached 97/1 in the first 6 and never let the required rate climb.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "7 min",
    tags: ["IPL 2026", "RR", "RCB", "Match 16", "Guwahati"],
    featured: true,
    content: `
Rajasthan Royals beat Royal Challengers Bengaluru by 6 wickets in Match 16 after chasing 202 in 18 overs (RCB 201/8, RR 202/4). The headline is the scoreline, but the real story is *phase dominance*: RR didn’t “chase well”, they crushed the part of the game that decides most high chases — the first 36 balls.

RCB’s innings had an obvious inflection point. Losing Phil Salt first ball put them behind the ideal powerplay script, and the middle of the innings needed a stabiliser. Rajat Patidar delivered exactly that captain’s template: 63 off 40 with enough boundary bursts to keep 200 in play even as wickets fell around him. A late push from Venkatesh Iyer (29* off 15) finally got RCB to 201/8 — a total that usually wins if you can bank early dots and force a rebuild.

RR’s reply removed that defensive path immediately. Vaibhav Sooryavanshi’s 78 off 26 was not just fast; it was *timed* fast. When you take the chase to 97/1 in the first six overs, you change the entire decision tree for the batting side: singles are suddenly valuable, risk management becomes easy, and bowlers lose the ability to “buy” a quiet over by changing pace.

To put that in a simple equation: after 6 overs, RR needed 105 off 84 balls — a required rate of 7.5 rpo in a chase that started at 10.1 rpo. From there, even a small wobble is survivable.

RCB did get their wobble window. Krunal Pandya removed Sooryavanshi and then struck again to briefly bring nerves into the chase, and Hazlewood accounted for RR captain Riyan Parag as RR slipped to 134/4. But the problem for the bowling side was that the wobble arrived after the rate had already been “paid down.” That’s why Dhruv Jurel’s 81* off 43 and Ravindra Jadeja’s calm 24* were enough to close the game out without needing a final-over gamble.

If you’re RCB, the post-match review is blunt: defending 200 is less about having a good over, and more about preventing a *runway* in the powerplay. Once RR built that runway, every conservative choice (wide yorker, slower ball into the pitch, back-of-length cutters) still leaked enough to keep the chase comfortable.

If you’re RR, this match reinforced a repeatable identity: attack early, then play the chase like a spreadsheet. When you can turn a 202 target into a 7.5 rpo requirement after six overs, you don’t need heroics — you just need competence.
`,
    relatedPlayerIds: [7, 18, 29],
    matchId: 16,
    chartData: [
      { label: "RCB", value: 201, color: "#D32F2F" },
      { label: "RR", value: 202, color: "#EC407A" }
    ],
    dataTable: {
      headers: ["Match", "Detail"],
      rows: [
        ["Result", "RR won by 6 wickets"],
        ["RCB", "201/8 (20)"],
        ["RR", "202/4 (18)"],
        ["Key RR innings", "Sooryavanshi 78 (26), Jurel 81* (43)"],
        ["Key RCB innings", "Patidar 63 (40), Iyer 29* (15)"],
        ["Toss", "RR bowled first"],
      ]
    }
  },
  {
    id: 2,
    slug: "rr-vs-rcb-match-16-analysis-powerplay-97-one-wicket",
    title: "Match 16 tactical takeaway: why 97/1 after six overs is almost a guaranteed chase",
    subtitle: "Even a three-wicket mini-collapse didn’t matter once RR flattened the required rate in the first phase.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "RCB", "Powerplay", "Strategy"],
    featured: false,
    content: `
The most dangerous thing a chasing side can do is allow the required rate to stay flat-or-rise through the first 8–10 overs. Match 16 showed the opposite: Rajasthan Royals took the entire chase and made it easier every over.

The number to hold onto is the powerplay: RR were 97/1 after 6 overs in a chase of 202. That single phase changed what “good bowling” even looked like for RCB. When a chase starts at 10.1 rpo, the bowling side expects natural pressure to create shots. But after 6, RR only needed 7.5 rpo.

At 7.5, the chasing side can win with almost boring cricket:
- 1 boundary per over + 3 singles is enough.
- Two quiet overs in the middle can be repaired without forcing big risks.
- The set batter can play with a wide scoring arc rather than a high-risk boundary hunt.

That’s why the late wickets didn’t bite. RCB did find a seam of success: Krunal Pandya struck twice, Hazlewood removed the skipper, and RR were 134/4. In many chases, 4 down before the 10th over is panic. Here it was simply “a delay.”

Dhruv Jurel’s innings is a perfect case study of what a powerplay platform creates. His 81* off 43 didn’t need a continuous boundary streak because the chase had already been made cheap. He could take the low-risk options (hard-run twos, controlled sixes only when matchups were favourable), and he had Ravindra Jadeja as the ideal closing partner: calm strike rotation, low dismissal probability.

For RCB, this match is a reminder of a non-negotiable: defending 200 is first about powerplay bowling plans. If you concede 10+ rpo early *and* lose only one wicket, you are effectively defending a 170-equivalent chase thereafter.

If RR keep producing these “rate-flattening” starts, they won’t just win chases — they will make opponents feel like 200 is not par.
`,
    relatedPlayerIds: [18, 7],
    matchId: 16,
    chartData: [
      { label: "Target", value: 202, color: "#546E7A" },
      { label: "RR powerplay score", value: 97, color: "#EC407A" },
      { label: "Runs needed after 6", value: 105, color: "#26A69A" }
    ]
  },
  {
    id: 3,
    slug: "rr-vs-rcb-match-16-analysis-rcb-batting-collapse-patidar-anchor",
    title: "RCB batting in Match 16: Patidar’s anchor innings masked a top-order collapse",
    subtitle: "201/8 was excellent recovery, but the wicket pattern made defending 200 harder than it looked.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "RCB", "Batting", "Collapse", "Match 16"],
    featured: false,
    content: `
Royal Challengers Bengaluru ended on 201/8 in Match 16 — a score that should be defendable. But the way they got there matters, because it shapes how bowlers are used and what matchups are available in the second innings.

The early loss of Phil Salt first ball immediately removed one high-tempo option. Virat Kohli (32 off 16) briefly compensated with powerplay intent, but once he fell, RCB’s innings became a salvage job. The summary line from the match is that they were “reeling” before Patidar built them back up.

Rajat Patidar’s 63 off 40 is the classic modern T20 anchor: start with low-risk boundary options, then scale. It’s not a slow innings; it’s an innings that maintains shape while wickets fall. Without it, RCB are not crossing 190.

The crucial point is this: 201/8 means a lot of batting resources were spent. A score like 201/4 or 201/5 often pairs with better bowling flexibility — because the “impact” substitution and late-overs options are easier to plan. With 8 down, you tend to use extra bowling cover, and you often end up with a one-dimensional plan in the field.

Venkatesh Iyer’s 29* off 15 ensured RCB got the psychological “200-plus” marker, but RR’s chase showed that psychological markers don’t defend themselves. If anything, a high-score recovery can hide the bigger issue: powerplay instability.

RCB’s biggest fix is not “score 210 instead of 201.” It’s to improve the stability of the first six overs with the bat, so that 200 comes with fewer wickets lost. That, in turn, lets you set a better defending plan — including which bowlers you can hold back, and which matchups you can protect.

In Match 16, Patidar’s innings was top-class. But it also highlighted the fragility around him.
`,
    relatedPlayerIds: [29, 1],
    matchId: 16,
    dataTable: {
      headers: ["RCB key batting notes", "Detail"],
      rows: [
        ["Total", "201/8"],
        ["Early shock", "Phil Salt out first ball"],
        ["Powerplay punch", "Kohli 32 (16)"],
        ["Stabiliser", "Patidar 63 (40)"],
        ["Finish", "Iyer 29* (15)"],
      ]
    }
  },
  {
    id: 4,
    slug: "pbks-vs-srh-match-17-preview-new-chandigarh-what-par-looks-like",
    title: "PBKS vs SRH (Match 17) preview: what ‘par’ should look like at New Chandigarh",
    subtitle: "With limited historical venue data in CricDNA, the safest read is to plan for a high-tempo 180+ game.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "PBKS", "SRH", "Match 17", "Preview"],
    featured: false,
    content: `
Match 17 moves to the PCA MYS International Stadium, New Chandigarh, with Punjab Kings hosting Sunrisers Hyderabad. From a CricDNA perspective, this venue is a tricky one: our venueStats dataset doesn’t include a direct New Chandigarh entry, which means the best preview is built from team strengths and generic IPL scoring logic rather than a detailed ground scoring profile.

That still produces a clear starting point: plan for a high-tempo game. Both teams are built to accelerate quickly rather than grind. SRH’s best version is one where their top order attacks the hard ball, and their middle order maintains boundary pressure through matchups.

For PBKS, the tactical question is whether they want to set a target or chase. In modern IPL, chasing offers clarity, but it also demands calm finishing skills when the dew comes in. If the outfield gets quicker and the ball skids on, the chasing side can make 9–10 rpo look routine.

For SRH specifically, the batting style is clear: they want to win the boundary count early. They are at their best when the powerplay yields either a platform (0–1 wickets down) or a damage phase that drags the opposition into defensive bowling by the 4th over.

For PBKS, bowling matchups matter more than “bowling well.” The SRH top order is designed to punish length errors, so PBKS need early execution: hard lengths into the pitch, packed off-side fields when the batter is looking across the line, and a willingness to bowl into the boundary-free zones even if it means conceding singles.

The most important preview note is about risk shape. In games at venues without a clear data profile, the team that loses usually makes the same mistake: they treat 165 as par and discover too late that it was 15 short. If you’re PBKS, bat as if 180 is the minimum. If you’re SRH, chase as if 10 rpo is normal once you keep wickets.

This match should be decided by who wins the first 24 balls with the bat.
`,
    relatedPlayerIds: [6, 9, 28]
  },
  {
    id: 5,
    slug: "csk-vs-dc-match-18-preview-chepauk-pace-off-spin-first",
    title: "CSK vs DC (Match 18) preview: Chepauk rewards spin and control more than raw pace",
    subtitle: "MA Chidambaram Stadium’s history is clear: bat-first and squeeze in the middle overs.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "CSK", "DC", "Match 18", "Chennai"],
    featured: false,
    content: `
Match 18 is at MA Chidambaram Stadium, Chepauk — a venue where old-school T20 logic still holds. CricDNA’s venue numbers show an average first-innings score of 166.0, a bat-first win percentage of 64.6%, and a low toss field percentage of 29.2%. In simple terms: teams often prefer to set a target, because the surface tends to slow and reward control.

Chepauk’s phase scoring profile also signals “pace-off” value. The death overs run rate is 9.48 rpo — not tiny, but meaningfully lower than the 10+ profiles you see at true chasing grounds. That makes middle-overs leverage more important: if you can take the chase into the last five needing 55–60, you can still defend with good matchups.

For CSK, the advantage is familiarity. Their best blueprint in Chennai is to bat first, post 165–185, then use spin/variation to squeeze overs 7–15. If CSK can keep DC from taking the middle overs at 8.5–9 rpo, the chase becomes a calculation rather than a cruise.

For DC, the counter is clear: don’t let the innings turn into a dot-ball trap. Against spin, the most valuable skill is not the big shot — it’s rotation. The teams that win at Chepauk are the ones that keep the scoreboard moving even when boundaries are hard.

Toss recommendation based on venue history: if you win the toss, consider batting first unless conditions look unusually dewy. The data says that setting a total is rewarded here.

Projected par score: 175 (because 166 is the long-run average, and modern batting depth adds ~10 runs when execution is clean).
`,
    relatedPlayerIds: [10, 30, 18],
    matchId: 18,
    chartData: [
      { label: "Avg 1st inns", value: 166.0, color: "#546E7A" },
      { label: "Projected par", value: 175, color: "#FF7043" },
      { label: "Death rpo", value: 9.48, color: "#26A69A" }
    ]
  },
  {
    id: 6,
    slug: "lsg-vs-gt-match-19-preview-ekana-chase-or-defend",
    title: "LSG vs GT (Match 19) preview: Ekana is a chase-friendly ground if you keep wickets",
    subtitle: "Venue data suggests a 175–185 first-innings band, with a real advantage to captains who field first.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "GT", "Match 19", "Lucknow"],
    featured: false,
    content: `
Match 19 heads to Lucknow’s Ekana Stadium (Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium). CricDNA’s venueStats profile paints it as a modern, slightly chase-tilted ground: average first-innings score 175.4, average second-innings score 166.0, and toss field percentage 72.7%.

That toss preference tells you how captains read the surface. They back themselves to control the chase with clarity rather than guess a par total. It’s not a “flat” ground, but it is a ground where the last five overs can flip games — the death overs run rate is 10.12 rpo, high enough that a team with wickets in hand can close quickly.

For LSG, the key is how they structure the middle overs. Ekana is not a place to lose three wickets between overs 7 and 12 and hope for a miracle finish. Their best template is two batters set at the 10-over mark, even if it means a slightly lower boundary count early.

For GT, the preview is about bowling matchups. If you can force LSG into a spin-heavy middle phase where rotation becomes hard, you can protect 175. But if your lines drift and the chasing side reaches the 15th over with 6+ wickets, Ekana becomes an easy finishing ground.

Projected par score: 180. It’s just above the venue average, and it accounts for modern teams being comfortable with 8.5–9 rpo as “normal.”

Toss recommendation: field first, then chase with discipline.
`,
    relatedPlayerIds: [22, 5, 12],
    matchId: 19,
    chartData: [
      { label: "Avg 1st inns", value: 175.4, color: "#546E7A" },
      { label: "Avg 2nd inns", value: 166.0, color: "#90A4AE" },
      { label: "Projected par", value: 180, color: "#FF7043" }
    ]
  },
  {
    id: 7,
    slug: "season-trend-chasing-200-is-common-but-the-wickets-rule",
    title: "Season trend: 200 chases aren’t rare anymore — but wickets are still the real currency",
    subtitle: "Match 16 highlighted the modern rule: the team with wickets at the 15th over wins most 190+ chases.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "7 min",
    tags: ["IPL 2026", "Chasing", "Strategy", "Run rate"],
    featured: false,
    content: `
IPL batting has evolved to the point where 200 is no longer a “ceiling score.” What hasn’t changed is the underlying logic of high chases: the side that carries wickets deep wins.

Match 16 is a good illustration. RR chased 202 in 18 overs, but it wasn’t because they hit miracles at the death. It was because they kept the chase cheap early and didn’t lose a cluster of wickets that forces high-risk boundary hunting.

Think of a chase as two resources: runs and wickets. Runs can be collected later if the required rate is manageable; wickets cannot be regained. That’s why the modern best teams focus on keeping the chase stable through overs 7–15. If you arrive at the 15th over with 6 or 7 wickets in hand, a target of 60 off 30 is not pressure — it’s a plan.

Venue profiles support this logic. At Wankhede, for example, CricDNA shows a death-overs scoring rate of 10.76 rpo, which means even “good death bowling” still concedes enough for a team with hitters in hand to finish. Conversely, at Chepauk, the death rpo is 9.48, which makes middle-overs control more valuable. Different grounds, same rule: wickets decide whether you can access the death-overs scoring ceiling.

The best practical takeaway for teams this season is simple:
- When setting a total, don’t just plan for 200; plan for powerplay wickets.
- When chasing, invest in keeping your top 4 intact to the 12th over.

If you do that, 200 becomes chaseable without drama. If you don’t, even 175 becomes a climb.
`,
    relatedPlayerIds: [2, 18, 7],
    chartData: [
      { label: "Wankhede death rpo", value: 10.76, color: "#26A69A" },
      { label: "Chepauk death rpo", value: 9.48, color: "#26A69A" },
      { label: "Ekana death rpo", value: 10.12, color: "#26A69A" }
    ]
  },
  {
    id: 8,
    slug: "rankings-powerplay-hitters-vs-anchors-early-season",
    title: "Early-season rankings lens: powerplay hitters are deciding outcomes more than anchors",
    subtitle: "The Sooryavanshi innings is part of a broader pattern: first 24 balls are shaping match win probability.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "Rankings", "Batting", "Powerplay"],
    featured: false,
    content: `
In the first two weeks of the season, the innings we remember are not 60-ball anchors — they are 20–30 ball powerplay assaults that distort targets and chases.

Vaibhav Sooryavanshi’s 78 off 26 in Match 16 is the archetype. It didn’t just add runs; it *reduced risk* for everyone after him. That’s the hidden value of an elite powerplay hitter: the rest of the innings gets simpler.

Anchors still matter. Rajat Patidar’s 63 off 40 was essential to drag RCB to 201/8 after early losses. But notice the difference: the anchor innings often *rescues* you into a par total; the powerplay hitter innings often *wins* you the match by changing the chase structure.

As a rankings lens, that means the most valuable batting role early in the season is the player who can:
- score 50+ in the first six overs across two games,
- do it while losing 0–1 wicket at the top,
- and force the bowling side to abandon their preferred matchups.

RR have benefited from that exact style. They’ve repeatedly turned chases into low-stress exercises by attacking early. Other teams will try to copy it, but copying is not easy: you need the skill to hit the hard ball and the judgment to pick the right bowlers.

If this trend holds, expect teams to start bowling their best matchup bowler inside the first three overs rather than “saving” him. The powerplay is where the match is being bought and sold.
`,
    relatedPlayerIds: [7, 29, 3]
  },
  {
    id: 9,
    slug: "toss-playbook-when-to-field-first-wankhede-ekana-vs-chepauk",
    title: "Toss playbook: why Wankhede and Ekana scream ‘field first’, while Chepauk doesn’t",
    subtitle: "CricDNA venue data shows the same tournament can have radically different toss incentives.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "7 min",
    tags: ["IPL 2026", "Toss", "Venue stats", "Strategy"],
    featured: false,
    content: `
Fans often treat toss decisions as superstition. Venue data shows it’s mostly rational.

Take Wankhede Stadium in Mumbai. CricDNA’s venueStats show a toss-field percentage of 84.6% — captains overwhelmingly choose to chase. The reason is simple: the ground offers high scoring late (death rpo 10.76), and the ball tends to come on, making chases predictable.

Ekana in Lucknow is similar, though slightly more balanced. Toss-field is 72.7% and the death rpo is 10.12. That combination suggests chases are attractive if you can keep wickets. It’s a good ground to “buy clarity.”

Now compare that to Chepauk. There, toss-field is only 29.2% and bat-first win percentage is 64.6%. The surface often slows, so setting a target and squeezing with spin/control is a strong plan.

The practical toss playbook:
- At Wankhede: field first unless conditions are extreme.
- At Ekana: field first, but plan for a par score near 180 if batting.
- At Chepauk: bat first more often than not.

That’s why a single season can produce both chasing festivals and defendable 170s. The tournament is one competition, but the venues are different games.
`,
    relatedPlayerIds: [2, 12, 18],
    chartData: [
      { label: "Wankhede toss-field %", value: 84.6, color: "#42A5F5" },
      { label: "Ekana toss-field %", value: 72.7, color: "#42A5F5" },
      { label: "Chepauk toss-field %", value: 29.2, color: "#42A5F5" }
    ]
  },
  {
    id: 10,
    slug: "player-focus-dhruv-jurel-81-not-out-finisher-template",
    title: "Player focus: Dhruv Jurel’s 81* showed the ideal ‘finisher who bats long’ template",
    subtitle: "In big chases, the most valuable innings is often the one that stays unbeaten.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-11",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "Dhruv Jurel", "Finishing"],
    featured: false,
    content: `
Most conversations after Match 16 centred on Vaibhav Sooryavanshi’s 78 off 26, and rightly so. But the innings that actually “locked” the chase was Dhruv Jurel’s 81* off 43.

There’s a specific reason unbeaten innings matter in chases: they remove the highest-variance event in T20 batting — a new batter arriving under pressure. Every time you lose a wicket, you lose time, information, and rhythm. If one batter can bat deep, the chase becomes stable.

Jurel’s role in this chase was not to do the spectacular (though he did hit with intent). It was to ensure the chase never entered the zone where RR needed a boundary every over. That’s why the partnership dynamics were important. Even after RR slipped to 134/4, Jurel and Jadeja didn’t panic. They rotated, waited for the right balls, and cashed in on the overs where the bowlers missed length.

The modern “finisher” label is misleading. The best finishers are not just last-over hitters; they are players who can arrive early (say, 5–6 overs in), absorb the wobble, and still be there at the end. Jurel did exactly that.

If RR keep pairing a powerplay destroyer with a deep-batting stabiliser, they will keep making 200 chases look routine.
`,
    relatedPlayerIds: [10, 18, 7],
    matchId: 16
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "player",
    title: "Player of the day",
    value: "Vaibhav Sooryavanshi — 78 (26)",
    description: "A 15-ball fifty and a powerplay 97/1 platform turned a 202 chase into a formality.",
    playerIds: [7],
    teamColors: ["#EC407A", "#D32F2F"]
  },
  {
    type: "matchup",
    title: "Matchup to watch next",
    value: "LSG vs GT at Ekana",
    description: "Ekana’s toss-field bias (72.7%) makes chasing clarity valuable; keep wickets for the 10.12 death-overs rpo phase.",
    playerIds: [22, 5, 12],
    teamColors: ["#00ACC1", "#1E88E5"]
  },
  {
    type: "stat",
    title: "Venue edge",
    value: "Chepauk bat-first win %: 64.6%",
    description: "Chennai is still a set-and-squeeze ground: bat first, then control overs 7–15.",
    teamColors: ["#FFB300", "#1976D2"]
  }
];
