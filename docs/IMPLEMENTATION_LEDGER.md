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
