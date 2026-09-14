export const WEDDING_DATE_ISO = "2026-09-20T08:30:00+07:00";

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
    date: "Minggu, 20 September 2026",
  },
  {
    title: "Walimah",
    time: "08.30 WIB — Selesai",
    date: "Minggu, 20 September 2026",
  },
];

export const venue = {
  name: "Kediaman Mempelai", // TODO: konfirmasi ini rumah mempelai pria/wanita
  location:
    "Kp. Pagedangan RT.11 RW.4, Ds. Tanjungsari, Kec. Pabuaran, Kab. Serang, Banten",
  mapsUrl: "https://maps.app.goo.gl/", // TODO: isi link Google Maps lokasi
};

export const bankAccounts = [
  { bank: "BCA", number: "0891378342", holder: "Miqdad Basalamah" },
];

export const giftAddress = {
  recipient: "Miqdad Basalamah",
  address:
    "Kp. Pagedangan RT.11 RW.4, Ds. Tanjungsari, Kec. Pabuaran, Kab. Serang, Banten",
};
