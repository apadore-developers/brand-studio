import { Section } from "@/components/layout/Section";
import { ColorPairs, ColorRatio, GradientPalette } from "@/components/blocks/ColorExtras";
import { ColorSwatches, Tints } from "@/components/blocks/ColorSwatches";
import { DownloadList, FormatList, ImagePlaceholders, RuleList } from "@/components/blocks/ContentLists";
import { FontSpecimen } from "@/components/blocks/FontSpecimen";
import { GlassDemo, GradientBlock } from "@/components/blocks/GradientBlock";
import { ClearSpace, LogoTiles } from "@/components/blocks/LogoShowcase";
import { LogoExport, LogoPanel } from "@/components/blocks/LogoPanel";
import { TypeScale } from "@/components/blocks/TypeScale";
import { OutputPreviews } from "@/components/blocks/OutputPreviews";
import { site, t } from "@/content/site";
import type { Block, Lang } from "@/content/types";

/** English names for plain-string colour labels in the gradient palette. */
const enNames: Record<string, string> = {
  "Podklad (navy 900)": "Base (navy 900)", "Roh, modrá": "Corner, blue", "Konec, tmavá navy": "End, dark navy",
  "Podklad, šedomodrá": "Base, blue grey", "Bílá": "White", "Grey 0 (bílá)": "Grey 0 (white)", "Grey 50 a 100": "Grey 50 and 100", "Střed, světle modrá": "Middle, light blue", "Konec, světlá": "End, light",
};
const tr = (name: string, lang: Lang) => (lang === "en" ? (enNames[name] ?? name) : name);

export function BlockRenderer({ block, lang, id }: { block: Block; lang: Lang; id: string }) {
  const title = "title" in block ? t(block.title, lang) : undefined;
  const body = "body" in block ? t(block.body, lang) : undefined;
  const callout =
    "callout" in block && block.callout
      ? { variant: block.callout.variant, heading: t(block.callout.title, lang) || undefined, body: t(block.callout.body, lang) }
      : undefined;
  const common = { id, title, body, callout };

  switch (block.type) {
    case "text":
      return <Section {...common} layout="full" />;
    case "logoPanel":
      return <Section {...common}><LogoPanel lang={lang} /></Section>;
    case "tints":
      return <Section {...common}><Tints lang={lang} groups={block.groups.map((g) => ({ name: t(g.name, lang), steps: g.steps }))} /></Section>;
    case "logoGenerator":
      return <Section {...common} id="logo-generator" layout="full"><LogoExport lang={lang} /></Section>;
    case "clearSpace":
      return <Section {...common}><ClearSpace ratio={t(block.ratio, lang)} /></Section>;
    case "logoVersions":
      return <Section {...common}><LogoTiles items={block.items.map((i) => ({ label: t(i.label, lang), bg: i.bg, logo: i.logo }))} /></Section>;
    case "doDont":
      return (
        <Section {...common}>
          <LogoTiles items={block.items.map((i) => ({ label: t(i.label, lang), bg: "light" as const, logo: "pozitivni" as const, effect: i.effect }))} />
        </Section>
      );
    case "favicons":
      return (
        <Section {...common}>
          <LogoTiles
            compact
            items={[
              { label: "Navy", bg: "dark", logo: "negativni", mark: true, downloads: [{ label: "SVG", href: "/downloads/favicon/apadore-favicon-navy.svg" }, { label: "PNG", href: "/downloads/favicon/apadore-favicon-navy-512.png" }] },
              { label: lang === "en" ? "White" : "Bílá", bg: "white", logo: "pozitivni", mark: true, downloads: [{ label: "SVG", href: "/downloads/favicon/apadore-favicon-bila.svg" }, { label: "PNG", href: "/downloads/favicon/apadore-favicon-bila-512.png" }] },
            ]}
          />
        </Section>
      );
    case "colors":
      return <Section {...common}><ColorSwatches colors={block.colors.map((c) => ({ ...c, name: tr(c.name, lang) }))} size={block.size} lang={lang} /></Section>;
    case "gradientPalette":
      return (
        <Section {...common}>
          <GradientPalette en={lang === "en"} items={block.items.map((i) => ({ ...i, name: t(i.name, lang), role: t(i.role, lang), visible: i.visible?.map((v) => ({ ...v, name: tr(v.name, lang) })), stops: i.stops.map((st) => ({ ...st, name: tr(st.name, lang) })) }))} />
        </Section>
      );
    case "previews":
      return <Section {...common}><OutputPreviews items={block.items.map((i) => ({ ...i, label: t(i.label, lang) }))} /></Section>;
    case "colorRatio":
      return <Section {...common}><ColorRatio parts={block.parts.map((x) => ({ ...x, name: tr(x.name, lang) }))} /></Section>;
    case "colorPairs":
      return <Section {...common}><ColorPairs en={lang === "en"} pairs={block.pairs.map((p) => ({ ...p, label: t(p.label, lang) }))} /></Section>;
    case "font":
      return (
        <Section {...common}>
          <FontSpecimen lang={lang} family={block.family} name={block.specimenName} info={block.info} download={block.download} styles={block.styles} />
        </Section>
      );
    case "typeScale":
      return <Section {...common}><TypeScale en={lang === "en"} rows={block.rows} /></Section>;
    case "gradient":
      return (
        <Section {...common}>
          <GradientBlock variant={block.variant} direction={t(block.direction, lang)} stops={block.stops.map((s) => ({ ...s, label: t(s.label, lang) }))} />
        </Section>
      );
    case "glass":
      return <Section {...common}><GlassDemo en={lang === "en"} specs={block.specs.map((s) => ({ label: t(s.label, lang), value: t(s.value, lang) }))} /></Section>;
    case "rules":
      return <Section {...common}><RuleList items={block.items.map((r) => ({ title: t(r.title, lang), body: t(r.body, lang) }))} /></Section>;
    case "images":
      return (
        <Section {...common}>
          <ImagePlaceholders note={t(site.ui.placeholder, lang)} items={block.items.map((i) => ({ ...i, label: t(i.label, lang) }))} />
        </Section>
      );
    case "formats":
      return <Section {...common}><FormatList items={block.items.map((i) => ({ ...i, label: t(i.label, lang) }))} /></Section>;
    case "downloads":
      return (
        <Section {...common}>
          <DownloadList cta={t(site.ui.download, lang)} items={block.items.map((d) => ({ title: t(d.title, lang), meta: t(d.meta, lang), href: d.link && d.href ? `/${lang}/${d.href}` : d.href, alt: d.alt, cta: d.cta && t(d.cta, lang), link: d.link }))} />
        </Section>
      );
  }
}
