/**
 * Anurika Nusantara Agro - Global B2B Export Profile
 * Official Company Data & Export Configurations
 */

export const COMPANY_CONFIG = {
  name: "PT Anurika Nusantara Agro",
  tradingName: "Anurika Nusantara Agro",
  tagline: "Reliable Indonesian Agricultural Commodities Exporter",
  establishmentYear: 2018,
  
  // Official Legal Registrations (Indonesia UMK & Corporate Export Registry)
  legal: {
    nib: "1289000438192", // Nomor Induk Berusaha (OSS RBA)
    npwp: "42.819.301.4-412.000", // Corporate Tax ID
    exportLicense: "EXP-ID/KEMENDAG-2021/04921", // Ministry of Trade Exporter Registration
    standardCodeKBLI: "46312 (Wholesale Trade of Agricultural Raw Materials & Spices)",
    incorporationDeed: "Notary Deed No. 18 / AHU-0029141.AH.01.01.TAHUN 2018",
  },

  // Contact Information
  contact: {
    phoneInternational: "+62 812-3456-7890",
    phoneDisplay: "+62 812 3456 7890",
    whatsappNumber: "6281234567890",
    email: "export@anurikanusantara.com",
    salesEmail: "inquiry@anurikanusantara.com",
    address: {
      headOffice: "Wisma Export Nusantara Lt. 4, Jl. Raya Darmo No. 88, Surabaya 60265, East Java, Indonesia",
      warehouse: "Kawasan Industri & Pergudangan Safe 'n' Lock Blok C-12, Lingkar Timur, Sidoarjo 61252, Indonesia",
    },
    operatingHours: {
      days: "Monday – Saturday",
      hours: "08:00 – 17:00 WIB (UTC+7 / GMT+7)",
      responseTime: "Guaranteed response within 24 business hours",
    },
  },

  // Logistics & Ports
  logistics: {
    primaryLoadingPorts: [
      { name: "Port of Tanjung Perak", code: "IDTPE", city: "Surabaya, East Java", leadTime: "2-3 days domestic haul" },
      { name: "Port of Tanjung Priok", code: "IDTPP", city: "Jakarta", leadTime: "3-4 days domestic haul" },
      { name: "Port of Belawan", code: "IDBLW", city: "Medan, North Sumatra", leadTime: "2-3 days domestic haul" },
    ],
    supportedIncoterms: ["FOB (Free On Board)", "CFR (Cost and Freight)", "CIF (Cost, Insurance & Freight)"],
    paymentTerms: ["T/T (Telegraphic Transfer): 30% Deposit, 70% against BL & shipping docs", "Irrevocable Confirmed L/C at Sight for FCL orders"],
    currency: "USD ($) / EUR (€)",
  },

  // Anti-fraud Banking Advisory
  antiFraudNotice: {
    en: "SECURITY ADVISORY FOR INTERNATIONAL BUYERS: PT Anurika Nusantara Agro only conducts commercial transactions via our official corporate email domain (@anurikanusantara.com). All international TT wire transfers must be directed strictly to our corporate bank account in the exact name of 'PT ANURIKA NUSANTARA AGRO' at Bank Mandiri / Bank Central Asia, Indonesia. We NEVER use personal bank accounts or alternative wire transfers.",
    id: "PERINGATAN KEAMANAN TRANSAKSI: PT Anurika Nusantara Agro hanya menggunakan email resmi berdomain @anurikanusantara.com. Semua pembayaran kawat internasional wajib ditujukan ke rekening korporat atas nama resmi 'PT ANURIKA NUSANTARA AGRO'. Kami tidak pernah menggunakan rekening pribadi.",
  },
};
