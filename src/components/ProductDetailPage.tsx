import React, { useState } from 'react';
import { ArrowLeft, FileDown, MessageSquare, Send, CheckCircle2, ShieldCheck, Box, Calendar, MapPin, Truck } from 'lucide-react';
import { ProductItem } from '../data/products';
import { COMPANY_CONFIG } from '../data/config';
import { TRANSLATIONS, Language } from '../data/i18n';

interface ProductDetailPageProps {
  product: ProductItem;
  currentLang: Language;
  onBack: () => void;
  onRequestQuote: (productName: string) => void;
  onOpenSpecSheetModal: (product: ProductItem) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  currentLang,
  onBack,
  onRequestQuote,
  onOpenSpecSheetModal,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const t = TRANSLATIONS[currentLang].productDetail;

  const productName = product.name[currentLang];
  const activePhoto = product.gallery[activePhotoIdx] || product.gallery[0];

  const handleWhatsappInquiry = () => {
    const text = currentLang === 'en'
      ? `Hello Anurika Nusantara Agro Export Desk, I am interested in importing ${productName} (HS Code ${product.hsCode}). Could you provide the latest FOB/CIF specification and price quotation?`
      : `Halo Tim Ekspor Anurika Nusantara Agro, saya tertarik dengan produk ${productName} (Kode HS ${product.hsCode}). Mohon informasi spesifikasi dan penawaran harga FOB/CIF terbaru.`;
    const url = `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToCatalog}</span>
          </button>
        </div>

        {/* Top Product Header & Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery (Left Col) - 4 Photo Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Main Photo */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption[currentLang]}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-mono rounded">
                HS {product.hsCode}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-medium">
                {activePhoto.caption[currentLang]}
              </div>
            </div>

            {/* 4 Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all ${
                    activePhotoIdx === idx
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption[currentLang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Overview & Primary Conversion Actions (Right Col) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-emerald-800">{product.categoryName[currentLang]}</span>
                <span aria-hidden="true">·</span>
                <span className="italic">{product.latinName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">HS {product.hsCode}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight text-balance">
                {productName}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {product.description[currentLang]}
              </p>
            </div>

            {/* Key Commercial Snapshot */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {t.quickFacts}
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs pt-1">
                <div>
                  <div className="text-slate-500">{t.monthlyCapacity}:</div>
                  <div className="font-bold text-slate-900 tabular-nums">{product.commercialTerms.monthlyCapacity[currentLang]}</div>
                </div>
                <div>
                  <div className="text-slate-500">{t.moq}:</div>
                  <div className="font-bold text-slate-900">{product.commercialTerms.moq[currentLang]}</div>
                </div>
                <div>
                  <div className="text-slate-500">{t.leadTime}:</div>
                  <div className="font-bold text-slate-900">{product.commercialTerms.productionLeadTime[currentLang]}</div>
                </div>
                <div>
                  <div className="text-slate-500">{t.pricingModel}:</div>
                  <div className="font-bold text-emerald-800">{product.commercialTerms.pricingModel[currentLang]}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <button
                  onClick={() => onRequestQuote(productName)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.requestQuoteBtn}</span>
                </button>
                <button
                  onClick={handleWhatsappInquiry}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{t.askWhatsappBtn}</span>
                </button>
              </div>

              <button
                onClick={() => onOpenSpecSheetModal(product)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4 text-slate-500" />
                <span>{t.downloadSpecPdf}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Technical Specification Blocks (PRD Section 4.2) */}
        <div className="space-y-10 pt-6">
          {/* Block 1: General Info */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3 mb-5">
              {t.blockGeneral}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">{t.originRegion}</span>
                <span className="font-medium text-slate-900">{product.generalInfo.originRegion[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{currentLang === 'en' ? 'Harvest Season' : 'Musim Panen'}</span>
                <span className="font-medium text-slate-900">{product.harvestSeason[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.processingMethod}</span>
                <span className="font-medium text-slate-900">{product.generalInfo.processingMethod[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.shelfLife}</span>
                <span className="font-medium text-slate-900">{product.generalInfo.shelfLife[currentLang]}</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs text-slate-500 block mb-2">{t.certifications}</span>
                <div className="flex flex-wrap gap-2">
                  {product.generalInfo.certifications.map((c, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {c[currentLang]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Grade Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3 mb-5">
              {t.blockGrade}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {product.gradeTable.columns.map((col, idx) => (
                      <th key={idx} className="py-3 px-4 whitespace-nowrap">
                        {col[currentLang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.gradeTable.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">{row.grade[currentLang]}</td>
                      <td className="py-3.5 px-4 tabular-nums">{row.moisture}</td>
                      <td className="py-3.5 px-4">{row.purity[currentLang]}</td>
                      <td className="py-3.5 px-4">{row.size[currentLang]}</td>
                      <td className="py-3.5 px-4">{row.colorAroma[currentLang]}</td>
                      <td className="py-3.5 px-4 text-emerald-900 font-medium">{row.specialParam[currentLang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Block 3: Supply Capacity & Commercial Terms */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3 mb-5">
              {t.blockCommercial}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">{t.monthlyCapacity}</span>
                <span className="font-semibold text-slate-900 tabular-nums">{product.commercialTerms.monthlyCapacity[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.moq}</span>
                <span className="font-semibold text-slate-900">{product.commercialTerms.moq[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.leadTime}</span>
                <span className="font-medium text-slate-900">{product.commercialTerms.productionLeadTime[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.samplePolicy}</span>
                <span className="font-medium text-slate-900">{product.commercialTerms.samplePolicy[currentLang]}</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs text-slate-500 block">{t.pricingModel}</span>
                <span className="font-semibold text-emerald-800">{product.commercialTerms.pricingModel[currentLang]}</span>
              </div>
            </div>
          </div>

          {/* Block 4: Packaging & Container Stuffing */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3 mb-5">
              {t.blockPackaging}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="md:col-span-2">
                <span className="text-xs text-slate-500 block">{t.packagingType}</span>
                <span className="font-medium text-slate-900">{product.packaging.type[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.netWeight}</span>
                <span className="font-medium text-slate-900">{product.packaging.netWeight[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.privateLabel}</span>
                <span className="font-medium text-slate-900">{product.packaging.privateLabel[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.load20ft}</span>
                <span className="font-semibold text-slate-900 tabular-nums">{product.packaging.load20ftFcl[currentLang]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{t.load40ft}</span>
                <span className="font-semibold text-slate-900 tabular-nums">{product.packaging.load40ftHc[currentLang]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Conversion CTA Strip */}
        <div className="p-8 rounded-2xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold font-display">
              {currentLang === 'en' ? `Request tailored export quote for ${productName}` : `Minta penawaran resmi ekspor untuk ${productName}`}
            </div>
            <div className="text-xs text-emerald-200 mt-1">
              {currentLang === 'en' ? 'Our export desk will prepare an official commercial Proforma invoice with current FOB/CIF rates.' : 'Tim ekspor kami akan menyiapkan penawaran Proforma resmi dengan tarif FOB/CIF terbaru.'}
            </div>
          </div>
          <button
            onClick={() => onRequestQuote(productName)}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-emerald-50 rounded-lg whitespace-nowrap transition-colors"
          >
            {t.requestQuoteBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
