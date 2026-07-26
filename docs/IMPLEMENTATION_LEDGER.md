# IMPLEMENTATION LEDGER

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

## Batch T011-T020

Status: complete

| ID   | Major task                                                     | Acceptance criteria                                                                 | Evidence                                                                                  |
| ---- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| T011 | Map the newly added product images to catalogue items          | Each new `img/` asset is assigned to the most appropriate product or utility usage. | `src/data/imageManifest.ts`, `src/data/commerceData.ts`                                   |
| T012 | Add current public reference pricing for the new product set   | Catalogue items display honest reference prices sourced from current retailer pages. | `src/data/commerceData.ts`, `src/pages/ProductPage.tsx`, `src/pages/ShopPage.tsx`         |
| T013 | Shorten the top navigation with a dropdown                    | Primary nav is compact and the secondary pages are grouped into a dropdown.          | `src/components/Layout.tsx`, `src/styles/global.css`                                      |
| T014 | Add a full-width scrolling background band on the homepage     | `BG image.webp` is used as a backdrop without leaving the hero area static.         | `src/pages/HomePage.tsx`, `src/styles/global.css`                                          |
| T015 | Slow and refine hover interactions                             | Hover transitions are visually smoother and last at least 0.3 seconds.              | `src/styles/global.css`                                                                   |
| T016 | Keep reference listings honest in product and cart flows       | Reference items are clearly labelled and never claim final stock certainty.          | `src/components/Commerce.tsx`, `src/pages/ProductPage.tsx`, `src/pages/CartPage.tsx`      |
| T017 | Update the shop ordering and tests                             | The catalogue surfaces the new items first and the shop test reflects that order.    | `src/data/commerceData.ts`, `src/pages/ShopPage.test.tsx`                                  |
| T018 | Re-run formatting, linting, type-checking, tests and build     | All required quality checks pass after the content and layout changes.               | `docs/evidence/commands/2026-07-26-*.txt`                                                 |
| T019 | Re-run Playwright coverage and dependency audit                | E2E flows pass and `npm audit --omit=dev` is clean.                                   | `docs/evidence/commands/2026-07-26-test-e2e.txt`, `docs/evidence/commands/2026-07-26-audit.txt` |
| T020 | Capture evidence for the final release bundle                  | Command logs exist for the final verification set.                                   | `docs/evidence/commands/2026-07-26-*.txt`                                                 |
