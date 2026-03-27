export interface PublishEntry {
  date: string;
  timestamp: string;
  commitHash: string;
  articlesCount: number;
  articleTitles: string[];
  matchesCovered: string[];
  sources: string[];
  status: "success" | "failed";
  notes: string;
}

// This file is auto-updated by the daily cron pipeline.
// Each run appends an entry. Most recent first.
export const publishLog: PublishEntry[] = [
    {
      date: "2026-03-27",
      timestamp: "2026-03-27T13:00:00Z",
      commitHash: "TBD",
      articlesCount: 10,
      articleTitles: ["IPL 2026 Opening Weekend: An Analytics Cheat Sheet for Matches 1\u20133", "Chinnaswamy Pitch Report (RCB vs SRH): Why Par Is a Distribution, Not a Number", "Toss Analysis (RCB vs SRH): Why Captains Chase in Bengaluru", "RCB vs SRH Match Preview: The Matchups That Actually Matter at Chinnaswamy", "Wankhede Pitch Report (MI vs KKR): Why the Last 30 Balls Matter More Here", "Toss Analysis (MI vs KKR): Wankhede Is 50-50 \u2014 So Stop Overweighting the Coin", "MI vs KKR Match Preview: Why the Middle Overs Decide a Venue Built for Finishes", "Barsapara (Guwahati) Pitch Report (RR vs CSK): How to Preview a Venue Without Overfitting", "RR vs CSK Match Preview: The Jadeja Matchups That Can Flip the Middle Overs", "IPL 2026 Power Rankings (Pre-Season Priors): Rank the Options, Not the Names"],
      matchesCovered: ["RCB vs SRH (Mar 28)", "MI vs KKR (Mar 29)", "RR vs CSK (Mar 30)"],
      sources: ["CricDNA datasets: venueStats.json, tossStats.json, headToHead.json, playerCareerStats.json"],
      status: "success" as const,
      notes: "Generated 10 pre-match analytics articles for opening weekend matches 1-3 using in-repo data. Build and deploy via git push."
    },

  {
    date: "2026-03-24",
    timestamp: "2026-03-24T13:00:00Z",
    commitHash: "1fbec6f",
    articlesCount: 10,
    articleTitles: [
      "Chinnaswamy Pitch Report: Why 200 Is the New Par and What History Says About RCB vs SRH",
      "Toss Analysis: Why Chasing at Chinnaswamy Under Lights Is a 62% Advantage",
      "RCB vs SRH Match Preview: 5 Key Matchups That Will Decide the IPL 2026 Opener",
      "Wankhede Pitch Report: 9.3 RPO Powerplay Average and What MI's Home Fortress Means for KKR",
      "Toss Analysis: Wankhede's Perfect 50-50 Split — Why the Coin Flip Won't Decide This Match",
      "MI vs KKR Match Preview: Can KKR Break Their 8-Year Wankhede Curse?",
      "Barsapara Pitch Report: Guwahati's Batting Paradise Where Hetmyer and Jaiswal Dominate",
      "RR vs CSK Match Preview: The Double Revenge Match — Samson vs His Old Team, Jadeja vs His",
      "CricDNA Power Rankings: Rating All 10 IPL 2026 Teams by Squad Strength and Title Probability",
      "The Injury Map: How 14 Missing Players Reshape the IPL 2026 Power Balance"
    ],
    matchesCovered: ["RCB vs SRH (Mar 28)", "MI vs KKR (Mar 29)", "RR vs CSK (Mar 30)"],
    sources: [
      "ESPN Cricinfo — IPL 2026 injured players list",
      "WeatherSpark — Bengaluru March climate data"
    ],
    status: "success",
    notes: "Generated 10 pre-match analytics articles for opening weekend matches 1-3. Build succeeded, pushed to main."
  },
  {
    date: "2026-03-23",
    timestamp: "2026-03-23T17:30:00Z",
    commitHash: "2623529",
    articlesCount: 10,
    articleTitles: [
      "Chinnaswamy Pitch Report: Why 200 Is the New Par",
      "Toss Analysis: RCB vs SRH Chinnaswamy",
      "RCB vs SRH Match Preview: 5 Key Matchups",
      "Wankhede Pitch Report: 9.3 RPO Powerplay",
      "Toss Analysis: MI vs KKR Wankhede",
      "MI vs KKR Match Preview: Wankhede Curse",
      "Barsapara Pitch Report: Guwahati",
      "RR vs CSK Match Preview: Double Revenge",
      "IPL 2026 Power Rankings",
      "Injury Map: 14 Missing Players"
    ],
    matchesCovered: ["RCB vs SRH (Mar 28)", "MI vs KKR (Mar 29)", "RR vs CSK (Mar 30)"],
    sources: [
      "ESPN Cricinfo", "Sporting News", "Sportskeeda", "AccuWeather", "Business Standard", "CricTracker"
    ],
    status: "success",
    notes: "Initial launch — 10 analytics articles. Multi-agent pipeline: Designer, Researcher, Editor, Compliance, QA, SRE agents."
  }
];
