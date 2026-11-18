"use client";

import { useState } from "react";
import { site, t } from "@/content/site";
import type { Color, Lang } from "@/content/types";
import { formatColor, isDark } from "@/lib/color";
import s from "./ColorSwatches.module.css";

const formats = ["HEX", "RGB"] as const;

/** Colour swatches with HEX/RGB switch; click copies the value. */
export function ColorSwatches({ colors, size, lang }: { colors: Color[]; size: "lg" | "md" | "sm"; lang: Lang }) {
  const [format, setFormat] = useState<(typeof formats)[number]>("HEX");
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1400);
  }

  return (
    <div className={s.wrap}>
      <div className={s.tabs} role="tablist">
        {formats.map((f) => (
          <button key={f} type="button" role="tab" aria-selected={format === f} className={s.tab} onClick={() => setFormat(f)}>
            {f}
          </button>
        ))}
      </div>
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
