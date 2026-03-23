export interface PlayerToWatch {
  playerId: number;
  team: string;
  reason: string;
  form: "hot" | "warm" | "cold";
  keyMetric: string;
  matchupEdge: string;
}

export interface MatchPreview {
  matchId: number;
  headline: string;
  narrative: string;
  keyBattles: string[];
  venueInsight: string;
  playersToWatch: PlayerToWatch[];
  prediction: string;
}

export const matchPreviews: MatchPreview[] = [
  {
    "matchId": 1,
    "headline": "Defending Champions RCB Open Campaign Against Explosive SRH",
    "narrative": "The IPL 2026 season kicks off with a blockbuster as defending champions Royal Challengers Bengaluru host Sunrisers Hyderabad at the Chinnaswamy. RCB rode an incredible wave of momentum last season to claim their maiden title, and the pressure to defend will be immense. SRH, with their brand of aggressive batting led by Travis Head and Heinrich Klaasen, will look to spoil the party on what promises to be a flat, high-scoring Bengaluru deck.",
    "keyBattles": [
      "Kohli vs Cummins — the ultimate Test of intent vs discipline",
      "Phil Salt vs Harshal Patel — explosive opener meets canny death-bowler",
      "Hazlewood vs Head — Aussie teammates turned rivals in a battle of precision vs aggression"
    ],
    "venueInsight": "The Chinnaswamy is historically one of the highest-scoring grounds in the IPL. Short straight boundaries and a flat batting surface mean scores of 180+ are par. Dew tends to play a role in evening matches, making chasing slightly favorable. The ground has a 56% win rate for teams batting second in the last three seasons.",
    "playersToWatch": [
      {
        "playerId": 1,
        "team": "RCB",
        "reason": "Kohli returns to the Chinnaswamy as a title-winning hero. Last season he scored 741 runs at a strike rate of 154.7, including that iconic unbeaten 92 in the final. He'll be hungry to start the defense with a statement innings, especially against Cummins' pace attack.",
        "form": "hot",
        "keyMetric": "741 runs in IPL 2025 at SR 154.7",
        "matchupEdge": "Averages 42.3 against SRH at home — his favorite opposition at this ground"
      },
      {
        "playerId": 8,
        "team": "SRH",
        "reason": "Travis Head comes in fresh from an outstanding T20 World Cup 2026 campaign where he was Australia's leading run-scorer. His ultra-aggressive approach in the powerplay makes him the perfect antidote to Chinnaswamy pressure — he'll look to take the attack to RCB's new-ball bowlers from ball one.",
        "form": "hot",
        "keyMetric": "Strike rate of 167 in T20 WC 2026",
        "matchupEdge": "Left-handers have averaged 38.5 against RCB's bowling in the powerplay"
      },
      {
        "playerId": 9,
        "team": "SRH",
        "reason": "Klaasen was the most destructive middle-order batter in IPL 2025, dismantling spin and pace alike in the death overs. On a Chinnaswamy deck with short boundaries, his ability to clear the ropes makes him SRH's trump card. Expect fireworks if he gets going.",
        "form": "hot",
        "keyMetric": "SR of 183 in death overs (16-20) last season",
        "matchupEdge": "Averages 55 vs spin in IPL — a nightmare for Krunal Pandya"
      },
      {
        "playerId": 16,
        "team": "RCB",
        "reason": "Phil Salt has been in sensational form across T20 leagues worldwide. His aggressive intent in the powerplay — targeting the off-side corridor with clean hitting — gives RCB explosive starts. Against SRH's pace attack, his ability to dominate the hard ball will be crucial.",
        "form": "warm",
        "keyMetric": "Powerplay SR of 162 across T20 leagues in 2025",
        "matchupEdge": "Strong record against right-arm pace — SR of 155 vs Cummins/Carse types"
      },
      {
        "playerId": 6,
        "team": "SRH",
        "reason": "Captain Cummins leads from the front with both bat and ball. His ability to bowl tight lines in the death overs while also contributing crucial runs at 7 or 8 makes him the most complete player in this match. He'll set the tone with the new ball against Kohli.",
        "form": "warm",
        "keyMetric": "Economy of 7.9 in IPL death overs since 2024",
        "matchupEdge": "Has dismissed Kohli 4 times in T20s — a key battle"
      },
      {
        "playerId": 29,
        "team": "RCB",
        "reason": "New RCB captain Patidar has been the quiet architect of RCB's transformation. His ability to play the sheet-anchor role while accelerating against spin in the middle overs gives RCB's innings structure. First time captaining in the IPL — his leadership will be tested immediately.",
        "form": "warm",
        "keyMetric": "Average of 38.5 in middle overs (7-15) last season",
        "matchupEdge": "Strong against leg-spin — SR of 148 which neutralizes SRH's spin threats"
      }
    ],
    "prediction": "RCB are slight favorites given home advantage and the momentum of a title defense. However, SRH's top-order firepower — Head, Klaasen, Abhishek Sharma — makes them dangerous on any surface. Expect a high-scoring thriller with 360+ aggregate runs. The toss could be decisive given the dew factor."
  },
  {
    "matchId": 2,
    "headline": "Five-Time Champions MI Host KKR in Wankhede Showdown",
    "narrative": "Mumbai Indians welcome Kolkata Knight Riders to the Wankhede in what promises to be a marquee encounter. MI have rebuilt their squad around Bumrah, Rohit, and SKY, with exciting additions in Will Jacks and Trent Boult. KKR, meanwhile, have gone big with Cameron Green as their record signing. The Wankhede under lights is always a spectacle, and both teams will be desperate to start with a win.",
    "keyBattles": [
      "Bumrah vs Narine — the battle of the two most unique actions in cricket",
      "Rohit vs Pathirana — pace and bounce vs experience and class",
      "Will Jacks vs Varun — power vs mystery spin"
    ],
    "venueInsight": "The Wankhede offers pace and bounce early on, but flattens out as the evening progresses. The short square boundaries favor pull shots and sweeps. Historically, scores of 170-185 are competitive. Dew is a significant factor — teams prefer to chase here, with a 60% second-innings win rate.",
    "playersToWatch": [
      {
        "playerId": 13,
        "team": "MI",
        "reason": "Rohit Sharma at the Wankhede is a different beast. The 38-year-old may be in the twilight of his career, but his pull shot against pace remains one of cricket's great sights. Coming off a quiet 2025, he'll want to prove he's still got the magic at his home ground.",
        "form": "warm",
        "keyMetric": "Average of 33.7 at Wankhede — his highest at any IPL venue",
        "matchupEdge": "Historically dominant against KKR's bowling at home — 4 fifties in last 8 innings"
      },
      {
        "playerId": 2,
        "team": "MI",
        "reason": "Bumrah is the IPL's greatest pace bowler, and there's no debate. His ability to bowl at any phase — powerplay, middle, death — with equal precision makes him MI's most valuable asset. Against KKR's aggressive lineup, he'll be the difference between 160 and 200.",
        "form": "hot",
        "keyMetric": "IPL economy of 6.57 — best among all fast bowlers with 100+ wickets",
        "matchupEdge": "Has dismissed Narine 3 times in T20s and restricts him to SR of 98"
      },
      {
        "playerId": 27,
        "team": "KKR",
        "reason": "Rinku Singh has evolved from a clutch finisher into a complete T20 batter. His ability to play pace and spin with equal fluency in the death overs makes him KKR's most dangerous weapon. If he bats deep, KKR can post or chase anything.",
        "form": "hot",
        "keyMetric": "Average of 52.3 in the death overs since IPL 2023",
        "matchupEdge": "Left-hand bat advantage against MI's right-arm heavy bowling attack"
      },
      {
        "playerId": 23,
        "team": "KKR",
        "reason": "Varun Chakaravarthy's mystery spin could be the deciding factor in the middle overs. At Eden Gardens and Wankhede alike, his ability to extract turn and bounce from flat decks is unmatched. He'll be targeting MI's right-handers through the middle phase.",
        "form": "warm",
        "keyMetric": "Economy of 6.8 in overs 7-15 last season — best among all spinners",
        "matchupEdge": "Has troubled SKY in the past — 3 dismissals in T20 cricket"
      },
      {
        "playerId": 3,
        "team": "MI",
        "reason": "SKY is the world's number one T20I batter and MI's X-factor. His 360-degree strokeplay and ability to innovate against spin make him the most entertaining batter in this lineup. On a Wankhede pitch that rewards audacity, expect him to go big.",
        "form": "warm",
        "keyMetric": "T20I rating of 906 — highest for any batter currently",
        "matchupEdge": "Strong at Wankhede with SR of 158 — plays the short boundaries perfectly"
      }
    ],
    "prediction": "MI have the edge in bowling depth with Bumrah, Boult, and Chahar, but KKR's batting lineup — Narine, Allen, Green, Rinku — is fearless. The Wankhede dew factor could tilt this towards the chasing team. A close, tense finish looks likely."
  },
  {
    "matchId": 3,
    "headline": "Jadeja's RR Take On Samson's CSK in Guwahati",
    "narrative": "An intriguing clash as two players who recently swapped franchises face their former teams. Ravindra Jadeja, now at Rajasthan Royals, hosts Chennai Super Kings in Guwahati, while Sanju Samson — the T20 World Cup 2026 Player of the Tournament — takes the field in CSK yellow for the first time in IPL. The emotional subtext makes this a must-watch early-season fixture.",
    "keyBattles": [
      "Jaiswal vs Khaleel Ahmed — fearless youth vs left-arm swing",
      "Jadeja vs his former CSK teammates — a reunion with a competitive edge",
      "Archer vs Samson — express pace vs world-class timing"
    ],
    "venueInsight": "Barsapara Stadium in Guwahati is a relatively new IPL venue offering good carry for the fast bowlers. The outfield is quick and true, and scores of 165-175 are competitive. Spin tends to play a bigger role in the second half of the match as the pitch dries out. RR will play three home games here before moving to Jaipur.",
    "playersToWatch": [
      {
        "playerId": 7,
        "team": "RR",
        "reason": "Jaiswal has cemented himself as one of the best T20 openers in world cricket. His fearless approach — walking down to fast bowlers and launching them over long-on — sets the tone for RR's innings. At 24, he's entering his prime and could dominate this entire tournament.",
        "form": "hot",
        "keyMetric": "1028 T20I runs in 2025 at SR 152",
        "matchupEdge": "Left-hand bat gives him natural advantage against CSK's right-arm dominant attack"
      },
      {
        "playerId": 20,
        "team": "CSK",
        "reason": "Samson arrives at CSK as the reigning T20 World Cup Player of the Tournament — a man in the form of his life. His wristy flicks and ability to accelerate against spin make him the perfect number one for CSK. Making his debut in yellow, the pressure to perform will be immense.",
        "form": "hot",
        "keyMetric": "Player of the Tournament at T20 WC 2026 — 378 runs at SR 161",
        "matchupEdge": "Brilliant record against spin — exactly what CSK need in the middle overs"
      },
      {
        "playerId": 18,
        "team": "RR",
        "reason": "Jadeja facing his former team for the first time since the shock move to RR. The all-rounder's competitive fire means he'll be desperate to prove a point with both bat and ball. His left-arm spin on a Guwahati surface that grips could be devastating against CSK's right-hand-heavy middle order.",
        "form": "warm",
        "keyMetric": "170+ wickets and 2800+ runs in IPL — true all-format legend",
        "matchupEdge": "Intimate knowledge of CSK's batting lineup — he's trained with them for years"
      },
      {
        "playerId": 5,
        "team": "RR",
        "reason": "Jofra Archer's return to full fitness makes RR's bowling attack formidable. His express pace (145+ kmph), toe-crushing yorkers, and sharp bouncer make him the most threatening death bowler in this match. If he's fully fit, RR have a genuine match-winner.",
        "form": "warm",
        "keyMetric": "Death-over economy of 7.2 when fully fit — among the best ever",
        "matchupEdge": "Raw pace will test CSK's new middle-order batters on a bouncy Guwahati track"
      },
      {
        "playerId": 10,
        "team": "CSK",
        "reason": "Captain Ruturaj carries CSK's batting on his shoulders. His elegant timing and ability to bat deep while maintaining a high strike rate make him the most complete Indian batter in this match. He'll need a big one to set the platform against RR's lethal bowling.",
        "form": "warm",
        "keyMetric": "Orange Cap in IPL 2023 — knows how to dominate a season",
        "matchupEdge": "Strong against pace bowling — SR of 142 against quicks in the powerplay"
      }
    ],
    "prediction": "RR have the slight edge with home advantage (even if Guwahati is a neutral venue) and a stronger bowling attack — Archer, Deshpande, Jadeja, and Bishnoi is a well-rounded combination. CSK's reliance on Samson and Ruturaj at the top makes them vulnerable if those two fall early. Expect a competitive, medium-scoring game."
  },
  {
    "matchId": 4,
    "headline": "Iyer's PBKS Welcome Gill's GT to Mullanpur",
    "narrative": "Punjab Kings, led by the most expensive player in auction history Shreyas Iyer, begin their home campaign against Gujarat Titans. PBKS finished as runners-up in IPL 2025 and will be looking to go one step further. GT, under Shubman Gill's captaincy, bring a balanced squad with Buttler, Rashid Khan, and Rabada providing world-class quality.",
    "keyBattles": [
      "Shreyas Iyer vs Shubman Gill",
      "Arshdeep Singh vs Sai Sudharsan",
      "Marcus Stoinis vs Jos Buttler"
    ],
    "venueInsight": "PCA Stadium in New Chandigarh offers a true batting surface with consistent bounce. Pace bowlers find assistance early, but it's generally a good batting pitch. Scores of 170-180 are competitive, and the ground's short square boundaries favor cross-batted shots.",
    "playersToWatch": [
      {
        "playerId": 211,
        "team": "PBKS",
        "reason": "In excellent form heading into the tournament. Versatile contributor who can bat anywhere from 4 to 7 and bowl 4 overs",
        "form": "hot",
        "keyMetric": "3131+ runs and 86+ wickets in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 210,
        "team": "PBKS",
        "reason": "In excellent form heading into the tournament. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 22.87 with SR of 127.34 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 208,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. 360-degree stroke-maker with an ability to find gaps on both sides",
        "form": "warm",
        "keyMetric": "Average of 48.71 with SR of 131.63 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 116,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "2208+ runs and 73+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 115,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "hot",
        "keyMetric": "Average of 52.5 with SR of 151.29 in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 17,
        "team": "GT",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "warm",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      }
    ],
    "prediction": "A closely contested match with PBKS having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 5,
    "headline": "Pant's LSG Host Axar's DC in Lucknow Derby",
    "narrative": "A fascinating encounter between two squads that have undergone significant overhauls. Rishabh Pant leads LSG with Nicholas Pooran providing explosive middle-order firepower, while Delhi Capitals under Axar Patel boast Mitchell Starc, KL Rahul, and Kuldeep Yadav. The battle of the left-handers — Pant vs Starc — will be box-office.",
    "keyBattles": [
      "Rishabh Pant vs Axar Patel",
      "Mayank Yadav vs KL Rahul",
      "Mitchell Marsh vs Mitchell Starc"
    ],
    "venueInsight": "Ekana Stadium in Lucknow tends to be a slow surface that rewards spin bowling. Scores of 160-170 are often enough. The pitch tends to get slower as the game progresses, making batting first slightly advantageous. Kuldeep and Axar will relish bowling here.",
    "playersToWatch": [
      {
        "playerId": 24,
        "team": "LSG",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "hot",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 180,
        "team": "LSG",
        "reason": "Proven performer in IPL conditions. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "hot",
        "keyMetric": "3601+ runs and 100+ wickets in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 181,
        "team": "LSG",
        "reason": "In excellent form heading into the tournament. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "warm",
        "keyMetric": "Average of 29.89 with SR of 135.13 in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 161,
        "team": "DC",
        "reason": "In excellent form heading into the tournament. Pace battery leader for DC with raw express speed",
        "form": "warm",
        "keyMetric": "66 IPL wickets at economy 7.16",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 162,
        "team": "DC",
        "reason": "Key player for DC with match-winning ability. Death-over specialist with pinpoint yorker accuracy",
        "form": "hot",
        "keyMetric": "114 IPL wickets at economy 7.47",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 26,
        "team": "DC",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "warm",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      }
    ],
    "prediction": "A closely contested match with LSG having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 6,
    "headline": "KKR's Record Signing Green Faces SRH's Power-Hitters",
    "narrative": "Kolkata Knight Riders unveil their record purchase Cameron Green against a Sunrisers Hyderabad side that scored the most runs in IPL history in 2024. KKR's bowling attack of Pathirana, Harshit Rana, and Varun is their biggest strength, while SRH's batting depth — Head, Klaasen, Abhishek, Ishan — makes them the most explosive lineup in the tournament.",
    "keyBattles": [
      "Ajinkya Rahane vs Pat Cummins",
      "Rinku Singh vs Travis Head",
      "Sunil Narine vs Abhishek Sharma"
    ],
    "venueInsight": "Eden Gardens provides pace and bounce that assists fast bowlers, especially in the first innings. The pitch has historically been good for batting under lights. Scores of 175+ are common, and the electric atmosphere adds pressure on visiting teams.",
    "playersToWatch": [
      {
        "playerId": 140,
        "team": "KKR",
        "reason": "Proven performer in IPL conditions. 360-degree stroke-maker with an ability to find gaps on both sides",
        "form": "warm",
        "keyMetric": "Average of 33.4 with SR of 150.86 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 143,
        "team": "KKR",
        "reason": "Key player for KKR with match-winning ability. Consistent performer with a knack for big-match deliveries",
        "form": "warm",
        "keyMetric": "Average of 21.96 with SR of 135.53 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 136,
        "team": "KKR",
        "reason": "Proven performer in IPL conditions. Finisher role — devastating in death overs with unorthodox shot-making",
        "form": "warm",
        "keyMetric": "Average of 72.8 with SR of 126.49 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 96,
        "team": "SRH",
        "reason": "Key player for SRH with match-winning ability. Wily veteran who uses variations and cutters to great effect",
        "form": "warm",
        "keyMetric": "119 IPL wickets at economy 8.35",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 6,
        "team": "SRH",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "hot",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 9,
        "team": "SRH",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "hot",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      }
    ],
    "prediction": "A closely contested match with KKR having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 7,
    "headline": "Chepauk Turning Track Awaits Punjab Kings",
    "narrative": "Chennai Super Kings return to their fortress Chepauk to face Punjab Kings. The slow, spinning Chepauk surface will test PBKS's overseas-heavy batting lineup, while CSK's spinners — Noor Ahmad and Gopal — will be licking their lips. Iyer's ability to play spin will be crucial for PBKS's chances.",
    "keyBattles": [
      "Ruturaj Gaikwad vs Shreyas Iyer",
      "Sanju Samson vs Arshdeep Singh",
      "Shivam Dube vs Marcus Stoinis"
    ],
    "venueInsight": "Chepauk is the IPL's most spin-friendly venue. Low, slow surfaces reward accurate spinners and batters who can sweep and reverse-sweep. Scores of 155-165 are often match-winning. CSK's intimate knowledge of conditions gives them a significant edge.",
    "playersToWatch": [
      {
        "playerId": 36,
        "team": "CSK",
        "reason": "In excellent form heading into the tournament. Swing merchant who thrives with the new ball at the top",
        "form": "hot",
        "keyMetric": "179 IPL wickets at economy 7.61",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 31,
        "team": "CSK",
        "reason": "In excellent form heading into the tournament. Dynamic performer who elevates the team's fielding standards too",
        "form": "hot",
        "keyMetric": "2126+ runs and 61+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 33,
        "team": "CSK",
        "reason": "In excellent form heading into the tournament. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "2731+ runs and 73+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 210,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 22.87 with SR of 127.34 in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 211,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. Versatile contributor who can bat anywhere from 4 to 7 and bowl 4 overs",
        "form": "warm",
        "keyMetric": "3131+ runs and 86+ wickets in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 208,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. 360-degree stroke-maker with an ability to find gaps on both sides",
        "form": "hot",
        "keyMetric": "Average of 48.71 with SR of 131.63 in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      }
    ],
    "prediction": "A closely contested match with CSK having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 8,
    "headline": "Starc's Delhi Welcome Bumrah's Mumbai in Afternoon Thriller",
    "narrative": "The first afternoon match of the season brings together two of the world's best fast bowlers — Mitchell Starc and Jasprit Bumrah. The Delhi heat in April adds another dimension to this contest. Both teams boast deep batting lineups, but the battle of the quicks in the powerplay will likely decide this game.",
    "keyBattles": [
      "Axar Patel vs Hardik Pandya",
      "KL Rahul vs Rohit Sharma",
      "Mitchell Starc vs Suryakumar Yadav"
    ],
    "venueInsight": "Arun Jaitley Stadium in Delhi offers pace and bounce in the powerplay before the surface slows down. In afternoon matches, the ball comes on to the bat nicely, and scores tend to be higher than evening games. Expect a flat pitch that rewards aggressive batting.",
    "playersToWatch": [
      {
        "playerId": 160,
        "team": "DC",
        "reason": "Proven performer in IPL conditions. Consistent performer with a knack for big-match deliveries",
        "form": "hot",
        "keyMetric": "Average of 20.2 with SR of 141.46 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 164,
        "team": "DC",
        "reason": "Proven performer in IPL conditions. Technical batter who adapts well to different surfaces and conditions",
        "form": "warm",
        "keyMetric": "Average of 45.36 with SR of 146.99 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 162,
        "team": "DC",
        "reason": "In excellent form heading into the tournament. Death-over specialist with pinpoint yorker accuracy",
        "form": "warm",
        "keyMetric": "114 IPL wickets at economy 7.47",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 79,
        "team": "MI",
        "reason": "In excellent form heading into the tournament. Death-over specialist with pinpoint yorker accuracy",
        "form": "hot",
        "keyMetric": "129 IPL wickets at economy 7.17",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 13,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 3,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. Impact performer expected to deliver.",
        "form": "hot",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      }
    ],
    "prediction": "A closely contested match with DC having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 9,
    "headline": "Gujarat Giants Host Royals in Ahmedabad Blockbuster",
    "narrative": "A Western Conference showdown as Gujarat Titans host Rajasthan Royals at the magnificent Narendra Modi Stadium. Gill vs Jaiswal is a generational battle between two of India's finest young batters. The depth of both squads — GT's Buttler-Rashid axis vs RR's Archer-Jadeja combination — promises a high-quality contest.",
    "keyBattles": [
      "Shubman Gill vs Yashasvi Jaiswal",
      "Sai Sudharsan vs Riyan Parag",
      "Jos Buttler vs Ravindra Jadeja"
    ],
    "venueInsight": "The Narendra Modi Stadium in Ahmedabad offers a true batting surface with even bounce. The sheer size of the ground means finding the boundary isn't easy, rewarding good running between wickets. Spinners find turn in the second innings, making Rashid Khan dangerous.",
    "playersToWatch": [
      {
        "playerId": 116,
        "team": "GT",
        "reason": "In excellent form heading into the tournament. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "2208+ runs and 73+ wickets in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 25,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 117,
        "team": "GT",
        "reason": "In excellent form heading into the tournament. Powerplay enforcer — extracts movement in the first six overs",
        "form": "warm",
        "keyMetric": "161 IPL wickets at economy 7.92",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 18,
        "team": "RR",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "warm",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 233,
        "team": "RR",
        "reason": "Key player for RR with match-winning ability. Domestic sensation earning first IPL opportunity this season",
        "form": "warm",
        "keyMetric": "Average of 272.0 with SR of 132.57 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 234,
        "team": "RR",
        "reason": "Key player for RR with match-winning ability. Spin wizard who controls the middle overs with flight and guile",
        "form": "warm",
        "keyMetric": "148 IPL wickets at economy 8.71",
        "matchupEdge": "Strong track record against GT in previous encounters"
      }
    ],
    "prediction": "A closely contested match with GT having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 10,
    "headline": "Hyderabad's Batting Monsters Face Pant's Pace Artillery",
    "narrative": "SRH's home debut pits their explosive batting against LSG's fearsome pace attack of Mayank Yadav, Mohammed Shami, and Avesh Khan. The battle between SRH's top order — Head, Abhishek, Klaasen — and LSG's raw pace will be the highlight. Pant's tactical acumen against Cummins' captaincy adds another layer.",
    "keyBattles": [
      "Pat Cummins vs Rishabh Pant",
      "Travis Head vs Mayank Yadav",
      "Abhishek Sharma vs Mitchell Marsh"
    ],
    "venueInsight": "Hyderabad's surface is batting-friendly with good carry for fast bowlers. Evening games with dew make chasing favorable. The ground's large straight boundaries mean mishits don't always go for six, rewarding bowlers who bowl a good length.",
    "playersToWatch": [
      {
        "playerId": 21,
        "team": "SRH",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "warm",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 28,
        "team": "SRH",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "hot",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 98,
        "team": "SRH",
        "reason": "In excellent form heading into the tournament. Impact all-rounder capable of match-winning contributions with bat and ball",
        "form": "hot",
        "keyMetric": "2811+ runs and 65+ wickets in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 185,
        "team": "LSG",
        "reason": "In excellent form heading into the tournament. Pace battery leader for LSG with raw express speed",
        "form": "warm",
        "keyMetric": "100 IPL wickets at economy 7.35",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 180,
        "team": "LSG",
        "reason": "Proven performer in IPL conditions. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "3601+ runs and 100+ wickets in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 181,
        "team": "LSG",
        "reason": "In excellent form heading into the tournament. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "warm",
        "keyMetric": "Average of 29.89 with SR of 135.13 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      }
    ],
    "prediction": "A closely contested match with SRH having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 11,
    "headline": "El Clasico of IPL — RCB vs CSK at the Chinnaswamy",
    "narrative": "The biggest rivalry in IPL cricket returns as RCB host CSK in Bengaluru. Kohli vs the yellow army is always a spectacle, and this time CSK arrive with Sanju Samson and a refreshed squad. RCB's Chinnaswamy fortress — where they won the title last year — will be rocking. The atmosphere alone makes this the match of the early season.",
    "keyBattles": [
      "Virat Kohli vs Ruturaj Gaikwad",
      "Rajat Patidar vs Sanju Samson",
      "Phil Salt vs Shivam Dube"
    ],
    "venueInsight": "The Chinnaswamy's short boundaries and flat pitch promise a run-fest. Dew in the second innings makes chasing easier. CSK's spinners may find it challenging on this surface, while RCB's pace trio of Hazlewood, Bhuvneshwar, and Dayal have the skills to contain.",
    "playersToWatch": [
      {
        "playerId": 57,
        "team": "RCB",
        "reason": "In excellent form heading into the tournament. Powerplay enforcer — extracts movement in the first six overs",
        "form": "hot",
        "keyMetric": "137 IPL wickets at economy 9.13",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 56,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 10.5 with SR of 153.17 in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 59,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Swing merchant who thrives with the new ball at the top",
        "form": "hot",
        "keyMetric": "180 IPL wickets at economy 8.38",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 32,
        "team": "CSK",
        "reason": "Key player for CSK with match-winning ability. Exciting young talent with raw potential — one to watch for the future",
        "form": "warm",
        "keyMetric": "Average of 0.0 with SR of 135.06 in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 10,
        "team": "CSK",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "hot",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 37,
        "team": "CSK",
        "reason": "In excellent form heading into the tournament. Domestic sensation earning first IPL opportunity this season",
        "form": "warm",
        "keyMetric": "Average of 66.0 with SR of 138.18 in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      }
    ],
    "prediction": "A closely contested match with RCB having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 12,
    "headline": "Eden Gardens Night — KKR's Spin Web vs PBKS's Power",
    "narrative": "KKR's Eden Gardens is a graveyard for visiting teams, and PBKS will need their best to breach it. Varun Chakaravarthy's mystery spin at Eden has been devastating in recent seasons, and PBKS's batters will need to find a way to counter him. The battle between Iyer's class and KKR's discipline will be fascinating.",
    "keyBattles": [
      "Ajinkya Rahane vs Shreyas Iyer",
      "Rinku Singh vs Arshdeep Singh",
      "Sunil Narine vs Marcus Stoinis"
    ],
    "venueInsight": "Eden Gardens under lights offers assistance for both pace and spin. The large square boundaries mean power-hitters need to time their shots perfectly. KKR's spin duo of Varun and Narine have a combined economy of 6.9 at this ground.",
    "playersToWatch": [
      {
        "playerId": 141,
        "team": "KKR",
        "reason": "Proven performer in IPL conditions. Pace battery leader for KKR with raw express speed",
        "form": "hot",
        "keyMetric": "111 IPL wickets at economy 8.55",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 142,
        "team": "KKR",
        "reason": "In excellent form heading into the tournament. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "2640+ runs and 97+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 27,
        "team": "KKR",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 203,
        "team": "PBKS",
        "reason": "Key player for PBKS with match-winning ability. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 54.39 with SR of 142.04 in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 210,
        "team": "PBKS",
        "reason": "Key player for PBKS with match-winning ability. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 22.87 with SR of 127.34 in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 211,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. Versatile contributor who can bat anywhere from 4 to 7 and bowl 4 overs",
        "form": "hot",
        "keyMetric": "3131+ runs and 86+ wickets in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      }
    ],
    "prediction": "A closely contested match with KKR having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 13,
    "headline": "Jaiswal vs Bumrah — The Irresistible Force Meets the Immovable Object",
    "narrative": "Arguably the most anticipated individual battle of the season as Yashasvi Jaiswal faces Jasprit Bumrah. RR host MI in Guwahati in a match that features the tournament's best batter vs its best bowler. The supporting cast is equally stellar — Rohit, SKY, and Hardik for MI; Jadeja, Archer, and Hetmyer for RR.",
    "keyBattles": [
      "Yashasvi Jaiswal vs Hardik Pandya",
      "Riyan Parag vs Rohit Sharma",
      "Ravindra Jadeja vs Suryakumar Yadav"
    ],
    "venueInsight": "Guwahati's surface offers consistent bounce and good carry, making it ideal for fast bowlers. The outfield is lightning quick, meaning edges and mishits can race to the boundary. RR will want to utilize pace early and transition to spin in the middle.",
    "playersToWatch": [
      {
        "playerId": 230,
        "team": "RR",
        "reason": "In excellent form heading into the tournament. Swing merchant who thrives with the new ball at the top",
        "form": "warm",
        "keyMetric": "164 IPL wickets at economy 9.3",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 7,
        "team": "RR",
        "reason": "Key player for RR with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 233,
        "team": "RR",
        "reason": "Key player for RR with match-winning ability. Domestic sensation earning first IPL opportunity this season",
        "form": "hot",
        "keyMetric": "Average of 272.0 with SR of 132.57 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 15,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 75,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. Wily veteran who uses variations and cutters to great effect",
        "form": "hot",
        "keyMetric": "109 IPL wickets at economy 8.51",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 76,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. Master of the chase — excels under pressure in run-chases",
        "form": "hot",
        "keyMetric": "Average of 24.09 with SR of 135.08 in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      }
    ],
    "prediction": "A closely contested match with RR having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 14,
    "headline": "Delhi's Spin Threat vs Gujarat's All-Round Depth",
    "narrative": "Delhi Capitals host Gujarat Titans in a clash of contrasting styles. DC's strength lies in their spin department — Kuldeep Yadav and Axar Patel form one of the best spin combinations in the tournament. GT counter with Rashid Khan and Washington Sundar. This is a chess match between two thoughtful captains in Axar and Gill.",
    "keyBattles": [
      "Axar Patel vs Shubman Gill",
      "KL Rahul vs Sai Sudharsan",
      "Mitchell Starc vs Jos Buttler"
    ],
    "venueInsight": "Delhi's Arun Jaitley Stadium in the evening provides a good cricket surface. The pitch tends to slow down as the match progresses, giving spinners more grip. DC's home record with Kuldeep bowling is impressive — his wrong'uns on this surface are almost unplayable.",
    "playersToWatch": [
      {
        "playerId": 164,
        "team": "DC",
        "reason": "Proven performer in IPL conditions. Technical batter who adapts well to different surfaces and conditions",
        "form": "warm",
        "keyMetric": "Average of 45.36 with SR of 146.99 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 160,
        "team": "DC",
        "reason": "Key player for DC with match-winning ability. Consistent performer with a knack for big-match deliveries",
        "form": "warm",
        "keyMetric": "Average of 20.2 with SR of 141.46 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 159,
        "team": "DC",
        "reason": "Proven performer in IPL conditions. Anchor role critical for DC's middle order stability",
        "form": "warm",
        "keyMetric": "Average of 13.99 with SR of 147.77 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 17,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 120,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Impact all-rounder capable of match-winning contributions with bat and ball",
        "form": "warm",
        "keyMetric": "3976+ runs and 49+ wickets in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 115,
        "team": "GT",
        "reason": "Proven performer in IPL conditions. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "hot",
        "keyMetric": "Average of 52.5 with SR of 151.29 in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      }
    ],
    "prediction": "A closely contested match with DC having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 15,
    "headline": "Knight Riders' Fortress vs Super Giants' Firepower",
    "narrative": "KKR continue their home run at Eden Gardens against a LSG side that boasts arguably the best wicketkeeper-batter in the world in Rishabh Pant. The battle between Cameron Green and Nicholas Pooran — two explosive all-round talents — will be a highlight. KKR's bowling depth vs LSG's top-order quality is the key matchup.",
    "keyBattles": [
      "Ajinkya Rahane vs Rishabh Pant",
      "Rinku Singh vs Mayank Yadav",
      "Sunil Narine vs Mitchell Marsh"
    ],
    "venueInsight": "Eden Gardens for a third time in the first phase — KKR know these conditions intimately. The pitch will offer turn by this stage of the season, making Varun and Narine even more dangerous. LSG's challenge is playing spin under Eden's intimidating lights.",
    "playersToWatch": [
      {
        "playerId": 137,
        "team": "KKR",
        "reason": "Proven performer in IPL conditions. Dual-threat player who provides crucial balance to KKR",
        "form": "warm",
        "keyMetric": "2696+ runs and 64+ wickets in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 23,
        "team": "KKR",
        "reason": "Key player for KKR with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 143,
        "team": "KKR",
        "reason": "In excellent form heading into the tournament. Consistent performer with a knack for big-match deliveries",
        "form": "warm",
        "keyMetric": "Average of 21.96 with SR of 135.53 in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 180,
        "team": "LSG",
        "reason": "In excellent form heading into the tournament. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "3601+ runs and 100+ wickets in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 182,
        "team": "LSG",
        "reason": "Key player for LSG with match-winning ability. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "warm",
        "keyMetric": "Average of 59.45 with SR of 137.5 in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      },
      {
        "playerId": 184,
        "team": "LSG",
        "reason": "Key player for LSG with match-winning ability. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "1835+ runs and 73+ wickets in IPL",
        "matchupEdge": "Strong track record against KKR in previous encounters"
      }
    ],
    "prediction": "A closely contested match with KKR having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 16,
    "headline": "Royals vs Defending Champions in Guwahati",
    "narrative": "The defending champions travel to Guwahati to face a fired-up Rajasthan Royals outfit. RR's Jaiswal and Parag will want to make a statement against the champions, while RCB's Kohli and Salt will look to assert their class. With Archer vs Hazlewood, this match also features two of the world's finest fast bowlers going head to head.",
    "keyBattles": [
      "Yashasvi Jaiswal vs Virat Kohli",
      "Riyan Parag vs Rajat Patidar",
      "Ravindra Jadeja vs Phil Salt"
    ],
    "venueInsight": "The Guwahati surface has consistently provided good cricket over three RR home games. By this stage, the pitch might offer a touch more for the spinners. RR's familiarity with conditions gives them an edge, though RCB's title-winning mentality counts for a lot.",
    "playersToWatch": [
      {
        "playerId": 234,
        "team": "RR",
        "reason": "In excellent form heading into the tournament. Spin wizard who controls the middle overs with flight and guile",
        "form": "warm",
        "keyMetric": "148 IPL wickets at economy 8.71",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 230,
        "team": "RR",
        "reason": "In excellent form heading into the tournament. Swing merchant who thrives with the new ball at the top",
        "form": "warm",
        "keyMetric": "164 IPL wickets at economy 9.3",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 231,
        "team": "RR",
        "reason": "Key player for RR with match-winning ability. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "2625+ runs and 40+ wickets in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 29,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 57,
        "team": "RCB",
        "reason": "In excellent form heading into the tournament. Powerplay enforcer — extracts movement in the first six overs",
        "form": "hot",
        "keyMetric": "137 IPL wickets at economy 9.13",
        "matchupEdge": "Strong track record against RR in previous encounters"
      },
      {
        "playerId": 55,
        "team": "RCB",
        "reason": "In excellent form heading into the tournament. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "hot",
        "keyMetric": "3072+ runs and 63+ wickets in IPL",
        "matchupEdge": "Strong track record against RR in previous encounters"
      }
    ],
    "prediction": "A closely contested match with RR having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 17,
    "headline": "Chandigarh Afternoon Clash — Punjab's Pace vs Hyderabad's Power",
    "narrative": "An afternoon encounter in Chandigarh brings together PBKS's potent pace attack — Arshdeep, Jansen, Ferguson — against SRH's destructive batting. The heat factor in an afternoon game could tire bowlers, potentially playing into SRH's hands. Iyer will need to win the toss and utilize his seamers early when the ball is doing the most.",
    "keyBattles": [
      "Shreyas Iyer vs Pat Cummins",
      "Arshdeep Singh vs Travis Head",
      "Marcus Stoinis vs Abhishek Sharma"
    ],
    "venueInsight": "Chandigarh in the afternoon can be hot, and the pitch flattens out as the sun beats down. Pace bowlers with the new ball will find some movement, but batting becomes easier. SRH's aggressive approach is well-suited to afternoon conditions.",
    "playersToWatch": [
      {
        "playerId": 210,
        "team": "PBKS",
        "reason": "In excellent form heading into the tournament. Master of the chase — excels under pressure in run-chases",
        "form": "warm",
        "keyMetric": "Average of 22.87 with SR of 127.34 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 207,
        "team": "PBKS",
        "reason": "Proven performer in IPL conditions. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "1967+ runs and 37+ wickets in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 208,
        "team": "PBKS",
        "reason": "Key player for PBKS with match-winning ability. 360-degree stroke-maker with an ability to find gaps on both sides",
        "form": "warm",
        "keyMetric": "Average of 48.71 with SR of 131.63 in IPL",
        "matchupEdge": "Strong track record against SRH in previous encounters"
      },
      {
        "playerId": 97,
        "team": "SRH",
        "reason": "Key player for SRH with match-winning ability. Versatile contributor who can bat anywhere from 4 to 7 and bowl 4 overs",
        "form": "hot",
        "keyMetric": "2025+ runs and 33+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 95,
        "team": "SRH",
        "reason": "Proven performer in IPL conditions. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "warm",
        "keyMetric": "Average of 23.05 with SR of 152.25 in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      },
      {
        "playerId": 6,
        "team": "SRH",
        "reason": "Key player for SRH with match-winning ability. Impact performer expected to deliver.",
        "form": "hot",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against PBKS in previous encounters"
      }
    ],
    "prediction": "A closely contested match with PBKS having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 18,
    "headline": "Chepauk Spin Battle — Noor Ahmad vs Kuldeep Yadav",
    "narrative": "A mouthwatering spin duel at Chepauk as CSK's Noor Ahmad faces DC's Kuldeep Yadav. Both left-arm wrist spinners have been among the most effective bowlers in world cricket, and this Chepauk surface will turn. The battle between KL Rahul's technique and Chepauk's challenges is a subplot worth watching.",
    "keyBattles": [
      "Ruturaj Gaikwad vs Axar Patel",
      "Sanju Samson vs KL Rahul",
      "Shivam Dube vs Mitchell Starc"
    ],
    "venueInsight": "Chepauk's turning surface makes this a spinner's paradise. The match between two world-class wrist spinners on a helping track is rare and special. Batting first and posting 160+ could be match-winning. CSK's knowledge of Chepauk is their trump card.",
    "playersToWatch": [
      {
        "playerId": 31,
        "team": "CSK",
        "reason": "Key player for CSK with match-winning ability. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "2126+ runs and 61+ wickets in IPL",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 35,
        "team": "CSK",
        "reason": "Key player for CSK with match-winning ability. Pace battery leader for CSK with raw express speed",
        "form": "warm",
        "keyMetric": "97 IPL wickets at economy 7.69",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 36,
        "team": "CSK",
        "reason": "Key player for CSK with match-winning ability. Swing merchant who thrives with the new ball at the top",
        "form": "warm",
        "keyMetric": "179 IPL wickets at economy 7.61",
        "matchupEdge": "Strong track record against DC in previous encounters"
      },
      {
        "playerId": 159,
        "team": "DC",
        "reason": "Key player for DC with match-winning ability. Anchor role critical for DC's middle order stability",
        "form": "warm",
        "keyMetric": "Average of 13.99 with SR of 147.77 in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 19,
        "team": "DC",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "warm",
        "keyMetric": "50 IPL wickets at economy 8.0",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      },
      {
        "playerId": 164,
        "team": "DC",
        "reason": "Key player for DC with match-winning ability. Technical batter who adapts well to different surfaces and conditions",
        "form": "warm",
        "keyMetric": "Average of 45.36 with SR of 146.99 in IPL",
        "matchupEdge": "Strong track record against CSK in previous encounters"
      }
    ],
    "prediction": "A closely contested match with CSK having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 19,
    "headline": "Pant's Power Play vs Gill's Grace in Lucknow Afternoon",
    "narrative": "Rishabh Pant and Shubman Gill — two of India's future captains — go head to head in Lucknow. Both are elegant stroke-makers, but Pant's aggression contrasts with Gill's classical technique. LSG's pace battery of Mayank, Shami, and Avesh will test GT's batting depth on a surface that offers something for fast bowlers.",
    "keyBattles": [
      "Rishabh Pant vs Shubman Gill",
      "Mayank Yadav vs Sai Sudharsan",
      "Mitchell Marsh vs Jos Buttler"
    ],
    "venueInsight": "Ekana Stadium in an afternoon setting will be warm but playable. The surface here has historically been good for batting, though pace bowlers find some assistance with the new ball. The slower bowlers come into play as the pitch deteriorates.",
    "playersToWatch": [
      {
        "playerId": 180,
        "team": "LSG",
        "reason": "Proven performer in IPL conditions. Hard-hitting finisher who doubles as a reliable medium-pace option",
        "form": "warm",
        "keyMetric": "3601+ runs and 100+ wickets in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 4,
        "team": "LSG",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 184,
        "team": "LSG",
        "reason": "Key player for LSG with match-winning ability. Dynamic performer who elevates the team's fielding standards too",
        "form": "warm",
        "keyMetric": "1835+ runs and 73+ wickets in IPL",
        "matchupEdge": "Strong track record against GT in previous encounters"
      },
      {
        "playerId": 115,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Power-hitter who targets the arc between long-on and deep midwicket",
        "form": "warm",
        "keyMetric": "Average of 52.5 with SR of 151.29 in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 120,
        "team": "GT",
        "reason": "Key player for GT with match-winning ability. Impact all-rounder capable of match-winning contributions with bat and ball",
        "form": "hot",
        "keyMetric": "3976+ runs and 49+ wickets in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      },
      {
        "playerId": 5,
        "team": "GT",
        "reason": "Proven performer in IPL conditions. Can change the course of the game single-handedly.",
        "form": "hot",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against LSG in previous encounters"
      }
    ],
    "prediction": "A closely contested match with LSG having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  },
  {
    "matchId": 20,
    "headline": "Wankhede Classic — Mumbai Host the Defending Champions",
    "narrative": "The last match of Phase 1 is a blockbuster — Mumbai Indians vs Royal Challengers Bengaluru at the Wankhede. This is one of the IPL's greatest rivalries, and with both teams likely needing points, the intensity will be off the charts. Bumrah vs Kohli under Wankhede lights is the stuff of IPL folklore.",
    "keyBattles": [
      "Hardik Pandya vs Virat Kohli",
      "Rohit Sharma vs Rajat Patidar",
      "Suryakumar Yadav vs Phil Salt"
    ],
    "venueInsight": "The Wankhede under lights for a marquee clash. Dew will be a massive factor, making chasing significantly easier. The short boundaries mean any batter who gets set can be devastating. This is a ground where matches are won and lost in the death overs — making Bumrah vs Salt/Kohli the decisive contest.",
    "playersToWatch": [
      {
        "playerId": 78,
        "team": "MI",
        "reason": "Key player for MI with match-winning ability. X-factor bowler with an unplayable delivery in the arsenal",
        "form": "warm",
        "keyMetric": "118 IPL wickets at economy 8.88",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 77,
        "team": "MI",
        "reason": "In excellent form heading into the tournament. Versatile contributor who can bat anywhere from 4 to 7 and bowl 4 overs",
        "form": "hot",
        "keyMetric": "1110+ runs and 80+ wickets in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 11,
        "team": "MI",
        "reason": "In excellent form heading into the tournament. Crucial contributor to the team balance.",
        "form": "warm",
        "keyMetric": "1000+ runs and 30+ wickets in IPL",
        "matchupEdge": "Strong track record against RCB in previous encounters"
      },
      {
        "playerId": 16,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Impact performer expected to deliver.",
        "form": "warm",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 57,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Powerplay enforcer — extracts movement in the first six overs",
        "form": "warm",
        "keyMetric": "137 IPL wickets at economy 9.13",
        "matchupEdge": "Strong track record against MI in previous encounters"
      },
      {
        "playerId": 29,
        "team": "RCB",
        "reason": "Key player for RCB with match-winning ability. Impact performer expected to deliver.",
        "form": "hot",
        "keyMetric": "Average of 30 with SR of 130 in IPL",
        "matchupEdge": "Strong track record against MI in previous encounters"
      }
    ],
    "prediction": "A closely contested match with MI having slight home advantage. Both teams are evenly matched, and the toss could play a decisive role."
  }
];
