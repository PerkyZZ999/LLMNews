# Phase 3: Admin Dashboard

## Goal
Build the internal dashboard that manages the public site without code edits.

## Objectives
- Enable structured content management.
- Give editors direct control over homepage and category presentation.
- Establish the first operational interface for the product.

## Tasks

### Admin architecture
- Define protected admin route layouts.
- Add authentication and authorization boundaries suitable for internal editorial access.
- Establish dashboard navigation and information architecture.

### Dashboard overview
- Implement the admin home page with key counts and activity summaries.
- Show draft, review, scheduled, and published counts.
- Show featured slots status and missing-content warnings.

### Posts management
- Build a posts table view.
- Add create, edit, duplicate, preview, and publish flows.
- Add story status management.
- Add slug, tag, category, and vendor assignment flows.

### Featured content management
- Build featured slots editing.
- Add ordering or placement controls for homepage content.
- Add validation so missing featured stories are visible before launch.

### Categories management
- Build category metadata editing.
- Support category page introduction content, labels, and presentation settings.

### Source and vendor management
- Build source records management.
- Build vendor or product records management.
- Support source status and provenance metadata fields.

### Benchmark management
- Build benchmark note entry and edit flows.
- Attach benchmark notes to stories.
- Allow benchmark metadata corrections without editing raw story copy.

### Activity and operational views
- Add an editorial activity stream.
- Prepare space for future ingestion candidate review.
- Virtualize long tables or activity lists when dataset size grows.

## TanStack responsibilities
- Use TanStack Query for lists, detail queries, and mutations.
- Use TanStack Form for all create and edit flows.
- Use TanStack Virtual for dense long lists.
- Use TanStack Store only for local dashboard UI state that does not belong in server-state caching.

## Deliverables
- admin route tree
- dashboard overview
- posts management screens
- featured content management screens
- category management screens
- source and vendor management screens
- benchmark management screens
- activity view

## Dependencies
- Phase 1 foundation complete
- Phase 2 public data and story presentation patterns available

## Exit criteria
- An editor can manage what appears on the public site without touching code.
- The dashboard supports repeated day-to-day editorial work.
- Structured content workflows are faster than manual file editing.
