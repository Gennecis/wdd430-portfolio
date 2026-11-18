import SkillCard from '@/components/SkillCard';

const skillGroups = [
  { category: 'Front End', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Back End & Testing', skills: ['Python', 'Node.js', 'Jest', 'pytest'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Vite', 'Vercel'] },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Pascal Okezie, a BYU-Idaho student studying web development. I enjoy building
        interactive web apps and writing tests that keep them reliable. Here are the skills
        I&apos;ve been working with.
      </p>
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <section className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} category={group.category} skills={group.skills} />
        ))}
      </section>
    </main>
  );
}
