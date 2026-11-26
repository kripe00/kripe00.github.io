"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ExternalLink, MessageSquare } from "lucide-react";
import React from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { SpatialCadViewport } from "@/components/sections/SpatialCadViewport";
import {
  GitHubIcon,
  LinkedInIcon,
  MakerCubeIcon,
} from "@/components/ui/BrandIcons";
import { SpecCard } from "@/components/ui/SpecCard";
import { PROFILE_CONFIG } from "@/content";

export function HeroSection() {
  const { content } = useWorkbench();
  const { hero } = content;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative border-b border-hairline pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top CAD Spec-Sheet Metadata Line */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-3.5 font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2 w-2 rounded-[1px] bg-accent" />
            <span className="text-ink-secondary">{hero.specCode}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{PROFILE_CONFIG.coordinates}</span>
            <span aria-hidden="true" className="text-hairline-strong">
              /
            </span>
            <span>{PROFILE_CONFIG.buildVersion}</span>
          </div>
        </div>

        {/* Main 12-Col Spec Sheet Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headline, Subheadline, CTAs & External Channels */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.14em] text-accent uppercase">
                {hero.eyebrow}
              </p>

              <h1
                id="hero-heading"
                className="text-3xl leading-[1.12] font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.65rem]"
              >
                {hero.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
                {hero.subheadlineLead}
                <strong className="font-semibold text-ink">
                  {hero.subheadlineHighlight}
                </strong>
                {hero.subheadlineTail}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-[2px] bg-accent px-4 py-2.5 text-sm font-semibold text-ink-inverse transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.primaryCta}</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[2px] border border-hairline-strong bg-panel px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-panel-hover"
              >
                <MessageSquare className="h-4 w-4 text-accent" />
                <span>{hero.secondaryCta}</span>
              </a>
            </div>

            {/* External Technical Channels */}
            <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-hairline pt-5 font-mono text-xs">
              <a
                id="hero-link-github"
                href={PROFILE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[2px] border border-hairline bg-recessed px-3 py-1.5 text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-panel hover:text-ink"
              >
                <GitHubIcon className="h-3.5 w-3.5 text-ink-muted transition-colors group-hover:text-accent" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              </a>

              <a
                id="hero-link-linkedin"
                href={PROFILE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[2px] border border-hairline bg-recessed px-3 py-1.5 text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-panel hover:text-ink"
              >
                <LinkedInIcon className="h-3.5 w-3.5 text-ink-muted transition-colors group-hover:text-cyan" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              </a>

              <a
                id="hero-link-makerworld"
                href={PROFILE_CONFIG.links.makerworld}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[2px] border border-hairline bg-recessed px-3 py-1.5 text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-panel hover:text-ink"
              >
                <MakerCubeIcon className="h-3.5 w-3.5 text-ink-muted transition-colors group-hover:text-accent" />
                <span>MakerWorld</span>
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 60 FPS Spatial CAD Viewport */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <SpatialCadViewport />
          </motion.div>
        </div>

        {/* Quick Monospace Telemetry Bar */}
        <div className="mt-10">
          <SpecCard>
            <div className="flex items-center justify-between border-b border-hairline bg-recessed px-4 py-2 font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
              <span>{hero.telemetryTitle}</span>
              <span className="flex items-center gap-1.5 text-live">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-live" />
                ONLINE
              </span>
            </div>
            <dl className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {hero.telemetry.map((entry, idx) => (
                <div
                  key={entry.key}
                  className={`flex flex-col justify-between gap-1 px-4 py-3.5 font-mono ${
                    idx >= 2 ? "sm:border-t sm:border-hairline lg:border-t-0" : ""
                  } ${idx % 2 === 1 ? "sm:border-l sm:border-hairline lg:border-l-0" : ""}`}
                >
                  <dt className="text-[11px] tracking-wider text-ink-muted uppercase">
                    {entry.label}
                  </dt>
                  <dd className="text-xs leading-snug font-medium text-ink">
                    {entry.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SpecCard>
        </div>
      </div>
    </section>
  );
}
