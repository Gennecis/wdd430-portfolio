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
    title: 'Hello World Software',
    description:
      'A Hello World program in Python that walks through the full workflow between VS Code and GitHub, with a recorded demo video.',
    technologies: ['Python', 'VS Code', 'Git', 'GitHub'],
    link: 'https://github.com/Gennecis/Hello-World-Software',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
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
