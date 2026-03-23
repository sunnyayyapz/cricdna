# CricDNA Homepage Design Specification

**Version:** 1.0  
**Author:** Designer Agent  
**Date:** March 23, 2026  
**For:** Codebase Implementation Agent

---

## Research Basis

This spec is derived from:
- Live screenshots of [ESPN Cricinfo](https://www.espncricinfo.com) and [Cricbuzz](https://www.cricbuzz.com) taken March 23, 2026
- Analysis of both sites' layout patterns, color systems, and content hierarchy
- Design principles from data journalism (FiveThirtyEight model) applied to cricket

---

## 1. Navigation

### What Cricinfo/Cricbuzz Use

**ESPN Cricinfo Nav:**
- Primary bar: `Live Scores | IPL 2026 | Series | Teams | News | Features | Videos | Stats`
- Far right: `ESPN+` subscription CTA, Edition selector (US), dark mode toggle, notifications, search
- Background: ESPN blue (`#003366`), full-width, height `~56px`
- No secondary nav on homepage; secondary tabs appear on section pages (News sub-nav: "News home | RSS Index | Ball-tampering | Technology...")
- Logo: ESPN Cricinfo wordmark, white

**Cricbuzz Nav:**
- Primary bar (dark green `#1a6b3c` bg): `Live Scores | Schedule | Archives | News▼ | Series▼ | Teams▼ | Videos▼ | Rankings▼ | More▼ | [Go Premium]`
- Secondary ticker bar (dark gray `#1f2124` bg): live match pills scrolling horizontally — `MATCHES | RSA vs NZ – RSA won | INDCAP vs RRP – Delay | KNSO vs SNSS – Preview | WIW vs AUSW – Preview | ALL >`
- Two-layer nav total, ~88px combined height
- "Go Premium" pill button in nav: white text, rounded-full

**Key Observations:**
- Both sites surface "Live Scores" as the first/primary nav item
- Both use dropdown menus for series, teams
- Neither features analytics as a primary nav category — this is CricDNA's differentiator
- Cricbuzz's secondary ticker bar doubles as a quick-jump to live matches

### CricDNA Navigation Spec

**Structure:** Single primary bar + a below-nav score ticker (separate component, not part of nav)

```
[CricDNA logo]   Home  |  Explore  |  Matches  |  Compare  |  Leaderboard   [Search] [Dark/Light]
```

**Implementation:**
```jsx
// Tailwind classes
<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 h-14">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <span className="text-emerald-400 font-bold text-xl tracking-tight font-cabinet">
        CricDNA
      </span>
    </div>
    
    {/* Nav items */}
    <div className="hidden md:flex items-center gap-1">
      {/* Home */}
      <NavLink className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
        Home
      </NavLink>
      {/* Explore (Analytics) — highlighted as primary differentiator */}
      <NavLink className="px-4 py-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/50 rounded-md transition-colors flex items-center gap-1.5">
        <BarChart2Icon className="w-3.5 h-3.5" />
        Explore
      </NavLink>
      <NavLink className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
        Matches
      </NavLink>
      <NavLink className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
        Compare
      </NavLink>
      <NavLink className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
        Leaderboard
      </NavLink>
    </div>
    
    {/* Right actions */}
    <div className="flex items-center gap-2">
      <button className="p-2 text-gray-400 hover:text-white rounded-md hover:bg-gray-800">
        <SearchIcon className="w-4 h-4" />
      </button>
      {/* Mobile hamburger */}
      <button className="md:hidden p-2 text-gray-400 hover:text-white rounded-md hover:bg-gray-800">
        <MenuIcon className="w-4 h-4" />
      </button>
    </div>
  </div>
</nav>
```

**Nav Design Decisions:**
- `bg-gray-950` (#030712) — slightly deeper than gray-900, keeps it premium
- `Explore` gets the emerald treatment + icon to signal it's the analytics hub
- No "Go Premium" CTA in nav (avoids looking like Cricbuzz clone) — use a subtle inline CTA elsewhere
- Height: `h-14` (56px) — matches Cricinfo's single-bar height
- Logo font: Cabinet Grotesk Bold, `tracking-tight`
- Active state: `text-white border-b-2 border-emerald-400`

---

## 2. Score Ticker

### What Cricinfo/Cricbuzz Use

**ESPN Cricinfo Score Ticker:**
- Lives below the main nav, not in nav
- Shows tabs for match groups: `Matches (2) | AUS Women in WI (1) | NZ vs SA (1)`
- Each tab expands a card showing:
  - Status badge: `UPCOMING` (orange) or `RESULT` (gray) or `LIVE` (red pulse)
  - Match context: `3rd T20I • AUS Women in WI • Kings...`
  - Team flags (emoji/SVG) + team abbreviation (e.g., `WI-W`, `AUS-W`)
  - Score: bold `164/5`, gray `(18.5/20 ov, T:165) 145`
  - Time or match status: `Today 3:30 PM` or result string
  - `Schedule` link at bottom
- Cards are horizontal, width ~300px each, gap ~12px
- Background: white cards on white/light gray page bg
- **Design weakness:** Not scrollable — only shows 2-3 at a time; tab-based navigation is clunky

**Cricbuzz Score Ticker:**
- Two-layer approach:
  1. **Secondary nav bar** (dark gray): horizontal scrollable pills — `RSA vs NZ – RSA won | INDCAP vs RRP – Delay | ...`
  2. **Hero Match Cards** (below nav): large carousel cards (~300px × 280px each), showing:
     - Match banner/graphic (team logo artwork)
     - Format badge: `T20` pill top-right
     - Team + score: `RSA 164-5 (20)` / `NZ 145 (18.5)`
     - Result/status string in green for result, orange for delayed
     - Footer links: `FORECAST | SCHEDULE`
- Swipeable carousel with `>` arrow button

**Key Observations:**
- Cricbuzz's match cards are larger and more visual (hero-card style)
- Cricinfo's are more compact/dense and data-forward
- Both show team flags/country icons
- Both use color-coded status (live=red/green, upcoming=muted, result=gray)
- Neither shows predictive data alongside scores — opportunity for CricDNA

### CricDNA Score Ticker Spec

**Concept:** A horizontally scrollable strip of compact score pills — always visible, always fast. Plus one "elevated" match card that CricDNA adds a DNA layer to.

**Structure:**
```
[sticky, below nav, z-40]
LIVE NOW:  🏏 IND 187/4 (32.2)  vs  AUS 0/0    |   RSA won by 19 runs vs NZ   |   Upcoming: ENG vs PAK, 2:30 PM →
```

**Ticker Strip Implementation:**
```jsx
// Outer container — sticky below nav
<div className="sticky top-14 z-40 bg-gray-900 border-b border-gray-800 overflow-hidden">
  <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
    
    {/* Live badge */}
    <div className="flex-shrink-0 px-3 py-0 flex items-center gap-1.5 border-r border-gray-700 h-10">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Live</span>
    </div>
    
    {/* Match pills — each one */}
    {matches.map(match => (
      <MatchPill key={match.id} match={match} />
    ))}
  </div>
</div>

// MatchPill component
<button className="flex-shrink-0 flex items-center gap-2 px-4 h-10 border-r border-gray-800 hover:bg-gray-800 transition-colors text-sm group">
  {/* Team 1 */}
  <span className="flex items-center gap-1">
    <img src={team1.flagUrl} className="w-4 h-4 rounded-sm object-cover" />
    <span className="font-semibold text-white text-xs">{team1.shortCode}</span>
    <span className="font-mono text-white text-xs font-bold">{team1.score}</span>
  </span>
  
  {/* vs separator with live indicator */}
  <span className="text-gray-600 text-[10px] font-medium">vs</span>
  
  {/* Team 2 */}
  <span className="flex items-center gap-1">
    <img src={team2.flagUrl} className="w-4 h-4 rounded-sm object-cover" />
    <span className="font-semibold text-white text-xs">{team2.shortCode}</span>
    {team2.score && <span className="font-mono text-white text-xs">{team2.score}</span>}
  </span>
  
  {/* Status */}
  {match.isLive && (
    <span className="text-emerald-400 text-[10px] font-medium">{match.currentOver} ov</span>
  )}
  {match.result && (
    <span className="text-gray-400 text-[10px] truncate max-w-[80px]">{match.resultShort}</span>
  )}
  {match.isUpcoming && (
    <span className="text-amber-400 text-[10px]">{match.startsIn}</span>
  )}
</button>
```

**Visual Spec:**
- Height: `h-10` (40px) — slim, non-intrusive
- Background: `bg-gray-900` — slightly lighter than nav's `gray-950`
- Status colors:
  - Live: `text-emerald-400` for score updates, red pulse dot
  - Result: `text-gray-400`, muted
  - Upcoming: `text-amber-400` for time
- Team codes: `font-mono` for scores (even width rendering), `text-xs` (12px)
- Pill dividers: `border-r border-gray-800`
- Full-width on all breakpoints; hides scrollbar with `scrollbar-none`
- CricDNA enhancement: hovering a live match pill shows a mini tooltip with win probability from the DNA model

---

## 3. Hero Section

### What Cricinfo/Cricbuzz Use

**ESPN Cricinfo Hero:**
- Dimensions: approximately `560px tall × full-width` on desktop
- Layout: Left side — featured video/image `~500×400px`, Right side — hero headline + bullet sublinks
- Hero takes up about `60%` of viewport on 1280px desktop
- Video thumbnail occupies `~55% width`, text occupies `~45%`
- Below the video/text hero: horizontal scrollable pill row for quick links (`IPL 2026 schedule › | India men's fixtures › | ...`)
- Below the pills: a horizontal 5-card thumbnail row for more stories
- Typography: Hero headline `~32px` (text-3xl), bold serif-weight, black on white
- No data or analytics content in the hero — pure editorial article

**Cricbuzz Hero:**
- Dimensions: Large carousel cards, each `~300px × 280px`, 3-4 visible at once
- Cards show match artwork/poster (not just a photo — designed graphic with team logos)
- Score shown directly on the card image area
- Below the carousel: `Quick Access` bar with pill links
- No explicit "hero article" — the carousel IS the hero
- The design is very match/score-forward, not editorial

**Key Observations:**
- Cricinfo is editorial-hero first (long-form journalism)
- Cricbuzz is match-data-hero first (live cricket)
- Neither puts a data visualization or analytics insight in the hero
- CricDNA should do both: an analytics insight AND a lead article

### CricDNA Hero Section Spec

**Concept:** A split hero — left side features the "Data Insight of the Day" (analytics-first, unique to CricDNA), right side features the top editorial/match story. The insight side should feel like a mini FiveThirtyEight chart card.

**Dimensions:**
- Hero total height: `min-h-[420px]` on desktop (lg+), `min-h-[560px]` on mobile (stacked)
- Left panel: `7/12` width, right panel: `5/12` width
- Left panel is the analytics showstopper
- Right panel is the editorial "today's top story"

**Hero Structure:**
```
┌─────────────────────────────────┬──────────────────────┐
│                                 │                      │
│  DATA INSIGHT OF THE DAY        │  TOP STORY           │
│  ─────────────────────          │                      │
│  [Stat label + context]         │  [Article image]     │
│                                 │  [Series tag]        │
│  [Big number or mini chart]     │  [Headline]          │
│                                 │  [Subheadline]       │
│  [Insight summary 1-2 lines]    │  [Author + time]     │
│                                 │                      │
│  [→ Explore full analysis]      │  [→ Read more]       │
│                                 │                      │
└─────────────────────────────────┴──────────────────────┘
```

**Implementation:**
```jsx
<section className="bg-gray-950 pt-4 pb-0 border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px]">
      
      {/* LEFT: Data Insight of the Day — 7 columns */}
      <div className="lg:col-span-7 bg-gradient-to-br from-gray-900 to-gray-950 
                      rounded-tl-xl rounded-bl-xl border border-gray-800 
                      border-r-0 p-6 flex flex-col justify-between
                      relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-transparent pointer-events-none" />
        
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 
                           text-emerald-400 text-[11px] font-bold uppercase tracking-wider 
                           px-2.5 py-1 rounded-full">
            <ZapIcon className="w-3 h-3" />
            Data Insight of the Day
          </span>
          <span className="text-gray-600 text-xs">Updated 6:00 AM IST</span>
        </div>
        
        {/* Main insight headline */}
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white 
                       font-cabinet leading-tight mb-3">
          {insight.headline}
          {/* e.g., "Bumrah is 3× deadlier in powerplay than any active pacer" */}
        </h1>
        
        {/* The data visualization area */}
        <div className="bg-gray-900/80 rounded-xl p-4 mb-4 border border-gray-800">
          {/* Inline mini chart OR big stat display */}
          <div className="flex items-end gap-4">
            <div>
              <span className="text-5xl font-bold text-emerald-400 font-mono tabular-nums">
                {insight.keyMetric}
                {/* e.g., "3.2x" or "94.7" */}
              </span>
              <span className="text-gray-400 text-sm ml-2">{insight.metricLabel}</span>
            </div>
            {/* Inline sparkline or bar chart */}
            <div className="flex-1 h-16">
              <MiniBarChart data={insight.chartData} />
              {/* Recharts ResponsiveContainer, height 64px, no axes, emerald bars */}
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            {insight.summary}
          </p>
        </div>
        
        {/* CTA */}
        <a href={insight.link} 
           className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold 
                      hover:text-emerald-300 transition-colors group">
          Explore full analysis
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      
      {/* RIGHT: Top Editorial Story — 5 columns */}
      <div className="lg:col-span-5 rounded-tr-xl rounded-br-xl overflow-hidden 
                      border border-gray-800 border-l-0 flex flex-col">
        
        {/* Article image — 16:9 or 3:2 */}
        <div className="relative flex-shrink-0 h-48 lg:h-56 bg-gray-800">
          <img src={article.imageUrl} 
               className="w-full h-full object-cover" 
               alt={article.headline} />
          {/* Series badge overlay */}
          <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm 
                           text-emerald-400 text-[10px] font-bold uppercase 
                           tracking-wider px-2 py-1 rounded">
            {article.series}
          </span>
        </div>
        
        {/* Article text */}
        <div className="flex-1 p-5 bg-gray-900 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white font-cabinet leading-snug mb-2">
              {article.headline}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {article.summary}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-500 text-xs">{article.author} · {article.timeAgo}</span>
            <a href={article.link} 
               className="text-sm text-emerald-400 font-semibold hover:text-emerald-300">
              Read →
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

**Hero Design Principles:**
- Hero background: `bg-gray-950` — dark, premium, no distracting white bg like Cricinfo
- Left panel gradient: `from-gray-900 to-gray-950` + `from-emerald-950/20` overlay — gives it warmth
- The big metric number (`text-5xl`, `text-emerald-400`, `font-mono`) is the visual anchor
- Mini chart uses Recharts `BarChart` with `ResponsiveContainer`, no axes, emerald fill, 64px tall
- Right panel image ratio: 16:10 (`h-48 lg:h-56`), with series badge overlay using `backdrop-blur-sm`
- Border treatment: both panels share a unified border (`border border-gray-800`) using negative margin on border-r-0 / border-l-0 to make them appear as one card

---

## 4. Content Grid

### What Cricinfo/Cricbuzz Use

**ESPN Cricinfo Content Grid:**
- Below the hero: `max-w: ~960px` main content + `~280px` right sidebar
- Approximate ratio: `72% / 28%` (2.5 columns / 1 column)
- Main area shows:
  1. A horizontal 5-card row of thumbnail articles below the hero — cards are `~160px × 120px` images
  2. Then a standard "Latest" list: `left image (250×170px) | right text block`
  3. Section headers: bold black "Cricket News" in large type
  4. Article list items: category label (gray) + headline (bold, ~18-20px) + author + time
- Card image aspect ratios: roughly `3:2` or `16:10`
- No analytics cards in the content grid

**Cricbuzz Content Grid (News Page):**
- Three-column layout on desktop: `Left: Latest News (narrow list) | Center: Main Article (wide) | Right: Featured Videos`
- Approximate ratio: `25% / 45% / 30%`
- Each article card: small `~90×90px` thumbnail + headline + time (very compact)
- Center column article card: large image `~460×280px` + category label + full headline + summary + time
- Video cards in right: image + play overlay + duration badge

**Key Observations:**
- Cricinfo's grid is editorial-list (like a newspaper)
- Cricbuzz's is more compartmentalized (each column has a defined content type)
- Neither grid features analytics/data cards — CricDNA should inject them

### CricDNA Content Grid Spec

**Layout Philosophy:** A 12-column CSS grid that mixes editorial cards with analytics "Data Cards" (visually distinct). The analytics cards should feel like data widgets, not articles.

**Grid Structure:**
```
[max-w-7xl, px-4, grid grid-cols-12, gap-6]

Columns 1-8 (col-span-8): Main content feed
Columns 9-12 (col-span-4): Sidebar
```

**Main Content Feed (col-span-8):**

The content feed consists of alternating zones:

**Zone 1: Analytics Strip (immediately below hero)**
```jsx
// 3 analytics data cards in a row, each col-span-4 within the col-span-8 area
<section className="grid grid-cols-3 gap-4 mb-8">
  <AnalyticsCard type="player-of-day" />
  <AnalyticsCard type="matchup-watch" />
  <AnalyticsCard type="stat-of-day" />
</section>
```

**Zone 2: Featured Stories (2-column within main area)**
```jsx
<section className="grid grid-cols-2 gap-6 mb-8">
  {/* Each featured story card */}
  <article className="group cursor-pointer">
    {/* Image: 16:10 ratio */}
    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-800 mb-3">
      <img className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
    </div>
    {/* Meta */}
    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1 block">
      {category}
    </span>
    <h3 className="text-base font-bold text-white font-cabinet leading-snug 
                   group-hover:text-gray-200 transition-colors line-clamp-2 mb-2">
      {headline}
    </h3>
    <p className="text-gray-500 text-xs">{author} · {timeAgo}</p>
  </article>
</section>
```

**Zone 3: Article List (full width of main area)**
```jsx
{/* Horizontal article rows — like Cricinfo's list view */}
<section className="space-y-0 divide-y divide-gray-800/50">
  {articles.map(article => (
    <article className="flex gap-4 py-4 group cursor-pointer">
      {/* Thumbnail: fixed 120×80px */}
      <div className="flex-shrink-0 w-[120px] h-[80px] rounded-md overflow-hidden bg-gray-800">
        <img className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
          {category}
        </span>
        <h3 className="text-sm font-semibold text-white font-general leading-snug 
                       group-hover:text-gray-300 line-clamp-2 mb-1">
          {headline}
        </h3>
        <p className="text-gray-500 text-[11px]">{author} · {timeAgo}</p>
      </div>
    </article>
  ))}
</section>
```

**Complete Grid Container:**
```jsx
<main className="max-w-7xl mx-auto px-4 py-8">
  <div className="grid grid-cols-12 gap-6">
    
    {/* Main content: 8 columns */}
    <div className="col-span-12 lg:col-span-8 space-y-8">
      {/* Zone 1: Analytics Strip */}
      {/* Zone 2: Featured Stories 2-col */}
      {/* Zone 3: Article List */}
    </div>
    
    {/* Sidebar: 4 columns */}
    <aside className="col-span-12 lg:col-span-4 space-y-6">
      {/* Sidebar widgets */}
    </aside>
    
  </div>
</main>
```

**Card Dimensions Reference:**
| Card Type | Image Size | Grid Position | Aspect Ratio |
|---|---|---|---|
| Featured story card | full card width × 200px | 2-col in 8-col area | 16:10 |
| Article list thumbnail | 120×80px fixed | full 8-col row | 3:2 |
| Analytics data card | no image | 1/3 of 8-col area | N/A (fixed height 140px) |
| Sidebar widget | varies | 4-col sidebar | N/A |

---

## 5. Sidebar

### What Cricinfo/Cricbuzz Use

**ESPN Cricinfo Sidebar:**
- Width: ~280px, right side
- Contains:
  - `"Number Crunching"` widget — a large numbered stat (`10`) with a 1-liner explanation: "Sophie Devine is 1st player with ten 50+ scores vs an opponent in T20Is" — styled with a large blue number, light blue background card
  - `"Most Read"` widget — 4-5 article titles with small thumbnails, ranked list
  - Ad units interspersed
- "Number Crunching" is the closest to analytics — but it's just a static number, not a live visualization

**Cricbuzz Sidebar (News Page):**
- Width: ~280px, right side
- Contains: Ad units (dominant — entire sidebar is advertising)
- No analytics or special cricket widgets visible in sidebar

**Key Observations:**
- Cricinfo's "Number Crunching" is the most analytics-adjacent element on either site — CricDNA should take this concept much further
- Both sidebars are primarily ad-supported; CricDNA can differentiate massively by making the sidebar full of rich data widgets

### CricDNA Sidebar Spec

**Sidebar Width:** `col-span-4` = ~320px at `max-w-7xl`  
**Sidebar Stack (top to bottom):**

```
1. DNA Leaderboard (most important)
2. Live Match Pulse (if live match active)
3. Upcoming Matches
4. Trending Analytics
5. Stat of the Week (large featured number)
```

**Widget 1: DNA Leaderboard**
```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
  {/* Header */}
  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
    <h3 className="text-sm font-bold text-white flex items-center gap-2">
      <TrophyIcon className="w-4 h-4 text-amber-400" />
      DNA Leaderboard
    </h3>
    <a href="/leaderboard" className="text-xs text-emerald-400 hover:text-emerald-300">See all →</a>
  </div>
  
  {/* Player rows */}
  <div className="divide-y divide-gray-800/50">
    {topPlayers.map((player, idx) => (
      <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/40 transition-colors cursor-pointer">
        {/* Rank */}
        <span className={`text-xs font-bold w-5 text-center flex-shrink-0
          ${idx === 0 ? 'text-amber-400' : 
            idx === 1 ? 'text-gray-400' : 
            idx === 2 ? 'text-orange-400' : 'text-gray-600'}`}>
          {idx + 1}
        </span>
        {/* Player avatar */}
        <img src={player.avatarUrl} 
             className="w-8 h-8 rounded-full object-cover border border-gray-700 flex-shrink-0" />
        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{player.name}</p>
          <p className="text-[10px] text-gray-500">{player.country} · {player.role}</p>
        </div>
        {/* DNA Score */}
        <div className="flex-shrink-0 text-right">
          <p className="text-sm font-bold text-emerald-400 font-mono tabular-nums">
            {player.dnaScore}
          </p>
          {/* Change indicator */}
          <p className={`text-[10px] font-medium ${player.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {player.change > 0 ? '▲' : '▼'} {Math.abs(player.change)}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Widget 2: Live Match Pulse** (only renders when a match is live)
```jsx
<div className="bg-gray-900 border border-emerald-800/50 rounded-xl overflow-hidden relative">
  {/* Live indicator header */}
  <div className="flex items-center gap-2 px-4 py-3 bg-emerald-950/40 border-b border-emerald-800/30">
    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
    <h3 className="text-sm font-bold text-emerald-300">Live Match Pulse</h3>
    <span className="ml-auto text-[10px] text-emerald-600">{match.series}</span>
  </div>
  
  {/* Team scores */}
  <div className="p-4 space-y-2">
    {[match.team1, match.team2].map(team => (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={team.flagUrl} className="w-5 h-5 rounded-sm" />
          <span className="text-sm font-semibold text-white">{team.name}</span>
        </div>
        <span className="font-mono font-bold text-white text-sm tabular-nums">
          {team.score || '—'}
        </span>
      </div>
    ))}
  </div>
  
  {/* Win probability bar */}
  <div className="px-4 pb-4">
    <div className="text-[10px] text-gray-500 mb-1.5 flex justify-between">
      <span>Win Probability</span>
      <span className="text-emerald-400 font-semibold">DNA Model</span>
    </div>
    <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
      <div className="bg-blue-500 rounded-l-full transition-all duration-1000" 
           style={{width: `${match.team1WinProb}%`}} />
      <div className="bg-orange-500 rounded-r-full transition-all duration-1000 flex-1" />
    </div>
    <div className="flex justify-between mt-1">
      <span className="text-[10px] text-blue-400 font-mono">{match.team1WinProb}%</span>
      <span className="text-[10px] text-orange-400 font-mono">{100 - match.team1WinProb}%</span>
    </div>
  </div>
</div>
```

**Widget 3: Upcoming Matches**
```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
    <h3 className="text-sm font-bold text-white flex items-center gap-2">
      <CalendarIcon className="w-4 h-4 text-gray-400" />
      Upcoming Matches
    </h3>
    <a href="/matches" className="text-xs text-emerald-400">All →</a>
  </div>
  <div className="divide-y divide-gray-800/50">
    {upcomingMatches.map(match => (
      <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-800/30">
        <div>
          <p className="text-sm font-semibold text-white">{match.teams}</p>
          <p className="text-[10px] text-gray-500">{match.series} · {match.venue}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-amber-400 font-medium">{match.startsIn}</p>
          <p className="text-[10px] text-gray-600">{match.format}</p>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Widget 4: Trending Analytics**
```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
    <h3 className="text-sm font-bold text-white flex items-center gap-2">
      <TrendingUpIcon className="w-4 h-4 text-purple-400" />
      Trending Analytics
    </h3>
  </div>
  <div className="p-3 space-y-2">
    {trendingInsights.map((insight, idx) => (
      <a href={insight.link}
         className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group">
        <span className="text-lg font-bold text-gray-700 font-mono w-6 flex-shrink-0 leading-none mt-0.5">
          {idx + 1}
        </span>
        <div>
          <p className="text-xs font-semibold text-gray-200 group-hover:text-white leading-snug">
            {insight.title}
          </p>
          <p className="text-[10px] text-gray-600 mt-0.5">{insight.views} views today</p>
        </div>
      </a>
    ))}
  </div>
</div>
```

---

## 6. Analytics Integration (CricDNA Unique)

This section defines the three analytics "Data Card" types that populate **Zone 1** of the content grid (and also appear in sidebar). These must look visually distinct from article cards.

**Design Language:** Dark-background cards with a subtle colored left border, a badge label, a large metric, and a CTA. They should feel like Bloomberg Terminal widgets, not blog post cards.

### Card Type 1: Player of the Day

```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl p-4 
                relative overflow-hidden border-l-4 border-l-emerald-500 h-[180px] flex flex-col">
  
  {/* Background DNA helix decoration — CSS only */}
  <div className="absolute right-0 top-0 bottom-0 w-20 opacity-5">
    <HelixSVG /> {/* subtle decorative DNA SVG */}
  </div>
  
  {/* Badge */}
  <div className="flex items-center gap-2 mb-3">
    <span className="bg-emerald-500/15 text-emerald-400 text-[10px] font-bold 
                     uppercase tracking-wider px-2 py-0.5 rounded-full">
      🏏 Player of the Day
    </span>
  </div>
  
  {/* Content */}
  <div className="flex items-center gap-3 flex-1">
    <img src={player.avatarUrl} 
         className="w-14 h-14 rounded-full border-2 border-emerald-500/30 object-cover flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="text-base font-bold text-white font-cabinet truncate">{player.name}</p>
      <p className="text-[11px] text-gray-500">{player.country} · {player.role}</p>
      {/* DNA score bar */}
      <div className="mt-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">
            {player.dnaScore}
          </span>
          <span className="text-xs text-gray-500">DNA Score</span>
        </div>
      </div>
    </div>
  </div>
  
  {/* CTA */}
  <a href={`/player/${player.slug}`} 
     className="text-[11px] text-emerald-400 font-semibold hover:text-emerald-300 mt-2 inline-flex items-center gap-1">
    View full DNA profile →
  </a>
</div>
```

### Card Type 2: Matchup to Watch

```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl p-4 
                relative overflow-hidden border-l-4 border-l-blue-500 h-[180px] flex flex-col">
  
  {/* Badge */}
  <div className="flex items-center gap-2 mb-3">
    <span className="bg-blue-500/15 text-blue-400 text-[10px] font-bold 
                     uppercase tracking-wider px-2 py-0.5 rounded-full">
      ⚡ Matchup to Watch
    </span>
  </div>
  
  {/* Matchup display */}
  <div className="flex items-center gap-2 flex-1">
    {/* Batter */}
    <div className="flex-1 text-center">
      <img src={batter.avatarUrl} className="w-10 h-10 rounded-full mx-auto mb-1 border border-gray-700" />
      <p className="text-xs font-semibold text-white truncate">{batter.shortName}</p>
      <span className="text-[10px] text-gray-500">BAT</span>
    </div>
    
    {/* VS + stat bubble */}
    <div className="flex flex-col items-center gap-1">
      <div className="bg-gray-800 rounded-full w-12 h-12 flex flex-col items-center justify-center">
        <span className="text-xs font-bold text-amber-400 font-mono">{matchup.avgSR}</span>
        <span className="text-[8px] text-gray-600 leading-none">SR vs</span>
      </div>
    </div>
    
    {/* Bowler */}
    <div className="flex-1 text-center">
      <img src={bowler.avatarUrl} className="w-10 h-10 rounded-full mx-auto mb-1 border border-gray-700" />
      <p className="text-xs font-semibold text-white truncate">{bowler.shortName}</p>
      <span className="text-[10px] text-gray-500">BOWL</span>
    </div>
  </div>
  
  {/* Context */}
  <p className="text-[11px] text-gray-500 mt-1">{matchup.context}</p>
  <a href={`/matchup/${matchup.slug}`} 
     className="text-[11px] text-blue-400 font-semibold hover:text-blue-300 mt-1 inline-flex items-center gap-1">
    See full matchup analysis →
  </a>
</div>
```

### Card Type 3: Stat of the Day

```jsx
<div className="bg-gray-900 border border-gray-800 rounded-xl p-4 
                relative overflow-hidden border-l-4 border-l-purple-500 h-[180px] flex flex-col">
  
  {/* Badge */}
  <div className="flex items-center gap-2 mb-3">
    <span className="bg-purple-500/15 text-purple-400 text-[10px] font-bold 
                     uppercase tracking-wider px-2 py-0.5 rounded-full">
      📊 Stat of the Day
    </span>
  </div>
  
  {/* Big stat */}
  <div className="flex-1 flex flex-col justify-center">
    <span className="text-4xl font-bold text-purple-400 font-mono tabular-nums leading-none">
      {stat.value}
    </span>
    <p className="text-sm font-semibold text-white mt-1 leading-snug">{stat.label}</p>
    <p className="text-[11px] text-gray-500 mt-1 leading-snug">{stat.context}</p>
    {/* Comparison bar */}
    <div className="mt-3 flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-800 rounded-full">
        <div className="h-full bg-purple-500 rounded-full" 
             style={{width: `${stat.percentile}%`}} />
      </div>
      <span className="text-[10px] text-purple-400 font-mono">{stat.percentile}th %ile</span>
    </div>
  </div>
  
  <a href={stat.explorerLink} 
     className="text-[11px] text-purple-400 font-semibold hover:text-purple-300 mt-2 inline-flex items-center gap-1">
    Explore in Stats Lab →
  </a>
</div>
```

**Analytics Card Visual Summary:**
| Card | Border color | Badge color | Accent | CTA destination |
|---|---|---|---|---|
| Player of the Day | `border-l-emerald-500` | emerald | emerald | `/player/[slug]` |
| Matchup to Watch | `border-l-blue-500` | blue | amber (SR) | `/matchup/[slug]` |
| Stat of the Day | `border-l-purple-500` | purple | purple | `/stats-lab` |

**Shared analytics card rules:**
- Height: always `h-[180px]` (fixed, no flex-grow wrapping)
- Background: `bg-gray-900` (1 tone lighter than page `bg-gray-950`)
- Border: `border border-gray-800` + colored left `border-l-4`
- No images (except player avatar circles)
- Font: `font-mono tabular-nums` for all numbers
- Cards sit in a `grid grid-cols-3 gap-4` row directly below the hero

---

## 7. Color & Typography

### Competitor Color Analysis

**ESPN Cricinfo:**
| Role | Color | Hex |
|---|---|---|
| Primary nav background | ESPN Blue | `#003366` |
| Brand accent / links | ESPN Red | `#cc0000` |
| Body text | Dark gray | `#1a1a1a` |
| Page background | Off-white | `#f5f5f5` |
| Card background | White | `#ffffff` |
| Live badge | Red | `#e91e22` |
| "Number Crunching" stat bg | Light blue | `#e8f4fd` |
| Category labels | Medium gray | `#6b7280` |

**Cricbuzz:**
| Role | Color | Hex |
|---|---|---|
| Nav background | Dark green | `#1a6b3c` |
| Brand accent / logo | Persian Green | `#01B489` |
| Secondary brand | Observatory green | `#009270` |
| Score ticker bar | Dark charcoal | `#1f2124` |
| Page background | Light gray | `#f0f0f0` |
| Live result | Green text | `#01B489` |
| Delayed/postponed | Orange text | `#f59e0b` |
| Result text | Muted green | `#2d7a4f` |

**Key patterns:**
- Both use **light backgrounds** (white/light gray) — CricDNA's dark mode default is a strong differentiator
- Both rely on a **single brand hue** for accents (Cricinfo blue, Cricbuzz green)
- Both use **red/green for live status** — universal convention to keep

### CricDNA Color Palette

```js
// tailwind.config.js custom colors
colors: {
  // Brand emerald — the DNA green
  brand: {
    DEFAULT: '#10b981', // emerald-500
    light: '#34d399',   // emerald-400
    dim: '#059669',     // emerald-600
    glow: '#064e3b',    // emerald-950, for bg fills
  },
  
  // Page surfaces — full dark mode
  surface: {
    base: '#030712',    // gray-950: page background
    card: '#111827',    // gray-900: card/widget background
    elevated: '#1f2937', // gray-800: hover states, input bg
    border: '#374151',  // gray-700: borders
    subtle: '#4b5563',  // gray-600: muted text
  },
  
  // Analytics accent palette (each card type gets one)
  analytics: {
    player: '#10b981',  // emerald — player DNA
    matchup: '#3b82f6', // blue — matchup analysis
    stat: '#a855f7',    // purple — stat/data
    insight: '#f59e0b', // amber — insight/alert
  },
  
  // Status colors
  status: {
    live: '#ef4444',    // red-500: live pulse dot
    win: '#10b981',     // emerald: win result
    loss: '#6b7280',    // gray: loss
    upcoming: '#f59e0b', // amber: upcoming
    delay: '#f97316',   // orange: delay/interruption
  }
}
```

**Vibrant Sports Accents (beyond the emerald):**
- Add an `amber-400` (`#fbbf24`) accent for match timings, "upcoming" states, and ranking medals
- Add a `sky-400` (`#38bdf8`) accent for international fixtures and ICC events
- Add a `red-500` (`#ef4444`) strictly for live pulses — never decorative use
- The `purple-500` (`#a855f7`) is exclusive to data/stat cards — this trains users to associate purple with analytics

### Typography

**CricDNA Font Stack:**
```css
/* In globals.css or tailwind config */

/* Cabinet Grotesk — display, headings, brand elements */
--font-cabinet: 'Cabinet Grotesk', 'Söhne', system-ui, sans-serif;

/* General Sans — body text, UI labels, metadata */
--font-general: 'General Sans', 'Inter', system-ui, sans-serif;

/* Mono — scores, stats, numbers, code */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
```

**Type Scale:**
```
Display (hero headline):  text-3xl–text-4xl, font-bold, font-cabinet, leading-tight
Section headline:         text-xl–text-2xl, font-bold, font-cabinet, leading-snug
Article headline:         text-base–text-lg, font-semibold, font-cabinet, leading-snug
Article body:             text-sm, font-general, leading-relaxed, text-gray-300
Meta / labels:            text-xs or text-[10px], font-general, uppercase, tracking-wider
Numbers / scores:         text-sm–text-5xl (varies), font-mono, tabular-nums, font-bold
Big stat number:          text-4xl–text-5xl, font-mono, font-bold, text-emerald-400
Badge text:               text-[10px], font-general, font-bold, uppercase, tracking-wider
```

**Typography Design Rules:**
1. Never mix `font-cabinet` and `font-mono` in the same visual unit — `font-mono` is for numbers only
2. All body text on dark bg: `text-gray-300` (not white) to reduce harshness
3. Category labels: ALWAYS `uppercase tracking-wider text-[10px]` — this creates the "sports broadcast" look
4. Headlines in article lists: `line-clamp-2` always — prevents variable card heights
5. Cricket scores always in `font-mono tabular-nums` — ensures alignment

---

## 8. Mobile Considerations

### How Cricinfo/Cricbuzz Handle Mobile

**ESPN Cricinfo Mobile:**
- Single column layout — all content stacked vertically
- Nav collapses to hamburger icon
- Score ticker changes: horizontal scroll becomes tab-paged cards
- Hero: image goes full-width on top, text below (stacked, not side by side)
- Content grid: sidebar moves to bottom of the feed (not beside it)
- Font sizes maintained — no dramatic scaling
- The quick-link pills below hero remain horizontal scroll

**Cricbuzz Mobile:**
- Carousel match cards reduce to 1 card visible at a time
- Swipe gesture for carousel
- Nav collapses to icon with drawer
- The "Quick Access" row remains as horizontal scroll pills
- Content becomes single column: Latest News list → center article → video section

### CricDNA Mobile Recommendations

**Breakpoints:**
```
sm: 640px   (large phone landscape)
md: 768px   (tablet portrait)
lg: 1024px  (tablet landscape / small laptop)
xl: 1280px  (desktop)
2xl: 1536px (large desktop)
```

**Mobile Layout Changes (below `lg`):**

```jsx
// Grid collapses
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 lg:col-span-8"> {/* Full width on mobile */}
  <aside className="col-span-12 lg:col-span-4"> {/* Below main on mobile */}
```

**Hero on Mobile (`< lg`):**
```jsx
// Left/right split becomes stacked
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
  {/* Analytics panel — full width, smaller on mobile */}
  <div className="lg:col-span-7 p-5">
    {/* Big stat: text-3xl instead of text-5xl */}
    {/* Mini chart hidden on sm, visible from md */}
  </div>
  {/* Article panel — full width, below */}
  <div className="lg:col-span-5">
    {/* Image: h-48, text reduced to text-lg */}
  </div>
</div>
```

**Analytics Cards on Mobile:**
```jsx
// 3-column → horizontal scroll on mobile
<section className="
  flex gap-4 overflow-x-auto scrollbar-none -mx-4 px-4 pb-2 
  lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:mx-0 lg:px-0
">
  {/* Each card: min-w-[260px] on mobile, auto on lg */}
  <div className="min-w-[260px] lg:min-w-0 flex-shrink-0 lg:flex-shrink ...">
```

**Score Ticker on Mobile:**
- Keep as horizontal scroll — works natively with touch swipe
- Increase touch target: pill height from `h-10` → `h-12` on mobile
- Show fewer match details per pill: just `IND 187/4 vs AUS` — no overs on small screens
- Add `snap-x snap-mandatory` for snapping:
  ```jsx
  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
    <button className="snap-start flex-shrink-0 ...">
  ```

**Nav on Mobile:**
```jsx
// Mobile nav: hamburger → slide-out drawer
// Drawer: full-height right panel, bg-gray-900, w-72
// Inside drawer: stack nav items vertically with larger touch targets
<nav className="md:hidden">
  <button onClick={toggleDrawer} className="p-2">
    <MenuIcon className="w-6 h-6 text-gray-300" />
  </button>
</nav>

<div className={`fixed inset-y-0 right-0 w-72 bg-gray-900 shadow-2xl z-50 
                 transform transition-transform duration-300
                 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  <nav className="flex flex-col p-6 gap-1 mt-8">
    {navItems.map(item => (
      <a className="px-4 py-3 text-base font-medium text-gray-200 rounded-lg hover:bg-gray-800">
        {item.label}
      </a>
    ))}
  </nav>
</div>
```

**Sidebar on Mobile:**
- Reorder: on mobile, `Upcoming Matches` appears BEFORE `DNA Leaderboard` (more immediately useful on mobile)
- `Live Match Pulse` widget gets a sticky banner treatment on mobile when match is live:
  ```jsx
  // Sticky bottom banner on mobile only
  <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden 
                  bg-emerald-950/95 backdrop-blur-sm border-t border-emerald-800/50 
                  p-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      <span className="text-sm font-semibold text-white">{match.teams}</span>
      <span className="text-sm font-mono text-emerald-400">{match.score}</span>
    </div>
    <a href={match.link} className="text-xs text-emerald-400 font-semibold">Follow →</a>
  </div>
  ```

**Mobile Performance:**
- Lazy-load all images below fold: `loading="lazy"`
- Mini charts (Recharts): only render on `md+` — on mobile show static numbers only
- Skeleton loaders for score ticker and analytics cards (they're data-dependent):
  ```jsx
  <div className="animate-pulse bg-gray-800 rounded-full h-10 w-[200px]" />
  ```

---

## 9. Page Section Z-Index Layering

```
z-50: Mobile nav drawer overlay
z-40: Sticky score ticker + mobile live match banner
z-30: Nav bar (fixed top-0)
z-20: Tooltips and popovers
z-10: Floating analytics badges
z-0:  Page content
```

---

## 10. Full Page Structure Summary

```
<html class="dark">
  <body class="bg-gray-950 text-white min-h-screen">
    
    <!-- 1. Nav: fixed, z-30, h-14 -->
    <nav class="fixed top-0 z-30 h-14 bg-gray-950 border-b border-gray-800 w-full" />
    
    <!-- 2. Score Ticker: sticky, z-40, h-10, below nav -->
    <div class="sticky top-14 z-40 h-10 bg-gray-900 border-b border-gray-800" />
    
    <!-- 3. Hero: full-width, min-h-[420px] -->
    <section class="bg-gray-950 py-4" />
    
    <!-- 4. Main Content + Sidebar -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-12 gap-6">
        
        <!-- Main: col-span-12 lg:col-span-8 -->
        <div>
          <!-- Zone 1: Analytics Strip (3 data cards, grid-cols-3) -->
          <!-- Zone 2: Featured Stories (2-col article cards) -->
          <!-- Zone 3: Article List (horizontal list rows) -->
        </div>
        
        <!-- Sidebar: col-span-12 lg:col-span-4 -->
        <aside>
          <!-- Widget 1: DNA Leaderboard -->
          <!-- Widget 2: Live Match Pulse (conditional) -->
          <!-- Widget 3: Upcoming Matches -->
          <!-- Widget 4: Trending Analytics -->
        </aside>
        
      </div>
    </main>
    
    <!-- Mobile: Sticky live match bottom banner (lg:hidden) -->
    <div class="fixed bottom-0 z-40 lg:hidden" />
    
    <!-- Footer -->
    <footer class="border-t border-gray-800 bg-gray-950 py-12" />
    
  </body>
</html>
```

---

## 11. Key Differentiators vs. Cricinfo/Cricbuzz

| Feature | Cricinfo | Cricbuzz | CricDNA |
|---|---|---|---|
| Background | Light (white/gray) | Light (gray) | **Dark (gray-950)** |
| Hero type | Editorial article | Match carousel | **Analytics insight + article** |
| Analytics in homepage | 1 static stat in sidebar | None | **3 live data cards + sidebar widgets** |
| Win probability live | No | No | **Yes, in Live Match Pulse widget** |
| Player DNA scores | No | No | **Yes, DNA Leaderboard in sidebar** |
| Typography | System sans-serif | System sans-serif | **Cabinet Grotesk + General Sans** |
| Number treatment | Plain text | Plain text | **font-mono, tabular-nums, color-coded** |
| Mobile live score | Bottom nav ticker | Swipeable cards | **Sticky bottom live banner (mobile)** |
| Nav analytics CTA | No | No | **"Explore" with icon, emerald color** |

---

## 12. Design Tokens Reference (for Tailwind Config)

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dim: '#059669',
          glow: '#064e3b',
        }
      },
      fontFamily: {
        cabinet: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        general: ['General Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      spacing: {
        'nav': '3.5rem',     // 56px — nav height
        'ticker': '2.5rem',  // 40px — score ticker height
      },
      animation: {
        'pulse-live': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-up': 'fadeUp 0.4s ease-out',
      }
    }
  }
}
```

---

*Reference screenshots captured:*
- *ESPN Cricinfo homepage: `tool_calls/screenshot/screenshot_espncricinfo.com_20260323_*.png`*
- *Cricbuzz homepage: `tool_calls/screenshot/screenshot_cricbuzz.com_20260323_*.png`*
- *Cricinfo news page: `tool_calls/screenshot/screenshot_espncricinfo.com_cricket-news_20260323_*.png`*
- *Cricbuzz news page: `tool_calls/screenshot/screenshot_cricbuzz.com_cricket-news_20260323_*.png`*
