import { Logo } from "@/components/ui/Logo";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import s from "./SiteFooter.module.css";

export function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.meta}>
            <p>
              {t(site.ui.studio, lang)}: <strong>Apadore</strong>
            </p>
            <p>
              {t(site.ui.madeWith, lang)} | <a href="#">{t(site.ui.login, lang)}</a>
            </p>
          </div>
          <Logo mark className={s.mark} />
        </div>
      </div>
    </footer>
  );
}
