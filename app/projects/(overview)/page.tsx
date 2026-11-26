import type { Metadata } from 'next';
import Pagination from '@/components/Pagination';
import ProjectList from '@/components/ProjectList';
import ProjectSearch from '@/components/ProjectSearch';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function ProjectsPage(props: { searchParams: Promise<{ query?: string; page?: string }> }) {
  const searchParams = await props.searchParams;
  const query = (searchParams.query ?? '').trim().slice(0, 100);
  const currentPage = Math.max(1, Math.floor(Number(searchParams.page)) || 1);

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects Overview</h1>
      <ProjectSearch />
      {projects.length === 0 ? (
        <p className="text-gray-700">{query ? `No projects match "${query}".` : 'No projects to show yet.'}</p>
      ) : (
        <ProjectList projects={projects} />
      )}
      <Pagination totalPages={totalPages} />
    </section>
  );
}
