"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface NewsItem {
  slug: string;
  date: string;
  title: string;
  content: string;
  fullContent: string;
  images: string[];
}

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    // Rozbalení params
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
      
      // Načtení z localStorage
      const savedNews = localStorage.getItem("judokaplice-news");
      if (savedNews) {
        const allNews: NewsItem[] = JSON.parse(savedNews);
        const foundNews = allNews.find(item => item.slug === resolvedParams.slug);
        
        if (foundNews) {
          // Doplnění chybějících polí pro kompatibilitu
          setNews({
            ...foundNews,
            fullContent: foundNews.fullContent || foundNews.content,
            images: foundNews.images || []
          });
        } else {
          setNews(null);
        }
      }
    });
  }, [params]);

  if (news === null && slug) {
    notFound();
  }

  if (!news) {
    return <div className="max-w-4xl mx-auto px-4 py-16">Načítání...</div>;
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
