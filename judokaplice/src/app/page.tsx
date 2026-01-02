import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-50">
      {/* Hero sekce */}
      <section className="relative">
        <div className="bg-gradient-to-r from-black to-gray-900 text-white py-12 rounded-3xl mx-4 mt-4 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vítejte na stránkách klubu Judo Kaplice
            </h1>
            <p className="text-lg md:text-xl mb-3 text-gray-300">
              Tradice, disciplína a respekt v srdci juda
            </p>
            <p className="text-base md:text-lg mb-6 text-gray-400 italic">
              "Seiryoku-Zenyo" - Maximální efektivita s minimálním úsilím
            </p>
            <Link
              href="/pridej-se"
              className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Přidej se k nám
            </Link>
          </div>
        </div>
        {/* Jemný přechod po Hero sekci */}
        <div className="h-20 bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div>
      </section>

      {/* Hlavní sekce */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tréninky */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#DC2626]">
              <h3 className="text-2xl font-bold mb-4 text-black">Tréninky</h3>
              <p className="text-gray-600 mb-4">
                Zjistěte více o našich tréninkových časech a programech pro všechny věkové kategorie.
              </p>
              <Link href="/treninky" className="text-[#DC2626] hover:text-[#B91C1C] font-semibold">
                Zjistit více →
              </Link>
            </div>

            {/* Termíny */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#DC2626]">
              <h3 className="text-2xl font-bold mb-4 text-black">Termíny</h3>
              <p className="text-gray-600 mb-4">
                Sledujte nadcházející soutěže, semináře a důležité akce klubu.
              </p>
              <Link href="/terminy" className="text-[#DC2626] hover:text-[#B91C1C] font-semibold">
                Zobrazit kalendář →
              </Link>
            </div>

            {/* Aktuality */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#DC2626]">
              <h3 className="text-2xl font-bold mb-4 text-black">Aktuality</h3>
              <p className="text-gray-600 mb-4">
                Nejnovější zprávy a oznámení z našeho judo klubu.
              </p>
              <Link href="/aktuality" className="text-[#DC2626] hover:text-[#B91C1C] font-semibold">
                Přečíst novinky →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#DC2626] text-white py-16 rounded-3xl mx-4 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Máte otázky?
          </h2>
          <p className="text-xl mb-8">
            Neváhejte nás kontaktovat nebo se přijďte podívat na trénink.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-[#DC2626] hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Kontaktovat nás
          </Link>
        </div>
      </section>
    </div>
  );
}
