"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, Moon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useWorkbench } from "@/components/providers/WorkbenchProvider";
import { PROFILE_CONFIG } from "@/content";

export function TopBar() {
  const { locale, setLocale, theme, toggleTheme, content } = useWorkbench();
  const [osloTime, setOsloTime] = useState<string>("--:--");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("nb-NO", {
          timeZone: PROFILE_CONFIG.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setOsloTime(formatted);
      } catch {
        setOsloTime("CET");
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const navItems = [
    { id: "nav-projects", code: "01", label: content.nav.projects, href: "#projects" },
    { id: "nav-stack", code: "02", label: content.nav.stack, href: "#stack" },
    { id: "nav-workbench", code: "03", label: content.nav.workbench, href: "#workbench" },
    { id: "nav-timeline", code: "04", label: content.nav.timeline, href: "#timeline" },
    { id: "nav-contact", code: "05", label: content.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-hairline backdrop-blur-md"
      style={{ backgroundColor: "var(--bg-header)" }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand & Telemetry Coordinate Stamp */}
        <div className="flex items-center gap-3.5">
          <a
            id="brand-home-link"
            href="#top"
            className="group flex items-center gap-2.5 text-ink"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-hairline-strong bg-recessed font-mono text-[11px] font-semibold tracking-wider text-accent transition-colors group-hover:border-accent">
              KSP
            </span>
            <span className="text-sm font-medium tracking-[-0.015em] whitespace-nowrap">
              Kristian S. Pedersen
            </span>
          </a>

          <div
            aria-hidden="true"
            className="hidden h-3.5 w-[1px] bg-hairline xl:block"
          />

          <div className="hidden items-center gap-2 font-mono text-[11px] whitespace-nowrap text-ink-muted xl:flex">
            <span>{PROFILE_CONFIG.coordinates}</span>
            <span>·</span>
            <span>
              {content.nav.localTimeLabel} {osloTime}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              className="group rounded-[2px] px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-ink-secondary transition-colors hover:bg-panel hover:text-ink"
            >
              <span className="mr-1.5 font-mono text-[10px] text-ink-muted transition-colors group-hover:text-accent">
                {item.code}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Bilingual Switcher + Theme Mode + Mobile Trigger */}
        <div className="flex items-center gap-2">
          {/* Segmented NO / EN hardware toggle */}
          <div
            role="group"
            aria-label={content.nav.langTooltip}
            className="relative flex h-8 items-center rounded-[2px] border border-hairline bg-recessed p-0.5 font-mono text-[11px]"
          >
            {(["no", "en"] as const).map((langOption) => {
              const active = locale === langOption;
              return (
                <button
                  key={langOption}
                  id={`lang-toggle-${langOption}`}
                  type="button"
                  onClick={() => setLocale(langOption)}
                  aria-pressed={active}
                  className={`relative z-10 cursor-pointer px-2.5 py-1 font-medium uppercase transition-colors ${
                    active
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink-secondary"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-lang-pill"
                      transition={{ type: "spring", stiffness: 520, damping: 36 }}
                      className="absolute inset-0 -z-10 rounded-[1px] border border-hairline-strong bg-panel"
                    />
                  )}
                  {langOption.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Dark / Blueprint Theme Switch */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            title={content.nav.themeTooltip}
            aria-label={content.nav.themeTooltip}
            className="flex h-8 cursor-pointer items-center gap-1.5 rounded-[2px] border border-hairline bg-recessed px-2.5 font-mono text-[11px] font-medium text-ink-secondary transition-colors hover:border-hairline-strong hover:bg-panel hover:text-ink"
          >
            {theme === "dark" ? (
              <>
                <Compass className="h-3.5 w-3.5 text-cyan" />
                <span className="hidden sm:inline">
                  {content.nav.themeBlueprintLabel}
                </span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-accent" />
                <span className="hidden sm:inline">
                  {content.nav.themeDarkLabel}
                </span>
              </>
            )}
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen ? content.nav.menuCloseLabel : content.nav.menuOpenLabel
            }
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[2px] border border-hairline bg-recessed text-ink-secondary hover:text-ink md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden border-t border-hairline bg-panel md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  id={`mobile-${item.id}`}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-[2px] px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-recessed hover:text-ink"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-accent">
                    {item.code}
                  </span>
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-hairline px-3 pt-2.5 font-mono text-[11px] text-ink-muted">
                <span>{PROFILE_CONFIG.coordinates}</span>
                <span>
                  {content.nav.localTimeLabel} {osloTime}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
