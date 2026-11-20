"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Logo } from "@/components/ui/Logo";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import { LogoExport } from "./LogoExport";
import s from "./LogoPanel.module.css";

const files = {
  dark: { svg: "/brand/apadore-logo-negativni.svg", fill: "#FFFFFF", bg: "#090E21", name: "apadore-logo-negativni" },
  light: { svg: "/brand/apadore-logo-pozitivni.svg", fill: "#090E21", bg: "#FFFFFF", name: "apadore-logo-pozitivni" },
};

/** Logo preview with light/dark switch, vector downloads and the logo export tool. */
export function LogoPanel({ lang }: { lang: Lang }) {
  const [bg, setBg] = useState<"dark" | "light">("dark");
  const f = files[bg];

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
      <LogoExport lang={lang} />
    </div>
  );
}
