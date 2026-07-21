# TrackFolio 📈

**TrackFolio** adalah aplikasi personal investment portfolio tracker modern dengan skema warna dark mode dan aksen hijau emerald. Aplikasi ini dirancang untuk memudahkan pemantauan portofolio investasi (Saham, Kripto, Emas, Reksa Dana) secara cerdas, cepat, dan privat.

---

## 🚀 Fitur Utama

- **Landing Page (`/`)**:
  - Hero section responsive dengan judul besar *"Track Every Investment, One Place"*, subjudul, dan 2 tombol CTA (*Mulai Gratis* & *Lihat Demo*).
  - Grid 3 kartu fitur keunggulan (Real-time tracking, Multi-aset, Privat & aman).
  - Footer dengan teks hak cipta.

- **Dashboard (`/dashboard`)**:
  - **Sidebar Navigasi**: Responsive dengan menu item *Overview*, *Transaksi*, dan *Pengaturan* (Collapsible menu hamburger di tampilan mobile).
  - **3 Kartu Ringkasan**:
    - **Total Portofolio**: Mengkalkulasi nilai total seluruh instrumen aset secara *real-time*.
    - **Return Hari Ini (Profit/Loss)**: Menampilkan persentase & nominal untung/rugi (Warna Hijau Emerald untuk Profit, Merah untuk Loss).
    - **Total Aset**: Menampilkan jumlah instrumen aset dan total modal awal.
  - **Tabel Daftar Aset**: Menampilkan minimal 5 data dummy aset awal (Bitcoin, Ethereum, Apple Inc, BBCA, Emas Antam).
  - **Modal "+ Tambah Aset"**: Modal form interaktif yang dapat ditutup dengan mengeklik luar area modal (backdrop click), tombol close (X), atau tombol ESC. Menambahkan aset baru secara *real-time* ke state tanpa reload halaman.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict typing without `any`)
- **Styling**: Tailwind CSS v4 (Dark Theme & Emerald Accent)
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: React State (`useState` / in-memory dummy data)

---

## 💻 Cara Menjalankan Project

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (v18.x atau lebih baru) dan **npm**.

### 2. Instalasi Dependensi
Jalankan perintah berikut di direktori root project:

```bash
npm install
```

### 3. Menjalankan Server Pengembang (Development Server)
```bash
npm run dev
```

Buka browser dan akses:
- **Landing Page**: [http://localhost:3000](http://localhost:3000)
- **Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

### 4. Build Production
Untuk memastikan build aplikasi berjalan lancar:
```bash
npm run build
```

---

## 📂 Struktur Folder

```
trackfolio-test-flash/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout dengan dark mode background & fonts
│   │   ├── page.tsx           # Landing Page ("/")
│   │   └── dashboard/
│   │       └── page.tsx       # Dashboard Page ("/dashboard")
│   ├── components/
│   │   ├── Navbar.tsx         # Top Navigation Landing Page
│   │   ├── Hero.tsx font      # Hero section + interactive mockup preview
│   │   ├── Features.tsx       # 3 Feature Cards Grid (Responsive)
│   │   ├── Footer.tsx         # Landing Page Footer
│   │   ├── Sidebar.tsx        # Dashboard Collapsible Sidebar & Mobile Drawer
│   │   ├── SummaryCards.tsx   # 3 Top Stats Summary Cards
│   │   ├── AssetTable.tsx     # Tabel daftar aset dengan indikator profit/loss
│   │   └── AddAssetModal.tsx  # Modal dialog form tambah aset
│   ├── types/
│   │   └── index.ts           # Interfaces & Types (Asset, Summary, FormInput)
│   ├── utils/
│   │   └── format.ts          # Helper kalkulasi & format mata uang / persentase
│   └── data/
│       └── mockData.ts        # Data dummy awal (5 aset)
├── README.md
└── package.json
```
