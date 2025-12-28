'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const faqs = [
  {
    category: "IT služby",
    items: [
      {
        question: "Kolik stojí implementace Apache Kafka clusteru?",
        answer: "Cena závisí na komplexnosti projektu, počtu uzlů a požadavcích na monitoring. Základní cluster začíná od 150 000 Kč, komplexní řešení s multi-cloud architekturou od 500 000 Kč. Nabízíme i měsíční podporu od 20 000 Kč."
      },
      {
        question: "Jak dlouho trvá implementace Kafka řešení?",
        answer: "Základní cluster lze nasadit za 2-3 týdny. Komplexní řešení s integrací do stávajících systémů trvá 1-3 měsíce. Vždy začínáme analýzou vašich potřeb a návrhem architektury."
      },
      {
        question: "Podporujete on-premise i cloudová řešení?",
        answer: "Ano, pracujeme s on-premise, cloud (AWS, Azure, GCP) i hybridními architekturami. Pomůžeme vám vybrat nejvhodnější variantu podle vašich požadavků na bezpečnost, výkon a rozpočet."
      },
      {
        question: "Zajišťujete i následnou podporu a monitoring?",
        answer: "Ano, nabízíme 24/7 monitoring, alerting pomocí Prometheus a Grafana, pravidelné updaty a optimalizace výkonu. Součástí je i školení vašeho týmu pro základní správu."
      },
      {
        question: "Máte zkušenosti s migrací dat z legacy systémů?",
        answer: "Ano, pravidelně řešíme migrace z IBM MQ, RabbitMQ a dalších systémů. Zajistíme nulový downtime a bezpečný přenos dat pomocí Kafka Connect a custom konektorů."
      }
    ]
  },
  {
    category: "Projektování",
    items: [
      {
        question: "Jaké dokumentace zpracováváte pro Správu železnic?",
        answer: "Zpracováváme komplexní projektovou dokumentaci pro SŽ včetně DSP, DPS, DUR a realizační dokumentace. Specializujeme se na sdělovací, zabezpečovací techniku a elektro projekty pro železniční infrastrukturu."
      },
      {
        question: "Kolik trvá zpracování projektové dokumentace?",
        answer: "Závisí na rozsahu projektu. Dokumentace pro menší objekt (přejezd, zastávka) trvá 1-2 měsíce, rozsáhlé projekty (koridor, stanice) 3-6 měsíců. Po úvodní konzultaci vám poskytneme přesný harmonogram."
      },
      {
        question: "Poskytujete i autorský dozor při realizaci?",
        answer: "Ano, autorský dozor je standardní součástí našich služeb. Zajišťujeme pravidelné kontroly na stavbě, konzultace s dodavateli a koordinaci s investorem a SŽ."
      },
      {
        question: "Máte oprávnění pro projektování na dráze?",
        answer: "Ano, máme všechna potřebná oprávnění a certifikace pro projektování železniční infrastruktury. Naši projektanti mají dlouholeté zkušenosti s normami a předpisy SŽ."
      },
      {
        question: "Zajišťujete i rozpočtovou dokumentaci?",
        answer: "Ano, zpracováváme kompletní rozpočtovou dokumentaci včetně položkových rozpočtů, soupisu prací a kalkulací nákladů podle aktuálních cenových soustav."
      }
    ]
  },
  {
    category: "Obecné",
    items: [
      {
        question: "V jakých regionech působíte?",
        answer: "Primárně působíme v celé České republice. U IT projektů pracujeme i se zahraničními klienty remote. Pro projektování železniční infrastruktury se zaměřujeme na ČR."
      },
      {
        question: "Nabízíte konzultace zdarma?",
        answer: "Ano, první konzultace (do 1 hodiny) je vždy zdarma. Probereme vaše potřeby, navrhneme možná řešení a poskytneme orientační cenovou nabídku."
      },
      {
        question: "Jak rychle mi odpovíte na poptávku?",
        answer: "Na emailovou poptávku odpovídáme do 24 hodin v pracovní dny. V naléhavých případech volejte přímo na kontaktní telefonní čísla, kde jsme k dispozici i večer a o víkendech."
      },
      {
        question: "Poskytujete školení pro naše týmy?",
        answer: "Ano, součástí implementace IT řešení je vždy školení vašeho týmu. Můžeme zajistit i samostatná školení Apache Kafka, Kubernetes nebo GitOps metodologií podle vašich potřeb."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sky-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-sky-50 transition-colors rounded-lg"
      >
        <span className="font-semibold text-sky-800 pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-sky-600 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-sky-700">
          Často kladené otázky (FAQ)
        </h1>
        
        <p className="text-xl text-center mb-12 text-gray-700 leading-relaxed">
          Odpovědi na nejčastější dotazy ohledně našich IT služeb a projektování. Nenašli jste odpověď? <a href="/kontakt" className="text-sky-600 hover:underline font-semibold">Kontaktujte nás</a>.
        </p>

        <div className="space-y-8">
          {faqs.map((section) => (
            <div key={section.category} className="bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white py-4 px-6">
                <h2 className="text-2xl font-bold">{section.category}</h2>
              </div>
              <div className="divide-y divide-sky-100">
                {section.items.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg border border-sky-100">
          <h2 className="text-2xl font-bold mb-4 text-sky-700">Máte další otázky?</h2>
          <p className="text-gray-700 mb-6">
            Rádi vám poskytneme další informace nebo nezávaznou konzultaci k vašemu projektu.
          </p>
          <a 
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </div>
  );
}
