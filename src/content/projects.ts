import type { Project } from "./types";
import { videoReel } from "./videos";

export const projects: Project[] = [
  {
    slug: "data2073-multiplayer-liveops",
    title: "Data2073 Multiplayer, LiveOps & Hosting Migration",
    summary:
      "Server-authoritative multiplayer, dedicated-server hosting migration, UGS/LiveOps services, matchmaking, and production validation across client and backend layers.",
    problem:
      "Data2073 needed to preserve a stable, server-authoritative multiplayer experience while the hosting strategy, matchmaking allocation, onboarding flows, and build infrastructure all evolved simultaneously.",
    solution:
      "Designed and maintained Unity/C# systems alongside service boundaries, matchmaking/runtime allocation, safe build validation, QA evidence, and documentation that kept player-facing flows stable while backend and hosting pieces changed underneath.",
    role:
      "C#/Unity engineer supporting multiplayer architecture, UGS/LiveOps workflows, backend integration, QA, optimization, and technical troubleshooting across the stack.",
    tools: [
      "Unity",
      "C#",
      "Unity Netcode",
      "Unity Transport",
      "UGS Matchmaker",
      "UGS Cloud Code",
      "Gameye",
      "Headless servers",
      "REST APIs",
      "Immutable X",
    ],
    company: "Data2073 / Osten Games",
    year: "2025–2026",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Data2073 trailer — cross-chain trading card game",
        caption: "Data2073 official trailer. Cross-chain gameplay with weekly tournaments hosted on N3mus and intraVerse.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Epic Games Store",
        href: "https://store.epicgames.com/pt-BR/p/data2073-9d83d4",
      },
      {
        label: "Immutable page",
        href: "https://www.immutable.com/play/data2073",
      },
    ],
    results: [
      "Designed a hosting migration path that preserved the dedicated-server and Unity Netcode model without requiring a gameplay rewrite.",
      "Maintained stable onboarding, deck integrity, server boot reliability, matchmaking allocation, and leaderboard behavior across infrastructure changes.",
      "Delivered build validation, QA checks, and technical documentation that reduced ambiguity at engineering handoffs.",
    ],
    tags: ["Data2073", "Unity", "Multiplayer", "LiveOps"],
    category: "Featured Case Study",
    featured: true,
  },
  {
    slug: "data2073-web3-nft",
    title: "Data2073 Web3 & NFT Integration",
    summary:
      "Wallet-aware Unity flows, NFT ownership validation, blockchain-to-game asset transfer requests, service DTOs, and player-facing UI states across the full client-to-chain integration path.",
    problem:
      "Blockchain game features require more than a button: wallet reads, NFT ownership checks, reward flows, approval detection, backend bridge routes, retry logic, and user-visible state all need to stay coherent and safe across network and chain conditions.",
    solution:
      "Implemented Unity menu states, backend-facing REST wrappers, DTOs, bridge-flow logic, wallet/NFT validation, approval detection, retry paths, and QA evidence around runtime wallet behavior — connected across Unity client, backend cloud functions, and smart-contract endpoints on Immutable X.",
    role:
      "Unity/backend integration engineer working across C# services, Web3 feature design, API implementation, UI flow stability, and QA.",
    tools: [
      "Unity",
      "C#",
      "REST APIs",
      "Firebase Functions",
      "PlayFab",
      "Azure Functions",
      "Immutable X",
      "NFT validation",
      "Smart contracts",
    ],
    company: "Data2073 / Osten Games",
    year: "2025–2026",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Data2073 gameplay — Web3 trading card game on Immutable X",
        caption: "Data2073 gameplay. NFT card ownership, wallet-connected matches, and cross-chain asset flows.",
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
      "Built Unity wallet flows that handle service calls, ownership checks, approval states, retries, and user-facing feedback in a single coherent integration.",
      "Connected backend cloud functions to Unity client state for on-chain asset transfer and reward flows without exposing private keys or unreleased infrastructure details.",
      "Delivered QA-validated, production-safe Web3 feature code across Firebase, PlayFab, and Azure function stacks on Immutable X.",
    ],
    tags: ["Web3", "NFT", "Immutable X", "Unity"],
    category: "Integration Case Study",
    featured: true,
  },
  {
    slug: "invaders-tower-defense-online",
    title: "Invaders Tower Defense Online",
    summary:
      "Online tower defense game shipped on Steam — Unity/C# development covering gameplay systems, online features, build delivery, and production validation.",
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
    company: "Bright Games",
    year: "2024–2025",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=YscTtrmhC30&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Invaders Tower Defense Online — teaser trailer",
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
    slug: "merge-tactics-autobattler",
    title: "Merge Tactics — Systems & Bot AI",
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
    year: "2025–2026",
    images: [],
    videos: [],
    links: [
      {
        label: "Public CV",
        href: "https://flowcv.com/resume/j35ui14ak4tq",
      },
    ],
    results: [
      "Established a modular architecture with pure C# game state and clean MonoBehaviour view/binding separation — easy to extend without regression.",
      "Implemented a weighted bot AI model with tunable card value, placement score, effect value, recycling, and difficulty parameters.",
      "Defined backend and Android validation paths for wallet proof, reward flows, and cloud function handoffs.",
    ],
    tags: ["Unity", "C#", "Bot AI", "Architecture"],
    category: "Systems Case Study",
    featured: true,
  },
  {
    slug: "fly-td",
    title: "Fly TD",
    summary:
      "Unity/C# tower defense game — gameplay systems, enemy wave logic, and build delivery as part of the Bright Games portfolio.",
    problem:
      "A tower defense game needed clean gameplay architecture: wave management, enemy paths, tower targeting, and balance parameters all had to be maintainable and expandable.",
    solution:
      "Developed Unity/C# gameplay systems covering enemy wave spawning, tower targeting logic, balance tuning via ScriptableObjects, and iterative QA across build cycles.",
    role: "Unity/C# developer working on gameplay systems, wave logic, balance, and QA.",
    tools: ["Unity", "C#", "ScriptableObjects", "Build validation", "QA"],
    company: "Bright Games",
    year: "2024–2025",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Fly TD — tower defense gameplay demo",
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
  },
  {
    slug: "bright-shooter",
    title: "Bright Shooter",
    summary:
      "A bullet-hell shooter built in Unity/C# — gameplay systems, projectile logic, enemy patterns, and player feedback loops.",
    problem:
      "A bullet-hell shooter requires precise projectile systems, readable enemy patterns, tight player feedback, and frame-stable performance under heavy object counts.",
    solution:
      "Built Unity/C# systems for projectile spawning and pooling, enemy attack patterns, player hit detection, visual feedback, and performance profiling to keep the experience stable under load.",
    role: "Unity/C# developer responsible for core gameplay systems, projectile architecture, and performance.",
    tools: ["Unity", "C#", "Object pooling", "Physics", "Performance profiling"],
    company: "Bright Games",
    year: "2024–2025",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=0ud_aYHRu0w&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Bright Shooter — bullet-hell gameplay demo",
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
  },
  {
    slug: "toy-soldiers-fps",
    title: "Toy Soldiers FPS",
    summary:
      "A first-person shooter built in Unity/C# — player controller, weapon systems, AI enemies, and game loop from concept to playable build.",
    problem:
      "A FPS game needs a responsive player controller, reliable weapon feel, and AI enemies that present a fair challenge — all working together in a stable, playable build.",
    solution:
      "Developed Unity/C# FPS systems including character controller, camera handling, weapon firing and reload logic, basic enemy AI, and a game loop with win/lose states and score tracking.",
    role: "Unity/C# developer responsible for FPS mechanics, weapon systems, enemy AI, and game loop.",
    tools: ["Unity", "C#", "Physics", "AI", "Build validation"],
    company: "Bright Games",
    year: "2024–2025",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=a-db7GFzQi4&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Toy Soldiers FPS — gameplay teaser",
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
      "An endless runner built in Unity/C# — procedural obstacle generation, progressive difficulty, score tracking, and mobile-ready build delivery.",
    problem:
      "An endless runner needs procedural obstacle generation that feels fair and escalates naturally, a responsive player controller for mobile, and a score loop that keeps players engaged.",
    solution:
      "Built Unity/C# systems for procedural level generation, obstacle pooling, speed escalation curves, touch-based player input, and a score/leaderboard loop — validated across Android builds.",
    role: "Unity/C# developer responsible for procedural generation, player input, progression systems, and Android delivery.",
    tools: ["Unity", "C#", "Procedural generation", "Object pooling", "Android builds", "Mobile input"],
    company: "Bright Games",
    year: "2024–2025",
    images: [],
    videos: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=eh6fCOBHs3A&list=PL5I0bzOsVT6oh1QUn0hjUjYkiN1GL0pvP",
        alt: "Bright Runner — endless runner gameplay demo",
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
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
