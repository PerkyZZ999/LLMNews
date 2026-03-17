# LLMNews Implementation Plan

## Detailed planning set
This file is the top-level roadmap. The detailed execution plans live in:
- `/docs/implementation/README.md`
- `/docs/implementation/backlog.md`
- `/docs/design/README.md`
- `/docs/implementation/phase-01-foundation.md`
- `/docs/implementation/phase-02-public-experience.md`
- `/docs/implementation/phase-03-admin-dashboard.md`
- `/docs/implementation/phase-04-editorial-workflows.md`
- `/docs/implementation/phase-05-ingestion-observability.md`
- `/docs/implementation/phase-06-launch-readiness.md`
- `/docs/implementation/workstreams.md`

## Planning goal
This plan defines how LLMNews should move from product documentation to a working editorial web application with two primary surfaces:
- a public news experience
- an internal admin dashboard used to manage public content and future operational workflows

The roadmap is deliberately staged so the project does not overbuild too early, while still leaving room for a strong internal toolchain and later ingestion automation.

## Phase 0: Product and architecture definition
This phase establishes a shared understanding of the product and stack.

### Objectives
- lock the initial editorial scope to two categories
- define the product structure and user experience goals
- define the Bun-first and TanStack-first engineering direction
- document the admin panel as a first-class product requirement

### Deliverables
- updated product overview
- updated tech stack specification
- updated implementation roadmap
- aligned README summary

### Exit criteria
- the product direction is clear
- the TanStack library roles are documented
- the admin panel is part of the architecture, not a future footnote

## Phase 1: Application scaffold and shared foundations
This phase creates the core project structure for both the public app and the admin area.

### Objectives
- scaffold TanStack Start with React and TypeScript
- configure Bun scripts and Biome
- establish Base UI-backed shadcn components
- set up shared route, query, theme, and layout foundations
- translate the mockup design language in `/docs/design/` into reusable application tokens and primitives

### Expected work
- set up TanStack Start
- configure TanStack Router conventions
- wire TanStack Query into route loading patterns
- prepare TanStack Form for admin-facing forms
- prepare TanStack Store for lightweight dashboard UI state if needed
- configure theme support for light and dark modes
- add Evlog bootstrap points for future workflow logging

### Foundation deliverables
- public route tree
- protected admin route tree
- shared app shell
- shared design tokens and theme primitives
- first batch of reusable UI components

### Exit criteria
- the repository has a working full-stack app skeleton
- public and admin areas are structurally separated
- the main libraries are wired in coherently

## Phase 2: Public reader-facing MVP
This phase builds the first usable version of the public product.

### Objectives
- create a clean, fast public reading experience
- support the two launch categories clearly
- establish the core story presentation model

### Planned public routes
- `/`
- `/models`
- `/benchmarks`
- `/ai-coding-apps`
- `/posts/$slug`

### Public deliverables
- home page
- category pages
- benchmark leaderboard page
- post detail pages
- featured stories section
- latest news feed
- benchmark or comparison callout blocks
- light and dark theme support

### Content deliverables
- seeded example stories for both categories
- structured story cards with metadata
- source link sections
- clear release-type labeling

### Design implementation note
The public-facing MVP should follow the mockup reference set in `/docs/design/`, especially for:
- home feed density and hierarchy
- article detail structure
- benchmark leaderboard presentation
- tools-directory layout language for the AI coding apps surface

### Exit criteria
- readers can browse the product comfortably on desktop and mobile
- the interface reflects the intended minimalist AI and tech editorial direction
- the public information architecture is stable enough for real content entry

## Phase 3: Admin dashboard MVP
This phase introduces the internal dashboard used to manage what appears on the public site.

### Objectives
- build an editorial admin panel
- enable structured content management without code edits
- make homepage and category presentation manageable from the dashboard

### Planned admin sections
- Dashboard overview
- Posts
- Categories
- Featured content
- Sources
- Benchmarks
- Settings
- Activity

### Admin capabilities for the first version
- create, edit, and publish posts
- manage slugs, tags, and editorial metadata
- assign stories to categories
- control homepage featured stories and ordering
- edit category presentation content
- manage vendor, product, and source records
- attach benchmark notes to stories

### TanStack responsibilities in the admin panel
- TanStack Query for tables, detail views, and mutations
- TanStack Form for create and edit flows
- TanStack Virtual for large tables and activity lists
- TanStack Store for local dashboard UI state when needed

### Exit criteria
- an editor can manage the public-facing content from the admin dashboard
- the homepage and category experience can be changed without code changes
- the admin information architecture is workable for repeated daily use

## Phase 4: Structured editorial workflows
This phase hardens the content model and editorial operations.

### Objectives
- move from simple post editing to a more deliberate publishing workflow
- standardize structured data across the product
- prepare for higher publishing frequency

### Expected work
- define typed story and source schemas
- add status transitions such as draft, review, scheduled, and published
- add validation rules for content completeness
- add audit-friendly workflow events
- support richer benchmark metadata and supporting fields

### Exit criteria
- content is stored and rendered consistently
- editorial workflow states are explicit
- the system is ready for partial automation

## Phase 5: Ingestion and normalization pipeline
This phase adds source monitoring and normalization for faster news discovery.

### Objectives
- ingest important sources automatically where it makes sense
- normalize incoming events into a common editorial model
- support faster publication without lowering quality

### Expected work
- add source adapters for selected vendors and products
- store source provenance and fetch status
- normalize release events into a shared structure
- detect duplicates or conflicting inputs
- surface candidate stories inside the admin dashboard

### Priority source groups
- official model vendor blogs and release pages
- research lab announcements
- official changelogs for AI coding tools
- primary launch channels where they are reliable sources

### Evlog instrumentation focus
- source fetch started and completed
- source fetch failed
- parse succeeded and failed
- candidate story created
- publish status changed
- homepage feature placement changed

### Exit criteria
- the product has the basis for timely semi-automated coverage
- operational workflows are observable
- editors can review candidate stories efficiently

## Phase 6: Depth, comparison, and product differentiation
This phase adds richer value beyond simple posting.

### Objectives
- improve story utility
- deepen benchmark and comparison context
- increase repeat-visit value

### Expected work
- richer benchmark summaries
- comparison modules for major model releases
- release history views for important tools and vendors
- better related-story linking
- stronger search and taxonomy later if justified

### Exit criteria
- LLMNews provides more than headline aggregation
- the product becomes meaningfully differentiated from generic AI news coverage

## MVP boundaries
To keep execution disciplined, the early product should avoid:
- broad AI coverage outside the two main categories
- public community features and comments
- public user account complexity early on
- overbuilt CMS complexity before the editorial workflow proves its needs
- unnecessary dependencies when TanStack libraries already fit the problem

## Immediate next steps
1. Scaffold the TanStack Start project with Bun, Biome, and the core TanStack libraries.
2. Build the shared layout and theme system for both public and admin surfaces.
3. Implement the public MVP routes and seeded structured content.
4. Implement the admin dashboard routes, forms, and content management flows.
5. Add Evlog in the parts of the app that will later support editorial and ingestion operations.
