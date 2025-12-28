import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 text-white mt-auto rounded-3xl m-4">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* O společnosti */}
          <div>
            <h3 className="text-lg font-bold mb-2">PROJEKT & DEVELOP s.r.o.</h3>
            <p className="text-sky-100 leading-relaxed mb-2">
              Váš partner pro inovativní řešení v oblasti IT služeb a projektování.
            </p>
            <p className="text-sky-100 text-sm">
              Nedabyle 122, PSČ 370 06
            </p>
            <p className="text-sky-100 text-sm">
              IČO: 17320488
            </p>
            <p className="text-sky-100 text-sm mt-2">
              <a href="https://www.projektdevelop.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                www.projektdevelop.cz
              </a>
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-lg font-bold mb-2">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-100 hover:text-white transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/it" className="text-sky-100 hover:text-white transition-colors">
                  IT služby
                </Link>
              </li>
              <li>
                <Link href="/projektovani" className="text-sky-100 hover:text-white transition-colors">
                  Projektování
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sky-100 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-bold mb-2">Kontakt</h3>
            <ul className="space-y-2 text-sky-100">
              <li>
                <strong className="text-white">IT služby:</strong><br />
                <a href="mailto:devops@projektdevelop.cz" className="hover:text-white transition-colors">
                  devops@projektdevelop.cz
                </a><br />
                <a href="tel:+420602222278" className="hover:text-white transition-colors">
                  +420 602 222 278
                </a>
              </li>
              <li className="pt-2">
                <strong className="text-white">Projektování:</strong><br />
                <a href="mailto:jan.bracha@projektdevelop.cz" className="hover:text-white transition-colors">
                  jan.bracha@projektdevelop.cz
                </a><br />
                <a href="tel:+420602725251" className="hover:text-white transition-colors">
                  +420 602 725 251
                </a>
              </li>
            </ul>
            
            {/* Sociální sítě */}
            <div className="mt-4">
              <a 
                href="https://www.linkedin.com/company/projekt-develop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-sky-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-400 mt-4 pt-4 text-center text-sky-100">
          <p>&copy; {new Date().getFullYear()} PROJEKT & DEVELOP s.r.o. Všechna práva vyhrazena.</p>
          <p className="text-sm mt-2">Nedabyle 122, PSČ 370 06 | C 32334/KSCB Krajský soud v Českých Budějovicích</p>
        </div>
      </div>
    </footer>
  );
}
