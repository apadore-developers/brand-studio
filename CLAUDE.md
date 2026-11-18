# Apadore Brand Studio

Online brand manuál Apadore (inspirace: Visualbook). Next.js App Router, CSS moduly podle konvencí Apadore
(skill `apadore-nextjs-konvence`). Obsah je česky, angličtina se doplňuje postupně (pole `en`).

## Zdroj pravdy

- **Figma:** soubor Apadore 2026 (NEW Web), file key `g6aje2QLWx5USCXogBP68K`, stránka `↪ Brand manuál` (id `2024:5678`).
  Pracuje se **jen na této stránce**, ostatní stránky Figmy se nemění.
- **Obsah webu:** `src/content/chapters.ts` (kapitoly a bloky), `src/content/site.ts` (texty rozhraní).
- **Logo:** `src/content/logo-paths.ts` (vektor z komponenty Logo ve Figmě, id `2037:5679`).
  Po změně loga ve Figmě znovu načti `vectorPaths` a spusť `npm run brand:assets` (vygeneruje SVG loga a favicony do `public/brand/`).

## Aktualizace z Figmy (postup pro Clauda)

1. Projdi snímky na stránce Brand manuál (`use_figma`, jen čtení) a porovnej texty a hodnoty s `src/content/chapters.ts`.
2. Změny přepiš do dat, ne do komponent. Nový typ obsahu = nový typ bloku v `src/content/types.ts` + komponenta v `src/components/blocks/` + větev v `BlockRenderer`.
3. `npm run build` musí projít (lint, stylelint, kontrola vrstev, build).
4. Shrň uživateli lidsky, co se změnilo.

## Písma

Booton (primární, licencované) zatím v projektu není: nadpisy padají na Geist SemiBold. Až bude licence,
přidej woff2 do `src/app/fonts/` a zaregistruj ho v `src/app/[lang]/layout.tsx` jako `--font-booton`.
