export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface DataTable {
  headers: string[];
  rows: string[][];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: "pitch-report" | "toss-report" | "match-preview" | "rankings" | "analysis";
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
  relatedPlayerIds: number[];
  chartData?: ChartData[];
  dataTable?: DataTable;
  matchId?: number;
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
    slug: "ipl-2026-opening-weekend-analytics-cheat-sheet",
    title: "IPL 2026 Opening Weekend: An Analytics Cheat Sheet for Matches 1\u20133",
    subtitle: "Three venues, three different games \u2014 and the same underlying math: minimize bad overs, maximize repeatable edges.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "ipl-2026",
      "opening-weekend",
      "analytics",
      "match-preview"
    ],
    featured: true,
    content: "IPL 2026 starts with a three-match sample that tells you almost everything about how this season will be won: a boundary-fest in Bengaluru, a dew-influenced coin flip in Mumbai, and a spin-versus-intent test at a neutral Guwahati venue.\n\nIf you want a data-first way to watch opening weekend, don\u2019t ask \u2018who has the stars?\u2019 Ask two quieter questions: (1) which teams can create *optionality* (multiple scoring plans) when Plan A fails, and (2) which bowling attacks can force the opponent into low-percentage shots *before* the death overs.\n\nBelow is a match-by-match analytical cheat sheet built from CricDNA\u2019s venue splits, toss tendencies, and batter-vs-bowler history. The goal isn\u2019t to predict three winners \u2014 it\u2019s to identify the repeatable edges that will compound across a long league phase.\n\n## Match 1: RCB vs SRH (Chinnaswamy) \u2014 variance compression\nAt Bengaluru, the average first-innings score in CricDNA\u2019s venue sample is 189.1, with a powerplay run rate of 8.51 and a death-overs run rate of 10.97. In plain language: you don\u2019t \u2018save it for the end\u2019 here \u2014 the end is already saving itself.\n\n## Match 2: MI vs KKR (Wankhede) \u2014 a venue that rewards chasing intent\nWankhede\u2019s sample trends closer to 176.8 first-innings average, but with a strong chasing lean (bat-second wins: 31 of 52 in the Mumbai-tagged record). The practical edge is not just dew \u2014 it\u2019s the ability to keep boundary access late without reckless risk.\n\n## Match 3: RR vs CSK (Guwahati) \u2014 new ground, old matchups\nWe don\u2019t have a dedicated Barsapara split in CricDNA\u2019s venue table, so treat this match as a game-theory problem: RR\u2019s top order wants high-tempo powerplay acceleration; CSK wants to drag the game into a decision tree where spin and matchups matter.\n\n### The weekend thesis\nOpening weekend is where teams reveal whether they are optimizing for \u2018best XI\u2019 or for \u2018best portfolio\u2019. Watch who can pivot: who has a second gear with bat, and who has a second plan with ball. That adaptability is what analytics loves \u2014 because it tends to persist.",
    relatedPlayerIds: [
      1,
      2,
      7,
      13,
      18
    ],
    chartData: [
      {
        label: "Chinnaswamy avg 1st inns",
        value: 189.1,
        color: "#8b5cf6"
      },
      {
        label: "Wankhede avg 1st inns",
        value: 176.8,
        color: "#10b981"
      },
      {
        label: "Chasing bias (Wankhede bat-2 wins)",
        value: 59.6,
        color: "#f59e0b"
      }
    ],
    dataTable: {
      headers: [
        "Match",
        "Key edge",
        "What to watch in 5 overs"
      ],
      rows: [
        [
          "RCB vs SRH",
          "Boundary access early + late",
          "Powerplay wickets vs run rate"
        ],
        [
          "MI vs KKR",
          "Chasing calibration",
          "Can KKR bat deep enough to attack at 16-20?"
        ],
        [
          "RR vs CSK",
          "Matchups and spin control",
          "RR intent vs CSK squeeze overs"
        ]
      ]
    }
  },
  {
    id: 2,
    slug: "chinnaswamy-pitch-report-rcb-vs-srh-ipl-2026",
    title: "Chinnaswamy Pitch Report (RCB vs SRH): Why Par Is a Distribution, Not a Number",
    subtitle: "At Bengaluru, the run rate is a baseline; wicket-timing is the variable that decides outcomes.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "pitch-report",
      "rcb",
      "srh",
      "chinnaswamy",
      "ipl-2026"
    ],
    featured: false,
    content: "The Chinnaswamy isn\u2019t a pitch you \u2018read\u2019 \u2014 it\u2019s a pitch you *price*. The ground shrinks error bars. When run rates are structurally high, the real contest becomes wicket-timing and matchup sequencing.\n\nCricDNA\u2019s venue record for **M Chinnaswamy Stadium, Bengaluru** shows an average first-innings score of **189.1** across **19** matches, with a powerplay run rate of **8.51** and a death-overs run rate of **10.97**. If you\u2019re defending anything under ~185, you\u2019re betting on wickets, not control.\n\n### Phase model\nChinnaswamy\u2019s middle overs (7\u201315) still tick at **8.86 rpo** in the dataset \u2014 which matters because it collapses the traditional \u2018hold back for the death\u2019 plan. Bowling teams need wicket-taking options through the middle, or the chase becomes a smooth curve.\n\n### What a \u2018par\u2019 score really means\nPar isn\u2019t a number; it\u2019s a distribution. On a ground with a historical high score of **287**, the tail outcomes matter. Analytics tells you to build totals that protect you from a 10.8\u201311.5 rpo finishing burst.\n\n### Tactical note\nIf you win the toss, CricDNA\u2019s toss table at Chinnaswamy shows teams chose to field first **57 of 65** times, and the win rate when fielding first sits at **56.1%**. Chasing isn\u2019t guaranteed \u2014 but it is the dominant strategic preference because it gives you clarity on risk.\n\n### CricDNA call\nExpect both sides to treat powerplay wickets as the currency. The team that keeps its top three intact through 8 overs will usually post the only total that matters: the one that forces the opponent to take low-percentage shots earlier than planned.",
    relatedPlayerIds: [
      1,
      6,
      8,
      9
    ],
    chartData: [
      {
        label: "Avg 1st inns",
        value: 189.1,
        color: "#8b5cf6"
      },
      {
        label: "Powerplay rpo",
        value: 8.51,
        color: "#10b981"
      },
      {
        label: "Death rpo",
        value: 10.97,
        color: "#ef4444"
      }
    ],
    dataTable: {
      headers: [
        "Metric",
        "Value",
        "Implication"
      ],
      rows: [
        [
          "Matches (sample)",
          "19",
          "Small sample; think tendencies not laws"
        ],
        [
          "Avg 1st inns",
          "189.1",
          "180 is below mean; 200 is a safer target"
        ],
        [
          "Toss: field first % (historical)",
          "100%",
          "Teams overwhelmingly prefer chasing in this dataset"
        ]
      ]
    },
    matchId: 1
  },
  {
    id: 3,
    slug: "toss-analysis-rcb-vs-srh-chinnaswamy-ipl-2026",
    title: "Toss Analysis (RCB vs SRH): Why Captains Chase in Bengaluru",
    subtitle: "Fielding first is the default because it buys clarity in a venue that punishes uncertainty.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "toss-report",
      "rcb",
      "srh",
      "chinnaswamy",
      "ipl-2026"
    ],
    featured: false,
    content: "At some venues, the toss is noise. At Bengaluru, the toss is information \u2014 not because it guarantees a win, but because it dictates the optimal strategy tree.\n\nCricDNA\u2019s Chinnaswamy toss profile: **65 matches**, with teams choosing to **field first 57 times** (87.7%). When captains field first, they\u2019ve won **32** of those **57** games (56.1%). When they bat first, it\u2019s **3 wins in 8** (37.5%).\n\n### The analytics logic\nChasing gives you a real-time risk meter. On a high-scoring ground, you want to know whether you\u2019re in a 9.5 rpo game or an 11 rpo game *before* you spend your wicket resources.\n\n### What changes the decision\nIf you believe your bowling attack can create powerplay wickets (swing/left-arm angles/elite death skills), batting first becomes more attractive because you can defend with scoreboard pressure. Without that wicket-taking edge, defending feels like trying to stop a tide with a spreadsheet.\n\n### CricDNA call\nExpect the toss winner to field, unless they think they can \u2018win two phases\u2019 with the ball (powerplay + death). If they can\u2019t, chasing is the rational default because it narrows uncertainty \u2014 and uncertainty is the real opponent in a Chinnaswamy match.",
    relatedPlayerIds: [
      1,
      6
    ],
    chartData: [
      {
        label: "Toss: chose field first",
        value: 57,
        color: "#10b981"
      },
      {
        label: "Toss: chose bat first",
        value: 8,
        color: "#f59e0b"
      }
    ],
    dataTable: {
      headers: [
        "Decision",
        "Count",
        "Win %"
      ],
      rows: [
        [
          "Field first",
          "57",
          "56.1%"
        ],
        [
          "Bat first",
          "8",
          "37.5%"
        ]
      ]
    },
    matchId: 1
  },
  {
    id: 4,
    slug: "rcb-vs-srh-match-preview-key-matchups-ipl-2026",
    title: "RCB vs SRH Match Preview: The Matchups That Actually Matter at Chinnaswamy",
    subtitle: "In a high-run venue, the winner is usually the side that creates wicket pressure without losing boundary control.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "match-preview",
      "rcb",
      "srh",
      "ipl-2026",
      "chinnaswamy"
    ],
    featured: false,
    content: "RCB vs SRH at Chinnaswamy is a match where \u2018form\u2019 is less predictive than \u2018fit\u2019. The ground amplifies boundary-hitters, but it also punishes line-and-length bowlers who rely on mistake-induction.\n\n### Matchup to watch: Kohli vs Bhuvneshwar\nCricDNA\u2019s batter-vs-bowler history has **V Kohli** scoring **129 off 91** balls against **B Kumar**, striking at **141.76**, but with **4 dismissals**. That\u2019s the shape of a high-value matchup: runs flow, but the wicket is on the table.\n\n### What RCB wants\nRCB\u2019s best path is to turn the powerplay into a platform without surrendering a collapse probability. On this ground, 45/1 can be \u2018better\u2019 than 60/3 \u2014 because wicket scarcity is what drives 200+.\n\n### What SRH wants\nSRH will try to steal overs by forcing right-handers into tough angles and then cashing in at the death. The team that wins the middle overs without losing too much boundary access usually controls the chase.\n\n### CricDNA call\nThis game will be decided by one question: can the bowling side force two wickets before the 10-over mark? At Chinnaswamy, that\u2019s often the difference between a normal big score and a truly unchaseable one.",
    relatedPlayerIds: [
      1,
      6,
      8,
      9,
      12
    ],
    chartData: [
      {
        label: "Kohli vs B Kumar strike rate",
        value: 141.76,
        color: "#10b981"
      },
      {
        label: "Dismissals in matchup",
        value: 4,
        color: "#ef4444"
      },
      {
        label: "Dot ball %",
        value: 44,
        color: "#f59e0b"
      }
    ],
    dataTable: {
      headers: [
        "Matchup",
        "Balls",
        "Runs",
        "SR",
        "Dismissals"
      ],
      rows: [
        [
          "Kohli vs B Kumar",
          "91",
          "129",
          "141.76",
          "4"
        ]
      ]
    },
    matchId: 1
  },
  {
    id: 5,
    slug: "wankhede-pitch-report-mi-vs-kkr-ipl-2026",
    title: "Wankhede Pitch Report (MI vs KKR): Why the Last 30 Balls Matter More Here",
    subtitle: "Mumbai rewards batting depth; the death overs are where totals become defendable or disposable.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "pitch-report",
      "mi",
      "kkr",
      "wankhede",
      "ipl-2026"
    ],
    featured: false,
    content: "Wankhede is the rare IPL venue where the expected value of aggression rises as the game progresses. That\u2019s not romantic \u2014 it\u2019s arithmetic.\n\nCricDNA\u2019s Wankhede (Mumbai-tagged) record shows an average first-innings score of **176.8** across **52** matches, with a powerplay run rate of **7.54**, middle-overs run rate of **8.03**, and death-overs run rate of **10.76**. If you bat deep, your finishing ceiling is real.\n\n### What a \u2018good\u2019 1st innings looks like\nAt Wankhede, the difference between 175 and 190 is not just 15 runs \u2014 it\u2019s the point at which a chasing team needs a risky over. Analytics says you aim for a total that forces at least one low-probability decision in overs 13\u201317.\n\n### Bowling strategy\nBecause death overs inflate, you need to earn overs \u2018below par\u2019 earlier: swing up front, hard lengths through the middle, and matchups that increase dot-ball percentage.\n\n### CricDNA call\nExpect both captains to treat 180 as a baseline and 195 as an advantage. The side with the better 16\u201320 overs batting depth should be the team with the highest win probability swing in the final 30 balls.",
    relatedPlayerIds: [
      2,
      13,
      23
    ],
    chartData: [
      {
        label: "Avg 1st inns",
        value: 176.8,
        color: "#8b5cf6"
      },
      {
        label: "Middle rpo",
        value: 8.03,
        color: "#10b981"
      },
      {
        label: "Death rpo",
        value: 10.76,
        color: "#ef4444"
      }
    ],
    dataTable: {
      headers: [
        "Phase",
        "RPO",
        "Interpretation"
      ],
      rows: [
        [
          "Powerplay (1-6)",
          "7.54",
          "Not a slog-fest; build wickets-in-hand"
        ],
        [
          "Middle (7-15)",
          "8.03",
          "Boundary access matters; avoid dot-ball clusters"
        ],
        [
          "Death (16-20)",
          "10.76",
          "Finishing skill converts depth into wins"
        ]
      ]
    },
    matchId: 2
  },
  {
    id: 6,
    slug: "toss-analysis-mi-vs-kkr-wankhede-ipl-2026",
    title: "Toss Analysis (MI vs KKR): Wankhede Is 50-50 \u2014 So Stop Overweighting the Coin",
    subtitle: "The numbers say the toss is near-neutral; the real edge is creating rare low-scoring overs.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "toss-report",
      "mi",
      "kkr",
      "wankhede",
      "ipl-2026"
    ],
    featured: false,
    content: "Wankhede\u2019s toss narrative is often simplified to \u2018dew\u2019. The data says something subtler: captains still prefer to chase, but the win edge is close to neutral \u2014 meaning execution beats the coin.\n\nIn CricDNA\u2019s Wankhede toss table (73 matches), teams chose to field first **51** times and won **26** of them (51.0%). Teams batting first won **11** of **22** (50.0%). That\u2019s almost a perfect split.\n\n### So why do captains still chase?\nBecause chasing is a risk-management tool. It reduces uncertainty about required run rate and lets you time your aggression to conditions.\n\n### When batting first is optimal\nIf you believe your bowling attack can hold the death overs below the venue\u2019s inflated baseline (CricDNA\u2019s death rpo at the Mumbai-tagged record is 10.76), setting a target becomes attractive: you can force the chasing team to take risk earlier.\n\n### CricDNA call\nThe toss won\u2019t decide this game. The decisive lever will be whether either side can manufacture two \u2018cheap\u2019 overs (an over under 6 rpo, or a wicket-maiden style over) across the middle. At Wankhede, those overs are rare \u2014 and therefore valuable.",
    relatedPlayerIds: [
      2,
      13,
      23
    ],
    chartData: [
      {
        label: "Field first win %",
        value: 51,
        color: "#10b981"
      },
      {
        label: "Bat first win %",
        value: 50,
        color: "#f59e0b"
      }
    ],
    dataTable: {
      headers: [
        "Decision",
        "Count",
        "Win %"
      ],
      rows: [
        [
          "Field first",
          "51",
          "51.0%"
        ],
        [
          "Bat first",
          "22",
          "50.0%"
        ]
      ]
    },
    matchId: 2
  },
  {
    id: 7,
    slug: "mi-vs-kkr-match-preview-ipl-2026-wankhede",
    title: "MI vs KKR Match Preview: Why the Middle Overs Decide a Venue Built for Finishes",
    subtitle: "Wankhede inflates the death overs; the side that wins overs 7\u201312 often controls the endgame.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "match-preview",
      "mi",
      "kkr",
      "ipl-2026",
      "wankhede"
    ],
    featured: false,
    content: "MI vs KKR is a clash of styles: MI\u2019s historical blueprint is to win the last five overs with bat and ball; KKR\u2019s best version wins the middle overs through spin control and matchup pressure.\n\n### The Wankhede constraint\nOn this venue, the death overs inflate toward 10.76 rpo in CricDNA\u2019s record. That makes \u2018having the better death bowler\u2019 a larger edge than usual \u2014 because the baseline is already high.\n\n### What MI wants\nMI\u2019s ideal script: keep wickets in hand through 12, then cash in. The analytics logic is simple: a team with depth can turn a 155/4 at 15 overs into 195 \u2014 and 195 is where chasing becomes psychologically expensive.\n\n### What KKR wants\nKKR\u2019s best path is to turn the game into a sequence of uncomfortable decisions for MI\u2019s batters: spin into the pitch, pace off, deny the short boundary pockets. If they can keep the required run rate climbing by 0.3\u20130.5 each over, the last two overs become forced error territory.\n\n### CricDNA call\nWatch overs 7\u201312. If KKR can win that phase without losing wicket-taking threat, they can neutralize Wankhede\u2019s finishing bias. If they can\u2019t, the venue will do half of MI\u2019s work for them.",
    relatedPlayerIds: [
      2,
      3,
      11,
      13,
      23,
      27
    ],
    matchId: 2
  },
  {
    id: 8,
    slug: "barsapara-guwahati-pitch-report-rr-vs-csk-ipl-2026",
    title: "Barsapara (Guwahati) Pitch Report (RR vs CSK): How to Preview a Venue Without Overfitting",
    subtitle: "When venue history is thin, lean on phase control and matchup math \u2014 the edges that travel.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "pitch-report",
      "rr",
      "csk",
      "guwahati",
      "ipl-2026"
    ],
    featured: false,
    content: "RR vs CSK is being played at Barsapara Stadium, Guwahati \u2014 and CricDNA\u2019s venue dataset doesn\u2019t include a dedicated Barsapara split. That\u2019s a feature, not a bug: uncertainty forces you to focus on *portable* truths.\n\nPortable truth #1: teams that control the middle overs control T20 games. Portable truth #2: in a new-ish venue, toss decisions tend to mirror what captains believe about their own squad more than what the ground \u2018is\u2019.\n\n### A practical way to think about \u2018par\u2019 here\nInstead of chasing a mythical venue par score, build a par score from phases: powerplay intent without collapses, middle overs without dot-ball clusters, and a death overs plan that doesn\u2019t rely on low-percentage hitting.\n\n### Squad fit\nRR\u2019s ceiling is their top-order tempo; CSK\u2019s edge is their ability to create matchup pressure with spin and then win the game with experience at the margins.\n\n### CricDNA call\nTreat the first innings as information-gathering. The side that adapts fastest \u2014 lengths, pace, matchups, batting gears \u2014 will gain an edge bigger than any pre-game \u2018pitch report\u2019 could offer.",
    relatedPlayerIds: [
      7,
      10,
      14,
      18,
      20,
      25
    ],
    matchId: 3
  },
  {
    id: 9,
    slug: "rr-vs-csk-match-preview-jadeja-matchups-ipl-2026",
    title: "RR vs CSK Match Preview: The Jadeja Matchups That Can Flip the Middle Overs",
    subtitle: "Jadeja doesn\u2019t just take wickets; he changes what opponents think is a good shot.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "match-preview",
      "rr",
      "csk",
      "ipl-2026",
      "matchups"
    ],
    featured: false,
    content: "If Chinnaswamy is about run rate and Wankhede is about finishing, RR vs CSK is about matchups. CSK\u2019s advantage has often been their ability to create \u2018bad overs\u2019 for opponents \u2014 overs where the expected value of hitting drops.\n\n### Matchup 1: Buttler vs Jadeja\nCricDNA\u2019s batter-vs-bowler history: **JC Buttler** has **70 off 53** against **RA Jadeja** (SR 132.08) with **2 dismissals**. That\u2019s not dominance; it\u2019s negotiation.\n\n### Matchup 2: Samson vs Jadeja\n**SV Samson** against **RA Jadeja**: **82 off 63** (SR 130.16) with **3 dismissals** \u2014 plus a heavy six-hitting profile. The risk is visible: Samson can break an over, but Jadeja can also buy a wicket.\n\n### What RR wants\nRR wants to keep the right-hand/left-hand mix flexible so CSK can\u2019t lock in one spin plan. If RR is forced into predictable sequencing, the middle overs become a squeeze.\n\n### What CSK wants\nCSK will try to \u2018price\u2019 RR\u2019s aggression: offer a shot that looks available, but increases dismissal probability. That\u2019s the invisible art analytics tries to quantify.\n\n### CricDNA call\nThe decisive battle is whether RR can maintain boundary access in overs 7\u201315 without donating wickets. If they can, they\u2019ll turn this into a 200 chase game. If they can\u2019t, CSK will turn it into a 165 grind \u2014 and win in the margins.",
    relatedPlayerIds: [
      7,
      10,
      14,
      18,
      20,
      25
    ],
    chartData: [
      {
        label: "Buttler SR vs Jadeja",
        value: 132.08,
        color: "#10b981"
      },
      {
        label: "Samson SR vs Jadeja",
        value: 130.16,
        color: "#8b5cf6"
      },
      {
        label: "Dismissals (combined)",
        value: 5,
        color: "#ef4444"
      }
    ],
    dataTable: {
      headers: [
        "Matchup",
        "Balls",
        "Runs",
        "SR",
        "Dismissals"
      ],
      rows: [
        [
          "Buttler vs Jadeja",
          "53",
          "70",
          "132.08",
          "2"
        ],
        [
          "Samson vs Jadeja",
          "63",
          "82",
          "130.16",
          "3"
        ]
      ]
    },
    matchId: 3
  },
  {
    id: 10,
    slug: "ipl-2026-pre-season-power-rankings-priors",
    title: "IPL 2026 Power Rankings (Pre-Season Priors): Rank the Options, Not the Names",
    subtitle: "Before ball one, rank squads by optionality: depth, variety, and repeatable phase control.",
    category: "rankings",
    author: "CricDNA Analytics",
    publishedAt: "2026-03-27T13:00:00Z",
    readTime: "4 min read",
    tags: [
      "rankings",
      "ipl-2026",
      "power-rankings",
      "analysis"
    ],
    featured: false,
    content: "Power rankings before ball one are always wrong \u2014 which is why they\u2019re useful. They capture your priors, and priors are what you update when reality arrives.\n\nThis is a CricDNA-style pre-season ranking built on one principle: in T20, **options** beat **specialists** across a long season. Batting depth creates insurance against variance; bowling variety creates leverage against matchups.\n\n### How to read these ranks\nThey are not \u2018best XI\u2019 lists. They are *portfolio* scores: how many different game states can a squad win? Can they defend 160? Can they chase 210? Can they win when a star has an off night?\n\n### The opening-weekend watchlist\nUse matches 1\u20133 as your first update step. If a team shows (a) middle-overs control and (b) a repeatable death plan, their title probability should move immediately \u2014 even if they lose a close game.\n\n### CricDNA call\nAfter opening weekend, update aggressively. Early-season narratives are cheap; early-season signal about roles, sequencing, and phase control is not.",
    relatedPlayerIds: [
      1,
      2,
      6,
      14,
      18
    ],
    dataTable: {
      headers: [
        "Tier",
        "Teams (prior)",
        "Why"
      ],
      rows: [
        [
          "Tier 1",
          "MI, CSK",
          "Depth + role clarity tends to travel"
        ],
        [
          "Tier 2",
          "RCB, SRH, KKR",
          "High ceiling; need phase control to stabilize"
        ],
        [
          "Tier 3",
          "RR, GT, DC, LSG, PBKS",
          "More variance; need early role-definition"
        ]
      ]
    }
  }
];


export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Opening weekend is a three-venue stress test",
    value: "Matches 1–3",
    description: "Bengaluru rewards boundary access, Mumbai rewards finishing depth, and Guwahati rewards matchup discipline.",
  },
  {
    type: "matchup",
    title: "Kohli vs Bhuvneshwar (historical)",
    value: "SR 141.8 | 4 outs",
    description: "Runs flow, but the wicket is on the table — a classic high-value powerplay battle.",
    playerIds: [1],
  },
  {
    type: "player",
    title: "Death overs inflate at both big venues",
    value: "10+ rpo",
    description: "If you bat deep, your ceiling rises; if you bowl well late, your leverage is bigger than usual.",
    playerIds: [2,18],
  },
];
