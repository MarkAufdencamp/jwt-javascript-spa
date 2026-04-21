# Responsive Navigation Bar Specification

## Objective
Convert the existing custom `div`-based navigation links and buttons into a standard, responsive Bootstrap 5 Navigation Bar (`navbar`). This will enhance usability across different device sizes, particularly on mobile devices where a "hamburger" menu is expected.

## Scope
The new navigation bar will be implemented on the following authenticated pages:
- `accounts.html`
- `domains.html`
- `aboutme.html`

*Note: `index.html` (Login) and `signup.html` are unauthenticated entry points and will not include this navbar.*

## Design Requirements
- **Framework:** Bootstrap 5 (already included in the project via CDN).
- **Structure:**
  - **Brand/Logo:** "JWT SPA" linking back to `mainmenu.html`.
  - **Collapsible Menu:** A standard navbar-toggler ("hamburger" icon) that appears on smaller screens.
  - **Navigation Links:** Links to Accounts, Domains, and About Me views.
  - **Action Buttons:** The existing "Refresh" (context-dependent) and "Logout" buttons, aligned to the right side of the navbar.
- **Styling:** Use standard Bootstrap classes (e.g., `navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-dark`) to ensure a clean, professional, and consistent appearance.
- **JavaScript:** Ensure Bootstrap's JS bundle is included on the relevant pages so the mobile toggle functions correctly.

## Acceptance Criteria
1. The new Bootstrap navbar replaces the old `<div id="navbar">` on `accounts.html`, `domains.html`, and `aboutme.html`.
2. The navbar displays correctly on desktop, with links and action buttons properly aligned.
3. On mobile screen sizes, the navbar collapses into a functional hamburger menu.
4. All existing links ("Accounts", "Domains", "About Me") navigate to the correct pages.
5. All existing buttons ("Refresh Domains/Accounts/Profile" and "Logout") retain their current functionality and event listeners.
6. Existing tests pass without errors.