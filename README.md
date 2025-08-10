# LCM Oven Cleaning — Design-Only Preview

This is a **mobile-first, design-only** preview of the LCM Oven Cleaning site (React + Vite + Tailwind). It includes:
- Blue & gold branding with logo placeholder (`/public/logo.png`)
- Homepage with **autoplay reels** (Instagram embeds) and tap-to-unmute
- **Before/After** photo gallery (labels on photos only)
- Full **services & pricing** in mobile-friendly cards
- Testimonials, contact bar (phone, WhatsApp, socials), and a **Book Now** placeholder
- Banner: Bookings open **18 Aug 2025**

> Functional booking system & admin panel will be added next as a separate backend service.

## Local Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Render (Static Site)

1. Push this folder to a GitHub repo (e.g. `lcm-oven-cleaning-preview`).
2. On Render: **New → Static Site** and connect the repo.
3. **Build command:** `npm run build`
4. **Publish directory:** `dist`
5. Click **Create Static Site** — Render will give you a `.onrender.com` link.

## Custom Domain

Point your Namecheap domain to Render after the site is live:
- Add a CNAME for `www` pointing to your Render static site URL.
- (Optional) Add an A record for apex (`@`) to Render's IP if you want naked domain too, or set up an ALIAS/ANAME if supported.
- Enable SSL in Render.

## Replace the Logo

Swap `/public/logo.png` with your real logo (same filename).

## Notes

- Instagram embeds depend on Instagram being reachable; otherwise the iframes will show placeholders.
- All services/pricing data live in `src/App.jsx`.
