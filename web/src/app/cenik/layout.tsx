import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ceník služeb - IT a Projektování | Projekt & Develop",
  description: "Orientační ceník IT služeb (Apache Kafka, Kubernetes, Big Data) a projektování železniční infrastruktury. Transparentní ceny, nezávazná poptávka.",
  keywords: ["ceník", "ceny IT služeb", "cena Apache Kafka", "cena projektování", "Kubernetes cena", "SŽ dokumentace cena", "konzultace zdarma"],
  openGraph: {
    title: "Ceník služeb - IT a Projektování",
    description: "Orientační ceník našich IT služeb a projektování železniční infrastruktury.",
    url: "https://www.projektdevelop.cz/cenik",
  },
  alternates: {
    canonical: "https://www.projektdevelop.cz/cenik",
  },
};

export default function CenikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
