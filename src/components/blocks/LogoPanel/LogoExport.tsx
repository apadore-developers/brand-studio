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
const K = LOGO_H / LOGO_W;

type Bg = "none" | "navy" | "gradientDark" | "gradientLight" | "grey" | "white";

const backgrounds: { key: Exclude<Bg, "none">; cs: string; en: string }[] = [
  { key: "navy", cs: "Navy, bez přechodu", en: "Navy, no gradient" },
  { key: "gradientDark", cs: "Tmavý přechod", en: "Dark gradient" },
  { key: "gradientLight", cs: "Světlý přechod", en: "Light gradient" },
  { key: "grey", cs: "Světle šedá", en: "Light grey" },
  { key: "white", cs: "Bílá", en: "White" },
];

/** Common container sizes. "auto" = the canvas hugs the logo (width + clear space). */
const sizes: { key: string; w: number; h: number; cs: string; en: string }[] = [
  { key: "1080x1080", w: 1080, h: 1080, cs: "profil, čtverec", en: "profile, square" },
  { key: "1080x1350", w: 1080, h: 1350, cs: "na výšku", en: "portrait" },
  { key: "1200x627", w: 1200, h: 627, cs: "náhled odkazu", en: "link preview" },
  { key: "1920x1080", w: 1920, h: 1080, cs: "16 : 9", en: "16 : 9" },
  { key: "1584x396", w: 1584, h: 396, cs: "LinkedIn banner", en: "LinkedIn banner" },
];

/**
 * Recommended logo width (% of the container width). Wide formats get a smaller share,
 * tall ones a bigger one, and the logo never takes more than a third of the height,
 * so there is always generous clear space around it.
 */
function recommendedZoom(w: number, h: number) {
  const ratio = w / h;
  const byWidth = ratio >= 3 ? 0.36 : ratio >= 1.5 ? 0.46 : ratio >= 1 ? 0.6 : 0.7;
  const byHeight = (h / 3 / K) / w;
  return Math.round(Math.min(byWidth, byHeight) * 100);
}

/** Largest zoom at which the logo still fits the container with a little margin. */
function maxZoom(w: number, h: number) {
  return Math.max(10, Math.floor(Math.min(0.96, (h * 0.9) / K / w) * 100));
}

/** CSS-like linear gradient (angle in deg, 0 = to top) mapped to SVG user-space coordinates. */
function gradientLine(angle: number, w: number, h: number) {
  const a = (angle * Math.PI) / 180;
  const dx = Math.sin(a);
  const dy = -Math.cos(a);
  const len = Math.abs(w * dx) + Math.abs(h * dy);
  return { x1: w / 2 - (dx * len) / 2, y1: h / 2 - (dy * len) / 2, x2: w / 2 + (dx * len) / 2, y2: h / 2 + (dy * len) / 2 };
}

function background(bg: Bg, w: number, h: number) {
  const rect = (fill: string) => `<rect width="${w}" height="${h}" fill="${fill}"/>`;
  if (bg === "white") return rect(WHITE);
  if (bg === "grey") return rect("#F1F1F1");
  if (bg === "navy") return rect(NAVY);
  if (bg === "gradientDark") {
    const g = gradientLine(135, w, h);
    return `<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}"><stop offset="0" stop-color="#3F8BFF" stop-opacity="0.45"/><stop offset="0.7" stop-color="#182037" stop-opacity="0"/></linearGradient></defs>${rect(NAVY)}${rect("url(#g)")}`;
  }
  if (bg === "gradientLight") {
    const g = gradientLine(225, w, h);
    return `<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}"><stop offset="0" stop-color="#7FA3DA" stop-opacity="0.75"/><stop offset="0.55" stop-color="#B9CBE6" stop-opacity="0.35"/><stop offset="1" stop-color="#E6E8EE" stop-opacity="0"/></linearGradient></defs>${rect("#EEF0F4")}${rect("url(#g)")}`;
  }
  return "";
}

function buildSvg(bg: Bg, color: "navy" | "white", w: number, h: number, logoW: number) {
  const scale = logoW / LOGO_W;
  const logoH = LOGO_H * scale;
  const fill = color === "white" ? WHITE : NAVY;
  const paths = logoPaths.map((p) => `<path fill="${fill}" fill-rule="${p.rule}" d="${p.d}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${background(bg, w, h)}<g transform="translate(${((w - logoW) / 2).toFixed(2)} ${((h - logoH) / 2).toFixed(2)}) scale(${scale.toFixed(6)})">${paths}</g></svg>`;
}

const clampSize = (v: number) => Math.min(8000, Math.max(16, Math.round(v) || 16));

/**
 * Logo export. By default the clean logo without a background (canvas hugs the logo).
 * A fixed size (e.g. 1080 × 1080) places the logo at a recommended size that can be zoomed.
 * "Logo with background" unfolds the background colours.
 */
export function LogoExport({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const [mode, setMode] = useState<"auto" | "fixed">("auto");
  const [autoW, setAutoW] = useState(4000);
  const [pad, setPad] = useState(0);
  const [fw, setFw] = useState(1080);
  const [fh, setFh] = useState(1080);
  const [zoom, setZoom] = useState(recommendedZoom(1080, 1080));
  const [withBg, setWithBg] = useState(false);
  const [bgPick, setBgPick] = useState<Exclude<Bg, "none">>("navy");
  const [plainColor, setPlainColor] = useState<"navy" | "white">("navy");

  const bg: Bg = withBg ? bgPick : "none";
  const color = withBg ? (bgPick === "navy" || bgPick === "gradientDark" ? "white" : "navy") : plainColor;

  let w: number, h: number, logoW: number;
  if (mode === "auto") {
    w = clampSize(autoW);
    logoW = w / (1 + 2 * (pad / 100) * K);
    h = Math.round(logoW * K * (1 + (2 * pad) / 100));
  } else {
    w = clampSize(fw);
    h = clampSize(fh);
    logoW = (w * Math.min(zoom, maxZoom(w, h))) / 100;
  }

  const svg = useMemo(() => buildSvg(bg, color, w, h, logoW), [bg, color, w, h, logoW]);
  const preview = useMemo(() => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg), [svg]);
  const recommended = recommendedZoom(w, h);
  const zMax = maxZoom(w, h);

  function setFixed(nw: number, nh: number) {
    setMode("fixed");
    setFw(nw);
    setFh(nh);
    setZoom(recommendedZoom(clampSize(nw), clampSize(nh)));
  }

  const name = `apadore-logo-${withBg ? bgPick : plainColor === "white" ? "negativni" : "pozitivni"}-${w}x${h}`;

  function save(href: string, ext: string) {
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
    ctx.drawImage(img, 0, 0, w, h);
    save(canvas.toDataURL(type === "jpg" ? "image/jpeg" : "image/png", 0.95), type);
  }

  function vector() {
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    save(url, "svg");
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const L = (cs: string, enText: string) => (en ? enText : cs);

  return (
    <div className={s.tool}>
      <div className={s.stage} data-bg={withBg ? "filled" : plainColor === "white" ? "dark" : "transparent"}>
        {/* eslint-disable-next-line @next/next/no-img-element -- generated data URL, nothing to optimise */}
        <img src={preview} alt={L("Náhled exportu", "Export preview")} className={s.canvas} style={{ aspectRatio: `${w} / ${h}` }} />
        <span className={s.size}>
          {w} × {h} px{withBg ? "" : ` · ${L("průhledné", "transparent")}`}
        </span>
      </div>

      <div className={s.controls}>
        <h3 className={s.heading}>{L("Export loga", "Logo export")}</h3>

        {!withBg && (
          <fieldset className={s.group}>
            <legend className={s.legend}>{L("Barva loga", "Logo colour")}</legend>
            <div className={s.options}>
              {(["navy", "white"] as const).map((c) => (
                <button key={c} type="button" className={s.option} aria-pressed={plainColor === c} onClick={() => setPlainColor(c)}>
                  <span className={s.swatch} data-bg={c} />
                  {c === "navy" ? L("Navy (pozitivní)", "Navy (positive)") : L("Bílé (negativní)", "White (negative)")}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset className={s.group}>
          <legend className={s.legend}>{L("Rozměr", "Size")}</legend>
          <div className={s.options}>
            <button type="button" className={s.option} aria-pressed={mode === "auto"} onClick={() => setMode("auto")}>
              {L("Podle loga", "Fit to logo")}
            </button>
            {sizes.map((p) => (
              <button key={p.key} type="button" className={s.option} aria-pressed={mode === "fixed" && fw === p.w && fh === p.h} onClick={() => setFixed(p.w, p.h)}>
                {p.w} × {p.h}
                <span className={s.note}>{en ? p.en : p.cs}</span>
              </button>
            ))}
          </div>

          {mode === "auto" ? (
            <div className={s.row}>
              <label className={s.field}>
                <span>{L("Šířka (px)", "Width (px)")}</span>
                <input type="number" min={16} max={8000} step={10} value={autoW} onChange={(e) => setAutoW(Number(e.target.value))} className={s.input} />
              </label>
              <span className={s.times}>×</span>
              <label className={s.field}>
                <span>{L("Výška (px)", "Height (px)")}</span>
                <input
                  type="number"
                  min={16}
                  max={8000}
                  value={h}
                  onChange={(e) => {
                    const p = pad / 100;
                    setAutoW(Math.round((Number(e.target.value) * (1 + 2 * p * K)) / (K * (1 + 2 * p))));
                  }}
                  className={s.input}
                />
              </label>
              <label className={s.field} data-grow>
                <span>
                  {L("Okraje", "Clear space")} <strong>{pad} %</strong> {L("výšky loga", "of the logo height")}
                </span>
                <input type="range" min={0} max={200} value={pad} onChange={(e) => setPad(Number(e.target.value))} />
              </label>
            </div>
          ) : (
            <>
              <div className={s.row}>
                <label className={s.field}>
                  <span>{L("Šířka (px)", "Width (px)")}</span>
                  <input type="number" min={16} max={8000} step={10} value={fw} onChange={(e) => setFixed(Number(e.target.value), fh)} className={s.input} />
                </label>
                <span className={s.times}>×</span>
                <label className={s.field}>
                  <span>{L("Výška (px)", "Height (px)")}</span>
                  <input type="number" min={16} max={8000} step={10} value={fh} onChange={(e) => setFixed(fw, Number(e.target.value))} className={s.input} />
                </label>
              </div>
              <div className={s.field}>
                <span>
                  {L("Velikost loga", "Logo size")} <strong>{Math.min(zoom, zMax)} %</strong> {L("šířky", "of the width")}
                </span>
                <div className={s.zoom}>
                  <button type="button" className={s.zoomBtn} aria-label={L("Oddálit", "Zoom out")} onClick={() => setZoom((z) => Math.max(10, Math.min(z, zMax) - 5))}>−</button>
                  <input type="range" min={10} max={zMax} value={Math.min(zoom, zMax)} onChange={(e) => setZoom(Number(e.target.value))} aria-label={L("Velikost loga", "Logo size")} />
                  <button type="button" className={s.zoomBtn} aria-label={L("Přiblížit", "Zoom in")} onClick={() => setZoom((z) => Math.min(zMax, z + 5))}>+</button>
                </div>
                <button type="button" className={s.reset} onClick={() => setZoom(recommended)} disabled={Math.min(zoom, zMax) === recommended}>
                  {L(`Doporučená velikost (${recommended} %)`, `Recommended size (${recommended} %)`)}
                </button>
              </div>
            </>
          )}
        </fieldset>

        <div className={s.group}>
          <button type="button" className={s.disclosure} aria-expanded={withBg} onClick={() => setWithBg((v) => !v)}>
            <span className={s.chevron} aria-hidden="true" />
            {L("Logo s pozadím", "Logo with background")}
          </button>
          {withBg && (
            <div className={s.options}>
              {backgrounds.map((b) => (
                <button key={b.key} type="button" className={s.option} aria-pressed={bgPick === b.key} onClick={() => setBgPick(b.key)}>
                  <span className={s.swatch} data-bg={b.key} />
                  {en ? b.en : b.cs}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={s.buttons}>
          <Button icon="download" onClick={() => raster("png")}>PNG</Button>
          {withBg && <Button icon="download" onClick={() => raster("jpg")}>JPG</Button>}
          <Button icon="download" onClick={vector}>SVG</Button>
        </div>
      </div>
    </div>
  );
}
