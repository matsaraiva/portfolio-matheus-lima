# Repository-backed portfolio evidence — September 18, 2026

Read-only source review. These are implementation findings, not claims of production rollout, runtime validation, or benchmark results. No private source excerpts, credentials, endpoint values, or configuration values are included in public portfolio content.

## Battle Deck
Repository: C:/Users/Matheus/Documents/git/Osten Games/osten-games-data2073-2025-liveops

- Sequence inventory and transaction receipts: Data2073/Assets/__Project/Scripts/Modules/Shared/NFT/Shared/NFTController.cs:200,395.
- Client bridge balances/approvals/requests: Data2073/Assets/__Project/Scripts/Modules/Shared/NFT/Client/DataChipBridgeService.cs:73.
- Xsolla authentication, idempotency, SKU mapping and reward delivery: Data2073/GameModule/Project/ShopGateway/ShopGateway.cs:64,153.
- UGS enriched leaderboard queries: Data2073/GameModule/Project/Leaderboard/LeaderboardModule.cs:401.
- Remote Config context handling: Data2073/GameModule/Project/ModuleFetchData/RemoteConfig.cs:26.
- Client/server analytics: Data2073/Assets/__Project/Scripts/Shared/UGS/AnalyticsController.cs:12; Data2073/GameModule/Project/Analytics/UnityAnalyticsApi.cs:44.
- Netcode admission and NFT-backed deck validation: Data2073/Assets/__Project/Scripts/Server/Network/MatchplayNetwork.cs:39.
- Gameye allocation/backend polling: Data2073/GameModule/Project/GameMode/GameModes/Matchmaking/RocketScienceAllocator.cs:65; server runtime adapter: Data2073/Assets/__Project/Scripts/Server/Network/GameyeRuntimeConfiguration.cs:6.
- Client matchmaking migration is not complete: RocketScienceMatchmakerService.cs:11 is a fallback placeholder. Do not claim completed migration.
- Addressables cloud delivery: Data2073/Assets/__Project/Scripts/Modules/Addressables/Editor/CloudSyncService.cs:27.
- Adjacent data2073-cloud-functions/functions/controllers/bridgeController.js:489,583,764 implements Firebase transactional relay state, receipt gating, destination mint/origin burn, and recovery. Runtime rollout still needs separate validation.

## Merge Tactics
Repository: C:/Users/Matheus/Documents/git/Osten Games/osten-games-merge-tactics-project
Client prefix: Merge Tactics Project/Assets/MergeSiegeProject/Core/

- GameLoopManager.cs:148,531: explicit phases, commands, combat resolution and event transitions.
- Backend/PlayFabCloudScriptBackendService.cs:46,119: typed PlayFab services.
- backend/playfab-cloudscript/Functions/MergeTacticsFunctions.cs:30,132: Azure Functions CloudScript backend and authoritative persistence.
- Backend/Web2EconomyCommandCoordinator.cs:181,233: revision-aware economy mutations and retries.
- Auth/PrivyAuthService.cs:105; Auth/PrivyWalletService.cs:16; Auth/WalletProofService.cs:118: authentication, wallet readiness and signed proofs.
- Backend leaderboard contracts and MergeTacticsFunctions.cs:542; RogueliteLeaderboardOrderingPolicy.cs:6: validated score submission, tie ordering, best scores and replay protection.
- backend/playfab-cloudscript/Functions/InitiaRewardContractAdapter.cs:102; MergeTacticsFunctions.cs:615: score reads, authorized submission, receipt polling and pending states.
- Web3MintService.cs:180 has an unavailable default provider; do not claim live mint checkout.
- User confirms all development except art; playable, upcoming release, Google Play listing supplied. No video yet.

## ITDO
Repository: C:/Users/Matheus/Documents/Unity Projects/ETDO Project 2026-03-15_22-50-28/ITDO Project

- Assets/Scripts/PUN/NetworkController.cs:454,1684,1917,2014: Photon PUN2 modes, room properties, reconnect slots, Master migration.
- Assets/Scripts/AI Defense/AIDefense.cs:1140,1462,1521,1911: readiness gates, network-clock wave countdown and Master spawning.
- Assets/Scripts/StrategicAdaptiveAI.cs:346,425,540,753,1328: economy modes, tower/invader scoring and lane geometry.
- Assets/Scripts/Tower.cs:423,452,668 and Bullet.cs:164: pooled projectiles and non-allocating splash queries.
- Assets/Scripts/SteamInventoryManager.cs:39,91: inventory drops and ownership; HatsSelector.cs:30: cosmetic gating. No trading/market claim.
- Assets/Scripts/Steam/AchievementManager.cs:26,46,67,127: achievements, best-wave leaderboard submission and unlocks.
- Assets/Scripts/FireBase/AuthManager.cs:58,289,477; SaveUserData.cs:165,265,341: Firebase Auth and Realtime Database account/stat persistence, not Firestore.

## Media provenance
ITDO official-cover.png copied from Pictures/ITDO/capsulaPrincipalnova1232.png.
ITDO gameplay imagery (`official-gameplay.png`, `steam-gameplay-coop.jpg`, `steam-gameplay-multiplayer.jpg`, `steam-gameplay-chessboard.jpg`, etc.) downloaded directly from the official Steam store page (AppID 2826540) via Valve's Steam CDN in native 1080p.
The legacy prototype screenshot (`Captura1.png`) and old mockups remain archived on disk for history but are not referenced in production markup or card stories.
