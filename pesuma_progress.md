# Rekod Kemajuan Laman Web PESUMA

Dokumen ini ialah rujukan utama bagi keputusan produk, reka bentuk, struktur teknikal dan gerak kerja projek laman web PESUMA.

**Kemas kini terakhir:** 21 Jun 2026  
**Lokasi projek:** `/Users/faeiz/Desktop/pesuma`

## 1. Identiti rasmi

- Nama penuh: **Pertubuhan Gabungan Pesuruhjaya Sumpah Malaysia**
- Singkatan: **PESUMA**
- Tagline: **Berkhidmat Berintegriti**
- Kedudukan organisasi: persatuan dan platform profesional untuk komuniti Pesuruhjaya Sumpah Malaysia.
- PESUMA tidak boleh digambarkan sebagai portal rasmi kerajaan.
- Maklumat rasmi berkaitan pelantikan, status, direktori, undang-undang dan peraturan hendaklah dirujuk kepada ePJS atau pihak berkuasa berkaitan.

### Logo

Logo rasmi PESUMA 2025 telah digunakan pada header, footer, metadata organisasi dan favicon.

Aset dalam projek:

- `public/logo-pesuma.svg` — sumber vektor rasmi
- `public/logo-pesuma.png` — paparan web utama (155KB — perlu dioptimumkan)
- `public/favicon.svg`
- `public/favicon-32.png`
- `public/favicon-48.png`
- `public/apple-touch-icon.png`

PNG digunakan untuk paparan berulang dalam halaman kerana SVG rasmi sangat kompleks dan lebih berat untuk dirender. SVG dikekalkan sebagai sumber rasmi dan favicon.

**Keputusan reka bentuk:** Logo PESUMA tidak lagi digunakan sebagai watermark/gambar placeholder di seluruh halaman. Penggunaan logo dihadkan kepada header, footer, dan panel hero kanan sahaja. Tempat letak gambar (placeholder) menggunakan komponen geometrik abstrak `VisualPlaceholder.astro`.

## 2. Teknologi

- Astro `5.18.2`
- Tailwind CSS `4.3.1`
- Keystatic Astro `5.1.0`
- Keystatic Core `0.5.50`
- Cloudflare adapter `12.6.13`
- React digunakan hanya untuk keperluan Keystatic
- Sasaran deployment: Cloudflare Workers atau Cloudflare Pages

Astro 5 digunakan kerana kombinasi ini stabil dengan Keystatic dan adapter Cloudflare. Percubaan Astro 6 sebelum ini mempunyai konflik dependency optimization dan virtual Keystatic config.

## 3. Arah tema semasa

Tema terdahulu yang mempunyai ilustrasi kartun, ikon berpetak, warna kuning terang dan terlalu banyak kad telah digantikan.

Arah visual rasmi sekarang:

> **Institutional Editorial Premium**

Matlamatnya ialah menjadikan PESUMA kelihatan seperti sebuah persatuan profesional nasional yang established, berintegriti dan kontemporari—bukan portal kerajaan, firma guaman atau template startup.

### Prinsip visual

- Deep navy sebagai warna dominan
- Muted gold sebagai aksen terkawal
- Warm ivory bagi latar cerah
- Tipografi serif editorial untuk tajuk utama
- Sans-serif moden untuk navigasi dan kandungan
- Garis pemisah halus dan ruang putih yang luas
- Radius sangat minimum
- Shadow digunakan secara terhad
- Kurangkan pendekatan "card everywhere"
- Logo rasmi digunakan sebagai insignia — bukan sebagai placeholder/watermark berulang
- Foto sebenar PESUMA akan menggantikan placeholder apabila aset tersedia
- Placeholder semasa: komponen geometrik abstrak `VisualPlaceholder.astro` dengan circles, diamond, line accent dan watermark "PESUMA" halus

### Palet semasa

```text
Navy 950    #050D1C
Navy 900    #08162C
Navy 800    #0E2240
Navy 700    #18365D
Muted Gold  #C7A449
Dark Gold   #A98532
Champagne   #DCC88E
Warm Ivory  #F7F5EF
```

### Tipografi

- Tajuk: system editorial serif stack seperti Iowan Old Style dan Baskerville
- Kandungan/UI: Inter atau system sans-serif
- Tiada webfont berat dimuatkan buat masa ini bagi menjaga prestasi

### Design token (Tambah baharu — 21 Jun 2026)

Sistem design token diperkenalkan dalam `@theme` di `global.css`:

| Token | Nilai | Tujuan |
|---|---|---|
| `--radius-xs` | 1px | Minimum |
| `--radius-sm` | 2px | Button, card |
| `--radius-md` | 4px | Optional |
| `--radius-full` | 9999px | Circle |
| `--transition-fast` | 150ms ease | Hover/active |
| `--transition-base` | 250ms ease | Panel |
| `--transition-slow` | 350ms ease | Modal |
| `--icon-size` | 18px | Default icon |
| `--icon-stroke` | 1.8 | Default stroke |
| `--ring-width` | 2px | Focus ring |

### Komponen utiliti baharu (21 Jun 2026)

Dua komponen utiliti CSS baharu:

- `.link-arrow` — gaya paun seragam dengan anak panah (navy → gold-500)
- `.link-arrow\:light` — sama, dalam versi cerah (slate-200 → gold-300)

### Penambahbaikan global CSS lain

- Fokus ring: `ring-3` → `ring-2` (lebih kurang mengganggu)
- `::selection`: opacity 100% → 70% (kurang agresif)
- Button: tambah `transition-all` dengan `duration-[var(--transition-fast)]`
- Card: guna `var(--transition-base)` dan hover border lebih halus

## 4. Homepage yang telah siap

Homepage telah direka dan dibina semula sepenuhnya dengan:

1. Header navy premium dan logo rasmi
2. Hero editorial dengan insignia PESUMA
3. Jalur nilai utama
4. Quick links dalam format indeks editorial
5. Pengenalan PESUMA
6. Laluan pengguna mengikut audiens
7. Manfaat keahlian
8. Berita dan aktiviti dengan artikel utama
9. Program pembangunan profesional pilihan
10. Sumber dan rujukan penting
11. CTA rasmi ke portal ePJS
12. Kedai PESUMA
13. CTA akhir keahlian
14. Footer institusi

### Perubahan reka bentuk terkini (21 Jun 2026)

- **Hero:** Watermark logo digantikan dengan bulatan geometri subtle (tidak perlu loading imej heavy)
- **Tentang PESUMA:** Bingkai logo digantikan dengan `VisualPlaceholder` variant cream
- **Berita:** Setiap artikel guna `VisualPlaceholder` variant navy dengan label kategori automatik
- **Kedai PESUMA:** Icon berbeza (star/book/bag) digantikan dengan `VisualPlaceholder` variant cream
- **CTA akhir:** Watermark logo besar (155KB) digantikan dengan pattern geometri ringan (CSS sahaja)
- **Saiz icon konsisten:** Semua icon guna default 18px/1.8 stroke — tiada lagi ad hoc size
- **Link arrows:** Semua "Baca Lanjut", "Kenali PESUMA" etc. guna class `.link-arrow` seragam

Fail utama:

- `src/pages/index.astro`
- `src/styles/global.css`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Logo.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/VisualPlaceholder.astro` — **Tambah baharu**

## 5. SEO dan accessibility

Telah dilaksanakan:

- Satu `h1` sahaja
- Hierarki heading semantik
- Semantic HTML
- Skip-to-content link
- Focus state yang jelas
- Navigasi mudah alih accessible
- Sokongan Escape untuk menutup menu
- `aria-expanded` dan label buka/tutup menu
- Title dan meta description
- Canonical URL
- Open Graph
- Twitter Card
- Organization JSON-LD
- Logo rasmi dalam Organization schema
- Favicon dan Apple Touch Icon
- Bahasa dokumen `ms-MY`
- Sokongan `prefers-reduced-motion`

### Penambahbaikan terkini (21 Jun 2026)

- Focus ring dikurangkan: `ring-3` → `ring-2` dengan `ring-offset-2` (kurang visual noise)
- `::selection` dikurangkan ke 70% opacity (kurang mengganggu)
- Semua imej logo di hero dan mengenai menggunakan `loading="eager"` untuk LCP
- Menu icon menggunakan default size 18px yang lebih seimbang

## 6. Keystatic CMS

Dashboard tersedia semasa development di:

```text
/keystatic
```

Koleksi semasa:

- `posts`
- `events`
- `resources`
- `committee`

Kandungan contoh:

- 3 artikel berita
- 1 acara pilihan

Storage masih menggunakan mod `local`. Sebelum produksi, ia perlu ditukar kepada GitHub atau Keystatic Cloud dan akses editor perlu ditetapkan.

## 7. Keputusan sistem jawatankuasa

### Struktur kandungan

Jawatankuasa akan diuruskan berdasarkan **penggal kepimpinan**, bukan sebagai satu senarai rata.

Halaman utama `/jawatankuasa/` akan mengutamakan:

1. Penggal semasa
2. Fokus atau amanat kepimpinan
3. Kepimpinan utama
4. Senarai penuh jawatankuasa semasa
5. Pencapaian dan inisiatif penggal semasa
6. Pautan arkib penggal terdahulu

### Halaman individu

- Setiap ahli jawatankuasa **semasa** boleh mempunyai halaman biodata individu.
- Contoh URL: `/jawatankuasa/nama-ahli/`
- Jawatankuasa terdahulu tidak memerlukan halaman individu.
- Jawatankuasa terdahulu hanya dipaparkan sebagai arkib mengikut penggal.

### Pencapaian penggal

Pencapaian tidak akan ditulis sebagai tuntutan statik pada profil jawatankuasa. Ia akan disokong oleh artikel berita.

Medan artikel yang dicadangkan:

- `relatedCommitteeTerm`
- `isAchievement`
- `achievementCategory`
- `featuredAchievement`
- `outcomeSummary`

Artikel yang ditandakan akan dipaparkan secara automatik pada seksyen **Pencapaian & Inisiatif Penggal Semasa**.

### Data yang masih diperlukan

Maklumat penggal:

- Nama penggal
- Tarikh mula dan tamat
- Tema atau fokus
- Amanat Presiden, jika ada
- Foto berkumpulan, jika ada

Setiap ahli semasa:

- Nama penuh rasmi
- Jawatan
- Kumpulan jawatan
- Susunan paparan
- Foto potret
- Biodata ringkas

Maklumat tambahan yang digalakkan:

- Negeri atau kawasan
- Tahun mula dilantik sebagai Pesuruhjaya Sumpah
- Pengalaman atau bidang tumpuan
- Jawatan biro
- Petikan atau prinsip profesional
- E-mel rasmi atau pautan profesional jika sesuai untuk paparan awam

Format foto pilihan:

- Nisbah `4:5`
- Minimum `800 × 1000px`
- JPG, PNG atau WebP
- Crop dan gaya yang konsisten

## 8. Status verifikasi

Telah diuji:

- `npm run build`
- Astro check: **0 ralat, 0 amaran, 0 hint**
- Desktop 1280px
- Mobile 390px
- Tiada horizontal overflow
- Menu mudah alih buka dan tutup dengan betul
- Tiada browser console error
- Dashboard Keystatic boleh dibuka

Build menghasilkan amaran saiz chunk untuk halaman pentadbir Keystatic. Ini tidak menjejaskan bundle homepage awam dan boleh dinilai semula apabila konfigurasi CMS produksi dibuat.

## 9. Perubahan reka bentuk terkini (21 Jun 2026)

### Sistem Typescale

**Masalah sebelum ini:** Heading terlalu besar menyebabkan:
- Hero h1: 86px / leading-0.98 — descender huruf (g, j, p, q, y) tergunting
- Hero kelihatan "cut off" di desktop kerana heading menguasai skrin
- Tiada sistem — saiz campur aduk (`text-[5.4rem]`, `text-7xl`, `text-[5rem]`)
- Leading di bawah 1.0 menyebabkan teks nampak sesak

**Perubahan:** Sistem typescale 4-tier diperkenalkan dalam `@theme`:

| Tier | Token | Mobile | Tablet | Desktop | Leading | Guna |
|------|-------|--------|--------|---------|---------|------|
| Display | `--text-display-*` | 40px | 52px | **64px** | 1.05 | Hero h1 sahaja |
| H1 | `--text-h1-*` | 36px | 44px | **52px** | 1.08 | Page title (Mengenai) |
| H2 | `--text-h2-*` | 30px | 36px | **44px** | 1.12 | Section title, CTA |
| H3 | `--text-h3-*` | 24px | 28px | — | 1.2 | Sub-section |

**Perubahan heading di halaman:**

| Halaman | Sekarang | Selepas |
|---------|----------|---------|
| Hero h1 | 86px / leading-0.98 | **64px / leading-1.05** |
| Mengenai h1 | 80px / leading-1.02 | **52px / leading-1.08** |
| Section title (.section-title) | 56px / leading-1.08 | **44px / leading-1.12** |
| Audiences/Program/Komitmen h2 | 48px | **36px** |
| CTA akhir h2 | 72px | **44px** |

### Sistem Placeholder Visual

**Masalah sebelum ini:** Logo PESUMA (155KB PNG) digunakan sebagai:
- Watermark di hero
- Gambar placeholder untuk artikel berita
- Bingkai logo di section "Tentang" dan "Mengenai"
- Watermark besar di CTA akhir

**Perubahan:** Komponen `src/components/VisualPlaceholder.astro` dicipta:
- Pattern geometrik abstrak (circles, diamond, line accent, "PESUMA" watermark halus)
- 5 variant warna: `navy`, `gold`, `cream`, `white`
- 3 aspect ratio: `square`, `wide`, `tall`
- Label kategori automatik (contoh: "Berita", "Program")
- Ringan — CSS sahaja, tiada muat turun imej
- Boleh diguna semula untuk semua section yang perlukan placeholder

### Sistem Icon

**Masalah sebelum ini:**
- Default size 24px terlalu besar untuk inline links
- Icon size tidak konsisten (ada 15, 16, 17, 18, 24, 36px)
- Ada stroke-width guna 1.3 (Kedai section)
- Icon paths tidak dalam susunan abjad

**Perubahan:**
- Default size ditukar ke **18px** (lebih sesuai untuk UI)
- Default stroke kekal 1.8
- Semua explicit `size={17}` dan `size={15}` digantikan dengan default
- Paths disusun abjad, icon missing (check, clock, close) dipindah ke posisi betul

### Konsistensi Interaksi

- Semua link hover guna `transition-colors duration-[var(--transition-fast)]`
- Arrow pada link guna `transition-transform` dengan `group-hover:translate-x-1`
- Button guna `transition-all` dengan shadow pada hover
- Kelas `.link-arrow` menyatukan semua gaya "baca lanjut" style links

### Item tidak disentuh (sengaja dikekalkan)

- `Header.astro` — menu, navigasi, mobile drawer tidak diubah
- `Footer.astro` — hanya saiz icon mail dirapikan
- `Logo.astro` — tidak diubah
- `BaseLayout.astro` — tidak diubah
- `data/site.ts` — tidak diubah
- `keystatic.config.ts` — tidak diubah

### Pembaikan teknikal

**`npm run dev` tidak berfungsi:**
- Punca: `node_modules` corrupt — pakej `@tailwindcss/vite` gagal import native binary
- Penyelesaian: `rm -rf node_modules package-lock.json && npm install`
- Create direktori `src/content/resources/` dan `src/content/committee/` yang missing

## 10. Kerja seterusnya yang dicadangkan

### Halaman Mengenai PESUMA

Halaman `/mengenai/` telah dibina berdasarkan fakta daripada halaman lama `pesuma.com.my/tentang-kami/`, dengan copywriting dan susun atur baharu mengikut tema Institutional Editorial Premium.

Kandungan yang dibawa dan diperkemas:

- Peranan PESUMA sebagai wadah profesional dan kebajikan
- Lapan matlamat pertubuhan
- Sejarah daripada PPJSWPSB kepada PESUMA
- Konvensyen 2023 di Hotel Tenera, Bangi
- Kunjungan dan hubungan institusi pada 2024
- CTA ke jawatankuasa dan keahlian

Perubahan terkini pada halaman mengenai (21 Jun 2026):
- Hero: watermark logo digantikan dengan pattern geometrik
- Siapa Kami: placeholder logo digantikan dengan VisualPlaceholder
- CTA akhir: watermark logo digantikan dengan pattern geometrik
- Smart quotes digantikan dengan straight quotes untuk konsistensi rendering

Bahagian lagu rasmi tidak dimasukkan mengikut keputusan projek.

### Keutamaan tinggi

1. Bina sistem penggal dan halaman jawatankuasa.
2. Masukkan data serta foto jawatankuasa semasa.
3. Bina halaman biodata individu jawatankuasa semasa.
4. Bina arkib ringkas jawatankuasa terdahulu.
5. Hubungkan artikel pencapaian kepada penggal.
6. Gantikan placeholder dengan foto program PESUMA sebenar.

### Halaman kandungan

1. Keahlian dan pendaftaran
2. Berita dan artikel
3. Program dan acara
4. Sumber dan rujukan
5. Hubungi PESUMA
6. Kedai PESUMA
7. Dasar Privasi
8. Terma Penggunaan
9. Penafian

Pautan ke halaman ini sudah wujud pada homepage tetapi kebanyakan halaman dalaman masih belum dibina.

### Sebelum produksi

1. Sahkan domain canonical.
2. Sahkan e-mel, alamat dan media sosial rasmi.
3. Sahkan URL ePJS.
4. Konfigurasi Keystatic production storage.
5. Tambah sitemap dan robots.txt.
6. Tambah analytics dan Search Console.
7. Audit accessibility dan Core Web Vitals.
8. Optimumkan semua foto sebenar.
9. Optimumkan saiz `logo-pesuma.png` (155KB) dan `favicon.svg` (153KB).
10. Uji deployment Cloudflare.

## 11. Senarai komponen

| Komponen | Lokasi | Status |
|---|---|---|
| BaseLayout | `src/layouts/BaseLayout.astro` | Stabil |
| Header | `src/components/Header.astro` | Stabil |
| Footer | `src/components/Footer.astro` | Stabil |
| Logo | `src/components/Logo.astro` | Stabil |
| Icon | `src/components/Icon.astro` | **Diperkemas** (default 18px, paths abjad) |
| VisualPlaceholder | `src/components/VisualPlaceholder.astro` | **Tambah baharu** |
| Homepage | `src/pages/index.astro` | **Diperkemas** (placeholder, icon, konsistensi) |
| Mengenai | `src/pages/mengenai/index.astro` | **Diperkemas** (placeholder, pattern geometric) |

## 12. Struktur Halaman & Komponen

| Komponen | Lokasi | Status |
|---|---|---|
| BaseLayout | `src/layouts/BaseLayout.astro` | Stabil |
| Header | `src/components/Header.astro` | Stabil |
| Footer | `src/components/Footer.astro` | Stabil |
| Logo | `src/components/Logo.astro` | Stabil |
| Icon | `src/components/Icon.astro` | Diperkemas (default 18px, paths abjad) |
| VisualPlaceholder | `src/components/VisualPlaceholder.astro` | Stabil |
| CommitteeMemberCard | `src/components/CommitteeMemberCard.astro` | **Tambah baharu** |
| Homepage | `src/pages/index.astro` | Diperkemas |
| Mengenai | `src/pages/mengenai/index.astro` | Diperkemas |
| Jawatankuasa | `src/pages/jawatankuasa/index.astro` | **Tambah baharu** |
| Ahli individu | `src/pages/jawatankuasa/[slug].astro` | **Tambah baharu** (18 halaman) |

## 13. Sistem Jawatankuasa (Tambah baharu — 21 Jun 2026)

### Koleksi Keystatic

**`terms`** — Penggal kepimpinan:
- `name`, `termName`, `startDate`, `endDate`, `isCurrent`, `theme`, `presidentMessage`, `groupPhoto`

**`committee`** — Ahli jawatankuasa (koleksi sedia ada, diperkemas):
- Medan wajib: `name`, `position`, `positionGroup`, `displayOrder`, `term`, `photo`
- Medan digalakkan: `bio`, `state`, `yearAppointed`, `quote`, `email`
- Medan pilihan: `experience`, `bureauRole`, `linkedin`

### Position Groups (6 Kategori)

| Kumpulan | Contoh | Kad |
|----------|--------|-----|
| Kepimpinan Utama | Presiden, Timb. Presiden, Setiausaha, Bendahari | Featured (col-span) |
| Majlis Tertinggi | Pen. Setiausaha, Pen. Bendahari | Standard |
| Ketua Biro | 8 biro | Standard |
| Ahli Jawatankuasa | AJK Sarawak, Sabah | Standard |
| Pemeriksa Kira-kira | 2 pemeriksa | Small grid |
| Penasihat | — | Small grid |

### Ahli Jawatankuasa Semasa (18 ahli)

| # | Nama | Jawatan | Kumpulan |
|---|------|---------|----------|
| 1 | Dora binti Ahmad | Presiden | Kepimpinan Utama |
| 2 | Dato Seri Pua Chee Wei | Naib Presiden | Kepimpinan Utama |
| 3 | Nur Siti Munirah binti Mohd Ambiah | Setiausaha Agung | Kepimpinan Utama |
| 4 | Roslina binti Romeli | Bendahari | Kepimpinan Utama |
| 5 | Tulasimani A/P Muniaswaran | Penolong Setiausaha | Majlis Tertinggi |
| 6 | Nikmatul Fariha binti Mohd Jafri | Penolong Bendahari | Majlis Tertinggi |
| 7 | Mahani binti Ishak @ Jaafar | Pemeriksa Kira-Kira 1 | Pemeriksa Kira-kira |
| 8 | Hjh Rafidah binti Hj Zainal Abidin | Pemeriksa Kira-Kira 2 | Pemeriksa Kira-kira |
| 9 | Mansur Ussaimi bin Mohd Salleh | Ketua Biro Undang-Undang | Ketua Biro |
| 10 | Muhammad Farhan bin Zulkifli | Ketua Biro Perhubungan & Jaringan | Ketua Biro |
| 11 | Siti Mazlifah binti Ahmad Zawawi | Ketua Biro Kebajikan & Sosial | Ketua Biro |
| 12 | Mohd Abdul Wahab bin Abdullah | Ketua Biro Aduan & Integriti | Ketua Biro |
| 13 | Aliza binti Zakaria | Ketua Biro Latihan & Profesionalisme | Ketua Biro |
| 14 | Eliana binti Elias | Ketua Biro Publisiti & Komunikasi | Ketua Biro |
| 15 | Mohd Husni bin Zulkafli | Ketua Biro Sukan & Rekreasi | Ketua Biro |
| 16 | Faeiz bin Musa | Ketua Biro Teknologi & Transformasi Digital | Ketua Biro |
| 17 | Simon Engka Anak Crown | AJK Khas PESUMA Sarawak | Ahli Jawatankuasa |
| 18 | Daniel Nicholas Yap Gin Kon | AJK Khas PESUMA Sabah | Ahli Jawatankuasa |

### Halaman

- `/jawatankuasa/` — Halaman utama: Hero, Amanat Presiden, senarai lengkap mengikut kumpulan jawatan
- `/jawatankuasa/[nama-ahli]/` — Biodata individu dengan foto, maklumat peribadi, petikan & e-mel

### Pencapaian Penggal

Artikel berita boleh ditandakan sebagai pencapaian penggal melalui medan:
- `relatedTerm` — slug penggal
- `isAchievement` — checkbox

Artikel yang ditandakan akan dipaparkan di halaman jawatankuasa (akan dibina kemudian).

### Fail Utama Sistem Jawatankuasa

- `keystatic.config.ts` — Koleksi `terms` & `committee` diperkemas
- `src/lib/committee.ts` — Utiliti baca data (getCurrentTerm, getCurrentMembers, getMemberBySlug, dll)
- `src/components/CommitteeMemberCard.astro` — Kad ahli untuk grid
- `src/pages/jawatankuasa/index.astro` — Halaman utama
- `src/pages/jawatankuasa/[slug].astro` — Halaman individu
- `src/content/terms/penggal-2025-2027.yaml` — Data penggal semasa
- `src/content/committee/*.yaml` — 18 fail data ahli

### Data Belum Lengkap
- Foto potret ahli (semua guna placeholder VisualPlaceholder buat masa ini)
- Nama fail gambar dalam folder `public/images/committee/` belum wujud
- Pencapaian penggal (akan diisi melalui artikel berita)

## Arahan pembangunan

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Deployment:

```bash
npm run deploy
npm run deploy:pages
```

## 14. Pengajaran & Peraturan Pembangunan

### Kesilapan yang telah berlaku dan perlu dielakkan:

1. **Tailwind v4: Jangan guna `var()` dalam `text-[...]`** — Tailwind v4 tidak boleh bezakan sama ada `text-[var(--x)]` untuk font-size atau color. Akibatnya, ia treat sebagai **color**, bukan font-size. Guna **nilai terus** (contoh: `text-[2.5rem]`) bukan `text-[var(--text-display)]`.

2. **Selepas setiap perubahan, WAJIB jalan:**
   ```bash
   npm run check    # Astro check — 0 errors, 0 warnings, 0 hints
   npm run build    # Build mesti berjaya
   npm run dev      # Tengok dengan mata sendiri
   ```

3. **Jangan ubah `node_modules` atau `package-lock.json` tanpa perlu** — `npm install` fresh adalah langkah terakhir, bukan pertama.

4. **Jangan guna `pkill -f "node"`** — ia boleh bunuh proses sistem lain. Guna `pkill -f "astro dev"` yang lebih spesifik.

5. **Sebarang perubahan visual mesti diverifikasi di browser** — build passing saja belum cukup.

## 13. Nota status Git

Pada 21 Jun 2026, perubahan logo rasmi dan redesign premium masih berada dalam working tree dan belum direkodkan sebagai commit oleh Codex. Semak `git status` sebelum membuat commit atau memulakan perubahan besar seterusnya.

**Perubahan terkini (21 Jun 2026):**
- `src/components/VisualPlaceholder.astro` — komponen baru
- `src/styles/global.css` — design token, refined buttons/links
- `src/components/Icon.astro` — default size 24→18px, paths abjad
- `src/pages/index.astro` — logo watermark→VisualPlaceholder, icon sizes, konsistensi
- `src/pages/mengenai/index.astro` — logo watermark→VisualPlaceholder, pattern geometric
- `keystatic.config.ts` — tidak diubah
- `package.json` / `package-lock.json` — dibina semula (fresh install)
