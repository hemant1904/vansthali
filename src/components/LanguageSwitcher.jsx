import React, { useState, useEffect } from 'react';
import { MoreVertical, X } from 'lucide-react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isVisible, setIsVisible] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mr', name: 'Marathi' },
    { code: 'hi', name: 'Hindi' },
  ];

  useEffect(() => {
    const checkLang = () => {
      const cookieValue = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
      if (cookieValue) {
        const lang = cookieValue.split('/').pop();
        if (lang) setCurrentLang(lang);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
      checkLang();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (code) => {
    setCurrentLang(code);
    
    // Set cookie for persistence (Google's standard way)
    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname}`;
    
    const triggerTranslation = () => {
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = code;
        googleCombo.dispatchEvent(new Event('change'));
      } else {
        // Fallback: If combo box still not found after multiple attempts, reload
        window.location.reload();
      }
    };

    // Try immediately
    const immediateCombo = document.querySelector('.goog-te-combo');
    if (immediateCombo) {
      triggerTranslation();
    } else {
      // Wait for it to appear (up to 2 seconds)
      let attempts = 0;
      const interval = setInterval(() => {
        const combo = document.querySelector('.goog-te-combo');
        attempts++;
        if (combo || attempts > 10) {
          clearInterval(interval);
          triggerTranslation();
        }
      }, 200);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-[100px] right-4 z-[10000] animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="bg-[#1a1a1a] text-[#f1f1f1] rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden min-w-[260px] border border-[#333]">
        {/* Header Tabs */}
        <div className="flex items-center justify-between px-5 pt-3 border-b border-[#333]">
          <div className="flex gap-5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`pb-3 text-[13px] font-semibold transition-all relative ${
                  currentLang === lang.code
                    ? 'text-[#90e08b]'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {lang.name}
                {currentLang === lang.code && (
                  <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#90e08b] rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 pb-3">
            <button className="p-1.5 hover:bg-[#333] rounded-full transition-colors text-gray-400">
              <MoreVertical size={16} />
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-[#333] rounded-full transition-colors text-gray-400"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#242424] px-5 py-2 flex items-center">
          <span className="text-[11px] font-medium text-gray-500 tracking-wider">Google Translate</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
