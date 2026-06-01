# Design: Portfolio UX Recruiter Improvements

## Technical Approach

Keep the current React/Vite structure: static data in `projects.js`, copy in `LanguageContext.jsx`, and component-scoped CSS files. The change is additive frontend polish: recruiter-first copy, scannable data, stronger CTAs, subtle motion, and distinctive typography without adding libraries.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|---|---|---|---|
| Typography | Display: **Bricolage Grotesque**; body: **Instrument Sans** | Keep Inter; use many weights | Distinctive but professional; 2 families, limited weights reduce payload. |
| Font loading | `index.html` Google Fonts `preconnect` + stylesheet with `display=swap`; CSS variables in `globals.css` | JS font loader; self-host now | Lowest implementation risk; stable fallback via `font-family` stack. Self-host can be future perf pass. |
| Motion | One reusable scroll reveal hook/component in `App.jsx` or `components/Reveal.jsx`; CSS in `globals.css` | Animation library | No dependency weight; aligns with existing CSS-first patterns. |
| About | Replace dense `<pre>` with hybrid: human-readable cards + small code-flavored accent | Keep full code block | Recruiters can scan; developer personality remains. |
| Metrics | Extend project objects with optional `category`, `featured`, `summary`, `outcome`, `metrics[]` | Parse metrics from descriptions | Explicit schema keeps cards deterministic and translatable. |

## Data Flow

```text
LanguageContext ──→ Hero / About / Contact / Footer copy
PROJECTS[] ───────→ Projects.jsx ordering ──→ ProjectCard metrics/summary
Reveal wrapper ───→ section/card DOM nodes ──→ IntersectionObserver ──→ CSS classes
```

Sequence for scroll reveal:

```text
Page renders → Reveal registers element → element enters viewport
  → add .is-visible → CSS transitions opacity/translate
  → if prefers-reduced-motion: render visible, no transition
```

## File Changes

| File | Action | Description |
|---|---|---|
| `client/index.html` | Modify | Add font `preconnect` and Google Fonts stylesheet. Update SEO copy only if needed. |
| `client/src/styles/globals.css` | Modify | Add `--font-display`, `--font-body`; replace Inter body; add `.reveal`/`.is-visible` and reduced-motion overrides. |
| `client/src/context/LanguageContext.jsx` | Modify | Add hero CTA labels, scroll cue text, recruiter-facing tagline, About/Footer labels. |
| `client/src/components/Hero.jsx` | Modify | Add third CTA: `#projects` primary/secondary link and optional `#contact` CTA; add scroll indicator anchor. |
| `client/src/styles/Hero.css` | Modify | Style CTA hierarchy, scroll hint, responsive spacing, reduced-motion-safe bounce/pulse. |
| `client/src/data/projects.js` | Modify | Reorder: featured/commercial first, educational last. Add `category`, `featured`, `summary`, `outcome`, `metrics`. Shorten `description`. |
| `client/src/components/Projects.jsx` | Modify | Sort by `featured/category` or trust reordered array; wrap section/cards in reveal. |
| `client/src/components/carousel/ProjectCard.jsx` | Modify | Prefer `summary`; show metrics/outcome chips; keep expand for full description/private GitHub. |
| `client/src/styles/Projects.css` | Modify | Add `.project-card:hover`, `.project-card:focus-within`, metrics chip styles. |
| `client/src/components/About.jsx` | Modify | Replace code block with recruiter-readable highlights: value, experience, domains, working style, goal. |
| `client/src/styles/AboutContact.css` | Modify | Add highlight grid, footer link layout, CTA styles. |
| `client/src/components/Footer.jsx` | Modify | Add section nav, GitHub/LinkedIn/email/WhatsApp links, back-to-top. |
| `client/src/components/Contact.jsx` | Modify | Verify/update LinkedIn constant; keep email/WhatsApp low friction. |
| `client/src/App.jsx` | Modify | If no new component file, host reveal observer logic here and wrap major sections. |

## Interfaces / Contracts

```js
{
  category: "featured" | "professional" | "educational",
  featured: true,
  summary: { es: "...", en: "..." },
  outcome: { es: "...", en: "..." },
  metrics: [{ label: { es: "...", en: "..." }, value: "..." }]
}
```

Missing `summary`, `outcome`, or `metrics` MUST render gracefully with no empty UI.

## Testing Strategy

| Layer | What to Test | Approach |
|---|---|---|
| Build | Vite bundle compiles | `npm run build` |
| Lint | JSX/CSS-related JS validity | `npm run lint` |
| Manual UX | CTA anchors, hover/focus, language toggle, reduced motion | Browser check desktop/mobile |
| Content | LinkedIn resolves, metrics are verified | Manual link/content review |

## Migration / Rollout

No migration required. Data shape is static and optional fields allow incremental rollout per project.

## Open Questions

- [ ] Confirm current LinkedIn URL before implementation.
- [ ] Confirm which project metrics are verified; use qualitative outcomes where numbers are unknown.
