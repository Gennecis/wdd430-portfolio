import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m always happy to talk about web development, collaboration or new opportunities.
      </p>
      <p className="text-gray-700">
        You can find my work and reach me on{' '}
        <a
          href="https://github.com/Gennecis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}
