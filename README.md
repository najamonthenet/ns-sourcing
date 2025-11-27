# NS Sourcing — Apparel Sourcing Website

A modern, responsive static website for NS Sourcing — an apparel sourcing and supply chain management agency serving brands, retailers, and buyers worldwide.

## Features

- **SEO-optimized** homepage with structured metadata
- **Responsive design** (mobile-first, works on all devices)
- **Services showcase** with detailed descriptions
- **Four-step process** flow visualization
- **Testimonials section** with client quotes
- **Netlify form-ready** contact form (or use mailto fallback)
- **GitHub Pages ready** with CNAME configuration
- **Fast and lightweight** (pure HTML, CSS, JS — no frameworks or build steps)

## Files

- `index.html` — Main homepage
- `styles.css` — Responsive styles (mobile-first, CSS Grid/Flexbox)
- `script.js` — Small JS helpers (year auto-update)
- `CNAME` — Domain configuration for GitHub Pages
- `.gitignore` — Standard exclusions

## Local Preview

Run a simple HTTP server to preview locally:

```bash
cd /path/to/ns-sourcing
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Alternatively, if you have Node.js:

```bash
npx http-server
```

## Deployment

### GitHub Pages (Recommended)

1. Create a GitHub repository named `ns-sourcing` (or similar).
2. Push this code to the `main` branch.
3. Go to **Settings → Pages** and set:
   - Source: Deploy from a branch
   - Branch: `main` / (root)
   - Save
4. Point your domain `ns-sourcing.com` to GitHub Pages:
   - Add an `A` record pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or create a `CNAME` pointing to `YOUR_USERNAME.github.io`
5. GitHub will automatically use the `CNAME` file in this repo.

**Commands to push (using `gh` CLI):**

```bash
# If you have gh CLI authenticated
gh repo create ns-sourcing \
  --public \
  --description "NS Sourcing — Apparel sourcing & supply chain management" \
  --homepage "https://ns-sourcing.com" \
  --source . \
  --remote origin \
  --push
```

Or manually:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ns-sourcing.git
git branch -M main
git push -u origin main
```

### Netlify

1. Connect your GitHub repo to Netlify.
2. Build command: (leave blank — it's a static site)
3. Publish directory: `/` (root)
4. Deploy.
5. In **Netlify Settings → Domain management**, add your custom domain `ns-sourcing.com`.
6. Update DNS records as instructed.

The contact form will work with Netlify's built-in form handling (already configured with `netlify` attribute in HTML).

### Vercel

1. Push to GitHub.
2. Import project on Vercel.
3. Deploy.
4. Add custom domain in **Settings → Domains**.

### S3 + CloudFront

1. Upload files to S3 bucket.
2. Create CloudFront distribution pointing to the bucket.
3. Add `ns-sourcing.com` as a CNAME.
4. Update DNS.

## Contact Form

The form in `index.html` is configured for **Netlify Forms**. To use it:

1. Deploy to Netlify (as above).
2. Submissions will appear in **Netlify Admin → Forms**.
3. Set up notifications in Netlify Dashboard.

**Alternative (Formspree):** Replace the form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get a form ID at [formspree.io](https://formspree.io).

## Customization

### Update branding:

- **Logo:** Replace "NS Sourcing" text in header with an `<img>` tag.
- **Colors:** Edit `:root` variables in `styles.css` (e.g., `--accent: #your-color`).
- **Content:** Edit text in `index.html` sections (hero, services, testimonials, process).

### Add pages:

1. Create `about.html`, `privacy.html`, etc.
2. Add navigation links in the header.
3. Deploy.

## DNS Setup

For `ns-sourcing.com` to work:

**GitHub Pages:**
- Add `A` records → GitHub IPs (see above)
- Or add `CNAME` → `YOUR_USERNAME.github.io`

**Netlify:**
- Add `CNAME` → `ns-sourcing.netlify.app` (Netlify assigns this)
- Netlify will give you exact DNS records to add.

**Vercel:**
- Add `CNAME` as instructed by Vercel dashboard.

Update DNS at your domain registrar (GoDaddy, Namecheap, Route53, Cloudflare, etc.).

## Next Steps / Recommendations

- [ ] Add high-quality photography or hero image
- [ ] Upload a professional logo
- [ ] Customize testimonials with real client names and quotes
- [ ] Add Google Analytics or Matomo tracking
- [ ] Create additional pages: About, Case Studies, Privacy Policy, Terms
- [ ] Set up email notifications for form submissions
- [ ] Add a blog or resources section
- [ ] Implement schema.org structured data for rich snippets

## License

© NS Sourcing. All rights reserved.
