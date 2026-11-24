import type { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects Overview</h1>
      <ProjectGrid />
    </section>
  );
}
