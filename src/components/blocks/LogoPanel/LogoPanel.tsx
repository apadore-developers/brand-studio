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
  const [width, setWidth] = useState(4000);
  const [padX, setPadX] = useState(0);
  const [padY, setPadY] = useState(0);
  const f = files[bg];

  /** Renders the logo to a bitmap: width in px, horizontal/vertical padding in % of logo width/height. */
  async function downloadRaster(type: "png" | "jpg") {
    const svgText = await (await fetch(f.svg)).text();
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);
    await img.decode();
    const logoW = width / (1 + (2 * padX) / 100);
    const logoH = logoW * (233 / 1359);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(width);
    canvas.height = Math.round(logoH * (1 + (2 * padY) / 100));
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (type === "jpg") {
      ctx.fillStyle = f.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(img, (canvas.width - logoW) / 2, (canvas.height - logoH) / 2, logoW, logoH);
    const a = document.createElement("a");
    a.href = canvas.toDataURL(type === "jpg" ? "image/jpeg" : "image/png", 0.95);
    a.download = `${f.name}-${canvas.width}x${canvas.height}.${type}`;
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
        <div className={s.buttons}>
          <Button href={f.svg} download icon="download">SVG</Button>
          <Button href={f.svg.replace(".svg", ".pdf")} download icon="download">PDF</Button>
          <Button href={f.svg.replace(".svg", ".ai")} download icon="download">AI</Button>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.controls}>
          <strong>{t(site.ui.pngExport, lang)}</strong>
          <label className={s.field}>
            {lang === "en" ? "Horizontal padding" : "Horizontální okraje"} {padX} %
            <input type="range" min={0} max={100} value={padX} onChange={(e) => setPadX(Number(e.target.value))} />
          </label>
          <label className={s.field}>
            {lang === "en" ? "Vertical padding" : "Vertikální okraje"} {padY} %
            <input type="range" min={0} max={300} value={padY} onChange={(e) => setPadY(Number(e.target.value))} />
          </label>
          <label className={s.field}>
            {t(site.ui.width, lang)}
            <input type="number" min={100} max={8000} step={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} className={s.input} />
          </label>
        </div>
        <div className={s.buttons}>
          <Button icon="download" onClick={() => downloadRaster("png")}>PNG</Button>
          <Button icon="download" onClick={() => downloadRaster("jpg")}>JPG</Button>
        </div>
      </div>
    </div>
  );
}
