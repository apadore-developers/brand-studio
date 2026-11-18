import { Logo } from "@/components/ui/Logo";
import s from "./LogoShowcase.module.css";

type Bg = "light" | "dark" | "gradientDark" | "gradientLight" | "white";

/** Grid of logo tiles: colour versions, clear space, misuse examples and favicons. */
export function LogoTiles({ items }: { items: { label: string; bg: Bg; logo: "pozitivni" | "negativni"; effect?: string; mark?: boolean }[] }) {
  return (
    <ul role="list" className={s.grid} data-count={items.length > 4 ? "many" : undefined}>
      {items.map((it, i) => (
        <li key={i} className={s.item}>
          <div className={s.tile} data-bg={it.bg} data-effect={it.effect}>
            {it.effect && <span className={s.cross} aria-hidden="true" />}
            <Logo variant={it.logo} mark={it.mark} className={it.mark ? s.mark : s.logo} />
          </div>
          <p className={s.label}>{it.label}</p>
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
