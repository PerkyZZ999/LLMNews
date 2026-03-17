# Phase 1: Foundation

## Goal
Establish the technical and structural foundation for a Bun-first TanStack Start application with a public surface and an internal admin surface.

## Objectives
- Create the initial TanStack Start application scaffold.
- Configure Bun, Biome, and the first project scripts.
- Establish shared routing, layout, theming, and component foundations.
- Prepare the repository for structured editorial data and admin workflows.

## Tasks

### Repository and tooling
- Initialize the application with TanStack Start, React, TypeScript, and Vite.
- Configure Bun as the default package manager and script runner.
- Add `bun run dev`, `bun run build`, `bun test`, `bun run lint`, and `bun run format` scripts.
- Add Biome configuration for formatting and linting.
- Add environment variable conventions and example env documentation.

### Application architecture
- Set up the top-level route tree for public and admin surfaces.
- Add the root app shell and layout structure.
- Define route-level boundaries for public, auth, and admin areas.
- Establish shared error, not-found, and loading states.

### UI and theming foundation
- Configure the shadcn/Base UI component foundation.
- Extract reusable layout and visual tokens from the mockup designs in `/docs/design/`.
- Define design tokens for spacing, color, typography, radii, and surfaces.
- Implement light and dark theme support.
- Create the first shared primitives: button, input, card, badge, table shell, dialog, dropdown, tabs, and toast.

### Data and domain foundation
- Define the first TypeScript domain models for story, category, vendor, source, benchmark note, and featured placement.
- Define validation schema strategy for structured editorial data.
- Establish mock or seeded data organization for early development.

### State and data-loading foundation
- Wire TanStack Query into the app shell.
- Establish route-loader patterns compatible with TanStack Start.
- Define initial usage boundaries for TanStack Store and TanStack Virtual.

### Observability foundation
- Add the first Evlog integration points.
- Define a minimal event naming convention for app, admin, and ingestion domains.
- Add structured logging for startup errors, route-level failures, and future editorial actions.

## Deliverables
- working application scaffold
- Bun-first project scripts
- Biome configuration
- shared route shell
- theme system
- initial component primitives
- initial domain models
- initial Evlog wiring

## Dependencies
- Product overview and tech stack docs must remain the source of truth.

## Exit criteria
- The app runs locally through Bun commands.
- Public and admin route groups exist.
- Theme switching works.
- Query and server-function patterns are wired at the root level.
- The repo is ready for feature work without major re-architecture.
