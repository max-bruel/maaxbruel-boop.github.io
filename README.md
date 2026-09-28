# Max Bruel — Research & Projects

A static portfolio website. It has no build step and can be hosted free on GitHub Pages, Netlify, Vercel or Cloudflare Pages.

## Preview locally

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public GitHub repository (for example `maxbruel-portfolio`).
2. Upload the contents of this folder to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
5. GitHub will provide the live URL. A custom domain can be added later from the same Pages settings.

## Structure

- `index.html` — page content
- `styles.css` — design and responsive layout
- `script.js` — project filters
- `assets/docs/` — CV and project reports
- `assets/images/` — profile photo and project previews

## Before publishing

Review which reports you want public. The site intentionally displays your email and LinkedIn but does **not** display the phone number from your CV.
