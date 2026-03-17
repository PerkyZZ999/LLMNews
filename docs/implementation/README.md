# LLMNews Execution Plan

## Purpose
This planning set turns the high-level roadmap into an execution package that can be used to build LLMNews end-to-end.

It is organized in two ways:
- by phase, for delivery order
- by workstream, for assigning and tracking parallel implementation areas

## Planning principles
- Build the public product and admin product as parts of one system.
- Keep the first release tightly scoped to two content categories.
- Use Bun and the approved TanStack stack by default.
- Treat structured editorial data as a first-class concern from the start.
- Add Evlog early enough that editorial and ingestion workflows are observable.
- Avoid premature complexity in areas that are explicitly later-stage, such as TanStack DB or broad personalization.
- Use `/docs/design/` as the active mockup reference set for public UI implementation until a newer design source replaces it.

## Delivery order
1. Phase 1: Foundation
2. Phase 2: Public experience
3. Phase 3: Admin dashboard
4. Phase 4: Editorial workflows
5. Phase 5: Ingestion and observability
6. Phase 6: Launch readiness

## Detailed plans
- [Implementation backlog](./backlog.md)
- [Foundation](./phase-01-foundation.md)
- [Public experience](./phase-02-public-experience.md)
- [Admin dashboard](./phase-03-admin-dashboard.md)
- [Editorial workflows](./phase-04-editorial-workflows.md)
- [Ingestion and observability](./phase-05-ingestion-observability.md)
- [Launch readiness](./phase-06-launch-readiness.md)
- [Cross-cutting workstreams](./workstreams.md)

## Suggested execution rhythm
Use short delivery cycles and keep each cycle focused on user-visible progress or operational capability.

Use [the backlog](./backlog.md) as the operational checklist and use the phase documents for scope, intent, and exit criteria.

Suggested cadence:
- complete one foundation slice that unblocks multiple later tasks
- complete one public-facing slice
- complete the admin capability required to manage that slice
- close quality gaps before moving deeper into automation

## Definition of done for the project
LLMNews should be considered end-to-end ready for initial launch when:
- the public site supports both launch categories clearly
- the admin dashboard can manage the public experience without code edits
- structured stories, sources, and benchmark notes are supported
- the app runs on the approved Bun-first stack
- formatting, linting, and test workflows are defined
- core editorial and ingestion-related events are observable through Evlog
- the MVP scope remains disciplined and does not drift into unrelated features
