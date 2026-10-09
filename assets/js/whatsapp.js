// Floating WhatsApp widget & Contextual Link Builder
function initWhatsApp() {
  const waBtn = document.getElementById('floating-wa-btn');
  const waContainer = document.getElementById('floating-wa-container');
  if (!waBtn) return;

  waBtn.addEventListener('click', () => {
    const productMeta = document.querySelector('[data-product-name]');
    const productName = productMeta ? productMeta.getAttribute('data-product-name') : null;

    // Prefilled chat message follows the active language (keys: wa.msgProduct / wa.msgGeneral)
    let text;
    if (typeof t === 'function') {
      text = productName ? t('wa.msgProduct', { product: productName }) : t('wa.msgGeneral');
    } else {
      text = productName
        ? `Hello, I am interested in importing ${productName}. Could you provide the latest FOB/CIF specification and price quotation?`
        : `Hello, I am interested in sourcing commodities from Indonesia. Could you provide your latest quotation?`;
    }

    const waNum = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.contact.whatsappNumber) || "6281234567890";
    const url = `https://wa.me/${waNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

document.addEventListener('DOMContentLoaded', initWhatsApp);
