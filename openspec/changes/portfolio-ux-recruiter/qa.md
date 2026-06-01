# QA Evidence: portfolio-ux-recruiter

## Scope note

This document records the current verification evidence for recruiter UX scenarios. Where the agent did not execute a real browser/device interaction, the result is marked **PARTIAL (inspection-based)** rather than inventing runtime proof.

| Scenario | Expected | Observed | Status |
|---|---|---|---|
| Hero CTA presence and hierarchy | Hero shows recruiter-first CTA plus CV actions in clear order | `Hero.jsx` renders `viewProjects` first, then view/download CV; `Hero.css` keeps hierarchy and mobile wrapping rules | PARTIAL (inspection-based) |
| Hero scroll cue | Hero suggests continuing to projects without blocking interaction | `Hero.jsx` includes `hero__scrollcue`; `Hero.css` styles it as subtle cue | PARTIAL (inspection-based) |
| Project ordering | Strongest/professional work appears before educational work | `projects.js` orders featured/professional entries before educational ones | PARTIAL (inspection-based) |
| Project hover/focus states | Cards show clear hover/focus feedback without harming readability | `Projects.css` includes `.project-card:hover`, `.project-card:focus-within`, and explicit focus styles for actionable controls | PARTIAL (inspection-based) |
| About + Contact stacked flow | About and Contact read cleanly in a single-column flow | `AboutContact.css` sets `.about-contact` to one column; About and Contact remain direct stacked children | PARTIAL (inspection-based) |
| Footer links/contact paths | Footer reinforces navigation and direct contact | `Footer.jsx` includes nav links, email, WhatsApp, LinkedIn, GitHub, and back-to-top affordance | PARTIAL (inspection-based) |
| LinkedIn URL updated | Public LinkedIn references use the verified URL | Verified URL present in `Contact.jsx`, `Footer.jsx`, and `index.html` structured data | PARTIAL (inspection-based) |
| Lightbox open/close/fullscreen | Lightbox opens to real viewport, closes stably, and is not trapped by card bounds | `Lightbox.jsx` uses `createPortal(..., document.body)`; `Projects.css` uses viewport/dvh-based shell sizing and backdrop/content separation | PARTIAL (inspection-based) |
| Lightbox swipe behavior | Mobile swipe navigation still works | `Lightbox.jsx` preserves touch start/end handlers and swipe threshold logic | PARTIAL (inspection-based) |
| Narrow mobile nav behavior | Nav resists awkward wrapping without hamburger | `Nav.css` uses nowrap plus compact spacing/font reductions at `700px` and `420px` breakpoints | PARTIAL (inspection-based) |
| Reduced-motion behavior | Motion respects `prefers-reduced-motion` and does not hide content | `globals.css` globally neutralizes animation/transition speed in reduced-motion mode; final product ships without reveal motion | PARTIAL (inspection-based) |
| Build integrity | App builds successfully after recruiter UX changes | `npm run build` completed successfully during verify | PASS |
| Lint state | No blocking lint errors | `npm run lint` completed with 3 pre-existing warnings in `client/src/components/carousel/Carousel.jsx` and no errors | PASS WITH WARNINGS |

## Remaining manual QA needed

- Real browser validation of hero CTA hierarchy on desktop/mobile
- Real interaction test of lightbox open/close/swipe on multiple viewport sizes
- Real narrow-width nav check in Spanish labels
- Real reduced-motion device/browser check
