# WDD 430 Portfolio – Pascal Okezie

A personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS.

**Live site:** https://wdd430-portfolio-swart-five.vercel.app/

## Pages

- `/` – Home: portfolio projects (`ProjectList` → `ProjectCard`)
- `/about` – About: background and technical skills (`SkillCard`)
- `/contact` – Contact information
- `/projects` – All projects, with a nested layout for the projects section
- `/projects/opensource` and `/projects/school` – Projects filtered by type
- `/api/hello` – Simple API route that returns JSON
- `/api/projects` – Projects as JSON. Optional `?type=opensource` or `?type=school` filter
- `/api/projects/[id]` – One project as JSON. Returns 400 for a non-numeric id and 404 when not found

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
