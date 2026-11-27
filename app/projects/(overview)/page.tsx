import type { Metadata } from 'next';
import Link from 'next/link';
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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Projects Overview</h1>
        <Link
          href="/projects/create"
          className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          Add Project
        </Link>
      </div>
      <ProjectSearch />
      {projects.length === 0 ? (
        <p className="text-gray-700">{query ? `No projects match "${query}".` : 'No projects to show yet.'}</p>
      ) : (
        <ProjectList projects={projects} showActions />
      )}
      <Pagination totalPages={totalPages} />
    </section>
  );
}
