import type { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';

export const metadata: Metadata = {
  title: 'School Projects',
};

export default function SchoolProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">School Projects</h1>
      <ProjectGrid type="school" />
    </section>
  );
}
