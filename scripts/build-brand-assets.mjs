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

// ---------- Vector PDF (and .ai, which Illustrator opens as PDF) ----------
const toPdfOps = (d) => {
  const t = d.trim().split(/\s+/);
  const out = [];
  let i = 0;
  const H = 233;
  const pt = (x, y) => `${(+x).toFixed(3)} ${(H - +y).toFixed(3)}`;
  while (i < t.length) {
    const c = t[i++];
    if (c === "M") { out.push(`${pt(t[i], t[i + 1])} m`); i += 2; }
    else if (c === "L") { out.push(`${pt(t[i], t[i + 1])} l`); i += 2; }
    else if (c === "C") { out.push(`${pt(t[i], t[i + 1])} ${pt(t[i + 2], t[i + 3])} ${pt(t[i + 4], t[i + 5])} c`); i += 6; }
    else if (c === "Z") out.push("h");
  }
  return out.join("\n");
};
const pdf = (rgb) => {
  const body = paths.map((p) => `${toPdfOps(p.d)}\n${p.rule === "evenodd" ? "f*" : "f"}`).join("\n");
  const content = `${rgb.map((v) => (v / 255).toFixed(4)).join(" ")} rg\n${body}`;
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 1359 233] /Contents 4 0 R /Resources << >> >>",
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  ];
  let s = "%PDF-1.4\n";
  const offs = [];
  objs.forEach((o, k) => { offs.push(Buffer.byteLength(s)); s += `${k + 1} 0 obj\n${o}\nendobj\n`; });
  const x = Buffer.byteLength(s);
  s += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offs.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("")}`;
  s += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${x}\n%%EOF\n`;
  return s;
};
for (const [name, rgb] of [["pozitivni", [9, 14, 33]], ["negativni", [255, 255, 255]]]) {
  const p = pdf(rgb);
  out(`apadore-logo-${name}.pdf`, p);
  out(`apadore-logo-${name}.ai`, p);
}
console.log("pdf/ai written");

// ---------- Solid favicon and social profile variants (SVG + PNG/JPG via sharp) ----------
const solidFavicon = (bg, fg) => {
  const size = 512, h = 300, s = h / 223.58, w = 196.41 * s;
  const tx = (size - w) / 2, ty = (size - h) / 2 - 4.83 * s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><rect width="${size}" height="${size}" fill="${bg}"/><g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(5)})"><path fill="${fg}" fill-rule="${a.rule}" d="${a.d}"/></g></svg>\n`;
};
// Full logo centred on a square; 70 % of the width keeps it inside a circular crop.
const socialLogo = (bg, fg, size = 1080, share = 0.7) => {
  const w = size * share, s = w / 1359, h = 233 * s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><rect width="${size}" height="${size}" fill="${bg}"/><g transform="translate(${((size - w) / 2).toFixed(2)} ${((size - h) / 2).toFixed(2)}) scale(${s.toFixed(5)})">${pathEls(paths, fg)}</g></svg>\n`;
};

const { default: sharp } = await import("sharp");
const dl = (dir) => { mkdirSync(new URL(`../public/downloads/${dir}/`, import.meta.url), { recursive: true }); return (name) => new URL(`../public/downloads/${dir}/${name}`, import.meta.url).pathname; };
const fav = dl("favicon");
const soc = dl("profil");
const variants = [
  { key: "navy", bg: NAVY, fg: WHITE },
  { key: "bila", bg: WHITE, fg: NAVY },
];
for (const v of variants) {
  const f = solidFavicon(v.bg, v.fg);
  writeFileSync(fav(`apadore-favicon-${v.key}.svg`), f);
  for (const px of [512, 180, 32]) await sharp(Buffer.from(f)).resize(px, px).png().toFile(fav(`apadore-favicon-${v.key}-${px}.png`));
  const l = socialLogo(v.bg, v.fg);
  writeFileSync(soc(`apadore-logo-socialni-site-${v.key}.svg`), l);
  await sharp(Buffer.from(l)).png().toFile(soc(`apadore-logo-socialni-site-${v.key}-1080.png`));
  await sharp(Buffer.from(l)).jpeg({ quality: 95 }).toFile(soc(`apadore-logo-socialni-site-${v.key}-1080.jpg`));
}
// Existing gradient favicons as PNG too
for (const n of ["apadore-favicon-web", "apadore-favicon-brand-studio"]) {
  const svg = readFileSync(new URL(`../public/brand/${n}.svg`, import.meta.url));
  await sharp(svg).resize(512, 512).png().toFile(fav(`${n}-512.png`));
}
console.log("favicon and social variants written");

// ---------- Logo kit (zip): vectors, PNG/JPG 2000 px, square profile logos ----------
{
  const { execFileSync } = await import("node:child_process");
  const { mkdtempSync, copyFileSync, rmSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const stage = mkdtempSync(join(tmpdir(), "logo-kit-"));
  const root = join(stage, "apadore-logo-kit");
  for (const d of ["vektor", "png", "jpg", "profil"]) mkdirSync(join(root, d), { recursive: true });
  const brand = (n) => new URL(`../public/brand/${n}`, import.meta.url).pathname;
  const W = 2000;
  // JPG: logo with clear space of half the logo height on every side
  const padded = (bg, fg) => {
    const lw = W / (1 + 233 / 1359), s = lw / 1359, lh = 233 * s, pad = lh / 2;
    const h = Math.round(lh + 2 * pad);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" width="${W}" height="${h}"><rect width="${W}" height="${h}" fill="${bg}"/><g transform="translate(${((W - lw) / 2).toFixed(2)} ${pad.toFixed(2)}) scale(${s.toFixed(6)})">${pathEls(paths, fg)}</g></svg>`;
  };
  for (const [v, fg, bg] of [["pozitivni", NAVY, WHITE], ["negativni", WHITE, NAVY]]) {
    for (const ext of ["svg", "pdf", "ai"]) copyFileSync(brand(`apadore-logo-${v}.${ext}`), join(root, "vektor", `apadore-logo-${v}.${ext}`));
    await sharp(readFileSync(brand(`apadore-logo-${v}.svg`)), { density: 300 }).resize({ width: W }).png().toFile(join(root, "png", `apadore-logo-${v}-${W}.png`));
    await sharp(Buffer.from(padded(bg, fg))).jpeg({ quality: 95 }).toFile(join(root, "jpg", `apadore-logo-${v}-${W}.jpg`));
  }
  for (const v of ["navy", "bila"]) for (const ext of ["png", "jpg"])
    copyFileSync(soc(`apadore-logo-socialni-site-${v}-1080.${ext}`), join(root, "profil", `apadore-logo-profil-${v}-1080.${ext}`));
  const zipPath = new URL("../public/downloads/apadore-logo-kit.zip", import.meta.url).pathname;
  rmSync(zipPath, { force: true });
  execFileSync("zip", ["-qr", zipPath, "apadore-logo-kit"], { cwd: stage });
  rmSync(stage, { recursive: true, force: true });
  console.log("logo kit written");
}
