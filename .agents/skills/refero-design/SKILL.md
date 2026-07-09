---
name: refero-design
description: "Applies the design system defined in DESIGN.md to UI modifications while preserving functionality, accessibility, responsiveness, and code quality. Use this skill whenever implementing, refactoring, or reviewing frontend UI."
---

# Refero Design System Skill

## Goal

Your responsibility is to implement, refactor, and review frontend user interfaces according to the design language defined in `DESIGN.md`.

`DESIGN.md` is the single source of truth for all visual decisions.

Your objective is to improve the interface while preserving functionality, producing maintainable code, and ensuring a consistent user experience.

---

# Instructions

## 1. Read the Design System First

Before making any UI changes:

* Read `DESIGN.md` completely.
* Treat every design guideline as authoritative.
* Do not assume colors, typography, spacing, or component styles that are not defined.
* If existing code conflicts with `DESIGN.md`, prefer the design system unless the user explicitly requests otherwise.

---

## 2. Preserve Functionality

UI improvements must never alter application behavior.

Do not:

* break navigation
* change business logic
* remove functionality
* modify APIs
* change routing
* alter state management

Only change behavior when explicitly requested.

---

## 3. Reuse Before Creating

Before creating new components:

* Search for existing reusable components.
* Extend existing components when appropriate.
* Avoid creating duplicate implementations.

Prefer reusable components over repeated markup.

Examples include:

* Button
* Card
* Badge
* Input
* Modal
* Navbar
* Footer
* Section
* Container

---

## 4. Follow the Design System

Every UI decision should align with `DESIGN.md`.

This includes:

* color palette
* typography
* spacing
* border radius
* elevation
* layout
* component styling
* icon usage
* motion
* interaction patterns

Never introduce styles that conflict with the design language.

---

## 5. Use Design Tokens

Prefer centralized design tokens over hardcoded values.

Good examples include:

* CSS variables
* Tailwind theme tokens
* shared constants
* theme configuration

Avoid hardcoded:

* colors
* spacing
* font sizes
* border radius
* shadows

---

## 6. Maintain Consistency

Ensure consistency across the application.

Check for:

* spacing
* typography
* alignment
* component sizing
* border radius
* icon sizes
* button hierarchy
* card layouts
* section spacing

If inconsistencies exist, normalize them using the design system.

---

## 7. Build Responsive Interfaces

All changes must work across common viewport sizes.

Validate:

* mobile
* tablet
* desktop
* large desktop

Layouts should adapt gracefully without horizontal scrolling or overlapping content.

---

## 8. Accessibility Requirements

Every UI modification must preserve or improve accessibility.

Verify:

* semantic HTML
* keyboard navigation
* visible focus indicators
* sufficient color contrast
* accessible labels
* meaningful alt text
* ARIA usage only when necessary

Never reduce accessibility to achieve visual changes.

---

## 9. Improve Code Quality

While implementing UI improvements:

* remove duplicated markup
* simplify overly complex structures
* improve component composition
* eliminate unnecessary wrappers
* keep files readable
* avoid unnecessary abstractions

Refactor only when it improves maintainability.

---

## 10. Preserve Performance

Avoid introducing unnecessary:

* re-renders
* animations
* dependencies
* large assets
* deeply nested components

Prefer lightweight solutions.

---

## 11. Explain Significant Changes

For substantial UI updates, summarize:

* files modified
* components created
* components removed
* design decisions
* tradeoffs
* remaining recommendations

Keep explanations concise and focused.

---

# Constraints

Always:

* Read `DESIGN.md` before making changes.
* Preserve functionality.
* Preserve responsiveness.
* Preserve accessibility.
* Reuse existing components whenever possible.
* Use design tokens instead of hardcoded values.
* Follow the spacing and typography scales.
* Produce clean, maintainable code.

Never:

* Invent a new visual language.
* Mix multiple design styles.
* Introduce random colors.
* Duplicate components.
* Break existing features.
* Ignore accessibility.
* Ignore responsive layouts.
* Add unnecessary dependencies.
* Rewrite unrelated parts of the application.

If a requested design conflicts with `DESIGN.md`, explain the conflict and follow the user's explicit instruction only for the requested change.

---

# Examples

## Example 1

### User

Redesign the Hero section.

### Expected Behavior

* Read `DESIGN.md`.
* Preserve the existing content and functionality.
* Update layout, spacing, typography, and styling to match the design system.
* Ensure the section is fully responsive.
* Reuse existing components where possible.

---

## Example 2

### User

Create a reusable button component.

### Expected Behavior

* Follow button guidelines from `DESIGN.md`.
* Support all required variants.
* Use design tokens.
* Ensure keyboard accessibility.
* Avoid duplicated styling.

---

## Example 3

### User

Review the portfolio for design consistency.

### Expected Behavior

Identify inconsistencies including:

* spacing
* typography
* colors
* border radius
* component usage
* responsive behavior
* accessibility

Recommend improvements without changing unrelated functionality.

---

## Example 4

### User

Refactor the Projects section.

### Expected Behavior

* Preserve behavior.
* Extract reusable components if needed.
* Replace duplicated UI.
* Apply the design system consistently.
* Improve maintainability while keeping the visual appearance aligned with `DESIGN.md`.
