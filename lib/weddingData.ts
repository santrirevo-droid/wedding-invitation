export const WEDDING_DATE_ISO = "2026-11-01T08:00:00+07:00";

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
    name: "Saiful Amri Tanjung",
    shortName: "Saiful",
    role: "putra",
    father: "Bapak [Nama Ayah]", // TODO: isi nama ayah
    mother: "Ibu [Nama Ibu]", // TODO: isi nama ibu
    instagram: "@username", // TODO: isi/instagram opsional
  },
  bride: {
    name: "Nufus Nurcholisoh",
    shortName: "Nufus",
    role: "putri",
    father: "Bapak [Nama Ayah]", // TODO: isi nama ayah
    mother: "Ibu [Nama Ibu]", // TODO: isi nama ibu
    instagram: "@username", // TODO: isi/instagram opsional
  },
};

export const events = [
  {
    title: "Akad Nikah",
    time: "08.00 WIB — Selesai", // TODO: konfirmasi jam pastinya
    date: "Minggu, 01 November 2026",
  },
  {
    title: "Resepsi",
    time: "12.00 WIB — 17.00 WIB", // TODO: konfirmasi jam pastinya
    date: "Minggu, 01 November 2026",
  },
];

export const venue = {
  name: "Kediaman Mempelai Wanita",
  location: "Pandeglang, Banten",
  mapsUrl: "https://maps.app.goo.gl/", // TODO: isi link Google Maps lokasi
};

export const bankAccounts = [
  { bank: "BCA", number: "7003007539", holder: "Saiful Amri Tanjung" },
];

export const giftAddress = {
  recipient: "Saiful Amri Tanjung",
  address: "Alamat lengkap penerima hadiah", // TODO: isi alamat pengiriman kado
};
