# Instrukce pro aktivaci Resend email služby

## Krok 1: Registrace na Resend
1. Navštivte https://resend.com
2. Klikněte na "Sign Up"
3. Registrujte se (zdarma - 3000 emailů/měsíc)

## Krok 2: Získání API klíče
1. Po přihlášení jděte na "API Keys"
2. Klikněte "Create API Key"
3. Zkopírujte klíč (začíná "re_...")

## Krok 3: Instalace balíčku
Spusťte v terminálu (ve složce `web`):
```bash
npm install resend
```

## Krok 4: Nastavení environment proměnné
Vytvořte soubor `.env.local` ve složce `web`:
```
RESEND_API_KEY=re_your_api_key_here
```

## Krok 5: Aktivace kódu
V souboru `src/app/api/contact/route.ts`:
1. Odkomentujte import na řádku 1: `import { Resend } from 'resend';`
2. Odkomentujte kód od řádku cca 20 (vše v /* */ blocích)

## Krok 6: Ověření domény (volitelné, ale doporučené)
1. V Resend dashboardu jděte na "Domains"
2. Přidejte doménu `projektdevelop.cz`
3. Nastavte DNS záznamy (SPF, DKIM)
4. Po ověření změňte `from:` email v route.ts na `kontakt@projektdevelop.cz`

**Bez ověřené domény:** Můžete používat `onboarding@resend.dev` (pouze pro testování)

## Testování
Po dokončení kroků 1-5 můžete okamžitě testovat formulář na http://localhost:3000/kontakt

Emaily se budou skutečně odesílat!
