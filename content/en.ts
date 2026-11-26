import { PROFILE_CONFIG } from "./profile";
import type { SiteContent } from "./types";

export const contentEN: SiteContent = {
  meta: {
    htmlLang: "en",
    title: "Kristian Sollie Pedersen — Fullstack Developer, 3D Web & AI Security",
    description:
      "Personal portfolio and digital workbench of Kristian Sollie Pedersen — Norwegian Fullstack Developer, 3D Web Engineer, AI Security Researcher, Maker, and BJJ Brown Belt.",
  },
  nav: {
    projects: "Projects",
    stack: "Stack",
    workbench: "Workbench",
    timeline: "Timeline",
    contact: "Contact",
    themeDarkLabel: "Dark",
    themeBlueprintLabel: "Blueprint",
    themeTooltip: "Switch between dark workbench and light CAD blueprint theme",
    langTooltip: "Switch language (NO / EN)",
    localTimeLabel: "RÅHOLT",
    menuOpenLabel: "Open navigation",
    menuCloseLabel: "Close navigation",
  },
  hero: {
    specCode: "SPEC-00 // KRISTIAN SOLLIE PEDERSEN",
    eyebrow: "FULLSTACK · SPATIAL 3D · AI SECURITY · MAKER",
    headline:
      "Fullstack developer building at the intersection of web engineering, spatial 3D, and physical craft.",
    subheadlineLead: "Building ",
    subheadlineHighlight: "AxisOS & Floorplan Studio",
    subheadlineTail:
      " day to day. Engineering interactive 3D web tools, resilient AI architectures, custom martial arts club platforms, and parametric CAD parts.",
    telemetryTitle: "SYSTEM TELEMETRY // LIVE",
    telemetry: [
      {
        key: "role",
        label: "Role:",
        value: "Fullstack Developer @ AxisOS",
      },
      {
        key: "edu",
        label: "Education:",
        value: "BSc Frontend & Mobile Development (Kristiania University College)",
      },
      {
        key: "loc",
        label: "Location:",
        value: "Eidsvoll / Ullensaker, Norway",
      },
      {
        key: "status",
        label: "Status:",
        value: "Building digital and physical systems",
      },
    ],
    primaryCta: "Explore projects",
    secondaryCta: "Get in touch",
    cadViewport: {
      panelTitle: "INTERACTIVE CAD VIEWPORT // 60 FPS",
      statusLive: "SIMULATION ACTIVE",
      dragHint: "Drag to orbit · Switch assemblies",
      resetView: "Reset axes",
      orthoLabel: "ISO",
      perspLabel: "PERSP",
      explodeLabel: "Extrusion",
      modes: {
        floorplan: {
          tab: "01 / Venue 3D",
          title: "Spatial 2D/3D Floorplan Assembly",
          spec: "24.0m × 16.5m · Zones & Structure",
        },
        parametric: {
          tab: "02 / OpenSCAD",
          title: "Parametric BOSL2 Mount",
          spec: "PETG · Wall 3.2mm · Chamfer 45°",
        },
        reactor: {
          tab: "03 / Core-84",
          title: "Control Rod Lattice & Telemetry",
          spec: "RBMK-inspired array · Real-time",
        },
      },
    },
  },
  projects: {
    sectionCode: "SEC-01 // FEATURED SYSTEMS & CASE STUDIES",
    title: "Production software & spatial engineering",
    subtitle:
      "Spanning commercial 2D/3D spatial planning and enterprise AI security to real-time browser simulations and bespoke community SaaS.",
    filters: {
      all: "All Systems (05)",
      spatial: "Spatial 3D & Sim",
      security: "AI & Security",
      saas: "Platform & SaaS",
      web: "Web & CMS",
    },
    labels: {
      problem: "Problem Statement",
      architecture: "Architecture & Approach",
      deliverables: "Engineering Highlights",
      stack: "Tech Stack",
      inspectSpec: "Inspect technical spec",
      collapseSpec: "Collapse spec",
    },
    items: [
      {
        id: "axisos-floorplan",
        index: "PRJ-01",
        title: "AxisOS & Floorplan Studio",
        contextBadge: "Professional / Current",
        period: "2026 – present",
        category: "spatial",
        highlightBadge: "Innovation Award Finalist (Gardermokonferansen)",
        summary:
          "Fullstack engineering of an event and venue planning platform featuring an interactive 2D/3D spatial studio where organizers and venue operators model rigging, capacity, and floor logistics with precision.",
        problem:
          "Large-scale event and commercial floor planning often relies on disconnected PDF blueprints, spreadsheets, and desktop-only CAD files detached from live inventory, safety clearances, and stakeholder workflows.",
        architecture:
          "End-to-end type-safe stack combining React, Vite, and Three.js in a synchronized 2D/3D browser canvas backed by a modular Express API, PostgreSQL, and Drizzle ORM for versioned layouts, asset catalogs, and multi-tenant permissions.",
        deliverables: [
          "Instant state-preserving switching between orthographic 2D drafting and interactive 3D walkthroughs",
          "Relational PostgreSQL + Drizzle ORM schema governing zones, spatial measurements, and reusable rig assets",
          "Optimized Three.js scene graph and instanced geometry maintaining smooth frame pacing on dense venues",
        ],
        metrics: [
          { label: "Viewport", value: "2D CAD ↔ 3D WebGL" },
          { label: "Recognition", value: "Innovation Finalist" },
          { label: "Role", value: "Fullstack Engineer" },
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
        highlightBadge: "Bachelor Thesis + GBS Security Engagement",
        summary:
          "Bachelor capstone with Telenor AI Factory followed by a summer engagement as Security Consultant in Telenor Global Business Security. Built an enterprise security dashboard and framework-grounded AI assistant alongside offensive AI red-teaming and model-extraction defense.",
        problem:
          "Enterprises deploying internal and customer-facing LLM systems need both clear governance tooling mapped to security frameworks and empirical verification that guardrails hold up under adversarial pressure.",
        architecture:
          "Engineered a modular React and TypeScript security posture dashboard paired with a policy-grounded AI assistant, complemented by structured adversarial test harnesses targeting prompt injection, guardrail bypasses, and model extraction.",
        deliverables: [
          "Security governance dashboard mapping technical controls directly to enterprise security frameworks",
          "Hands-on AI red-teaming across production-grade LLM pipelines to uncover prompt leakage and tool-use abuse",
          "Defensive evaluation workflows mitigating model extraction, jailbreaks, and indirect prompt injection",
        ],
        metrics: [
          { label: "Domain", value: "LLM & Enterprise Sec" },
          { label: "Practice", value: "AI Red-Teaming" },
          { label: "Org", value: "Telenor AI Factory / GBS" },
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
        contextBadge: "Indie 3D Game — GitHub Game Off",
        period: "Game Jam / 3D Web",
        category: "spatial",
        highlightBadge: "Real-time reactor physics in the browser",
        summary:
          "Cassette-futurist 3D thriller set inside a 1984 Soviet nuclear power station. Players operate a tactile analog control room backed by a real-time reactor core physics simulation where gauges and official directives diverge.",
        problem:
          "Delivering tense, tactile control-room immersion directly in a browser without native game-engine downloads required coupling deterministic thermal/neutron simulation ticks with dozens of diegetic 3D switches and indicators at 60 FPS.",
        architecture:
          "Built on React 19, Three.js, and React Three Fiber with a decoupled Zustand simulation loop computing neutron flux, coolant pressure, control-rod insertion depth, and xenon poisoning independently from frame rendering.",
        deliverables: [
          "Diegetic 3D control console with physicalized toggles, analog dials, and alarm annunciators in R3F",
          "Deterministic reactor kinetics and thermal-hydraulic state machine powered by Zustand and TypeScript",
          "Atmospheric 1984 cassette-futurist lighting pipeline tuned for instant browser startup",
        ],
        metrics: [
          { label: "Aesthetic", value: "1984 Cassette Futurism" },
          { label: "Engine", value: "R3F + Zustand Sim" },
          { label: "Target", value: "Locked 60 FPS WebGL" },
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
            label: "GitHub (Game Repo)",
            href: PROFILE_CONFIG.links.repos.nightshift,
            kind: "github",
          },
        ],
      },
      {
        id: "tapmap-martial-arts",
        index: "PRJ-04",
        title: "TapMap & Martial Arts Club Ecosystem",
        contextBadge: "Community SaaS / PWAs",
        period: "Ongoing",
        category: "saas",
        highlightBadge: "Live on the mats & in daily club ops",
        summary:
          "Visual decision-tree and flowchart app for Brazilian Jiu-Jitsu techniques (tapMap), accompanied by custom internal PWAs handling belt progression, laundry rosters, instructor timesheets, and operations for Eidsvoll Kampsportklubb and Hadeland Kampsport.",
        problem:
          "BJJ is a directed graph of positions, transitions, and counters that flat video playlists fail to capture — while volunteer-run academies lose hours to brittle spreadsheets for attendance, mat/loaner-gi laundry, and coaching hours.",
        architecture:
          "Mobile-first Progressive Web Apps engineered with Next.js and TypeScript atop PostgreSQL / Supabase relational graph schemas and real-time sync, designed for one-handed logging right after rolling.",
        deliverables: [
          "tapMap: Interactive grapple-graph builder mapping positional transitions, sweeps, and submission chains",
          "Custom operational apps for belt/stripe tracking, laundry rotation schedules, and instructor timesheets",
          "Internal club tooling in active weekly use across Eidsvoll Kampsportklubb and Hadeland Kampsport",
        ],
        metrics: [
          { label: "Academies", value: "Eidsvoll & Hadeland" },
          { label: "Delivery", value: "Installable PWAs" },
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
            label: "tapMap on GitHub",
            href: PROFILE_CONFIG.links.repos.tapMap,
            kind: "github",
          },
        ],
      },
      {
        id: "kampsport-eidsvoll-web",
        index: "PRJ-05",
        title: "Eidsvoll Kampsportklubb (kampsporteidsvoll.no)",
        contextBadge: "Production Club Platform & CMS",
        period: "2026 – present",
        category: "web",
        highlightBadge: "TinaCMS · Interactive Recommender & AI Assistant",
        summary:
          "Full-featured, high-speed web platform and member portal for Eidsvoll Kampsportklubb — featuring Git-backed TinaCMS publishing, an interactive class recommender, IBJJF rules engine, live timetable, and an embedded club AI assistant.",
        problem:
          "Prospective members and parents need immediate mobile clarity on classes, age groups, free-trial onboarding, and competition rules — while board members and coaches need to publish news and schedule updates without touching code.",
        architecture:
          "Engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, paired with TinaCMS for structured editorial workflows and Firebase (Hosting, Firestore & Functions) backing interactive features and the EKK assistant.",
        deliverables: [
          "2-step interactive martial arts recommender matching visitors to BJJ, Muay Thai, Crosstraining/Yoga, or Kids classes in 30 seconds",
          "Schema-driven TinaCMS editorial workflow for news posts, timetables, board governance, and club sponsors",
          "Dedicated IBJJF competition-rules module with automated unit tests plus an integrated club AI assistant",
        ],
        metrics: [
          { label: "Live Site", value: "kampsporteidsvoll.no" },
          { label: "CMS & Cloud", value: "TinaCMS + Firebase" },
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
    sectionCode: "SEC-02 // TECH STACK & ENGINEERING PHILOSOPHY",
    title: "Production toolkit organized by domain",
    subtitle:
      "No arbitrary skill-percentage bars — just the concrete stack I rely on across spatial interfaces, backend architecture, adversarial AI testing, and physical fabrication.",
    domains: [
      {
        id: "frontend-3d",
        code: "DOM-01",
        title: "Frontend & 3D",
        subtitle: "Interfaces, spatial canvases, and interactive graphics",
        items: [
          "TypeScript",
          "React 19",
          "Next.js",
          "Vite",
          "Tailwind CSS",
          "Three.js / React Three Fiber",
          "Zustand",
        ],
        footnote: "Engineered for 60 FPS frame budgets, keyboard ergonomics, and predictable state.",
      },
      {
        id: "backend-data",
        code: "DOM-02",
        title: "Backend & Data",
        subtitle: "API contracts, relational persistence, and verification",
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
        footnote: "Strict schema validation at system boundaries and explicit relational modeling.",
      },
      {
        id: "ai-security",
        code: "DOM-03",
        title: "AI & Security",
        subtitle: "Agentic systems, local inference, and adversarial resilience",
        items: [
          "Agentic Workflows",
          "MCP",
          "Local LLMs (Ollama)",
          "AI Red-Teaming",
          "Guardrail Resilience",
        ],
        footnote: "Building AI capabilities with the same adversarial rigor used to break them.",
      },
      {
        id: "hardware-maker",
        code: "DOM-04",
        title: "Hardware & Maker",
        subtitle: "Code-driven CAD, additive manufacturing, and self-hosted infra",
        items: [
          "OpenSCAD (BOSL2)",
          "Parametric CAD",
          "Bambu Lab FDM Printing",
          "Home Assistant",
          "Linux / Docker",
        ],
        footnote: "From version-controlled .scad geometry to functional parts on the workbench.",
      },
    ],
    philosophyTitle: "Operating principles",
    philosophySubtitle: "Three engineering convictions behind every system I ship:",
    philosophy: [
      {
        code: "P-01",
        title: "End-to-end type safety & explicit contracts",
        description:
          "From PostgreSQL tables in Drizzle and Zod-validated API boundaries straight into React 19 components. Eliminating implicit assumptions keeps iteration fast as complexity scales.",
      },
      {
        code: "P-02",
        title: "Spatial precision without bloat",
        description:
          "3D on the web should behave like a responsive precision instrument, not a heavy novelty demo — clean scene graphs, clear measurements, and graceful mobile fallbacks.",
      },
      {
        code: "P-03",
        title: "Security as architecture, never an afterthought",
        description:
          "Red-teaming enterprise LLM pipelines shapes how I architect everyday software: explicit trust boundaries, least-privilege tool access, and verifiable failure modes.",
      },
    ],
  },
  workbench: {
    sectionCode: "SEC-03 // OFF-SCREEN & THE PHYSICAL WORKBENCH",
    title: "Craft, leadership, and hands-on problem solving",
    subtitle:
      "The patience required to debug a transformation matrix is the exact same mindset practiced on the mats, in the workshop, and over a hot baking steel.",
    items: [
      {
        id: "bjj",
        code: "WB-01 // MATS & LEADERSHIP",
        title: "Brazilian Jiu-Jitsu & Club Leadership",
        subtitle: "Brown Belt (training since 2013) · Instructor & Chairman",
        description:
          "More than a decade on the mats has shaped how I approach hard problems: stay calm under pressure, favor leverage and structure over brute force, and iterate every week. As instructor and Chairman of the Board at Eidsvoll Kampsportklubb, I pair structured coaching with modernizing club operations.",
        highlights: [
          "Training Brazilian Jiu-Jitsu continuously since 2013 — ranked Brown Belt",
          "Chairman & instructor at Eidsvoll Kampsportklubb leading curriculum and governance",
          "Building custom club software informed directly by daily friction on the mats",
        ],
        specs: [
          { label: "Rank", value: "BJJ Brown Belt" },
          { label: "Mat Time", value: "Since 2013" },
          { label: "Role", value: "Chairman & Instructor" },
        ],
        spanClass: "lg:col-span-7",
      },
      {
        id: "cad",
        code: "WB-02 // PARAMETRIC CAD & FDM",
        title: "Parametric CAD & 3D Printing",
        subtitle: "OpenSCAD (BOSL2) · PETG / PLA / TPU · MakerWorld",
        description:
          "When a bracket, shop jig, sign, or display stand doesn't exist in the exact dimensions needed, I write it in code. I design parametric assemblies in OpenSCAD using BOSL2 and print functional parts on Bambu Lab hardware.",
        highlights: [
          "Code-defined functional brackets, signage, and display stands in OpenSCAD",
          "Material-driven prints across impact-resistant PETG, crisp PLA, and flexible TPU",
          "Publishing customizable parametric designs for the community on MakerWorld",
        ],
        specs: [
          { label: "CAD", value: "OpenSCAD / BOSL2" },
          { label: "Filaments", value: "PETG · PLA · TPU" },
          { label: "Fitment", value: "±0.15 mm clearance" },
        ],
        spanClass: "lg:col-span-5",
        externalLink: {
          label: "View models on MakerWorld",
          href: PROFILE_CONFIG.links.makerworld,
        },
      },
      {
        id: "workshop",
        code: "WB-03 // WORKSHOP, SMART HOME & KITCHEN",
        title: "Local Smart Home, Mirror-Edge Knives, 70s House & Baking Steel",
        subtitle: "Self-hosted automation, whetstones, renovation, and cold-fermented dough",
        description:
          "Away from the keyboard and the academy, I gravitate toward tactile crafts with measurable results — running cloud-free Home Assistant automation, renovating a 1970s Norwegian home room by room, sharpening kitchen steel to a mirror bevel, and baking long-fermented dough.",
        highlights: [
          "Local-first Home Assistant & Docker infrastructure engineered for zero cloud lock-in",
          "Freehand whetstone and leather-strop knife sharpening up to a mirror-polished bevel",
          "Hands-on renovation of a 1970s house paired with 72-hour cold-fermented dough on baking steel",
        ],
        specs: [
          { label: "Automation", value: "Home Assistant (Local)" },
          { label: "Edge Finish", value: "Whetstone → Mirror" },
          { label: "Fermentation", value: "48–72h Cold Proof" },
        ],
        spanClass: "lg:col-span-12",
      },
    ],
  },
  timeline: {
    sectionCode: "SEC-04 // EXPERIENCE & MILESTONES",
    title: "Chronological ledger",
    subtitle:
      "From software engineering studies and enterprise AI security at Telenor to commercial spatial software and club leadership.",
    activeBadge: "CURRENT",
    items: [
      {
        id: "axisos",
        period: "2026 – present",
        role: "Fullstack Developer",
        organization: "AxisOS",
        location: "Gardermoen / Romerike, Norway",
        typeBadge: "Full-time · Product & 3D",
        current: true,
        summary:
          "Building AxisOS and the interactive 2D/3D Floorplan Studio end-to-end with TypeScript, React, Three.js, Express, PostgreSQL, and Drizzle ORM.",
        tags: ["TypeScript", "React", "Three.js", "PostgreSQL", "Drizzle ORM"],
      },
      {
        id: "telenor-gbs",
        period: "Summer 2026",
        role: "Security Consultant (Summer Intern)",
        organization: "Telenor Global Business Security",
        location: "Fornebu, Norway",
        typeBadge: "Consultancy · AI Security",
        summary:
          "Extended Project BlueMind inside Telenor GBS, focusing on enterprise security frameworks, offensive AI red-teaming, guardrail resilience testing, and model-extraction defense.",
        tags: ["AI Red-Teaming", "LLM Security", "Guardrails", "TypeScript"],
      },
      {
        id: "eidsvoll-rambukk",
        period: "2026 – present",
        role: "Chairman of the Board & Technical Lead",
        organization: "Eidsvoll Kampsportklubb / Rambukk",
        location: "Eidsvoll, Norway",
        typeBadge: "Leadership & Engineering",
        current: true,
        summary:
          "Leading board governance and coaching structure while architecting and maintaining custom web applications for grading progression, scheduling, and club operations.",
        tags: ["Leadership", "Next.js", "Supabase", "Club SaaS"],
      },
      {
        id: "kristiania-bsc",
        period: "2023 – 2026",
        role: "BSc in Frontend & Mobile Development",
        organization: "Kristiania University College",
        location: "Oslo, Norway",
        typeBadge: "Degree · BSc",
        summary:
          "Three-year bachelor's degree covering web architecture, mobile engineering, and interactive systems, culminating in the Project BlueMind bachelor thesis with Telenor AI Factory.",
        tags: [
          "Web Architecture",
          "Mobile Dev",
          "Bachelor Thesis @ Telenor AI Factory",
        ],
      },
    ],
  },
  contact: {
    sectionCode: "SEC-05 // CONTACT & CHANNELS",
    title: "Let's build something solid",
    subtitle:
      "Send a message on LinkedIn if you'd like to connect regarding spatial 3D on the web, secure AI systems, engineering projects, or parametric CAD and Jiu-Jitsu.",
    availabilityLabel: "Operational status",
    availabilityValue: "Fullstack @ AxisOS · Reach out via LinkedIn",
    linkedinCtaLabel: "Message on LinkedIn",
    githubCtaLabel: "View GitHub (@kripe00)",
    channelsLabel: "Profiles & repositories",
    coordinatesLabel: "Coordinates",
    footerNote:
      "Built with Next.js, TypeScript, and slightly too much coffee in Romerike, Norway.",
    buildStamp: `${PROFILE_CONFIG.buildVersion} · ${PROFILE_CONFIG.coordinates}`,
  },
};
