# Run Roro OS locally

## Fast path (Docker)
```bash
cd infra
docker compose up --build
```

- API: `http://127.0.0.1:4010`
- Postgres: `127.0.0.1:5432`
- Redis: `127.0.0.1:6379`

Open web console:
- `apps/web/index.html`
- optional API param: `?api=http://127.0.0.1:4010`

## Manual path
### 1) API
```bash
cd apps/api
npm install
npm run dev
```

### 2) Worker
```bash
cd apps/worker
npm install
npm run dev
```

### 3) Web console
Open `apps/web/index.html` in browser.

Then submit commands and watch status change from `queued` to `done`.
