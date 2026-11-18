import { cacheLife } from 'next/cache';

export default async function Footer() {
  'use cache';
  cacheLife('days'); // refreshes daily so the year stays current

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center px-4">
        <p>Copyright &copy; {new Date().getFullYear()} | Your Name | All rights reserved</p>
      </div>
    </footer>
  );
}
