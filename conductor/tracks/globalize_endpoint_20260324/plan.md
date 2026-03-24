# Implementation Plan: Globalize Endpoint URL

## Phase 1: Global Configuration Foundation [checkpoint: 14cbc2b]
- [x] Task: Create `config.test.js` to assert `CONFIG.API_BASE_URL` exposes `http://localhost:3000` by default. 9d73e8d
- [x] Task: Implement `config.js` to define `CONFIG` and satisfy the test. 9d73e8d
- [x] Task: Conductor - User Manual Verification 'Phase 1: Global Configuration Foundation' (Protocol in workflow.md) 14cbc2b

## Phase 2: Refactor HTML Injections [checkpoint: 34eccec]
- [x] Task: Update all HTML files (`index.html`, `signup.html`, `mainmenu.html`, `aboutme.html`, `accounts.html`, `domains.html`) to load `config.js` before module scripts. d732c45
- [x] Task: Conductor - User Manual Verification 'Phase 2: Refactor HTML Injections' (Protocol in workflow.md) 34eccec

## Phase 3: Refactor JavaScript Modules (TDD)
- [x] Task: Update `index.test.js` and `signup.test.js` to mock/expect the global `CONFIG.API_BASE_URL`. 095a478
- [x] Task: Refactor `index.js` and `signup.js` to use `CONFIG.API_BASE_URL` and ensure tests pass. 095a478
- [x] Task: Update `aboutme.test.js` to mock/expect the global `CONFIG.API_BASE_URL`. e7b2889
- [x] Task: Refactor `aboutme.js` to use `CONFIG.API_BASE_URL` and ensure tests pass. e7b2889
- [~] Task: Update `accounts.test.js` and `domains.test.js` to mock/expect the global `CONFIG.API_BASE_URL`.
- [ ] Task: Refactor `accounts.js` and `domains.js` to use `CONFIG.API_BASE_URL` and ensure tests pass.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Refactor JavaScript Modules (TDD)' (Protocol in workflow.md)