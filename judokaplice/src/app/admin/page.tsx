"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageUpload from "@/components/ImageUpload";

interface NewsItem {
  slug: string;
  date: string;
  title: string;
  content: string;
  fullContent: string;
  images: string[];
}

export default function AdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<NewsItem>({
    slug: "",
    date: "",
    title: "",
    content: "",
    fullContent: "",
    images: []
  });

  // Načtení dat z localStorage
  useEffect(() => {
    const savedNews = localStorage.getItem("judokaplice-news");
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Výchozí data
      const defaultNews: NewsItem[] = [
        {
          slug: "spusteni-noveho-webu",
          date: "2. ledna 2026",
          title: "Spuštění nového webu",
          content: "S radostí vám představujeme náš nový web! Najdete zde všechny důležité informace o našem klubu, trénincích a akcích.",
          fullContent: "S radostí vám představujeme náš nový web! Najdete zde všechny důležité informace o našem klubu, trénincích a akcích.\n\nNový web nabízí:\n- Přehledný rozvrh tréninků\n- Aktuální termíny akcí a soutěží\n- Kontaktní formulář\n- Galerie fotografií\n- Informace o našem klubu\n\nWeb je optimalizován pro všechna zařízení a nabízí moderní design s intuitivní navigací.",
          images: []
        },
        {
          slug: "vanocni-turnaj",
          date: "15. prosince 2025",
          title: "Vánoční turnaj úspěšně za námi",
          content: "Děkujeme všem účastníkům tradičního vánočního turnaje. Gratulujeme všem medailistům a těšíme se na další akce v roce 2026!",
          fullContent: "Děkujeme všem účastníkům tradičního vánočního turnaje. Gratulujeme všem medailistům a těšíme se na další akce v roce 2026!\n\nTurnaje se zúčastnilo celkem 85 judistů z celého regionu. Atmosféra byla skvělá a všichni si zasoutěžili v přátelském duchu.\n\nVýsledky:\n- Kategorie mladší žáci: 1. místo - Jan Novák\n- Kategorie starší žákyně: 2. místo - Petra Svobodová\n- Kategorie junioři: 3. místo - Martin Dvořák\n\nFotografie z turnaje najdete v galerii níže.",
          images: ["/hod1.png", "/hod2.png", "/logo.png"]
        }
      ];
      setNews(defaultNews);
      localStorage.setItem("judokaplice-news", JSON.stringify(defaultNews));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedNews: NewsItem[];
    if (editingIndex !== null) {
      // Editace existující
      updatedNews = [...news];
      updatedNews[editingIndex] = formData;
    } else {
      // Nová aktualita
      updatedNews = [...news, formData];
    }
    
    setNews(updatedNews);
    localStorage.setItem("judokaplice-news", JSON.stringify(updatedNews));
    
    // Reset formuláře
    setFormData({
      slug: "",
      date: "",
      title: "",
      content: "",
      fullContent: "",
      images: []
    });
    setEditingIndex(null);
    alert("Aktualita byla uložena!");
  };

  const handleEdit = (index: number) => {
    setFormData(news[index]);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index: number) => {
    if (confirm("Opravdu chcete smazat tuto aktualitu?")) {
      const updatedNews = news.filter((_, i) => i !== index);
      setNews(updatedNews);
      localStorage.setItem("judokaplice-news", JSON.stringify(updatedNews));
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-black">Admin - Správa aktualit</h1>
            <Link href="/aktuality" className="text-[#DC2626] hover:underline">
              ← Zpět na aktuality
            </Link>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Demo verze:</strong> Data jsou uložena v localStorage prohlížeče. 
              Po obnovení stránky aktuality zůstanou, ale zmizí při vymazání cache.
            </p>
          </div>

          {/* Formulář */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Titulek *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ 
                      ...formData, 
                      title: e.target.value,
                      slug: generateSlug(e.target.value)
                    });
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="Název aktuality"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Datum *</label>
                <input
                  type="text"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="např. 15. ledna 2026"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">URL slug (automaticky) *</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="url-friendly-nazev"
              />
              <p className="text-xs text-gray-500 mt-1">
                URL: /aktuality/{formData.slug || "url-slug"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Krátký popis (pro seznam) *</label>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                placeholder="Stručný popis pro náhled..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Plný obsah *</label>
              <textarea
                required
                value={formData.fullContent}
                onChange={(e) => setFormData({ ...formData, fullContent: e.target.value })}
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                placeholder="Celý text aktuality (každý odstavec na nový řádek)..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Galerie obrázků</label>
              <ImageUpload
                onImagesUploaded={(urls) => setFormData({ ...formData, images: urls })}
                existingImages={formData.images}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                {editingIndex !== null ? "Uložit změny" : "Přidat aktualitu"}
              </button>

              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      slug: "",
                      date: "",
                      title: "",
                      content: "",
                      fullContent: "",
                      images: []
                    });
                    setEditingIndex(null);
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Zrušit úpravu
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Seznam aktualit */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Existující aktuality ({news.length})</h2>
          
          {news.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Zatím žádné aktuality</p>
          ) : (
            <div className="space-y-4">
              {news.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-black">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.date} • /aktuality/{item.slug}</p>
                      <p className="text-gray-700 text-sm">{item.content}</p>
                      {item.images.length > 0 && (
                        <p className="text-xs text-gray-500 mt-2">
                          📷 {item.images.length} obrázků
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        Upravit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                      >
                        Smazat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
