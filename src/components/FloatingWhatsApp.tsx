import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { Language, TRANSLATIONS } from '../data/i18n';

interface FloatingWhatsAppProps {
  currentLang: Language;
  activeProductContext?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  currentLang,
  activeProductContext,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = TRANSLATIONS[currentLang].whatsapp;

  const getMessage = () => {
    if (activeProductContext) {
      return currentLang === 'en'
        ? `Hello Anurika Nusantara Agro Export Desk, I am interested in ${activeProductContext}. Could you send your latest technical specification and FOB/CIF quotation?`
        : `Halo Tim Ekspor Anurika Nusantara Agro, saya tertarik dengan ${activeProductContext}. Mohon informasi spesifikasi dan penawaran harga FOB/CIF terbaru.`;
    }
    return t.defaultMsg;
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(getMessage());
    const url = `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="mb-3 p-4 bg-white rounded-2xl shadow-xl border border-slate-200 max-w-xs text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900">Export Desk (WIB GMT+7)</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            {currentLang === 'en'
              ? 'Connect directly with our international export managers for immediate inquiry response.'
              : 'Hubungi manajer ekspor internasional kami untuk respon cepat penawaran komoditas.'}
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Start Chat on WhatsApp' : 'Mulai Chat WhatsApp'}</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => {
          if (!showTooltip) {
            handleOpenWhatsApp();
          } else {
            setShowTooltip(false);
          }
        }}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Chat via WhatsApp with Export Manager"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-white shrink-0" />
        <span className="hidden sm:inline font-semibold text-xs whitespace-nowrap">
          {currentLang === 'en' ? 'WhatsApp Export Desk' : 'Chat WhatsApp Ekspor'}
        </span>
      </button>
    </div>
  );
};
