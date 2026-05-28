# Plainify — Deployment Guide

One required env var: `GROQ_API_KEY`. Everything else is zero-config.

---

## Railway (recommended — faster cold starts)

1. Push this repo to GitHub (public or private both work)
2. Go to [railway.app](https://railway.app) → **Start a New Project** → sign in with GitHub (no credit card, no KYC)
3. Click **Deploy from GitHub repo** → select this repo
4. Railway auto-detects Node.js and runs `npm install && node server.js`
5. Go to your project → **Variables** tab → add:
   - Key: `GROQ_API_KEY` | Value: your Groq key
6. Redeploy (or it auto-deploys on save)
7. Your app is live at `<project>.up.railway.app`

**Add custom domain (Railway):**
- Project → Settings → Networking → **Generate Domain** (free subdomain) or **Custom Domain**
- Enter your domain (e.g. `plainify.com`)
- Railway shows you two DNS records to add — go to your registrar (Namecheap / Cloudflare) and add them:
  - `CNAME @ → <value>.railway.app` (for root domain, use ALIAS/ANAME if registrar supports it)
  - Or point A record to Railway's IP shown in the dashboard
- SSL is automatic

---

## Render (free tier, slightly slower cold start)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New** → sign in with GitHub (no KYC)
3. Click **New Web Service** → Connect your repo
4. Render reads `render.yaml` automatically — settings are pre-filled
5. Under **Environment** → add:
   - Key: `GROQ_API_KEY` | Value: your Groq key
6. Click **Create Web Service** → deploy takes ~2 min
7. Your app is live at `<name>.onrender.com`

Note: Render free tier spins down after 15 min of inactivity. First request after sleep takes ~5 sec. Upgrade to Starter ($7/mo) to eliminate this.

**Add custom domain (Render):**
- Service → Settings → **Custom Domains** → Add domain
- Render gives you a CNAME target (e.g. `<name>.onrender.com`)
- Go to your registrar and add:
  - `CNAME www → <name>.onrender.com`
  - For root domain: use Cloudflare (free, supports CNAME flattening) or Namecheap's URL redirect
- SSL is automatic via Let's Encrypt

---

## Getting a domain (~$10/yr, no KYC)

**Namecheap** ([namecheap.com](https://namecheap.com)) — pay with crypto (accepts BTC/ETH), no SSN required.
**Cloudflare Registrar** ([cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar/)) — at-cost pricing, great DNS panel, free proxy/CDN.

Search for `plainify.com` — if taken, consider: `plainify.app`, `plainify.tools`, `getplainify.com`.

---

## Local dev

```
cp .env.example .env
# fill in GROQ_API_KEY in .env
node server.js
# → http://localhost:3737
```

The `.env` file at `../Documents/Codex/2026-04-20-do-you-know-jarvis/.env` is auto-loaded when present (dev only). In production, set `GROQ_API_KEY` as a platform env var.

---

## Analytics

Analytics: Create free account at umami.is → add new website → copy the website ID → replace `UMAMI_WEBSITE_ID` in all HTML files (index.html, sponsor.html, and all files in tools/).

---

## Checklist before go-live

- [ ] Repo pushed to GitHub
- [ ] `GROQ_API_KEY` set in platform dashboard
- [ ] Health check at `/` returns 200
- [ ] Custom domain DNS propagated (use [dnschecker.org](https://dnschecker.org) to verify)
- [ ] Test each tool endpoint manually after deploy
- [ ] Replace `UMAMI_WEBSITE_ID` in all HTML files after creating Umami account
