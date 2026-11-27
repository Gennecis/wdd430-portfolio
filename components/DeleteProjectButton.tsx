'use client';

import type { FormEvent } from 'react';
import { deleteProject } from '@/app/lib/actions';

interface DeleteProjectButtonProps {
  id: number;
  title: string;
}

export default function DeleteProjectButton({ id, title }: DeleteProjectButtonProps) {
  const deleteProjectWithId = deleteProject.bind(null, String(id));

  function confirmDelete(event: FormEvent<HTMLFormElement>) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) {
      event.preventDefault();
    }
  }

  return (
    <form action={deleteProjectWithId} onSubmit={confirmDelete}>
      <button type="submit" className="text-red-700 hover:underline">
        Delete<span className="sr-only"> {title}</span>
      </button>
    </form>
  );
}
