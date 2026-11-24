import type { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';

export const metadata: Metadata = {
  title: 'Open Source Projects',
};

export default function OpenSourceProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Open Source Projects</h1>
      <ProjectGrid type="opensource" />
    </section>
  );
}
