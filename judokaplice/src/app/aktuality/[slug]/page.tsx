import Link from "next/link";
import { notFound } from "next/navigation";

// Simulace databáze aktualit s galerií obrázků
const newsData: Record<string, {
  title: string;
  date: string;
  content: string;
  fullContent: string;
  images: string[];
}> = {
  "spusteni-noveho-webu": {
    title: "Spuštění nového webu",
    date: "2. ledna 2026",
    content: "S radostí vám představujeme náš nový web! Najdete zde všechny důležité informace o našem klubu, trénincích a akcích.",
    fullContent: "S radostí vám představujeme náš nový web! Najdete zde všechny důležité informace o našem klubu, trénincích a akcích.\n\nNový web nabízí:\n- Přehledný rozvrh tréninků\n- Aktuální termíny akcí a soutěží\n- Kontaktní formulář\n- Galerie fotografií\n- Informace o našem klubu\n\nWeb je optimalizován pro všechna zařízení a nabízí moderní design s intuitivní navigací.",
    images: []
  },
  "vanocni-turnaj": {
    title: "Vánoční turnaj úspěšně za námi",
    date: "15. prosince 2025",
    content: "Děkujeme všem účastníkům tradičního vánočního turnaje. Gratulujeme všem medailistům a těšíme se na další akce v roce 2026!",
    fullContent: "Děkujeme všem účastníkům tradičního vánočního turnaje. Gratulujeme všem medailistům a těšíme se na další akce v roce 2026!\n\nTurnaje se zúčastnilo celkem 85 judistů z celého regionu. Atmosféra byla skvělá a všichni si zasoutěžili v přátelském duchu.\n\nVýsledky:\n- Kategorie mladší žáci: 1. místo - Jan Novák\n- Kategorie starší žákyně: 2. místo - Petra Svobodová\n- Kategorie junioři: 3. místo - Martin Dvořák\n\nFotografie z turnaje najdete v galerii níže.",
    images: ["/hod1.png", "/hod2.png", "/logo.png"]
  },
  "zapis-novych-clenu": {
    title: "Zápis nových členů",
    date: "1. prosince 2025",
    content: "Informujeme, že klub přijímá nové členy ve všech věkových kategoriích. První trénink je zdarma. Kontaktujte nás pro více informací.",
    fullContent: "Informujeme, že klub přijímá nové členy ve všech věkových kategoriích. První trénink je zdarma. Kontaktujte nás pro více informací.\n\nPřijímáme:\n- Děti od 4 let (přípravka)\n- Mládež všech věkových kategorií\n- Dospělé začátečníky i pokročilé\n\nNabízíme:\n- Kvalitní tréninky pod vedením zkušených trenérů\n- Moderní zázemí ve sportovní hale\n- Přátelskou atmosféru\n- Možnost účasti na soutěžích\n\nPrvní trénink je zdarma! Přijďte se podívat a vyzkoušejte judo na vlastní kůži.",
    images: []
  },
  "krajsky-prebor": {
    title: "Úspěchy našich judistů na krajském přeboru",
    date: "10. listopadu 2025",
    content: "Naši judisté dosáhli skvělých výsledků na krajském přeboru. Gratulujeme všem závodníkům k výborným výkonům!",
    fullContent: "Naši judisté dosáhli skvělých výsledků na krajském přeboru. Gratulujeme všem závodníkům k výborným výkonům!\n\nVýsledky našeho klubu:\n- Zlaté medaile: 3\n- Stříbrné medaile: 5\n- Bronzové medaile: 4\n\nZvláště chceme vyzdvihnout výkon:\n- Lucie Novákové - 1. místo v kategorii kadetky do 52 kg\n- Tomáše Procházky - 1. místo v kategorii žáci do 46 kg\n- Martiny Svobodové - 2. místo v kategorii mladší žákyně\n\nVšem závodníkům děkujeme za reprezentaci klubu a přejeme další úspěchy!",
    images: ["/hod1.png", "/hod2.png"]
  }
};

export async function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsData[slug];

  if (!news) {
    notFound();
  }

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Dekorativní obrázky */}
      <img 
        src="/hod1.png" 
        alt="" 
        className="hidden lg:block absolute left-[-250px] top-1/2 -translate-y-1/2 w-64 opacity-20 pointer-events-none"
      />
      <img 
        src="/hod2.png" 
        alt="" 
        className="hidden lg:block absolute right-[-250px] top-1/2 -translate-y-1/2 w-64 opacity-20 pointer-events-none"
      />

      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/aktuality" className="text-[#DC2626] hover:underline">
          ← Zpět na aktuality
        </Link>
      </nav>

      {/* Článek */}
      <article className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <span className="bg-[#DC2626] text-white text-sm font-semibold px-3 py-1 rounded">
            {news.date}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-black">{news.title}</h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          {news.fullContent.split('\n').map((paragraph, index) => (
            paragraph ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
          ))}
        </div>

        {/* Galerie obrázků */}
        {news.images.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC2626]">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {news.images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={image} 
                    alt={`${news.title} - obrázek ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {news.images.length === 0 && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600">
              <em>Pro tuto aktualitu zatím nejsou k dispozici žádné fotografie.</em>
            </p>
          </div>
        )}
      </article>
    </div>
  );
}
