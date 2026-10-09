import React from 'react';
import { ShieldCheck, Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { PRODUCTS_DATA } from '../data/products';
import { TRANSLATIONS, Language } from '../data/i18n';

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: string, param?: string) => void;
  onOpenCertificateModal: (certId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenCertificateModal,
}) => {
  const t = TRANSLATIONS[currentLang].footer;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Summary (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left font-display font-bold text-lg text-white hover:text-emerald-400 transition-colors"
            >
              PT Anurika Nusantara Agro
            </button>
            <p className="text-slate-400 leading-relaxed text-xs pr-4">
              {t.aboutSummary}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <button
                onClick={() => onOpenCertificateModal('nib')}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                NIB: {COMPANY_CONFIG.legal.nib}
              </button>
              <button
                onClick={() => onOpenCertificateModal('kemendag')}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                Kemendag EXP Registered
              </button>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              {t.quickLinks}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  {currentLang === 'en' ? 'Home' : 'Beranda'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  {currentLang === 'en' ? 'About Us & Facilities' : 'Tentang Kami & Fasilitas'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  {currentLang === 'en' ? 'Commodity Catalog' : 'Katalog Komoditas'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('logistics')}
                  className="hover:text-white transition-colors"
                >
                  {currentLang === 'en' ? 'Incoterms & Freight' : 'Logistik & Pengapalan'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  {currentLang === 'en' ? 'Request for Quote (RFQ)' : 'Permintaan Penawaran'}
                </button>
              </li>
            </ul>
          </div>

          {/* Export Commodities (Col 4) */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              {t.commodities}
            </div>
            <ul className="space-y-2">
              {PRODUCTS_DATA.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate('product-detail', p.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {p.name[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (Col 5) */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              {currentLang === 'en' ? 'Export Desk' : 'Kontak Ekspor'}
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Surabaya & Sidoarjo, East Java, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-fraud banner in footer */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-slate-400 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Anti-Fraud Transparency Notice: </strong>
            {COMPANY_CONFIG.antiFraudNotice[currentLang]}
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              {t.privacyPolicy}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('logistics')}
              className="hover:text-slate-300 transition-colors"
            >
              {t.termsOfTrade}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
