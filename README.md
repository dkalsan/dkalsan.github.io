# dkalsan.github.io

Personal academic website of Damjan Kalšan, built with [Astro](https://astro.build).

## Structure

```text
src/
├── content/            # publications & teaching entries (Markdown + frontmatter)
├── content.config.ts   # schemas for the content collections above
├── data/
│   ├── site.ts         # identity info: name, bio, socials, nav
│   └── cv.ts            # CV entries: education, positions, skills
├── layouts/            # BaseLayout (head, nav, footer, font loading)
├── components/         # nav, footer, home, sections, cv, publications, teaching, icons
├── pages/               # routes: /, /cv, /publications, /teaching
├── scripts/reveal.ts     # scroll-reveal IntersectionObserver
└── styles/              # tokens.css (design tokens), global.css
```

Replacing placeholder content: edit `src/data/site.ts` and `src/data/cv.ts` directly, and
add/edit Markdown files under `src/content/publications/` and `src/content/teaching/`. Entries
with `placeholder: true` in their frontmatter/data render a visible "Placeholder" badge — flip
it to `false` (or remove the field) once the entry is real.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally          |
| `npm run astro check` | Type-check `.astro` files                   |

## Deploy

Pushes to `master` build and deploy via `.github/workflows/deploy.yml` to GitHub Pages. The
repo's Pages source must be set to "GitHub Actions" (Settings → Pages) for this to take effect.
