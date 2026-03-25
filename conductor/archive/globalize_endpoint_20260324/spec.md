# Specification: Globalize Endpoint URL

## Overview
Refactor the client-side JavaScript application to remove hardcoded API endpoint URLs (e.g., `http://localhost:3000`) and replace them with a centralized global configuration.

## Functional Requirements
- Create a dedicated configuration file (e.g., `config.js`) that defines a global `CONFIG` object containing the base API URL.
- Modify all HTML files to include `config.js` before any other application scripts are loaded.
- Refactor all `fetch` requests across the application (`index.js`, `signup.js`, `aboutme.js`, `accounts.js`, `domains.js`) to use the global configuration variable instead of hardcoded strings.

## Non-Functional Requirements
- **Fallback Strategy:** If the global configuration is missing or undefined, the application must default to `http://localhost:3000` to ensure local development remains uninterrupted.
- **Maintainability:** The change must not introduce build steps; it must remain Vanilla JavaScript compatible.

## Acceptance Criteria
- [ ] `config.js` exists and defines the base API URL.
- [ ] All JS files use the base API URL from `config.js` for `fetch` requests.
- [ ] No hardcoded `http://localhost:3000` URLs exist in `fetch` calls.
- [ ] The application functions correctly when pointing to a different backend URL by only modifying `config.js`.
- [ ] The application defaults to `http://localhost:3000` gracefully if the config variable is missing.