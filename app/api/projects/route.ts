import type { NextRequest } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type');
  return Response.json(await getProjects(type));
}
