import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/products';
import { TRANSLATIONS, Language } from '../data/i18n';

interface ProductsCatalogProps {
  currentLang: Language;
  onNavigate: (page: string, param?: string) => void;
  onQuickQuote: (productName: string) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  currentLang,
  onNavigate,
  onQuickQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'spices' | 'coconut' | 'coffee'>('all');

  const t = TRANSLATIONS[currentLang].catalog;

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.en.toLowerCase().includes(q) ||
        item.name.id.toLowerCase().includes(q) ||
        item.latinName.toLowerCase().includes(q) ||
        item.hsCode.toLowerCase().includes(q) ||
        item.origin.en.toLowerCase().includes(q) ||
        item.summary.en.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoryTabs = [
    { id: 'all', label: t.allCategory },
    { id: 'spices', label: t.filterSpices },
    { id: 'coconut', label: t.filterCoconut },
    { id: 'coffee', label: t.filterCoffee },
  ];

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Page Header */}
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

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          {/* Category Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500">
          {t.showing} <span className="font-semibold text-slate-900">{filteredProducts.length}</span> {t.productsOf} {PRODUCTS_DATA.length} {currentLang === 'en' ? 'commodities' : 'komoditas'}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">{t.noResults}</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              {currentLang === 'en' ? 'Reset Filters' : 'Reset Pencarian'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => {
              const name = product.name[currentLang];
              const summary = product.summary[currentLang];
              const origin = product.origin[currentLang];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row group"
                >
                  {/* Product Image */}
                  <div className="md:w-5/12 relative aspect-4/3 md:aspect-auto bg-slate-100 shrink-0">
                    <img
                      src={product.image}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-mono rounded">
                      HS {product.hsCode}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Zero-Pill unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <span className="font-semibold text-emerald-800">{product.categoryName[currentLang]}</span>
                        <span aria-hidden="true">·</span>
                        <span className="italic">{product.latinName}</span>
                      </div>

                      <h2 className="text-xl font-bold font-display text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {name}
                      </h2>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {summary}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="text-slate-500">{currentLang === 'en' ? 'Monthly Supply:' : 'Kapasitas Pasokan:'}</span>
                          <span className="font-semibold text-slate-900 tabular-nums">{product.commercialTerms.monthlyCapacity[currentLang]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{currentLang === 'en' ? 'Minimum Order (MOQ):' : 'Pesanan Minimal (MOQ):'}</span>
                          <span className="font-semibold text-slate-900">{product.commercialTerms.moq[currentLang]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{currentLang === 'en' ? 'Harvest Region:' : 'Daerah Asal:'}</span>
                          <span className="font-semibold text-slate-900 truncate max-w-[200px]">{origin}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <button
                        onClick={() => onNavigate('product-detail', product.id)}
                        className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        <span>{t.viewDetail}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onQuickQuote(name)}
                        className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>{t.requestQuoteFor}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
