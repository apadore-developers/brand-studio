import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import s from "./LogoShowcase.module.css";

type Bg = "light" | "dark" | "gradientDark" | "gradientLight" | "white";

/** Grid of logo tiles: colour versions, clear space, misuse examples and favicons. */
export function LogoTiles({ items, compact }: { compact?: boolean; items: { label: string; bg: Bg; logo: "pozitivni" | "negativni"; effect?: string; mark?: boolean; downloads?: { label: string; href: string }[] }[] }) {
  return (
    <ul role="list" className={s.grid} data-count={items.length > 4 ? "many" : undefined} data-compact={compact || undefined}>
      {items.map((it, i) => (
        <li key={i} className={s.item}>
          <div className={s.tile} data-bg={it.bg} data-effect={it.effect}>
            {it.effect && <span className={s.cross} aria-hidden="true" />}
            <Logo variant={it.logo} mark={it.mark} className={it.mark ? s.mark : s.logo} />
          </div>
          <p className={s.label}>{it.label}</p>
          {it.downloads && (
            <span className={s.downloads}>
              {it.downloads.map((d) => (
                <Button key={d.href} href={d.href} download icon="download">
                  {d.label}
                </Button>
              ))}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ClearSpace({ ratio }: { ratio: string }) {
  return (
    <div className={s.clear}>
      <div className={s.zone}>
        <span className={s.zoneLabel}>{ratio}</span>
        <Logo variant="pozitivni" className={s.zoneLogo} />
      </div>
    </div>
  );
}

/** Optical logo for small sizes: a large preview, real-size samples and the standard logo for comparison. */
export function LogoSmallSizes({ sizes, compareLabel }: { sizes: { px: number; label: string }[]; compareLabel: string }) {
  return (
    <div className={s.small}>
      <div className={s.smallHero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/apadore-logo-male-pozitivni.svg" alt="Apadore" className={s.smallHeroLogo} />
      </div>
      <ul role="list" className={s.smallRow}>
        {sizes.map((z) => (
          <li key={z.px} className={s.smallItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/apadore-logo-male-pozitivni.svg" alt="" style={{ width: z.px }} />
            <span className={s.smallLabel}>{z.label}</span>
          </li>
        ))}
        <li className={s.smallItem}>
          <Logo variant="pozitivni" style={{ width: 80 }} />
          <span className={s.smallLabel}>{compareLabel}</span>
        </li>
      </ul>
    </div>
  );
}
