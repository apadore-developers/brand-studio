import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Callout } from "@/components/ui/Callout";
import { chapters, getChapter } from "@/content/chapters";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import { urls } from "@/lib/urls";

type Params = Promise<{ lang: string; chapter: string }>;

export function generateStaticParams() {
  return site.languages.flatMap((lang) => chapters.map((c) => ({ lang, chapter: c.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, chapter } = await params;
  const c = getChapter(chapter);
  return c ? { title: t(c.title, lang as Lang), description: t(c.description, lang as Lang) } : {};
}

export default async function ChapterPage({ params }: { params: Params }) {
  const { lang: l, chapter } = await params;
  const lang = l as Lang;
  const c = getChapter(chapter);
  if (!c) notFound();
  return (
    <>
      <SiteHeader lang={lang} eyebrow={t(site.ui.manual, lang)} eyebrowHref={urls.home(lang)} title={t(c.title, lang)} path={`/${c.slug}`} />
      <main className="container">
        <Breadcrumb items={[{ label: t(site.ui.home, lang), href: urls.home(lang) }, { label: t(c.title, lang) }]} />
        {lang === "en" && <Callout>{t(site.ui.enPending, lang)}</Callout>}
        {c.blocks.map((b, i) => (
          <BlockRenderer key={i} block={b} lang={lang} id={`${c.slug}-${i + 1}`} />
        ))}
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
