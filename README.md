# Promobile Landing

Marketing site for **Promobile** — App Store Optimization agency & platform. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Tech stack

- [Next.js 16](https://nextjs.org) — App Router, React Server Components
- React 19, TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- `next/font` — Readex Pro + Geist Mono (self-hosted at build time)
- ESLint 9 (`eslint-config-next`)

## Project structure

```
app/                        # Next.js App Router
  layout.tsx                # Root layout, fonts, global metadata
  page.tsx                  # Landing page composition
  globals.css               # Tailwind + design tokens
  privacy-policy/page.tsx   # /privacy-policy
src/components/
  common/                   # Button, Card, Container, Section, Reveal, CountUp
  Header/  Hero/  About/  Services/  Process/  Pricing/
  Portfolio/  Results/  Statistics/  Team/  Partnership/
  Faq/  CtaBanner/  Contact/  Footer/
public/                     # Static assets (logos, section images)
```

Path alias `@/*` → `src/*` (see `tsconfig.json`).

## Requirements

- Node.js 20.x or later
- npm 10+ (or pnpm / yarn / bun)

## Local development

```bash
npm install
npm run dev
```

App is served at <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

`next build` produces an optimized build in `.next/`. `next start` serves it on port 3000 (override with `PORT=...`).

### Lint

```bash
npm run lint
```

## Deployment

The project is a standard Next.js app with no custom server, no runtime environment variables, and no external services. It can be deployed to any platform that supports Node.js 20+:

- **Vercel** — zero-config; import the repo and deploy.
- **Docker / self-hosted** — run `npm ci && npm run build`, then `npm run start` behind a reverse proxy. Forward port 3000.
- **Static export** — not supported; the app uses React Server Components and `next/font`, which require the Next.js runtime.

Make sure the deployment runs on Node 20+ to match local development.

## Conventions

- Components are colocated by feature under `src/components/<Feature>/<Feature>.tsx` and exported as named exports.
- Reusable primitives live in `src/components/common/` and are re-exported from `common/index.ts`.
- Section components are server components by default; mark `"use client"` only where interactivity (state, effects, intersection observers) is required.
- Styling is Tailwind-only; design tokens (colors, fonts) are defined in `app/globals.css`.

## License

Proprietary — © Promobile. All rights reserved.
