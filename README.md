# Panduan Developer: Website Profil Usaha & Katalog Produk Ekspor (UMK)
**Versi 2.2 | Oktober 2026**  
*Dokumentasi Resmi Arsitektur & Operasional Web Ekspor PT Anurika Nusantara Agro*

---

Halo rekan developer! Selamat datang di repositori website ekspor ini. Panduan ini ditulis santai, jelas, dan lengkap agar siapa pun yang mengelola proyek ini ke depan bisa langsung paham, bisa menjalankan, dan tahu persis ke mana harus mengedit tanpa hambatan.

Website ini dibangun menggunakan **100% HTML Native, Tailwind CSS via CDN, Vanilla JavaScript murni, tanpa React, dan tanpa backend**. Server Python hanya bertindak sebagai penyaji file statis lokal (`python3 -m http.server 8000` atau `python3 server.py`).

---

## 1. Apa Ini?
Website ini adalah **"kantor digital B2B"** untuk usaha mikro dan kecil (UMK) eksportir Indonesia (dalam implementasi ini: *PT Anurika Nusantara Agro*).

Tujuan utamanya:
1. **Membangun Kredibilitas Internasional**: Dikenal buyer luar negeri (importir, sourcing agent, trader komoditas) lewat Google.
2. **Menghasilkan Inkuiri Bisnis Riil (RFQ)**: Mengarahkan buyer langsung menghubungi meja ekspor via WhatsApp dan email resmi perusahaan.
3. **Membuktikan Legalitas & Kapasitas Riil UMK**: Buyer luar negeri sangat berhati-hati terhadap supplier fiktif. Tampilan beranda dibuat **bersih, tidak bising, dan realistis untuk skala UMK baru**:
   - Legalitas resmi terverifikasi: NIB (Nomor Induk Berusaha via OSS RBA) dan NPWP.
   - Kapasitas pasokan riil: 5 – 15 Ton / Bulan.
   - Jaminan mutu: Uji laboratorium independen (Phytosanitary & Lab COA per batch pengapalan).
   - Respon cepat penawaran harga: 1x24 jam kerja.

**Yang sengaja TIDAK ADA di website ini**:
- **Tidak ada React atau framework JavaScript berat lainnya**.
- **Tidak ada backend atau server-side rendering**.
- **Tidak ada database SQL/NoSQL**.
- **Tidak ada keranjang belanja / sistem e-commerce checkout**.
- **Tidak ada payment gateway** (transaksi ekspor B2B menggunakan transfer bank resmi korporat atau L/C).

---

## 2. Fitur Utama & Pembaruan

- **Navbar Responsif Standar Ekspor Global**:
  - **Mode Desktop & Tablet ($\ge 768\text{px}$)**: Tampil penuh dengan navigasi horizontal berjejer rapi di header (`Home`, `About Us`, `Products & Specs`, `Logistics & Shipping`, `Contact & RFQ`). **Tombol hamburger menu disembunyikan sepenuhnya**.
  - **Mode Mobile ($< 768\text{px}$)**: Tombol hamburger menu muncul dengan panel drawer turun yang mulus, ramah sentuhan, dan tombol bahasa tetap terlihat di header.
- **Animasi Saat Scroll (Smooth Scroll Reveal)**:
  - Setiap kartu komoditas, judul bagian, dan tahapan alur ekspor memiliki animasi fade-in & slide-up halus saat digulir ke dalam layar menggunakan native `IntersectionObserver` dan CSS transition 60fps.
- **Sistem Dua Bahasa Penuh (English Default & Bahasa Indonesia)**:
  - Bahasa Inggris sebagai bahasa utama untuk pasar internasional.
  - Saat mode Bahasa Indonesia diaktifkan, **seluruh halaman detail spesifikasi produk otomatis ikut berganti ke Bahasa Indonesia** (mulai dari deskripsi, ringkasan kapasitas, 4 blok spesifikasi teknis, tabel parameter grade, hingga tombol cetak lembar spek PDF).
  - Tautan internal otomatis mempertahankan status bahasa (`?lang=id`).
- **Beranda Rapi & Realistis untuk UMK Baru**:
  - Tidak dipenuhi sertifikat berlebihan yang tidak relevan bagi UMK baru.
  - Fokus pada 4 komoditas unggulan Indonesia: Biji Vanili Planifolia, Briket Arang Tempurung Kelapa, Biji Kopi Mentah Spesialti, dan Cengkeh Kering Utuh Lalpari.
- **Halaman Detail Spesifikasi Komoditas (4 Blok Data Teknis)**:
  1. *Info Botani & Asal Usul*: Nama latin, kode HS, wilayah panen, metode pengolahan, masa simpan.
  2. *Tabel Grade & Parameter Uji Lab*: Kadar air, panjang/ukuran, kadar vanilin/karbon/eugenol, karakter aroma, aplikasi industri.
  3. *Kapasitas Pasokan & Syarat Komersial*: Kapasitas per bulan, MOQ kargo udara/laut, waktu proses, kebijakan sampel gratis, model harga.
  4. *Kemasan & Stuffing Kontainer*: Kantong vakum, karung goni, kardus master, kalkulasi muat kontainer 20ft FCL & 40ft HC.
- **Lembar Spek Siap Cetak (Print / Save PDF)**: Tombol cetak langsung (`window.print()`) dengan CSS print layout bersih untuk tim procurement buyer.
- **Triple-Action RFQ Form**: Kirim via Email Bisnis (`mailto:`), kirim via WhatsApp, atau salin draft penawaran ke clipboard.
- **Floating WhatsApp Widget Kontekstual**: Otomatis mendeteksi produk yang sedang dilihat dan menyusun pesan otomatis yang relevan.

---

## 3. Teknologi dan Alasannya

### Stack yang Dipakai:
- **HTML5 Native**: Satu file HTML per halaman/subfolder (`index.html`, `about/index.html`, `products/index.html`, dll). Bersih, cepat, dan 100% terbaca mesin pencari.
- **Tailwind CSS via CDN**: Satu tag script di `<head>` (`https://cdn.tailwindcss.com`) dikonfigurasi melalui `/assets/js/tailwind-config.js`.
- **Vanilla JavaScript Murni**: Tanpa framework (`navbar.js`, `i18n.js`, `rfq-form.js`, `whatsapp.js`, `catalog.js`, `main.js`).
- **Python Static Server**: Menggunakan server bawaan Python (`python3 -m http.server 8000` atau `python3 server.py`).

### Kenapa Stack Ini Dipilih?
1. **Super Ringan & Mandiri**: Tanpa proses build yang rumit. Siapa pun dapat menjalankan website ini di komputer mana pun yang memiliki Python.
2. **Keamanan Maksimal**: Tanpa database atau skrip server, tidak ada risiko serangan SQL injection atau kebocoran data.
3. **Mudah Dirawat Pemilik Usaha**: Mengedit info produk atau kontak semudah membuka file teks.

---

## 4. Cara Menjalankan

Tidak butuh build process atau dependency rumit. Cukup gunakan Python 3:

### Opsi A: Menggunakan Modul Bawaan Python (Sangat Cepat)
Buka terminal di folder proyek, lalu jalankan:
```bash
python3 -m http.server 8000
```
Buka peramban di: **`http://localhost:8000`**

### Opsi B: Menggunakan Script `server.py`
Script `server.py` telah dilengkapi header keamanan (CSP, X-Frame-Options, Cache-Control) dan penanganan URL direktori bersih:
```bash
python3 server.py
# Atau menentukan port kustom:
python3 server.py 8080
```
Untuk menghentikan server, tekan `Ctrl + C`.

---

## 5. Struktur Folder

```
export-website/
├── server.py                  # Server Python statis dengan security headers & clean URLs
├── README.md                  # Panduan lengkap developer (file ini)
├── index.html                 # Halaman Beranda (Home)
├── 404.html                   # Halaman 404 Not Found
├── robots.txt                 # Arahan crawler Google
├── sitemap.xml                # Peta situs XML SEO
├── about/
│   └── index.html             # Halaman Profil Usaha, Fasilitas & Legalitas (/about/)
├── products/
│   ├── index.html             # Katalog seluruh komoditas & filter (/products/)
│   ├── indonesian-vanilla-beans/
│   │   └── index.html         # Detail spesifikasi Biji Vanili Planifolia
│   ├── coconut-shell-briquette-charcoal/
│   │   └── index.html         # Detail spesifikasi Briket Arang Tempurung Kelapa
│   ├── indonesian-green-coffee-beans/
│   │   └── index.html         # Detail spesifikasi Biji Kopi Mentah Arabika & Robusta
│   └── indonesian-whole-cloves/
│       └── index.html         # Detail spesifikasi Cengkeh Kering Utuh Lalpari
├── logistics/
│   └── index.html             # Halaman Logistik, Incoterms & Pelabuhan Muat (/logistics/)
├── contact/
│   └── index.html             # Halaman Formulir RFQ & Kontak Meja Ekspor (/contact/)
├── privacy/
│   └── index.html             # Halaman Kebijakan Privasi Data Inkuiri (/privacy/)
└── assets/
    ├── css/
    │   └── custom.css         # CSS responsive navbar, animasi scroll reveal & print layout
    ├── js/
    │   ├── tailwind-config.js # Konfigurasi warna merek & font Tailwind CDN
    │   ├── config.js          # Konfigurasi data perusahaan (WA, email, alamat, NIB)
    │   ├── i18n.js            # Kamus dwibahasa (EN & ID) lengkap untuk semua spek produk
    │   ├── navbar.js          # Logika menu desktop horizontal & drawer hamburger mobile
    │   ├── whatsapp.js        # Link WhatsApp kontekstual & tombol melayang
    │   ├── rfq-form.js        # Form RFQ, validasi, mailto, WA dispatch, clipboard
    │   ├── catalog.js         # Filter kategori & pencarian komoditas
    │   └── main.js            # Observer scroll reveal, modal verifikasi, pemilih galeri foto
    └── img/
        ├── hero.jpg           # Foto hero pelabuhan kargo ekspor
        ├── vanilla.jpg        # Foto produk vanili gourmet
        ├── charcoal.jpg       # Foto briket arang kelapa
        ├── coffee.jpg         # Foto biji kopi mentah
        ├── cloves.jpg         # Foto cengkeh kering utuh
        └── facility.jpg       # Foto fasilitas gudang & lab mutu
```

---

## 6. Penjelasan Komponen Navbar & Responsivitas

Navbar dioptimalkan untuk standar website ekspor internasional:

### A. Perilaku Mode Desktop & Tablet ($\ge 768\text{px}$)
1. **Navigasi Horizontal Berjejer**: Menu utama (`Home`, `About Us`, `Products & Specs`, `Logistics & Shipping`, `Contact & RFQ`) tampil horizontal berdampingan dengan tipografi rapi.
2. **Bebas Hamburger Menu**: Ikon hamburger disembunyikan sepenuhnya (`display: none !important` via `#mobile-menu-btn` dan kelas `md:hidden`).
3. **Indikator Halaman Aktif**: Menu yang sedang dibuka otomatis diberi warna hijau zamrud (`text-emerald-700 font-semibold`).
4. **Tombol Bahasa & Aksi Cepat**: Tombol pengalih bahasa (`ID` / `EN`) dan tombol *"Request a Quote"* langsung dapat diklik di kanan atas.

### B. Perilaku Mode Mobile ($< 768\text{px}$)
1. **Ikon Hamburger Rapi**: Tombol hamburger dengan target sentuh $44 \times 44\text{px}$ yang nyaman dioperasikan satu tangan.
2. **Tombol Bahasa Tetap di Atas**: Tombol bahasa tidak disembunyikan di dalam menu agar pengunjung dapat beralih bahasa tanpa repot.
3. **Drawer Turun Halus**: Menu meluncur turun di atas backdrop transparan gelap, scroll halaman dikunci sementara, dan menutup otomatis saat tautan atau tombol Escape ditekan.

---

## 7. Cara Kerja Animasi Scroll Reveal

Animasi scroll diimplementasikan secara native tanpa library eksternal di `/assets/css/custom.css` dan `/assets/js/main.js`:
- Setiap elemen yang ingin dianimasikan diberi kelas `scroll-reveal` (opsional: `delay-100`, `delay-200`, `delay-300` untuk efek bertingkat).
- JavaScript menggunakan `IntersectionObserver` untuk memantau kemunculan elemen di viewport.
- Saat elemen masuk sekitar 12% dari batas bawah layar, kelas `revealed` ditambahkan, menjalankan transisi CSS `opacity: 1; transform: translateY(0);`.

---

## 8. Cara Kerja Terjemahan Bahasa Indonesia di Halaman Spesifikasi Produk

Kamus di `/assets/js/i18n.js` mencakup seluruh atribut teknis keempat produk:
- Saat tombol **ID** ditekan:
  - Judul produk, deskripsi, ringkasan komersial (*MOQ, Kapasitas Bulanan, Waktu Pengerjaan, Model Harga*), label 4 blok spesifikasi, tabel grade dan parameter laboratorium, serta tombol penawaran langsung diterjemahkan ke Bahasa Indonesia.
  - Tautan internal otomatis diperbarui dengan parameter `?lang=id`.
  - Pilihan tersimpan di `localStorage` sehingga saat buyer berpindah ke produk lain atau kembali ke beranda, bahasa yang dipilih tetap aktif.

---

## 9. Menyesuaikan Data Usaha

Untuk menyesuaikan data usaha seperti nama perusahaan, nomor WhatsApp, email, dan nomor legalitas NIB, cukup ubah nilai di `/assets/js/config.js`:
```javascript
const APP_CONFIG = {
  companyName: "PT Anurika Nusantara Agro",
  tradingName: "Anurika Nusantara Agro",
  whatsappNumber: "6281234567890",
  emailAddress: "export@nusantaracommodities.com",
  nibNumber: "1289000438192",
  // ...
};
```

Selamat mengembangkan dan semoga ekspor komoditas Indonesia semakin mendunia!
