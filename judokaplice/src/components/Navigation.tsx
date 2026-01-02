import Link from "next/link";

export default function Navigation() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Přidej se k nám", href: "/pridej-se" },
    { name: "Tréninky", href: "/treninky" },
    { name: "Termíny", href: "/terminy" },
    { name: "Co Vás zajímá", href: "/faq" },
    { name: "Aktuality", href: "/aktuality" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav className="bg-white shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Judokaplice" className="h-12 w-12 rounded-full border-2 border-[#DC2626] object-cover" />
            
            {/* Judo Kanji Symbol */}
            <img 
              src="/judo-logo.jpg" 
              alt="柔道" 
              className="hidden sm:block h-14 w-auto object-contain" 
            />
            
            <div className="hidden lg:block">
              <div className="text-sm font-bold text-black">SK JUDO KAPLICE</div>
              <div className="text-xs text-gray-600 italic">Jita-kyoei - Vzájemná pomoc a prospěch</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-[#DC2626] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black hover:text-[#DC2626] p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
