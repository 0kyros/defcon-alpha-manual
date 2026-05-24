"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { LOCALE_NAMES } from "@/lib/manual";
import { useTransition } from "react";

const LOCALE_CODES: Record<Locale, string> = {
  it: "IT",
  en: "EN",
  "pt-br": "PT",
  fr: "FR",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onChange(next: Locale): void {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className="flex items-center gap-1 border border-rule"
      role="group"
      aria-label="Language"
      data-pending={isPending}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            className={
              "mono text-[11px] stencil px-2.5 h-7 transition-colors " +
              (active
                ? "bg-accent text-bg"
                : "text-fg-3 hover:text-fg hover:bg-bg-2")
            }
            aria-current={active ? "true" : undefined}
            title={LOCALE_NAMES[code]}
          >
            {LOCALE_CODES[code]}
          </button>
        );
      })}
    </div>
  );
}
