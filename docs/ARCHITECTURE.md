# Architecture — Roro OS (v1)

## Services
- **Web (Next.js):** UI, auth flows, command console
- **API (Fastify):** user state, orchestration, integration gateways
- **Worker:** queue consumers, scheduled jobs, retries
- **Shared:** schemas, DTOs, event contracts

## Data Flow
1. User issues command in web.
2. API validates + stores command.
3. API enqueues execution job.
4. Worker executes integration adapters.
5. Status/events stream back to API.
6. Web updates in real-time.

## Reliability
- Idempotent job execution keys
- Retry with backoff + dead-letter queues
- Circuit breakers for external API failures
- Structured audit trail for each task

## Security
- Least-privilege OAuth scopes
- Encrypted secrets at rest
- Role-based access controls
- PII-minimized logging

## Observability
- Traces across web/api/worker
- Queue depth + failure rate dashboards
- Alerting on latency and error spikes
