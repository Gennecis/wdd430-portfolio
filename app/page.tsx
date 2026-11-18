import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Teton Chamber of Commerce Testing',
    description:
      'Software testing project for the Teton Idaho Chamber of Commerce website (CSE 270), with Python tests for the site and its data service, run automatically by a GitHub Actions workflow.',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
    link: 'https://github.com/Gennecis/cse270-teton',
  },
  {
    title: 'PlacePedia',
    description:
      'Search any place by name to see all matching locations on a map, with relevance scores, historical era, and a Wikipedia summary.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Leaflet', 'Vite', 'Jest'],
    link: 'https://github.com/Gennecis/PlacePedia',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
