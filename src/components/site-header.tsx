import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="border-b border-rule bg-bg/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 flex items-center justify-between gap-3 sm:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 group min-w-0 shrink"
        >
          <span
            aria-hidden
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center border border-accent text-accent mono text-[10px] stencil"
          >
            DA
          </span>
          <span className="mono stencil text-[11px] sm:text-[12px] text-fg-2 group-hover:text-fg transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="sm:hidden">DEFCON / ALPHA</span>
            <span className="hidden sm:inline">
              DEFCON / ALPHA · OPS MANUAL
            </span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-7 mono text-[12px] stencil">
          <Link
            href="/"
            className="text-fg-2 hover:text-accent-strong transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/manual"
            className="text-fg-2 hover:text-accent-strong transition-colors"
          >
            {t("manual")}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
