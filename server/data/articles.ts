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
    "id": 1,
    "slug": "rcb-vs-srh-preview-chinnaswamy-is-a-death-overs-multiplier",
    "title": "RCB vs SRH Preview: Chinnaswamy is a Death-Overs Multiplier",
    "subtitle": "A data-first match preview for IPL 2026 Match 1 in Bengaluru.",
    "category": "match-preview",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "rcb",
      "srh",
      "match-1",
      "preview"
    ],
    "featured": true,
    "content": "IPL 2026 begins in Bengaluru, and the numbers are not subtle. CricDNA’s venue sample for M Chinnaswamy Stadium has an average first-innings score of 168.1, with death overs scoring at 10.59 runs per over. That combination pushes teams toward one clear principle: treat ‘par’ as a moving target and optimize for *boundary access* rather than preservation.\n\n### What the venue is really saying\nChinnaswamy’s split is a high-variance ground: powerplay scoring is already healthy (7.07 rpo) and it only accelerates late (10.59 rpo). The clean way to think about it is overs 16–20 as a multiplier. If you arrive at the death with wickets, your expected finish balloons.\n\nHistorically, chasing has been a real option here: bat-second wins (37) outnumber bat-first wins (26) in the venue dataset. The toss layer reinforces the same pattern. At this ground, teams have chosen to field first 57 times out of 65 (87.7%), and the win rate when choosing to field first is 56.1%. The implication is not ‘always chase’ — it’s that captains value information and late-innings control.\n\n### RCB vs SRH: the tactical pressure points\nIn a Bengaluru match, batting depth matters less than *overs management*. Bowling sides need a plan to avoid two killers:\n1) a soft 7–8 rpo middle phase that keeps wickets in hand, and\n2) a death phase where set batters can swing at a 10.59 rpo runway.\n\nFor RCB, the most reliable way to create a cushion is to win the powerplay without sacrificing wickets. For SRH, the most reliable way to win is to create two ‘bad overs’ with the ball — a double-wicket over is worth more here than squeezing singles.\n\n### Par score and win model (simple)\nUsing CricDNA’s average first-innings score (168.1) as the baseline, a safer ‘bat first’ target is baseline + 10 to absorb variance. That puts a pragmatic par band at roughly 173–183. Anything below that invites a chase, because bat-second wins already lead historically.\n\n**Prediction lens:** if the toss winner fields first (the historical preference), the team batting first must treat overs 7–15 as a scoring phase, not a holding phase. Chinnaswamy punishes passive middles more than it rewards perfect death hitting.\n",
    "relatedPlayerIds": [
      1,
      6,
      8
    ],
    "chartData": [
      {
        "label": "Avg 1st inns score",
        "value": 168.1,
        "color": "#8b5cf6"
      },
      {
        "label": "Powerplay RPO",
        "value": 7.07,
        "color": "#10b981"
      },
      {
        "label": "Death overs RPO",
        "value": 10.59,
        "color": "#ef4444"
      }
    ],
    "dataTable": {
      "headers": [
        "Metric",
        "Value"
      ],
      "rows": [
        [
          "Bat first wins",
          "26"
        ],
        [
          "Bat second wins",
          "37"
        ],
        [
          "Toss choose field first",
          "57/65"
        ],
        [
          "Win% when field first after toss",
          "56.1%"
        ]
      ]
    },
    "matchId": 1
  },
  {
    "id": 2,
    "slug": "chinnaswamy-pitch-report-why-the-last-five-overs-decide-everything",
    "title": "Chinnaswamy Pitch Report: Why the Last Five Overs Decide Everything",
    "subtitle": "Bengaluru’s phase scoring profile and what it means for batting and bowling plans.",
    "category": "pitch-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "chinnaswamy",
      "pitch-report",
      "match-1"
    ],
    "featured": false,
    "content": "The simplest pitch report for Bengaluru is: it rarely stays quiet. CricDNA’s Chinnaswamy sample shows a first-innings average of 168.1, and the scoring curve climbs sharply at the end (10.59 rpo). That’s a classic signature of a ground where true pace and short boundaries combine to reward clean hitting late.\n\n### Phase scoring profile\n- Powerplay: 7.07 rpo — you can start fast without extraordinary risk.\n- Middle overs: 8.08 rpo — still above ‘containment’ levels.\n- Death overs: 10.59 rpo — the real separator.\n\nThe key for teams is that ‘defending’ is not one strategy. Defending 175 requires early wickets; defending 195 requires denying boundary clusters.\n\n### What bowlers should do\nAt high-run-rate venues, the biggest mistake is to bowl as if every over must be defended equally. You should *trade* risk: attack in two windows (powerplay and 13–16) so the death is faced with new batters. Even if you leak a boundary, a wicket reduces the expected end-overs damage because death overs are priced at 10.59 per over.\n\n### What batters should do\nBatters should protect wickets, but only if the innings still carries boundary access. A common failure mode at this venue is a ‘pretty’ 50 off 40 that leaves too much for the finish. The Chinnaswamy curve says your upside is late — the job is to *arrive* at the late overs with options.\n\n### A practical par band\nGiven the venue average (168.1) and the death-overs multiplier, teams batting first should aim for a par band around 173–183. Below that, the historical bat-second edge (37 wins vs 26) turns into a real chasing advantage.\n",
    "relatedPlayerIds": [
      1,
      6,
      8
    ],
    "chartData": [
      {
        "label": "Powerplay",
        "value": 7.07,
        "color": "#22c55e"
      },
      {
        "label": "Middle overs",
        "value": 8.08,
        "color": "#3b82f6"
      },
      {
        "label": "Death overs",
        "value": 10.59,
        "color": "#ef4444"
      }
    ],
    "matchId": 1
  },
  {
    "id": 3,
    "slug": "toss-report-rcb-vs-srh-why-captains-prefer-to-field-first-in-bengaluru",
    "title": "Toss Report (RCB vs SRH): Why Captains Prefer to Field First in Bengaluru",
    "subtitle": "The toss decision at Chinnaswamy, quantified.",
    "category": "toss-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "toss",
      "chinnaswamy",
      "rcb",
      "srh"
    ],
    "featured": false,
    "content": "At M Chinnaswamy Stadium, the toss is less about superstition and more about information economics. In CricDNA’s venue-linked toss sample, captains have chosen to field first 57 times out of 65 matches (87.7%).\n\n### Does choosing to field first actually win?\nYes — historically it has been profitable. When teams chose to field first after winning the toss, they won 32 of 57 games, a win rate of 56.1%. For comparison, choosing to bat first after the toss has a 37.5% win rate.\n\n### Why the bias exists\nTwo factors align:\n1) The death overs are expensive (10.59 rpo). If you know your chase number and keep wickets, you can ‘buy’ the end overs.\n2) The venue’s historical distribution leans slightly to chasing (bat-second wins 37 vs bat-first wins 26).\n\n### The decision rule\n- If you have two high-quality death hitters and batting depth, field first. Your chase flexibility is worth more than 10–15 runs.\n- If your bowling attack is built to take early wickets, you can consider batting first — but you must target the upper par band (178+).\n\nFor Match 1, the clean analytics call is simple: if you win the toss, take the option that gives you information and preserves death-overs control — which the historical data frames as **field first**.\n",
    "relatedPlayerIds": [
      6,
      11
    ],
    "chartData": [
      {
        "label": "Toss: field first chosen (%)",
        "value": 87.7,
        "color": "#f59e0b"
      },
      {
        "label": "Win% when field first",
        "value": 56.1,
        "color": "#10b981"
      },
      {
        "label": "Win% when bat first",
        "value": 37.5,
        "color": "#ef4444"
      }
    ],
    "matchId": 1
  },
  {
    "id": 4,
    "slug": "mi-vs-kkr-preview-wankhede-rewards-low-friction-chasing",
    "title": "MI vs KKR Preview: Wankhede Rewards Low-Friction Chasing",
    "subtitle": "A data-first preview for Match 2 in Mumbai.",
    "category": "match-preview",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "mi",
      "kkr",
      "match-2",
      "preview"
    ],
    "featured": false,
    "content": "Wankhede games are often described as ‘good batting wickets’, but the better framing is *low friction* cricket. CricDNA’s Wankhede sample shows an average first-innings score of 166.0, and the average second-innings score stays close (154.4), which is what you expect at a venue where chasing doesn’t require miracles.\n\n### The venue profile\nWankhede’s phase run rates are steady: powerplay 7.10, middle 7.71, death 9.95. The lack of a dramatic spike is meaningful — it suggests that teams can win by being consistently ‘good’ rather than needing a single explosive phase.\n\n### MI vs KKR: what matters most\nFor Mumbai Indians, the classic Wankhede advantage is maximizing top-order time. For Kolkata Knight Riders, the challenge is bowling enough ‘disruption overs’ to prevent MI from coasting through 7–15.\n\nToss behaviour at this ground is less extreme than Bengaluru but still leans toward fielding first: 51 of 73 toss winners chose to field (69.9%). The win rate when choosing to field first is 51.0%, basically coin-flip territory — which makes sense because Wankhede is balanced (bat-second wins 37 vs bat-first wins 36).\n\n### Par score\nGiven the 166.0 baseline and a relatively stable scoring curve, a par band of roughly 161–176 is realistic. The key is not only how many runs you score, but *where* you score them. A 55-run powerplay at Wankhede increases win probability more than a late surge, because it reduces the need for high-risk boundary hunting later.\n\n**Prediction lens:** expect the match to be decided by the bowling side’s ability to prevent an ‘easy’ chase. If the chasing team keeps required rate below 9 by over 12, Wankhede usually turns into a finishing tutorial.\n",
    "relatedPlayerIds": [
      13,
      11,
      3
    ],
    "chartData": [
      {
        "label": "Avg 1st inns score",
        "value": 166.0,
        "color": "#3b82f6"
      },
      {
        "label": "Avg 2nd inns score",
        "value": 154.4,
        "color": "#10b981"
      },
      {
        "label": "Death overs RPO",
        "value": 9.95,
        "color": "#ef4444"
      }
    ],
    "matchId": 2
  },
  {
    "id": 5,
    "slug": "wankhede-pitch-report-balanced-scoring-middle-overs-leverage",
    "title": "Wankhede Pitch Report: Balanced Scoring, Middle-Overs Leverage",
    "subtitle": "Mumbai’s phase profile and the bowling templates it rewards.",
    "category": "pitch-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "wankhede",
      "pitch-report",
      "match-2"
    ],
    "featured": false,
    "content": "Wankhede is not the most extreme batting venue in IPL history, but it is among the most *repeatable*. CricDNA’s sample lists an average first-innings score of 166.0 and a second-innings average of 154.4. That closeness tells you conditions don’t swing wildly across innings.\n\n### Phase scoring\n- Powerplay: 7.10 rpo\n- Middle overs: 7.71 rpo\n- Death overs: 9.95 rpo\n\nUnlike Bengaluru, the death is not a separate sport; it’s simply an extension of solid batting. That changes the bowling plan: you can’t ‘save’ your best bowler for the end if you’re already losing the match in overs 7–12.\n\n### Bowling strategy: win the middle\nBecause middle-overs scoring is 7.71 rpo, any spell that forces dot balls and prevents easy singles creates immediate leverage. The winning template is twofold:\n1) Powerplay wicket to break the top order’s rhythm.\n2) A 2-over middle squeeze where the batting side is forced into higher-risk boundary attempts.\n\n### Batting strategy: keep the game simple\nAt Wankhede, chasing teams should avoid over-optimizing. The venue rewards consistent boundary access, not only late-innings heroics. Set a target of being within 10 runs of the required rate at the halfway mark, then let the 9.95 rpo death phase do its normal work.\n",
    "relatedPlayerIds": [
      13,
      11,
      3
    ],
    "chartData": [
      {
        "label": "Powerplay RPO",
        "value": 7.1,
        "color": "#22c55e"
      },
      {
        "label": "Middle RPO",
        "value": 7.71,
        "color": "#3b82f6"
      },
      {
        "label": "Death RPO",
        "value": 9.95,
        "color": "#ef4444"
      }
    ],
    "matchId": 2
  },
  {
    "id": 6,
    "slug": "toss-report-mi-vs-kkr-when-the-coin-flip-is-actually-neutral",
    "title": "Toss Report (MI vs KKR): When the Coin Flip is Actually Neutral",
    "subtitle": "Wankhede toss tendencies and a decision rule for Match 2.",
    "category": "toss-report",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "toss",
      "wankhede",
      "mi",
      "kkr"
    ],
    "featured": false,
    "content": "The Wankhede toss is often framed as a dew story, but CricDNA’s numbers suggest something more neutral. Toss winners have opted to field first 51 times out of 73 (69.9%), yet the win rates are close: 51.0% when fielding first versus 50.0% when batting first.\n\n### What this means for MI vs KKR\nIf the toss is near-neutral, team composition should decide:\n- If your bowling attack has a strong new-ball pair, consider batting first and aiming for a top-end par.\n- If your batting has superior finishing depth, field first and chase with flexibility.\n\nThe key is to avoid the common error: assuming ‘chase is always better’. Wankhede’s venue record is balanced (bat-first wins 36 vs bat-second wins 37). So the toss should be used to maximize *matchups* rather than blindly choosing an innings.\n",
    "relatedPlayerIds": [
      13,
      11,
      3
    ],
    "chartData": [
      {
        "label": "Field first chosen (%)",
        "value": 69.9,
        "color": "#f59e0b"
      },
      {
        "label": "Win% field first",
        "value": 51.0,
        "color": "#10b981"
      },
      {
        "label": "Win% bat first",
        "value": 50.0,
        "color": "#ef4444"
      }
    ],
    "matchId": 2
  },
  {
    "id": 7,
    "slug": "rr-vs-csk-preview-guwahati-as-a-game-theory-match",
    "title": "RR vs CSK Preview: Guwahati as a Game-Theory Match",
    "subtitle": "How to preview a match when the venue identity is still forming.",
    "category": "match-preview",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "rr",
      "csk",
      "match-3",
      "preview"
    ],
    "featured": false,
    "content": "Match 3 takes IPL 2026 to Guwahati (Barsapara), and CricDNA’s data flags a key constraint: we have limited venue scoring splits here compared to the major IPL grounds. What we *do* have is toss behaviour and the broader lesson that neutral/secondary venues often behave like ‘game theory’ matches — teams win by creating matchup advantages rather than relying on a known pitch identity.\n\n### Toss and innings preference\nIn CricDNA’s Barsapara toss sample (5 matches), captains have chosen to field first 4 times. That’s an 80% preference to chase, but the win rate when fielding first is only 25% (1 win in 4). Small sample warning applies, but it does suggest that blindly copying the ‘chase’ meta may backfire when conditions are not well-understood.\n\n### RR vs CSK: the matchup story\nRajasthan Royals want powerplay acceleration and boundary pressure. Chennai Super Kings traditionally want control: reduce variance, force the opponent into low-percentage options, then win with finishing depth.\n\nWith this venue uncertainty, the most stable edge is role clarity:\n- If RR bat first, they should aim for a score that reduces chasing optionality.\n- If CSK chase, they should aim to keep wickets in hand for a strong finishing burst.\n\n### Analytical prediction\nTreat this match as a ‘decision tree’. The team that forces the opponent to change plans first usually wins. On a less-charted ground, that often comes from bowling plans — one high-impact over (double wicket or a 2-run over) changes how teams price risk.\n",
    "relatedPlayerIds": [
      7,
      20,
      10,
      18,
      14
    ],
    "chartData": [
      {
        "label": "Barsapara: field first chosen (%)",
        "value": 80.0,
        "color": "#f59e0b"
      },
      {
        "label": "Win% when field first",
        "value": 25.0,
        "color": "#10b981"
      },
      {
        "label": "Matches in sample",
        "value": 5,
        "color": "#3b82f6"
      }
    ],
    "matchId": 3
  },
  {
    "id": 8,
    "slug": "ipl-2026-meta-preview-win-the-venue-map-win-the-tournament",
    "title": "IPL 2026 Meta Preview: Win the Venue Map, Win the Tournament",
    "subtitle": "A season-wide analytics lens before Match 1.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "strategy",
      "analytics",
      "venues"
    ],
    "featured": false,
    "content": "Before the first ball of IPL 2026, the most useful forecasting tool is not a league table — it’s a venue map. CricDNA’s venue dataset shows how dramatically run environments can change across grounds.\n\n### Three venues, three scoring curves\n- Chinnaswamy (Bengaluru): avg first-innings 168.1, death overs 10.59 rpo.\n- Wankhede (Mumbai): avg first-innings 166.0, death overs 9.95 rpo.\n- (Smaller sample) Barsapara (Guwahati): toss preference suggests chasing is chosen often, but results are mixed.\n\nThe strategic takeaway: *one size does not fit all*. Teams that keep the same batting order and the same bowling-over allocation at every venue are effectively giving away expected value.\n\n### The CricDNA ‘two bad overs’ heuristic\nIn T20, matches swing when the fielding side creates two overs that massively underperform expectation (wickets + dots) or the batting side creates two overs that massively outperform expectation (boundary clusters). High-scoring venues make the ‘batting cluster’ easier; balanced venues make the ‘bowling squeeze’ more valuable.\n\n### What to watch in Week 1\n1) Do teams treat middle overs as a scoring phase at high-run-rate venues? (Bengaluru says they should.)\n2) Do teams use their best bowler before the death to buy wickets? (Because death is expensive.)\n3) Do captains adjust toss decisions by venue rather than using a blanket chase preference?\n\nIPL 2026 will be won by the teams that convert venue information into repeatable plans — not by the teams that rely on one magical innings.\n",
    "relatedPlayerIds": [
      1,
      13,
      18
    ],
    "chartData": [
      {
        "label": "Chinnaswamy death RPO",
        "value": 10.59,
        "color": "#ef4444"
      },
      {
        "label": "Wankhede death RPO",
        "value": 9.95,
        "color": "#f97316"
      },
      {
        "label": "Chinnaswamy avg 1st inns",
        "value": 168.1,
        "color": "#8b5cf6"
      }
    ]
  },
  {
    "id": 9,
    "slug": "trending-stat-chinnaswamys-death-overs-run-at-1059-rpo",
    "title": "Trending Stat: Chinnaswamy’s Death Overs Run at 10.59 RPO",
    "subtitle": "One number that explains why Bengaluru games explode late.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "trending-stat",
      "chinnaswamy",
      "death-overs"
    ],
    "featured": false,
    "content": "If you want one trending stat to anchor opening day, start with this: Chinnaswamy’s death overs have historically scored at 10.59 runs per over in CricDNA’s venue sample.\n\nThat number is a strategic signal. A death phase priced at 10.59 means:\n- defending teams need wickets before the 16th over, not ‘good execution’ at the end,\n- batting teams should preserve boundary hitters for the finish, and\n- captains should think of overs 13–16 as the wicket-buying window.\n\nFor Match 1, the simplest watchpoint is whether the fielding side can take at least one wicket between overs 13 and 16. If not, the expected finish at this venue is brutal.\n",
    "relatedPlayerIds": [
      6,
      1
    ]
  },
  {
    "id": 10,
    "slug": "fantasy-predictions-opening-weekend-picks-using-venue-math",
    "title": "Fantasy & Predictions: Opening Weekend Picks Using Venue Math",
    "subtitle": "A role-based fantasy approach for Matches 1–2.",
    "category": "analysis",
    "author": "CricDNA Analytics",
    "publishedAt": "2026-03-28T13:00:00Z",
    "readTime": "4 min read",
    "tags": [
      "ipl-2026",
      "fantasy",
      "predictions",
      "opening-weekend"
    ],
    "featured": false,
    "content": "Fantasy teams are often built on reputation. A better approach is to build on *role + venue*. For opening weekend, CricDNA’s venue profiles suggest two templates.\n\n### Template A: High-run venue (Bengaluru)\nAt Chinnaswamy, late overs are high-value (10.59 rpo). Prioritize:\n- top-3 batters (more balls faced in a fast environment),\n- death-overs bowlers who can take wickets (because wickets are worth more than economy),\n- one finishing hitter if chasing.\n\n### Template B: Balanced venue (Mumbai)\nAt Wankhede, scoring is steady and second-innings scoring stays close to first (154.4). Prioritize:\n- all-rounders who contribute across phases,\n- powerplay bowlers (early wickets shift the game),\n- a reliable anchor who can bat through.\n\n### Captain/VC heuristic\nPick captaincy based on who is most likely to face the most deliveries (top-order batters) or bowl the most high-leverage overs (new ball + death). At venues where death scoring is elevated, death wickets are the single best upside bet.\n\n**Prediction lens:** For Match 1, chasing sides get an inherent data advantage, so stack batters from the team batting second if you can. For Match 2, stack roles: powerplay wicket-takers and top-order run volume.\n",
    "relatedPlayerIds": [
      1,
      3,
      11,
      13,
      6
    ]
  }
] as Article[];

export const analyticsCards: AnalyticsCard[] = [
  {
    "type": "stat",
    "title": "Chinnaswamy par band",
    "value": "173–183",
    "description": "Using venue average + variance buffer for Match 1."
  },
  {
    "type": "stat",
    "title": "Wankhede toss neutrality",
    "value": "51.0%",
    "description": "Win% when choosing to field first after winning toss at Wankhede."
  },
  {
    "type": "stat",
    "title": "Barsapara sample size",
    "value": "5",
    "description": "Small-sample warning for Guwahati venue inference."
  },
  {
    "type": "player",
    "title": "Virat Kohli focus",
    "value": "Top-order run volume",
    "description": "At high-run venues, balls faced matters as much as strike rate.",
    "playerIds": [
      1
    ]
  }
] as AnalyticsCard[];
