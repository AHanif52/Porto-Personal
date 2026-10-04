# Porto-Personal

Portfolio Mohammad Aufa Hanif, built with Astro.

- `npm install` then `npm run dev` for local preview (http://localhost:4321)
- `npm run build` outputs static files to `dist/`; upload the contents of `dist/` to the hosting document root
- Content (projects, timeline, toolkit, links) lives in `src/data/content.ts`
- Layout:
  - `src/pages/index.astro` puts the sections in order
  - `src/layouts/Base.astro` holds `<head>`, meta and Open Graph tags
  - `src/components/` has one file per section, each with its own CSS
  - `src/components/diagrams/` holds the hand-drawn BPMN and wireframe SVGs
  - `src/styles/global.css` holds colors, base styles and shared BPMN shapes
- Docker: `docker build -t porto-aufa .` then `docker run -d -p 8080:80 porto-aufa` (http://localhost:8080)
  - `nginx.conf` adds security headers (CSP etc.). Uploading `dist/` to other hosting skips them; set the same headers there
- CV: edit `cv/cv.html`, then export the ATS-friendly PDF:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=public/CV-Aufa-Hanif.pdf "file://$PWD/cv/cv.html"`
