import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projekt & Develop - Váš partner pro inovativní řešení",
  description: "Pomáháme firmám růst díky moderním datovým platformám a profesionálnímu projektování. Specializujeme se na Apache Kafka, Kubernetes, Big Data a železniční infrastrukturu.",
  keywords: ["Apache Kafka", "Kubernetes", "Big Data", "DevOps", "projektování", "železniční infrastruktura", "IT služby", "data streaming"],
  openGraph: {
    title: "Projekt & Develop - Váš partner pro inovativní řešení",
    description: "Pomáháme firmám růst díky moderním datovým platformám a profesionálnímu projektování.",
    url: "https://www.projektdevelop.cz",
  },
  alternates: {
    canonical: "https://www.projektdevelop.cz",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-sky-700">Projekt & Develop – Váš partner pro inovativní řešení</h1>
        
        <h2 className="text-2xl text-center mb-8 text-gray-700 font-medium leading-relaxed">Pomáháme proměnit vaše nápady v úspěšné projekty. Spojujeme kreativitu, technologii a zkušenosti.</h2>
        
        <p className="text-lg text-center mb-16 text-gray-600 leading-relaxed max-w-3xl mx-auto">Jsme společnost zaměřená na moderní projektové řízení a vývoj. Naším cílem je poskytovat špičková řešení, která vám pomohou růst a uspět v dynamickém prostředí.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* IT služby sekce */}
          <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-sky-700">IT služby – Apache Kafka, Kubernetes, Big Data</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Pomáháme firmám využít plný potenciál moderních datových platforem. Specializujeme se na návrh, instalaci a provoz řešení postavených na Apache Kafka, Kubernetes a Big Data technologiích – od architektury přes implementaci až po monitoring.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-base flex-grow">
              <li>Komplexní řešení od návrhu po provoz</li>
              <li>Integrace do GitOps prostředí (Flux, Argo CD)</li>
              <li>Monitoring & observabilita (Prometheus, Grafana, AKHQ)</li>
              <li>Bezpečnostní standardy a optimalizace výkonu</li>
              <li>Podpora hybridních scénářů – cloud i on-premise</li>
            </ul>
            <Link href="/it" className="inline-block bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold mt-auto">
              Více informací
            </Link>
          </div>

          {/* Projektování sekce */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-6 text-sky-700">Projektování sdělovací, zabezpečovací techniky a elektro</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Poskytujeme komplexní projektovou, rozpočtovou a kontrolní činnost v oblasti sdělovací, zabezpečovací a elektro techniky. Specializujeme se na železniční infrastrukturu, lineární stavby a technologické celky.
            </p>
            <p className="text-gray-700 font-semibold mb-3 text-base">Naše služby zahrnují:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-base flex-grow">
              <li>Projektovou dokumentaci pro SŽ a elektro</li>
              <li>Návrh řešení pro železniční koridory, přejezdy a technologické objekty</li>
              <li>Rozpočtovou dokumentaci a kalkulace nákladů</li>
              <li>Technické konzultace a optimalizaci návrhu</li>
              <li>Dozor a kontrolu při realizaci, včetně souladu s normami</li>
            </ul>
            <Link href="/projektovani" className="inline-block bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-sky-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold mt-auto">
              Více informací
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
