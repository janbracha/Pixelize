export default function TerminyPage() {
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
      
      <h1 className="text-4xl font-bold mb-8 text-black">Termíny akcí</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Nadcházející akce 2026</h2>
        
        <div className="space-y-6">
          {/* Vzorová akce - Leden */}
          <div className="border-l-4 border-[#DC2626] pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-black">Zimní soustředění</h3>
              <span className="text-gray-500 font-medium">15. - 17. ledna 2026</span>
            </div>
            <p className="text-gray-700 mb-2">
              Víkendové soustředění pro všechny věkové kategorie. Intenzivní trénink, technika a příprava na jarní soutěže.
            </p>
            <p className="text-sm text-gray-500">Místo: Sportovní centrum Kaplice</p>
          </div>

          {/* Vzorová akce - Únor */}
          <div className="border-l-4 border-gray-300 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-black">Krajský přebor mladších žáků</h3>
              <span className="text-gray-500 font-medium">8. února 2026</span>
            </div>
            <p className="text-gray-700 mb-2">
              Krajská soutěž pro mladší žáky. Účast pro všechny zájemce po dohodě s trenéry.
            </p>
            <p className="text-sm text-gray-500">Místo: České Budějovice</p>
          </div>

          {/* Vzorová akce - Březen */}
          <div className="border-l-4 border-gray-300 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-black">Mistrovství ČR kadetů</h3>
              <span className="text-gray-500 font-medium">14. - 15. března 2026</span>
            </div>
            <p className="text-gray-700 mb-2">
              Účast našich reprezentantů na Mistrovství ČR.
            </p>
            <p className="text-sm text-gray-500">Místo: Praha</p>
          </div>

          {/* Vzorová akce - Duben */}
          <div className="border-l-4 border-gray-300 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-black">Jarní seminář</h3>
              <span className="text-gray-500 font-medium">20. dubna 2026</span>
            </div>
            <p className="text-gray-700 mb-2">
              Seminář s mezinárodním lektorem. Zaměření na techniku a taktiku.
            </p>
            <p className="text-sm text-gray-500">Místo: Tělocvična ZŠ Kaplice</p>
          </div>
        </div>
      </div>

      {/* Pravidelné akce */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Pravidelné akce</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-black">Klubové zkoušky</h3>
            <p className="text-gray-700 mb-2">
              Zkoušky na vyšší pásky probíhají pravidelně 2x ročně (červen a prosinec).
            </p>
            <p className="text-sm text-gray-500">Termín bude upřesněn dle tréninkového plánu</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-black">Letní soustředění</h3>
            <p className="text-gray-700 mb-2">
              Tradiční týdenní letní soustředění v měsíci červenci.
            </p>
            <p className="text-sm text-gray-500">Přesný termín bude zveřejněn v květnu</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-black">Místní turnaje</h3>
            <p className="text-gray-700 mb-2">
              Organizace místních přátelských turnajů pro nejmenší judisty.
            </p>
            <p className="text-sm text-gray-500">Průběžně dle kapacity</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-black">Vánoční turnaj</h3>
            <p className="text-gray-700 mb-2">
              Tradiční předvánoční klubový turnaj a posezení.
            </p>
            <p className="text-sm text-gray-500">Polovina prosince</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#DC2626] text-white rounded-lg p-6 text-center">
        <p className="text-lg">
          Sledujte naši stránku <a href="/aktuality" className="underline font-semibold">Aktuality</a> pro nejnovější informace o termínech a akcích.
        </p>
      </div>
    </div>
  );
}
