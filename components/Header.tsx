import { Suspense } from 'react';
import NavLinks, { NavList } from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap gap-3 justify-between items-center">
        <div id="header-title" className="text-2xl font-bold">Pascal Okezie</div>
        <Suspense fallback={<NavList pathname={null} />}>
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}
