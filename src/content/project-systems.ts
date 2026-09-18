export type SystemBreakdown = {
  id: string;
  title: string;
  challenge: string;
  implementation: string;
  value: string;
  technologies: string[];
};

export const projectSystems: Record<string, SystemBreakdown[]> = {
  "data2073-multiplayer-liveops": [
  {
    "id": "multiplayer-sessions",
    "title": "Multiplayer sessions & player validation",
    "challenge": "Admit players into the correct game mode with valid account and deck state.",
    "implementation": "I worked on Unity Netcode connection approval that checks connection payloads, player identity, game mode, capacity, and deck contents, including NFT-backed deck validation and reconnect aliases.",
    "value": "Session entry ties gameplay eligibility to account and inventory data instead of trusting the incoming client payload alone.",
    "technologies": [
      "Unity Netcode",
      "Unity Transport",
      "UGS Matchmaker",
      "Dedicated Servers"
    ]
  },
  {
    "id": "liveops",
    "title": "UGS LiveOps, leaderboard APIs & analytics",
    "challenge": "Connect competitive rankings, player statistics, remote settings, and live-service telemetry.",
    "implementation": "I built Cloud Code service flows for leaderboard score/range queries enriched with match statistics, context-aware Remote Config loading, and client/server analytics events for tutorials, logins, purchases, matches, quests, and campaigns.",
    "value": "The live-service layer connects player-facing features to remotely managed configuration and structured operational events.",
    "technologies": [
      "UGS Cloud Code",
      "UGS Leaderboards",
      "Remote Config",
      "UGS Analytics",
      "Cloud Save"
    ]
  },
  {
    "id": "hosting-delivery",
    "title": "Hosting adapters & content delivery",
    "challenge": "Support a dedicated-server hosting transition and keep downloadable content delivery manageable.",
    "implementation": "I implemented Gameye allocation/polling backend work and server runtime configuration adapters. I also worked on Addressables delivery tooling with bundle/catalog caching policies and cloud storage synchronization.",
    "value": "This work covers the allocation backend, runtime adapters, and content tooling; the client-side hosting migration remains a separate integration step.",
    "technologies": [
      "Gameye",
      "Dedicated Servers",
      "Addressables",
      "DigitalOcean Spaces"
    ]
  }
],
  "data2073-web3-nft": [
  {
    "id": "sequence-wallets",
    "title": "Sequence wallets & multi-chain inventory",
    "challenge": "Present player-owned assets across multiple chains while handling incomplete indexer responses and transaction delays.",
    "implementation": "I integrated Sequence indexer balance pagination, cross-chain inventory merging, and normalized token data. Wallet-signed transaction flows submit contract calls and wait for receipts before updating the player-facing flow.",
    "value": "Inventory discovery and transaction completion have explicit states, keeping ownership-dependent gameplay connected to the service results.",
    "technologies": [
      "Sequence",
      "Embedded Wallets",
      "NFT Inventory",
      "Transaction Signing"
    ]
  },
  {
    "id": "firebase-bridge",
    "title": "Firebase-backed DataChip bridge",
    "challenge": "Coordinate cross-chain transfers without treating retries or an unconfirmed transaction as a completed transfer.",
    "implementation": "I implemented Unity bridge flows for route balances, ERC-1155 approval, and transfer requests, alongside a Firebase-backed relay using transactional state, receipt checks, route validation, and idempotent retry/recovery.",
    "value": "The implementation coordinates destination mint and origin burn through tracked relay states. Production rollout and runtime validation are distinct from implementation completion.",
    "technologies": [
      "Firebase",
      "Node.js",
      "ERC-1155",
      "Sequence",
      "REST APIs"
    ]
  },
  {
    "id": "xsolla-commerce",
    "title": "Xsolla purchases & reward fulfillment",
    "challenge": "Translate external payment notifications into the correct in-game inventory and rewards without duplicate fulfillment.",
    "implementation": "I integrated the Xsolla shop gateway with webhook authentication, idempotency locking, Remote Config SKU mapping, bundle handling, reward fulfillment, and purchase-history records.",
    "value": "Purchase validation, SKU resolution, and reward delivery are handled on the service side, with history available for reconciliation.",
    "technologies": [
      "Xsolla",
      "UGS Cloud Code",
      "Remote Config",
      "Player Inventory"
    ]
  }
],
  "invaders-tower-defense-online": [
  {
    "id": "photon-multiplayer",
    "title": "Photon PUN2 rooms, reconnects & co-op",
    "challenge": "Keep mode-specific room state, player slots, and cooperative waves synchronized across interruptions.",
    "implementation": "I built room/lobby flows for competitive and cooperative modes, synchronized mode/map state, reconnect slot handling, and Master Client migration. Co-op waves use readiness gates, shared Photon time, and Master-owned spawning.",
    "value": "Networking responsibilities extend from room selection into match orchestration and recovery, rather than ending once players connect.",
    "technologies": [
      "Photon PUN2",
      "RPCs",
      "Reconnect & Rejoin",
      "Co-op Waves"
    ]
  },
  {
    "id": "steam-progression",
    "title": "Steam inventory, cosmetics & achievements",
    "challenge": "Connect gameplay outcomes to platform-owned items, unlocks, and ranked progress.",
    "implementation": "I integrated Steam item drops, inventory reads, cosmetic entitlement checks, achievement unlocks, and best-wave leaderboard submissions using Steamworks.",
    "value": "Match outcomes feed player progression and platform services. Inventory ownership determines which cosmetic options the player can use.",
    "technologies": [
      "Steamworks",
      "Steam Inventory",
      "Achievements",
      "Leaderboards"
    ]
  },
  {
    "id": "firebase-profiles",
    "title": "Firebase accounts & player statistics",
    "challenge": "Persist player identity and progression while coordinating authentication with online gameplay.",
    "implementation": "I built Firebase Auth sign-in/registration flows and Realtime Database persistence for player statistics, win/ELO aggregates, faction statistics, and top-player data, with initialization and error handling.",
    "value": "Account and statistics services connect the player profile to Photon session flows and competitive progress.",
    "technologies": [
      "Firebase Auth",
      "Realtime Database",
      "Photon PUN2",
      "Player Profiles"
    ]
  },
  {
    "id": "ai-performance",
    "title": "Strategic opponents & runtime efficiency",
    "challenge": "Make AI opponents react to economic pressure and lane geometry while handling frequent projectile activity.",
    "implementation": "I built adaptive decision modes for defense, income growth, and offensive pressure, with tower placement and invader-send scoring. Tower systems prewarm and reuse projectile pools; splash attacks use cached references and non-allocating overlap queries.",
    "value": "The implementation combines decision-making depth with targeted allocation reductions, without relying on an unmeasured frame-rate claim.",
    "technologies": [
      "Adaptive AI",
      "Waypoint Lanes",
      "Object Pooling",
      "NonAlloc Physics"
    ]
  }
],
  "merge-tactics-autobattler": [
    {
      id: "cloud-backend",
      title: "PlayFab client services & Azure backend",
      challenge: "Keep game rules and player progression behind a consistent client–server boundary.",
      implementation: "I built typed Unity services for PlayFab CloudScript and the Azure Functions backend for campaign profiles, economy, runs, drafts, rewards, and combat operations.",
      value: "The Unity client consumes structured results while the backend validates operations and persists authoritative campaign state.",
      technologies: ["PlayFab CloudScript", "Azure Functions", "C#", "REST APIs"],
    },
    {
      id: "economy-progression",
      title: "Economy, crafting & progression",
      challenge: "Handle repeated requests and stale client state without treating each retry as a new purchase or reward.",
      implementation: "I implemented currencies, inventory, timed Data Chips, crafting, and upgrades using request IDs, authoritative snapshots, revision checks, and mutation retries.",
      value: "Progression supports wallet-independent play, with explicit reconciliation when client and server revisions differ.",
      technologies: ["Player Economy", "Inventory", "Idempotent Requests", "Revision Checks"],
    },
    {
      id: "wallet-proofs",
      title: "Privy authentication & wallet linking",
      challenge: "Connect an embedded wallet to the authenticated player through a verifiable ownership flow.",
      implementation: "I integrated Privy sign-in and wallet readiness, signed challenge payloads, server-side proof validation, and player-linked wallet registration.",
      value: "Authentication, wallet readiness, and proof validation are separate steps with explicit client and backend responsibilities.",
      technologies: ["Privy", "Embedded Wallets", "Signed Proofs", "Web3"],
    },
    {
      id: "leaderboards-rewards",
      title: "Validated leaderboards & on-chain rewards",
      challenge: "Base competitive rankings on validated runs and keep asynchronous transaction states consistent.",
      implementation: "I built run validation, best-score tracking, tie ordering, and replay protection for score submissions. An Initia adapter handles score reads, authorized transaction submission, receipt polling, and persisted pending states.",
      value: "The game can distinguish submitted, pending, and confirmed results rather than treating a transaction request as a completed reward.",
      technologies: ["Leaderboard API", "PlayFab", "Initia", "Transaction Reconciliation"],
    },
    {
      id: "game-loop",
      title: "Game loop, combat & bot decisions",
      challenge: "Coordinate preparation, combat, drafting, and rewards without coupling the simulation to its visual presentation.",
      implementation: "I built explicit game-loop states, preparation commands, combat resolution, event-driven transitions, ScriptableObject balance data, and weighted bot decisions.",
      value: "All game development is my responsibility; art is supplied separately. The game is playable and preparing for release.",
      technologies: ["Unity", "C#", "State Machines", "Bot AI", "ScriptableObjects"],
    },
  ],
};
