import { Logo } from "@/components/ui/Logo";
import s from "./BrandMockups.module.css";

export type MockupKind = "web" | "presentation" | "linkedin" | "cards" | "folder" | "tshirt" | "tote" | "mug";

/** Brand application mockups drawn in code (CSS + SVG), so they always use the current logo and colours. */
export function BrandMockups({ items }: { items: { kind: MockupKind; label: string }[] }) {
  return (
    <ul role="list" className={s.grid}>
      {items.map((it) => (
        <li key={it.kind} className={s.item} data-kind={it.kind}>
          <div className={s.stage} data-kind={it.kind}>
            <Mockup kind={it.kind} />
          </div>
          <p className={s.label}>{it.label}</p>
        </li>
      ))}
    </ul>
  );
}

function Mockup({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case "web":
      return (
        <div className={s.browser}>
          <div className={s.browserBar}>
            <span className={s.dots} aria-hidden="true"><i /><i /><i /></span>
            <span className={s.url}>apadore.cz</span>
          </div>
          <div className={s.hero}>
            <div className={s.nav}>
              <Logo variant="negativni" className={s.navLogo} />
              <span className={s.navLinks} aria-hidden="true"><i /><i /><i /><i /></span>
              <span className={s.navBtn}>Kontakt</span>
            </div>
            <p className={s.eyebrow}>Digitální studio</p>
            <p className={s.headline}>Strategií začínáme. Spuštěním nekončíme.</p>
            <span className={s.heroBtn}>Naše práce</span>
          </div>
        </div>
      );
    case "presentation":
      return (
        <div className={s.screen}>
          <div className={s.slide}>
            <span className={s.slideLabel}>Návrh spolupráce</span>
            <p className={s.slideTitle}>Nový web pro Sky Towers</p>
            <Logo variant="negativni" className={s.slideLogo} />
          </div>
          <span className={s.stand} aria-hidden="true" />
        </div>
      );
    case "linkedin":
      return (
        <div className={s.phone}>
          <div className={s.phoneScreen}>
            <div className={s.post}>
              <div className={s.postHead}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/autori/mikolas-voborsky.webp" alt="" className={s.avatar} />
                <span className={s.postAuthor}>
                  <strong>Mikoláš Voborský</strong>
                  <span>Apadore</span>
                </span>
              </div>
              <span className={s.postText} aria-hidden="true"><i /><i /><i /></span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/socialni-site/myslenka-tmava.webp" alt="" className={s.postImage} />
              <span className={s.postActions} aria-hidden="true"><i /><i /><i /><i /></span>
            </div>
          </div>
        </div>
      );
    case "cards":
      return (
        <div className={s.cards}>
          <div className={s.cardBack}>
            <strong>Jméno Příjmení</strong>
            <span>Projektový manažer</span>
            <span className={s.cardContact}>jmeno@apadore.cz<br />apadore.cz</span>
            <Logo variant="pozitivni" className={s.cardSmallLogo} />
          </div>
          <div className={s.cardFront}>
            <Logo variant="negativni" className={s.cardLogo} />
          </div>
        </div>
      );
    case "folder":
      return (
        <div className={s.folderWrap}>
          <div className={s.sheet} aria-hidden="true">
            <Logo variant="pozitivni" className={s.sheetLogo} />
            <i /><i /><i /><i /><i />
          </div>
          <div className={s.folder}>
            <Logo variant="negativni" className={s.folderLogo} />
            <span className={s.folderUrl}>apadore.cz</span>
          </div>
        </div>
      );
    case "tshirt":
      return (
        <div className={s.shirtWrap}>
          <svg viewBox="0 0 400 420" className={s.shirt} aria-hidden="true">
            <path d="M140 20 C160 44 240 44 260 20 L360 62 L392 150 L330 172 L322 140 L322 404 L78 404 L78 140 L70 172 L8 150 L40 62 Z" />
            <path className={s.collar} d="M140 20 C160 44 240 44 260 20" />
          </svg>
          <Logo variant="negativni" className={s.shirtLogo} />
        </div>
      );
    case "tote":
      return (
        <div className={s.toteWrap}>
          <span className={s.toteHandle} aria-hidden="true" />
          <div className={s.tote}>
            <Logo variant="pozitivni" className={s.toteLogo} />
          </div>
        </div>
      );
    case "mug":
      return (
        <div className={s.mugWrap}>
          <div className={s.mug}>
            <Logo variant="negativni" className={s.mugLogo} />
          </div>
          <span className={s.mugHandle} aria-hidden="true" />
        </div>
      );
  }
}
