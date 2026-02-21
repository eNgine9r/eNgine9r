# eNgine9r Commerce Hub

Monorepo with two applications:
- `apps/web` - Next.js dashboard UI
- `apps/api` - Express + SQLite API

## Live Web Version

- GitHub Pages: https://engine9r.github.io/eNgine9r/)

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

Optional env for frontend:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```
