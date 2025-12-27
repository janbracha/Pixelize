export default function IT() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-sky-700">IT služby – Apache Kafka, Kubernetes, Big Data</h1>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          Pomáháme firmám růst díky moderním datovým platformám. Specializujeme se na návrh, implementaci a správu řešení postavených na Apache Kafka, Kubernetes a Big Data technologiích. Zajišťujeme spolehlivé datové streamy, optimalizaci toků a provoz clusterů s vysokou dostupností a škálovatelností – ať už v Kubernetes prostředí nebo na samostatných Linux serverech.
        </p>

        <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Služby v oblasti Apache Kafka</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Pomáháme firmám využít plný potenciál datových streamů. Od návrhu architektury až po provoz a optimalizaci – vše na jednom místě.
          </p>
          <p className="text-gray-700 font-semibold mb-4 text-lg">Co nabízíme:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li><strong>Analýza a zhodnocení vašeho use case</strong> – najdeme nejlepší řešení pro vaše potřeby</li>
            <li><strong>Návrh architektury Kafka clusteru</strong> – stabilní, škálovatelné a bezpečné</li>
            <li><strong>Automatizace instalací</strong> – tvorba Helm chartů a GitOps integrace (Flux, Argo CD)</li>
            <li><strong>Monitoring & observability</strong> – přehledný dohled, alerting a výkonová optimalizace</li>
            <li><strong>Bezpečnostní řešení</strong> – ochrana dat a přístupů</li>
            <li><strong>Instalace a uvedení do provozu</strong> – rychle a bez komplikací</li>
            <li><strong>Analýza dat a optimalizace výkonu</strong> – maximální efektivita vašich streamů</li>
          </ul>
        </section>

        <section className="mb-12 bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Kafka Connect – Integrace systémů bez kompromisů</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Propojte své aplikace, databáze a služby do jednoho funkčního ekosystému. Díky Kafka Connect vám pomůžeme vytvořit robustní datové toky mezi různými technologiemi – od relačních databází (SQL) přes Elasticsearch a OpenSearch až po jakýkoli jiný systém, který vaše podnikání vyžaduje.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Navrhneme architekturu, připravíme instalaci, nakonfigurujeme konektory a zajistíme jejich bezproblémový provoz. Ať už potřebujete source konektor pro získávání dat z externích systémů, nebo sink konektor pro distribuci dat do cílových aplikací, naše řešení je flexibilní, škálovatelné a bezpečné.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            S námi získáte nejen technickou implementaci, ale i strategické poradenství, monitoring, optimalizaci výkonu a podporu pro GitOps prostředí (Flux, Argo CD). Vaše integrace bude připravena na budoucnost.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Data Governance & Monitoring – Kompletní kontrola nad vaším Kafka prostředím</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Vaše data si zaslouží maximální bezpečnost, přehled a správu. Proto nabízíme komplexní řešení pro data governance a monitoring v prostředí Apache Kafka.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Integrujeme špičkové nástroje jako Prometheus, Thanos, Grafana, AKHQ a Strimzi, které vám zajistí detailní přehled o výkonu, dostupnosti a stavu vašich clusterů.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Postaráme se o správu dat, uživatelů, rolí a konfigurací, aby vaše prostředí bylo nejen funkční, ale také bezpečné a transparentní.
          </p>
          <p className="text-gray-700 font-semibold mb-4 text-lg">Díky našim službám získáte:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg mb-4">
            <li>Pokročilý monitoring a alerting pro rychlou reakci na problémy</li>
            <li>Observabilitu napříč celým ekosystémem</li>
            <li>Bezpečnostní politiku pro správu přístupů a rolí</li>
            <li>Optimalizaci konfigurací pro maximální výkon a stabilitu</li>
            <li>Automatizovaný provoz Kafka clusterů pomocí Strimzi</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            Vaše Kafka infrastruktura bude pod kontrolou – od dat až po uživatelské role.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Migrace dat – Bezpečně, rychle a bez kompromisů</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Pomáháme firmám zvládnout náročné datové migrace bez stresu a výpadků. Ať už přecházíte mezi cloudovými poskytovateli (AWS, Azure, GCP) nebo migrujete do on‑premise prostředí, zajistíme hladký průběh od analýzy až po finální nasazení.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Navíc umožňujeme bezstrátový přechod mezi různými Kafka poskytovateli, jako jsou Confluent, Aiven nebo Strimzi. Vy si vyberete platformu, která nejlépe odpovídá vašim potřebám, a my zajistíme kompletní migraci dat – rychle, bezpečně a s garancí integrity.
          </p>
          <p className="text-gray-700 font-semibold mb-4 text-lg">Naše služby zahrnují:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg mb-4">
            <li><strong>Plánování a strategie migrace</strong> – minimalizace rizik a výpadků</li>
            <li><strong>Optimalizaci nákladů</strong> – efektivní využití zdrojů a snížení provozních nákladů</li>
            <li><strong>Zajištění datové integrity a bezpečnosti</strong> – vaše data jsou chráněna po celou dobu procesu</li>
            <li><strong>Výkonovou optimalizaci</strong> – rychlý přenos dat bez kompromisů</li>
            <li><strong>Podporu hybridních scénářů</strong> – cloud ↔ on‑premise, multi-cloud, různí Kafka provideři</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            S námi získáte nejen technickou realizaci, ale i konzultace, monitoring a podporu po dokončení migrace. Vaše data budou tam, kde je potřebujete – bezpečně, efektivně a bez ztrát.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Datová analýza & Data Stream – Využijte sílu dat v reálném čase</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Pomáháme firmám získat maximum z jejich dat. Navrhujeme a spravujeme datové streamy a pipelines, které umožňují rychlý, bezpečný a efektivní přenos informací.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Naše řešení vám umožní analyzovat, filtrovat a transformovat data v reálném čase, a tím zrychlit rozhodování i optimalizovat procesy.
          </p>
          <p className="text-gray-700 font-semibold mb-4 text-lg">Pracujeme s moderními technologiemi, které podporují:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg mb-4">
            <li>Real-time analýzu dat pro okamžité insighty</li>
            <li>Pokročilé filtrování a transformace pro čistá a relevantní data</li>
            <li>Škálovatelné pipelines pro růst vašeho byznysu</li>
            <li>Integraci s Big Data platformami a nástroji pro vizualizaci</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            Díky našim službám získáte nejen technickou implementaci, ale i strategické poradenství, monitoring a optimalizaci výkonu. Vaše data budou pracovat pro vás – rychle, efektivně a bezpečně.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">Školení Apache Kafka – Od základů po pokročilé techniky</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Chcete získat jistotu v práci s Apache Kafka? Nabízíme školení pro začátečníky i pokročilé týmy, které vám pomůže zvládnout nejen teorii, ale i praxi.
          </p>
          <p className="text-gray-700 font-semibold mb-4 text-lg">Naše kurzy zahrnují:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg mb-4">
            <li><strong>Základy Apache Kafka</strong> – architektura, principy, první kroky</li>
            <li><strong>Kafka Streams a Kafka Connect</strong> – tvorba stream aplikací a integrace systémů</li>
            <li><strong>Monitoring a bezpečnost</strong> – jak zajistit stabilitu a ochranu dat</li>
            <li><strong>Praktické workshopy</strong> – instalace a provoz Kafka clusterů v Kubernetes prostředí</li>
            <li><strong>Onsite i online formou</strong> – flexibilní přístup podle vašich potřeb</li>
            <li><strong>Možnost přizpůsobení na míru</strong> – obsah školení upravíme podle vašeho týmu a projektů</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            Díky našim školením získáte nejen znalosti, ale i praktické zkušenosti, které můžete okamžitě využít.
          </p>
        </section>
      </div>
    </div>
  );
}