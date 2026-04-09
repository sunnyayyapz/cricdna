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
    slug: "dc-vs-gt-match-14-recap-last-ball-thriller-rahul-92-gill-70",
    title: "DC vs GT (Match 14) recap: a 1-run finish built on two powerplays and one decision",
    subtitle: "GT made 210/4, DC finished 209/8 — and the difference was how each side ‘used’ the last 12 balls.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "7 min",
    tags: ["IPL 2026", "DC", "GT", "Match 14", "Delhi"],
    featured: true,
    content: `
Gujarat Titans beat Delhi Capitals by 1 run in Match 14 at the Arun Jaitley Stadium after defending 210/4 against 209/8. The headline is a last-ball run-out and a missed chance in the final over, but the match was shaped much earlier — by the way GT won the first six overs with the bat, and by how DC’s chase went from “in control” to “counting singles”.

Start with the tempo of GT’s innings. They finished at 10.50 runs per over with only four wickets down, which is the most efficient profile you can produce on a ground where boundaries are always in play. The innings had three pillars: Jos Buttler’s 52, Shubman Gill’s 70 (45), and Washington Sundar’s 55. That’s not just three fifties; it’s three distinct gears. Buttler’s burst ensured the powerplay never felt like “testing the pitch”. Gill then handled the middle overs by keeping the boundary frequency stable, and Sundar closed by turning “good overs” into “11-run overs”.

Delhi’s best response with the ball came via Mukesh Kumar (2/55) and the middle-over slowdown led by spinners, but the bigger issue was that GT never had a collapse window. Four wickets in 20 overs means you don’t have to rebuild, you only have to keep trading risks for boundaries.

Then came DC’s chase, and for 8 overs it looked set up perfectly. KL Rahul produced a classic chase-setter: 92 off 52, with Pathum Nissanka adding 41 (24) in an opening stand of 76 in 8.1 overs. In most games, that start wins you the match because it converts a 211 target into a “normal” chase.

The hinge moment was the period immediately after Nissanka fell. Suddenly DC needed a bridge: two overs of smart rotation while one of the set batters re-accelerates. Instead, DC bled wickets and lost tempo, and that forced a late-innings equation where every dot ball became a mini-disaster.

Yet DC still almost got there. David Miller’s 41* off 20 dragged the chase back into the “winnable” lane, and the final over became a decision-making test more than a skill test. With 2 needed off the last 2 balls, the safest plan is simple: guarantee contact, take the single if it’s there, and back yourself to finish. When teams lose close games, they usually don’t lose because they lacked a boundary option; they lose because they turned a high-probability single into a low-probability hit.

For GT, two names summarise the win: Rashid Khan’s 3/17 (the overs that broke the chase’s rhythm), and Prasidh Krishna’s composure at the death. For DC, Rahul’s 92 is proof that their batting ceiling is high — but the match also shows that chases of 200+ are rarely about the best innings; they are about the quiet two-over passage when the rate tries to trick you into panic.

GT leave Delhi with momentum and a blueprint: attack early, don’t collapse, and keep one elite middle-over wicket-taker in play. DC leave with a simpler reminder: in 210 chases, you don’t need a miracle at the end if you protect your bridge in the middle.
`,
    relatedPlayerIds: [22, 5, 12, 25, 17],
    matchId: 14,
    chartData: [
      { label: "GT", value: 210, color: "#1E88E5" },
      { label: "DC", value: 209, color: "#EF5350" }
    ],
    dataTable: {
      headers: ["Key moments", "Figure"],
      rows: [
        ["GT total", "210/4 (20)"],
        ["DC total", "209/8 (20)"],
        ["Result", "GT won by 1 run"],
        ["Top DC scorer", "KL Rahul 92 (52)"],
        ["Top GT scorers", "Gill 70 (45), Sundar 55, Buttler 52"],
        ["Best spell", "Rashid Khan 3/17"],
        ["Venue", "Arun Jaitley Stadium, Delhi"],
      ]
    }
  },
  {
    id: 2,
    slug: "dc-vs-gt-match-14-analysis-why-the-bridge-overs-mattered",
    title: "DC vs GT: the ‘bridge overs’ that decide 200+ chases",
    subtitle: "After a flying start, DC needed two calm overs. Instead, GT’s middle-over pressure turned the chase into a boundary-or-bust finish.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "DC", "GT", "Chase", "Tactics"],
    featured: false,
    content: `
A 1-run match is tempting to explain with one last-ball moment, but Match 14 was decided in a quieter section: the overs immediately after DC’s opening partnership ended.

DC’s chase began in the ideal way for a 211 target. KL Rahul (92 off 52) and Pathum Nissanka (41 off 24) stacked early boundaries and ran hard enough to keep the required rate flat. With 76 up inside 8.1 overs, the chase had already neutralised one of the hardest parts of big run hunts: you don’t want to be “behind the game” and also “down wickets”.

Then the chase entered what CricDNA calls the bridge. These are the two or three overs after a set partnership breaks, when a team must decide whether to:

1) consolidate (minimise risk, rebuild a pair, keep wickets), or
2) maintain tempo (keep hunting boundaries so the endgame isn’t impossible).

The best chases do both: they rotate enough to settle the new batter, but they still cash in one boundary every over to prevent the equation from ballooning.

GT’s strength is that they force opponents to choose. Rashid Khan’s 3/17 is not just a “great figure”; it’s a statement of control. When a bowler removes batters and also reduces boundary probability, the chasing side is pushed into lower-percentage shots. That’s how collapses begin: not with a bad shot, but with a shot that was forced by the previous 12 balls.

DC’s middle overs showed the classic symptoms of a broken bridge:

• singles stop feeling like progress;
• batters start targeting the safest boundary zones rather than the weakest matchups;
• the set batter is asked to “cover” for the new batter’s settling time;
• dots accumulate, and the required rate spikes.

Even with all that, DC nearly won because David Miller’s 41* off 20 created a late burst. But late bursts are expensive because they require perfect execution under maximum pressure.

The actionable lesson for DC is role clarity. If Rahul is your chase engine, the next player’s job is not to out-hit him; it’s to keep the strike moving and buy him balls against the best matchup. If your bridge batter scores 10 off 8 with two sharp twos, it changes the final over from “need 15” to “need 9”.

For GT, the blueprint is repeatable and travels: let the powerplay batters attack, keep Gill as the stabiliser, and then defend with one wicket-taker who owns the bridge. The scoreline says “1 run”. The tactics say “two overs”.
`,
    relatedPlayerIds: [22, 12, 5, 25],
    matchId: 14,
    chartData: [
      { label: "Powerplay intent", value: 1, color: "#43A047" },
      { label: "Bridge overs control", value: 1, color: "#1E88E5" },
      { label: "Death overs pressure", value: 1, color: "#F4511E" }
    ],
    dataTable: {
      headers: ["Chase roles", "What it means"],
      rows: [
        ["Engine", "High boundary % + strike management"],
        ["Bridge", "Low dots, fast singles, protect wickets"],
        ["Finisher", "Convert 12-ball windows without panic"],
      ]
    }
  },
  {
    id: 3,
    slug: "dc-vs-gt-match-14-analysis-rashid-khan-overs",
    title: "Rashid Khan’s 3/17: the spell that made 210 defendable",
    subtitle: "Even on a boundary-heavy Delhi surface, elite middle-over spin creates the only thing chases fear: uncertainty.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "GT", "Rashid Khan", "Spin", "Match 14"],
    featured: false,
    content: `
Delhi is rarely a venue where teams feel safe defending 200+, because batters can “win” with one 18-run over. Match 14 flipped that assumption because GT had a bowler who changed the chase’s psychology.

Rashid Khan finished with 3/17. Numbers alone don’t explain his value; the context does. In a chase led by a set opener like KL Rahul, the most dangerous moment for the bowling side is the transition into the middle overs, when the batter begins to line up matchups and plan two overs ahead.

Rashid prevents planning.

The most important currency in a high chase is certainty: batters want to know which balls they can hit for four, which bowler they can hold back for, and which fielders they can exploit. Rashid’s pace changes and angles reduce certainty, which increases dot balls and forces batters into “pre-meditated” shots.

Here’s why the spell mattered even when Rahul still scored 92:

1) It attacked the partnership structure. DC’s best route was “Rahul + one stable partner”. Rashid took away partners.
2) It created wicket pressure without gifting release balls. Many middle-over spells take wickets but leak boundaries. Rashid did the opposite.
3) It shifted the chase’s finish. DC ended up needing a high-pressure final over rather than a controlled final three overs.

At venue level, Delhi historically rewards chasing because the second innings often benefits from dew and a visible target. That’s why the toss decision here is usually to field. But even on chase-friendly grounds, the relationship is still simple: chasing is easiest when you lose few wickets. Rashid ensured DC couldn’t keep wickets intact.

For GT, the tactical takeaway is squad design. If your home games are likely to be 190+ battles, one Rashid-type spell is worth more than a sixth batter. It reduces the opponent’s “minimum winning requirement” from 10 an over to 12 an over for three overs — and that’s the difference between calm and chaos.

For DC, the adjustment is to identify and neutralise the bridge bowler early. Against Rashid-type threats, the best option is often not to attack him; it’s to ensure the other end never delivers a dot-ball over. Big chases aren’t won by taking down the best bowler. They’re won by never giving him a partner.
`,
    relatedPlayerIds: [12, 22, 5],
    matchId: 14,
    chartData: [
      { label: "Rashid economy", value: 4.25, color: "#5E35B1" },
      { label: "Match run rate", value: 10.48, color: "#9E9E9E" }
    ]
  },
  {
    id: 4,
    slug: "kkr-vs-lsg-match-15-preview-eden-gardens-run-rate-chase-bias",
    title: "KKR vs LSG (Match 15) preview: Eden Gardens rewards depth, not just power",
    subtitle: "With Eden’s chasing edge and strong death scoring history, the game may hinge on who has the cleaner last-5-overs batting plan.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "KKR", "LSG", "Eden Gardens", "Match 15"],
    featured: false,
    content: `
Match 15 brings Kolkata Knight Riders and Lucknow Super Giants to Eden Gardens, a venue that has historically leaned toward chasing. In our venue dataset, Eden’s average first-innings score is 160.2 and the average second-innings score is 147.1 across 77 matches, with teams batting second winning 47 of those games (61%).

That split doesn’t mean “bat second and win”. It means captains are rewarded for maximising information: dew, pitch pace, and boundary dimensions become easier to read in the chase. The second-innings win rate also aligns with toss behaviour: at Eden, teams choose to field after winning the toss 63.6% of the time.

So what should each side prioritise?

For KKR, the first objective is clarity in the powerplay. Eden’s powerplay run rate in the dataset is 7.28 runs per over — not a blanket “flat track” number — which suggests early overs can be a little sticky if bowlers hit hard lengths. The big scoring comes later: the death overs run rate is 9.37. That makes two things valuable: having wickets in hand at over 15, and having boundary hitters in slots 5-7.

For LSG, the pathway is similar but with a different emphasis: they often rely on one batter to carry a chase, and at Eden that can be dangerous because the venue invites bowling changes and matchups. The better plan is to keep two batters set through overs 10-15 so the death overs become a “finish”, not a “rescue”.

Tactically, this match could be defined by two head-to-head patterns in our matchup data:

• Rohit Sharma vs Sunil Narine: Rohit has scored 143 off 134 balls against Narine with 8 dismissals, a strike rate of 106.72 and a high dot-ball percentage of 40.3. If LSG’s top order faces Narine-style control early, they must avoid getting pinned.
• Virat Kohli vs Narine is a different story (173 off 134, SR 129.10, 4 dismissals). The lesson: elite batters can be neutralised, but only if you force dots.

The match should produce a clear toss recommendation: field first. Eden’s toss stats show teams that field first after winning the toss have won 63.3% of those matches (31 wins from 49).

Expect a game where the first innings target “feels” par at 165 but is actually vulnerable if the chasing team keeps wickets. At Eden, it’s rarely about the biggest total; it’s about the best 6-ball sequences in overs 16-20.
`,
    relatedPlayerIds: [23, 13, 22, 4],
    matchId: 15,
    chartData: [
      { label: "Eden avg 1st inns", value: 160.2, color: "#6D4C41" },
      { label: "Eden avg 2nd inns", value: 147.1, color: "#1E88E5" },
      { label: "Chasing win%", value: 61.0, color: "#43A047" }
    ],
    dataTable: {
      headers: ["Eden Gardens (IPL)", "Value"],
      rows: [
        ["Matches", "77"],
        ["Batting 2nd wins", "47"],
        ["Batting 1st wins", "30"],
        ["Toss: field first %", "63.6%"],
        ["Death overs RPO", "9.37"],
      ]
    }
  },
  {
    id: 5,
    slug: "kkr-vs-lsg-match-15-pitch-report-eden-gardens-what-par-looks-like",
    title: "KKR vs LSG pitch report: Eden Gardens par score and phase scoring map",
    subtitle: "Historically, Eden’s scoring curve rises late — teams that keep wickets can add 55–65 in the final 5.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "5 min",
    tags: ["IPL 2026", "Pitch report", "Eden Gardens", "KKR", "LSG"],
    featured: false,
    content: `
Eden Gardens is often described as a “good batting surface”, but the data shows a more specific truth: it’s a venue where run-scoring accelerates if you preserve options for the final phase.

In our venue dataset (77 IPL matches at Eden), the average first-innings score is 160.2 and the average second-innings score is 147.1. That gap isn’t only about chasing advantage — it also hints that teams batting first can misread what a strong total looks like, especially if the pitch slows early.

The phase run rates tell the story. Eden’s powerplay run rate is 7.28, middle overs run rate is 7.51, and death overs run rate jumps to 9.37. The jump from middle to death is where matches flip: you can be “fine” at 90/2 after 12 and still end at 175 if you have hitters and a clear boundary plan.

What does par look like for KKR vs LSG?

• If batting first, 170 should be considered a defendable benchmark.
• 155–165 is competitive only if your bowling attack can create wicket pressure in the middle.
• Anything below 150 is vulnerable because Eden has a history of chase success.

Bowling considerations:

Because Eden’s late scoring is high, the death overs are rarely about yorkers alone — they’re about variations and boundary protection. Teams that defend well at Eden usually:

1) keep one over of their best death bowler for over 19 or 20,
2) use spin in the middle not just to contain but to take wickets,
3) force batters to hit “straight” into the longer pockets rather than allowing free access square.

A quick look at Eden’s last five IPL matches in the dataset includes a 232/0 and multiple 200+ totals — which is a reminder that when pitches are flat here, they can be extremely flat.

Bottom line: treat overs 16–20 as the scoring engine. If you’re batting first, build toward it. If you’re chasing, keep wickets and trust the venue’s late-scoring profile.
`,
    relatedPlayerIds: [23, 22, 13, 3],
    matchId: 15,
    chartData: [
      { label: "Powerplay RPO", value: 7.28, color: "#42A5F5" },
      { label: "Middle RPO", value: 7.51, color: "#7E57C2" },
      { label: "Death RPO", value: 9.37, color: "#EF5350" }
    ]
  },
  {
    id: 6,
    slug: "kkr-vs-lsg-match-15-toss-report-eden-gardens-field-first",
    title: "KKR vs LSG toss report: Eden’s numbers still say ‘field first’",
    subtitle: "Across 77 matches, teams batting second have won 61%. Toss winners who field first win 63.3% at Eden.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "4 min",
    tags: ["IPL 2026", "Toss report", "Eden Gardens", "KKR", "LSG"],
    featured: false,
    content: `
If you like simple toss rules, Eden Gardens is one of the few IPL venues that still offers one: field first.

From our venue dataset, teams batting second have won 47 of 77 matches at Eden (61%). That historical lean is echoed by captain behaviour: teams choose to field after winning the toss 63.6% of the time.

The toss-specific win rates strengthen the case. In our toss dataset for Eden Gardens:

• Toss winners who bat first: 28 times, 12 wins (42.9%).
• Toss winners who field first: 49 times, 31 wins (63.3%).

Those splits don’t guarantee a result, but they strongly suggest that information and conditions matter here. Eden evenings can bring dew, and even without heavy dew, chasing gives captains a clearer sense of whether the surface is slowing. It also allows more precise bowling matchups because you know what you’re defending.

So what should captains do if they win the toss in Match 15?

Recommendation: field first.

Secondary recommendation (if forced to bat first): aim for 170+ and keep wickets for the final 5 overs. Eden’s death-overs run rate in the dataset is 9.37, which implies that strong finishes are common.

In other words, the toss at Eden is not about “batting-friendly” labels. It’s about controlling the game’s most volatile phase: the last 30 balls. Chasing gives you the best chance to time that phase correctly.
`,
    relatedPlayerIds: [23, 22, 13],
    matchId: 15,
    chartData: [
      { label: "Toss bat first win%", value: 42.9, color: "#8D6E63" },
      { label: "Toss field first win%", value: 63.3, color: "#43A047" }
    ],
    dataTable: {
      headers: ["Eden toss decision", "Count", "Wins", "Win%"],
      rows: [
        ["Bat first", "28", "12", "42.9"],
        ["Field first", "49", "31", "63.3"],
      ]
    }
  },
  {
    id: 7,
    slug: "rr-vs-rcb-match-16-preview-gawahati-reduced-overs-variance",
    title: "RR vs RCB (Match 16) preview: Guwahati brings variance — plan for chaos",
    subtitle: "After an 11-over match here, expect captains to chase flexibility: shorter boundaries, weather risk, and powerplay decisions.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "RR", "RCB", "Guwahati", "Match 16"],
    featured: false,
    content: `
Rajasthan Royals and Royal Challengers Bengaluru meet again in Guwahati, a venue that has already produced weather-influenced cricket this week. When venues carry rain risk, tactical flexibility becomes the key resource: you need to know how you’ll play if the game becomes 15 overs, 12 overs, or even 7.

We don’t have the same deep venue sample for Guwahati as for Eden in our dataset, but we can still build a planning framework for Match 16.

1) Define your reduced-overs batters.

If the match is shortened, the priority shifts from “batting depth” to “boundary density”. RR have already demonstrated this in Guwahati, where a clear early boundary plan allowed them to post 150 in 11 overs in the previous match at this venue. RCB’s challenge is different: they often rely on top-order structure. In shortened games, structure is less valuable than permission.

2) Make the toss decision about risk.

If rain is forecast, captains sometimes prefer batting first to avoid DLS uncertainty. But batting second also gives you clarity on what’s required. The toss call should be based on the radar, not tradition.

3) Use bowlers as wicket assets, not economy assets.

In short formats, defending a total is about resetting the chase. That means bowlers who can take wickets in the first over window and in the final over window are more valuable than “middle-over squeeze” bowlers.

Matchups matter too. From our batter-bowler dataset:

Virat Kohli has historically handled Ravindra Jadeja well (179 runs off 160 balls, SR 111.87, 3 dismissals), which is a reminder that even “control” bowlers can be neutralised if the batter knows the release points.

Key question for Match 16: can RCB create two boundary hitters who face 70% of the balls in a shortened chase? If they can, they’re dangerous. If they can’t, RR’s wicket pressure — especially through disciplined hard lengths and spin in the middle — will tilt the game.

Expect a match where the most important pre-game work is not the XI announcement, but the plan for an interruption. The team that pre-commits its roles will look calm. The team that improvises will look rushed.
`,
    relatedPlayerIds: [7, 1, 29, 18],
    matchId: 16,
    chartData: [
      { label: "Risk: rain/interruptions", value: 8, color: "#90A4AE" },
      { label: "Value of wickets", value: 9, color: "#EF5350" },
      { label: "Value of flexibility", value: 9, color: "#43A047" }
    ]
  },
  {
    id: 8,
    slug: "pbks-vs-srh-match-17-preview-new-chandigarh-par-score",
    title: "PBKS vs SRH (Match 17) preview: target the death overs at New Chandigarh",
    subtitle: "If the venue plays to its recent trend, finishing skill and bowling variations will decide the final 24 balls.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "PBKS", "SRH", "New Chandigarh", "Match 17"],
    featured: false,
    content: `
Punjab Kings vs Sunrisers Hyderabad at New Chandigarh should be a classic “who closes better?” contest. While each venue has its own personality, modern IPL results often compress into one deciding factor: can your batting add 50+ in the last five overs without losing too many wickets, and can your bowling stop the opponent from doing the same?

New Chandigarh has seen a range of totals in recent years, but the broad template holds: preserve wickets through the middle and keep your best variations for the death.

For PBKS, the key is matching SRH’s likely boundary pace. SRH are built around aggressive middle-order hitting; when they win, they usually win by converting overs 13–20 into a barrage. PBKS must therefore identify the “kill overs” — the two overs when Klaasen-type hitters arrive — and ensure those overs are bowled by their best matchup bowlers.

For SRH, the challenge is to avoid becoming too boundary-dependent early. If PBKS can take two early wickets, it forces SRH into a rebuild, and that can reduce the number of balls their finishers face. In T20 cricket, the finisher’s best friend is time.

From our player career dataset, Heinrich Klaasen (a key SRH finisher) is known for accelerating late, and profiles like that tend to thrive when the innings is stable at over 12. Conversely, if SRH are 70/3 at the same stage, the finisher becomes a rescue act rather than a closer.

Toss considerations: if there’s any dew, captains will lean towards chasing, because it reduces grip for spinners and makes yorkers harder to land. If conditions are dry, batting first can be fine — but then you must over-invest in the last five overs.

Expect a game where the “par” score is less important than the distribution of runs. A 175 with 60 in the last five is harder to chase than a 185 with 40 in the last five, because it signals finishing skill and forces panic.
`,
    relatedPlayerIds: [9, 6, 17],
    matchId: 17,
    chartData: [
      { label: "Last 5 overs importance", value: 10, color: "#EF5350" },
      { label: "Wickets in hand", value: 9, color: "#43A047" },
      { label: "Variations", value: 8, color: "#7E57C2" }
    ]
  },
  {
    id: 9,
    slug: "matchups-kohli-vs-narine-and-rohit-vs-narine-what-the-numbers-say",
    title: "Matchup watch: Kohli vs Narine is playable; Rohit vs Narine is a trap",
    subtitle: "The same bowler can mean two different problems — strike rotation vs dot-ball pressure.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    tags: ["IPL 2026", "Matchups", "Kohli", "Narine", "Rohit"],
    featured: false,
    content: `
Sunil Narine remains one of the IPL’s most matchup-driven bowlers. Against some batters, he creates dots; against others, he simply forces a safer scoring lane. Two head-to-head lines from our dataset show why this matters.

Rohit Sharma vs Sunil Narine:

Rohit has scored 143 runs off 134 balls against Narine but has been dismissed 8 times. His strike rate in the matchup is 106.72 and the dot-ball percentage is 40.3. That combination is dangerous in T20s. A strike rate around 107 means the batter is not “winning” the matchup, and eight dismissals means the risk cost is high.

Virat Kohli vs Sunil Narine tells a different story:

Kohli has scored 173 off 134 balls with 4 dismissals, a strike rate of 129.10, and a dot-ball percentage of 34.3. He’s not smashing Narine, but he’s staying alive and keeping the chase on track.

What does this mean tactically?

• For teams batting against Narine, the primary objective is to reduce dot balls. Narine becomes lethal when the batter feels forced to manufacture a boundary.
• For batters who struggle (like Rohit in this matchup), the safest plan is to “win” Narine with singles and accept that boundaries may come elsewhere.
• For batters who manage him (like Kohli), you can absorb his overs while your partner attacks the other end.

This is why matchups are more than strike rate. A 120 strike rate with low dismissal risk can be a winning matchup if it allows the other end to attack. A 140 strike rate with high dismissal risk can still lose you the game if it keeps resetting partnerships.

In a venue like Eden Gardens, where chasing is historically strong and the death overs score quickly, the middle-over dot ball is the real enemy. Narine’s best skill is not turn. It’s the ability to make batters stand still.

If Match 15 becomes a chase, watch who Narine bowls to, and watch who is willing to take the “boring” single. The batter who takes five singles off Narine may be the one who wins the match.
`,
    relatedPlayerIds: [1, 13, 23],
    chartData: [
      { label: "Rohit SR vs Narine", value: 106.72, color: "#EF5350" },
      { label: "Kohli SR vs Narine", value: 129.10, color: "#43A047" },
      { label: "Rohit dismissals", value: 8, color: "#EF5350" },
      { label: "Kohli dismissals", value: 4, color: "#43A047" }
    ],
    dataTable: {
      headers: ["Batter vs Narine", "Balls", "Runs", "Dismissals", "SR", "Dot%"],
      rows: [
        ["Rohit Sharma", "134", "143", "8", "106.72", "40.3"],
        ["Virat Kohli", "134", "173", "4", "129.10", "34.3"],
      ]
    }
  },
  {
    id: 10,
    slug: "ipl-2026-season-lesson-why-200-plus-totals-are-still-defendable",
    title: "IPL 2026 trendline: 200+ totals are back — but only if you own the middle",
    subtitle: "The season’s early games show that ‘flat pitches’ don’t remove bowling skill; they change where bowling matters.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-09",
    readTime: "7 min",
    tags: ["IPL 2026", "Trends", "T20 strategy", "Middle overs"],
    featured: false,
    content: `
The IPL’s modern scoring era creates a common belief: if the pitch is good and the boundary is short, 200 is never enough. Match 14 challenged that belief. Gujarat Titans defended 210/4 and won by 1 run, largely because they owned the middle of the chase with Rashid Khan’s 3/17.

That’s the new reality of 200+ cricket: totals are still defendable, but not with “containment”. They’re defendable with disruption.

On high-scoring surfaces, the powerplay is often a wash. Both teams can score 55–65. The differentiator becomes the middle overs (7–15), when batters want to manage risk and bowlers want to create errors. If you have a bowler who can take wickets without feeding boundaries, you can turn a 10-an-over chase into a 12-an-over chase for three overs. That’s enough to force panic.

There’s also a batting-side mirror lesson. If your chase is led by an opener like KL Rahul, the most important job of the rest of the lineup is to protect the innings structure. Big chases aren’t won by one hero. They’re won by two stable partnerships that allow the finisher to face 12–15 balls without needing a miracle.

Venue effects matter too. Eden Gardens, for example, has a death-overs run rate of 9.37 in our dataset and a strong historical tilt toward chasing (61% wins batting second). That suggests 200s will be more common — but it also implies bowlers must know which phase to target.

So what is the “new defendable” formula?

1) Batting side: score 50+ in the final five with wickets in hand.
2) Bowling side: carry one wicket-taking option into overs 7–15 and treat that as your winning window.
3) Fielding side: be ruthless on singles in overs 17–20. When games go to the wire, one saved run often becomes the margin.

In IPL 2026, the best teams won’t be those who only hit 200. They’ll be the teams who understand that the match doesn’t end at 200 — it begins there.
`,
    relatedPlayerIds: [12, 22, 5, 23],
    chartData: [
      { label: "Defendable if: own middle", value: 1, color: "#43A047" },
      { label: "Not defendable if: only contain", value: 1, color: "#EF5350" }
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "match",
    title: "Match 14 result",
    value: "GT won by 1 run",
    description: "Gujarat Titans defended 210/4 against Delhi Capitals’ 209/8 in Delhi.",
    teamColors: ["#1E88E5", "#EF5350"]
  },
  {
    type: "player",
    title: "Innings of the day",
    value: "KL Rahul 92 (52)",
    description: "Rahul’s 92 kept a 211 chase alive deep into the final over.",
    playerIds: [22]
  },
  {
    type: "stat",
    title: "Eden toss edge",
    value: "Field first: 63.3% win",
    description: "At Eden Gardens, toss winners who field first win 31 of 49 (63.3%) in our dataset.",
    teamColors: ["#43A047", "#8D6E63"]
  }
];
