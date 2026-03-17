# Phase 5: Ingestion and Observability

## Goal
Add the first semi-automated discovery and operational visibility capabilities to support timely news coverage.

## Objectives
- Monitor selected sources.
- Normalize incoming release information.
- Make important operational events visible and auditable.

## Tasks

### Source ingestion
- Define the first set of source adapters.
- Implement fetching for selected official sources.
- Store fetch status and provenance metadata.
- Add retry and failure handling rules.

### Normalization
- Convert raw source data into candidate story records.
- Normalize vendor, model, product, and source identifiers.
- Detect duplicate or near-duplicate incoming events.

### Candidate review flow
- Surface candidate stories inside the admin dashboard.
- Allow editors to accept, refine, or discard candidates.
- Preserve source references during editorial conversion.

### Benchmark and release metadata extraction
- Capture benchmark-related fields when available.
- Support structured comparison notes for major releases.

### Evlog coverage
- Log source fetch started, completed, failed, and retried events.
- Log parse successes and failures.
- Log candidate creation, rejection, acceptance, and publish actions.
- Add correlation data where useful for tracing ingestion-to-publish paths.

## Deliverables
- initial source adapters
- normalized candidate story pipeline
- candidate review screens
- ingestion-related operational logs

## Dependencies
- Phase 3 admin dashboard
- Phase 4 editorial workflows

## Exit criteria
- The app can assist with discovery rather than relying only on manual entry.
- Editors can review machine-assisted candidates efficiently.
- Operational issues are visible through structured logs.
