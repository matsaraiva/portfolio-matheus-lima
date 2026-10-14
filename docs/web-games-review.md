# Web game portfolio review

Reviewed October 14, 2026. Publication was explicitly approved after local implementation and verification. The associated GitHub Pages workflow provides the deployment status for the published commit.

## Presentation

Keep the three professional Unity flagships first. Follow them with a dedicated Playable Web Games section in this order:

1. **Sunspire / Three.js:** immediate 3D visual contrast; analytic overlap and scene lifecycle.
2. **Beacon Shift / Phaser:** real-time input, targeting, and a complete survival loop.
3. **Circuit Bloom / PixiJS:** deterministic puzzle rules, 2D rendering, and multiple input methods.

Each card has a real gameplay screenshot, a direct Play now button, a source link, and a technical case study. Case studies describe implementation, ownership, results, and limits. These are independent, AI-assisted portfolio projects, not commercial client deliveries.

The portfolio README now contains a playable-game table so GitHub visitors can try the games without first navigating the website. The three optimized WebP screenshots total 82,622 bytes. Games open separately; their runtimes are not embedded in the portfolio.

## Verification

- All three public demos returned HTTP 200; their latest successful deployments matched clean local game repository commits.
- Reviewed game QA evidence. Parent checks across delivery confirmed Circuit Bloom's 11 tests, Beacon Shift's 12 tests, and Sunspire's 26 tests plus production builds. Sunspire's suite and build were rerun during this review.
- Portfolio lint, TypeScript checking, and production static export passed with `/portfolio-matheus-lima` as the base path.
- Export check: 17 HTML files, 542 local references, no missing targets or anchors.
- Chromium: clicked all three Play now buttons and verified each opened the expected public game; visited all three new case studies and returned to the section.
- Responsive checks: 320, 390, 768, and 1440 pixel viewports; all three cards and screenshots present, no horizontal page overflow. Light and dark presentations reviewed.
- Browser audit after the export fix: no failed local requests and no page JavaScript errors. Existing YouTube embeds emitted local-preview origin warnings; Chromium also reported a Windows GPU preference warning.
- Corrected a Next.js 16.2.7 Windows export issue: nested navigation segment files did not match the flat filenames requested by the browser. `scripts/normalize-export.mjs` adds those filenames after the build. The reviewed build normalized 27 files; a second run changed zero files. Already-flat exports are left intact.
- Physical iPhone/Safari and hardware frame-rate benchmarks remain outside the verified scope. No cross-browser or frame-rate guarantee is presented.

## Recommended GitHub presentation

The initial public GitHub API review found no homepage URL or topics for the portfolio or any of the three game repositories, and no portfolio description. With explicit user approval, the website fields and topics below were applied, together with the portfolio description. Existing game descriptions were preserved.

| Repository | Website field | Applied topics |
| --- | --- | --- |
| portfolio-matheus-lima | https://matsaraiva.github.io/portfolio-matheus-lima/ | portfolio, game-development, unity, typescript, nextjs |
| sunspire-threejs | https://matsaraiva.github.io/sunspire-threejs/ | threejs, typescript, browser-game, webgl, game-development |
| beacon-shift-phaser | https://matsaraiva.github.io/beacon-shift-phaser/ | phaser, typescript, browser-game, arcade-game, game-development |
| circuit-bloom-pixijs | https://matsaraiva.github.io/circuit-bloom-pixijs/ | pixijs, typescript, browser-game, puzzle-game, game-development |

Applied portfolio repository description: **Game development portfolio: Unity gameplay and multiplayer projects, plus playable web games built with Three.js, Phaser, and PixiJS.**

Pin the portfolio repository and these three games alongside the strongest public professional or systems samples. This makes the breadth visible while retaining the professional work as the main evidence of experience.

## Publication

The existing workflow deploys on pushes to `main`. The user explicitly authorized committing, pushing, publishing this update, and applying the repository metadata above. Profile pinning remains a recommendation and was not part of this publication.
