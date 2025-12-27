import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform duration-200">Projekt & Develop</Link>
        <ul className="flex space-x-8">
          <li><Link href="/" className="hover:text-amber-100 transition-colors duration-200 font-medium">Home</Link></li>
          <li><Link href="/it" className="hover:text-amber-100 transition-colors duration-200 font-medium">IT služby</Link></li>
          <li><Link href="/projektovani" className="hover:text-amber-100 transition-colors duration-200 font-medium">Projektování</Link></li>
          <li><Link href="/kontakt" className="hover:text-amber-100 transition-colors duration-200 font-medium">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}