export default function PridejSePage() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      
      <h1 className="text-4xl font-bold mb-8 text-black">Přidej se k nám</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#DC2626]">Staňte se součástí Judokaplice</h2>
        <p className="text-gray-700 mb-6">
          Rádi bychom Vás přivítali v našem judo klubu! Nabízíme tréninky pro všechny věkové kategorie 
          od dětí po dospělé, začátečníky i pokročilé.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">Co potřebujete?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Chuť se naučit něco nového</li>
              <li>Sportovní oblečení (na začátek stačí tepláky a tričko)</li>
              <li>Dobrá nálada a respekt k ostatním</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">Jak se přihlásit?</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Kontaktujte nás prostřednictvím <a href="/kontakt" className="text-[#DC2626] hover:underline">kontaktního formuláře</a></li>
              <li>Přijďte se podívat na první trénink zdarma</li>
              <li>Pokud se Vám bude líbit, vyplníte přihlášku</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-black">Cenník</h3>
            <p className="text-gray-700 mb-4">
              Informace o cenách členství a tréninkových poplatků naleznete na stránce <a href="/treninky" className="text-[#DC2626] hover:underline">Tréninky</a>.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/kontakt"
            className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Kontaktovat nás
          </a>
        </div>
      </div>
    </div>
  );
}
