import ProjectList from './ProjectList';
import { getBaseUrl } from '@/lib/base-url';
import type { Project, ProjectType } from '@/lib/projects-db';

interface ProjectGridProps {
  type?: ProjectType;
}

async function fetchProjects(type?: ProjectType): Promise<Project[]> {
  const baseUrl = await getBaseUrl();
  const query = type ? `?type=${type}` : '';
  const response = await fetch(`${baseUrl}/api/projects${query}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Unable to load projects.');
  }
  return (await response.json()) as Project[];
}

/** Loads projects from the API route and renders them as cards. */
export default async function ProjectGrid({ type }: ProjectGridProps) {
  const projects = await fetchProjects(type);

  if (projects.length === 0) {
    return <p className="text-gray-700">No projects to show yet.</p>;
  }

  return <ProjectList projects={projects} />;
}
