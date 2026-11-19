import Link from "next/link";
import { t } from "@/content/site";
import type { Chapter, Lang } from "@/content/types";
import { urls } from "@/lib/urls";
import s from "./ChapterNav.module.css";

/** Previous / next chapter links at the bottom of a chapter page. */
export function ChapterNav({ prev, next, lang }: { prev?: Chapter; next?: Chapter; lang: Lang }) {
  return (
    <nav className={s.nav} aria-label={lang === "en" ? "Chapters" : "Kapitoly"}>
      {prev ? (
        <Link href={urls.chapter(lang, prev.slug)} className={s.link}>
          <span className={s.label}>← {lang === "en" ? "Previous chapter" : "Předchozí kapitola"}</span>
          <span className={s.title}>{t(prev.title, lang)}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={urls.chapter(lang, next.slug)} className={s.link} data-align="end">
          <span className={s.label}>{lang === "en" ? "Next chapter" : "Následující kapitola"} →</span>
          <span className={s.title}>{t(next.title, lang)}</span>
        </Link>
      )}
    </nav>
  );
}
