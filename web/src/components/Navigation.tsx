'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 text-white p-6 shadow-lg rounded-3xl m-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo a tagline */}
          <Link href="/" onClick={closeMenu} className="hover:scale-105 transition-transform duration-200 flex items-center gap-3">
            <span className="text-2xl font-bold">Projekt & Develop</span>
            <span className="hidden lg:block text-base font-bold text-sky-100 border-l border-sky-300 pl-3">
              Váš partner pro inovativní řešení
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/" className="hover:text-amber-100 transition-colors duration-200 font-medium">Home</Link></li>
            <li><Link href="/it" className="hover:text-amber-100 transition-colors duration-200 font-medium">IT služby</Link></li>
            <li><Link href="/projektovani" className="hover:text-amber-100 transition-colors duration-200 font-medium">Projektování</Link></li>
            <li><Link href="/kontakt" className="hover:text-amber-100 transition-colors duration-200 font-medium">Kontakt</Link></li>
          </ul>

          {/* Hamburger button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-sky-500 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-sky-300">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link href="/" onClick={closeMenu} className="block py-2 px-4 hover:bg-sky-500 rounded-lg transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/it" onClick={closeMenu} className="block py-2 px-4 hover:bg-sky-500 rounded-lg transition-colors font-medium">
                  IT služby
                </Link>
              </li>
              <li>
                <Link href="/projektovani" onClick={closeMenu} className="block py-2 px-4 hover:bg-sky-500 rounded-lg transition-colors font-medium">
                  Projektování
                </Link>
              </li>
              <li>
                <Link href="/kontakt" onClick={closeMenu} className="block py-2 px-4 hover:bg-sky-500 rounded-lg transition-colors font-medium">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}