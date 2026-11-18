import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { site, t } from "@/content/site";
import type { Lang } from "@/content/types";
import "@/styles/global.css";

const geist = localFont({ src: "../fonts/Geist-Variable.woff2", variable: "--font-geist", display: "swap", weight: "100 900" });
const plexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-mono-latin-ext-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return site.languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: { default: site.name, template: `%s | ${site.name}` },
    description: t(site.description, lang as Lang),
    robots: { index: false, follow: false },
    icons: { icon: "/brand/apadore-favicon-brand-studio.svg" },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!site.languages.includes(lang as Lang)) notFound();
  return (
    <html lang={lang} className={`${geist.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
