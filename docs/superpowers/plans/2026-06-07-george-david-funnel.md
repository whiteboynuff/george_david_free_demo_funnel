# George David Funnel — Conversion-Optimized Website

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a conversion-optimized single-page landing page for George David's 4 Seasons coaching brand.

**Architecture:** Single HTML page with external CSS and JS. No frameworks. Vanilla CSS custom properties for the brand system, vanilla JS for interactivity (sticky nav, mobile menu, form). Google Fonts loaded via CSS `@import`.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JavaScript (ES6)

---

## File Structure

```
george-david-funnel/
├── index.html                # Full page HTML, all 10 sections
├── css/
│   └── style.css             # All styles: variables, typography, components, sections, responsive
└── js/
    └── main.js               # Sticky nav, mobile menu, form handler, scroll effects
```

---

### Task 1: Create Project Structure and HTML Skeleton

**Files:**
- Create: `george-david-funnel/index.html`
- Create: `george-david-funnel/css/style.css`
- Create: `george-david-funnel/js/main.js`

- [ ] **Step 1: Create directories**

```bash
New-Item -ItemType Directory -Path "george-david-funnel/css" -Force
New-Item -ItemType Directory -Path "george-david-funnel/js" -Force
```

- [ ] **Step 2: Create HTML skeleton with CSS/JS links and Google Fonts**

File: `george-david-funnel/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>George David — The 4 Seasons Coach</title>
  <meta name="description" content="Experience growth without burnout through The 4 Seasons Framework. Get your free ebook and start compounding balanced growth.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- All sections will be added in subsequent tasks -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create empty CSS file with CSS custom properties**

File: `george-david-funnel/css/style.css`

```css
/* ── CSS Custom Properties ── */
:root {
  --forest: #1C3A2B;
  --forest-mid: #2D5C42;
  --sage: #4A7A5C;
  --sage-light: #7DAF8E;
  --sage-pale: #C8DDD1;
  --gold: #C9933E;
  --gold-light: #E8B86D;
  --gold-hover: #B8832E;
  --cream: #F6F2EB;
  --cream-warm: #EDE8DF;
  --ink: #2C2C2C;
  --ink-mid: #4A4A4A;
  --ink-soft: #6B6B6B;
  --white: #FFFFFF;
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'DM Sans', sans-serif;
  --max-width: 1200px;
  --nav-height: 68px;
}

/* ── Reset ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  background: var(--cream);
  color: var(--ink);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
```

- [ ] **Step 4: Create empty JS file**

File: `george-david-funnel/js/main.js`

```js
// Main entry point — handlers added in later tasks
document.addEventListener('DOMContentLoaded', function() {
  console.log('George David funnel loaded');
});
```

---

### Task 2: Build Navigation Bar

**Files:**
- Modify: `george-david-funnel/index.html` (add nav after `<body>`)
- Modify: `george-david-funnel/css/style.css` (nav styles)
- Modify: `george-david-funnel/js/main.js` (mobile menu toggle)

- [ ] **Step 1: Add nav HTML to index.html** (insert after `<body>`)

```html
<!-- Navigation -->
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="#" class="navbar-logo">George David</a>
    <button class="navbar-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <div class="navbar-menu" id="navMenu">
      <ul class="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#stories">Success Stories</a></li>
        <li><a href="#scaling">Scaling Program</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      <a href="#hero" class="navbar-cta">Free Ebook ↗</a>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: Add nav CSS to style.css**

```css
/* ── Navigation ── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: var(--forest);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.3s ease;
}

.navbar.scrolled {
  background: rgba(28,58,43,0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.navbar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 600;
  color: var(--cream);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-links {
  display: flex;
  gap: 32px;
}

.navbar-links a {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--sage-pale);
  transition: color 0.2s ease;
}

.navbar-links a:hover {
  color: var(--cream);
}

.navbar-cta {
  background: var(--gold);
  color: var(--white);
  padding: 9px 20px;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  transition: background 0.2s ease;
}

.navbar-cta:hover {
  background: var(--gold-hover);
}

/* Hamburger */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.navbar-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--cream);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.navbar-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

- [ ] **Step 3: Add mobile nav CSS** (append to style.css)

```css
@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(28,58,43,0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 99;
  }

  .navbar-menu.open {
    opacity: 1;
    visibility: visible;
  }

  .navbar-links {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .navbar-links a {
    font-size: 20px;
  }

  .navbar-cta {
    font-size: 16px;
    padding: 14px 32px;
  }
}
```

- [ ] **Step 4: Add JS for sticky nav + mobile menu**

File: `george-david-funnel/js/main.js` (replace entire file)

```js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  // Sticky nav on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
```

---

### Task 3: Build Hero Section

**Files:**
- Modify: `george-david-funnel/index.html` (add hero after nav)
- Modify: `george-david-funnel/css/style.css` (hero styles)

- [ ] **Step 1: Add hero HTML**

```html
<!-- Hero -->
<section class="hero" id="hero">
  <div class="hero-content">
    <p class="hero-eyebrow">The 4 Seasons Coach · For Entrepreneurs, Leaders &amp; Creators</p>
    <h1 class="hero-title">Experience <em>Growth</em><br>Without Burnout</h1>
    <p class="hero-subtitle">through The 4 Seasons Framework</p>
    <p class="hero-body">Stop living out of sync. Align your business strategy with your emotional season and start compounding growth instead of forcing it.</p>
    <form class="hero-form" id="heroForm" action="#" method="POST">
      <input type="email" class="hero-input" placeholder="Your email address" required autocomplete="email" inputmode="email">
      <button type="submit" class="hero-btn">Get My Free Ebook →</button>
    </form>
    <p class="hero-micro">No spam. Unsubscribe anytime. <a href="#" class="hero-micro-link">Already have it? Take the quiz →</a></p>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS**

```css
/* ── Hero ── */
.hero {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--forest);
  background-image: radial-gradient(ellipse at 70% 30%, var(--forest-mid) 0%, var(--forest) 60%);
  padding: 40px;
}

.hero-content {
  max-width: 680px;
}

.hero-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 54px;
  font-weight: 500;
  color: var(--cream);
  line-height: 1.08;
  margin-bottom: 10px;
}

.hero-title em {
  color: var(--gold-light);
  font-style: italic;
}

.hero-subtitle {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: var(--sage-pale);
  margin-bottom: 20px;
}

.hero-body {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 300;
  color: rgba(198,218,210,0.85);
  max-width: 520px;
  margin: 0 auto 28px;
  line-height: 1.7;
}

.hero-form {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.hero-input {
  height: 48px;
  min-width: 260px;
  padding: 0 18px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 4px;
  color: var(--cream);
  font-family: var(--font-sans);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.hero-input:focus {
  border-color: var(--gold);
}

.hero-input::placeholder {
  color: rgba(198,218,210,0.5);
}

.hero-btn {
  height: 48px;
  padding: 0 28px;
  background: var(--gold);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.hero-btn:hover {
  background: var(--gold-hover);
}

.hero-micro {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--sage-light);
}

.hero-micro-link {
  color: var(--sage-light);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.hero-micro-link:hover {
  color: var(--cream);
}
```

- [ ] **Step 3: Add hero responsive CSS**

```css
@media (max-width: 768px) {
  .hero-title { font-size: 38px; }
  .hero-subtitle { font-size: 18px; }
  .hero-body { font-size: 15px; }
  .hero-form { flex-direction: column; }
  .hero-input { min-width: 0; width: 100%; max-width: 400px; }
  .hero-btn { width: 100%; max-width: 400px; }
  .hero { min-height: 500px; padding: 40px 24px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 28px; }
  .hero-subtitle { font-size: 16px; }
  .hero-body { font-size: 14px; }
  .hero { min-height: 440px; padding: 32px 20px; }
  .hero-input { height: 44px; }
  .hero-btn { height: 44px; }
}
```

- [ ] **Step 4: Add form JS handler** (append to main.js inside the DOMContentLoaded callback)

```js
  // Form handler
  const heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('.hero-input').value;
      if (email) {
        // Placeholder: wire to MailerLite API here
        // Example: POST to MailerLite via fetch()
        // fetch('https://api.mailerlite.com/api/v2/groups/GROUP_ID/subscribers', { ... })
        this.querySelector('.hero-btn').textContent = 'Thanks! Check your inbox →';
        this.querySelector('.hero-btn').style.background = '#1B6B3A';
        this.querySelector('.hero-input').value = '';
        setTimeout(function() {
          this.querySelector('.hero-btn').textContent = 'Get My Free Ebook →';
          this.querySelector('.hero-btn').style.background = '';
        }.bind(this), 5000);
      }
    });
  }
```

---

### Task 4: Build Trust Bar

**Files:**
- Modify: `george-david-funnel/index.html` (add trust bar after hero)
- Modify: `george-david-funnel/css/style.css` (trust bar styles)

- [ ] **Step 1: Add trust bar HTML**

```html
<!-- Trust Bar -->
<div class="trust-bar">
  <div class="trust-bar-inner">
    <span class="trust-bar-item">⭐⭐⭐⭐⭐ &nbsp;"Completely transformed how I work" — Adrien Skow</span>
    <span class="trust-bar-item">2,000+ entrepreneurs helped</span>
  </div>
</div>
```

- [ ] **Step 2: Add trust bar CSS**

```css
/* ── Trust Bar ── */
.trust-bar {
  background: rgba(255,255,255,0.04);
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.trust-bar-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.trust-bar-item {
  font-family: var(--font-sans);
  font-size: 13px;
  color: rgba(198,218,210,0.7);
}

@media (max-width: 768px) {
  .trust-bar-inner {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 16px 24px;
  }
  .trust-bar-item { font-size: 12px; }
}
```

---

### Task 5: Build Problem → Solution Section

**Files:**
- Modify: `george-david-funnel/index.html` (add problem/solution after trust bar)
- Modify: `george-david-funnel/css/style.css` (section styles)

- [ ] **Step 1: Add problem/solution HTML**

```html
<!-- Problem → Solution -->
<section class="section section-light" id="about">
  <div class="container">
    <div class="split-grid">
      <div class="split-col">
        <p class="section-label-text">The Problem</p>
        <h2 class="section-title">Is burnout the cost of your ambition?</h2>
        <p class="section-body">You're working harder than ever, but growth feels like pushing a boulder uphill. The more you force it, the more exhausted you get — and the less results you see.</p>
        <ul class="pain-list">
          <li>Chronic overwhelm that never seems to lift</li>
          <li>Inconsistent results no matter how hard you push</li>
          <li>Fighting against your own natural rhythms</li>
          <li>The nagging feeling something is out of sync</li>
        </ul>
      </div>
      <div class="split-col">
        <p class="section-label-text">The Solution</p>
        <h2 class="section-title">The 4 Seasons Framework</h2>
        <p class="section-body">Nature doesn't force growth — neither should you. The 4 Seasons Framework helps you align your business strategy with your emotional season so you can compound growth naturally.</p>
        <div class="seasons-grid">
          <div class="season-card">
            <span class="season-icon">🌱</span>
            <h4>Spring</h4>
            <p>Plant seeds. New ideas, fresh starts, gentle momentum.</p>
          </div>
          <div class="season-card">
            <span class="season-icon">☀️</span>
            <h4>Summer</h4>
            <p>Nurture growth. Build systems, strengthen foundations.</p>
          </div>
          <div class="season-card">
            <span class="season-icon">🍂</span>
            <h4>Fall</h4>
            <p>Harvest results. Reap what you've cultivated, reflect.</p>
          </div>
          <div class="season-card">
            <span class="season-icon">❄️</span>
            <h4>Winter</h4>
            <p>Rest and reset. Strategic pauses, deep clarity.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add problem/solution CSS**

```css
/* ── Section Base ── */
.section { padding: 80px 0; }
.section-dark { background: var(--forest); color: var(--cream); }
.section-light { background: var(--cream); color: var(--ink); }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 40px;
}

.section-label-text {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 10px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 500;
  color: var(--forest);
  margin-bottom: 16px;
  line-height: 1.15;
}

.section-body {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 300;
  color: var(--ink-mid);
  line-height: 1.7;
  margin-bottom: 20px;
}

/* ── Split Grid ── */
.split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.pain-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pain-list li {
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--ink-mid);
  padding-left: 24px;
  position: relative;
}

.pain-list li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: var(--gold);
  font-weight: 600;
}

/* ── Season Cards ── */
.seasons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 20px;
}

.season-card {
  background: var(--white);
  border: 1px solid var(--cream-warm);
  border-radius: 10px;
  padding: 18px 16px;
}

.season-icon { font-size: 22px; display: block; margin-bottom: 6px; }

.season-card h4 {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--forest);
  margin-bottom: 4px;
}

.season-card p {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .section { padding: 64px 0; }
  .container { padding: 0 24px; }
  .split-grid { grid-template-columns: 1fr; gap: 40px; }
  .section-title { font-size: 28px; }
}

@media (max-width: 480px) {
  .section { padding: 48px 0; }
  .container { padding: 0 20px; }
  .section-title { font-size: 24px; }
  .section-body { font-size: 15px; }
  .seasons-grid { gap: 10px; }
  .season-card { padding: 14px; }
}
```

---

### Task 6: Build Testimonial Section

**Files:**
- Modify: `george-david-funnel/index.html` (add testimonial after problem/solution)
- Modify: `george-david-funnel/css/style.css` (testimonial styles)

- [ ] **Step 1: Add testimonial HTML** (insert after problem/solution section)

```html
<!-- Testimonial -->
<section class="section section-light" id="stories">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-video">
        <div class="testimonial-placeholder">
          <span>▶</span>
          <p>Client Testimonial — Adrien Skow</p>
        </div>
      </div>
      <blockquote class="testimonial-quote">
        "The 4 Seasons Framework completely transformed how I approach my business. I stopped forcing and started flowing — and for the first time, growth feels sustainable."
      </blockquote>
      <div class="testimonial-author">
        <strong>Adrien Skow</strong>
        <span>Founder of Adrienskow.com</span>
      </div>
      <a href="#" class="testimonial-link">See More Success Stories →</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add testimonial CSS**

```css
/* ── Testimonial ── */
.testimonial {
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

.testimonial-video {
  margin-bottom: 28px;
}

.testimonial-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  max-width: 560px;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--forest-mid), var(--forest));
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--cream);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.testimonial-placeholder:hover {
  transform: scale(1.02);
}

.testimonial-placeholder span {
  font-size: 48px;
  color: var(--gold);
  margin-bottom: 12px;
}

.testimonial-placeholder p {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--sage-pale);
}

.testimonial-quote {
  font-family: var(--font-serif);
  font-size: 22px;
  font-style: italic;
  color: var(--ink-mid);
  line-height: 1.5;
  margin-bottom: 16px;
  border: none;
}

.testimonial-author {
  margin-bottom: 20px;
}

.testimonial-author strong {
  display: block;
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--ink);
  font-weight: 600;
}

.testimonial-author span {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--ink-soft);
}

.testimonial-link {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--gold);
  transition: color 0.2s ease;
}

.testimonial-link:hover {
  color: var(--gold-hover);
  text-decoration: underline;
}

@media (max-width: 480px) {
  .testimonial-quote { font-size: 18px; }
}
```

---

### Task 7: Build Free Resources Section (Grouped Offer Cards)

**Files:**
- Modify: `george-david-funnel/index.html` (add resources after testimonial)
- Modify: `george-david-funnel/css/style.css` (resources styles)

- [ ] **Step 1: Add resources HTML**

```html
<!-- Free Resources -->
<section class="section section-light" id="resources">
  <div class="container">
    <p class="section-label-text">Free Resources</p>
    <h2 class="section-title">Start Growing Without Burnout</h2>
    <p class="section-desc">Pick the resource that fits where you are right now. All free — no strings attached.</p>

    <!-- Group 1: Start Here -->
    <div class="offer-group">
      <h3 class="offer-group-title">Start Here</h3>
      <p class="offer-group-desc">New to the 4 Seasons? Begin here.</p>
      <div class="offer-grid">
        <article class="offer-card">
          <span class="offer-tag">Ebook</span>
          <h4 class="offer-title">The 4 Seasons Ebook</h4>
          <p class="offer-body">The complete guide to balanced growth — learn how to align your strategy with your emotional season.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Report</span>
          <h4 class="offer-title">Four Seasons System Report</h4>
          <p class="offer-body">Understand from A to Z how the system works and how it can transform your business growth.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Newsletter</span>
          <h4 class="offer-title">Weekly Value Newsletter</h4>
          <p class="offer-body">Business wisdom to compound balanced growth — delivered weekly to your inbox.</p>
          <a href="#" class="offer-cta">Join free →</a>
        </article>
      </div>
    </div>

    <!-- Group 2: Go Deeper -->
    <div class="offer-group">
      <h3 class="offer-group-title">Go Deeper</h3>
      <p class="offer-group-desc">Master the framework with in-depth guides.</p>
      <div class="offer-grid">
        <article class="offer-card">
          <span class="offer-tag">Guide</span>
          <h4 class="offer-title">Survival Guide</h4>
          <p class="offer-body">12-step system to build consistency without burning out. Includes 30-day survival anchors.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Guide</span>
          <h4 class="offer-title">Business Basis Guide</h4>
          <p class="offer-body">Apply the 4 Seasons to marketing, leadership, and yourself with tactical frameworks.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Roadmap</span>
          <h4 class="offer-title">Anti-Burnout Roadmap</h4>
          <p class="offer-body">Manage your energy like a pro. Diagnose your season, plan your energy, avoid burnout.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
      </div>
    </div>

    <!-- Group 3: Take Action -->
    <div class="offer-group">
      <h3 class="offer-group-title">Take Action</h3>
      <p class="offer-group-desc">Interactive tools and high-engagement resources.</p>
      <div class="offer-grid">
        <article class="offer-card">
          <span class="offer-tag">Call</span>
          <h4 class="offer-title">21-Day Productivity Call</h4>
          <p class="offer-body">Personalized productivity blueprint you can implement the same day. No more feeling stuck.</p>
          <a href="#" class="offer-cta">Get free access →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Challenge</span>
          <h4 class="offer-title">21-Day Challenge</h4>
          <p class="offer-body">The fastest way to build lasting changes. Small steps, compound results.</p>
          <a href="#" class="offer-cta">Join the challenge →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Webinar</span>
          <h4 class="offer-title">Four Seasons Webinar</h4>
          <p class="offer-body">Learn the system that broke the endless burnout cycle — and how it can do the same for you.</p>
          <a href="#" class="offer-cta">Register free →</a>
        </article>
        <article class="offer-card">
          <span class="offer-tag">Quiz</span>
          <h4 class="offer-title">Season Quiz</h4>
          <p class="offer-body">Find which emotional season you're in and get action steps to navigate it.</p>
          <a href="#" class="offer-cta">Take the quiz →</a>
        </article>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add offer cards CSS**

```css
/* ── Offer Groups ── */
.offer-group {
  margin-bottom: 48px;
}

.offer-group:last-child { margin-bottom: 0; }

.offer-group-title {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--forest);
  margin-bottom: 4px;
}

.offer-group-desc {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--ink-soft);
  margin-bottom: 20px;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.offer-card {
  background: var(--white);
  border: 1px solid var(--cream-warm);
  border-radius: 10px;
  padding: 28px 24px;
  transition: all 0.2s ease;
}

.offer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(28,58,43,0.08);
}

.offer-tag {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sage);
  margin-bottom: 12px;
}

.offer-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
  color: var(--forest);
  margin-bottom: 10px;
  line-height: 1.25;
}

.offer-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 300;
  color: var(--ink-soft);
  line-height: 1.65;
  margin-bottom: 20px;
}

.offer-cta {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold);
  transition: all 0.2s ease;
}

.offer-cta:hover {
  text-decoration: underline;
}

.section-desc {
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--ink-soft);
  max-width: 600px;
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
  .offer-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
}

@media (max-width: 768px) {
  .offer-grid { gap: 16px; }
  .offer-card { padding: 24px; }
  .offer-title { font-size: 18px; }
  .offer-group { margin-bottom: 40px; }
}

@media (max-width: 480px) {
  .offer-grid { grid-template-columns: 1fr; gap: 16px; }
  .offer-card { padding: 20px; }
  .offer-title { font-size: 17px; }
  .offer-body { font-size: 13px; }
  .offer-cta {
    display: block;
    text-align: center;
    padding: 12px 20px;
    background: var(--gold);
    color: var(--white);
    border-radius: 4px;
    font-size: 14px;
  }
  .offer-cta:hover { text-decoration: none; background: var(--gold-hover); }
}
```

---

### Task 8: Build Quiz CTA Banner

**Files:**
- Modify: `george-david-funnel/index.html` (add quiz banner after resources)
- Modify: `george-david-funnel/css/style.css` (quiz banner styles)

- [ ] **Step 1: Add quiz banner HTML**

```html
<!-- Quiz CTA -->
<section class="section section-dark cta-banner">
  <div class="container" style="text-align:center;">
    <p class="section-label-text" style="color:var(--gold);">Know Your Season</p>
    <h2 class="section-title" style="color:var(--cream);">What season are you in right now?</h2>
    <p class="section-body" style="color:var(--sage-pale);text-align:center;">Take the 2-minute quiz and get your personalized roadmap to navigate your current season.</p>
    <a href="#" class="cta-banner-btn">Take the Quiz →</a>
    <p class="cta-banner-micro">Already know your season? <a href="#resources" class="cta-banner-link">Explore the resources above</a></p>
  </div>
</section>
```

- [ ] **Step 2: Add quiz banner CSS**

```css
/* ── CTA Banner (Quiz / Coaching) ── */
.cta-banner {
  text-align: center;
  padding: 80px 40px;
}

.cta-banner .section-body {
  max-width: 560px;
  margin: 0 auto 28px;
}

.cta-banner-btn {
  display: inline-block;
  background: var(--gold);
  color: var(--white);
  padding: 16px 40px;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
  transition: background 0.2s ease;
}

.cta-banner-btn:hover {
  background: var(--gold-hover);
}

.cta-banner-micro {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--sage-light);
  margin-top: 16px;
}

.cta-banner-link {
  color: var(--sage-light);
  text-decoration: underline;
  transition: color 0.2s ease;
}

.cta-banner-link:hover {
  color: var(--cream);
}

@media (max-width: 768px) {
  .cta-banner { padding: 56px 24px; }
  .cta-banner .section-title { font-size: 30px; }
}

@media (max-width: 480px) {
  .cta-banner { padding: 48px 20px; }
  .cta-banner .section-title { font-size: 26px; }
  .cta-banner-btn {
    width: 100%;
    padding: 14px 24px;
    font-size: 15px;
  }
}
```

---

### Task 9: Build Blog Section

**Files:**
- Modify: `george-david-funnel/index.html` (add blog after quiz banner)
- Modify: `george-david-funnel/css/style.css` (blog styles)

- [ ] **Step 1: Add blog HTML**

```html
<!-- Blog -->
<section class="section section-light">
  <div class="container">
    <p class="section-label-text">Latest Insights</p>
    <h2 class="section-title">Start learning with the latest articles</h2>
    <p class="section-desc">Align your business strategy with your emotional season so you can start compounding growth instead of forcing it.</p>
    <div class="blog-grid">
      <article class="blog-card">
        <div class="blog-img">
          <div class="blog-img-placeholder"></div>
        </div>
        <div class="blog-body">
          <h3 class="blog-title">How to Compound Growth Without Forcing It</h3>
          <p class="blog-excerpt">The art of growing without burning out — a practical guide to sustainable business growth.</p>
          <a href="#" class="blog-link">Read More →</a>
        </div>
      </article>
      <article class="blog-card">
        <div class="blog-img">
          <div class="blog-img-placeholder"></div>
        </div>
        <div class="blog-body">
          <h3 class="blog-title">The 434 Trinity: Fulfillment and Flow</h3>
          <p class="blog-excerpt">The hidden equation behind sustainable fulfillment and flow in business and life.</p>
          <a href="#" class="blog-link">Read More →</a>
        </div>
      </article>
      <article class="blog-card">
        <div class="blog-img">
          <div class="blog-img-placeholder"></div>
        </div>
        <div class="blog-body">
          <h3 class="blog-title">Align Your Heart and Strategy</h3>
          <p class="blog-excerpt">Why it's important to align your emotional state with your business strategy.</p>
          <a href="#" class="blog-link">Read More →</a>
        </div>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add blog CSS**

```css
/* ── Blog ── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  background: var(--white);
  border: 1px solid var(--cream-warm);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(28,58,43,0.08);
}

.blog-img-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--sage-pale), var(--sage-light));
}

.blog-body {
  padding: 20px 24px 24px;
}

.blog-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--forest);
  margin-bottom: 8px;
  line-height: 1.25;
}

.blog-excerpt {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.6;
  margin-bottom: 16px;
}

.blog-link {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold);
  transition: color 0.2s ease;
}

.blog-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .blog-body { padding: 16px 20px 20px; }
}

@media (max-width: 480px) {
  .blog-grid { grid-template-columns: 1fr; gap: 16px; }
  .blog-card { padding: 0; }
}
```

---

### Task 10: Build Coaching CTA + Footer

**Files:**
- Modify: `george-david-funnel/index.html` (add coaching CTA + footer)
- Modify: `george-david-funnel/css/style.css` (coaching + footer styles)

- [ ] **Step 1: Add coaching CTA HTML**

```html
<!-- Coaching CTA -->
<section class="section section-dark cta-banner" id="scaling">
  <div class="container" style="text-align:center;">
    <h2 class="section-title" style="color:var(--cream);">Ready to build a business that grows with you, not at your expense?</h2>
    <p class="section-body" style="color:var(--sage-pale);text-align:center;max-width:560px;margin:0 auto 28px;">Work one-on-one with George David to master the 4 Seasons Framework and transform your approach to growth.</p>
    <a href="#" class="cta-banner-btn">Apply for Coaching →</a>
    <p class="cta-banner-micro" style="color:var(--sage-light);">Limited spots available</p>
  </div>
</section>
```

- [ ] **Step 2: Add footer HTML**

```html
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4 class="footer-logo">George David</h4>
        <p class="footer-tagline">The 4 Seasons Coach — helping entrepreneurs grow without burnout.</p>
      </div>
      <div class="footer-col">
        <h5 class="footer-heading">Quick Links</h5>
        <ul class="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#stories">Success Stories</a></li>
          <li><a href="#scaling">Scaling Program</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 class="footer-heading">Connect</h5>
        <ul class="footer-links">
          <li><a href="https://www.instagram.com/georgexvidavid/" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 George David. All rights reserved.</p>
  </div>
</footer>
```

- [ ] **Step 3: Add coaching + footer CSS**

```css
/* ── Coaching CTA ── */
#scaling .section-title {
  font-size: 38px;
  line-height: 1.15;
}

@media (max-width: 480px) {
  #scaling .section-title { font-size: 26px; }
  #scaling .cta-banner-btn { width: 100%; }
}

/* ── Footer ── */
.footer {
  background: #162E22;
  color: var(--sage-pale);
  padding: 60px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
}

.footer-logo {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 8px;
}

.footer-tagline {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--sage-pale);
  max-width: 280px;
}

.footer-heading {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--sage-pale);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--cream);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 40px;
  padding: 20px 40px;
  text-align: center;
  font-family: var(--font-sans);
  font-size: 13px;
  color: rgba(198,218,210,0.5);
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; text-align: center; }
  .footer-tagline { max-width: none; }
  .footer-links { align-items: center; }
  .footer { padding: 48px 0 0; }
  .footer-bottom { padding: 16px 24px; }
}
```

---

### Task 11: Final Polish and File Assembly

**Files:**
- Modify: `george-david-funnel/css/style.css` (final responsive improvements)
- Modify: `george-david-funnel/index.html` (verify all sections assembled)

- [ ] **Step 1: Verify all sections present in correct order**

```html
<body>
  <nav class="navbar" id="navbar">...</nav>
  <section class="hero" id="hero">...</section>
  <div class="trust-bar">...</div>
  <section class="section section-light" id="about">...</section>
  <section class="section section-light" id="stories">...</section>
  <section class="section section-light" id="resources">...</section>
  <section class="section section-dark cta-banner">...</section>
  <section class="section section-light">...</section>
  <section class="section section-dark cta-banner" id="scaling">...</section>
  <footer class="footer">...</footer>
  <script src="js/main.js"></script>
</body>
```

- [ ] **Step 2: Add smooth scroll offset for fixed nav**

Add to CSS:
```css
/* ── Smooth scroll offset ── */
#about, #stories, #resources, #scaling {
  scroll-margin-top: 80px;
}
```

- [ ] **Step 3: Verify responsive behavior at 3 breakpoints** — open in browser at 1200px+, 768px, and 375px widths
