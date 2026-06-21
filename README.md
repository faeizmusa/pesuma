# Homepage PESUMA

Homepage pilot PESUMA dibina dengan Astro, Tailwind CSS dan Keystatic. Projek menggunakan Bahasa Melayu Malaysia, reka bentuk mobile-first dan adapter Cloudflare.

## Mula

```bash
npm install
npm run dev
```

- Homepage: `http://127.0.0.1:4321/`
- Keystatic CMS: `http://127.0.0.1:4321/keystatic`

## Arahan

```bash
npm run check
npm run build
npm run preview
npm run deploy
npm run deploy:pages
```

## Kandungan

Koleksi Keystatic ditakrifkan dalam `keystatic.config.ts`:

- `posts` — berita, aktiviti dan pengumuman
- `events` — program dan acara
- `resources` — pautan, borang dan sumber rujukan
- `committee` — profil jawatankuasa

Mod `local` digunakan untuk pembangunan. Sebelum editor CMS digunakan pada deployment awam, tukar storage kepada GitHub atau Keystatic Cloud dan tetapkan kelayakan persekitaran yang diperlukan.

## Deployment

`wrangler.jsonc` disediakan untuk Cloudflare Workers. Output adapter yang sama juga boleh diterbitkan melalui Cloudflare Pages menggunakan skrip `deploy:pages`.

Semak dan ganti sebelum produksi:

- domain serta canonical URL dalam `src/data/site.ts`
- alamat e-mel sekretariat
- URL rasmi ePJS jika berubah
- pautan media sosial
- logo dan aset rasmi PESUMA
- mod storage Keystatic

## Logo rasmi

Logo rasmi web disimpan sebagai `public/logo-pesuma.svg`, dengan versi PNG dan favicon khusus dalam direktori `public/`. Gunakan fail SVG untuk paparan laman dan elakkan mengubah nisbah, warna atau bentuk asal logo.
