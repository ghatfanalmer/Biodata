# Vander Morder — Static Portfolio

Portofolio ini sudah disederhanakan menjadi website statis HTML, CSS, dan JavaScript. Tidak membutuhkan React, npm install, database, atau backend.

## Struktur folder

```text
Vander-Portfolio/
├── index.html       # Halaman portofolio utama
├── cv.html          # Halaman CV yang bisa dicetak / disimpan ke PDF
├── style.css        # Seluruh styling dan responsive layout
├── script.js        # Interaksi, filter, tab skill, tema, bahasa, dan form email
├── README.md
└── assets/
    ├── portrait.jpg # Foto profil yang ada pada proyek sumber
    ├── favicon.svg
    └── og.jpg       # Gambar preview saat tautan dibagikan
```

## Cara menjalankan

1. Ekstrak folder `Vander-Portfolio`.
2. Buka `index.html` dengan browser (Chrome, Edge, Firefox, atau Safari).
3. Tidak perlu instalasi dependency atau server lokal.

Bila ingin mengedit, ubah teks/data di `index.html` dan `script.js`, tampilan di `style.css`, dan gambar di folder `assets`.

## Fitur

- Tampilan responsif desktop dan ponsel.
- Mode gelap / terang dan pilihan bahasa Korea / Inggris.
- Navigasi satu halaman dengan bagian About, Experience, Projects, Skills, dan Contact.
- Filter pengalaman dan proyek, pencarian proyek, serta pengurutan.
- Tab kategori skill dan detail pencapaian.
- Form kontak membuka aplikasi email melalui `mailto:`.
- Halaman CV dengan tombol Print / Save as PDF.

Catatan: tombol detail proyek menampilkan informasi proyek di situs ini. Tautan demo eksternal tidak ditambahkan karena proyek sumber hanya menyediakan label domain, bukan alamat URL tujuan yang terverifikasi.
