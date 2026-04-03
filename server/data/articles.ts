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
    "id": 1,
    "slug": "kkr-vs-srh-match-6-recap-srh-226-kkr-161",
    "title": "KKR vs SRH: SRH defend 226 with a powerplay punch",
    "subtitle": "Head-Abhishek set it up, Unadkat-Reddy finish the job at Eden Gardens.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "KKR",
      "SRH",
      "Match 6",
      "Eden Gardens",
      "Recap"
    ],
    "featured": true,
    "content": "SRH’s 65-run win over KKR at Eden Gardens was a scoreline that told the truth: this was a game where one powerplay essentially decided the contest. Sunrisers Hyderabad surged to 226/8 and then bowled KKR out for 161 in exactly 16 overs, producing the season’s first successful defence of a big total.\nThe tone was set in the first six. Travis Head (46 off 21) and Abhishek Sharma (48 off 21) played the high-risk, high-reward template perfectly, smashing 84/1 in the powerplay. Eden Gardens is historically a venue where chasing is common — teams have won 47 of 77 matches batting second — but SRH flipped that script by building such a steep par-score buffer that even a strong chase curve couldn’t keep up.\nKKR’s decision to field first aligned with venue tendencies (toss winners choose to field 63.6% of the time at Eden), yet the execution never matched the plan. The quick outfield and short pockets punished hard lengths, and SRH’s openers forced KKR’s bowlers to live in the danger zones. Heinrich Klaasen’s 52 off 35 then ensured the innings didn’t dip when the new ball threat faded, and Nitish Kumar Reddy’s 39 off 24 added the late push that turned 200 into ‘out of reach’.\nIf SRH’s batting was about tempo, their defence was about sequencing. Jaydev Unadkat’s 3/21 gave them a left-arm angle to attack the stumps and keep hitting length, while Reddy backed up his batting with 2/17 in two overs — a rare two-phase impact in a night game where captains are usually desperate to hide the fifth bowler. KKR did have sparks: Finn Allen’s 28 off 7 was a reminder that early boundary bursts can change a chase. Angkrish Raghuvanshi (52 off 29) and Rinku Singh (35 off 25) tried to stitch an innings together, but SRH kept taking wickets often enough to prevent the required rate from stabilising.\nThe deeper number is the rate at which KKR bled control. Eden’s average second-innings score is 147.1, and KKR were actually tracking above that pace early — the problem was the wicket cost. With two crucial run-outs and regular strikes, the chase became a series of disconnected cameos rather than a planned pursuit.\nFor SRH, the win is a blueprint: maximise the powerplay (their 84/1 is an elite start), then defend with clean match-ups and tight middle overs. For KKR, the lesson is uncomfortable but simple — when the opponent posts 226, you can’t afford miscommunication, and you can’t afford to let the game drift in the first eight overs. On a venue where chasing is usually the safer call, SRH proved that the safer call is irrelevant if you are 30 runs short of par by the ninth over.",
    "relatedPlayerIds": [
      8,
      28,
      9,
      27
    ],
    "matchId": 6
  },
  {
    "id": 2,
    "slug": "kkr-vs-srh-match-6-tactical-powerplay-84-1",
    "title": "How SRH made Eden a “defendable” venue again",
    "subtitle": "A powerplay 84/1 and wicket sequencing overcame Eden’s chasing bias.",
    "category": "analysis",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Tactical",
      "Powerplay",
      "Bowling plans",
      "Eden Gardens"
    ],
    "featured": false,
    "content": "Match 6 wasn’t just a big-score game; it was a lesson in how to manufacture ‘unplayable’ phases. SRH did it twice: first with 84/1 in the powerplay, then with a wicket-spike that collapsed KKR to 161 all out in 16 overs.\nStart with the venue baseline. Eden Gardens has an average first-innings score of 160.2 and an average second-innings score of 147.1. That gap matters because teams often chase here: 47 of 77 matches have been won batting second. KKR’s decision to field was consistent with both history and instinct.\nBut ‘decision’ is only the first step. SRH’s openers forced KKR into reactive bowling. Head’s 46 off 21 and Abhishek’s 48 off 21 came with a clear pattern: attack hard length early, then punish any bowler who missed full. Once SRH were above 13 an over in the first six, KKR’s bowlers had no easy plan — slower balls are risky when the ball is new, and bouncers are risky when the boundary pockets are short.\nThe middle overs were SRH’s subtle win. Heinrich Klaasen (52 off 35) didn’t play as if he needed to catch up; he played as if he wanted to keep KKR’s best overs from ever arriving. That matters at Eden because the middle-overs scoring rate historically sits at 7.51 rpo, but SRH effectively treated the middle as a continuation of the powerplay. Nitish Kumar Reddy’s 39 off 24 then gave SRH the death-overs cushion — Eden’s historical death-overs rate is 9.37 rpo, and SRH pushed beyond it.\nWhen KKR batted, they actually began with the right intent: Finn Allen’s 28 off 7 is exactly what a 227 chase requires. The failure came in converting that intent into a stable chase. Run-outs are often blamed on panic, but they’re also about role clarity. If your set batter and your hitter don’t agree on which singles are ‘free’ and which are ‘risk’, the innings becomes noisy.\nSRH’s bowling sequencing was ruthless. Jaydev Unadkat’s 3/21 provided wicket-taking in the phases where Eden can still reward seamers, and Reddy’s 2/17 in two overs allowed SRH to keep their best options for the overs that matter most. The net effect: KKR never got a stretch of 12-15 balls without a collapse threat.\nThe tactical summary is simple. KKR chose the historically correct option (field first) but lost the only phase that can override history: the first six overs. Once SRH won that phase by 30+ runs, the game was no longer a chase on a chasing ground — it was a survival exercise under a rising required rate.",
    "relatedPlayerIds": [
      8,
      28,
      9
    ],
    "matchId": 6
  },
  {
    "id": 3,
    "slug": "nitish-kumar-reddy-match-6-impact-39-2-17",
    "title": "Nitish Kumar Reddy’s match-6 blueprint: leverage over volume",
    "subtitle": "39 off 24 and 2/17: the overs he influenced mattered more than the raw totals.",
    "category": "analysis",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Player focus",
      "All-round impact",
      "SRH"
    ],
    "featured": false,
    "content": "In a match where 387 runs were scored and the margin was 65, the Player of the Match going to an all-rounder felt inevitable. Nitish Kumar Reddy delivered the rare T20 double: he boosted SRH’s total at the exact moment innings usually plateau, and then he stole back overs with the ball when KKR threatened to turn the chase into a shootout.\nThe batting first. SRH were already flying, but the difference between 206 and 226 is the difference between ‘competitive’ and ‘controlling’ at Eden Gardens. Reddy’s 39 off 24 (strike rate 162.50) didn’t require him to hit low-percentage shots from ball one; it required him to keep the boundary cadence alive so KKR couldn’t claw back with a quiet over.\nWhat makes that contribution more valuable is the venue context. Eden’s historical death-overs rate is 9.37 runs per over. SRH’s late surge ensured they were comfortably above the historical expectation, which meant KKR’s chase needed more than a good start — it needed a near-perfect innings.\nThen came the bowling. Captains rarely want to hand an all-rounder a ‘must-hit’ over in a 227 chase, but Reddy’s 2/17 in two overs was exactly that: minimal risk, maximum control. The wicket count matters, but the bigger story is the lack of release. KKR never got a free over to reset the required rate.\nThis is where modern T20 values players differently. The classic all-rounder is measured by aggregate runs and wickets. The modern one is measured by leverage: can you influence the overs that swing win probability? Reddy did it in two separate leverage windows.\nFor SRH, the upside is structural. If Reddy can reliably cover two overs with economy and still bat as a late-innings accelerator, SRH’s XI becomes far more flexible. It allows them to play an extra specialist (like a wrist-spinner) without fearing a bowling shortage, and it allows them to bat deeper without compromising top-order intent.\nFor KKR, he was the kind of opposition player you hate: the one who makes your ‘almost’ moments irrelevant. Finn Allen’s early burst, Raghuvanshi’s 52, Rinku’s fight — all of it required a few overs of calm to become a chase. Reddy’s spell ensured calm never arrived.",
    "relatedPlayerIds": [
      28,
      9
    ],
    "matchId": 6
  },
  {
    "id": 4,
    "slug": "csk-vs-pbks-match-7-pitch-report-chepauk-pace-to-grip",
    "title": "CSK vs PBKS Pitch Report: why Chepauk rewards first-innings control",
    "subtitle": "Historical numbers point to a batting-first bias and a middle-overs match-up game.",
    "category": "pitch-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Match 7",
      "CSK",
      "PBKS",
      "Pitch report",
      "Chepauk"
    ],
    "featured": false,
    "content": "Chepauk tends to reduce the game into match-ups. The MA Chidambaram Stadium (Chepauk) carries a clear first-innings bias: teams batting first have won 31 of 48 matches (64.6%), and the venue’s average first-innings score (166.0) sits well above the average second-innings score (151.9). That gap is usually the story — not because chasing is impossible, but because the pitch often slows just enough for spin and change-ups to become harder to line up.\nFor CSK vs PBKS, the first question is how quickly the surface grips. Chepauk’s historical phase rates show a fairly stable powerplay (7.44 rpo) and middle overs (7.56 rpo), with the death jumping to 9.48 rpo. That’s an important profile: it’s not a ‘dead’ middle-over pitch; it’s a pitch where you must keep wickets in hand so you can access the death-overs scoring window.\nWhat does a par score look like? Start with 166 as the long-run first-innings average, then adjust for modern scoring trends. On most Chepauk nights, 170–185 is the range that forces the chasing side to take risks in the middle. Anything below 165 keeps the chase honest.\nThe other subtlety is boundary value. Chepauk is not a six-hitting paradise, so teams that rely solely on ‘hit over the top’ can stall. Instead, it rewards batters who can pick the gaps and rotate against spin. That makes the match-ups around wrist-spin and left-arm spin pivotal.\nIf CSK bat first, the template is clear: win the first six without losing more than one wicket, then keep a batter set deep into the death. If PBKS bat first, they need to avoid the common Chepauk trap — 45/0 after six can become 120/4 after 16 if the middle overs are played too passively.\nPrediction for pitch behaviour: early true pace for 2-3 overs, then increasing grip; cutters and cross-seam will be hard to hit on the up. The best batting window should be overs 17-20 if the set batter survives.",
    "relatedPlayerIds": [
      10,
      14,
      20
    ],
    "chartData": [
      {
        "label": "Avg 1st inns",
        "value": 166.0,
        "color": "#f5b301"
      },
      {
        "label": "Avg 2nd inns",
        "value": 151.9,
        "color": "#2d6cdf"
      },
      {
        "label": "Highest",
        "value": 246,
        "color": "#111111"
      }
    ],
    "matchId": 7
  },
  {
    "id": 5,
    "slug": "csk-vs-pbks-match-7-toss-report-bat-first-bias",
    "title": "CSK vs PBKS Toss Report: the numbers say “set it up”",
    "subtitle": "Chepauk toss history leans strongly toward batting first and defending.",
    "category": "toss-report",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Match 7",
      "Toss report",
      "Chepauk"
    ],
    "featured": false,
    "content": "At Chepauk, the toss is often a psychological trap. The data suggests captains should not automatically chase: toss winners choose to field only 29.2% of the time, and batting first has produced 31 wins in 48 matches (64.6%). In other words, teams historically back the idea that the pitch slows and the first-innings total gains value as the game progresses.\nSo what should CSK and PBKS do if they win the toss? The default is to bat first unless there is visible dew. Even then, the decision isn’t binary. Dew helps chasing only if the pitch stays consistent; on a surface that grips, wet ball control can actually hurt the chasing side because it becomes harder to execute slower balls and yorkers.\nFrom a tactical standpoint, batting first at Chepauk allows you to dictate match-ups. You can hold back spin for the middle overs knowing the opposition must keep pace. When chasing, you often have to take your risks against the very bowlers the defending team wants you to face.\nIf CSK win the toss, their ideal scenario is to bat, set 175+, and then squeeze the middle overs with spin and smart pace-off. If PBKS win it, the disciplined call is still to bat first, but only if they trust their middle order to rotate against spin; otherwise, the temptation to chase could lead them into a slow-surface problem where 8 an over feels like 10.\nToss call (data-driven): bat first, aim to be 50/1 after six and 125/3 after 15, then accelerate hard late. That sequence maps well to Chepauk’s scoring profile (powerplay 7.44 rpo, middle 7.56 rpo, death 9.48 rpo) and reduces the risk of being forced into desperation shots against turning ball.",
    "relatedPlayerIds": [
      14,
      18,
      10
    ],
    "chartData": [
      {
        "label": "Bat 1st win %",
        "value": 64.6,
        "color": "#f5b301"
      },
      {
        "label": "Toss choose field %",
        "value": 29.2,
        "color": "#2d6cdf"
      }
    ],
    "matchId": 7
  },
  {
    "id": 6,
    "slug": "csk-vs-pbks-match-7-preview-chepauk-matchups",
    "title": "CSK vs PBKS Match Preview: Chepauk turns it into a phase battle",
    "subtitle": "A venue that rewards batting first and controlling the middle overs sets up a tactical contest.",
    "category": "match-preview",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Match 7",
      "Preview",
      "CSK",
      "PBKS"
    ],
    "featured": false,
    "content": "CSK vs PBKS at Chepauk is one of those early-season fixtures that can quietly define a team’s identity. The venue encourages control, not chaos, and it will test whether both sides can win the ‘in-between’ overs — 7 to 16 — where matches here are often decided.\nVenue context matters. Chepauk’s average first-innings score is 166.0, but teams batting first win 64.6% of the time. That is a strong indicator that par is not a single number; par is the ability to defend on a surface that increasingly rewards variation.\nCSK’s key lever is experience through phases. In a Chepauk game, a calm anchor who can still accelerate late is priceless. That’s why the late-overs profile of elite batters matters. Virat Kohli’s career IPL strike rate at the death is 186.51 (1507 runs off 808 balls), a reminder that the best batters don’t just ‘survive’ the middle; they cash in late. PBKS will need a similar death-overs finisher to offset any middle-overs slowdown.\nPBKS, meanwhile, will look for top-order intent without recklessness. The danger at Chepauk is assuming you can ‘muscle’ your way out of trouble. Boundary-hunting too early can lead to collapses that leave you 20-25 short.\nThe match-up layer: Chepauk rewards teams that can bowl spin in the middle without leaking boundaries. It also rewards batters who can rotate at 120-130 strike rate against spin without taking undue risk. That is where shot selection and running between wickets become as important as raw power.\nKeys to the game:\n1) Powerplay discipline: keep wickets in hand; 45/1 is better than 60/3.\n2) Middle-overs rotation: avoid the ‘dot-ball spiral’ against spin.\n3) Death-overs access: arrive at over 16 with at least 6 wickets so the last four overs can be attacked.\nCricDNA call: if the team batting first posts 180+, they become favourites because the chasing side will have to take risks against the toughest phase on this ground — the slowing middle overs.",
    "relatedPlayerIds": [
      14,
      10,
      20
    ],
    "dataTable": {
      "headers": [
        "Chepauk trend",
        "Value"
      ],
      "rows": [
        [
          "Avg 1st innings",
          "166.0"
        ],
        [
          "Avg 2nd innings",
          "151.9"
        ],
        [
          "Bat-first win %",
          "64.6"
        ],
        [
          "Powerplay rpo",
          "7.44"
        ],
        [
          "Middle-overs rpo",
          "7.56"
        ],
        [
          "Death-overs rpo",
          "9.48"
        ]
      ]
    },
    "matchId": 7
  },
  {
    "id": 7,
    "slug": "ipl-2026-opening-week-what-the-data-says-powerplay-edge",
    "title": "IPL 2026: the early data points to a powerplay edge",
    "subtitle": "Why the first six overs are shaping strategy more than ever.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Season",
      "Strategy",
      "Powerplay"
    ],
    "featured": false,
    "content": "Early IPL tables lie, but patterns don’t. After the first set of matches, the most repeatable edge has been powerplay dominance — not just high scoring, but high scoring without losing wickets. SRH’s 84/1 powerplay in Match 6 is the loudest example, but the principle is league-wide: if you win the first six by 15-25 runs and keep wickets, you can dictate every later decision.\nWhy is the powerplay so valuable? Because it forces the opponent to abandon their preferred match-ups. Bowlers who are meant to attack in the middle overs get used early. Spinners who are meant to control overs 7-14 get pushed into defensive lines. Captains start ‘hiding’ their fifth bowler instead of using him strategically.\nThe second pattern: venue bias still exists. Eden Gardens historically favours chasing (47 wins batting second in 77 matches), while Chepauk favours setting a target (bat-first win rate 64.6%). Teams that align strategy to venue — not just toss — gain an edge. The toss is a choice; the venue is the environment.\nWhat should teams do with this information? Build templates. At a chasing venue like Eden, you can still win batting first, but you need an above-par powerplay and at least one middle-overs wicket spike to offset the chasing advantage. At a defending venue like Chepauk, the batting-first team’s goal is to keep the game under control: avoid the collapse that turns 175 into 155.\nThe analytics takeaway is that IPL is not one format; it’s 13 different micro-formats stitched together by travel. The teams that move fastest from ‘generic T20 plan’ to ‘venue-specific plan’ are the ones that look smarter than their squads on paper.\nIf the opening week has taught us anything, it’s this: the best teams aren’t simply the ones with the most star power. They’re the ones who win the high-leverage overs (1-6 and 16-20) often enough that the middle becomes a controlled bridge rather than a guessing game.",
    "relatedPlayerIds": [
      8,
      28,
      9
    ]
  },
  {
    "id": 8,
    "slug": "death-overs-strike-rate-why-finishers-win-ipl",
    "title": "Why death-overs strike rate is the cleanest predictor of T20 impact",
    "subtitle": "Kohli (186.51) and Klaasen (198.21) show how late-innings acceleration wins games.",
    "category": "analysis",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Batting",
      "Death overs",
      "Analytics"
    ],
    "featured": false,
    "content": "A quick way to understand a batter’s modern value is to look at death-overs strike rate. When matches compress, the last four overs become the only phase where you can ‘buy’ 20 extra runs without needing an unusual pitch.\nTake Virat Kohli as a reference point. Across 259 IPL matches, he has scored 8661 runs at 132.86 strike rate, but the more telling split is at the death: 1507 runs off 808 balls at a strike rate of 186.51. That number isn’t just about power — it’s about decision-making under pressure.\nNow compare that to a pure modern finisher profile like Heinrich Klaasen. In 45 IPL matches, Klaasen has scored 1480 runs at a strike rate of 169.72, with an even higher death-overs strike rate of 198.21 (553 runs off 279 balls). That is elite late-innings acceleration.\nWhat does this mean for team building? It suggests that ‘anchors’ are still valuable, but only if they can switch gears late. A batter who scores 45 off 38 and cannot accelerate is a liability on most grounds. A batter who scores 45 off 38 and then adds 20 off the next 10 balls is a match-winner.\nFor teams like CSK and PBKS heading into Chepauk, the message is sharper. Chepauk often slows in the middle overs, which increases the value of keeping wickets for the death. The death phase at Chepauk historically runs at 9.48 rpo, meaning there is a real scoring window if you have set batters and clear roles.\nCricDNA lens: identify two batters per team who can finish at 180+ strike rate, then structure the innings so at least one of them is batting in overs 17-20. If you can do that consistently, you turn ‘good totals’ into ‘defendable totals’ even on challenging surfaces.",
    "relatedPlayerIds": [
      1,
      9
    ],
    "dataTable": {
      "headers": [
        "Player",
        "Matches",
        "Runs",
        "SR",
        "Death-overs SR"
      ],
      "rows": [
        [
          "Virat Kohli",
          "259",
          "8661",
          "132.86",
          "186.51"
        ],
        [
          "Heinrich Klaasen",
          "45",
          "1480",
          "169.72",
          "198.21"
        ]
      ]
    }
  },
  {
    "id": 9,
    "slug": "venue-bias-eden-vs-chepauk-chasing-vs-defending",
    "title": "Eden vs Chepauk: how venue bias changes the entire game plan",
    "subtitle": "Two iconic grounds, two different risk curves — and why teams must adapt.",
    "category": "analysis",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Venues",
      "Strategy",
      "Eden",
      "Chepauk"
    ],
    "featured": false,
    "content": "It’s tempting to treat ‘chasing grounds’ and ‘defending grounds’ as clichés, but the data continues to separate venues into distinct strategic buckets. Eden Gardens and Chepauk are a perfect contrast.\nAt Eden Gardens, chasing has historically been the preferred and often successful route: teams have won 47 of 77 matches batting second, and toss winners choose to field 63.6% of the time. The average first-innings score is 160.2, but the average second-innings score is only 147.1 — a clue that chases are not always about higher scoring, but about knowing the target and timing the surge.\nAt Chepauk, the logic flips. Teams batting first win 64.6% of the time, and toss winners choose to field only 29.2% of the time. The average first innings is 166.0 versus 151.9 in the second innings, reinforcing the idea that the pitch can slow and make stroke-making harder as the game progresses.\nSo how should teams respond? By building different risk curves. On a chasing venue, the batting-first team must push above par and create wicket-taking opportunities with scoreboard pressure. On a defending venue, the batting-first team can aim for a controlled par+ total and then squeeze the middle overs with spin and pace-off.\nMatch 6 was a live demonstration of how to override venue bias. SRH defended 226 at Eden — a ground that usually rewards chasing — because they won the powerplay massively (84/1) and kept striking with the ball. That’s the template for ‘breaking’ a venue’s historical preference.\nAs the tournament moves, teams that treat venue profiles as core strategy — not trivia — will steal 2-4 points over a season. In a 10-team league, that’s often the difference between fourth and sixth.",
    "relatedPlayerIds": [
      8,
      14
    ]
  },
  {
    "id": 10,
    "slug": "ipl-2026-flexibility-over-roles-why-squads-are-evolving",
    "title": "IPL 2026: why flexibility is beating fixed roles",
    "subtitle": "All-round resources and late-innings acceleration are shaping the early season.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-03T13:07:16Z",
    "readTime": "6 min",
    "tags": [
      "Season",
      "Squads",
      "Tactics"
    ],
    "featured": false,
    "content": "The first week of IPL 2026 has already produced a theme: teams are increasingly willing to trust flexible resources over rigid roles. That flexibility shows up in two places — bowling depth and batting acceleration.\nBowling depth is the easiest to see. When an all-rounder like Nitish Kumar Reddy can deliver 2/17 in two overs while also scoring 39 off 24, the captain’s playbook expands. You can attack more with specialists because you have cover. You can hold back match-up bowlers for the overs that matter.\nBatting acceleration is the second side of the same coin. Players who can change gears late create insurance against venue slowdowns. Kohli’s IPL death-overs strike rate of 186.51 and Klaasen’s 198.21 are examples of a skill that is portable across venues: when the innings is set up, elite finishers turn good totals into match-winning ones.\nThis is why the ‘middle overs’ have become the new battleground. In most matches, the powerplay and the death are relatively predictable: you either start fast or you don’t; you either finish well or you don’t. The middle is where teams can manufacture an edge through match-ups, rotation, and wicket management.\nChepauk will test this immediately. The ground’s scoring profile suggests middles are not slow by default (7.56 rpo historically), but they are unforgiving if you lose wickets. The teams that can keep rotation going at 7-8 an over without gifting wickets will always have a late-innings launchpad.\nCricDNA takeaway: the teams that look ‘smart’ in 2026 will be the ones that can play three different ways without changing personnel — high-tempo on flat decks, control-and-squeeze on slow decks, and chase curves on chasing grounds. Flexibility isn’t a luxury; it’s a points multiplier.",
    "relatedPlayerIds": [
      1,
      9,
      28
    ]
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    "type": "stat",
    "title": "Match 6 margin",
    "value": "SRH won by 65 runs",
    "description": "SRH 226/8 vs KKR 161 all out (16 overs) at Eden Gardens.",
    "playerIds": [
      8,
      28,
      9,
      27
    ],
    "teamColors": [
      "#6a1b9a",
      "#f57c00"
    ]
  },
  {
    "type": "stat",
    "title": "Chepauk bat-first bias",
    "value": "64.6% bat-first wins",
    "description": "At MA Chidambaram (Chepauk), teams batting first have won 31 of 48 matches.",
    "teamColors": [
      "#f5b301",
      "#2d6cdf"
    ]
  },
  {
    "type": "player",
    "title": "Elite death-overs gears",
    "value": "Kohli 186.51 | Klaasen 198.21",
    "description": "Career IPL death-overs strike rates highlight why finishers decide tight games.",
    "playerIds": [
      1,
      9
    ]
  }
];
