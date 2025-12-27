import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Pixelize</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/it" className="hover:text-gray-300">IT služby</Link></li>
          <li><Link href="/projektovani" className="hover:text-gray-300">Projektování</Link></li>
          <li><Link href="/kontakt" className="hover:text-gray-300">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}