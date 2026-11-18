/** Localized text. English is optional for now; the Czech text is used as a fallback. */
export type L = { cs: string; en?: string };

export type Lang = "cs" | "en";

export type Color = {
  name: string;
  hex: string;
  use?: L;
  cmyk?: string;
  pantone?: string;
};

export type CalloutData = { variant: "note" | "warning"; title?: L; body: L };

export type Block =
  | { type: "text"; title?: L; body: L; callout?: CalloutData }
  | { type: "logoPanel"; title: L; body: L; callout?: CalloutData }
  | { type: "clearSpace"; title: L; body: L; ratio: L }
  | { type: "logoVersions"; title: L; body: L; items: { label: L; bg: "light" | "dark" | "gradientDark" | "gradientLight" | "white"; logo: "pozitivni" | "negativni" }[] }
  | { type: "doDont"; title: L; body?: L; items: { label: L; kind: "dont"; effect: "stretch" | "rotate" | "recolor" | "outline" | "shadow" | "lowContrast" }[] }
  | { type: "favicons"; title: L; body: L }
  | { type: "colors"; title: L; body: L; size: "lg" | "md" | "sm"; colors: Color[] }
  | { type: "gradientPalette"; title: L; body: L; items: { name: L; variant: "dark" | "light"; role: L; stops: { name: string; hex: string; alpha: number; position: number }[] }[] }
  | { type: "previews"; title: L; body?: L; items: { kind: "thought" | "blogCover" | "photoQuote"; variant: "dark" | "light"; label: L; text: string; author?: string; link?: string; accent?: string; avatar?: string; photo?: string }[] }
  | { type: "colorRatio"; title: L; body: L; parts: { name: string; hex: string; percent: number }[] }
  | { type: "colorPairs"; title: L; body: L; pairs: { label: L; bg: string; fg: string }[] }
  | { type: "font"; title: L; body: L; family: "heading" | "body" | "mono"; specimenName: string; info: { label: L; value: string }[]; download?: { label: L; href: string }; styles: { name: string; weight: number; use: L }[] }
  | { type: "typeScale"; title: L; body: L; rows: { name: string; size: number; lineHeight: number; tracking: number; family: "heading" | "body" | "mono" }[] }
  | { type: "gradient"; title: L; body: L; variant: "dark" | "light"; direction: L; stops: { label: L; hex: string; alpha: number }[] }
  | { type: "glass"; title: L; body: L; specs: { label: L; value: L }[] }
  | { type: "rules"; title: L; body?: L; items: { title: L; body: L }[] }
  | { type: "images"; title: L; body: L; items: { label: L; source?: string; src?: string; ratio: string }[] }
  | { type: "formats"; title: L; body: L; items: { label: L; w: number; h: number }[] }
  | { type: "downloads"; title: L; body?: L; items: { title: L; meta: L; href?: string }[] };

export type Chapter = {
  slug: string;
  title: L;
  description: L;
  /** Longer text for the list view on the home page. */
  summary?: L;
  cover: "logo" | "colors" | "type" | "gradient" | "images" | "social" | "blog" | "resources" | "intro";
  blocks: Block[];
};
