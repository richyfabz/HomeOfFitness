# DECISIONS

## D001 - New app scaffold instead of retrofitting a template

- Status: Accepted
- Rationale: The workspace had no app scaffold, so the safest route is a fresh Vite React + TypeScript build that matches the project specification.

## D002 - Reference websites used only as benchmark content

- Status: Accepted
- Rationale: `ifitness.ng` and `skyfitnessng.com` were reviewed for UX cues only. Their structure, copy and visual identity will not be reused.

## D003 - Local images require provenance handling before production use

- Status: Open
- Rationale: The local image library is present, but no licence record exists yet. The audit will classify all files and document any exclusions or provisional use.

## D004 - New product items use current public reference pricing

- Status: Accepted
- Rationale: The shop now maps the newly added product images to catalogue entries and uses current public online reference prices from retailer listings instead of inventing final store prices.

## D005 - The homepage uses a fixed-image backdrop band for motion

- Status: Accepted
- Rationale: `BG image.webp` provides a full-width visual anchor that keeps the home page from feeling static while staying within the black-and-white brand direction.

## D006 - Top navigation is condensed into a primary set plus an explore dropdown

- Status: Accepted
- Rationale: The desktop header is shorter and easier to scan when primary routes stay visible and the less critical routes are grouped into a single dropdown.
