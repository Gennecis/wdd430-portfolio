import type { State } from '@/app/lib/actions';
import type { Project } from '@/lib/projects-db';

interface ProjectFormFieldsProps {
  state: State;
  project?: Project;
}

const inputClass =
  'w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-700 focus:outline-2 focus:outline-blue-700';

function FieldErrors({ id, errors }: { id: string; errors?: string[] }) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      ))}
    </div>
  );
}

/** The labelled inputs shared by the create and edit project forms. */
export default function ProjectFormFields({ state, project }: ProjectFormFieldsProps) {
  return (
    <>
      <div>
        <label htmlFor="title" className="block font-semibold mb-1">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={project?.title}
          aria-describedby="title-error"
          className={inputClass}
        />
        <FieldErrors id="title-error" errors={state.errors?.title} />
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          defaultValue={project?.description}
          aria-describedby="description-error"
          className={inputClass}
        />
        <FieldErrors id="description-error" errors={state.errors?.description} />
      </div>

      <div>
        <label htmlFor="type" className="block font-semibold mb-1">
          Project Type
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue={project?.type ?? ''}
          aria-describedby="type-error"
          className={inputClass}
        >
          <option value="" disabled>
            Choose a type
          </option>
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>
        <FieldErrors id="type-error" errors={state.errors?.type} />
      </div>

      <div>
        <label htmlFor="technologies" className="block font-semibold mb-1">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          required
          defaultValue={project?.technologies.join(', ')}
          aria-describedby="technologies-error"
          className={inputClass}
        />
        <FieldErrors id="technologies-error" errors={state.errors?.technologies} />
      </div>

      <div>
        <label htmlFor="yearCompleted" className="block font-semibold mb-1">
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max="2099"
          required
          defaultValue={project?.yearCompleted}
          aria-describedby="yearCompleted-error"
          className={inputClass}
        />
        <FieldErrors id="yearCompleted-error" errors={state.errors?.yearCompleted} />
      </div>
    </>
  );
}
