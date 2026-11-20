import { Button } from "@/components/ui/Button";
import { t } from "@/content/site";
import type { Chapter, Lang } from "@/content/types";
import { urls } from "@/lib/urls";
import s from "./ChapterNav.module.css";

/** Previous / next chapter buttons at the bottom of a chapter page. */
export function ChapterNav({ prev, next, lang }: { prev?: Chapter; next?: Chapter; lang: Lang }) {
  return (
    <nav className={s.nav} aria-label={lang === "en" ? "Chapters" : "Kapitoly"}>
      {prev ? (
        <Button href={urls.chapter(lang, prev.slug)} icon="prev" title={t(prev.title, lang)}>
          {lang === "en" ? "Previous" : "Předchozí"}
        </Button>
      ) : (
        <span />
      )}
      {next && (
        <Button href={urls.chapter(lang, next.slug)} icon="next" title={t(next.title, lang)}>
          {lang === "en" ? "Next" : "Následující"}
        </Button>
      )}
    </nav>
  );
}
