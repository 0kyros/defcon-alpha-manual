import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("landing.footer");

  return (
    <footer className="border-t border-rule bg-bg-2 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-[11px] stencil text-fg-3 max-w-xl leading-relaxed">
          {t("credit")}
        </p>
        <p className="mono text-[11px] stencil text-fg-3">{t("version")}</p>
      </div>
    </footer>
  );
}
