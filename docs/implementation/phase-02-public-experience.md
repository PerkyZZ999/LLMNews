# Phase 2: Public Experience

## Goal
Build the first user-facing version of LLMNews as a fast, minimalist AI/tech news product covering two launch categories.

## Objectives
- Deliver the core reader journey.
- Make category navigation obvious.
- Establish the story presentation patterns used across the public site.

## Tasks

### Public route implementation
- Build the home page route.
- Build the LLM models category route.
- Build the benchmarks leaderboard route.
- Build the AI coding apps category route.
- Build the story detail route.
- Add a minimal about or methodology section only if it materially improves product credibility.

### Home page features
- Implement the lead story area.
- Implement the featured stories section.
- Implement the latest stories feed.
- Implement category signposting so readers can distinguish models from coding tools instantly.
- Add recency and release-type metadata on cards.

### Category pages
- Create category-specific listing layouts.
- Add vendor or product metadata previews.
- Add clear empty, loading, and error states.
- Design filtering only if it is lightweight and useful for MVP.

### Benchmark leaderboard
- Build the benchmark leaderboard layout.
- Add benchmark filter controls and sorting affordances.
- Present benchmark rows in a dense, technical, scan-friendly table.
- Keep the benchmark view visually aligned with the mockup reference.

### Story detail pages
- Build the story hero structure.
- Add summary, key changes, benchmark notes, and source sections.
- Add structured metadata blocks.
- Add related story slots or placeholders if there is enough seeded content.

### Content seeding
- Create representative seeded stories for the LLM models category.
- Create representative seeded stories for the AI coding apps category.
- Ensure seeded content exercises the full story schema.

### Mockup alignment
- Align the home route with `/docs/design/home_feed/`.
- Align the story detail route with `/docs/design/article_detail/`.
- Align the benchmarks route with `/docs/design/benchmarks_leaderboard/`.
- Align the AI coding apps surface with `/docs/design/tools_directory/`.

### Quality and UX
- Validate responsive behavior for desktop and mobile.
- Ensure typography and spacing remain strong across themes.
- Verify keyboard navigation and basic accessibility patterns.

## Deliverables
- public route set
- home page
- category pages
- story detail pages
- seeded content
- public layout polished for light and dark themes

## Dependencies
- Phase 1 foundation complete

## Exit criteria
- Readers can browse both launch categories comfortably.
- Story cards and story pages present structured editorial information clearly.
- The public experience feels like a focused news product rather than a placeholder scaffold.
