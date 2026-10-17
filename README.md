bba-tech -> tech.baritobahalap.com

Purpose: Barito Bahalap Tech (BBT) as the technology operating brand of BBA. A landing site where a prospective client confirms that BBT delivers and maintains enterprise systems, not one-off websites.

Languages: Bahasa Indonesia is the default (no URL prefix). English is optional under `/en`. Same i18n structure as bba-corporate (`src/i18n`, `src/data/id`, `src/data/en`).

Pages:

- `/` Home: hero, services (`services`), work teaser, how we work (`how-we-work`), engagement models (`engagement`), consultation form (`consultation`)
- `/work` Work: overview table, project details and shared working pattern (credibility page)
- `/about` About
- `/careers` Careers (interest only, no listed openings)
- `/privacy`, `/terms`, 404
- Every route also exists under `/en`.

Navigation: `src/config/navigation.ts`, same pattern as bba-corporate. A link with a `section` scrolls to that section id and the URL never gets a `#fragment`. On the same page it scrolls directly (`useSectionLink`). From another page it navigates with `state.scrollTo`, handled by the kit's `ScrollToSection`.

Firewall rules for this repository:

- No BBM content, links, copy or assets. BBA appears only as the parent organization (footer, about, privacy, JSON-LD) and links to baritobahalap.com.
- Security copy refers to "other BBA operating units" and does not name them.
- No client data is stored or processed by this site. It is static, with no database.
- Repository access is limited to BBT personnel and the Founder/Director.

Content rules:

- All copy lives in `src/data/{id,en}`. Keep both languages in sync (the `ContentBundle` type enforces the same shape).
- Do not add clients, awards, certifications, revenue figures or partnerships that are not confirmed.
- Client names in `src/data/*/main.ts` (caseStudies) require written client permission before launch.
- Search both locales for `[` placeholders and `TODO` before launch: legal entity, privacy and terms dates.
- The consultation form goes to the shared BBA inbox (info@baritobahalap.com). The subject is prefixed `[BBT]` so it can be filtered.

Structure:

- `src/app`: App, router, locale-aware routes
- `src/components`: dumb display components (layout, ui)
- `src/config`: navigation (main nav, header CTA, footer groups)
- `src/pages`: orchestration only, one folder per page
- `src/hooks`: `useLocale`, `useLanguageSwitch`, `useSeoMeta`, `useContactForm`, `useSectionLink`
- `src/data`: static content per locale
- `src/i18n`: locales, href localization, content bundle type
- `src/domain`: content types and JSON-LD builders
- `@/` resolves to `src`

Stack: React, TypeScript, Vite, static, no database. Shared UI, tokens and config come from `@barito-bahalap/*` (bba-shared-kit).

Run (from the repository root C:\dev\bba):

1. `pnpm install`
2. `pnpm --filter bba-tech typecheck`
3. `pnpm --filter bba-tech dev`

Deploy: Vercel, with `GITHUB_TOKEN` (read:packages) set as a build environment variable so the kit packages install from GitHub Packages.
