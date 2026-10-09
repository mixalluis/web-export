import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Language } from '../data/i18n';
import { COMPANY_CONFIG } from '../data/config';

interface PrivacyPageProps {
  currentLang: Language;
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ currentLang, onBack }) => {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8 text-slate-800 text-sm leading-relaxed">
          <div className="border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Data Privacy & Trade Transparency' : 'Kebijakan Privasi & Keterbukaan Dagang'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-display text-slate-900">
              {currentLang === 'en' ? 'Privacy Policy & Terms of Inquiry' : 'Kebijakan Privasi & Ketentuan Permintaan Penawaran'}
            </h1>
            <p className="mt-2 text-xs text-slate-500">
              Effective Date: October 2026 · PT Anurika Nusantara Agro
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base font-bold font-display text-slate-900">
              {currentLang === 'en' ? '1. Scope of Inquiry Information' : '1. Cakupan Informasi Permintaan'}
            </h2>
            <p>
              {currentLang === 'en'
                ? 'When you submit a Request for Quotation (RFQ) through our portal, your business contact details (name, company name, corporate email address, destination port, and volume specifications) are solely used to formulate and send your formal commercial Proforma invoice.'
                : 'Saat Anda mengajukan Permintaan Penawaran (RFQ) melalui portal kami, data kontak bisnis Anda (nama, nama perusahaan, email perusahaan, pelabuhan tujuan, dan volume) hanya digunakan untuk menyusun penawaran harga resmi.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold font-display text-slate-900">
              {currentLang === 'en' ? '2. Zero-Retention Backend Architecture' : '2. Tanpa Penyimpanan Data di Server Publik'}
            </h2>
            <p>
              {currentLang === 'en'
                ? 'As specified in our technical release standard, this website does not store or database buyer inquiries on public web servers. Submissions are processed directly via your verified local email client (mailto:) or encrypted WhatsApp communication channels, mitigating data breach exposures.'
                : 'Sesuai arsitektur teknis kami, situs web ini tidak menyimpan data pribadi Anda pada database server publik. Pengiriman diproses langsung melalui aplikasi email resmi atau saluran komunikasi WhatsApp terenkripsi.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold font-display text-slate-900">
              {currentLang === 'en' ? '3. Commercial Confidentiality' : '3. Kerahasiaan Komersial'}
            </h2>
            <p>
              {currentLang === 'en'
                ? 'We strictly safeguard buyer commercial data, price agreements, private label brand markings, and packaging designs. We never sell, lease, or share buyer data with third-party advertising networks.'
                : 'Kami menjaga kerahasiaan data pembeli, harga kontrak, merek OEM, dan spesifikasi pesanan Anda. Kami tidak pernah menjual atau membagikan data kepada pihak ketiga.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold font-display text-slate-900">
              {currentLang === 'en' ? '4. Official Corporate Communication' : '4. Komunikasi Resmi Korporat'}
            </h2>
            <p>
              {currentLang === 'en'
                ? `All formal commercial contracts and banking instructions are dispatched exclusively from our verified corporate domain (${COMPANY_CONFIG.contact.email}). International wire payments are strictly payable to the registered corporate bank account of PT Anurika Nusantara Agro.`
                : `Semua kontrak resmi dan instruksi pembayaran dikirimkan hanya melalui email resmi domain ${COMPANY_CONFIG.contact.email} dan rekening korporat PT Anurika Nusantara Agro.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
