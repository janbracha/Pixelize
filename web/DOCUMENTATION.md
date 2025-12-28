# Dokumentace webu Projekt & Develop

## 📋 Obsah
1. [Přehled projektu](#přehled-projektu)
2. [Technologie](#technologie)
3. [Struktura projektu](#struktura-projektu)
4. [Komponenty](#komponenty)
5. [Stránky](#stránky)
6. [Design systém](#design-systém)
7. [SEO optimalizace](#seo-optimalizace)
8. [Běžné úpravy](#běžné-úpravy)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## 📖 Přehled projektu

**Projekt:** Firemní web pro PROJEKT & DEVELOP s.r.o.  
**URL:** https://www.projektdevelop.cz  
**Framework:** Next.js 16 (React 19)  
**Styling:** Tailwind CSS 4  
**Jazyk:** TypeScript  

### Hlavní funkce
- ✅ Responzivní design (mobil + desktop)
- ✅ SEO optimalizováno
- ✅ Kontaktní formulář
- ✅ Cookie consent banner (GDPR)
- ✅ Mobile hamburger menu
- ✅ Loading states
- ✅ Strukturovaná data pro Google

---

## 🛠 Technologie

### Core Stack
```json
{
  "next": "16.1.1",          // React framework
  "react": "19.2.3",         // UI knihovna
  "typescript": "^5",        // Type safety
  "tailwindcss": "^4"        // CSS framework
}
```

### Vývojové nástroje
- **ESLint** - kvalita kódu
- **Turbopack** - rychlý build
- **PostCSS** - CSS processing

### Externí služby (připraveno)
- **Resend** - odesílání emailů z formuláře
- **Google Analytics** - tracking návštěvnosti

---

## 📁 Struktura projektu

```
web/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout (navbar, footer)
│   │   ├── page.tsx             # Homepage
│   │   ├── loading.tsx          # Loading state pro homepage
│   │   ├── globals.css          # Globální CSS
│   │   ├── icon.svg             # Favicon
│   │   ├── apple-icon.svg       # Apple touch icon
│   │   ├── sitemap.ts           # Automatická sitemap.xml
│   │   ├── robots.ts            # Robots.txt
│   │   │
│   │   ├── it/                  # IT služby stránka
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   │
│   │   ├── projektovani/        # Projektování stránka
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   │
│   │   ├── kontakt/             # Kontaktní stránka
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   │
│   │   └── api/                 # API endpoints
│   │       └── contact/
│   │           └── route.ts     # Formulář handler
│   │
│   └── components/              # Reusable komponenty
│       ├── Navigation.tsx       # Hlavička + menu
│       ├── Footer.tsx           # Patička
│       ├── CookieConsent.tsx    # Cookie banner
│       └── StructuredData.tsx   # JSON-LD schema
│
├── public/                      # Statické soubory (pokud potřeba)
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.mjs         # Tailwind konfigurace
├── next.config.ts              # Next.js konfigurace
├── TODO_PROD.md                # Checklist pro produkci
└── README.md                   # Základní info
```

---

## 🧩 Komponenty

### Navigation.tsx
**Účel:** Hlavní navigace webu  
**Funkce:**
- Logo a název firmy
- Tagline: "Váš partner pro inovativní řešení"
- Desktop menu (4 položky)
- Mobile hamburger menu (< 768px)
- Modré gradient pozadí
- Zaoblené rohy (rounded-3xl)

**Stav:** Client-side (`'use client'`) - používá `useState` pro hamburger

**Úpravy:**
```tsx
// Změna navigačních položek
<li><Link href="/nova-stranka">Nová stránka</Link></li>

// Změna barev
className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500"
```

---

### Footer.tsx
**Účel:** Patička na všech stránkách  
**Struktura:** 3 sloupce
1. **O společnosti** - název, adresa, IČO, web
2. **Rychlé odkazy** - navigace
3. **Kontakt** - dva kontakty (IT, Projektování) + LinkedIn

**Funkce:**
- Copyright s aktuálním rokem
- Clickable emaily a telefony
- LinkedIn ikona (SVG)
- Responzivní layout (mobile = 1 sloupec)

**Úpravy:**
```tsx
// Změna kontaktu
<a href="mailto:novy@email.cz">novy@email.cz</a>

// Změna adresy
<p>Nová adresa 123, PSČ 111 11</p>
```

---

### CookieConsent.tsx
**Účel:** GDPR cookie banner  
**Funkce:**
- Zobrazí se při první návštěvě
- Tlačítka: "Přijmout vše" / "Odmítnout"
- Ukládá volbu do localStorage
- Připraveno pro Google Analytics

**Stav:** Client-side (`'use client'`)  
**LocalStorage klíč:** `cookieConsent`

**Úpravy:**
```tsx
// Změna textu
<p>Nový text o cookies...</p>

// Odkaz na politiku
<a href="/nova-stranka">nový odkaz</a>
```

---

### StructuredData.tsx
**Účel:** SEO - strukturovaná data pro Google  
**Obsahuje:**
- **Organization schema** - firma, kontakty, služby
- **LocalBusiness schema** - adresa, otevírací doba

**Výhody:**
- Rich snippets ve vyhledávání
- Knowledge Graph panel
- Lepší lokální SEO

**Úpravy:**
```tsx
// Změna adresy
"streetAddress": "Nová ulice 456",
"postalCode": "111 11",

// Změna telefonu
"telephone": "+420-XXX-XXX-XXX",
```

---

## 📄 Stránky

### Homepage (/)
**Soubor:** `src/app/page.tsx`  
**Účel:** Úvodní stránka s přehledem služeb

**Struktura:**
1. **H1 nadpis** - hlavní titulek
2. **H2 podnádpis** - mission statement
3. **Úvodní text** - popis firmy
4. **2 karty služeb:**
   - IT služby (Apache Kafka, Kubernetes, Big Data)
   - Projektování (železniční infrastruktura)

**Design:**
- Gradient pozadí (sky-50, blue-50)
- Zaoblené karty (rounded-3xl)
- Hover efekty (scale, shadow)
- Responsive (mobile = 1 sloupec)

**SEO metadata:**
- Title: "Projekt & Develop - Váš partner pro inovativní řešení"
- Description s klíčovými slovy

---

### IT služby (/it)
**Soubor:** `src/app/it/page.tsx`  
**Účel:** Detailní popis IT služeb

**Sekce:**
1. Služby v oblasti Apache Kafka
2. Kafka Connect
3. Data Governance & Monitoring
4. Migrace dat
5. Datová analýza & Data Stream
6. Školení Apache Kafka

**Každá sekce:**
- Nadpis (H2)
- Popisný text
- Bullet points s detaily
- Střídavé gradient pozadí

---

### Projektování (/projektovani)
**Soubor:** `src/app/projektovani/page.tsx`  
**Účel:** Projektová činnost

**Sekce:**
1. Projektová a rozpočtová činnost
2. Dozor a kontrola
3. Projektová činnost elektro
4. Proč si vybrat nás

**Design:**
- Konzistentní s IT stránkou
- Střídavé barvy pozadí

---

### Kontakt (/kontakt)
**Soubor:** `src/app/kontakt/page.tsx`  
**Účel:** Kontaktní formulář a informace

**Komponenty:**
1. **Kontaktní formulář:**
   - Jméno, email, telefon
   - Oblast zájmu (dropdown)
   - Zpráva
   - Validace (povinná pole)
   - Success/Error stavy

2. **Kontaktní karty (2x):**
   - IT služby kontakt
   - Projektová činnost kontakt

3. **Informace o společnosti:**
   - Plná adresa
   - IČO
   - Web
   - Soudní registrace
   - LinkedIn

**API:** `/api/contact`

---

## 🎨 Design systém

### Barevná paleta

**Primární (modrá):**
```css
sky-400: #38bdf8   /* Světle modrá */
sky-500: #0ea5e9   /* Střední modrá */
sky-600: #0284c7   /* Tmavší modrá */
sky-700: #0369a1   /* Tmavá pro nadpisy */

blue-400: #60a5fa  /* Accent modrá */
blue-500: #3b82f6  /* Tlačítka */
```

**Neutrální:**
```css
white: #ffffff     /* Pozadí karet */
gray-700: #374151  /* Text */
gray-900: #111827  /* Tmavý text */
```

**Accent:**
```css
amber-100: #fef3c7 /* Hover v navigaci */
```

### Gradienty

**Navigace:**
```css
bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500
```

**Patička:**
```css
bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600
```

**Pozadí stránky:**
```css
linear-gradient(135deg, 
  #dbeafe 0%,   /* Sky-200 */
  #e0f2fe 20%,  /* Sky-100 */
  #f0f9ff 40%,  /* Sky-50 */
  #f0f9ff 60%,  /* Sky-50 */
  #bfdbfe 80%,  /* Sky-200 */
  #93c5fd 100%  /* Sky-300 */
)
```

**Circuit Board pattern:**
- Inline SVG v `globals.css`
- Opacity: 1, fill-opacity: 0.4
- Modrý odstín: #93c5fd

### Typografie

**Font stack:**
- Sans-serif: Geist Sans (next/font/google)
- Monospace: Geist Mono
- Fallback: Arial, Helvetica

**Velikosti:**
```css
text-5xl  /* 3rem - H1 nadpisy */
text-3xl  /* 1.875rem - H2 nadpisy */
text-2xl  /* 1.5rem - H3 nadpisy */
text-xl   /* 1.25rem - Velký text */
text-lg   /* 1.125rem - Normální text */
text-base /* 1rem - Základní text */
text-sm   /* 0.875rem - Malý text */
```

### Spacing

**Padding:**
```css
p-4   /* 1rem */
p-6   /* 1.5rem */
p-8   /* 2rem */
p-10  /* 2.5rem */
```

**Margin:**
```css
mb-4  /* margin-bottom: 1rem */
mb-6  /* margin-bottom: 1.5rem */
mb-8  /* margin-bottom: 2rem */
mb-12 /* margin-bottom: 3rem */
```

**Gap (flex/grid):**
```css
gap-3  /* 0.75rem */
gap-6  /* 1.5rem */
gap-8  /* 2rem */
```

### Zaoblení

```css
rounded-lg    /* 0.5rem */
rounded-3xl   /* 1.5rem - karty, navigace, footer */
rounded-full  /* 50% - tlačítka, ikony */
```

### Stíny

```css
shadow-lg     /* Základní stín */
shadow-xl     /* Výraznější stín */
shadow-2xl    /* Nejsilnější stín */
hover:shadow-xl /* Hover efekt */
```

### Animace

**Transitions:**
```css
transition-colors duration-200  /* Barvy */
transition-all duration-300     /* Všechny vlastnosti */
transition-transform duration-200 /* Transform */
```

**Hover efekty:**
```css
hover:scale-105       /* Zvětšení */
hover:shadow-xl       /* Více stínu */
hover:text-amber-100  /* Změna barvy */
hover:-translate-y-1  /* Posunutí nahoru */
```

**Custom animace:**
```css
@keyframes slide-up {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 0.4s ease-out; }
```

### Breakpointy (Tailwind)

```css
/* Mobile first */
default:  < 640px   /* Mobil */
sm:       ≥ 640px   /* Malý tablet */
md:       ≥ 768px   /* Tablet */
lg:       ≥ 1024px  /* Desktop */
xl:       ≥ 1280px  /* Velký desktop */
```

**Použití:**
```tsx
className="block md:hidden"  // Viditelné jen na mobilu
className="hidden md:flex"   // Skryté na mobilu, viditelné na tabletu+
```

---

## 🔍 SEO optimalizace

### Metadata struktura

**Root layout (všechny stránky):**
```tsx
export const metadata: Metadata = {
  title: "Projekt & Develop - IT a Projektování",
  description: "...",
  keywords: [...],
  authors: [...],
  openGraph: {...},
  twitter: {...}
}
```

**Jednotlivé stránky:**
Každá stránka má vlastní metadata s unikátním title a description.

### Open Graph (Facebook, LinkedIn)

```tsx
openGraph: {
  title: "...",
  description: "...",
  url: "https://www.projektdevelop.cz/...",
  siteName: "Projekt & Develop",
  locale: "cs_CZ",
  type: "website",
}
```

### Strukturovaná data (JSON-LD)

**Organization schema:**
- Název firmy
- Adresa
- Kontakty (2x)
- LinkedIn
- Oblast působení
- Klíčové služby

**LocalBusiness schema:**
- Geo koordináty
- Otevírací doba
- Telefon, email

### Sitemap.xml

**Automaticky generovaná:**
```
/            - priority: 1.0
/it          - priority: 0.9
/projektovani - priority: 0.9
/kontakt     - priority: 0.8
```

**Dostupné na:** `/sitemap.xml`

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://www.projektdevelop.cz/sitemap.xml
```

**Dostupné na:** `/robots.txt`

### Performance optimalizace

**Static Generation:**
- Všechny stránky jsou pre-renderované při buildu
- Nejrychlejší možné načítání
- Perfektní pro SEO

**Image optimization:**
- SVG favicon (nemusí se stahovat v různých velikostech)
- Inline SVG pattern (0 HTTP requestů)

**Code splitting:**
- Next.js automaticky dělí bundle
- Každá stránka načte jen co potřebuje

---

## 🔧 Běžné úpravy

### Změna kontaktních údajů

**Email a telefon v patičce:**
```tsx
// src/components/Footer.tsx, řádky cca 50-80

// IT služby:
<a href="mailto:novy-email@firma.cz">novy-email@firma.cz</a>
<a href="tel:+420123456789">+420 123 456 789</a>

// Projektování:
<a href="mailto:jiny-email@firma.cz">jiny-email@firma.cz</a>
```

**V kontaktní stránce:**
```tsx
// src/app/kontakt/page.tsx, řádky cca 20-40
```

**Ve strukturovaných datech:**
```tsx
// src/components/StructuredData.tsx, řádky cca 15-30
"telephone": "+420-XXX-XXX-XXX",
"email": "novy@email.cz",
```

---

### Změna adresy firmy

**Hledejte:** "Nedabyle 122" a "370 06"

**Soubory k úpravě:**
1. `src/components/Footer.tsx`
2. `src/app/kontakt/page.tsx`
3. `src/components/StructuredData.tsx`
4. SEO metadata v `src/app/kontakt/page.tsx`

---

### Přidání nové stránky

**1. Vytvořte složku:**
```
src/app/nova-stranka/
  ├── page.tsx       # Obsah stránky
  └── loading.tsx    # Loading state (volitelné)
```

**2. Vytvořte page.tsx:**
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nová stránka | Projekt & Develop",
  description: "Popis nové stránky...",
};

export default function NovaStranka() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-sky-700">
        Nadpis nové stránky
      </h1>
      {/* Váš obsah */}
    </div>
  );
}
```

**3. Přidejte do navigace:**
```tsx
// src/components/Navigation.tsx
<li>
  <Link href="/nova-stranka">Nová stránka</Link>
</li>
```

**4. Přidejte do sitemap:**
```tsx
// src/app/sitemap.ts
{
  url: `${baseUrl}/nova-stranka`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
},
```

---

### Změna barev

**Globální změna modré na jinou barvu:**

1. **V Tailwind classes nahraďte:**
   - `sky-400` → `purple-400`
   - `sky-500` → `purple-500`
   - `blue-400` → `indigo-400`

2. **Circuit Board pattern:**
```css
/* src/app/globals.css, řádek cca 55 */
fill='%2393c5fd'  /* Změňte hex kód (URL encoded) */
```

3. **Gradient pozadí:**
```tsx
// src/app/layout.tsx, řádek cca 50
background: 'linear-gradient(...)'  // Upravte hex kódy
```

**Tailwind barvy:** https://tailwindcss.com/docs/customizing-colors

---

### Úprava textů

**Jednoduché texty:**
- Přímo v `.tsx` souborech upravte text mezi tagy

**Strukturované seznamy:**
```tsx
<ul className="list-disc list-inside space-y-2">
  <li>První položka</li>
  <li>Druhá položka</li>
  <li><strong>Tučný text:</strong> normální text</li>
</ul>
```

**Odstavce:**
```tsx
<p className="text-lg text-gray-700 leading-relaxed">
  Váš text zde...
</p>
```

---

### Změna loga/faviconu

**Favicon:**
1. Vytvořte nový `icon.svg` (64x64px)
2. Nahraďte `src/app/icon.svg`
3. Pro Apple: nahraďte `src/app/apple-icon.svg` (180x180px)

**Logo v navigaci:**
```tsx
// src/components/Navigation.tsx, řádek cca 15
<span className="text-2xl font-bold">Nový název</span>
```

---

### Přidání obrázků

**1. Umístěte obrázek:**
```
public/
  └── images/
      └── muj-obrazek.jpg
```

**2. Použijte v kódu:**
```tsx
import Image from 'next/image';

<Image 
  src="/images/muj-obrazek.jpg"
  alt="Popis obrázku"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

**Next.js Image výhody:**
- Automatická optimalizace
- Lazy loading
- Responzivní velikosti

---

## 🚀 Deployment

### Příprava před nasazením

**1. Test produkčního buildu:**
```bash
cd web
npm run build
npm run start
```

Otevřete http://localhost:3000 a zkontrolujte všechny stránky.

**2. Zkontrolujte TODO_PROD.md:**
- Aktivovat Resend (pro funkční formulář)
- Nastavit Google Analytics (volitelné)
- Ověřit všechny URL ve strukturovaných datech

---

### Vercel (doporučeno - nejjednodušší)

**1. Registrace:**
- https://vercel.com/signup
- Přihlaste se přes GitHub

**2. Import projektu:**
- "Add New Project"
- Import z GitHub repository
- Detekuje automaticky Next.js

**3. Konfigurace:**
- Framework: Next.js (auto-detect)
- Root Directory: `web`
- Environment Variables:
  ```
  RESEND_API_KEY=re_your_api_key
  ```

**4. Deploy:**
- Klikněte "Deploy"
- Čas: ~2 minuty
- Automatická URL: `your-project.vercel.app`

**5. Custom doména:**
- Settings → Domains
- Přidejte `www.projektdevelop.cz`
- Nastavte DNS záznamy u registrátora domény

**Výhody Vercel:**
- ✅ Automatické CI/CD (každý push = deploy)
- ✅ Preview deployments (testování před produkcí)
- ✅ Globální CDN
- ✅ Automatické HTTPS
- ✅ Edge functions
- ✅ Zdarma pro malé projekty

---

### Netlify (alternativa)

**Podobný proces jako Vercel:**
1. https://netlify.com
2. Import z Git
3. Build command: `npm run build`
4. Publish directory: `web/.next`
5. Environment variables

---

### Klasický webhosting (složitější)

**Požadavky:**
- Node.js 18+
- NPM/Yarn
- PM2 (pro běh na pozadí)

**Kroky:**
1. Build lokálně: `npm run build`
2. Upload souborů přes FTP/SSH
3. Na serveru:
   ```bash
   npm install --production
   npm run start
   ```
4. Nastavit reverse proxy (Nginx/Apache)
5. SSL certifikát (Let's Encrypt)

**Poznámka:** Mnohem složitější než Vercel/Netlify.

---

### Post-deployment checklist

**Ihned po nasazení:**
- [ ] Všechny stránky se načítají
- [ ] Mobile menu funguje
- [ ] Formulář se zobrazuje
- [ ] Cookie banner funguje
- [ ] Favicon je správný

**Do 24 hodin:**
- [ ] Zaregistrovat do Google Search Console
- [ ] Odeslat sitemap: `/sitemap.xml`
- [ ] Ověřit robots.txt: `/robots.txt`
- [ ] Test na mobilním zařízení

**Do týdne:**
- [ ] Aktivovat Resend pro emaily
- [ ] Nastavit Google Analytics
- [ ] Test strukturovaných dat: https://search.google.com/test/rich-results

---

## 🐛 Troubleshooting

### Build fails

**Error: "Module not found"**
```bash
# Přeinstalujte dependencies
rm -rf node_modules package-lock.json
npm install
```

**Error: "Port 3000 is already in use"**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Nebo použijte jiný port
npm run dev -- -p 3001
```

---

### Cookie banner se nezobrazuje

**1. Zkontrolujte localStorage:**
- F12 → Application → Local Storage
- Smažte klíč `cookieConsent`
- Refreshujte

**2. Zkontrolujte Console:**
- F12 → Console
- Hledejte červené chyby

---

### Formulář neodesílá emaily

**Nejčastější příčina:** Resend není aktivován

**Řešení:**
1. Zkontrolujte `.env.local`: `RESEND_API_KEY`
2. Instalace: `npm install resend`
3. Odkomentovat kód v `src/app/api/contact/route.ts`
4. Restart serveru

---

### Stránka je pomalá

**Možné příčiny:**
1. Development mode (pomalé) → použijte production build
2. Velké obrázky → optimizujte (WebP, Next.js Image)
3. Mnoho JS → zkontrolujte bundle size

**Analýza:**
```bash
npm run build
# Zkontrolujte "Route size" výstup
```

---

### SEO metadata se nezobrazují

**Kontrola:**
1. View source (`Ctrl+U`)
2. Hledejte `<meta property="og:title"`
3. Pokud chybí → problém s metadata exportem

**Řešení:**
- Metadata musí být v `page.tsx`, ne v komponentách
- Musí být na úrovni stránky, ne v client componentech

---

### Mobile menu nefunguje

**Kontrola:**
1. Console chyby (F12)
2. Šířka obrazovky < 768px?
3. JavaScript enabled?

**Debug:**
```tsx
// Přidejte do Navigation.tsx
console.log('Menu open:', isMenuOpen);
```

---

## 📞 Podpora

### Zdrojový kód
- GitHub: (pokud je veřejný)
- Lokálně: `C:\git\soukrome\Pixelize\web`

### Dokumentace technologií
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

### Další soubory
- `TODO_PROD.md` - checklist před produkcí
- `RESEND_SETUP.md` - návod na email setup
- `package.json` - seznam balíčků

---

**Datum vytvoření:** 28. prosince 2025  
**Verze:** 1.0  
**Autor:** GitHub Copilot + User collaboration
