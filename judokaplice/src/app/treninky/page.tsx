export default function TreninkyPage() {
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
      
      <h1 className="text-4xl font-bold mb-8 text-black">Tréninky</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Rozvrh tréninkových skupin */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Rozvrh tréninků</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#DC2626] pl-4">
              <h3 className="font-semibold text-lg text-black">Nejmladší žáci (4-7 let)</h3>
              <p className="text-gray-600">Pondělí a Středa: 16:00 - 17:00</p>
              <p className="text-sm text-gray-500 mt-1">Tělocvična Základní školy Kaplice</p>
            </div>

            <div className="border-l-4 border-[#DC2626] pl-4">
              <h3 className="font-semibold text-lg text-black">Mladší žáci (8-11 let)</h3>
              <p className="text-gray-600">Pondělí a Středa: 17:00 - 18:30</p>
              <p className="text-sm text-gray-500 mt-1">Tělocvična Základní školy Kaplice</p>
            </div>

            <div className="border-l-4 border-[#DC2626] pl-4">
              <h3 className="font-semibold text-lg text-black">Starší žáci a dorost (12+ let)</h3>
              <p className="text-gray-600">Úterý a Čtvrtek: 18:00 - 20:00</p>
              <p className="text-sm text-gray-500 mt-1">Tělocvična Základní školy Kaplice</p>
            </div>

            <div className="border-l-4 border-[#DC2626] pl-4">
              <h3 className="font-semibold text-lg text-black">Dospělí</h3>
              <p className="text-gray-600">Úterý a Čtvrtek: 19:00 - 21:00</p>
              <p className="text-sm text-gray-500 mt-1">Tělocvična Základní školy Kaplice</p>
            </div>
          </div>
        </div>

        {/* Cenník */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Cenník</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-700">Měsíční členství (děti)</span>
              <span className="font-semibold text-black">500 Kč</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-700">Měsíční členství (dospělí)</span>
              <span className="font-semibold text-black">700 Kč</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-700">Roční členství ČSJu</span>
              <span className="font-semibold text-black">300 Kč</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-700">První trénink</span>
              <span className="font-semibold text-[#DC2626]">ZDARMA</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Poznámka:</strong> Ceny jsou orientační. Pro přesné informace nás prosím kontaktujte.
            </p>
          </div>
        </div>
      </div>

      {/* Co potřebujete */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-[#DC2626]">Co potřebujete na trénink?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-black">Pro začátečníky</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Tepláky</li>
              <li>• Tričko</li>
              <li>• Čisté pantofle</li>
              <li>• Pití</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-black">Pokročilí</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Judogi (kimono)</li>
              <li>• Pásek</li>
              <li>• Čisté pantofle</li>
              <li>• Pití</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-black">Kde koupit výbavu?</h3>
            <p className="text-gray-700">
              Judogi a další výbavu je možné zakoupit prostřednictvím klubu nebo v specializovaných obchodech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
