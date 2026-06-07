# George David — Conversion-Optimized Funnel Design

**Source:** george-david-official-site.mailerpage.io  
**Framework:** 4 Seasons / 434 Trinity Coaching  
**Audience:** Entrepreneurs, Leaders, Creators  
**Date:** June 7, 2026  
**Status:** Approved for implementation

---

## 1. Conversion Strategy

### 1.1 Core Conversion Problem

The original page suffers from **decision paralysis** — 9+ equal-weight offers above the fold with no CTA hierarchy. Every additional choice reduces conversion rate (Hick's Law). Combined with typos, broken links, and zero trust signals, the page fails at its primary job: capturing leads.

### 1.2 Funnel Architecture

```
Awareness → Trust → Lead Capture → Nurture → Deeper Engagement → Paid Offer
```

Each section has exactly **one job**:

| Section | Job | Primary Metric |
|---------|-----|---------------|
| Sticky Nav | Brand + one exit CTA | Click-through rate |
| Hero | Capture email for ebook | Form completion rate |
| Trust Bar | Build credibility | Scroll depth |
| Problem → Solution | Sell the framework | Time on section |
| Video Testimonial | Social proof | Play rate |
| Free Resources (grouped) | Lower-friction opt-ins | Secondary capture rate |
| Season Quiz | Engagement + segmentation | Quiz start rate |
| Blog | SEO + authority | External click rate |
| Coaching CTA | Paid offer | Inbound inquiry rate |
| Footer | Social + legal | Link click rate |

### 1.3 Critical Rules

1. **One primary CTA per section.** Never two competing actions.
2. **Inline forms before external links.** Each redirect drops 20-40% of traffic.
3. **Trust before ask.** No CTA without preceding social proof.
4. **Group choices.** Never show 10 equal options. Categorize or collapse.
5. **Zero errors.** No typos, no broken links, no placeholder content.

---

## 2. Brand System

### 2.1 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Forest Deep | `#1C3A2B` | Primary background, dark sections |
| Forest Mid | `#2D5C42` | Dark section accents, gradients |
| Sage | `#4A7A5C` | Light section accents, labels |
| Sage Light | `#7DAF8E` | Sub-links, secondary text on dark |
| Sage Pale | `#C8DDD1` | Body text on dark backgrounds |
| Gold | `#C9933E` | Primary CTA buttons |
| Gold Light | `#E8B86D` | Italic accent text in headlines |
| Cream | `#F6F2EB` | Page background, light sections |
| Cream Warm | `#EDE8DF` | Borders, dividers |
| Ink | `#2C2C2C` | Primary text color |
| Ink Mid | `#4A4A4A` | Body text on light |
| Ink Soft | `#6B6B6B` | Secondary text |

**Dark section rules:** BG `#1C3A2B`, headings `#F6F2EB`, body `#C8DDD1`, CTAs `#C9933E` with white text.

**Light section rules:** BG `#F6F2EB`, headings `#1C3A2B`, body `#4A4A4A`, CTAs `#1C3A2B` with cream text or gold.

### 2.2 Typography

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Hero H1 | Cormorant Garamond | 500 | 54px → 36px → 28px | One italic word in gold |
| Section heading | Cormorant Garamond | 500 | 32px → 24px | |
| Subheading | Cormorant Garamond | 400 italic | 20px | |
| Section label | DM Sans | 600 | 11px | Uppercase, +0.14em tracking |
| Body | DM Sans | 300 | 16px | Line height 1.7 |
| CTA button | DM Sans | 600 | 14px | +0.04em tracking |
| Small text | DM Sans | 400 | 13px | Trust bar, micro-copy |

### 2.3 Spacing System

- Major section padding: 80px desktop / 56px mobile
- Max content width: 1200px, side padding 40px desktop / 20px mobile
- Card gap: 24px
- Between elements within a section: 16-24px

---

## 3. Section Specifications

### 3.1 Sticky Navigation

**Position:** Fixed top, z-index 100.  
**Height:** 68px.  
**Background:** `#1C3A2B` solid. On scroll: `rgba(28,58,43,0.95)` + `backdrop-filter: blur(8px)`.  
**Border bottom:** 1px solid `rgba(255,255,255,0.08)`.

| Element | Spec |
|---------|------|
| Logo | Cormorant Garamond 600, 22px, `#F6F2EB` |
| Nav links | DM Sans 400, 14px, `#C8DDD1`, 32px gap |
| Nav CTA | BG `#C9933E`, white text, 9px 20px, radius 4px |
| Mobile | Hamburger toggle, menu slides in from right |

**Nav items:** About | Success Stories | Scaling Program | Resources

### 3.2 Hero Section

**Height:** `calc(100vh - 68px)` desktop, content vertically centered.  
**Background:** `#1C3A2B` with `radial-gradient(ellipse at 70% 30%, #2D5C42 0%, #1C3A2B 60%)`.

**Layout (single CTA):**
- Eyebrow: "The 4 Seasons Coach · For Entrepreneurs, Leaders & Creators"
- H1: "Experience *Growth* Without Burnout" (italic word in `#E8B86D`)
- Subtitle: "through The 4 Seasons Framework"
- Body: "Stop living out of sync. Align your business strategy with your emotional season and start compounding growth instead of forcing it."
- **Inline email form:** email input + "Get My Free Ebook →" button, side by side
- Micro-copy: "No spam. Unsubscribe anytime. Already have it? Take the quiz →"

**Email form spec:**
- Input: 48px height, 260px min-width, `rgba(255,255,255,0.08)` BG, `rgba(255,255,255,0.2)` border, 4px radius
- Button: 48px height, `#C9933E` BG, white text, 4px radius, hover `#B8832E`
- Placeholder endpoint: ready to wire to MailerLite

### 3.3 Trust Bar

**Background:** `rgba(255,255,255,0.04)`, top/bottom borders `rgba(255,255,255,0.08)`.  
**Padding:** 18px 40px.

Content (flex row, space-between):
- "⭐⭐⭐⭐⭐ 'Completely transformed how I work' — Adrien Skow"
- "2,000+ entrepreneurs helped"

### 3.4 Problem → Solution Section

**Background:** Cream (`#F6F2EB`).  
**Layout:** 2-column grid.

**Left column — The Problem:**
- Heading: "Is burnout the cost of your ambition?"
- Body describing the burnout cycle, forcing growth, being out of sync
- Pain points: chronic overwhelm, inconsistent results, fighting your own rhythm

**Right column — The Solution:**
- Heading: "The 4 Seasons Framework"
- Brief explanation: nature doesn't force growth, neither should you
- 4 season cards (Spring, Summer, Fall, Winter) — each with one-line description of the emotional/business phase

### 3.5 Video Testimonial

**Background:** Cream.  
**Layout:** Centered, max-width 720px.

- Video embed placeholder (Adrien Skow testimonial)
- Pull quote below
- Optional: "See More Success Stories →" link

### 3.6 Free Resources (Grouped Offer Cards)

**Background:** White on cream.  
**Layout:** 3-column grid desktop, 1-column mobile.

**Group 1 — "Start Here"** (primary lead magnets)
- The 4 Seasons Ebook (also offered in hero)
- The Four Seasons System Report
- Join the Newsletter

**Group 2 — "Go Deeper"** (education)
- The Four Seasons Survival Guide
- The Four Seasons Business Basis Guide
- Anti-Burnout Roadmap

**Group 3 — "Take Action"** (high engagement)
- 21-Day Productivity Habits Call
- 21-Day Four Seasons Challenge
- The Four Seasons Webinar
- The Four Seasons Quiz

**Card spec:**
- BG: `#FFFFFF`, border `1px solid #EDE8DF`, radius 10px, padding 28px 24px
- Category tag: DM Sans 600, 10px, uppercase, `#4A7A5C`
- Title: Cormorant Garamond 500, 20px, `#1C3A2B`
- Body: DM Sans 300, 14px, `#6B6B6B`, 2 sentences max
- CTA: "Get free access →" in `#C9933E`, hover underline
- Hover: translateY(-2px), shadow `0 8px 24px rgba(28,58,43,0.08)`

### 3.7 Season Quiz CTA

**Background:** Forest Deep (`#1C3A2B`).  
**Layout:** Centered, full-width banner.

- Heading: "What season are you in right now?"
- Subtitle: "Take the 2-minute quiz and get your personalized roadmap"
- Button: "Take the Quiz →" (gold)
- Micro-copy: "Already know your season? Explore the resources above"

### 3.8 Blog / Latest Content

**Background:** Cream.  
**Layout:** 3-card grid.

3 blog cards with thumbnail, title, excerpt, "Read More →" link.  
External links to Notion blog pages.

### 3.9 Coaching CTA (Bottom of Funnel)

**Background:** Forest Deep.  
**Layout:** Centered, full-width.

- Heading: "Ready to build a business that grows with you, not at your expense?"
- Subheading: "Work with George David one-on-one"
- Button: "Apply for Coaching →" (gold)
- Micro-copy: "Limited spots available"

### 3.10 Footer

**Background:** Forest Deep, slightly darker.  
**Layout:** 3-column grid.

- Column 1: Logo + tagline
- Column 2: Quick links (About, Success Stories, Scaling Program, Resources)
- Column 3: Social (Instagram) + email contact + privacy link
- Bottom bar: copyright

---

## 4. Responsive Strategy

### 4.1 Breakpoints

| Breakpoint | Name | Key Changes |
|------------|------|-------------|
| ≤ 1024px | Small desktop/tablet landscape | 2-col offer grids, hero font 42px |
| ≤ 768px | Tablet portrait | 1-col offer grids, stack hero form vertically, hamburger nav |
| ≤ 480px | Mobile | All fonts at minimum sizes, full-width everything, stacked footer |

### 4.2 Universal Mobile Rules

- **Touch targets:** All interactive elements min 44×44px (48px preferred)
- **Tap spacing:** Minimum 8px between tappable elements
- **Section padding:** 80px → 64px → 48px → 32px (desktop → tablet → mobile)
- **Side padding:** 40px → 24px → 20px
- **Font scaling:** All sizes reduce progressively (see per-section specs below)
- **Form inputs:** `type="email"` + `inputmode="email"` + `autocomplete="email"` for native mobile keyboard
- **No hover-dependent interactions:** All hover effects degrade gracefully on touch

### 4.3 Per-Section Mobile Behavior

#### 4.3.1 Sticky Navigation

| Element | ≤ 768px | ≤ 480px |
|---------|---------|---------|
| Layout | Logo left, hamburger right | Same |
| Desktop nav links | Hidden behind hamburger | Hidden behind hamburger |
| Nav CTA | Moves to bottom of mobile menu | Same |
| Hamburger icon | 44×44px tap target, three-line icon | Same |
| Mobile menu | Full-screen overlay, slides down from top, bg `rgba(28,58,43,0.98)`, nav links stacked centered | Same |
| Menu close | X icon top-right, tap to close + tap backdrop | Same |
| Sticky CTA bar | Optional: fixed gold bar at bottom of viewport with "Get Free Ebook" | Same |

#### 4.3.2 Hero Section

| Property | Desktop (≥ 769px) | ≤ 768px | ≤ 480px |
|----------|-------------------|---------|---------|
| H1 size | 54px | 38px | 28px |
| Subtitle size | 20px | 18px | 16px |
| Body size | 16px | 15px | 14px |
| Form layout | Side-by-side (input + button) | Stacked vertically | Stacked vertically |
| Input width | 260px | 100% (within container) | 100% |
| Button width | Auto | 100% | 100% |
| Input + button height | 48px | 48px | 44px |
| Min height | `calc(100vh - 68px)` | Auto (min 500px) | Auto (min 440px) |
| Padding | 40px sides | 24px sides | 20px sides |

**Mobile form:** Full-width input on top, full-width button below, 10px gap between them.

#### 4.3.3 Trust Bar

| ≤ 768px | ≤ 480px |
|---------|---------|
| Flex row → stacked column | Same |
| Gap 40px → gap 8px | Same |
| Text centered | Same |
| Font size 13px → 12px | 12px |

Stars + quote on one line, count on next line. Both centered.

#### 4.3.4 Problem → Solution Section

| ≤ 768px | ≤ 480px |
|---------|---------|
| 2-column → single column, stacked | Same |
| Season cards become horizontal scroll or 2×2 grid | 2×2 grid |

#### 4.3.5 Free Resources (Offer Cards)

| Desktop (≥ 1025px) | ≤ 1024px | ≤ 768px | ≤ 480px |
|--------------------|----------|---------|---------|
| 3-column grid | 2-column grid | 2-column grid | 1-column stack |
| 24px gap | 20px gap | 16px gap | 16px gap |
| Card padding 28px | 24px | 24px | 20px |
| Card title 20px | 18px | 18px | 17px |
| Card body 14px | 13px | 13px | 13px |

**Mobile CTA:** Full-width button on cards instead of text link. "Get free access" as a tappable 44px button.

#### 4.3.6 Quiz CTA Banner

| Desktop | ≤ 768px | ≤ 480px |
|---------|---------|---------|
| Padding 80px 40px | 56px 24px | 48px 20px |
| Heading 38px | 30px | 26px |
| Button height 48px | 48px | 44px |

#### 4.3.7 Blog Cards

| ≤ 768px | ≤ 480px |
|---------|---------|
| 3-column → 2-column | 2-column → 1-column |
| Card padding 24px | 20px |

#### 4.3.8 Coaching CTA

| Desktop | ≤ 480px |
|---------|---------|
| Heading 38px | 26px |
| Button padding 16px 40px | 14px 24px, full-width |

#### 4.3.9 Footer

| ≤ 768px | ≤ 480px |
|---------|---------|
| 3-column → single column stacked | Same |
| Column gap 40px → 24px | Same |
| All text centered | Same |
| Social icons centered | Same |

---

## 5. Copy Corrections (from Original)

All original typos fixed:
- "Scalling" → "Scaling"
- "webinnar" → "webinar"
- "burining out" → "burning out"
- "don't want ot miss" → "don't want to miss"
- "drope" → "drop"
- "agaisnt" → "against"
- "Inifnite" → "Infinite"
- "breaktrhough" → "breakthrough"
- "durring" → "during"
- "rythym" → "rhythm"
- "tranform" → "transform"

---

## 6. Implementation Notes

- **Font loading:** Google Fonts with `display=swap`. Cormorant Garamond (400, 400italic, 500, 500italic, 600) + DM Sans (300, 400, 500, 600).
- **Form:** Styled inline form, placeholder `POST` endpoint. Ready for MailerLite API or embed snippet.
- **External links:** All `#` placeholders. Verified SubscribePage URLs available in original audit.
- **Images:** Placeholder backgrounds where images were used. Ready for real assets.
- **Nav:** Sticky with scroll blur. Hamburger on mobile via JS toggle.
- **Performance:** No external dependencies beyond Google Fonts. No frameworks. Vanilla CSS + JS.
