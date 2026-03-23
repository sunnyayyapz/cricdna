# CricDNA — Asset Compliance Report

**Audited by:** Compliance Officer Agent  
**Date:** 2026-03-23  
**Scope:** All external images, fonts, CDN libraries, and third-party scripts

---

## 1. Summary

| Asset Category | Count | Status |
|---|---|---|
| Unsplash Images | 7 unique (used 20 times) | ✅ FREE — No attribution required |
| Fontshare Fonts (General Sans + Cabinet Grotesk) | 2 families | ✅ FREE — Commercial use permitted via API |
| Google Fonts API | Preconnect only (no fonts loaded) | ✅ No issue |
| CDN Libraries / External Scripts | 0 | ✅ None found |
| Local Assets (favicon, logo SVG) | 1 inline SVG, 1 local favicon | ✅ Original / self-created |
| Perplexity Attribution Link | 1 | ✅ Appropriate attribution |

**Overall Verdict: ✅ PASS**

---

## 2. Images — Full Inventory

All article images are served from **Unsplash** (`images.unsplash.com`). There are **7 unique photo IDs** used across **20 article entries** (several photos are reused across multiple articles).

### Unique Unsplash Photo IDs

| # | URL | Used in (articles) | License |
|---|---|---|---|
| 1 | `photo-1531415074968-036ba1b575da` | 3 articles | ✅ Unsplash License — Free |
| 2 | `photo-1540747913346-19e32dc3e97e` | 3 articles | ✅ Unsplash License — Free |
| 3 | `photo-1580748142328-48ce17bfaf11` | 3 articles | ✅ Unsplash License — Free |
| 4 | `photo-1587280501635-68a0e82cd5ff` | 2 articles | ✅ Unsplash License — Free |
| 5 | `photo-1589801258579-18e091f4ca26` | 3 articles | ✅ Unsplash License — Free |
| 6 | `photo-1594470117722-de4b9a02ebed` | 3 articles | ✅ Unsplash License — Free |
| 7 | `photo-1624526267942-ab0ff8a3e972` | 3 articles | ✅ Unsplash License — Free |

### Unsplash License Summary

The [Unsplash License](https://unsplash.com/license) grants an **irrevocable, nonexclusive, worldwide copyright license** to download, copy, modify, distribute, and use photos for free, including for **commercial purposes**.

- **Attribution:** Not required (appreciated but not obligatory)
- **Commercial use:** Fully permitted
- **Modification:** Permitted
- **Restriction:** May not use Unsplash photos to build a competing stock photo service

**Verdict: ✅ FREE — All 7 Unsplash images are fully cleared for use.**

### Photo Reuse Note

Seven unique photos cover 20 article entries. While not a licensing issue, reusing the same photo for multiple distinct articles (e.g., the same cricket stadium image appearing 3 times) reduces content quality and may confuse users. This is a **content quality recommendation**, not a compliance issue.

### Image Sources in Components

- **`ArticlePage.tsx`**: Uses `article.imageUrl` — all images come from `articles.ts` data; no additional hardcoded image URLs found.
- **`HomePage.tsx`**: Uses `article.imageUrl` — same data source, no additional hardcoded image URLs found.
- **`Layout.tsx`**: Contains only an inline SVG logo (CricketDNA helix icon) — no external image sources.

---

## 3. Fonts

### Font Loading Method

Fonts are loaded via the **Fontshare API** in `client/index.html` (and mirrored in `dist/public/index.html`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&f[]=cabinet-grotesk@400,500,700,800&display=swap" rel="stylesheet">
```

> **Note:** The `fonts.googleapis.com` and `fonts.gstatic.com` preconnect hints are present in the HTML but **no Google Fonts stylesheet is loaded**. These are orphaned preconnect hints that have no effect and can be safely removed to reduce unnecessary DNS lookups.

### Font License Analysis

| Font | Foundry | License Type | Commercial Use | Attribution Required |
|---|---|---|---|---|
| General Sans | Indian Type Foundry (ITF) | ITF Free Font License (FFL) — Closed Source | ✅ Free | No |
| Cabinet Grotesk | Indian Type Foundry (ITF) | ITF Free Font License (FFL) — Closed Source | ✅ Free | No |

### ITF Free Font License (FFL) Key Terms

The [Fontshare FAQ](https://www.fontshare.com/faq) confirms: *"All Fontshare fonts are 100% free for both personal and commercial use. You can use them across any medium (print, web, mobile, digital, broadcasting, OEM), at any scale, and in any location worldwide."*

The [ITF FFL License](https://www.fontshare.com/licenses/itf-ffl) grants:

- ✅ Use for personal and commercial purposes — free of charge, unlimited duration
- ✅ Use in web media (websites, apps)
- ✅ Use in logos and graphic elements
- ✅ Use on unlimited devices
- ✅ Attribution is optional ("may but not required")
- ✅ Loading via Fontshare API is explicitly supported and is the recommended delivery method

**Key restriction for web:** The license prohibits transmitting font files directly via technologies such as EOT, Cufon, or sIFR (old font replacement methods). The project correctly uses the **Fontshare API** for delivery, which is the **explicitly approved** web delivery method per the EULA. This means no self-hosting compliance issues apply.

**Verdict: ✅ FREE — Both fonts are fully cleared for commercial web use via Fontshare API.**

---

## 4. CDN Libraries and External Scripts

A full audit of `client/src/` (all `.tsx`, `.ts`, `.css` files) and both `index.html` files found **no CDN-loaded third-party libraries or external scripts**.

All JavaScript dependencies (React, TanStack Query, Lucide Icons, Radix UI, Tailwind CSS, Wouter, etc.) are:
- Listed in `package.json`
- Bundled locally at build time via Vite
- Served as self-hosted assets (`./assets/index-*.js`, `./assets/index-*.css` in `dist/public/`)

**Verdict: ✅ PASS — No external CDN scripts detected.**

---

## 5. Other External References

| Asset | Location | Status |
|---|---|---|
| Perplexity Computer attribution link (`https://www.perplexity.ai/computer`) | `PerplexityAttribution.tsx`, HTML meta tags | ✅ Appropriate — Required creator attribution |
| W3C SVG namespace (`http://www.w3.org/2000/svg`) | Inline SVG in `Layout.tsx` | ✅ Standard SVG namespace, not an external asset |
| Local favicon (`/favicon.png`) | `client/index.html` | ✅ Served locally |
| Inline SVG logo (CricketDNA helix) | `Layout.tsx` | ✅ Original work, inline SVG |

---

## 6. Action Items

| Priority | Issue | Recommendation |
|---|---|---|
| Low | Orphaned `fonts.googleapis.com` and `fonts.gstatic.com` preconnect hints in `index.html` | Remove these two `<link rel="preconnect">` tags — no Google Fonts are actually loaded, so they serve no purpose and cause unnecessary DNS lookups |
| Low | 7 unique images reused across 20 articles | Consider sourcing additional Unsplash photos for greater visual variety; this is not a compliance issue but affects editorial quality |
| Info | Unsplash attribution | While not legally required, Unsplash's community guidelines suggest crediting photographers when practical. Consider adding a brief "Photos: Unsplash" credit in the footer for good practice. |

---

## 7. Compliance Verdict

```
╔══════════════════════════════════════════╗
║                                          ║
║   OVERALL VERDICT:  ✅ PASS             ║
║                                          ║
║   No licensing violations detected.     ║
║   All assets are cleared for commercial  ║
║   and non-commercial use.                ║
║                                          ║
╚══════════════════════════════════════════╝
```

### Summary by Category

| Category | Verdict | Notes |
|---|---|---|
| **Images (Unsplash)** | ✅ PASS | Free commercial use, no attribution required |
| **Fonts (Fontshare/ITF FFL)** | ✅ PASS | Free commercial use via API, no attribution required |
| **CDN Libraries** | ✅ PASS | None — all dependencies bundled locally |
| **External Scripts** | ✅ PASS | None found |
| **Local Assets** | ✅ PASS | Original SVG logo, local favicon |

No action is required before launch. The two low-priority items (orphaned preconnect tags and image variety) are quality improvements, not compliance blockers.

---

*Report generated: 2026-03-23 | Auditor: CricDNA Compliance Officer Agent*
