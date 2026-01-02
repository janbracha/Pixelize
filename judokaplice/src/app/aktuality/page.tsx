"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  slug: string;
  date: string;
  title: string;
  content: string;
  fullContent?: string;
  images?: string[];
}

export default function AktualityPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  // Načtení z localStorage
  useEffect(() => {
    const savedNews = localStorage.getItem("judokaplice-news");
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Výchozí data, pokud localStorage je prázdný
      const defaultNews: NewsItem[] = [
        {
          slug: "spusteni-noveho-webu",
          date: "2. ledna 2026",
          title: "Spuštění nového webu",
          content: "S radostí vám představujeme náš nový web! Najdete zde všechny důležité informace o našem klubu, trénincích a akcích.",
        },
        {
          slug: "vanocni-turnaj",
          date: "15. prosince 2025",
          title: "Vánoční turnaj úspěšně za námi",
          content: "Děkujeme všem účastníkům tradičního vánočního turnaje. Gratulujeme všem medailistům a těšíme se na další akce v roce 2026!",
        },
        {
          slug: "zapis-novych-clenu",
          date: "1. prosince 2025",
          title: "Zápis nových členů",
          content: "Informujeme, že klub přijímá nové členy ve všech věkových kategoriích. První trénink je zdarma. Kontaktujte nás pro více informací.",
        },
        {
          slug: "krajsky-prebor",
          date: "10. listopadu 2025",
          title: "Úspěchy našich judistů na krajském přeboru",
          content: "Naši judisté dosáhli skvělých výsledků na krajském přeboru. Gratulujeme všem závodníkům k výborným výkonům!",
        }
      ];
      setNews(defaultNews);
      localStorage.setItem("judokaplice-news", JSON.stringify(defaultNews));
    }
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      
      <h1 className="text-4xl font-bold mb-8 text-black">Aktuality</h1>
      
      <div className="space-y-8">
        {news.map((item, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="bg-[#DC2626] text-white text-sm font-semibold px-3 py-1 rounded">
                {item.date}
              </span>
            </div>
            
            <Link href={`/aktuality/${item.slug}`}>
              <h2 className="text-2xl font-bold mb-4 text-black hover:text-[#DC2626] transition-colors cursor-pointer">
                {item.title}
              </h2>
            </Link>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {item.content}
            </p>
            
            <Link 
              href={`/aktuality/${item.slug}`}
              className="inline-flex items-center text-[#DC2626] hover:text-[#B91C1C] font-semibold transition-colors"
            >
              Číst více
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {item.images && item.images.length > 0 && (
              <div className="mt-4">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Chcete být v obraze?
        </h2>
        <p className="text-gray-700 mb-6">
          Sledujte naši stránku nebo nás kontaktujte pro přidání do našeho informačního systému.
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
