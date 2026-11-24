export type ProjectType = 'opensource' | 'school';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  link?: string;
}

// In-memory data for now. This can move to a real database later.
const projects: Project[] = [
  {
    id: 1,
    title: 'PlacePedia',
    description:
      'Search any place by name to see all matching locations on a map, with relevance scores, historical era, and a Wikipedia summary.',
    type: 'opensource',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Leaflet', 'Vite', 'Jest'],
    link: 'https://github.com/Gennecis/PlacePedia',
  },
  {
    id: 2,
    title: 'Python Socket Chat',
    description: 'A chat application built on Python sockets that lets multiple clients exchange messages through a server.',
    type: 'opensource',
    technologies: ['Python', 'Sockets'],
    link: 'https://github.com/Gennecis/python-socket-chat',
  },
  {
    id: 3,
    title: 'Teton Chamber of Commerce Testing',
    description:
      'Software testing project for the Teton Idaho Chamber of Commerce website (CSE 270), with Python tests for the site and its data service, run automatically by a GitHub Actions workflow.',
    type: 'school',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
    link: 'https://github.com/Gennecis/cse270-teton',
  },
  {
    id: 4,
    title: 'Sacrament Meeting Planner',
    description:
      'A Next.js app for viewing, navigating and printing sacrament meeting programs, with typed data and API routes (WDD 430).',
    type: 'school',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Gennecis/sacrament-meetings',
  },
  {
    id: 5,
    title: 'Car Shop',
    description: 'Team project for CSE 341 building a web service for a car shop.',
    type: 'school',
    technologies: ['JavaScript', 'Node.js'],
    link: 'https://github.com/Gennecis/Car-Shop',
  },
];

export function getProjects(type?: string | null): Project[] {
  if (!type) return projects;
  return projects.filter((project) => project.type === type);
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
