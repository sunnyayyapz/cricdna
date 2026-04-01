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
    slug: `pbks-vs-gt-match-4-thriller-connolly-debut`,
    title: `PBKS vs GT: Connolly debut 72* seals a three-wicket thriller`,
    subtitle: `Punjab chase 163 with five balls left after a Prasidh-led wobble; GT left with what-ifs.`,
    category: `analysis`,
    author: `CricDNA Analytics`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `6 min`,
    tags: [
      `IPL 2026`,
      `PBKS`,
      `GT`,
      `match report`,
      `Cooper Connolly`
    ],
    featured: true,
    content: `Punjab Kings opened their IPL 2026 account with a high-pressure chase, edging Gujarat Titans by three wickets in New Chandigarh after chasing 163 with five balls to spare, powered by debutant Cooper Connolly’s unbeaten 72 off 44. The headline is obvious, but the subtext matters just as much: PBKS were in control, then almost allowed the game to slip, and then won again through composure and boundary-hitting.

**How GT arrived at 162/6**

GT’s innings never truly broke into the gear that makes 170+ routine in modern IPL. Shubman Gill’s 39 off 27 gave them a brisk base, and Jos Buttler’s 38 off 33 provided stability, but the innings was repeatedly checked by wickets and a middling six-hitting night. The turning point was the middle overs: Yuzvendra Chahal’s 2/28 squeezed GT’s scoring options and removed two set batters, while Vijaykumar Vyshak’s 3/34 punished the lower middle order once the risk shots started.

From a CricDNA lens, GT’s 14 extras received from PBKS (including 11 wides) was the one free lever they didn’t fully convert into a bigger total. On a ground where chasing sides often feel they are one clean over away, an extra 10-15 runs could have changed the endgame.

**PBKS chase: control, collapse, recovery**

PBKS’s chase was built around two phases. Phase one was the counterpunch: Prabhsimran Singh’s 37 off 24 made the powerplay a statement, and Connolly immediately matched that intent by targeting pace on the up and spinning the strike against Rashid Khan.

Phase two was the wobble. From 110/2, GT’s Prasidh Krishna found a surge of seam movement and hard lengths, taking 3/29 and driving PBKS into a collapse to 118/6. That sequence was the match inside the match: it forced PBKS from ‘finish early’ mode into ‘finish smart’ mode.

Connolly solved that problem like a seasoned finisher, not a debutant. He kept his boundary options open, waited for the ball in his arc, and accepted singles when GT went wide of his hitting zones. The unbeaten 72 wasn’t just volume; it was game management.

**What it means going forward**

For PBKS, the takeaway is their bowling mix already looks built for defending par totals: Vyshak and Chahal controlled the middle, and Marco Jansen’s early breakthrough set the tone. For GT, the positives are real—Prasidh looked sharp and Gill was fluent—but they’ll want more conversion from their top four and more six-hitting support around Buttler.

In a tournament where early points can swing qualification math, PBKS have banked a win that also tests their temperament. And Connolly has delivered the kind of debut that changes a team’s ceiling.`,
    relatedPlayerIds: [
      5,
      25,
      17
    ],
    chartData: [
      {
        label: `GT total`,
        value: 162,
        color: `#1f77b4`
      },
      {
        label: `PBKS chase`,
        value: 165,
        color: `#ff7f0e`
      },
      {
        label: `Margin (wkts)`,
        value: 3,
        color: `#2ca02c`
      }
    ],
    dataTable: {
      headers: [
        `Team`,
        `Score`,
        `Key batting`,
        `Key bowling`
      ],
      rows: [
        [
          `GT`,
          `162/6 (20)`,
          `Gill 39, Buttler 38`,
          `Vyshak 3/34, Chahal 2/28`
        ],
        [
          `PBKS`,
          `165/7 (19.1)`,
          `Connolly 72*, Prabhsimran 37`,
          `Prasidh 3/29`
        ]
      ]
    },
    matchId: 4
  },
  {
    id: 2,
    slug: `pbks-vs-gt-prasidh-krishna-spell-collapse`,
    title: `Prasidh Krishna’s 15-ball burst: the spell that nearly stole PBKS vs GT`,
    subtitle: `From 110/2 to 118/6, GT’s comeback was real; why the plan worked and what PBKS did next.`,
    category: `analysis`,
    author: `CricDNA Insights`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `5 min`,
    tags: [
      `IPL 2026`,
      `PBKS`,
      `GT`,
      `bowling analysis`,
      `Prasidh Krishna`
    ],
    featured: false,
    content: `A chase is rarely a straight line, but PBKS’s dip against GT was sharp enough to change win probability in minutes. With the target at 163, Punjab were cruising at 110/2 when Prasidh Krishna flipped the script. In the space of 15 deliveries, PBKS lost four wickets and the match moved from ‘routine finish’ to ‘coin flip’. Understanding why that spell worked is useful because it’s a template other teams will copy.

**What Prasidh did differently**

The obvious number is 3/29, but the spell’s impact was created by sequencing. Prasidh didn’t try to be clever; he tried to be uncomfortable. The ball was held back on a hard length rather than full, with just enough variation in pace to make premeditated swings mistime. In the IPL, where many collapses are self-inflicted, this one was engineered.

He also attacked the stumps with a field that tempted the hit. When batters see deep boundary riders and a ring that looks defendable, the instinct is to clear the field rather than thread gaps. That’s exactly the psychology you want as a fast bowler in the middle overs: get the batter to play a shot that has only one success outcome.

**The wicket chain reaction**

The key wicket was Shreyas Iyer (18 off 11), who had the pace to finish the chase early. Once he went, PBKS’s innings shape changed: hitters were forced to play earlier than planned, and dots started to feel heavier. The wicket of Marcus Stoinis for 0 amplified the pressure because it removed a proven end-overs option.

From a CricDNA perspective, that’s why collapses are ‘contagious’: each wicket changes both resources and intent. A batting side loses not only runs but also flexibility.

**How PBKS responded**

PBKS didn’t win because they avoided the wobble; they won because they reset. Cooper Connolly was the stabilizer—he chose boundary balls rather than boundary overs. He accepted singles, protected his strike, and waited for predictable lengths. Xavier Bartlett’s calm cameo ensured Connolly could play the percentage shot without needing to manufacture every run.

**What GT can take forward**

GT will view the loss as a missed chance, but the comeback is proof their bowling unit can create wickets without magic surfaces. If Prasidh’s hard-length plan holds across venues, GT have a weapon that travels.

For PBKS, the lesson is simpler: even when you’re ahead, you need a ‘collapse plan’. Punjab found theirs through Connolly’s composure. Next time, they’ll want it without the panic.`,
    relatedPlayerIds: [
      17
    ],
    matchId: 4
  },
  {
    id: 3,
    slug: `pbks-vs-gt-boundary-math-14-sixes`,
    title: `PBKS vs GT: The boundary math that decided the chase`,
    subtitle: `GT hit 3 sixes; PBKS hit 14. In a 163 chase, that delta is the story.`,
    category: `analysis`,
    author: `CricDNA Editorial`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `5 min`,
    tags: [
      `IPL 2026`,
      `PBKS`,
      `GT`,
      `batting analysis`,
      `six-hitting`
    ],
    featured: false,
    content: `When two teams finish within three runs of each other, it’s tempting to blame one dropped catch or one misfield. But PBKS vs GT was decided by something more structural: boundary distribution. GT’s innings reached 162/6, yet it did so with only three sixes. PBKS, chasing 163, struck 14. That isn’t just a fun trivia line—it’s a strategy differential.

**Why sixes matter more in tight chases**

In a chase around 160, teams often lose time to ‘safe’ overs where the batter is finding timing or dealing with match-ups. Sixes compress the required run rate pressure because they remove the need to win multiple balls in the over. Four singles and a boundary is one route; two sixes is a faster one.

GT’s top-order did start well—Gill and Sai Sudharsan attacked the powerplay, and Buttler held the innings together—but the innings plateaued in the middle because the risk shots didn’t clear. Once Chahal and Vyshak began controlling lengths, GT’s ‘good balls’ became dots rather than singles, and their ‘bad balls’ became fours rather than sixes.

**PBKS built a chase around intent**

Punjab’s approach was more modern: Prabhsimran and Connolly treated pace and spin as hittable, not just survive-able. That early spike matters because it forces the bowling side to defend the boundary for longer. As soon as GT pushed men back, gaps opened for singles and twos, giving PBKS an escape route even when wickets fell.

**The collapse didn’t change the math**

Prasidh Krishna’s 3/29 nearly reversed the result, but even during the wobble PBKS had already banked enough boundary equity. Connolly’s late over against Rabada, where he found a four and a six, was the final pressure release valve.

**What to watch next**

GT’s skillset suggests they can be more explosive than they showed. If Buttler and Phillips get more support and the lower-middle order finds one clean over, the six count will rise naturally. PBKS, meanwhile, have shown they can chase with aggression and still find composure.

In the IPL, intent is a resource. On Tuesday, PBKS spent it wisely—and were rewarded.`,
    relatedPlayerIds: [
      5,
      25
    ],
    chartData: [
      {
        label: `GT sixes`,
        value: 3,
        color: `#1f77b4`
      },
      {
        label: `PBKS sixes`,
        value: 14,
        color: `#ff7f0e`
      }
    ],
    matchId: 4
  },
  {
    id: 4,
    slug: `lsg-vs-dc-match-5-preview-ekana-gameplan`,
    title: `LSG vs DC at Ekana: match preview and game plan`,
    subtitle: `Ekana has averaged 175.4 in first innings across 22 matches; chasing has edged it.`,
    category: `match-preview`,
    author: `CricDNA Analytics`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `6 min`,
    tags: [
      `IPL 2026`,
      `LSG`,
      `DC`,
      `Ekana`,
      `match preview`
    ],
    featured: false,
    content: `Match 5 of IPL 2026 brings the league to Lucknow, where Ekana’s surface typically creates a game of phases rather than one continuous boundary-fest. Based on CricDNA’s venue dataset, Ekana has produced an average first-innings score of 175.4 and an average second-innings score of 166.0 across 22 matches, with chasing slightly ahead on results (12 chasing wins vs 9 bat-first wins).

**How Ekana usually plays**

The defining feature is tempo. Ekana’s run-rate split is telling: powerplay scoring is controlled, the middle overs stay steady, and the death overs spike. In the dataset, the powerplay rate is 7.99 rpo, the middle overs are 7.88, and the death overs jump to 10.12. That suggests two things: (1) teams must preserve wickets for the final five, and (2) bowlers who can own the middle overs are disproportionately valuable.

**LSG keys**

For Lucknow, home advantage is about knowing which risks are real. If their top order can reach 45-55 without damage, they can structure the chase/defence around a strong 15-20 over burst. The Ekana trend also rewards teams with flexible match-ups: a wrist-spinner to slow the middle, and a death bowler who can execute wide yorkers.

**DC keys**

Delhi’s challenge is to not get trapped into ‘par thinking’. Ekana par scores are more elastic than they look because late hitting can add 40 in three overs. DC will want to attack with spin early if the surface is gripping, but they also need a clear plan for the death—because the venue history shows the endgame can still be explosive.

**What a winning score looks like**

Given the venue averages, a first-innings score in the 175 range is competitive, but not safe if dew arrives. If batting second, the side that keeps 7 wickets in hand at the 15-over mark is usually the side that controls the outcome.

Expect a match decided less by the first six overs and more by who wins overs 7-15 without bleeding wickets.`,
    relatedPlayerIds: [
      4,
      22,
      30
    ],
    dataTable: {
      headers: [
        `Ekana indicator`,
        `Value`
      ],
      rows: [
        [
          `Total matches (dataset)`,
          `22`
        ],
        [
          `Avg 1st inns score`,
          `175.4`
        ],
        [
          `Avg 2nd inns score`,
          `166.0`
        ],
        [
          `Chasing wins`,
          `12`
        ],
        [
          `Bat-first wins`,
          `9`
        ]
      ]
    },
    matchId: 5
  },
  {
    id: 5,
    slug: `lsg-vs-dc-ekana-pitch-report-175-par`,
    title: `Ekana pitch report: why 175 is “par”, not “safe”`,
    subtitle: `Lucknow’s surface rewards middle-over discipline; the death overs can still run away quickly.`,
    category: `pitch-report`,
    author: `CricDNA Insights`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `5 min`,
    tags: [
      `IPL 2026`,
      `Ekana`,
      `pitch report`,
      `LSG vs DC`
    ],
    featured: false,
    content: `Ekana is often described as a ‘slow’ venue, but the more accurate description is ‘sequenced’. You don’t necessarily score slowly all innings—you score in the right overs. CricDNA’s venue dataset for Lucknow shows a consistent pattern: powerplays are controlled (powerplay run rate 7.99), middle overs are stable (7.88), and the death overs jump (10.12).

**What that means for batters**

If you try to force sixes in overs 7-12, you’re likely to donate wickets. The better plan is to win the powerplay with risk-managed shots, then convert the middle overs into a singles-and-twos bank while targeting one over from the fifth bowler. In a venue where the lowest score in the dataset is 108, the floor exists—so the wicket value remains high.

**What that means for bowlers**

Ekana rewards bowlers with control rather than only pace. Slower balls, hard lengths into the pitch, and cutters that take the top edge tend to create miscues. But the death overs are still dangerous: with a highest recorded score of 235, this ground can absolutely host a big total if you miss your yorker length by even a foot.

**Tactical takeaway**

A first-innings 175 is close to the historical average, but it’s not ‘safe’ if the chasing side has wickets in hand at 15. On the flip side, 160 can be defendable if you create a wicket cluster in the middle.

So the pitch report is less about ‘batting vs bowling’ and more about ‘when to attack’. The side that times its acceleration better will feel like it’s playing a different surface.`,
    relatedPlayerIds: [
      22,
      4,
      30
    ],
    chartData: [
      {
        label: `Avg 1st inns`,
        value: 175.4,
        color: `#1f77b4`
      },
      {
        label: `Avg 2nd inns`,
        value: 166.0,
        color: `#ff7f0e`
      },
      {
        label: `Highest`,
        value: 235,
        color: `#2ca02c`
      }
    ],
    matchId: 5
  },
  {
    id: 6,
    slug: `lsg-vs-dc-toss-report-ekana-field-first`,
    title: `LSG vs DC toss report: why captains usually prefer to field at Ekana`,
    subtitle: `In 22 matches here, teams fielded first 16 times.`,
    category: `toss-report`,
    author: `CricDNA Editorial`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `4 min`,
    tags: [
      `IPL 2026`,
      `toss`,
      `Ekana`,
      `LSG vs DC`
    ],
    featured: false,
    content: `At Ekana, the toss is rarely ‘neutral’. Captains tend to prefer fielding first because the venue history suggests chasing is slightly more comfortable and because dew can turn a two-paced surface into a skiddier one. In CricDNA’s toss dataset, teams chose to field first 16 times out of 22 matches, compared to 6 times choosing to bat first.

**Does fielding first actually help?**

The win rates are close enough to warn against overconfidence, but the lean still favours the fielding-first decision. Teams that chose to field first won 62.5% of the time in the dataset, while teams that chose to bat first won 66.7%.

That gap isn’t massive, but it’s meaningful when the venue’s scoring profile is phase-driven: if the surface is slow early, a chasing side can pace the innings and still back themselves to explode at the death.

**What captains should consider today**

1) **Surface freshness**: If the pitch looks dry with visible cracks, batting first with a target can be viable—because it may get harder to hit through the line.

2) **Dew risk**: If there’s even moderate dew, fielding first becomes the percentage call.

3) **Line-up balance**: A side with deeper batting is better equipped to chase on a ground where the last five overs can add 50.

**CricDNA call**

If conditions are typical, winning the toss and fielding first remains the default at Ekana—not because it guarantees success, but because it maximizes flexibility. Set the chase, keep wickets for the end, and force the opponent to play the hardest overs first.`,
    relatedPlayerIds: [
      22,
      4
    ],
    dataTable: {
      headers: [
        `Ekana toss choice`,
        `Count`,
        `Win % when chosen`
      ],
      rows: [
        [
          `Bat first`,
          `6`,
          `66.7%`
        ],
        [
          `Field first`,
          `16`,
          `62.5%`
        ]
      ]
    },
    matchId: 5
  },
  {
    id: 7,
    slug: `ipl-2026-early-trend-chasing-teams-win`,
    title: `Early IPL 2026 trend: why chasing has started strong`,
    subtitle: `Small sample, real signals: target clarity, impact subs, and death-over matchups.`,
    category: `analysis`,
    author: `CricDNA Analytics`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `6 min`,
    tags: [
      `IPL 2026`,
      `analysis`,
      `chasing`,
      `strategy`
    ],
    featured: false,
    content: `The first week of any IPL season is noisy, but patterns still emerge—especially around how teams choose to allocate risk. One early theme is chasing confidence. When teams feel the pitch is predictable and the ball gets easier to hit later, they prefer the clarity of a target.

**Why target clarity matters more now**

Modern IPL batting is less about survival and more about optimization. With Impact Player flexibility and deeper lineups, teams can hold hitters back and deploy them precisely when matchups are favorable. That means a chasing side can ‘park’ risk until the required run rate forces it—and then attack with the right personnel.

**Bowling is also more specialized**

Another reason chasing has momentum is that defenses are harder to manage. A captain defending 165 must decide: do you hold your best bowler for overs 17-19, or do you use them to break partnerships in overs 7-12? If you delay too long, set batters arrive at the death with wickets in hand; if you attack too early, you may lack control at the end.

**The CricDNA heuristic**

In tight chases, the most valuable overs are not always the last overs. They are the overs where the chasing side is deciding whether it can ‘keep up’ without losing wickets. Win overs 8-14 as a bowling unit and you force the opponent to take harder risks later.

**So what should teams do?**

If you bat first, your goal should be to create a score that breaks the opponent’s ‘two-gear’ plan. That usually means one of two things: (1) push above 185 so the chase requires early risk, or (2) create a wicket cluster with your bowlers so the chase is never stable.

Chasing will not dominate all season; surfaces change and pressure matches arrive. But in the opening stretch, teams are telling us they prefer information over intuition. And that’s a trend worth tracking.`,
    relatedPlayerIds: [
      1,
      5,
      22
    ]
  },
  {
    id: 8,
    slug: `ekana-blueprint-middle-overs-spin-win`,
    title: `The Ekana blueprint: middle-overs spin and wicket preservation`,
    subtitle: `On phase-driven surfaces, the match is decided before the death overs even start.`,
    category: `analysis`,
    author: `CricDNA Insights`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `6 min`,
    tags: [
      `analysis`,
      `Ekana`,
      `spin`,
      `middle overs`
    ],
    featured: false,
    content: `Ekana is a good case study for a broader IPL idea: some venues are not about raw run rate; they are about **run rate timing**. CricDNA’s venue dataset shows Lucknow’s powerplay is controlled (7.99 rpo) and the middle overs remain steady (7.88), before the death overs jump to 10.12. That profile naturally increases the value of middle-over control bowlers.

**Why spin matters here**

When batters can’t reliably hit through the line, they default to the sweep, the reverse, and the hard slog to leg. That makes the boundary options narrower and brings catching positions into play. A good spinner doesn’t need dramatic turn—just enough change of pace and trajectory to create a mishit.

**What captains should optimize**

1) **Overs 7-15**: If you can bowl 8 overs in this window with minimal boundary leakage, the opponent will reach the death overs under-resourced.

2) **Wicket value**: On Ekana-type surfaces, a wicket in the middle overs is worth more than a wicket in the last over. It changes the batting side’s ability to time acceleration.

3) **One ‘pressure over’ per spell**: Great spells usually contain one over that is designed purely to create a mistake—attacking fields, slower pace, wide lines.

**Batting counter**

The batting response is to treat the middle overs as a running game. If you can bank 35-40 from overs 7-12 without losing wickets, your hitters will have a platform to win the last five overs.

Tonight’s LSG vs DC is a microcosm: whichever side manages the spin matchups and protects wickets through the middle will feel like they have a 20-run cushion, even if the scores are level.`,
    relatedPlayerIds: [
      12,
      23,
      26
    ]
  },
  {
    id: 9,
    slug: `ipl-2026-death-overs-why-10-rpo`,
    title: `Death overs are still king: why 10+ rpo changes match equity`,
    subtitle: `Even on slower venues, the last five overs can add 50 and rewrite par scores.`,
    category: `analysis`,
    author: `CricDNA Editorial`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `5 min`,
    tags: [
      `analysis`,
      `death overs`,
      `strategy`,
      `IPL 2026`
    ],
    featured: false,
    content: `IPL teams love talking about ‘par scores’, but par is often a mirage created by the last five overs. CricDNA’s Ekana venue dataset is a clean example: the death overs run rate is 10.12, noticeably higher than the powerplay (7.99) and middle overs (7.88).

**Why the last five overs are structurally different**

At the death, bowlers have fewer options: yorker, wide yorker, slower ball, hard length. Batters, meanwhile, have a simpler objective: boundary or dot doesn’t matter as much if you can clear the rope twice an over. This asymmetry makes run rates spike even when surfaces are not perfect.

**Two practical implications**

1) **Batting first:** You should aim to enter over 16 with at least 7 wickets in hand. The difference between 5 down and 3 down is often 20 runs at the finish.

2) **Bowling second:** Your ‘best bowler’ plan must include a wicket plan. If you only defend, you lose. The most successful death spells combine one surprise slower ball option with one attacking over to force an error.

**What it means for Ekana tonight**

Even if the surface is tacky, both teams can still produce a 45-run finish if they have set batters. That’s why middle-over wicket-taking and late-over execution are linked: win the middle, and you make the death overs defendable.

The league has evolved, but one principle hasn’t: the last five overs are the most valuable currency in T20. Spend them well.`,
    relatedPlayerIds: [
      2,
      19,
      6
    ]
  },
  {
    id: 10,
    slug: `matchup-lab-kohli-vs-jadeja-headtohead`,
    title: `Matchup Lab: Kohli vs Jadeja — what the numbers say`,
    subtitle: `Across 160 balls, Kohli strikes at 111.87 vs Jadeja with 3 dismissals.`,
    category: `analysis`,
    author: `CricDNA Analytics`,
    publishedAt: `2026-04-01T13:00:00Z`,
    readTime: `5 min`,
    tags: [
      `analysis`,
      `matchups`,
      `Kohli`,
      `Jadeja`,
      `head-to-head`
    ],
    featured: false,
    content: `One of the most useful ways to talk about T20 is through matchups: who wins which micro-battle, and how that shapes captaincy. CricDNA’s head-to-head dataset contains a classic contest: Virat Kohli vs Ravindra Jadeja.

Across 160 balls faced, Kohli has scored 179 runs at a strike rate of 111.87, and has been dismissed 3 times. The dot-ball percentage is 31.9%, which tells you the story: even when Kohli scores, Jadeja often forces him to work for it.

**Why this matchup is strategic, not just statistical**

Jadeja’s value isn’t only in wickets—it’s in how he controls the over. A high dot-ball share creates pressure that can be cashed in by the bowler at the other end. Kohli’s skill is that he can absorb dots without panicking, but even he has to decide when to break the over open.

**What captains do with it**

If you’re bowling to Kohli, Jadeja is best used when there’s also a wicket threat from the other end. Otherwise, Kohli can ‘wait out’ the quiet over and attack the fifth bowler. If you’re batting with Kohli, the team plan matters: pair him with a boundary-hitter so the scoring doesn’t stall when Jadeja lands his length.

**The batting counter**

The dataset shows Kohli still finds boundaries (4s: 10, sixes: 5)—so the counter isn’t to go silent. The counter is to pick one ball per over to attack decisively, while keeping strike rotation high enough to avoid end-of-over dot pressure.

Matchups don’t decide games alone, but they shape the decisions that decide games. Kohli vs Jadeja remains one of the IPL’s most instructive examples.`,
    relatedPlayerIds: [
      1,
      18
    ],
    chartData: [
      {
        label: `Runs`,
        value: 179,
        color: `#1f77b4`
      },
      {
        label: `Balls`,
        value: 160,
        color: `#ff7f0e`
      },
      {
        label: `Dismissals`,
        value: 3,
        color: `#d62728`
      }
    ],
    dataTable: {
      headers: [
        `Metric`,
        `Value`
      ],
      rows: [
        [
          `Runs`,
          `179`
        ],
        [
          `Balls`,
          `160`
        ],
        [
          `Strike rate`,
          `111.87`
        ],
        [
          `Dismissals`,
          `3`
        ],
        [
          `Dot ball %`,
          `31.9`
        ],
        [
          `Boundaries (4s)`,
          `10`
        ],
        [
          `Sixes`,
          `5`
        ]
      ]
    }
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: `matchup`,
    title: `Kohli vs Jadeja`,
    value: `SR 111.87 | 3 outs`,
    description: `Kohli: 179 runs off 160 balls vs Jadeja in CricDNA H2H dataset.`,
    playerIds: [
      1,
      18
    ]
  },
  {
    type: `stat`,
    title: `Ekana chasing lean`,
    value: `12-9`,
    description: `At Ekana (Lucknow), chasing wins 12 times vs 9 batting first in CricDNA venue dataset.`,
    teamColors: [
      `#1f77b4`,
      `#ff7f0e`
    ]
  },
  {
    type: `player`,
    title: `Player of Match: Connolly`,
    value: `72* (44) on debut`,
    description: `Cooper Connolly anchored PBKS chase of 163 vs GT with an unbeaten 72, sealing a three-wicket win.`,
    playerIds: []
  },
];
