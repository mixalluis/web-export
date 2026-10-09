// RFQ Form Handler (Validation, Mailto, WhatsApp dispatch, Copy to Clipboard)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rfq-form');
  if (!form) return;

  // Auto-select product from URL ?product=
  const urlParams = new URLSearchParams(window.location.search);
  const preProduct = urlParams.get('product');
  const productSelect = document.getElementById('rfq-product');
  if (preProduct && productSelect) {
    for (let opt of productSelect.options) {
      if (opt.value.toLowerCase().includes(preProduct.toLowerCase()) || opt.text.toLowerCase().includes(preProduct.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }

  function getFormData() {
    return {
      name: (document.getElementById('rfq-name') || {}).value || '',
      company: (document.getElementById('rfq-company') || {}).value || '',
      email: (document.getElementById('rfq-email') || {}).value || '',
      country: (document.getElementById('rfq-country') || {}).value || '',
      product: (document.getElementById('rfq-product') || {}).value || '',
      volume: (document.getElementById('rfq-volume') || {}).value || '',
      port: (document.getElementById('rfq-port') || {}).value || '',
      incoterm: (document.getElementById('rfq-incoterm') || {}).value || '',
      notes: (document.getElementById('rfq-notes') || {}).value || '',
    };
  }

  function buildMessage(data) {
    return [
      `=== OFFICIAL B2B EXPORT INQUIRY (RFQ) ===`,
      `Commodity: ${data.product}`,
      `Estimated Volume: ${data.volume}`,
      `Preferred Incoterm: ${data.incoterm}`,
      data.port ? `Destination Port: ${data.port}` : null,
      ``,
      `--- BUYER CREDENTIALS ---`,
      `Full Name: ${data.name}`,
      `Company: ${data.company}`,
      `Business Email: ${data.email}`,
      `Country/Region: ${data.country}`,
      ``,
      data.notes ? `--- REQUIREMENTS / SPECIFICATIONS ---\n${data.notes}\n` : null,
      `Timestamp: ${new Date().toISOString()}`,
      `Sent via Anurika Nusantara Agro Global Export Portal`,
    ].filter(Boolean).join('\n');
  }

  function validate(data) {
    const errorEl = document.getElementById('rfq-error');
    if (!data.name.trim() || !data.company.trim() || !data.email.trim() || !data.country.trim() || !data.volume.trim()) {
      if (errorEl) {
        errorEl.textContent = "Please fill in all required fields (Name, Company, Business Email, Country, Volume).";
        errorEl.classList.remove('hidden');
      }
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      if (errorEl) {
        errorEl.textContent = "Please enter a valid business email address.";
        errorEl.classList.remove('hidden');
      }
      return false;
    }
    if (errorEl) errorEl.classList.add('hidden');
    return true;
  }

  // 1. Submit via Mailto
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getFormData();
    if (!validate(data)) return;

    const subject = encodeURIComponent(`B2B Export Inquiry: ${data.product} - ${data.company} (${data.country})`);
    const body = encodeURIComponent(buildMessage(data));
    const targetEmail = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.contact.email) || "export@nusantaracommodities.com";
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  });

  // 2. Submit via WhatsApp
  const waBtn = document.getElementById('rfq-send-wa');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!validate(data)) return;

      const body = encodeURIComponent(buildMessage(data));
      const waNum = (typeof APP_CONFIG !== 'undefined' && APP_CONFIG.contact.whatsappNumber) || "6281234567890";
      window.open(`https://wa.me/${waNum}?text=${body}`, '_blank', 'noopener,noreferrer');
    });
  }

  // 3. Copy message to clipboard
  const copyBtn = document.getElementById('rfq-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const data = getFormData();
      if (!validate(data)) return;

      const text = buildMessage(data);
      navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('rfq-toast');
        if (toast) {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 4000);
        }
      });
    });
  }
});
