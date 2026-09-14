// TODO: tanggal pernikahan belum dikonfirmasi — WEDDING_DATE_ISO di bawah
// masih tanggal placeholder supaya countdown & kalender tidak error. Ganti
// begitu tanggal pastinya ada (jam sudah pasti: 08.30 WIB).
export const WEDDING_DATE_ISO = "2026-12-01T08:30:00+07:00";

export type CoupleRole = "putra" | "putri";

export const couple: Record<
  "groom" | "bride",
  {
    name: string;
    shortName: string;
    role: CoupleRole;
    father: string;
    mother: string;
    instagram: string;
  }
> = {
  groom: {
    name: "Miqdad Basalamah",
    shortName: "Miqdad",
    role: "putra",
    father: "Bapak Taofik Hs",
    mother: "Ibu Nahiyah",
    instagram: "@username", // TODO: isi/instagram opsional
  },
  bride: {
    name: "Ismawati",
    shortName: "Ismawati",
    role: "putri",
    father: "Bapak Ahmad",
    mother: "Ibu Junenah",
    instagram: "@username", // TODO: isi/instagram opsional
  },
};

export const events = [
  {
    title: "Akad Nikah",
    time: "08.30 WIB — Selesai",
    date: "TODO: tanggal belum dikonfirmasi", // TODO: isi tanggal pasti
  },
  {
    title: "Walimah",
    time: "08.30 WIB — Selesai",
    date: "TODO: tanggal belum dikonfirmasi", // TODO: isi tanggal pasti
  },
];

export const venue = {
  name: "Kediaman Mempelai", // TODO: konfirmasi ini rumah mempelai pria/wanita
  location:
    "Kp. Pagedangan RT.11 RW.4, Ds. Tanjungsari, Kec. Pabuaran, Kab. Serang, Banten",
  mapsUrl: "https://maps.app.goo.gl/", // TODO: isi link Google Maps lokasi
};

export const bankAccounts = [
  { bank: "TODO: nama bank/e-wallet", number: "0891378342", holder: "Miqdad Basalamah" },
];

export const giftAddress = {
  recipient: "Miqdad Basalamah",
  address:
    "Kp. Pagedangan RT.11 RW.4, Ds. Tanjungsari, Kec. Pabuaran, Kab. Serang, Banten",
};
