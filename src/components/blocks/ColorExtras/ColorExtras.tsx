import { contrast, formatRatio, hexToRgb, isDark } from "@/lib/color";
import s from "./ColorExtras.module.css";

export function ColorRatio({ parts }: { parts: { name: string; hex: string; percent: number }[] }) {
  return (
    <div className={s.ratio}>
      <div className={s.bar}>
        {parts.map((p) => (
          <span key={p.name} style={{ flexGrow: p.percent, background: p.hex }} />
        ))}
      </div>
      <ul role="list" className={s.legend}>
        {parts.map((p) => (
          <li key={p.name} className={s.legendItem}>
            <span className={s.dot} style={{ background: p.hex }} />
            {p.name} <strong>{p.percent} %</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

function contrastLabel(c: number) {
  const level = c >= 7 ? "AAA" : c >= 4.5 ? "AA" : c >= 3 ? "AA (jen velký text)" : "nevyhovuje";
  return `Kontrast ${formatRatio(c)} · ${level}`;
}

export function ColorPairs({ pairs }: { pairs: { label: string; bg: string; fg: string }[] }) {
  return (
    <ul role="list" className={s.pairs}>
      {pairs.map((p) => (
        <li key={p.label} className={s.pairItem}>
          <div className={s.pair} style={{ background: p.bg, color: p.fg }} data-tone={isDark(p.bg) ? "dark" : "light"}>
            <span className={s.aa}>Aa</span>
            <span className={s.contrast}>{contrastLabel(contrast(p.bg, p.fg))}</span>
          </div>
          <p className={s.label}>{p.label}</p>
        </li>
      ))}
    </ul>
  );
}

type Stop = { name: string; hex: string; alpha: number; position: number };

export function GradientPalette({ items }: { items: { name: string; role: string; variant: "dark" | "light"; stops: Stop[] }[] }) {
  return (
    <div className={s.palettes}>
      {items.map((g) => (
        <div key={g.name} className={s.palette}>
          <div className={s.paletteHead}>
            <strong>{g.name}</strong>
            <span className={s.role}>{g.role}</span>
          </div>
          <div className={s.preview} data-variant={g.variant} />
          <ul role="list" className={s.stops}>
            {g.stops.map((st) => (
              <li key={st.name} className={s.stop}>
                <span className={s.chip} style={{ background: st.hex }} />
                <span className={s.stopName}>{st.name}</span>
                <span className={s.stopValue}>
                  {st.hex} · {st.alpha} %
                </span>
                <span className={s.stopValue}>RGB {hexToRgb(st.hex).join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
