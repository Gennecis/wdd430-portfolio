interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="p-4 rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-900">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
