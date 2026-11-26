export type Locale = "no" | "en";
export type ThemeMode = "dark" | "blueprint";

export type ProjectCategory =
  | "all"
  | "spatial"
  | "security"
  | "saas"
  | "client";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "external" | "case";
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  contextBadge: string;
  period: string;
  category: Exclude<ProjectCategory, "all">;
  highlightBadge?: string;
  summary: string;
  problem: string;
  architecture: string;
  deliverables: string[];
  metrics: ProjectMetric[];
  stack: string[];
  schematicKind: "floorplan" | "shield" | "reactor" | "graph" | "clinic";
  links: ProjectLink[];
}

export interface StackDomain {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  items: string[];
  footnote: string;
}

export interface PhilosophyPillar {
  code: string;
  title: string;
  description: string;
}

export interface WorkbenchSpec {
  label: string;
  value: string;
}

export interface WorkbenchItem {
  id: "bjj" | "cad" | "workshop";
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  specs: WorkbenchSpec[];
  spanClass: string;
  externalLink?: {
    label: string;
    href: string;
  };
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  typeBadge: string;
  current?: boolean;
  summary: string;
  tags: string[];
}

export interface TelemetryEntry {
  key: string;
  label: string;
  value: string;
}

export interface SiteContent {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  nav: {
    projects: string;
    stack: string;
    workbench: string;
    timeline: string;
    contact: string;
    themeDarkLabel: string;
    themeBlueprintLabel: string;
    themeTooltip: string;
    langTooltip: string;
    localTimeLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
  };
  hero: {
    specCode: string;
    eyebrow: string;
    headline: string;
    subheadlineLead: string;
    subheadlineHighlight: string;
    subheadlineTail: string;
    telemetryTitle: string;
    telemetry: TelemetryEntry[];
    primaryCta: string;
    secondaryCta: string;
    cadViewport: {
      panelTitle: string;
      statusLive: string;
      dragHint: string;
      resetView: string;
      orthoLabel: string;
      perspLabel: string;
      explodeLabel: string;
      modes: {
        floorplan: {
          tab: string;
          title: string;
          spec: string;
        };
        parametric: {
          tab: string;
          title: string;
          spec: string;
        };
        reactor: {
          tab: string;
          title: string;
          spec: string;
        };
      };
    };
  };
  projects: {
    sectionCode: string;
    title: string;
    subtitle: string;
    filters: Record<ProjectCategory, string>;
    labels: {
      problem: string;
      architecture: string;
      deliverables: string;
      stack: string;
      inspectSpec: string;
      collapseSpec: string;
    };
    items: ProjectItem[];
  };
  stack: {
    sectionCode: string;
    title: string;
    subtitle: string;
    domains: StackDomain[];
    philosophyTitle: string;
    philosophySubtitle: string;
    philosophy: PhilosophyPillar[];
  };
  workbench: {
    sectionCode: string;
    title: string;
    subtitle: string;
    items: WorkbenchItem[];
  };
  timeline: {
    sectionCode: string;
    title: string;
    subtitle: string;
    activeBadge: string;
    items: TimelineItem[];
  };
  contact: {
    sectionCode: string;
    title: string;
    subtitle: string;
    availabilityLabel: string;
    availabilityValue: string;
    copyEmailLabel: string;
    copiedEmailLabel: string;
    sendMailLabel: string;
    channelsLabel: string;
    coordinatesLabel: string;
    footerNote: string;
    buildStamp: string;
  };
}
