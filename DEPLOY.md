# DEPLOY — `www.2k11c.shop`

Self-hosted deploy. Docker + Caddy (automatic Let's Encrypt SSL). Cloudflare for DNS.

---

## 0. Prerequisites

- A Linux VPS with a public IPv4 (Hetzner CX22 €5/month, DigitalOcean $6/month, Linode, Vultr, OVH, Scaleway — any minimal box works for this manual)
- DNS managed at Cloudflare for `2k11c.shop`
- Ability to SSH into the VPS as a non-root user with `sudo`

Recommended specs: **1 vCPU / 2 GB RAM / 25 GB SSD**. The standalone Next.js bundle is ~120 MB; idle memory ~150 MB.

---

## 1. DNS setup at Cloudflare

Log into Cloudflare → select `2k11c.shop` → **DNS** tab → **Add record**.

| Type  | Name | Content              | Proxy status | TTL  |
|-------|------|----------------------|--------------|------|
| A     | `@`  | `<VPS_PUBLIC_IPV4>`  | **DNS only** | Auto |
| A     | `www`| `<VPS_PUBLIC_IPV4>`  | **DNS only** | Auto |
| AAAA  | `@`  | `<VPS_PUBLIC_IPV6>`  | **DNS only** | Auto (optional) |
| AAAA  | `www`| `<VPS_PUBLIC_IPV6>`  | **DNS only** | Auto (optional) |

**Important — turn off the Cloudflare proxy (the orange cloud) during initial setup.** Caddy needs direct access to ports 80/443 to obtain Let's Encrypt certificates via the HTTP-01 challenge. Once SSL is working you can switch the proxy back on with **SSL/TLS mode = Full (strict)** if you want Cloudflare's CDN.

Propagation: 1–5 minutes typically. Verify with:

```bash
dig www.2k11c.shop +short
# expected: <VPS_PUBLIC_IPV4>
```

---

## 2. VPS bootstrap

SSH into the box and run a one-shot setup. Replace `your-user` with the existing non-root sudo user (don't run the app as root).

```bash
# Update + base tools
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git ufw

# Docker (official install script)
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Open the firewall — SSH + HTTP + HTTPS only
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable

# Re-login so the docker group takes effect
exit
```

SSH back in.

---

## 3. Clone + configure

```bash
cd ~
git clone https://github.com/0kyros/defcon-alpha-manual.git
cd defcon-alpha-manual

# Configure the public site URL (already correct as the default)
cp .env.example .env
# If you change the domain later, edit .env and rebuild.
```

---

## 4. First boot

```bash
docker compose up -d --build
```

First boot does three things:

1. Builds the Next.js standalone image (~3–5 min on a 1 vCPU box).
2. Starts the `web` container on the internal network.
3. Caddy automatically negotiates a Let's Encrypt certificate for `www.2k11c.shop` and `2k11c.shop` and starts serving HTTPS.

Watch the logs until you see Caddy report the certificate:

```bash
docker compose logs -f caddy
# look for: "certificate obtained successfully"
```

Verify live:

```bash
curl -I https://www.2k11c.shop/it
# expected: HTTP/2 200, server: Caddy, strict-transport-security: ...
```

Open in browser: <https://www.2k11c.shop>

---

## 5. Updates

Every time you push a new commit to `main`:

```bash
cd ~/defcon-alpha-manual
git pull
docker compose up -d --build
```

Docker rebuilds only the changed layers. Downtime is ~5–10 seconds during container swap. For zero-downtime you can run two `web` containers behind Caddy and rotate them; that's overkill for a manual.

---

## 6. Operating

```bash
# Status
docker compose ps

# Logs (follow)
docker compose logs -f web
docker compose logs -f caddy

# Restart only the app
docker compose restart web

# Full stop
docker compose down

# Full stop + volumes (loses Caddy cert cache — usually you don't want this)
docker compose down -v
```

### Auto-start on reboot

`docker-compose.yml` already declares `restart: unless-stopped` on both services. As long as the Docker daemon starts at boot (default on Ubuntu/Debian), the stack comes back automatically.

Verify:

```bash
sudo systemctl is-enabled docker     # → enabled
```

---

## 7. Backups

Two things need backup:

1. **Source code** — already on GitHub.
2. **Caddy data volume** — contains the Let's Encrypt account key and certificates. If lost, you'll re-issue certs on next boot (Let's Encrypt allows it, but you'll briefly serve a self-signed cert during the negotiation).

Quick volume snapshot:

```bash
docker run --rm -v defcon-alpha-manual_caddy_data:/data -v $(pwd):/backup alpine \
  tar czf /backup/caddy-data.tgz -C / data
```

---

## 8. Switch the domain

If you ever move from `www.2k11c.shop` to another host:

1. Edit `Caddyfile` — replace both `2k11c.shop` and `www.2k11c.shop` with the new domain.
2. Edit `.env` — set `NEXT_PUBLIC_SITE_URL=https://<new-domain>`.
3. Update Cloudflare DNS (A records on the new domain).
4. `docker compose up -d --build`.

The new certificate is obtained on first boot.

---

## 9. Enabling Cloudflare proxy after first SSL

Once `https://www.2k11c.shop` is serving Caddy's Let's Encrypt cert directly:

1. Cloudflare → DNS → switch the cloud icons on the `@` and `www` records to **Proxied** (orange).
2. Cloudflare → SSL/TLS → set **SSL/TLS encryption mode** to **Full (strict)**.
3. Optional: Cloudflare → Rules → enable **Always Use HTTPS** and **Automatic HTTPS Rewrites**.

Caddy's certificate stays valid even with the proxy on; Cloudflare layers its own CDN cache on top.

---

## 10. Troubleshooting

**Cert not obtained**

```bash
docker compose logs caddy | grep -i "error\|certificate"
```

Common causes:
- Port 80 blocked at the firewall (need `ufw allow 80`)
- Cloudflare proxy enabled too early (turn the cloud grey for first issuance)
- DNS not yet propagated (`dig www.2k11c.shop`)

**Container crash loop**

```bash
docker compose logs web --tail 200
```

Most common: `next.config.ts` missing `output: "standalone"` (already set in this repo).

**Out of memory**

Standalone Next.js runs in ~150 MB. If you provisioned a 1 GB box and OOMs occur during `docker build`, add 1 GB of swap:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## Reference: ports + paths

| Element          | Value                                |
|------------------|--------------------------------------|
| App listen       | container `:3000` (internal only)    |
| HTTP             | host `:80`  (Caddy)                  |
| HTTPS            | host `:443` (Caddy)                  |
| Healthcheck      | `https://www.2k11c.shop/healthz`     |
| Sitemap          | `https://www.2k11c.shop/sitemap.xml` |
| Robots           | `https://www.2k11c.shop/robots.txt`  |
| Static assets    | `https://www.2k11c.shop/_next/static/*` (immutable, cached 1y) |
