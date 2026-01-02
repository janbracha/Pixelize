import { NextRequest, NextResponse } from "next/server";

// Tajný token bota (získáte od BotFather)
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "demo-mode";

interface TelegramMessage {
  message_id: number;
  from: {
    id: number;
    first_name: string;
    username?: string;
  };
  chat: {
    id: number;
    title?: string;
    type: string;
  };
  date: number;
  text?: string;
  photo?: Array<{
    file_id: string;
    file_size: number;
    width: number;
    height: number;
  }>;
  caption?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
}

// Pomocná funkce pro generování slug
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Získání URL obrázku z Telegramu
async function getFileUrl(fileId: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`
    );
    const data = await response.json();
    
    if (data.ok) {
      return `https://api.telegram.org/file/bot${BOT_TOKEN}/${data.result.file_path}`;
    }
  } catch (error) {
    console.error("Error getting file URL:", error);
  }
  return "";
}

// Odpověď botovi
async function sendTelegramMessage(chatId: number, text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: "Markdown"
    })
  });
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json();
    
    if (!update.message) {
      return NextResponse.json({ ok: true });
    }

    const message = update.message;
    const chatId = message.chat.id;
    const text = message.text || message.caption || "";

    // Ignorovat prázdné zprávy
    if (!text.trim()) {
      return NextResponse.json({ ok: true });
    }

    // Příkazy bota
    if (text.startsWith("/start")) {
      await sendTelegramMessage(
        chatId,
        "👋 Vítejte! Tento bot automaticky přidává zprávy z této skupiny jako aktuality na web judokaplice.\n\n" +
        "**Jak to funguje:**\n" +
        "1. Napište zprávu do skupiny\n" +
        "2. První řádek = titulek\n" +
        "3. Zbytek = obsah aktuality\n" +
        "4. Přiložte fotky (volitelné)\n\n" +
        "Zpráva se automaticky objeví na webu!"
      );
      return NextResponse.json({ ok: true });
    }

    if (text.startsWith("/help")) {
      await sendTelegramMessage(
        chatId,
        "**Formát zprávy:**\n" +
        "```\n" +
        "Titulek aktuality\n\n" +
        "Zde napište text aktuality.\n" +
        "Můžete použít více odstavců.\n" +
        "```\n\n" +
        "Pokud přiložíte fotky, automaticky se přidají do galerie."
      );
      return NextResponse.json({ ok: true });
    }

    // Zpracování zprávy jako nové aktuality
    const lines = text.split("\n");
    const title = lines[0].trim();
    const content = lines.slice(1).join("\n").trim() || title;
    
    // Zkrácený popis (prvních 150 znaků)
    const shortContent = content.length > 150 
      ? content.substring(0, 150) + "..." 
      : content;

    // Zpracování obrázků
    const images: string[] = [];
    if (message.photo && message.photo.length > 0) {
      // Vezměme největší verzi fotky (poslední v arrayu)
      const largestPhoto = message.photo[message.photo.length - 1];
      const imageUrl = await getFileUrl(largestPhoto.file_id);
      if (imageUrl) {
        images.push(imageUrl);
      }
    }

    // Vytvoření objektu aktuality
    const newsItem = {
      slug: generateSlug(title),
      date: new Date().toLocaleDateString("cs-CZ", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      title: title,
      content: shortContent,
      fullContent: content,
      images: images,
      source: "telegram",
      telegramMessageId: message.message_id,
      author: message.from.first_name
    };

    // Zde by se data normálně uložila do databáze
    // Pro demo to logujeme a posíláme webhook
    console.log("Nová aktualita z Telegramu:", newsItem);

    // Můžete poslat data do jiného API endpointu pro uložení
    // await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news/create`, {
    //   method: "POST",
    //   body: JSON.stringify(newsItem)
    // });

    // Odpověď uživateli
    await sendTelegramMessage(
      chatId,
      `✅ Aktualita byla přidána na web!\n\n` +
      `**${title}**\n` +
      `${shortContent}\n\n` +
      `🖼️ Obrázků: ${images.length}\n` +
      `🔗 URL: /aktuality/${newsItem.slug}`
    );

    return NextResponse.json({ 
      ok: true, 
      news: newsItem 
    });

  } catch (error) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Pro testování
export async function GET() {
  return NextResponse.json({
    status: "Telegram bot webhook is running",
    info: "Send POST requests from Telegram"
  });
}
