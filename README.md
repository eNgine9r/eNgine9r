# eNgine9r Commerce Hub

Monorepo with two applications:
- `apps/web` - Next.js dashboard UI
- `apps/api` - Express + SQLite API

## Key Features

- Dashboard, orders, products, advertising, and expenses modules
- Language switcher: Ukrainian <-> English
- Theme switcher: Light <-> Dark (saved in `localStorage`)
- Static deployment for `apps/web` via GitHub Pages
- Configurable API CORS via environment variables

## Live Web Version

- GitHub Pages: https://engine9r.github.io/eNgine9r/

After each push to `main` (changes in `apps/web/**`), GitHub Actions deploys the web app automatically.

## Repository Structure

`apps/web`
- Frontend application (Next.js 14, React 18, Tailwind CSS)

`apps/api`
- Backend application (Express + SQLite)
- Runtime database files are stored in `apps/api/data` (ignored by git)

## Local Run

API:
```bash
cd apps/api
npm install
npm run dev
```

WEB:
```bash
cd apps/web
npm install
npm run dev
```

## Environment Variables

API (`apps/api/.env`):
```bash
PORT=4000
DB_PATH=./data/db.sqlite
CORS_ORIGIN=http://localhost:3000
```

WEB (`apps/web/.env.local`):
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
NEXT_PUBLIC_DEMO_MODE=false
```
