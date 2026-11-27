'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { updateProject, type State } from '@/app/lib/actions';
import ProjectFormFields from '@/components/ProjectFormFields';
import type { Project } from '@/lib/projects-db';

export default function EditProjectForm({ project }: { project: Project }) {
  const initialState: State = { message: null, errors: {} };
  const updateProjectWithId = updateProject.bind(null, String(project.id));
  const [state, formAction, isPending] = useActionState(updateProjectWithId, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <ProjectFormFields state={state} project={project} />
      <div aria-live="polite" aria-atomic="true">
        {state.message ? <p className="text-sm text-red-700">{state.message}</p> : null}
      </div>
      <div className="flex gap-4 items-center">
        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
        <Link href="/projects" className="text-blue-700 hover:underline">
          Cancel
        </Link>
      </div>
    </form>
  );
}
