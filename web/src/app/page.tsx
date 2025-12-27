import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-sky-700">Projekt & Develop – Váš partner pro inovativní řešení</h1>
        
        <h2 className="text-2xl text-center mb-8 text-gray-700 font-medium leading-relaxed">Pomáháme proměnit vaše nápady v úspěšné projekty. Spojujeme kreativitu, technologii a zkušenosti.</h2>
        
        <p className="text-lg text-center mb-16 text-gray-600 leading-relaxed max-w-3xl mx-auto">Jsme společnost zaměřená na moderní projektové řízení a vývoj. Naším cílem je poskytovat špičková řešení, která vám pomohou růst a uspět v dynamickém prostředí.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* IT služby sekce */}
          <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-700">IT služby</h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Poskytujeme komplexní IT služby v oblasti Apache Kafka, Kubernetes a Big Data. Specializujeme se na návrh, instalaci a provoz moderních datových platforem, které umožňují efektivní zpracování dat, vysokou dostupnost a škálovatelnost.
            </p>
            <Link href="/it" className="inline-block bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold">
              Více informací
            </Link>
          </div>

          {/* Projektování sekce */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-700">Projektování</h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Poskytujeme projektovou, rozpočtovou a kontrolní činnost v oblasti sdělovací, zabezpečovací a elektro techniky. Zaměřujeme se na železniční infrastrukturu, lineární stavby a technologické celky.
            </p>
            <Link href="/projektovani" className="inline-block bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-sky-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold">
              Více informací
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
