'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  description: z.string().trim().min(20, 'Description must be at least 20 characters.'),
  type: z.enum(['opensource', 'school'], { error: 'Choose a project type.' }),
  technologies: z.string().trim().min(2, 'Add at least one technology.'),
  yearCompleted: z.coerce
    .number()
    .int('Year must be a whole number.')
    .gte(2000, 'Year must be 2000 or later.')
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    type?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

function parseProject(formData: FormData) {
  return ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
  });
}

/** Turns "React, Next.js, , SQL" into ["React", "Next.js", "SQL"]. */
function toTechnologyList(technologies: string) {
  return technologies
    .split(',')
    .map((technology) => technology.trim())
    .filter(Boolean);
}

export async function createProject(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = parseProject(formData);

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
      message: 'Missing or invalid fields. Failed to create project.',
    };
  }

  const { title, description, type, technologies, yearCompleted } = validatedFields.data;
  const technologyList = toTechnologyList(technologies);

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies, year_completed)
      VALUES (${title}, ${description}, ${type}, ${technologyList as unknown as string}, ${yearCompleted})
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    return { message: 'Database Error: Failed to create project.' };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, prevState: State, formData: FormData): Promise<State> {
  const validatedFields = parseProject(formData);

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
      message: 'Missing or invalid fields. Failed to update project.',
    };
  }

  const { title, description, type, technologies, yearCompleted } = validatedFields.data;
  const technologyList = toTechnologyList(technologies);

  try {
    await sql`
      UPDATE projects
      SET title = ${title},
          description = ${description},
          type = ${type},
          technologies = ${technologyList as unknown as string},
          year_completed = ${yearCompleted}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    return { message: 'Database Error: Failed to update project.' };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}
