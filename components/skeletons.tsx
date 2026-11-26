export function ProjectCardSkeleton() {
  return (
    <div className="p-4 border-l-4 border-gray-300 bg-gray-50 rounded animate-pulse" aria-hidden="true">
      <div className="h-6 w-2/3 bg-slate-300 rounded mb-3" />
      <div className="h-4 w-full bg-slate-200 rounded mb-2" />
      <div className="h-4 w-5/6 bg-slate-200 rounded mb-3" />
      <div className="h-4 w-1/2 bg-slate-200 rounded" />
    </div>
  );
}

export function ProjectGridSkeleton({ cards = 2 }: { cards?: number }) {
  return (
    <div role="status" className="grid gap-4 md:grid-cols-2">
      <span className="sr-only">Loading projects...</span>
      {Array.from({ length: cards }, (_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}
