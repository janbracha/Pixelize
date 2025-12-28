'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Zkontrolovat, zda už uživatel dal souhlas
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // TODO: Zde aktivovat Google Analytics
    // window.gtag('consent', 'update', {
    //   analytics_storage: 'granted'
    // });
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-sky-500 shadow-2xl z-50 animate-slide-up">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🍪 Používáme cookies
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tento web používá cookies pro zlepšení uživatelské zkušenosti a analytické účely. 
              Kliknutím na "Přijmout" souhlasíte s používáním všech cookies. 
              Více informací najdete v naší{' '}
              <a href="/kontakt" className="text-sky-600 hover:text-sky-800 underline">
                politice ochrany osobních údajů
              </a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Odmítnout
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg"
            >
              Přijmout vše
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
