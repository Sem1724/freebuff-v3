// Semua isi situs ada di file ini. Halaman-halamannya membaca dari sini.
import { asset } from '../app/lib/asset'


export const site = {
  name: 'Rangga Aditama',
  role: 'Desainer grafis',
  location: 'Jakarta',
  timezone: 'Asia/Jakarta',
  email: 'halo@ranggaaditama.studio',
  available: true,
  intro:
    'Saya merancang identitas, kemasan, dan materi cetak untuk merek yang ingin terlihat jelas — bukan sekadar rapi. Sepuluh tahun kerja, masih suka hal-hal kecil.',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  marquee: ['Identitas merek', 'Kemasan', 'Tipografi', 'Editorial', 'Art direction', 'Ilustrasi'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'aurora',
    title: 'Aurora',
    client: 'Aurora Botanica',
    category: 'Identitas merek',
    year: '2026',
    cover: asset('images/aurora.jpg'),
    tint: '#efe4d8',
    summary:
      'Identitas untuk merek perawatan kulit botani yang ingin terasa seperti pagi hari, bukan seperti laboratorium.',
    role: ['Riset', 'Identitas', 'Art direction'],
    deliverables: ['Logo dan sistem identitas', 'Palet dan tipografi', 'Kemasan kaca', 'Panduan merek'],
    body: [
      'Aurora membuat serum dari bahan tumbuhan lokal. Pendirinya sudah dua tahun di lab dan enam bulan mendengar saran bahwa mereknya harus terlihat seperti merek skincare lain: putih, bersih, penuh klaim.',
      'Kami ambil arah sebaliknya. Identitasnya dibangun dari satu bentuk lembut yang berubah mengikuti cahaya, dengan palet yang dipinjam dari langit sebelum matahari terbit. Bentuk itu bergerak pelan di kemasan sekunder dan diam di botol kaca.',
      'Peluncurannya mengangkat penjualan langsung dari 400 pesanan per bulan menjadi 3.200 dalam tiga bulan, dan panduannya cukup jelas untuk dipakai tim internal tanpa saya.',
    ],
    size: 'large',
  },
  {
    slug: 'meridian',
    title: 'Meridian',
    client: 'Meridian Bank',
    category: 'Desain antarmuka',
    year: '2026',
    cover: asset('images/meridian.jpg'),
    tint: '#dbe0f5',
    summary: 'Merancang ulang aplikasi bank digital di sekitar satu pertanyaan yang benar-benar dipikirkan orang: apa saya mampu beli ini?',
    role: ['Desain antarmuka', 'Sistem desain', 'Prototipe'],
    deliverables: ['Aplikasi iOS dan Android', 'Sistem desain', 'Panduan komponen'],
    body: [
      'Meridian punya fitur untuk segalanya dan layar depan yang tidak dipahami siapa pun. Kami habiskan sebulan mewawancarai nasabah dan mendengar hal yang sama dengan kata berbeda: mereka membuka aplikasi untuk memutuskan apakah boleh belanja, dan aplikasi itu justru mempersulit.',
      'Layar depan yang baru menjawab pertanyaan itu lebih dulu, dalam satu angka, lalu menjelaskannya. Sisanya pindah ke belakang. Sistem desain kami bangun ulang di proses yang sama supaya tim bisa melanjutkan tanpa saya.',
      'Rating di toko aplikasi naik dari 3,1 ke 4,7 dalam dua rilis berikutnya.',
    ],
    size: 'small',
  },
  {
    slug: 'lipat',
    title: 'Lipat',
    client: 'Proyek mandiri',
    category: 'Tipografi',
    year: '2025',
    cover: asset('images/fold.jpg'),
    tint: '#e8e2d6',
    summary: 'Serif kontras tinggi untuk judul editorial, dengan spesimen yang dicetak tangan di atas kertas tebal.',
    role: ['Perancangan huruf', 'Cetak'],
    deliverables: ['Variable font, dua axis', 'Spesimen letterpress', 'Microsite'],
    body: [
      'Lipat mulai dari sketsa huruf S yang tidak mau duduk diam. Dua tahun kemudian ia jadi keluarga variable dua axis, dengan potongan display yang sengaja dibiarkan sedikit canggung.',
      'Spesimennya dicetak di mesin Vandercook dalam satu sore bersama seorang teman yang tahu caranya. Jejak tekan yang bisa diraba di kertas itu justru intinya.',
    ],
    size: 'small',
  },
  {
    slug: 'halcyon',
    title: 'Halcyon',
    client: 'Halcyon Interiors',
    category: 'Editorial',
    year: '2025',
    cover: asset('images/halcyon.jpg'),
    tint: '#ebe3d6',
    summary: 'Buku 180 halaman untuk studio interior yang ingin katalognya terasa seperti ruang, bukan seperti brosur properti.',
    role: ['Desain editorial', 'Tipografi', 'Produksi cetak'],
    deliverables: ['Buku 180 halaman', 'Grid dan tipografi', 'Sampul linen emboss', 'Arsip digital'],
    body: [
      'Halcyon mengerjakan empat rumah setiap tahun, semuanya dengan material yang sama: batu alam, kayu terang, plester tangan. Katalog lama mereka memotret semuanya dengan lampu kilat dan membuat semuanya terlihat serupa.',
      'Kami susun buku mengikuti cahaya, bukan mengikuti proyek. Setiap bab dimulai dengan satu foto ruang kosong, lalu detail yang lebih dekat di halaman-halaman berikutnya. Grid-nya lebar dan tenang, dengan satu jenis huruf yang bekerja di ukuran 8 sampai 72 pt.',
      'Cetakan pertama 1.500 eksemplar habis dalam dua bulan, dan versi arsipnya jadi halaman paling banyak dibuka di situs mereka.',
    ],
    size: 'large',
  },
  {
    slug: 'nocturne',
    title: 'Nocturne',
    client: 'Vela Records',
    category: 'Art direction',
    year: '2024',
    cover: asset('images/nocturne.jpg'),
    tint: '#d8d4e4',
    summary: 'Identitas visual untuk album debut yang harus bekerja sebagai sampul vinil, panggung, dan potongan empat detik di media sosial.',
    role: ['Art direction', 'Motion'],
    deliverables: ['Sampul vinil', 'Visual panggung', 'Sistem konten sosial'],
    body: [
      'Rekamannya gelap, lambat, dan anehnya hangat. Visualnya adalah cairan yang direkam makro, disinari sedemikian rupa sehingga warna hanya muncul di bagian yang kena cahaya.',
      'Rekaman yang sama diputar di belakang band saat panggung dan diulang dalam rasio sembilan-enam belas di media sosial. Satu ide, semua permukaan.',
    ],
    size: 'small',
  },
  {
    slug: 'kite',
    title: 'Kite',
    client: 'Kite Outdoors',
    category: 'Kampanye dan kemasan',
    year: '2024',
    cover: asset('images/kite.jpg'),
    tint: '#d9e6dc',
    summary: 'Kampanye dan sistem kemasan untuk merek luar ruang yang menjual lebih sedikit barang dan ingin situsnya mengatakan itu.',
    role: ['Desain grafis', 'Art direction', 'Produksi'],
    deliverables: ['Katalog kampanye', 'Label dan kemasan', 'Template email', 'Aset sosial'],
    body: [
      'Kite membuat sebelas produk. Kebanyakan situs luar ruang dibuat untuk sebelas ribu. Kami merancang katalog yang memperlakukan tiap produk seperti satu bab, dengan foto di atas warna solid supaya seluruh rangkaian terbaca sebagai satu keluarga.',
      'Sistem warnanya dipakai ulang di label, kardus, dan email tanpa perlu file baru setiap musim. Tim mereka sekarang bisa merilis kampanye sendiri dalam satu hari.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Identitas merek',
    body: 'Penamaan, logo, sistem identitas, dan panduan pemakaian. Dibuat untuk dipakai tim Anda setiap hari, bukan hanya dipuji di presentasi.',
  },
  {
    title: 'Kemasan dan cetak',
    body: 'Desain kemasan, label, brosur, dan materi cetak lain — lengkap dengan pendampingan produksi sampai hasil cetaknya sesuai pratinjau.',
  },
  {
    title: 'Editorial dan tipografi',
    body: 'Buku, katalog, laporan tahunan, dan majalah. Grid yang rapi, hierarki yang jelas, dan huruf yang dipilih karena bekerja, bukan karena tren.',
  },
  {
    title: 'Art direction',
    body: 'Arahan visual untuk kampanye, foto produk, dan konten sosial, supaya semua permukaan merek bercerita hal yang sama.',
  },
]

export const testimonials = [
  {
    quote:
      'Satu-satunya desainer yang bisa memegang merek, kemasan, dan situs sekaligus. Kami rilis dua kali lebih cepat dan hasilnya dua kali lebih rapi.',
    name: 'Lena Fischer',
    role: 'Pendiri, Aurora Botanica',
  },
  {
    quote:
      'Setiap sesi review selalu berakhir dengan kami menghapus sesuatu. Saya belum pernah bekerja dengan orang yang begitu pandai membuang.',
    name: 'Charlotte Ng',
    role: 'Head of Digital, Meridian Bank',
  },
  {
    quote:
      'Katalog kami akhirnya terasa seperti ruangan yang kami rancang. Klien menyebutnya saat rapat pertama.',
    name: 'Jonas Weber',
    role: 'Pendiri, Halcyon Interiors',
  },
]

export const experience = [
  { period: '2021 – sekarang', title: 'Independen', detail: 'Identitas, kemasan, dan editorial untuk merek lokal dan studio' },
  { period: '2018 – 2021', title: 'Art director, Fathom', detail: 'Memimpin lima desainer untuk klien ritel dan kebudayaan' },
  { period: '2015 – 2018', title: 'Desainer grafis, Halcyon Studio', detail: 'Identitas dan materi cetak untuk klien kebudayaan' },
]
