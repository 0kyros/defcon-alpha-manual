import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Required for Docker / self-hosted deploys
  output: "standalone",
  // Trust the upstream reverse proxy (Caddy / nginx) for X-Forwarded-* headers
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
