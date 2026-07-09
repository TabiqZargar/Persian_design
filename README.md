# Heritage Rugs — UI Design Test

A luxury brand landing page for a Persian carpet atelier. The page showcases handcrafted rugs through a dark, immersive visual experience inspired by traditional Persian design motifs, geometry, and craftsmanship.

Built as a UI design test.

## Tech Stack

- **Next.js 16** (App Router) — React framework
- **React 19** — UI library
- **TypeScript** — type safety
- **Tailwind CSS v4** — utility-first styling with `@theme inline` for the color palette
- **Framer Motion** — scroll reveals, parallax, and micro-interactions

## Features

- **Persian-inspired color palette** — obsidian, gold, crimson, navy, turquoise with CSS variables
- **Animated SVG components** — medallions, stars, diamonds, and floral motifs as reusable React components
- **Mouse parallax** — floating decorative motifs respond to cursor movement
- **Glass-morphism cards** — backdrop-filter blur with gold-accented borders and hover glow
- **Scroll-triggered reveals** — staggered fade-ups using Framer Motion `whileInView`
- **Tilt effect** — perspective-based 3D tilt on pattern cards
- **Horizontal gallery** — snap-scroll through regional rug styles
- **Decorative frame** — fixed screen border with ornamental corner SVGs
- **Fully responsive** — mobile through desktop breakpoints
- **No inline CSS or JS** — all styles via Tailwind utilities, animations via Framer Motion

## Sections

| Section | Description |
|---------|-------------|
| Hero | Medallion animation, weaving line, shimmer gradient headline, CTA buttons |
| Patterns | 6 glass cards for traditional motifs (Gol-e Maryam, Gonbad, Shah Abbasi, etc.) |
| Gallery | Horizontal snap-scroll gallery by region (Isfahan, Tabriz, Kashan, Shiraz, Qom) |
| Process | 4-step heritage process (Design, Loom, Weave, Wash) with connecting thread line |
| CTA | Contact call-to-action with medallion accent |
| Footer | 4-column link grid with social icons |

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
