'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

interface NavListProps {
  pathname: string | null;
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string | null, href: string): boolean {
  if (pathname === null) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Renders the links. pathname is null while the current route is not known yet. */
export function NavList({ pathname }: NavListProps) {
  return (
    <nav aria-label="Primary">
      <ul className="flex gap-6">
        {links.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`hover:underline ${active ? 'active font-bold underline underline-offset-4' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function NavLinks() {
  const pathname = usePathname();
  return <NavList pathname={pathname} />;
}
