import { headers } from 'next/headers';

/** Builds the absolute origin of the current request so server pages can call the app's own API routes. */
export async function getBaseUrl(): Promise<string> {
  const headerList = await headers();
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host') ?? 'localhost:3000';
  const protocol = headerList.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return `${protocol}://${host}`;
}
