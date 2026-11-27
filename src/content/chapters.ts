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
    summary: { cs: "Pravidla vizuální identity a jejího použití napříč komunikací Apadore.", en: "Guidelines for the Apadore visual identity and its use across communications." },
    blocks: [
      {
        type: "text",
        title: { cs: "Vítejte v brandu Apadore", en: "Welcome to the Apadore brand" },
        body: { cs: "Apadore je digitální studio. Jeho vizuální identita stojí na výrazné typografii, tmavých modrých tónech a čisté kompozici. Střídmé prostředky dávají značce osobitý výraz a prostor prezentovat práci v celé její šíři.\n\nManuál vymezuje základní prvky identity a vztahy mezi nimi. Pomáhá vytvářet soudržnou komunikaci, která se přizpůsobí obsahu i formátu a zachová rozpoznatelný charakter Apadore.", en: "Apadore is a digital studio. Its visual identity combines distinctive typography, deep blue tones and clean composition. A restrained set of elements gives the brand a clear presence and room to showcase the full range of its work.\n\nThis manual defines the core elements of the identity and how they work together. It supports consistent communication that adapts to different content and formats while retaining the distinctive character of Apadore." },
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
        body: { cs: "Logo tvoří název APADORE ve verzálkách. Jeho charakter určuje kresba písmen a jejich vzájemné proporce. Používá se výhradně v dodaných souborech, nikdy jako nově vysázený text. V souvislém textu se název píše Apadore.", en: "The logo consists of the name APADORE in uppercase. Its character comes from the letterforms and their proportions. Always use the supplied artwork; never recreate the logo by typing the name. In running text, write the name as Apadore." },
        callout: { variant: "note", title: { cs: "Minimální šířka loga", en: "Minimum logo width" }, body: { cs: "Doporučeno 140 px a víc. Minimum je 80 px na obrazovce a 20 mm v tisku; pro malé velikosti slouží optická varianta.", en: "140 px or more recommended. The minimum is 80 px on screen and 20 mm in print; use the optical version for small sizes." } },
      },
      {
        type: "clearSpace",
        title: { cs: "Ochranná zóna", en: "Clear space" },
        ratio: { cs: "1× výška loga", en: "1× logo height" },
        body: { cs: "Ochranná zóna odpovídá nejméně jedné výšce loga (x). Nezasahuje do ní text, grafika ani okraj formátu. Pro základní logo doporučujeme šířku od 140 px. Celkové minimum je 80 px na obrazovce a 20 mm v tisku; pro malé velikosti slouží optická varianta.", en: "Clear space equals at least one logo height (x). Keep text, graphics and format edges outside this area. A width of 140 px or more is recommended for the standard logo. The overall minimum is 80 px on screen and 20 mm in print; use the optical version for small sizes." },
      },
      {
        type: "logoVersions",
        title: { cs: "Barevné verze", en: "Colour versions" },
        body: { cs: "Pozitivní verze v navy je určena pro bílé, světle šedé a světlé přechodové podklady. Negativní bílá verze se používá na navy a tmavých přechodech. Volba vždy vychází z dostatečného kontrastu. Barevnost loga se nemění a nedoplňuje efekty.", en: "Use the navy positive version on white, light grey and light gradient backgrounds. Use the white reversed version on navy and dark gradients. Choose the version that provides sufficient contrast. Do not alter the logo colours or add effects." },
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
        body: { cs: "Jednotná podoba loga je podmínkou jeho rozpoznatelnosti. Zachovává se kresba, proporce, orientace i barevnost. Logo se nedeformuje ani nedoplňuje obrysem, stínem či jinými efekty. Na každém podkladu musí zůstat zřetelně čitelné.", en: "A consistent appearance keeps the logo recognisable. Preserve its letterforms, proportions, orientation and colours. Do not stretch, rotate, outline or add shadows or other effects. The logo must remain clearly legible on every background." },
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
        body: { cs: "Favicon je písmeno A z loga. Používá se jen v malých velikostech: v záložce prohlížeče, v záložkách a jako ikona. Vždy bez přechodu, ve dvou verzích: bílé A na navy a navy A na bílé. Ve větších formátech (profilová fotka, sdílení) používáme celé logo.", en: "The favicon uses the letter A from the logo. It is intended for small sizes: browser tabs, bookmarks and icons. Use flat colours in two versions: white A on navy and navy A on white. For larger formats, including profile images and sharing, use the full logo." },
      },
      {
        type: "logoGenerator",
        title: { cs: "Logo generátor", en: "Logo generator" },
        body: { cs: "Export loga na míru. Samotné logo bez pozadí v libovolné velikosti, nebo logo v přesném rozměru (např. 1080 × 1080) s doporučenou velikostí, kterou lze přiblížit nebo oddálit. Pozadí si můžete přidat v sekci Logo s pozadím.", en: "Custom logo export. The clean logo without a background at any size, or the logo in an exact size (e.g. 1080 × 1080) at a recommended size you can zoom in or out. Add a background under Logo with background." },
      },
      {
        type: "downloads",
        title: { cs: "Základní logo kit", en: "Basic logo kit" },
        body: { cs: "Všechny základní soubory loga v jednom balíčku. Pozitivní (navy) i negativní (bílé) logo jako SVG, PDF a AI, PNG 2000 px na šířku s průhledným pozadím, JPG 2000 px s ochrannou zónou (pozitivní na bílé, negativní na navy) čtvercové logo pro profily 1080 × 1080 v navy i na bílé a favicon v navy i na bílé (SVG, PNG 512, 180 a 32 px).", en: "All basic logo files in one package. Positive (navy) and negative (white) logo as SVG, PDF and AI, a 2000 px wide PNG with a transparent background, a 2000 px JPG with clear space (positive on white, negative on navy) a square 1080 × 1080 profile logo on navy and on white, and the favicon on navy and on white (SVG, PNG 512, 180 and 32 px)." },
        items: [
          { title: { cs: "Apadore logo kit", en: "Apadore logo kit" }, meta: { cs: "ZIP · logo, profilové logo, favicon", en: "ZIP · logo, profile logo, favicon" }, href: "/downloads/apadore-logo-kit.zip" },
        ],
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
        size: "md",
        title: { cs: "Primární barvy", en: "Primary colours" },
        body: {
          cs: "Značku nese tmavá navy a bílá, doplňuje je světle šedá. Většina formátů stojí jen na těchto barvách.\n\nMidnight Navy (Navy 900): text, logo, tmavé sekce. Pure White: pozadí, text na tmavém, negativní logo. Soft Grey (Grey 50): karty, tlačítka, plochy.\n\nHodnoty CMYK a Pantone pro tisk: [DOPLNIT].",
          en: "Dark navy and white carry the brand, complemented by light grey. Most formats rely on these colours only.\n\nMidnight Navy (Navy 900): text, logo, dark sections. Pure White: background, text on dark, negative logo. Soft Grey (Grey 50): cards, buttons, surfaces.\n\nCMYK and Pantone values for print: [TBD].",
        },
        colors: [
          { name: "Midnight Navy", hex: "#090E21" },
          { name: "Pure White", hex: "#FFFFFF" },
          { name: "Soft Grey", hex: "#F1F1F1" },
        ],
      },
      {
        type: "tints",
        title: { cs: "Odstíny", en: "Tints" },
        body: { cs: "Škály navy a neutrální šedé rozšiřují základní paletu pro práci s informační hierarchií. V rozhraní slouží zejména sekundárním textům, dělicím linkám a plochám.", en: "The navy and neutral grey scales extend the core palette to support information hierarchy. In interfaces, they are used mainly for secondary text, dividing lines and surfaces." },
        groups: [
          { name: { cs: "Tints navy", en: "Tints navy" }, steps: [{ step: "900", hex: "#090E21" }, { step: "800", hex: "#3A3E4D" }, { step: "600", hex: "#737681" }, { step: "400", hex: "#9D9FA6" }, { step: "200", hex: "#CECFD3" }] },
          { name: { cs: "Tints neutrals", en: "Tints neutrals" }, steps: [{ step: "900", hex: "#131313" }, { step: "600", hex: "#656565" }, { step: "400", hex: "#898989" }, { step: "100", hex: "#E4E4E4" }, { step: "50", hex: "#F1F1F1" }, { step: "0", hex: "#FFFFFF" }] },
        ],
      },
      {
        type: "gradientPalette",
        title: { cs: "Barvy přechodů", en: "Gradient colours" },
        body: { cs: "Tato paleta vymezuje barevnost přechodů. Odstíny se používají společně v definované skladbě, nikoli jako samostatné barvy identity. Konstrukci ve Figmě ukazuje odkaz „Jak je přechod sestavený“.", en: "This palette defines the gradient colours. Use the shades together in the specified construction, rather than as standalone identity colours. “How the gradient is built” shows the Figma construction." },
        items: [
          {
            name: { cs: "Tmavý přechod", en: "Dark gradient" },
            variant: "dark",
            role: { cs: "Primární", en: "Primary" },
            visible: [
              { name: "Deep Blue", hex: "#1E427E" },
              { name: "Night Blue", hex: "#121F3F" },
              { name: "Gradient Navy", hex: "#080D1F" },
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
              { name: "Morning Mist", hex: "#EEF0F4" },
              { name: "Sky Mist", hex: "#D9E2EE" },
              { name: "Soft Sky", hex: "#96B3DE" },
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
        body: { cs: "Poměr ukazuje doporučené zastoupení barevných ploch. Identitu tvoří především navy a bílá, doplněné světle šedou. Tmavá varianta je výchozí, světlá rozšiřuje možnosti kompozice.", en: "The ratio shows the recommended balance of colour areas. Navy and white form the foundation, supported by light grey. The dark version is the default; the light version provides an additional compositional option." },
        parts: [
          { name: "Navy 900", hex: "#090E21", percent: 45 },
          { name: "Grey 50 a 100", hex: "#F1F1F1", percent: 15 },
          { name: "Bílá", hex: "#FFFFFF", percent: 40 },
        ],
      },
      {
        type: "colors",
        size: "lg",
        title: { cs: "Akcent", en: "Accent" },
        body: { cs: "Červená doplňuje identitu jako drobný akcent v grafice náhledových obrázků článků. Používá se ve formě tečky uvnitř skleněného motivu. Do základního poměru barev nevstupuje.", en: "Red is a small accent within blog thumbnail graphics. Use it as a dot inside the glass motif. It is not included in the core colour ratio." },
        colors: [
          { name: "Accent Red", hex: "#FF5A1F" },
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
        body: { cs: "Booton je hlavním výrazovým písmem identity. Geometrická kresba a těsná sazba dávají nadpisům kompaktní podobu. Používá se od Display po H4 v řezu SemiBold, s prostrkáním −4 % a u Display −7 %. Nadpisy se sázejí běžným způsobem, bez verzálek.", en: "Booton is the identity’s primary display typeface. Its geometric letterforms and tight spacing give headings a compact presence. Use SemiBold from Display to H4, with −4 % tracking and −7 % for Display. Set headings in sentence case." },
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
        body: { cs: "Geist je určen pro souvislé texty, úvodní odstavce, popisy a rozhraní. Řez Regular slouží delším textům, Medium menším velikostem a ovládacím prvkům, SemiBold zvýraznění v rámci textu.", en: "Geist is used for body copy, introductory paragraphs, descriptions and interfaces. Use Regular for longer text, Medium for smaller sizes and controls, and SemiBold for emphasis within text." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "Vercel a Basement Studio" },
          { label: { cs: "Licence", en: "Licence" }, value: "SIL Open Font License, zdarma" },
        ],
        download: { label: { cs: "Google Fonts", en: "Google Fonts" }, href: "https://fonts.google.com/specimen/Geist" },
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
        body: { cs: "IBM Plex Mono odlišuje krátké informační prvky: štítky, popisky a tlačítka. Používá se ve verzálkách, v řezu Medium a velikostech 12 až 14 px. Delší sdělení se sázejí písmem Geist.", en: "IBM Plex Mono distinguishes short functional elements: labels, captions and buttons. Use uppercase, Medium weight and sizes from 12 to 14 px. Set longer messages in Geist." },
        info: [
          { label: { cs: "Výrobce", en: "Foundry" }, value: "IBM (Mike Abbink a Bold Monday), 2017" },
          { label: { cs: "Licence", en: "Licence" }, value: "SIL Open Font License, zdarma" },
        ],
        download: { label: { cs: "Google Fonts", en: "Google Fonts" }, href: "https://fonts.google.com/specimen/IBM+Plex+Mono" },
        styles: [{ name: "Medium", weight: 500, use: { cs: "Štítky a tlačítka", en: "Labels and buttons" } }],
      },
      {
        type: "typeScale",
        title: { cs: "Hierarchie", en: "Type scale" },
        body: { cs: "Hierarchie vychází z definované škály textových stylů. Prostrkání nadpisů je −7 % u Display a −4 % u H1 až H4. Geist má prostrkání 0; verzálkové štítky v IBM Plex Mono mírně rozšířené. Mobilní styly zachovávají názvy a používají menší nadpisy: H1 62, H2 32, H3 26 a H4 20.", en: "The hierarchy follows the defined text style scale. Heading tracking is −7 % for Display and −4 % for H1 to H4. Geist uses 0 tracking; uppercase IBM Plex Mono labels use slightly expanded spacing. Mobile styles retain the same names with smaller headings: H1 62, H2 32, H3 26 and H4 20." },
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
        body: { cs: "Doporučené kombinace zajišťují čitelnost textu. Hodnoty vyjadřují kontrastní poměr: podle WCAG nejméně 4,5 : 1 pro běžný text a 3 : 1 pro velké nadpisy.", en: "These recommended combinations support legibility. Values indicate contrast ratios: WCAG requires at least 4.5 : 1 for body text and 3 : 1 for large headings." },
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
        body: { cs: "Tmavá varianta je hlavním přechodovým pozadím identity. Základ navy 900 doplňuje jasně modrá, která od rohu přechází do průhledné tmavé navy. Povrch sjednocuje jemné zrno v režimu Overlay.", en: "The dark version is the identity’s primary gradient background. A navy 900 base is overlaid with bright blue fading from one corner into transparent dark navy. Fine grain in Overlay mode unifies the surface." },
        direction: { cs: "Výchozí směr vede z levého horního do pravého dolního rohu (CSS linear-gradient 135°). Výchozí roh lze měnit při zachování úhlopříčného směru.", en: "The default direction runs from the top left to the bottom right (CSS linear-gradient 135°). The starting corner may change; retain the diagonal direction." },
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
        body: { cs: "Světlá varianta zachovává barevný charakter identity v jemnějším provedení. Doplňuje převládající tmavé plochy například v náhledových obrázcích článků a sociálních sítích. Tvoří ji světle šedomodrý základ, přechod z rohu do průhledna a jemné zrno v režimu Overlay.", en: "The light version offers a softer expression of the same colour palette. It complements the predominant dark backgrounds on blog thumbnails and social media. It combines a pale blue-grey base, a gradient fading from one corner to transparency, and fine grain in Overlay mode." },
        direction: { cs: "Výchozí směr vede z pravého horního do levého dolního rohu (CSS linear-gradient 225°). Výchozí roh lze měnit při zachování úhlopříčného směru.", en: "The default direction runs from the top right to the bottom left (CSS linear-gradient 225°). The starting corner may change; retain the diagonal direction." },
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
        body: { cs: "Přechody vycházejí z jednotné barevnosti, průhlednosti a struktury zrna. Kompozici lze přizpůsobit změnou výchozího rohu.", en: "Gradients share fixed colours, opacity and grain. Adjust the composition by changing the starting corner." },
        items: [
          { title: { cs: "Tmavá jako výchozí", en: "Dark by default" }, body: { cs: "Tmavá varianta je výchozí, světlá doplňková.", en: "The dark version is primary; the light version is secondary." } },
          { title: { cs: "Jeden přechod na formát", en: "One gradient per format" }, body: { cs: "V jednom formátu se používá jediný přechod.", en: "Use one gradient per format." } },
          { title: { cs: "Jen definované barvy", en: "Defined colours only" }, body: { cs: "Barevnost vychází z definovaných bodů přechodu.", en: "Use only the defined gradient stop colours." } },
          { title: { cs: "Bez ostré hrany", en: "No hard edge" }, body: { cs: "Přechod plynule mizí bez viditelné hrany.", en: "The gradient fades smoothly, without a visible edge." } },
          { title: { cs: "Klidná část plochy", en: "Quieter area" }, body: { cs: "Text a grafika se umisťují do klidnější části plochy.", en: "Place text and graphics in the quieter part of the background." } },
        ],
      },
      {
        type: "glass",
        title: { cs: "Skleněné prvky", en: "Glass elements" },
        body: { cs: "Matné sklo doplňuje přechody o prostorový detail. Jeden hlavní prvek může mít podobu štítku, karty, přepínače, části rozhraní nebo schématu. Spojuje je rozmazané pozadí, jemný bílý okraj a měkký stín. Varianty rozvádí kapitola Grafické prvky.", en: "Frosted glass adds a spatial detail to gradient backgrounds. A single main element may take the form of a label, card, toggle, interface fragment or diagram. All share background blur, a fine white edge and a soft shadow. See Graphic elements for further variations." },
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
        body: { cs: "Úvodní obraz představuje charakter projektu a určuje tón celé case study. Další obrazy střídají celek, detail a ukázky rozhraní tak, aby srozumitelně ukázaly rozsah i kvalitu řešení.\n\nMockupy, fotografie a výřezy propojuje barevnost a kompozice. Každý obraz přináší novou informaci; série má vlastní rytmus a dostatek prostoru.", en: "The opening image introduces the project’s character and sets the tone for the case study. Follow it with a mix of overviews, details and interface examples to convey the scope and quality of the solution.\n\nConnect mockups, photography and cropped views through colour and composition. Each image adds information; the series has a considered pace and room to breathe." },
        items: [
          { label: { cs: "Sky Towers: první fotka, monitor zespodu", en: "Sky Towers: first photo, monitor from below" }, src: "/images/obrazovy-styl/cs-sky-monitor.webp", ratio: "800 / 531" },
          { label: { cs: "ESENS Letná: výřez webu", en: "ESENS Letná: website crop" }, src: "/images/obrazovy-styl/cs-esens.webp", ratio: "306 / 414" },
          { label: { cs: "HALO: web v detailu na tmavém pozadí", en: "HALO: website detail on a dark background" }, src: "/images/obrazovy-styl/cs-halo.webp", ratio: "306 / 414" },
        ],
      },
      {
        type: "images",
        title: { cs: "Imageové fotky", en: "Brand imagery" },
        body: { cs: "Fotografie přibližují svět klienta: jeho prostředí, lidi, produkty a způsob práce. Vybíráme konkrétní, přirozeně působící záběry s jasným vztahem k projektu.\n\nV rámci série držíme jednotnou práci se světlem, barevností a kontrastem. Architektonické vizualizace navazují stejnou kvalitou a atmosférou.", en: "Photography introduces the client’s world: its places, people, products and working processes. Choose specific, natural-looking images with a clear connection to the project.\n\nKeep light, colour and contrast consistent across the series. Architectural visualisations should match its quality and atmosphere." },
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
        body: { cs: "Mockupy ukazují digitální výstup v přesvědčivém kontextu. Prostředí, materiály a světlo podporují charakter projektu. Úhel záběru se volí podle obsahu a čitelnosti obrazovky. Kompozice zůstává střídmá; zařízení i okolí slouží prezentované práci.", en: "Mockups present digital work in a convincing context. Setting, materials and light support the character of the project. Choose the camera angle to suit the content and keep the screen legible. Keep the composition restrained; both device and surroundings serve the work." },
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
        body: { cs: "Formáty tvoří společný rámec pro obrazovou skladbu case studies. Lze je naplnit statickým obrazem, videosmyčkou s automatickým přehráváním bez zvuku nebo videem spouštěným kliknutím. Pro mobilní obrazovky jsou určeny Phone, Phones a Phone Half.", en: "These formats provide a shared framework for case study imagery. Each can hold a still image, a silent autoplay video loop or a click-to-play video. Use Phone, Phones and Phone Half for mobile screens." },
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
        body: { cs: "Při výběru obrazů posuzujeme jejich vztah k projektu, kvalitu zpracování a návaznost v celé sérii. Další reference obsahuje soubor Apadore 2026 (Case Studies), stránka MOODBOARD / TEMPLATES.", en: "Select images for their relevance to the project, quality of execution and consistency across the series. Further references are in Apadore 2026 (Case Studies), on the MOODBOARD / TEMPLATES page." },
        items: [
          { title: { cs: "Skutečný výsledek", en: "The real result" }, body: { cs: "Obraz představuje konkrétní výstup nebo prostředí klienta. Obsah obrazovek je aktuální a čitelný.", en: "Show a specific outcome or the client’s environment. Screen content must be current and legible." } },
          { title: { cs: "Jeden motiv", en: "One subject" }, body: { cs: "Záběr má jasné těžiště. Prostor, světlo a detail vedou pozornost k prezentované práci.", en: "Give each image a clear focal point. Space, light and detail direct attention to the work." } },
          { title: { cs: "Barvy klienta", en: "Client colours" }, body: { cs: "Barevnost a materiály vycházejí z charakteru projektu. Celou sérii spojuje způsob zpracování.", en: "Colours and materials reflect the project. A consistent treatment brings the series together." } },
          { title: { cs: "Čemu se vyhnout", en: "What to avoid" }, body: { cs: "Samoúčelné efekty, generické fotobankové scény, nepřirozené retuše, nesourodé koláže a nekvalitní obrazové podklady.", en: "Avoid effects without purpose, generic stock scenes, unnatural retouching, inconsistent collages and low-quality source images." } },
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
        body: { cs: "Náhledové obrázky článků pracují s jedním hlavním motivem, který vystihuje téma zkratkou: krátkým výrazem, stavem rozhraní nebo jednoduchým schématem. Přechod se zrnem tvoří pozadí, matné sklo nese samotný motiv.\n\nFormát je 3 : 2, tedy 1200 × 800 px, v tmavé i světlé verzi. Kompozici lze měnit výchozím rohem přechodu. Nadpis zůstává mimo obraz.", en: "Blog thumbnails use one main motif to express the topic in shorthand: a short phrase, an interface state or a simple diagram. A grain-textured gradient forms the background; frosted glass carries the motif.\n\nThe format is 3 : 2, or 1200 × 800 px, in dark and light versions. Vary the composition through the gradient’s starting corner. Keep the article title outside the image." },
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
          { title: { cs: "Vždy obě verze", en: "Always both versions" }, body: { cs: "Každý náhledový obrázek vzniká v tmavé i světlé variantě pro střídání v přehledu článků.", en: "Create both dark and light versions of each thumbnail for alternating use in the article overview." } },
          { title: { cs: "Jeden motiv", en: "One motif" }, body: { cs: "Střed kompozice patří jednomu skleněnému motivu. Fotografie, fotobankové ikony a nadpis se nepřidávají.", en: "Place one glass motif at the centre. Do not add photography, stock icons or the article title." } },
          { title: { cs: "Slovo, ne věta", en: "A word, not a sentence" }, body: { cs: "Text v motivu má jedno až tři slova. Význam doplňuje nadpis článku umístěný mimo náhledový obrázek.", en: "Use one to three words within the motif. The article title outside the thumbnail provides context." } },
          { title: { cs: "České uvozovky", en: "Quotation marks" }, body: { cs: "Výrazy v uvozovkách se zapisují jednotně českými uvozovkami: „takto“.", en: "Use English quotation marks consistently for quoted phrases: “like this”." } },
          { title: { cs: "Červená tečka", en: "Red dot" }, body: { cs: "Drobný červený akcent zvýrazňuje vztah mezi prvky nebo aktivní stav. Je vyhrazen náhledovým obrázkům článků.", en: "A small red accent highlights a relationship between elements or an active state. It is reserved for blog thumbnails." } },
          { title: { cs: "Export", en: "Export" }, body: { cs: "PNG 1200 × 800 ve 2×. Hotové náhledové obrázky najdete ve Figmě na stránce Blog [Covers].", en: "PNG 1200 × 800 at 2×. Finished thumbnails are in Figma on the Blog [Covers] page." } },
        ],
      },
    ],
  },
  {
    slug: "socialni-site",
    cover: "social",
    title: { cs: "Sociální sítě", en: "Social media" },
    description: { cs: "Styl příspěvků na LinkedIn a sociální kit s profilovkami a covery.", en: "LinkedIn post style and a social media kit with profile images and covers." },
    summary: { cs: "Šablony příspěvků na LinkedIn, bannery a covery pro LinkedIn, Facebook a Google a loga pro profily na platformách jako Clutch nebo DesignRush. Pravidla, české uvozovky a skill pro Clauda ke stažení.", en: "LinkedIn post templates: Thought with a quote and Photo with a quote, banner, profile picture and Clutch. Rules, Czech quotation marks and a Claude skill to download." },
    blocks: [
      {
        type: "images",
        title: { cs: "Styl příspěvků", en: "Post style" },
        body: { cs: "Všechny příspěvky mají formát pro LinkedIn 1080 × 1350 a stejné rozvržení: vlevo nahoře krátký eyebrow text, vpravo dole logo Apadore. Tmavý přechod je výchozí, světlý doplňkový. Šablony upravujte a exportujte ve Figmě.", en: "All posts use the LinkedIn format 1080 × 1350 and the same layout: a short eyebrow at the top left and the Apadore logo at the bottom right. The dark gradient is the default, the light one is secondary. Edit and export the templates in Figma." },
        items: [
          { label: { cs: "Myšlenka · tmavá", en: "Thought · dark" }, src: "/images/socialni-site/post-myslenka-tmava.webp", ratio: "1080 / 1354" },
          { label: { cs: "Myšlenka · světlá", en: "Thought · light" }, src: "/images/socialni-site/post-myslenka-svetla.webp", ratio: "1080 / 1354" },
          { label: { cs: "Nový článek · tmavá", en: "New article · dark" }, src: "/images/socialni-site/post-clanek-tmava.webp", ratio: "1080 / 1350" },
          { label: { cs: "Nový článek · světlá", en: "New article · light" }, src: "/images/socialni-site/post-clanek-svetla.webp", ratio: "1080 / 1350" },
          { label: { cs: "Nový článek · text", en: "New article · text" }, src: "/images/socialni-site/post-clanek-text.webp", ratio: "1080 / 1350" },
          { label: { cs: "Case study", en: "Case study" }, src: "/images/socialni-site/post-case-study.webp", ratio: "1080 / 1350" },
          { label: { cs: "Fotka s citátem", en: "Photo with a quote" }, src: "/images/socialni-site/post-fotka-s-citatem.webp", ratio: "1080 / 1350" },
          { label: { cs: "Otázka od klientů", en: "Question from clients" }, src: "/images/socialni-site/post-otazka.webp", ratio: "1080 / 1350" },
          { label: { cs: "Rebrand · 1/2", en: "Rebrand · 1/2" }, src: "/images/socialni-site/post-rebrand-1.webp", ratio: "1080 / 1350" },
          { label: { cs: "Rebrand · 2/2", en: "Rebrand · 2/2" }, src: "/images/socialni-site/post-rebrand-2.webp", ratio: "1080 / 1350" },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Šablony příspěvků", en: "Post templates" },
        body: { cs: "Příspěvky se nestahují, připravují se ve Figmě podle šablon.", en: "Posts are not downloaded; prepare them in Figma from the templates." },
        items: [
          { title: { cs: "Styl příspěvků ve Figmě", en: "Post style in Figma" }, meta: { cs: "Figma: Apadore 2026 (NEW Web) › Brand manuál", en: "Figma: Apadore 2026 (NEW Web) › Brand manual" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2410-14489" },
        ],
      },
      {
        type: "rules",
        title: { cs: "Pravidla příspěvků", en: "Post rules" },
        items: [
          { title: { cs: "Krátké sdělení", en: "Short message" }, body: { cs: "Hlavní myšlenka se vejde na dva až tři řádky a sází se písmem Booton; podrobnosti rozvádí text příspěvku.", en: "Keep the main idea to two or three lines, set in Booton; use the post copy to develop the message." } },
          { title: { cs: "Eyebrow nahoře, logo dole", en: "Eyebrow at the top, logo at the bottom" }, body: { cs: "Vlevo nahoře krátký eyebrow text, vpravo dole logo Apadore. Rozvržení je u všech šablon stejné.", en: "A short eyebrow at the top left and the Apadore logo at the bottom right. All templates share this layout." } },
          { title: { cs: "České uvozovky", en: "Quotation marks" }, body: { cs: "Citáty se zapisují českými uvozovkami: „takto“. Jednotná interpunkce je součástí typografické úpravy.", en: "Use English quotation marks consistently: “like this”. Correct punctuation is part of the typographic treatment." } },
          { title: { cs: "Bez kurzívy a barev", en: "No italics or colours" }, body: { cs: "Důraz vytváří velikost a řez písma. Barevné zvýraznění a kurzíva se nepoužívají.", en: "Create emphasis through type size and weight. Do not use colour highlighting or italics." } },
          { title: { cs: "Tmavá jako výchozí", en: "Dark by default" }, body: { cs: "Tmavá varianta tvoří základ komunikace. Světlá přináší doplňkovou polohu při zachování stejného rozvržení.", en: "The dark version forms the basis of communication. The light version offers an alternative while retaining the same layout." } },
          { title: { cs: "Fotka s citátem", en: "Photo with a quote" }, body: { cs: "Vlastní fotografii doplňuje citát v bílém rámečku v horní části. Logo je umístěno vpravo dole.", en: "Pair an original photograph with a quote in a white frame at the top. Place the logo at the bottom right." } },
        ],
      },
      {
        type: "formats",
        title: { cs: "Formáty", en: "Formats" },
        body: { cs: "Pro každý formát je připravena tmavá a doplňková světlá šablona. Definované rozměry a rozvržení zajišťují jednotné zpracování napříč příspěvky.", en: "Each format has a dark template and a secondary light version. Defined dimensions and layouts keep posts consistent." },
        items: [
          { label: { cs: "Příspěvek LinkedIn", en: "LinkedIn post" }, w: 1080, h: 1350 },
          { label: { cs: "LinkedIn osobní banner", en: "LinkedIn personal banner" }, w: 1584, h: 396 },
          { label: { cs: "LinkedIn firemní cover", en: "LinkedIn company cover" }, w: 1128, h: 191 },
          { label: { cs: "Google Business cover", en: "Google Business cover" }, w: 1024, h: 576 },
          { label: { cs: "Logo pro profily", en: "Profile logo" }, w: 800, h: 800 },
        ],
      },
      {
        type: "images",
        title: { cs: "Sociální kit · základní", en: "Social media kit · basic" },
        body: { cs: "Profilovky a covery pro sítě a platformy. Covery používají základní přechod z homepage a headline „Design a technologie, které unesou vaše ambice“. Loga jsou bílá na čistém navy.", en: "Profile images and covers for social media and platforms. Covers use the base gradient from the homepage and the headline “Design and technology that carry your ambitions”. Logos are white on plain navy." },
        items: [
          { label: { cs: "Logo pro profily · 800 × 800", en: "Profile logo · 800 × 800" }, src: "/downloads/socialni-kit/apadore-logo-profil-800.jpg", ratio: "1 / 1" },
          { label: { cs: "LinkedIn osobní banner · 1584 × 396", en: "LinkedIn personal banner · 1584 × 396" }, src: "/downloads/socialni-kit/apadore-linkedin-osobni-banner-1584x396.jpg", ratio: "1584 / 396" },
          { label: { cs: "LinkedIn firemní cover · 1128 × 191", en: "LinkedIn company cover · 1128 × 191" }, src: "/downloads/socialni-kit/apadore-linkedin-firemni-cover-1128x191.jpg", ratio: "1128 / 191" },
          { label: { cs: "Google Business cover · 1024 × 576", en: "Google Business cover · 1024 × 576" }, src: "/downloads/socialni-kit/apadore-google-cover-1024x576.jpg", ratio: "1024 / 576" },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Sociální kit ke stažení", en: "Social media kit download" },
        body: { cs: "Loga, profilovky a covery v jednom balíčku. Rozměry jsou doporučené hodnoty platforem, při nahrání je ověřte v administraci.", en: "Logos, profile images and covers in one package. Sizes are the platforms' recommendations; check them in the admin when uploading." },
        items: [
          { title: { cs: "Celý sociální kit", en: "The whole social media kit" }, meta: { cs: "ZIP · logo (pozitivní a negativní), favicon, profilovky, covery", en: "ZIP · logo (positive and negative), favicon, profile images, covers" }, href: "/downloads/apadore-socialni-kit.zip" },
          { title: { cs: "Sociální kit ve Figmě", en: "Social media kit in Figma" }, meta: { cs: "Figma: Apadore 2026 (NEW Web) › Brand manuál", en: "Figma: Apadore 2026 (NEW Web) › Brand manual" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2380-9093" },
          { title: { cs: "Sociální kit na Google Drive", en: "Social media kit on Google Drive" }, meta: { cs: "Zdrojová složka SM Basic Kit", en: "Source folder SM Basic Kit" }, href: "https://drive.google.com/drive/folders/1vRBRoGercGtMn-I5tuz8y0kDxk1Td1a2", cta: { cs: "Google Drive", en: "Google Drive" } },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Šablony a skill", en: "Templates and skill" },
        items: [
          { title: { cs: "Šablony ve Figmě", en: "Templates in Figma" }, meta: { cs: "Apadore 2026 (NEW Web) › Brand manuál › Sociální kit", en: "Apadore 2026 (NEW Web) › Brand manual › Social kit" }, href: "https://www.figma.com/design/g6aje2QLWx5USCXogBP68K/Apadore-2026--NEW-Web-?node-id=2380-9093" },
          { title: { cs: "Skill: příspěvky na LinkedIn", en: "Skill: LinkedIn posts" }, meta: { cs: "apadore-prispevky-linkedin.zip | skill pro Clauda", en: "apadore-prispevky-linkedin.zip | Claude skill" }, href: "/downloads/apadore-prispevky-linkedin.zip" },
        ],
      }
    ],
  },
  {
    slug: "aplikace-znacky",
    cover: "application",
    title: { cs: "Aplikace značky", en: "Brand applications" },
    description: { cs: "Jak značka vypadá na webu, v prezentaci, na sítích, v tisku a na merchi.", en: "How the brand looks on the web, in presentations, on social media, in print and on merch." },
    summary: { cs: "TBD. Ukázky značky v praxi: web, prezentace, sociální sítě, tiskoviny a merch.", en: "TBD. The brand in practice: website, presentations, social media, print and merch." },
    blocks: [
      {
        type: "text",
        title: { cs: "Aplikace značky", en: "Brand applications" },
        body: { cs: "TBD. Mockupy značky na webu, v prezentaci, na sítích, v tisku a na merchi doplníme z Figmy.", en: "TBD. Brand mockups for the web, presentations, social media, print and merch will be added from Figma." },
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
        body: { cs: "Zdrojem pro práci se značkou jsou originální soubory na firemním Google Drive. Používají se v dodané podobě; nepřekreslují se ani nenahrazují výřezy ze screenshotů.", en: "Use the original brand assets on the company Google Drive. Keep the supplied artwork intact; do not redraw it or substitute cropped screenshots." },
        items: [
          { title: { cs: "Logo, pozitivní (navy)", en: "Logo, positive (navy)" }, meta: { cs: "SVG, PDF, AI · PNG a JPG v libovolné velikosti v kapitole Logo", en: "SVG, PDF, AI · PNG and JPG at any size in the Logo chapter" }, href: "/brand/apadore-logo-pozitivni.svg", alt: "/brand/apadore-logo-pozitivni.pdf" },
          { title: { cs: "Logo, negativní (bílé)", en: "Logo, negative (white)" }, meta: { cs: "SVG, PDF, AI · PNG a JPG v libovolné velikosti v kapitole Logo", en: "SVG, PDF, AI · PNG and JPG at any size in the Logo chapter" }, href: "/brand/apadore-logo-negativni.svg", alt: "/brand/apadore-logo-negativni.pdf" },
          { title: { cs: "Základní logo kit", en: "Basic logo kit" }, meta: { cs: "ZIP · logo, profilové logo, favicon", en: "ZIP · logo, profile logo, favicon" }, href: "/downloads/apadore-logo-kit.zip" },
          { title: { cs: "Favicon · navy", en: "Favicon · navy" }, meta: { cs: "SVG, PNG", en: "SVG, PNG" }, href: "/downloads/favicon/apadore-favicon-navy.svg", alt: "/downloads/favicon/apadore-favicon-navy-512.png" },
          { title: { cs: "Favicon · bílá", en: "Favicon · white" }, meta: { cs: "SVG, PNG", en: "SVG, PNG" }, href: "/downloads/favicon/apadore-favicon-bila.svg", alt: "/downloads/favicon/apadore-favicon-bila-512.png" },
          { title: { cs: "Písmo Booton", en: "Booton typeface" }, meta: { cs: "Licencované písmo · složka Fonty na Google Drive", en: "Licensed typeface · Fonty folder on Google Drive" }, href: "https://drive.google.com/drive/folders/1enNekcqJsr1mHVIxRFwIusKyKBhrOy_p", cta: { cs: "Google Drive", en: "Google Drive" } },
          { title: { cs: "Písmo Geist", en: "Geist typeface" }, meta: { cs: "Zdarma · Google Fonts", en: "Free · Google Fonts" }, href: "https://fonts.google.com/specimen/Geist", cta: { cs: "Google Fonts", en: "Google Fonts" } },
          { title: { cs: "Písmo IBM Plex Mono", en: "IBM Plex Mono typeface" }, meta: { cs: "Zdarma · Google Fonts", en: "Free · Google Fonts" }, href: "https://fonts.google.com/specimen/IBM+Plex+Mono", cta: { cs: "Google Fonts", en: "Google Fonts" } },
          { title: { cs: "Logo generátor", en: "Logo generator" }, meta: { cs: "Logo v libovolném rozměru a pozadí · PNG, JPG, SVG, PDF, AI", en: "The logo in any size and background · PNG, JPG, SVG, PDF, AI" }, href: "logo#logo-generator", link: true, cta: { cs: "Otevřít", en: "Open" } },
          { title: { cs: "Logo Kit na Google Drive", en: "Logo Kit on Google Drive" }, meta: { cs: "Originální soubory loga", en: "Original logo files" }, href: "https://drive.google.com/drive/folders/1PA-sBLWH9VeNcs1OkQx9Jz2Sy-NnXgRH", cta: { cs: "Google Drive", en: "Google Drive" } },
          { title: { cs: "Sociální kit na Google Drive", en: "Social media kit on Google Drive" }, meta: { cs: "Profilovky, bannery a covery pro sítě a platformy", en: "Profile pictures, banners and covers for social media and platforms" }, href: "https://drive.google.com/drive/folders/1vRBRoGercGtMn-I5tuz8y0kDxk1Td1a2", cta: { cs: "Google Drive", en: "Google Drive" } },
          { title: { cs: "Celá značka na Google Drive", en: "The whole brand on Google Drive" }, meta: { cs: "Všechny podklady: Logo Kit, sociální kit, fonty", en: "All assets: Logo Kit, social media kit, fonts" }, href: "https://drive.google.com/drive/folders/1BF4arua_iy8_2EGy5KktuQ8s1SWOGBjJ", cta: { cs: "Google Drive", en: "Google Drive" } },
        ],
      },
      {
        type: "downloads",
        title: { cs: "Kontakt", en: "Contact" },
        body: { cs: "Nejasnosti při použití identity a nestandardní aplikace konzultujte s art directorem.", en: "Consult the art director about unclear uses of the identity and non-standard applications." },
        items: [
          { title: { cs: "Tomáš Krčál, art director", en: "Tomáš Krčál, art director" }, meta: { cs: "E-mail: [DOPLNIT] · Telefon: [DOPLNIT]", en: "E-mail: [TBD] · Phone: [TBD]" } },
          { title: { cs: "Web Apadore", en: "Apadore website" }, meta: { cs: "www.apadore.cz", en: "www.apadore.cz" }, href: "https://www.apadore.cz" },
        ],
      },
    ],
  },
];

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);
