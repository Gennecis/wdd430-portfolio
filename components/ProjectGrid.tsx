import ProjectList from './ProjectList';
import { getProjects, type ProjectType } from '@/lib/projects-db';

interface ProjectGridProps {
  type?: ProjectType;
}

/** Loads projects from the database and renders them as cards. */
export default async function ProjectGrid({ type }: ProjectGridProps) {
  const projects = await getProjects(type);

  if (projects.length === 0) {
    return <p className="text-gray-700">No projects to show yet.</p>;
  }

  return <ProjectList projects={projects} />;
}
