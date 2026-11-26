import type { Metadata } from 'next';
import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';
import { ProjectGridSkeleton } from '@/components/skeletons';

export const metadata: Metadata = {
  title: 'School Projects',
};

export default function SchoolProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">School Projects</h1>
      <Suspense fallback={<ProjectGridSkeleton cards={3} />}>
        <SchoolProjectList />
      </Suspense>
    </section>
  );
}
