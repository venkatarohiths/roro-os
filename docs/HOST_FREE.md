# Host Roro OS for free (quick path)

## 1) Web UI (free via GitHub Pages)
This repo can publish `apps/web` to GitHub Pages.

Live URL pattern:
`https://<username>.github.io/roro-os/`

You can pass API endpoint via query param:
`?api=https://<your-api-host>`

## 2) API + Worker (free via Render)
Use `render.yaml` in this repo for one-click blueprint deploy.

Steps:
1. Go to Render dashboard -> New -> Blueprint
2. Select this repo
3. Render reads `render.yaml` and creates:
   - `roro-api` (web service)
   - `roro-worker` (background worker)

> Note: Free tier may sleep after inactivity.

## 3) Connect UI to API
Open:
`https://<username>.github.io/roro-os/?api=https://roro-api.onrender.com`
