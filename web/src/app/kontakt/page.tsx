export default function Kontakt() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-sky-700">Kontakt</h1>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
          Máte zájem o naše služby nebo potřebujete více informací? Kontaktujte nás!
        </p>

        <div className="bg-gradient-to-br from-white to-sky-50 p-12 rounded-3xl shadow-xl border border-sky-100">
          <h2 className="text-3xl font-bold mb-8 text-sky-700">Kontaktní údaje</h2>
          <ul className="text-gray-700 space-y-4 text-lg">
            <li><strong>Email:</strong> info@placeholder.cz</li>
            <li><strong>Telefon:</strong> +420 123 456 789</li>
            <li><strong>Adresa:</strong> Placeholderova 123, 110 00 Praha</li>
          </ul>
        </div>
      </div>
    </div>
  );
}