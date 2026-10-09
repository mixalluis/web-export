import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, FileCheck2, Scale } from 'lucide-react';
import { TRANSLATIONS, Language } from '../data/i18n';

interface HeroProps {
  currentLang: Language;
  onNavigate: (page: string, param?: string) => void;
  onOpenCertificateModal: (certId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  onOpenCertificateModal,
}) => {
  const t = TRANSLATIONS[currentLang].hero;
  const certT = TRANSLATIONS[currentLang].certStrip;

  const trustBadges = [
    { id: 'nib', label: 'NIB 1289000438192', detail: 'OSS RBA Registered Exporter' },
    { id: 'phyto', label: 'Phytosanitary Certified', detail: 'Indonesian Quarantine Agency' },
    { id: 'coa', label: 'Independent Lab COA', detail: 'SGS / Carsurin Verified Lots' },
    { id: 'coo', label: 'Certificate of Origin', detail: 'Kemendag Form D/E/AK' },
  ];

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_export_port_logistics_1791398617496.jpg"
          alt="International Sea Cargo Port Terminal in Indonesia"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl space-y-6">
          {/* Subtle text trust tag */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.badge}</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1] text-balance">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
            {t.subtitle}
          </p>

          {/* 2 Primary CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 whitespace-nowrap"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 whitespace-nowrap"
            >
              <span>{t.ctaSecondary}</span>
            </button>
          </div>

          {/* Quantitative Rigor Stats Row */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                {t.statCapacity}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t.statCapacityLabel}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                {t.statCountries}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t.statCountriesLabel}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                {t.statExperience}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t.statExperienceLabel}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400 tabular-nums tracking-tight">
                {t.statLegal}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t.statLegalLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications and Compliance Bar */}
      <div className="relative z-10 bg-slate-950 border-t border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2 text-center md:text-left">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 inline" />
            <span>{certT.subtitle}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((b) => (
              <button
                key={b.id}
                onClick={() => onOpenCertificateModal(b.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300 text-xs transition-colors"
                title={`${b.label} - Click to view official document verification`}
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-white">{b.label}</span>
                <span className="text-slate-500 hidden sm:inline">· {b.detail}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
