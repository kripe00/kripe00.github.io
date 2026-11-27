import { PROFILE_CONFIG } from "./profile";
import type { SiteContent } from "./types";

export const contentEN: SiteContent = {
  meta: {
    htmlLang: "en",
    title: "Kristian Sollie Pedersen | Fullstack Developer",
    description:
      "Kristian Sollie Pedersen, fullstack developer at AxisOS working with React, TypeScript, Three.js, AI security, and parametric CAD in Norway.",
  },
  nav: {
    projects: "Projects",
    stack: "Tech",
    workbench: "Off-screen",
    timeline: "Experience",
    contact: "Contact",
    themeDarkLabel: "Dark",
    themeBlueprintLabel: "Light",
    themeTooltip: "Switch between dark and light theme",
    langTooltip: "Switch language (NO / EN)",
    localTimeLabel: "RÅHOLT",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
  },
  hero: {
    eyebrow: "Kristian Sollie Pedersen",
    headline:
      "Fullstack developer working across web applications, 3D in the browser, and physical craft.",
    subheadlineLead: "Building ",
    subheadlineHighlight: "AxisOS & Floorplan Studio",
    subheadlineTail:
      " day to day. Outside of that, I spend my time on 3D web tools, AI security, custom club apps, and parametric 3D printing.",
    telemetryTitle: "Overview",
    telemetry: [
      {
        key: "role",
        label: "Role",
        value: "Fullstack Developer @ AxisOS",
      },
      {
        key: "edu",
        label: "Education",
        value: "BSc Frontend & Mobile Development (Kristiania University College)",
      },
      {
        key: "loc",
        label: "Location",
        value: "Råholt / Eidsvoll, Norway",
      },
      {
        key: "bjj",
        label: "Off-hours",
        value: "BJJ Brown Belt & 3D printing",
      },
    ],
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    cadViewport: {
      panelTitle: "Interactive 3D view",
      dragHint: "Drag to rotate",
      resetView: "Reset view",
      orthoLabel: "ISO",
      perspLabel: "PERSP",
      explodeLabel: "Height",
      modes: {
        floorplan: {
          tab: "01 · Venue",
          title: "2D/3D Venue Layout",
          spec: "24.0m × 16.5m · Zones & rigging",
        },
        parametric: {
          tab: "02 · OpenSCAD",
          title: "Parametric Bracket (BOSL2)",
          spec: "PETG · Wall 3.2mm · Chamfer 45°",
        },
        reactor: {
          tab: "03 · Reactor",
          title: "Control Rod Grid (1984)",
          spec: "From the game Meltdown is Propaganda",
        },
      },
    },
  },
  projects: {
    sectionCode: "01 · Projects",
    title: "Selected projects",
    subtitle:
      "Work from my day job, university capstone, and evening projects.",
    filters: {
      all: "All (6)",
      spatial: "3D & Games",
      security: "AI & Security",
      saas: "Club Apps",
      web: "Web & CMS",
    },
    labels: {
      problem: "Background",
      architecture: "Implementation",
      deliverables: "Highlights",
      stack: "Tech Stack",
      inspectSpec: "Show details",
      collapseSpec: "Hide details",
    },
    items: [
      {
        id: "axisos-floorplan",
        index: "01",
        title: "AxisOS & Floorplan Studio",
        contextBadge: "AxisOS",
        period: "2026 - present",
        category: "spatial",
        highlightBadge: "Innovation Award Finalist · Gardermokonferansen",
        summary:
          "Event and floor-planning platform with an interactive 2D/3D studio where organizers and venues lay out halls, rigging, seating, and capacity directly in the browser.",
        problem:
          "Planning events and large venues usually happens across static PDF floorplans, spreadsheets, and heavy desktop CAD software disconnected from equipment inventory and safety clearances.",
        architecture:
          "Fullstack TypeScript stack with React, Vite, and Three.js sharing state across 2D and 3D views on the client, backed by Express, PostgreSQL, and Drizzle ORM for layouts, asset catalogs, and permissions.",
        deliverables: [
          "Switch directly between 2D floorplan drafting and 3D walkthroughs without losing state",
          "PostgreSQL and Drizzle ORM data model covering zones, equipment, measurements, and projects",
          "Three.js scene optimizations keeping frame rates smooth even on dense venue layouts",
        ],
        metrics: [
          { label: "Viewport", value: "2D + 3D in browser" },
          { label: "Status", value: "Active product" },
          { label: "Role", value: "Fullstack Developer" },
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
        highlightBadge: "Bachelor thesis + summer role in Telenor GBS",
        summary:
          "Bachelor project with Telenor AI Factory followed by a summer role as Security Consultant in Telenor Global Business Security. Built a security dashboard and framework-backed AI assistant alongside hands-on AI red-teaming.",
        problem:
          "Organizations rolling out internal and customer-facing LLM tools need clear visibility into how security frameworks apply, as well as practical testing of what their guardrails actually block.",
        architecture:
          "Built a React and TypeScript security dashboard with an assistant grounded in internal security requirements, paired with structured testing for prompt injection, guardrail bypasses, and model extraction.",
        deliverables: [
          "Security dashboard linking technical controls directly to enterprise framework requirements",
          "Hands-on red-teaming of LLM setups to uncover system-prompt leaks and tool-use weaknesses",
          "Evaluation and mitigation testing against model extraction and indirect prompt injection",
        ],
        metrics: [
          { label: "Field", value: "AI Security" },
          { label: "Scope", value: "Dev & Red-Teaming" },
          { label: "Organization", value: "Telenor" },
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
        period: "Browser 3D game",
        category: "spatial",
        highlightBadge: "Real-time reactor simulation in WebGL",
        summary:
          "3D game set in a Soviet nuclear power plant in 1984, built for GitHub Game Off. You run the analog control room while your gauges and instructions from above increasingly disagree.",
        problem:
          "The goal was a 3D game that loads straight in the browser with no install, where switches and dials in the room are driven by an actual underlying reactor simulation.",
        architecture:
          "Built with React 19, Three.js, and React Three Fiber. A separate Zustand simulation tick calculates neutron flux, coolant pressure, temperature, and rod depth independently of frame rendering.",
        deliverables: [
          "Interactive 3D control desk with switches, analog gauges, and warning lights in R3F",
          "Reactor physics and thermal loop written in TypeScript and Zustand",
          "Tuned to load fast and hold 60 FPS in a standard web browser",
        ],
        metrics: [
          { label: "Setting", value: "Control room, 1984" },
          { label: "Engine", value: "R3F + Zustand" },
          { label: "Platform", value: "Browser (WebGL)" },
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
        title: "TapMap & Martial Arts Club Apps",
        contextBadge: "Side projects / Club ops",
        period: "Ongoing",
        category: "saas",
        highlightBadge: "Used weekly at Eidsvoll & Hadeland",
        summary:
          "Visual flowchart app for Brazilian Jiu-Jitsu techniques (tapMap), along with custom web apps for belt progression, laundry rosters, coaching timesheets, and daily operations at Eidsvoll Kampsportklubb and Hadeland Kampsport.",
        problem:
          "BJJ works like a graph of positions, transitions, and counters that flat notes struggle to represent. Meanwhile, volunteer clubs spend too much time maintaining manual spreadsheets for attendance, loaner-gear laundry, and coaching hours.",
        architecture:
          "Mobile-friendly PWAs built with Next.js and TypeScript backed by Supabase, Firebase, and PostgreSQL, made so logging things on a phone right after class takes seconds.",
        deliverables: [
          "tapMap: Interactive graph editor for mapping personal sequences of positions, sweeps, and submissions",
          "Role-based web apps for belt/stripe tracking, laundry rotation, and instructor timesheets",
          "Shaped directly by weekly use at Eidsvoll Kampsportklubb and Hadeland Kampsport",
        ],
        metrics: [
          { label: "Clubs", value: "Eidsvoll & Hadeland" },
          { label: "Format", value: "Mobile & web PWAs" },
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
            label: "tapMap on GitHub",
            href: PROFILE_CONFIG.links.repos.tapMap,
            kind: "github",
          },
        ],
      },
      {
        id: "kampsport-eidsvoll-web",
        index: "05",
        title: "Eidsvoll Kampsportklubb (kampsporteidsvoll.no)",
        contextBadge: "Official club website",
        period: "2026 - present",
        category: "web",
        highlightBadge: "TinaCMS · Class finder & club assistant",
        summary:
          "Official website for Eidsvoll Kampsportklubb at Dal, featuring Git-backed editing with TinaCMS, a class recommender for new members, an IBJJF rules guide, timetable, and a built-in club assistant.",
        problem:
          "New members and parents want quick answers on mobile about which group fits, when classes run, and how the free trial works, while other board members need to post news and edit schedules without touching code.",
        architecture:
          "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS, using TinaCMS for Git-based content editing and Firebase (Hosting, Firestore, and Functions) under the hood.",
        deliverables: [
          "2-step class finder matching visitors to BJJ, Muay Thai, Crosstraining/Yoga, or Kids groups by age and goals",
          "TinaCMS setup letting board members update news, schedules, and club pages through a clean editor",
          "Dedicated IBJJF competition-rules section with automated tests plus a club assistant for common questions",
        ],
        metrics: [
          { label: "Website", value: "kampsporteidsvoll.no" },
          { label: "CMS", value: "TinaCMS + Firebase" },
          { label: "Framework", value: "Next.js 16 · React 19" },
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
      {
        id: "pixelfrontline",
        index: "06",
        title: "PixelFrontline",
        contextBadge: "Indie game · itch.io",
        period: "Published on itch.io",
        category: "spatial",
        highlightBadge: "Playable on itch.io",
        summary:
          "Independent game published on itch.io. Launch or inspect it directly from the embed card below.",
        metrics: [
          { label: "Platform", value: "itch.io" },
          { label: "Creator", value: "kripe0000" },
          { label: "Status", value: "Published" },
        ],
        stack: ["Game Dev", "itch.io", "Web"],
        schematicKind: "pixel",
        embed: {
          src: PROFILE_CONFIG.links.pixelFrontlineEmbed,
          title: "PixelFrontline by kripe0000",
          fallbackHref: PROFILE_CONFIG.links.pixelFrontline,
          fallbackLabel: "PixelFrontline by kripe0000",
          height: 167,
        },
        links: [
          {
            label: "Play on itch.io",
            href: PROFILE_CONFIG.links.pixelFrontline,
            kind: "external",
          },
        ],
      },
    ],
  },
  stack: {
    sectionCode: "02 · Tech",
    title: "Tools & workflow",
    subtitle:
      "Technologies I use regularly across frontend, 3D, backend services, security testing, and 3D printing.",
    domains: [
      {
        id: "frontend-3d",
        code: "01",
        title: "Frontend & 3D",
        subtitle: "Interfaces, 2D/3D editors, and client state",
        items: [
          "TypeScript",
          "React 19",
          "Next.js",
          "Vite",
          "Tailwind CSS",
          "Three.js / React Three Fiber",
          "Zustand",
        ],
        footnote: "Smooth frame rates, solid keyboard support, and predictable state.",
      },
      {
        id: "backend-data",
        code: "02",
        title: "Backend & Data",
        subtitle: "APIs, relational databases, and testing",
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
        footnote: "Runtime validation at the edges with Zod and explicit database schemas.",
      },
      {
        id: "ai-security",
        code: "03",
        title: "AI & Security",
        subtitle: "Agent workflows, local models, and security testing",
        items: [
          "Agentic Workflows",
          "MCP",
          "Local LLMs (Ollama)",
          "AI Red-Teaming",
          "Guardrail Resilience",
        ],
        footnote: "Hands-on experience both building and stress-testing LLM applications.",
      },
      {
        id: "hardware-maker",
        code: "04",
        title: "Hardware & Maker",
        subtitle: "Parametric CAD, 3D printing, and self-hosting",
        items: [
          "OpenSCAD (BOSL2)",
          "Parametric CAD",
          "Bambu Lab FDM Printing",
          "Home Assistant",
          "Linux / Docker",
        ],
        footnote: "From .scad files to finished functional parts in PETG, PLA, and TPU.",
      },
    ],
    philosophyTitle: "How I like to work",
    philosophySubtitle: "A few habits that stick across projects:",
    philosophy: [
      {
        code: "01",
        title: "Shared types end to end",
        description:
          "Keeping Drizzle schemas, Zod validation, and React props aligned catches most bugs in the editor instead of in production.",
      },
      {
        code: "02",
        title: "Fast, responsive 3D",
        description:
          "3D in the browser should load quickly, hold 60 FPS, and feel natural to control on an ordinary laptop as well as a desktop.",
      },
      {
        code: "03",
        title: "Security built in early",
        description:
          "Red-teaming AI apps carries over into regular development: clear permission boundaries, strict input handling, and testing how things fail.",
      },
    ],
  },
  workbench: {
    sectionCode: "03 · Off-screen",
    title: "On the mats and at the 3D printer",
    subtitle:
      "Outside of work, most of my time goes to Jiu-Jitsu at Dal and parametric modeling in OpenSCAD.",
    items: [
      {
        id: "bjj",
        code: "Mats & club",
        title: "Brazilian Jiu-Jitsu & Eidsvoll Kampsportklubb",
        subtitle: "Brown Belt (training since 2013) · Instructor & Chairman",
        description:
          "I've trained Brazilian Jiu-Jitsu since 2013 and hold a brown belt. At Eidsvoll Kampsportklubb in Dal, I coach classes and serve as Chairman of the Board, helping run the club day to day.",
        highlights: [
          "Training BJJ consistently since 2013, ranked brown belt",
          "Instructor and Chairman at Eidsvoll Kampsportklubb / Rambukk",
          "Building the digital tools our own coaches and members need",
        ],
        specs: [
          { label: "Belt", value: "BJJ Brown Belt" },
          { label: "Training since", value: "2013" },
          { label: "Club role", value: "Chairman & instructor" },
        ],
        spanClass: "lg:col-span-6",
      },
      {
        id: "cad",
        code: "CAD & 3D print",
        title: "Parametric CAD & 3D Printing",
        subtitle: "OpenSCAD (BOSL2) · PETG / PLA / TPU · MakerWorld",
        description:
          "Whenever I need a specific bracket, sign, or stand, I model it in code using OpenSCAD and BOSL2 and print it at home. Designs that might be useful to others go up on MakerWorld.",
        highlights: [
          "Functional brackets, signs, and stands written in OpenSCAD",
          "Printing in PETG, PLA, and TPU on Bambu Lab depending on load and use",
          "Sharing configurable models publicly on MakerWorld",
        ],
        specs: [
          { label: "CAD", value: "OpenSCAD / BOSL2" },
          { label: "Materials", value: "PETG · PLA · TPU" },
          { label: "Profile", value: "MakerWorld" },
        ],
        spanClass: "lg:col-span-6",
        externalLink: {
          label: "View models on MakerWorld",
          href: PROFILE_CONFIG.links.makerworld,
        },
      },
    ],
  },
  timeline: {
    sectionCode: "04 · Experience",
    title: "Experience & education",
    subtitle: "Background across software development, security, university, and club leadership.",
    items: [
      {
        id: "axisos",
        period: "2026 - present",
        role: "Fullstack Developer",
        organization: "AxisOS",
        location: "Gardermoen / Romerike",
        typeBadge: "Full-time",
        current: true,
        summary:
          "Developing AxisOS and the 2D/3D Floorplan Studio across the stack with TypeScript, React, Three.js, Express, PostgreSQL, and Drizzle ORM.",
        tags: ["TypeScript", "React", "Three.js", "PostgreSQL", "Drizzle ORM"],
      },
      {
        id: "telenor-gbs",
        period: "Summer 2026",
        role: "Security Consultant (Summer Intern)",
        organization: "Telenor Global Business Security",
        location: "Fornebu",
        typeBadge: "Summer role",
        summary:
          "Continued work from my bachelor thesis inside Telenor GBS, focusing on security frameworks, hands-on AI red-teaming, guardrail testing, and model-extraction defense.",
        tags: ["AI Red-Teaming", "LLM Security", "Guardrails", "TypeScript"],
      },
      {
        id: "eidsvoll-rambukk",
        period: "2026 - present",
        role: "Chairman of the Board & Technical Lead",
        organization: "Eidsvoll Kampsportklubb / Rambukk",
        location: "Dal, Eidsvoll",
        typeBadge: "Board & dev",
        current: true,
        summary:
          "Chairing the club board, coaching classes, and building kampsporteidsvoll.no along with internal tools for coaches and members.",
        tags: ["Board role", "Next.js", "TinaCMS", "Firebase"],
      },
      {
        id: "kristiania-bsc",
        period: "2023 - 2026",
        role: "BSc in Frontend & Mobile Development",
        organization: "Kristiania University College",
        location: "Oslo",
        typeBadge: "BSc",
        summary:
          "Three-year bachelor's degree in web and mobile engineering, completed with the Project BlueMind bachelor thesis at Telenor AI Factory.",
        tags: [
          "Frontend & mobile",
          "Web architecture",
          "Bachelor thesis @ Telenor AI Factory",
        ],
      },
    ],
  },
  contact: {
    sectionCode: "05 · Contact",
    title: "Get in touch",
    subtitle:
      "Send a message on LinkedIn if you want to chat about development, 3D on the web, AI security, projects, or Jiu-Jitsu.",
    availabilityValue: "Råholt / Eidsvoll · Best reached on LinkedIn",
    linkedinCtaLabel: "Message on LinkedIn",
    githubCtaLabel: "GitHub (@kripe00)",
    channelsLabel: "Profiles",
    footerNote:
      "Built with Next.js, TypeScript, and slightly too much coffee in Romerike, Norway.",
    buildStamp: `${PROFILE_CONFIG.municipality} · ${PROFILE_CONFIG.coordinates}`,
  },
};
