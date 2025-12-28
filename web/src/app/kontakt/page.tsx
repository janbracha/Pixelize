export default function Kontakt() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-sky-700">Kontakt</h1>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
          Máte zájem o naše služby nebo potřebujete více informací? Kontaktujte nás!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* IT služby kontakt */}
          <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">IT služby</h2>
            <ul className="text-gray-700 space-y-4 text-lg">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:devops@projektdevelop.cz" className="text-sky-600 hover:text-sky-800 transition-colors">
                  devops@projektdevelop.cz
                </a>
              </li>
              <li>
                <strong>Telefon:</strong><br />
                <a href="tel:+420602222278" className="text-sky-600 hover:text-sky-800 transition-colors">
                  +420 602 222 278
                </a>
              </li>
            </ul>
          </div>

          {/* Projektová činnost kontakt */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">Projektová činnost</h2>
            <ul className="text-gray-700 space-y-4 text-lg">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:jan.bracha@projektdevelop.cz" className="text-sky-600 hover:text-sky-800 transition-colors">
                  jan.bracha@projektdevelop.cz
                </a>
              </li>
              <li>
                <strong>Telefon:</strong><br />
                <a href="tel:+420602725251" className="text-sky-600 hover:text-sky-800 transition-colors">
                  +420 602 725 251
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informace o společnosti */}
        <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100">
          <h2 className="text-2xl font-bold mb-6 text-sky-700">Informace o společnosti</h2>
          <div className="text-gray-700 space-y-3 text-lg">
            <p><strong>PROJEKT & DEVELOP s.r.o.</strong></p>
            <p>Nedabyle 122, PSČ 370 06</p>
            <p><strong>IČO:</strong> 17320488</p>
            <p>
              <strong>Web:</strong>{' '}
              <a href="https://www.projektdevelop.cz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors">
                www.projektdevelop.cz
              </a>
            </p>
            <p className="text-base leading-relaxed pt-2">
              Společnost s ručením omezeným PROJEKT & DEVELOP s.r.o., zapsána pod značkou C 32334/KSCB Krajským soudem v Českých Budějovicích
            </p>
            
            {/* Sociální sítě */}
            <div className="pt-6 border-t border-sky-200 mt-6">
              <p className="font-semibold mb-4">Sledujte nás:</p>
              <a 
                href="https://www.linkedin.com/company/projekt-develop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}