export default function FAQPage() {
  const faqItems = [
    {
      question: "Od kolika let může dítě začít s judem?",
      answer: "Děti mohou začít již od 4-5 let v přípravce. V tomto věku se zaměřujeme hlavně na rozvoj základních pohybových dovedností, koordinaci a hravou formou je seznamujeme s judem."
    },
    {
      question: "Kolik stojí členství v klubu?",
      answer: "Měsíční příspěvek je 500 Kč pro děti a 700 Kč pro dospělé. Dále je potřeba zaplatit roční členství v Českém svazu juda (300 Kč). První trénink je zdarma."
    },
    {
      question: "Co potřebuji na první trénink?",
      answer: "Na první trénink stačí sportovní oblečení (tepláky a tričko), čisté pantofle a pití. Pokud se vám bude judo líbit, postupně si pořídíte judogi (kimono)."
    },
    {
      question: "Jak často probíhají tréninky?",
      answer: "Tréninky probíhají 2-3x týdně v závislosti na věkové kategorii. Přesný rozvrh najdete na stránce Tréninky."
    },
    {
      question: "Je judo nebezpečné?",
      answer: "Judo je relativně bezpečný sport. Trenéři kladou velký důraz na správnou techniku pádů a postupné zvyšování náročnosti. Zranění jsou v judu mnohem méně častá než v kontaktních sportech jako fotbal nebo hokej."
    },
    {
      question: "Můžu přijít se jen podívat?",
      answer: "Samozřejmě! Jste vítáni na kterémkoli tréninku jako diváci. Pokud byste chtěli trénink vyzkoušet, stačí nás předem kontaktovat."
    },
    {
      question: "Kde probíhají tréninky?",
      answer: "Tréninky probíhají v tělocvičně Základní školy v Kaplici. Přesnou adresu a kontakt najdete na stránce Kontakt."
    },
    {
      question: "Mohu začít i jako dospělý začátečník?",
      answer: "Ano! Vítáme dospělé začátečníky i pokročilé. Máme skupinu dospělých, kde se zaměřujeme jak na techniku, tak na kondici."
    },
    {
      question: "Jak často jsou zkoušky na pásky?",
      answer: "Zkoušky na vyšší pásky probíhají zpravidla 2x ročně (červen a prosinec). Termín závisí na připravenosti jednotlivých judistů."
    },
    {
      question: "Účastníte se soutěží?",
      answer: "Ano, naši judisté se pravidelně účastní místních, krajských i celostátních soutěží. Účast je vždy dobrovolná a konzultována s trenéry."
    },
    {
      question: "Nabízíte i individuální tréninky?",
      answer: "Po dohodě s trenéry je možné domluvit i individuální přípravu, zejména před důležitými soutěžemi. Kontaktujte nás pro více informací."
    },
    {
      question: "Máte prázdninový provoz?",
      answer: "O letních prázdninách organizujeme letní soustředění. Běžné tréninky během července a srpna neprobíhají. O vánočních a velikonočních prázdninách závisí provoz na aktuální situaci."
    }
  ];

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
      
      <h1 className="text-4xl font-bold mb-4 text-black">Co Vás zajímá</h1>
      <p className="text-xl text-gray-600 mb-12">
        Odpovědi na nejčastěji kladené otázky
      </p>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#DC2626]">
              {item.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Nenašli jste odpověď na svou otázku?
        </h2>
        <p className="text-gray-700 mb-6">
          Neváhejte nás kontaktovat, rádi vám odpovíme na jakékoli dotazy.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Kontaktovat nás
        </a>
      </div>
    </div>
  );
}
