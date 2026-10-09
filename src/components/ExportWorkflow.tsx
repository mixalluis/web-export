import React from 'react';
import { Mail, Send, FileSignature, CheckSquare, Anchor, Award } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/i18n';

interface ExportWorkflowProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
}

export const ExportWorkflow: React.FC<ExportWorkflowProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang].workflow;

  const steps = [
    {
      num: "01",
      icon: Mail,
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      num: "02",
      icon: Send,
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      num: "03",
      icon: FileSignature,
      title: t.step3Title,
      desc: t.step3Desc,
    },
    {
      num: "04",
      icon: CheckSquare,
      title: t.step4Title,
      desc: t.step4Desc,
    },
    {
      num: "05",
      icon: Anchor,
      title: t.step5Title,
      desc: t.step5Desc,
    },
    {
      num: "06",
      icon: Award,
      title: t.step6Title,
      desc: t.step6Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
            {t.kicker}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-400">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick CTA to start Step 1 */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-base font-bold font-display">
              {currentLang === 'en' ? 'Ready to initiate your commodity sourcing inquiry?' : 'Siap memulai permintaan penawaran komoditas ekspor?'}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {currentLang === 'en' ? 'Get a detailed Proforma quotation with specification certificate and logistics lead time within 24h.' : 'Dapatkan penawaran Proforma lengkap dengan spesifikasi teknis dan perkiraan jadwal kirim dalam 24 jam.'}
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg whitespace-nowrap transition-colors"
          >
            {currentLang === 'en' ? 'Initiate Inquiry Step 1' : 'Mulai Permintaan Tahap 1'}
          </button>
        </div>
      </div>
    </section>
  );
};
