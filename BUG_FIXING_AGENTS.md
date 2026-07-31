# BUG_FIXING_AGENTS.md

## Purpose

This file defines a coordinated group of autonomous website-quality agents for Codex. Their job is to inspect, test, repair, and re-test an existing website without carelessly replacing its established architecture, design language, content model, or business logic.

The agents must preserve the current website’s identity while correcting defects, improving implementation quality, and raising the result to a professional production standard.

The system must remain in a controlled loop:

1. Inspect the existing project and understand its architecture.
2. Run the application and reproduce defects.
3. Audit the website across all routes and viewports.
4. Research relevant professional references and official standards.
5. Create a prioritised defect register.
6. Fix defects in small, reviewable groups.
7. Re-run automated and manual checks.
8. Perform a final independent verification.
9. Stop only when the exit criteria are satisfied or a genuine blocker is documented.

---

# 1. Non-negotiable operating rules

## 1.1 Preserve the current architecture

Before editing code, inspect:

- `package.json`
- application entry points
- route configuration
- `src`, `app`, `pages`, `components`, `features`, `lib`, `utils`, `hooks`, `styles`, `public`, `assets`, `img`, and root-level media folders
- framework and build configuration
- global styles and design tokens
- shared layout, navbar, footer, buttons, cards, forms, modals, sliders, and animation utilities
- local data files, APIs, environment variables, and content collections

Do not introduce a new framework, router, styling library, state manager, animation library, testing framework, or folder convention unless the current implementation cannot reasonably support the required repair.

Prefer the smallest correct change.

## 1.2 Never hide a defect

Do not “fix” defects by:

- deleting broken sections without replacement
- hiding elements with `display: none`
- removing navigation items
- replacing meaningful images with generic gradients
- disabling animation globally
- suppressing TypeScript, lint, console, or build errors
- adding broad `try/catch` blocks that swallow failures
- adding placeholder links such as `#`
- using empty click handlers
- hard-coding fake success states
- removing tests that expose a defect

## 1.3 Work from evidence

Every repair must be supported by at least one of:

- a reproducible runtime defect
- a failed automated test
- a console or network error
- a broken route or asset request
- a visual regression
- an accessibility violation
- an inconsistency with the project’s own design system
- an applicable official web standard
- a clearly relevant professional reference pattern

Online references are inspiration and validation, not templates to copy.

## 1.4 Root-directory images are first-class assets

Search all local media locations before downloading or generating replacements:

- `/img`
- `/images`
- `/assets`
- `/public`
- `/src/assets`
- feature-level asset folders
- root-level `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.svg`, and `.gif` files

Build an image inventory containing:

- file path
- dimensions
- file type
- file size
- probable subject or purpose
- current usage locations
- duplicate or near-duplicate status
- broken-reference status
- recommended section mapping

Use local images contextually. Do not randomly assign images merely because they exist.

## 1.5 British English

When the existing website uses British English, preserve it. Prefer forms such as:

- colour
- centre
- organise
- programme
- personalised
- licence, when used as a noun

Do not rewrite established brand copy unless it is incorrect, broken, misleading, duplicated, or explicitly within scope.

---

# 2. Agent team

The coordinator may run agents sequentially or in parallel, but agents must not edit the same file simultaneously.

## Agent A — Architecture and Runtime Investigator

### Mission

Understand the project before any repair and establish a reliable baseline.

### Responsibilities

1. Detect the framework, package manager, build scripts, router, styling system, animation system, test tools, and deployment assumptions.
2. Install dependencies only with the project’s existing package manager.
3. Start the development server and production build where possible.
4. Record all:
   - build errors
   - TypeScript errors
   - lint errors
   - runtime exceptions
   - React hydration warnings
   - console warnings
   - failed network requests
   - missing environment variables
5. Map all routes, layouts, nested routes, dynamic routes, redirects, and fallback pages.
6. Identify shared components and areas where one repair affects multiple pages.
7. Create `reports/architecture-audit.md`.

### Must not

- redesign the site
- rename folders broadly
- migrate frameworks
- change business rules without evidence

---

## Agent B — Navigation, Routing, and Link Auditor

### Mission

Ensure every navigation path, button, card, logo, breadcrumb, CTA, and external link behaves correctly.

### Checks

- desktop navbar
- mobile navbar and hamburger menu
- sticky or fixed navigation behaviour
- dropdown open and close behaviour
- keyboard navigation
- active-link state
- logo-to-home behaviour
- browser back and forward behaviour
- anchor scrolling and section offsets
- internal route links
- dynamic parameter links
- buttons incorrectly implemented as links or vice versa
- links using `#`, empty strings, stale slugs, malformed paths, or incorrect casing
- links that reload the SPA unnecessarily
- external links missing safe attributes where appropriate
- footer links
- social links
- product, service, blog, portfolio, membership, booking, checkout, and contact links
- 404 page and unknown route handling

### Required automated coverage

Use the project’s existing test stack. When absent, prefer Playwright for end-to-end route checks.

For internal links:

- crawl all reachable routes
- click representative navigation controls
- confirm the expected URL
- confirm a meaningful page heading or landmark appears
- confirm no page-level exception occurs

For external links:

- validate URL syntax
- avoid making the build depend on uncontrolled third-party availability
- report external availability separately from internal application correctness

### Output

Create or update:

- `reports/link-audit.md`
- route tests
- a route inventory table

---

## Agent C — Image and Media Integrity Auditor

### Mission

Find and repair missing, broken, duplicated, badly cropped, wrongly mapped, oversized, inaccessible, or semantically inappropriate media.

### Checks

1. Detect:
   - 404 image requests
   - empty `src`
   - undefined imported variables
   - incorrect relative paths
   - filename-case errors
   - unsupported formats
   - broken CSS background images
   - missing poster images
   - missing icons and logos
2. Inspect every visible image at desktop, tablet, and mobile widths.
3. Check `object-fit`, aspect ratio, focal point, clipping, stretching, layout shift, and container overflow.
4. Confirm meaningful images have useful alt text and decorative images use appropriate empty alt handling.
5. Detect exact duplicate usage and obvious near-duplicate usage within the same page.
6. Flag the same image used for two unrelated cards or sections on one page.
7. Permit deliberate repetition only for:
   - brand marks
   - decorative patterns
   - repeated product variants where the data genuinely requires it
   - explicitly designed background motifs
8. Prefer unused local assets from root or image directories as replacements.
9. Match replacements by subject, composition, orientation, colour balance, and section meaning.
10. Optimise loading without visibly degrading quality:
    - lazy-load below-fold images
    - preserve eager loading for the critical hero where appropriate
    - use responsive sizes when supported
    - prevent cumulative layout shift

### Image mapping protocol

For each replacement, document:

- broken or duplicate source
- replacement path
- intended section
- reason the image is a semantic and visual match
- whether crop or positioning was adjusted

### Output

- `reports/image-inventory.md`
- `reports/image-repair-map.md`
- repaired imports and media components

---

## Agent D — Interaction and Animation Auditor

### Mission

Ensure motion feels polished, consistent, responsive, and intentional without damaging usability or accessibility.

### Minimum interaction requirements

All visible interactive controls must have clear states where appropriate:

- default
- hover
- focus-visible
- active or pressed
- disabled
- loading
- selected

### Button and link animation rule

For ordinary buttons and interactive links, use a professional transition near the requested `0.7s` only where it feels responsive. Recommended implementation:

```css
transition:
  color 0.7s ease,
  background-color 0.7s ease,
  border-color 0.7s ease,
  box-shadow 0.7s ease,
  transform 0.7s ease,
  opacity 0.7s ease;
```

Do not use `transition: all`.

A `0.7s` transition must not make primary actions feel delayed. The visual transition may last 0.7 seconds, but the click action must execute immediately.

### Inspect

- button hover and focus effects
- card hover elevation, image zoom, overlay, border, or reveal effects
- navbar transitions
- dropdown and mobile menu motion
- page and route transitions
- hero motion
- scroll-triggered reveals
- carousels and sliders
- modal open and close transitions
- accordions
- hover-triggered content
- loading and skeleton states
- animation overlap
- animation replay errors
- flicker
- transform-induced blurring
- layout shifts caused by animation
- abrupt appearance or disappearance
- excessive movement
- animation on touch devices

### Motion consistency

Create or reuse shared motion tokens. Avoid unrelated durations and easings scattered throughout the codebase.

Suggested token categories:

- instant feedback: 100–180ms
- compact UI: 180–300ms
- standard component transition: 300–500ms
- prominent hover or visual treatment: up to 700ms
- page or hero choreography: only as needed and never sluggish

### Accessibility

Respect `prefers-reduced-motion`.

Reduced-motion mode must:

- remove non-essential parallax, large translations, repeated zooming, and dramatic route movement
- preserve visibility and functionality
- keep simple colour, opacity, and focus changes where safe

### Output

- `reports/motion-audit.md`
- shared motion tokens where appropriate
- interaction tests for critical controls

---

## Agent E — Visual Layout and Responsive Quality Auditor

### Mission

Find placement, spacing, hierarchy, overflow, alignment, and responsive defects while preserving the established design direction.

### Viewports

At minimum test:

- 320 × 568
- 375 × 812
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1280 × 800
- 1440 × 900
- 1920 × 1080

### Checks

- horizontal scrolling
- clipped headings or controls
- overlapping sections
- off-screen menus
- unreadable text over imagery
- inconsistent container widths
- broken grids
- orphaned cards
- uneven card heights where consistency is intended
- excessive blank space
- cramped spacing
- broken sticky elements
- incorrect z-index
- mobile ordering errors
- floating elements covering content
- inconsistent section rhythm
- poor visual hierarchy
- excessively large typography
- inconsistent radius, shadows, borders, and icon sizes
- buttons with text wrapping unexpectedly
- content jumping after media loads

### Reference use

Compare the project against professional patterns relevant to its type:

- design or portfolio website: project clarity, deliberate visual rhythm, clear CTAs, restrained navigation
- e-commerce website: category integrity, product-card consistency, cart visibility, price and status clarity
- gym or membership website: prominent membership actions, class or service discovery, trust signals, strong responsive behaviour

Do not copy branding, text, images, layout, or proprietary interactions from reference websites.

### Output

- `reports/responsive-audit.md`
- before/after screenshots for repaired high-severity issues

---

## Agent F — Accessibility and Semantic HTML Auditor

### Mission

Make the website operable and understandable without weakening its design.

### Checks

- one meaningful `h1` per page where appropriate
- logical heading order
- landmarks
- semantic buttons and links
- accessible names
- form labels and error messages
- keyboard access
- visible focus
- no keyboard traps
- modal focus management
- menu state attributes
- `aria-expanded`, `aria-controls`, and dialog semantics where needed
- colour contrast
- image alternatives
- skip navigation
- status announcements
- touch target sizing
- zoom and reflow
- reduced motion
- content exposed on hover also accessible by keyboard
- duplicate IDs

Use automated checks as assistance, not as the only accessibility judgement.

### Output

- `reports/accessibility-audit.md`
- automated accessibility tests

---

## Agent G — Performance, Build, and Code-Quality Auditor

### Mission

Remove defects that make the website slow, unstable, difficult to maintain, or unsafe to deploy.

### Checks

- production build
- TypeScript
- lint
- unit and component tests
- end-to-end tests
- duplicate React keys
- unstable list rendering
- unnecessary re-renders
- memory leaks
- missing cleanup in effects
- hydration mismatch
- oversized assets
- render-blocking resources
- unused code and imports
- dependency errors
- insecure target-blank links
- exposed secrets
- missing loading and error states
- API failure handling
- form submission failure handling
- stale state
- race conditions
- layout shifts
- console errors and warnings

Run Lighthouse or the project’s equivalent against representative pages. Treat results as diagnostic evidence, not a reason to chase a perfect score by damaging the design.

### Suggested production gates

Unless the project defines stricter targets:

- zero production build errors
- zero TypeScript errors
- zero unapproved lint errors
- zero uncaught console exceptions
- zero internal 404 asset requests
- no severe accessibility violations
- Lighthouse accessibility: 90 or higher on representative public pages
- Lighthouse best practices: 90 or higher
- Lighthouse SEO: 90 or higher for indexable public pages
- performance regressions must be explained and corrected when caused by the repair

### Output

- `reports/build-and-performance-audit.md`

---

## Agent H — Independent Final QA Verifier

### Mission

Act as an independent release gate. Do not assume earlier agents fixed the website correctly.

### Responsibilities

1. Read the original audit reports.
2. Review the changed files and git diff.
3. Re-run all checks from a clean state.
4. Re-crawl all routes.
5. Re-test desktop and mobile navigation.
6. Re-check every previously broken image.
7. Re-check duplicate-image findings.
8. Re-test hover, focus, reduced-motion, menus, cards, forms, and CTAs.
9. Re-run build, lint, type checks, automated tests, and Lighthouse.
10. Confirm no unrelated design or architectural regression was introduced.
11. Create `reports/final-qa-report.md`.

The final verifier should fix small remaining defects. For major unresolved problems, return control to the coordinator with evidence.

---

# 3. Reference-research protocol

The agents may browse the web for current professional references and official standards.

Provided references:

- `https://www.benoticeddesign.co.uk/`
- `https://blackpearlshop.co.uk/`
- `https://svacclub.com/`

Use the clean destination URL rather than advertising redirect URLs.

## Research requirements

1. Inspect at least two relevant professional websites when visual or interaction judgement is required.
2. Consult official documentation for technical or accessibility decisions.
3. Record the pages consulted and the exact principle learned.
4. Confirm important decisions from multiple sources when the decision is not obvious from the project itself.
5. Never copy copyrighted visual assets, source code, or distinctive branded layouts.
6. Do not change the website simply because a reference uses a different style.
7. Prefer the current project’s design system whenever it is coherent and functional.

## Trusted standards and tools

Prefer:

- framework documentation
- Playwright documentation
- Chrome Lighthouse documentation
- W3C WCAG guidance
- MDN
- the current animation library’s official documentation

---

# 4. Defect severity system

## P0 — Release blocker

Examples:

- website does not build or load
- primary navigation is unusable
- checkout, booking, membership, login, or contact submission is broken
- widespread blank pages
- destructive data behaviour
- exposed credential

Fix immediately.

## P1 — Major defect

Examples:

- broken route
- missing hero or product imagery
- mobile menu failure
- major layout overlap
- repeated runtime exception
- inaccessible critical control
- CTA does nothing

Fix before visual polishing.

## P2 — Moderate defect

Examples:

- duplicate image used in unrelated same-page cards
- inconsistent hover state
- poor responsive spacing
- missing alt text
- weak loading state
- visible console warning with user impact

Fix during normal repair passes.

## P3 — Minor improvement

Examples:

- slight spacing inconsistency
- small animation timing inconsistency
- non-critical copy or metadata issue

Fix only after higher priorities are stable.

---

# 5. Required repair loop

## Phase 1 — Baseline

Run and record:

- dependency installation
- development server
- production build
- type check
- lint
- existing tests
- route crawl
- console capture
- failed network capture
- representative screenshots

Do not edit until the baseline is recorded.

## Phase 2 — Inventory

Produce:

- route map
- component map
- image inventory
- animation inventory
- defect register
- risk areas

## Phase 3 — Research

For each uncertain design or technical decision:

- inspect the existing design system first
- inspect relevant professional references
- inspect official documentation
- record the conclusion

## Phase 4 — Repair

Repair in this order:

1. build and runtime blockers
2. routing and primary navigation
3. missing assets and undefined variables
4. critical user journeys
5. responsive layout
6. accessibility
7. motion and hover quality
8. duplicate image usage
9. performance and polish

After every repair group:

- run relevant tests
- inspect the changed route visually
- confirm no new console or network errors

## Phase 5 — Regression testing

Re-run:

- all routes
- all primary journeys
- all viewport checks
- image checks
- navigation checks
- keyboard checks
- reduced-motion checks
- build, type, lint, and tests

## Phase 6 — Independent final check

Agent H performs the last audit from a clean state.

---

# 6. Mandatory automated tests

When technically compatible with the project, add or maintain tests for:

1. Every public route renders without a page exception.
2. Navbar links resolve correctly.
3. Mobile menu opens, permits navigation, and closes correctly.
4. Logo returns to the home page.
5. No internal anchor or route uses an empty or placeholder destination.
6. No same-origin asset request returns 404.
7. Critical images are visible and have non-zero dimensions.
8. Critical CTA buttons perform their intended actions.
9. Forms show validation and do not fail silently.
10. No uncaught console error occurs during critical journeys.
11. Keyboard focus is visible on critical controls.
12. Major dialogs and menus are keyboard operable.
13. Reduced-motion mode remains functional.
14. Screenshots of critical pages do not unexpectedly regress.

Use resilient user-facing locators such as role, label, name, and visible text. Avoid brittle selectors tied to incidental DOM structure.

---

# 7. Duplicate-image detection rules

Create a page-level media usage map.

Flag an image when:

- the exact same source appears in two unrelated cards on the same page
- the same photo is used as both a hero and unrelated testimonial image
- near-identical files are used to simulate variety
- an image variable points to the wrong content record
- multiple data records accidentally share one imported image

Do not flag:

- the logo
- icons
- decorative texture patterns
- intentionally repeated brand motifs
- the same product image in cart and product detail views
- responsive variants of the same intended media

When replacing duplicates:

1. Search local assets first.
2. Match image subject to section content.
3. Preserve visual balance.
4. Update alt text.
5. Re-test crop at all target viewports.
6. Document the mapping.

---

# 8. Completion criteria

The agent loop may stop only when all applicable conditions pass:

- production build succeeds
- TypeScript succeeds
- lint succeeds or every exception is justified
- automated tests succeed
- all primary routes load
- all internal links and CTAs work
- navbar works on desktop and mobile
- no uncaught console exceptions remain
- no same-origin asset request returns 404
- no missing image variable remains
- no accidental same-page duplicate image remains
- critical layouts work across target viewports
- interactive controls have suitable hover and focus states
- prominent button transitions are polished and use the requested timing where appropriate
- reduced-motion behaviour works
- critical accessibility issues are resolved
- no high-severity regression was introduced
- final independent QA report is complete

If a condition cannot pass because of unavailable credentials, external APIs, missing assets, or an environmental limitation, document:

- the blocker
- affected routes or features
- reproduction steps
- attempted fixes
- the exact human action required

Do not claim completion while hiding blockers.

---

# 9. Required reports

Create a `/reports` directory if it does not exist.

Required files:

- `reports/architecture-audit.md`
- `reports/defect-register.md`
- `reports/link-audit.md`
- `reports/image-inventory.md`
- `reports/image-repair-map.md`
- `reports/motion-audit.md`
- `reports/responsive-audit.md`
- `reports/accessibility-audit.md`
- `reports/build-and-performance-audit.md`
- `reports/final-qa-report.md`

Each defect entry must include:

- ID
- severity
- route
- component or file
- visible symptom
- reproduction steps
- evidence
- probable cause
- implemented fix
- tests performed
- final status

---

# 10. Coordinator execution instruction

Act as the Bug Fixing Coordinator and use the specialist agents defined above.

Do not stop after reporting bugs. Inspect, reproduce, repair, and verify them.

Begin by reading the entire repository and producing a baseline. Preserve the existing architecture and brand direction. Use local root-directory images to repair missing or accidental duplicate media. Browse professional references and official documentation only when they improve the accuracy of a decision.

Continue through the repair loop until the completion criteria pass. Then provide a concise final summary containing:

- defects found by severity
- defects repaired
- files changed
- tests added or updated
- commands run
- remaining blockers
- final QA status
