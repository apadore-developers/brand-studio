import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import { urls } from "@/lib/urls";
import s from "./SiteHeader.module.css";

type Props = { lang: Lang; title: string; eyebrow?: string; eyebrowHref?: string; path?: string };

export function SiteHeader({ lang, title, eyebrow, eyebrowHref, path = "" }: Props) {
  return (
    <header className={s.header} data-theme="dark">
      <div className="container">
        <div className={s.bar}>
          <div className={s.brand}>
            <a href={site.brandUrl} className={s.logoLink} aria-label="Apadore (web)">
              <Logo className={s.logo} />
            </a>
            <span className={s.divider} aria-hidden="true" />
            <Link href={urls.home(lang)} className={s.product}>
              Brand Studio
            </Link>
          </div>
          <nav className={s.langs} aria-label="Jazyk / Language">
            {site.languages.map((l) => (
              <Link key={l} href={`/${l}${path}`} className={s.lang} aria-current={l === lang ? "true" : undefined}>
                {l}
              </Link>
            ))}
          </nav>
        </div>
        <div className={s.hero}>
          {eyebrow &&
            (eyebrowHref ? (
              <Link href={eyebrowHref} className={s.eyebrow}>
                ← {eyebrow}
              </Link>
            ) : (
              <p className={s.eyebrow}>{eyebrow}</p>
            ))}
          <h1 className={s.title}>{title}</h1>
        </div>
      </div>
      <span className="visually-hidden">{t(site.description, lang)}</span>
    </header>
  );
}
