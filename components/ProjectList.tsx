import ProjectCard from './ProjectCard';

interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  yearCompleted?: number;
}

interface ProjectListProps {
  projects: Project[];
  showActions?: boolean;
}

export default function ProjectList({ projects, showActions = false }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id ?? project.title} {...project} showActions={showActions} />
      ))}
    </section>
  );
}
