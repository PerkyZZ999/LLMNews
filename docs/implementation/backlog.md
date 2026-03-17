# LLMNews Implementation Backlog

## Purpose
This file turns the phase plans into a delivery backlog with checklist tasks that can be tracked directly during implementation.

Use this document as the execution board for the MVP and use the phase documents for deeper context, scope, and exit criteria.

## Tracking notes
- Keep tasks unchecked until the work is actually complete.
- Prefer checking off vertical slices, not only infrastructure tasks.
- If scope changes materially, update both this backlog and the corresponding phase document.

## Phase 1: Foundation

### Repository and tooling
- [x] Initialize the application with TanStack Start, React, TypeScript, and Vite.
- [x] Configure Bun as the default package manager and script runner.
- [x] Add `bun run dev`, `bun run build`, `bun test`, `bun run lint`, and `bun run format` scripts.
- [x] Add Biome configuration for formatting and linting.
- [x] Add environment variable conventions and example env documentation.

### Application architecture
- [x] Set up the top-level route tree for public and admin surfaces.
- [x] Add the root app shell and layout structure.
- [x] Define route-level boundaries for public, auth, and admin areas.
- [x] Establish shared error, not-found, and loading states.

### UI and theming foundation
- [x] Configure the shadcn/Base UI component foundation.
- [x] Extract reusable layout and visual tokens from the mockup designs in `/docs/design/`.
- [x] Define design tokens for spacing, color, typography, radii, and surfaces.
- [x] Implement light and dark theme support.
- [ ] Create the first shared primitives: button, input, card, badge, table shell, dialog, dropdown, tabs, and toast.

### Data and domain foundation
- [x] Define the first TypeScript domain models for story, category, vendor, source, benchmark note, and featured placement.
- [x] Define the validation schema strategy for structured editorial data.
- [x] Establish mock or seeded data organization for early development.

### State and data-loading foundation
- [x] Wire TanStack Query into the app shell.
- [x] Establish route-loader patterns compatible with TanStack Start.
- [x] Define initial usage boundaries for TanStack Store and TanStack Virtual.

### Observability foundation
- [x] Add the first Evlog integration points.
- [x] Define a minimal event naming convention for app, admin, and ingestion domains.
- [ ] Add structured logging for startup errors, route-level failures, and future editorial actions.

### Phase 1 completion checklist
- [x] Verify the app runs locally through Bun commands.
- [x] Verify public and admin route groups exist.
- [x] Verify theme switching works.
- [x] Verify query and server-function patterns are wired at the root level.
- [x] Verify the repo is ready for feature work without major re-architecture.

## Phase 2: Public Experience

### Public route implementation
- [x] Build the home page route.
- [x] Build the LLM models category route.
- [x] Build the benchmarks leaderboard route.
- [x] Build the AI coding apps category route.
- [x] Build the story detail route.
- [ ] Add a minimal about or methodology section only if it materially improves product credibility.

### Home page features
- [x] Implement the lead story area.
- [x] Implement the featured stories section.
- [x] Implement the latest stories feed.
- [x] Implement category signposting so readers can distinguish models from coding tools instantly.
- [x] Add recency and release-type metadata on cards.

### Category pages
- [x] Create category-specific listing layouts.
- [x] Add vendor or product metadata previews.
- [ ] Add clear empty, loading, and error states.
- [ ] Design filtering only if it is lightweight and useful for MVP.

### Benchmark leaderboard
- [x] Build the benchmark leaderboard layout.
- [x] Add benchmark filter controls and sorting affordances.
- [x] Present benchmark rows in a dense, technical, scan-friendly table.
- [ ] Keep the benchmark view visually aligned with the mockup reference.

### Story detail pages
- [x] Build the story hero structure.
- [x] Add summary, key changes, benchmark notes, and source sections.
- [x] Add structured metadata blocks.
- [x] Add related story slots or placeholders if there is enough seeded content.

### Content seeding
- [x] Create representative seeded stories for the LLM models category.
- [x] Create representative seeded stories for the AI coding apps category.
- [x] Ensure seeded content exercises the full story schema.

### Mockup alignment
- [ ] Align the home route with `/docs/design/home_feed/`.
- [ ] Align the story detail route with `/docs/design/article_detail/`.
- [ ] Align the benchmarks route with `/docs/design/benchmarks_leaderboard/`.
- [ ] Align the AI coding apps surface with `/docs/design/tools_directory/`.

### Quality and UX
- [ ] Validate responsive behavior for desktop and mobile.
- [ ] Ensure typography and spacing remain strong across themes.
- [ ] Verify keyboard navigation and basic accessibility patterns.

### Phase 2 completion checklist
- [ ] Verify readers can browse both launch categories comfortably.
- [ ] Verify story cards and story pages present structured editorial information clearly.
- [ ] Verify the public experience feels like a focused news product rather than a placeholder scaffold.

## Phase 3: Admin Dashboard

### Admin architecture
- [ ] Define protected admin route layouts.
- [ ] Add authentication and authorization boundaries suitable for internal editorial access.
- [ ] Establish dashboard navigation and information architecture.

### Dashboard overview
- [ ] Implement the admin home page with key counts and activity summaries.
- [ ] Show draft, review, scheduled, and published counts.
- [ ] Show featured slots status and missing-content warnings.

### Posts management
- [ ] Build a posts table view.
- [ ] Add create, edit, duplicate, preview, and publish flows.
- [ ] Add story status management.
- [ ] Add slug, tag, category, and vendor assignment flows.

### Featured content management
- [ ] Build featured slots editing.
- [ ] Add ordering or placement controls for homepage content.
- [ ] Add validation so missing featured stories are visible before launch.

### Categories management
- [ ] Build category metadata editing.
- [ ] Support category page introduction content, labels, and presentation settings.

### Source and vendor management
- [ ] Build source records management.
- [ ] Build vendor or product records management.
- [ ] Support source status and provenance metadata fields.

### Benchmark management
- [ ] Build benchmark note entry and edit flows.
- [ ] Attach benchmark notes to stories.
- [ ] Allow benchmark metadata corrections without editing raw story copy.

### Activity and operational views
- [ ] Add an editorial activity stream.
- [ ] Prepare space for future ingestion candidate review.
- [ ] Virtualize long tables or activity lists when dataset size grows.

### Phase 3 completion checklist
- [ ] Verify an editor can manage what appears on the public site without touching code.
- [ ] Verify the dashboard supports repeated day-to-day editorial work.
- [ ] Verify structured content workflows are faster than manual file editing.

## Phase 4: Editorial Workflows

### Story lifecycle
- [ ] Define draft, review, scheduled, published, and archived states.
- [ ] Add transition rules and guardrails.
- [ ] Add validation for missing required fields before publish.

### Content model hardening
- [ ] Finalize the typed story schema.
- [ ] Finalize source, vendor, category, and benchmark schemas.
- [ ] Define required versus optional fields clearly.

### Editorial operations
- [ ] Add preview flows.
- [ ] Add publish scheduling only if it can be kept simple.
- [ ] Add revision notes or lightweight change tracking.
- [ ] Add publish confirmation and failure handling.

### Quality checks
- [ ] Validate source link presence and formatting.
- [ ] Validate uniqueness rules for slug and canonical source fields.
- [ ] Add benchmark note completeness rules where relevant.

### Workflow visibility
- [ ] Log editorial status transitions with Evlog.
- [ ] Expose useful operational signals in the admin dashboard.
- [ ] Surface validation failures clearly to editors.

### Phase 4 completion checklist
- [ ] Verify publishing is structured and reliable.
- [ ] Verify editors can see why a story cannot yet be published.
- [ ] Verify the app is prepared for higher-frequency content operations.

## Phase 5: Ingestion and Observability

### Source ingestion
- [ ] Define the first set of source adapters.
- [ ] Implement fetching for selected official sources.
- [ ] Store fetch status and provenance metadata.
- [ ] Add retry and failure handling rules.

### Normalization
- [ ] Convert raw source data into candidate story records.
- [ ] Normalize vendor, model, product, and source identifiers.
- [ ] Detect duplicate or near-duplicate incoming events.

### Candidate review flow
- [ ] Surface candidate stories inside the admin dashboard.
- [ ] Allow editors to accept, refine, or discard candidates.
- [ ] Preserve source references during editorial conversion.

### Benchmark and release metadata extraction
- [ ] Capture benchmark-related fields when available.
- [ ] Support structured comparison notes for major releases.

### Evlog coverage
- [ ] Log source fetch started, completed, failed, and retried events.
- [ ] Log parse successes and failures.
- [ ] Log candidate creation, rejection, acceptance, and publish actions.
- [ ] Add correlation data where useful for tracing ingestion-to-publish paths.

### Phase 5 completion checklist
- [ ] Verify the app can assist with discovery rather than relying only on manual entry.
- [ ] Verify editors can review machine-assisted candidates efficiently.
- [ ] Verify operational issues are visible through structured logs.

## Phase 6: Launch Readiness

### Quality and testing
- [ ] Add unit tests for critical domain logic.
- [ ] Add integration tests for the most important public and admin flows.
- [ ] Add end-to-end coverage for the core editorial path from create to publish.
- [ ] Verify dark and light theme behavior.

### Performance and UX
- [ ] Check route-level loading behavior.
- [ ] Verify page weight and perceived responsiveness.
- [ ] Validate mobile and desktop layouts.
- [ ] Remove unnecessary UI complexity that slipped in during implementation.

### Accessibility and resilience
- [ ] Review keyboard navigation.
- [ ] Review labels, focus states, and semantic structure.
- [ ] Verify empty, error, and loading states across public and admin routes.

### Operational readiness
- [ ] Review environment variable requirements.
- [ ] Review logging coverage and failure visibility.
- [ ] Review backup or recovery expectations for editorial data if applicable.

### Product readiness
- [ ] Verify seeded or live content quality.
- [ ] Verify featured content logic.
- [ ] Verify category separation and story metadata accuracy.
- [ ] Confirm out-of-scope features have not drifted into launch blocking work.

### Launch checklist
- [ ] Verify public routes are ready.
- [ ] Verify admin routes are ready.
- [ ] Verify the editorial workflow is usable.
- [ ] Verify source and benchmark handling is adequate for MVP.
- [ ] Verify formatting and linting commands are defined.
- [ ] Verify test commands are defined.
- [ ] Identify the deployment path.

## Parallel workstreams

### Product and editorial design
- [ ] Refine content model details.
- [ ] Define editorial taxonomy.
- [ ] Define homepage content hierarchy.
- [ ] Define benchmark presentation patterns.
- [ ] Define admin information architecture priorities.

### App platform
- [ ] Build the TanStack Start scaffold.
- [ ] Finalize route structure.
- [ ] Finalize the app shell.
- [ ] Finalize the theme system.
- [ ] Add shared providers.
- [ ] Add environment and config handling.

### Public frontend
- [ ] Build the home page.
- [ ] Build category pages.
- [ ] Build story pages.
- [ ] Validate responsive behavior.
- [ ] Polish reader-facing flows.

### Admin frontend
- [ ] Build the dashboard layout.
- [ ] Build tables and filters.
- [ ] Build forms and workflows.
- [ ] Build featured content controls.
- [ ] Build activity and review interfaces.

### Domain and data model
- [ ] Finalize the story schema.
- [ ] Finalize the category schema.
- [ ] Finalize the vendor schema.
- [ ] Finalize the source schema.
- [ ] Finalize the benchmark note schema.
- [ ] Finalize editorial lifecycle rules.

### Ingestion and automation
- [ ] Build source adapters.
- [ ] Build the normalization pipeline.
- [ ] Build duplicate handling.
- [ ] Build candidate review flows.

### Observability and quality
- [ ] Integrate Evlog.
- [ ] Harden error handling.
- [ ] Add tests.
- [ ] Run accessibility checks.
- [ ] Run performance reviews.
