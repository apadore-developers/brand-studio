import { Button } from "@/components/ui/Button";
import s from "./ContentLists.module.css";

export function RuleList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol role="list" className={s.rules}>
      {items.map((r) => (
        <li key={r.title} className={s.rule}>
          <h3 className={s.ruleTitle}>{r.title}</h3>
          <p className={s.ruleBody}>{r.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ImagePlaceholders({ items, note }: { items: { label: string; source?: string; ratio: string }[]; note: string }) {
  return (
    <ul role="list" className={s.images}>
      {items.map((it) => (
        <li key={it.label} className={s.imageItem}>
          <div className={s.placeholder} style={{ aspectRatio: it.ratio }}>
            <span>{note}</span>
            {it.source && <span className={s.source}>{it.source}</span>}
          </div>
          <p className={s.caption}>{it.label}</p>
        </li>
      ))}
    </ul>
  );
}

export function FormatList({ items }: { items: { label: string; w: number; h: number }[] }) {
  const max = Math.max(...items.map((i) => Math.max(i.w, i.h)));
  return (
    <ul role="list" className={s.formats}>
      {items.map((f) => (
        <li key={f.label} className={s.format}>
          <span className={s.formatBox} style={{ width: `${(f.w / max) * 16}rem`, height: `${(f.h / max) * 16}rem` }} />
          <span className={s.formatLabel}>{f.label}</span>
          <span className={s.formatSize}>
            {f.w} × {f.h} px
          </span>
        </li>
      ))}
    </ul>
  );
}

export function DownloadList({ items, cta }: { items: { title: string; meta: string; href?: string }[]; cta: string }) {
  return (
    <ul role="list" className={s.downloads}>
      {items.map((d) => (
        <li key={d.title} className={s.download}>
          <span>
            <strong className={s.downloadTitle}>{d.title}</strong>
            <span className={s.downloadMeta}>{d.meta}</span>
          </span>
          {d.href && (
            <Button href={d.href} download icon="download">
              {cta}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
}
