import { Logo } from "@/components/ui/Logo";
import s from "./OutputPreviews.module.css";

export type Preview = {
  kind: "thought" | "blogCover" | "photoQuote" | "image";
  variant: "dark" | "light";
  label: string;
  text: string;
  author?: string;
  link?: string;
  accent?: string;
  avatar?: string;
  photo?: string;
};

/** Live previews of brand outputs (post templates, blog covers) rendered from brand tokens. */
export function OutputPreviews({ items }: { items: Preview[] }) {
  return (
    <ul role="list" className={s.grid}>
      {items.map((p) => (
        <li key={p.label} className={s.item}>
          <div className={s.frame} data-kind={p.kind} data-variant={p.variant}>
            {p.kind === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.photo} alt={p.label} className={s.photo} />
            ) : p.kind === "thought" ? (
              <>
                <div className={s.top}>
                  <span className={s.author}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {p.avatar ? <img src={p.avatar} alt="" className={s.avatar} /> : <span className={s.avatar} aria-hidden="true" />}
                    {p.author}
                  </span>
                  <span>{p.link} ↗</span>
                </div>
                <p className={s.quote}>{p.text}</p>
                <Logo variant={p.variant === "dark" ? "negativni" : "pozitivni"} className={s.logo} />
              </>
            ) : p.kind === "photoQuote" ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.photo} alt="" className={s.photo} />
                <p className={s.box}>{p.text}</p>
                <Logo variant="negativni" className={s.logoPhoto} />
              </>
            ) : (
              <span className={s.glass} data-variant={p.variant}>
                {p.accent && <span className={s.muted}>{p.accent}</span>}
                {p.accent && <span className={s.dot} aria-hidden="true" />}
                {p.text}
              </span>
            )}
          </div>
          <p className={s.label}>{p.label}</p>
        </li>
      ))}
    </ul>
  );
}
