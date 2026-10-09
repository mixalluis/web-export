// Bilingual Dictionary (English & Bahasa Indonesia)
// Anurika Nusantara Agro - Global B2B Export Profile

const DICTIONARY = {
  en: {
    // Nav (Clean B2B standard)
    "nav.brand": "Anurika Nusantara Agro",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.logistics": "Logistics",
    "nav.quoteBtn": "Request a Quote",
    "nav.langBtn": "ID",

    // Hero (Grounded for SME Exporter)
    "hero.badge": "Indonesian Agricultural Exporter · Registered SME · NIB 1289000438192",
    "hero.title": "Direct Indonesian Agricultural Commodities for Global Importers",
    "hero.desc": "Ethically sourced vanilla beans, coconut charcoal briquettes, specialty green coffee, and Maluku cloves from smallholder farmer collectives. Rigorous moisture control, authentic legalities, and certified lab analysis per shipment.",
    "hero.ctaQuote": "Request Official Quotation",
    "hero.ctaProducts": "Browse Product Specifications",
    "hero.statCapacity": "5 – 15 MT / Month",
    "hero.statCapacityLabel": "Aggregated SME Capacity",
    "hero.statLegal": "Official NIB",
    "hero.statLegalLabel": "Legally Registered Exporter",
    "hero.statQc": "100% Inspected",
    "hero.statQcLabel": "Pre-Shipment Quality Testing",
    "hero.statResponse": "24h Response",
    "hero.statResponseLabel": "Fast Commercial Proforma",

    // Featured section
    "feat.kicker": "01. Core Export Commodities",
    "feat.title": "Selected Indonesian Commodities with Verified Grades",
    "feat.desc": "Direct physical parameters, lab tested moisture levels, and container stuffing plans tailored for foreign B2B buyers.",
    "feat.viewSpecs": "View Specifications",
    "feat.quoteBtn": "Get Quote",
    "feat.viewAll": "View All Export Commodities with Grade Tables",

    // Workflow
    "flow.kicker": "02. Seamless Export Flow",
    "flow.title": "From Farm Gate to Destination Port in 6 Clear Steps",
    "flow.desc": "Transparent milestones ensuring zero surprises on quality, lead times, or export documentation.",
    "flow.step1Title": "1. Inquiry & Spec Matching",
    "flow.step1Desc": "Submit your target grade, volume, packaging, and Incoterm. We issue a formal commercial Proforma Quote within 24h.",
    "flow.step2Title": "2. Sample Dispatch via Courier",
    "flow.step2Desc": "Representative samples sent via DHL/FedEx with verified lot analysis for your laboratory evaluation.",
    "flow.step3Title": "3. Sales Contract & LC / Deposit",
    "flow.step3Desc": "Binding Sales Contract signed detailing moisture, purity, delivery schedule, and agreed payment terms.",
    "flow.step4Title": "4. Processing, Sorting & QC",
    "flow.step4Desc": "Direct sorting and final moisture testing in our facility. Pre-shipment batch analysis report generated.",
    "flow.step5Title": "5. Quarantine & Stuffing",
    "flow.step5Desc": "Official Indonesian Agricultural Quarantine inspection, phytosanitary certificate, and supervised stuffing.",
    "flow.step6Title": "6. Shipping & Document Delivery",
    "flow.step6Desc": "Original Bill of Lading, Certificate of Origin (COO), Phytosanitary, and Lab COA released digitally and via courier.",
    "flow.ctaTitle": "Ready to initiate your commodity sourcing inquiry?",
    "flow.ctaDesc": "Get a detailed Proforma quotation with specification certificate and logistics lead time within 24h.",
    "flow.ctaBtn": "Initiate Inquiry Step 1",

    // Catalog page
    "cat.kicker": "Commodity Catalog",
    "cat.title": "Export-Grade Commodities & Technical Specifications",
    "cat.desc": "Filter by commodity category or search by commercial name, botanical variety, or Harmonized System (HS) code.",
    "cat.filterAll": "All Commodities",
    "cat.filterSpices": "Spices & Botanicals",
    "cat.filterCoconut": "Coconut & Charcoal",
    "cat.filterCoffee": "Coffee & Cocoa",
    "cat.searchPlaceholder": "Search commodity or HS code...",
    "cat.showing": "Showing",
    "cat.commodities": "commodities",

    // Common Product Detail UI
    "detail.back": "← Back to Commodity Catalog",
    "detail.quickTitle": "Quick Commercial Snapshot",
    "detail.lblCapacity": "Monthly Capacity:",
    "detail.lblMoq": "Minimum Order (MOQ):",
    "detail.lblLead": "Production Lead Time:",
    "detail.lblPricing": "Pricing Model:",
    "detail.btnQuote": "Request Official Quotation",
    "detail.btnWa": "Inquire via WhatsApp",
    "detail.btnPrint": "Print / Save Spec Sheet (PDF)",
    "detail.b1Title": "01. General & Botanical Information",
    "detail.originRegions": "Origin Regions",
    "detail.harvestSeason": "Harvest Season",
    "detail.processMethod": "Processing Method",
    "detail.shelfLife": "Shelf Life & Storage",
    "detail.availCerts": "Available Certifications & Documents",
    "detail.b2Title": "02. Physical & Chemical Grade Parameters",
    "detail.thGrade": "Grade Specification",
    "detail.thMoisture": "Moisture Content",
    "detail.thSize": "Length / Dimensions",
    "detail.thParam": "Key Lab Parameter",
    "detail.thAppearance": "Appearance & Aroma",
    "detail.thApp": "Application",
    "detail.b3Title": "03. Supply Capacity, MOQ & Commercial Terms",
    "detail.monthlySupplyCap": "Monthly Supply Capacity",
    "detail.minOrderQty": "Minimum Order Quantity (MOQ)",
    "detail.prodLeadTime": "Production Lead Time",
    "detail.samplePolicy": "Sample Policy",
    "detail.pricingModel": "Pricing Model",
    "detail.b4Title": "04. Packaging & Container Stuffing Specs",
    "detail.packagingType": "Packaging Type",
    "detail.netWeightUnit": "Net Weight Unit",
    "detail.privateLabel": "Private Label (OEM)",
    "detail.c20Payload": "20ft FCL Container Payload",
    "detail.c40Payload": "40ft HC Container Payload",
    "detail.ctaTitle": "Request tailored export quote",
    "detail.ctaDesc": "Our export desk will prepare an official commercial Proforma invoice with current FOB/CIF rates.",
    "detail.ctaBtn": "Request Formal Quote",

    // Badges
    "badge.phyto": "Phytosanitary Certificate",
    "badge.coo": "Certificate of Origin (COO)",
    "badge.cooCharcoal": "Certificate of Origin (COO Form D/E/AK)",
    "badge.coa": "Independent Lab COA",
    "badge.coaVanilla": "Independent Lab COA (Vanillin & Moisture)",
    "badge.coaCloves": "Independent Lab COA (Eugenol & Moisture)",
    "badge.msds": "MSDS (Material Safety Data Sheet)",
    "badge.nondg": "SIRA / Non-DG Certificate (Carsurin / SGS)",
    "badge.ico": "ICO Certificate of Origin (International Coffee Org)",
    "badge.scaa": "SCAA Sensory Cupping Protocol Sheet",

    // Detail Table Headers & Custom Parameters
    "charcoal.thParam": "Fixed Carbon / Caloric",
    "charcoal.thAppearance": "Ash Character & Burn",
    "coffee.thSize": "Screen Size",
    "coffee.thParam": "Defect Count / Cupping",
    "coffee.thAppearance": "Cup Profile & Aroma",
    "cloves.thParam": "Eugenol Content",
    "cloves.thAppearance": "Headless / Foreign Matter",

    // Specific Table Row values
    "vanilla.gASize": "16 cm – 21 cm",
    "vanilla.gBSize": "13 cm – 16 cm",
    "vanilla.gCSize": "Under 13 cm",
    "vanilla.gAParam": "Vanillin > 2.0%",
    "vanilla.gBParam": "Vanillin 1.6% – 2.0%",
    "vanilla.gCParam": "Vanillin 1.4% – 1.6%",

    "charcoal.gAParam": "Carbon >80% · 7,400 kcal/kg",
    "charcoal.gBSize": "50 x 100 mm (Center Hole)",
    "charcoal.gBParam": "Carbon >75% · 7,100 kcal/kg",
    "charcoal.gCParam": "Carbon >80% · 7,300 kcal/kg",

    "coffee.gASize": "Screen 18/19 (7.0 mm)",
    "coffee.gAParam": "Max 11 defects · Score 84+",
    "coffee.gBSize": "Screen 16/18",
    "coffee.gBParam": "Clean cup · Low defect",
    "coffee.gCSize": "Screen 17/18",
    "coffee.gCParam": "Score 85+ Specialty",

    "cloves.gAParam": "Eugenol > 18.0%",
    "cloves.gBParam": "Eugenol > 16.5%",
    "cloves.gCParam": "High Oil Yield",

    // Catalog kickers & params
    "cat.kickerSpices": "Spices & Botanicals · Vanilla planifolia",
    "cat.kickerCharcoal": "Coconut & Charcoal · Cocos nucifera L.",
    "cat.kickerCoffee": "Coffee & Cocoa · Coffea arabica & robusta",
    "cat.kickerCloves": "Spices & Botanicals · Syzygium aromaticum",
    "cat.paramVanilla": "Vanillin > 2.0%",
    "cat.paramCharcoal": "Ash < 2.2% White",
    "cat.paramCoffee": "Cupping Score 84+",
    "cat.paramCloves": "Eugenol > 18.0%",

    // Vanilla
    "vanilla.title": "Indonesian Gourmet Planifolia Vanilla Beans",
    "vanilla.category": "Spices & Botanicals · Vanilla planifolia Andrews · HS 0905.10",
    "vanilla.desc": "Sourced directly through our partner smallholder farmer collectives in Alor and Sulawesi. Sun-cured through traditional slow sweating methods, our Planifolia vanilla beans deliver a rich, buttery, deep bourbon aromatic profile prized by global pastry chefs and extractors.",
    "vanilla.cap": "3.5 – 5.0 MT / Month",
    "vanilla.moq": "50 kg Air / 500 kg Sea LCL",
    "vanilla.lead": "7–14 business days",
    "vanilla.price": "Price On Request (FOB/CIF)",
    "vanilla.origin": "Alor (East Nusa Tenggara), Bali & North Sulawesi",
    "vanilla.harvest": "Peak: June – September (Cured supply year-round)",
    "vanilla.process": "Traditional sun-curing & slow sweat-box fermentation",
    "vanilla.shelf": "24 months stored in vacuum packs at 18-22°C",
    "vanilla.gA": "Grade A (Gourmet / Prime)",
    "vanilla.gADesc": "Dark black, oily sheen, balsamic",
    "vanilla.gAApp": "Whole pods, fine culinary, bakery",
    "vanilla.gB": "Grade B (Extraction Grade)",
    "vanilla.gBDesc": "Reddish brown, drier woody aroma",
    "vanilla.gBApp": "High-yield alcohol flavor extraction",
    "vanilla.gC": "Grade C (Shorts / Cuts)",
    "vanilla.gCDesc": "Fibrous dry brown",
    "vanilla.gCApp": "Cost-effective grinding powder",
    "vanilla.sample": "Free 100g sample pods. Buyer covers courier (DHL/FedEx).",
    "vanilla.pack": "Food-grade multi-layer vacuum pouches inside heavy corrugated master export cartons",
    "vanilla.packUnit": "1 kg or 5 kg pouch (20 kg net per master carton)",
    "vanilla.oem": "Available for branded retail pouches (OEM barcodes, custom packaging)",
    "vanilla.c20": "Approx. 5,000 kg (Palletized)",
    "vanilla.c40": "Approx. 10,000 kg",

    // Charcoal
    "charcoal.title": "Premium Coconut Shell Charcoal Briquettes",
    "charcoal.category": "Coconut & Charcoal · Cocos nucifera L. · HS 4402.90",
    "charcoal.desc": "Export-grade coconut charcoal briquettes engineered for Shisha/Hookah and BBQ. 100% natural coconut shell, fixed carbon >80%, white ash under 2.2%, burning time exceeding 2.5 hours without smoke or chemical odors.",
    "charcoal.cap": "100 – 150 MT / Month",
    "charcoal.moq": "1 x 20ft FCL (18 MT)",
    "charcoal.lead": "14–21 business days",
    "charcoal.price": "FOB Surabaya / Jakarta (USD/MT)",
    "charcoal.origin": "East Java & Central Java Processing Plants",
    "charcoal.harvest": "Continuous year-round manufacturing",
    "charcoal.process": "Controlled carbonization, micro-pulverized, 100% natural food-grade tapioca binder",
    "charcoal.shelf": "Indefinite when stored dry in covered warehouse",
    "charcoal.gA": "Cube 25x25x25mm (Shisha Premium)",
    "charcoal.gADesc": "Caloric value 7,200 - 7,500 kcal/kg, burn 2.5h+",
    "charcoal.gAApp": "Premium Shisha lounge, Hookah retail",
    "charcoal.gB": "Hexagonal BBQ 50x100mm",
    "charcoal.gBDesc": "Caloric value >7,000 kcal/kg, burn 4.0h+",
    "charcoal.gBApp": "Commercial BBQ, outdoor restaurant grills",
    "charcoal.gC": "Flat Cube 25x25x18mm",
    "charcoal.gCDesc": "High initial ignition, zero sparks, white ash",
    "charcoal.gCApp": "Fast heat hookah sessions",
    "charcoal.sample": "Free 1 kg sample box. Buyer covers express freight.",
    "charcoal.pack": "Inner plastic seal + 1 kg full color brand inner box + 10 kg master corrugated carton",
    "charcoal.packUnit": "1 kg inner box (10 boxes per 10 kg master carton)",
    "charcoal.oem": "Full OEM printing support for buyer brand box design",
    "charcoal.c20": "18.0 Metric Tons (Floor loaded, 1,800 cartons)",
    "charcoal.c40": "26.0 Metric Tons (Floor loaded, 2,600 cartons)",

    // Coffee
    "coffee.title": "Indonesian Specialty Green Coffee Beans",
    "coffee.category": "Coffee & Cocoa · Coffea arabica & robusta · HS 0901.11",
    "coffee.desc": "Sumatra Mandheling Arabica and Java Dampit Robusta unroasted green beans. Hand-sorted Grade 1 double-picked, screen size 18/19, controlled moisture 11-12%, SCAA cupping score consistently 84+.",
    "coffee.cap": "60 – 90 MT / Month",
    "coffee.moq": "1 x 20ft FCL (19.2 MT) / LCL Available",
    "coffee.lead": "10–14 business days",
    "coffee.price": "Price On Request (FOB/CIF)",
    "coffee.origin": "Sumatra (Aceh & Mandheling) and East Java (Dampit)",
    "coffee.harvest": "Sumatra: Oct – Feb; Java: May – Sep",
    "coffee.process": "Wet-hulled (Giling Basah) for Arabica; Dry natural for Robusta",
    "coffee.shelf": "18 months stored in GrainPro hermetic liners",
    "coffee.gA": "Sumatra Mandheling Grade 1 (Arabica)",
    "coffee.gADesc": "Dark herbal, earthy, full body, low acidity",
    "coffee.gAApp": "Specialty roasters, espresso blends",
    "coffee.gB": "Java Dampit Fine Robusta (Grade 1)",
    "coffee.gBDesc": "Rich chocolate, nutty, heavy crema",
    "coffee.gBApp": "Commercial espresso, cold brew bases",
    "coffee.gC": "Aceh Gayo Arabica Semi-Washed",
    "coffee.gCDesc": "Clean floral, brown sugar, balanced",
    "coffee.gCApp": "Single origin pour-over specialty",
    "coffee.sample": "Free 300g green sample. Buyer covers courier.",
    "coffee.pack": "60 kg new jute burlap bags with GrainPro hermetic inner liner",
    "coffee.packUnit": "60 kg net weight per bag",
    "coffee.oem": "Custom bag stencil with buyer import marks & lot code",
    "coffee.c20": "19.2 Metric Tons (320 bags of 60 kg)",
    "coffee.c40": "25.2 Metric Tons (420 bags of 60 kg)",

    // Cloves
    "cloves.title": "Indonesian Lalpari Grade Whole Cloves",
    "cloves.category": "Spices & Botanicals · Syzygium aromaticum · HS 0907.10",
    "cloves.desc": "Sun-dried whole Indonesian cloves harvested from Maluku (Spice Islands) and Sulawesi. Bright reddish brown Lalpari grade, eugenol oil content exceeding 18%, moisture below 12%, headless stems under 2%.",
    "cloves.cap": "25 – 40 MT / Month",
    "cloves.moq": "1 x 20ft FCL (10 MT) / 1 MT Sea LCL",
    "cloves.lead": "7–14 business days",
    "cloves.price": "Price On Request (FOB/CIF)",
    "cloves.origin": "Ambon/Seram (Maluku Islands) & North Sulawesi",
    "cloves.harvest": "Peak: August – November",
    "cloves.process": "Traditional sun-drying on clean woven tarpaulins, optical sorting",
    "cloves.shelf": "24 months in cool dry storage",
    "cloves.gA": "Lalpari Special Grade (Hand Picked)",
    "cloves.gADesc": "Bright reddish brown, oil >18%, headless <2%",
    "cloves.gAApp": "Culinary spice packing, pharma extraction",
    "cloves.gB": "Standard AB6 Export Grade",
    "cloves.gBDesc": "Brown, oil >16%, headless <4%",
    "cloves.gBApp": "Kretek cigarettes, oleoresin distillation",
    "cloves.gC": "Clove Stems / Extract Grade",
    "cloves.gCDesc": "Clean dried stems, high eugenol yield",
    "cloves.gCApp": "Essential oil extraction, fragrance",
    "cloves.sample": "Free 150g sample. Buyer covers courier.",
    "cloves.pack": "25 kg or 50 kg heavy PP woven bags with inner poly liner",
    "cloves.packUnit": "25 kg or 50 kg net per bag",
    "cloves.oem": "Neutral export bags or customized buyer stencils",
    "cloves.c20": "10.0 to 11.0 Metric Tons",
    "cloves.c40": "22.0 to 24.0 Metric Tons",

    // About
    "about.kicker": "About PT Anurika Nusantara Agro",
    "about.title": "Connecting Indonesian Smallholders to the Global Marketplace",
    "about.lead": "Established in Surabaya, Indonesia, we bridge the gap between conscientious local farming cooperatives and demanding overseas importers.",
    "about.storyTitle": "Ethical Sourcing with Rigorous QC",
    "about.storyP1": "Many foreign buyers struggle with unreliable intermediaries in Indonesia—facing inconsistent moisture, adulterated grades, or surprise shipping delays. We built our operation to eliminate that risk.",
    "about.storyP2": "By maintaining direct relationships with smallholder farmer collectives and running rigorous batch inspections, we ensure grade purity, legal export compliance, and dependable container fulfillment.",
    "about.facilityTitle": "Our Infrastructure & Quality Facilities",
    "about.facilityP": "Our export warehouse and processing facility is located in East Java, close to the Port of Tanjung Perak (IDTPE). Features dedicated drying tables, mechanical winnowers, vacuum packaging lines, and an on-site moisture testing station.",
    "about.facilityCaption": "Centralized QC & Export Warehouse · East Java Facility (Access to Tanjung Perak Port)",
    "about.legalTitle": "Official Corporate Legalities & Registrations",
    "about.legalDesc": "Transparent government registrations and licenses verifiable by your trade embassy or compliance department.",
    "about.legalNibAuth": "Ministry of Investment / BKPM RI (OSS RBA)",
    "about.legalNibName": "Nomor Induk Berusaha (NIB)",
    "about.legalNpwpAuth": "Directorate General of Taxes, Indonesia",
    "about.legalNpwpName": "Corporate Tax ID (NPWP)",
    "about.legalKemendagAuth": "Ministry of Trade, Republic of Indonesia",
    "about.legalKemendagName": "Registered Exporter License (Kemendag)",
    "about.legalKbliAuth": "Central Bureau of Statistics & OSS",
    "about.legalKbliName": "Standard Business Classification (KBLI)",
    "about.viewRecord": "View Official Verification Record →",
    "about.auditKicker": "Facility Audits Welcome",
    "about.auditTitle": "East Java Export Facility & Warehouse, Indonesia",
    "about.auditDesc": "We welcome foreign buyers, sourcing agents, and third-party inspectors (SGS, Intertek, Cotecna) for pre-shipment lot audits.",
    "about.auditBtn": "Schedule an Inspection",

    // Logistics
    "logistics.kicker": "Global Freight & Trade Readiness",
    "logistics.title": "Logistics, Loading Ports & Shipping Terms",
    "logistics.desc": "Clear Incoterms, container stuffing capacities, and standard export documentation to ensure frictionless customs clearance in your country.",
    "logistics.incotermsTitle": "Supported Incoterms (ICC 2020)",
    "logistics.fobTitle": "FOB (Free On Board)",
    "logistics.fobSub": "Port of Tanjung Perak (IDTPE) / Tanjung Priok (IDTPP)",
    "logistics.fobDesc": "We handle inland transport, export customs, and loading onto your nominated vessel. Risk passes to buyer once loaded.",
    "logistics.fobNote": "Cost & Risk: Seller clears export; buyer procures ocean vessel freight & marine insurance.",
    "logistics.cfrTitle": "CFR (Cost and Freight)",
    "logistics.cfrSub": "Any worldwide named destination container port",
    "logistics.cfrDesc": "We arrange and pay ocean freight to your named port of destination. Buyer assumes risk from loading port and procures marine cargo insurance.",
    "logistics.cfrNote": "Cost & Risk: Seller pays ocean shipping freight; buyer procures destination clearance.",
    "logistics.cifTitle": "CIF (Cost, Insurance & Freight)",
    "logistics.cifSub": "Any worldwide named destination container port",
    "logistics.cifDesc": "We cover freight plus comprehensive marine cargo insurance policy directly to your destination seaport.",
    "logistics.cifNote": "Cost & Risk: Seller pays ocean freight and marine cargo insurance policy (Institute Clauses A).",
    "logistics.portsTitle": "Primary Indonesian Loading Seaports",
    "logistics.portsDesc": "Strategic deepwater ports offering direct mother-vessel and feeder connections to major global shipping corridors.",
    "logistics.thPortName": "Seaport Name",
    "logistics.thLocation": "Location",
    "logistics.thLocode": "UN/LOCODE",
    "logistics.thHaul": "Domestic Haul Lead Time",
    "logistics.port1Name": "Port of Tanjung Perak",
    "logistics.port1Loc": "Surabaya, East Java",
    "logistics.port1Haul": "1–2 days domestic haul",
    "logistics.port2Name": "Port of Tanjung Priok",
    "logistics.port2Loc": "Jakarta",
    "logistics.port2Haul": "2–3 days domestic haul",
    "logistics.port3Name": "Port of Belawan",
    "logistics.port3Loc": "Medan, North Sumatra",
    "logistics.port3Haul": "2–3 days domestic haul",
    "logistics.docsTitle": "Mandatory Export Documentation Suite",
    "logistics.docsDesc": "All paperwork is handled by our licensed export customs team.",
    "logistics.doc1Title": "Ocean Bill of Lading (B/L)",
    "logistics.doc1Desc": "Clean on-board ocean bill of lading (original 3/3 set or Telex Release upon buyer request).",
    "logistics.doc2Title": "Commercial Invoice & Packing List",
    "logistics.doc2Desc": "Signed with corporate stamp detailing gross/net weights, container numbers, and seal IDs.",
    "logistics.doc3Title": "Certificate of Origin (COO / Form D, E, AK)",
    "logistics.doc3Desc": "Issued by Indonesian Ministry of Trade for preferential tariff access in your country.",
    "logistics.doc4Title": "Phytosanitary & Fumigation Certificates",
    "logistics.doc4Desc": "Official agricultural quarantine clearance verifying freedom from pests plus ISPM 15 fumigation.",
    "logistics.doc5Title": "Independent Lab Analysis (COA)",
    "logistics.doc5Desc": "Third-party surveyor testing (SGS / Carsurin / Sucofindo) for moisture, purity, and active compounds.",
    "logistics.doc6Title": "SHT / MSDS (for Coconut Charcoal)",
    "logistics.doc6Desc": "Self-Heating Test certificate required by shipping lines proving safe non-DG carriage.",
    "logistics.ctaTitle": "Need freight rates to your destination port?",
    "logistics.ctaDesc": "We partner with major shipping lines to secure competitive container shipping lines.",
    "logistics.ctaBtn": "Request Freight & CIF Quote",

    // Contact
    "contact.kicker": "Request for Quotation",
    "contact.title": "Get in Touch with Our Global Export Desk",
    "contact.desc": "Fill in the RFQ form below for a comprehensive commercial proposal, or reach out directly to our export managers via WhatsApp and business email.",
    "contact.formTitle": "Official Request for Quotation (RFQ)",
    "contact.formDesc": "Zero obligation. We respond with formal FOB/CIF price indications within 24 business hours.",
    "contact.name": "Full Name *",
    "contact.company": "Company Name *",
    "contact.email": "Business Email *",
    "contact.country": "Buyer Country / Region *",
    "contact.product": "Interested Commodity *",
    "contact.volume": "Estimated Order Volume *",
    "contact.port": "Destination Seaport (Optional)",
    "contact.incoterm": "Preferred Incoterm",
    "contact.notes": "Additional Requirements / Specifications",
    "contact.submitMail": "Send RFQ via Business Email",
    "contact.submitWa": "Send RFQ via WhatsApp",
    "contact.submitCopy": "Copy Message to Clipboard",
    "contact.deskTitle": "Direct Export Inquiries",
    "contact.emailLabel": "Official Export Email",
    "contact.waLabel": "WhatsApp Export Desk (International)",
    "contact.hoursTitle": "Business Hours & Response Time",
    "contact.hoursDesc": "Monday – Saturday: 08:00 – 17:00 WIB (UTC+7). Response within 24 business hours.",
    "contact.officeTitle": "Corporate Office & Warehouse",
    "contact.officeWhLabel": "Export Processing & QC Warehouse:",
    "contact.officeWhText": "East Java Processing Hub, Sidoarjo & Surabaya Area, Indonesia",
    "contact.officeGps": "Direct Highway Access · 35 km to Tanjung Perak Seaport (IDTPE)",
    "contact.secTitle": "Important Security Notice",
    "contact.secDesc": "PT Anurika Nusantara Agro only conducts commercial transactions via our verified domain (@anurikanusantara.com) and corporate bank accounts under PT ANURIKA NUSANTARA AGRO. We never use personal bank accounts.",
    "contact.toastCopied": "✓ Inquiry message copied to clipboard!",

    // Footer
    "footer.desc": "PT Anurika Nusantara Agro is a registered Indonesian commodity exporter committed to supply chain transparency, quality testing, and dependable fulfillment.",
    "footer.quick": "Quick Navigation",
    "footer.commodities": "Export Commodities",
    "footer.contact": "Export Desk",
    "footer.securityNotice": "Security Advisory: PT Anurika Nusantara Agro only conducts transactions via our verified corporate domain (@anurikanusantara.com) and corporate bank accounts under PT ANURIKA NUSANTARA AGRO.",
    "footer.copy": "© 2026 PT Anurika Nusantara Agro. All rights reserved. NIB 1289000438192.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Trade",
    "footer.waWidget": "WhatsApp Export Desk",

    // Modals
    "modal.certTitle": "Official Verification Record",
    "modal.issuer": "Issuing Authority:",
    "modal.regNo": "Document Registration No:",
    "modal.validity": "Validity Status:",
  },
  id: {
    // Nav (Bersih, ringkas, tanpa redundansi)
    "nav.brand": "Anurika Nusantara Agro",
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.products": "Produk",
    "nav.logistics": "Logistik",
    "nav.quoteBtn": "Minta Penawaran",
    "nav.langBtn": "EN",

    // Hero (Bersih & realistis untuk UMK Baru)
    "hero.badge": "Eksportir Pertanian Indonesia · UMK Terdaftar · NIB 1289000438192",
    "hero.title": "Komoditas Pertanian Unggulan Indonesia Langsung untuk Buyer Global",
    "hero.desc": "Biji vanili gourmet, briket arang tempurung kelapa, biji kopi hijau spesialti, dan cengkeh asli Maluku langsung dari kelompok tani mitra. Kontrol kadar air ketat, legalitas sah OSS, dan siap uji laboratorium per pengiriman.",
    "hero.ctaQuote": "Minta Penawaran Resmi",
    "hero.ctaProducts": "Lihat Spesifikasi Produk",
    "hero.statCapacity": "5 – 15 Ton / Bulan",
    "hero.statCapacityLabel": "Kapasitas Pasokan Riil UMK",
    "hero.statLegal": "NIB Resmi OSS",
    "hero.statLegalLabel": "Legalitas Sah Kementerian",
    "hero.statQc": "100% Sortasi Pilihan",
    "hero.statQcLabel": "Pemeriksaan Mutu Tiap Batch",
    "hero.statResponse": "Respon 1x24 Jam",
    "hero.statResponseLabel": "Penawaran Proforma Cepat",

    // Featured section
    "feat.kicker": "01. Komoditas Ekspor Unggulan",
    "feat.title": "Komoditas Pilihan Indonesia dengan Parameter Mutu Teruji",
    "feat.desc": "Tabel spesifikasi fisik transparan, kontrol kadar air sesuai standar ekspor, dan kalkulasi kontainer yang memudahkan pembeli luar negeri.",
    "feat.viewSpecs": "Lihat Spesifikasi",
    "feat.quoteBtn": "Minta Penawaran",
    "feat.viewAll": "Lihat Semua Komoditas Ekspor & Tabel Grade",

    // Workflow
    "flow.kicker": "02. Alur Ekspor Transparan",
    "flow.title": "Dari Kebun Petani hingga Pelabuhan Tujuan dalam 6 Tahap",
    "flow.desc": "Tahapan jelas dan teratur, menjamin ketepatan mutu, kepastian jadwal, dan kelengkapan dokumen kepabeanan.",
    "flow.step1Title": "1. Permintaan & Penyesuaian Spesifikasi",
    "flow.step1Desc": "Kirimkan grade yang dicari, estimasi volume, kemasan, dan Incoterm. Kami terbitkan penawaran harga resmi dalam 24 jam kerja.",
    "flow.step2Title": "2. Pengiriman Sampel via Kurir Kilat",
    "flow.step2Desc": "Sampel lot representatif dikirim via DHL/FedEx dilengkapi sertifikat analisis uji lab untuk evaluasi pihak pembeli.",
    "flow.step3Title": "3. Kontrak Dagang (Sales Contract) & Deposit",
    "flow.step3Desc": "Penandatanganan kontrak mengikat yang merinci kadar air, kemurnian, batas toleransi, dan kesepakatan pembayaran.",
    "flow.step4Title": "4. Pengolahan, Sortasi & Kontrol Kualitas",
    "flow.step4Desc": "Sortasi manual dan mekanis di fasilitas kami. Laporan uji mutu pra-pengapalan diterbitkan sebelum stuffing kontainer.",
    "flow.step5Title": "5. Karantina Pertanian & Pemuatan",
    "flow.step5Desc": "Pemeriksaan resmi Badan Karantina Indonesia, sertifikasi fitusanitari, fumigasi kontainer, dan pengawasan pemuatan di pelabuhan.",
    "flow.step6Title": "6. Pengapalan & Penyerahan Dokumen",
    "flow.step6Desc": "Bill of Lading asli, Surat Keterangan Asal (COO), Fitusanitari, dan COA diserahkan via kurir dan dokumen elektronik.",
    "flow.ctaTitle": "Siap memulai permintaan penawaran komoditas ekspor?",
    "flow.ctaDesc": "Dapatkan penawaran Proforma lengkap dengan spesifikasi teknis dan perkiraan jadwal kirim dalam 24 jam.",
    "flow.ctaBtn": "Mulai Permintaan Tahap 1",

    // Catalog page
    "cat.kicker": "Katalog Komoditas",
    "cat.title": "Katalog Komoditas Ekspor & Spesifikasi Mutu",
    "cat.desc": "Saring berdasarkan kategori komoditas atau cari berdasarkan nama dagang, nama botani, maupun kode HS ekspor.",
    "cat.filterAll": "Semua Komoditas",
    "cat.filterSpices": "Rempah & Botani",
    "cat.filterCoconut": "Kelapa & Arang",
    "cat.filterCoffee": "Kopi & Kakao",
    "cat.searchPlaceholder": "Cari nama produk atau kode HS...",
    "cat.showing": "Menampilkan",
    "cat.commodities": "komoditas",

    // Common Product Detail UI
    "detail.back": "← Kembali ke Katalog Komoditas",
    "detail.quickTitle": "Ringkasan Komersial Cepat",
    "detail.lblCapacity": "Kapasitas Pasokan Bulanan:",
    "detail.lblMoq": "Pesanan Minimum (MOQ):",
    "detail.lblLead": "Waktu Pengerjaan Produksi:",
    "detail.lblPricing": "Model Penetapan Harga:",
    "detail.btnQuote": "Minta Penawaran Resmi",
    "detail.btnWa": "Tanya via WhatsApp",
    "detail.btnPrint": "Cetak / Simpan Lembar Spek (PDF)",
    "detail.b1Title": "01. Informasi Umum & Asal Usul Botani",
    "detail.originRegions": "Wilayah Asal Komoditas",
    "detail.harvestSeason": "Musim Panen",
    "detail.processMethod": "Metode Pengolahan",
    "detail.shelfLife": "Masa Simpan & Penyimpanan",
    "detail.availCerts": "Dokumen & Sertifikat Tersedia",
    "detail.b2Title": "02. Parameter Mutu Fisik & Hasil Uji Lab",
    "detail.thGrade": "Spesifikasi Grade",
    "detail.thMoisture": "Kadar Air",
    "detail.thSize": "Panjang / Ukuran Dimensi",
    "detail.thParam": "Parameter Kunci Uji Lab",
    "detail.thAppearance": "Karakter Fisik & Aroma",
    "detail.thApp": "Aplikasi Industri",
    "detail.b3Title": "03. Kapasitas Pasokan, MOQ & Ketentuan Komersial",
    "detail.monthlySupplyCap": "Kapasitas Pasokan Bulanan",
    "detail.minOrderQty": "Jumlah Pesanan Minimum (MOQ)",
    "detail.prodLeadTime": "Waktu Pengerjaan Produksi",
    "detail.samplePolicy": "Kebijakan Sampel Uji",
    "detail.pricingModel": "Model Penetapan Harga",
    "detail.b4Title": "04. Spesifikasi Kemasan Ekspor & Kontainer",
    "detail.packagingType": "Jenis Kemasan Ekspor",
    "detail.netWeightUnit": "Satuan Berat Bersih",
    "detail.privateLabel": "Layanan Merek Pembeli (OEM)",
    "detail.c20Payload": "Muatan Kontainer 20ft FCL",
    "detail.c40Payload": "Muatan Kontainer 40ft HC",
    "detail.ctaTitle": "Minta penawaran ekspor resmi untuk produk ini",
    "detail.ctaDesc": "Meja ekspor kami siap menyusun Proforma Invoice resmi lengkap dengan perhitungan harga FOB atau CIF terbaru.",
    "detail.ctaBtn": "Minta Penawaran Resmi",

    // Badges
    "badge.phyto": "Sertifikat Fitosanitari",
    "badge.coo": "Surat Keterangan Asal (COO / SKA)",
    "badge.cooCharcoal": "Surat Keterangan Asal (COO Form D/E/AK)",
    "badge.coa": "Laporan Uji Lab Independen (COA)",
    "badge.coaVanilla": "Laporan Uji Lab Independen (Kadar Vanilin & Air)",
    "badge.coaCloves": "Laporan Uji Lab Independen (Kadar Eugenol & Air)",
    "badge.msds": "MSDS (Lembar Data Keselamatan Bahan)",
    "badge.nondg": "Sertifikat Non-DG / SIRA (Bukan Muatan Berbahaya)",
    "badge.ico": "Sertifikat Asal Kopi ICO (Organisasi Kopi Internasional)",
    "badge.scaa": "Lembar Protokol Uji Sensori Cupping SCAA",

    // Detail Table Headers & Custom Parameters
    "charcoal.thParam": "Karbon Terikat / Nilai Kalor",
    "charcoal.thAppearance": "Karakter Abu & Daya Tahan Nyala",
    "coffee.thSize": "Ukuran Ayakan (Screen Size)",
    "coffee.thParam": "Toleransi Defect / Skor Cupping",
    "coffee.thAppearance": "Profil Cita Rasa & Aroma Seduh",
    "cloves.thParam": "Kandungan Minyak Eugenol",
    "cloves.thAppearance": "Gagang Tanpa Kepala / Benda Asing",

    // Specific Table Row values
    "vanilla.gASize": "16 cm – 21 cm",
    "vanilla.gBSize": "13 cm – 16 cm",
    "vanilla.gCSize": "Di bawah 13 cm",
    "vanilla.gAParam": "Kadar Vanilin > 2,0%",
    "vanilla.gBParam": "Kadar Vanilin 1,6% – 2,0%",
    "vanilla.gCParam": "Kadar Vanilin 1,4% – 1,6%",

    "charcoal.gAParam": "Karbon >80% · 7.400 kkal/kg",
    "charcoal.gBSize": "50 x 100 mm (Lubang Tengah)",
    "charcoal.gBParam": "Karbon >75% · 7.100 kkal/kg",
    "charcoal.gCParam": "Karbon >80% · 7.300 kkal/kg",

    "coffee.gASize": "Screen 18/19 (7,0 mm)",
    "coffee.gAParam": "Maks. 11 defect · Skor 84+",
    "coffee.gBSize": "Screen 16/18",
    "coffee.gBParam": "Clean cup · Defect rendah",
    "coffee.gCSize": "Screen 17/18",
    "coffee.gCParam": "Skor 85+ Spesialti",

    "cloves.gAParam": "Kadar Eugenol > 18,0%",
    "cloves.gBParam": "Kadar Eugenol > 16,5%",
    "cloves.gCParam": "Kandungan Minyak Ekstraksi Tinggi",

    // Catalog kickers & params
    "cat.kickerSpices": "Rempah & Botani · Vanilla planifolia",
    "cat.kickerCharcoal": "Kelapa & Arang · Cocos nucifera L.",
    "cat.kickerCoffee": "Kopi & Kakao · Coffea arabica & robusta",
    "cat.kickerCloves": "Rempah & Botani · Syzygium aromaticum",
    "cat.paramVanilla": "Kadar Vanilin > 2,0%",
    "cat.paramCharcoal": "Kadar Abu < 2,2% Putih",
    "cat.paramCoffee": "Skor Cupping 84+",
    "cat.paramCloves": "Kadar Eugenol > 18,0%",

    // Vanilla
    "vanilla.title": "Biji Vanili Planifolia Gourmet Indonesia",
    "vanilla.category": "Rempah & Botani · Vanilla planifolia Andrews · HS 0905.10",
    "vanilla.desc": "Bersumber langsung dari kelompok tani mitra di Alor dan Sulawesi. Diproses dengan penjemuran bertahap dan pemeraman sweat-box tradisional, menghasilkan biji vanili hitam lembap berminyak dengan aroma khas bourbon pekat dan kadar vanilin melebihi 2,0%.",
    "vanilla.cap": "3,5 – 5,0 Ton / Bulan",
    "vanilla.moq": "50 kg Kargo Udara / 500 kg Laut LCL",
    "vanilla.lead": "7–14 hari kerja",
    "vanilla.price": "Harga Berdasarkan Permintaan (FOB/CIF)",
    "vanilla.origin": "Alor (Nusa Tenggara Timur), Bali & Sulawesi Utara",
    "vanilla.harvest": "Puncak Panen: Juni – September (Pasokan kering tersedia sepanjang tahun)",
    "vanilla.process": "Penjemuran sinar matahari & pemeraman peti kering tradisional",
    "vanilla.shelf": "24 bulan dalam kemasan vakum bersegel pada suhu 18-22°C",
    "vanilla.gA": "Grade A (Gourmet / Prime)",
    "vanilla.gADesc": "Hitam pekat, berminyak mengkilap, aroma balsamik",
    "vanilla.gAApp": "Batang utuh, industri kuliner hotel & pastry premium",
    "vanilla.gB": "Grade B (Grade Ekstraksi)",
    "vanilla.gBDesc": "Cokelat kemerahan, aroma kayu harum",
    "vanilla.gBApp": "Ekstraksi perisa makanan cair & farmasi",
    "vanilla.gC": "Grade C (Potongan / Pendek)",
    "vanilla.gCDesc": "Cokelat berserat kering",
    "vanilla.gCApp": "Bubuk vanili giling & bumbu makanan hemat biaya",
    "vanilla.sample": "Sampel gratis 100g. Ongkir kurir kilat (DHL/FedEx) ditanggung pembeli.",
    "vanilla.pack": "Kantong vakum multi-lapis food-grade dalam karton master ekspor gelombang tebal",
    "vanilla.packUnit": "Kemasan 1 kg atau 5 kg vakum (20 kg neto per karton master)",
    "vanilla.oem": "Tersedia layanan kemasan ritel siap jual dengan merek dan barcode pembeli",
    "vanilla.c20": "Sekitar 5.000 kg (Menggunakan palet kayu standar ekspor)",
    "vanilla.c40": "Sekitar 10.000 kg",

    // Charcoal
    "charcoal.title": "Briket Arang Tempurung Kelapa Premium",
    "charcoal.category": "Kelapa & Arang · Cocos nucifera L. · HS 4402.90",
    "charcoal.desc": "Briket arang tempurung kelapa kualitas ekspor untuk Shisha/Hookah dan Barbeque. 100% batok kelapa alami, karbon terikat >80%, kadar abu putih di bawah 2,2%, dan daya tahan bakar lebih dari 2,5 jam tanpa asap maupun bau kimia.",
    "charcoal.cap": "100 – 150 Ton / Bulan",
    "charcoal.moq": "1 x 20ft FCL (18 Ton)",
    "charcoal.lead": "14–21 hari kerja",
    "charcoal.price": "FOB Surabaya / Jakarta (USD/Ton)",
    "charcoal.origin": "Fasilitas Pengolahan Jawa Timur & Jawa Tengah",
    "charcoal.harvest": "Produksi berkesinambungan sepanjang tahun",
    "charcoal.process": "Karbonisasi terawasi, penggilingan halus, 100% perekat alami tapioka food-grade",
    "charcoal.shelf": "Tidak terbatas selama disimpan di tempat kering dan beratap",
    "charcoal.gA": "Kubus 25x25x25mm (Shisha Premium)",
    "charcoal.gADesc": "Nilai kalor 7.200 - 7.500 kkal/kg, nyala 2,5 jam+",
    "charcoal.gAApp": "Lounge Shisha premium, pasar ritel Hookah internasional",
    "charcoal.gB": "Heksagonal BBQ 50x100mm",
    "charcoal.gBDesc": "Nilai kalor >7.000 kkal/kg, nyala 4,0 jam+",
    "charcoal.gBApp": "Restoran pemanggang komersial, BBQ luar ruang",
    "charcoal.gC": "Kubus Pipih 25x25x18mm",
    "charcoal.gCDesc": "Pengapian cepat, tanpa letupan percikan api, abu putih tipis",
    "charcoal.gCApp": "Sesi hisap cepat / burner portabel",
    "charcoal.sample": "Sampel gratis kotak 1 kg. Ongkos kurir ditanggung pembeli.",
    "charcoal.pack": "Plastik dalam bersegel + kotak warna inner 1 kg + kardus master ekspor 10 kg",
    "charcoal.packUnit": "Kotak inner 1 kg (10 kotak per master karton 10 kg)",
    "charcoal.oem": "Dukungan penuh percetakan merek & desain kemasan pesanan pembeli",
    "charcoal.c20": "18,0 Metrik Ton (Pemuatan lantai kontainer, 1.800 karton)",
    "charcoal.c40": "26,0 Metrik Ton (Pemuatan lantai kontainer, 2.600 karton)",

    // Coffee
    "coffee.title": "Biji Kopi Hijau Mentah Spesialti Indonesia",
    "coffee.category": "Kopi & Kakao · Coffea arabica & robusta · HS 0901.11",
    "coffee.desc": "Biji kopi mentah pilihan Sumatra Mandheling Arabica dan Java Dampit Robusta. Sortasi tangan Grade 1 double-picked, ukuran saringan screen 18/19, kadar air terkontrol 11-12%, skor cupping SCAA konsisten 84+.",
    "coffee.cap": "60 – 90 Ton / Bulan",
    "coffee.moq": "1 x 20ft FCL (19,2 Ton) / LCL Tersedia",
    "coffee.lead": "10–14 hari kerja",
    "coffee.price": "Harga Berdasarkan Permintaan (FOB/CIF)",
    "coffee.origin": "Sumatra (Aceh & Mandheling) dan Jawa Timur (Dampit)",
    "coffee.harvest": "Sumatra: Okt – Feb; Jawa: Mei – Sep",
    "coffee.process": "Giling Basah (Wet-Hulled) untuk Arabica; Natural kering untuk Robusta",
    "coffee.shelf": "18 bulan dalam kantong kedap udara GrainPro hermetik",
    "coffee.gA": "Sumatra Mandheling Grade 1 (Arabica)",
    "coffee.gADesc": "Aroma rempah herbal, earthy manis, bodi tebal, asam rendah",
    "coffee.gAApp": "Roastery spesialti, campuran biji espresso premium",
    "coffee.gB": "Java Dampit Fine Robusta (Grade 1)",
    "coffee.gBDesc": "Cokelat pekat mantap, aroma kacang, krema tebal",
    "coffee.gBApp": "Espresso komersial, bahan dasar cold brew & kafe",
    "coffee.gC": "Aceh Gayo Arabica Semi-Washed",
    "coffee.gCDesc": "Aroma floral bersih, gula palem, rasa seimbang",
    "coffee.gCApp": "Kopi seduh manual single-origin kafe spesialti",
    "coffee.sample": "Sampel gratis 300g biji mentah. Ongkir kurir ditanggung pembeli.",
    "coffee.pack": "Karung goni baru 60 kg berlapis kantong kedap udara GrainPro di bagian dalam",
    "coffee.packUnit": "60 kg neto per karung goni ekspor",
    "coffee.oem": "Stensil sablon karung dengan tanda impor & kode lot pembeli",
    "coffee.c20": "19,2 Metrik Ton (320 karung goni @ 60 kg)",
    "coffee.c40": "25,2 Metrik Ton (420 karung goni @ 60 kg)",

    // Cloves
    "cloves.title": "Cengkeh Kering Utuh Mutu Lalpari Asli Indonesia",
    "cloves.category": "Rempah & Botani · Syzygium aromaticum · HS 0907.10",
    "cloves.desc": "Cengkeh kering utuh asli dipanen dari kepulauan rempah Maluku dan Sulawesi. Mutu Lalpari berwarna cokelat kemerahan cerah, kandungan minyak atsiri eugenol di atas 18%, kadar air di bawah 12%, gagang tanpa kepala di bawah 2%.",
    "cloves.cap": "25 – 40 Ton / Bulan",
    "cloves.moq": "1 x 20ft FCL (10 Ton) / 1 Ton Laut LCL",
    "cloves.lead": "7–14 hari kerja",
    "cloves.price": "Harga Berdasarkan Permintaan (FOB/CIF)",
    "cloves.origin": "Ambon/Seram (Kepulauan Maluku) & Sulawesi Utara",
    "cloves.harvest": "Puncak Panen: Agustus – November",
    "cloves.process": "Penjemuran sinar matahari di atas terpal bersih, sortasi optik & manual",
    "cloves.shelf": "24 bulan di gudang kering sejuk",
    "cloves.gA": "Grade Khusus Lalpari (Sortasi Tangan)",
    "cloves.gADesc": "Cokelat kemerahan cerah, minyak >18%, tanpa kepala <2%",
    "cloves.gAApp": "Pengemasan bumbu dapur premium, ekstraksi farmasi",
    "cloves.gB": "Grade Ekspor Standar AB6",
    "cloves.gBDesc": "Cokelat matang, minyak >16%, tanpa kepala <4%",
    "cloves.gBApp": "Industri kretek, distilasi oleoresin rempah",
    "cloves.gC": "Gagang Cengkeh (Grade Ekstraksi)",
    "cloves.gCDesc": "Tangkai kering bersih, hasil eugenol tinggi",
    "cloves.gCApp": "Penyulingan minyak atsiri, wewangian aromatik",
    "cloves.sample": "Sampel gratis 150g. Ongkos kurir ditanggung pembeli.",
    "cloves.pack": "Karung anyaman PP kuat 25 kg atau 50 kg dengan lapisan plastik dalam polietilena",
    "cloves.packUnit": "25 kg atau 50 kg neto per karung",
    "cloves.oem": "Karung ekspor polos netral atau stensil khusus pembeli",
    "cloves.c20": "10,0 hingga 11,0 Metrik Ton",
    "cloves.c40": "22,0 hingga 24,0 Metrik Ton",

    // About
    "about.kicker": "Tentang PT Anurika Nusantara Agro",
    "about.title": "Menghubungkan Petani Indonesia ke Pasar B2B Internasional",
    "about.lead": "Didirikan di Surabaya, Indonesia, kami menjembatani kelompok tani komoditas lokal dan pembeli luar negeri yang membutuhkan kepastian mutu.",
    "about.storyTitle": "Kemitraan Petani dengan Kontrol Kualitas Ketat",
    "about.storyP1": "Banyak buyer luar negeri khawatir berurusan dengan perantara yang tidak jelas legalitasnya di Indonesia—kadar air tidak konsisten, grade dicampur, atau dokumen tertahan di bea cukai. Kami beroperasi untuk memberikan kepastian dan keamanan transaksi.",
    "about.storyP2": "Melalui kemitraan erat bersama kelompok tani dan pemeriksaan teliti sebelum pengiriman, kami menjaga kemurnian grade, kepatuhan izin ekspor resmi, dan ketepatan pasokan kontainer.",
    "about.facilityTitle": "Fasilitas & Gudang Terpadu Kami",
    "about.facilityP": "Gudang ekspor kami berlokasi di Jawa Timur, dengan akses mudah ke Pelabuhan Tanjung Perak Surabaya (IDTPE). Dilengkapi lantai penjemuran bersih, mesin pengayak getar, ruang pengemasan vakum, dan alat ukur kadar air terkalibrasi.",
    "about.facilityCaption": "Gudang Ekspor & Kontrol Mutu Terpadu · Fasilitas Jawa Timur (Akses ke Pelabuhan Tanjung Perak)",
    "about.legalTitle": "Legalitas Usaha & Izin Resmi Pemerintah",
    "about.legalDesc": "Terdaftar resmi pada sistem OSS RBA Kementerian Investasi/BKPM dan Kementerian Perdagangan RI yang dapat diverifikasi kapan saja.",
    "about.legalNibAuth": "Kementerian Investasi / BKPM RI (OSS RBA)",
    "about.legalNibName": "Nomor Induk Berusaha (NIB)",
    "about.legalNpwpAuth": "Direktorat Jenderal Pajak, Kementerian Keuangan RI",
    "about.legalNpwpName": "Nomor Pokok Wajib Pajak (NPWP)",
    "about.legalKemendagAuth": "Kementerian Perdagangan Republik Indonesia",
    "about.legalKemendagName": "Izin Tanda Daftar Eksportir (Kemendag)",
    "about.legalKbliAuth": "Badan Pusat Statistik & Lembaga OSS",
    "about.legalKbliName": "Klasifikasi Baku Lapangan Usaha (KBLI)",
    "about.viewRecord": "Lihat Catatan Verifikasi Resmi →",
    "about.auditKicker": "Terbuka untuk Audit Fasilitas",
    "about.auditTitle": "Gudang & Fasilitas Pengolahan Ekspor Jawa Timur, Indonesia",
    "about.auditDesc": "Kami menyambut kedatangan buyer luar negeri, sourcing agent, dan inspektur independen (SGS, Intertek, Cotecna) untuk audit mutu pra-pengapalan.",
    "about.auditBtn": "Jadwalkan Kunjungan Audit",

    // Logistics
    "logistics.kicker": "Kesiapan Logistik & Ekspor Global",
    "logistics.title": "Logistik, Pelabuhan Muat & Ketentuan Pengapalan",
    "logistics.desc": "Penjelasan Incoterms, daya tampung kontainer, dan kelengkapan dokumen resmi untuk kelancaran bea cukai negara Anda.",
    "logistics.incotermsTitle": "Pilihan Incoterms yang Dilayani (ICC 2020)",
    "logistics.fobTitle": "FOB (Free On Board)",
    "logistics.fobSub": "Pelabuhan Tanjung Perak (IDTPE) / Tanjung Priok (IDTPP)",
    "logistics.fobDesc": "Kami mengurus transportasi darat, izin ekspor, karantina, dan pemuatan ke atas kapal di Pelabuhan Tanjung Perak atau Tanjung Priok. Risiko beralih ke pembeli begitu barang berada di atas kapal.",
    "logistics.fobNote": "Biaya & Risiko: Penjual mengurus izin ekspor & muat kapal; pembeli memesan kargo kapal laut & asuransi.",
    "logistics.cfrTitle": "CFR (Cost and Freight)",
    "logistics.cfrSub": "Pelabuhan kontainer tujuan internasional mana pun",
    "logistics.cfrDesc": "Kami memesan dan membayar ongkos kapal kargo laut hingga pelabuhan tujuan pembeli. Risiko beralih di pelabuhan muat dan pembeli mengurus asuransi laut.",
    "logistics.cfrNote": "Biaya & Risiko: Penjual membayar ongkos kapal kargo laut; pembeli mengurus bea cukai negara tujuan.",
    "logistics.cifTitle": "CIF (Cost, Insurance & Freight)",
    "logistics.cifSub": "Pelabuhan kontainer tujuan internasional mana pun",
    "logistics.cifDesc": "Kami menanggung ongkos kapal laut ditambah polis asuransi kargo laut komprehensif hingga pelabuhan tujuan pembeli.",
    "logistics.cifNote": "Biaya & Risiko: Penjual membayar ongkos kapal laut dan polis asuransi kargo laut komprehensif (Institute Clauses A).",
    "logistics.portsTitle": "Pelabuhan Muat Utama Indonesia",
    "logistics.portsDesc": "Pelabuhan laut dalam strategis dengan jalur langsung kapal induk dan kapal pengumpan ke koridor pelayaran global.",
    "logistics.thPortName": "Nama Pelabuhan",
    "logistics.thLocation": "Lokasi",
    "logistics.thLocode": "Kode UN/LOCODE",
    "logistics.thHaul": "Waktu Angkut Domestik",
    "logistics.port1Name": "Pelabuhan Tanjung Perak",
    "logistics.port1Loc": "Surabaya, Jawa Timur",
    "logistics.port1Haul": "1–2 hari angkut darat",
    "logistics.port2Name": "Pelabuhan Tanjung Priok",
    "logistics.port2Loc": "Jakarta",
    "logistics.port2Haul": "2–3 hari angkut darat",
    "logistics.port3Name": "Pelabuhan Belawan",
    "logistics.port3Loc": "Medan, Sumatera Utara",
    "logistics.port3Haul": "2–3 hari angkut darat",
    "logistics.docsTitle": "Paket Dokumen Wajib Ekspor",
    "logistics.docsDesc": "Semua dokumen diproses langsung oleh tim kepabeanan ekspor berizin resmi kami.",
    "logistics.doc1Title": "Konosemen Laut (Bill of Lading - B/L)",
    "logistics.doc1Desc": "Clean on-board ocean bill of lading (set asli 3/3 atau Telex Release sesuai permintaan pembeli).",
    "logistics.doc2Title": "Faktur Komersial & Daftar Kemasan",
    "logistics.doc2Desc": "Ditandatangani dan dicap resmi korporat, memuat berat kotor/bersih, nomor kontainer, dan nomor segel.",
    "logistics.doc3Title": "Surat Keterangan Asal (COO / Form D, E, AK)",
    "logistics.doc3Desc": "Diterbitkan Kementerian Perdagangan RI untuk fasilitas tarif preferensi bea masuk di negara Anda.",
    "logistics.doc4Title": "Sertifikat Fitosanitari & Fumigasi",
    "logistics.doc4Desc": "Keterangan karantina pertanian resmi bebas hama plus sertifikat fumigasi standar ISPM 15.",
    "logistics.doc5Title": "Laporan Hasil Uji Lab (COA)",
    "logistics.doc5Desc": "Pengujian surveyor independen (SGS / Carsurin / Sucofindo) untuk kadar air, kemurnian, dan zat aktif.",
    "logistics.doc6Title": "Sertifikat Uji SHT / MSDS Arang Kelapa",
    "logistics.doc6Desc": "Sertifikat Self-Heating Test (SHT) yang disyaratkan pihak pelayaran membuktikan kargo non-DG yang aman.",
    "logistics.ctaTitle": "Butuh perkiraan ongkos kirim ke pelabuhan tujuan Anda?",
    "logistics.ctaDesc": "Kami bermitra dengan perusahaan pelayaran kargo global untuk mendapatkan tarif kontainer yang kompetitif.",
    "logistics.ctaBtn": "Minta Penawaran CIF & Ongkos Kirim",

    // Contact
    "contact.kicker": "Permintaan Penawaran (RFQ)",
    "contact.title": "Hubungi Meja Ekspor Internasional Kami",
    "contact.desc": "Isi form permintaan penawaran di bawah ini untuk mendapatkan surat penawaran resmi, atau hubungi manajer ekspor kami via WhatsApp dan email resmi.",
    "contact.formTitle": "Formulir Permintaan Penawaran Resmi (RFQ)",
    "contact.formDesc": "Tanpa komitmen awal. Kami memberikan indikasi harga FOB/CIF resmi dalam 24 jam kerja.",
    "contact.name": "Nama Lengkap *",
    "contact.company": "Nama Perusahaan *",
    "contact.email": "Email Bisnis *",
    "contact.country": "Negara / Wilayah Pembeli *",
    "contact.product": "Komoditas yang Diminati *",
    "contact.volume": "Perkiraan Volume Pesanan *",
    "contact.port": "Pelabuhan Tujuan (Opsional)",
    "contact.incoterm": "Pilihan Incoterm",
    "contact.notes": "Spesifikasi / Kebutuhan Tambahan",
    "contact.submitMail": "Kirim Permintaan via Email Bisnis",
    "contact.submitWa": "Kirim Permintaan via WhatsApp",
    "contact.submitCopy": "Salin Pesan ke Clipboard",
    "contact.deskTitle": "Kontak Meja Ekspor Langsung",
    "contact.emailLabel": "Email Meja Ekspor Resmi",
    "contact.waLabel": "Meja Ekspor WhatsApp (Internasional)",
    "contact.hoursTitle": "Jam Operasional & Respon",
    "contact.hoursDesc": "Senin – Sabtu: 08:00 – 17:00 WIB (UTC+7). Respon dalam 24 jam kerja.",
    "contact.officeTitle": "Kantor & Fasilitas Gudang",
    "contact.officeWhLabel": "Gudang Pengolahan & Kontrol Mutu:",
    "contact.officeWhText": "Pusat Pengolahan Jawa Timur, Area Sidoarjo & Surabaya, Indonesia",
    "contact.officeGps": "Akses Langsung Jalur Tol · 35 km ke Pelabuhan Tanjung Perak (IDTPE)",
    "contact.secTitle": "Peringatan Keamanan Penting",
    "contact.secDesc": "PT Anurika Nusantara Agro hanya bertransaksi melalui domain resmi perusahaan (@anurikanusantara.com) dan rekening bank resmi korporat atas nama PT ANURIKA NUSANTARA AGRO. Kami tidak pernah menggunakan rekening pribadi.",
    "contact.toastCopied": "✓ Draft pesan permintaan penawaran berhasil disalin ke clipboard!",

    // Footer
    "footer.desc": "PT Anurika Nusantara Agro adalah eksportir komoditas pertanian Indonesia berizin resmi yang berkomitmen pada transparansi rantai pasok dan kepatuhan standar internasional.",
    "footer.quick": "Navigasi Cepat",
    "footer.commodities": "Komoditas Ekspor",
    "footer.contact": "Meja Ekspor",
    "footer.securityNotice": "Peringatan Keamanan: PT Anurika Nusantara Agro hanya bertransaksi melalui domain resmi perusahaan (@anurikanusantara.com) dan rekening bank atas nama PT ANURIKA NUSANTARA AGRO.",
    "footer.copy": "© 2026 PT Anurika Nusantara Agro. Hak cipta dilindungi undang-undang. NIB 1289000438192.",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Ketentuan Dagang",
    "footer.waWidget": "Meja Ekspor WhatsApp",

    // Modals
    "modal.certTitle": "Catatan Verifikasi Resmi",
    "modal.issuer": "Instansi Penerbit:",
    "modal.regNo": "Nomor Registrasi Dokumen:",
    "modal.validity": "Status Masa Berlaku:",
  }
};

function getActiveLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  if (langFromUrl === 'id' || langFromUrl === 'en') return langFromUrl;
  const saved = localStorage.getItem('nusantara_lang') || localStorage.getItem('nusantara_export_lang');
  if (saved === 'id' || saved === 'en') return saved;
  return 'en';
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('nusantara_lang', lang); localStorage.setItem('nusantara_export_lang', lang);

  const dict = DICTIONARY[lang] || DICTIONARY.en;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language toggle button text
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'ID' : 'EN';
    toggleBtn.setAttribute('title', lang === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English');
  }

  // Update internal anchor links to carry ?lang=id if id, or clean if en
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) return;
    try {
      const u = new URL(href, window.location.origin);
      if (lang === 'id') {
        u.searchParams.set('lang', 'id');
      } else {
        u.searchParams.delete('lang');
      }
      const search = u.search;
      a.setAttribute('href', u.pathname + search + u.hash);
    } catch (e) {}
  });

  // Sync current URL query without full reload
  try {
    const url = new URL(window.location.href);
    if (lang === 'id') {
      url.searchParams.set('lang', 'id');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  } catch (e) {}

  // Dispatch custom event for page-specific hooks
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLanguage() {
  const current = getActiveLanguage();
  const next = current === 'en' ? 'id' : 'en';
  applyLanguage(next);
}

function initLanguage() {
  const initialLang = getActiveLanguage();
  applyLanguage(initialLang);

  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
