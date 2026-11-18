"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Logo } from "@/components/ui/Logo";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import s from "./LogoPanel.module.css";

const files = {
  dark: { svg: "/brand/apadore-logo-negativni.svg", fill: "#FFFFFF", bg: "#090E21", name: "apadore-logo-negativni" },
  light: { svg: "/brand/apadore-logo-pozitivni.svg", fill: "#090E21", bg: "#FFFFFF", name: "apadore-logo-pozitivni" },
};

/** Logo preview with light/dark switch, SVG download and a custom PNG generator. */
export function LogoPanel({ lang }: { lang: Lang }) {
  const [bg, setBg] = useState<"dark" | "light">("dark");
  const [width, setWidth] = useState(1920);
  const [pad, setPad] = useState(20);
  const f = files[bg];

  async function downloadPng() {
    const svgText = await (await fetch(f.svg)).text();
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);
    await img.decode();
    const logoW = width * (1 - (2 * pad) / 100);
    const logoH = logoW * (233 / 1359);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = Math.round(logoH + width * (2 * pad) / 100);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, (width - logoW) / 2, (canvas.height - logoH) / 2, logoW, logoH);
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `${f.name}-${width}px.png`;
    a.click();
  }

  return (
    <div className={s.panel}>
      <div className={s.tabs} role="tablist">
        {(["dark", "light"] as const).map((k) => (
          <button key={k} role="tab" type="button" aria-selected={bg === k} className={s.tab} data-bg={k} onClick={() => setBg(k)}>
            {t(k === "dark" ? site.ui.darkBg : site.ui.lightBg, lang)}
          </button>
        ))}
      </div>
      <div className={s.preview} data-bg={bg}>
        <Logo variant={bg === "dark" ? "negativni" : "pozitivni"} className={s.logo} />
      </div>
      <div className={s.row}>
        <div className={s.rowTitle}>
          <strong>{t(site.ui.logoForScreens, lang)}</strong>
          <Chip>RGB</Chip>
          <Chip>{t(bg === "dark" ? site.ui.darkBg : site.ui.lightBg, lang)}</Chip>
        </div>
        <Button href={f.svg} download icon="download">SVG</Button>
      </div>
      <div className={s.row}>
        <div className={s.controls}>
          <strong>{t(site.ui.pngExport, lang)}</strong>
          <label className={s.field}>
            {t(site.ui.padding, lang)} {pad} %
            <input type="range" min={0} max={40} value={pad} onChange={(e) => setPad(Number(e.target.value))} />
          </label>
          <label className={s.field}>
            {t(site.ui.width, lang)}
            <input type="number" min={100} max={8000} step={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} className={s.input} />
          </label>
        </div>
        <Button icon="download" onClick={downloadPng}>PNG</Button>
      </div>
    </div>
  );
}
