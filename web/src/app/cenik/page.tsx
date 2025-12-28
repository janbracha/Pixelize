import Link from 'next/link';
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

const itServices = [
  {
    name: "Apache Kafka Cluster - Základní",
    description: "3 uzly, základní monitoring, dokumentace, školení týmu",
    price: "od 150 000 Kč",
    period: "jednorázově"
  },
  {
    name: "Apache Kafka Cluster - Enterprise",
    description: "Multi-cloud, high availability, pokročilý monitoring, 24/7 podpora",
    price: "od 500 000 Kč",
    period: "jednorázově"
  },
  {
    name: "Kubernetes Orchestrace",
    description: "Návrh, instalace, GitOps automatizace (Flux/Argo CD)",
    price: "od 200 000 Kč",
    period: "jednorázově"
  },
  {
    name: "Monitoring & Observability",
    description: "Prometheus, Grafana, AlertManager, dashboardy, alerting",
    price: "od 80 000 Kč",
    period: "jednorázově"
  },
  {
    name: "Migrace dat",
    description: "Přechod z legacy systémů, nulový downtime, Kafka Connect",
    price: "od 120 000 Kč",
    period: "jednorázově"
  },
  {
    name: "Školení Apache Kafka",
    description: "2denní workshop pro váš tým (až 10 osob), základy až pokročilé",
    price: "40 000 Kč",
    period: "za školení"
  },
  {
    name: "Měsíční podpora IT",
    description: "Monitoring, updaty, optimalizace, konzultace, reakce na incidenty",
    price: "od 20 000 Kč",
    period: "měsíčně"
  }
];

const projectServices = [
  {
    name: "Projektová dokumentace - Malý objekt",
    description: "Přejezd, zastávka, technologický objekt (DSP, DPS, DUR)",
    price: "od 80 000 Kč",
    period: "za projekt"
  },
  {
    name: "Projektová dokumentace - Střední objekt",
    description: "Stanice, úsek trati, koridor (komplexní dokumentace)",
    price: "od 250 000 Kč",
    period: "za projekt"
  },
  {
    name: "Projektová dokumentace - Velký projekt",
    description: "Rozsáhlý koridor, modernizace stanice (všechny profese)",
    price: "od 500 000 Kč",
    period: "za projekt"
  },
  {
    name: "Elektro projekty",
    description: "Silnoproud, slaboproud, světelné technika pro železniční objekty",
    price: "od 60 000 Kč",
    period: "za projekt"
  },
  {
    name: "Rozpočtová dokumentace",
    description: "Položkové rozpočty, soupisy prací, kalkulace nákladů",
    price: "od 15 000 Kč",
    period: "za rozpočet"
  },
  {
    name: "Autorský dozor",
    description: "Pravidelné kontroly na stavbě, koordinace, konzultace",
    price: "od 8 000 Kč",
    period: "za den"
  },
  {
    name: "Technická konzultace",
    description: "Odborné poradenství, optimalizace návrhů, posouzení dokumentace",
    price: "3 000 Kč",
    period: "za hodinu"
  }
];

function PriceCard({ name, description, price, period }: { name: string; description: string; price: string; period: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-bold text-sky-700 mb-3">{name}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="border-t border-sky-100 pt-4">
        <div className="text-3xl font-bold text-sky-600">{price}</div>
        <div className="text-sm text-gray-500 mt-1">{period}</div>
      </div>
    </div>
  );
}

export default function Cenik() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-sky-700">
          Ceník služeb
        </h1>
        
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Uvedené ceny jsou orientační.</strong> Finální cena závisí na rozsahu projektu, časové náročnosti a specifických požadavcích. 
            <span className="block mt-2 font-semibold text-sky-700">První konzultace je vždy zdarma!</span>
          </p>
        </div>

        {/* IT služby sekce */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-12 bg-gradient-to-b from-sky-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-sky-700">IT služby</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
              <PriceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Projektování sekce */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-sky-500 rounded-full"></div>
            <h2 className="text-4xl font-bold text-sky-700">Projektování</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectServices.map((service, index) => (
              <PriceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-3xl shadow-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Nezávazná cenová nabídka</h2>
          <p className="text-lg mb-6 opacity-90">
            Potřebujete přesnou kalkulaci pro váš projekt? Pošlete nám poptávku a do 24 hodin vám připravíme cenovou nabídku na míru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="inline-block bg-white text-sky-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Nezávazná poptávka
            </Link>
            <Link 
              href="/faq"
              className="inline-block bg-sky-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-sky-700 transition-all duration-300 border-2 border-white"
            >
              Máte otázky? Navštivte FAQ
            </Link>
          </div>
        </div>

        {/* Dodatečné informace */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-sky-100 p-8">
          <h3 className="text-2xl font-bold text-sky-700 mb-4">Co ovlivňuje finální cenu?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-sky-600 mb-2">IT služby:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Počet uzlů a infrastrukturní požadavky</li>
                <li>• Cloud vs. on-premise vs. hybrid</li>
                <li>• Úroveň monitoring a alertingu</li>
                <li>• Požadavky na SLA a dostupnost</li>
                <li>• Komplexnost integrace do stávajících systémů</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sky-600 mb-2">Projektování:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Rozsah a typ objektu (přejezd, stanice, koridor)</li>
                <li>• Počet profesí (sdělovací, zabezpečovací, elektro)</li>
                <li>• Stupeň dokumentace (DSP, DPS, DUR)</li>
                <li>• Časová náročnost a urgentnost</li>
                <li>• Potřeba koordinace s dalšími projekty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
