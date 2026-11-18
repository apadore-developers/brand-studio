import s from "./TypeScale.module.css";

type Row = { name: string; size: number; lineHeight: number; tracking: number; family: "heading" | "body" | "mono" };

export function TypeScale({ rows }: { rows: Row[] }) {
  return (
    <div className={s.scale}>
      <p className={s.head}>velikost / řádkování / prostrkání</p>
      {rows.map((r) => (
        <div key={r.name} className={s.row}>
          <span className={s.label}>{r.name}</span>
          <span
            className={s.sample}
            data-family={r.family}
            style={{ fontSize: `min(${r.size / 10}rem, ${(r.size / 1440) * 100 * 1.6}vw)`, letterSpacing: `${r.tracking / 100}em` }}
          >
            Apadore
          </span>
          <span className={s.value}>
            {r.size} / {r.lineHeight} / {r.tracking === 0 ? "0" : String(r.tracking).replace("-", "−")} %
          </span>
        </div>
      ))}
    </div>
  );
}
