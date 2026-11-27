'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createProject, type State } from '@/app/lib/actions';
import ProjectFormFields from '@/components/ProjectFormFields';

export default function CreateProjectForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(createProject, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <ProjectFormFields state={state} />
      <div aria-live="polite" aria-atomic="true">
        {state.message ? <p className="text-sm text-red-700">{state.message}</p> : null}
      </div>
      <div className="flex gap-4 items-center">
        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
        >
          {isPending ? 'Saving...' : 'Save Project'}
        </button>
        <Link href="/projects" className="text-blue-700 hover:underline">
          Cancel
        </Link>
      </div>
    </form>
  );
}
