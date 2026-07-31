# Command to run the bug-fixing agents

Copy and send the prompt below to Codex from the root of the website project.

```text
Read BUG_FIXING_AGENTS.md completely and execute it as the controlling specification for this repository.

Act as the Bug Fixing Coordinator. Inspect the existing architecture before editing, run the website, create the required baseline reports, and coordinate the specialist audit passes for routing, navigation, images, duplicated media, animation, responsive layout, accessibility, performance, and final QA.

You must repair the defects you find rather than only listing them. Preserve the current design and architecture unless a change is required to fix a proven defect or materially improve production quality.

Search all root, public, img, images, and asset directories before sourcing replacement media. Correct missing image variables and paths, map local images to the correct semantic sections, and prevent accidental reuse of the same image across unrelated cards or sections on the same page.

Check every internal URL, navbar item, mobile-menu action, button, card CTA, footer link, form, and primary user journey. Add professional hover and focus states. For prominent buttons, use the requested transition duration of about 0.7 seconds where appropriate, without delaying click behaviour and without using transition: all.

Use the supplied professional reference websites and current official documentation as research inputs, not as designs to copy. Confirm uncertain decisions from multiple reliable sources.

Run the full iterative loop:
inspect -> reproduce -> research -> repair -> test -> visually verify -> regress -> final independent QA.

Do not declare success until all applicable completion criteria in BUG_FIXING_AGENTS.md pass. If an external service, missing credential, or unavailable asset prevents completion, document the blocker precisely in reports/final-qa-report.md.

Start now with the architecture and runtime baseline. Do not ask me which phase to begin.
```
