import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Často kladené otázky | Projekt & Develop",
  description: "Odpovědi na nejčastější dotazy o IT službách (Apache Kafka, Kubernetes) a projektování železniční infrastruktury. Ceny, termíny, podpora a další.",
  keywords: ["FAQ", "často kladené otázky", "Apache Kafka cena", "projektování SŽ", "konzultace zdarma", "IT podpora", "železniční dokumentace"],
  openGraph: {
    title: "FAQ - Často kladené otázky",
    description: "Odpovědi na nejčastější dotazy o našich IT službách a projektování.",
    url: "https://www.projektdevelop.cz/faq",
  },
  alternates: {
    canonical: "https://www.projektdevelop.cz/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
