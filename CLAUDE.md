# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal Astro static site deployed to GitHub Pages at `https://wranglerdev.github.io`. The project uses Astro 5.16+ with TypeScript strict mode.

## Common Commands

```bash
# Development
pnpm dev          # Start dev server at localhost:4321

# Build & Deploy
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview build locally before deploying

# Dependencies
pnpm install      # Install dependencies

# Astro CLI
pnpm astro ...           # Run Astro CLI commands (e.g., astro add, astro check)
pnpm astro -- --help     # Get Astro CLI help
```

## Architecture

- **Pages**: Located in `src/pages/`. Each `.astro` or `.md` file becomes a route based on its filename
- **Components**: Place reusable Astro/React/Vue/Svelte/Preact components in `src/components/` (if created)
- **Static Assets**: Store images and static files in `public/`
- **Build Output**: Production build generates to `./dist/`
- **TypeScript**: Uses strict Astro TypeScript configuration (`astro/tsconfigs/strict`)

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to `main`:
- Workflow: `.github/workflows/deploy.yml`
- Uses `npm ci` and `npm run build` in CI (ensure package.json scripts work with npm)
- Configured site URL: `https://wranglerdev.github.io` (in `astro.config.mjs`)

## Important Notes

- The main page (`src/pages/index.astro`) is in Portuguese (`lang="pt-br"`)
- Development server should not be run automatically - user will run it manually
