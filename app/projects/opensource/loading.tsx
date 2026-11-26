import { ProjectGridSkeleton } from '@/components/skeletons';

export default function Loading() {
  return (
    <section>
      <div className="h-9 w-72 bg-slate-300 rounded mb-6 animate-pulse" aria-hidden="true" />
      <ProjectGridSkeleton />
    </section>
  );
}
