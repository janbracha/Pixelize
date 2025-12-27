export default function IT() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">PILÍŘ 1 – IT SLUŽBY (Apache Kafka, Kubernetes, Big Data)</h1>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Poskytujeme komplexní IT služby v oblasti Apache Kafka, Kubernetes a Big Data. Specializujeme se na návrh, instalaci a provoz moderních datových platforem, které umožňují efektivní zpracování dat, vysokou dostupnost a škálovatelnost. Pomáháme firmám budovat datové streamy, optimalizovat datové toky a provozovat Kafka clustery v Kubernetes prostředí i na single Linux serverech.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Výhody Apache Kafka v Kubernetes</h2>
          <p className="text-gray-700 leading-relaxed">
            Kubernetes je ideální prostředí pro provoz Apache Kafka díky vysoké dostupnosti, snadné horizontální škálovatelnosti a automatizaci. Umožňuje stabilní provoz v cloudu (AWS, Azure, Google Cloud) i on‑premise.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Služby v oblasti Kafka clusterů</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Analýza a zhodnocení vašeho use case</li>
            <li>Návrh architektury Kafka clusteru</li>
            <li>Tvorba Helm chartů a příprava instalací</li>
            <li>Integrace do GitOps prostředí (Flux, Argo CD)</li>
            <li>Monitoring, observability a alerting</li>
            <li>Bezpečnostní řešení</li>
            <li>Instalace a uvedení do provozu</li>
            <li>Analýza dat a optimalizace výkonu</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Kafka Connect – integrace systémů</h2>
          <p className="text-gray-700 leading-relaxed">
            Pomáháme propojit vaše systémy pomocí Kafka connectorů. Zajišťujeme návrh, instalaci, konfiguraci i provoz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Data governance a monitoring</h2>
          <p className="text-gray-700 leading-relaxed">
            Integrujeme nástroje jako Prometheus, Thanos, Grafana nebo AKHQ. Zajišťujeme správu dat, uživatelů, rolí a konfigurací vašeho Kafka prostředí.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Migrace dat</h2>
          <p className="text-gray-700 leading-relaxed">
            Provádíme migrace dat mezi cloudovými poskytovateli i do on‑premise prostředí. Pomáháme optimalizovat náklady a datovou efektivitu.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Datová analýza a data stream</h2>
          <p className="text-gray-700 leading-relaxed">
            Navrhujeme a spravujeme datové streamy a pipelines. Pomáháme analyzovat, filtrovat a transformovat data v reálném čase.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Školení Apache Kafka</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nabízíme školení pro začátečníky i pokročilé:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Základy Apache Kafka</li>
            <li>Kafka Streams a Kafka Connect</li>
            <li>Monitoring a bezpečnost</li>
            <li>Praktické workshopy pro instalaci a provoz Kafka clusterů v Kubernetes</li>
            <li>Onsite i online formou</li>
            <li>Možnost přizpůsobení na míru vašemu týmu</li>
          </ul>
        </section>
      </div>
    </div>
  );
}