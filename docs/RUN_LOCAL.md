# Run Roro OS locally (real services)

## 1) API
```bash
cd apps/api
npm install
npm run dev
```
API runs at `http://127.0.0.1:4010`

## 2) Worker
```bash
cd apps/worker
npm install
npm run dev
```
Worker polls queued commands and marks them running -> done.

## 3) Web console
Open `apps/web/index.html` in browser.

Then submit commands and watch status change from `queued` to `done`.
