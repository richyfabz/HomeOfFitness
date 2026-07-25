# Accessibility QA

Status: pass

## Checks

- Lighthouse accessibility score on the home route: 100.
- Playwright verified keyboard-driven flows, mobile navigation and route transitions.
- Semantic headings, landmarks, labels and alt text are present throughout the site.
- Reduced-motion support is implemented through `useMotionAwareVariants`.

## Evidence

- `docs/evidence/commands/lighthouse-home-3.json`
- `docs/evidence/commands/test-e2e-5.txt`
- `src/components/Motion.tsx`
- `src/components/Shared.tsx`

## Findings

- No accessibility blockers were found in the automated checks.
- The layout remained usable at the tested mobile viewport in Playwright.
