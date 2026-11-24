import Link from 'next/link';

export default function ProjectsLayout({ children }: LayoutProps<'/projects'>) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav aria-label="Projects" className="mb-8">
        <ul className="flex flex-wrap gap-4 border-b border-gray-200 pb-3">
          <li>
            <Link href="/projects" className="text-blue-700 hover:underline">
              All Projects
            </Link>
          </li>
          <li>
            <Link href="/projects/opensource" className="text-blue-700 hover:underline">
              Open Source
            </Link>
          </li>
          <li>
            <Link href="/projects/school" className="text-blue-700 hover:underline">
              School
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
