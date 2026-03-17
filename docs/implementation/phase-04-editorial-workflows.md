# Phase 4: Editorial Workflows

## Goal
Turn the app from a set of screens into a dependable editorial system with explicit workflow states and validation.

## Objectives
- Formalize the editorial lifecycle.
- Harden structured content and validation rules.
- Improve reliability for frequent publishing.

## Tasks

### Story lifecycle
- Define draft, review, scheduled, published, and archived states.
- Add transition rules and guardrails.
- Add validation for missing required fields before publish.

### Content model hardening
- Finalize the typed story schema.
- Finalize source, vendor, category, and benchmark schemas.
- Define required versus optional fields clearly.

### Editorial operations
- Add preview flows.
- Add publish scheduling only if it can be kept simple.
- Add revision notes or lightweight change tracking.
- Add publish confirmation and failure handling.

### Quality checks
- Validate source link presence and formatting.
- Validate uniqueness rules for slug and canonical source fields.
- Add benchmark note completeness rules where relevant.

### Workflow visibility
- Log editorial status transitions with Evlog.
- Expose useful operational signals in the admin dashboard.
- Surface validation failures clearly to editors.

## Deliverables
- explicit editorial states
- content validation rules
- publish guardrails
- preview flow
- editorial activity visibility

## Dependencies
- Phase 3 admin dashboard complete enough to host workflow controls

## Exit criteria
- Publishing is structured and reliable.
- Editors can see why a story cannot yet be published.
- The app is prepared for higher-frequency content operations.
