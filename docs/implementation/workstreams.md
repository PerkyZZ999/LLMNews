# Cross-Cutting Workstreams

## Purpose
These workstreams help split the project into parallel areas without losing the phase-based delivery order.

## Workstream 1: Product and editorial design
- refine content model details
- define editorial taxonomy
- define homepage content hierarchy
- define benchmark presentation patterns
- define admin information architecture priorities

## Workstream 2: App platform
- TanStack Start scaffold
- route structure
- app shell
- theme system
- shared providers
- environment and config handling

## Workstream 3: Public frontend
- home page
- category pages
- story pages
- responsive behavior
- visual polish for reader-facing flows

## Workstream 4: Admin frontend
- dashboard layout
- tables and filters
- forms and workflows
- featured content controls
- activity and review interfaces

## Workstream 5: Domain and data model
- story schema
- category schema
- vendor schema
- source schema
- benchmark note schema
- editorial lifecycle rules

## Workstream 6: Ingestion and automation
- source adapters
- normalization pipeline
- duplicate handling
- candidate review flows

## Workstream 7: Observability and quality
- Evlog integration
- error handling
- tests
- accessibility checks
- performance reviews

## Suggested ownership model
If multiple people contribute, the following split keeps boundaries clear:
- one owner for app platform and shared architecture
- one owner for public UX
- one owner for admin UX and workflows
- one owner for domain model and ingestion logic
- shared ownership for quality and release readiness

## Tracking recommendation
Track tasks at three levels:
- phase milestone
- workstream task
- release blocker

This keeps the roadmap readable while still exposing the work needed to ship the project.
