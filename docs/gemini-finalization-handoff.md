# Gemini Finalization Handoff

## Goal

Finish the portfolio at `C:\Users\Matheus\Documents\Sagui Games Work\portfolio-matheus-lima` so that a hiring manager sees a premium, credible Unity game developer portfolio on the first visit. The result must communicate production gameplay, multiplayer, live-service, platform, cloud, commerce, and Web3 experience without overclaiming.

The work is already implemented and validated once. This handoff is for a focused final review, polish pass, and verification; it is not a request for a new design or a broad rewrite.

## Current implementation

- The home page uses three flagship projects in this order: Data2073 Battle Deck, Invaders Tower Defense Online, and Merge Tactics.
- The hero reel starts the muted Battle Deck YouTube video about one second after load, then rotates to Invaders Tower Defense Online and Merge Tactics. Merge Tactics intentionally uses a still image because no gameplay video is available.
- Invaders Tower Defense Online uses the real, user-provided cover and gameplay assets in `public/projects/invaders-tower-defense-online/`.
- The remaining portfolio projects remain available under **More Projects**. Do not remove them to make the flagship selection smaller.
- Engineering content now covers evidenced systems across the three featured games, including Unity gameplay, Photon, Unity Game Services, Firebase, PlayFab, Azure Functions, Sequence, Privy, Xsolla, Initia, Steamworks, Steam Inventory, Steam leaderboards, Google Play, Epic distribution, addressable content delivery, leaderboards, economy, wallet, and live-ops work.
- Merge Tactics is titled exactly **Merge Tactics**. It is playable and upcoming, links to Google Play, and clearly credits Matheus with all game development except the art.

## Files to understand first

1. `GEMINI.md` and `AGENTS.md`
2. `docs/repository-evidence.md` — source-backed evidence and boundaries for each project
3. `docs/claim-review.md` — public-claim ledger
4. `docs/refinement-verification.md` — prior validation record
5. `src/components/HeroReel.tsx` and `src/components/sections/HeroSection.tsx`
6. `src/content/projects.ts`, `src/content/engineering.ts`, and `src/content/project-systems.ts`
7. `src/app/projects/[slug]/page.tsx`

## Completion plan

1. Inspect the existing diff and preserve all unrelated work. Read the evidence docs before changing public copy.
2. Run the portfolio locally and review the home page plus each of the three flagship project pages at phone, tablet, laptop, and wide desktop widths.
3. Verify the hero behavior: a muted Battle Deck video begins after roughly one second when browser autoplay policy permits it; controls remain usable; the order is Battle Deck, Invaders Tower Defense Online, then Merge Tactics; the fallback and reduced-motion behavior stay usable.
4. Review the flagship cards, More Projects, Engineering Showcase filters, project-system breakdowns, and contact links. Correct visual defects, awkward copy, broken links, clipping, layout shifts, inaccessible focus states, or unsupported claims.
5. Keep the page concise enough for a first visit. Prioritize proof of ownership and outcomes over a dense tool list, while retaining the wider services evidence in the Engineering Showcase and project pages.
6. Confirm that each service claim remains tied to the project where it is evidenced. In particular:
   - Invaders Tower Defense Online uses Photon PUN2, Firebase Auth/Realtime Database, Steamworks, Steam Inventory, Steam leaderboards, co-op waves, adaptive AI, and pooling. Do not claim Photon Fusion, Firestore, Firebase Cloud Functions, or Steam market/trading.
   - Data2073 Battle Deck includes Unity Netcode, UGS, Firebase-backed bridge work, Sequence, Xsolla, and Gameye backend allocation. Do not claim the Gameye client migration was completed.
   - Merge Tactics includes PlayFab, Azure Functions, Privy, Initia reward flows, leaderboard/economy work, and the Google Play listing. Do not claim a live default Web3 mint provider, a released game, or a gameplay video.
7. Run the required checks and resolve all errors:

   ```powershell
   npm run lint
   $env:NEXT_PUBLIC_BASE_PATH='/portfolio-matheus-lima'; npm run build
   node scripts/check-export.mjs /portfolio-matheus-lima
   ```

8. Inspect the final Git diff. Stage and commit only task-scoped files if the user asks for the completed result to be versioned. Do not push unless the user explicitly asks to publish.

## Acceptance criteria

- The first screen feels intentional and premium, with the flagship reel immediately proving game-development experience.
- All three featured games have accurate status, ownership, visuals, and destinations.
- The portfolio keeps both the flagship-first presentation and the complete project history.
- The Engineering Showcase gives recruiters clear proof of gameplay, services, cloud, commerce, Web3, platform, and delivery ability without misleading claims.
- The UI works across common viewport sizes, keyboard navigation works, and reduced-motion users retain access to the reel content.
- Lint, production build, and static-export checks pass.

## Copy-ready Gemini prompt

```text
Finalize the premium Unity game-developer portfolio in C:\Users\Matheus\Documents\Sagui Games Work\portfolio-matheus-lima. This is a focused review and polish pass over an implementation that already exists; preserve its architecture and do not replace it with a generic portfolio.

First read GEMINI.md, AGENTS.md, docs/repository-evidence.md, docs/claim-review.md, and docs/refinement-verification.md. Use those evidence documents to keep all public claims accurate. Preserve unrelated changes in the working tree.

The homepage must lead with exactly three flagship projects in this order: Data2073 Battle Deck, Invaders Tower Defense Online, and Merge Tactics. Keep all other work under More Projects. The hero reel should begin the muted Battle Deck video about one second after page load where autoplay is allowed, rotate to Invaders Tower Defense Online, then display Merge Tactics as a still because no Merge video exists. Verify controls, fallbacks, and reduced-motion behavior. Use the real Invaders Tower Defense Online assets already in public/projects/invaders-tower-defense-online/.

Keep Merge Tactics titled exactly “Merge Tactics,” marked playable and upcoming, with this Google Play link: https://play.google.com/store/apps/details?id=com.ostengames.data2073_merge. State that Matheus completed all game development except the art. Do not imply that it has launched, has a gameplay video, or has a live default Web3 mint provider.

Review the Engineering Showcase and each flagship project page. Retain the source-backed breadth of systems: gameplay, multiplayer, UGS, Firebase, PlayFab, Azure Functions, Sequence, Privy, Xsolla, Initia, Steamworks, Steam Inventory, leaderboards, platform delivery, wallet, economy, commerce, and live ops. Keep every technology tied to the project where it is evidenced. Do not claim Photon Fusion, Firestore, Firebase Cloud Functions, Steam market/trading, or a completed Gameye client migration.

Make only concrete improvements that strengthen premium visual polish, hierarchy, readability, responsive behavior, accessibility, or copy accuracy. Test phone, tablet, laptop, and wide desktop layouts. Then run:

npm run lint
$env:NEXT_PUBLIC_BASE_PATH='/portfolio-matheus-lima'; npm run build
node scripts/check-export.mjs /portfolio-matheus-lima

Fix any failures. Finally inspect git status and git diff. You may stage and commit only the task-scoped, validated changes if the user asks to version the completed result. Do not push or use destructive/history-rewriting Git commands. Report the final files changed, validation results, and any remaining limitation (currently: no Merge Tactics gameplay video).
```
