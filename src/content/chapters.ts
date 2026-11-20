import type { Chapter } from "./types";

/**
 * Brand manual content. Source of truth: Figma file "Apadore 2026 (NEW Web)",
 * page "↪ Brand manuál". When the manual changes in Figma, update this file.
 */
export const chapters: Chapter[] = [
  {
    slug: "uvod",
    cover: "intro",
    title: { cs: "Úvod", en: "Introduction" },
    description: { cs: "Co je značka Apadore a jak s manuálem pracovat.", en: "What the Apadore brand is and how to use these guidelines." },
    summary: { cs: "Kdo je Apadore, na čem značka stojí a jak s manuálem pracovat. Tmavá navy a bílá, tři písma, jemné přechody a tón komunikace, který dává přednost klientovi.", en: "Who Apadore is, what the brand stands on and how to use these guidelines. Dark navy and white, three typefaces, soft gradients and a tone of voice that puts the client first." },
    blocks: [
      {
        type: "text",
        title: { cs: "Vítejte v brandu Apadore", en: "Welcome to the Apadore brand" },
        body: {
          cs: "Apadore je studio, kde hlavní slovo mají naše práce: obrázky a case studies. Značka proto stojí na střídmém základu, který projektům nepřekáží: tmavá navy a bílá, světlé šedé plochy, tři písma a jemné přechody.\n\nManuál popisuje, jak s těmito prvky zacházet, aby všechno, co vytvoříme, od webu přes case studies po příspěvky na sociálních sítích, působilo jako jedno studio. Mluvíme klidně, věcně a s přínosem pro klienta na prvním místě.",
          en: "Apadore is a studio where our work speaks first: images and case studies. The brand therefore stands on a restrained base that never gets in the way: dark navy and white, light grey surfaces, three typefaces and subtle gradients.",
        },
        callout: { variant: "note", body: { cs: "Odpovídá: art director. Máte otázku ke značce? Napište, než něco upravíte.", en: "Owner: art director. Have a question about the brand? Get in touch before you change anything." } },
      },
    ],
  },
  {
    slug: "logo",
    cover: "logo",
    title: { cs: "Logo", en: "Logo" },
    description: { cs: "Stáhněte si správnou verzi loga a dodržte ochrannou zónu.", en: "Download the right logo version and keep the clear space." },
    summary: { cs: "Hlavní slovní značka, ochranná zóna, minimální velikost, barevné verze a nepovolené použití. Logo si tu stáhnete jako SVG nebo PNG v libovolné šířce a najdete i favicon.", en: "Primary wordmark, clear space, minimum size, colour versions and misuse. Download the logo as SVG or as PNG at any width, plus the favicon." },
    blocks: [
      {
        type: "logoPanel",
        title: { cs: "Hlavní logo", en: "Primary logo" },
        body: {
          cs: "Logo tvoří slovo APADORE ve verzálkách, bez symbolu. V běžném textu se firma píše „Apadore“, verzálky patří jen logu. Logo nikdy nepřepisujte písmem, vždy použijte originální soubor.",
          en: "The logo is the word APADORE in capitals, without a symbol. In running text the company is written “Apadore”. Never retype the logo, always use the original file.",
        },
        callout: { variant: "note", title: { cs: "Minimální šířka loga", en: "Minimum logo width" }, body: { cs: "140 px na obrazovkách. Tisk: [DOPLNIT].", en: "140 px on screens. Print: [TBD]." } },
      },
      {
        type: "clearSpace",
        title: { cs: "Ochranná zóna", en: "Clear space" },
        ratio: { cs: "1× výška loga", en: "1× logo height" },
        body: { cs: "Kolem loga nechte volný prostor alespoň jedné výšky loga (x). Do zóny nezasahuje text, okraj formátu ani jiný prvek.", en: "Keep free space of at least one logo height (x) around the logo." },
      },
      {
        type: "logoVersions",
        title: { cs: "Barevné verze", en: "Colour versions" },
        body: {
          cs: "Logo existuje jen ve dvou barvách: bílá (negativní) na navy a tmavém přechodu, což je primární kombinace, a navy 900 (pozitivní) na bílém a doplňkovém světlém přechodu. Jiné barvy v logu nepoužívejte.",
          en: "The logo exists in two colours only: white (negative) on navy and the dark gradient, the primary combination, and navy 900 (positive) on white and the supplementary light gradient.",
        },
        items: [
          { label: { cs: "Bílá na navy", en: "White on navy" }, bg: "dark", logo: "negativni" },
          { label: { cs: "Bílá na tmavém přechodu", en: "White on dark gradient" }, bg: "gradientDark", logo: "negativni" },
          { label: { cs: "Navy na bílé", en: "Navy on white" }, bg: "white", logo: "pozitivni" },
          { label: { cs: "Navy na světlém přechodu (doplňkové)", en: "Navy on light gradient (supplementary)" }, bg: "gradientLight", logo: "pozitivni" },
        ],
      },
      {
        type: "doDont",
        title: { cs: "Nepovolené použití", en: "Incorrect use" },
        body: { cs: "Logo neupravujte. Nedeformujte ho, neotáčejte, nepřebarvujte, nepřidávejte obrys, stín ani efekty a nedávejte ho na podklad, kde se ztrácí.", en: "Do not alter the logo. Do not distort, rotate or recolour it, do not add an outline, shadow or effects, and do not place it on a background where it gets lost." },
        items: [
          { kind: "dont", effect: "stretch", label: { cs: "Nedeformujte", en: "Don't distort" } },
          { kind: "dont", effect: "rotate", label: { cs: "Neotáčejte", en: "Don't rotate" } },
          { kind: "dont", effect: "recolor", label: { cs: "Nepřebarvujte", en: "Don't recolour" } },
          { kind: "dont", effect: "outline", label: { cs: "Nepoužívejte obrys", en: "Don't outline" } },
          { kind: "dont", effect: "shadow", label: { cs: "Nepřidávejte stín", en: "Don't add shadows" } },
          { kind: "dont", effect: "lowContrast", label: { cs: "Nedávejte na málo kontrastní podklad", en: "Don't place on low contrast" } },
        ],
      },
      {
        type: "favicons",
        title: { cs: "Favicon", en: "Favicon" },
        body: {
          cs: "Favicon je písmeno A z loga a používá se jen v malých velikostech (16 až 64 px). Web Apadore: bílé A na tmavém přechodu. Apadore Brand Studio: inverzně, navy A na světlém přechodu. Oba přechody mají stejný směr. Ve větších formátech (profilová fotka, ikona aplikace) používáme celé logo Apadore.",
          en: "The favicon is the letter A from the logo and is used only at small sizes (16 to 64 px). Apadore website: white A on the dark gradient. Apadore Brand Studio: inverted, navy A on the light gradient. Both gradients run in the same direction. Larger formats (profile picture, app icon) use the full Apadore logo.",
        },
      },
    ],
  },
  {
    slug: "barvy",
    cover: "colors",
    title: { cs: "Barvy", en: "Colours" },
    description: { cs: "Navy a bílá jako hlavní dvojice, šedé jen doplňují.", en: "Navy and white as the core pair, greys support." },
    summary: { cs: "Hlavní dvojice navy a bílá, navy odstíny, neutrální šedé a barvy přechodů. Hodnoty HEX a RGB zkopírujete kliknutím, k tomu poměr barev a kontrastní kombinace.", en: "The core navy and white pair, navy tints, neutral greys and gradient colours. Copy HEX and RGB values with a click, plus the colour ratio and contrast pairs." },
    blocks: [
      {
        type: "colors",
        size: "lg",
        title: { cs: "Hlavní dvojice", en: "Core pair" },
        body: { cs: "Hlavní dvojici tvoří tmavá navy a bílá. Většina formátů stojí jen na těchto dvou barvách. Hodnoty CMYK a Pantone pro tisk: [DOPLNIT].", en: "Dark navy and white form the core pair. Most formats rely on these two colours only. CMYK and Pantone values for print: [TBD]." },
        colors: [
          { name: "Navy 900", hex: "#090E21", use: { cs: "Text, logo, tmavé sekce", en: "Text, logo, dark sections" } },
          { name: "Bílá", hex: "#FFFFFF", use: { cs: "Pozadí, text na tmavém, negativní logo", en: "Background, text on dark, negative logo" } },
        ],
      },
      {
        type: "colors",
        size: "md",
        title: { cs: "Navy (primární)", en: "Navy (primary)" },
        body: { cs: "Primární barevná škála značky. Navy 900 nese text, logo a tmavé plochy, světlejší odstíny sekundární text a prvky na tmavém pozadí. Škála odpovídá proměnným navy ve Figmě (UI Kit).", en: "The primary colour scale of the brand. Navy 900 carries text, the logo and dark surfaces; lighter tints carry secondary text and elements on dark backgrounds. The scale matches the navy variables in Figma (UI Kit)." },
        colors: [
          { name: "Navy 900", hex: "#090E21", use: { cs: "Text, logo, tmavé sekce", en: "Text, logo, dark sections" } },
          { name: "Navy 800", hex: "#3A3E4D", use: { cs: "Sekundární text", en: "Secondary text" } },
          { name: "Navy 600", hex: "#737681", use: { cs: "Popisy, doplňkový text", en: "Captions, supporting text" } },
          { name: "Navy 400", hex: "#9D9FA6", use: { cs: "Text na tmavém pozadí", en: "Text on dark backgrounds" } },
          { name: "Navy 200", hex: "#CECFD3", use: { cs: "Linky na tmavém pozadí", en: "Lines on dark backgrounds" } },
        ],
      },
      {
        type: "colors",
        size: "md",
        title: { cs: "Neutrální barvy", en: "Neutrals" },
        body: { cs: "Celá šedá škála z proměnných ve Figmě (UI Kit). Světlé šedé nesou karty, tlačítka a linky, tmavší šedé sekundární text.", en: "The full grey scale from the Figma variables (UI Kit). Light greys carry cards, buttons and lines, darker greys secondary text." },
        colors: [
          { name: "Grey 0 (bílá)", hex: "#FFFFFF", use: { cs: "Pozadí stránky", en: "Page background" } },
          { name: "Grey 50", hex: "#F1F1F1", use: { cs: "Karty, tlačítka, plochy", en: "Cards, buttons, surfaces" } },
          { name: "Grey 100", hex: "#E4E4E4", use: { cs: "Linky a oddělovače", en: "Lines and dividers" } },
          { name: "Grey 400", hex: "#898989", use: { cs: "Popisky sekcí", en: "Section labels" } },
          { name: "Grey 600", hex: "#656565", use: { cs: "Sekundární text", en: "Secondary text" } },
          { name: "Grey 900", hex: "#131313", use: { cs: "Nejtmavší neutrální", en: "Darkest neutral" } },
        ],
      },
      {
        type: "gradientPalette",
        title: { cs: "Barvy přechodů", en: "Gradient colours" },
        body: {
          cs: "Výsledné barvy, které jsou na přechodech opravdu vidět (odečtené z hotového přechodu, pracovní odhad), a pod nimi to, jak je přechod sestavený ve Figmě. Modré tóny patří jen do přechodů, samostatně se nepoužívají.",
          en: "The resulting colours actually visible in the gradients (sampled from the finished gradient, a working estimate), and below them how the gradient is built in Figma. Blue tones belong only to gradients and are never used on their own.",
        },
        items: [
          {
            name: { cs: "Tmavý přechod", en: "Dark gradient" },
            variant: "dark",
            role: { cs: "Primární", en: "Primary" },
            visible: [
              { name: "Gradient Blue (roh)", hex: "#1E427E" },
              { name: "Gradient Mid", hex: "#121F3F" },
              { name: "Gradient Navy (konec)", hex: "#080D1F" },
            ],
            stops: [
              { name: "Podklad (navy 900)", hex: "#090E21", alpha: 100, position: 0 },
              { name: "Roh, modrá", hex: "#3F8BFF", alpha: 45, position: 0 },
              { name: "Konec, tmavá navy", hex: "#182037", alpha: 0, position: 100 },
            ],
          },
          {
            name: { cs: "Světlý přechod", en: "Light gradient" },
            variant: "light",
            role: { cs: "Doplňkový", en: "Supplementary" },
            visible: [
              { name: "Mist (začátek)", hex: "#EEF0F4" },
              { name: "Sky Mist (střed)", hex: "#D9E2EE" },
              { name: "Sky (roh)", hex: "#96B3DE" },
            ],
            stops: [
              { name: "Podklad, šedomodrá", hex: "#EEF0F4", alpha: 100, position: 0 },
              { name: "Roh, modrá", hex: "#7FA3DA", alpha: 75, position: 0 },
              { name: "Střed, světle modrá", hex: "#B9CBE6", alpha: 35, position: 55 },
              { name: "Konec, světlá", hex: "#E6E8EE", alpha: 0, position: 100 },
            ],
          },
        ],
      },
      {
        type: "colorRatio",
        title: { cs: "Poměr barev", en: "Colour ratio" },
        body: { cs: "Orientační poměr ploch včetně barev, které jsou vidět na přechodech. Značku nese dvojice navy a bílá, modré z přechodů ji doplňují (tmavý přechod víc než světlý).", en: "An indicative ratio of surfaces, including the colours visible in the gradients. The navy and white pair carries the brand, the gradient blues complement it (the dark gradient more than the light one)." },
        parts: [
          { name: "Navy 900", hex: "#090E21", percent: 42 },
          { name: "Gradient Blue", hex: "#1E427E", percent: 8 },
          { name: "Sky", hex: "#96B3DE", percent: 4 },
          { name: "Sky Mist", hex: "#D9E2EE", percent: 2 },
          { name: "Grey 50 a 100", hex: "#F1F1F1", percent: 12 },
          { name: "Bílá", hex: "#FFFFFF", percent: 32 },
        ],
      },
      {
        type: "colors",
        size: "lg",
        title: { cs: "Akcent", en: "Accent" },
        body: { cs: "Červená je jediný barevný akcent značky. Patří jen do grafických prvků: malá tečka ve skleněném prvku na obálkách blogu. Do poměru barev se nepočítá a jinde se zatím nepoužívá.", en: "Red is the only colour accent. Used only as a small dot in graphic elements." },
        colors: [
          { name: "Accent Red", hex: "#FF5A1F", use: { cs: "Jen tečka ve skleněném prvku (viz Grafické prvky)", en: "Only the dot inside a glass element (see Graphic elements)" } },
        ],
      },
    ],
  },
  {
    slug: "typografie",
    cover: "type",
    title: { cs: "Typografie", en: "Typography" },
    description: { cs: "Booton pro nadpisy, Geist pro text, IBM Plex Mono pro štítky.", en: "Booton for headings, Geist for text, IBM Plex Mono for labels." },
    summary: { cs: "Booton pro nadpisy, Geist pro text a IBM Plex Mono pro štítky. Výrobci, licence a odkazy ke stažení, škála velikostí s řádkováním a prostrkáním a zkouška vlastního textu.", en: "Booton for headings, Geist for body text and IBM Plex Mono for labels. Foundries, licences and download links, a type scale with line height and tracking, and a live type tester." },
    blocks: [
      {
        type: "font",
        family: "heading",
        specimenName: "Booton",
        title: { cs: "Booton: primární písmo", en: "Booton: primary typeface" },
        body: { cs: "Výrazné geometrické písmo pro všechny nadpisy (Display, H1 až H4). Vždy řez SemiBold, užší prostrkání −4 %, u Display −7 %. Nadpisy píšeme normálně, ne verzálkami.", en: "Geometric typeface for all headings. Always SemiBold, tracking −4 %, Display −7 %." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "Displaay Type Foundry" },
          { label: { cs: "Autor", en: "Designer" }, value: "Daniel Quisek, 2024" },
          { label: { cs: "Licence", en: "Licence" }, value: "Komerční, licence Apadore: [DOPLNIT]" },
        ],
        download: { label: { cs: "displaay.net", en: "displaay.net" }, href: "https://displaay.net/typeface/booton" },
        styles: [{ name: "SemiBold", weight: 600, use: { cs: "Jediný řez pro nadpisy", en: "The only heading weight" } }],
      },
      {
        type: "font",
        family: "body",
        specimenName: "Geist",
        title: { cs: "Geist: písmo pro text", en: "Geist: text typeface" },
        body: { cs: "Čitelné písmo pro odstavce, úvodní věty, popisy a rozhraní. Regular pro delší text, Medium pro menší velikosti a rozhraní, SemiBold pro zvýraznění.", en: "A legible typeface for paragraphs, lead sentences, captions and interfaces. Regular for longer text, Medium for smaller sizes and UI, SemiBold for emphasis." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "Vercel a Basement Studio" },
          { label: { cs: "Licence", en: "Licence" }, value: "SIL Open Font License, zdarma" },
        ],
        download: { label: { cs: "vercel.com/font", en: "vercel.com/font" }, href: "https://vercel.com/font" },
        styles: [
          { name: "Regular", weight: 400, use: { cs: "Odstavce, Lead", en: "Paragraphs, lead" } },
          { name: "Medium", weight: 500, use: { cs: "Body M a S, rozhraní", en: "Body M and S, interface" } },
          { name: "SemiBold", weight: 600, use: { cs: "Zvýraznění", en: "Emphasis" } },
        ],
      },
      {
        type: "font",
        family: "mono",
        specimenName: "IBM Plex Mono",
        title: { cs: "IBM Plex Mono: štítky", en: "IBM Plex Mono: labels" },
        body: { cs: "Neproporcionální písmo pro štítky, popisky a tlačítka. Vždy verzálky, řez Medium, malé velikosti 12 až 14 px. Nikdy pro delší text.", en: "Monospaced typeface for labels and buttons. Always uppercase, Medium, 12 to 14 px." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "IBM (Mike Abbink a Bold Monday), 2017" },
          { label: { cs: "Licence", en: "Licence" }, value: "SIL Open Font License, zdarma" },
        ],
        download: { label: { cs: "github.com/IBM/plex", en: "github.com/IBM/plex" }, href: "https://github.com/IBM/plex" },
        styles: [{ name: "Medium", weight: 500, use: { cs: "Štítky a tlačítka", en: "Labels and buttons" } }],
      },
      {
        type: "typeScale",
        title: { cs: "Hierarchie", en: "Type scale" },
        body: { cs: "Velikosti jen ze škály textových stylů. Nadpisy mají záporné prostrkání (tracking): Display −7 %, H1 až H4 −4 %. Mobilní nadpisy: H1 62, H2 32, H3 26, H4 20.", en: "Use only sizes from the text style scale. Headings have negative tracking: Display −7 %, H1 to H4 −4 %. Mobile headings: H1 62, H2 32, H3 26, H4 20." },
        rows: [
          { name: "Display", size: 160, lineHeight: 115, tracking: -7, family: "heading" },
          { name: "H1", size: 120, lineHeight: 120, tracking: -4, family: "heading" },
          { name: "H2", size: 80, lineHeight: 90, tracking: -4, family: "heading" },
          { name: "H3", size: 62, lineHeight: 64, tracking: -4, family: "heading" },
          { name: "H4", size: 36, lineHeight: 40, tracking: -4, family: "heading" },
          { name: "Lead", size: 24, lineHeight: 29, tracking: 0, family: "body" },
          { name: "Body L", size: 18, lineHeight: 24, tracking: 0, family: "body" },
          { name: "Body M", size: 16, lineHeight: 22, tracking: 0, family: "body" },
          { name: "Label", size: 14, lineHeight: 16, tracking: 1, family: "mono" },
        ],
      },
      {
        type: "colorPairs",
        title: { cs: "Text na podkladu", en: "Text on background" },
        body: { cs: "Na jakém podkladu má text ležet a jakou barvou. Doporučené dvojice textu a pozadí. Číslo u každé dvojice je kontrast, tedy o kolik je text světlejší nebo tmavší než pozadí (1 : 1 = stejná barva, 21 : 1 = černá na bílé). Podle pravidel přístupnosti WCAG potřebuje běžný text aspoň 4,5 : 1 (úroveň AA), ideálně 7 : 1 (AAA). Velké nadpisy stačí 3 : 1.", en: "Which background text should sit on and in which colour. Recommended text and background pairs. The number next to each pair is the contrast, i.e. how much lighter or darker the text is than the background (1 : 1 = the same colour, 21 : 1 = black on white). Under the WCAG accessibility guidelines, body text needs at least 4.5 : 1 (level AA), ideally 7 : 1 (AAA). Large headings need 3 : 1." },
        pairs: [
          { label: { cs: "Navy 900 na bílé", en: "Navy 900 on white" }, bg: "#FFFFFF", fg: "#090E21" },
          { label: { cs: "Bílá na navy 900", en: "White on navy 900" }, bg: "#090E21", fg: "#FFFFFF" },
          { label: { cs: "Navy 900 na grey 50", en: "Navy 900 on grey 50" }, bg: "#F1F1F1", fg: "#090E21" },
          { label: { cs: "Navy 600 na bílé", en: "Navy 600 on white" }, bg: "#FFFFFF", fg: "#737681" },
          { label: { cs: "Navy 200 na navy 900", en: "Navy 200 on navy 900" }, bg: "#090E21", fg: "#CECFD3" },
        ],
      },
    ],
  },
  {
    slug: "prechody",
    cover: "gradient",
    title: { cs: "Přechody", en: "Gradients" },
    description: { cs: "Primární tmavý přechod, doplňkový světlý a skleněné prvky.", en: "Primary dark gradient, supplementary light one and glass elements." },
    summary: { cs: "Primární tmavý přechod, doplňkový světlý, jejich směr a přesné body. Pravidla tvorby a skleněné prvky, které na přechodech nesou jedno až tři slova.", en: "The primary dark gradient and the supplementary light one, their direction and exact stops. Construction rules and glass elements carrying one to three words." },
    blocks: [
      {
        type: "gradient",
        variant: "dark",
        title: { cs: "Primární pozadí", en: "Primary background" },
        body: { cs: "Tmavý přechod je primární pozadí značky a patří na většinu formátů. Základ je navy 900, z rohu do ztracena jde jasně modrý přechod do průhledné tmavé navy. Navrch jemné zrno (šum) v režimu Overlay.", en: "The dark gradient is the primary brand background and belongs on most formats. The base is navy 900, with a bright blue gradient fading from the corner into transparent dark navy. A subtle grain (noise) sits on top in Overlay mode." },
        direction: { cs: "Z levého horního rohu k pravému dolnímu (CSS 135°). Roh se může měnit, úhel vždy po úhlopříčce.", en: "From top left to bottom right (CSS 135°)." },
        stops: [
          { label: { cs: "Podklad", en: "Base" }, hex: "#090E21", alpha: 100 },
          { label: { cs: "Roh, 0 %", en: "Corner, 0 %" }, hex: "#3F8BFF", alpha: 45 },
          { label: { cs: "Konec, 100 %", en: "End, 100 %" }, hex: "#182037", alpha: 0 },
        ],
      },
      {
        type: "gradient",
        variant: "light",
        title: { cs: "Doplňkové světlé pozadí", en: "Supplementary light background" },
        body: { cs: "Světlý přechod je doplňková varianta k tmavému. Používejte ho v menšině formátů: na obálkách blogu a na části příspěvků na LinkedIn, aby se profil střídal. Tmavá verze má vždy převahu.", en: "The light gradient is the supplementary variant of the dark one. Use it on a minority of formats: blog covers and some LinkedIn posts, so the profile alternates. The dark version always prevails." },
        direction: { cs: "Z pravého horního rohu k levému dolnímu (CSS 225°).", en: "From top right to bottom left (CSS 225°)." },
        stops: [
          { label: { cs: "Podklad", en: "Base" }, hex: "#EEF0F4", alpha: 100 },
          { label: { cs: "Roh, 0 %", en: "Corner, 0 %" }, hex: "#7FA3DA", alpha: 75 },
          { label: { cs: "Střed, 55 %", en: "Middle, 55 %" }, hex: "#B9CBE6", alpha: 35 },
          { label: { cs: "Konec, 100 %", en: "End, 100 %" }, hex: "#E6E8EE", alpha: 0 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla tvorby", en: "Rules" },
        items: [
          { title: { cs: "Mění se jen roh", en: "Only the corner changes" }, body: { cs: "Barvy, průhlednost a zrno zůstávají stejné.", en: "Colours, transparency and grain stay the same." } },
          { title: { cs: "Jeden přechod na formát", en: "One gradient per format" }, body: { cs: "Nikdy dva přechody proti sobě.", en: "Never two gradients against each other." } },
          { title: { cs: "Jen modré tóny", en: "Blue tones only" }, body: { cs: "Žádné jiné barvy než body přechodu.", en: "No colours other than the gradient stops." } },
          { title: { cs: "Konec v průhlednu", en: "Fade to transparent" }, body: { cs: "Přechod vždy končí bez ostré hrany. Pod text dávejte klidnější část plochy.", en: "A gradient always ends without a hard edge. Place text over the calmer part of the surface." } },
        ],
      },
      {
        type: "glass",
        title: { cs: "Skleněné prvky", en: "Glass elements" },
        body: { cs: "Na přechodové pozadí patří jeden matný skleněný prvek s rozmazáním pozadí, jemným bílým okrajem a měkkým stínem. Může mít podobu štítku, přepínače, karty, okna rozhraní nebo jednoduchého schématu.", en: "A gradient background carries one frosted glass element with background blur, a fine white border and a soft shadow. It can take the form of a tag, a switch, a card, an interface window or a simple diagram." },
        specs: [
          { label: { cs: "Tmavá (primární)", en: "Dark (primary)" }, value: { cs: "Výplň bílá 14 až 6 %, rozmazání 24, stín navy 50 %", en: "White fill 14 to 6 %, blur 24, navy shadow 50 %" } },
          { label: { cs: "Světlá (doplňková)", en: "Light (supplementary)" }, value: { cs: "Výplň bílá 50 až 25 %, rozmazání 20, okraj 0,5 px", en: "White fill 50 to 25 %, blur 20, 0.5 px border" } },
        ],
      },
    ],
  },
  {
    slug: "obrazovy-styl",
    cover: "images",
    title: { cs: "Obrazový styl", en: "Imagery" },
    description: { cs: "Styl case studies, imageové fotky a styl mockupů.", en: "Case study style, brand imagery and mockups." },
    summary: { cs: "Jak skládat obrázky do case studies: silná první fotka s výřezem webu na pozadí, imageové fotky prostředí klienta a styl mockupů. Formáty médií a zásady.", en: "How to compose case study imagery: a strong first photo with a website crop in the background, brand photos of the client's world and the mockup style. Media formats and principles." },
    blocks: [
      {
        type: "images",
        title: { cs: "Styl case studies", en: "Case study style" },
        body: { cs: "Case study musí zaujmout hned první fotkou: neobvyklá perspektiva, skutečné prostředí, přirozené světlo (interně „wow efekt“). K ní patří výřez webu na pozadí, které nese mood celého projektu.", en: "A case study has to grab attention with the very first photo: an unusual perspective, a real environment, natural light (internally the “wow effect”). It is paired with a website crop in the background that carries the mood of the whole project." },
        items: [
          { label: { cs: "Sky Towers: první fotka, monitor zespodu", en: "Sky Towers: first photo, monitor from below" }, src: "/images/obrazovy-styl/cs-sky-monitor.webp", ratio: "800 / 531" },
          { label: { cs: "ESENS Letná: výřez webu", en: "ESENS Letná: website crop" }, src: "/images/obrazovy-styl/cs-esens.webp", ratio: "306 / 414" },
          { label: { cs: "HALO: web v detailu na tmavém pozadí", en: "HALO: website detail on a dark background" }, src: "/images/obrazovy-styl/cs-halo.webp", ratio: "306 / 414" },
        ],
      },
      {
        type: "images",
        title: { cs: "Imageové fotky", en: "Brand imagery" },
        body: { cs: "Fotky značky klienta: prostředí firmy, lidé při práci, provoz, render developmentu. Ukazují, čím klient žije, ne jeho web. V každé case study aspoň dvě až tři.", en: "Photos of the client's brand: the company's environment, people at work, operations, a development render. They show what the client lives for, not their website. At least two or three in every case study." },
        items: [
          { label: { cs: "Robotwin: stříkání v lakovně", en: "Robotwin: spraying in the paint shop" }, src: "/images/obrazovy-styl/robotwin-strikani.webp", ratio: "4 / 3" },
          { label: { cs: "Robotwin: obsluha robota", en: "Robotwin: robot operator" }, src: "/images/obrazovy-styl/robotwin-robot.webp", ratio: "4 / 3" },
          { label: { cs: "Linstram: kancelářská chodba", en: "Linstram: office corridor" }, src: "/images/obrazovy-styl/linstram-chodba.webp", ratio: "4 / 3" },
          { label: { cs: "ESENS Letná: bazén v domě", en: "ESENS Letná: pool in the house" }, src: "/images/obrazovy-styl/esens-bazen.webp", ratio: "4 / 3" },
        ],
      },
      {
        type: "images",
        title: { cs: "Styl mockupů", en: "Mockup style" },
        body: { cs: "Web v zařízení na skutečném materiálu: dřevo, kámen, papír, textil. Denní světlo, ostré stíny z okna, jeden motiv a hodně prostoru. Zařízení fotíme z neobvyklého úhlu, ne zepředu na bílém pozadí.", en: "The website on a device placed on a real material: wood, stone, paper, textile. Daylight, sharp window shadows, one subject and plenty of space. Devices are shot from an unusual angle, not head-on against white." },
        items: [
          { label: { cs: "Sky Towers: monitor zespodu", en: "Sky Towers: monitor from below" }, src: "/images/obrazovy-styl/sky-towers-monitor.webp", ratio: "4 / 3" },
          { label: { cs: "Sky Towers: notebook na židli", en: "Sky Towers: laptop on a chair" }, src: "/images/obrazovy-styl/sky-towers-notebook-zidle.webp", ratio: "4 / 3" },
          { label: { cs: "Sky Towers: tiskoviny na poličce", en: "Sky Towers: printed matter on a shelf" }, src: "/images/obrazovy-styl/sky-towers-tiskoviny.webp", ratio: "4 / 3" },
          { label: { cs: "Linstram: tablet v rukou", en: "Linstram: tablet in hands" }, src: "/images/obrazovy-styl/linstram-tablet.webp", ratio: "4 / 3" },
        ],
      },
      {
        type: "formats",
        title: { cs: "Formáty médií", en: "Media formats" },
        body: { cs: "Case study skládáme jen z těchto formátů. Každý existuje jako obrázek, smyčka videa nebo video spouštěné kliknutím.", en: "Case studies are built from these formats only. Each exists as an image, a video loop or a click-to-play video." },
        items: [
          { label: { cs: "Full", en: "Full" }, w: 1440, h: 810 },
          { label: { cs: "Wide", en: "Wide" }, w: 1360, h: 765 },
          { label: { cs: "Stage", en: "Stage" }, w: 1360, h: 900 },
          { label: { cs: "Long", en: "Long" }, w: 1360, h: 1600 },
          { label: { cs: "Half", en: "Half" }, w: 672, h: 840 },
          { label: { cs: "Third", en: "Third" }, w: 443, h: 590 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Zásady a reference", en: "Rules and references" },
        body: { cs: "Krátký kontrolní seznam před exportem obrázků. Podrobný moodboard je ve Figmě v souboru Apadore 2026 (Case Studies).", en: "A short checklist before exporting images. The detailed moodboard is in Figma in the Apadore 2026 (Case Studies) file." },
        items: [
          { title: { cs: "Skutečný výsledek", en: "The real result" }, body: { cs: "Hotový web, stavba nebo produkt klienta. Aktuální, ostrý obsah obrazovek.", en: "The client's finished website, building or product. Current, sharp screen content." } },
          { title: { cs: "Jeden motiv", en: "One subject" }, body: { cs: "Jeden hlavní bod zájmu, hodně volného místa, přirozené světlo a materiál.", en: "One main point of interest, plenty of free space, natural light and material." } },
          { title: { cs: "Barvy klienta", en: "Client colours" }, body: { cs: "Pozadí mockupů a ploch ladí s klientem, ne s Apadore.", en: "Mockup backgrounds and surfaces match the client, not Apadore." } },
          { title: { cs: "Čemu se vyhnout", en: "What to avoid" }, body: { cs: "Přehnané AI fotky, nudné mockupy zepředu na bílém pozadí, fotobanky s úsměvy do kamery, přeplácané koláže a rozmazané screenshoty.", en: "Overdone AI photos, dull head-on mockups on white, stock photos smiling into the camera, cluttered collages and blurry screenshots." } },
        ],
      },
    ],
  },
  {
    slug: "graficke-prvky",
    cover: "blog",
    title: { cs: "Grafické prvky", en: "Graphic elements" },
    description: { cs: "Grafika se skleněnými prvky, primárně pro obálky článků na blogu.", en: "Glass element graphics, primarily for blog article covers." },
    summary: { cs: "Grafické prvky se skleněnými prvky na přechodu. Používá se primárně jako obálky článků na blogu (1200 × 800, světlá i tmavá verze). Princip, varianty skleněných prvků a pravidla.", en: "Graphics with glass elements on a gradient. Used primarily as blog article covers (1200 × 800, light and dark version). Principle, glass element variants and rules." },
    blocks: [
      {
        type: "text",
        title: { cs: "Princip", en: "Principle" },
        body: { cs: "Grafické prvky se používají primárně jako obálky článků na blogu. Obálka článku na webu ve formátu 3 : 2, 1200 × 800 px, vždy ve dvou verzích, tmavé a světlé. Na čistém pozadí z přechodu a jemného zrna stojí jeden skleněný prvek, který vystihuje myšlenku článku jedním nebo dvěma slovy. Nadpis článku na obálce není.", en: "Graphic elements are used primarily as blog article covers. The article cover on the website is 3 : 2, 1200 × 800 px, always in two versions, dark and light. On a clean background of gradient and fine grain stands one glass element that captures the article's idea in one or two words. The article headline is not on the cover." },
      },
      {
        type: "colors",
        size: "lg",
        title: { cs: "Akcent: červená tečka", en: "Accent: red dot" },
        body: { cs: "Jediný barevný akcent grafických prvků. Používá se jen jako malá tečka ve skleněném prvku (oddělení dvojice slov, aktivní stav). Mimo grafické prvky a obálky blogu se v brandu zatím nepoužívá.", en: "The only colour accent of the graphic elements. Used only as a small dot inside a glass element (separating a pair of words, active state). Outside graphic elements and blog covers it is not used in the brand for now." },
        colors: [
          { name: "Accent Red", hex: "#FF5A1F", use: { cs: "Tečka ve skleněném prvku, průměr cca 8 px na obálce 1200 × 800", en: "Dot inside a glass element, approx. 8 px in diameter on a 1200 × 800 cover" } },
        ],
      },
      {
        type: "images",
        title: { cs: "Příklady obálek", en: "Cover examples" },
        body: { cs: "Skutečné obálky článků z blogu Apadore ve světlé i tmavé verzi.", en: "Real article covers from the Apadore blog in light and dark versions." },
        items: [
          { label: { cs: "Zadání a hypotéza · tmavá", en: "Brief and hypothesis · dark" }, src: "/images/doprovodna-grafika/zadani-hypoteza-tmava.webp", ratio: "3 / 2" },
          { label: { cs: "Zadání a hypotéza · světlá", en: "Brief and hypothesis · light" }, src: "/images/doprovodna-grafika/zadani-hypoteza-svetla.webp", ratio: "3 / 2" },
          { label: { cs: "Vícejazyčné weby · tmavá", en: "Multilingual websites · dark" }, src: "/images/doprovodna-grafika/vicejazycne-weby-tmava.webp", ratio: "3 / 2" },
          { label: { cs: "E-E-A-T · světlá", en: "E-E-A-T · light" }, src: "/images/doprovodna-grafika/eeat-svetla.webp", ratio: "3 / 2" },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla", en: "Rules" },
        items: [
          { title: { cs: "Vždy obě verze", en: "Always both versions" }, body: { cs: "Ke každému článku tmavá i světlá obálka. Na webu se střídají.", en: "Every article gets a dark and a light cover. They alternate on the website." } },
          { title: { cs: "Jeden motiv", en: "One subject" }, body: { cs: "Jeden skleněný prvek uprostřed. Žádné fotky ani nadpis článku.", en: "One glass element in the centre. No photos and no article headline." } },
          { title: { cs: "Slovo, ne věta", en: "A word, not a sentence" }, body: { cs: "Text ve skle má jedno až tři slova.", en: "The text in the glass has one to three words." } },
          { title: { cs: "Červená tečka", en: "Red dot" }, body: { cs: "Jediný barevný akcent grafických prvků (obálek blogu). Jinde se v brandu nepoužívá.", en: "The only colour accent of the graphic elements (blog covers). Not used elsewhere in the brand." } },
          { title: { cs: "Export", en: "Export" }, body: { cs: "PNG 1200 × 800 ve 2×. Hotové obálky jsou ve Figmě na stránce Blog [Covers].", en: "PNG 1200 × 800 at 2×. Finished covers are in Figma on the Blog [Covers] page." } },
        ],
      },
    ],
  },
  {
    slug: "socialni-site",
    cover: "social",
    title: { cs: "Sociální sítě", en: "Social media" },
    description: { cs: "Šablony příspěvků na LinkedIn: Myšlenka a Fotka s citátem.", en: "LinkedIn post templates: Thought and Photo with quote." },
    summary: { cs: "Šablony příspěvků na LinkedIn: Myšlenka s citátem a Fotka s citátem, banner, profilová fotka a Clutch. Pravidla, české uvozovky a skill pro Clauda ke stažení.", en: "LinkedIn post templates: Thought with a quote and Photo with a quote, banner, profile picture and Clutch. Rules, Czech quotation marks and a Claude skill to download." },
    blocks: [
      {
        type: "images",
        title: { cs: "Základní sociální kit", en: "Basic social kit" },
        body: { cs: "Všechny výstupy, které používáme běžně. Autor příspěvků je Mikoláš Voborský. Šablony v plné velikosti jsou ve Figmě (Brand manuál › Sociální kit · základní).", en: "All outputs we use regularly. Posts are authored by Mikoláš Voborský. Full-size templates are in Figma (Brand manual › Social kit · basic)." },
        items: [
          { label: { cs: "Myšlenka · tmavá (primární)", en: "Thought · dark (primary)" }, src: "/images/socialni-site/myslenka-tmava.webp", ratio: "1200 / 1504" },
          { label: { cs: "Myšlenka · světlá (doplňková)", en: "Thought · light (supplementary)" }, src: "/images/socialni-site/myslenka-svetla.webp", ratio: "1200 / 1504" },
          { label: { cs: "Fotka s citátem · Z praxe", en: "Photo with a quote · From practice" }, src: "/images/socialni-site/fotka-s-citatem.webp", ratio: "1200 / 1504" },
          { label: { cs: "Otázka od klientů · 16 : 9", en: "Question from clients · 16 : 9" }, src: "/images/socialni-site/otazka.webp", ratio: "1920 / 1080" },
          { label: { cs: "Hledáme posilu", en: "We're hiring" }, src: "/images/socialni-site/nabor.webp", ratio: "1920 / 1284" },
          { label: { cs: "LinkedIn banner", en: "LinkedIn banner" }, src: "/images/socialni-site/banner.webp", ratio: "1584 / 396" },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Profilový set", en: "Profile set" },
        body: { cs: "Hotové obrázky pro profily na sociálních sítích, v rozměrech, které platformy podporují. Stačí stáhnout a nahrát.", en: "Ready-made images for social media profiles, in the sizes the platforms support. Just download and upload." },
        items: [
          { title: { cs: "Profilová fotka · tmavá (LinkedIn, Instagram) 400 × 400", en: "Profile picture · dark (LinkedIn, Instagram) 400 × 400" }, meta: { cs: "PNG, JPG", en: "PNG, JPG" }, href: "/downloads/profil/apadore-profilovka-tmava-400.png", alt: "/downloads/profil/apadore-profilovka-tmava-400.jpg" },
          { title: { cs: "Profilová fotka · světlá 400 × 400", en: "Profile picture · light 400 × 400" }, meta: { cs: "PNG, JPG", en: "PNG, JPG" }, href: "/downloads/profil/apadore-profilovka-svetla-400.png", alt: "/downloads/profil/apadore-profilovka-svetla-400.jpg" },
          { title: { cs: "LinkedIn banner · tmavý 1584 × 396", en: "LinkedIn banner · dark 1584 × 396" }, meta: { cs: "PNG, JPG", en: "PNG, JPG" }, href: "/downloads/profil/apadore-linkedin-banner-tmavy-1584x396.png", alt: "/downloads/profil/apadore-linkedin-banner-tmavy-1584x396.jpg" },
          { title: { cs: "LinkedIn banner · světlý 1584 × 396", en: "LinkedIn banner · light 1584 × 396" }, meta: { cs: "PNG, JPG", en: "PNG, JPG" }, href: "/downloads/profil/apadore-linkedin-banner-svetly-1584x396.png", alt: "/downloads/profil/apadore-linkedin-banner-svetly-1584x396.jpg" },
          { title: { cs: "Clutch · logo profilu 400 × 400", en: "Clutch · profile logo 400 × 400" }, meta: { cs: "PNG, JPG", en: "PNG, JPG" }, href: "/downloads/profil/apadore-clutch-logo-400.png", alt: "/downloads/profil/apadore-clutch-logo-400.jpg" },
        ],
      },
      {
        type: "images",
        title: { cs: "Rozšířený sociální kit", en: "Extended social kit" },
        body: { cs: "Ukázka z rozšířeného kitu: další varianty zarovnání, příspěvky s grafickými prvky z blogu a case study. Všechny layouty ve formátech na výšku, čtverec i reels jsou ve Figmě.", en: "A sample from the extended kit: more alignment variants, posts with graphic elements from the blog and a case study. All layouts in portrait, square and reels formats are in Figma." },
        items: [
          { label: { cs: "Příspěvek · vlevo, logo vpravo", en: "Post · left aligned, logo on the right" }, src: "/images/socialni-site/rozsireny-d.webp", ratio: "1200 / 1504" },
          { label: { cs: "Příspěvek s grafikou · podpis autora", en: "Post with graphics · author byline" }, src: "/images/socialni-site/rozsireny-e1.webp", ratio: "1200 / 1504" },
          { label: { cs: "Příspěvek s grafikou · logo na střed", en: "Post with graphics · centred logo" }, src: "/images/socialni-site/rozsireny-e2.webp", ratio: "1200 / 1504" },
          { label: { cs: "Case study · Linstram", en: "Case study · Linstram" }, src: "/images/socialni-site/rozsireny-f-linstram.webp", ratio: "1200 / 1504" },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Všechny layouty ve Figmě", en: "All layouts in Figma" },
        items: [
          { title: { cs: "Sociální kit · rozšířený", en: "Social kit · extended" }, meta: { cs: "Figma: Apadore 2026 (NEW Web) › Brand manuál", en: "Figma: Apadore 2026 (NEW Web) › Brand manual" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2110-8585" },
          { title: { cs: "Sociální kit · základní", en: "Social kit · basic" }, meta: { cs: "Figma: Apadore 2026 (NEW Web) › Brand manuál", en: "Figma: Apadore 2026 (NEW Web) › Brand manual" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2043-5715" },
        ],
      },
      {
        type: "formats",
        title: { cs: "Formáty", en: "Formats" },
        body: { cs: "Pro každý formát existuje tmavá šablona (primární) a světlá (doplňková). Autor příspěvků je Mikoláš Voborský.", en: "Each format has a dark (primary) and light (supplementary) template." },
        items: [
          { label: { cs: "Na výšku", en: "Portrait" }, w: 1080, h: 1350 },
          { label: { cs: "Čtverec", en: "Square" }, w: 1200, h: 1200 },
          { label: { cs: "Story", en: "Story" }, w: 1080, h: 1920 },
          { label: { cs: "LinkedIn banner", en: "LinkedIn banner" }, w: 1584, h: 396 },
          { label: { cs: "Profilová fotka", en: "Profile picture" }, w: 400, h: 400 },
          { label: { cs: "Clutch", en: "Clutch" }, w: 400, h: 400 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla příspěvků", en: "Post rules" },
        items: [
          { title: { cs: "Krátký citát", en: "Short quote" }, body: { cs: "Citát nebo teze na dva až tři řádky, Booton, na střed. Celá myšlenka patří do textu příspěvku.", en: "A quote or thesis on two to three lines, Booton, centred. The full thought belongs in the post text." } },
          { title: { cs: "Autor nahoře, logo dole", en: "Author at the top, logo at the bottom" }, body: { cs: "Nahoře vlevo fotka a jméno autora, vpravo „Přečtěte si v příspěvku“. Logo malé dole uprostřed.", en: "Author photo and name top left, “Read in the post” on the right. Small logo at the bottom centre." } },
          { title: { cs: "České uvozovky", en: "Czech quotation marks" }, body: { cs: "Citáty vždy v českých uvozovkách „takto“. Nikdy \"rovné\" ani “anglické”.", en: "Quotes always use Czech quotation marks „like this“. Never \"straight\" or “English” ones." } },
          { title: { cs: "Bez kurzívy a barev", en: "No italics or colours" }, body: { cs: "Zvýrazňujeme velikostí a řezem písma, ne barvou ani kurzívou.", en: "We emphasise with size and weight, not with colour or italics." } },
          { title: { cs: "Tmavá jako výchozí", en: "Dark by default" }, body: { cs: "Tmavá verze tvoří většinu příspěvků, světlý přechod je doplňkový.", en: "The dark version makes up most posts, the light gradient is supplementary." } },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Šablony a skill", en: "Templates and skill" },
        items: [
          { title: { cs: "Šablony ve Figmě", en: "Templates in Figma" }, meta: { cs: "Apadore 2026 (NEW Web) › Brand manuál › Sociální kit", en: "Apadore 2026 (NEW Web) › Brand manual › Social kit" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2043-5715" },
          { title: { cs: "Skill: příspěvky na LinkedIn", en: "Skill: LinkedIn posts" }, meta: { cs: "apadore-prispevky-linkedin.zip | skill pro Clauda", en: "apadore-prispevky-linkedin.zip | Claude skill" }, href: "/downloads/apadore-prispevky-linkedin.zip" },
        ],
      },
    ],
  },
  {
    slug: "zdroje",
    cover: "resources",
    title: { cs: "Zdroje", en: "Resources" },
    description: { cs: "Soubory ke stažení: logo, favicon, písma, šablony.", en: "Downloads: logo, favicon, fonts, templates." },
    summary: { cs: "Všechny soubory ke stažení na jednom místě: logo v obou barvách, favicony, odkazy na písma a šablony ve Figmě.", en: "All downloads in one place: the logo in both colours, favicons, links to the typefaces and the Figma templates." },
    blocks: [
      {
        type: "downloads",
        title: { cs: "Ke stažení", en: "Downloads" },
        body: { cs: "Originální soubory používejte vždy odsud nebo z firemního Google Drive, nikdy je nepřekreslujte.", en: "Always use the original files." },
        items: [
          { title: { cs: "Logo, pozitivní (navy)", en: "Logo, positive (navy)" }, meta: { cs: "SVG, PDF, AI · PNG a JPG v libovolné velikosti v kapitole Logo", en: "SVG, PDF, AI · PNG and JPG at any size in the Logo chapter" }, href: "/brand/apadore-logo-pozitivni.svg", alt: "/brand/apadore-logo-pozitivni.pdf" },
          { title: { cs: "Logo, negativní (bílé)", en: "Logo, negative (white)" }, meta: { cs: "SVG, PDF, AI · PNG a JPG v libovolné velikosti v kapitole Logo", en: "SVG, PDF, AI · PNG and JPG at any size in the Logo chapter" }, href: "/brand/apadore-logo-negativni.svg", alt: "/brand/apadore-logo-negativni.pdf" },
          { title: { cs: "Favicon webu (bílé A na tmavém přechodu)", en: "Website favicon (white A on the dark gradient)" }, meta: { cs: "apadore-favicon-web.svg", en: "apadore-favicon-web.svg" }, href: "/brand/apadore-favicon-web.svg" },
          { title: { cs: "Favicon Brand Studia (navy A na světlém přechodu)", en: "Brand Studio favicon (navy A on the light gradient)" }, meta: { cs: "apadore-favicon-brand-studio.svg", en: "apadore-favicon-brand-studio.svg" }, href: "/brand/apadore-favicon-brand-studio.svg" },
          { title: { cs: "Písmo Booton", en: "Booton typeface" }, meta: { cs: "Licencované písmo, [DOPLNIT odkaz na Drive]", en: "Licensed typeface, [ADD Drive link]" } },
          { title: { cs: "Geist a IBM Plex Mono", en: "Geist and IBM Plex Mono" }, meta: { cs: "Zdarma: vercel.com/font, github.com/IBM/plex", en: "Free: vercel.com/font, github.com/IBM/plex" } },
        ],
      },
    ],
  },
];

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);
