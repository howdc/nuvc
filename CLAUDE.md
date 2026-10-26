# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the Nagoya University Volleyball Club (NUVC), hosted on GitHub Pages. No build tools, bundlers, or package managers — pure HTML/CSS/JS.

## Site Structure

- `index.html` — Main page (entry point)
- `plan/index.html` — Activity schedule (男子/女子 tabs, sticky sidebar, folded months)
- `result/index.html` — Match results by year
  - `result/1989–2012/result<year>.html` — one page per year, converted from the old Shift_JIS frameset pages (league tables + `.ev`/`.mc` match cards)
  - `result/2013–2022/*.html` — per-tournament pages with `.result-tabs`
  - `result/2023+/spring.html`, `autumn.html` — men's Tokai league, Nagoya-only match list
  - `result/season.css` — shared styles for all year/season pages
- `member/index.html` — Club member roster
- `gallery/index.html` — Photo gallery by year
- `other/index.html` — Other info (club rules, links)
- `shinkan/shinkan.men.html` — Men's new student recruitment page
- `shinkan/shinkan.women.html` — Women's new student recruitment page
- `images/` — All site images (photos, schedule images, SNS icons)
- `assets/site.css` — Shared styles for every page (tokens, header, nav stripe, page hero, sections, buttons, team tabs, footer, ToS modal, animations)
- `assets/site.js` — Shared scripts for every page (icon sprite, ToS modal, copy email, scroll-reveal); loaded with `defer`

## Design System

CSS custom properties defined once in `assets/site.css` (`:root`). Each page keeps only its page-specific rules in its own `<style>`:
- `--green-dark`, `--green-mid`, `--green-light`, `--green-pale` — primary palette
- `--burgundy`, `--burgundy-mid` — accent (used for Instagram buttons and stripe)
- `--white`, `--off-white`

Typography (Google Fonts): `'Noto Sans JP'` (Japanese, `--font-jp`), `'Barlow Condensed'` (English labels / big italic display text, `--font-en`), `'Bebas Neue'` (NUVC wordmark and numbers, `--font-logo`).

Sporty motifs: large outlined watermark word (`data-en` on `.page-hero`), angled tags (`clip-path` parallelogram), burgundy/green split accents. Women's pages use `.page-hero--women`.

## Layout Patterns

**Sub-pages with sidebar** (`plan/index.html`, `member/index.html`; shared `.content-wrap` / `.main-content` in `site.css`): 3-column CSS Grid — `1fr min(900px,100%) 1fr`. Sidebar sits in column 1, main content in column 2. Collapses to single column at `max-width: 860px`.

**Navigation**: Sticky 64px header (logo + NUVC wordmark left, 新歓・活動計画 shortcuts right; no hamburger menu). Identity stripe (burgundy bar with nav links) sits directly below header.

**Footer**: All pages share the same footer markup — `.footer-logo`, `.footer-sub`, `.footer-divider`, `.footer-address`, `.footer-links` (利用規約 button → `openTos()`), `.footer-copy`. No email addresses in footers.

## Key JS Patterns

- **ToS modal**: markup lives only in `assets/site.js`, which injects it into every page; `openTos()` / `closeTos()`; closes on overlay click or Escape key. Edit the ToS text there.
- **Icons**: `assets/site.js` injects an SVG sprite — use `<svg class="icon"><use href="#i-instagram"/></svg>` (`i-instagram`, `i-copy`, `i-users`, `i-pin`)
- **Plan page tabs**: `switchTeam('men'|'women')` toggles visibility between `#men-panel` and `#women-panel`
- **Plan page fold/expand**: First 2 months shown; `.month-block.folded` hidden; `toggleMore(team)` expands all
- **Plan page sidebar**: `jumpTo(blockId)` auto-expands folded months then scrolls; IntersectionObserver highlights current month
- **Scroll-reveal**: `.reveal` class + IntersectionObserver (in `site.js`) adds `.visible` class; `.reveal-grid` children get staggered delays via nth-child
- **Copy email**: `copyEmail(btn, email)` uses `navigator.clipboard.writeText()`; adds `.copied` class for 1.8s feedback

## Animation Conventions

- `@keyframes fadeUp` — entrance animation used on hero titles and page hero titles in all sub-pages
- `@keyframes fadeDown` — used for identity stripe nav buttons (slide down from above)
- All entrance animations use `animation: ... both` fill-mode with staggered delays
- `@media (prefers-reduced-motion: reduce)` block disables animations on every page

## Contact & Social

- Club email: `dr.49z.9151@s.thers.ac.jp` (displayed with copy button, no mailto links)
- 新歓 Instagram: `nagoya_volley_2026_`
- Do not add mailto: links anywhere on the site
