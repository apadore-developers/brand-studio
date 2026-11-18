// Generates logo and favicon SVGs from src/content/logo-paths.ts (single source exported from Figma).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = readFileSync(new URL("../src/content/logo-paths.ts", import.meta.url), "utf8");
const paths = [...src.matchAll(/rule: "(evenodd|nonzero)", d: "([^"]+)"/g)].map((m) => ({ rule: m[1], d: m[2] }));
const NAVY = "#090E21";
const WHITE = "#FFFFFF";

const pathEls = (list, fill) =>
  list.map((p) => `<path fill="${fill}" fill-rule="${p.rule}" d="${p.d}"/>`).join("");

const logo = (fill) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1359 233" width="1359" height="233">${pathEls(paths, fill)}</svg>\n`;

// Letter A: bbox x 0..196.41, y 4.83..228.41
const a = paths[1];
const gradients = {
  dark: `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3F8BFF" stop-opacity="0.55"/><stop offset="1" stop-color="#182037" stop-opacity="0"/></linearGradient>`,
  light: `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7FA3DA" stop-opacity="0.85"/><stop offset="0.55" stop-color="#B9CBE6" stop-opacity="0.4"/><stop offset="1" stop-color="#E6E8EE" stop-opacity="0"/></linearGradient>`,
};
const favicon = (mode, fg) => {
  const size = 512;
  const h = 300;
  const s = h / 223.58;
  const w = 196.41 * s;
  const tx = (size - w) / 2;
  const ty = (size - h) / 2 - 4.83 * s;
  const base = mode === "dark" ? NAVY : "#EEF0F4";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><defs>${gradients[mode]}</defs><rect width="${size}" height="${size}" fill="${base}"/><rect width="${size}" height="${size}" fill="url(#g)"/><g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(5)})"><path fill="${fg}" fill-rule="${a.rule}" d="${a.d}"/></g></svg>\n`;
};

mkdirSync(new URL("../public/brand/", import.meta.url), { recursive: true });
const out = (name, svg) => writeFileSync(new URL(`../public/brand/${name}`, import.meta.url), svg);
out("apadore-logo-pozitivni.svg", logo(NAVY));
out("apadore-logo-negativni.svg", logo(WHITE));
out("apadore-favicon-web.svg", favicon("dark", WHITE));
out("apadore-favicon-brand-studio.svg", favicon("light", NAVY));

console.log("brand assets written:", paths.length, "paths");
