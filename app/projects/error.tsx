'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('An uncaught error occurred:', error);
  }, [error]);

  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-gray-700 mb-6">An unexpected error occurred. Please try again later.</p>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          Try Again
        </button>
        <Link href="/projects" className="rounded border border-blue-700 px-4 py-2 text-blue-700 hover:bg-blue-50">
          Go Back to Projects
        </Link>
      </div>
    </section>
  );
}
