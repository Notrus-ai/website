# CLAUDE.md — notrus-website

Project-level instructions for Claude Code when working in this repository.

## Project Overview

**notrus-website** is the public marketing website for Notrus AI — an enterprise AI-powered customer engagement platform. It is a single-page Next.js site targeting enterprise clients, showcasing the Notrus product suite.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (Pages Router) |
| Language | TypeScript 5, React 19 |
| Styling | Tailwind CSS v4 (CSS-first via `@theme`) |
| Animation | `motion` (Motion One) v12 |
| i18n | `next-intl` v4 — PT (default) and EN |
| Icons | `react-icons` v5 |
| Package manager | yarn |

## Common Commands

```bash
yarn dev        # Development server
yarn build      # Production build
yarn lint       # ESLint
```

## Directory Structure

```
src/
├── assets/
│   ├── fonts/aspekta/        # Aspekta custom font (woff2, weights 500/600/700)
│   ├── icons/                # sec-1..4.svg (security section)
│   ├── images/dashboard/     # All section images (imported as StaticImageData)
│   └── styles/
│       ├── globals.css       # @theme tokens, CSS vars, base styles
│       ├── components.css    # .hero-bg, .btn-*, .card-*, etc.
│       └── dashboard.css     # .results-content CSS Grid layout
├── components/
│   ├── Button.tsx
│   ├── Carousel.tsx          # Generic carousel — accepts renderItem render prop
│   ├── Footer.tsx
│   ├── Header.tsx            # Scroll-aware sticky header with mobile drawer
│   ├── LanguageSwitcher.tsx
│   └── home/
│       ├── WhyCardItem.tsx
│       ├── SecurityCard.tsx
│       └── about/index.tsx   # Accordion + animated image panel
├── config/
│   └── constants.ts          # externalLinks map per locale (hub.notrus.ai)
├── hooks/
│   └── useExternalLinks.tsx  # Resolves locale-aware external URLs
├── pages/
│   ├── _app.tsx              # next-intl provider, font setup
│   ├── _document.tsx
│   └── index.tsx             # Full landing page (all sections in order)
├── utils/
│   └── useScreenType.ts      # 'mobile' | 'tablet' | 'desktop' hook
└── i18n.ts                   # Locales: ['pt', 'en'], defaultLocale: 'pt'
```

## Page Sections (in order — `src/pages/index.tsx`)

1. **#hero** — Full-viewport, `hero-bg.png` background image, animated headline + CTA
2. **#about** — "One platform. Three layers" — accordion (Sphere / Orbit / Insights) with locale-specific images
3. **#why-us** — Carousel of 4 `WhyCardItem` cards
4. **#results** — CSS Grid with 3 KPI stats (25% revenue / 75% CSAT / 60% costs)
5. **#security** — 4 security cards; desktop = grid, mobile = Carousel
6. **#get-demo** — CTA section with radial-gradient blue background

## Styling Architecture

### Tailwind CSS v4 — CSS-first
Configuration lives entirely in `src/assets/styles/globals.css` via `@theme {}`, **not** in `tailwind.config.ts` (the config file only sets content paths and `darkMode: 'class'`).

### Design Tokens (CSS Variables)
Defined in `:root` in `globals.css`:
- `--notrus-blue-*` — primary brand blues
- `--notrus-teal`, `--notrus-cyan`, `--notrus-purple` — accent colors
- `--notrus-tangaroa: #001b40` — deep navy
- `--notrus-black-pearl: #00040a` — body background (near black)
- `--foreground: #f8fafc` — default text

> Dark mode is the **only active theme**. Light mode variables are commented out.

### Fonts
- **Inter** — body text (via `next/font/google`)
- **Aspekta** — headings (local woff2, via `src/assets/fonts/aspekta/aspekta.ts`)

### CSS Files Responsibility
- `globals.css` — tokens, base reset, body background
- `components.css` — reusable component classes (`.hero-bg`, `.btn-*`, `.card-*`, etc.)
- `dashboard.css` — `.results-content` CSS Grid named areas

### Background Images
- Images referenced in CSS (`url(...)`) must be in `public/` — use `/images/dashboard/filename.png`
- Images used with `next/image` `<Image>` component are imported from `src/assets/images/`

## i18n Pattern

- `next-intl` v4 with Pages Router
- `getStaticProps` on each page loads `messages/${locale}.json` and passes as `pageProps.messages`
- `_app.tsx` wraps app in `<NextIntlClientProvider locale={router.locale}>`
- `LanguageSwitcher` uses `<Link locale="en">` to switch without full navigation
- About section has locale-specific image variants (e.g., `sphere.png` vs `sphere-pt.png`)
- Translation files: `messages/pt.json` (default) and `messages/en.json`

## Animation Conventions

Reusable variants defined at the top of `index.tsx` — apply these consistently:

```ts
// Fade up (individual elements)
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

// Stagger parent (wraps multiple fadeUp children)
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
```

- Scroll-triggered: use `whileInView` with `viewport={{ once: true, amount: 0.4 }}`
- Hero section animates on mount (`initial` / `animate`)

## Path Alias

`@/*` maps to `./src/*` — always use this for imports:
```ts
import Button from '@/components/Button'
import hero from '@/assets/images/dashboard/hero.png'
```

## Key Conventions

- **External links** are locale-aware — always use `useExternalLinks()` hook, never hardcode URLs
- **Carousel component** is generic (`Carousel<T>`) and accepts any data + `renderItem` render prop
- **No state management library** — plain `useState` / `useEffect`
- **`useScreenType`** utility exists in `src/utils/` but currently unused — available for responsive logic
- **`lottie-react`** is installed but not yet used — available for future animations
- `src/pages/api/hello.ts` is a placeholder — ignore it

## Common Pitfalls

- Tailwind arbitrary values with spaces must use underscores: `bg-[calc(100%_-_150px)]` — but for complex `background-position` values, prefer plain CSS in the `.css` files instead
- CSS background images must reference `/images/...` (public folder), not `src/assets/`
- Tailwind v4 config is CSS-first — do not add theme tokens to `tailwind.config.ts`; add them to `globals.css` under `@theme {}`
- Both locales must be updated when adding new text — `messages/pt.json` and `messages/en.json`
