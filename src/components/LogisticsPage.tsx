import React from 'react';
import { Anchor, ShieldCheck, Box, Clock, CheckCircle2, FileCheck2, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { TRANSLATIONS, Language } from '../data/i18n';

interface LogisticsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
}

export const LogisticsPage: React.FC<LogisticsPageProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang].logistics;

  const incotermsList = [
    {
      term: "FOB",
      fullName: "Free On Board (Incoterms 2020)",
      ports: "Port of Tanjung Perak (IDTPE) / Tanjung Priok (IDTPP)",
      description: t.fobDesc,
      costAllocation: currentLang === 'en' ? "Seller pays inland transport & export clearance. Buyer pays ocean freight & cargo insurance." : "Penjual menanggung truk darat & bea cukai ekspor. Pembeli membayar ongkos kapal & asuransi.",
    },
    {
      term: "CFR",
      fullName: "Cost and Freight (Incoterms 2020)",
      ports: "Any worldwide named destination container port",
      description: t.cfrDesc,
      costAllocation: currentLang === 'en' ? "Seller covers freight to buyer's destination seaport. Buyer arranges marine insurance." : "Penjual membayar ongkos kapal ke pelabuhan tujuan. Pembeli mengurus asuransi kargo.",
    },
    {
      term: "CIF",
      fullName: "Cost, Insurance & Freight (Incoterms 2020)",
      ports: "Any worldwide named destination container port",
      description: t.cifDesc,
      costAllocation: currentLang === 'en' ? "Seller arranges ocean freight plus marine cargo insurance (Institute Cargo Clauses A) to destination." : "Penjual mengurus ongkos kapal ditambah asuransi laut penuh hingga pelabuhan tujuan.",
    },
  ];

  const exportDocs = [
    { name: "Ocean Bill of Lading (B/L)", desc: currentLang === 'en' ? "Clean on-board ocean bill of lading (original 3/3 set or Telex Release upon buyer request)." : "B/L asli 3/3 set atau rilis teleks resmi pelayaran." },
    { name: "Commercial Invoice & Packing List", desc: currentLang === 'en' ? "Signed with corporate stamp detailing gross/net weights, container numbers, and seal IDs." : "Tertandatangani & bercap resmi merinci berat kotor/bersih serta nomor segel kontainer." },
    { name: "Certificate of Origin (COO / Form D, E, AK)", desc: currentLang === 'en' ? "Issued by Indonesian Ministry of Trade for preferential tariff access (ASEAN, China, Korea, etc.)." : "Diterbitkan Kementerian Perdagangan RI untuk fasilitas tarif preferensi bea masuk." },
    { name: "Phytosanitary Certificate", desc: currentLang === 'en' ? "Official clearance from Indonesian Agricultural Quarantine Agency verifying freedom from pests." : "Diterbitkan Badan Karantina Indonesia memastikan komoditas bebas hama & penyakit." },
    { name: "Fumigation Certificate", desc: currentLang === 'en' ? "Treated with Phosphine (PH3) or Methyl Bromide (CH3Br) in compliance with ISPM 15 standards." : "Sertifikat fumigasi standar ISPM 15 anti serangga kayu dan kemasan." },
    { name: "Independent Lab Analysis (COA)", desc: currentLang === 'en' ? "Third-party testing report (SGS / Carsurin / Sucofindo) for moisture, purity, and parameters." : "Hasil uji laboratorium independen mengonfirmasi kadar air, kemurnian, dan senyawa aktif." },
    { name: "SHT / MSDS (for Charcoal Briquettes)", desc: currentLang === 'en' ? "Self-Heating Test certificate required by shipping lines proving safe non-DG carriage." : "Sertifikat SHT uji pemanasan mandiri untuk izin muat kontainer arang non-berbahaya." },
  ];

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
            {t.kicker}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.desc}
          </p>
        </div>

        {/* Incoterms Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">
            {t.incotermsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incotermsList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold font-display text-emerald-800">
                    {item.term}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {item.fullName}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-1">
                    {currentLang === 'en' ? 'Cost & Risk Allocation:' : 'Alokasi Biaya & Risiko:'}
                  </span>
                  <span>{item.costAllocation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Indonesian Seaports */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              {t.portsTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {t.portsDesc}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <th className="py-3 px-4">{t.portName}</th>
                  <th className="py-3 px-4">{t.portLoc}</th>
                  <th className="py-3 px-4">{t.portCode}</th>
                  <th className="py-3 px-4">{t.portLead}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPANY_CONFIG.logistics.primaryLoadingPorts.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-emerald-700 shrink-0" />
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4">{p.city}</td>
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-slate-700">{p.code}</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-medium">{p.leadTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Documentation Suite */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              {t.docsTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {t.docsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exportDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3"
              >
                <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {doc.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {doc.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Consultation CTA */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold font-display">
              {currentLang === 'en' ? 'Need ocean freight quotes to your destination port?' : 'Butuh kalkulasi ongkos kapal (freight) ke pelabuhan Anda?'}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {currentLang === 'en' ? 'We partner with Maersk, MSC, ONE, and CMA CGM to secure competitive container shipping lines.' : 'Kami bermitra dengan agen pelayaran Maersk, MSC, ONE, dan CMA CGM untuk penawaran freight terbaik.'}
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg whitespace-nowrap transition-colors"
          >
            {currentLang === 'en' ? 'Request Freight & CIF Quote' : 'Minta Kalkulasi CIF & Freight'}
          </button>
        </div>
      </div>
    </div>
  );
};
