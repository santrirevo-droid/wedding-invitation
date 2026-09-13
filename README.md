Undangan pernikahan digital — Next.js. Diduplikat dari template undangan sebelumnya dan sudah dibersihkan dari data pasangan asal; isi placeholder di bawah sebelum dipakai.

## Checklist sebelum dipakai

- [ ] `lib/weddingData.ts` — nama pasangan, orang tua, Instagram, tanggal & jam acara, venue, rekening, alamat kado.
- [ ] `lib/families.ts` — daftar keluarga untuk halaman `/daftar-tamu` (slug + label).
- [ ] `components/Persiapan/defaultData.ts` — isi awal dashboard `/persiapan` (checklist, rundown, budget) masih generik; sunting atau langsung edit dari halaman setelah deploy.
- [ ] `public/music/` — tambahkan file lagu sendiri sebagai `wedding-song.m4a` (dihapus dari duplikat ini karena berhak cipta/personal ke pasangan asal).
- [ ] `app/icon.png`, `app/apple-icon.png` & `public/floral/monogram-crest.png` — masih placeholder ampersand generik; ganti dengan monogram sendiri jika perlu.
- [ ] Foto-foto di `public/` (bila ditambahkan nanti) dan galeri — belum ada, tambahkan sesuai kebutuhan.
- [ ] ⚠️ Font "TT Fors" (`assets/fonts/tt-fors/`, dipakai untuk handle Instagram) adalah trial font dengan klausul lisensi *no public site* — sudah dipakai di situs undangan sebelumnya atas keputusan sadar pemilik situs tersebut. Menjalankan situs kedua ini secara publik dengan font yang sama memperluas risiko lisensi itu; pertimbangkan ganti font lain atau beli lisensinya sebelum situs ini live.
- [ ] Password edit `/persiapan/itinerary` masih default `"0000"` (lihat `components/Persiapan/Itinerary.tsx`) — ganti bila perlu keamanan lebih.
- [ ] Backend (Redis/KV untuk fitur Wishes & Daftar Tamu) belum disambungkan — lihat bagian **Environment variables** di bawah.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Daftar Tamu (guest list collection)

`/daftar-tamu` lets each family add the names of guests they want invited,
with a live "similar name" check (`/api/guest-list/search`) so two families
don't independently add the same person without noticing.

- Edit `lib/families.ts` to set the family names/links before sharing —
  each family gets its own URL (`/daftar-tamu/<slug>`) and only sees its
  own entries; nothing else identifies who is submitting.
- `/daftar-tamu/rekap` is a read-only combined view: every family's list,
  total counts, and clusters of likely-duplicate names. No password — same
  as the wishes/RSVP list below, it's a small private tool shared only
  within the family, not a public page. Deleting an entry still only works
  from the family's own `/daftar-tamu/<slug>` page.
- Storage reuses the same Redis/KV store as the wishes feature below — no
  extra provisioning needed.

## Environment variables

Set these in Vercel → Project Settings → Environment Variables (a `.env.local` file works for local dev too, `.env*` is already gitignored):

| Variable | Required for | Notes |
| --- | --- | --- |
| `KV_REST_API_URL` / `UPSTASH_REDIS_REST_URL` | Wishes, Daftar Tamu | Auto-filled when you attach a Redis/KV store from Vercel's Storage tab — support both names since Vercel injects one or the other depending on how the store was attached. |
| `KV_REST_API_TOKEN` / `UPSTASH_REDIS_REST_TOKEN` | Wishes, Daftar Tamu | Same as above. |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
