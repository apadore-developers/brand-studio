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
    summary: { cs: "Kdo je Apadore, na čem značka stojí a jak s manuálem pracovat. Tmavá navy a bílá, tři písma, jemné přechody a tón komunikace, který dává přednost klientovi." },
    blocks: [
      {
        type: "text",
        title: { cs: "Vítejte v brandu Apadore", en: "Welcome to the Apadore brand" },
        body: {
          cs: "Apadore je studio, kde hlavní slovo mají naše práce: obrázky a case studies. Značka proto stojí na střídmém základu, který projektům nepřekáží: tmavá navy a bílá, světlé šedé plochy, tři písma a jemné přechody.\n\nManuál popisuje, jak s těmito prvky zacházet, aby všechno, co vytvoříme, od webu přes case studies po příspěvky na sociálních sítích, působilo jako jedno studio. Mluvíme klidně, věcně a s přínosem pro klienta na prvním místě.",
          en: "Apadore is a studio where our work speaks first: images and case studies. The brand therefore stands on a restrained base that never gets in the way: dark navy and white, light grey surfaces, three typefaces and subtle gradients.",
        },
        callout: { variant: "note", body: { cs: "Odpovídá: art director. Máte otázku ke značce? Napište, než něco upravíte.", en: "Owner: art director. Ask before you change anything." } },
      },
    ],
  },
  {
    slug: "logo",
    cover: "logo",
    title: { cs: "Logo", en: "Logo" },
    description: { cs: "Stáhněte si správnou verzi loga a dodržte ochrannou zónu.", en: "Download the right logo version and keep the clear space." },
    summary: { cs: "Hlavní slovní značka, ochranná zóna, minimální velikost, barevné verze a nepovolené použití. Logo si tu stáhnete jako SVG nebo PNG v libovolné šířce a najdete i favicon." },
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
        body: { cs: "Logo neupravujte. Nedeformujte ho, neotáčejte, nepřebarvujte, nepřidávejte obrys, stín ani efekty a nedávejte ho na podklad, kde se ztrácí.", en: "Do not alter the logo in any way." },
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
          en: "For the website icon and small square formats we use only the letter A from the logo. Apadore website: white A on navy. Apadore Brand Studio: inverted, navy A on light.",
        },
      },
    ],
  },
  {
    slug: "barvy",
    cover: "colors",
    title: { cs: "Barvy", en: "Colours" },
    description: { cs: "Navy a bílá jako hlavní dvojice, šedé jen doplňují.", en: "Navy and white as the core pair, greys support." },
    summary: { cs: "Hlavní dvojice navy a bílá, navy odstíny, neutrální šedé a barvy přechodů. Hodnoty HEX a RGB zkopírujete kliknutím, k tomu poměr barev a kontrastní kombinace." },
    blocks: [
      {
        type: "colors",
        size: "lg",
        title: { cs: "Hlavní dvojice", en: "Core pair" },
        body: { cs: "Hlavní dvojici tvoří tmavá navy a bílá. Většina formátů stojí jen na těchto dvou barvách. Hodnoty CMYK a Pantone pro tisk: [DOPLNIT].", en: "Dark navy and white form the core pair." },
        colors: [
          { name: "Navy 900", hex: "#090E21", use: { cs: "Text, logo, tmavé sekce", en: "Text, logo, dark sections" } },
          { name: "Bílá", hex: "#FFFFFF", use: { cs: "Pozadí, text na tmavém, negativní logo", en: "Background, text on dark, negative logo" } },
        ],
      },
      {
        type: "colors",
        size: "sm",
        title: { cs: "Navy odstíny", en: "Navy tints" },
        body: { cs: "Světlejší odstíny navy slouží pro sekundární text a prvky na tmavém pozadí.", en: "Lighter navy tints are used for secondary text and elements on dark backgrounds." },
        colors: [
          { name: "Navy 800", hex: "#3A3E4D", use: { cs: "Sekundární text" } },
          { name: "Navy 600", hex: "#737681", use: { cs: "Popisy, doplňkový text" } },
          { name: "Navy 400", hex: "#9D9FA6", use: { cs: "Text na tmavém pozadí" } },
          { name: "Navy 200", hex: "#CECFD3", use: { cs: "Linky na tmavém pozadí" } },
        ],
      },
      {
        type: "colors",
        size: "sm",
        title: { cs: "Neutrální barvy", en: "Neutrals" },
        body: { cs: "Světlé šedé nesou karty, tlačítka a linky, tmavší šedé sekundární text. Žádnou další barvu značka nemá.", en: "Light greys carry cards, buttons and lines. The brand has no other colours." },
        colors: [
          { name: "Grey 50", hex: "#F1F1F1", use: { cs: "Karty, tlačítka, plochy" } },
          { name: "Grey 100", hex: "#E4E4E4", use: { cs: "Linky a oddělovače" } },
          { name: "Grey 400", hex: "#898989", use: { cs: "Popisky sekcí" } },
          { name: "Grey 600", hex: "#656565", use: { cs: "Sekundární text" } },
        ],
      },
      {
        type: "gradientPalette",
        title: { cs: "Barvy přechodů", en: "Gradient colours" },
        body: {
          cs: "Modré tóny patří jen do přechodů, samostatně se nepoužívají (text, plochy, ikony). Tmavý přechod je primární, světlý doplňkový. Body přechodu i s průhledností najdete v kapitole Přechody.",
          en: "Blue tones are used only inside gradients, never on their own.",
        },
        items: [
          {
            name: { cs: "Tmavý přechod", en: "Dark gradient" },
            variant: "dark",
            role: { cs: "Primární", en: "Primary" },
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
        body: { cs: "Orientační poměr ploch. Značku nese dvojice navy a bílá, šedé jen doplňují. Tmavá verze je primární, světlá doplňková.", en: "Indicative ratio. Navy and white carry the brand." },
        parts: [
          { name: "Navy 900", hex: "#090E21", percent: 45 },
          { name: "Bílá", hex: "#FFFFFF", percent: 40 },
          { name: "Grey 50 a 100", hex: "#F1F1F1", percent: 15 },
        ],
      },
      {
        type: "colorPairs",
        title: { cs: "Kombinace", en: "Combinations" },
        body: { cs: "Doporučené dvojice textu a pozadí. Číslo u každé dvojice je kontrast, tedy o kolik je text světlejší nebo tmavší než pozadí (1 : 1 = stejná barva, 21 : 1 = černá na bílé). Podle pravidel přístupnosti WCAG potřebuje běžný text aspoň 4,5 : 1 (úroveň AA), ideálně 7 : 1 (AAA). Velké nadpisy stačí 3 : 1.", en: "Recommended text and background pairs." },
        pairs: [
          { label: { cs: "Navy 900 na bílé" }, bg: "#FFFFFF", fg: "#090E21" },
          { label: { cs: "Bílá na navy 900" }, bg: "#090E21", fg: "#FFFFFF" },
          { label: { cs: "Navy 900 na grey 50" }, bg: "#F1F1F1", fg: "#090E21" },
          { label: { cs: "Navy 600 na bílé" }, bg: "#FFFFFF", fg: "#737681" },
          { label: { cs: "Navy 200 na navy 900" }, bg: "#090E21", fg: "#CECFD3" },
        ],
      },
    ],
  },
  {
    slug: "typografie",
    cover: "type",
    title: { cs: "Typografie", en: "Typography" },
    description: { cs: "Booton pro nadpisy, Geist pro text, IBM Plex Mono pro štítky.", en: "Booton for headings, Geist for text, IBM Plex Mono for labels." },
    summary: { cs: "Booton pro nadpisy, Geist pro text a IBM Plex Mono pro štítky. Výrobci, licence a odkazy ke stažení, škála velikostí s řádkováním a prostrkáním a zkouška vlastního textu." },
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
        body: { cs: "Čitelné písmo pro odstavce, úvodní věty, popisy a rozhraní. Regular pro delší text, Medium pro menší velikosti a rozhraní, SemiBold pro zvýraznění.", en: "Legible typeface for paragraphs, leads, captions and UI." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "Vercel a Basement Studio" },
          { label: { cs: "Licence", en: "Licence" }, value: "SIL Open Font License, zdarma" },
        ],
        download: { label: { cs: "vercel.com/font", en: "vercel.com/font" }, href: "https://vercel.com/font" },
        styles: [
          { name: "Regular", weight: 400, use: { cs: "Odstavce, Lead" } },
          { name: "Medium", weight: 500, use: { cs: "Body M a S, rozhraní" } },
          { name: "SemiBold", weight: 600, use: { cs: "Zvýraznění" } },
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
        styles: [{ name: "Medium", weight: 500, use: { cs: "Štítky a tlačítka" } }],
      },
      {
        type: "typeScale",
        title: { cs: "Hierarchie", en: "Type scale" },
        body: { cs: "Velikosti jen ze škály textových stylů. Nadpisy mají záporné prostrkání (tracking): Display −7 %, H1 až H4 −4 %. Mobilní nadpisy: H1 62, H2 32, H3 26, H4 20.", en: "Use only sizes from the scale." },
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
    ],
  },
  {
    slug: "prechody",
    cover: "gradient",
    title: { cs: "Přechody", en: "Gradients" },
    description: { cs: "Primární tmavý přechod, doplňkový světlý a skleněné prvky.", en: "Primary dark gradient, supplementary light one and glass elements." },
    summary: { cs: "Primární tmavý přechod, doplňkový světlý, jejich směr a přesné body. Pravidla tvorby a skleněné prvky, které na přechodech nesou jedno až tři slova." },
    blocks: [
      {
        type: "gradient",
        variant: "dark",
        title: { cs: "Primární pozadí", en: "Primary background" },
        body: { cs: "Tmavý přechod je primární pozadí značky a patří na většinu formátů. Základ je navy 900, z rohu do ztracena jde jasně modrý přechod do průhledné tmavé navy. Navrch jemné zrno (šum) v režimu Overlay.", en: "The dark gradient is the primary brand background." },
        direction: { cs: "Z levého horního rohu k pravému dolnímu (CSS 135°). Roh se může měnit, úhel vždy po úhlopříčce.", en: "From top left to bottom right (CSS 135°)." },
        stops: [
          { label: { cs: "Podklad" }, hex: "#090E21", alpha: 100 },
          { label: { cs: "Roh, 0 %" }, hex: "#3F8BFF", alpha: 45 },
          { label: { cs: "Konec, 100 %" }, hex: "#182037", alpha: 0 },
        ],
      },
      {
        type: "gradient",
        variant: "light",
        title: { cs: "Doplňkové světlé pozadí", en: "Supplementary light background" },
        body: { cs: "Světlý přechod je doplňková varianta k tmavému. Používejte ho v menšině formátů: na obálkách blogu a na části příspěvků na LinkedIn, aby se profil střídal. Tmavá verze má vždy převahu.", en: "Supplementary variant for a minority of formats." },
        direction: { cs: "Z pravého horního rohu k levému dolnímu (CSS 225°).", en: "From top right to bottom left (CSS 225°)." },
        stops: [
          { label: { cs: "Podklad" }, hex: "#EEF0F4", alpha: 100 },
          { label: { cs: "Roh, 0 %" }, hex: "#7FA3DA", alpha: 75 },
          { label: { cs: "Střed, 55 %" }, hex: "#B9CBE6", alpha: 35 },
          { label: { cs: "Konec, 100 %" }, hex: "#E6E8EE", alpha: 0 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla tvorby", en: "Rules" },
        items: [
          { title: { cs: "Mění se jen roh" }, body: { cs: "Barvy, průhlednost a zrno zůstávají stejné." } },
          { title: { cs: "Jeden přechod na formát" }, body: { cs: "Nikdy dva přechody proti sobě." } },
          { title: { cs: "Jen modré tóny" }, body: { cs: "Žádné jiné barvy než body přechodu." } },
          { title: { cs: "Konec v průhlednu" }, body: { cs: "Přechod vždy končí bez ostré hrany. Pod text dávejte klidnější část plochy." } },
        ],
      },
      {
        type: "glass",
        title: { cs: "Skleněné prvky", en: "Glass elements" },
        body: { cs: "Na přechodové pozadí patří jeden matný skleněný prvek s rozmazáním pozadí, jemným bílým okrajem a měkkým stínem. Může mít podobu štítku, přepínače, karty, okna rozhraní nebo jednoduchého schématu.", en: "One frosted glass element on the gradient." },
        specs: [
          { label: { cs: "Tmavá (primární)" }, value: { cs: "Výplň bílá 14 až 6 %, rozmazání 24, stín navy 50 %" } },
          { label: { cs: "Světlá (doplňková)" }, value: { cs: "Výplň bílá 50 až 25 %, rozmazání 20, okraj 0,5 px" } },
        ],
      },
    ],
  },
  {
    slug: "obrazovy-styl",
    cover: "images",
    title: { cs: "Obrazový styl", en: "Imagery" },
    description: { cs: "Styl case studies, imageové fotky a styl mockupů.", en: "Case study style, brand imagery and mockups." },
    summary: { cs: "Jak skládat obrázky do case studies: silná první fotka s výřezem webu na pozadí, imageové fotky prostředí klienta a styl mockupů. Formáty médií a zásady." },
    blocks: [
      {
        type: "rules",
        title: { cs: "Tři druhy obrázků", en: "Three kinds of images" },
        body: { cs: "Hlavní slovo mají naše práce. Každá case study skládá tři druhy obrázků a střídá je tak, aby se web vždy střídal s fotkou. Barvy obrázků patří klientovi, Apadore drží jen neutrální rámec." },
        items: [
          { title: { cs: "Styl case studies" }, body: { cs: "Silná první fotka a výřez webu na pozadí, které nese mood projektu." } },
          { title: { cs: "Imageové fotky" }, body: { cs: "Prostředí a lidé klienta: provoz, interiér, render developmentu." } },
          { title: { cs: "Styl mockupů" }, body: { cs: "Web v zařízení na skutečném materiálu, neobvyklý úhel, denní světlo." } },
        ],
      },
      {
        type: "images",
        title: { cs: "Styl case studies", en: "Case study style" },
        body: { cs: "Case study musí zaujmout hned první fotkou: neobvyklá perspektiva, skutečné prostředí, přirozené světlo (interně „wow efekt“). K ní patří výřez webu na pozadí, které nese mood celého projektu: u ESENS Letná kamenný obklad fasády, u nábytku detail materiálu, u developmentu textura stavby." },
        items: [
          { label: { cs: "ESENS Letná: výřez webu na kamenném obkladu" }, src: "/images/obrazovy-styl/esens-web-obklad.webp", ratio: "4 / 3" },
          { label: { cs: "ESENS Letná: web přes fasádu domu" }, src: "/images/obrazovy-styl/esens-web-fasada.webp", ratio: "4 / 3" },
        ],
      },
      {
        type: "images",
        title: { cs: "Imageové fotky", en: "Brand imagery" },
        body: { cs: "Fotky značky klienta: prostředí firmy, lidé při práci, provoz, render developmentu. Ukazují, čím klient žije, ne jeho web. V každé case study aspoň dvě až tři." },
        items: [
          { label: { cs: "Robotwin: stříkání v lakovně" }, src: "/images/obrazovy-styl/robotwin-strikani.webp", ratio: "4 / 3" },
          { label: { cs: "Robotwin: obsluha robota" }, src: "/images/obrazovy-styl/robotwin-robot.webp", ratio: "4 / 3" },
          { label: { cs: "Linstram: kancelářská chodba" }, src: "/images/obrazovy-styl/linstram-chodba.webp", ratio: "4 / 3" },
        ],
      },
      {
        type: "images",
        title: { cs: "Styl mockupů", en: "Mockup style" },
        body: { cs: "Web v zařízení na skutečném materiálu: dřevo, kámen, papír, textil. Denní světlo, ostré stíny z okna, jeden motiv a hodně prostoru. Zařízení fotíme z neobvyklého úhlu, ne zepředu na bílém pozadí." },
        items: [
          { label: { cs: "Sky Towers: monitor na kulatém stole zespodu" }, src: "/images/obrazovy-styl/sky-towers-monitor.webp", ratio: "4 / 3" },
          { label: { cs: "Sky Towers: notebook na dřevěné židli" }, src: "/images/obrazovy-styl/sky-towers-notebook-zidle.webp", ratio: "4 / 3" },
          { label: { cs: "Sky Towers: tiskoviny na poličce" }, src: "/images/obrazovy-styl/sky-towers-tiskoviny.webp", ratio: "4 / 3" },
          { label: { cs: "Sky Towers: web před dřevěnými lamelami" }, src: "/images/obrazovy-styl/sky-towers-notebook-lamely.webp", ratio: "4 / 3" },
          { label: { cs: "Linstram: tablet v rukou" }, src: "/images/obrazovy-styl/linstram-tablet.webp", ratio: "4 / 3" },
          { label: { cs: "Robotwin: notebook u okna v dílně" }, src: "/images/obrazovy-styl/robotwin-notebook.webp", ratio: "4 / 3" },
        ],
      },
      {
        type: "formats",
        title: { cs: "Formáty médií", en: "Media formats" },
        body: { cs: "Case study skládáme jen z těchto formátů. Každý existuje jako obrázek, smyčka videa nebo video spouštěné kliknutím.", en: "Case studies use only these formats." },
        items: [
          { label: { cs: "Full" }, w: 1440, h: 810 },
          { label: { cs: "Wide" }, w: 1360, h: 765 },
          { label: { cs: "Stage" }, w: 1360, h: 900 },
          { label: { cs: "Long" }, w: 1360, h: 1600 },
          { label: { cs: "Half" }, w: 672, h: 840 },
          { label: { cs: "Third" }, w: 443, h: 590 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Zásady a reference", en: "Rules and references" },
        body: { cs: "Krátký kontrolní seznam před exportem obrázků. Podrobný moodboard je ve Figmě v souboru Apadore 2026 (Case Studies)." },
        items: [
          { title: { cs: "Skutečný výsledek" }, body: { cs: "Hotový web, stavba nebo produkt klienta. Aktuální, ostrý obsah obrazovek." } },
          { title: { cs: "Jeden motiv" }, body: { cs: "Jeden hlavní bod zájmu, hodně volného místa, přirozené světlo a materiál." } },
          { title: { cs: "Barvy klienta" }, body: { cs: "Pozadí mockupů a ploch ladí s klientem, ne s Apadore." } },
          { title: { cs: "Čemu se vyhnout" }, body: { cs: "Přehnané AI fotky, nudné mockupy zepředu na bílém pozadí, fotobanky s úsměvy do kamery, přeplácané koláže a rozmazané screenshoty." } },
        ],
      },
    ],
  },
  {
    slug: "socialni-site",
    cover: "social",
    title: { cs: "Sociální sítě", en: "Social media" },
    description: { cs: "Šablony příspěvků na LinkedIn: Myšlenka a Fotka s citátem.", en: "LinkedIn post templates: Thought and Photo with quote." },
    summary: { cs: "Šablony příspěvků na LinkedIn: Myšlenka s citátem a Fotka s citátem, banner, profilová fotka a Clutch. Pravidla, české uvozovky a skill pro Clauda ke stažení." },
    blocks: [
      {
        type: "previews",
        title: { cs: "Náhledy příspěvků", en: "Post previews" },
        body: { cs: "Šablona Myšlenka v tmavé (primární) a světlé (doplňkové) verzi a Fotka s citátem. Autor příspěvků je Mikoláš Voborský.", en: "Thought template, dark and light." },
        items: [
          { kind: "thought", variant: "dark", label: { cs: "Myšlenka · tmavá (primární)" }, text: "„Web není jednorázový projekt.“", author: "Mikoláš Voborský", avatar: "/images/autori/mikolas-voborsky.webp", link: "Přečtěte si v příspěvku" },
          { kind: "thought", variant: "light", label: { cs: "Myšlenka · světlá (doplňková)" }, text: "„Přerostli jste svůj web?“", author: "Mikoláš Voborský", avatar: "/images/autori/mikolas-voborsky.webp", link: "Přečtěte si v příspěvku" },
          { kind: "image", variant: "dark", label: { cs: "Fotka s citátem" }, text: "", photo: "/images/autori/fotka-s-citatem.webp" },
        ],
      },
      {
        type: "formats",
        title: { cs: "Formáty", en: "Formats" },
        body: { cs: "Pro každý formát existuje tmavá šablona (primární) a světlá (doplňková). Autor příspěvků je Mikoláš Voborský.", en: "Each format has a dark (primary) and light (supplementary) template." },
        items: [
          { label: { cs: "Na výšku" }, w: 1080, h: 1350 },
          { label: { cs: "Čtverec" }, w: 1200, h: 1200 },
          { label: { cs: "Story" }, w: 1080, h: 1920 },
          { label: { cs: "LinkedIn banner" }, w: 1584, h: 396 },
          { label: { cs: "Profilová fotka" }, w: 400, h: 400 },
          { label: { cs: "Clutch" }, w: 400, h: 400 },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla příspěvků", en: "Post rules" },
        items: [
          { title: { cs: "Krátký citát" }, body: { cs: "Citát nebo teze na dva až tři řádky, Booton, na střed. Celá myšlenka patří do textu příspěvku." } },
          { title: { cs: "Autor nahoře, logo dole" }, body: { cs: "Nahoře vlevo fotka a jméno autora, vpravo „Přečtěte si v příspěvku“. Logo malé dole uprostřed." } },
          { title: { cs: "České uvozovky" }, body: { cs: "Citáty vždy v českých uvozovkách „takto“. Nikdy \"rovné\" ani “anglické”." } },
          { title: { cs: "Bez kurzívy a barev" }, body: { cs: "Zvýrazňujeme velikostí a řezem písma, ne barvou ani kurzívou." } },
          { title: { cs: "Tmavá jako výchozí" }, body: { cs: "Tmavá verze tvoří většinu příspěvků, světlý přechod je doplňkový." } },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Šablony a skill", en: "Templates and skill" },
        items: [
          { title: { cs: "Šablony ve Figmě" }, meta: { cs: "Apadore 2026 (NEW Web) › Brand manuál › Šablony pro sociální sítě" } },
          { title: { cs: "Skill: příspěvky na LinkedIn" }, meta: { cs: "apadore-prispevky-linkedin.zip | skill pro Clauda" }, href: "/downloads/apadore-prispevky-linkedin.zip" },
        ],
      },
    ],
  },
  {
    slug: "doprovodna-grafika",
    cover: "blog",
    title: { cs: "Doprovodná grafika", en: "Supporting graphics" },
    description: { cs: "Grafika se skleněnými prvky, primárně pro obálky článků na blogu.", en: "Glass element graphics, primarily for blog article covers." },
    summary: { cs: "Doprovodná grafika se skleněnými prvky na přechodu. Používá se primárně jako obálky článků na blogu (1200 × 800, světlá i tmavá verze). Princip, varianty skleněných prvků a pravidla." },
    blocks: [
      {
        type: "text",
        title: { cs: "Princip", en: "Principle" },
        body: { cs: "Doprovodná grafika se používá primárně jako obálky článků na blogu. Obálka článku na webu ve formátu 3 : 2, 1200 × 800 px, vždy ve dvou verzích, tmavé a světlé. Na čistém pozadí z přechodu a jemného zrna stojí jeden skleněný prvek, který vystihuje myšlenku článku jedním nebo dvěma slovy. Nadpis článku na obálce není.", en: "Article cover 1200 × 800, always in dark and light." },
      },
      {
        type: "images",
        title: { cs: "Příklady obálek", en: "Cover examples" },
        body: { cs: "Skutečné obálky článků z blogu Apadore ve světlé i tmavé verzi." },
        items: [
          { label: { cs: "Zadání a hypotéza · tmavá" }, src: "/images/doprovodna-grafika/zadani-hypoteza-tmava.webp", ratio: "3 / 2" },
          { label: { cs: "Zadání a hypotéza · světlá" }, src: "/images/doprovodna-grafika/zadani-hypoteza-svetla.webp", ratio: "3 / 2" },
          { label: { cs: "Vícejazyčné weby · tmavá" }, src: "/images/doprovodna-grafika/vicejazycne-weby-tmava.webp", ratio: "3 / 2" },
          { label: { cs: "E-E-A-T · světlá" }, src: "/images/doprovodna-grafika/eeat-svetla.webp", ratio: "3 / 2" },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla", en: "Rules" },
        items: [
          { title: { cs: "Vždy obě verze" }, body: { cs: "Ke každému článku tmavá i světlá obálka. Na webu se střídají." } },
          { title: { cs: "Jeden motiv" }, body: { cs: "Jeden skleněný prvek uprostřed. Žádné fotky ani nadpis článku." } },
          { title: { cs: "Slovo, ne věta" }, body: { cs: "Text ve skle má jedno až tři slova." } },
          { title: { cs: "Červená tečka" }, body: { cs: "Jediný barevný akcent doprovodné grafiky (obálek blogu). Jinde se v brandu nepoužívá." } },
          { title: { cs: "Export" }, body: { cs: "PNG 1200 × 800 ve 2×. Hotové obálky jsou ve Figmě na stránce Blog [Covers]." } },
        ],
      },
    ],
  },
  {
    slug: "zdroje",
    cover: "resources",
    title: { cs: "Zdroje", en: "Resources" },
    description: { cs: "Soubory ke stažení: logo, favicon, písma, šablony.", en: "Downloads: logo, favicon, fonts, templates." },
    summary: { cs: "Všechny soubory ke stažení na jednom místě: logo v obou barvách, favicony, odkazy na písma a šablony ve Figmě." },
    blocks: [
      {
        type: "downloads",
        title: { cs: "Ke stažení", en: "Downloads" },
        body: { cs: "Originální soubory používejte vždy odsud nebo z firemního Google Drive, nikdy je nepřekreslujte.", en: "Always use the original files." },
        items: [
          { title: { cs: "Logo, pozitivní (navy)" }, meta: { cs: "apadore-logo-pozitivni.svg" }, href: "/brand/apadore-logo-pozitivni.svg" },
          { title: { cs: "Logo, negativní (bílé)" }, meta: { cs: "apadore-logo-negativni.svg" }, href: "/brand/apadore-logo-negativni.svg" },
          { title: { cs: "Favicon webu (bílé A na tmavém přechodu)" }, meta: { cs: "apadore-favicon-web.svg" }, href: "/brand/apadore-favicon-web.svg" },
          { title: { cs: "Favicon Brand Studia (navy A na světlém přechodu)" }, meta: { cs: "apadore-favicon-brand-studio.svg" }, href: "/brand/apadore-favicon-brand-studio.svg" },
          { title: { cs: "Písmo Booton" }, meta: { cs: "Licencované písmo, [DOPLNIT odkaz na Drive]" } },
          { title: { cs: "Geist a IBM Plex Mono" }, meta: { cs: "Zdarma: vercel.com/font, github.com/IBM/plex" } },
        ],
      },
    ],
  },
];

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);
