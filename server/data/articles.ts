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
    slug: "ipl-2026-match-30-gt-vs-mi-recap-tilak-ton-ashwani-4fer-99-run-win",
    title: "IPL 2026 Match 30 (GT vs MI) recap: Tilak Varma’s 45-ball hundred flips MI’s season in a 99-run demolition",
    subtitle: "Mumbai Indians made 199/5 and then bowled Gujarat Titans out for 100 in 15.5 overs at Ahmedabad on April 20.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "7 min",
    tags: ["IPL 2026", "MI", "GT", "Match 30", "Ahmedabad"],
    featured: true,
    relatedPlayerIds: [15, 11, 17, 2, 5, 25, 12],
    matchId: 30,
    chartData: [
      { label: "MI", value: 199, color: "#005DAA" },
      { label: "GT", value: 100, color: "#1C1C1C" }
    ],
    dataTable: {
      headers: ["Match 30 key numbers", "Value", "Why it mattered"],
      rows: [
        ["MI total", "199/5", "A par-plus score that became unchaseable once GT lost early wickets"],
        ["GT chase", "100 all out (15.5 ov)", "Collapse turned it into a net run-rate swing"],
        ["Tilak Varma", "101* (45)", "Joint-fastest MI hundred (45 balls) and a late-overs blowtorch"],
        ["Ashwani Kumar", "4/24", "Impact-sub burst that broke the middle and finished the innings"],
        ["Kagiso Rabada", "3/33", "Kept MI honest early, but MI’s death-overs surge decided the ceiling"]
      ]
    },
    content: `Mumbai Indians have been waiting for a single night that resets their season narrative. Match 30 in Ahmedabad did exactly that: MI put up 199/5 and then steamrolled Gujarat Titans for 100 in 15.5 overs, a 99-run win that felt even bigger than the margin.

The innings pivot was Tilak Varma’s first IPL hundred: 101* off 45. The scoreline can hide the story arc. MI were 44/3 early and, more importantly, still only 103/4 after 14 overs — the kind of position that often produces a “we’ll take 165” finish. Instead, Tilak detonated the last six overs. That one acceleration phase changed two things at once: it stretched the target well beyond a typical par score and it gave MI’s bowlers a freedom that’s priceless in T20.

Gujarat’s bowling did have a plan, and Rabada’s 3/33 suggested it could work. But the decisive error was allowing Tilak to settle into his strongest scoring zones. Once he began striking cleanly, the options narrowed: defend the boundary and he picked off singles; attack the stumps and he accessed the straight boundary. Late-innings batting at this level is about forcing “bad compromises,” and Tilak forced one every over.

Then came the chase that never started. A 200 target is manageable only if you preserve wickets through the first eight overs. GT didn’t. Their top order disappeared quickly, leaving Washington Sundar (26 off 17) as the leading scorer in a 100 all-out innings. When your top score is 26, it usually means two things happened: the ball demanded risk and the innings never found a stabilizer.

MI’s new-ball tone was the hidden win. Once the first cluster of wickets arrived, the chase’s required rate stopped being the main pressure — survival became the pressure. That is when impact spells like Ashwani Kumar’s 4/24 become match-ending, because batters are already behind the game and swinging into fielders.

From a table perspective, the value is obvious: points plus a net run-rate correction in one match. But from a tactical lens, the bigger takeaway is MI’s blueprint when their batting is thin early: back Tilak’s middle-overs control, then unleash him late rather than trying to “catch up” with reckless cross-bat shots in the 10th–14th overs. If this becomes repeatable, Match 30 will be remembered as the turning point — not just the blowout.`
  },
  {
    id: 2,
    slug: "ipl-2026-match-30-gt-collapse-why-100-all-out-happened",
    title: "GT’s 100 all out vs MI: how the chase collapsed in three phases (and what to fix)",
    subtitle: "Gujarat Titans were 55/5 inside eight overs while chasing 200 at Ahmedabad — the structure of the innings never recovered.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "GT", "MI", "Match 30", "Tactics"],
    featured: false,
    relatedPlayerIds: [5, 25, 12, 11, 2],
    matchId: 30,
    chartData: [
      { label: "Top order output", value: 19, color: "#d62728" },
      { label: "Rest of XI output", value: 81, color: "#1f77b4" }
    ],
    dataTable: {
      headers: ["Phase", "What happened", "Better option next time"],
      rows: [
        ["Overs 1–4", "Early wickets removed the ‘set-batter’ advantage", "Prioritize strike rotation + one boundary per over"],
        ["Overs 5–10", "Rebuild attempt raised dot-ball pressure", "Use a designated hitter to attack a matchup (even at risk)"],
        ["Overs 11–16", "Tail exposed with required rate still high", "Preserve one power-hitter for the final 6 overs"],
        ["Bowling matchup", "MI’s seam + left-arm angle created miscues", "Be willing to take spin risks earlier to avoid pace traps"],
        ["Game theory", "Chasing 200 demands proactivity", "Treat ‘par’ as irrelevant once the target is above 190" ]
      ]
    },
    content: `Getting bowled out for 100 while chasing 200 is not a “bad day at the office.” It is an innings that loses its logic early and then keeps making the same mistake under increasing pressure. Gujarat Titans’ collapse against Mumbai Indians in Match 30 can be understood in three phases: the initial damage, the false rebuild, and the late tail exposure.

Phase one was the biggest: early wickets. GT lost their top order quickly, and when that happens the chase stops being about the target and starts being about protecting what’s left. The problem is that protection itself is costly. In a 200 chase, every quiet over is a double penalty: you fall behind the required rate and you raise the future risk required to catch up. That is why early wickets are so destructive — they don’t just remove runs, they remove optionality.

Phase two was the false rebuild. When GT tried to settle, dot balls rose. Dot balls don’t only “waste deliveries”; they force batters to take low-quality shots later. You could see the logic trap: play safe now, but the required rate becomes impossible; attack now, and you might be 30/5. There is only one way out of this in modern IPL: assign one batter to own risk against a specific matchup. That batter must be allowed to fail — because if nobody takes that risk, the chase is guaranteed to fail.

Phase three was the tail. Once you are five down early, the final eight overs are played with the fear that one wicket ends the contest. That fear narrows shot selection, and narrowed shot selection is exactly what disciplined bowling attacks are built to exploit. MI’s bowlers — especially the impact spell from Ashwani Kumar — were able to bowl into that fear: hard lengths, angle across, and minimal freebies.

So what is the fix? It’s not “bat better.” It’s structural. In a 200 chase, you need two batters: one stabilizer and one aggressor. The stabilizer’s job is to keep singles flowing so the over doesn’t die. The aggressor’s job is to attack one bowling type early (often spin) so the chase doesn’t become a death-overs lottery.

GT will have nights where their top order clicks and none of this matters. But the best chasing sides build for the worst-case scenario. Match 30 is a reminder that once the target is above 190, ‘rebuild’ is not a phase — it’s a luxury you cannot afford.`
  },
  {
    id: 3,
    slug: "ipl-2026-match-30-mi-middle-order-tilak-dhir-partnership-impact",
    title: "Tilak + Dhir’s rescue act: why MI’s 199/5 was built after 44/3",
    subtitle: "Mumbai’s innings was defined by a late surge after a shaky powerplay, with Tilak Varma (101*) and Naman Dhir (45) flipping momentum.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "MI", "GT", "Batting"],
    featured: false,
    relatedPlayerIds: [15, 11, 17],
    matchId: 30,
    chartData: [
      { label: "After 14 ov", value: 103, color: "#ff7f0e" },
      { label: "Final", value: 199, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Checkpoint", "Score", "Implication"],
      rows: [
        ["Powerplay wobble", "44/3", "MI had to choose between safety and ceiling"],
        ["14-over mark", "103/4", "Still below par for a 190+ push"],
        ["Finish", "199/5", "A +96 run surge in last 6 overs changed match state"],
        ["Key support", "Dhir 45 (32)", "Allowed Tilak to play percentage cricket early"],
        ["GT best spell", "Rabada 3/33", "Couldn’t prevent the late-innings takeover" ]
      ]
    },
    content: `One of the most misleading things in T20 is the final total. Mumbai Indians ended on 199/5 in Ahmedabad, but the innings story was not “they batted first and got 199.” The story was that they were 44/3 early and still only 103/4 after 14 overs — and yet they finished at a score that felt 20 runs above par.

That swing happened because MI played the middle overs like a setup phase rather than a panic phase. Tilak Varma’s 101* off 45 will always be remembered for the end, but it was the beginning that mattered too: he spent the first half of his innings making sure MI didn’t lose a fifth wicket. That choice preserved the option to explode late.

This is where Naman Dhir’s 45 becomes vital. Without a partner, Tilak is forced into risk earlier, and risk earlier is what produces collapses. Dhir’s role was to keep the scoreboard moving, punish the rare loose ball, and rotate strike so Tilak didn’t have to manufacture boundaries from low-percentage positions.

The tactical lesson is simple but often ignored: when you are 44/3, you don’t need to hit your way out immediately. You need to keep wickets in hand until you can identify the weakest phase of the opposition attack. MI did that. Once they reached a position where the bowler types and boundary dimensions favored their shots, Tilak turned the switch.

In the last six overs, MI essentially played a different match. Instead of treating par as 165, they treated the goal as 195+. That mentality matters because teams under pressure often stop thinking about ceilings. Against GT, MI had to think ceiling-first — because their bowling attack needed a cushion to attack hard lengths without fear of being punished.

From GT’s side, Rabada’s 3/33 shows the plan wasn’t wrong. But T20 plans break when batters don’t blink. Tilak didn’t blink, and MI’s innings became a blueprint for how to play after early damage: stabilize, preserve, then overwhelm. If MI are to climb the table from here, this is the template they’ll want to repeat.`
  },
  {
    id: 4,
    slug: "ipl-2026-match-31-srh-vs-dc-preview-key-battles-hyderabad",
    title: "IPL 2026 Match 31 preview (SRH vs DC): Hyderabad pace vs Delhi’s left-hand core",
    subtitle: "Rajiv Gandhi International Stadium trends and matchup levers for SRH vs DC on April 21.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "SRH", "DC", "Match 31", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [28, 9, 4, 30, 26],
    matchId: 31,
    chartData: [
      { label: "Hyderabad avg 1st inns", value: 168.2, color: "#ff7f0e" },
      { label: "Hyderabad avg 2nd inns", value: 157.3, color: "#1f77b4" },
      { label: "Hyderabad death RPO", value: 10.62, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Hyderabad (historical T20/IPL)", "Value", "Preview note"],
      rows: [
        ["Matches", "55", "Large enough sample for trend confidence"],
        ["Avg 1st inns", "168.2", "Power hitters can reach 190+ with wickets in hand"],
        ["Toss: field first", "60.0%", "Captains often prefer chasing"],
        ["Bat second wins", "32/55", "Chasing edge, but not automatic"],
        ["Death overs RPO", "10.62", "Finishing quality usually decides the result" ]
      ]
    },
    content: `Match 31 brings two teams that win in very different ways. Sunrisers Hyderabad typically lean on top-order intent and a bowling attack that tries to take wickets in clusters. Delhi Capitals, by contrast, often play T20 like a “depth game”: survive the tricky overs, keep options, and then let their finishing hitters decide the last six.

Hyderabad’s Rajiv Gandhi International Stadium tends to reward late-innings hitters. Historically the average first-innings score sits at 168.2 and the death-overs run rate is a striking 10.62. That combination creates a clear message: if you keep wickets for the last six overs, you can change the game quickly.

So what should each side optimize? For SRH, the key is to turn the middle overs into wicket-taking overs. If SRH allow DC to arrive at 12 overs with only two down, the finishing phase becomes hard to control. That is where SRH’s matchup bowling has to be brave: attack stumps, use short boundaries intelligently, and bowl their best wicket-takers in the overs where DC are most likely to “take a breath.”

For DC, the biggest lever is their left-hand core — especially Rishabh Pant. Pant’s power against pace can flip SRH’s length plans, and it also forces SRH to hold back their best matchups. If DC can get Pant in with 8–10 overs remaining, he can force SRH to defend 360 degrees.

The toss matters here, but not because chasing is always easier. It matters because it influences how teams structure their risk. Toss winners choose to field first 60% of the time at Hyderabad, and teams batting second have won 32 of 55 matches. The real advantage is clarity: you know whether 175 is enough or whether you must push to 200.

CricDNA’s watchpoint: whichever team wins the “wickets vs tempo” battle in overs 7–15 will likely win the match. On a ground where death overs run fast, the team that enters the final six with more hitters usually controls the finish.`
  },
  {
    id: 5,
    slug: "ipl-2026-match-32-lsg-vs-rr-preview-ekana-slow-wicket-risk-management",
    title: "IPL 2026 Match 32 preview (LSG vs RR): Ekana’s slow-overs squeeze and the case for batting first",
    subtitle: "Lucknow’s Ekana Stadium trends suggest a lower par, tighter middle overs, and high value for wickets in hand.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "LSG", "RR", "Match 32", "Lucknow"],
    featured: false,
    relatedPlayerIds: [4, 22, 7, 20, 12],
    matchId: 32,
    chartData: [
      { label: "Ekana avg 1st inns", value: 152.4, color: "#ff7f0e" },
      { label: "Ekana middle RPO", value: 6.87, color: "#1f77b4" },
      { label: "Ekana bat first win%", value: 54.1, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Ekana (T20 history)", "Value", "What it means"],
      rows: [
        ["Matches", "37", "Smaller sample than major venues, but consistent pattern"],
        ["Avg 1st inns", "152.4", "Par is lower; 170 is often a strong total"],
        ["Middle overs RPO", "6.87", "Risk is punished; strike rotation is gold"],
        ["Bat first win%", "54.1%", "Setting a target can be an edge"],
        ["Toss: field first", "59.5%", "Captains still prefer chasing despite bat-first success" ]
      ]
    },
    content: `Lucknow’s Ekana Stadium is a venue where T20 games feel longer than 20 overs. The scoring pattern is usually defined by a quiet middle, uneven bounce, and a premium on boundary-hitting timing rather than brute force. That is why Match 32 (LSG vs RR) becomes a risk-management contest as much as a skill contest.

Historically, Ekana’s average first-innings score is 152.4 and the middle overs run rate is only 6.87. In practical terms, that means “normal” batting plans don’t work. If you come in with the idea of taking a breath from overs 7–14, you might never get out of second gear. The teams that succeed at Ekana are the teams that win singles early, keep wickets, and then choose exactly two overs to attack hard.

For LSG, the storyline is psychological as much as technical. Coming off a 250+ chase attempt recently, their batters must adjust to a ground that doesn’t allow constant boundary pressure. Rishabh Pant’s power is a weapon, but on Ekana the more important skill is shot selection: pick the straight boundary, avoid the cross-bat traps, and do not let dot balls pile up.

For RR, the matchup center is their middle-over control. If RR can apply a squeeze with their spin options and slow cutters, they can force LSG into the very mistake that loses games at Ekana: trying to create boundaries from balls that don’t deserve boundaries.

The toss is tricky. Toss winners choose to field first 59.5% of the time here, but bat-first teams have won 54.1% of matches. That split suggests captains chase for comfort, but the pitch often rewards the side that sets the terms and forces the other to take risks.

CricDNA’s bottom line: treat 160 like 180 at this venue. If either side can post 170 with 7 wickets down or fewer, they will have the matchup advantage because defending at Ekana is about controlling pace and owning the middle overs.`
  },
  {
    id: 6,
    slug: "ipl-2026-match-33-mi-vs-csk-preview-wankhede-chase-bias-and-death-overs",
    title: "IPL 2026 Match 33 preview (MI vs CSK): Wankhede’s chase bias meets Chennai’s matchup bowling",
    subtitle: "Wankhede has near-even win split by innings, but death-overs scoring spikes — finishing depth is the headline.",
    category: "match-preview",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "MI", "CSK", "Match 33", "Mumbai"],
    featured: false,
    relatedPlayerIds: [15, 11, 13, 2, 14, 18, 19],
    matchId: 33,
    chartData: [
      { label: "Wankhede avg 1st inns", value: 168.8, color: "#ff7f0e" },
      { label: "Wankhede death RPO", value: 10.44, color: "#2ca02c" },
      { label: "Chase win%", value: 50.7, color: "#1f77b4" }
    ],
    dataTable: {
      headers: ["Wankhede (history)", "Value", "Preview angle"],
      rows: [
        ["Matches", "73", "High-confidence venue tendencies"],
        ["Avg 1st inns", "168.8", "190+ is achievable with wickets"],
        ["Avg 2nd inns", "161.6", "Chasing stays viable deep into the innings"],
        ["Bat second wins", "37/73", "Almost 50–50: execution matters more than toss"],
        ["Death overs RPO", "10.44", "Finishing quality decides ‘par’" ]
      ]
    },
    content: `MI’s confidence will be high after the Ahmedabad demolition, but Match 33 brings a different problem: Chennai Super Kings rarely beat themselves. At Wankhede, where boundaries are short and the ball skids on, this becomes a game of finishing depth and bowling matchups.

The venue numbers set the context. Wankhede’s average first-innings score is 168.8 and the death-overs run rate is 10.44. That makes the last six overs the biggest swing phase. A side that arrives at the 14-over mark with wickets intact can add 70 in a hurry — and a side that arrives with two batters left can leave 20–30 runs on the table.

MI’s likely advantage is their intent. Tilak Varma’s recent form and the presence of hitters around him give MI the ability to keep the accelerator down. The question is whether MI can handle CSK’s slower-ball and wide-line discipline — the most common way to defend at Wankhede.

CSK’s lever is tactical bowling. If they can push MI’s key batters to hit square (where miscues travel to fielders), they can turn Wankhede from a paradise into a pressure cooker. That requires brave fielding positions and a willingness to concede singles while protecting the boundary.

From MI’s side, the bowling headline is Jasprit Bumrah. If MI take wickets in the powerplay, they can prevent CSK from setting up a 60–70 run finish. If they don’t, CSK will run the chase like a spreadsheet: steady, low-risk, and then ruthless late.

The toss won’t decide the match by itself — batting second has only a slight edge historically (37 wins in 73). The more important contest is who controls pace: can MI force the game to be played at 10+ RPO from over 7, or can CSK drag it into a matchup-by-matchup grind?

CricDNA’s call: watch overs 15–20 of both innings. On this ground, the best finishers — and the smartest death bowling plans — usually win.`
  },
  {
    id: 7,
    slug: "hyderabad-pitch-report-match-31-srh-vs-dc-rajiv-gandhi-stadium",
    title: "Hyderabad pitch report (Match 31 SRH vs DC): expect a batting-friendly start and a fast finishing phase",
    subtitle: "Rajiv Gandhi International Stadium historically produces 168 first-innings runs and very high death-over scoring.",
    category: "pitch-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "5 min",
    tags: ["Pitch report", "SRH", "DC", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [28, 9, 4, 26],
    matchId: 31,
    chartData: [
      { label: "Powerplay RPO", value: 7.88, color: "#ff7f0e" },
      { label: "Middle overs RPO", value: 7.35, color: "#1f77b4" },
      { label: "Death overs RPO", value: 10.62, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Hyderabad indicator", "Number", "Read"],
      rows: [
        ["Avg 1st inns", "168.2", "A 170-par venue with room for 200"],
        ["Highest listed score", "231", "Ceiling is high when top order fires"],
        ["Chasing wins", "32/55", "Slight chasing preference"],
        ["Toss: field first", "60.0%", "Captains often trust dew and clarity"],
        ["Death-over RPO", "10.62", "Expect 50–65 runs possible in last five" ]
      ]
    },
    content: `If you want a one-line pitch report for Hyderabad: it’s a venue where games are often decided in the final six overs. The Rajiv Gandhi International Stadium’s historical scoring profile is clear — average first-innings score of 168.2, a healthy powerplay rate, and then a death-overs run rate that spikes to 10.62.

That combination usually produces a familiar match shape. Teams start fast because the ball comes on in the first half of the innings, then there is a short “management phase” as spinners and cutters take over, and then the finish becomes explosive once the set batters target the shorter boundaries.

For Match 31 (SRH vs DC), the pitch expectation is therefore less about whether it is flat and more about how long it stays true. If it stays true for 20 overs, a total in the 190–205 range is realistic. If it slows even slightly, the team that bats smarter (and keeps wickets) will still be able to finish strongly — because the venue’s late-innings scoring has historically remained high.

What is a good score? CricDNA’s rule at Hyderabad is to judge ‘par’ based on wickets. If you are 170/7, that’s fragile. If you are 170/4, that’s strong — because you can control the last six overs. The death-overs number (10.62 RPO) tells you that a team with hitters left can add 55–65 from 15 balls if the bowling misses its yorkers.

Bowling plans that work here tend to share two traits: (1) take pace off into the pitch in the middle overs, and (2) defend straight boundaries late with full lengths rather than short balls. The worst thing you can do in Hyderabad is allow a batter to ‘stand and deliver’ to the sight screen.

Expect a surface that rewards clean hitting early, punishes casual bowling at the end, and makes the toss influential mainly because it determines risk appetite. If either side is chasing and reaches the 12-over mark within 10 runs of the required rate with 7 wickets in hand, they will be in a commanding position.`
  },
  {
    id: 8,
    slug: "hyderabad-toss-report-match-31-srh-vs-dc-field-first-bias",
    title: "Hyderabad toss report (Match 31 SRH vs DC): why captains keep choosing to chase",
    subtitle: "At Hyderabad, toss winners field first 60% of the time and teams batting second have won 32 of 55 matches.",
    category: "toss-report",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "5 min",
    tags: ["Toss", "SRH", "DC", "Hyderabad"],
    featured: false,
    relatedPlayerIds: [28, 4, 26],
    matchId: 31,
    chartData: [
      { label: "Choose to field", value: 60.0, color: "#1f77b4" },
      { label: "Choose to bat", value: 40.0, color: "#ff7f0e" }
    ],
    dataTable: {
      headers: ["Toss lens (Hyderabad)", "Number", "Takeaway"],
      rows: [
        ["Matches", "55", "Reliable venue tendency"],
        ["Toss winners field first", "60.0%", "Chasing is the default call"],
        ["Win rate if field first", "56.7%", "Small edge, but execution still matters"],
        ["Overall chasing wins", "32/55", "Chasing advantage is real but not huge"],
        ["Death-overs scoring", "10.62 RPO", "Clarity on target helps captains manage risk" ]
      ]
    },
    content: `Hyderabad is one of those venues where the toss feels more important than it actually is — not because the numbers scream “chase always,” but because captains consistently behave as if they do. Historically, toss winners choose to field first 60% of the time at the Rajiv Gandhi International Stadium.

Why? The simplest explanation is clarity. On a ground where the death overs score at 10.62 runs per over, knowing whether you need 55 off 30 or 75 off 30 is a big strategic advantage. In chases, teams can plan their risk around the last six overs: preserve hitters, keep the required rate within reach, then explode.

The results do show a modest edge. Teams batting second have won 32 of 55 matches here, and teams that field first after winning the toss have a win rate around the mid-50s. But it’s crucial to read these numbers correctly. They do not mean ‘batting first is losing.’ They mean batting first requires better planning.

If you bat first at Hyderabad, your goal isn’t just to post a number — it’s to post a number with wickets in hand. A 175/4 is far more defendable than a 185/8, because the latter usually indicates the pitch was slower or the innings lost momentum. Defending teams need a scoreboard that allows attacking bowling in the powerplay and middle overs.

So what should the Match 31 captains do? If the pitch looks true and there is even a hint of dew, fielding first is logical. If the pitch looks used, dry, or likely to slow, batting first can actually be a better call — because defending a ‘sticky’ Hyderabad surface is easier than chasing on it.

CricDNA’s toss takeaway: the venue nudges captains toward chasing, but the match is still decided by the middle overs. Win those, and the toss becomes a footnote.`
  },
  {
    id: 9,
    slug: "ipl-2026-analysis-tilak-varma-turning-point-for-mi-season",
    title: "Analysis: why Tilak Varma’s hundred could be MI’s season turning point",
    subtitle: "A single innings can shift a team’s decision-making; Tilak’s 101* did that by giving MI a repeatable ‘stabilize-then-surge’ template.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "MI", "Tilak Varma", "Batting"],
    featured: false,
    relatedPlayerIds: [15, 11, 2, 13],
    chartData: [
      { label: "Early (first 14 ov)", value: 103, color: "#1f77b4" },
      { label: "Late (last 6 ov)", value: 96, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["MI template", "What it looks like", "Why it works"],
      rows: [
        ["Stabilize", "Avoid 5th wicket before over 12", "Preserves late-overs ceiling"],
        ["Identify weak phase", "Target one bowler type in overs 13–16", "Efficient acceleration without chaos"],
        ["Surge", "Two hitters for last 6 overs", "Turns 170 totals into 195+ totals"],
        ["Bowl with freedom", "Attack lengths, hunt wickets", "Targets become pressure, not comfort"],
        ["NRR upside", "Big wins compound quickly", "Playoff tie-breakers reward blowouts" ]
      ]
    },
    content: `T20 seasons are often decided by small margins — one close finish, one dropped catch, one over of bad death bowling. But occasionally there is a single innings that changes a team’s self-image. Tilak Varma’s 101* against Gujarat Titans has the feel of that kind of moment for Mumbai Indians.

Why? Because it didn’t just add runs; it created a template. MI were 44/3 and still not cruising at 14 overs. In many seasons, MI in that spot would choose chaos: swing hard, hope for 180, and accept that the game is a coin flip. Instead, Tilak chose control first and violence later. That choice is reproducible.

The template is ‘stabilize, then surge.’ Stabilize means refusing to lose the fifth wicket too early, even if it costs 10–15 runs in the short term. Those runs are not lost — they are deferred into a higher-value phase of the innings. Surging in the last six overs is higher value because (a) fielders are back, (b) bowlers are under pressure to execute yorkers, and (c) set batters can hit to their preferred boundaries.

In Match 30, the surge was almost absurd: 96 runs from the last six overs. That late acceleration doesn’t just raise the total; it changes how bowlers behave in the chase. Bowlers become more attack-minded, captains set more aggressive fields, and the batting side feels the required rate earlier. That is exactly what happened to GT.

The interesting ripple is what this means for MI’s lineup decisions. When a team has a stable middle-order anchor in form, it can pick bowlers and all-rounders for impact rather than for ‘batting insurance.’ It can also be braver with matchups: hold Bumrah for a batter, use Hardik’s overs tactically, and introduce impact subs based on game state.

Tilak’s hundred is therefore not just a highlight. It is a strategic unlock. If MI keep repeating the stabilize-then-surge pattern, they will win more games than their early-season form suggests — and they will also win them by margins that matter when playoff races come down to net run rate.`
  },
  {
    id: 10,
    slug: "ipl-2026-analysis-venue-par-scores-hyderabad-ekana-wankhede",
    title: "Venue analytics: par scores and phase scoring at Hyderabad, Ekana and Wankhede",
    subtitle: "Three upcoming venues offer three different problems: Hyderabad rewards finishers, Ekana rewards patience, Wankhede rewards depth.",
    category: "analysis",
    author: "CricDNA Analytics",
    publishedAt: "2026-04-21",
    readTime: "6 min",
    tags: ["IPL 2026", "Venue", "Hyderabad", "Lucknow", "Mumbai"],
    featured: false,
    relatedPlayerIds: [28, 4, 22, 15, 14],
    chartData: [
      { label: "Hyderabad avg 1st inns", value: 168.2, color: "#ff7f0e" },
      { label: "Ekana avg 1st inns", value: 152.4, color: "#1f77b4" },
      { label: "Wankhede avg 1st inns", value: 168.8, color: "#2ca02c" }
    ],
    dataTable: {
      headers: ["Venue", "Avg 1st inns", "Powerplay/Middle/Death (RPO)"],
      rows: [
        ["Hyderabad", "168.2", "7.88 / 7.35 / 10.62"],
        ["Ekana (Lucknow)", "152.4", "7.10 / 6.87 / 9.11"],
        ["Wankhede (Mumbai)", "168.8", "7.61 / 7.74 / 10.44"],
        ["Chase win%", "—", "Hyderabad 58% | Ekana 46% | Wankhede 51%"],
        ["Strategic cue", "—", "Finishers | Patience | Depth" ]
      ]
    },
    content: `One of the easiest ways to misread IPL games is to assume every venue demands the same batting plan. Over the next few days, teams will move between Hyderabad, Lucknow’s Ekana, and Mumbai’s Wankhede — three grounds that look similar on television but behave very differently once you plot their scoring by phase.

Hyderabad is a finisher’s venue. With an average first-innings score of 168.2 and a death-overs run rate of 10.62, the game often waits for the last six overs to declare a winner. The side that enters over 15 with more hitters usually controls the result. That is why Hyderabad matches often look “even” at 14 overs and then become one-sided at 19.

Ekana is the opposite. The average first-innings score is only 152.4 and the middle-overs rate is 6.87 — slow enough to punish teams that are not elite at strike rotation. Ekana doesn’t reward constant aggression; it rewards timing and patience. A team that tries to play Wankhede cricket at Ekana often ends up with 130/7 and a lot of regrets.

Wankhede is the depth test. The average first-innings score is 168.8, but the middle overs are faster than most people expect (7.74) and the death overs race at 10.44. This is where batters who can hit ‘good balls’ separate themselves from batters who need loose deliveries. Defending teams have to execute yorkers and wide lines; otherwise 60 off the last four becomes routine.

So what are the practical takeaways? First, adjust what you call ‘par.’ At Hyderabad and Wankhede, 170 is a starting point, not a finish line. At Ekana, 170 can be match-winning. Second, plan your risk by phase: Ekana demands risk in chosen windows; Hyderabad demands risk late; Wankhede demands risk continuously.

CricDNA’s final note: venue intelligence is not a prediction tool, it’s a decision tool. Teams that use these phase profiles to time their acceleration — rather than forcing one batting script everywhere — will win more games over a long season.`
  }
];

export const analyticsCards: AnalyticsCard[] = [
  {
    type: "player",
    title: "Player spotlight: Tilak Varma",
    value: "101* (45) vs GT",
    description: "A joint-fastest MI hundred (45 balls) powered a +99-run win and a major net run-rate correction.",
    playerIds: [15],
    teamColors: ["#005DAA"]
  },
  {
    type: "matchup",
    title: "Venue edge: Hyderabad chasing",
    value: "32/55 wins batting second",
    description: "At Rajiv Gandhi International Stadium, captains field first 60% of the time and chasing teams have a modest historical edge.",
    teamColors: ["#FF822A", "#2563EB"]
  },
  {
    type: "stat",
    title: "Stat to watch",
    value: "Ekana middle overs: 6.87 RPO",
    description: "Lucknow’s Ekana Stadium is a middle-overs squeeze venue — strike rotation and wickets in hand matter more than brute force.",
    teamColors: ["#111827"]
  }
];
