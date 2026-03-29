/* CricDNA article data — schema matches frontend Article/AnalyticsCard interfaces */

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
    title: "RCB vs SRH, Match 1: Chinnaswamy chase-proofed -- RCB win with 26 balls to spare",
    slug: "rcb-vs-srh-match-1-analytics-chase-proofed",
    publishedAt: "2026-03-29",
    category: "analysis",
    subtitle: "Royal Challengers Bengaluru began IPL 2026 by turning a 200+ chase into a template: win the powerplay, keep wickets in hand, then cash in at the death.",
    content: "Royal Challengers Bengaluru opened IPL 2026 with a chase at the M. Chinnaswamy Stadium, hunting down SRH's 201 and finishing at 203/4 in 15.4 overs to win by six wickets.\n\nChinnaswamy's profile is defined by its death overs: **10.59 rpo**, higher than powerplay (**7.07**) and middle (**8.08**). That is why 'par' totals are unstable unless the bowling side can take wickets.\n\nThe chase template in Bengaluru is repeatable: win the powerplay without losing wickets, play stable middle overs, and arrive at over 16 with hitters + wickets to exploit the highest-yield phase.",
    tags: ["RCB", "SRH", "Chinnaswamy", "Chase", "IPL 2026"],
    author: "CricDNA Analytics",
    readTime: "4 min",
    featured: true,
    relatedPlayerIds: [],
    chartData: [
      { label: "Powerplay", value: 7.07, color: "#4F46E5" },
      { label: "Middle (7-15)", value: 8.08, color: "#06B6D4" },
      { label: "Death (16-20)", value: 10.59, color: "#F59E0B" },
    ],
  },
  {
    id: 2,
    title: "Virat Kohli: the powerplay control that makes RCB's batting compounding",
    slug: "virat-kohli-powerplay-control-ipl-2026",
    publishedAt: "2026-03-29",
    category: "analysis",
    subtitle: "At high-yield venues, powerplay value is about reaching launch position with wickets intact -- not just raw strike rate.",
    content: "At high-scoring venues, the batting side's first job is simple: reach the death phase with enough wickets to access the ceiling.\n\nThat's why Virat Kohli's role remains valuable. Chinnaswamy historically scores at **10.59 rpo** in the final five overs -- meaning a stable powerplay can compound into a match-winning finish.\n\nFor an opener, track wickets lost by over 7 alongside the score. Getting to 45-55 with 0-1 down is often worth more than a high-risk 60/3 start.\n\nAgainst Ravindra Jadeja, Kohli has scored 179 off 160 balls (SR 111.87) with 3 dismissals in the matchup sample.",
    tags: ["RCB", "Virat Kohli", "Powerplay", "IPL 2026"],
    author: "CricDNA Analytics",
    readTime: "5 min",
    featured: false,
    relatedPlayerIds: [1],
  },
  {
    id: 3,
    title: "RCB vs SRH: the three-over window that decides most Bengaluru games",
    slug: "rcb-srh-bengaluru-three-over-window",
    publishedAt: "2026-03-29",
    category: "analysis",
    subtitle: "At Chinnaswamy, overs 16-18 carry disproportionate win-probability weight because death scoring is structurally inflated.",
    content: "Chinnaswamy's phase scoring is clear: powerplay **7.07 rpo**, middle **8.08 rpo**, death **10.59 rpo**.\n\nThat gap is why overs 16-18 become the pressure peak: a single execution error can cost 15-18 runs.",
    tags: ["RCB", "SRH", "Death overs", "Venue analysis"],
    author: "CricDNA Analytics",
    readTime: "4 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 4,
    title: "MI vs KKR pitch report: what Wankhede Stadium historically rewards",
    slug: "mi-vs-kkr-pitch-report-wankhede-stadium",
    publishedAt: "2026-03-29",
    category: "pitch-report",
    subtitle: "Phase scoring, par-score bands, and where the risk sits for MI vs KKR.",
    content: "Venue phase baseline: powerplay 7.1 rpo, middle 7.71 rpo, death 9.95 rpo.\n\nQuick heuristic: 165-185 is competitive batting first; 190+ is advantage if death bowling holds.",
    tags: ["MI", "KKR", "Pitch", "Venue"],
    author: "CricDNA Analytics",
    readTime: "5 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 5,
    title: "MI vs KKR toss analysis: how big is the chase bias at Wankhede Stadium?",
    slug: "mi-vs-kkr-toss-analysis-wankhede-stadium",
    publishedAt: "2026-03-29",
    category: "toss-report",
    subtitle: "Captain choice and historical chasing outcomes at this venue.",
    content: "Captains field first about 69.9% here, and chasing wins around 50.7% in the historical sample.\n\nIf conditions look typical, expect the toss winner to chase.",
    tags: ["MI", "KKR", "Toss", "Chasing"],
    author: "CricDNA Analytics",
    readTime: "4 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 6,
    title: "MI vs KKR preview: venue levers and the 12-over wicket KPI",
    slug: "mi-vs-kkr-preview-wankhede-stadium",
    publishedAt: "2026-03-29",
    category: "match-preview",
    subtitle: "Analytics-first preview of MI vs KKR.",
    content: "Phase scoring baseline: PP 7.1 rpo, middle 7.71 rpo, death 9.95 rpo.\n\nToss lean: field first about 69.9%; chasing wins about 50.7%.\n\nOne KPI to track: wickets in hand at 12 overs.",
    tags: ["MI", "KKR", "Preview", "Analytics"],
    author: "CricDNA Analytics",
    readTime: "6 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 7,
    title: "RR vs CSK pitch report: what Barsapara Stadium historically rewards",
    slug: "rr-vs-csk-pitch-report-barsapara-stadium",
    publishedAt: "2026-03-29",
    category: "pitch-report",
    subtitle: "Phase scoring, par-score bands, and where the risk sits for RR vs CSK.",
    content: "Venue phase baseline: powerplay 7.28 rpo, middle 7.51 rpo, death 9.37 rpo.\n\nQuick heuristic: 165-185 is competitive batting first; 190+ is advantage if death bowling holds.",
    tags: ["RR", "CSK", "Pitch", "Venue"],
    author: "CricDNA Analytics",
    readTime: "5 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 8,
    title: "RR vs CSK toss analysis: how big is the chase bias at Barsapara Stadium?",
    slug: "rr-vs-csk-toss-analysis-barsapara-stadium",
    publishedAt: "2026-03-29",
    category: "toss-report",
    subtitle: "Captain choice and historical chasing outcomes at this venue.",
    content: "Captains field first about 63.6% here, and chasing wins around 61.0% in the historical sample.\n\nIf conditions look typical, expect the toss winner to chase.",
    tags: ["RR", "CSK", "Toss", "Chasing"],
    author: "CricDNA Analytics",
    readTime: "4 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 9,
    title: "RR vs CSK preview: venue levers and the 12-over wicket KPI",
    slug: "rr-vs-csk-preview-barsapara-stadium",
    publishedAt: "2026-03-29",
    category: "match-preview",
    subtitle: "Analytics-first preview of RR vs CSK.",
    content: "Phase scoring baseline: PP 7.28 rpo, middle 7.51 rpo, death 9.37 rpo.\n\nToss lean: field first about 63.6%; chasing wins about 61.0%.\n\nOne KPI to track: wickets in hand at 12 overs.",
    tags: ["RR", "CSK", "Preview", "Analytics"],
    author: "CricDNA Analytics",
    readTime: "6 min",
    featured: false,
    relatedPlayerIds: [],
  },
  {
    id: 10,
    title: "IPL 2026 early-season model: use venue phase curves before you trust the table",
    slug: "ipl-2026-early-season-model-venue-phase-curves",
    publishedAt: "2026-03-29",
    category: "analysis",
    subtitle: "Small samples distort early rankings. Venue scoring profiles are a stable early signal.",
    content: "Death-overs scoring baselines in our dataset: Chinnaswamy 10.59 rpo, Wankhede 9.95 rpo, Eden 9.37 rpo.\n\nUse venue curves to decide which skills matter most: powerplay batters, middle-overs wicket takers, or death-overs finishers.",
    tags: ["IPL 2026", "Strategy", "Venues", "Analytics"],
    author: "CricDNA Analytics",
    readTime: "6 min",
    featured: false,
    relatedPlayerIds: [],
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "stat",
    title: "Featured",
    value: "RCB won by 6 wkts",
    description: "Chinnaswamy death overs keep rewarding teams that preserve wickets.",
  },
  {
    type: "matchup",
    title: "Tonight",
    value: "MI vs KKR",
    description: "Wankhede preview + venue levers.",
  },
  {
    type: "stat",
    title: "Season lens",
    value: "Venue curves",
    description: "Stable priors beat early table volatility.",
  },
];
