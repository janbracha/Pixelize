import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-900">Vítejte v Pixelize</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* IT služby sekce */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">IT služby</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Poskytujeme komplexní IT služby v oblasti Apache Kafka, Kubernetes a Big Data. Specializujeme se na návrh, instalaci a provoz moderních datových platforem, které umožňují efektivní zpracování dat, vysokou dostupnost a škálovatelnost.
            </p>
            <Link href="/it" className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
              Více informací
            </Link>
          </div>

          {/* Projektování sekce */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Projektování</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Poskytujeme projektovou, rozpočtovou a kontrolní činnost v oblasti sdělovací, zabezpečovací a elektro techniky. Zaměřujeme se na železniční infrastrukturu, lineární stavby a technologické celky.
            </p>
            <Link href="/projektovani" className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
              Více informací
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
