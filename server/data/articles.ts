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
    "slug": "dc-vs-mi-recap-rizvi-chase-phase-control",
    "title": "DC vs MI recap: Rizvi masters the chase through phase control",
    "subtitle": "Delhi chase 162 with 11 balls to spare as MI fade in the middle overs",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "DC",
      "MI",
      "Rizvi",
      "SKY",
      "recap"
    ],
    "featured": true,
    "content": "Delhi Capitals made it two-from-two by chasing down 162 and beating Mumbai Indians by six wickets in Delhi. The scoreline (DC 164/4 in 18.1 overs) tells you the chase was controlled, but the story was really about how DC managed risk through phases.\n\nMumbai’s 162/6 was built around Suryakumar Yadav’s 51 off 36. On a surface that never looked like a 200+ wicket, MI’s middle-overs intent was right, but their boundary cadence dipped after the powerplay. DC’s Mukesh Kumar (2/26 in 3 overs) was the standout enforcer: hard lengths into the pitch, minimal pace-on freebies, and just enough variation to stop SKY from lining him up.\n\nWhen DC began the chase, the first checkpoint was simply survival. Once they settled, the gears shifted through one long partnership that eliminated Mumbai’s biggest weapon: pressure. Sameer Rizvi’s 90 off 51 was the defining innings. The key wasn’t just the strike rate; it was the shot map. He went straight when the ball was full, accessed square boundaries when MI dragged length, and avoided the low-percentage cross-batted heaves until the required rate was under control.\n\nMumbai did have a small opening to pull the game back when DC were searching for the finishing blows. Deepak Chahar’s 1/20 was a rare spell that forced DC to reset. But with wickets in hand, DC simply waited for the soft over and cashed it.\n\nWhat this match reinforced is a simple early-season truth: chasing teams are winning because they are playing to information. DC read par as 155–165, kept the required rate below 9, and never let MI’s death options matter. For MI, the takeaway is equally clear—162 is defendable only if the middle overs produce at least one 12–15 run over to create separation.",
    "relatedPlayerIds": [
      3,
      4,
      11,
      13
    ],
    "chartData": [
      {
        "label": "Powerplay run-rate",
        "value": 8.1,
        "color": "#1E88E5"
      },
      {
        "label": "Middle overs run-rate",
        "value": 7.6,
        "color": "#43A047"
      },
      {
        "label": "Death overs run-rate",
        "value": 9.4,
        "color": "#F4511E"
      }
    ],
    "dataTable": {
      "headers": [
        "Team",
        "Score",
        "Overs",
        "Key innings"
      ],
      "rows": [
        [
          "MI",
          "162/6",
          "20.0",
          "Suryakumar 51 (36)"
        ],
        [
          "DC",
          "164/4",
          "18.1",
          "Sameer Rizvi 90 (51)"
        ]
      ]
    },
    "matchId": 8
  },
  {
    "id": 2,
    "slug": "gt-vs-rr-recap-jurel-bishnoi-wickets-win-close",
    "title": "GT vs RR recap: Jurel’s tempo, Bishnoi’s wickets, Royals hold on",
    "subtitle": "Six-run win in Ahmedabad built on an anchor innings and wicket-timing",
    "category": "analysis",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "GT",
      "RR",
      "Jurel",
      "Bishnoi",
      "recap"
    ],
    "featured": false,
    "content": "Rajasthan Royals edged Gujarat Titans by six runs in Ahmedabad in a game that was decided by two moments: RR’s late-innings acceleration to reach 210/6, and their ability to take wickets without offering release balls in the final five overs.\n\nRR’s 210/6 was anchored by Dhruv Jurel’s 75 off 42. Jurel’s value wasn’t just volume; it was tempo management. He kept the innings ahead of the par rate through the middle overs, which meant RR could attack the death without needing reckless swings. Gujarat’s Kagiso Rabada (2/42) got wickets, but he also absorbed the overs that could have become 14–16 run bursts.\n\nIn reply, GT’s 204/8 shows they were never truly out of it. Sai Sudharsan’s 73 off 44 kept the chase alive, especially by rotating strike when RR held the square boundaries. But the chase always required someone to provide a 10-ball, 25-run spike at the back end—and that never arrived.\n\nRavi Bishnoi’s 4/41 was the difference-maker. On paper, 41 runs looks expensive. Contextually, it was gold: he took wickets at the exact times GT were building. Every time Gujarat stitched together a partnership, Bishnoi forced a reset with a breakthrough. That forced GT’s hitters into a higher-risk endgame where timing windows shrink.\n\nFrom a tactical lens, RR’s batting template is becoming clear: build to 85–95 at the halfway mark with wickets intact, then take one match-up bowler out at the death. Their bowling template is equally defined: take pace off on good length, and keep the stumps in play so that set batters can’t set for one zone.\n\nFor GT, the early lesson is about second-gear hitting. 204 is a strong chase, but when you’re chasing 210+ you need at least one phase where the required rate is attacked, not managed. In Ahmedabad, Gujarat managed brilliantly—just not aggressively enough.",
    "relatedPlayerIds": [
      17,
      20,
      7
    ],
    "chartData": [
      {
        "label": "Target",
        "value": 210,
        "color": "#6D4C41"
      },
      {
        "label": "Chase",
        "value": 204,
        "color": "#00897B"
      }
    ],
    "dataTable": {
      "headers": [
        "Team",
        "Score",
        "Overs",
        "Top score"
      ],
      "rows": [
        [
          "RR",
          "210/6",
          "20.0",
          "Dhruv Jurel 75 (42)"
        ],
        [
          "GT",
          "204/8",
          "20.0",
          "Sai Sudharsan 73 (44)"
        ]
      ]
    },
    "matchId": 9
  },
  {
    "id": 3,
    "slug": "ipl-2026-april-4-doubleheader-takeaways-phase-control",
    "title": "April 4 takeaways: why phase control is winning early IPL 2026",
    "subtitle": "Two matches, one theme: manage risk, then attack with resources",
    "category": "analysis",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "IPL 2026",
      "trends",
      "chasing"
    ],
    "featured": false,
    "content": "Saturday’s double-header delivered a clean read on what the first week of IPL 2026 is quietly rewarding: phase control beats highlight overs.\n\nIn Delhi, Mumbai Indians posted 162/6 and still lost with 11 balls unused. The match wasn’t a collapse; it was a slow bleed. DC kept Mumbai’s middle overs from ever becoming a platform and then chased with a single dominant innings (Sameer Rizvi 90 off 51) that kept the required rate in a “manageable” range throughout.\n\nIn Ahmedabad, the tempo was louder. 210 played 204, and Gujarat were within one big over of winning. Yet the story was similar: Rajasthan’s innings was built on one anchor (Dhruv Jurel 75 off 42) keeping the run rate ahead early so the death could be attacked; Gujarat’s chase was built on one anchor (Sai Sudharsan 73 off 44) but lacked the late spike. The separator was wickets—Ravi Bishnoi’s four strikes ensured the chase never became a simple equation.\n\nAcross the two matches, three signals matter for upcoming previews:\n\n1) Wickets in hand at the 12-over mark are more valuable than being 10 runs above par. Both winning teams preserved resources, then accelerated. \n2) “Expensive” wicket-taking spells are still match-winning. Bishnoi conceded 41 but removed momentum. \n3) Chasing teams are winning because they convert information into pacing. When par is 160–170, teams are comfortable taking the game deep.\n\nFor fantasy and tactical watchers, the actionable takeaway is to prioritise players who influence phase transitions: middle-overs wicket takers (Bishnoi-type roles) and top-four batters who can both anchor and access boundaries without needing risk.\n\nAs the tournament moves into venues with clearer personality—Hyderabad’s hit-the-deck pace and Bengaluru’s fast outfield—expect teams to lean even harder into this “manage, then explode” rhythm. The side that forces the opponent to play two gears at once will keep winning.",
    "relatedPlayerIds": [
      3,
      13,
      17,
      23
    ]
  },
  {
    "id": 4,
    "slug": "srh-vs-lsg-pitch-report-hyderabad-par-185-chasing-edge",
    "title": "SRH vs LSG pitch report: Hyderabad rewards depth and death overs",
    "subtitle": "Rajiv Gandhi Stadium profiles point to 175–185 as par, 190 as safe",
    "category": "pitch-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "SRH",
      "LSG",
      "Hyderabad",
      "pitch"
    ],
    "featured": false,
    "content": "The surface at Hyderabad has historically been a high-scoring venue with a strong chasing bias. In the venue dataset, Rajiv Gandhi International Stadium averages 166.9 in the first innings and 160.7 in the second, with chasing sides winning 59.7% of games (37 of 62). The scoring profile is consistent across phases: powerplay run rate 7.34, middle overs 7.60, death overs 9.46.\n\nFor Sunrisers Hyderabad vs Lucknow Super Giants, this points to a simple pitch thesis: if the pitch is its usual true-paced Hyderabad strip, anything under 180 is “chaseable”, and 190+ becomes the comfort zone.\n\nWhat should batters look for? The Hyderabad numbers suggest boundary hitting is most profitable at the death, not necessarily in the first six overs. That means top orders can be slightly conservative early—6.5–7.5 an over is fine—if they preserve wickets and keep the set batters for overs 16–20.\n\nFrom a bowling standpoint, this venue punishes pace-on at the backend. Death overs at 9.46 means you must either own a high-quality yorker option or take pace off into the pitch. For LSG, that places extra value on their best execution quicks. For SRH, it places value on spinners who can win the 7–15 window to offset the inevitable late surge.\n\nTactically, SRH’s ideal plan is to maximise their top-order matchup advantage: Travis Head and Heinrich Klaasen are at their best when they don’t have to force the rate early. LSG’s plan should be to create a wicket-cluster between overs 5–10 to prevent SRH from carrying batters into the death.\n\nIf you want a number: par first-innings score is around 175–185. Anything above 190 should be defended only if the bowling side has an above-average death package and can control the wide yorker channel.",
    "relatedPlayerIds": [
      8,
      9,
      22
    ]
  },
  {
    "id": 5,
    "slug": "srh-vs-lsg-toss-report-bowl-first-is-the-default",
    "title": "SRH vs LSG toss report: bowl first is the default at Hyderabad",
    "subtitle": "History says captains field first and chase with clarity",
    "category": "toss-report",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "SRH",
      "LSG",
      "toss",
      "Hyderabad"
    ],
    "featured": false,
    "content": "At Hyderabad, the toss is rarely a simple “bat first” call. The venue toss data shows teams choose to field first 66.1% of the time (41 of 62), and those teams win 58.5% of their matches. That’s a strong signal that chasing is not just popular—it’s been profitable.\n\nFor SRH vs LSG, the toss decision should be anchored to one question: do you trust your death bowling? If you don’t, the better play is to chase, because you get a precise target and can pace the chase through the long middle period.\n\nIf a team wins the toss and fields first, the early objective should be to keep the batting side under 50 in the powerplay without leaking free boundaries. Hyderabad’s powerplay run rate (7.34) suggests you can “win” the first six overs without being spectacular—two wickets or a quiet 38–42 can tilt the innings.\n\nIf a team is forced to bat first, the template is about wickets. A 175–185 score is defendable only if you keep 7+ wickets intact at the 12-over mark so the death can be attacked. Otherwise you risk a 165–175 total that looks fine on paper but feels short once the ball skids on.\n\nWeather and dew can still swing the call, but even without that, the numbers make the toss decision clear: fielding first has been the historical edge at this venue.\n\nCricDNA call: win the toss, bowl first. If you bat first, aim for 190 and treat 180 as the minimum competitive benchmark.",
    "relatedPlayerIds": [
      8,
      9,
      22
    ]
  },
  {
    "id": 6,
    "slug": "srh-vs-lsg-match-preview-head-klaasen-vs-rahul-control",
    "title": "SRH vs LSG match preview: Head and Klaasen vs Rahul’s control model",
    "subtitle": "Explosiveness vs structure in a venue that loves chases",
    "category": "match-preview",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "SRH",
      "LSG",
      "preview"
    ],
    "featured": false,
    "content": "Sunrisers Hyderabad vs Lucknow Super Giants sets up as a matchup between explosive top-order intent and structured phase bowling.\n\nHyderabad’s batting ceiling is obvious: Travis Head can turn the powerplay into a mismatch, and Heinrich Klaasen is one of the most damaging spin-hitters in the league when the field spreads. The strategic goal for SRH should be to create at least one “break” over in the powerplay—an over that goes for 15+—and then consolidate until Klaasen can launch at the death.\n\nLucknow’s best response is to drag the game into the middle overs and hunt wickets. Hyderabad’s venue profile suggests the middle overs are not slow (7.60 rpo), but they are controllable if you can bowl into the pitch and protect the straight boundary.\n\nFor LSG’s batting, the key is avoiding a chase where they require 11+ an over from over 13 onwards. Hyderabad’s chasing bias is strong; to beat it you either set 195+ or you take wickets. If LSG chase, they should plan to be within 10 runs of par at every checkpoint: 45–50 after 6, 95–105 after 12, and no more than 55 needed off the last five.\n\nPlayer focus:\n- Head (SRH) is the volatility lever; if he gets 35 off 20, SRH are on track for 190.\n- Klaasen (SRH) is the finisher; the match is won or lost by how many balls he faces after over 14.\n- KL Rahul (LSG) is the stabiliser. In a high-scoring venue, his value is preserving wickets and ensuring the hitters have time.\n\nCricDNA prediction: this is a chasing venue and a chasing matchup. The side that wins the toss and fields, then keeps the opponent under 185, will control the game.",
    "relatedPlayerIds": [
      8,
      9,
      22,
      28
    ]
  },
  {
    "id": 7,
    "slug": "rcb-vs-csk-pitch-report-chinnaswamy-par-190",
    "title": "RCB vs CSK pitch report: Chinnaswamy is an innings-structure test",
    "subtitle": "Keep wickets for the death; 190 is the working par",
    "category": "pitch-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "RCB",
      "CSK",
      "Bengaluru",
      "pitch"
    ],
    "featured": false,
    "content": "Bengaluru’s M. Chinnaswamy Stadium is a venue where the default setting is aggression. The venue dataset has an average first-innings score of 169.3 and second-innings score of 161.5 across 90 matches. Teams chasing have won 57.8% of games (52 of 90).\n\nThe phase scoring numbers explain why: powerplay 7.75 rpo, middle overs 7.84, and death overs 9.82. In other words, it rarely “slows down”. Even if bowlers survive the powerplay, the death overs inflate totals.\n\nFor RCB vs CSK, the pitch report is simple: expect value for timing and straight hitting, and expect bowlers to rely on deception rather than pace. If the pitch is dry, spinners who can change pace and hit hard lengths can still win middle overs, but anything fractionally full disappears.\n\nA practical par range at Chinnaswamy is 180–195 depending on dew. 170 is not safe unless you have an exceptional wicket-taking attack.\n\nKey tactical note: because both middle and death overs are expensive, batting sides should not over-attack the first six overs. The venue doesn’t demand 60 in the powerplay; it demands wickets in hand for the overs where 10–12 rpo is “normal”.\n\nCricDNA call: if you bat first, structure the innings to be 55–60 after 6 with 1 wicket down, 110–120 after 12, then explode late. That produces the kind of 190 total that forces the chasing side to take risks earlier than they want.",
    "relatedPlayerIds": [
      1,
      10,
      14,
      16
    ]
  },
  {
    "id": 8,
    "slug": "rcb-vs-csk-toss-report-chase-helps-but-edge-is-narrow",
    "title": "RCB vs CSK toss report: chasing helps, but execution matters more",
    "subtitle": "A mild chasing edge; dew can turn it into a big one",
    "category": "toss-report",
    "author": "CricDNA Insights",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "RCB",
      "CSK",
      "toss"
    ],
    "featured": false,
    "content": "The toss at Chinnaswamy often follows the “field first” trend, but the edge is narrower than some other venues because both innings score quickly. The toss stats show teams choose to field first 64.4% of the time (58 of 90), and those teams win 55.2% of matches.\n\nFor RCB vs CSK, that implies a mild advantage to chasing, not a guarantee. The deciding factor is usually dew and execution: if the ball gets wet, yorkers become harder to land and slower balls become easier to pick.\n\nSo what is the optimal toss call?\n- If there is visible dew potential or a very light breeze, field first.\n- If conditions are dry and you have a disciplined bowling unit, batting first and posting 190+ can still be the better pressure play.\n\nRegardless of decision, the first six overs are crucial for the bowling side. Chinnaswamy’s powerplay run rate (7.75) suggests “par containment” is possible if you take pace off and protect the hard lengths. But if you concede 60+ without wickets, you are defending a venue that offers no natural slowdown.\n\nCricDNA call: win the toss, bowl first—unless your batting lineup is clearly stronger than the opponent and you back yourself to post 200.",
    "relatedPlayerIds": [
      1,
      10,
      14,
      16
    ]
  },
  {
    "id": 9,
    "slug": "rcb-vs-csk-match-preview-kohli-salt-vs-gaikwad-bridge",
    "title": "RCB vs CSK match preview: Kohli/Salt power vs Gaikwad’s bridge role",
    "subtitle": "Top-two output and wicket clusters decide at Chinnaswamy",
    "category": "match-preview",
    "author": "CricDNA Editorial",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "RCB",
      "CSK",
      "preview"
    ],
    "featured": false,
    "content": "Royal Challengers Bengaluru vs Chennai Super Kings is the kind of fixture where strategy is secondary to matchup control.\n\nRCB’s blueprint is built around top-order volume. Virat Kohli remains their control batter: if he bats through 15 overs at a run-a-ball-plus tempo, the hitters can push the innings beyond 190. Phil Salt is the chaos lever who can win the powerplay outright.\n\nCSK’s blueprint is usually about depth and spin matchups, but at Chinnaswamy the game shifts: you need boundary-hitters who can clear the straight and long-off zones. That’s why Ruturaj Gaikwad’s role is so important—he has to bridge the innings so that CSK aren’t asking too much of finishers.\n\nBowling matchups that matter:\n- If Bumrah-like execution existed for either team, it would be decisive at this venue. In reality, Chinnaswamy is about which attack can create wickets in clusters, because dot-ball pressure is hard to sustain.\n- Spinners who bowl into the pitch and vary pace can still win overs 7–12, especially if batters are forced to hit against the turn.\n\nGame model:\n1) Keep wickets in hand.\n2) Take one bowler out at the death.\n3) In the chase, never let the required rate rise above 10.5.\n\nCricDNA prediction: the team that wins the toss and fields first gains the first advantage, but the match will swing on which side’s top two batters collectively score 90+ runs. If Kohli and Salt fire, RCB can separate; if Gaikwad anchors and CSK’s hitters get 30-ball cameos, CSK stay in it.",
    "relatedPlayerIds": [
      1,
      10,
      14,
      16,
      29
    ]
  },
  {
    "id": 10,
    "slug": "ipl-2026-week-one-trends-chasing-middle-overs-wickets",
    "title": "IPL 2026 week one: chasing logic and the return of middle-overs wickets",
    "subtitle": "Information advantage is shaping tactics; death execution remains king",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-04-05",
    "readTime": "6 min",
    "tags": [
      "IPL 2026",
      "strategy",
      "analytics"
    ],
    "featured": false,
    "content": "After the first nine matches of IPL 2026, the most consistent pattern is not a team or a player—it’s a decision. Teams are leaning into chasing, and the early results suggest it’s still the higher-percentage play.\n\nWhy? Because modern T20 has become a game of “information advantage”. When you know the target, you can distribute risk precisely. You don’t need to win every over; you need to win the right two overs.\n\nThe two matches on 4 April were a perfect illustration. In Delhi, a target of 162 was chased with 11 balls spare because Delhi never let the required rate drift into panic. In Ahmedabad, Gujarat fell six short chasing 210 because they were always one wicket behind the chase—they kept the rate in range but lost the ability to produce a finishing surge.\n\nThe second emerging trend is the rising value of wicket-taking in the middle overs. Even if a bowler concedes 9–10 an over, taking wickets between overs 7–15 changes the endgame. It forces new batters to start in the most tactically complex phase of the innings, when fields are spread and bowlers can hide their best options.\n\nFinally, venue personality is going to matter more as the schedule moves. Hyderabad and Bengaluru are both venues with historically strong chasing edges and high death-over scoring. That pushes captains toward bowling-first decisions and places a premium on death execution.\n\nCricDNA’s early-season checklist for winning games:\n- Preserve wickets until over 12.\n- Identify the one bowler you can target at the death.\n- In chases, keep the required rate below 9.5 until the final five.\n\nThe teams that can play this “two-phase” model—manage, then explode—will set the early pace. The teams that try to win the game in the first six overs will keep discovering that T20 punishes impatience more than it punishes caution.",
    "relatedPlayerIds": [
      2,
      23,
      26
    ]
  }
] as Article[];

export const analyticsCards: AnalyticsCard[] = [
  {
    "type": "matchup",
    "title": "Hyderabad chasing edge",
    "value": "59.7%",
    "description": "Chasing sides have won 37 of 62 matches at Rajiv Gandhi International Stadium (venue dataset).",
    "teamColors": [
      "#F05A28",
      "#005BAC"
    ]
  },
  {
    "type": "matchup",
    "title": "Chinnaswamy chase rate",
    "value": "57.8%",
    "description": "Teams batting second have won 52 of 90 matches at M. Chinnaswamy Stadium (venue dataset).",
    "teamColors": [
      "#E4002B",
      "#FFD54F"
    ]
  },
  {
    "type": "player",
    "title": "Players in focus today",
    "value": "Kohli, Klaasen, Rahul",
    "description": "Game models lean on control anchors plus one high-impact hitter at the death.",
    "playerIds": [
      1,
      9,
      22
    ]
  }
] as AnalyticsCard[];
