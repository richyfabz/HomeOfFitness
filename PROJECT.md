# PROJECT.md — HOME OF FITNESS

## Master Product, Experience and Interface Specification

> **Purpose:** This document defines exactly **what must be built** for Home of Fitness.
>
> **Execution:** `AGENTS.md` defines how Codex must plan, implement, verify, commit, push and prepare the project for deployment.
>
> **Priority:** When a lower-level implementation preference conflicts with this document, this document wins unless the user explicitly overrides it in the current session.

---

# 1. Project Independence Rule

Home of Fitness is an independent product.

Do not import or imitate architecture, layouts, page order, animation systems, component structures, visual patterns, folder conventions, spacing systems, UX flows, copy, content hierarchy or design decisions from earlier projects unless this specification explicitly requires them.

Previous websites—whether real estate, ecommerce, SaaS, hospitality, healthcare or any other niche—are not templates for this project.

Make every product decision from:

1. the user's current instructions;
2. this specification;
3. the supplied fitness references;
4. the actual local image library;
5. professional design and engineering judgement.

The result must feel designed specifically for a premium fitness business.

---

# 2. Project Summary

## 2.1 Product name

**Home of Fitness**

## 2.2 Product type

A premium fitness brand website combining:

- gym marketing;
- membership acquisition;
- fitness-class discovery;
- trainer discovery;
- facility presentation;
- fitness apparel and accessory ecommerce;
- enquiry and contact flows.

## 2.3 Primary market

Nigeria.

## 2.4 Language

British English throughout all interface copy, metadata, validation messages and documentation visible to the client.

## 2.5 Currency

Use Nigerian naira consistently:

```text
₦25,000
```

Prices must be centralised and formatted with `Intl.NumberFormat`.

Do not invent permanent production prices. Where confirmed prices are unavailable, use clearly identified configurable sample data and document the client decision required.

## 2.6 Technical stack

Required:

- React;
- TypeScript;
- semantic HTML;
- modern CSS;
- Framer Motion.

The final application must be deployable to Vercel.

---

# 3. Product Vision

Create a fitness website that feels:

- premium;
- powerful;
- disciplined;
- modern;
- cinematic;
- editorial;
- confident;
- energetic without being chaotic.

The product must communicate that Home of Fitness is a credible, professionally operated fitness brand—not a generic gym landing page.

The website must not look:

- AI-generated;
- copied from a template;
- assembled from unrelated components;
- dominated by generic cards;
- overloaded with gradients;
- visually childish;
- like a previous niche website with fitness copy applied to it.

---

# 4. Reference Websites

Use these as experience benchmarks only:

- `https://ifitness.ng/`
- `https://www.skyfitnessng.com/`

Analyse them for:

- navigation clarity;
- membership discoverability;
- conversion flow;
- fitness-specific content hierarchy;
- class presentation;
- trainer presentation;
- facility credibility;
- ecommerce discoverability;
- mobile usability;
- trust-building content.

Do not copy:

- layouts;
- section order;
- wording;
- branding;
- prices;
- imagery;
- source code;
- animations;
- visual identity;
- testimonials;
- product data.

Home of Fitness must have an independent brand and interaction language.

---

# 5. Audience

## 5.1 Primary audiences

- prospective gym members;
- existing members;
- beginners seeking guidance;
- experienced fitness enthusiasts;
- people comparing membership plans;
- users looking for classes or trainers;
- customers buying gym wear and accessories.

## 5.2 Audience concerns

The website should answer:

- Is this gym credible?
- What facilities are available?
- Which membership suits me?
- What classes can I attend?
- Who are the trainers?
- Is the environment beginner-friendly?
- How do I enquire or join?
- What gym wear and accessories are available?
- Can I use the website comfortably on my phone?

---

# 6. Product Goals

## 6.1 Business goals

- increase membership enquiries;
- improve membership-plan understanding;
- build brand trust;
- showcase facilities and trainers;
- increase class discovery;
- sell fitness apparel and accessories;
- create a premium perception;
- provide a deployment-ready platform for future business integration.

## 6.2 User goals

- understand the gym quickly;
- compare plans;
- find a suitable class;
- inspect trainers;
- browse products;
- add products to a persistent cart;
- make an enquiry;
- contact the business;
- navigate without confusion.

---

# 7. Brand Identity

## 7.1 Colour direction

The primary identity is black and white.

Use:

- rich black;
- off-black;
- white;
- warm or neutral off-white;
- restrained greys.

Avoid random accent colours.

An accent may be introduced only when:

- it has a documented functional purpose;
- it does not weaken the black-and-white identity;
- it is used sparingly and consistently.

## 7.2 Visual character

The interface should feel:

- editorial rather than dashboard-like;
- image-led rather than icon-led;
- intentional rather than decorative;
- restrained rather than empty;
- bold rather than oversized;
- premium rather than ornamental.

## 7.3 Forbidden visual patterns

Reject:

- repetitive rounded cards;
- excessive pill buttons;
- random gradients;
- glowing neon borders;
- floating decorative blobs;
- generic four-icon feature strips;
- giant headings without supporting composition;
- excessive centred text;
- identical section layouts;
- stock-template hero structures;
- overuse of glassmorphism;
- fake metrics;
- meaningless marquees;
- random italic display text;
- excessive border radius.

---

# 8. Typography

## 8.1 Typography objective

Typography must feel controlled, compact and editorial.

It must support strong imagery rather than compete with it.

## 8.2 Rules

- no oversized mobile hero text;
- no heading should be large merely to fill space;
- maintain readable line lengths;
- use intentional line breaks;
- use a clear hierarchy;
- avoid excessive uppercase paragraphs;
- reserve strong uppercase treatment for concise labels;
- ensure headings scale fluidly;
- preserve sufficient contrast;
- avoid overly light body fonts.

## 8.3 Suggested hierarchy

The final scale may be adjusted after visual testing:

- display;
- page title;
- section heading;
- subsection heading;
- body large;
- body;
- small;
- eyebrow/label.

Use `clamp()` responsibly.

---

# 9. Spacing and Layout System

## 9.1 Layout principles

- establish a consistent spacing scale;
- use wide visual compositions without creating empty pages;
- maintain strong alignment;
- allow intentional image bleed;
- avoid content touching viewport edges;
- avoid full-screen whitespace with little meaningful content;
- vary composition while preserving rhythm.

## 9.2 Container behaviour

Use:

- a consistent maximum content width;
- page gutters responsive to viewport size;
- intentional full-bleed image sections;
- stable grid alignment between sections.

## 9.3 Responsive targets

Review at minimum:

- 320px;
- 375px;
- 768px;
- 1024px;
- 1440px;
- 1920px.

Mobile must not be a collapsed desktop layout.

---

# 10. Motion System — Highest Priority

Motion is a defining product feature.

It must be designed specifically for Home of Fitness.

## 10.1 Motion character

Motion should feel:

- athletic;
- confident;
- fluid;
- controlled;
- cinematic;
- responsive;
- premium.

## 10.2 Motion principles

Every animation must have a purpose:

- reveal hierarchy;
- communicate state;
- guide attention;
- reinforce movement and discipline;
- connect one visual composition to another;
- make interaction feel responsive.

## 10.3 Avoid

- the same fade-up on every section;
- excessive bouncing;
- slow page-blocking transitions;
- scroll hijacking;
- animation that prevents clicking;
- animation of expensive layout properties where transforms work;
- continuous motion without value;
- parallax that harms readability;
- cursor effects that reduce usability;
- hover-only information;
- motion copied from previous projects.

## 10.4 Required motion categories

### Navigation

- refined header entrance;
- mobile-menu transition;
- active-link feedback;
- focus-state parity;
- transparent-to-solid header behaviour where composition supports it.

### Hero

- cinematic image reveal;
- controlled text sequencing;
- restrained CTA entrance;
- optional depth movement;
- no long delay before content becomes usable.

### Section transitions

Use varied techniques such as:

- masking;
- clipping;
- layered image movement;
- text sequencing;
- directional transitions;
- scale restraint;
- fixed-image reveals;
- staggered editorial compositions.

### Cards and media

- image zoom or crop shift;
- label movement;
- border or underline response;
- product-state feedback;
- keyboard focus equivalent.

### Ecommerce

- filter transitions;
- grid changes;
- product-gallery transitions;
- add-to-cart feedback;
- cart drawer/page animation;
- quantity and removal feedback.

### Forms

- field-state feedback;
- validation transitions;
- success/error announcement;
- no decorative motion that obscures errors.

## 10.5 Reduced motion

The site must respect `prefers-reduced-motion`.

Reduced-motion mode must:

- remove parallax;
- remove unnecessary stagger;
- shorten or remove page transitions;
- preserve state feedback;
- retain content visibility;
- maintain usability.

## 10.6 Motion documentation

Create:

- `docs/MOTION_SYSTEM.md`;
- central duration tokens;
- easing tokens;
- reusable variants;
- route-by-route motion inventory.

---

# 11. Image and Asset Strategy

The local image folder is the primary source of production imagery.

## 11.1 Mandatory audit

Before page implementation, inspect every local image and record:

- filename;
- dimensions;
- format;
- file size;
- subject;
- quality;
- orientation;
- suitable route;
- recommended crop;
- final use;
- optimisation action;
- alt-text recommendation;
- exclusion reason where unused.

Store this in `docs/IMAGE_AUDIT.md`.

## 11.2 Asset mapping

Create a central image manifest such as:

```text
src/data/imageManifest.ts
```

Do not scatter hard-coded asset paths throughout JSX.

## 11.3 Image use

Use suitable local images deliberately across:

- hero;
- membership;
- classes;
- trainers;
- facilities;
- about;
- testimonials;
- shop;
- editorial transitions.

Do not repeat one strong image across unrelated sections merely because it is convenient.

## 11.4 Image treatment

- preserve aspect ratio;
- use correct `object-fit`;
- define `object-position`;
- provide dimensions;
- lazy-load below the fold;
- prioritise only true LCP images;
- optimise formats;
- avoid stretched or low-resolution images;
- maintain consistent product-image treatment.

## 11.5 External imagery

Pinterest may be used only for visual inspiration.

Do not ship Pinterest images.

External production imagery requires documented commercial-use rights in:

```text
docs/ASSET_LICENCES.md
```

Do not hotlink production assets.

---

# 12. Information Architecture

Required routes:

```text
/
 /membership
 /classes
 /trainers
 /facilities
 /about
 /shop
 /shop/:slug
 /cart
 /faq
 /contact
 /privacy
 /terms
 /*
```

The exact slug style must remain consistent.

---

# 13. Global Navigation

## 13.1 Desktop navigation

Must include clear access to:

- Home;
- Membership;
- Classes;
- Trainers;
- Facilities or About;
- Shop;
- Contact;
- Cart.

## 13.2 Mobile navigation

Requirements:

- clear menu trigger;
- accessible name;
- controlled focus;
- escape-key close;
- focus restoration;
- body-scroll handling;
- visible active state;
- animated but responsive transition.

## 13.3 Header behaviour

The header may change appearance over imagery, but:

- contrast must always remain legible;
- links must remain usable;
- behaviour must not cause layout shift;
- sticky behaviour must not consume excessive mobile space.

---

# 14. Homepage Specification

The homepage must feel like a complete brand story—not a collection of generic blocks.

## 14.1 Hero

Purpose:

- introduce Home of Fitness;
- establish premium energy;
- direct users to membership and classes.

Include:

- strong image composition;
- concise headline;
- supporting copy;
- primary CTA;
- secondary CTA;
- optional trust detail.

Motion:

- image reveal;
- controlled text sequencing;
- CTA entrance;
- optional scroll cue.

Avoid:

- huge empty hero;
- text covering faces;
- more than two dominant CTAs;
- generic slogan stacks;
- excessive copy.

## 14.2 Brand statement

A concise editorial section explaining the philosophy of Home of Fitness.

The composition should differ from the hero.

## 14.3 Membership preview

Include:

- clear plan entry point;
- selected plan highlights;
- benefit summary;
- direct CTA to compare memberships.

Do not overload the homepage with the entire pricing table.

## 14.4 Classes preview

Include:

- selected classes;
- level or intensity;
- schedule hint;
- image-led presentation;
- CTA to view all classes.

## 14.5 Trainer preview

Include:

- selected trainers;
- specialities;
- credible, concise information;
- CTA to trainer directory.

Do not invent qualifications.

## 14.6 Facilities section

Present equipment and environment through immersive imagery.

A fixed-image or layered scroll composition is appropriate here if performance remains acceptable.

## 14.7 Proof and trust

Use only truthful content.

Possible elements:

- confirmed testimonials;
- confirmed operating facts;
- facility details;
- coaching principles;
- membership support.

Do not fabricate ratings, review counts, member counts or awards.

## 14.8 Shop preview

Show a curated selection of gym wear and accessories.

Include:

- product imagery;
- product name;
- category;
- price;
- clear shop CTA.

## 14.9 Closing CTA

A strong final invitation to:

- compare membership;
- enquire;
- contact the gym.

## 14.10 Footer

Include:

- navigation;
- contact details where confirmed;
- social links where confirmed;
- policies;
- newsletter only if a truthful submission method exists;
- copyright.

---

# 15. Membership Page

## 15.1 Objective

Help users understand, compare and enquire about memberships without confusion.

## 15.2 Required content

- page introduction;
- membership plans;
- billing period;
- plan features;
- comparison;
- recommended plan state where justified;
- what is included;
- joining process;
- membership FAQ;
- enquiry CTA/form.

## 15.3 Data rules

Centralise membership data.

Suggested model:

```ts
type MembershipPlan = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  billingPeriod: string;
  joiningFee?: number | null;
  featured?: boolean;
  features: string[];
  exclusions?: string[];
  availability?: "available" | "enquiry-only" | "coming-soon";
};
```

## 15.4 Pricing rules

- do not scatter prices through components;
- clearly label billing periods;
- state joining fees where confirmed;
- do not imply recurring billing is active unless implemented;
- use configurable placeholders when business pricing is pending.

## 15.5 Enquiry flow

The form should support:

- name;
- email;
- telephone;
- preferred membership;
- optional goal;
- message;
- consent/acknowledgement where needed.

Validation must be accessible.

Submission behaviour must be truthful.

If no backend exists, use a transparent enquiry adapter or mail/contact hand-off. Never display a fake successful payment.

---

# 16. Classes Page

## 16.1 Required capabilities

- class catalogue;
- class detail summaries;
- intensity or level;
- duration;
- schedule information;
- trainer association where confirmed;
- category filtering where useful;
- empty states;
- CTA to enquire or join.

## 16.2 Suggested model

```ts
type FitnessClass = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  durationMinutes: number;
  intensity: "low" | "moderate" | "high";
  level: "beginner" | "all-levels" | "intermediate" | "advanced";
  trainerIds: string[];
  imageKey: string;
  schedule?: ClassSession[];
};
```

## 16.3 UX

The page must be easy to scan on mobile.

Do not rely on hover for critical class information.

---

# 17. Trainers Page

## 17.1 Required content

- trainer directory;
- portrait;
- name;
- specialities;
- concise biography;
- availability or enquiry CTA where confirmed.

## 17.2 Integrity rules

Do not invent:

- qualifications;
- awards;
- years of experience;
- transformation claims;
- certifications.

Use clearly marked content placeholders only when required.

## 17.3 Suggested model

```ts
type Trainer = {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialities: string[];
  biography: string;
  imageKey: string;
  certifications?: string[];
  socialLinks?: {
    instagram?: string;
    x?: string;
  };
};
```

---

# 18. Facilities Page

Present the physical gym experience.

Possible categories:

- strength equipment;
- cardio;
- functional training;
- studio spaces;
- changing facilities;
- recovery areas;
- member support.

Use only facilities that are confirmed or clearly labelled as proposed content.

The page should be highly visual and may include one of the strongest fixed-image compositions.

---

# 19. About Page

Include:

- brand story;
- mission;
- philosophy;
- training approach;
- community;
- safety and inclusion;
- reason to choose Home of Fitness.

Avoid generic filler.

The copy should sound human, confident and specific.

---

# 20. Shop

## 20.1 Scope

The shop sells:

- gym wear;
- tops;
- bottoms;
- training sets;
- accessories;
- bags;
- bottles;
- selected fitness items.

## 20.2 Catalogue capabilities

Required:

- product grid;
- categories;
- search;
- filtering;
- sorting;
- product count;
- loading state;
- no-results state;
- invalid-filter recovery;
- responsive layout.

## 20.3 Product model

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  currency: "NGN";
  imageKeys: string[];
  sizes?: string[];
  colours?: ProductColour[];
  stock: number;
  featured?: boolean;
  tags?: string[];
  material?: string;
  careInstructions?: string[];
};
```

## 20.4 Filters

Where supported by the catalogue:

- category;
- size;
- colour;
- availability;
- price range.

## 20.5 Sorting

At minimum:

- featured;
- price low to high;
- price high to low;
- name.

Do not label data as “best-selling” unless sales data exists.

---

# 21. Product Detail Page

Include:

- product name;
- price;
- image gallery;
- category;
- description;
- available sizes;
- colours;
- stock state;
- quantity;
- add-to-cart;
- material/care information where available;
- related products based on real category/tag logic.

## 21.1 Variant rules

- require valid options before adding;
- prevent unavailable combinations;
- provide accessible validation;
- preserve selected state;
- make stock limitations clear.

## 21.2 Gallery

- accessible controls;
- keyboard support;
- thumbnails where useful;
- responsive images;
- no layout shift;
- refined transitions.

---

# 22. Cart

## 22.1 Required behaviour

- persist across refresh;
- show selected size/colour;
- update quantities;
- remove items;
- calculate subtotal accurately;
- show empty state;
- handle product data changes;
- prevent invalid quantities;
- provide accessible announcements.

## 22.2 Persistence

Use local storage or an equivalent client-side approach suitable for this version.

Handle corrupted storage safely.

## 22.3 Checkout

Do not simulate real payment completion.

Choose one truthful implementation:

- enquiry/order-request hand-off;
- disabled checkout with clear “coming soon” explanation;
- documented payment adapter ready for future integration.

The UI must never mislead users into believing money has been processed.

---

# 23. FAQ Page

Organise questions by useful categories:

- membership;
- classes;
- facilities;
- store;
- orders;
- contact.

Accordion behaviour must be accessible.

Do not hide essential pricing or policy details solely inside accordions.

---

# 24. Contact Page

Include confirmed contact methods only.

Potential fields:

- name;
- email;
- telephone;
- enquiry type;
- message.

Include:

- validation;
- success/error state;
- privacy note;
- expected response wording only if confirmed.

Do not invent a physical address.

---

# 25. Legal Pages

Create:

- privacy;
- terms.

Use clearly identified client-review content where business/legal details are incomplete.

Do not present generic legal text as professionally approved legal advice.

---

# 26. 404 Page

The 404 page must:

- retain brand identity;
- clearly explain the route is unavailable;
- provide navigation;
- include a useful CTA;
- avoid jokes that weaken the premium tone.

---

# 27. Component Architecture

Suggested component groups:

```text
src/
  app/
  components/
    layout/
    navigation/
    sections/
    membership/
    classes/
    trainers/
    commerce/
    forms/
    motion/
    feedback/
  data/
  hooks/
  lib/
  pages/
  styles/
  types/
```

This is guidance, not a requirement to copy a prior repository.

Choose the final architecture based on the actual implementation.

## 27.1 Core reusable components

Potential components:

- `SiteHeader`;
- `MobileNavigation`;
- `SiteFooter`;
- `PageHero`;
- `SectionHeading`;
- `ImageReveal`;
- `FixedMediaSection`;
- `MembershipCard`;
- `MembershipComparison`;
- `ClassCard`;
- `TrainerCard`;
- `ProductCard`;
- `ProductGallery`;
- `ProductFilters`;
- `CartDrawer`;
- `CartLineItem`;
- `EnquiryForm`;
- `Accordion`;
- `EmptyState`;
- `RouteTransition`;
- `ReducedMotionProvider`.

Do not over-componentise trivial markup.

---

# 28. State Management

Prefer the simplest reliable approach.

Potential state domains:

- cart;
- mobile navigation;
- product filters;
- selected product variants;
- enquiry form.

Use context or a focused store only where complexity requires it.

Avoid one global store for unrelated UI state.

---

# 29. Data Architecture

Centralise:

- navigation;
- membership plans;
- classes;
- trainers;
- products;
- FAQs;
- contact details;
- social links;
- image manifest.

Do not duplicate business facts across components.

Create visible markers for client-required data.

---

# 30. Forms

## 30.1 Requirements

- explicit labels;
- useful autocomplete;
- inline errors;
- error summary where appropriate;
- keyboard usability;
- accessible status messages;
- loading state;
- truthful submission outcome;
- duplicate-submit prevention.

## 30.2 Data safety

Do not log sensitive form data.

Do not expose secrets in the client.

---

# 31. Accessibility

Target WCAG 2.2 AA.

Required:

- semantic landmarks;
- one logical `h1` per page;
- correct heading order;
- skip link;
- keyboard navigation;
- visible focus;
- accessible mobile menu;
- accessible dialogs/drawers;
- form labels;
- clear errors;
- live cart announcements;
- sufficient contrast;
- useful alt text;
- reduced motion;
- 200% zoom support;
- reflow;
- no keyboard traps;
- accessible touch targets.

Automated testing is not sufficient alone.

---

# 32. Performance

## 32.1 Targets

On key production routes:

- Performance ≥ 90;
- Accessibility ≥ 95;
- Best Practices ≥ 95;
- SEO ≥ 95;
- CLS ≤ 0.1;
- LCP ≤ 2.5 seconds under the documented mobile test profile.

## 32.2 Requirements

- optimise hero media;
- lazy-load below-fold images;
- minimise initial JavaScript;
- route-split where beneficial;
- avoid unnecessary dependencies;
- avoid expensive scroll handlers;
- avoid layout-thrashing animations;
- load fonts responsibly;
- preserve dimensions;
- stop off-screen continuous animation.

---

# 33. SEO and Sharing

Implement:

- unique page titles;
- unique descriptions;
- canonical strategy;
- sitemap;
- robots;
- favicons;
- Open Graph;
- social preview;
- descriptive URLs;
- internal linking;
- meaningful link text;
- accurate structured data only.

Never fabricate:

- review schema;
- aggregate ratings;
- business address;
- opening hours;
- prices;
- local-business details.

---

# 34. Error and Loading States

Every asynchronous or stateful experience must account for:

- loading;
- empty;
- error;
- success;
- invalid route;
- unavailable item;
- no search results.

Use branded states.

Do not leave blank screens.

---

# 35. Content Standards

All copy must use British English.

Tone:

- confident;
- concise;
- human;
- direct;
- premium;
- encouraging without cliché.

Avoid:

- “unlock your potential” repeated everywhere;
- fake urgency;
- exaggerated transformations;
- unsupported superlatives;
- robotic copy;
- repeated “Learn More” labels;
- references to the site as a demo;
- lorem ipsum.

Prefer specific CTAs:

- Compare memberships;
- Explore classes;
- Meet the trainers;
- View the shop;
- Enquire about membership;
- Add to cart.

---

# 36. Security and Privacy

Required:

- correct `.env` handling;
- no committed secrets;
- no unsafe HTML;
- no unapproved trackers;
- safe external links;
- no sensitive console logs;
- dependency review;
- transparent payment limitations;
- privacy-conscious forms;
- licence records.

---

# 37. Testing Requirements

## 37.1 Required scripts

```text
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## 37.2 Unit/component coverage

At minimum:

- membership rendering;
- membership comparison;
- product search;
- product filtering;
- sorting;
- cart totals;
- cart persistence;
- quantity limits;
- form validation;
- reduced-motion utilities;
- mobile menu.

## 37.3 E2E journeys

At minimum:

1. Homepage to membership.
2. Compare membership plans.
3. Homepage to classes.
4. Browse shop.
5. Search products.
6. Filter products.
7. Sort products.
8. Open product.
9. Select size and colour.
10. Add to cart.
11. Update quantity.
12. Remove item.
13. Refresh and preserve cart.
14. Submit enquiry.
15. Keyboard navigation.
16. Direct-load nested route.
17. Branded 404.

---

# 38. Vercel Deployment

The project must be Vercel-ready.

Verify:

- production build;
- output directory;
- SPA rewrites where required;
- deep-link refresh;
- environment variables;
- asset paths;
- case-sensitive imports;
- route behaviour;
- no committed build artefacts;
- no secrets.

Required direct-route checks:

- `/membership`;
- `/classes`;
- `/trainers`;
- `/shop`;
- one product route;
- `/cart`;
- unknown route.

---

# 39. Git and Delivery

Execution follows `AGENTS.md`.

After each predefined group of 10 major tasks:

- format;
- lint;
- type-check;
- test;
- build;
- review diff;
- commit;
- push;
- record SHA.

Do not define tiny edits as major tasks.

Do not claim a push happened without real output.

---

# 40. Required Documentation

By release:

```text
README.md
AGENTS.md
PROJECT.md
.env.example
docs/
  PROJECT_STATE.md
  IMPLEMENTATION_LEDGER.md
  DECISIONS.md
  BLOCKERS.md
  REFERENCE_BENCHMARK.md
  IMAGE_AUDIT.md
  ASSET_LICENCES.md
  MOTION_SYSTEM.md
  QA_REPORT.md
  VISUAL_QA.md
  MOTION_QA.md
  TECHNICAL_QA.md
  COMMERCE_QA.md
  ACCESSIBILITY_QA.md
  PERFORMANCE_QA.md
  CONTENT_QA.md
  SECURITY_QA.md
  SEO_QA.md
  DEPLOYMENT_QA.md
```

Documents must contain real information, not empty placeholders.

---

# 41. Client Decisions

Codex must record unresolved client-only decisions such as:

- final logo;
- legal business name;
- address;
- telephone;
- email;
- social accounts;
- opening hours;
- trainer credentials;
- membership prices;
- joining fees;
- product catalogue;
- stock;
- return policy;
- payment provider;
- shipping policy;
- privacy/legal approval.

These decisions must not prevent unrelated implementation work.

---

# 42. Acceptance Criteria by Area

## Visual

- black-and-white identity is coherent;
- typography is controlled;
- layouts are original;
- imagery is well composed;
- pages do not repeat the same section pattern;
- mobile is fully art-directed;
- the site does not resemble a generic AI template.

## Motion

- each major page has intentional choreography;
- reduced motion works;
- interactions remain responsive;
- no severe jank;
- motion does not obscure content.

## Membership

- plans are understandable;
- pricing is centralised;
- comparison is usable;
- enquiry flow works;
- payment limitations are truthful.

## Commerce

- catalogue works;
- search/filter/sort work;
- product route works;
- variants validate;
- cart persists;
- totals are correct;
- checkout behaviour is transparent.

## Accessibility

- keyboard flow works;
- focus is visible;
- forms are labelled;
- dialogs restore focus;
- contrast is adequate;
- zoom/reflow work;
- motion can be reduced.

## Engineering

- strict TypeScript;
- no casual `any`;
- no duplicate business data;
- no broken routes;
- no console-breaking errors;
- checks pass;
- production build passes.

## Release

- Vercel configuration is correct;
- nested routes refresh;
- documentation is current;
- no secrets;
- no Blocker/Critical findings;
- Major findings are fixed or explicitly accepted.

---

# 43. Definition of Done

Home of Fitness is complete only when:

- all required routes exist;
- the homepage feels fully designed;
- membership is functional and clear;
- classes are discoverable;
- trainers are presented credibly;
- facilities are showcased;
- the shop is usable;
- product pages work;
- cart state persists;
- totals are correct;
- forms validate;
- submission behaviour is truthful;
- all suitable local images are audited and deliberately mapped;
- external asset rights are documented;
- black-and-white identity is consistent;
- typography is controlled;
- British English is complete;
- motion is refined and project-specific;
- reduced motion works;
- mobile, tablet and desktop are polished;
- accessibility review is complete;
- tests pass;
- lint passes;
- type-check passes;
- production build passes;
- performance evidence exists;
- SEO essentials are implemented;
- Vercel readiness is verified;
- `.gitignore` is correct;
- no secrets are committed;
- every required 10-task checkpoint has a real commit and push record;
- documentation reflects the final release commit;
- no open Blocker or Critical finding remains;
- no open Major finding remains unless accepted by the client in writing;
- the final QA decision names the exact tested commit SHA.
