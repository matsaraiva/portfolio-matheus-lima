# Matheus Saraiva Lima Portfolio

A static-export-friendly Next.js portfolio for Matheus Saraiva Lima, centered on Data2073 and built for project case studies with images, videos, tools, companies, and outcomes.

[Explore the portfolio](https://matsaraiva.github.io/portfolio-matheus-lima/)

## Playable Web Games

Three independent portfolio projects complement the professional Unity work. Each includes a public demo, source, and documented verification. Implementation and verification were AI-assisted; the individual repositories describe scope and testing limitations.

| Game | Stack and technical focus | Play | Code |
| --- | --- | --- | --- |
| Sunspire | Three.js · 3D stacking, overlap geometry, resource lifecycle | [Play](https://matsaraiva.github.io/sunspire-threejs/) | [Source](https://github.com/matsaraiva/sunspire-threejs) |
| Beacon Shift | Phaser · timed survival, beam targeting, input handling | [Play](https://matsaraiva.github.io/beacon-shift-phaser/) | [Source](https://github.com/matsaraiva/beacon-shift-phaser) |
| Circuit Bloom | PixiJS · puzzle state, procedural drawing, keyboard interaction | [Play](https://matsaraiva.github.io/circuit-bloom-pixijs/) | [Source](https://github.com/matsaraiva/circuit-bloom-pixijs) |

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
It also normalizes nested Next.js navigation files emitted on Windows to the
flat filenames requested by the browser. Already-flat exports are unchanged.

## Edit Personal Content

All portfolio data is intentionally centralized:

- `src/content/profile.ts` - name, positioning, about copy, contact links, SEO defaults, Data2073 overview
- `src/content/projects.ts` - case studies, project media, results, tags, links
- `src/content/tools.ts` - grouped tools and Data2073 stack slots
- `src/content/companies.ts` - company/client/partner slots, outcomes, workflow
- `src/content/videos.ts` - portfolio video playlist and video-section copy
- `src/content/engineering.ts` - flagship ordering and project-backed system stories
- `src/content/web-games.ts` - playable web game case studies and demo/source destinations

The homepage leads with three flagship entries, followed by a dedicated Playable
Web Games section. Other projects remain in More Projects and retain their existing
URLs. The old work-map, technical-proof,
and tools anchors now lead to the unified engineering showcase.

Run `node scripts/optimize-images.mjs` after changing source artwork. It preserves
originals and refreshes WebP display copies plus `src/content/optimized-images.json`.
Run `node scripts/check-export.mjs /portfolio-matheus-lima` after a production
build with that base path to verify local page, image, script, and anchor targets.
Outstanding content evidence is tracked in `docs/claim-review.md`.

Representative visuals are marked as placeholders in these files. Replace them only with approved screenshots, videos, logos, metrics, and client details Matheus is comfortable publishing.

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

YouTube playlists are also supported:

```ts
{
  type: "video",
  src: "https://www.youtube.com/watch?v=VIDEO_ID&list=PLAYLIST_ID",
  alt: "Portfolio video playlist",
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
