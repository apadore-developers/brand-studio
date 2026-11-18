import { ChapterGrid } from "@/components/blocks/ChapterGrid";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { chapters } from "@/content/chapters";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <SiteHeader lang={lang} eyebrow="Apadore" title={t(site.ui.manual, lang)} />
      <main className="container">
        <ChapterGrid chapters={chapters} lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
