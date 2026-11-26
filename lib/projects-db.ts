import { sql } from '@vercel/postgres';

export type ProjectType = 'opensource' | 'school';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  link?: string;
}

const ITEMS_PER_PAGE = 4;

interface ProjectRow {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  link: string | null;
}

/** Converts a database row to a Project, turning a NULL link into an absent one. */
function toProject(row: ProjectRow): Project {
  const { link, ...rest } = row;
  return link ? { ...rest, link } : rest;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  const { rows } = type
    ? await sql<ProjectRow>`SELECT * FROM projects WHERE type = ${type} ORDER BY id`
    : await sql<ProjectRow>`SELECT * FROM projects ORDER BY id`;
  return rows.map(toProject);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<ProjectRow>`SELECT * FROM projects WHERE id = ${id}`;
  return rows[0] ? toProject(rows[0]) : null;
}

/** One page of projects whose title, description or technologies match the query. */
export async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const pattern = `%${query}%`;
  const { rows } = await sql<ProjectRow>`
    SELECT * FROM projects
    WHERE
      title ILIKE ${pattern} OR
      description ILIKE ${pattern} OR
      array_to_string(technologies, ' ') ILIKE ${pattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;
  return rows.map(toProject);
}

/** Number of pages of projects that match the query. */
export async function fetchProjectsPages(query: string): Promise<number> {
  const pattern = `%${query}%`;
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) FROM projects
    WHERE
      title ILIKE ${pattern} OR
      description ILIKE ${pattern} OR
      array_to_string(technologies, ' ') ILIKE ${pattern}
  `;
  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}
