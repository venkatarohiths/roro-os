# Roro OS

A production-grade assistant platform designed for daily use at scale.

## Vision
Roro OS is a full-stack assistant ecosystem with:
- **Web app** (user-facing control center)
- **API service** (auth, orchestration, user state)
- **Worker service** (async jobs, scheduling, ingestion)
- **Shared package** (types, validation, contracts)
- **Infra layer** (deployment + observability)

## Initial Product Direction
**Daily Copilot for operators/founders**:
1. Unified inbox + actionable summaries
2. Task execution workflows (message, schedule, file ops)
3. Proactive reminders and growth loops
4. Analytics dashboard for saved time and throughput

## Architecture (v1)
- Frontend: Next.js
- API: Fastify + TypeScript
- Worker: BullMQ / queue-based jobs
- DB: Postgres
- Cache/queue: Redis
- Auth: OAuth + session tokens
- Observability: OpenTelemetry + structured logs

## Repository layout
- `apps/web` – UI
- `apps/api` – HTTP API
- `apps/worker` – background jobs
- `packages/shared` – shared contracts/types
- `infra` – deployment manifests
- `docs` – product, architecture, ADRs

## Current phase
Phase 0: Product/market architecture and execution plan.

## Cadence
- Hourly concise progress updates
- One high-impact improvement per cycle
