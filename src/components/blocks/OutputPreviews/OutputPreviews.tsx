import { Logo } from "@/components/ui/Logo";
import s from "./OutputPreviews.module.css";

export type Preview = {
  kind: "thought" | "blogCover";
  variant: "dark" | "light";
  label: string;
  text: string;
  author?: string;
  link?: string;
  accent?: string;
};

/** Live previews of brand outputs (post templates, blog covers) rendered from brand tokens. */
export function OutputPreviews({ items }: { items: Preview[] }) {
  return (
    <ul role="list" className={s.grid}>
      {items.map((p) => (
        <li key={p.label} className={s.item}>
          <div className={s.frame} data-kind={p.kind} data-variant={p.variant}>
            {p.kind === "thought" ? (
              <>
                <div className={s.top}>
                  <span className={s.author}>
                    <span className={s.avatar} aria-hidden="true" />
                    {p.author}
                  </span>
                  <span>{p.link} ↗</span>
                </div>
                <p className={s.quote}>{p.text}</p>
                <Logo variant={p.variant === "dark" ? "negativni" : "pozitivni"} className={s.logo} />
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
