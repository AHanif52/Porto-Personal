# Porto-Personal

Portfolio Mohammad Aufa Hanif, built with Astro.

- `npm install` then `npm run dev` for local preview (http://localhost:4321)
- `npm run build` outputs static files to `dist/`; upload the contents of `dist/` to the hosting document root
- Content (projects, timeline, toolkit, links) lives in `src/data/content.ts`
- Layout:
  - `src/pages/index.astro` puts the sections in order
  - `src/layouts/Base.astro` holds `<head>`, meta and Open Graph tags
  - `src/components/` has one file per section, each with its own scoped CSS
  - `src/styles/global.css` holds colour tokens (light and dark), type, buttons and links
- Design: clean editorial base with Persona-style slanted accents; follows the system light or dark theme, no JavaScript
- Deploy (live at https://aufahanif.supsub.my.id, cPanel hosting, SSH host `supsub`):
  `npm run build && COPYFILE_DISABLE=1 tar -C dist --exclude .htaccess -cf - . | ssh supsub 'tar -C ~/aufahanif.supsub.my.id -xf -'`
  - `public/.htaccess` holds the security headers and HTTPS redirect. The copy on the server also carries a cPanel-generated block, so it is left out of the upload; re-apply by hand if it changes
- Docker (alternative): `docker build -t porto-aufa .` then `docker run -d -p 8080:80 porto-aufa`; `nginx.conf` sets the same headers
- CV: edit `cv/cv.html`, then export the ATS-friendly PDF:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=public/CV-Aufa-Hanif.pdf "file://$PWD/cv/cv.html"`
