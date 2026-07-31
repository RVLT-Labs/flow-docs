# flow-docs

The **RVLT Flow** user guide — a [Docusaurus](https://docusaurus.io) site, themed to the
[RVLT design language](https://github.com/RVLT-Labs/rvlt-designlanguage). Separate audience
from the dev-facing docs in the app repo (`CLAUDE.md` / `ARCHITECTURE.md` / `FEATUREDOCS/`
in `gearflow`) — this is for end users.

Tracked by [gearflow#959](https://github.com/TwoToned/gearflow/issues/959).

**Status: theme bootstrap only.** No real guide content has landed yet — see
[Content](#content) below.

## Theme

Dark "espresso" is the default surface (per DESIGN.md §3.1 — the product is dark-first);
light "Paper" is the alternate, toggled from the navbar. Everything is wired from RVLT's
token set, not hand-picked:

- **Colors, radius, shadows** — `src/css/custom.css` maps the RVLT token set (mirrored from
  [`rvlt-designlanguage`](https://github.com/RVLT-Labs/rvlt-designlanguage)'s `tokens.json` /
  `dist/globals.css`) onto Infima's CSS variables, plus a parallel `--rvlt-*` namespace used
  directly for the things Infima doesn't have a variable for (pill buttons, 2px outlines,
  hard offset shadows, the one sanctioned radial spotlight wash).
- **Fonts** — Archivo (display/headings), Hanken Grotesk (body/UI), Geist Mono (code),
  Kalam (handwritten eyebrows only), Baloo 2 (the "Flow" wordmark in the navbar/lockup) —
  self-hosted via [Fontsource](https://fontsource.org), no external font CDN.
- **Logo** — `static/img/rvlt-mark.svg` / `rvlt-mark-dark.svg` (theme-aware red), sourced
  from `rvlt-designlanguage/assets/`.
- **Components** — cards, admonitions/callouts, code blocks, buttons, tables, and the
  footer are restyled to the 2px-outline + hard-offset-shadow language; admonitions use the
  soft-fill + solid-accent pattern instead of Infima's stock solid-color alert boxes.

If `rvlt-designlanguage`'s tokens change, re-derive the values in `src/css/custom.css`
by hand (this repo doesn't consume `@rvlt/flow-theme` as a package — it's a Tailwind/shadcn
theme built for the Next.js app, not Docusaurus/Infima).

## Content

Deliberately not built out yet. `docs/intro.mdx` is a placeholder that exists to prove the
theme (headings, body copy, links, all five admonition types, code blocks) renders
correctly — not real guide content. The proposed v1 information architecture (getting
started, core concepts — projects, warehouse/fulfillment, crew, assets/kits — and
per-module guides) is in gearflow#959; nothing under `docs/` should be treated as
authoritative product documentation until that lands.

## Open decisions (gearflow#959)

Not resolved by this bootstrap — flagged here so they aren't lost:

- **Hosting/deploy target.** `docusaurus.config.ts`'s `url` is a placeholder
  (`https://docs.flow.rvlt.app`) pending a decision on subdomain vs. path off
  `flow.rvlt.app`, and on Vercel/Netlify/GitHub Pages/Coolify as the deploy target.
- **Search.** No search provider wired up (local search vs. Algolia DocSearch).
- **Content ownership/cadence.**

## Commands

```bash
pnpm install
pnpm start           # dev server, live reload
pnpm build           # production build to build/
pnpm serve           # serve the production build locally
pnpm typecheck
```

This repo is pnpm-only (single committed `pnpm-lock.yaml`).
