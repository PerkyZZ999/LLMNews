# LLMNews Tech Stack

## Stack summary
LLMNews is planned as a Bun-first, TypeScript-based TanStack Start application. The project should lean into the TanStack ecosystem wherever it provides the right primitive, especially for routing, data fetching, forms, virtualization, and admin-side state management.

This is not just a public news site. It is a public editorial product plus an internal admin application used to manage homepage content, stories, categories, featured items, sources, and future ingestion workflows.

## Core stack
- Bun
- TanStack Start
- TanStack Router
- TanStack Query
- TanStack Form
- TanStack Virtual
- TanStack Store
- TanStack DB as a later-stage candidate when the editorial data layer needs local-first or reactive sync patterns
- Vite
- React
- TypeScript
- Biome
- Evlog
- shadcn/ui with Base UI primitives via `@base-ui/react`

## Toolchain decisions

### Bun
Bun is the default JavaScript and TypeScript toolchain.

It should be used for:
- package management
- script execution
- local runtime tasks
- testing

Expected commands:
- `bun install`
- `bun run dev`
- `bun run build`
- `bun test`

Why Bun:
- fast installs and fast script execution
- one primary toolchain instead of fragmented Node tooling
- good fit for a modern TypeScript-first repository

### Vite
Vite remains part of the stack because TanStack Start is Vite-native.

Important distinction:
- Bun is the primary package manager, runtime, and test runner
- Vite is the application bundler and development server layer used by TanStack Start

This keeps the project Bun-first without fighting the framework's expected architecture.

### React and TypeScript
React and TypeScript are the UI and application language foundation.

Why:
- strong alignment with TanStack Start
- type-safe route, loader, and content modeling
- maintainable long-term architecture for both public and admin surfaces

### Biome
Biome is the formatter and linter.

Biome should cover:
- formatting
- linting
- import organization when configured

Why Biome:
- fast feedback loop
- less tooling overhead
- clean fit with a Bun-first workflow

## TanStack ecosystem policy
LLMNews should be TanStack-first, not only TanStack-compatible. When a problem is well-served by an official TanStack library, prefer it over adding a separate ecosystem dependency.

That does not mean every TanStack library must be forced into the codebase immediately. It means the project should use the right TanStack tool where it materially improves architecture or developer workflow.

## TanStack library roles

### TanStack Start
TanStack Start is the application framework and full-stack structure.

It should define:
- route organization
- server and client boundaries
- server functions
- loaders and mutations
- deployment-oriented application structure

Why it matters:
- the product will grow beyond static pages
- the admin panel needs server-backed workflows
- future ingestion and editorial tooling benefit from a full-stack routing model

### TanStack Router
TanStack Router is foundational because it underpins TanStack Start.

It should be used for:
- typed route definitions
- route layouts
- public route hierarchy
- protected admin route hierarchy
- search param modeling for filters and dashboards
- route-level data loading patterns

Routing expectations:
- use file-based routing conventions where appropriate
- structure public and admin areas cleanly
- keep admin routes behind authentication and authorization checks
- use typed search params for filters, sort order, and dashboard views

Planned route groups:
- public reader-facing routes
- admin routes
- authentication-related routes for internal editorial access

### TanStack Query
TanStack Query should be the default server-state layer.

It should power:
- story list fetching
- category page data
- post detail hydration patterns where appropriate
- admin dashboard data tables
- source status views
- benchmark records and related datasets
- mutation invalidation after editorial actions

Why it matters:
- caching and invalidation are critical once the admin panel starts editing live content
- TanStack Query works naturally with route loaders and server functions
- it reduces ad hoc fetch logic across both the public app and admin app

### TanStack Form
TanStack Form should be the default form system for internal editorial and admin workflows.

It should be used for:
- create and edit post flows
- homepage featured story management
- category metadata editing
- vendor or source record editing
- benchmark entry and correction workflows
- admin settings and display configuration

Why it matters:
- the admin panel will be form-heavy
- typed field modeling is important for structured content
- it fits better than loosely managed form state as the dashboard grows

### TanStack Virtual
TanStack Virtual should be used where list density or large datasets justify it.

Primary admin use cases:
- large post tables
- source event logs
- benchmark datasets
- ingestion queue views
- audit and activity timelines

It is less important for the public news pages early on, but it should be available for internal operational screens where long lists are expected.

### TanStack Store
TanStack Store is approved for lightweight, fine-grained client state that does not belong in server-state caching.

Good uses:
- admin UI state shared across dashboard panels
- table display preferences
- temporary editorial selection state
- draft-side local interaction state
- command palette or workspace-level UI state

It should not replace TanStack Query for server data.

### TanStack DB
TanStack DB should be treated as a strategic option, not a forced day-one dependency.

It becomes relevant if the product evolves toward:
- local-first editorial workflows
- reactive admin datasets
- complex optimistic updates
- sync-heavy operational tooling
- richer collaborative content management

Recommendation:
- do not block MVP delivery on TanStack DB adoption
- keep the content and admin architecture compatible with adopting it later if the workflow complexity justifies it

## Admin panel architecture
The admin panel is a first-class requirement for the product.

Its purpose is to manage what appears on the public site and how it is organized.

### Core admin capabilities
- create, edit, review, and publish posts
- manage homepage featured stories and ordering
- manage category landing content
- manage tags, vendors, products, and source records
- track benchmark metadata attached to stories
- review ingestion candidates and source health later
- manage selected frontend presentation settings without code edits

### Planned admin sections
- Dashboard overview
- Posts
- Categories
- Featured content
- Sources
- Benchmarks
- Media or assets if needed later
- Settings
- Activity and logs

### Dashboard goals
The admin interface should help answer:
- what is drafted, reviewed, and published
- what should be featured on the public homepage
- which sources failed or need review
- which benchmarks are missing context
- what changed recently in the editorial workflow

## Public app architecture goals
The public-facing product should remain fast, minimal, and editorial.

Requirements:
- fast route transitions
- clear category separation
- structured post pages
- theme support with light and dark parity
- source-linked stories
- strong information hierarchy on desktop and mobile

## Observability with Evlog
Evlog is the structured logging layer for operational visibility.

It should cover:
- admin publish actions
- draft updates and status transitions
- source ingestion events
- normalization events
- failed source fetches
- benchmark extraction or validation failures
- homepage feature changes
- audit-like workflow signals that matter operationally

Why Evlog:
- speed matters for a news product
- editorial operations need visibility when multiple workflows touch the same content
- future ingestion systems should not be opaque

## Component system
The UI should use shadcn/ui components generated for Base UI, backed by `@base-ui/react` primitives.

Implementation rule:
- use Base UI-compatible shadcn components
- prefer the `render` prop pattern where Base UI requires it
- do not assume Radix-style `asChild` APIs

Why this matters:
- accessibility and composability without building every component from scratch
- a flexible design system for both the public site and admin dashboard
- consistency across light and dark themes

## Data and domain modeling expectations
Even the first implementation should assume structured editorial data.

Expected domain concepts:
- story
- category
- vendor
- model or tool
- source
- benchmark snapshot
- featured placement
- editorial status
- publish timestamp
- admin activity event

These concepts should shape both route design and server-side logic.

## UX requirements
The stack must support two distinct but related interfaces.

### Public interface
- minimalist
- AI and tech editorial feel
- fast scanning
- clean typography
- dark and light mode support

### Admin interface
- information-dense without being cluttered
- fast to operate repeatedly
- optimized for editors and operators
- clear tables, forms, filters, and activity views

## Implementation constraints
- Bun commands should be the documented default
- TanStack Start should drive route and server structure
- TanStack Query and TanStack Form should be standard choices, not optional add-ons
- TanStack Virtual should be used for dense admin lists where needed
- TanStack Store may be used for local dashboard state where it improves ergonomics
- TanStack DB should remain an intentional later adoption unless the data workflow clearly requires it earlier
- Base UI patterns must be respected when using shadcn components
- Evlog should be added early for admin and ingestion observability

## What this stack is optimizing for
- fast product iteration
- type safety
- clear route and data architecture
- scalable editorial workflows
- strong internal tooling
- observability
- a clean, distinctive reading experience
