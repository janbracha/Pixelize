export default function Kontakt() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Kontakt</h1>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Máte zájem o naše služby nebo potřebujete více informací? Kontaktujte nás!
        </p>

        <div className="bg-gray-100 p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Kontaktní údaje</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Email:</strong> info@placeholder.cz</li>
            <li><strong>Telefon:</strong> +420 123 456 789</li>
            <li><strong>Adresa:</strong> Placeholderova 123, 110 00 Praha</li>
          </ul>
        </div>
      </div>
    </div>
  );
}