"use client";

import { useState } from "react";

export default function TelegramTestPage() {
  const [title, setTitle] = useState("Testovací aktualita");
  const [content, setContent] = useState("Toto je testovací zpráva.\n\nMůžete vložit více odstavců.\n\nAutomaticky se vytvoří aktualita na webu.");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const sendTestMessage = async () => {
    setLoading(true);
    setResponse("");

    try {
      // Simulace Telegram webhook zprávy
      const telegramMessage = {
        update_id: Math.floor(Math.random() * 1000000),
        message: {
          message_id: Math.floor(Math.random() * 10000),
          from: {
            id: 123456789,
            first_name: "Test User",
            username: "testuser"
          },
          chat: {
            id: -1001234567890,
            title: "Judokaplice Test Skupina",
            type: "group"
          },
          date: Math.floor(Date.now() / 1000),
          text: `${title}\n\n${content}`
        }
      };

      const res = await fetch("/api/telegram-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(telegramMessage)
      });

      const data = await res.json();
      
      if (data.ok) {
        // Uložení do localStorage (stejně jako admin panel)
        const savedNews = localStorage.getItem("judokaplice-news");
        const existingNews = savedNews ? JSON.parse(savedNews) : [];
        
        // Přidání nové aktuality
        const newNewsItem = {
          slug: data.news.slug,
          date: data.news.date,
          title: data.news.title,
          content: data.news.content,
          fullContent: data.news.fullContent,
          images: data.news.images || []
        };
        
        existingNews.unshift(newNewsItem); // Přidá na začátek (nejnovější)
        localStorage.setItem("judokaplice-news", JSON.stringify(existingNews));
        
        setResponse(
          `✅ Úspěch! Aktualita byla přidána na web!\n\n` +
          `Titulek: ${data.news.title}\n` +
          `Datum: ${data.news.date}\n` +
          `Slug: ${data.news.slug}\n` +
          `URL: /aktuality/${data.news.slug}\n\n` +
          `Krátký popis: ${data.news.content}\n\n` +
          `---\n\n` +
          `✅ Aktualita uložena do localStorage!\n` +
          `📊 Celkem aktualit: ${existingNews.length}\n\n` +
          `Můžete ji zobrazit na: /aktuality nebo /admin`
        );
      } else {
        setResponse(`❌ Chyba: ${data.error || "Něco se pokazilo"}`);
      }
    } catch (error) {
      setResponse(`❌ Chyba při odesílání: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black mb-2">
              🤖 Telegram Bot - Test
            </h1>
            <p className="text-gray-600">
              Simulujte zprávu z Telegram skupiny bez nutnosti mít Telegram účet
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Jak to funguje:</strong> Tato stránka simuluje webhook request z Telegramu. 
              V produkci by zprávy přicházely automaticky ze skutečné Telegram skupiny.
            </p>
          </div>

          {/* Formulář simulace */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Titulek (první řádek zprávy)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                placeholder="Název aktuality..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Obsah zprávy
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                placeholder="Text aktuality..."
              />
            </div>

            <button
              onClick={sendTestMessage}
              disabled={loading}
              className={`
                w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-8 rounded-lg transition-colors
                ${loading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {loading ? "Odesílám..." : "📤 Odeslat testovací zprávu"}
            </button>
          </div>

          {/* Náhled zprávy */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">📱 Náhled zprávy v Telegramu:</h3>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                  TU
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">Test User</div>
                  <div className="bg-white text-gray-900 rounded-lg p-3 shadow">
                    <div className="whitespace-pre-wrap">{title}\n\n{content}</div>
                  </div>
                  <div className="text-xs text-blue-100 mt-1">
                    Judokaplice Test Skupina
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Odpověď */}
          {response && (
            <div className={`p-4 rounded-lg ${response.startsWith("✅") ? "bg-green-50 border-l-4 border-green-400" : "bg-red-50 border-l-4 border-red-400"}`}>
              <h3 className="font-semibold mb-2">Odpověď bota:</h3>
              <pre className="text-sm whitespace-pre-wrap text-gray-800">{response}</pre>
            </div>
          )}

          {/* Instrukce */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">📚 Jak to funguje v produkci:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Admin napíše zprávu do Telegram skupiny</li>
              <li>Telegram pošle webhook na váš server</li>
              <li>Bot zpracuje zprávu a vytvoří aktualitu</li>
              <li>Bot odpoví s potvrzením do skupiny</li>
              <li>Aktualita se objeví na webu</li>
            </ol>

            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Pro ostrou verzi:</strong> Potřebujete vytvořit Telegram bota přes @BotFather, 
                nastavit webhook a připojit reálnou databázi. Detaily v souboru TELEGRAM_BOT_SETUP.md
              </p>
            </div>
          </div>
        </div>

        {/* Rychlé odkazy */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/aktuality"
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-2xl mb-2">📰</div>
            <div className="font-semibold text-gray-900">Zobrazit aktuality</div>
          </a>
          <a
            href="/admin"
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-semibold text-gray-900">Admin panel</div>
          </a>
          <a
            href="/"
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-semibold text-gray-900">Domovská stránka</div>
          </a>
        </div>
      </div>
    </div>
  );
}
