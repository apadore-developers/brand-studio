import type { L, Lang } from "./types";

export const site = {
  name: "Apadore Brand Studio",
  brand: "Apadore",
  description: {
    cs: "Online brand manuál značky Apadore: logo, barvy, písmo, přechody, obrazový styl a šablony.",
    en: "Apadore online brand guidelines: logo, colours, typography, gradients, imagery and templates.",
  } satisfies L,
  languages: ["cs", "en"] as Lang[],
  ui: {
    home: { cs: "Brand manuál", en: "Brand guidelines" },
    manual: { cs: "Brand manuál", en: "Brand guidelines" },
    search: { cs: "Hledat", en: "Search" },
    studio: { cs: "Studio", en: "Studio" },
    madeWith: { cs: "Vytvořeno v Apadore Brand Studio", en: "Made with Apadore Brand Studio" },
    login: { cs: "Přihlásit se", en: "Log in" },
    copy: { cs: "Kopírovat", en: "Copy" },
    copied: { cs: "Zkopírováno", en: "Copied" },
    download: { cs: "Stáhnout", en: "Download" },
    lightBg: { cs: "Světlé pozadí", en: "Light background" },
    darkBg: { cs: "Tmavé pozadí", en: "Dark background" },
    logoForScreens: { cs: "Logo pro obrazovky", en: "Logo for screens" },
    pngExport: { cs: "PNG na míru", en: "Custom PNG" },
    width: { cs: "Šířka (px)", en: "Width (px)" },
    padding: { cs: "Okraje", en: "Padding" },
    show: { cs: "Zobrazit", en: "Show" },
    hide: { cs: "Skrýt", en: "Hide" },
    fontTester: { cs: "Vyzkoušet písmo", en: "Font tester" },
    fontInfo: { cs: "Informace o písmu", en: "Font information" },
    fontStyles: { cs: "Používané řezy", en: "Used font styles" },
    note: { cs: "Poznámka", en: "Note" },
    warning: { cs: "Upozornění", en: "Warning" },
    dont: { cs: "Nepoužívat", en: "Don't" },
    placeholder: { cs: "Podklad doplníme", en: "Image to be added" },
    enPending: { cs: "", en: "English version in progress. Showing Czech text." },
  } satisfies Record<string, L>,
};

export const t = (text: L | undefined, lang: Lang): string => {
  if (!text) return "";
  return (lang === "en" ? text.en : text.cs) ?? text.cs;
};
