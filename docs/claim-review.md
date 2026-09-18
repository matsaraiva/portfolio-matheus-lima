# Claim review

This ledger records evidence gaps found while refining the project case studies on September 18, 2026. It is an editorial check for future updates, not user-facing portfolio copy.

| Area | Current publication boundary | Evidence still needed |
| --- | --- | --- |
| Data2073 multiplayer | Confirmed experience includes Unity/C# multiplayer work, Unity Netcode and Transport, UGS matchmaking/lobbies, dedicated-server orchestration, build validation, profiling, and QA. | Add a reviewed session diagram or sanitized artifact when available. |
| Data2073 cloud and services | Confirmed experience includes REST wrappers, DTO contracts, UI states, retry paths, cloud-function integration, wallet authentication, transaction signing, asset flows, and client/backend state synchronization. | Keep provider names in the cross-project capability layer unless a specific project attribution is documented. |
| Invaders Tower Defense Online | Confirmed experience includes tower and wave systems, online interactions, build validation, QA, and Steam release context. | Add a representative debugging or release artifact when available. |
| Merge Tactics | Confirmed experience includes pure C# state, MonoBehaviour binding, event wrapper, loop states, ScriptableObject balance data, weighted bot evaluation, and ownership of all game development except art. | Add a permitted diagram or code excerpt when available. |
| Fly TD | The project is labeled `Game Project` because the current record has no release link or other release evidence. | Confirm whether it was released and add an approved store or build reference if so. |
| Performance language | Unsupported absolutes such as zero-regression, deterministic, frame-accurate, production-safe, and guaranteed stability were removed or softened where the current record supplied no measurement or artifact. | Add device, build, scenario, method, and recorded result before restoring measured performance or reliability claims. |
| Cross-project service capabilities | Confirmed experience includes Web3, Sequence wallet work, leaderboard APIs, API integration, Firebase, UGS/LiveOps, Xsolla, Azure, PlayFab, Photon, Steam item systems, and Steam/Epic Games Store/Google Play delivery. | Keep unassigned technologies grouped under “Across studio and independent projects” until a specific project relationship needs to be shown. |

## Repository audit update

See repository-evidence.md for source locations. Provider attribution is now grounded in local implementations:
- Battle Deck: Sequence, Xsolla, Firebase bridge relay, UGS Cloud Code/Leaderboards/Remote Config/Analytics, Unity Netcode, hosting adapters and Addressables delivery.
- Merge Tactics: PlayFab CloudScript, Azure Functions, Privy, Initia, typed economy and leaderboard APIs. All development except art is user-confirmed. Google Play listing is user-supplied; game is playable, upcoming release, with no video yet.
- ITDO: Photon PUN2, Steamworks inventory/drops/cosmetics/achievements/leaderboards, Firebase Auth + Realtime Database, adaptive AI and pooled projectiles.

Scope boundaries retained: Gameye client migration is not complete; bridge runtime rollout needs validation; Merge's default mint-checkout provider is unavailable; ITDO trading/market support was not found. No measured performance gains are claimed.
