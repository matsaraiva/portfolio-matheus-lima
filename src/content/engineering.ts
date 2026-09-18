export const engineeringCategories = ["All", "Gameplay & AI", "Multiplayer & Services", "Cloud & LiveOps", "Web3 & Commerce", "Performance & Delivery"] as const;
export type EngineeringCategory = (typeof engineeringCategories)[number];

export const serviceCapabilities = [
  {
    "title": "Web3, wallets & commerce",
    "context": "Battle Deck + Merge Tactics",
    "description": "Sequence inventory and transactions, Privy wallet proofs, Firebase bridge services, Xsolla fulfillment, and Initia reward reconciliation.",
    "tags": [
      "Sequence",
      "Privy",
      "Web3",
      "Xsolla",
      "Initia"
    ]
  },
  {
    "title": "Cloud, APIs & LiveOps",
    "context": "Battle Deck + Merge Tactics + ITDO",
    "description": "UGS configuration, telemetry and rankings; PlayFab/Azure game services and economy; Firebase authentication and player-stat persistence.",
    "tags": [
      "UGS",
      "Cloud Code",
      "PlayFab",
      "Azure",
      "Firebase",
      "Leaderboard APIs"
    ]
  },
  {
    "title": "Multiplayer & platform delivery",
    "context": "Studio + independent game development",
    "description": "Unity Netcode and Photon PUN2 multiplayer, Steam inventory and progression, and game delivery across Steam, Epic Games Store, and Google Play.",
    "tags": [
      "Unity Netcode",
      "Photon PUN2",
      "Steam Items",
      "Steam",
      "Epic Games Store",
      "Google Play"
    ]
  }
] as const;

export const engineeringStories = [
  {
    "id": "multiplayer-sessions",
    "title": "Multiplayer & Server Validation",
    "project": "Data2073 Battle Deck",
    "studio": "Osten Games",
    "category": "Multiplayer & Services",
    "contribution": "I connected multiplayer session entry to player identity, mode capacity, and deck validation, including NFT-backed inventory.",
    "tags": [
      "Unity Netcode",
      "Unity Transport",
      "UGS Matchmaker"
    ],
    "image": "/projects/data2073-official/playstore-2.png",
    "href": "/projects/data2073-multiplayer-liveops/#multiplayer-sessions",
    "action": "Explore the session systems"
  },
  {
    "id": "wallet-inventory",
    "title": "Wallets & Multi-chain Assets",
    "project": "Data2073 Battle Deck",
    "studio": "Osten Games",
    "category": "Web3 & Commerce",
    "contribution": "I integrated Sequence wallets, multi-chain NFT inventory, signed transactions, and receipt handling for player asset flows.",
    "tags": [
      "Sequence",
      "Wallets",
      "NFT Inventory"
    ],
    "image": "/projects/data2073-official/playstore-4.png",
    "href": "/projects/data2073-web3-nft/#sequence-wallets",
    "action": "Explore wallet integration"
  },
  {
    "id": "liveops",
    "title": "Leaderboards & LiveOps",
    "project": "Data2073 Battle Deck",
    "studio": "Osten Games",
    "category": "Cloud & LiveOps",
    "contribution": "I built UGS leaderboard APIs, Remote Config loading, and analytics flows connecting competitive play to live-service operations.",
    "tags": [
      "UGS Cloud Code",
      "Leaderboards",
      "Remote Config",
      "Analytics"
    ],
    "image": "/projects/data2073-official/playstore-1.png",
    "href": "/projects/data2073-multiplayer-liveops/#liveops",
    "action": "See the LiveOps layer"
  },
  {
    "id": "xsolla",
    "title": "Payments to Player Rewards",
    "project": "Data2073 Battle Deck",
    "studio": "Osten Games",
    "category": "Web3 & Commerce",
    "contribution": "I connected Xsolla purchase notifications to inventory rewards through authenticated webhooks, duplicate-request handling, and SKU mapping.",
    "tags": [
      "Xsolla",
      "Cloud Code",
      "Inventory"
    ],
    "image": "/projects/data2073-official/playstore-3.png",
    "href": "/projects/data2073-web3-nft/#xsolla-commerce",
    "action": "See the purchase pipeline"
  },
  {
    "id": "firebase-bridge",
    "title": "Cross-chain Bridge Services",
    "project": "Data2073 Battle Deck",
    "studio": "Osten Games",
    "category": "Web3 & Commerce",
    "contribution": "I built the Unity bridge flow and Firebase-backed relay with approval handling, receipt validation, and retry/recovery states.",
    "tags": [
      "Firebase",
      "REST APIs",
      "ERC-1155",
      "Sequence"
    ],
    "image": "/projects/data2073-official/playstore-4.png",
    "href": "/projects/data2073-web3-nft/#firebase-bridge",
    "action": "Explore the bridge implementation"
  },
  {
    "id": "merge-backend",
    "title": "Game Backend & Player Economy",
    "project": "Merge Tactics",
    "studio": "Osten Games",
    "category": "Cloud & LiveOps",
    "contribution": "I built the PlayFab/Azure backend and client services for progression, crafting, inventory, and revision-aware economy operations.",
    "tags": [
      "PlayFab",
      "Azure Functions",
      "Economy APIs"
    ],
    "image": "/projects/merge-tactics-autobattler/gameplay.png",
    "href": "/projects/merge-tactics-autobattler/#cloud-backend",
    "action": "Explore the backend"
  },
  {
    "id": "merge-wallet",
    "title": "Wallet Identity & Ranked Rewards",
    "project": "Merge Tactics",
    "studio": "Osten Games",
    "category": "Web3 & Commerce",
    "contribution": "I integrated Privy wallets and signed proofs, plus validated leaderboards and Initia transaction reconciliation for ranked reward flows.",
    "tags": [
      "Privy",
      "Leaderboard API",
      "Initia",
      "Web3"
    ],
    "image": "/projects/merge-tactics-autobattler/gameplay.png",
    "href": "/projects/merge-tactics-autobattler/#wallet-proofs",
    "action": "Explore identity and rewards"
  },
  {
    "id": "merge-game",
    "title": "Complete Game Development",
    "project": "Merge Tactics",
    "studio": "Osten Games",
    "category": "Gameplay & AI",
    "contribution": "I own all game development except art: game loop, combat, bot decisions, player-facing UI, backend services, progression, and build validation.",
    "tags": [
      "Unity",
      "C#",
      "Bot AI",
      "ScriptableObjects"
    ],
    "image": "/projects/merge-tactics-autobattler/gameplay.png",
    "href": "/projects/merge-tactics-autobattler/#game-loop",
    "action": "Inside Merge Tactics"
  },
  {
    "id": "itdo-photon",
    "title": "Rooms, Reconnects & Co-op Waves",
    "project": "Invaders Tower Defense Online",
    "studio": "Sagui Games",
    "category": "Multiplayer & Services",
    "contribution": "I built Photon PUN2 room flows, reconnect handling, host migration, and synchronized cooperative waves using shared network time.",
    "tags": [
      "Photon PUN2",
      "RPCs",
      "Co-op"
    ],
    "image": "/projects/invaders-tower-defense-online/steam-gameplay-multiplayer.jpg",
    "href": "/projects/invaders-tower-defense-online/#photon-multiplayer",
    "action": "Explore online gameplay"
  },
  {
    "id": "itdo-steam",
    "title": "Steam Items & Player Progression",
    "project": "Invaders Tower Defense Online",
    "studio": "Sagui Games",
    "category": "Performance & Delivery",
    "contribution": "I connected gameplay to Steam inventory drops, cosmetic ownership checks, achievements, and best-wave leaderboards, with Firebase-backed player stats.",
    "tags": [
      "Steamworks",
      "Steam Inventory",
      "Firebase",
      "Leaderboards"
    ],
    "image": "/projects/invaders-tower-defense-online/official-cover.png",
    "href": "/projects/invaders-tower-defense-online/#steam-progression",
    "action": "See Steam integration"
  },
  {
    "id": "itdo-ai",
    "title": "Adaptive AI & Pooled Projectiles",
    "project": "Invaders Tower Defense Online",
    "studio": "Sagui Games",
    "category": "Gameplay & AI",
    "contribution": "I built economy-aware opponents that score tower placement and invader sends, alongside pooled bullets and non-allocating splash queries.",
    "tags": [
      "Adaptive AI",
      "Object Pooling",
      "C#"
    ],
    "image": "/projects/invaders-tower-defense-online/steam-gameplay-coop.jpg",
    "href": "/projects/invaders-tower-defense-online/#ai-performance",
    "action": "Explore AI and performance"
  },
  {
    "id": "fly-game",
    "title": "Configurable Tower Defense",
    "project": "Fly TD",
    "studio": "Sagui Games",
    "category": "Gameplay & AI",
    "contribution": "I developed wave spawning, tower targeting, and ScriptableObject-based balance settings for iterative playtesting.",
    "tags": [
      "Unity",
      "C#",
      "ScriptableObjects"
    ],
    "image": "/projects/fly-td/gameplay.png",
    "href": "/projects/fly-td/",
    "action": "See the gameplay systems"
  },
  {
    "id": "bright-performance",
    "title": "Projectile Systems",
    "project": "Bright Shooter",
    "studio": "Bright Games",
    "category": "Performance & Delivery",
    "contribution": "I built pooled projectile systems and configurable enemy patterns, supported by performance profiling.",
    "tags": [
      "Unity",
      "Object Pooling",
      "Profiling"
    ],
    "image": "/projects/bright-shooter/gameplay.png",
    "href": "/projects/bright-shooter/",
    "action": "Explore the projectile system"
  }
] satisfies { id: string; title: string; project: string; studio: string; category: Exclude<EngineeringCategory, "All">; contribution: string; tags: string[]; image: string; href: string; action: string }[];

export const flagshipSlugs = ["data2073-multiplayer-liveops", "invaders-tower-defense-online", "merge-tactics-autobattler"];

