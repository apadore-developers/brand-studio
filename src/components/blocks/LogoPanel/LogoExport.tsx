"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { logoPaths } from "@/content/logo-paths";
import type { Lang } from "@/content/types";
import s from "./LogoExport.module.css";

const NAVY = "#090E21";
const WHITE = "#FFFFFF";
const LOGO_W = 1359;
const LOGO_H = 233;

type Bg = "transparent" | "white" | "grey" | "navy" | "gradientDark" | "gradientLight";

const backgrounds: { key: Bg; cs: string; en: string }[] = [
  { key: "transparent", cs: "Průhledné", en: "Transparent" },
  { key: "white", cs: "Bílá", en: "White" },
  { key: "grey", cs: "Grey 50", en: "Grey 50" },
  { key: "navy", cs: "Navy 900", en: "Navy 900" },
  { key: "gradientDark", cs: "Tmavý přechod", en: "Dark gradient" },
  { key: "gradientLight", cs: "Světlý přechod", en: "Light gradient" },
];

const presets: { label: string; ratio: number; note?: { cs: string; en: string } }[] = [
  { label: "1 : 1", ratio: 1, note: { cs: "profil", en: "profile" } },
  { label: "4 : 5", ratio: 4 / 5 },
  { label: "3 : 2", ratio: 3 / 2 },
  { label: "16 : 9", ratio: 16 / 9 },
  { label: "1,91 : 1", ratio: 1.91, note: { cs: "náhled odkazu", en: "link preview" } },
  { label: "4 : 1", ratio: 4, note: { cs: "banner", en: "banner" } },
];

/** Ratio slider works on a log scale so 1 : 4 and 4 : 1 sit at equal distance from 1 : 1. */
const MIN_LOG = Math.log(1 / 4);
const MAX_LOG = Math.log(5);

/** Recommended logo width as a share of the canvas width, so the logo breathes in every format. */
function recommendedShare(ratio: number) {
  const byWidth = ratio >= 3 ? 0.4 : ratio >= 1.5 ? 0.5 : ratio >= 1 ? 0.6 : 0.7;
  // keep the logo height at most a third of the canvas height
  const byHeight = (ratio * (1 / 3) * LOGO_W) / LOGO_H;
  return Math.round(Math.min(byWidth, byHeight) * 100);
}

/** CSS-like linear gradient (angle in deg, 0 = to top) mapped to SVG user-space coordinates. */
function gradientLine(angle: number, w: number, h: number) {
  const a = (angle * Math.PI) / 180;
  const dx = Math.sin(a);
  const dy = -Math.cos(a);
  const len = Math.abs(w * dx) + Math.abs(h * dy);
  return { x1: w / 2 - (dx * len) / 2, y1: h / 2 - (dy * len) / 2, x2: w / 2 + (dx * len) / 2, y2: h / 2 + (dy * len) / 2 };
}

function buildSvg(bg: Bg, w: number, h: number, share: number) {
  const logoW = w * (share / 100);
  const scale = logoW / LOGO_W;
  const logoH = LOGO_H * scale;
  const fill = bg === "navy" || bg === "gradientDark" ? WHITE : NAVY;
  let back = "";
  if (bg === "white") back = `<rect width="${w}" height="${h}" fill="${WHITE}"/>`;
  if (bg === "grey") back = `<rect width="${w}" height="${h}" fill="#F1F1F1"/>`;
  if (bg === "navy") back = `<rect width="${w}" height="${h}" fill="${NAVY}"/>`;
  if (bg === "gradientDark") {
    const g = gradientLine(135, w, h);
    back = `<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}"><stop offset="0" stop-color="#3F8BFF" stop-opacity="0.45"/><stop offset="0.7" stop-color="#182037" stop-opacity="0"/></linearGradient></defs><rect width="${w}" height="${h}" fill="${NAVY}"/><rect width="${w}" height="${h}" fill="url(#g)"/>`;
  }
  if (bg === "gradientLight") {
    const g = gradientLine(225, w, h);
    back = `<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}"><stop offset="0" stop-color="#7FA3DA" stop-opacity="0.75"/><stop offset="0.55" stop-color="#B9CBE6" stop-opacity="0.35"/><stop offset="1" stop-color="#E6E8EE" stop-opacity="0"/></linearGradient></defs><rect width="${w}" height="${h}" fill="#EEF0F4"/><rect width="${w}" height="${h}" fill="url(#g)"/>`;
  }
  const paths = logoPaths.map((p) => `<path fill="${fill}" fill-rule="${p.rule}" d="${p.d}"/>`).join("");
  const tx = (w - logoW) / 2;
  const ty = (h - logoH) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${back}<g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(6)})">${paths}</g></svg>`;
}

/** Logo export: background, format (ratio), logo size and output width. PNG, JPG or SVG. */
export function LogoExport({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const [bg, setBg] = useState<Bg>("navy");
  const [ratio, setRatio] = useState(1);
  const [share, setShare] = useState(recommendedShare(1));
  const [width, setWidth] = useState(2000);

  const w = Math.max(16, Math.round(width));
  const h = Math.max(16, Math.round(width / ratio));
  const svg = useMemo(() => buildSvg(bg, w, h, share), [bg, w, h, share]);
  const preview = useMemo(() => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg), [svg]);
  const recommended = recommendedShare(ratio);

  function chooseRatio(r: number) {
    setRatio(r);
    setShare(recommendedShare(r));
  }

  const name = `apadore-logo-${bg}-${w}x${h}`;

  function download(href: string, ext: string) {
    const a = document.createElement("a");
    a.href = href;
    a.download = `${name}.${ext}`;
    a.click();
  }

  async function raster(type: "png" | "jpg") {
    const img = new Image();
    img.src = preview;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (type === "jpg" && bg === "transparent") {
      ctx.fillStyle = WHITE;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(img, 0, 0, w, h);
    download(canvas.toDataURL(type === "jpg" ? "image/jpeg" : "image/png", 0.95), type);
  }

  function vector() {
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    download(url, "svg");
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const ratioLabel = ratio >= 1 ? `${ratio.toFixed(2).replace(".", ",")} : 1` : `1 : ${(1 / ratio).toFixed(2).replace(".", ",")}`;

  return (
    <div className={s.tool}>
      <div className={s.stage} data-bg={bg}>
        {/* eslint-disable-next-line @next/next/no-img-element -- generated data URL, nothing to optimise */}
        <img
          src={preview}
          alt={en ? "Export preview" : "Náhled exportu"}
          className={s.canvas}
          style={{ aspectRatio: `${w} / ${h}` }}
        />
        <span className={s.size}>
          {w} × {h} px
        </span>
      </div>

      <div className={s.controls}>
        <fieldset className={s.group}>
          <legend className={s.legend}>{en ? "Background" : "Pozadí"}</legend>
          <div className={s.options}>
            {backgrounds.map((b) => (
              <button key={b.key} type="button" className={s.option} aria-pressed={bg === b.key} onClick={() => setBg(b.key)}>
                <span className={s.swatch} data-bg={b.key} />
                {en ? b.en : b.cs}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className={s.group}>
          <legend className={s.legend}>{en ? "Format" : "Formát"}</legend>
          <div className={s.options}>
            {presets.map((p) => (
              <button key={p.label} type="button" className={s.option} aria-pressed={Math.abs(ratio - p.ratio) < 0.005} onClick={() => chooseRatio(p.ratio)}>
                {p.label}
                {p.note && <span className={s.note}>{en ? p.note.en : p.note.cs}</span>}
              </button>
            ))}
          </div>
          <label className={s.field}>
            <span>
              {en ? "Custom ratio" : "Vlastní poměr"} <strong>{ratioLabel}</strong>
            </span>
            <input
              type="range"
              min={0}
              max={1000}
              value={Math.round(((Math.log(ratio) - MIN_LOG) / (MAX_LOG - MIN_LOG)) * 1000)}
              onChange={(e) => chooseRatio(Math.exp(MIN_LOG + (Number(e.target.value) / 1000) * (MAX_LOG - MIN_LOG)))}
            />
          </label>
        </fieldset>

        <fieldset className={s.group}>
          <legend className={s.legend}>{en ? "Logo size" : "Velikost loga"}</legend>
          <label className={s.field}>
            <span>
              {en ? "Logo width" : "Šířka loga"} <strong>{share} %</strong> {en ? "of the format" : "formátu"}
            </span>
            <input type="range" min={10} max={95} value={share} onChange={(e) => setShare(Number(e.target.value))} />
          </label>
          <button type="button" className={s.reset} onClick={() => setShare(recommended)} disabled={share === recommended}>
            {en ? `Recommended size (${recommended} %)` : `Doporučená velikost (${recommended} %)`}
          </button>
        </fieldset>

        <fieldset className={s.group}>
          <legend className={s.legend}>{en ? "Output" : "Výstup"}</legend>
          <label className={s.field}>
            <span>{en ? "Width (px)" : "Šířka (px)"}</span>
            <input type="number" min={100} max={8000} step={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} className={s.input} />
          </label>
          <div className={s.buttons}>
            <Button icon="download" onClick={() => raster("png")}>PNG</Button>
            <Button icon="download" onClick={() => raster("jpg")}>JPG</Button>
            <Button icon="download" onClick={vector}>SVG</Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
