bba-tech -> tech.baritobahalap.com

Purpose: Barito Bahalap Tech (BBT) as the technology operating brand of BBA. This is where a prospective client confirms that BBT delivers and maintains enterprise systems, not one-off websites.

Audience: BUMN/BUMD, government institutions, corporate procurement and IT teams, institutional partners evaluating BBT as a long-term technology vendor.

Contains:

- Home: positioning, services overview, track record summary, engagement model, governance summary
- Services: enterprise systems, operational dashboards, business automation, custom software, system integration, interface design, long-term support and retainers
- Track record: only the confirmed engagements (RSO2 Telkom Dashboard, E-Palugada, AMPI Kalteng website)
- Approach: six delivery stages, retainer structure, procurement and contracting
- Security and data governance: confidentiality, data isolation, access control, UU PDP 27/2022 position
- Contact: inquiry form that prepares a mailto: message
- Careers (interest only, no listed openings), privacy policy, terms of use, 404

Firewall rules for this repository:

- No BBM content, links, copy or assets. BBA appears only as the parent organization (footer, privacy, JSON-LD) and links to baritobahalap.com.
- Security copy refers to "other BBA operating units" and does not name them.
- No client data is stored or processed by this site. It is static, with no database.
- Repository access is limited to BBT personnel and the Founder/Director.

Content rules:

- All copy lives in `src/data`. Do not add clients, awards, certifications, revenue figures or partnerships that are not confirmed.
- Client names in `src/data/caseStudies.ts` require written client permission before launch.
- Placeholders in `src/data/legal.ts` and `src/data/site.ts` (email, dates, domain) must be resolved before launch.

Structure:

- `src/app`: App, router, lazy routes
- `src/components`: dumb display components (layout, sections)
- `src/pages`: orchestration only, one folder per page
- `src/hooks`: bridge between data and pages (`useTechContent`, `useContactForm`)
- `src/data`: static content
- `src/domain`: content types and JSON-LD builders
- `@/` resolves to `src`

Stack: React.js, TypeScript, Vite, static, no database. Shared UI, tokens and config come from `@barito-bahalap/*` (bba-shared-kit).

Run (from the repository root C:\dev\bba):

1. `pnpm install`
2. `pnpm --filter bba-tech typecheck`
3. `pnpm --filter bba-tech dev`

Deploy: Vercel, with `GITHUB_TOKEN` (read:packages) set as a build environment variable so the kit packages install from GitHub Packages.

...
