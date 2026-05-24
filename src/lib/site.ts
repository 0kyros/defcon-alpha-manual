import type { Locale } from "@/i18n/routing";

export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.2k11c.shop"
).replace(/\/$/, "");

export const SITE_NAME = "Defcon Alpha — Operator Manual";

const HREFLANG_MAP: Record<Locale, string> = {
  it: "it-IT",
  en: "en-US",
  "pt-br": "pt-BR",
  fr: "fr-FR",
};

export function hreflangFor(locale: Locale): string {
  return HREFLANG_MAP[locale];
}
