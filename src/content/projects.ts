import type { Project } from "./types";
import { videoReel } from "./videos";

export const projects: Project[] = [
  {
    slug: "invaders-tower-defense-online",
    title: "Invaders Tower Defense Online",
    summary:
      "Online tower defense shipped on Steam, with Photon PUN2 multiplayer, synchronized co-op waves, Steam items and achievements, Firebase player profiles, and adaptive opponents.",
    problem:
      "An online tower defense game needed dependable gameplay systems, client builds, and a delivery pipeline that could ship to Steam.",
    solution:
      "Built and maintained Unity/C# gameplay systems including tower logic, wave management, and online interactions. Contributed to build validation, QA, and production delivery across the release cycle.",
    role:
      "Unity/C# developer responsible for gameplay systems, build validation, QA, and production delivery for the Steam release.",
    tools: [
      "Unity",
      "C#",
      "Photon PUN2",
      "Steamworks",
      "Steam Inventory",
      "Steam Leaderboards",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Object Pooling"
    ],
    company: "Sagui Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/invaders-tower-defense-online/official-cover.png",
        alt: "Official cover artwork for Invaders Tower Defense Online",
        caption: "Official cover artwork for Invaders Tower Defense Online.",
        provider: "local",
      },
      {
        type: "image",
        src: "/projects/invaders-tower-defense-online/steam-gameplay-coop.jpg",
        alt: "Official Steam gameplay screenshot showing high-wave cooperative fortress defense with laser towers and barrier walls",
        caption: "Official Steam gameplay: Co-op high-wave fortress defense with pooled laser towers and barricades.",
        provider: "local",
      },
      {
        type: "image",
        src: "/projects/invaders-tower-defense-online/steam-gameplay-multiplayer.jpg",
        alt: "Official Steam gameplay screenshot showing 1v1 competitive multiplayer lane defense with synchronized invader waves",
        caption: "Official Steam gameplay: Competitive 1v1 online match featuring dual lane defenses and invader routing.",
        provider: "local",
      },
      {
        type: "image",
        src: "/projects/invaders-tower-defense-online/steam-gameplay-chessboard.jpg",
        alt: "Official Steam gameplay screenshot showing custom chessboard arena with specialized defense towers",
        caption: "Official Steam gameplay: Themed arena showing strategic tower placement and path blocking.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=YscTtrmhC30&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=2",
        alt: "Invaders Tower Defense Online - teaser trailer",
        caption: "Official teaser for Invaders Tower Defense Online, shipped on Steam.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Steam page",
        href: "https://store.steampowered.com/app/2826540/Invaders_Tower_Defense_Online/",
      },
    ],
    results: [
      "Shipped on Steam with Photon PUN2 multiplayer, synchronized co-op waves, and reconnect handling.",
      "Integrated Steamworks inventory drops, cosmetic gating, achievements, and best-wave leaderboards.",
      "Built Firebase Auth and Realtime Database persistence for player profiles, stats, and ELO ratings.",
    ],
    tags: ["Unity", "Steam", "Tower Defense", "Online"],
    category: "Shipped Game",
    status: "Released",
    caseStudy: {
      implementation: [
        "I built tower logic and wave management in Unity/C#.",
        "I contributed online interactions, build validation, and QA across the delivery cycle.",
      ],
      ownership: [
        "My role covered gameplay systems, build validation, QA, and production delivery as a Unity/C# developer.",
      ],
      constraints: [
        "I worked on an online game that had to support Steam release delivery and ongoing build validation.",
      ],
    },
    featured: true,
  },
  {
    slug: "data2073-multiplayer-liveops",
    title: "Data2073 Battle Deck - Multiplayer & LiveOps",
    summary:
      "Server-authoritative multiplayer strategy game shipped across Epic Games Store and Google Play: Unity Netcode, dedicated-server hosting, UGS Matchmaker, and live-service operations.",
    problem:
      "Data2073 needed a server-authoritative multiplayer experience across PC and mobile platforms while handling hosting, matchmaking, and game-state changes across updates.",
    solution:
      "Engineered Unity/C# multiplayer systems using Unity Netcode and Unity Transport, integrated UGS Matchmaker and Lobbies, structured headless dedicated server orchestration, and established automated build validation and QA pipelines across Epic Games Store and Google Play.",
    role:
      "C#/Unity multiplayer engineer responsible for netcode integration, dedicated server hosting, UGS matchmaking, LiveOps pipelines, performance profiling, and production QA.",
    tools: [
      "Unity",
      "C#",
      "Unity Netcode",
      "Unity Transport",
      "UGS Matchmaker",
      "UGS Cloud Code",
      "UGS Leaderboards",
      "Remote Config",
      "UGS Analytics",
      "Cloud Save",
      "Gameye",
      "Addressables"
    ],
    company: "Data2073 / Osten Games",
    year: "2025-2026",
    images: [
      {
        type: "image",
        src: "/projects/data2073-official/playstore-2.png",
        alt: "Data2073 - official Google Play battlefield screenshot",
        caption: "Official Google Play screenshot for DATA2073: Battle Deck, showing tactical battlefield play.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=1",
        alt: "Data2073 trailer - multiplayer strategy card battler",
        caption: "Data2073 official trailer showcasing online multiplayer strategy and competitive tournament battles.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Epic Games Store",
        href: "https://store.epicgames.com/pt-BR/p/data2073-9d83d4",
      },
    ],
    results: [
      "Architected dedicated-server multiplayer flows around Unity Netcode and Unity Transport.",
      "Worked on matchmaking queues, lobby allocation, and session recovery across mobile and PC builds.",
      "Contributed multiplatform build validation, memory profiling, and QA checks for production updates.",
    ],
    tags: ["Unity", "Multiplayer", "Netcode", "LiveOps", "Dedicated Servers"],
    category: "Shipped Game",
    status: "Released",
    caseStudy: {
      implementation: [
        "I worked with Unity Netcode, Unity Transport, UGS Matchmaker and Lobbies, and headless dedicated-server orchestration.",
        "I contributed build validation, QA, and performance profiling to the production workflow.",
      ],
      ownership: [
        "My role covered netcode integration, dedicated-server hosting, matchmaking, LiveOps pipelines, profiling, and QA as a C#/Unity multiplayer engineer.",
      ],
      constraints: [
        "I worked across PC and mobile builds where online sessions coordinate clients, matchmaking, and dedicated servers.",
      ],
    },
    featured: true,
  },
  {
    slug: "fly-td",
    title: "Fly TD",
    summary:
      "Unity/C# tower defense game - gameplay systems, enemy wave logic, and build delivery as part of Matheus's game portfolio.",
    problem:
      "A tower defense game needed clean gameplay architecture: wave management, enemy paths, tower targeting, and balance parameters all had to be maintainable and expandable.",
    solution:
      "Developed Unity/C# gameplay systems covering enemy wave spawning, tower targeting logic, balance tuning via ScriptableObjects, and iterative QA across build cycles.",
    role: "Unity/C# developer working on gameplay systems, wave logic, balance, and QA.",
    tools: ["Unity", "C#", "ScriptableObjects", "Build validation", "QA"],
    company: "Sagui Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/fly-td/gameplay.png",
        alt: "Fly TD - aerial tower defense with flying enemy units",
        caption: "Fly TD: tower defense gameplay with aerial enemies, tower targeting systems, and configurable wave logic.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=lkLzyP8x9qo&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=6",
        alt: "Fly TD - tower defense gameplay demo",
        caption: "Fly TD gameplay demonstration from the portfolio reel.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Portfolio playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Delivered tower defense gameplay with wave and targeting systems.",
      "Iterated on balance parameters through QA and playtesting cycles.",
      "Maintained clean Unity/C# architecture across the project lifecycle.",
    ],
    tags: ["Unity", "C#", "Tower Defense"],
    category: "Game Project",
    status: "Game Project",
    featured: false,
  },
  {
    slug: "merge-tactics-autobattler",
    title: "Merge Tactics",
    summary:
      "A playable Unity/C# auto-battler preparing for release. I built all game development except art: gameplay, combat, bots, UI, PlayFab/Azure services, economy, wallets, and leaderboards.",
    problem:
      "A new auto-battler needed a solid technical foundation from day one: game state cleanly separated from views, predictable loop phases, backend-ready reward flows, and bot behavior that felt intentional rather than random.",
    solution:
      "Owned the Unity/C# development of an event-driven architecture with a MergeBus event wrapper, core interfaces, GameLoopManager states, preparation commands, combat snapshots, UI shell, ScriptableObject balance assets, and a weighted bot-evaluation model with card value, placement score, effect value, recycling, and difficulty tuning. Art was supplied separately.",
    role:
      "Unity/C# developer responsible for all game development, including architecture, gameplay loop design, bot AI behavior, backend integration direction, and validation; art was handled separately.",
    tools: [
      "Unity",
      "C#",
      "PlayFab CloudScript",
      "Azure Functions",
      "Privy",
      "Initia",
      "Leaderboard APIs",
      "Player Economy",
      "ScriptableObjects",
      "Bot AI",
      "Android"
    ],
    company: "Osten Games",
    year: "2025-2026",
    images: [
      {
        type: "image",
        src: "/projects/merge-tactics-autobattler/gameplay.png",
        alt: "Merge Tactics - auto-battler board with card merging and unit combat",
        caption: "Merge Tactics: event-driven auto-battler with weighted bot AI, merge board, and backend-ready reward flows.",
        provider: "local",
      },
    ],
    videos: [],
    links: [
      {
        label: "Google Play · Upcoming release",
        href: "https://play.google.com/store/apps/details?id=com.ostengames.data2073_merge",
      },
    ],
    results: [
      "Owned the modular architecture with pure C# game state and MonoBehaviour view/binding separation.",
      "Implemented the weighted bot AI model with tunable card value, placement score, effect value, recycling, and difficulty parameters.",
      "Defined backend and Android validation paths for wallet proof, reward flows, and cloud function handoffs while owning the rest of the game development.",
    ],
    tags: ["Unity", "C#", "Bot AI", "Architecture"],
    category: "Playable · Upcoming release",
    status: "In Development",
    caseStudy: {
      implementation: [
        "I separated pure C# game state from MonoBehaviour presentation with a MergeBus event wrapper and GameLoopManager states.",
        "I built a weighted bot evaluation model using card value, placement score, effect value, recycling, and difficulty parameters.",
        "I used ScriptableObject assets for balance configuration.",
      ],
      ownership: [
        "I own all game development on the project, including game architecture, loop design, bot behavior, backend integration direction, and validation; art is supplied separately.",
      ],
      constraints: [
        "I designed the system around distinct game-loop phases, configurable balance values, and bot decisions tunable for difficulty.",
      ],
    },
    featured: true,
  },
  {
    slug: "data2073-web3-nft",
    title: "Data2073 Cloud & Service Integration",
    summary:
      "Web3 wallets, multi-chain NFT inventory, Firebase-backed bridge services, and Xsolla purchase fulfillment connected to Unity gameplay and player-facing states.",
    problem:
      "Connected game services require resilient architectures: user authentication, inventory validation, reward distribution, and state consistency must stay dependable across varied network conditions.",
    solution:
      "Implemented Unity UI states, REST service wrappers, DTO contracts, and retry logic connected to cloud functions and backend service endpoints. The integration scope also covered wallet authentication, transaction signing, asset flows, and player-facing state for Web3 features.",
    role:
      "Unity/backend integration engineer working across C# services, API contracts, wallet and asset flows, UI state, and QA validation.",
    tools: [
      "Unity",
      "C#",
      "Sequence",
      "Embedded Wallets",
      "NFT Inventory",
      "Firebase",
      "Node.js",
      "Xsolla",
      "UGS Cloud Code",
      "REST APIs",
      "ERC-1155"
    ],
    company: "Data2073 / Osten Games",
    year: "2025-2026",
    images: [
      {
        type: "image",
        src: "/projects/data2073-official/playstore-4.png",
        alt: "Data2073 - official Google Play digital assets screenshot",
        caption: "Official Google Play screenshot for DATA2073: Battle Deck, highlighting digital assets and player progression.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=1",
        alt: "Data2073 gameplay trailer",
        caption: "Data2073 gameplay showcasing tactical battlefield encounters and live service systems.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Epic Games Store",
        href: "https://store.epicgames.com/pt-BR/p/data2073-9d83d4",
      },
    ],
    results: [
      "Built Unity service wrappers handling API calls, state validation, retry paths, and user feedback.",
      "Connected backend cloud functions to Unity client state for inventory and progress synchronization.",
      "Implemented wallet authentication, transaction signing, and player-facing asset flow states for Web3 features.",
      "Delivered service code validated through QA across mobile and desktop runtimes.",
    ],
    tags: ["Unity", "C#", "Cloud Services", "LiveOps"],
    category: "Integration Case Study",
    status: "Released",
    caseStudy: {
      implementation: [
        "I implemented Unity UI states, REST service wrappers, DTO contracts, cloud functions, and retry paths.",
        "I connected client and backend state for inventory and progress flows.",
      ],
      ownership: [
        "My role covered C# services, API contracts, UI state work, and QA validation as a Unity/backend integration engineer.",
      ],
      constraints: [
        "I designed backend-connected features so client state and user feedback remained understandable across network conditions.",
      ],
    },
    featured: false,
  },
  {
    slug: "bright-shooter",
    title: "Bright Shooter",
    summary:
      "A bullet-hell shooter built in Unity/C# - gameplay systems, projectile logic, enemy patterns, and player feedback loops.",
    problem:
      "A bullet-hell shooter requires precise projectile systems, readable enemy patterns, tight player feedback, and performance attention under heavy object counts.",
    solution:
      "Built Unity/C# systems for projectile spawning and pooling, enemy attack patterns, player hit detection, visual feedback, and performance profiling under load.",
    role: "Unity/C# developer responsible for core gameplay systems, projectile architecture, and performance.",
    tools: ["Unity", "C#", "Object pooling", "Physics", "Performance profiling"],
    company: "Bright Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/bright-shooter/gameplay.png",
        alt: "Bright Shooter - bullet-hell overhead shooter with dense projectile patterns",
        caption: "Bright Shooter: bullet-hell gameplay with object-pooled projectile systems and performance profiling.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=0ud_aYHRu0w&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=3",
        alt: "Bright Shooter - bullet-hell gameplay demo",
        caption: "Bright Shooter gameplay demo from the portfolio reel.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Portfolio playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Implemented a projectile system using object pooling to support high bullet counts.",
      "Built readable enemy attack patterns with configurable parameters for difficulty tuning.",
      "Delivered tight player feedback loops with visual and audio cues validated through playtesting.",
    ],
    tags: ["Unity", "C#", "Shooter", "Performance"],
    category: "Game Project",
    featured: false,
  },
  {
    slug: "toy-soldiers-fps",
    title: "Toy Soldiers FPS",
    summary:
      "A first-person shooter built in Unity/C# - player controller, weapon systems, AI enemies, and game loop from concept to playable build.",
    problem:
      "A FPS game needs a responsive player controller, reliable weapon feel, and AI enemies that present a fair challenge in a playable build.",
    solution:
      "Developed Unity/C# FPS systems including character controller, camera handling, weapon firing and reload logic, basic enemy AI, and a game loop with win/lose states and score tracking.",
    role: "Unity/C# developer responsible for FPS mechanics, weapon systems, enemy AI, and game loop.",
    tools: ["Unity", "C#", "Physics", "AI", "Build validation"],
    company: "Bright Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/toy-soldiers-fps/gameplay.png",
        alt: "Toy Soldiers FPS - first-person shooter with toy soldier aesthetic",
        caption: "Toy Soldiers FPS: first-person shooter with responsive controller, weapon systems, and enemy AI.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=a-db7GFzQi4&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=5",
        alt: "Toy Soldiers FPS - gameplay teaser",
        caption: "Toy Soldiers FPS gameplay teaser from the portfolio reel.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Portfolio playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Delivered a complete FPS gameplay loop from player movement and weapon firing through enemy AI and win/lose states.",
      "Implemented responsive character controller and camera handling that passed playtesting validation.",
      "Built and iterated on enemy AI behavior with configurable difficulty parameters.",
    ],
    tags: ["Unity", "C#", "FPS", "AI"],
    category: "Game Project",
  },
  {
    slug: "bright-runner",
    title: "Bright Runner",
    summary:
      "An endless runner built in Unity/C# - procedural obstacle generation, progressive difficulty, score tracking, and mobile-ready build delivery.",
    problem:
      "An endless runner needs procedural obstacle generation that feels fair and escalates naturally, a responsive player controller for mobile, and a score loop that keeps players engaged.",
    solution:
      "Built Unity/C# systems for procedural level generation, obstacle pooling, speed escalation curves, touch-based player input, and a score/leaderboard loop - validated across Android builds.",
    role: "Unity/C# developer responsible for procedural generation, player input, progression systems, and Android delivery.",
    tools: ["Unity", "C#", "Procedural generation", "Object pooling", "Android builds", "Mobile input"],
    company: "Bright Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/bright-runner/gameplay.png",
        alt: "Bright Runner - endless runner with procedural obstacles",
        caption: "Bright Runner: endless runner with procedural obstacle generation, touch input, and Android build delivery.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=Ree1qJVGJp0&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=4",
        alt: "Bright Runner - endless runner gameplay demo",
        caption: "Bright Runner gameplay demo from the portfolio reel.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Portfolio playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Delivered a complete endless runner loop with procedural obstacle generation, speed escalation, and score tracking.",
      "Implemented touch-based player input validated on Android builds.",
      "Used object pooling as part of the performance approach for extended play sessions.",
    ],
    tags: ["Unity", "C#", "Mobile", "Procedural"],
    category: "Game Project",
  },
  {
    slug: "survival-horror-procedural",
    title: "Survival Horror Procedural",
    summary:
      "First-person survival horror mechanics built in Unity/C#: procedural environment generation, atmospheric lighting, dynamic monster pathfinding, and inventory survival systems.",
    problem:
      "Survival horror games require deep environmental tension, unpredictable procedural layouts, and reliable AI navigation that challenges players without getting stuck in complex geometries.",
    solution:
      "Engineered procedural corridor and room generation algorithms with automated runtime NavMesh surface baking. Implemented stateful monster AI with sight cones, hearing detection, and wandering/stalking states, paired with volumetric lighting and flashlight mechanics.",
    role:
      "Unity/C# developer responsible for procedural level generation, enemy AI behavior, NavMesh baking, and survival horror gameplay mechanics.",
    tools: [
      "Unity",
      "C#",
      "Procedural Generation",
      "NavMesh AI",
      "Atmospheric Lighting",
      "Inventory Systems",
      "State Machine",
    ],
    company: "Independent Project",
    year: "2024",
    images: [
      {
        type: "image",
        src: "/projects/survival-horror/cover.jpg",
        alt: "Survival Horror Procedural - dark Victorian hallway with flashlight and shadowy creature",
        caption: "Survival Horror Procedural: Unity 3D survival horror featuring procedural corridors, dynamic AI pathfinding, and atmospheric horror mechanics.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=IU2-53cEQw4",
        alt: "Survival Horror Procedural gameplay demo",
        caption: "Survival Horror Procedural gameplay demonstration showcasing procedural environment generation and AI pathfinding.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Watch Gameplay Video",
        href: "https://www.youtube.com/watch?v=IU2-53cEQw4",
      },
      {
        label: "Portfolio Playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Engineered procedural layout generation with runtime NavMesh surface baking for seamless AI navigation.",
      "Implemented enemy AI with multi-sensory detection (field of view, hearing sound events, search and pursuit states).",
      "Delivered atmospheric volumetric lighting and flashlight mechanics tuned for psychological horror suspense.",
    ],
    tags: ["Unity", "C#", "Survival Horror", "Procedural", "AI Navigation"],
    category: "Gameplay Prototype",
    featured: false,
  },
  {
    slug: "espirito-de-luta-fighting-game",
    title: "Espírito de Luta",
    summary:
      "A 2.5D fighting game built in Unity/C# featuring character combat state machines, animation-synchronized hitbox/hurtbox collision, input buffering, and animation event integration.",
    problem:
      "Fighting games demand precise state transitions, responsive input handling, and reliable hit validation so attacks can feel readable and fair.",
    solution:
      "Designed and implemented a modular C# combat engine with a Finite State Machine (FSM) governing fighter states (Idle, Walk, Attack, Block, Hitstun, Knockdown, Recovery). Synchronized active hitboxes and hurtboxes with Unity Animation Events, built an input buffer queue to capture combo sequences reliably, and developed a complete match loop with dynamic 2.5D fight camera framing and round logic.",
    role:
      "Lead Gameplay Programmer & Unity Developer responsible for combat architecture, hitbox systems, state machines, animation integration, and fight game loop.",
    tools: [
      "Unity",
      "C#",
      "Combat State Machine (FSM)",
      "Hitbox & Hurtbox System",
      "Animation Events",
      "Input Buffering",
      "2.5D Fight Camera",
      "Game Loop & Round Logic",
    ],
    company: "Independent Project",
    year: "2024",
    images: [
      {
        type: "image",
        src: "/projects/espirito-de-luta/cover.jpg",
        alt: "Espírito de Luta - 2.5D fighting game combat arena and martial arts clash",
        caption: "Espírito de Luta: 2.5D fighting game in Unity featuring custom combat state machine, hitbox systems, and frame data.",
        provider: "local",
      },
    ],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=CF1YK3jZGMM&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=7",
        alt: "Espírito de Luta gameplay video",
        caption: "Gameplay demonstration of Espírito de Luta showing combat animations, health systems, round counter, and fight mechanics.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Watch Gameplay Video",
        href: "https://www.youtube.com/watch?v=CF1YK3jZGMM&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP&index=7",
      },
      {
        label: "Portfolio Playlist",
        href: videoReel.playlistUrl,
      },
    ],
    results: [
      "Built an extensible Finite State Machine in C# governing combat states, transition rules, and recovery windows.",
      "Implemented active hitboxes and hurtboxes synchronized via animation events for combat feedback.",
      "Created an input buffer queue that captures rapid player inputs and executes combos smoothly without missed button presses.",
      "Delivered a complete fighting match loop: intro, round management, health depletion, knockdown/KO detection, and victory camera.",
    ],
    tags: ["Unity", "C#", "Fighting Game", "Combat Systems", "Animation Events"],
    category: "Gameplay Prototype",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
