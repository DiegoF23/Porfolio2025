# Proposal: Portfolio UX Recruiter Improvements

## Intent

Turn Porfolio2025 from a project showcase into a recruiter-conversion portfolio: clearer value proposition, faster first impression, stronger proof of impact, and clearer paths to projects/contact.

## Scope

### In Scope
- Improve recruiter messaging: hero tagline, project summaries, About scannability.
- Add conversion affordances: "View Projects" / "Let's Talk", scroll hint, richer footer.
- Add product polish: distinctive typography strategy, font preload, card hover states, scroll reveals.
- Reorder and enrich projects with impact fields and badges.
- Verify/update LinkedIn URL.

### Out of Scope
- New backend, routing, CMS, analytics, or test framework.
- Rebuilding visual identity from scratch.
- Inventing unverifiable metrics; unknown impact stays qualitative.

## Capabilities

### New Capabilities
- `recruiter-portfolio-ux`: Recruiter-focused presentation, conversion CTAs, impact-oriented project cards, and polished portfolio interactions.

### Modified Capabilities
- None; `openspec/specs/` has no existing specs.

## Approach

- `client/src/context/LanguageContext.jsx`: replace generic ES/EN tagline with outcome-focused copy.
- `client/src/components/Hero.jsx` + `client/src/styles/Hero.css`: add project/contact CTA and scroll-down indicator.
- `client/src/data/projects.js`: add `metrics`/`outcome` fields, shorten descriptions, reorder featured/professional/educational work.
- `client/src/components/carousel/ProjectCard.jsx`: render impact badges and preserve private repo state.
- `client/src/components/About.jsx`: convert dense code block into recruiter-scannable highlights while keeping developer personality.
- `client/src/styles/Projects.css`: add card hover/focus polish.
- `client/src/App.jsx` or local section utilities: add reduced-motion-safe scroll reveal behavior.
- `client/index.html` + `globals.css`: add font preload/distinctive typography without hurting performance.
- `client/src/components/Contact.jsx` and `Footer.jsx`: verify LinkedIn, add social/contact/footer CTAs.

## Alternatives Considered

- Full redesign: rejected; too large and risky for a focused recruiter UX pass.
- Keep code-block About: rejected; clever but less skimmable for recruiters.
- Add animation library: rejected; CSS/IntersectionObserver is enough and avoids dependency weight.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `client/src/components/*` | Modified | Hero, About, cards, contact, footer UX |
| `client/src/styles/*` | Modified | Typography, hover, motion, scroll hint |
| `client/src/data/projects.js` | Modified | Project order, summaries, metrics schema |
| `client/index.html` | Modified | Font preload/performance |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| False metrics | Med | Use only verified or qualitative outcomes |
| Motion hurts accessibility | Low | Respect `prefers-reduced-motion` |
| Font slows page | Low | Preload only chosen font weights |

## Rollback Plan

Revert changed React/CSS/data files and `index.html`; project remains functional because changes are additive and no backend/schema persistence changes are introduced.

## Dependencies

- None; additive frontend-only work.

## Success Criteria

- [ ] Hero communicates value and has project/contact CTA.
- [ ] Projects show concise summaries, grouping, and impact proof.
- [ ] About/footer are recruiter-scannable.
- [ ] Hover/reveal motion works and respects reduced motion.
- [ ] `npm run build` succeeds.
