# NS Sourcing — Static Website

This is a minimal static website scaffold for `ns-sourcing.com`, an apparel sourcing & supply chain management agency.

Files:
- `index.html` — homepage and contact form
- `styles.css` — responsive styles
- `script.js` — small JS helpers
- `CNAME` — (optional) domain mapping for GitHub Pages

Local preview

Run a simple local server from the project directory (Python 3):

```bash
cd /path/to/ns-sourcing
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy

- GitHub Pages: push this repo to GitHub, add `CNAME` containing `ns-sourcing.com`, then enable Pages on the `main` branch.
- Any static host (Netlify, Vercel, S3 + CloudFront) will work.

Domain

- Point your domain `ns-sourcing.com` A/ALIAS records to the host (or follow your host's DNS instructions).
- For GitHub Pages, add a `CNAME` file with `ns-sourcing.com` and set the repo Pages domain.

Next steps / Recommendations

- Add brand logo and high-quality photography.
- Replace the mailto form with a server endpoint or use a form service.
- Add analytics, CI, and SSL via host provider.
- Add content pages: About, Case Studies, Privacy, Terms.
