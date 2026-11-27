import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';
import EditProjectForm from './edit-project-form';

export const metadata: Metadata = {
  title: 'Edit Project',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <EditProjectForm project={project} />
    </section>
  );
}
