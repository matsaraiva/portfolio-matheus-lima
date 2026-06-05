# Matheus Saraiva Lima Portfolio

A static-export-friendly Next.js portfolio for Matheus Saraiva Lima, centered on Data2073 and built for project case studies with images, videos, tools, companies, and outcomes.

## Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS v4
- Static export via `output: "export"`
- Local content files under `src/content`

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build And Lint

```bash
npm run lint
npm run build
```

`npm run build` creates the static export in `out/`.

## Edit Personal Content

All portfolio data is intentionally centralized:

- `src/content/profile.ts` - name, positioning, about copy, contact links, SEO defaults, Data2073 overview
- `src/content/projects.ts` - case studies, project media, results, tags, links
- `src/content/tools.ts` - grouped tools and Data2073 stack slots
- `src/content/companies.ts` - company/client/partner slots, outcomes, workflow

Unconfirmed facts are marked as placeholders or TODOs in these files. Replace them only with details Matheus is comfortable publishing.

## Add A Project

Add a new entry to `projects` in `src/content/projects.ts`.

Required fields include:

- `slug`
- `title`
- `summary`
- `problem`
- `solution`
- `role`
- `tools`
- `company`
- `year`
- `images`
- `videos`
- `links`
- `results`
- `tags`
- `category`

The route `/projects/{slug}/` is generated automatically during `npm run build`.

## Add Images And Videos

Store local assets under:

```text
public/projects/{project-slug}/
```

Image example:

```ts
{
  type: "image",
  src: "/projects/data2073-product-systems/dashboard.png",
  alt: "Approved screenshot of the Data2073 dashboard",
  caption: "Dashboard used by the product team."
}
```

Local video example:

```ts
{
  type: "video",
  src: "/projects/data2073-product-systems/walkthrough.mp4",
  poster: "/projects/data2073-product-systems/poster.png",
  alt: "Walkthrough of the Data2073 workflow",
  provider: "local"
}
```

External video example:

```ts
{
  type: "video",
  src: "https://www.youtube.com/watch?v=VIDEO_ID",
  alt: "Data2073 walkthrough video",
  provider: "youtube"
}
```

If a project has no media yet, the gallery renders a clean empty state.

## Deploy

### Vercel or Netlify

Use the default build command:

```bash
npm run build
```

Publish the `out/` directory for static hosting.

### GitHub Pages

This repo includes `.github/workflows/deploy-github-pages.yml`. Every push to `main` builds the static site with the correct `/portfolio-matheus-lima` base path and deploys `out/` to GitHub Pages.

Expected public URL:

```text
https://matsaraiva.github.io/portfolio-matheus-lima/
```

If Pages is not enabled yet, set the repository Pages source to **GitHub Actions** in the GitHub repository settings.

## SEO Assets

- Open Graph image: `public/og-image.png`
- Favicon placeholder: `public/favicon.svg`

Replace both with approved branded assets when available.
