# LLMNews Design References

## Purpose
This directory contains the current mockup reference set for the public-facing product UI.

These files are not the application implementation. They are design references that define visual direction, layout hierarchy, density, and component tone.

## Reference screens

### Home feed
- Path: `/docs/design/home_feed/`
- Files: `screen.png`, `code.html`
- Purpose: Defines the compact high-signal home feed, global header treatment, category controls, and feed-row density.

### Article detail
- Path: `/docs/design/article_detail/`
- Files: `screen.png`, `code.html`
- Purpose: Defines the editorial article layout, technical content treatment, benchmark table presentation, and article sidebar structure.

### Benchmarks leaderboard
- Path: `/docs/design/benchmarks_leaderboard/`
- Files: `screen.png`, `code.html`
- Purpose: Defines the benchmark comparison surface, leaderboard table density, filters, and technical data-view styling.

### Tools directory
- Path: `/docs/design/tools_directory/`
- Files: `screen.png`, `code.html`
- Purpose: Defines the AI coding tools browsing surface and the visual language for the AI coding apps category.

## Implementation guidance
- Treat these mockups as the visual reference for the public UI.
- Preserve their information hierarchy, density, and editorial tone.
- Preserve the restrained blue-accent visual system.
- Preserve the dark, technical atmosphere while also implementing strong light-theme parity in the actual application.
- Translate recurring styles into reusable design tokens and UI primitives during implementation.

## Scope note
These mockups currently describe public-facing surfaces only. Admin dashboard UI should still align with the product tone, but it does not need to mimic the public layouts one-to-one.
