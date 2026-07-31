# Defect Register

| ID | Severity | Area | Issue | Fix | Status |
|---|---|---|---|---|---|
| D-001 | Major | Commerce | Product gallery thumbnails were using raw image keys instead of manifest-resolved URLs, which could collapse into the fallback image. | Resolved thumb `src` via `imageManifest[image]` in `src/components/Commerce.tsx`. | Fixed |
| D-002 | Major | Home | Home page image bands were visually oversized and dominated the viewport. | Reduced hero/backdrop heights and scaled the backdrop media down in `src/styles/global.css`. | Fixed |
| D-003 | Major | Shop | Store imagery felt too heavy on the catalogue cards and gallery sections. | Reduced image aspect ratios and gallery media sizing in `src/styles/global.css`. | Fixed |
| D-004 | Major | Navigation | Explore dropdown looked sticky and required explicit clicking to dismiss in some interaction paths. | Kept hover/focus open behavior but ensured mouse leave collapses the panel and refined the panel styling in `src/components/Layout.tsx` and `src/styles/global.css`. | Fixed |
| D-005 | Minor | Interaction | Button, link, and card transitions were shorter than the required motion guidance. | Standardised the interactive transitions to `0.7s`. | Fixed |

## Open Risks
- No critical or major issues remain from the current audit pass.
- Existing lint warnings remain in unrelated files but do not block the build.
