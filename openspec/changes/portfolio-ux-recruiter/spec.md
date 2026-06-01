# Recruiter Portfolio UX Specification

## Purpose

Define the recruiter-facing behaviors that make Porfolio2025 easier to scan, more distinctive, and more likely to convert visits into project review or contact.

## Requirements

### Requirement: Hero Messaging Conversion

The system MUST present a hero message that communicates value delivered, SHALL include at least one CTA beyond CV actions, and SHOULD provide a visual cue to continue toward projects.

#### Scenario: Recruiter understands value quickly
- GIVEN a first-time visitor lands on the homepage
- WHEN the hero content is visible
- THEN the tagline states outcomes or business value, not only job title or tech role
- AND a CTA to projects or contact is visible without scrolling

#### Scenario: Scroll cue supports exploration
- GIVEN the hero is visible on a pointer or touch device
- WHEN the visitor has not interacted yet
- THEN the hero shows a non-blocking cue that suggests continuing to the next section

### Requirement: Project Storytelling Prioritization

The system MUST present projects in a recruiter-friendly order, SHALL keep descriptions scannable, and SHOULD expose impact or metrics when verified data is available.

#### Scenario: Professional work is prioritized
- GIVEN the projects section is rendered
- WHEN multiple project categories exist
- THEN featured or professional/commercial work appears before educational work

#### Scenario: Project card supports quick evaluation
- GIVEN a recruiter scans a project card
- WHEN summary content is shown
- THEN the description fits a short scannable summary
- AND verified impact, outcome, or context is shown when available

### Requirement: Project Interaction Feedback

The system SHOULD provide clear hover or focus feedback on project cards without reducing readability or discoverability.

#### Scenario: Pointer user hovers a card
- GIVEN a device that supports hover
- WHEN the pointer moves over a project card
- THEN the card provides visible feedback that suggests interactivity

#### Scenario: Keyboard user tabs through cards
- GIVEN a keyboard-only visitor
- WHEN focus reaches actionable project controls
- THEN focus styling remains visible and usable

### Requirement: Brand Typography Quality

The system MUST use a more distinctive yet professional typography system than the current generic default and SHALL load fonts with stable fallback behavior.

#### Scenario: Typography feels intentional
- GIVEN the portfolio loads successfully
- WHEN the visitor reads hero and section headings
- THEN display and body typography feel intentionally differentiated and professional

#### Scenario: Font loading degrades safely
- GIVEN a slow or cached network condition
- WHEN custom fonts are not immediately ready
- THEN fallback fonts preserve readable layout without obvious broken flash or overlap

### Requirement: Content Scannability

The system MUST present About and Footer content in recruiter-scannable form and SHOULD support both technical and non-technical readers.

#### Scenario: Recruiter scans About section
- GIVEN a recruiter opens the About section
- WHEN they scan it for less than 20 seconds
- THEN they can identify background, strengths, domains, and career intent without parsing dense code-like formatting

#### Scenario: Footer reinforces next action
- GIVEN a visitor reaches the footer
- WHEN primary sections have been read
- THEN the footer offers navigation or contact paths that reinforce conversion

### Requirement: Motion Polish Accessibility

The system MAY use subtle entrance motion, but it MUST respect `prefers-reduced-motion`, SHALL NOT block interaction, and SHALL NOT reduce readability.

#### Scenario: Standard motion behavior
- GIVEN motion is allowed by user preferences
- WHEN major sections enter the viewport
- THEN entrance motion is subtle and content remains readable immediately

#### Scenario: Reduced motion behavior
- GIVEN the user prefers reduced motion
- WHEN the page renders or sections enter view
- THEN motion effects are removed or minimized without hiding content

### Requirement: Contact Conversion Reliability

The system MUST provide valid low-friction contact paths, including a valid LinkedIn URL, and SHOULD make professional contact actions obvious.

#### Scenario: LinkedIn link is valid
- GIVEN a visitor activates the LinkedIn action
- WHEN the destination opens
- THEN it resolves to the portfolio owner’s current LinkedIn profile

#### Scenario: Contact options are easy to identify
- GIVEN a recruiter wants to reach out
- WHEN they view hero, contact, or footer actions
- THEN at least one clear professional contact path is immediately available
