# Tasks: Portfolio UX Recruiter Improvements

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated files changed | 13-14 |
| Estimated changed lines | 520-760 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | Batch A / PR 1 → Batch B / PR 2 |
| Delivery strategy | ask-always |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Messaging, typography, hero conversion, contact fixes | PR 1 | High-impact, low-risk, user-visible fast win |
| 2 | Project schema, About/Footer redesign, motion, hover polish | PR 2 | Depends on PR 1 styles/copy direction |

## Phase 1: Batch A — High-impact / low-risk

- [x] 1.1 Update `client/index.html` font loading with `preconnect` + stylesheet, preserving current SEO/meta tags.
- [x] 1.2 Refactor `client/src/styles/globals.css` to define `--font-display` / `--font-body`, replace Inter body usage, and keep safe fallback stacks.
- [x] 1.3 Extend `client/src/context/LanguageContext.jsx` with recruiter-first tagline, hero CTA labels, scroll cue text, and footer/contact copy keys.
- [x] 1.4 Modify `client/src/components/Hero.jsx` to add projects/contact CTA and a scroll cue anchor to `#projects`.
- [x] 1.5 Update `client/src/styles/Hero.css` for CTA hierarchy, distinctive type rhythm, and non-blocking scroll-indicator motion.
- [x] 1.6 Verify and update the LinkedIn constant in `client/src/components/Contact.jsx`; mirror the verified URL in footer links.

## Phase 2: Batch B — Structural polish

- [x] 2.1 Reshape `client/src/data/projects.js` with `category`, `featured`, `summary`, `outcome`, and optional `metrics[]`; reorder featured/professional before educational.
- [x] 2.2 Update `client/src/components/carousel/ProjectCard.jsx` to prefer `summary`, render outcome/metric chips when present, and keep graceful fallback for missing metrics/private repos.
- [x] 2.3 Enhance `client/src/styles/Projects.css` with `.project-card:hover`, `.project-card:focus-within`, and metric chip styles that preserve readability.
- [x] 2.4 Replace the dense code block in `client/src/components/About.jsx` with recruiter-scannable highlights while preserving a small developer-flavored accent.
- [x] 2.5 Expand `client/src/components/Footer.jsx` into a conversion footer with section links, contact links, and back-to-top action.
- [x] 2.6 Update `client/src/styles/AboutContact.css` to support the new About layout, footer structure, and CTA treatment.
- [x] 2.7 Evaluate scroll-reveal wiring; implemented during Slice B and later removed during cleanup/stabilization to preserve the final single-scroll behavior.
- [x] 2.8 Evaluate motion styles; reduced-motion support remains global, but reveal-state styles were intentionally removed during cleanup with the reveal system.

## Phase 3: Verification

- [x] 3.1 Run `npm run lint` and fix any JSX/style regressions introduced across updated components.
- [x] 3.2 Run `npm run build` and verify the recruiter UX still bundles correctly with font-loading changes.
- [ ] 3.3 Manually verify spec scenarios in-browser: hero CTA visibility, projects ordering, hover/focus feedback, reduced-motion behavior, valid LinkedIn/contact actions, and lightbox behavior. See `openspec/changes/portfolio-ux-recruiter/qa.md` for current inspection-based evidence.

## Phase 4: Cleanup

- [x] 4.1 Remove dead copy/CSS left by the old About code-block pattern and dead reveal/lightbox remnants when clearly safe.
- [ ] 4.2 Recheck project metrics for factual accuracy; downgrade uncertain numbers to qualitative outcomes before merge.

### Reconciliation Notes

- The reveal system was prototyped in implementation and later removed during cleanup as a deliberate stabilization decision; the final product ships without reveal motion.
- `qa.md` captures the current verification evidence. Browser-driven manual QA is still required before treating task `3.3` as complete.
