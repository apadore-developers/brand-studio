import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { t } from "@/content/site";
import type { Chapter, Lang } from "@/content/types";
import { urls } from "@/lib/urls";
import s from "./ChapterGrid.module.css";

function Cover({ kind }: { kind: Chapter["cover"] }) {
  switch (kind) {
    case "logo":
      return <Logo className={s.coverLogo} />;
    case "intro":
      return <Logo mark className={s.coverMark} />;
    case "colors":
      return (
        <div className={s.coverColors}>
          <span data-c="navy" /><span data-c="white" /><span data-c="grey" />
        </div>
      );
    case "type":
      return <span className={s.coverType}>Aa</span>;
    case "gradient":
      return <span className={s.coverGlass}>přechod</span>;
    case "images":
      return <div className={s.coverImages}><span /><span /><span /><span /></div>;
    case "social":
      return <span className={s.coverQuote}>„Citát“</span>;
    case "blog":
      return <span className={s.coverGlass}>obálka</span>;
    default:
      return <span className={s.coverType}>↓</span>;
  }
}

export function ChapterGrid({ chapters, lang }: { chapters: Chapter[]; lang: Lang }) {
  return (
    <ul role="list" className={s.grid}>
      {chapters.map((c) => (
        <li key={c.slug}>
          <Link href={urls.chapter(lang, c.slug)} className={s.card}>
            <div className={s.cover} data-cover={c.cover} data-theme={["logo", "intro", "gradient", "social", "blog"].includes(c.cover) ? "dark" : undefined}>
              <Cover kind={c.cover} />
            </div>
            <div className={s.meta}>
              <h2 className={s.title}>{t(c.title, lang)}</h2>
              <p className={s.desc}>{t(c.description, lang)}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
