/* ==========================================================================
   Panel Data Admin - Anurika Nusantara Agro
   Aplikasi input data situs (tanpa backend). Data kerja disimpan otomatis di
   localStorage, diekspor menjadi admin/data/site-data.json, lalu diterapkan ke
   berkas situs melalui: python3 tools/apply_site_data.py
   ========================================================================== */
(function () {
  'use strict';

  // --- Konstanta -----------------------------------------------------------
  const STORAGE_KEY = 'anurika_admin_site_data_v1';
  const DATA_URL = 'data/site-data.json';
  const APPLY_CMD = 'python3 tools/apply_site_data.py';
  const SAVE_DELAY = 400;

  const CERT_IDS = ['nib', 'npwp', 'kemendag', 'phyto', 'coa', 'coo'];
  const CERT_FIELDS = [
    { suffix: 'title', label: 'Judul dokumen', rows: 2 },
    { suffix: 'issuer', label: 'Instansi penerbit', rows: 2 },
    { suffix: 'valid', label: 'Status / masa berlaku', rows: 1 },
    { suffix: 'desc', label: 'Keterangan', rows: 3 }
  ];
  const COMMODITIES = [
    { id: 'vanilla', label: 'Vanilla Beans', page: 'products/indonesian-vanilla-beans/', catKicker: 'cat.kickerSpices', catParam: 'cat.paramVanilla' },
    { id: 'charcoal', label: 'Coconut Shell Charcoal', page: 'products/coconut-shell-briquette-charcoal/', catKicker: 'cat.kickerCharcoal', catParam: 'cat.paramCharcoal' },
    { id: 'coffee', label: 'Green Coffee Beans', page: 'products/indonesian-green-coffee-beans/', catKicker: 'cat.kickerCoffee', catParam: 'cat.paramCoffee' },
    { id: 'cloves', label: 'Whole Cloves', page: 'products/indonesian-whole-cloves/', catKicker: 'cat.kickerCloves', catParam: 'cat.paramCloves' }
  ];

  // Label manusiawi untuk sufiks key komoditas
  const FIELD_LABELS = {
    title: 'Nama produk', category: 'Kategori & kode HS', desc: 'Deskripsi', cap: 'Kapasitas pasokan bulanan',
    moq: 'Minimum order (MOQ)', lead: 'Lead time produksi', price: 'Model penetapan harga', origin: 'Wilayah asal',
    harvest: 'Musim panen', process: 'Metode pengolahan', shelf: 'Masa simpan & penyimpanan', sample: 'Kebijakan sampel',
    pack: 'Kemasan ekspor', packUnit: 'Satuan berat bersih', oem: 'Private label (OEM)',
    c20: 'Muatan kontainer 20ft FCL', c40: 'Muatan kontainer 40ft HC',
    gA: 'Grade A - nama grade', gADesc: 'Grade A - deskripsi mutu', gAApp: 'Grade A - aplikasi industri',
    gASize: 'Grade A - ukuran / dimensi', gAParam: 'Grade A - parameter uji lab', gAMoisture: 'Grade A - kadar air',
    gB: 'Grade B - nama grade', gBDesc: 'Grade B - deskripsi mutu', gBApp: 'Grade B - aplikasi industri',
    gBSize: 'Grade B - ukuran / dimensi', gBParam: 'Grade B - parameter uji lab', gBMoisture: 'Grade B - kadar air',
    gC: 'Grade C - nama grade', gCDesc: 'Grade C - deskripsi mutu', gCApp: 'Grade C - aplikasi industri',
    gCSize: 'Grade C - ukuran / dimensi', gCParam: 'Grade C - parameter uji lab', gCMoisture: 'Grade C - kadar air',
    thSize: 'Tabel grade - header kolom ukuran', thParam: 'Tabel grade - header kolom parameter lab',
    thAppearance: 'Tabel grade - header kolom tampilan & aroma'
  };

  const GROUP_LABELS = {
    nav: 'Navigasi', hero: 'Beranda - hero', feat: 'Beranda - komoditas unggulan', badge: 'Badge mutu produk',
    cat: 'Halaman produk - katalog', flow: 'Beranda - alur kerja', about: 'Halaman Tentang Kami',
    logistics: 'Halaman Logistik', detail: 'Halaman detail produk', contact: 'Halaman Kontak & RFQ',
    form: 'Validasi formulir RFQ', rfq: 'Pesan RFQ (email / WhatsApp)', wa: 'Widget WhatsApp',
    footer: 'Footer semua halaman', modal: 'Modal catatan verifikasi', privacy: 'Halaman Kebijakan Privasi',
    err: 'Halaman 404', cert: 'Isi dokumen sertifikat', vanilla: 'Komoditas - Vanilla', charcoal: 'Komoditas - Charcoal',
    coffee: 'Komoditas - Coffee', cloves: 'Komoditas - Cloves'
  };

  const CONTACT_ORDER = [
    'kicker', 'title', 'desc', 'formTitle', 'formDesc', 'name', 'company', 'email', 'country', 'product',
    'volume', 'port', 'incoterm', 'notes', 'submitMail', 'submitWa', 'submitCopy', 'deskTitle', 'emailLabel',
    'waLabel', 'hoursTitle', 'hoursDesc', 'optVanilla', 'optCharcoal', 'optCoffee', 'optCloves',
    'incotermFob', 'incotermCif', 'incotermCfr', 'officeTitle', 'officeWhLabel', 'officeWhText', 'officeGps',
    'secTitle', 'secDesc', 'toastCopied'
  ];
  const CONTACT_LABELS = {
    kicker: 'Kicker (label kecil)', title: 'Judul halaman', desc: 'Deskripsi halaman', formTitle: 'Judul formulir RFQ',
    formDesc: 'Keterangan formulir', name: 'Label - Nama', company: 'Label - Perusahaan', email: 'Label - Email',
    country: 'Label - Negara', product: 'Label - Komoditas', volume: 'Label - Volume', port: 'Label - Pelabuhan tujuan',
    incoterm: 'Label - Incoterm', notes: 'Label - Catatan tambahan', submitMail: 'Tombol - Kirim email',
    submitWa: 'Tombol - Kirim WhatsApp', submitCopy: 'Tombol - Salin pesan', deskTitle: 'Judul kontak langsung',
    emailLabel: 'Label email', waLabel: 'Label WhatsApp', hoursTitle: 'Judul jam operasional', hoursDesc: 'Isi jam operasional',
    optVanilla: 'Opsi komoditas - Vanilla', optCharcoal: 'Opsi komoditas - Charcoal', optCoffee: 'Opsi komoditas - Coffee',
    optCloves: 'Opsi komoditas - Cloves', incotermFob: 'Opsi incoterm - FOB', incotermCif: 'Opsi incoterm - CIF',
    incotermCfr: 'Opsi incoterm - CFR', officeTitle: 'Judul kantor & gudang', officeWhLabel: 'Label gudang',
    officeWhText: 'Alamat gudang', officeGps: 'Catatan akses gudang', secTitle: 'Judul peringatan keamanan',
    secDesc: 'Isi peringatan keamanan', toastCopied: 'Notifikasi pesan tersalin'
  };

  // --- State ---------------------------------------------------------------
  let state = null;
  let saveTimer = null;
  let activeTab = 'company';
  const ui = { text: { search: '', group: 'all', onlyEmpty: false, limit: 250 } };
  const mounts = {};

  // --- Helper DOM & status -------------------------------------------------
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        const v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'text') node.textContent = v;
        else if (k === 'value') node.value = v;
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function humanize(key) {
    return String(key).replace(/([A-Z])/g, ' $1').replace(/^./, function (c) { return c.toUpperCase(); });
  }

  function fieldLabel(key) {
    return FIELD_LABELS[key] || CONTACT_LABELS[key] || humanize(key);
  }

  function toast(message, kind) {
    const box = document.getElementById('toast');
    if (!box) return;
    box.textContent = message;
    box.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-lg text-sm font-medium ' +
      (kind === 'err' ? 'is-err' : 'is-ok');
    clearTimeout(box._timer);
    box._timer = setTimeout(function () { box.classList.add('hidden'); }, 3400);
  }

  function setStatus(text, isError) {
    const box = document.getElementById('save-status');
    if (!box) return;
    box.textContent = text;
    box.className = 'text-[11px] px-2.5 py-1 rounded-md border ' + (isError
      ? 'bg-red-900 text-red-100 border-red-700'
      : 'bg-slate-800 text-slate-300 border-slate-700');
  }

  function card(title, hint, body) {
    return el('section', { class: 'admin-card' }, [
      el('div', { class: 'mb-3' }, [
        el('h2', { class: 'admin-card-title', text: title }),
        hint ? el('p', { class: 'admin-hint', text: hint }) : null
      ]),
      body
    ]);
  }

  // --- Akses data ----------------------------------------------------------
  function dictKeys(prefix) {
    return Object.keys(state.dictionary.en).filter(function (k) {
      return !prefix || k.indexOf(prefix) === 0;
    });
  }

  function dictValue(lang, key) {
    const dict = state.dictionary[lang] || {};
    return dict[key] === undefined ? '' : dict[key];
  }

  function setDictValue(lang, key, value) {
    if (!state.dictionary[lang]) state.dictionary[lang] = {};
    state.dictionary[lang][key] = value;
    touch();
  }

  function setPath(path, value) {
    const parts = path.split('.');
    let node = state;
    for (let i = 0; i < parts.length - 1; i++) {
      if (typeof node[parts[i]] !== 'object' || node[parts[i]] === null) node[parts[i]] = {};
      node = node[parts[i]];
    }
    node[parts[parts.length - 1]] = value;
    touch();
  }

  function getPath(path) {
    return path.split('.').reduce(function (node, part) {
      return (node && typeof node === 'object') ? node[part] : undefined;
    }, state);
  }

  function countEmpty() {
    const out = { total: dictKeys().length };
    ['en', 'id'].forEach(function (lang) {
      out[lang] = dictKeys().filter(function (k) {
        return String(dictValue(lang, k)).trim() === '';
      }).length;
    });
    return out;
  }

  function updateCounters() {
    if (!state) return;
    const c = countEmpty();
    document.querySelectorAll('[data-counter]').forEach(function (node) {
      const key = node.getAttribute('data-counter');
      if (key === 'total') node.textContent = c.total;
      else if (key === 'empty-en') node.textContent = c.en;
      else if (key === 'empty-id') node.textContent = c.id;
    });
  }

  function touch() {
    state.meta.updatedAt = new Date().toISOString();
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(saveState, SAVE_DELAY);
    updateCounters();
  }

  function saveState() {
    state.meta.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setStatus('Tersimpan otomatis · ' + new Date().toLocaleTimeString('id-ID'), false);
    } catch (e) {
      setStatus('Gagal menyimpan di browser: ' + e.message, true);
    }
    updateCounters();
  }

  // --- Muat / normalisasi / ekspor-impor ----------------------------------
  function normalize(incoming) {
    const data = (incoming && typeof incoming === 'object') ? incoming : {};
    data.meta = data.meta || {};
    data.meta.schema = 1;
    data.site = data.site || {};
    data.contact = data.contact || {};
    data.legal = data.legal || {};
    data.antiFraudNotice = data.antiFraudNotice || { en: '', id: '' };
    data.certifications = data.certifications || {};
    data.dictionary = data.dictionary || {};
    data.dictionary.en = data.dictionary.en || {};
    data.dictionary.id = data.dictionary.id || {};

    CERT_IDS.forEach(function (id) {
      data.certifications[id] = data.certifications[id] || {};
      if (data.certifications[id].regNo === undefined) data.certifications[id].regNo = '';
    });

    // Selaraskan kamus dengan kunci yang benar-benar dipakai situs: urutan
    // mengikuti i18n.js, kunci tambahan dari data tetap dipertahankan.
    ['en', 'id'].forEach(function (lang) {
      const site = (typeof DICTIONARY !== 'undefined' && DICTIONARY && DICTIONARY[lang]) ? DICTIONARY[lang] : {};
      const merged = {};
      Object.keys(site).forEach(function (k) {
        merged[k] = data.dictionary[lang][k] !== undefined ? data.dictionary[lang][k] : site[k];
      });
      Object.keys(data.dictionary[lang]).forEach(function (k) {
        if (merged[k] === undefined) merged[k] = data.dictionary[lang][k];
      });
      data.dictionary[lang] = merged;
    });
    return data;
  }

  function loadData() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved) {
      try {
        setStatus('Memuat data tersimpan di browser...', false);
        return Promise.resolve(normalize(JSON.parse(saved)));
      } catch (e) {
        toast('Data tersimpan di browser tidak terbaca, memuat data situs...', 'err');
      }
    }
    return fetch(DATA_URL, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status + ' - ' + DATA_URL);
      return res.json();
    }).then(function (json) {
      setStatus('Data default situs dimuat', false);
      return normalize(json);
    });
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = el('a', { href: url, download: 'site-data.json' });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    toast('site-data.json diunduh - simpan ke folder admin/data/');
  }

  function importJson(file) {
    const reader = new FileReader();
    reader.onload = function () {
      try {
        state = normalize(JSON.parse(String(reader.result)));
        saveState();
        renderAll();
        toast('Data dari berkas berhasil dimuat');
      } catch (e) {
        toast('Berkas JSON tidak valid: ' + e.message, 'err');
      }
    };
    reader.onerror = function () { toast('Gagal membaca berkas', 'err'); };
    reader.readAsText(file);
  }

  function copyText(text, okMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(okMessage || 'Disalin ke clipboard');
      }, function () { toast('Gagal menyalin ke clipboard', 'err'); });
    } else {
      toast('Browser tidak mendukung clipboard', 'err');
    }
  }

  function resetAll() {
    if (!window.confirm('Kembalikan semua data ke nilai awal situs? Perubahan lokal (termasuk yang belum diekspor) akan hilang.')) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* abaikan */ }
    loadData().then(function (data) {
      state = data;
      renderAll();
      saveState();
      toast('Data dikembalikan ke nilai awal situs');
    }).catch(function (e) {
      toast('Gagal memuat ulang data: ' + e.message, 'err');
    });
  }

  // --- Pembangun field -----------------------------------------------------
  function dictField(label, key, rows) {
    const row = el('div', { class: 'admin-keyrow' });
    row.appendChild(el('div', { class: 'admin-label' }, [
      el('span', { text: label }),
      el('span', { class: 'admin-key', text: '  ' + key })
    ]));
    const grid = el('div', { class: 'admin-grid admin-grid-2' });
    ['en', 'id'].forEach(function (lang) {
      const cell = el('div', { class: 'flex flex-col items-start' });
      cell.appendChild(el('span', { class: 'admin-lang admin-lang-' + lang, text: lang.toUpperCase() }));
      const input = (rows && rows > 1)
        ? el('textarea', { class: 'admin-input', rows: String(rows) })
        : el('input', { type: 'text', class: 'admin-input' });
      input.value = dictValue(lang, key);
      if (String(input.value).trim() === '') input.classList.add('is-empty');
      input.setAttribute('aria-label', label + ' - ' + lang.toUpperCase());
      input.addEventListener('input', function () {
        setDictValue(lang, key, input.value);
        input.classList.toggle('is-empty', input.value.trim() === '');
      });
      cell.appendChild(input);
      grid.appendChild(cell);
    });
    row.appendChild(grid);
    return row;
  }

  function dictGroup(prefix, order, labels, rowsMap) {
    const box = el('div');
    const keys = dictKeys(prefix);
    const ordered = (order || []).map(function (k) { return prefix + k; })
      .filter(function (k) { return keys.indexOf(k) !== -1; });
    keys.forEach(function (key) { if (ordered.indexOf(key) === -1) ordered.push(key); });
    ordered.forEach(function (key) {
      const suffix = key.slice(prefix.length);
      const rows = (rowsMap && rowsMap[suffix]) ||
        (String(dictValue('en', key)).length > 90 ? 3 : 1);
      box.appendChild(dictField((labels && labels[suffix]) || humanize(suffix), key, rows));
    });
    return box;
  }

  function plainField(label, path, opts) {
    const o = opts || {};
    const wrap = el('div', { class: 'flex flex-col' });
    wrap.appendChild(el('label', { class: 'admin-label' }, [
      el('span', { text: label }),
      el('span', { class: 'admin-key', text: '  ' + path })
    ]));
    const input = (o.rows && o.rows > 1)
      ? el('textarea', { class: 'admin-input', rows: String(o.rows) })
      : el('input', { type: o.type || 'text', class: 'admin-input' });
    const current = getPath(path);
    input.value = (current === undefined || current === null) ? '' : current;
    if (o.placeholder) input.setAttribute('placeholder', o.placeholder);
    if (o.inputmode) input.setAttribute('inputmode', o.inputmode);
    if (o.required && String(input.value).trim() === '') input.classList.add('is-empty');
    input.addEventListener('input', function () {
      setPath(path, input.value);
      if (o.required) input.classList.toggle('is-empty', input.value.trim() === '');
    });
    wrap.appendChild(input);
    if (o.hint) wrap.appendChild(el('p', { class: 'admin-hint mt-1', text: o.hint }));
    return wrap;
  }

  function langField(label, basePath, rows) {
    const row = el('div', { class: 'admin-keyrow' });
    row.appendChild(el('div', { class: 'admin-label' }, [
      el('span', { text: label }),
      el('span', { class: 'admin-key', text: '  ' + basePath })
    ]));
    const grid = el('div', { class: 'admin-grid admin-grid-2' });
    ['en', 'id'].forEach(function (lang) {
      const cell = el('div', { class: 'flex flex-col items-start' });
      cell.appendChild(el('span', { class: 'admin-lang admin-lang-' + lang, text: lang.toUpperCase() }));
      const input = el('textarea', { class: 'admin-input', rows: String(rows || 3) });
      const current = getPath(basePath + '.' + lang);
      input.value = (current === undefined || current === null) ? '' : current;
      if (String(input.value).trim() === '') input.classList.add('is-empty');
      input.addEventListener('input', function () {
        setPath(basePath + '.' + lang, input.value);
        input.classList.toggle('is-empty', input.value.trim() === '');
      });
      cell.appendChild(input);
      grid.appendChild(cell);
    });
    row.appendChild(grid);
    return row;
  }

  // --- Tab 1: perusahaan, kontak, legalitas, teks halaman kontak -----------
  function renderCompany() {
    const mount = mounts.company;
    clear(mount);

    mount.appendChild(card('Domain & identitas perusahaan',
      'Menjadi dasar sitemap.xml, robots.txt, dan seluruh teks identitas pada semua halaman.',
      el('div', { class: 'admin-grid admin-grid-2' }, [
        plainField('Alamat domain situs', 'site.domain', {
          placeholder: 'https://nama-domain.com', required: true,
          hint: 'Tanpa garis miring di akhir. Menulis ulang sitemap.xml, robots.txt, dan tag canonical.'
        }),
        plainField('Nama badan hukum', 'site.companyName', { required: true, placeholder: 'PT Nama Perusahaan' }),
        plainField('Nama merek / trading name', 'site.tradingName', { required: true }),
        plainField('Tahun berdiri', 'site.establishmentYear', { inputmode: 'numeric', placeholder: '2018' })
      ])));

    mount.appendChild(card('Nomor legalitas perusahaan',
      'Nomor resmi tidak diterjemahkan dan dipakai pada modal sertifikat serta halaman Tentang Kami.',
      el('div', { class: 'admin-grid admin-grid-2' }, [
        plainField('NIB (Nomor Induk Berusaha)', 'legal.nib', { required: true }),
        plainField('NPWP perusahaan', 'legal.npwp', { required: true }),
        plainField('Nomor izin ekspor (Kemendag)', 'legal.exportLicense', { required: true }),
        plainField('KBLI', 'legal.kbli', { required: true, hint: 'Contoh: 46312 (Perdagangan Besar Bahan Pertanian & Rempah)' })
      ])));

    mount.appendChild(card('Kontak resmi',
      'Satu sumber data: nilai ini dipakai pada footer, halaman kontak, email RFQ, dan tombol WhatsApp.',
      el('div', { class: 'admin-grid admin-grid-2' }, [
        plainField('Email resmi', 'contact.email', { type: 'email', required: true, placeholder: 'export@domain.com' }),
        plainField('Nomor WhatsApp (format internasional)', 'contact.whatsappNumber', { inputmode: 'tel', required: true, placeholder: '6281234567890', hint: 'Tanpa tanda +, spasi, atau tanda hubung.' }),
        plainField('Tampilan nomor WhatsApp', 'contact.whatsappDisplay', { placeholder: '+62 812 3456 7890' }),
        plainField('Tampilan nomor telepon', 'contact.phoneDisplay', { placeholder: '+62 812 3456 7890' }),
        plainField('Nomor telepon (format tel:)', 'contact.phone', { type: 'tel', placeholder: '+62 812-3456-7890' }),
        plainField('Jam operasional', 'contact.operatingHours', { placeholder: 'Monday - Saturday: 08:00 - 17:00 WIB (UTC+7)' })
      ])));

    mount.appendChild(card('Alamat',
      'Alamat kantor pusat dan gudang; dipakai pada halaman kontak, footer, dan dokumen penawaran.',
      el('div', { class: 'admin-grid' }, [
        plainField('Alamat kantor pusat', 'contact.addressHeadOffice', { rows: 2, required: true }),
        plainField('Alamat gudang', 'contact.addressWarehouse', { rows: 2, required: true })
      ])));

    mount.appendChild(card('Peringatan keamanan transaksi',
      'Tampil pada halaman kontak dan footer sebagai perlindungan terhadap penipuan.',
      langField('Peringatan keamanan (anti-fraud)', 'antiFraudNotice', 4)));

    mount.appendChild(card('Teks halaman Kontak & RFQ',
      'Semua label, opsi, dan pesan pada halaman kontak serta formulir permintaan penawaran.',
      dictGroup('contact.', CONTACT_ORDER, CONTACT_LABELS,
        { deskTitle: 1, hoursDesc: 1, officeWhText: 2, officeGps: 2, secDesc: 3, formDesc: 2, desc: 2 })));

    return mount;
  }

  // --- Tab 2: sertifikat & badge mutu --------------------------------------
  const CERT_LABELS = {
    nib: 'NIB & Izin Usaha Ekspor', npwp: 'NPWP Perusahaan', kemendag: 'Izin Ekspor Kemendag',
    phyto: 'Phytosanitary Certificate', coa: 'Certificate of Analysis', coo: 'Certificate of Origin'
  };
  const BADGE_LABELS = {
    phyto: 'Badge - Phytosanitary', coo: 'Badge - Certificate of Origin (rempah)', cooCharcoal: 'Badge - COO arang',
    coaVanilla: 'Badge - COA vanilla', coaCloves: 'Badge - COA cengkeh', msds: 'Badge - MSDS',
    nondg: 'Badge - Non-DG cargo', ico: 'Badge - ICO', scaa: 'Badge - SCAA'
  };

  function renderCerts() {
    const mount = mounts.certs;
    clear(mount);

    mount.appendChild(card('Cara kerja data sertifikat',
      'Nomor registrasi dokumen disimpan satu kali dan dipakai modal verifikasi di semua halaman. ' +
      'Judul, instansi, status, dan keterangan tersedia dalam dua bahasa.',
      el('p', { class: 'admin-hint', text: 'Jika sebuah dokumen belum terbit, biarkan nomor registrasinya kosong - modal akan menampilkan tanda "-".' })));

    CERT_IDS.forEach(function (id) {
      const fields = CERT_FIELDS.map(function (f) {
        return dictField(f.label, 'cert.' + id + '.' + f.suffix, f.rows);
      });
      mount.appendChild(card('Sertifikat: ' + (CERT_LABELS[id] || id),
        'Dokumen ' + id.toUpperCase() + ' - tampil pada modal "Catatan Verifikasi Resmi".',
        el('div', {}, [
          plainField('Nomor registrasi dokumen', 'certifications.' + id + '.regNo', {
            placeholder: 'Nomor dokumen resmi',
            hint: 'Nomor resmi tidak diterjemahkan (sama untuk semua bahasa).'
          }),
          el('div', { class: 'mt-3' }, fields)
        ])));
    });

    mount.appendChild(card('Badge mutu & sertifikasi produk',
      'Label singkat yang tampil pada kartu komoditas dan halaman detail produk.',
      dictGroup('badge.', ['phyto', 'coo', 'cooCharcoal', 'coaVanilla', 'coaCloves', 'msds', 'nondg', 'ico', 'scaa'], BADGE_LABELS)));

    return mount;
  }

  // --- Tab 3: komoditas -----------------------------------------------------
  function renderProducts() {
    const mount = mounts.products;
    clear(mount);

    mount.appendChild(card('Cara kerja data komoditas',
      'Empat kartu di bawah mewakili empat komoditas ekspor yang dimiliki situs.',
      el('ul', { class: 'admin-hint list-disc pl-5 space-y-1' }, [
        el('li', { text: 'Field komoditas tersedia untuk kedua bahasa: nilai EN dan ID harus diisi.' }),
        el('li', { text: 'Grade A/B/C dipakai pada tabel spesifikasi halaman detail produk.' }),
        el('li', { text: 'Kolom kosong ditandai kuning - periksa sebelum menerapkan ke situs.' })
      ])));

    COMMODITIES.forEach(function (c) {
      const box = el('div');
      box.appendChild(dictField('Label kategori pada kartu katalog', c.catKicker, 1));
      box.appendChild(dictField('Parameter mutu unggulan pada kartu katalog', c.catParam, 1));
      dictKeys(c.id + '.').forEach(function (key) {
        const suffix = key.slice(c.id.length + 1);
        const len = Math.max(String(dictValue('en', key)).length, String(dictValue('id', key)).length);
        box.appendChild(dictField(fieldLabel(suffix), key, len > 90 ? 3 : 1));
      });
      mount.appendChild(card('Komoditas: ' + c.label,
        'Halaman detail: ' + c.page + ' · kartu katalog: products/', box));
    });

    return mount;
  }

  // --- Tab 4: seluruh teks (kamus dua bahasa) ------------------------------
  const TEXT_GROUPS = ['nav', 'hero', 'feat', 'badge', 'cat', 'flow', 'about', 'logistics', 'detail',
    'contact', 'form', 'rfq', 'wa', 'footer', 'modal', 'privacy', 'err', 'cert',
    'vanilla', 'charcoal', 'coffee', 'cloves'];
  const TOKENS_HINT = 'Token otomatis: {year} {legal_name} {brand} {nib} {npwp} {export_license} {kbli} ' +
    '{email} {wa} {wa_display} {phone} {domain} {established}';

  function keyGroup(key) {
    return key.slice(0, key.indexOf('.'));
  }

  function textFilterKeys() {
    const q = ui.text.search.trim().toLowerCase();
    return dictKeys().filter(function (key) {
      if (ui.text.group !== 'all' && keyGroup(key) !== ui.text.group) return false;
      if (q) {
        const hay = (key + ' ' + dictValue('en', key) + ' ' + dictValue('id', key)).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      if (ui.text.onlyEmpty) {
        const filled = String(dictValue('en', key)).trim() !== '' &&
          String(dictValue('id', key)).trim() !== '';
        if (filled) return false;
      }
      return true;
    });
  }

  function updateTextCounters(filtered) {
    document.querySelectorAll('[data-counter="shown"]').forEach(function (node) {
      node.textContent = filtered === undefined ? '-' : filtered;
    });
    updateCounters();
  }

  function buildTextToolbar() {
    const groups = {};
    dictKeys().forEach(function (key) {
      const g = keyGroup(key);
      groups[g] = (groups[g] || 0) + 1;
    });
    const known = TEXT_GROUPS.filter(function (g) { return groups[g]; });
    Object.keys(groups).forEach(function (g) { if (known.indexOf(g) === -1) known.push(g); });

    const search = el('input', {
      type: 'search', class: 'admin-search',
      placeholder: 'Cari kunci atau isi teks (mis. harga, moq, sertifikat)...'
    });
    search.value = ui.text.search;
    search.addEventListener('input', function () {
      ui.text.search = search.value;
      ui.text.limit = 250;
      renderTextList();
    });

    const onlyEmpty = el('input', { type: 'checkbox', class: 'accent-emerald-600' });
    onlyEmpty.checked = ui.text.onlyEmpty;
    onlyEmpty.addEventListener('change', function () {
      ui.text.onlyEmpty = onlyEmpty.checked;
      renderTextList();
    });

    const pills = el('div', { class: 'flex flex-wrap gap-1.5 mt-3' });
    pills.appendChild(el('button', {
      type: 'button',
      class: 'admin-pill' + (ui.text.group === 'all' ? ' is-active' : ''),
      text: 'Semua (' + dictKeys().length + ')',
      onclick: function () { setTextGroup('all', pills); }
    }));
    known.forEach(function (g) {
      pills.appendChild(el('button', {
        type: 'button',
        class: 'admin-pill' + (ui.text.group === g ? ' is-active' : ''),
        'data-group': g,
        text: (GROUP_LABELS[g] || humanize(g)) + ' (' + groups[g] + ')',
        onclick: function () { setTextGroup(g, pills); }
      }));
    });

    return card('Semua teks situs (kamus dua bahasa)',
      'Setiap kunci di bawah ini adalah sumber teks pada halaman situs. ' + TOKENS_HINT,
      el('div', {}, [
        el('div', { class: 'admin-grid admin-grid-2 items-end' }, [
          el('div', {}, [el('label', { class: 'admin-label', text: 'Pencarian' }), search]),
          el('label', { class: 'flex items-center gap-2 text-xs font-semibold text-slate-600 pb-2' }, [
            onlyEmpty, el('span', { text: 'Hanya tampilkan yang belum lengkap' })
          ])
        ]),
        pills,
        el('div', { class: 'admin-stats mt-3' }, [
          el('div', { class: 'admin-stat' }, [el('b', { 'data-counter': 'total', text: '-' }), 'Total kunci']),
          el('div', { class: 'admin-stat' }, [el('b', { 'data-counter': 'shown', text: '-' }), 'Ditampilkan']),
          el('div', { class: 'admin-stat' }, [el('b', { 'data-counter': 'empty-en', text: '-' }), 'Kosong (EN)']),
          el('div', { class: 'admin-stat' }, [el('b', { 'data-counter': 'empty-id', text: '-' }), 'Kosong (ID)'])
        ])
      ]));
  }

  function setTextGroup(group, pills) {
    ui.text.group = group;
    ui.text.limit = 250;
    pills.querySelectorAll('.admin-pill').forEach(function (p) {
      p.classList.toggle('is-active', (p.getAttribute('data-group') || 'all') === group);
    });
    renderTextList();
  }

  function renderText() {
    const mount = mounts.text;
    clear(mount);
    mount.appendChild(buildTextToolbar());
    mount.appendChild(el('div', { id: 'text-list-box', class: 'mt-4' }));
    renderTextList();
  }

  function renderTextList() {
    const box = document.getElementById('text-list-box');
    if (!box) return;
    clear(box);
    const keys = textFilterKeys();
    updateTextCounters(keys.length);

    if (!keys.length) {
      box.appendChild(card('Tidak ada hasil',
        'Ubah kata kunci pencarian atau pilih kelompok teks lain.',
        el('p', { class: 'admin-hint', text: 'Kosongkan pencarian untuk menampilkan seluruh kunci.' })));
      return;
    }

    const visible = keys.slice(0, ui.text.limit);
    const list = el('div', {});
    visible.forEach(function (key) {
      const group = keyGroup(key);
      const leaf = key.slice(key.indexOf('.') + 1);
      const label = (GROUP_LABELS[group] ? GROUP_LABELS[group] + ' · ' : '') + humanize(leaf);
      const len = Math.max(String(dictValue('en', key)).length, String(dictValue('id', key)).length);
      list.appendChild(dictField(label, key, len > 90 ? 3 : 1));
    });
    box.appendChild(card('Daftar teks',
      visible.length + ' dari ' + keys.length + ' kunci ditampilkan · perubahan tersimpan otomatis.',
      list));

    if (keys.length > ui.text.limit) {
      box.appendChild(el('div', { class: 'mt-3 text-center' }, [
        el('button', {
          type: 'button', class: 'admin-btn-light',
          text: 'Tampilkan ' + Math.min(250, keys.length - ui.text.limit) + ' kunci berikutnya',
          onclick: function () { ui.text.limit += 250; renderTextList(); }
        })
      ]));
    }
  }

  // --- Tab 5: terapkan ke situs --------------------------------------------
  function statChip(value, label) {
    return el('div', { class: 'admin-stat' }, [el('b', { text: String(value) }), label]);
  }

  function codeBlock(command) {
    return el('div', { class: 'flex items-center gap-2 mt-1' }, [
      el('code', { class: 'flex-1 px-2 py-1.5 rounded bg-slate-900 text-slate-100 text-[11px] overflow-x-auto', text: command }),
      el('button', {
        type: 'button', class: 'admin-btn-light', text: 'Salin',
        onclick: function () { copyText(command); }
      })
    ]);
  }

  function requiredWarnings() {
    const required = [
      ['site.domain', 'Alamat domain situs'], ['site.companyName', 'Nama badan hukum'],
      ['site.tradingName', 'Nama merek'], ['legal.nib', 'NIB'], ['legal.npwp', 'NPWP'],
      ['legal.exportLicense', 'Nomor izin ekspor'], ['legal.kbli', 'KBLI'],
      ['contact.email', 'Email resmi'], ['contact.whatsappNumber', 'Nomor WhatsApp'],
      ['contact.addressHeadOffice', 'Alamat kantor pusat'], ['contact.addressWarehouse', 'Alamat gudang']
    ];
    const missing = [];
    required.forEach(function (r) {
      const value = getPath(r[0]);
      if (value === undefined || value === null || String(value).trim() === '') missing.push(r[1]);
    });
    CERT_IDS.forEach(function (id) {
      const value = getPath('certifications.' + id + '.regNo');
      if (value === undefined || value === null || String(value).trim() === '') {
        missing.push('Nomor registrasi ' + id.toUpperCase());
      }
    });
    return missing;
  }

  function renderDeploy() {
    const mount = mounts.deploy;
    clear(mount);
    const counts = countEmpty();
    const missing = requiredWarnings();

    mount.appendChild(card('Ringkasan data',
      'Terakhir diubah: ' + (state.meta.updatedAt ? new Date(state.meta.updatedAt).toLocaleString('id-ID') : '-'),
      el('div', { class: 'admin-stats' }, [
        statChip(counts.total, 'Total kunci teks'),
        statChip(counts.en, 'Kunci kosong (EN)'),
        statChip(counts.id, 'Kunci kosong (ID)'),
        statChip(CERT_IDS.length, 'Sertifikat'),
        statChip(COMMODITIES.length, 'Komoditas')
      ])));

    if (missing.length) {
      mount.appendChild(card('Data wajib belum lengkap',
        'Lengkapi field berikut sebelum menerapkan ke situs (' + missing.length + ' item belum terisi).',
        el('ul', { class: 'admin-hint list-disc pl-5 space-y-0.5' }, missing.map(function (m) {
          return el('li', { text: m });
        }))));
    }

    mount.appendChild(card('Langkah menerapkan ke situs',
      'Panel ini tidak menulis berkas sendiri; data diterapkan melalui perintah Python di bawah.',
      el('ol', { class: 'list-decimal pl-5 space-y-3 text-xs text-slate-700' }, [
        el('li', {}, [
          el('div', { class: 'font-semibold text-slate-900', text: 'Unduh data dan simpan ke folder admin' }),
          el('p', { class: 'mt-0.5', text: 'Simpan berkas hasil unduhan sebagai admin/data/site-data.json (menimpa berkas sebelumnya).' }),
          el('div', { class: 'flex flex-wrap gap-2 mt-1' }, [
            el('button', { type: 'button', class: 'admin-btn-light', text: 'Unduh site-data.json', onclick: exportJson }),
            el('button', {
              type: 'button', class: 'admin-btn-light', text: 'Impor JSON',
              onclick: function () { document.getElementById('file-import').click(); }
            })
          ])
        ]),
        el('li', {}, [
          el('div', { class: 'font-semibold text-slate-900', text: 'Pratinjau perubahan (tanpa menulis berkas)' }),
          codeBlock('cd /workspaces/web-export && python3 tools/apply_site_data.py --dry-run')
        ]),
        el('li', {}, [
          el('div', { class: 'font-semibold text-slate-900', text: 'Terapkan ke seluruh berkas situs' }),
          codeBlock('cd /workspaces/web-export && ' + APPLY_CMD)
        ]),
        el('li', {}, [
          el('div', { class: 'font-semibold text-slate-900', text: 'Periksa hasil lalu muat ulang situs' }),
          codeBlock('cd /workspaces/web-export && git --no-pager diff --stat'),
          el('p', { class: 'mt-1 text-slate-500', text: 'Jalankan python3 server.py, kemudian cek beranda, halaman produk, kontak, dan modal sertifikat pada bahasa EN dan ID.' })
        ])
      ])));

    mount.appendChild(card('Berkas yang ditulis ulang',
      'Diperbarui langsung di dalam repositori ini, bukan di dalam browser.',
      el('ul', { class: 'admin-hint list-disc pl-5 space-y-0.5' }, [
        el('li', { text: 'assets/js/config.js - identitas perusahaan, legalitas, kontak, dan peringatan keamanan' }),
        el('li', { text: 'assets/js/i18n.js - seluruh teks dua bahasa (kamus EN dan ID)' }),
        el('li', { text: 'assets/js/main.js - nomor registrasi dokumen pada modal sertifikat' }),
        el('li', { text: 'assets/js/rfq-form.js - email dan nomor WhatsApp cadangan pada formulir RFQ' }),
        el('li', { text: 'index.html dan contact/index.html - tautan email serta WhatsApp di footer dan halaman kontak' }),
        el('li', { text: 'sitemap.xml dan robots.txt - domain publik serta tanggal pembaruan terakhir' })
      ])));

    mount.appendChild(card('Cadangan lokal di browser',
      'Perubahan tersimpan otomatis pada localStorage dengan kunci: ' + STORAGE_KEY,
      el('div', { class: 'flex flex-wrap gap-2' }, [
        el('button', { type: 'button', class: 'admin-btn-light', text: 'Unduh cadangan JSON', onclick: exportJson }),
        el('button', { type: 'button', class: 'admin-btn-light', text: 'Kembalikan ke data awal situs', onclick: resetAll })
      ])));

    return mount;
  }

  // --- Orkestrasi tab & inisialisasi ---------------------------------------
  const TAB_IDS = ['company', 'certs', 'products', 'text', 'deploy'];

  function renderAll() {
    renderCompany();
    renderCerts();
    renderProducts();
    renderText();
    renderDeploy();
    updateCounters();
  }

  function showTab(name) {
    if (TAB_IDS.indexOf(name) === -1) name = 'company';
    activeTab = name;
    document.querySelectorAll('#tab-nav .admin-tab').forEach(function (btn) {
      const isActive = btn.getAttribute('data-tab') === name;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
    TAB_IDS.forEach(function (id) {
      const panel = document.getElementById('panel-' + id);
      if (panel) panel.classList.toggle('hidden', id !== name);
    });
  }

  function bindHeader() {
    const download = document.getElementById('btn-download');
    if (download) download.addEventListener('click', exportJson);
    const reset = document.getElementById('btn-reset');
    if (reset) reset.addEventListener('click', resetAll);

    const fileInput = document.getElementById('file-import');
    const importBtn = document.getElementById('btn-import');
    if (importBtn && fileInput) {
      importBtn.addEventListener('click', function () { fileInput.click(); });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) importJson(fileInput.files[0]);
        fileInput.value = '';
      });
    }
    document.querySelectorAll('#tab-nav .admin-tab').forEach(function (btn) {
      btn.addEventListener('click', function () { showTab(btn.getAttribute('data-tab')); });
    });
  }

  function showLoadError(message) {
    const box = document.getElementById('load-error');
    if (!box) return;
    box.classList.remove('hidden');
    box.textContent = message;
  }

  function init() {
    TAB_IDS.forEach(function (id) {
      const node = document.getElementById('mount-' + id);
      if (node) mounts[id] = node;
    });
    if (!mounts.company) return;
    bindHeader();
    setStatus('Memuat data...', false);

    loadData().then(function (data) {
      state = data;
      renderAll();
      showTab(activeTab);
      setStatus('Data siap · ' + countEmpty().total + ' kunci teks', false);
    }).catch(function (e) {
      const fromFile = window.location.protocol === 'file:';
      showLoadError('Gagal memuat ' + DATA_URL + ' (' + e.message + '). ' + (fromFile
        ? 'Halaman ini dibuka langsung dari berkas (file://). Jalankan "python3 server.py" lalu buka http://localhost:8000/admin/.'
        : 'Pastikan berkas admin/data/site-data.json tersedia, atau gunakan tombol Impor JSON untuk memuat data yang sudah diunduh.'));
      toast('Gagal memuat data awal', 'err');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
