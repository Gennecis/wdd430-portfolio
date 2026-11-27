import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
      <p className="text-gray-700 mb-6">The project you are looking for does not exist.</p>
      <Link href="/projects" className="text-blue-700 hover:underline">
        Back to Projects
      </Link>
    </section>
  );
}
