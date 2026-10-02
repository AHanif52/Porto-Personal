# Porto-Personal

Portfolio Mohammad Aufa Hanif, built with Astro.

- `npm install` then `npm run dev` for local preview (http://localhost:4321)
- `npm run build` outputs static files to `dist/`; upload the contents of `dist/` to the hosting document root
- Content lives in the lists at the top of `src/pages/index.astro`
- Docker: `docker build -t porto-aufa .` then `docker run -d -p 8080:80 porto-aufa` (http://localhost:8080)
- CV: edit `cv/cv.html`, then export the ATS-friendly PDF:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=public/CV-Aufa-Hanif.pdf "file://$PWD/cv/cv.html"`
