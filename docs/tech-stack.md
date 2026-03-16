# LLMNews tech stack

## Chosen stack
- **Bun** for package management and runtime in normal development
- **TanStack Router** for typed routing and scalable navigation
- **Evlog** for structured logging around ingestion and publishing events
- **Base UI primitives** with **shadcn-inspired styling** for a clean, accessible component layer
- **Vite + React + TypeScript** for a fast front-end developer experience

## Initial implementation notes
The current repository environment does not ship with Bun preinstalled, so the scaffold is authored to stay Bun-friendly while remaining buildable with standard Node tooling in CI-like environments.

## UI direction
- Light-first palette
- Dense information hierarchy
- Minimal ornamentation
- AI-focused language and cards
