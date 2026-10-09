// Floating WhatsApp widget & Contextual Link Builder
function initWhatsApp() {
  const waBtn = document.getElementById('floating-wa-btn');
  const waContainer = document.getElementById('floating-wa-container');
  if (!waBtn) return;

  waBtn.addEventListener('click', () => {
    const activeLang = localStorage.getItem('nusantara_lang') || 'en';
    const productMeta = document.querySelector('[data-product-name]');
    const productName = productMeta ? productMeta.getAttribute('data-product-name') : null;

    let text = "";
    if (productName) {
      text = activeLang === 'en'
        ? `Hello Nusantara Agro Export Desk, I am interested in importing ${productName}. Could you provide the latest FOB/CIF specification and price quotation?`
        : `Halo Tim Ekspor Nusantara, saya tertarik dengan ${productName}. Mohon informasi spesifikasi teknis dan penawaran harga FOB/CIF terbaru.`;
    } else {
      text = activeLang === 'en'
        ? `Hello Nusantara Agro Export Desk, I am interested in sourcing commodities from Indonesia. Could you provide your latest quotation?`
        : `Halo Tim Ekspor Nusantara, saya tertarik dengan pasokan komoditas dari Indonesia. Mohon informasi penawaran harga terbaru.`;
    }

    const waNum = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.contact.whatsappNumber) || "6281234567890";
    const url = `https://wa.me/${waNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

document.addEventListener('DOMContentLoaded', initWhatsApp);
