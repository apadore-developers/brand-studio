"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { t } from "@/content/site";
import type { Chapter, Lang } from "@/content/types";
import { urls } from "@/lib/urls";
import s from "./ChapterGrid.module.css";

function Cover({ kind }: { kind: Chapter["cover"] }) {
  switch (kind) {
    case "logo":
      return <Logo className={s.coverLogo} />;
    case "intro":
      return (
        <span className={s.coverGlass}>
          <span className={s.struck}>agentura</span>
          <span className={s.dot} aria-hidden="true" />
          partner
        </span>
      );
    case "colors":
      return (
        <div className={s.coverColors}>
          <span data-c="navy" /><span data-c="white" /><span data-c="grey" />
        </div>
      );
    case "type":
      return <span className={s.coverType}>Aa</span>;
    case "gradient":
      return <span className={s.coverGlass}>přechod</span>;
    case "images":
      return <div className={s.coverImages}><span /><span /><span /><span /></div>;
    case "social":
      return <span className={s.coverQuote}>„Citát“</span>;
    case "blog":
      return <span className={s.coverGlass}>obálka</span>;
    default:
      return <span className={s.coverType}>↓</span>;
  }
}

const VIEW_KEY = "brand-studio:view";

export function ChapterGrid({ chapters, lang }: { chapters: Chapter[]; lang: Lang }) {
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(VIEW_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "list" || saved === "grid") setView(saved);
    } catch {}
  }, []);

  function choose(v: "grid" | "list") {
    setView(v);
    try {
      localStorage.setItem(VIEW_KEY, v);
    } catch {}
  }

  return (
    <div className={s.wrap}>
      <div className={s.toolbar}>
        <span className={s.count}>
          {lang === "en" ? "All chapters of the brand guidelines" : "Všechny kapitoly brand manuálu"} ({chapters.length})
        </span>
        <div className={s.switch} role="group" aria-label={lang === "en" ? "View" : "Zobrazení"}>
          <button type="button" className={s.switchBtn} aria-pressed={view === "grid"} onClick={() => choose("grid")} aria-label={lang === "en" ? "Grid" : "Mřížka"}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="2" width="5" height="5" /><rect x="9" y="2" width="5" height="5" /><rect x="2" y="9" width="5" height="5" /><rect x="9" y="9" width="5" height="5" /></svg>
          </button>
          <button type="button" className={s.switchBtn} aria-pressed={view === "list"} onClick={() => choose("list")} aria-label={lang === "en" ? "List" : "Řádky"}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="3" width="12" height="1.5" /><rect x="2" y="7.25" width="12" height="1.5" /><rect x="2" y="11.5" width="12" height="1.5" /></svg>
          </button>
        </div>
      </div>
    <ul role="list" className={s.grid} data-view={view}>
      {chapters.map((c, i) => (
        <li key={c.slug}>
          <Link href={urls.chapter(lang, c.slug)} className={s.card}>
            <div className={s.cover} data-cover={c.cover} data-theme={["logo", "intro", "gradient", "social", "blog"].includes(c.cover) ? "dark" : undefined}>
              <Cover kind={c.cover} />
            </div>
            <span className={s.num}>{String(i + 1).padStart(2, "0")}.</span>
            <div className={s.meta}>
              <h2 className={s.title}>{t(c.title, lang)}</h2>
              <p className={s.desc}>{t(c.description, lang)}</p>
              {c.summary && <p className={s.summary}>{t(c.summary, lang)}</p>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
