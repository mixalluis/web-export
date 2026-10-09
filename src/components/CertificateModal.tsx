import React from 'react';
import { X, ShieldCheck, CheckCircle2, FileCheck2, Building2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { Language } from '../data/i18n';

interface CertificateModalProps {
  certId: string | null;
  currentLang: Language;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certId,
  currentLang,
  onClose,
}) => {
  if (!certId) return null;

  const certData: Record<string, { title: string; issuer: string; regNo: string; validUntil: string; description: string }> = {
    nib: {
      title: "Nomor Induk Berusaha (NIB) & Izin Usaha Ekspor",
      issuer: "Lembaga OSS RBA - Kementerian Investasi / BKPM RI",
      regNo: COMPANY_CONFIG.legal.nib,
      validUntil: "Berlaku Selama Menjalankan Kegiatan Usaha",
      description: "Nomor Induk Berusaha yang memvalidasi PT Anurika Nusantara Agro sebagai badan hukum resmi Indonesia dengan hak kepabeanan ekspor komoditas pertanian dan rempah di bawah KBLI 46312.",
    },
    npwp: {
      title: "Nomor Pokok Wajib Pajak (NPWP) Perusahaan",
      issuer: "Direktorat Jenderal Pajak - Kementerian Keuangan RI",
      regNo: COMPANY_CONFIG.legal.npwp,
      validUntil: "Aktif / Terdaftar Pajak Ekspor",
      description: "Identitas perpajakan resmi wajib pajak badan terdaftar, memenuhi seluruh kewajiban administrasi fiskal perdagangan luar negeri.",
    },
    kemendag: {
      title: "Tanda Daftar Eksportir Terdaftar (Kemendag)",
      issuer: "Kementerian Perdagangan Republik Indonesia",
      regNo: COMPANY_CONFIG.legal.exportLicense,
      validUntil: "Aktif - Teregistrasi Sistem INATRADE",
      description: "Izin legal eksportir komoditas pertanian dan hasil perkebunan terintegrasi dengan portal INSW (Indonesia National Single Window).",
    },
    phyto: {
      title: "Sertifikat Fitosanitari (Phytosanitary Certificate)",
      issuer: "Badan Karantina Indonesia (Indonesian Quarantine Authority)",
      regNo: "IQA-KT-EXP/SUB/2026/0892",
      validUntil: "Diterbitkan per Pengapalan (Per Shipment)",
      description: "Dokumen resmi jaminan karantina internasional yang membuktikan seluruh lot komoditas bebas dari organisme pengganggu tumbuhan karantina (OPTK) dan serangga hama hidup.",
    },
    coa: {
      title: "Certificate of Analysis (COA) - Uji Laboratorium",
      issuer: "Independent Testing Surveyor (PT Carsurin / SGS Indonesia)",
      regNo: "COA-LAB/ID/2026/0411",
      validUntil: "Diterbitkan per Batch Lot Uji",
      description: "Laporan hasil uji laboratorium terakreditasi ISO/IEC 17025 yang mengonfirmasi parameter kadar air (moisture), kemurnian, kadar abu, dan residu kimia sebelum stuffing kontainer.",
    },
    coo: {
      title: "Surat Keterangan Asal (Certificate of Origin - COO)",
      issuer: "Instansi Penerbit SKA (IPSKA) - Dinas Perdagangan Jawa Timur",
      regNo: "COO-SKA/ID/2026/1944",
      validUntil: "Per B/L Pengapalan",
      description: "Sertifikat resmi yang membuktikan bahwa produk diproduksi dan dipanen di wilayah kedaulatan Republik Indonesia untuk fasilitas preferensi bea masuk di negara buyer.",
    },
  };

  const selected = certData[certId] || certData['nib'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {currentLang === 'en' ? 'Official Verification Record' : 'Catatan Verifikasi Resmi'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-sm">
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">
              {currentLang === 'en' ? 'Document Type' : 'Jenis Dokumen Legalitas'}
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">
              {selected.title}
            </h3>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">{currentLang === 'en' ? 'Issuing Authority / Agency:' : 'Instansi Penerbit:'}</span>
              <span className="font-semibold text-slate-900">{selected.issuer}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{currentLang === 'en' ? 'Registration / Document No:' : 'Nomor Registrasi / Dokumen:'}</span>
              <span className="font-mono font-bold text-emerald-800 text-sm">{selected.regNo}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{currentLang === 'en' ? 'Validity Status:' : 'Status Masa Berlaku:'}</span>
              <span className="font-medium text-slate-800">{selected.validUntil}</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {selected.description}
          </p>

          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {currentLang === 'en'
                ? 'Registered entity under Indonesian Corporate Registry Law.'
                : 'Terdaftar resmi dalam pangkalan data Direktorat Jenderal Administrasi Hukum Umum.'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {currentLang === 'en' ? 'Close Record' : 'Tutup Catatan'}
          </button>
        </div>
      </div>
    </div>
  );
};
