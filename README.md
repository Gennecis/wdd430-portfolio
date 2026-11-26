# WDD 430 Portfolio – Pascal Okezie

A personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS.

**Live site:** https://wdd430-portfolio-swart-five.vercel.app/

## Pages

- `/` – Home: portfolio projects (`ProjectList` → `ProjectCard`)
- `/about` – About: background and technical skills (`SkillCard`)
- `/contact` – Contact information
- `/projects` – All projects with search (`?query=`) and pagination (`?page=`), inside a nested layout for the projects section
- `/projects/opensource` and `/projects/school` – Projects filtered by type, with loading skeletons while data streams in
- `/api/hello` – Simple API route that returns JSON
- `/api/projects` – Projects as JSON. Optional `?type=opensource` or `?type=school` filter
- `/api/projects/[id]` – One project as JSON. Returns 400 for a non-numeric id and 404 when not found

## Data

Projects are stored in a Neon Postgres database and read with `@vercel/postgres` (`lib/projects-db.ts`). The app reads `POSTGRES_URL` from `.env.local`. With the Vercel project linked, pull it with:

```bash
npx vercel env pull .env.local
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
