"use client";

import { useState } from "react";
import { site, t } from "@/content/site";
import type { Color, Lang } from "@/content/types";
import { formatColor, isDark } from "@/lib/color";
import s from "./ColorSwatches.module.css";

export const formats = ["HEX", "RGB"] as const;
export type Format = (typeof formats)[number];

/** HEX / RGB switch shared by all colour blocks. */
export function FormatTabs({ value, onChange }: { value: Format; onChange: (f: Format) => void }) {
  return (
    <div className={s.tabs} role="tablist">
      {formats.map((f) => (
        <button key={f} type="button" role="tab" aria-selected={value === f} className={s.tab} onClick={() => onChange(f)}>
          {f}
        </button>
      ))}
    </div>
  );
}

/** Click-to-copy with a short "copied" state. */
export function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  async function copy(value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1400);
  }
  return { copied, copy };
}

/** Colour swatches with HEX/RGB switch; click copies the value. */
export function ColorSwatches({ colors, size, lang }: { colors: Color[]; size: "lg" | "md" | "sm"; lang: Lang }) {
  const [format, setFormat] = useState<Format>("HEX");
  const { copied, copy } = useCopy();

  return (
    <div className={s.wrap}>
      <FormatTabs value={format} onChange={setFormat} />
      <ul role="list" className={s.grid} data-size={size}>
        {colors.map((c) => {
          const value = formatColor(c.hex, format);
          return (
            <li key={c.hex}>
              <button type="button" className={s.swatch} style={{ background: c.hex }} data-tone={isDark(c.hex) ? "dark" : "light"} onClick={() => copy(value)} title={t(site.ui.copy, lang)}>
                <span className={s.name}>{c.name}</span>
                {c.use && <span className={s.use}>{t(c.use, lang)}</span>}
                <span className={s.value}>{copied === value ? t(site.ui.copied, lang) : value}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Tint ladders (e.g. navy 900 to 200) side by side, like the Figma Tints slide. */
export function Tints({ groups, lang }: { groups: { name: string; steps: { step: string; hex: string }[] }[]; lang: Lang }) {
  const [format, setFormat] = useState<Format>("HEX");
  const { copied, copy } = useCopy();
  return (
    <div className={s.wrap}>
      <FormatTabs value={format} onChange={setFormat} />
      <div className={s.ladders}>
        {groups.map((g) => (
          <div key={g.name} className={s.ladder}>
            <p className={s.ladderName}>{g.name}</p>
            <ul role="list" className={s.steps}>
              {g.steps.map((st) => {
                const value = formatColor(st.hex, format);
                return (
                  <li key={st.step}>
                    <button type="button" className={s.step} style={{ background: st.hex }} data-tone={isDark(st.hex) ? "dark" : "light"} onClick={() => copy(value)} title={t(site.ui.copy, lang)}>
                      <span>{st.step}</span>
                      <span className={s.value}>{copied === value ? t(site.ui.copied, lang) : value}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
