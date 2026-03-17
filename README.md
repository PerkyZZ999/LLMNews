# LLMNews

LLMNews is a Bun-first web application focused on breaking news for LLM model releases and AI coding tools. The product goal is simple: publish clear, fast, well-structured updates on important launches, benchmark results, and product changes before general tech coverage catches up.

The initial editorial scope is intentionally narrow:
- LLM model news
- AI coding app news

At launch, LLMNews is planned as a minimalist, AI/tech-focused reading experience with light and dark themes, fast navigation, and strong information hierarchy instead of heavy visual noise.

The application is planned with two main surfaces:
- a public news experience
- an internal admin dashboard for managing what appears on the public site

## Documentation
- `/docs/product-overview.md` defines the product, audience, editorial scope, MVP, and design direction.
- `/docs/tech-stack.md` defines the approved engineering stack and implementation constraints.
- `/docs/implementation-plan.md` breaks the project into delivery phases with concrete milestones.
- `/docs/implementation/` contains the detailed end-to-end execution plans and workstreams.
- `/docs/design/` contains the mockup reference screens and HTML prototypes for the public UI direction.

## Planned stack
- Bun for package management, runtime, scripts, and tests
- TanStack Start for the full-stack React application structure
- TanStack Router, Query, Form, Virtual, and Store where each one fits the problem
- TanStack DB kept as a later adoption candidate if the editorial data workflow needs it
- Vite as the application bundling layer used by TanStack Start
- Biome for formatting and linting
- Evlog for structured application and workflow logging
- shadcn/ui on top of `@base-ui/react` primitives for the component system

## Product direction
- Publish model release news quickly, with benchmark and source context
- Track AI coding tools such as Cursor, GitHub Copilot, OpenCode, and similar products
- Keep articles concise, skimmable, and source-linked
- Manage featured content, categories, and publishing workflows through a dedicated admin panel
- Start with two categories only, then expand once the editorial workflow is stable

## Getting started
The implementation is still being defined through the documentation in this repository. The project is expected to use Bun commands by default once the scaffold is in place.
