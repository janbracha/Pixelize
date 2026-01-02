# Telegram Bot Setup - Automatické aktuality

## 📱 Jak to funguje

1. **Admin napíše zprávu do Telegram skupiny**
2. **Bot zachytí zprávu**
3. **Automaticky vytvoří aktualitu na webu**
4. **Fotky se přidají do galerie**

---

## 🚀 Instalace (krok za krokem)

### 1. Vytvoření Telegram bota

1. Otevřete Telegram a najděte **@BotFather**
2. Napište `/newbot`
3. Zadejte jméno bota: `Judokaplice News Bot`
4. Zadejte username: `judokaplice_news_bot` (musí končit na `_bot`)
5. Zkopírujte **token** (vypadá jako `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 2. Přidání tokenu do projektu

Vytvořte soubor `.env.local` v kořenu projektu:

```bash
TELEGRAM_BOT_TOKEN=zde_vložte_váš_token
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Nastavení Webhooku

Po nasazení na server (nebo použití ngrok pro testování):

```bash
curl -X POST "https://api.telegram.org/bot<VÁŠ_TOKEN>/setWebhook?url=https://vase-domena.cz/api/telegram-webhook"
```

Nebo navštivte v prohlížeči:
```
https://api.telegram.org/bot<VÁŠ_TOKEN>/setWebhook?url=https://vase-domena.cz/api/telegram-webhook
```

### 4. Přidání bota do skupiny

1. Vytvořte Telegram skupinu pro klub
2. Přidejte bota do skupiny
3. Dejte botovi práva admina (aby mohl číst všechny zprávy)

---

## 💬 Jak používat

### Základní formát zprávy:

```
Titulek aktuality

Zde napište text aktuality.
Můžete použít více odstavců.

Automaticky se vytvoří slug z titulku.
```

### S fotografiemi:

Přiložte fotky ke zprávě → automaticky se přidají do galerie

### Příkazy:

- `/start` - Uvítací zpráva
- `/help` - Nápověda

---

## 🔧 Pro testování lokálně (ngrok)

1. Nainstalujte ngrok: `npm install -g ngrok`
2. Spusťte: `ngrok http 3000`
3. Zkopírujte HTTPS URL (např. `https://abc123.ngrok.io`)
4. Nastavte webhook: 
   ```
   https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://abc123.ngrok.io/api/telegram-webhook
   ```

---

## 📊 Integrace s existujícím admin panelem

Aktuálně bot loguje zprávy do konzole. Pro plnou integraci:

### Možnost 1: Uložení do API

Upravte webhook route a přidejte:

```typescript
// Po vytvoření newsItem
const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news/create`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newsItem)
});
```

### Možnost 2: Přímé uložení do DB

Propojte s databází (PostgreSQL, MongoDB):

```typescript
import { db } from "@/lib/db";

await db.news.create({
  data: newsItem
});
```

### Možnost 3: localStorage přes API

Pro demo verzi - API endpoint, který aktualizuje localStorage na frontendu.

---

## ✅ Výhody tohoto řešení

- ⚡ **Rychlé** - admin jen pošle zprávu
- 📱 **Mobilní** - z telefonu kdykoliv
- 🖼️ **Fotky** - automatický upload
- 👥 **Týmová práce** - více adminů v jedné skupině
- 🔔 **Notifikace** - bot potvrdí publikaci

---

## 🔒 Bezpečnost

Pro produkci přidejte:

1. **Ověření tokenu** v ENV proměnných
2. **Whitelist povolených chat_id** (jen vaše skupina)
3. **Rate limiting** na webhook endpoint
4. **Schvalovací workflow** (admin schválí před publikací)

---

## 📝 Další možnosti

- **Plánování publikací** - "/publish 15:00"
- **Editace aktualit** - "/edit <id>"
- **Mazání** - "/delete <id>"
- **Notifikace** - poslat zprávu členům klubu přes bot
- **Statistiky** - kolik lidí vidělo aktualitu

---

## 🆘 Troubleshooting

**Bot neodpovídá:**
- Zkontrolujte token v `.env.local`
- Ověřte webhook: `https://api.telegram.org/bot<TOKEN>/getWebhookInfo`

**Fotky se nenačítají:**
- Bot musí mít práva admina ve skupině

**Webhook nefunguje:**
- HTTPS je povinné (ne HTTP)
- Použijte ngrok pro lokální testování
