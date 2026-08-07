# Muhammad Hassaan — Portfolio

Personal portfolio site for a Flutter / MERN stack developer. Built with React 19 + Vite,
plain CSS (no UI framework), and Font Awesome for icons.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the built output
npm run lint
```

## Editing the content

**All copy lives in [`src/data/content.js`](src/data/content.js)** — profile, stats, services,
experience, projects, skills, education, certifications and nav links. Adding a project means
adding one object to the `projects` array; the filter counts update on their own.

Each project's `categories` array drives the filter chips, which are defined in `projectFilters`.

## Structure

```
src/
  data/content.js       all site copy
  hooks/
    useScrollSpy.js     highlights the nav link for the section in view
    useTheme.js         light/dark preference, persisted to localStorage
  components/           one .jsx + .css per section
  index.css             design tokens, reset, shared primitives
public/                 favicon
```

## Theming

Colors, spacing, radii, fonts and shadows are CSS custom properties on `:root` in
`src/index.css`. The dark theme is an override block under `[data-theme='dark']` — change the
accent in both places and the whole site follows.

A small inline script in `index.html` applies the stored theme before first paint so there is
no flash of the wrong theme.

## Deployment

`vite.config.js` sets `base` to `/hassaan-portfolio` for GitHub Pages, overridable with the
`VITE_BASE_PATH` env var. Note that it has no trailing slash — anything in `public/` referenced
by hand from JS needs `import.meta.env.BASE_URL` joined with an explicit `/`.
