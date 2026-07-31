# IMPLEMENTATION LEDGER

## Batch T031-T040

Status: complete

| ID   | Major task                                     | Acceptance criteria                                                                            | Evidence                                                                |
| ---- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| T031 | Restore visible section rendering              | Motion-wrapped sections never remain blank after the first hero section.                       | `src/components/Motion.tsx`, browser verification                       |
| T032 | Resolve commerce image key lookup              | Product cards and galleries resolve through the shared manifest instead of raw key strings.    | `src/components/Commerce.tsx`                                           |
| T033 | Curate the homepage shop preview               | The home shop preview shows a varied set of images rather than adjacent duplicate accessories. | `src/pages/HomePage.tsx`                                                |
| T034 | Re-run formatter after code fixes              | Prettier accepts the touched files and no formatting drift remains.                            | `npm run format:check`                                                  |
| T035 | Re-run TypeScript and production build         | TypeScript and the Vite production build pass after the repair.                                | `npm run typecheck`, `npm run build`                                    |
| T036 | Re-run unit coverage                           | The existing component and page tests pass after the repair.                                   | `npm run test`                                                          |
| T037 | Re-run lint                                    | ESLint completes successfully and only the pre-existing warnings remain.                       | `npm run lint`                                                          |
| T038 | Verify the repaired routes in a browser        | Home and shop render with visible sections and distinct mapped product images.                 | `docs/screenshots/home/1440.png`, `docs/screenshots/shop/1440.png`      |
| T039 | Confirm mapped asset resolution in the browser | The first visible product cards resolve to different actual asset URLs.                        | Playwright browser inspection                                           |
| T040 | Update project records and evidence            | State, ledger and decision records match the repaired implementation.                          | `docs/PROJECT_STATE.md`, `docs/DECISIONS.md`, `docs/evidence/commands/` |

## Batch Result

- The motion wrapper was made fail-safe by keeping sections visible while they animate, which prevents the blank-page failure mode.
- The commerce image lookup was corrected so product cards and galleries use the manifest-resolved asset URLs.
- The homepage shop preview now mixes four different assets, avoiding the repeated accessory fallback look.
- The homepage facilities band now uses the bench station asset and the store/home image blocks were scaled down so they feel less overpowering.
- The Explore dropdown now opens and closes with hover/focus state instead of staying latched until a click.
- The browser now confirms the home facilities image, the first visible product cards and the Explore dropdown state resolve correctly.
- Format, lint, type-check, unit tests and production build all passed after the repair.

## Batch T001-T010

Status: complete

| ID   | Major task                                                            | Acceptance criteria                                                                               | Evidence                                                                                                                                   |
| ---- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| T001 | Initialise the Vite React + TypeScript app scaffold                   | App boots locally, scripts are in place, and TypeScript is strict.                                | `npm run typecheck`, `npm run build`                                                                                                       |
| T002 | Establish global architecture, routing and shell layout               | All required routes resolve and share a consistent shell with navigation and footer.              | `npm run test:e2e`                                                                                                                         |
| T003 | Create the black-and-white design system and typography scale         | Core tokens, spacing and typography are centralised and applied site-wide.                        | `src/styles/global.css`                                                                                                                    |
| T004 | Centralise business data, navigation and image manifest               | Data for memberships, classes, trainers, products and images lives in typed modules.              | `src/data/siteData.ts`, `src/data/commerceData.ts`, `src/data/imageManifest.ts`                                                            |
| T005 | Audit and document all local images                                   | Every local image is recorded with dimensions, format, likely subject, route fit and disposition. | `docs/IMAGE_AUDIT.md`, `docs/ASSET_LICENCES.md`                                                                                            |
| T006 | Build the homepage with project-specific motion and imagery           | Homepage reads as a premium fitness brand story rather than a generic card layout.                | `src/pages/HomePage.tsx`, `src/components/Motion.tsx`                                                                                      |
| T007 | Build membership, classes, trainers, facilities and about experiences | Each page has distinct content, truthful copy and usable CTAs.                                    | `src/pages/*.tsx`, `docs/screenshots/*`                                                                                                    |
| T008 | Build the shop, product detail route and persistent cart              | Search, filters, sorting, variants, cart state and totals work truthfully.                        | `src/pages/ShopPage.tsx`, `src/pages/ProductPage.tsx`, `src/context/CartContext.tsx`                                                       |
| T009 | Build FAQ, contact, privacy, terms and 404 pages                      | Support and legal flows are accessible and clearly branded.                                       | `src/pages/FAQPage.tsx`, `src/pages/ContactPage.tsx`, `src/pages/PrivacyPage.tsx`, `src/pages/TermsPage.tsx`, `src/pages/NotFoundPage.tsx` |
| T010 | Add tests, QA evidence, Vercel readiness and release docs             | Automated checks run, evidence is captured, and release documents are populated.                  | `docs/evidence/commands/*`, `docs/QA_REPORT.md`, `docs/*_QA.md`                                                                            |

## Batch Result

- Performance work split the route bundle and improved the Lighthouse home score to 91.
- Dependency risk from `react-router` was resolved with an override and re-audited cleanly.
- Playwright verified the main journeys and generated route screenshots under `docs/screenshots/`.

## Notes

- Client-only facts such as final business contact details, final prices, stock and deployment URLs remain to be confirmed where the spec requires them.

## Batch T021-T030

Status: complete

| ID   | Major task                                                     | Acceptance criteria                                                                | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T021 | Redesign the homepage hero into one cohesive image-led section | The opener no longer reads as disconnected columns and remains readable on mobile. | `src/pages/HomePage.tsx`, `src/styles/global.css`                                                                                                                                                                                                                                                                                                                                                                                                               |
| T022 | Add a full-bleed `BG image.webp` scroll section                | The image spans the viewport and reveals smoothly as the page scrolls.             | `src/pages/HomePage.tsx`, `src/styles/global.css`, `src/data/imageManifest.ts`                                                                                                                                                                                                                                                                                                                                                                                  |
| T023 | Add a full-bleed `BG 2.webp` scroll section                    | The second background section behaves like a premium immersive band.               | `src/pages/HomePage.tsx`, `src/styles/global.css`, `src/data/imageManifest.ts`                                                                                                                                                                                                                                                                                                                                                                                  |
| T024 | Remove excess empty vertical spacing                           | The homepage no longer has unintended blank black gaps between sections.           | `src/pages/HomePage.tsx`, `src/styles/global.css`                                                                                                                                                                                                                                                                                                                                                                                                               |
| T025 | Add defensive product image fallback handling                  | Broken or missing product assets fall back to a designed local image.              | `src/components/Shared.tsx`, `src/components/Commerce.tsx`                                                                                                                                                                                                                                                                                                                                                                                                      |
| T026 | Tighten desktop and mobile navigation                          | The header uses a compact dropdown-led structure with correct focus behaviour.     | `src/components/Layout.tsx`, `src/data/siteData.ts`, `src/styles/global.css`                                                                                                                                                                                                                                                                                                                                                                                    |
| T027 | Rebuild the footer into compact multi-column navigation        | The footer is balanced, responsive and no longer stretched into one long list.     | `src/components/Layout.tsx`, `src/data/siteData.ts`, `src/styles/global.css`                                                                                                                                                                                                                                                                                                                                                                                    |
| T028 | Refine hover and focus states                                  | Interactive elements use smooth 0.4s hover/focus feedback with visible contrast.   | `src/styles/global.css`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| T029 | Verify product visibility and route behaviour                  | Catalogue items, product routes and mobile layouts remain visible and usable.      | `src/components/Commerce.tsx`, `src/pages/ShopPage.tsx`, `src/pages/ProductPage.tsx`, `src/pages/CartPage.tsx`                                                                                                                                                                                                                                                                                                                                                  |
| T030 | Re-run checks, capture evidence and prepare a fresh checkpoint | Format, lint, type-check, tests, build and E2E pass with evidence recorded.        | `docs/evidence/commands/2026-07-26-format-check.txt`, `docs/evidence/commands/2026-07-26-lint.txt`, `docs/evidence/commands/2026-07-26-typecheck.txt`, `docs/evidence/commands/2026-07-26-test.txt`, `docs/evidence/commands/2026-07-26-build.txt`, `docs/evidence/commands/2026-07-26-test-e2e.txt`, `docs/evidence/commands/2026-07-26-audit.txt`, `docs/evidence/commands/2026-07-26-git-diff-check.txt`, `docs/evidence/commands/2026-07-26-git-status.txt` |

## Batch Result

- The homepage now has a more cohesive full-width hero and two scroll-linked monochrome backdrop bands.
- Product imagery uses local fallbacks so missing assets do not leave blank tiles.
- The header and footer were compacted so the navigation reads more cleanly on desktop and mobile.
- Hover and focus interactions now use a calmer 0.4s interaction language with off-white feedback.
- Format, lint, type-check, unit tests, build, Playwright, audit and Git checks passed with evidence captured.

## Batch T011-T020

Status: complete

| ID   | Major task                                                   | Acceptance criteria                                                                  | Evidence                                                                                        |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| T011 | Map the newly added product images to catalogue items        | Each new `img/` asset is assigned to the most appropriate product or utility usage.  | `src/data/imageManifest.ts`, `src/data/commerceData.ts`                                         |
| T012 | Add current public reference pricing for the new product set | Catalogue items display honest reference prices sourced from current retailer pages. | `src/data/commerceData.ts`, `src/pages/ProductPage.tsx`, `src/pages/ShopPage.tsx`               |
| T013 | Shorten the top navigation with a dropdown                   | Primary nav is compact and the secondary pages are grouped into a dropdown.          | `src/components/Layout.tsx`, `src/styles/global.css`                                            |
| T014 | Add a full-width scrolling background band on the homepage   | `BG image.webp` is used as a backdrop without leaving the hero area static.          | `src/pages/HomePage.tsx`, `src/styles/global.css`                                               |
| T015 | Slow and refine hover interactions                           | Hover transitions are visually smoother and last at least 0.3 seconds.               | `src/styles/global.css`                                                                         |
| T016 | Keep reference listings honest in product and cart flows     | Reference items are clearly labelled and never claim final stock certainty.          | `src/components/Commerce.tsx`, `src/pages/ProductPage.tsx`, `src/pages/CartPage.tsx`            |
| T017 | Update the shop ordering and tests                           | The catalogue surfaces the new items first and the shop test reflects that order.    | `src/data/commerceData.ts`, `src/pages/ShopPage.test.tsx`                                       |
| T018 | Re-run formatting, linting, type-checking, tests and build   | All required quality checks pass after the content and layout changes.               | `docs/evidence/commands/2026-07-26-*.txt`                                                       |
| T019 | Re-run Playwright coverage and dependency audit              | E2E flows pass and `npm audit --omit=dev` is clean.                                  | `docs/evidence/commands/2026-07-26-test-e2e.txt`, `docs/evidence/commands/2026-07-26-audit.txt` |
| T020 | Capture evidence for the final release bundle                | Command logs exist for the final verification set.                                   | `docs/evidence/commands/2026-07-26-*.txt`                                                       |
