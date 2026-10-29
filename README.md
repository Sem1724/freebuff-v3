# Portofolio Desainer Grafis

Situs portofolio (Vite + React + Tailwind) dengan preloader, animasi, grid karya, dan halaman studi kasus.

## Jalankan lokal

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di dist/
```

## Deploy ke GitHub Pages

1. Buat repo baru di GitHub, lalu push seluruh isi folder ini ke branch `main`.
2. Di repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Setiap push ke `main` akan membangun dan menerbitkan situs otomatis
   (cek tab **Actions**). Alamatnya: `https://<username>.github.io/<nama-repo>/`.

Path (`/<nama-repo>/`) diatur otomatis oleh workflow. Jika repo bernama
`<username>.github.io` atau memakai domain sendiri, situs tampil di root.

## Mengubah isi

`src/data/site.ts` berisi seluruh teks situs (nama, proyek, layanan, testimoni, kontak).
Gambar ada di `public/images`.

## Form kontak

GitHub Pages tidak punya server, jadi:

- **Default:** tombol Kirim membuka aplikasi email pengunjung dengan pesan terisi.
- **Kirim langsung (opsional):** buat form di [Formspree](https://formspree.io), lalu di repo buka
  **Settings → Secrets and variables → Actions → Variables** dan tambahkan
  `VITE_FORM_ENDPOINT` berisi URL form Anda. Build berikutnya otomatis memakainya.
