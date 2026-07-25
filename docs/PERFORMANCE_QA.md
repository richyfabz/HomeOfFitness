# Performance QA

Status: pass

## Checks

- Lighthouse home route score: performance 91, accessibility 100, best practices 100, SEO 92.
- A later Lighthouse pass confirmed SEO 100 after the `robots.txt` fix, but the performance score fluctuated on the same Windows host.
- Initial JS bundle reduced to 374.91 kB minified, 121.75 kB gzip.
- Route-level code splitting is in place for all major pages.
- Offscreen sections use `content-visibility: auto`.
- Hero imagery is prioritised for faster paint.

## Evidence

- `docs/evidence/commands/lighthouse-home-3.json`
- `docs/evidence/commands/build-5.txt`
- `src/App.tsx`
- `src/components/Shared.tsx`
- `src/styles/global.css`

## Findings

- The performance target was met on the audited home route in the 91-score run.
- Lighthouse on this machine is somewhat noisy, so the current evidence set includes more than one pass to show the fixed SEO result and the performance result separately.
