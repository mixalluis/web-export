import React from 'react';
import { ShieldCheck, Award, MapPin, Building2, CheckCircle2, FileText, ExternalLink, Users } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { TRANSLATIONS, Language } from '../data/i18n';

interface AboutPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenCertificateModal: (certId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLang,
  onNavigate,
  onOpenCertificateModal,
}) => {
  const t = TRANSLATIONS[currentLang].about;

  const legalItems = [
    {
      title: "Nomor Induk Berusaha (NIB)",
      code: COMPANY_CONFIG.legal.nib,
      issuer: "Ministry of Investment / BKPM RI (OSS-RBA System)",
      verified: true,
      certId: "nib",
    },
    {
      title: "Corporate Taxpayer Identification (NPWP)",
      code: COMPANY_CONFIG.legal.npwp,
      issuer: "Directorate General of Taxes, Republic of Indonesia",
      verified: true,
      certId: "npwp",
    },
    {
      title: "Registered Exporter License",
      code: COMPANY_CONFIG.legal.exportLicense,
      issuer: "Ministry of Trade, Republic of Indonesia (Kemendag)",
      verified: true,
      certId: "kemendag",
    },
    {
      title: "Standard Industrial Classification (KBLI)",
      code: COMPANY_CONFIG.legal.standardCodeKBLI,
      issuer: "Central Bureau of Statistics & OSS Classification",
      verified: true,
      certId: "kbli",
    },
  ];

  const exportDestinations = [
    { region: "North America", countries: "United States, Canada", commodities: "Vanilla Beans & Arabica Coffee" },
    { region: "European Union", countries: "Germany, Netherlands, France", commodities: "Shisha Coconut Charcoal & Gourmet Vanilla" },
    { region: "Middle East (GCC)", countries: "United Arab Emirates, Saudi Arabia", commodities: "Hookah Charcoal Briquettes & Whole Cloves" },
    { region: "East Asia", countries: "Japan, South Korea", commodities: "Specialty Green Coffee & Fine Cloves" },
    { region: "Oceania", countries: "Australia, New Zealand", commodities: "Vanilla & Natural Cocoa" },
  ];

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
            {t.kicker}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              {t.storyTitle}
            </h2>
            <p>{t.storyP1}</p>
            <p>{t.storyP2}</p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {currentLang === 'en' ? 'Direct Smallholder Aggregation' : 'Kemitraan Petani Langsung'}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {currentLang === 'en' ? 'Moisture & Moisture-Meter Calibration' : 'Uji Kadar Air Terkalibrasi'}
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 bg-slate-100">
            <img
              src="/src/assets/images/facility_warehouse_qc_1791398666140.jpg"
              alt="Warehouse and Quality Inspection Facility in East Java"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent text-white text-xs">
              <span className="font-semibold">{currentLang === 'en' ? 'Centralized QC & Export Warehouse' : 'Gudang & Lab Kontrol Kualitas Terpadu'}</span> · Sidoarjo, East Java (35km from Tanjung Perak Port)
            </div>
          </div>
        </div>

        {/* Official Corporate Legalities */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              {t.legalTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t.legalDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{item.issuer}</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Verified
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </div>
                  <div className="mt-2 font-mono text-sm font-bold text-slate-950 bg-white px-3 py-1.5 rounded border border-slate-200 inline-block">
                    {item.code}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <button
                    onClick={() => onOpenCertificateModal(item.certId)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'View Official Verification Record' : 'Lihat Dokumen Verifikasi'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Destinations Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              {t.destinationsTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t.destinationsDesc}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-900 uppercase tracking-wider bg-slate-50">
                  <th className="py-3 px-4">{currentLang === 'en' ? 'Target Region' : 'Wilayah Tujuan'}</th>
                  <th className="py-3 px-4">{currentLang === 'en' ? 'Key Buying Countries' : 'Negara Pembeli'}</th>
                  <th className="py-3 px-4">{currentLang === 'en' ? 'Primary Commodities Shipped' : 'Komoditas yang Dikirim'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {exportDestinations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{row.region}</td>
                    <td className="py-3.5 px-4">{row.countries}</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-medium">{row.commodities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Facility Address & Inspection invitation */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Factory & Warehouse Audits Welcome' : 'Kunjungan & Audit Fasilitas'}</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              {COMPANY_CONFIG.contact.address.warehouse}
            </h3>
            <p className="text-xs text-slate-400">
              {currentLang === 'en' ? 'We welcome foreign buyers, sourcing agents, and third-party inspectors (SGS, Intertek, Cotecna) for pre-shipment lot audits.' : 'Kami menerima kunjungan buyer asing, sourcing agent, dan inspektur pihak ketiga (SGS, Intertek) untuk audit lot sebelum muat.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg whitespace-nowrap transition-colors"
          >
            {currentLang === 'en' ? 'Schedule a Facility Audit / Meeting' : 'Jadwalkan Kunjungan / Audit'}
          </button>
        </div>
      </div>
    </div>
  );
};
