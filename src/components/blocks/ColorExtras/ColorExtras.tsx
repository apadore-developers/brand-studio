import { contrast, formatRatio, isDark } from "@/lib/color";
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

export function ColorPairs({ pairs }: { pairs: { label: string; bg: string; fg: string }[] }) {
  return (
    <ul role="list" className={s.pairs}>
      {pairs.map((p) => (
        <li key={p.label} className={s.pairItem}>
          <div className={s.pair} style={{ background: p.bg, color: p.fg }} data-tone={isDark(p.bg) ? "dark" : "light"}>
            <span className={s.aa}>Aa</span>
            <span className={s.contrast}>{formatRatio(contrast(p.bg, p.fg))}</span>
          </div>
          <p className={s.label}>{p.label}</p>
        </li>
      ))}
    </ul>
  );
}
