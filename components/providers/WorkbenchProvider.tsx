"use client";

import { MotionConfig } from "framer-motion";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CONTENT_DICTIONARY,
  type Locale,
  type SiteContent,
  type ThemeMode,
} from "@/content";

interface WorkbenchContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  theme: ThemeMode;
  setTheme: (next: ThemeMode) => void;
  toggleTheme: () => void;
  content: SiteContent;
}

const WorkbenchContext = createContext<WorkbenchContextValue | null>(null);

const STORAGE_LOCALE_KEY = "ksp-workbench-locale";
const STORAGE_THEME_KEY = "ksp-workbench-theme";

export function WorkbenchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("no");
  const [theme, setThemeState] = useState<ThemeMode>("dark");

  // Hydrate saved user preferences once mounted without causing SSR mismatch
  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem(STORAGE_LOCALE_KEY);
      if (savedLocale === "no" || savedLocale === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(savedLocale);
      }
      const savedTheme = window.localStorage.getItem(STORAGE_THEME_KEY);
      if (savedTheme === "dark" || savedTheme === "blueprint") {
        setThemeState(savedTheme);
      }
    } catch {
      // Ignore storage access errors in restricted privacy modes
    }
  }, []);

  // Synchronize HTML attributes & document title
  useEffect(() => {
    const activeContent = CONTENT_DICTIONARY[locale];
    document.documentElement.lang = activeContent.meta.htmlLang;
    document.title = activeContent.meta.title;
    try {
      window.localStorage.setItem(STORAGE_LOCALE_KEY, locale);
    } catch {
      // Ignore
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch {
      // Ignore
    }
  }, [theme]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "no" ? "en" : "no"));
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "blueprint" : "dark"));
  }, []);

  const value = useMemo<WorkbenchContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      theme,
      setTheme,
      toggleTheme,
      content: CONTENT_DICTIONARY[locale],
    }),
    [locale, setLocale, toggleLocale, theme, setTheme, toggleTheme]
  );

  return (
    <MotionConfig reducedMotion="user">
      <WorkbenchContext.Provider value={value}>
        {children}
      </WorkbenchContext.Provider>
    </MotionConfig>
  );
}

export function useWorkbench(): WorkbenchContextValue {
  const ctx = useContext(WorkbenchContext);
  if (!ctx) {
    throw new Error("useWorkbench must be used inside <WorkbenchProvider>");
  }
  return ctx;
}
