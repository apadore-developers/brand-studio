/** Tiny vector PDF writer and ZIP (store) writer for the logo generator. No dependencies. */

type Rgb = [number, number, number];

const hexRgb = (hex: string): Rgb => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as Rgb;
};

/** Colour of `top` (with alpha) composited over an opaque `base`. */
export const over = (base: string, top: string, alpha: number): Rgb => {
  const b = hexRgb(base);
  const t = hexRgb(top);
  return b.map((v, i) => v * (1 - alpha) + t[i] * alpha) as Rgb;
};

const n = (v: number) => (Math.round(v * 1000) / 1000).toString();
const rgbOp = (c: Rgb) => c.map(n).join(" ");

/** SVG path data (absolute M/L/C/Z) to PDF path operators. */
function pathOps(d: string) {
  const t = d.trim().split(/\s+/);
  const out: string[] = [];
  let i = 0;
  while (i < t.length) {
    const c = t[i++];
    if (c === "M") { out.push(`${t[i]} ${t[i + 1]} m`); i += 2; }
    else if (c === "L") { out.push(`${t[i]} ${t[i + 1]} l`); i += 2; }
    else if (c === "C") { out.push(`${t.slice(i, i + 6).join(" ")} c`); i += 6; }
    else if (c === "Z") out.push("h");
  }
  return out.join("\n");
}

export type PdfBackground =
  | { kind: "none" }
  | { kind: "solid"; color: Rgb }
  | { kind: "gradient"; base: Rgb; stops: { offset: number; color: Rgb }[]; line: { x1: number; y1: number; x2: number; y2: number } };

/**
 * One-page vector PDF: optional background (solid or axial gradient) and the logo.
 * Coordinates come in SVG space (y down) and are flipped here.
 */
export function buildPdf(opts: {
  w: number;
  h: number;
  background: PdfBackground;
  paths: { d: string; rule: "evenodd" | "nonzero" }[];
  fill: Rgb;
  transform: { tx: number; ty: number; scale: number };
}) {
  const { w, h, background, paths, fill, transform } = opts;
  const objs: string[] = [];
  let resources = "<< >>";
  let content = "";

  if (background.kind === "solid") content += `${rgbOp(background.color)} rg\n0 0 ${n(w)} ${n(h)} re f\n`;
  if (background.kind === "gradient") {
    const { stops, line } = background;
    const fns: number[] = [];
    // objects 5.. are functions, then the shading
    const fnObjs = stops.slice(1).map((st, i) => `<< /FunctionType 2 /Domain [0 1] /C0 [${rgbOp(stops[i].color)}] /C1 [${rgbOp(st.color)}] /N 1 >>`);
    fnObjs.forEach((_, i) => fns.push(5 + i));
    const bounds = stops.slice(1, -1).map((st) => n(st.offset));
    const stitchId = 5 + fnObjs.length;
    const shadingId = stitchId + 1;
    const stitch = `<< /FunctionType 3 /Domain [0 1] /Functions [${fns.map((f) => `${f} 0 R`).join(" ")}] /Bounds [${bounds.join(" ")}] /Encode [${fns.map(() => "0 1").join(" ")}] >>`;
    const shading = `<< /ShadingType 2 /ColorSpace /DeviceRGB /Coords [${n(line.x1)} ${n(h - line.y1)} ${n(line.x2)} ${n(h - line.y2)}] /Function ${stitchId} 0 R /Extend [true true] >>`;
    objs.push(...fnObjs, stitch, shading);
    resources = `<< /Shading << /Sh0 ${shadingId} 0 R >> >>`;
    content += `${rgbOp(background.base)} rg\n0 0 ${n(w)} ${n(h)} re f\nq 0 0 ${n(w)} ${n(h)} re W n /Sh0 sh Q\n`;
  }

  const { tx, ty, scale } = transform;
  content += `q ${n(scale)} 0 0 ${n(-scale)} ${n(tx)} ${n(h - ty)} cm\n${rgbOp(fill)} rg\n`;
  content += paths.map((p) => `${pathOps(p.d)}\n${p.rule === "evenodd" ? "f*" : "f"}`).join("\n");
  content += "\nQ";

  const all = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${n(w)} ${n(h)}] /Contents 4 0 R /Resources ${resources} >>`,
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    ...objs,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  all.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${all.length + 1}\n0000000000 65535 f \n${offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("")}`;
  pdf += `trailer\n<< /Size ${all.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new Blob([pdf], { type: "application/pdf" });
}

// ---------- ZIP (store, no compression) ----------
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c >>> 0;
  }
  return t;
})();

const crc32 = (data: Uint8Array) => {
  let c = 0xffffffff;
  for (const b of data) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

export async function buildZip(files: { name: string; blob: Blob }[]) {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  for (const f of files) {
    const data = new Uint8Array(await f.blob.arrayBuffer());
    const name = enc.encode(f.name);
    const crc = crc32(data);
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, name.length, true);
    const cen = new DataView(new ArrayBuffer(46));
    cen.setUint32(0, 0x02014b50, true);
    cen.setUint16(4, 20, true);
    cen.setUint16(6, 20, true);
    cen.setUint16(8, 0x0800, true);
    cen.setUint32(16, crc, true);
    cen.setUint32(20, data.length, true);
    cen.setUint32(24, data.length, true);
    cen.setUint16(28, name.length, true);
    cen.setUint32(42, offset, true);
    parts.push(new Uint8Array(local.buffer), name, data);
    central.push(new Uint8Array(cen.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const size = central.reduce((a, c) => a + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, size, true);
  end.setUint32(16, offset, true);
  return new Blob([...parts, ...central, new Uint8Array(end.buffer)] as BlobPart[], { type: "application/zip" });
}
