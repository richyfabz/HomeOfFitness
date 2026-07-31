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

## D007 - The homepage uses two monochrome backdrop bands for motion

- Status: Accepted
- Rationale: `BG image.webp` and `BG 2.webp` are used as scroll-linked backdrop bands so the homepage feels more editorial and less static without introducing new imagery or colour noise.

## D008 - Product and gallery images fall back to a local designed asset

- Status: Accepted
- Rationale: Product cards and galleries now fall back to a local background image so missing or broken product assets do not leave empty tiles in the catalogue.

## D009 - Hover feedback standardises on off-white contrast with a 0.4s rhythm

- Status: Accepted
- Rationale: Shared hover and focus states now use a slower, calmer timing with visible off-white contrast so the interface feels deliberate rather than abrupt.

## D010 - Commerce cards resolve image keys through the shared manifest

- Status: Accepted
- Rationale: Product data stores semantic image keys, so shared card and gallery components should resolve those keys before rendering. This avoids repeated fallback imagery and keeps the catalogue visually truthful.

## D011 - Motion wrappers must fail safe instead of hiding content completely

- Status: Accepted
- Rationale: Section reveal motion should never leave important page content at zero opacity if the reveal timing stalls. A near-visible initial state preserves usability and prevents blank-page regressions.

## D012 - The homepage shop preview uses a curated product mix

- Status: Accepted
- Rationale: The home page should preview a balanced set of images, not a cluster of adjacent accessories. Curating the preview keeps the section varied and avoids accidental visual repetition.

## D013 - Large image sections should stay visually restrained

- Status: Accepted
- Rationale: The homepage facilities band and the store catalogue should keep their image blocks intentionally smaller on desktop so the page reads as an editorial fitness layout rather than a wall of oversized tiles.

## D014 - The Explore menu should be hover-close, not click-latched

- Status: Accepted
- Rationale: The desktop Explore menu should open on hover/focus and close as soon as the pointer leaves the dropdown area so it feels responsive and does not block the page header.
