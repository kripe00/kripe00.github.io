"use client";

import React from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecCard } from "@/components/ui/SpecCard";

export function TimelineSection() {
  const { content } = useWorkbench();
  const { timeline } = content;

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          code={timeline.sectionCode}
          title={timeline.title}
          subtitle={timeline.subtitle}
        />
        <span id="timeline-heading" className="sr-only">
          {timeline.title}
        </span>

        <div className="relative pl-6 sm:pl-8">
          {/* Vertical CAD Datum Rail */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-[1px] bg-hairline-strong sm:left-[9px]"
          />

          <ol className="space-y-5">
            {timeline.items.map((entry) => (
              <li key={entry.id} className="relative">
                {/* Datum Station Node */}
                <span
                  aria-hidden="true"
                  className={`absolute top-6 -left-6 flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border sm:-left-8 ${
                    entry.current
                      ? "border-accent bg-accent/20"
                      : "border-hairline-strong bg-panel"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-[1px] ${
                      entry.current ? "bg-accent" : "bg-ink-muted"
                    }`}
                  />
                </span>

                <SpecCard
                  id={`milestone-${entry.id}`}
                  crosshairs={false}
                  interactive
                  className="p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="font-semibold text-accent">
                          {entry.period}
                        </span>
                        <span className="text-hairline-strong">·</span>
                        <span className="text-ink-muted">{entry.location}</span>
                      </div>

                      <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.015em] text-ink">
                        {entry.role}{" "}
                        <span className="font-normal text-ink-secondary">
                          · {entry.organization}
                        </span>
                      </h3>
                    </div>

                    <span className="self-start rounded-[2px] border border-hairline bg-recessed px-2.5 py-1 font-mono text-[11px] text-ink-secondary">
                      {entry.typeBadge}
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-secondary">
                    {entry.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[2px] border border-hairline bg-recessed px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpecCard>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
