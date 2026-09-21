# Decisions

## Stack

- Vanilla HTML, CSS, and JavaScript with Vite as the bundler.
- Tailwind CSS v4 via `@tailwindcss/vite`.
- CSS keyframe animations for floating hearts and fade-in intro.
- Vercel as the deploy target (`vite` framework, `dist` output).

## Why this shape

- Frontend-only, no backend or database.
- Easy to extend later with more pages, galleries, or stories.
- Names and copy isolated in `src/config.js` so content can change without touching layout.

## Out of scope for this base

- Real photos, messages, and interaction flow.
- Audio, 3D, or backend features.
