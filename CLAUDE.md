# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the Nagoya University Volleyball Club (NUVC), hosted on GitHub Pages. No build tools, bundlers, or package managers — pure HTML/CSS/JS.

## Site Structure

- `index.html` — Main page (entry point)
- `plan/index.html` — Activity schedule (男子/女子 tabs, sticky sidebar, folded months)
- `result/index.html` — Match results by year
- `member/index.html` — Club member roster
- `gallery/index.html` — Photo gallery by year
- `other/index.html` — Other info (club rules, links)
- `shinkan/shinkan.men.html` — Men's new student recruitment page
- `shinkan/shinkan.women.html` — Women's new student recruitment page
- `images/` — All site images (photos, schedule images, SNS icons)

## Design System

CSS custom properties defined in `index.html` and replicated in sub-pages:
- `--green-dark`, `--green-mid`, `--green-light`, `--green-pale` — primary palette
- `--burgundy`, `--burgundy-mid` — accent (used for Instagram buttons and stripe)
- `--white`, `--off-white`

Typography: `'Noto Sans JP'` (Japanese) + `'Bebas Neue'` (logo/headings) from Google Fonts.

## Layout Patterns

**Sub-pages with sidebar** (`plan/index.html`): 3-column CSS Grid — `1fr min(900px,100%) 1fr`. Sidebar sits in column 1, main content in column 2. Collapses to single column at `max-width: 860px`.

**Navigation**: Fixed 64px header with hamburger menu on mobile. Identity stripe (burgundy bar with nav links) sits directly below header.

**Footer**: All pages share the same footer structure — logo, club name, divider, address, 利用規約 button (opens ToS modal), copyright. No email addresses in footers.

## Key JS Patterns

- **ToS modal**: `openTos()` / `closeTos()` — modal injected before `</body>` in every page; closes on overlay click or Escape key
- **Plan page tabs**: `switchTeam('men'|'women')` toggles visibility between `#men-panel` and `#women-panel`
- **Plan page fold/expand**: First 2 months shown; `.month-block.folded` hidden; `toggleMore(team)` expands all
- **Plan page sidebar**: `jumpTo(blockId)` auto-expands folded months then scrolls; IntersectionObserver highlights current month
- **Scroll-reveal**: `.reveal` class + IntersectionObserver adds `.visible` class; `.reveal-grid` children get staggered delays via nth-child
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
