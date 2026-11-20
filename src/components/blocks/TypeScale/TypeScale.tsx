import s from "./TypeScale.module.css";

type Row = { name: string; size: number; lineHeight: number; tracking: number; family: "heading" | "body" | "mono" };

export function TypeScale({ rows, en = false }: { rows: Row[]; en?: boolean }) {
  return (
    <div className={s.scale}>
      <p className={s.head}>{en ? "typeface and weight · size / line height / tracking" : "písmo a řez · velikost / řádkování / prostrkání"}</p>
      {rows.map((r) => (
        <div key={r.name} className={s.row}>
          <span className={s.label}>{r.name}</span>
          <span
            className={s.sample}
            data-family={r.family}
            data-weight={r.name === "Body M" ? "medium" : undefined}
            style={{ fontSize: `min(${r.size / 10}rem, ${(r.size / 1440) * 100 * 1.6}vw)`, letterSpacing: `${r.tracking / 100}em` }}
          >
            Apadore
          </span>
          <span className={s.value}>
            {r.family === "heading" ? "Booton SemiBold" : r.family === "mono" ? "IBM Plex Mono Medium" : r.name === "Body L" || r.name === "Lead" ? "Geist Regular" : "Geist Medium"}
            <br />
            {r.size} / {r.lineHeight} / {r.tracking === 0 ? "0" : String(r.tracking).replace("-", "−")} %
          </span>
        </div>
      ))}
    </div>
  );
}
