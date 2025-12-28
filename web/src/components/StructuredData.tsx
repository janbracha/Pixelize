export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PROJEKT & DEVELOP s.r.o.",
    "legalName": "PROJEKT & DEVELOP s.r.o.",
    "url": "https://www.projektdevelop.cz",
    "logo": "https://www.projektdevelop.cz/logo.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nedabyle 122",
      "postalCode": "370 06",
      "addressCountry": "CZ",
      "addressLocality": "Nedabyle"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+420-602-222-278",
        "contactType": "IT služby",
        "email": "devops@projektdevelop.cz",
        "availableLanguage": ["Czech", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+420-602-725-251",
        "contactType": "Projektová činnost",
        "email": "jan.bracha@projektdevelop.cz",
        "availableLanguage": ["Czech"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/projekt-develop"
    ],
    "description": "Komplexní IT služby (Apache Kafka, Kubernetes, Big Data) a projektování sdělovací a zabezpečovací techniky pro železniční infrastrukturu.",
    "knowsAbout": [
      "Apache Kafka",
      "Kubernetes",
      "Big Data",
      "DevOps",
      "GitOps",
      "Data Streaming",
      "Projektování železniční infrastruktury",
      "Sdělovací technika",
      "Zabezpečovací technika",
      "Elektro projekty"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Czechia"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PROJEKT & DEVELOP s.r.o.",
    "image": "https://www.projektdevelop.cz/logo.png",
    "telephone": "+420-602-222-278",
    "email": "devops@projektdevelop.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nedabyle 122",
      "postalCode": "370 06",
      "addressCountry": "CZ",
      "addressLocality": "Nedabyle"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.0",
      "longitude": "14.4"
    },
    "url": "https://www.projektdevelop.cz",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
