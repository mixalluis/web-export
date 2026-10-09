import React from 'react';
import { ArrowUpRight, Scale, Package, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/products';
import { TRANSLATIONS, Language } from '../data/i18n';

interface HomeFeaturedProps {
  currentLang: Language;
  onNavigate: (page: string, param?: string) => void;
  onQuickQuote: (productName: string) => void;
}

export const HomeFeatured: React.FC<HomeFeaturedProps> = ({
  currentLang,
  onNavigate,
  onQuickQuote,
}) => {
  const t = TRANSLATIONS[currentLang].featured;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.slice(0, 3).map((product) => {
            const name = product.name[currentLang];
            const summary = product.summary[currentLang];
            const origin = product.origin[currentLang];

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Product Image */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono rounded">
                    HS {product.hsCode}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-emerald-800">{product.categoryName[currentLang]}</span>
                      <span aria-hidden="true">·</span>
                      <span className="italic">{product.latinName}</span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {name}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {summary}
                    </p>

                    {/* Spec Mini Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">{t.moqLabel}</span>
                        <span className="font-medium text-slate-900">{product.commercialTerms.moq[currentLang]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">{t.capacityLabel}</span>
                        <span className="font-medium text-slate-900 tabular-nums">{product.commercialTerms.monthlyCapacity[currentLang]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">{currentLang === 'en' ? 'Origin:' : 'Asal:'}</span>
                        <span className="font-medium text-slate-900 truncate max-w-[180px]">{origin}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate('product-detail', product.id)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      <span>{t.viewSpecs}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onQuickQuote(name)}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                    >
                      <span>{t.requestQuote}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg shadow-xs transition-colors"
          >
            <span>{currentLang === 'en' ? 'View All 4 Export Commodities with Grade Tables' : 'Lihat Semua 4 Komoditas Ekspor & Tabel Grade'}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
