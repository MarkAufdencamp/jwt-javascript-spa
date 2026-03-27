# Implementation Plan: Dockerize SPA

## Phase 1: Production Containerization [checkpoint: 28a6dce]
Goal: Create a production-ready Docker image using Apache to serve the static files.

- [x] **Task: Create `Dockerfile` and Apache Configuration** (2645f16, 5eff92d)
    - [x] Create a `Dockerfile` in the project root using a stable Apache (`httpd`) base image. (2645f16)
    - [x] Configure Apache to serve the project's root directory. (2645f16)
    - [x] Ensure all static assets (HTML, CSS, JS, images) are correctly copied into the container. (2645f16)
    - [x] Add .dockerignore to optimize the build context. (5eff92d)
- [x] **Task: Implement Automated Verification for Docker Build** (2645f16)
    - [x] Create a shell script or test file to verify that the Docker image builds successfully. (2645f16)
    - [x] Verify that the container starts and responds to a basic HTTP request on port 80. (2645f16)
- [x] **Task: Conductor - User Manual Verification 'Phase 1: Production Containerization' (Protocol in workflow.md)** (28a6dce)

## Phase 2: Local Orchestration [checkpoint: bc6a3a7]
Goal: Provide a Docker Compose setup for simplified local development and testing.

- [x] **Task: Create `docker-compose.yml`** (3f4abc7)
    - [x] Define a `web` service that builds from the project's `Dockerfile`. (3f4abc7)
    - [x] Map port 80 in the container to a configurable host port (e.g., 8080). (3f4abc7)
    - [x] Configure volume mounting for local development (optional, but recommended for rapid iteration). (3f4abc7)
- [x] **Task: Verify Local Orchestration** (3f4abc7)
    - [x] Run `docker compose up` and confirm the application is accessible in the browser. (3f4abc7)
    - [x] Ensure any changes to the local files are reflected (if volume mounting is used). (3f4abc7)
- [x] **Task: Conductor - User Manual Verification 'Phase 2: Local Orchestration' (Protocol in workflow.md)** (bc6a3a7)

## Phase 3: Deployment Compatibility
Goal: Ensure the new Docker configuration works seamlessly with the existing Kamal setup.

- [ ] **Task: Update `config/deploy.yml`**
    - [ ] Align the `service` and `image` names with the new Docker setup.
    - [ ] Ensure the `app_port` and other Kamal settings are correct for the Apache-based container.
- [ ] **Task: Conductor - User Manual Verification 'Phase 3: Deployment Compatibility' (Protocol in workflow.md)**
