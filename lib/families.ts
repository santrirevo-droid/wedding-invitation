export type Family = {
  /** URL-safe id, e.g. /daftar-tamu/keluarga-mempelai-pria */
  slug: string;
  /** Shown on buttons and in duplicate-name warnings */
  label: string;
};

/**
 * Edit this list before sharing links with each family — one link per
 * entry (e.g. /daftar-tamu/keluarga-mempelai-pria) goes to that family only.
 * The slug in the URL is the only thing that identifies who's adding
 * names, so keep slugs unique and don't rename one after sharing its link.
 */
export const families: Family[] = [
  { slug: "keluarga-mempelai-pria", label: "Keluarga Mempelai Pria" },
  { slug: "keluarga-mempelai-wanita", label: "Keluarga Mempelai Wanita" },
  { slug: "teman-kerabat", label: "Teman & Kerabat" },
];

export function findFamily(slug: string): Family | undefined {
  return families.find((family) => family.slug === slug);
}
