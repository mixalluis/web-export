export interface ProductSpecBlock {
  title: string;
  items: { label: string; value: string }[];
}

export interface GradeRow {
  grade: { en: string; id: string };
  moisture: string;
  purity: { en: string; id: string };
  size: { en: string; id: string };
  colorAroma: { en: string; id: string };
  specialParam: { en: string; id: string };
}

export interface ProductItem {
  id: string;
  slug: string;
  category: 'spices' | 'coconut' | 'coffee';
  categoryName: { en: string; id: string };
  name: { en: string; id: string };
  latinName: string;
  hsCode: string;
  origin: { en: string; id: string };
  harvestSeason: { en: string; id: string };
  image: string;
  gallery: { url: string; caption: { en: string; id: string } }[];
  summary: { en: string; id: string };
  description: { en: string; id: string };
  
  // 4 Technical Specification Blocks
  generalInfo: {
    originRegion: { en: string; id: string };
    processingMethod: { en: string; id: string };
    shelfLife: { en: string; id: string };
    certifications: { en: string; id: string }[];
  };

  gradeTable: {
    columns: { en: string; id: string }[];
    rows: GradeRow[];
  };

  commercialTerms: {
    monthlyCapacity: { en: string; id: string };
    moq: { en: string; id: string };
    productionLeadTime: { en: string; id: string };
    samplePolicy: { en: string; id: string };
    pricingModel: { en: string; id: string };
  };

  packaging: {
    type: { en: string; id: string };
    netWeight: { en: string; id: string };
    load20ftFcl: { en: string; id: string };
    load40ftHc: { en: string; id: string };
    privateLabel: { en: string; id: string };
  };
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "vanilla-beans",
    slug: "indonesian-vanilla-beans",
    category: "spices",
    categoryName: { en: "Spices & Botanical", id: "Rempah & Botani" },
    name: {
      en: "Indonesian Gourmet Planifolia Vanilla Beans",
      id: "Biji Vanili Planifolia Gourmet Indonesia"
    },
    latinName: "Vanilla planifolia Andrews",
    hsCode: "0905.10.00",
    origin: {
      en: "Alor (East Nusa Tenggara), Bali & North Sulawesi, Indonesia",
      id: "Alor (NTT), Bali & Sulawesi Utara, Indonesia"
    },
    harvestSeason: {
      en: "Peak: June – September (Cured supply available year-round)",
      id: "Puncak: Juni – September (Stok kering tersedia sepanjang tahun)"
    },
    image: "/src/assets/images/product_vanilla_beans_1791398631324.jpg",
    gallery: [
      {
        url: "/src/assets/images/product_vanilla_beans_1791398631324.jpg",
        caption: { en: "Selected Grade A Planifolia Pods Bundled with Natural Raffia", id: "Polong Vanili Grade A Pilihan Diikat Tali Rafia Alami" }
      },
      {
        url: "/src/assets/images/product_vanilla_beans_1791398631324.jpg",
        caption: { en: "Oily Supple Texture & Heavy Natural Vanillin Crystallization", id: "Tekstur Berminyak Kenyal & Kristalisasi Vanilin Alami" }
      },
      {
        url: "/src/assets/images/facility_warehouse_qc_1791398666140.jpg",
        caption: { en: "Moisture Content Verification in Our Quality Inspection Lab", id: "Uji Kadar Air di Laboratorium Kontrol Kualitas" }
      },
      {
        url: "/src/assets/images/hero_export_port_logistics_1791398617496.jpg",
        caption: { en: "Vacuum Sealed Export Cartons Ready for Air Freight Dispatch", id: "Karton Ekspor Vakum Siap Pengiriman Kargo Udara" }
      }
    ],
    summary: {
      en: "Gourmet black bourbon vanilla pods with 28-33% moisture, dark oily sheen, intense woody floral bouquet, and natural vanillin content exceeding 2.0%.",
      id: "Polong vanili hitam gourmet kadar air 28-33%, berminyak mengkilap, aroma floral kayu pekat, dengan kadar vanilin alami di atas 2,0%."
    },
    description: {
      en: "Sourced directly through our partner smallholder farmer collectives in Alor and Sulawesi. Sun-cured through traditional slow sweating methods, our Planifolia vanilla beans deliver the rich, buttery, deep bourbon aromatic profile prized by global pastry chefs, extractors, and culinary distributors.",
      id: "Diperoleh langsung melalui kemitraan kelompok tani binaan di Alor dan Sulawesi. Dikerjakan dengan metode fermentasi dan penjemuran matahari lambat, menghasilkan profil vanili bourbon kaya mentega yang dicari industri pastry dan perisa dunia."
    },
    generalInfo: {
      originRegion: { en: "East Nusa Tenggara & Sulawesi highlands", id: "Dataran tinggi NTT & Sulawesi" },
      processingMethod: { en: "Traditional sun-curing & slow sweat-box fermentation (3-4 months)", id: "Fermentasi kotak kering & penjemuran matahari tradisional (3-4 bulan)" },
      shelfLife: { en: "24 months when stored in sealed vacuum packs at 18-22°C", id: "24 bulan dalam kemasan vakum bersegel pada suhu 18-22°C" },
      certifications: [
        { en: "Phytosanitary Certificate", id: "Sertifikat Fitosanitari" },
        { en: "Certificate of Origin (COO Form D/E/AK)", id: "Surat Keterangan Asal (COO / SKA)" },
        { en: "Halal Indonesia", id: "Sertifikat Halal Indonesia" },
        { en: "Lab COA (Vanillin & Moisture)", id: "Laporan Uji Lab COA (Kadar Vanilin & Air)" }
      ]
    },
    gradeTable: {
      columns: [
        { en: "Grade Specification", id: "Spesifikasi Grade" },
        { en: "Moisture Content", id: "Kadar Air" },
        { en: "Length", id: "Panjang Polong" },
        { en: "Vanillin Content", id: "Kadar Vanilin" },
        { en: "Appearance & Aroma", id: "Tampilan & Aroma" },
        { en: "Application", id: "Peruntukan Industri" }
      ],
      rows: [
        {
          grade: { en: "Grade A (Gourmet / Prime)", id: "Grade A (Gourmet / Prime)" },
          moisture: "28% – 33%",
          purity: { en: "99.8% intact pods, zero split", id: "99,8% polong utuh, tanpa belah" },
          size: { en: "16 cm – 21 cm (average 18 cm)", id: "16 cm – 21 cm (rata-rata 18 cm)" },
          colorAroma: { en: "Dark brown / black, oily sheen, sweet balsamic notes", id: "Hitam pekat mengkilap berminyak, aroma balsamik manis" },
          specialParam: { en: "Vanillin > 2.0% | Whole intact pods", id: "Kadar Vanilin > 2,0% | Batang utuh sempurna" }
        },
        {
          grade: { en: "Grade B (Extraction Grade)", id: "Grade B (Grade Ekstraksi)" },
          moisture: "20% – 25%",
          purity: { en: "May contain short cuts & split pods", id: "Bisa berisi potongan pendek & polong belah" },
          size: { en: "13 cm – 16 cm", id: "13 cm – 16 cm" },
          colorAroma: { en: "Reddish dark brown, drier woody aroma", id: "Cokelat kemerahan gelap, aroma kayu kering" },
          specialParam: { en: "Vanillin 1.6% – 2.0% | High yield for alcohol extraction", id: "Vanilin 1,6% – 2,0% | Rendemen tinggi ekstraksi alkohol" }
        },
        {
          grade: { en: "Grade C (Short / Cuts)", id: "Grade C (Potongan / Cuts)" },
          moisture: "16% – 20%",
          purity: { en: "Broken cuts / splits allowed", id: "Potongan patah / belah diperbolehkan" },
          size: { en: "Under 13 cm", id: "Di bawah 13 cm" },
          colorAroma: { en: "Fibrous dry brown, aromatic extraction base", id: "Cokelat kering berserat, basis ekstraksi aromatik" },
          specialParam: { en: "Cost-effective flavor extraction & grinding powder", id: "Ekstraksi perisa ekonomis & bubuk giling" }
        }
      ]
    },
    commercialTerms: {
      monthlyCapacity: { en: "3.5 to 5.0 Metric Tons / Month", id: "3,5 hingga 5,0 Ton / Bulan" },
      moq: { en: "50 kg (Air Freight) or 500 kg (Combined Sea LCL)", id: "50 kg (Kargo Udara) atau 500 kg (LCL Laut)" },
      productionLeadTime: { en: "7–14 business days from confirmed contract", id: "7–14 hari kerja setelah kontrak diteken" },
      samplePolicy: {
        en: "Free 100g sample pods provided. Buyer covers express international courier fee (DHL/FedEx account).",
        id: "Sampel gratis 100g tersedia. Biaya kurir kilat internasional (DHL/FedEx) ditanggung pihak pembeli."
      },
      pricingModel: { en: "Price On Request (USD/kg FOB Jakarta or CIF Buyer Destination)", id: "Harga Sesuai Permintaan (USD/kg FOB Jakarta atau CIF)" }
    },
    packaging: {
      type: { en: "Food-grade multi-layer vacuum pouches inside heavy corrugated master cartons", id: "Plastik vakum food-grade tebal di dalam karton master ekspor tebal" },
      netWeight: { en: "1 kg or 5 kg vacuum pouch (20 kg net per export master carton)", id: "Kemasan 1 kg atau 5 kg vakum (20 kg neto per karton master)" },
      load20ftFcl: { en: "Approx. 5,000 kg (Palletized for air or sea)", id: "Sekitar 5.000 kg (Menggunakan palet ekspor)" },
      load40ftHc: { en: "Approx. 10,000 kg", id: "Sekitar 10.000 kg" },
      privateLabel: { en: "Available for branded retail pouches (OEM barcodes, custom packaging)", id: "Tersedia untuk kemasan ritel berlabel pembeli (OEM, barcode)" }
    }
  },
  {
    id: "coconut-charcoal",
    slug: "coconut-shell-briquette-charcoal",
    category: "coconut",
    categoryName: { en: "Coconut & Derivatives", id: "Kelapa & Turunan" },
    name: {
      en: "Premium Coconut Shell Charcoal Briquettes",
      id: "Briket Arang Tempurung Kelapa Premium"
    },
    latinName: "Cocos nucifera L.",
    hsCode: "4402.90.10",
    origin: {
      en: "Central Java & East Java, Indonesia",
      id: "Jawa Tengah & Jawa Timur, Indonesia"
    },
    harvestSeason: {
      en: "Year-Round continuous manufacturing",
      id: "Produksi kontinu sepanjang tahun"
    },
    image: "/src/assets/images/product_coconut_charcoal_1791398642920.jpg",
    gallery: [
      {
        url: "/src/assets/images/product_coconut_charcoal_1791398642920.jpg",
        caption: { en: "Geometric 25x25x25mm Cube Briquettes with Zero Sparks", id: "Briket Kubus 25mm Presisi Bebas Percikan Api" }
      },
      {
        url: "/src/assets/images/facility_warehouse_qc_1791398666140.jpg",
        caption: { en: "Continuous Kiln Carbonization and Drop Test Inspection", id: "Pemeriksaan Karbonisasi Tungku dan Uji Jatuh Bebas" }
      },
      {
        url: "/src/assets/images/hero_export_port_logistics_1791398617496.jpg",
        caption: { en: "Container Stuffing with Desiccant & SHT Spontaneous Combustion Certificate", id: "Pemuatan Kontainer Dilengkapi Pengering & Sertifikat SHT" }
      },
      {
        url: "/src/assets/images/product_coconut_charcoal_1791398642920.jpg",
        caption: { en: "White Clean Ash Residual & Long 2.5-Hour Burn Duration", id: "Sisa Abu Putih Bersih & Durasi Bakar 2,5 Jam" }
      }
    ],
    summary: {
      en: "Export-grade coconut charcoal briquettes for Shisha/Hookah and BBQ. 100% natural coconut shell, fixed carbon >80%, ash content <2.2%, burning time over 2.5 hours.",
      id: "Briket arang tempurung kelapa kelas ekspor untuk Shisha & BBQ. 100% tempurung alami, fixed carbon >80%, kadar abu <2,2%, durasi bakar di atas 2,5 jam."
    },
    description: {
      en: "Manufactured from 100% aged coconut shells gathered from Indonesian copra farmers. Processed with zero chemicals or chemical accelerants. Provides odorless, smokeless, sparkless heat with pure white residue, making it the choice of leading shisha lounges across Europe and the Middle East.",
      id: "Diproduksi dari 100% tempurung kelapa tua pilihan dari petani kopra Indonesia. Diolah tanpa bahan kimia pemantik. Memberikan panas tanpa asap, tanpa bau, dan tanpa percikan dengan abu putih murni."
    },
    generalInfo: {
      originRegion: { en: "Surabaya & Semarang manufacturing hubs", id: "Pusat pabrikasi Surabaya & Semarang" },
      processingMethod: { en: "Drum kiln carbonization, micron-crushing, hydraulic high-pressure extrusion & 72h electric oven drying", id: "Karbonisasi drum, penepungan mikro, ekstrusi hidrolik tekanan tinggi & oven 72 jam" },
      shelfLife: { en: "36+ months stored in dry conditions away from moisture", id: "36+ bulan disimpan di tempat kering terlindung dari lembap" },
      certifications: [
        { en: "MSDS (Material Safety Data Sheet)", id: "MSDS (Lembar Data Keselamatan Bahan)" },
        { en: "SHT (Self-Heating / Non-DG Certificate)", id: "Sertifikat SHT / Non-DG (Carsurin / SGS)" },
        { en: "Certificate of Origin (COO)", id: "Surat Keterangan Asal (COO / SKA)" },
        { en: "Fumigation Certificate", id: "Sertifikat Fumigasi" }
      ]
    },
    gradeTable: {
      columns: [
        { en: "Specification", id: "Spesifikasi" },
        { en: "Shisha Platinum Grade", id: "Shisha Grade Platinum" },
        { en: "Shisha Gold Grade", id: "Shisha Grade Gold" },
        { en: "BBQ Hexagonal Grade", id: "BBQ Hexagonal Grade" },
        { en: "Test Standard Method", id: "Metode Uji Standar" }
      ],
      rows: [
        {
          grade: { en: "Calorific Value", id: "Nilai Kalor" },
          moisture: "> 7,300 – 7,500 kcal/kg",
          purity: { en: "> 7,100 kcal/kg", id: "> 7.100 kkal/kg" },
          size: { en: "> 6,800 kcal/kg", id: "> 6.800 kkal/kg" },
          colorAroma: { en: "High consistent heat", id: "Panas tinggi konstan" },
          specialParam: { en: "ASTM D5865", id: "ASTM D5865" }
        },
        {
          grade: { en: "Moisture Content", id: "Kadar Air" },
          moisture: "Max 4.0% – 5.0%",
          purity: { en: "Max 5.5%", id: "Maks 5,5%" },
          size: { en: "Max 6.5%", id: "Maks 6,5%" },
          colorAroma: { en: "Completely dry", id: "Kering sempurna" },
          specialParam: { en: "ASTM D3173", id: "ASTM D3173" }
        },
        {
          grade: { en: "Total Ash Content", id: "Kadar Abu Total" },
          moisture: "Max 1.8% – 2.2%",
          purity: { en: "Max 2.5%", id: "Maks 2,5%" },
          size: { en: "Max 4.0%", id: "Maks 4,0%" },
          colorAroma: { en: "Snow White to Light Cream", id: "Putih Salju hingga Krem Cerah" },
          specialParam: { en: "ASTM D3174", id: "ASTM D3174" }
        },
        {
          grade: { en: "Fixed Carbon", id: "Karbon Terikat" },
          moisture: "Min 82% – 85%",
          purity: { en: "Min 80%", id: "Min 80%" },
          size: { en: "Min 75%", id: "Min 75%" },
          colorAroma: { en: "100% Pure Coconut Shell", id: "100% Tempurung Kelapa Murni" },
          specialParam: { en: "ASTM D3172", id: "ASTM D3172" }
        },
        {
          grade: { en: "Burning Duration", id: "Durasi Bakar" },
          moisture: "Up to 2.5 – 3.0 Hours",
          purity: { en: "Up to 2.0 – 2.5 Hours", id: "Hingga 2,0 – 2,5 Jam" },
          size: { en: "Up to 4.0 Hours (Long BBQ)", id: "Hingga 4,0 Jam (BBQ Panjang)" },
          colorAroma: { en: "Smokeless & Odorless", id: "Bebas Asap & Tanpa Bau" },
          specialParam: { en: "Standard Burn Test", id: "Uji Bakar Standar" }
        }
      ]
    },
    commercialTerms: {
      monthlyCapacity: { en: "100 to 150 Metric Tons (approx. 6–8 FCL Containers) / Month", id: "100 hingga 150 Ton (sekitar 6–8 Kontainer FCL) / Bulan" },
      moq: { en: "1 x 20ft FCL Container (approx. 18 Metric Tons)", id: "1 x 20ft FCL Kontainer (sekitar 18 Ton)" },
      productionLeadTime: { en: "14–21 business days upon receipt of deposit", id: "14–21 hari kerja setelah pembayaran deposit" },
      samplePolicy: {
        en: "Free 1kg sample box. Courier cost prepaid by buyer via DHL/FedEx.",
        id: "Sampel gratis 1kg. Biaya pengiriman kurir ditanggung pihak pembeli."
      },
      pricingModel: { en: "USD / Metric Ton FOB Surabaya (IDTPE) or CIF Major Sea Ports", id: "USD / Metrik Ton FOB Surabaya atau CIF Pelabuhan Buyer" }
    },
    packaging: {
      type: { en: "1 kg inner box with brand artwork + plastic inner wrap, packed into 10 kg master export carton", id: "Kotak dalam 1 kg dengan desain pembeli + plastik segel, dimasukkan master karton 10 kg" },
      netWeight: { en: "10 kg or 20 kg Master Carton", id: "Master Karton 10 kg atau 20 kg" },
      load20ftFcl: { en: "Approx. 18.0 Metric Tons (Floor Loaded with moisture absorbents)", id: "Sekitar 18,0 Ton (Pemuatan lantai dengan penyerap lembap)" },
      load40ftHc: { en: "Approx. 26.0 Metric Tons", id: "Sekitar 26,0 Ton" },
      privateLabel: { en: "Full OEM packaging printing support (inner box, master carton, barcode, tamper seals)", id: "Layanan penuh cetak kemasan OEM (kotak dalam, master karton, barcode)" }
    }
  },
  {
    id: "green-coffee-beans",
    slug: "indonesian-green-coffee-beans",
    category: "coffee",
    categoryName: { en: "Coffee & Cocoa", id: "Kopi & Kakao" },
    name: {
      en: "Indonesian Specialty Green Coffee Beans",
      id: "Biji Kopi Mentah (Green Coffee) Spesialti Indonesia"
    },
    latinName: "Coffea arabica & Coffea canephora",
    hsCode: "0901.11.10",
    origin: {
      en: "Sumatra (Mandheling / Gayo) & East Java (Ijen Raung / Dampit), Indonesia",
      id: "Sumatera (Mandheling / Gayo) & Jawa Timur (Ijen / Dampit), Indonesia"
    },
    harvestSeason: {
      en: "Sumatra: October – January; Java: May – August",
      id: "Sumatera: Oktober – Januari; Jawa: Mei – Agustus"
    },
    image: "/src/assets/images/product_coffee_beans_1791398654312.jpg",
    gallery: [
      {
        url: "/src/assets/images/product_coffee_beans_1791398654312.jpg",
        caption: { en: "Double-Picked Grade 1 Sumatra Mandheling Arabica Lots", id: "Lot Kopi Arabika Sumatera Mandheling Grade 1 Double-Picked" }
      },
      {
        url: "/src/assets/images/facility_warehouse_qc_1791398666140.jpg",
        caption: { en: "Optical and Manual Hand-Sorting at Our Moisture-Controlled Dry Mill", id: "Sortasi Manual dan Optik di Dry Mill Terkontrol" }
      },
      {
        url: "/src/assets/images/hero_export_port_logistics_1791398617496.jpg",
        caption: { en: "Standard 60kg GrainPro Jute Bags Stuffed for Ocean Freight", id: "Karung Goni 60kg dengan Pelapis GrainPro Siap Ekspor" }
      },
      {
        url: "/src/assets/images/product_coffee_beans_1791398654312.jpg",
        caption: { en: "Uniform Screen Size 18/19 with Low Moisture Under 12%", id: "Ukuran Screen Seragam 18/19 dengan Kadar Air Rendah di Bawah 12%" }
      }
    ],
    summary: {
      en: "Specialty Arabica (Mandheling & Gayo) and Commercial Robusta (Java Dampit). Grade 1 double-picked, screen 18/19, moisture 11-12%, cupping score 84+.",
      id: "Arabika Spesialti (Mandheling & Gayo) serta Robusta Komersial (Jawa Dampit). Grade 1 double-picked, screen 18/19, kadar air 11-12%, skor cupping 84+."
    },
    description: {
      en: "Grown at altitudes between 1,200m – 1,600m above sea level in volcanic soils. Processed through traditional Wet-Hulled (Giling Basah) for heavy body and spicy undertones, or Fully Washed. Tested according to SCAA cupping standards and packaged with GrainPro liners for freshness.",
      id: "Ditanam di ketinggian 1.200m – 1.600m dpl di tanah vulkanik subur. Diproses dengan metode basah tradisional (Giling Basah) khas Indonesia atau Fully Washed. Diuji sesuai standar cupping SCAA dan dikemas dengan pelapis GrainPro."
    },
    generalInfo: {
      originRegion: { en: "Aceh Gayo, North Sumatra Mandheling & East Java Ijen Plateau", id: "Aceh Gayo, Sumatera Utara Mandheling & Dataran Tinggi Ijen" },
      processingMethod: { en: "Giling Basah (Wet-Hulled), Fully Washed, Natural", id: "Giling Basah (Wet-Hulled), Cuci Penuh, dan Natural" },
      shelfLife: { en: "18 months stored in GrainPro bags in cool, dry warehouse", id: "18 bulan dalam kantong GrainPro di gudang kering sejuk" },
      certifications: [
        { en: "SCAA Cupping Report (Score 84+)", id: "Laporan Cupping SCAA (Skor 84+)" },
        { en: "Phytosanitary Certificate", id: "Sertifikat Fitosanitari" },
        { en: "ICO Certificate of Origin", id: "Surat Keterangan Asal ICO (Kopi Internasional)" }
      ]
    },
    gradeTable: {
      columns: [
        { en: "Origin & Variety", id: "Asal & Varietas" },
        { en: "Grade & Processing", id: "Grade & Proses" },
        { en: "Screen Size", id: "Ukuran Screen" },
        { en: "Defect Count (SCAA)", id: "Jumlah Cacat (Defect)" },
        { en: "Moisture Content", id: "Kadar Air" },
        { en: "Flavor Profile", id: "Karakter Rasa" }
      ],
      rows: [
        {
          grade: { en: "Sumatra Mandheling Arabica", id: "Sumatra Mandheling Arabika" },
          moisture: "11.0% – 12.0%",
          purity: { en: "Grade 1 (Double Picked / DP)", id: "Grade 1 (Double Picked / DP)" },
          size: { en: "Screen 18/19 (7.0 - 7.5 mm)", id: "Screen 18/19 (7,0 - 7,5 mm)" },
          colorAroma: { en: "Max 8 - 11 defects per 300g", id: "Maks 8 - 11 defect per 300g" },
          specialParam: { en: "Dark cocoa, cedar, herbal spice, heavy body (Score 84.5)", id: "Kakao pekat, cedar, rempah herbal, bodi tebal (Skor 84,5)" }
        },
        {
          grade: { en: "Aceh Gayo Organic Arabica", id: "Aceh Gayo Organik Arabika" },
          moisture: "11.5% – 12.0%",
          purity: { en: "Grade 1 (Triple Picked / TP)", id: "Grade 1 (Triple Picked / TP)" },
          size: { en: "Screen 17/18", id: "Screen 17/18" },
          colorAroma: { en: "Max 3 - 5 defects per 300g", id: "Maks 3 - 5 defect per 300g" },
          specialParam: { en: "Brown sugar, citrus acidity, floral bergamot (Score 85.5)", id: "Gula palem, keasaman sitrus, aroma floral bergamot (Skor 85,5)" }
        },
        {
          grade: { en: "Java Dampit Fine Robusta", id: "Java Dampit Fine Robusta" },
          moisture: "11.5% – 12.5%",
          purity: { en: "Grade 1 (Screen Large AP)", id: "Grade 1 (Screen Besar AP)" },
          size: { en: "Screen 18 (7.1 mm)", id: "Screen 18 (7,1 mm)" },
          colorAroma: { en: "Max 11 defects", id: "Maks 11 defect" },
          specialParam: { en: "Nutty, dark roasted malt, bold crema body", id: "Aroma kacang, malt sangrai pekat, krema tebal mantap" }
        }
      ]
    },
    commercialTerms: {
      monthlyCapacity: { en: "60 to 90 Metric Tons (3 to 5 FCL containers) / Month", id: "60 hingga 90 Ton (3 sampai 5 Kontainer FCL) / Bulan" },
      moq: { en: "1 x 20ft FCL Container (approx. 19.2 MT) or 1 MT for specialty air lots", id: "1 x 20ft FCL Kontainer (sekitar 19,2 Ton) atau 1 Ton untuk kargo udara" },
      productionLeadTime: { en: "10–14 business days to vessel loading", id: "10–14 hari kerja hingga pemuatan kapal" },
      samplePolicy: {
        en: "Free 350g green bean sample + roast evaluation notes. Courier freight collected via buyer account.",
        id: "Sampel gratis 350g biji mentah + catatan sangrai. Biaya kurir ditanggung pembeli."
      },
      pricingModel: { en: "Differentials against ICE Arabica/Robusta benchmark, FOB Medan/Surabaya", id: "Diferensial terhadap benchmark ICE, FOB Medan atau Surabaya" }
    },
    packaging: {
      type: { en: "60 kg Food-grade hermetic GrainPro liner bags inside new natural jute burlap sacks", id: "Karung goni alami 60 kg dengan pelapis kedap udara GrainPro food-grade" },
      netWeight: { en: "60.0 kg net per jute sack", id: "60,0 kg neto per karung goni ekspor" },
      load20ftFcl: { en: "320 sacks = 19.2 Metric Tons (Floor loaded with desiccant blankets)", id: "320 karung = 19,2 Metrik Ton (Pemuatan lantai dengan selimut penyerap)" },
      load40ftHc: { en: "450 sacks = 27.0 Metric Tons", id: "450 karung = 27,0 Metrik Ton" },
      privateLabel: { en: "Custom stencil logo & buyer marks on outer burlap sack", id: "Pencetakan stensil logo dan tanda pembeli pada karung goni" }
    }
  },
  {
    id: "indonesian-cloves",
    slug: "indonesian-whole-cloves",
    category: "spices",
    categoryName: { en: "Spices & Botanical", id: "Rempah & Botani" },
    name: {
      en: "Indonesian Whole Dried Cloves (Lalpari & Zanzibar)",
      id: "Cengkeh Kering Utuh Indonesia (Lalpari & Zanzibar)"
    },
    latinName: "Syzygium aromaticum",
    hsCode: "0907.10.00",
    origin: {
      en: "Maluku (Spice Islands), North Sulawesi & Central Java, Indonesia",
      id: "Maluku (Kepulauan Rempah), Sulawesi Utara & Jawa Tengah, Indonesia"
    },
    harvestSeason: {
      en: "July – October (Annual harvest stored under climate-controlled conditions)",
      id: "Juli – Oktober (Tersedia pasokan tahunan terkontrol)"
    },
    image: "/src/assets/images/product_vanilla_beans_1791398631324.jpg",
    gallery: [
      {
        url: "/src/assets/images/product_vanilla_beans_1791398631324.jpg",
        caption: { en: "Selected Reddish Brown Whole Cloves with Intact Flower Heads", id: "Cengkeh Utuh Cokelat Kemerahan dengan Kepala Bunga Utuh" }
      },
      {
        url: "/src/assets/images/facility_warehouse_qc_1791398666140.jpg",
        caption: { en: "Vibratory Destoning and Hand-Cleaning Separation Process", id: "Proses Destoner Getar dan Pembersihan Manual" }
      },
      {
        url: "/src/assets/images/hero_export_port_logistics_1791398617496.jpg",
        caption: { en: "Sealed Polypropylene Woven Bags with Fumigation Stamp", id: "Karung Anyam PP Tersegel dengan Cap Fumigasi" }
      },
      {
        url: "/src/assets/images/facility_warehouse_qc_1791398666140.jpg",
        caption: { en: "Essential Oil Content Verification by Steam Distillation", id: "Uji Kadar Minyak Atsiri dengan Distilasi Uap" }
      }
    ],
    summary: {
      en: "Authentic Indonesian Spice Islands whole cloves. High eugenol essential oil (>18%), moisture <11%, low baby/headless cloves, zero stem adulteration.",
      id: "Cengkeh utuh asli Kepulauan Rempah Maluku. Kadar minyak atsiri eugenol tinggi (>18%), kadar air <11%, minim kepala patah, bebas campuran gagang."
    },
    description: {
      en: "Indonesia is the historic homeland and leading producer of the finest aromatic cloves in the world. Our cloves are sun-dried immediately after hand-picking to lock in natural essential oils. Thoroughly sieved to eliminate dust, baby cloves, and headless cloves for food, beverage, and oleoresin extractors.",
      id: "Indonesia adalah produsen cengkeh terbaik dunia. Cengkeh kami dikeringkan langsung di bawah sinar matahari setelah dipetik manual untuk mengunci minyak atsiri alami, kemudian diayak bersih dari debu dan gagang."
    },
    generalInfo: {
      originRegion: { en: "Maluku Islands & North Sulawesi", id: "Kepulauan Maluku & Sulawesi Utara" },
      processingMethod: { en: "Hand-picked, sun-dried, mechanical winnowing & optical sorting", id: "Petik tangan, jemur matahari, penampian mekanis & sortasi optik" },
      shelfLife: { en: "24 months stored in moisture-proof polypropylene bags", id: "24 bulan dalam karung polipropilena kedap lembap" },
      certifications: [
        { en: "Phytosanitary Certificate", id: "Sertifikat Fitosanitari" },
        { en: "Fumigation Certificate (Methyl Bromide)", id: "Sertifikat Fumigasi (Metil Bromida)" },
        { en: "Certificate of Origin (COO Form D/E/AK)", id: "Surat Keterangan Asal (COO / SKA)" },
        { en: "Lab COA (Eugenol Content > 18%)", id: "Laporan Uji Lab COA (Kandungan Eugenol > 18%)" }
      ]
    },
    gradeTable: {
      columns: [
        { en: "Grade Classification", id: "Klasifikasi Grade" },
        { en: "Moisture Content", id: "Kadar Air" },
        { en: "Volatile Essential Oil", id: "Minyak Atsiri" },
        { en: "Headless / Broken Cloves", id: "Kepala Patah" },
        { en: "Foreign Matter & Stems", id: "Benda Asing & Tangkai" },
        { en: "Color & Aroma", id: "Warna & Aroma" }
      ],
      rows: [
        {
          grade: { en: "Lalpari Grade (Super Export)", id: "Grade Lalpari (Super Ekspor)" },
          moisture: "Max 10.0% – 11.0%",
          purity: { en: "Min 19.0% – 21.0% (High Eugenol)", id: "Min 19,0% – 21,0% (Eugenol Tinggi)" },
          size: { en: "Max 2.0%", id: "Maks 2,0%" },
          colorAroma: { en: "Max 0.5% (Practically zero stems)", id: "Maks 0,5% (Bebas gagang)" },
          specialParam: { en: "Bright reddish-brown, intensely pungent warm aroma", id: "Cokelat kemerahan cerah, aroma pedas hangat pekat" }
        },
        {
          grade: { en: "Zanzibar / Hand-Picked Grade 1", id: "Zanzibar / Sortasi Tangan Grade 1" },
          moisture: "Max 11.5% – 12.0%",
          purity: { en: "Min 17.5% – 19.0%", id: "Min 17,5% – 19,0%" },
          size: { en: "Max 4.0%", id: "Maks 4,0%" },
          colorAroma: { en: "Max 1.0% stems", id: "Maks 1,0% gagang" },
          specialParam: { en: "Deep dark brown, classic spicy clove fragrance", id: "Cokelat tua pekat, aroma rempah cengkeh klasik" }
        },
        {
          grade: { en: "Standard FAQ Grade", id: "Grade Standar FAQ" },
          moisture: "Max 12.5%",
          purity: { en: "Min 16.0%", id: "Min 16,0%" },
          size: { en: "Max 8.0%", id: "Maks 8,0%" },
          colorAroma: { en: "Max 2.0% stems", id: "Maks 2,0% gagang" },
          specialParam: { en: "Dark brown, economical for spice grinding & oleoresin", id: "Cokelat gelap, ekonomis untuk gilingan bumbu & oleoresin" }
        }
      ]
    },
    commercialTerms: {
      monthlyCapacity: { en: "40 to 60 Metric Tons / Month", id: "40 hingga 60 Ton / Bulan" },
      moq: { en: "1 x 20ft FCL Container (approx. 10.5 – 11.0 Metric Tons)", id: "1 x 20ft FCL Kontainer (sekitar 10,5 – 11,0 Ton)" },
      productionLeadTime: { en: "10–15 business days to port dispatch", id: "10–15 hari kerja sampai pengiriman pelabuhan" },
      samplePolicy: {
        en: "Free 250g representative sample sent via courier (freight collect on buyer's DHL/FedEx).",
        id: "Sampel gratis 250g via kurir kilat (biaya kurir ditanggung pembeli)."
      },
      pricingModel: { en: "USD / Metric Ton FOB Tanjung Perak (Surabaya) or CIF Destination", id: "USD / Metrik Ton FOB Tanjung Perak (Surabaya) atau CIF Pelabuhan" }
    },
    packaging: {
      type: { en: "Multi-ply double PP woven sacks with inner moisture-barrier polyethylene liner", id: "Karung anyaman PP ganda dengan lapisan polietilen penahan kelembaban" },
      netWeight: { en: "25.0 kg or 50.0 kg net per bag", id: "25,0 kg atau 50,0 kg neto per karung" },
      load20ftFcl: { en: "Approx. 11.0 Metric Tons (Floor stuffed with container desiccants)", id: "Sekitar 11,0 Metrik Ton (Pemuatan lantai dengan pengering)" },
      load40ftHc: { en: "Approx. 23.0 Metric Tons", id: "Sekitar 23,0 Metrik Ton" },
      privateLabel: { en: "Custom shipping marks stenciled onto sacks according to LC requirements", id: "Stensil marka pengiriman kustom sesuai ketentuan LC" }
    }
  }
];
