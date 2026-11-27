import Link from 'next/link';
import DeleteProjectButton from './DeleteProjectButton';

interface ProjectCardProps {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  yearCompleted?: number;
  showActions?: boolean;
}

export default function ProjectCard({ id, title, description, technologies, link, yearCompleted, showActions }: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-700 bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-700">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {yearCompleted && (
        <p className="text-sm text-gray-700">
          <strong>Completed:</strong> {yearCompleted}
        </p>
      )}
      {link && (
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            View {title} project
          </a>
        </p>
      )}
      {showActions && id !== undefined && (
        <div className="mt-3 flex gap-4">
          <Link href={`/projects/${id}/edit`} className="text-blue-700 hover:underline">
            Edit<span className="sr-only"> {title}</span>
          </Link>
          <DeleteProjectButton id={id} title={title} />
        </div>
      )}
    </article>
  );
}
