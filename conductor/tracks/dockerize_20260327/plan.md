# Implementation Plan: Dockerize SPA

## Phase 1: Production Containerization
Goal: Create a production-ready Docker image using Apache to serve the static files.

- [x] **Task: Create `Dockerfile` and Apache Configuration** (2645f16)
    - [x] Create a `Dockerfile` in the project root using a stable Apache (`httpd`) base image. (2645f16)
    - [x] Configure Apache to serve the project's root directory. (2645f16)
    - [x] Ensure all static assets (HTML, CSS, JS, images) are correctly copied into the container. (2645f16)
- [x] **Task: Implement Automated Verification for Docker Build** (2645f16)
    - [x] Create a shell script or test file to verify that the Docker image builds successfully. (2645f16)
    - [x] Verify that the container starts and responds to a basic HTTP request on port 80. (2645f16)
- [ ] **Task: Conductor - User Manual Verification 'Phase 1: Production Containerization' (Protocol in workflow.md)**

## Phase 2: Local Orchestration
Goal: Provide a Docker Compose setup for simplified local development and testing.

- [ ] **Task: Create `docker-compose.yml`**
    - [ ] Define a `web` service that builds from the project's `Dockerfile`.
    - [ ] Map port 80 in the container to a configurable host port (e.g., 8080).
    - [ ] Configure volume mounting for local development (optional, but recommended for rapid iteration).
- [ ] **Task: Verify Local Orchestration**
    - [ ] Run `docker compose up` and confirm the application is accessible in the browser.
    - [ ] Ensure any changes to the local files are reflected (if volume mounting is used).
- [ ] **Task: Conductor - User Manual Verification 'Phase 2: Local Orchestration' (Protocol in workflow.md)**

## Phase 3: Deployment Compatibility
Goal: Ensure the new Docker configuration works seamlessly with the existing Kamal setup.

- [ ] **Task: Update `config/deploy.yml`**
    - [ ] Align the `service` and `image` names with the new Docker setup.
    - [ ] Ensure the `app_port` and other Kamal settings are correct for the Apache-based container.
- [ ] **Task: Conductor - User Manual Verification 'Phase 3: Deployment Compatibility' (Protocol in workflow.md)**
