"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site, t } from "@/content/site";
import type { L, Lang } from "@/content/types";
import s from "./FontSpecimen.module.css";

type Props = {
  lang: Lang;
  family: "heading" | "body" | "mono";
  name: string;
  info: { label: L; value: string }[];
  download?: { label: L; href: string };
  styles: { name: string; weight: number; use: L }[];
};

const alphabet = "AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ\naábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž\n0123456789 ?!&@%()";

export function FontSpecimen({ lang, family, name, info, download, styles }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const [sample, setSample] = useState("Strategií začínáme. Spuštěním nekončíme.");
  const [size, setSize] = useState(48);
  const rows = [
    { id: "styles", label: t(site.ui.fontStyles, lang) },
    { id: "info", label: t(site.ui.fontInfo, lang) },
    { id: "tester", label: t(site.ui.fontTester, lang) },
  ];

  return (
    <div className={s.card} data-family={family}>
      <div className={s.hero}>
        <span className={s.aa}>Aa</span>
        <span className={s.name}>{name}</span>
        <p className={s.alphabet}>{alphabet}</p>
      </div>
      {download && (
        <div className={s.row}>
          <span>{t(site.ui.download, lang)}</span>
          <Button href={download.href} target="_blank" rel="noreferrer" icon="external">
            {t(download.label, lang)}
          </Button>
        </div>
      )}
      {rows.map((r) => (
        <div key={r.id} className={s.acc}>
          <button type="button" className={s.row} aria-expanded={open === r.id} onClick={() => setOpen(open === r.id ? null : r.id)}>
            <span>{r.label}</span>
            <span className={s.toggle}>{open === r.id ? t(site.ui.hide, lang) : t(site.ui.show, lang)}</span>
          </button>
          {open === r.id && (
            <div className={s.panel}>
              {r.id === "styles" && (
                <ul role="list" className={s.styles}>
                  {styles.map((st) => (
                    <li key={st.name} className={s.style}>
                      <span className={s.styleSample} style={{ fontWeight: st.weight }}>{st.name}</span>
                      <span className={s.styleUse}>{t(st.use, lang)}</span>
                    </li>
                  ))}
                </ul>
              )}
              {r.id === "info" && (
                <dl className={s.info}>
                  {info.map((i) => (
                    <div key={i.value} className={s.infoRow}>
                      <dt>{t(i.label, lang)}</dt>
                      <dd>{i.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {r.id === "tester" && (
                <div className={s.tester}>
                  <label className={s.testerControls}>
                    {size} px
                    <input type="range" min={12} max={120} value={size} onChange={(e) => setSize(Number(e.target.value))} />
                  </label>
                  <textarea className={s.testerInput} style={{ fontSize: `${size / 10}rem` }} value={sample} onChange={(e) => setSample(e.target.value)} rows={2} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
