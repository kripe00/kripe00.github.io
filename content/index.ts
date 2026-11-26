import { contentEN } from "./en";
import { contentNO } from "./no";
import type { Locale, SiteContent } from "./types";

export const CONTENT_DICTIONARY: Record<Locale, SiteContent> = {
  no: contentNO,
  en: contentEN,
};

export { PROFILE_CONFIG } from "./profile";
export type * from "./types";
