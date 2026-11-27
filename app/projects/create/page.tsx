import type { Metadata } from 'next';
import CreateProjectForm from './create-project-form';

export const metadata: Metadata = {
  title: 'Add Project',
};

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Add Project</h1>
      <CreateProjectForm />
    </section>
  );
}
