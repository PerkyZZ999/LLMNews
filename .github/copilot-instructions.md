# GitHub Copilot Instructions

## Current Repository State
This repository is currently documentation-first. The main source of truth is the markdown documentation in `/docs`.

Before generating implementation code, read these files first:
- `/docs/product-overview.md`
- `/docs/tech-stack.md`
- `/docs/implementation-plan.md`
- `/docs/implementation/README.md` and the detailed phase plans when relevant
- `/docs/design/` mockups when doing public UI, design system, or route-surface work

If package manifests, config files, or source files are added later, detect their exact versions and patterns before using framework-specific APIs. Do not invent versions that are not present in the repository.

## Product Scope
LLMNews is a web application with two surfaces:
- a public news experience
- an internal admin dashboard for managing the public site

The launch scope is intentionally narrow and should stay narrow unless the user explicitly expands it.

Initial categories:
- LLM model and benchmark news
- AI coding app news

Avoid drifting into unrelated product areas such as broad AI news, public community features, or heavy personalization during MVP work unless the user explicitly changes scope.

## Stack Expectations
When scaffolding or implementing the app, prefer this stack:
- Bun for package management, scripts, runtime tasks, and tests
- TanStack Start as the application framework
- TanStack Router for route structure and typed navigation
- TanStack Query for server-state data access and mutation invalidation
- TanStack Form for admin and editorial forms
- TanStack Virtual for dense lists or large admin tables when needed
- TanStack Store only for lightweight client UI state that does not belong in server-state caching
- TanStack DB only if the workflow complexity clearly justifies it later
- Vite as the bundling layer used by TanStack Start
- Biome for formatting and linting
- Evlog for structured operational logging
- shadcn/ui components backed by `@base-ui/react` primitives

## Architecture Guidance
Maintain a clear separation between:
- public reader-facing routes
- protected admin routes
- shared domain models and utilities
- ingestion and editorial workflow logic

Treat structured editorial data as a first-class concern. Prefer explicit models for:
- story
- category
- vendor
- source
- benchmark note
- featured placement
- editorial status

The admin dashboard is not optional. It is part of the core product and should be able to manage homepage content, category presentation, posts, sources, and benchmark metadata without code edits.

## Routing and Data Patterns
Use TanStack Start and TanStack Router conventions for route organization.

Expected route groups:
- public routes
- admin routes
- auth-related routes if internal access control is implemented

Use TanStack Query as the default approach for server-state access. Do not replace server-state caching with local client stores.

Use TanStack Form for create and edit flows in the admin area.

Use TanStack Virtual only where list density justifies it, such as large post tables, activity logs, or ingestion candidate lists.

## UI and Design Guidance
The product should feel minimalist, technical, and editorial.

The current public UI reference set lives in `/docs/design/` and should be treated as the primary mockup source for visual direction until replaced.

Public UI goals:
- fast scanning
- strong information hierarchy
- calm AI and tech feel
- light and dark theme parity

Reference surfaces currently available:
- home feed
- article detail
- benchmarks leaderboard
- tools directory

Admin UI goals:
- information-dense without clutter
- efficient repeated use
- clear tables, filters, forms, and activity views

Do not build a generic SaaS dashboard aesthetic for the public site.

When the mockups and generic conventions disagree, prefer the mockup hierarchy, density, and visual language unless the user explicitly asks for a redesign.

## Base UI and shadcn Guidance
Assume the component layer uses Base UI-compatible shadcn patterns, not Radix UI assumptions.

When implementing components backed by Base UI:
- prefer the `render` prop pattern where required
- do not assume Radix-style `asChild` usage
- keep components accessible and composable

## Observability Guidance
Introduce Evlog early in areas that matter operationally.

Important events to log:
- editorial status changes
- publish actions
- source fetch and parse outcomes
- benchmark extraction failures
- homepage featured-content changes

Logging should be structured and useful for debugging workflow issues, not only console output.

## Documentation and Planning Guidance
When adding or changing implementation work:
- keep `/docs` aligned with major architectural decisions
- update the detailed implementation plans when scope changes materially
- prefer small, explicit documentation updates over vague roadmap language

## Consistency Rules
When code exists, prefer consistency with the existing repository over generic external best practices.

Until more implementation code exists:
- treat the documentation as the authoritative product and architecture specification
- do not introduce libraries outside the approved stack without a clear reason
- do not assume features or integrations that are not described in the repository docs or explicitly requested by the user

## Workflow Expectations for Copilot
Before generating substantial code:
1. Read the relevant product and implementation docs.
2. Detect exact tool and library versions from project files if they exist.
3. Follow the documented Bun-first and TanStack-first direction.
4. Preserve clear separation between the public product and the admin product.
5. Keep the MVP scope disciplined.
