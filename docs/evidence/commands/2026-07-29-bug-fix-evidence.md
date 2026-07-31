# 2026-07-29 Bug Fix Evidence

## Commands Executed
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run test:e2e`
- Image inventory command using `PresentationCore` / `WindowsBase` bitmap decoding

## Results
- Format check: pass
- Lint: pass with 3 pre-existing React Fast Refresh warnings
- Type-check: pass
- Unit tests: pass
- Production build: pass
- Playwright E2E: pass

## Notes
- The image inventory command confirmed local asset dimensions and file types across the root `img/` directory.
- The Explore dropdown close behavior and the reduced home/shop image sizing were verified in the browser during this pass.
