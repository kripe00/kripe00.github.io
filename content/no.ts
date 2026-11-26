import { PROFILE_CONFIG } from "./profile";
import type { SiteContent } from "./types";

export const contentNO: SiteContent = {
  meta: {
    htmlLang: "nb",
    title: "Kristian Sollie Pedersen — Fullstack-utvikler, 3D Web & AI-sikkerhet",
    description:
      "Portefølje og digitalt verksted for Kristian Sollie Pedersen — norsk fullstack-utvikler, romlig 3D-ingeniør, AI-sikkerhetsutvikler, maker og BJJ brunt belte fra Råholt/Eidsvoll.",
  },
  nav: {
    projects: "Prosjekter",
    stack: "Teknologi",
    workbench: "Verksted",
    timeline: "Erfaring",
    contact: "Kontakt",
    themeDarkLabel: "Mørk",
    themeBlueprintLabel: "Blueprint",
    themeTooltip: "Bytt mellom mørkt verksted og lys CAD-blueprint",
    langTooltip: "Bytt språk (NO / EN)",
    localTimeLabel: "RÅHOLT",
    menuOpenLabel: "Åpne navigasjon",
    menuCloseLabel: "Lukk navigasjon",
  },
  hero: {
    specCode: "SPEC-00 // KRISTIAN SOLLIE PEDERSEN",
    eyebrow: "FULLSTACK · ROMLIG 3D · AI-SIKKERHET · MAKER",
    headline:
      "Fullstack-utvikler som bygger i skjæringspunktet mellom web, romlig 3D og fysisk håndverk.",
    subheadlineLead: "Utvikler ",
    subheadlineHighlight: "AxisOS & Floorplan Studio",
    subheadlineTail:
      " til daglig. Bygger interaktive 3D-opplevelser, sikker AI-arkitektur, skreddersydde klubbsystemer og parametriske 3D-modeller.",
    telemetryTitle: "SYSTEMTELEMETRI // SANNTID",
    telemetry: [
      {
        key: "role",
        label: "Rolle:",
        value: "Fullstack-utvikler @ AxisOS",
      },
      {
        key: "edu",
        label: "Utdanning:",
        value: "BSc Frontend- og mobilutvikling (Høyskolen Kristiania)",
      },
      {
        key: "loc",
        label: "Lokasjon:",
        value: "Eidsvoll / Ullensaker, Norge",
      },
      {
        key: "status",
        label: "Status:",
        value: "Bygger digitale og fysiske ting",
      },
    ],
    primaryCta: "Utforsk prosjekter",
    secondaryCta: "Ta kontakt",
    cadViewport: {
      panelTitle: "INTERAKTIV CAD-VISNING // 60 FPS",
      statusLive: "AKTIV SIMULERING",
      dragHint: "Dra for rotasjon · Klikk moduler",
      resetView: "Nullstill akser",
      orthoLabel: "ISO",
      perspLabel: "PERSP",
      explodeLabel: "Ekstrudering",
      modes: {
        floorplan: {
          tab: "01 / Areal 3D",
          title: "Romlig 2D/3D Arealmodell",
          spec: "24.0m × 16.5m · Soner & Bæring",
        },
        parametric: {
          tab: "02 / OpenSCAD",
          title: "Parametrisk BOSL2-feste",
          spec: "PETG · Vegg 3.2mm · Fas 45°",
        },
        reactor: {
          tab: "03 / Kjerne-84",
          title: "Kontrollstav-matrise & Telemetri",
          spec: "RBMK-inspirert gitter · Sanntid",
        },
      },
    },
  },
  projects: {
    sectionCode: "SEC-01 // UTVALGTE SYSTEMER & CASE-STUDIER",
    title: "Ingeniørarbeid & programvare i produksjon",
    subtitle:
      "Fra kommersiell 2D/3D-arealplanlegging og enterprise AI-sikkerhet til sanntids 3D-simulering og skreddersydde bransjesystemer.",
    filters: {
      all: "Alle systemer (05)",
      spatial: "Romlig 3D & Spill",
      security: "AI & Sikkerhet",
      saas: "Plattform & SaaS",
      web: "Web & CMS",
    },
    labels: {
      problem: "Problemstilling",
      architecture: "Arkitektur & Løsning",
      deliverables: "Leveranser & Nøkkelpunkter",
      stack: "Teknologistakk",
      inspectSpec: "Åpne teknisk spesifikasjon",
      collapseSpec: "Skjul spesifikasjon",
    },
    items: [
      {
        id: "axisos-floorplan",
        index: "PRJ-01",
        title: "AxisOS & Floorplan Studio",
        contextBadge: "Profesjonell / Nåværende",
        period: "2026 – nå",
        category: "spatial",
        highlightBadge: "Finalist · Innovasjonsprisen (Gardermokonferansen)",
        summary:
          "Fullstack-utvikling av plattform for event- og arealplanlegging med et interaktivt 2D/3D-studio der arrangører og utleiere modellerer rigg, kapasitet og logistikk med millimeterpresisjon.",
        problem:
          "Planlegging av store arrangementer og næringsarealer skjer ofte i fragmenterte PDF-tegninger, regneark og tunge CAD-verktøy som ikke snakker sammen med inventar, sikkerhetsavstander eller kundedialog.",
        architecture:
          "Ende-til-ende typesikker arkitektur med React, Vite og Three.js i et synkronisert 2D/3D-lerret på klientsiden, koblet mot et modulært Express-API, PostgreSQL og Drizzle ORM for versjonerte plantegninger, objektkataloger og tilgangsstyring.",
        deliverables: [
          "Sømløs veksling mellom presis 2D-skjemategning og interaktiv 3D-gjennomgang uten tap av tilstand",
          "Typesikker datamodell i PostgreSQL + Drizzle ORM for soner, inventar, målsetting og flerbrukerprosjekter",
          "Optimalisert scenegraf og instansiert geometri for jevn bildefrekvens i komplekse halloppsett",
        ],
        metrics: [
          { label: "Visning", value: "2D CAD ↔ 3D WebGL" },
          { label: "Utmerkelse", value: "Innovasjonsfinalist" },
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
        index: "PRJ-02",
        title: "Project BlueMind & Enterprise AI Security",
        contextBadge: "Telenor AI Factory / Telenor GBS",
        period: "2026",
        category: "security",
        highlightBadge: "Bachelorprosjekt + Sommerengasjement i GBS",
        summary:
          "Bachelorprosjekt hos Telenor AI Factory etterfulgt av sommerengasjement som sikkerhetskonsulent i Telenor Global Business Security. Bygget sikkerhetsdashboard og rammeverksstyrt AI-assistent, kombinert med praktisk AI red-teaming og forsvar mot modelluthenting.",
        problem:
          "Store virksomheter som ruller ut interne og kundevendte LLM-tjenester trenger både oversiktlige verktøy for etterlevelse mot sikkerhetsrammeverk og reell verifisering av at guardrails tåler målrettede angrep.",
        architecture:
          "Utviklet et modulært sikkerhetsdashboard i React og TypeScript med en kontekststyrt AI-assistent forankret i interne sikkerhetskrav, og etablerte testløp for prompt injection, guardrail-omgåelse og model extraction-deteksjon.",
        deliverables: [
          "Sikkerhetsdashboard som knytter tekniske kontroller direkte opp mot enterprise sikkerhetsrammeverk",
          "Systematisk AI red-teaming mot produksjonsnære modeller for å avdekke prompt-lekkasjer og uønsket verktøybruk",
          "Tiltak og evalueringsmetodikk mot model extraction, jailbreaks og indirekte injeksjonsangrep",
        ],
        metrics: [
          { label: "Domene", value: "LLM & Enterprise Sec" },
          { label: "Metodikk", value: "AI Red-Teaming" },
          { label: "Miljø", value: "Telenor AI Factory / GBS" },
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
        index: "PRJ-03",
        title: "Meltdown is Propaganda",
        contextBadge: "Indie 3D-spill — GitHub Game Off",
        period: "Game Jam / 3D Web",
        category: "spatial",
        highlightBadge: "Sanntids reaktorfysikk i nettleseren",
        summary:
          "Kassett-futuristisk 3D-thriller satt til et sovjetisk kjernekraftverk i 1984. Spilleren styrer et analogt kontrollrom med sanntids fysikk- og reaktorsimulering der instrumentene og statens direktiver ikke alltid stemmer overens.",
        problem:
          "Å skape klaustrofobisk, taktil spenning direkte i nettleseren uten tunge spillmotor-nedlastinger krevde en deterministisk termisk simulering tett koblet til fysiske brytere, målere og romlig lyd/lys i 60 FPS.",
        architecture:
          "Bygget med React 19, Three.js og React Three Fiber, der en frakoblet tilstandsmotor i Zustand kjører reaktor-ticks (nøytronfluks, kjølevæsketrykk, kontrollstav-posisjon og xenon-forgiftning) uavhengig av render-løkken.",
        deliverables: [
          "Taktilt 3D-kontrollpanel med diegetiske målere, varsellamper og mekaniske brytere i R3F",
          "Sanntids termodynamisk og reaktorkinetisk simuleringsmodell drevet av Zustand og TypeScript",
          "Atmosfærisk kassett-futuristisk lyssetting og optimalisert ressurslasting for direkte avspilling i web",
        ],
        metrics: [
          { label: "Tidsepoke", value: "1984 Kassett-futurisme" },
          { label: "Motor", value: "R3F + Zustand Tick" },
          { label: "Målrate", value: "Stabil 60 FPS WebGL" },
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
            label: "GitHub (Spillkode)",
            href: PROFILE_CONFIG.links.repos.nightshift,
            kind: "github",
          },
        ],
      },
      {
        id: "tapmap-martial-arts",
        index: "PRJ-04",
        title: "TapMap & Kampsport-økosystemet",
        contextBadge: "Community SaaS / PWA-er",
        period: "Pågående",
        category: "saas",
        highlightBadge: "I aktiv bruk på matta & i klubbdrift",
        summary:
          "Visuell flytkart-app for Brasiliansk Jiu-Jitsu-teknikker (tapMap), kombinert med skreddersydde interne webapper for graderingssporing, vaskelister, timelister og daglig drift i Eidsvoll Kampsportklubb og Hadeland Kampsport.",
        problem:
          "BJJ er et komplekst beslutningstre av posisjoner, overganger og kontringer som er vanskelig å strukturere i flate videolister — samtidig som frivillige kampsportklubber ofte drukner i manuelle regneark for oppmøte, vask og instruktørtimer.",
        architecture:
          "Mobilvennlige Progressive Web Apps (PWA) bygget i Next.js og TypeScript med relasjonelle grafstrukturer i PostgreSQL / Supabase og sanntidssynkronisering, tilpasset rask registrering på mobil rett etter økt.",
        deliverables: [
          "tapMap: Interaktivt posisjons- og teknikk-flytkart for å kartlegge egne sekvenser, sweeps og submissions",
          "Klubbsystemer for graderingssporing, rettferdige vaskelister og instruktørtimelister med rollebasert tilgang",
          "Skreddersydde verktøy i daglig bruk hos både Eidsvoll Kampsportklubb og Hadeland Kampsport",
        ],
        metrics: [
          { label: "Klubber", value: "Eidsvoll & Hadeland" },
          { label: "Format", value: "Installérbar PWA" },
          { label: "Data", value: "Supabase / PostgreSQL" },
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
        index: "PRJ-05",
        title: "Eidsvoll Kampsportklubb (kampsporteidsvoll.no)",
        contextBadge: "Klubbplattform & CMS i produksjon",
        period: "2026 – nå",
        category: "web",
        highlightBadge: "TinaCMS · Interaktiv veiviser & AI-assistent",
        summary:
          "Komplett, lynrask klubbnettside og medlemsportal for Eidsvoll Kampsportklubb på Dal — med Git-basert publisering i TinaCMS, interaktiv kampsport-veiviser, IBJJF-regelmodul, timeplan og innebygd klubb-assistent.",
        problem:
          "Nye medlemmer og foresatte trenger rask, tillitsvekkende oversikt over partier, aldersgrupper, prøveperiode og regler på mobil — mens styret og instruktører må kunne publisere nyheter og oppdatere timeplaner uten å redigere kode.",
        architecture:
          "Bygget med Next.js 16, React 19, TypeScript og Tailwind CSS v4, koblet mot TinaCMS for skjemastyrt redaksjonelt innhold og Firebase (Hosting, Firestore & Functions) for interaktive tjenester og EKK-assistenten.",
        deliverables: [
          "2-stegs interaktiv veiviser som anbefaler riktig parti (BJJ, Muay Thai, Crosstrening/Yoga eller Barneparti) på 30 sekunder",
          "Redaktørvennlig CMS-arbeidsflyt i TinaCMS for nyheter, timeplaner, styreinfo og støttespillere",
          "Dedikert konkurranse- og IBJJF-regelmodul med automatiserte tester samt innebygd AI-klubb-assistent",
        ],
        metrics: [
          { label: "Nettside", value: "kampsporteidsvoll.no" },
          { label: "CMS & Sky", value: "TinaCMS + Firebase" },
          { label: "Stack", value: "Next.js 16 · React 19" },
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
    sectionCode: "SEC-02 // TEKNOLOGISTAKK & INGENIØRFILOSOFI",
    title: "Verktøykasse organisert etter domene",
    subtitle:
      "Ingen kunstige prosentmålere — bare verktøyene jeg faktisk bruker for å bygge robuste systemer fra database og 3D-scene til sikkerhetstesting og fysiske deler.",
    domains: [
      {
        id: "frontend-3d",
        code: "DOM-01",
        title: "Frontend & 3D",
        subtitle: "Grensesnitt, romlige verktøy og interaktiv grafikk",
        items: [
          "TypeScript",
          "React 19",
          "Next.js",
          "Vite",
          "Tailwind CSS",
          "Three.js / React Three Fiber",
          "Zustand",
        ],
        footnote: "Fokus på 60 FPS, tastaturnavigasjon og forutsigbar tilstand.",
      },
      {
        id: "backend-data",
        code: "DOM-02",
        title: "Backend & Data",
        subtitle: "API-kontrakter, relasjonsdata og verifikasjon",
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
        footnote: "Skjemavalidering ved systemgrensene og tydelig datamodellering.",
      },
      {
        id: "ai-security",
        code: "DOM-03",
        title: "AI & Sikkerhet",
        subtitle: "Agentiske arbeidsflyter, lokal kjøring og motstandsdyktighet",
        items: [
          "Agentic Workflows",
          "MCP",
          "Local LLMs (Ollama)",
          "AI Red-Teaming",
          "Guardrail Resilience",
        ],
        footnote: "Bygger AI-systemer med samme skepsis som jeg tester dem med.",
      },
      {
        id: "hardware-maker",
        code: "DOM-04",
        title: "Hardware & Maker",
        subtitle: "Parametrisk konstruksjon, fabrikasjon og selvdrift",
        items: [
          "OpenSCAD (BOSL2)",
          "Parametric CAD",
          "Bambu Lab FDM Printing",
          "Home Assistant",
          "Linux / Docker",
        ],
        footnote: "Fra kodebasert geometri i .scad til ferdig del på arbeidsbenken.",
      },
    ],
    philosophyTitle: "Ingeniørprinsipper i praksis",
    philosophySubtitle: "Tre rettesnorer som går igjen i alt jeg bygger:",
    philosophy: [
      {
        code: "P-01",
        title: "Ende-til-ende typesikkerhet",
        description:
          "Fra PostgreSQL-skjema i Drizzle og Zod-validerte endepunkter helt ut i React-komponenten. Færre antakelser gir raskere iterasjon når systemet vokser.",
      },
      {
        code: "P-02",
        title: "Romlig presisjon uten treghet",
        description:
          "3D på web skal føles som et presist arbeidsverktøy, ikke en tung teknologidemo. Tydelige koordinater, ryddig scenegraf og respekt for klientens ressurser.",
      },
      {
        code: "P-03",
        title: "Sikkerhet som arkitektur, ikke glasur",
        description:
          "Erfaring fra AI red-teaming preger hvordan jeg designer vanlige applikasjoner: eksplisitte tillitsgrenser, minste privilegiums prinsipp og etterprøvbar oppførsel.",
      },
    ],
  },
  workbench: {
    sectionCode: "SEC-03 // OFF-SCREEN & DET FYSISKE VERKSTEDET",
    title: "Håndverk, ledelse og problemløsning utenfor skjermen",
    subtitle:
      "Den samme tålmodigheten som trengs for å feilsøke en 3D-matrise går igjen på matta, i verkstedet og på kjøkkenbenken.",
    items: [
      {
        id: "bjj",
        code: "WB-01 // MATTE & LEDELSE",
        title: "Brasiliansk Jiu-Jitsu & Klubbdrift",
        subtitle: "Brunt belte (trent siden 2013) · Instruktør & Styreleder",
        description:
          "Over et tiår på matta har formet hvordan jeg tilnærmer meg komplekse problemer: press skaper klarhet, og små mekaniske justeringer slår rå kraft. Som instruktør og styreleder i Eidsvoll Kampsportklubb kombinerer jeg strukturert undervisning med praktisk organisasjonsutvikling og egne digitale verktøy.",
        highlights: [
          "Trent Brasiliansk Jiu-Jitsu kontinuerlig siden 2013 — gradert til brunt belte",
          "Styreleder og instruktør i Eidsvoll Kampsportklubb med ansvar for drift og faglig rød tråd",
          "Utvikler klubbens egne digitale systemer direkte basert på reelle behov på matta",
        ],
        specs: [
          { label: "Grad", value: "Brunt belte (BJJ)" },
          { label: "Aktiv siden", value: "2013" },
          { label: "Verv", value: "Styreleder & Instruktør" },
        ],
        spanClass: "lg:col-span-7",
      },
      {
        id: "cad",
        code: "WB-02 // PARAMETRISK CAD & FDM",
        title: "Parametrisk CAD & 3D-printing",
        subtitle: "OpenSCAD (BOSL2) · PETG / PLA / TPU · MakerWorld",
        description:
          "Når en brakett, et skilt eller en spesialtilpasset holder mangler, skriver jeg delen i kode. Jeg modellerer parametriske komponenter i OpenSCAD med BOSL2-biblioteket og printer funksjonelle deler med tette toleranser.",
        highlights: [
          "Kodebasert konstruksjon av funksjonelle beslag, skilt og display-stands i OpenSCAD",
          "Materialvalg etter mekanisk krav: slagfast PETG, presis PLA og fleksibel TPU",
          "Deler åpne, konfigurerbare modeller med maker-miljøet på MakerWorld",
        ],
        specs: [
          { label: "CAD", value: "OpenSCAD / BOSL2" },
          { label: "Materialer", value: "PETG · PLA · TPU" },
          { label: "Toleranse", value: "±0.15 mm passform" },
        ],
        spanClass: "lg:col-span-5",
        externalLink: {
          label: "Se modeller på MakerWorld",
          href: PROFILE_CONFIG.links.makerworld,
        },
      },
      {
        id: "workshop",
        code: "WB-03 // VERKSTED, SMARTHUS & KJØKKEN",
        title: "Smarthus, Knivsliping, 70-tallshus & Bakestål",
        subtitle: "Lokal infrastruktur, håndverktøy og langtidsheving",
        description:
          "Utenom kode og trening trives jeg best med prosjekter som gir konkret, målbar kvalitet i hverdagen — enten det er hel-lokal automasjon uten skyavhengighet, oppussing av treverk og etasjeskiller i et 70-tallshus, japanske slipesteiner eller glovarmt bakestål.",
        highlights: [
          "Lokal Home Assistant-infrastruktur i Docker med fokus på driftssikkerhet uten skytvang",
          "Frihåndssliping av kjøkkenkniver på våtstein og lærstropp helt opp til speilblank egg",
          "Systematisk oppussing av 70-tallshus og langtidshevet surdeigs- og pizzabakst på massivt bakestål",
        ],
        specs: [
          { label: "Automasjon", value: "Home Assistant (Lokal)" },
          { label: "Eggfinish", value: "Våtstein → Speilpolert" },
          { label: "Hevetid", value: "48–72t kaldheving" },
        ],
        spanClass: "lg:col-span-12",
      },
    ],
  },
  timeline: {
    sectionCode: "SEC-04 // ERFARING & MILEPÆLER",
    title: "Kronologisk logg",
    subtitle:
      "Fra bachelorløp og sikkerhetsarbeid i Telenor til kommersiell plattformutvikling og teknisk ledelse.",
    activeBadge: "NÅVÆRENDE",
    items: [
      {
        id: "axisos",
        period: "2026 – nå",
        role: "Fullstack-utvikler",
        organization: "AxisOS",
        location: "Gardermoen / Romerike",
        typeBadge: "Fulltid · Produkt & 3D",
        current: true,
        summary:
          "Utvikler AxisOS og det interaktive 2D/3D-verktøyet Floorplan Studio på tvers av hele stakken med TypeScript, React, Three.js, Express, PostgreSQL og Drizzle ORM.",
        tags: ["TypeScript", "React", "Three.js", "PostgreSQL", "Drizzle ORM"],
      },
      {
        id: "telenor-gbs",
        period: "Sommer 2026",
        role: "Security Consultant (Summer Intern)",
        organization: "Telenor Global Business Security",
        location: "Fornebu, Norge",
        typeBadge: "Engasjement · AI Security",
        summary:
          "Videreførte arbeidet fra Project BlueMind inn i Telenor GBS med fokus på sikkerhetsrammeverk, praktisk AI red-teaming, testing av guardrails og forsvar mot model extraction.",
        tags: ["AI Red-Teaming", "LLM Security", "Guardrails", "TypeScript"],
      },
      {
        id: "eidsvoll-rambukk",
        period: "2026 – nå",
        role: "Styreleder & Teknisk ansvarlig",
        organization: "Eidsvoll Kampsportklubb / Rambukk",
        location: "Eidsvoll, Norge",
        typeBadge: "Ledelse & Systemutvikling",
        current: true,
        summary:
          "Leder styrearbeid og sportslig struktur kombinert med utvikling og drift av skreddersydde digitale løsninger for medlemmer, instruktører og treningshverdag.",
        tags: ["Ledelse", "Next.js", "Supabase", "Klubbsystemer"],
      },
      {
        id: "kristiania-bsc",
        period: "2023 – 2026",
        role: "Bachelor i Frontend- og mobilutvikling",
        organization: "Høyskolen Kristiania",
        location: "Oslo, Norge",
        typeBadge: "Utdanning · BSc",
        summary:
          "Treårig ingeniørrettet bachelorgrad i moderne web- og applikasjonsutvikling, avsluttet med bacheloroppgaven Project BlueMind hos Telenor AI Factory.",
        tags: [
          "Webarkitektur",
          "Mobilutvikling",
          "Bacheloroppgave @ Telenor AI Factory",
        ],
      },
    ],
  },
  contact: {
    sectionCode: "SEC-05 // KONTAKT & KANALER",
    title: "La oss bygge noe skikkelig",
    subtitle:
      "Send gjerne en melding på LinkedIn hvis du vil slå av en prat om romlig 3D på web, sikker AI-arkitektur, prosjekter eller parametriske modeller og Jiu-Jitsu.",
    availabilityLabel: "Operativ status",
    availabilityValue: "Fullstack @ AxisOS · Send melding på LinkedIn for kontakt",
    linkedinCtaLabel: "Send melding på LinkedIn",
    githubCtaLabel: "Se kode på GitHub (@kripe00)",
    channelsLabel: "Eksterne profiler & kode",
    coordinatesLabel: "Koordinater",
    footerNote:
      "Bygget med Next.js, TypeScript og litt for mye kaffe på Romerike.",
    buildStamp: `${PROFILE_CONFIG.buildVersion} · ${PROFILE_CONFIG.coordinates}`,
  },
};
