import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kontakt - Projekt & Develop",
  description: "Spojte se s námi. Rádi s vámi probereme detaily IT nebo projektového projektu. Email, telefon a kontaktní formulář.",
  keywords: ["kontakt", "Projekt & Develop", "kontakt IT služby", "kontakt projektování", "Česká republika", "Jindřichův Hradec"],
  openGraph: {
    title: "Kontakt - Projekt & Develop",
    description: "Spojte se s námi pro IT nebo projektové služby.",
    url: "https://www.projektdevelop.cz/kontakt",
  },
  alternates: {
    canonical: "https://www.projektdevelop.cz/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
