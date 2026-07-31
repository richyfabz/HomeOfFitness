# Motion Audit

## Findings
- Interactive transitions were normalised to `0.7s` for buttons, nav links, dropdown links, cards, and footer interactions.
- The Explore dropdown is driven by hover, focus, and leave states instead of requiring an extra click to disappear.
- Page motion remains present but controlled; the layout still respects reduced-motion settings.

## Verification
- Home hero and backdrop motion still render without console errors.
- The gallery and shop cards animate cleanly without overflow or clipping.
- Playwright route and screenshot tests passed after the motion update.

## Status
- No motion blocker remained after the current pass.
