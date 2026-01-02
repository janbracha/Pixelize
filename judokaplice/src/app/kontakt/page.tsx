export default function KontaktPage() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Dekorativní obrázky - hod1 vlevo */}
      <img 
        src="/hod1.png" 
        alt="" 
        className="hidden lg:block absolute left-[-250px] top-1/2 -translate-y-1/2 w-64 opacity-20 pointer-events-none"
      />
      
      {/* Dekorativní obrázky - hod2 vpravo */}
      <img 
        src="/hod2.png" 
        alt="" 
        className="hidden lg:block absolute right-[-250px] top-1/2 -translate-y-1/2 w-64 opacity-20 pointer-events-none"
      />
      
      <h1 className="text-4xl font-bold mb-8 text-black">Kontakt</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kontaktní informace */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Kontaktní údaje</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-2">Oficiální název</h3>
                <p className="text-gray-700 font-medium">SK Kaplice, z.s.</p>
                <p className="text-gray-600 text-sm">SK JUDO KAPLICE</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">IČ</h3>
                <p className="text-gray-700">71159894</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Email</h3>
                <a href="mailto:libor.stepanek@judokaplice.cz" className="text-gray-700 hover:text-[#DC2626]">
                  libor.stepanek@judokaplice.cz
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Telefon</h3>
                <a href="tel:+420725566899" className="text-gray-700 hover:text-[#DC2626]">
                  +420 725 566 899
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Adresa</h3>
                <p className="text-gray-700">
                  Na Vyhlídce 520<br />
                  382 41 Kaplice 1
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Trenéři</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Libor Štěpánek</p>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:libor.stepanek@judokaplice.cz" className="hover:text-[#DC2626]">
                        libor.stepanek@judokaplice.cz
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">Tel: +420 725 566 899</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Michal Jokl</p>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:michal.jokl@judokaplice.cz" className="hover:text-[#DC2626]">
                        michal.jokl@judokaplice.cz
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">Tel: +420 604 123 456</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Barbora Košnarová</p>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:barbora.kosnarova@judokaplice.cz" className="hover:text-[#DC2626]">
                        barbora.kosnarova@judokaplice.cz
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">Tel: +420 737 749 319</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Sledujte nás</h3>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.facebook.com/judokaplice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#1877F2] hover:bg-[#165ECC] text-white rounded-full transition-colors"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/judokaplice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white rounded-full transition-opacity"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@judokaplice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full transition-colors"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/420123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#25D366] hover:bg-[#1EB854] text-white rounded-full transition-colors"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC2626]">Kde nás najdete</h2>
            <p className="text-gray-700 mb-4">
              Městská sportovní hala Bělidlo<br />
              Bělidlo 642, 382 41 Kaplice 1
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Bělidlo+642,+382+41+Kaplice+1,+Czech+Republic&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Městská sportovní hala Bělidlo"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Kontaktní formulář */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Napište nám</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Jméno a příjmení *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Předmět *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Zpráva *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Odeslat zprávu
              </button>
            </div>

            <p className="text-sm text-gray-500">
              * Povinná pole
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
