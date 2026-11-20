"use client";

import { useState } from "react";
import { FormatTabs, useCopy, type Format } from "@/components/blocks/ColorSwatches";
import { contrast, formatColor, formatRatio, hexToRgb, isDark } from "@/lib/color";
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

function contrastLabel(c: number, en: boolean) {
  const level = c >= 7 ? "AAA" : c >= 4.5 ? "AA" : c >= 3 ? (en ? "AA (large text only)" : "AA (jen velký text)") : en ? "fails" : "nevyhovuje";
  return `${en ? "Contrast" : "Kontrast"} ${formatRatio(c)} · ${level}`;
}

export function ColorPairs({ pairs, en = false }: { pairs: { label: string; bg: string; fg: string }[]; en?: boolean }) {
  return (
    <ul role="list" className={s.pairs}>
      {pairs.map((p) => (
        <li key={p.label} className={s.pairItem}>
          <div className={s.pair} style={{ background: p.bg, color: p.fg }} data-tone={isDark(p.bg) ? "dark" : "light"}>
            <span className={s.aa}>Aa</span>
            <span className={s.contrast}>{contrastLabel(contrast(p.bg, p.fg), en)}</span>
          </div>
          <p className={s.label}>{p.label}</p>
        </li>
      ))}
    </ul>
  );
}

type Stop = { name: string; hex: string; alpha: number; position: number };

export function GradientPalette({ items, en = false }: { en?: boolean; items: { name: string; role: string; variant: "dark" | "light"; visible?: { name: string; hex: string }[]; stops: Stop[] }[] }) {
  const [format, setFormat] = useState<Format>("HEX");
  const [open, setOpen] = useState<string[]>([]);
  const { copied, copy } = useCopy();
  const toggle = (name: string) => setOpen((o) => (o.includes(name) ? o.filter((n) => n !== name) : [...o, name]));
  return (
    <div className={s.palettes}>
      <FormatTabs value={format} onChange={setFormat} />
      {items.map((g) => (
        <div key={g.name} className={s.palette}>
          <div className={s.paletteHead}>
            <strong>{g.name}</strong>
            <span className={s.role}>{g.role}</span>
          </div>
          <div className={s.preview} data-variant={g.variant} />
          {g.visible && (
            <ul role="list" className={s.visible}>
              {g.visible.map((v) => {
                const value = formatColor(v.hex, format);
                return (
                  <li key={v.hex}>
                    <button type="button" className={s.visibleItem} style={{ background: v.hex }} data-tone={isDark(v.hex) ? "dark" : "light"} onClick={() => copy(value)}>
                      <strong>{v.name}</strong>
                      <span className={s.stopValue} data-inherit>
                        {copied === value ? (en ? "Copied" : "Zkopírováno") : value}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <button type="button" className={s.disclosure} aria-expanded={open.includes(g.name)} onClick={() => toggle(g.name)}>
            <span className={s.chevron} aria-hidden="true" />
            {en ? "How the gradient is built" : "Jak je přechod sestavený"}
          </button>
          {open.includes(g.name) && (
            <ul role="list" className={s.stops}>
              {g.stops.map((st) => (
                <li key={st.name} className={s.stop} title={`RGB ${hexToRgb(st.hex).join(", ")}`}>
                  <span className={s.chip} style={{ background: st.hex }} />
                  <span className={s.stopName}>{st.name}</span>
                  <span className={s.stopValue}>
                    {st.hex} · {st.alpha} %
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
