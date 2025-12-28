'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'it',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Reset formuláře
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'it',
          message: ''
        });
        // Reset status po 5 sekundách
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Chyba při odesílání:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-sky-700">Kontakt</h1>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed text-center">
          Máte zájem o naše služby nebo potřebujete více informací? Kontaktujte nás!
        </p>

        {/* Kontaktní formulář */}
        <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-sky-700">Napište nám</h2>
          
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300">
              ✓ Zpráva byla úspěšně odeslána. Brzy se vám ozveme!
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
              ✗ Něco se pokazilo. Zkuste to prosím znovu nebo nás kontaktujte přímo emailem.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                  placeholder="Jan Novák"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                  placeholder="jan.novak@email.cz"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all"
                  placeholder="+420 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Oblast zájmu *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="it">IT služby</option>
                  <option value="projektovani">Projektování</option>
                  <option value="jine">Jiné</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Zpráva *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all resize-vertical"
                placeholder="Popište nám prosím vaše požadavky..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Odesílám...' : 'Odeslat zprávu'}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* IT služby kontakt */}
          <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">IT služby</h2>
            <ul className="text-gray-700 space-y-4 text-lg">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:devops@projektdevelop.cz" className="text-sky-600 hover:text-sky-800 transition-colors">
                  devops@projektdevelop.cz
                </a>
              </li>
              <li>
                <strong>Telefon:</strong><br />
                <a href="tel:+420602222278" className="text-sky-600 hover:text-sky-800 transition-colors">
                  +420 602 222 278
                </a>
              </li>
            </ul>
          </div>

          {/* Projektová činnost kontakt */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">Projektová činnost</h2>
            <ul className="text-gray-700 space-y-4 text-lg">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:jan.bracha@projektdevelop.cz" className="text-sky-600 hover:text-sky-800 transition-colors">
                  jan.bracha@projektdevelop.cz
                </a>
              </li>
              <li>
                <strong>Telefon:</strong><br />
                <a href="tel:+420602725251" className="text-sky-600 hover:text-sky-800 transition-colors">
                  +420 602 725 251
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informace o společnosti */}
        <div className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-xl border border-sky-100">
          <h2 className="text-2xl font-bold mb-6 text-sky-700">Informace o společnosti</h2>
          <div className="text-gray-700 space-y-3 text-lg">
            <p><strong>PROJEKT & DEVELOP s.r.o.</strong></p>
            <p>Nedabyle 122, PSČ 370 06</p>
            <p><strong>IČO:</strong> 17320488</p>
            <p>
              <strong>Web:</strong>{' '}
              <a href="https://www.projektdevelop.cz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors">
                www.projektdevelop.cz
              </a>
            </p>
            <p className="text-base leading-relaxed pt-2">
              Společnost s ručením omezeným PROJEKT & DEVELOP s.r.o., zapsána pod značkou C 32334/KSCB Krajským soudem v Českých Budějovicích
            </p>
            
            {/* Sociální sítě */}
            <div className="pt-6 border-t border-sky-200 mt-6">
              <p className="font-semibold mb-4">Sledujte nás:</p>
              <a 
                href="https://www.linkedin.com/company/projekt-develop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}