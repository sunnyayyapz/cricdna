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
    "slug": "pbks-vs-gt-match-4-preview-gameplan",
    "title": "PBKS vs GT: Match 4 preview — the middle-overs game that decides New Chandigarh",
    "subtitle": "Balanced venue, heavy tactical matchups, and a spin vs power equation.",
    "category": "match-preview",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "PBKS",
      "GT",
      "Match 4",
      "Preview"
    ],
    "featured": true,
    "content": "Punjab Kings vs Gujarat Titans is the first true ‘styles clash’ of IPL 2026’s opening week: PBKS typically build pace-heavy powerplay pressure, while GT’s batting blueprint is about risk-managed accumulation around a high-impact middle phase. The venue in focus is the Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur (New Chandigarh), and the numbers suggest a balanced surface rather than a lottery.\n\nOur venue sample shows an average first-innings score of 163 and an average second-innings score of 155. The bat-first win percentage sits at 50.0%, which is a reminder that ‘set a target’ is not always the default. Yet captains have still leaned toward chasing: toss winners field first 70.0% of the time.\n\nTactically, PBKS want early wickets because GT’s top order is designed to bat time and keep the asking rate under control. If Shubman Gill is allowed a 30-ball runway, GT’s finishing options can turn an above-par total into a match-winning one. For PBKS, the most bankable game plan is to attack the stumps early and keep one boundary-side option in place for the short ball.\n\nGT’s counter is to force PBKS into ‘one extra over of spin’ before the death. On balanced decks, the match often swings in overs 7–15: the side that wins middle-overs boundary suppression generally controls the chase equation. Expect GT to be comfortable taking 6.5–7.5 rpo in the middle if they can preserve wickets, then surge late.\n\nKey matchup lens: JC Buttler vs Rashid Khan has historically been a bowler-tilted battle — Buttler has scored 30 runs off 50 balls with 4 dismissals (SR 60.0, dot-ball 46%). If PBKS can manufacture that kind of ‘slow burn’ against GT’s best spin, the back end becomes defendable even without a 200+ target.\n\nPrediction framing: treat 175 as a ‘working par’ if the pitch plays to its averages, but keep a close eye on dew. If the surface grips, batting first with 8+ wickets in hand at the 12-over mark is the hidden KPI. If it skids on, chasing becomes materially easier, and captains should prioritize bowling matchups over raw scorecard par.\n\n",
    "relatedPlayerIds": [
      5,
      17,
      25,
      12,
      30
    ],
    "chartData": [
      {
        "label": "Avg 1st inns",
        "value": 163.0,
        "color": "#ff6b6b"
      },
      {
        "label": "Avg 2nd inns",
        "value": 155.4,
        "color": "#4dabf7"
      },
      {
        "label": "PP RPO",
        "value": 8.61,
        "color": "#51cf66"
      },
      {
        "label": "Death RPO",
        "value": 10.18,
        "color": "#fcc419"
      }
    ],
    "dataTable": {
      "headers": [
        "Metric",
        "Value"
      ],
      "rows": [
        [
          "Matches in dataset",
          "10"
        ],
        [
          "Bat 1st win %",
          "50.0%"
        ],
        [
          "Toss field %",
          "70.0%"
        ],
        [
          "Highest score",
          "219"
        ],
        [
          "Lowest score",
          "95"
        ]
      ]
    },
    "matchId": 4
  },
  {
    "id": 2,
    "slug": "pbks-vs-gt-match-4-pitch-report-mullanpur",
    "title": "PBKS vs GT pitch report: what Mullanpur rewards (and what it punishes)",
    "subtitle": "Phase scoring rates hint at a balanced deck with a decisive death overs premium.",
    "category": "pitch-report",
    "author": "CricDNA Insights",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Pitch",
      "New Chandigarh",
      "Match 4"
    ],
    "featured": false,
    "content": "The pitch at Mullanpur has quietly become one of the more ‘honest’ T20 surfaces in India: not a pure road, not a slow turner. In our dataset sample, the average first-innings score is 163 and the average second-innings score is 155. That near-parity tells you two things: (1) the wicket does not dramatically deteriorate, and (2) execution at the death matters more than the toss narrative.\n\nScoring profile by phase is also instructive. The powerplay run rate is 8.6 rpo, rising to 10.2 rpo at the death. This is typical of a venue where early movement rewards top-class new-ball bowling, but the ball comes on once batters are set. Teams that preserve wickets can still access a strong final five overs.\n\nFor PBKS vs GT, that suggests two ‘pitch-conditioned’ strategies. First, the side batting first should prioritize a stable powerplay rather than a reckless 60/0 attempt. Second, the bowling side should hold back at least one high-skill death option for overs 16–20, because this venue’s death scoring rate tends to punish predictable lengths.\n\nThe historical win split is perfectly even in this sample (bat-first wins 5, bat-second wins 5), and the bat-first win percentage is 50.0%. So ‘par’ is not simply a number — it’s a shape. A 165 with 10–12 overs of boundary pressure is often stronger than a 180 built on late scramble runs.\n\nPractical read: expect a true bounce with enough carry for hard lengths to be effective. If you see the ball holding in the surface inside the first three overs, then spinners and cutters become premium; if not, the match becomes a death-overs skills contest.\n\n",
    "relatedPlayerIds": [
      17,
      12,
      30
    ]
  },
  {
    "id": 3,
    "slug": "pbks-vs-gt-match-4-toss-report",
    "title": "PBKS vs GT toss report: when does the toss actually matter at Mullanpur?",
    "subtitle": "Small sample, clear captain preference, and a role-based way to read conditions.",
    "category": "toss-report",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Toss",
      "Match 4",
      "New Chandigarh"
    ],
    "featured": false,
    "content": "Toss decisions at New Chandigarh/Mullanpur are less about superstition and more about identifying one variable: how much the ball skids under lights. The dataset is still small, but it is directionally useful because teams have already shown a clear preference trend.\n\nAt the Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur, toss winners have chosen to field first 7 times out of 10 matches. The win rate when opting to field first is 57.1%. When captains have batted first (3 matches), the win rate is 66.7%.\n\nHow to interpret this without overfitting: the venue does not scream ‘chase only’ because overall bat-first and bat-second wins are level in this sample. The real insight is that captains are prioritizing information. Bowling first lets you calibrate lengths and use hard lengths if there is carry, or switch to cutters if the surface grips.\n\nFor PBKS and GT, the toss should influence one role decision: who bowls overs 17 and 19. If dew is visible, keep your best yorker bowler for 19. If the surface is dry, use your variation bowler earlier to break the back of the innings.\n\nRecommendation: if you win the toss and the outfield is dewy, field first. If the surface looks dry and abrasive, batting first with a ‘two-gear’ innings (7.5 rpo till 12, then accelerate) is still a defensible route.\n\n",
    "relatedPlayerIds": [
      17,
      12,
      30
    ],
    "dataTable": {
      "headers": [
        "Toss choice",
        "Times",
        "Win % when chosen"
      ],
      "rows": [
        [
          "Bat first",
          "3",
          "66.7"
        ],
        [
          "Field first",
          "7",
          "57.1"
        ]
      ]
    },
    "matchId": 4
  },
  {
    "id": 4,
    "slug": "rr-vs-csk-match-3-recap-efficiency-chase",
    "title": "RR vs CSK recap: the sub-130 chase that exposed process gaps",
    "subtitle": "RR’s chase was about control; CSK’s total offered no margin for error.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "RR",
      "CSK",
      "Match 3",
      "Recap"
    ],
    "featured": false,
    "content": "Rajasthan Royals vs Chennai Super Kings (Match 3) was a reminder that T20s are often decided before the slog overs even arrive. CSK posted 127 and RR chased it in 12.1 overs, finishing at 128/2. The margin — RR won by 8 wickets — looks brutal, but the process matters more than the headline.\n\nThe chase was shaped by intent discipline. RR didn’t chase 11 an over; they chased the best balls. When targets are sub-130, every dot ball becomes a win for the bowling side — and RR refused to donate them. The scoring pattern was simple: take early singles, cash in on boundary balls, and keep the required rate in ‘comfort’ territory.\n\nFrom CSK’s perspective, the innings was the bigger problem. A total around 127 is defendable only if your powerplay creates scoreboard pressure. Instead, RR could attack with low-risk methods: hard lengths into the pitch, boundary riders in predictable areas, and no need to gamble with premeditated shots.\n\nTwo tactical lessons emerge. First, bowling plans must be contextual to the target: when defending 127, you cannot afford ‘safe’ overs that allow 8 without risk. Second, chasing teams should treat the first six overs as a risk-management window, not a license to all-out attack. RR’s efficiency showed the value of batting ‘in control’ rather than batting ‘fast’.\n\nFor the tournament narrative, early-season totals will polarize opinions about pitches. The smarter interpretation is: team composition and execution still override par numbers. RR were better aligned to the match state — and they played like it.\n\n",
    "relatedPlayerIds": [
      10,
      14,
      18,
      20,
      21
    ],
    "matchId": 3
  },
  {
    "id": 5,
    "slug": "rr-vs-csk-match-3-why-127-wasnt-defendable",
    "title": "RR vs CSK: why 127 wasn’t defendable without a pressure plan",
    "subtitle": "Defending low totals requires wicket threats and variation, not safety.",
    "category": "analysis",
    "author": "CricDNA Insights",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Tactics",
      "Low totals",
      "RR",
      "CSK"
    ],
    "featured": false,
    "content": "A 127 total is not automatically ‘too low’ — it becomes too low when your bowling plan is not built for it. CSK’s defence against RR highlighted the most common mistake teams make: they defend the number, not the state.\n\nWhen the target is modest, the bowling side must convert dots into panic. That means attacking fields to your best matchups, not retreating into protection. Every over should carry at least one high-probability wicket option: a hard length that cramps, a wide yorker that forces reach, or a spin over that attacks the stumps.\n\nThe second mistake is predictable pace. On two-paced surfaces, speed variation is the currency. If your fastest ball and your slowest ball are separated by 8–10 km/h, the batter can time the rhythm. A defendable 127 needs deception: cutters, cross-seam, and ‘hit-the-pitch’ lengths.\n\nRR’s chase showed the counter-template: don’t gift wickets. Batters should define ‘good balls’ as singles and ‘bad balls’ as boundaries. In that model, a 127 chase becomes a 12-over job because the required rate never climbs into discomfort.\n\nActionable takeaway for teams: for any innings under 150, pre-plan a defence map: (1) two wicket-overs earmarked in the powerplay, (2) one squeeze over between 7–10, and (3) a death-overs set that removes pace from the ball. If you don’t take wickets, you must create false shots — and false shots only come from pressure.\n\n",
    "relatedPlayerIds": [
      14,
      18,
      21
    ],
    "matchId": 3
  },
  {
    "id": 6,
    "slug": "pbks-vs-gt-matchup-buttler-vs-rashid",
    "title": "PBKS vs GT key matchup: why Rashid Khan keeps Buttler quiet",
    "subtitle": "A rare head-to-head where dots and dismissals both lean bowler.",
    "category": "analysis",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Matchup",
      "Buttler",
      "Rashid"
    ],
    "featured": false,
    "content": "PBKS vs GT will likely have one innings-defining contest: JC Buttler versus Rashid Khan. It’s a matchup that looks counterintuitive on paper — Buttler is an elite hitter — but the head-to-head numbers show why Rashid’s skillset travels.\n\nIn this dataset, Buttler has faced Rashid for 50 balls, scoring 30 runs with 4 dismissals. That’s a strike rate of 60.0, with a dot-ball percentage of 46.0%. In T20 terms, this is a double win for the bowler: he slows you down and buys a wicket.\n\nWhy does it happen? Rashid’s pace through the air removes the ‘advance and slog’ option, and his ability to hit a hard length makes the batter decide early. For Buttler, the best method has historically been to play late and use the square boundaries, but that requires patience — exactly what bowlers want to force.\n\nFor PBKS, the decision is strategic: do you let Buttler take Rashid on to swing the game, or do you ask him to rotate and keep wickets intact for a late surge? The venue’s death run rate suggests there is value in preserving wickets for overs 16–20, especially if dew arrives.\n\nFor GT, Rashid’s optimal usage is not simply ‘bowl in the middle’. If Buttler is set, use Rashid immediately to pull the scoring rate back. If Buttler is new, use Rashid to hunt the wicket. Either way, this matchup is the axis around which GT can control the chase shape.\n\n",
    "relatedPlayerIds": [
      25,
      12
    ],
    "matchId": 4
  },
  {
    "id": 7,
    "slug": "ipl-2026-opening-week-phase-theory",
    "title": "IPL 2026 opening week: why phase plans beat par scores",
    "subtitle": "Powerplay stability + death overs skill is the most repeatable winning model.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Season",
      "Trends",
      "Phase play"
    ],
    "featured": false,
    "content": "Three matches into IPL 2026, the early signal is clear: teams are winning the tournament’s first week by owning phases, not by chasing a mythical ‘par score’. The best sides have a plan for overs 1–6 and 16–20 — and they don’t confuse aggression with control.\n\nLook at Mullanpur’s phase scoring template: powerplay at 8.6 rpo and death at 10.2 rpo. That spread is typical of modern T20, and it tells you where the leverage sits. If you lose the powerplay, you can still recover; if you lose the death, you almost always lose the match.\n\nThe meta implication: squads that have two genuine death skills (yorker + slower-ball, or pace + angle) will outperform squads that stack batting at the expense of bowling variety. Similarly, batting line-ups need at least one ‘anchor-accelerator’ who can keep the innings stable without killing the ceiling.\n\nFor fans, this is why 220 chases and 127 defences can both happen in the same week. Conditions change, but phase execution scales across surfaces. The most reliable KPI to track is: who wins the last five overs in net runs, and who can keep powerplay wickets in hand.\n\nExpect teams to respond by front-loading spin in overs 7–12 to buy overs for death specialists, and by using matchups more aggressively (one over of a part-timer only if the boundary map allows it). The tournament is young, but the pattern is not.\n\n",
    "relatedPlayerIds": [
      2,
      12,
      17
    ]
  },
  {
    "id": 8,
    "slug": "ipl-2026-rankings-early-signal-role-clarity",
    "title": "IPL 2026 rankings: the early signal to trust (role clarity)",
    "subtitle": "Week-one points are noisy; roles and phase plans are not.",
    "category": "rankings",
    "author": "CricDNA Insights",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Rankings",
      "Week 1",
      "Roles"
    ],
    "featured": false,
    "content": "Early IPL tables lie — but they still reveal one truth: teams that have defined roles look sharpest in week one. The sides that know their top-6 batting lanes and their 16–20 bowling lanes start faster than teams still experimenting.\n\nFrom the first three matches, the consistent pattern has been powerplay clarity. When batters identify whether the new ball is moving, they either take the low-risk 45/1 or they cash in for 60/0. Indecision creates the worst outcome: 35/2 and a forced rebuild.\n\nFor bowlers, the best attacks have varied pace more than line. That’s an important detail: modern batters can hit ‘good line’ if the pace is predictable, but they struggle when the same line arrives at different speeds. This is especially true when defending low totals.\n\nWhat to watch next: can teams sustain their early identity once venues change? Mullanpur’s balanced wicket will reward disciplined bowling and adaptable batting. A team that wins here with a coherent plan often travels well.\n\nTreat this as a ‘rankings’ lens: role clarity is the early-season superpower. The points will follow.\n\n",
    "relatedPlayerIds": [
      13,
      5,
      12
    ]
  },
  {
    "id": 9,
    "slug": "pbks-vs-gt-tactical-angle-matchups",
    "title": "PBKS vs GT tactical angle: winning the dot-ball battle in the middle",
    "subtitle": "On balanced decks, dots in overs 7–12 decide the death overs freedom.",
    "category": "analysis",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "PBKS",
      "GT",
      "Middle overs"
    ],
    "featured": false,
    "content": "One underrated theme for PBKS vs GT is how each side handles left-right combinations. On balanced decks, bowling attacks that can change angle without changing personnel gain a massive matchup edge.\n\nGT’s defensive strength is typically spin control in the middle, which forces batters to take risk against pace later. PBKS should aim to disrupt that by forcing Rashid Khan to bowl to his less-preferred boundary dimensions (long-off/long-on placements) and by keeping strike rotation high.\n\nFor PBKS, the best approach is to avoid a ‘two hitters, one anchor’ top-three that can be choked. Instead, they need one player (likely Gill if he’s in the game narrative as a GT anchor) to play the stabilizer role while the other end attacks matchups.\n\nThe micro KPI: dot-ball percentage between overs 7–12. If PBKS face too many dots, Rashid’s over becomes two overs, and the endgame becomes harder. If PBKS can keep dots under control, the death overs become a high-variance contest — and that usually favors the side with deeper batting.\n\nExpect both captains to delay their fastest bowler until they see whether the pitch is skidding. The side that reacts first to grip/skid will win the tactical battle.\n\n",
    "relatedPlayerIds": [
      5,
      12,
      17,
      25
    ],
    "matchId": 4
  },
  {
    "id": 10,
    "slug": "mullanpur-venue-snapshot-par-score",
    "title": "Mullanpur venue snapshot: the numbers that set par for PBKS vs GT",
    "subtitle": "A quick data-driven cheat sheet for Match 4 conditions.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-31",
    "readTime": "5 min",
    "tags": [
      "Venue",
      "Mullanpur",
      "Stats"
    ],
    "featured": false,
    "content": "If you only have 30 seconds before PBKS vs GT, this is the venue snapshot that matters. Mullanpur is not a 200-par ground; it is a ‘shape’ ground where par depends on wickets in hand.\n\nAverage first innings: 163. Average second innings: 155. Toss winners have fielded first 70.0% of the time. The bat-first win percentage is 50.0%.\n\nThe actionable interpretation is: aim for 170–180 if you can keep 8 wickets at the 12-over mark; otherwise 160 can still be competitive if you have variation bowling. If dew arrives, push the target higher or prioritize chasing.\n\nThis is also why team selection matters here: pick bowlers with at least two speeds, and batters who can rotate strike without taking low-percentage risks.\n\n",
    "relatedPlayerIds": [
      17,
      12,
      30
    ],
    "chartData": [
      {
        "label": "Avg 1st inns",
        "value": 163.0,
        "color": "#ff6b6b"
      },
      {
        "label": "Avg 2nd inns",
        "value": 155.4,
        "color": "#4dabf7"
      },
      {
        "label": "PP RPO",
        "value": 8.61,
        "color": "#51cf66"
      },
      {
        "label": "Death RPO",
        "value": 10.18,
        "color": "#fcc419"
      }
    ],
    "dataTable": {
      "headers": [
        "Metric",
        "Value"
      ],
      "rows": [
        [
          "Matches in dataset",
          "10"
        ],
        [
          "Bat 1st win %",
          "50.0%"
        ],
        [
          "Toss field %",
          "70.0%"
        ],
        [
          "Highest score",
          "219"
        ],
        [
          "Lowest score",
          "95"
        ]
      ]
    },
    "matchId": 4
  }
]

export const analyticsCards: AnalyticsCard[] = [
  {
    "type": "matchup",
    "title": "Buttler vs Rashid (T20 H2H)",
    "value": "30 runs / 4 outs",
    "description": "50 balls, SR 60.0, dot% 46.0.",
    "playerIds": [
      25,
      12
    ],
    "teamColors": [
      "#d71920",
      "#1a3c8b"
    ]
  },
  {
    "type": "stat",
    "title": "Mullanpur scoring baseline",
    "value": "163/155",
    "description": "Avg 1st/2nd inns. Death RPO 10.2; bat-first win% 50.0."
  },
  {
    "type": "player",
    "title": "Kohli vs Bumrah (T20 H2H)",
    "value": "150 runs",
    "description": "101 balls, 5 outs, SR 148.51",
    "playerIds": [
      1,
      2
    ]
  }
]
