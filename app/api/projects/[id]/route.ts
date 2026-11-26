import type { NextRequest } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(_request: NextRequest, ctx: RouteContext<'/api/projects/[id]'>) {
  const { id } = await ctx.params;

  if (!/^\d+$/.test(id)) {
    return Response.json({ error: 'Project id must be a number.' }, { status: 400 });
  }

  const project = await getProjectById(Number(id));
  if (!project) {
    return Response.json({ error: `Project ${id} was not found.` }, { status: 404 });
  }

  return Response.json(project);
}
