# Portfolio Gemini Rules

Read `AGENTS.md` and the relevant Next.js documentation before modifying the application. Preserve the existing portfolio structure unless the task clearly needs a change.

## Content accuracy

- Treat `docs/repository-evidence.md` and `docs/claim-review.md` as the source of truth for project claims.
- Keep services tied to the project where they are evidenced. Do not imply that an integration is live, shipped, or production-ready when the evidence says otherwise.
- Merge Tactics must be presented as playable and upcoming, with all game development credited to Matheus except the art. Its Google Play link is `https://play.google.com/store/apps/details?id=com.ostengames.data2073_merge`; no gameplay video exists yet.
- The portfolio must keep its three flagship projects at the top and retain the remaining work under More Projects.

## Validation

Run the relevant checks after changes:

```powershell
npm run lint
$env:NEXT_PUBLIC_BASE_PATH='/portfolio-matheus-lima'; npm run build
node scripts/check-export.mjs /portfolio-matheus-lima
```

## Git authorization

Gemini may inspect repository state, stage named task files, and commit validated, task-scoped work. Before staging, inspect `git status` and `git diff`; keep unrelated work, secrets, local configuration, generated caches, and build output out of the commit.

Do not push, open a pull request, change remotes, force-push, reset hard, clean, rebase, rewrite history, or delete branches unless the user explicitly asks for that exact operation.
