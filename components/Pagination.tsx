'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

const linkClass = 'rounded border border-gray-300 px-4 py-2 text-blue-700 hover:bg-gray-100';
const disabledClass = 'rounded border border-gray-200 px-4 py-2 text-gray-400';

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get('page')) || 1);

  function createPageURL(page: number): string {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-8 flex items-center justify-between gap-4">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className={linkClass}>
          Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          Previous
        </span>
      )}
      <p className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </p>
      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className={linkClass}>
          Next
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledClass}>
          Next
        </span>
      )}
    </nav>
  );
}
