"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Check,
  ChevronDown,
  ExternalLink,
  Layers,
} from "lucide-react";
import React, { useState } from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecCard } from "@/components/ui/SpecCard";
import type { ProjectCategory, ProjectItem } from "@/content";

function ProjectSchematic({
  kind,
}: {
  kind: ProjectItem["schematicKind"];
}) {
  switch (kind) {
    case "floorplan":
      return (
        <svg
          viewBox="0 0 220 110"
          className="h-24 w-full text-ink-muted"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="8"
            width="204"
            height="94"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeDasharray="3 3"
          />
          <rect
            x="18"
            y="18"
            width="64"
            height="74"
            fill="var(--accent-primary-soft)"
            stroke="var(--accent-primary)"
            strokeWidth="1.2"
          />
          <rect
            x="94"
            y="18"
            width="48"
            height="32"
            fill="var(--accent-cyan-soft)"
            stroke="var(--accent-cyan)"
            strokeWidth="1"
          />
          <rect
            x="94"
            y="58"
            width="48"
            height="34"
            fill="var(--accent-cyan-soft)"
            stroke="var(--accent-cyan)"
            strokeWidth="1"
          />
          <rect
            x="154"
            y="18"
            width="46"
            height="74"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <line
            x1="88"
            y1="8"
            x2="88"
            y2="102"
            stroke="var(--accent-cyan)"
            strokeDasharray="2 2"
            strokeOpacity="0.6"
          />
          <text
            x="24"
            y="32"
            fill="var(--accent-primary)"
            fontSize="8"
            fontFamily="monospace"
          >
            2D/3D STAGE
          </text>
          <text
            x="160"
            y="32"
            fill="currentColor"
            fontSize="8"
            fontFamily="monospace"
          >
            FOH
          </text>
        </svg>
      );
    case "shield":
      return (
        <svg
          viewBox="0 0 220 110"
          className="h-24 w-full text-ink-muted"
          aria-hidden="true"
        >
          <rect
            x="14"
            y="36"
            width="48"
            height="38"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <rect
            x="86"
            y="22"
            width="52"
            height="66"
            fill="var(--accent-cyan-soft)"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <rect
            x="160"
            y="36"
            width="46"
            height="38"
            fill="var(--accent-primary-soft)"
            stroke="var(--accent-primary)"
            strokeWidth="1.2"
          />
          <line
            x1="62"
            y1="55"
            x2="86"
            y2="55"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <line
            x1="138"
            y1="55"
            x2="160"
            y2="55"
            stroke="var(--accent-primary)"
            strokeWidth="1.2"
          />
          <text
            x="21"
            y="58"
            fill="currentColor"
            fontSize="7.5"
            fontFamily="monospace"
          >
            PROMPT
          </text>
          <text
            x="93"
            y="58"
            fill="var(--accent-cyan)"
            fontSize="7.5"
            fontFamily="monospace"
          >
            GUARDRAIL
          </text>
          <text
            x="169"
            y="58"
            fill="var(--accent-primary)"
            fontSize="7.5"
            fontFamily="monospace"
          >
            MODEL
          </text>
        </svg>
      );
    case "reactor":
      return (
        <svg
          viewBox="0 0 220 110"
          className="h-24 w-full text-ink-muted"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((col) =>
            [0, 1, 2].map((row) => {
              const hot = col === 2 && row === 1;
              return (
                <rect
                  key={`${col}-${row}`}
                  x={34 + col * 32}
                  y={20 + row * 24}
                  width="22"
                  height="18"
                  fill={
                    hot
                      ? "var(--accent-primary-soft)"
                      : "var(--accent-cyan-soft)"
                  }
                  stroke={
                    hot ? "var(--accent-primary)" : "var(--accent-cyan)"
                  }
                  strokeWidth={hot ? "1.4" : "0.9"}
                />
              );
            })
          )}
          <text
            x="34"
            y="102"
            fill="var(--accent-primary)"
            fontSize="8"
            fontFamily="monospace"
          >
            FLUX: NOMINAL · AZ-5 ARMED
          </text>
        </svg>
      );
    case "graph":
      return (
        <svg
          viewBox="0 0 220 110"
          className="h-24 w-full text-ink-muted"
          aria-hidden="true"
        >
          <line
            x1="44"
            y1="55"
            x2="108"
            y2="28"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <line
            x1="44"
            y1="55"
            x2="108"
            y2="82"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <line
            x1="108"
            y1="28"
            x2="176"
            y2="55"
            stroke="var(--accent-primary)"
            strokeWidth="1.2"
          />
          <line
            x1="108"
            y1="82"
            x2="176"
            y2="55"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <circle
            cx="44"
            cy="55"
            r="14"
            fill="var(--bg-recessed)"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <circle
            cx="108"
            cy="28"
            r="14"
            fill="var(--bg-recessed)"
            stroke="var(--accent-cyan)"
            strokeWidth="1.2"
          />
          <circle
            cx="108"
            cy="82"
            r="14"
            fill="var(--bg-recessed)"
            stroke="currentColor"
          />
          <circle
            cx="176"
            cy="55"
            r="15"
            fill="var(--accent-primary-soft)"
            stroke="var(--accent-primary)"
            strokeWidth="1.3"
          />
          <text
            x="33"
            y="58"
            fill="currentColor"
            fontSize="7"
            fontFamily="monospace"
          >
            GUARD
          </text>
          <text
            x="96"
            y="31"
            fill="var(--accent-cyan)"
            fontSize="7"
            fontFamily="monospace"
          >
            SWEEP
          </text>
          <text
            x="167"
            y="58"
            fill="var(--accent-primary)"
            fontSize="7"
            fontFamily="monospace"
          >
            SUB
          </text>
        </svg>
      );
  }
}

export function ProjectsSection() {
  const { content } = useWorkbench();
  const { projects } = content;

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  // Default expand the flagship projects so Problem + Architecture are immediately scannable
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "axisos-floorplan": true,
    "project-bluemind-telenor": true,
  });

  const filteredItems =
    activeCategory === "all"
      ? projects.items
      : projects.items.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filterKeys: ProjectCategory[] = ["all", "spatial", "security", "saas"];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          code={projects.sectionCode}
          title={projects.title}
          subtitle={projects.subtitle}
          rightSlot={
            <div
              role="tablist"
              aria-label="Filter projects by engineering domain"
              className="flex flex-wrap gap-1.5 font-mono text-[11px]"
            >
              {filterKeys.map((cat) => {
                const selected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`project-filter-${cat}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    onClick={() => setActiveCategory(cat)}
                    className={`cursor-pointer rounded-[2px] border px-2.5 py-1.5 transition-colors ${
                      selected
                        ? "border-accent bg-accent-soft font-semibold text-accent"
                        : "border-hairline bg-panel text-ink-secondary hover:border-hairline-strong hover:text-ink"
                    }`}
                  >
                    {projects.filters[cat]}
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Hidden heading hook for aria-labelledby consistency */}
        <span id="projects-heading" className="sr-only">
          {projects.title}
        </span>

        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => {
              const isExpanded = Boolean(expandedIds[project.id]);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <SpecCard
                    id={`case-${project.id}`}
                    as="article"
                    interactive
                  >
                    {/* Card Top Spec Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline bg-recessed px-4 py-2.5 font-mono text-[11px] sm:px-6">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-semibold text-accent">
                          {project.index}
                        </span>
                        <span className="text-hairline-strong">/</span>
                        <span className="text-ink-secondary">
                          {project.contextBadge}
                        </span>
                        <span className="hidden text-hairline-strong sm:inline">
                          ·
                        </span>
                        <span className="hidden text-ink-muted sm:inline">
                          {project.period}
                        </span>
                      </div>

                      {project.highlightBadge && (
                        <div className="inline-flex items-center gap-1.5 rounded-[2px] border border-hairline bg-panel px-2 py-0.5 text-[10px] text-cyan">
                          <Award className="h-3 w-3 shrink-0" />
                          <span>{project.highlightBadge}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Main Summary Grid */}
                    <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-12">
                      <div className="lg:col-span-8">
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
                          {project.summary}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="mt-5 flex flex-wrap items-center gap-1.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-[2px] border border-hairline bg-recessed px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Schematic & Quick Telemetry Metrics */}
                      <div className="flex flex-col justify-between gap-3 rounded-[2px] border border-hairline bg-recessed p-3.5 lg:col-span-4">
                        <div className="cad-surface rounded-[2px] border border-hairline bg-canvas/60 px-2 py-1">
                          <ProjectSchematic kind={project.schematicKind} />
                        </div>

                        <dl className="space-y-1.5 border-t border-hairline pt-2.5 font-mono text-[11px]">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="flex items-baseline justify-between gap-3"
                            >
                              <dt className="shrink-0 text-[10px] tracking-wider text-ink-muted uppercase">
                                {m.label}
                              </dt>
                              <dd className="text-right font-medium text-ink">
                                {m.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    {/* Expandable Problem / Architecture / Deliverables Blueprint */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden border-t border-hairline bg-recessed/65"
                        >
                          <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                              <h4 className="mb-2 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                                {projects.labels.problem}
                              </h4>
                              <p className="text-sm leading-relaxed text-ink-secondary">
                                {project.problem}
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2 font-mono text-[11px] tracking-[0.12em] text-cyan uppercase">
                                {projects.labels.architecture}
                              </h4>
                              <p className="text-sm leading-relaxed text-ink-secondary">
                                {project.architecture}
                              </p>
                            </div>

                            <div className="md:col-span-2 lg:col-span-1">
                              <h4 className="mb-2 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                                {projects.labels.deliverables}
                              </h4>
                              <ul className="space-y-2 text-sm text-ink-secondary">
                                {project.deliverables.map((point) => (
                                  <li
                                    key={point}
                                    className="flex items-start gap-2 leading-snug"
                                  >
                                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Card Footer Bar: Inspect Toggle & Repo Links */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-panel px-4 py-2.5 sm:px-6">
                      <button
                        id={`toggle-spec-${project.id}`}
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex cursor-pointer items-center gap-2 font-mono text-xs font-medium text-ink-secondary transition-colors hover:text-accent"
                      >
                        <Layers className="h-3.5 w-3.5 text-accent" />
                        <span>
                          {isExpanded
                            ? projects.labels.collapseSpec
                            : projects.labels.inspectSpec}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {project.links.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              id={`project-link-${project.id}-${link.label
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")}`}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-[2px] border border-hairline bg-recessed px-2.5 py-1 font-mono text-[11px] text-ink-secondary transition-colors hover:border-hairline-strong hover:text-ink"
                            >
                              {link.kind === "github" ? (
                                <GitHubIcon className="h-3 w-3 text-accent" />
                              ) : (
                                <ExternalLink className="h-3 w-3 text-cyan" />
                              )}
                              <span>{link.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </SpecCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
