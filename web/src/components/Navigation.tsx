import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 text-white p-6 shadow-lg rounded-3xl m-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hover:scale-105 transition-transform duration-200 flex items-center gap-3">
          <span className="text-2xl font-bold">Projekt & Develop</span>
          <span className="text-base font-bold text-sky-100 border-l border-sky-300 pl-3">Váš partner pro inovativní řešení</span>
        </Link>
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