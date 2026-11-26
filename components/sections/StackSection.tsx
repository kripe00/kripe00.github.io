"use client";

import React from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecCard } from "@/components/ui/SpecCard";

export function StackSection() {
  const { content } = useWorkbench();
  const { stack } = content;

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          code={stack.sectionCode}
          title={stack.title}
          subtitle={stack.subtitle}
        />
        <span id="stack-heading" className="sr-only">
          {stack.title}
        </span>

        {/* 4 Scannable Domain Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {stack.domains.map((domain) => (
            <SpecCard
              key={domain.id}
              id={`domain-${domain.id}`}
              interactive
              className="flex flex-col justify-between p-5 sm:p-6"
            >
              <div>
                <div className="mb-3 flex items-center justify-between border-b border-hairline pb-2.5 font-mono text-[11px]">
                  <span className="font-semibold text-accent">
                    {domain.code}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
                  {domain.title}
                </h3>
                <p className="mt-1 text-xs text-ink-muted sm:text-sm">
                  {domain.subtitle}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {domain.items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-[2px] border border-hairline bg-recessed px-2.5 py-1 font-mono text-xs text-ink transition-colors hover:border-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 border-t border-hairline pt-3 font-mono text-[11px] leading-relaxed text-ink-secondary">
                {domain.footnote}
              </p>
            </SpecCard>
          ))}
        </div>

        {/* Engineering Philosophy Pillars */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold tracking-[-0.015em] text-ink">
              {stack.philosophyTitle}
            </h3>
            <p className="font-mono text-xs text-ink-muted">
              {stack.philosophySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stack.philosophy.map((pillar) => (
              <SpecCard
                key={pillar.code}
                crosshairs={false}
                className="bg-recessed/75 p-5"
              >
                <div className="mb-2 font-mono text-[11px] font-semibold text-cyan">
                  {pillar.code}
                </div>
                <h4 className="text-base font-semibold tracking-[-0.01em] text-ink">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {pillar.description}
                </p>
              </SpecCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
