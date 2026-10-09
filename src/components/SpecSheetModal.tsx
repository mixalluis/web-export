import React from 'react';
import { X, Printer, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../data/products';
import { COMPANY_CONFIG } from '../data/config';
import { Language, TRANSLATIONS } from '../data/i18n';

interface SpecSheetModalProps {
  product: ProductItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({
  product,
  currentLang,
  onClose,
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[currentLang].specModal;
  const productName = product.name[currentLang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t.title}</span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-mono">HS {product.hsCode}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.printBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
              aria-label={t.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-800 text-sm">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 border-emerald-800 pb-6">
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                PT Anurika Nusantara Agro
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Trading Desk: Wisma Export Nusantara, Surabaya | Warehouse: Safe 'n' Lock Sidoarjo, Indonesia
              </div>
              <div className="text-xs text-slate-500">
                NIB: {COMPANY_CONFIG.legal.nib} · Ministry of Trade Reg: {COMPANY_CONFIG.legal.exportLicense}
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Technical Data Sheet (TDS)
              </div>
              <div className="text-xs font-mono text-slate-500 mt-1">
                DOC-REF: NKE-SPEC-2026-{product.id.toUpperCase()}
              </div>
              <div className="text-xs text-slate-500">
                Effective Date: October 2026
              </div>
            </div>
          </div>

          {/* Product Banner */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold font-display text-slate-900">
                {productName}
              </h2>
              <div className="text-xs text-slate-600 italic mt-0.5">
                Botanical Name: {product.latinName}
              </div>
            </div>
            <div className="text-xs text-slate-600 sm:text-right">
              <div><strong>HS Code:</strong> {product.hsCode}</div>
              <div><strong>Standard Origin:</strong> {product.origin[currentLang]}</div>
            </div>
          </div>

          {/* Grade Specifications Table */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              1. Physical & Chemical Grade Parameters
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                    {product.gradeTable.columns.map((col, idx) => (
                      <th key={idx} className="p-2.5 border-r border-slate-200 last:border-r-0">
                        {col[currentLang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {product.gradeTable.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 font-bold border-r border-slate-200">{row.grade[currentLang]}</td>
                      <td className="p-2.5 border-r border-slate-200">{row.moisture}</td>
                      <td className="p-2.5 border-r border-slate-200">{row.purity[currentLang]}</td>
                      <td className="p-2.5 border-r border-slate-200">{row.size[currentLang]}</td>
                      <td className="p-2.5 border-r border-slate-200">{row.colorAroma[currentLang]}</td>
                      <td className="p-2.5 font-medium text-emerald-900">{row.specialParam[currentLang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Supply & Commercial Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wide">
                2. Supply Capacity & Terms
              </div>
              <div><strong>Monthly Supply Capacity:</strong> {product.commercialTerms.monthlyCapacity[currentLang]}</div>
              <div><strong>Minimum Order Quantity (MOQ):</strong> {product.commercialTerms.moq[currentLang]}</div>
              <div><strong>Production Lead Time:</strong> {product.commercialTerms.productionLeadTime[currentLang]}</div>
              <div><strong>Sample Policy:</strong> {product.commercialTerms.samplePolicy[currentLang]}</div>
              <div><strong>Pricing Benchmark:</strong> {product.commercialTerms.pricingModel[currentLang]}</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wide">
                3. Packaging & Container Stowing
              </div>
              <div><strong>Standard Packaging:</strong> {product.packaging.type[currentLang]}</div>
              <div><strong>Unit Net Weight:</strong> {product.packaging.netWeight[currentLang]}</div>
              <div><strong>20ft FCL Payload:</strong> {product.packaging.load20ftFcl[currentLang]}</div>
              <div><strong>40ft HC Payload:</strong> {product.packaging.load40ftHc[currentLang]}</div>
              <div><strong>OEM Private Label:</strong> {product.packaging.privateLabel[currentLang]}</div>
            </div>
          </div>

          {/* Compliance & Sign-off Stamp */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs text-slate-500">
            <div>
              <div className="font-semibold text-slate-700">Official Quality Compliance Note:</div>
              <p className="mt-0.5 max-w-md">
                Every export batch is pre-inspected by accredited surveyors (SGS, Sucofindo, or Carsurin) before container seal issuance.
              </p>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-900">PT Anurika Nusantara Agro</div>
              <div className="text-emerald-800 font-medium">Quality Assurance & Export Operations</div>
              <div className="text-slate-400 font-mono text-[10px] mt-1">SEALED & DIGITALLY VERIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
