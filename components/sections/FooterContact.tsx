"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import {
  GitHubIcon,
  LinkedInIcon,
  MakerCubeIcon,
} from "@/components/ui/BrandIcons";
import { SpecCard } from "@/components/ui/SpecCard";
import { PROFILE_CONFIG } from "@/content";

export function FooterContact() {
  const { content } = useWorkbench();
  const { contact } = content;

  const channels = [
    {
      id: "footer-linkedin",
      label: "LinkedIn",
      handle: "Kristian Sollie Pedersen",
      href: PROFILE_CONFIG.links.linkedin,
      icon: LinkedInIcon,
    },
    {
      id: "footer-github",
      label: "GitHub",
      handle: "@kripe00",
      href: PROFILE_CONFIG.links.github,
      icon: GitHubIcon,
    },
    {
      id: "footer-makerworld",
      label: "MakerWorld",
      handle: "Parametric CAD & Prints",
      href: PROFILE_CONFIG.links.makerworld,
      icon: MakerCubeIcon,
    },
  ];

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="pt-16 pb-12 sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SpecCard>
          {/* Top Telemetry Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline bg-recessed px-5 py-3 font-mono text-[11px] sm:px-8">
            <span className="font-semibold tracking-[0.12em] text-accent uppercase">
              {contact.sectionCode}
            </span>
            <span className="text-ink-secondary">
              {contact.availabilityValue}
            </span>
          </div>

          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                id="contact-heading"
                className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl"
              >
                {contact.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-secondary sm:text-base">
                {contact.subtitle}
              </p>

              {/* Primary Contact Action: LinkedIn Message */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  id="contact-linkedin-cta"
                  href={PROFILE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-[2px] bg-accent px-4 py-2.5 font-mono text-xs font-semibold text-ink-inverse transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>{contact.linkedinCtaLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  id="contact-github-cta"
                  href={PROFILE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-hairline-strong bg-recessed px-3.5 py-2.5 font-mono text-xs font-medium text-ink-secondary transition-colors hover:border-accent hover:text-ink"
                >
                  <GitHubIcon className="h-3.5 w-3.5 text-accent" />
                  <span>{contact.githubCtaLabel}</span>
                </a>
              </div>
            </div>

            {/* External Channels Directory */}
            <div className="flex flex-col justify-between gap-3 lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
                {contact.channelsLabel}
              </div>

              <div className="space-y-2">
                {channels.map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <a
                      key={ch.id}
                      id={ch.id}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-[2px] border border-hairline bg-recessed px-4 py-3 transition-colors hover:border-hairline-strong hover:bg-panel-hover"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-accent" />
                        <div>
                          <div className="text-sm font-medium text-ink">
                            {ch.label}
                          </div>
                          <div className="font-mono text-[11px] text-ink-muted">
                            {ch.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </SpecCard>

        {/* Bottom Colophon & Coordinates */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>{contact.footerNote}</p>
          <p className="font-mono text-[11px] tracking-wider text-ink-secondary">
            {contact.buildStamp}
          </p>
        </div>
      </div>
    </footer>
  );
}
