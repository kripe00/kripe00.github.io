import React from "react";
import { FooterContact } from "@/components/sections/FooterContact";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TopBar } from "@/components/sections/TopBar";
import { WorkbenchSection } from "@/components/sections/WorkbenchSection";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        id="skip-to-content"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-[2px] focus:bg-accent focus:px-3.5 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-ink-inverse"
      >
        Hopp til hovedinnhold / Skip to main content
      </a>

      <TopBar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <WorkbenchSection />
        <TimelineSection />
      </main>

      <FooterContact />
    </div>
  );
}
