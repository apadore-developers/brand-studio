# Apadore Brand Studio

Online brand manuál Apadore (inspirace: Visualbook). Next.js App Router, CSS moduly podle konvencí Apadore
(skill `apadore-nextjs-konvence`). Obsah je česky, angličtina se doplňuje postupně (pole `en`).

## Repozitář a nasazení

- **GitHub:** `apadore-developers/brand-studio`, větev `ulozit/20261118-brand-studio-kostra` (výchozí, z ní nasazuje Vercel).
  Starší kopie v organizaci `Apadore/Apadore-Brand-Studio` se už nepoužívá.
- **Vercel:** tým Apadore (Pro), projekt importovaný z `apadore-developers/brand-studio`. Každé odeslání změn se nasadí samo.
- **Identita pro ukládání:** `apadore-developers` / `developers@apadore.cz` (jen v tomto projektu), jinak Vercel změny nenasadí.

## Zdroj pravdy

- **Figma (aktuální):** soubor Apadore 2026 (NEW Web) – Copy, file key `39VjOmXGf9jAkh1yXBg8SJ`: stránka BRAND MANUAL (`2024:5678`), SM Styl postů (`4001:220915`), Social media Basic Kit (`4001:79156`).
- Původní soubor `g6aje2QLWx5USCXogBP68K` (stránka `↪ Brand manuál`) už se neupravuje.
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
