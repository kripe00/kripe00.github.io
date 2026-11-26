"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecCard } from "@/components/ui/SpecCard";

function BjjBrownBeltGraphic() {
  // Subtle geometric representation of a Brazilian Jiu-Jitsu Brown Belt with black ranking bar
  return (
    <div
      aria-hidden="true"
      className="my-4 flex h-6 w-full overflow-hidden rounded-[2px] border border-hairline"
    >
      <div
        className="flex-1"
        style={{
          background:
            "repeating-linear-gradient(90deg, #5c3a21 0px, #5c3a21 6px, #4e301b 6px, #4e301b 12px)",
        }}
      />
      <div className="w-20 border-x border-black/60 bg-[#111317]" />
      <div
        className="w-8"
        style={{
          backgroundColor: "#5c3a21",
        }}
      />
    </div>
  );
}

function OpenScadSnippet() {
  return (
    <pre
      aria-hidden="true"
      className="my-4 overflow-x-auto rounded-[2px] border border-hairline bg-recessed p-3 font-mono text-[11px] leading-relaxed text-ink-secondary"
    >
      <code>
        <span className="text-cyan">include</span> &lt;BOSL2/std.scad&gt;;{"\n"}
        <span className="text-accent">module</span>{" "}
        <span className="text-ink">stand_bracket</span>(wall = 3.2, chamfer = 1.2){" "}
        {"{\n"}
        {"  "}diff() cuboid([68, 44, 28], chamfer = chamfer);{"\n"}
        {"}"}
      </code>
    </pre>
  );
}

export function WorkbenchSection() {
  const { content } = useWorkbench();
  const { workbench } = content;

  return (
    <section
      id="workbench"
      aria-labelledby="workbench-heading"
      className="border-b border-hairline py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          code={workbench.sectionCode}
          title={workbench.title}
          subtitle={workbench.subtitle}
        />
        <span id="workbench-heading" className="sr-only">
          {workbench.title}
        </span>

        {/* 12-Col Bento Specification Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {workbench.items.map((item) => (
            <SpecCard
              key={item.id}
              id={`workbench-${item.id}`}
              interactive
              className={`flex flex-col justify-between p-5 sm:p-6 ${item.spanClass}`}
            >
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-2.5 font-mono text-[11px]">
                  <span className="font-semibold tracking-wider text-accent">
                    {item.code}
                  </span>
                  {item.externalLink && (
                    <a
                      id={`workbench-link-${item.id}`}
                      href={item.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan transition-colors hover:underline"
                    >
                      <span>{item.externalLink.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-ink-muted">
                  {item.subtitle}
                </p>

                {item.id === "bjj" && <BjjBrownBeltGraphic />}
                {item.id === "cad" && <OpenScadSnippet />}

                <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
                  {item.description}
                </p>

                <ul
                  className={`mt-4 grid gap-2 text-sm text-ink-secondary ${
                    item.id === "workshop"
                      ? "grid-cols-1 md:grid-cols-3 md:gap-4"
                      : "grid-cols-1"
                  }`}
                >
                  {item.highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-2.5 rounded-[2px] border border-hairline bg-recessed/65 px-3 py-2 text-xs leading-relaxed sm:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent"
                      />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Spec Telemetry Strip */}
              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-hairline pt-3.5 font-mono">
                {item.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[10px] tracking-wider text-ink-muted uppercase">
                      {spec.label}
                    </dt>
                    <dd className="mt-0.5 text-xs font-medium text-ink">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </SpecCard>
          ))}
        </div>
      </div>
    </section>
  );
}
