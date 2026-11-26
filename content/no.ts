import { PROFILE_CONFIG } from "./profile";
import type { SiteContent } from "./types";

export const contentNO: SiteContent = {
  meta: {
    htmlLang: "nb",
    title: "Kristian Sollie Pedersen | Fullstack-utvikler",
    description:
      "Kristian Sollie Pedersen, fullstack-utvikler hos AxisOS. Jobber med React, TypeScript, Three.js, sikker AI-arkitektur og parametrisk CAD på Romerike.",
  },
  nav: {
    projects: "Prosjekter",
    stack: "Teknologi",
    workbench: "Utenfor skjermen",
    timeline: "Erfaring",
    contact: "Kontakt",
    themeDarkLabel: "Mørk",
    themeBlueprintLabel: "Lys",
    themeTooltip: "Bytt mellom mørkt og lyst tema",
    langTooltip: "Bytt språk (NO / EN)",
    localTimeLabel: "RÅHOLT",
    menuOpenLabel: "Åpne meny",
    menuCloseLabel: "Lukk meny",
  },
  hero: {
    eyebrow: "Kristian Sollie Pedersen",
    headline:
      "Fullstack-utvikler som bygger i skjæringspunktet mellom web, romlig 3D og fysisk håndverk.",
    subheadlineLead: "Utvikler ",
    subheadlineHighlight: "AxisOS & Floorplan Studio",
    subheadlineTail:
      " til daglig. Ved siden av går det i 3D på web, sikkerhet rundt AI-systemer, egne klubbverktøy og parametrisk 3D-printing.",
    telemetryTitle: "Kort fortalt",
    telemetry: [
      {
        key: "role",
        label: "Rolle",
        value: "Fullstack-utvikler @ AxisOS",
      },
      {
        key: "edu",
        label: "Utdanning",
        value: "BSc Frontend- og mobilutvikling (Høyskolen Kristiania)",
      },
      {
        key: "loc",
        label: "Sted",
        value: "Råholt / Eidsvoll",
      },
      {
        key: "bjj",
        label: "På fritiden",
        value: "BJJ brunt belte, CAD & verksted",
      },
    ],
    primaryCta: "Se prosjekter",
    secondaryCta: "Ta kontakt",
    cadViewport: {
      panelTitle: "Interaktiv 3D-visning",
      dragHint: "Dra for å rotere",
      resetView: "Nullstill visning",
      orthoLabel: "ISO",
      perspLabel: "PERSP",
      explodeLabel: "Høyde",
      modes: {
        floorplan: {
          tab: "01 · Areal",
          title: "2D/3D Arealmodell",
          spec: "24.0m × 16.5m · Soner & rigg",
        },
        parametric: {
          tab: "02 · OpenSCAD",
          title: "Parametrisk brakett (BOSL2)",
          spec: "PETG · Vegg 3.2mm · Fas 45°",
        },
        reactor: {
          tab: "03 · Reaktor",
          title: "Kontrollstav-gitter (1984)",
          spec: "Fra spillet Meltdown is Propaganda",
        },
      },
    },
  },
  projects: {
    sectionCode: "01 · Prosjekter",
    title: "Utvalgte prosjekter",
    subtitle:
      "Et utvalg av det jeg jobber med på jobb, fra studier og på kveldstid.",
    filters: {
      all: "Alle (5)",
      spatial: "3D & Spill",
      security: "AI & Sikkerhet",
      saas: "Klubbsystemer",
      web: "Nettsider & CMS",
    },
    labels: {
      problem: "Bakgrunn",
      architecture: "Løsning",
      deliverables: "Detaljer",
      stack: "Teknologi",
      inspectSpec: "Vis detaljer",
      collapseSpec: "Skjul detaljer",
    },
    items: [
      {
        id: "axisos-floorplan",
        index: "01",
        title: "AxisOS & Floorplan Studio",
        contextBadge: "AxisOS",
        period: "2026 - nå",
        category: "spatial",
        highlightBadge: "Finalist til innovasjonspris · Gardermokonferansen",
        summary:
          "Plattform for event- og arealplanlegging med et interaktivt 2D/3D-studio der arrangører og utleiere tegner opp lokaler, rigg, bordoppsett og kapasitet direkte i nettleseren.",
        problem:
          "Planlegging av arrangementer og større lokaler skjer ofte på tvers av statiske PDF-plantegninger, regneark og tunge skrivebordsprogrammer som ikke henger sammen med utstyrslister eller sikkerhetsavstander.",
        architecture:
          "Fullstack TypeScript-løsning med React, Vite og Three.js i et delt 2D/3D-lerret på klientsiden, koblet mot Express, PostgreSQL og Drizzle ORM for lagring av plantegninger, objektkataloger og tilgangsstyring.",
        deliverables: [
          "Bytte direkte mellom 2D-plantegning og 3D-visning uten å miste valgt tilstand",
          "Datamodell i PostgreSQL og Drizzle ORM for soner, inventar, målsetting og prosjekter",
          "Optimalisert Three.js-scene som holder jevn bildefrekvens også i store halloppsett",
        ],
        metrics: [
          { label: "Visning", value: "2D + 3D i nettleser" },
          { label: "Status", value: "I daglig utvikling" },
          { label: "Rolle", value: "Fullstack-utvikler" },
        ],
        stack: [
          "TypeScript",
          "React",
          "Vite",
          "Express",
          "PostgreSQL",
          "Drizzle ORM",
          "Three.js",
        ],
        schematicKind: "floorplan",
        links: [],
      },
      {
        id: "project-bluemind-telenor",
        index: "02",
        title: "Project BlueMind & Enterprise AI Security",
        contextBadge: "Telenor AI Factory / Telenor GBS",
        period: "2026",
        category: "security",
        highlightBadge: "Bacheloroppgave + sommerjobb i Telenor GBS",
        summary:
          "Bachelorprosjekt hos Telenor AI Factory etterfulgt av sommerjobb som sikkerhetskonsulent i Telenor Global Business Security. Bygget sikkerhetsdashboard og en AI-assistent knyttet mot sikkerhetsrammeverk, samt jobbet praktisk med AI red-teaming.",
        problem:
          "Når store selskaper tar i bruk interne og eksterne språkmodeller trengs både god oversikt over hvilke sikkerhetskrav som gjelder, og praktisk testing av hva modellene faktisk slipper gjennom.",
        architecture:
          "Utviklet et sikkerhetsdashboard i React og TypeScript med en assistent forankret i interne sikkerhetsrammeverk, kombinert med strukturerte tester for prompt injection, omgåelse av guardrails og model extraction.",
        deliverables: [
          "Dashboard som kobler tekniske kontroller mot krav i etablerte sikkerhetsrammeverk",
          "Praktisk red-teaming av LLM-oppsett for å finne svakheter i systemprompter og verktøybruk",
          "Testing og vurdering av forsvar mot model extraction og indirekte prompt injection",
        ],
        metrics: [
          { label: "Fagfelt", value: "AI-sikkerhet" },
          { label: "Arbeid", value: "Utvikling & Red-Teaming" },
          { label: "Oppdragsgiver", value: "Telenor" },
        ],
        stack: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "LLM Security",
          "Red-Teaming",
          "Enterprise Architecture",
        ],
        schematicKind: "shield",
        links: [],
      },
      {
        id: "meltdown-is-propaganda",
        index: "03",
        title: "Meltdown is Propaganda",
        contextBadge: "GitHub Game Off",
        period: "3D-spill på web",
        category: "spatial",
        highlightBadge: "Reaktorsimulering i nettleseren",
        summary:
          "3D-spill satt til et sovjetisk kjernekraftverk i 1984, laget til GitHub Game Off. Du sitter i kontrollrommet og styrer reaktoren mens målerne og beskjedene ovenfra spriker mer og mer.",
        problem:
          "Målet var å lage et spill som starter rett i nettleseren uten nedlasting, med fysiske brytere og målere i 3D som drives av en faktisk reaktorsimulering i bakgrunnen.",
        architecture:
          "Bygget med React 19, Three.js og React Three Fiber. Selve reaktormodellen kjører i en egen Zustand-løkke som regner ut fluks, trykk, temperatur og stavposisjon uavhengig av bildefrekvensen.",
        deliverables: [
          "Interaktivt 3D-kontrollpanel med brytere, målere og varsellamper i React Three Fiber",
          "Simuleringsmodell i TypeScript og Zustand for kjøling, effekt og kontrollstaver",
          "Laget for å kjøre jevnt rett i nettleseren med rask oppstart",
        ],
        metrics: [
          { label: "Setting", value: "Kontrollrom, 1984" },
          { label: "Motor", value: "R3F + Zustand" },
          { label: "Plattform", value: "Nettleser (WebGL)" },
        ],
        stack: [
          "React 19",
          "Three.js",
          "React Three Fiber",
          "Zustand",
          "TypeScript",
        ],
        schematicKind: "reactor",
        links: [
          {
            label: "GitHub Repo",
            href: PROFILE_CONFIG.links.repos.nightshift,
            kind: "github",
          },
        ],
      },
      {
        id: "tapmap-martial-arts",
        index: "04",
        title: "TapMap & Kampsport-verktøy",
        contextBadge: "Egne produkter / Klubbdrift",
        period: "Pågående",
        category: "saas",
        highlightBadge: "I bruk i Eidsvoll og på Hadeland",
        summary:
          "Visuell flytkart-app for Brasiliansk Jiu-Jitsu-teknikker (tapMap), pluss en rekke skreddersydde webapper for graderingssporing, vaskelister, timelister og klubbdrift hos Eidsvoll Kampsportklubb og Hadeland Kampsport.",
        problem:
          "BJJ henger sammen som et nettverk av posisjoner, overganger og kontringer som passer dårlig inn i vanlige notater. Samtidig går det mye tid i frivillige klubber til manuelle lister for oppmøte, vask av låneutstyr og timelister.",
        architecture:
          "Mobilvennlige webapper (PWA) bygget med Next.js og TypeScript mot Supabase, Firebase og PostgreSQL, laget så det tar få sekunder å registrere ting på mobilen etter trening.",
        deliverables: [
          "tapMap: Interaktivt kart for å bygge egne sekvenser av posisjoner, sweeps og submissions",
          "Webapper for graderingssporing, vaskelister og instruktørtimelister med innlogging",
          "Tilpasset den faktiske hverdagen i Eidsvoll Kampsportklubb og Hadeland Kampsport",
        ],
        metrics: [
          { label: "Klubber", value: "Eidsvoll & Hadeland" },
          { label: "Format", value: "PWA på mobil & web" },
          { label: "Database", value: "Supabase / PostgreSQL" },
        ],
        stack: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "Firebase",
          "PostgreSQL",
          "PWA",
        ],
        schematicKind: "graph",
        links: [
          {
            label: "tapMap på GitHub",
            href: PROFILE_CONFIG.links.repos.tapMap,
            kind: "github",
          },
        ],
      },
      {
        id: "kampsport-eidsvoll-web",
        index: "05",
        title: "Eidsvoll Kampsportklubb (kampsporteidsvoll.no)",
        contextBadge: "Offisiell klubbside",
        period: "2026 - nå",
        category: "web",
        highlightBadge: "TinaCMS · Veiviser & klubb-assistent",
        summary:
          "Offisiell nettside for Eidsvoll Kampsportklubb på Dal, med redigering i TinaCMS, en enkel veiviser for nye medlemmer, oversikt over IBJJF-regler, timeplan og egen klubb-assistent.",
        problem:
          "Nye utøvere og foreldre vil raskt finne ut hvilket parti som passer, når treningene går og hvordan prøveperioden fungerer på mobil. Samtidig må andre i styret kunne legge ut nyheter og endre tider uten å røre koden.",
        architecture:
          "Bygget med Next.js 16, React 19, TypeScript og Tailwind CSS, med TinaCMS for innholdsstyring via Git og Firebase (Hosting, Firestore og Functions) i bunn.",
        deliverables: [
          "2-stegs veiviser som foreslår riktig parti (BJJ, Muay Thai, Crosstrening/Yoga eller Barneparti) ut fra alder og mål",
          "Oppsett i TinaCMS slik at nyheter, timeplan og klubbinfo kan oppdateres gjennom et ryddig grensesnitt",
          "Egen side for konkurranse- og IBJJF-regler med automatiske tester, samt klubb-assistent for vanlige spørsmål",
        ],
        metrics: [
          { label: "Nettside", value: "kampsporteidsvoll.no" },
          { label: "CMS", value: "TinaCMS + Firebase" },
          { label: "Rammeverk", value: "Next.js 16 · React 19" },
        ],
        stack: [
          "Next.js",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "TinaCMS",
          "Firebase",
        ],
        schematicKind: "portal",
        links: [
          {
            label: "kampsporteidsvoll.no",
            href: PROFILE_CONFIG.links.kampsportEidsvoll,
            kind: "external",
          },
          {
            label: "GitHub Repo",
            href: PROFILE_CONFIG.links.repos.eidsvollBjj,
            kind: "github",
          },
        ],
      },
    ],
  },
  stack: {
    sectionCode: "02 · Teknologi",
    title: "Teknologi & arbeidsmåte",
    subtitle:
      "Verktøy og rammeverk jeg bruker jevnlig på tvers av frontend, 3D, backend, sikkerhet og 3D-printing.",
    domains: [
      {
        id: "frontend-3d",
        code: "01",
        title: "Frontend & 3D",
        subtitle: "Brukergrensesnitt, 2D/3D-verktøy og tilstand",
        items: [
          "TypeScript",
          "React 19",
          "Next.js",
          "Vite",
          "Tailwind CSS",
          "Three.js / React Three Fiber",
          "Zustand",
        ],
        footnote: "Jevn bildefrekvens, god tastaturstøtte og ryddig tilstandsflyt.",
      },
      {
        id: "backend-data",
        code: "02",
        title: "Backend & Data",
        subtitle: "API-er, relasjonsdatabaser og testing",
        items: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Drizzle ORM",
          "Supabase",
          "Firebase",
          "OpenAPI",
          "Zod",
          "Vitest",
        ],
        footnote: "Validering i ytterkantene med Zod og tydelige skjemaer i databasen.",
      },
      {
        id: "ai-security",
        code: "03",
        title: "AI & Sikkerhet",
        subtitle: "Agenter, lokale modeller og sikkerhetstesting",
        items: [
          "Agentic Workflows",
          "MCP",
          "Local LLMs (Ollama)",
          "AI Red-Teaming",
          "Guardrail Resilience",
        ],
        footnote: "Praktisk erfaring med både å bygge og bryte opp LLM-løsninger.",
      },
      {
        id: "hardware-maker",
        code: "04",
        title: "Hardware & Maker",
        subtitle: "Parametrisk CAD, 3D-printing og egen serverdrift",
        items: [
          "OpenSCAD (BOSL2)",
          "Parametric CAD",
          "Bambu Lab FDM Printing",
          "Home Assistant",
          "Linux / Docker",
        ],
        footnote: "Fra .scad-kode til ferdige deler i PETG, PLA og TPU.",
      },
    ],
    philosophyTitle: "Slik liker jeg å jobbe",
    philosophySubtitle: "Noen prinsipper jeg holder meg til i prosjekter:",
    philosophy: [
      {
        code: "01",
        title: "Typesikkerhet hele veien",
        description:
          "Når databasemodellen i Drizzle, valideringen i Zod og grensesnittet i React deler typer, fanges feil opp mens man koder i stedet for i produksjon.",
      },
      {
        code: "02",
        title: "Raske og presise 3D-flater",
        description:
          "3D i nettleseren bør starte raskt, holde 60 FPS og være like greit å styre på en vanlig laptop som på en kraftig stasjonær maskin.",
      },
      {
        code: "03",
        title: "Sikkerhet med fra start",
        description:
          "Arbeidet med AI red-teaming har gjort meg ekstra bevisst på tydelige tilgangsgrenser, validering av input og hva som skjer når noen prøver å misbruke et system.",
      },
    ],
  },
  workbench: {
    sectionCode: "03 · Utenfor skjermen",
    title: "På matta, i verkstedet og på kjøkkenet",
    subtitle:
      "Når jeg ikke koder går det stort sett i Jiu-Jitsu på Dal, 3D-printing, oppussing og matlaging fra bunnen av.",
    items: [
      {
        id: "bjj",
        code: "Matte & klubb",
        title: "Brasiliansk Jiu-Jitsu & Eidsvoll Kampsportklubb",
        subtitle: "Brunt belte (trent siden 2013) · Instruktør & styreleder",
        description:
          "Jeg har trent Brasiliansk Jiu-Jitsu siden 2013 og har brunt belte. Til daglig er jeg instruktør og styreleder i Eidsvoll Kampsportklubb på Dal, hvor jeg både holder treninger og tar meg av driften sammen med resten av styret.",
        highlights: [
          "Trent BJJ jevnt siden 2013 og gradert til brunt belte",
          "Instruktør og styreleder i Eidsvoll Kampsportklubb / Rambukk",
          "Bygger verktøyene vi selv savner for timeplan, vaskelister og gradering",
        ],
        specs: [
          { label: "Belte", value: "Brunt belte (BJJ)" },
          { label: "Trent siden", value: "2013" },
          { label: "Rolle", value: "Styreleder & instruktør" },
        ],
        spanClass: "lg:col-span-7",
      },
      {
        id: "cad",
        code: "CAD & 3D-print",
        title: "Parametrisk CAD & 3D-printing",
        subtitle: "OpenSCAD (BOSL2) · PETG / PLA / TPU · MakerWorld",
        description:
          "Mangler jeg et feste, et skilt eller en holder i bestemte mål, tegner jeg det i kode med OpenSCAD og BOSL2 og printer det selv. Modeller andre kan ha nytte av legger jeg ut på MakerWorld.",
        highlights: [
          "Funksjonelle braketter, skilt og display-stands programmert i OpenSCAD",
          "Printer i PETG, PLA og TPU på Bambu Lab etter hva delen skal tåle",
          "Publiserer egne modeller åpent på MakerWorld",
        ],
        specs: [
          { label: "CAD", value: "OpenSCAD / BOSL2" },
          { label: "Plast", value: "PETG · PLA · TPU" },
          { label: "Profil", value: "MakerWorld" },
        ],
        spanClass: "lg:col-span-5",
        externalLink: {
          label: "Se modeller på MakerWorld",
          href: PROFILE_CONFIG.links.makerworld,
        },
      },
      {
        id: "workshop",
        code: "Hus & håndverk",
        title: "Smarthus, knivsliping, 70-tallshus & bakestål",
        subtitle: "Home Assistant, våtsteiner, oppussing og kaldhevet deig",
        description:
          "Hjemme går fritiden gjerne til prosjekter der man ser konkrete resultater: lokal Home Assistant-styring uten skyavhengighet, oppussing av et hus fra 70-tallet, sliping av kjøkkenkniver på våtstein og helgebakst på bakestål.",
        highlights: [
          "Lokal Home Assistant og Docker-oppsett hjemme for lys, varme og sensorer",
          "Sliping av kjøkkenkniver for hånd på våtstein og lærstropp til speilfinish",
          "Oppussing av 70-tallshus og langtidshevet pizza- og brøddeig på bakestål",
        ],
        specs: [
          { label: "Smarthus", value: "Home Assistant" },
          { label: "Sliping", value: "Våtstein → speilfinish" },
          { label: "Deig", value: "48-72t kaldheving" },
        ],
        spanClass: "lg:col-span-12",
      },
    ],
  },
  timeline: {
    sectionCode: "04 · Erfaring",
    title: "Erfaring & utdanning",
    subtitle: "Bakgrunn fra utvikling, sikkerhet, studier og styrearbeid.",
    items: [
      {
        id: "axisos",
        period: "2026 - nå",
        role: "Fullstack-utvikler",
        organization: "AxisOS",
        location: "Gardermoen / Romerike",
        typeBadge: "Fulltid",
        current: true,
        summary:
          "Utvikler AxisOS og 2D/3D-verktøyet Floorplan Studio med TypeScript, React, Three.js, Express, PostgreSQL og Drizzle ORM.",
        tags: ["TypeScript", "React", "Three.js", "PostgreSQL", "Drizzle ORM"],
      },
      {
        id: "telenor-gbs",
        period: "Sommer 2026",
        role: "Security Consultant (Summer Intern)",
        organization: "Telenor Global Business Security",
        location: "Fornebu",
        typeBadge: "Sommerengasjement",
        summary:
          "Jobbet videre fra bachelorprosjektet i Telenor GBS med sikkerhetsrammeverk, praktisk AI red-teaming, testing av guardrails og forsvar mot model extraction.",
        tags: ["AI Red-Teaming", "LLM Security", "Guardrails", "TypeScript"],
      },
      {
        id: "eidsvoll-rambukk",
        period: "2026 - nå",
        role: "Styreleder & teknisk ansvarlig",
        organization: "Eidsvoll Kampsportklubb / Rambukk",
        location: "Dal, Eidsvoll",
        typeBadge: "Verv & utvikling",
        current: true,
        summary:
          "Leder styrearbeidet i klubben, holder treninger og utvikler nettsiden (kampsporteidsvoll.no) samt interne verktøy for medlemmer og instruktører.",
        tags: ["Styrearbeid", "Next.js", "TinaCMS", "Firebase"],
      },
      {
        id: "kristiania-bsc",
        period: "2023 - 2026",
        role: "Bachelor i Frontend- og mobilutvikling",
        organization: "Høyskolen Kristiania",
        location: "Oslo",
        typeBadge: "BSc",
        summary:
          "Treårig bachelorgrad i web- og mobilutvikling, avsluttet med bacheloroppgaven Project BlueMind hos Telenor AI Factory.",
        tags: [
          "Frontend & mobil",
          "Webarkitektur",
          "Bacheloroppgave @ Telenor AI Factory",
        ],
      },
    ],
  },
  contact: {
    sectionCode: "05 · Kontakt",
    title: "Slå gjerne av en prat",
    subtitle:
      "Send en melding på LinkedIn hvis du vil ta en prat om utvikling, 3D på web, AI-sikkerhet, prosjekter eller Jiu-Jitsu.",
    availabilityValue: "Råholt / Eidsvoll · Treffes enklest på LinkedIn",
    linkedinCtaLabel: "Send melding på LinkedIn",
    githubCtaLabel: "GitHub (@kripe00)",
    channelsLabel: "Profiler",
    footerNote:
      "Bygget med Next.js, TypeScript og litt for mye kaffe på Romerike.",
    buildStamp: `${PROFILE_CONFIG.municipality} · ${PROFILE_CONFIG.coordinates}`,
  },
};
