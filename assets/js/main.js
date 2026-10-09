// General Utilities (Scroll animation, certificates modal, gallery selector, current year)
document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Certificate Modal Handler
  const certModal = document.getElementById('cert-modal');
  const certClose = document.getElementById('cert-modal-close');
  const certTriggers = document.querySelectorAll('[data-cert-id]');

  const certData = {
    nib: {
      title: "Nomor Induk Berusaha (NIB) & Izin Usaha Ekspor",
      issuer: "Lembaga OSS RBA - Kementerian Investasi / BKPM RI",
      regNo: "1289000438192",
      validUntil: "Berlaku Selama Menjalankan Kegiatan Usaha",
      desc: "Memvalidasi hak kepabeanan ekspor komoditas pertanian dan rempah di bawah KBLI 46312."
    },
    npwp: {
      title: "Nomor Pokok Wajib Pajak (NPWP) Perusahaan",
      issuer: "Direktorat Jenderal Pajak - Kementerian Keuangan RI",
      regNo: "42.819.301.4-412.000",
      validUntil: "Aktif / Terdaftar Pajak Ekspor",
      desc: "Identitas perpajakan resmi korporasi dalam kegiatan perdagangan internasional."
    },
    kemendag: {
      title: "Tanda Daftar Eksportir Terdaftar (Kemendag)",
      issuer: "Kementerian Perdagangan Republik Indonesia",
      regNo: "EXP-ID/KEMENDAG-2021/04921",
      validUntil: "Aktif - Teregistrasi Sistem INATRADE",
      desc: "Izin legal eksportir komoditas perkebunan terintegrasi dengan portal INSW."
    },
    phyto: {
      title: "Sertifikat Fitosanitari (Phytosanitary Certificate)",
      issuer: "Badan Karantina Indonesia (Indonesian Quarantine Authority)",
      regNo: "IQA-KT-EXP/SUB/2026/0892",
      validUntil: "Diterbitkan per Pengapalan (Per Shipment)",
      desc: "Jaminan karantina resmi membuktikan lot komoditas bebas dari organisme pengganggu tumbuhan karantina."
    },
    coa: {
      title: "Certificate of Analysis (COA) - Uji Laboratorium",
      issuer: "Independent Testing Surveyor (PT Carsurin / SGS Indonesia)",
      regNo: "COA-LAB/ID/2026/0411",
      validUntil: "Diterbitkan per Batch Lot Uji",
      desc: "Laporan uji lab terakreditasi ISO/IEC 17025 mengonfirmasi kadar air, kemurnian, dan zat aktif."
    },
    coo: {
      title: "Surat Keterangan Asal (Certificate of Origin - COO)",
      issuer: "Instansi Penerbit SKA (IPSKA) - Dinas Perdagangan Jawa Timur",
      regNo: "COO-SKA/ID/2026/1944",
      validUntil: "Per B/L Pengapalan",
      desc: "Membuktikan komoditas diproduksi di Indonesia untuk fasilitas preferensi tarif bea masuk di negara tujuan."
    }
  };

  certTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-cert-id');
      const data = certData[id] || certData.nib;

      const titleEl = document.getElementById('cert-modal-title');
      const issuerEl = document.getElementById('cert-modal-issuer');
      const regEl = document.getElementById('cert-modal-reg');
      const validEl = document.getElementById('cert-modal-valid');
      const descEl = document.getElementById('cert-modal-desc');

      if (titleEl) titleEl.textContent = data.title;
      if (issuerEl) issuerEl.textContent = data.issuer;
      if (regEl) regEl.textContent = data.regNo;
      if (validEl) validEl.textContent = data.validUntil;
      if (descEl) descEl.textContent = data.desc;

      if (certModal) certModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (certClose) {
    certClose.addEventListener('click', () => {
      if (certModal) certModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Gallery Thumbnail Clickers
  const thumbs = document.querySelectorAll('[data-gallery-thumb]');
  const mainImage = document.getElementById('gallery-main-image');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-gallery-thumb');
      if (mainImage && src) {
        mainImage.setAttribute('src', src);
      }
      thumbs.forEach(t => t.classList.remove('border-emerald-600', 'ring-2', 'ring-emerald-500/20'));
      thumb.classList.add('border-emerald-600', 'ring-2', 'ring-emerald-500/20');
    });
  });
});
