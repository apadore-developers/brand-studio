import type { Lang } from "@/content/types";

export const urls = {
  home: (lang: Lang) => `/${lang}`,
  chapter: (lang: Lang, slug: string) => `/${lang}/${slug}`,
};
