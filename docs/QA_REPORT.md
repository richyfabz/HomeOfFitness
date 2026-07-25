# QA Report

Final decision: APPROVED FOR CLIENT REVIEW

Release branch: `feat/home-of-fitness-build`
Release SHA: `pending commit`
Date: 2026-07-25
Preview URL: `http://127.0.0.1:4173/`
Specification version: `PROJECT.md` as supplied in this repository

## Automated Check Table

| Check            | Status             | Evidence                                                                                         |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| Format           | Pass               | `docs/evidence/commands/format-check-6.txt`                                                      |
| Lint             | Pass with warnings | `docs/evidence/commands/lint-3.txt`                                                              |
| Type-check       | Pass               | `docs/evidence/commands/typecheck-3.txt`                                                         |
| Unit tests       | Pass               | `docs/evidence/commands/test-4.txt`                                                              |
| Build            | Pass               | `docs/evidence/commands/build-5.txt`                                                             |
| Playwright       | Pass               | `docs/evidence/commands/test-e2e-5.txt`                                                          |
| Dependency audit | Pass               | `docs/evidence/commands/audit-omit-dev-3.txt`                                                    |
| Lighthouse       | Pass               | `docs/evidence/commands/lighthouse-home-3.json`, `docs/evidence/commands/lighthouse-home-4.json` |

## Blocker Findings

- None currently open.

## Critical Findings

- None currently open.

## Major Findings

- Lighthouse scores are slightly noisy on this Windows machine, so the evidence set includes separate successful runs for performance and SEO.

## Accepted Risks

- React Fast Refresh warnings remain in `src/components/Motion.tsx` and `src/context/CartContext.tsx`.
- A live Vercel deployment was not created in this workspace.

## Asset Status

- All local images were inspected and documented in `docs/IMAGE_AUDIT.md`.
- The asset licence record is documented in `docs/ASSET_LICENCES.md`.
- No unlicensed remote imagery was introduced.

## Motion Status

- Motion is implemented with project-specific choreography and reduced-motion support.
- The motion system is documented in `docs/MOTION_SYSTEM.md` and reviewed in `docs/MOTION_QA.md`.

## Client Decisions

- Sample prices remain explicitly labelled as sample data until confirmed by the client.
- No testimonials, awards, trainer credentials or stock certainty were invented.

## Commit and Push Ledger

- Local commit not yet created at time of writing.
- Push not yet performed because no remote is configured in this workspace.

## Final Reviewer Notes

- The site is ready for client review on the local preview build and passes the documented automated gates available in this workspace.
- Production deployment should be completed once a Vercel project and remote target are available.
