import type { Project } from "./types";
import { videoReel } from "./videos";

export const projects: Project[] = [
  {
    slug: "invaders-tower-defense-online",
    title: "Invaders Tower Defense Online",
    summary:
      "Online tower defense game shipped on Steam - Unity/C# development covering gameplay systems, online features, build delivery, and production validation.",
    problem:
      "An online tower defense game needed stable gameplay systems, reliable client builds, and a delivery pipeline that could ship to Steam without regressions.",
    solution:
      "Built and maintained Unity/C# gameplay systems including tower logic, wave management, and online interactions. Contributed to build validation, QA, and production delivery across the release cycle.",
    role:
      "Unity/C# developer responsible for gameplay systems, build validation, QA, and production delivery for the Steam release.",
    tools: [
      "Unity",
      "C#",
      "Steam",
      "Online multiplayer",
      "Build validation",
      "QA",
    ],
    company: "Sagui Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/invaders-tower-defense-online/gameplay.png",
        alt: "Invaders Tower Defense Online - isometric tower defense gameplay",
        caption: "Invaders Tower Defense Online: isometric tower defense with online multiplayer, shipped on Steam.",
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
      "Delivered a shipped Steam title with stable gameplay systems across the full release cycle.",
      "Maintained build reliability and QA coverage from development through production.",
      "Contributed Unity/C# gameplay logic for towers, waves, and online player interactions.",
    ],
    tags: ["Unity", "Steam", "Tower Defense", "Online"],
    category: "Shipped Game",
    featured: true,
  },
  {
    slug: "data2073-multiplayer-liveops",
    title: "Data2073 Battle Deck - Multiplayer & LiveOps",
    summary:
      "Server-authoritative multiplayer strategy game shipped across Epic Games Store and Google Play: Unity Netcode, dedicated-server hosting, UGS Matchmaker, and live-service operations.",
    problem:
      "Data2073 needed a rock-solid server-authoritative multiplayer experience across PC and mobile platforms while migrating hosting providers, scaling matchmaking, and maintaining zero-regression game state across updates.",
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
      "Dedicated Servers",
      "Gameye",
      "REST APIs",
      "Performance Profiling",
      "Multi-platform QA",
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
      "Architected dedicated-server multiplayer flows preserving gameplay deterministic state and Unity Netcode stability.",
      "Maintained reliable matchmaking queues, lobby allocation, and session recovery across cross-platform mobile and PC builds.",
      "Delivered multiplatform build validation, memory profiling, and automated QA checks for live production updates.",
    ],
    tags: ["Unity", "Multiplayer", "Netcode", "LiveOps", "Dedicated Servers"],
    category: "Shipped Game",
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
      "Delivered stable tower defense gameplay with expandable wave and targeting systems.",
      "Iterated on balance parameters through QA and playtesting cycles.",
      "Maintained clean Unity/C# architecture across the project lifecycle.",
    ],
    tags: ["Unity", "C#", "Tower Defense"],
    category: "Shipped Game",
    featured: true,
  },
  {
    slug: "merge-tactics-autobattler",
    title: "Merge Tactics - Systems & Bot AI",
    summary:
      "Unity/C# systems for a PvE auto-battler: event-driven architecture, clean game-loop states, backend-ready reward flows, ScriptableObject balance assets, and weighted bot AI.",
    problem:
      "A new auto-battler needed a solid technical foundation from day one: game state cleanly separated from views, predictable loop phases, backend-ready reward flows, and bot behavior that felt intentional rather than random.",
    solution:
      "Designed a server-authoritative, event-driven C# architecture with a MergeBus event wrapper, core interfaces, GameLoopManager states, preparation commands, combat snapshots, UI shell, ScriptableObject balance assets, and a weighted bot-evaluation model with card value, placement score, effect value, recycling, and difficulty tuning.",
    role:
      "Unity/C# systems engineer responsible for game architecture, gameplay loop design, bot AI behavior, backend integration direction, and validation.",
    tools: [
      "Unity",
      "C#",
      "ScriptableObjects",
      "Event-driven architecture",
      "Bot AI",
      "PlayFab CloudScript",
      "Azure Functions",
      "Android builds",
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
    links: [],
    results: [
      "Established a modular architecture with pure C# game state and clean MonoBehaviour view/binding separation - easy to extend without regression.",
      "Implemented a weighted bot AI model with tunable card value, placement score, effect value, recycling, and difficulty parameters.",
      "Defined backend and Android validation paths for wallet proof, reward flows, and cloud function handoffs.",
    ],
    tags: ["Unity", "C#", "Bot AI", "Architecture"],
    category: "Systems Case Study",
    featured: true,
  },
  {
    slug: "data2073-web3-nft",
    title: "Data2073 Cloud & Service Integration",
    summary:
      "Secure cloud function integrations, account service contracts, player-facing UI states, and robust retry logic across live client and server layers.",
    problem:
      "Connected game services require resilient architectures: user authentication, inventory validation, reward distribution, and state consistency must stay dependable across varied network conditions.",
    solution:
      "Implemented Unity UI states, REST service wrappers, DTO contracts, and resilient retry logic connected to cloud functions and backend service endpoints.",
    role:
      "Unity/backend integration engineer working across C# services, API contracts, UI state stability, and QA validation.",
    tools: [
      "Unity",
      "C#",
      "REST APIs",
      "Firebase Functions",
      "PlayFab",
      "Azure Functions",
      "DTO Contracts",
      "Network Validation",
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
      "Built robust Unity service wrappers handling API calls, state validation, retry paths, and user feedback.",
      "Connected backend cloud functions to Unity client state for secure inventory and progress synchronization.",
      "Delivered QA-validated, production-safe service code across mobile and desktop runtimes.",
    ],
    tags: ["Unity", "C#", "Cloud Services", "LiveOps"],
    category: "Integration Case Study",
    featured: false,
  },
  {
    slug: "bright-shooter",
    title: "Bright Shooter",
    summary:
      "A bullet-hell shooter built in Unity/C# - gameplay systems, projectile logic, enemy patterns, and player feedback loops.",
    problem:
      "A bullet-hell shooter requires precise projectile systems, readable enemy patterns, tight player feedback, and frame-stable performance under heavy object counts.",
    solution:
      "Built Unity/C# systems for projectile spawning and pooling, enemy attack patterns, player hit detection, visual feedback, and performance profiling to keep the experience stable under load.",
    role: "Unity/C# developer responsible for core gameplay systems, projectile architecture, and performance.",
    tools: ["Unity", "C#", "Object pooling", "Physics", "Performance profiling"],
    company: "Bright Games",
    year: "2024-2025",
    images: [
      {
        type: "image",
        src: "/projects/bright-shooter/gameplay.png",
        alt: "Bright Shooter - bullet-hell overhead shooter with dense projectile patterns",
        caption: "Bright Shooter: bullet-hell gameplay with object-pooled projectile systems and frame-stable performance.",
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
      "Implemented a stable projectile system using object pooling to maintain performance at high bullet counts.",
      "Built readable enemy attack patterns with configurable parameters for difficulty tuning.",
      "Delivered tight player feedback loops with visual and audio cues validated through playtesting.",
    ],
    tags: ["Unity", "C#", "Shooter", "Performance"],
    category: "Game Project",
    featured: true,
  },
  {
    slug: "toy-soldiers-fps",
    title: "Toy Soldiers FPS",
    summary:
      "A first-person shooter built in Unity/C# - player controller, weapon systems, AI enemies, and game loop from concept to playable build.",
    problem:
      "A FPS game needs a responsive player controller, reliable weapon feel, and AI enemies that present a fair challenge - all working together in a stable, playable build.",
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
      "Used object pooling to maintain stable frame rate across extended play sessions.",
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
    featured: true,
  },
  {
    slug: "espirito-de-luta-fighting-game",
    title: "Espírito de Luta",
    summary:
      "A 2.5D fighting game built in Unity/C# featuring character combat state machines, frame-accurate hitbox/hurtbox collision, input buffering, and animation event synchronization.",
    problem:
      "Fighting games demand frame-accurate precision, deterministic state transitions, responsive input handling, and reliable hit validation to ensure attacks feel punchy and fair without phantom hits or dropped combos.",
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
      "Implemented frame-accurate active hitboxes and hurtboxes synchronized via animation events for crisp combat feedback.",
      "Created an input buffer queue that captures rapid player inputs and executes combos smoothly without missed button presses.",
      "Delivered a complete fighting match loop: intro, round management, health depletion, knockdown/KO detection, and victory camera.",
    ],
    tags: ["Unity", "C#", "Fighting Game", "Combat Systems", "Animation Events"],
    category: "Gameplay Prototype",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
