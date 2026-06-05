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
    ],
    company: "Data2073 / Osten Games",
    year: "2025–2026",
    images: [],
    videos: [
      {
        type: "video",
        src: videoReel.playlistUrl,
        alt: "Matheus Saraiva Lima portfolio playlist with Data2073 and game-development videos",
        caption: "Public portfolio playlist — gameplay and technical demonstrations from Data2073 and related projects.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Public Data2073 page",
        href: "https://www.immutable.com/play/data2073",
      },
      {
        label: "Video playlist",
        href: videoReel.playlistUrl,
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
    slug: "data2073-web3-datachip",
    title: "Data2073 Web3 DataChip & NFT Integration",
    summary:
      "Wallet-aware Unity flows, NFT/DataChip ownership validation, backend bridge requests, service DTOs, and player-facing UI states across the full client-to-chain integration path.",
    problem:
      "Blockchain game features require more than a button: wallet reads, NFT ownership checks, reward flows, approval detection, backend bridge routes, retry logic, and user-visible state all need to stay coherent and safe across network and chain conditions.",
    solution:
      "Implemented Unity menu states, backend-facing REST wrappers, DTOs, bridge-flow logic, wallet/NFT validation, approval detection, retry paths, and QA evidence around runtime wallet behavior — connected across Unity client, backend cloud functions, and smart-contract endpoints.",
    role:
      "Unity/backend integration engineer working across C# services, Web3 feature design, API implementation, UI flow stability, and QA.",
    tools: [
      "Unity",
      "C#",
      "REST APIs",
      "Firebase Functions",
      "PlayFab",
      "Azure Functions",
      "Wallet flows",
      "NFT validation",
      "Smart contracts",
    ],
    company: "Data2073 / Osten Games",
    year: "2025–2026",
    images: [],
    videos: [
      {
        type: "video",
        src: videoReel.playlistUrl,
        alt: "Portfolio playlist with Data2073 Web3 and game systems videos",
        caption: "Public portfolio playlist embedded as supporting media for the Web3 integration case study.",
        provider: "youtube",
      },
    ],
    links: [
      {
        label: "Public CV",
        href: "https://flowcv.com/resume/j35ui14ak4tq",
      },
    ],
    results: [
      "Built Unity wallet flows that handle service calls, ownership checks, approval states, retries, and user-facing feedback in a single coherent integration.",
      "Connected backend cloud functions to Unity client state for DataChip bridge and reward flows without exposing private keys or unreleased infrastructure details.",
      "Delivered QA-validated, production-safe Web3 feature code across Firebase, PlayFab, and Azure function stacks.",
    ],
    tags: ["Web3", "DataChip", "APIs", "Unity"],
    category: "Integration Case Study",
    featured: true,
  },
  {
    slug: "merge-tactics-autobattler",
    title: "Merge Tactics Prototype — Systems & Bot AI",
    summary:
      "Unity/C# prototype for a PvE auto-battler: event-driven architecture, clean game-loop states, backend-ready reward flows, ScriptableObject balance assets, and weighted bot AI.",
    problem:
      "A new auto-battler prototype needed a solid technical foundation from day one: game state cleanly separated from views, predictable loop phases, backend-ready reward flows, and bot behavior that felt intentional rather than random.",
    solution:
      "Designed a server-authoritative, event-driven C# architecture with a MergeBus event wrapper, core interfaces, GameLoopManager states, preparation commands, combat snapshots, UI shell, ScriptableObject balance assets, and a weighted bot-evaluation model with card value, placement score, effect value, recycling, and difficulty tuning.",
    role:
      "Unity/C# systems engineer responsible for prototype architecture, gameplay loop design, bot AI behavior, backend integration direction, and validation.",
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
    slug: "portfolio-case-study-platform",
    title: "Portfolio Platform",
    summary:
      "A static Next.js portfolio built with TypeScript, App Router, and content-driven architecture — deployed to GitHub Pages with a custom base-path configuration.",
    problem:
      "Needed a professional public portfolio that highlights case studies, embeds video, supports per-project detail pages, and deploys reliably to GitHub Pages without a backend.",
    solution:
      "Built with Next.js static export, typed content files, automatic project routing, media gallery support, dark mode, SEO metadata, and a GitHub Actions deploy pipeline.",
    role:
      "Full-stack — architecture, content system, frontend implementation, visual design, and deployment configuration.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export", "GitHub Actions", "GitHub Pages"],
    company: "Personal",
    year: "2026",
    images: [],
    videos: [],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/matsaraiva/portfolio-matheus-lima",
      },
      {
        label: "Live site",
        href: "https://matsaraiva.github.io/portfolio-matheus-lima",
      },
    ],
    results: [
      "Zero-backend static export with automatic GitHub Pages deployment on every push to main.",
      "Typed content files make all copy, tools, companies, projects, and media editable in one place.",
      "Per-project routes generated automatically from the content array — no manual routing needed.",
    ],
    tags: ["Portfolio", "Next.js", "TypeScript"],
    category: "Platform",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
