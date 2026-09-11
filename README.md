# Hydra Curls — Figma to Responsive React Page

A responsive React + TypeScript landing page built from the provided Figma screenshots
(direct Figma file access wasn't available, so this was built from exported screenshots +
Inspect/Dev Mode measurements rather than a live Figma import).

## Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)
- class-variance-authority / clsx / tailwind-merge (utility styling helpers, shadcn-style)

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Header.tsx          # nav bar (mobile menu included)
    Hero.tsx             # purple gradient hero + script headline
    WaveDivider.tsx       # reusable SVG wave section divider
    CloudDivider.tsx      # reusable SVG cloud/soft-bump divider
    ProductBottle.tsx     # placeholder product illustration (see note below)
    NewLaunch.tsx          # "New Launch" intro + product + CTA buttons
    ProductBanner.tsx      # full lineup banner section
    InfoSplit.tsx           # two-column info cards
    ProductCarousel.tsx     # dome-shaped product carousel + 48-hour stat
    Ingredients.tsx          # 3 ingredient cards + badge row
    Community.tsx             # testimonials section
    HairTypes.tsx              # influencer grid + hair-type cards
    CurlyJourney.tsx            # colorful CTA grid + revolution banner
    Footer.tsx                   # footer with newsletter signup
  App.tsx
  index.css              # Tailwind v4 theme tokens (brand colors, fonts)
```

Each section is its own component so they're independently reusable/testable, rather than one
long page file.

## Responsive approach
Built mobile-first with Tailwind breakpoints (`sm:`, `md:`) — grids collapse to single columns,
the dome/carousel and wave dividers scale height at each breakpoint, and the nav collapses to a
hamburger menu below `md`.

## Note on imagery
Real product photography and model photography from the Figma file are proprietary brand assets
(this is a real product page for an existing brand). Rather than reproduce that imagery, this
build uses generic placeholder illustrations and icon-based placeholders in their place —
swap in the actual exported PNG/SVG assets from the Figma file's Dev Mode / asset export for a
pixel-accurate final result. Layout, spacing, typography, color palette, and section structure
were matched directly to the design.

## AI tools used
- Claude (Sonnet) — used for full component architecture, all React/TypeScript/Tailwind code,
  the wave/cloud SVG divider implementations, and responsive layout decisions, working directly
  from Figma screenshots and Inspect-mode measurements.

## Total development time
~[fill in based on your actual session length]
# moksha_assesment1
