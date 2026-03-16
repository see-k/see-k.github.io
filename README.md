# see-k.github.io

This repository is an Astro-powered static personal site (GitHub Pages). It is built from Markdown + Astro components and is deployed via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Then visit: `http://localhost:4321`

## Build

```bash
npm run build
```

## Deploy

This repo uses GitHub Actions (`.github/workflows/deploy.yml`) to build and deploy to GitHub Pages. Make sure Pages is configured to deploy via **GitHub Actions**.

## Content structure

- `src/pages/` — Astro pages (`.astro`) and Markdown posts (`src/pages/posts/*.md`)
- `src/layouts/` — shared layouts
- `src/styles/` — global styles
- `public/` — static assets (favicon, images, etc.)

## Add a new post

Create a new Markdown file in `src/pages/posts/` with frontmatter like:

```md
---
layout: ../../layouts/PostLayout.astro
title: "My New Post"
date: "2026-03-15"
type: "Note"
description: "Short summary."
---

Content goes here.
```
