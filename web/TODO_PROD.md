# TODO - Dokončení před nasazením na produkci

## 🚀 Před nasazením na webhosting

### 1. Google Analytics (volitelné, ale doporučené)
**Účel:** Sledování návštěvnosti webu

**Kroky:**
1. Vytvořit účet na https://analytics.google.com
2. Vytvořit Property pro `www.projektdevelop.cz`
3. Získat Measurement ID (např. `G-XXXXXXXXXX`)
4. Vytvořit soubor `src/app/analytics.tsx`:
```tsx
'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
```
5. V `src/app/layout.tsx` přidat import: `import Analytics from './analytics';`
6. V layout přidat komponentu `<Analytics />` do `<body>`
7. V `src/components/CookieConsent.tsx` odkomentovat řádky 18-20 (gtag consent update)

---

### 2. Email formulář - Resend aktivace
**Účel:** Skutečné odesílání emailů z kontaktního formuláře

**Stav:** Formulář funguje, ale jen simuluje odesílání

**Kroky:**
1. Registrace na https://resend.com (zdarma 3000 emailů/měsíc)
2. Získat API klíč (začíná `re_...`)
3. V terminálu (složka `web`):
   ```bash
   npm install resend
   ```
4. Vytvořit soubor `.env.local` ve složce `web`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
5. V souboru `src/app/api/contact/route.ts`:
   - Na řádku 1 přidat: `import { Resend } from 'resend';`
   - Odkomentovat celý blok od řádku ~17 do ~38 (kód pro Resend)
6. (Volitelné) Ověřit doménu v Resend pro profesionální emaily:
   - V Resend dashboardu → Domains
   - Přidat `projektdevelop.cz`
   - Nastavit DNS záznamy (SPF, DKIM)
   - Po ověření změnit `from:` na `kontakt@projektdevelop.cz`

**Poznámka:** Bez ověřené domény můžete používat `onboarding@resend.dev` (pouze pro testování)

**Testování:**
- Po aktivaci otevřete `/kontakt` a vyplňte formulář
- Email by měl dorazit na devops@projektdevelop.cz nebo jan.bracha@projektdevelop.cz

---

### 3. Scroll-to-top tlačítko
**Účel:** Rychlý návrat nahoru na dlouhých stránkách

**Stav:** Neimplementováno (změny byly vráceny)

**Kroky:**
1. Vytvořit soubor `src/components/ScrollToTop.tsx` (kód viz níže)
2. V `src/app/layout.tsx` přidat import: `import ScrollToTop from "@/components/ScrollToTop";`
3. V layout přidat `<ScrollToTop />` před `</body>`

**Kód pro ScrollToTop.tsx:**
```tsx
'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:from-sky-600 hover:to-blue-600 transition-all duration-300 z-50 group"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
```

---

### 4. Nastavení environment proměnných na hostingu
**Důležité:** Soubor `.env.local` se NEnahrává na server (je v .gitignore)

**Na webhostingu nastavit:**
- `RESEND_API_KEY` = váš Resend API klíč
- (případně další proměnné pro databázi, apod.)

**Podle typu hostingu:**
- **Vercel:** Settings → Environment Variables
- **Netlify:** Site settings → Environment variables
- **jiné:** podle dokumentace poskytovatele

---

### 5. Build a deploy
**Před nasazením otestovat produkční build lokálně:**

```bash
cd web
npm run build
npm run start
```

Otevřít http://localhost:3000 a zkontrolovat:
- ✅ Všechny stránky se načítají
- ✅ Formulář funguje
- ✅ Cookie banner se zobrazuje
- ✅ Favicon je správný
- ✅ Mobile menu funguje

---

### 6. Po nasazení - registrace do vyhledávačů

**Google Search Console:**
1. https://search.google.com/search-console
2. Přidat property `www.projektdevelop.cz`
3. Ověřit vlastnictví (DNS nebo HTML tag)
4. Odeslat sitemap: `https://www.projektdevelop.cz/sitemap.xml`

**Seznam.cz:**
1. https://search.seznam.cz/
2. Přidat web do vyhledávače

---

## ✅ Co je již hotové a funkční

1. ✅ **Mobile menu** - responzivní navigace s hamburgerem
2. ✅ **SEO metadata** - unikátní title, description, Open Graph pro každou stránku
3. ✅ **Kontaktní formulář** - UI hotové, čeká na Resend aktivaci
4. ✅ **Strukturovaná data** - JSON-LD schema pro Organization a LocalBusiness
5. ✅ **Favicon** - SVG ikona s initiálami P&D
6. ✅ **Loading states** - skeleton screens pro všechny stránky
7. ✅ **Sitemap.xml** - automaticky generovaná pro všechny stránky
8. ✅ **Robots.txt** - správné nastavení pro vyhledávače
9. ✅ **Cookie consent banner** - GDPR kompatibilní, připravený pro GA
10. ✅ **Moderní design** - pastelové barvy, Circuit Board pattern, zaoblené rohy
11. ✅ **Responzivní layout** - funguje na mobilu i desktopu
12. ✅ **Kompletní obsah** - všechny texty, kontakty, služby

---

## 📋 Kontrolní seznam před spuštěním

- [ ] Aktivovat Resend pro formulář
- [ ] Nastavit Google Analytics (volitelné)
- [ ] Přidat scroll-to-top tlačítko (volitelné)
- [ ] Otestovat produkční build (`npm run build`)
- [ ] Nastavit environment proměnné na hostingu
- [ ] Nasadit na webhosting
- [ ] Ověřit doménu v Resend (pro profesionální emaily)
- [ ] Zaregistrovat do Google Search Console
- [ ] Odeslat sitemap do Google
- [ ] Otestovat všechny funkce na produkci

---

## 🎯 Volitelná vylepšení do budoucna

- Blog/aktuality sekce (pro SEO a fresh content)
- Reference/testimonials (důvěryhodnost)
- Galerie projektů
- Multi-jazyčná verze (EN)
- Dark mode
- Newsletter signup
- Live chat podpora

---

**Poslední update:** 28. prosince 2025
