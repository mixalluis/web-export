import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Copy, Check, AlertTriangle, Phone, MapPin, Clock, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { PRODUCTS_DATA } from '../data/products';
import { TRANSLATIONS, Language } from '../data/i18n';

interface ContactRFQPageProps {
  currentLang: Language;
  preselectedProduct?: string;
}

export const ContactRFQPage: React.FC<ContactRFQPageProps> = ({
  currentLang,
  preselectedProduct,
}) => {
  const t = TRANSLATIONS[currentLang].contact;

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [country, setCountry] = useState('');
  const [commodity, setCommodity] = useState(preselectedProduct || PRODUCTS_DATA[0].name.en);
  const [volume, setVolume] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [incoterm, setIncoterm] = useState('FOB (Free On Board)');
  const [message, setMessage] = useState('');

  const [formError, setFormError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setCommodity(preselectedProduct);
    }
  }, [preselectedProduct]);

  // Construct structured B2B inquiry message
  const buildInquiryMessage = () => {
    return [
      `=== OFFICIAL B2B EXPORT INQUIRY (RFQ) ===`,
      `Commodity: ${commodity}`,
      `Estimated Volume: ${volume}`,
      `Preferred Incoterm: ${incoterm}`,
      destinationPort ? `Destination Port: ${destinationPort}` : null,
      ``,
      `--- BUYER CREDENTIALS ---`,
      `Name: ${fullName}`,
      `Company: ${companyName}`,
      `Business Email: ${businessEmail}`,
      `Country/Region: ${country}`,
      ``,
      message ? `--- SPECIFIC REQUIREMENTS / NOTES ---\n${message}\n` : null,
      `Timestamp: ${new Date().toISOString()}`,
      `Sent via Anurika Nusantara Agro Global Export Portal`,
    ].filter(Boolean).join('\n');
  };

  const validateForm = () => {
    if (!fullName.trim() || !companyName.trim() || !businessEmail.trim() || !country.trim() || !volume.trim()) {
      setFormError(t.validationError);
      return false;
    }
    // Basic email pattern check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail.trim())) {
      setFormError(currentLang === 'en' ? 'Please provide a valid business email address.' : 'Mohon masukkan alamat email bisnis yang valid.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`B2B Export Inquiry: ${commodity} - ${companyName} (${country})`);
    const body = encodeURIComponent(buildInquiryMessage());
    window.location.href = `mailto:${COMPANY_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSendWhatsapp = () => {
    if (!validateForm()) return;

    const body = encodeURIComponent(buildInquiryMessage());
    window.open(`https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}?text=${body}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (!validateForm()) return;

    navigator.clipboard.writeText(buildInquiryMessage()).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 4000);
    });
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* RFQ Form (Left Col - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            <div className="mb-6">
              <h2 className="text-xl font-bold font-display text-slate-900">
                {t.formTitle}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {t.formDesc}
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            {copySuccess && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.copiedNotice}</span>
              </div>
            )}

            <form onSubmit={handleSendMailto} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Michael Hansen"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.companyName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Nordic Flavor Import ApS"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.businessEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="e.g. procurement@nordicflavor.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.country} *
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. Germany / Denmark / UAE"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.commodity} *
                  </label>
                  <select
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.name[currentLang]}>
                        {p.name[currentLang]} (HS {p.hsCode})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.volume} *
                  </label>
                  <input
                    type="text"
                    required
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g. 1 x 20ft FCL (18 MT) or 200 kg"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.destinationPort}
                  </label>
                  <input
                    type="text"
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    placeholder="e.g. Hamburg / Jebel Ali / Los Angeles"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.incoterm}
                  </label>
                  <select
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="FOB (Free On Board)">FOB (Free On Board - Indonesian Port)</option>
                    <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight)</option>
                    <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.message}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Triple Dispatch Action Buttons (PRD Section 4.3) */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.submitMailto}</span>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsapp}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>{t.submitWhatsapp}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>{t.submitCopy}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Direct Contact Cards & Anti-Fraud Advisory (Right Col - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Export Desk Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
              <h3 className="text-lg font-bold font-display text-slate-900">
                {t.directContactTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">Official Export Email</div>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}`}
                      className="font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">WhatsApp Export Desk (International)</div>
                    <a
                      href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {COMPANY_CONFIG.contact.phoneDisplay}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {COMPANY_CONFIG.contact.operatingHours.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">{t.hoursTitle}</div>
                    <div className="font-medium text-slate-800">{t.hoursText}</div>
                    <div className="text-xs text-emerald-700 font-semibold mt-0.5">{t.hoursSub}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse & Factory Location */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{t.officeTitle}</span>
              </div>

              <div>
                <div className="text-xs text-slate-500 mb-1">Export Processing & QC Warehouse:</div>
                <div className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {COMPANY_CONFIG.contact.address.warehouse}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 mb-1">Corporate Registration Office:</div>
                <div className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {COMPANY_CONFIG.contact.address.headOffice}
                </div>
              </div>

              {/* Map Preview Container */}
              <div className="mt-3 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 p-4 text-center">
                <div className="text-xs font-mono text-slate-600 mb-1">
                  GPS: 7°27'14.2"S 112°43'50.1"E (Sidoarjo Industrial Zone)
                </div>
                <div className="text-xs text-slate-500">
                  35 km to Tanjung Perak Seaport (IDTPE) · 18 km to Juanda International Airport (SUB)
                </div>
              </div>
            </div>

            {/* Official Anti-Fraud Banking Notice (PRD Section 4.3 & 6.3) */}
            <div className="bg-amber-50/80 rounded-2xl border border-amber-200 p-6 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>{t.antiFraudHeader}</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {COMPANY_CONFIG.antiFraudNotice[currentLang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
