import type { Project } from "./types";
import { videoReel } from "./videos";

export const projects: Project[] = [
  {
    slug: "data2073-multiplayer-liveops",
    title: "Data2073 Multiplayer, LiveOps & Hosting Migration",
    summary:
      "Unity/C# and backend-facing work around Data2073 multiplayer, dedicated-server hosting migration, UGS/LiveOps services, matchmaking, and production validation.",
    problem:
      "Data2073 needed to preserve a server-authoritative multiplayer experience while the infrastructure strategy evolved around hosting, allocation, matchmaking, onboarding stability, deck integrity, leaderboard behavior, and build reliability.",
    solution:
      "The work focused on Unity/C# systems, service boundaries, matchmaking/runtime allocation planning, safe build validation, QA evidence, and documentation that helped keep player-facing flows understandable while backend and hosting pieces changed.",
    role:
      "C#/Unity developer supporting multiplayer architecture, UGS/LiveOps workflows, backend integration, QA, optimization, and technical troubleshooting.",
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
    year: "2025-2026",
    images: [
      {
        type: "image",
        src: "/projects/data2073-multiplayer-liveops/data2073-systems.png",
        alt: "Representative Data2073 multiplayer and LiveOps systems visual",
        caption:
          "Representative visual for Data2073 multiplayer, LiveOps, Web3, backend, and validation work.",
        isPlaceholder: true,
      },
      {
        type: "image",
        src: "/projects/data2073-dashboard-automation/workflow-map.png",
        alt: "Representative Data2073 multiplayer and service workflow visual",
        caption:
          "Representative workflow map for client, backend, matchmaking, and validation paths.",
        isPlaceholder: true,
      },
    ],
    videos: [
      {
        type: "video",
        src: videoReel.playlistUrl,
        alt: "Matheus Saraiva Lima portfolio playlist with Data2073 and game-development videos",
        caption: "Public portfolio playlist used as supporting media for the case study.",
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
      "Documented and supported a hosting migration path that kept gameplay rewrite risk low by preserving the dedicated-server and Unity Netcode model.",
      "Helped frame multiplayer work around onboarding, deck integrity, server boot reliability, matchmaking allocation, and leaderboard behavior.",
      "Used build validation, QA checks, and technical notes to reduce ambiguity across engineering handoffs.",
    ],
    tags: ["Data2073", "Unity", "Multiplayer", "LiveOps"],
    category: "Featured Case Study",
    featured: true,
  },
  {
    slug: "data2073-web3-datachip",
    title: "Data2073 Web3 DataChip & NFT Integration",
    summary:
      "A Data2073 case study around wallet-aware Unity flows, NFT/DataChip validation, backend bridge requests, service DTOs, and player-facing UI states.",
    problem:
      "Blockchain and game-service features need more than a button in the UI: wallet reads, NFT ownership, reward flows, approvals, backend routes, retries, and user states all need to stay coherent and safe.",
    solution:
      "The implementation work included Unity menu states, backend-facing REST wrappers, DTOs, bridge-flow logic, wallet/NFT validation, approval detection, retry paths, and QA notes around runtime wallet behavior.",
    role:
      "Unity/backend integration developer working across C# services, Web3 feature validation, API implementation, UI flow stability, and product QA.",
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
    year: "2025-2026",
    images: [
      {
        type: "image",
        src: "/projects/data2073-battledeck-systems/api-flow.png",
        alt: "Representative Data2073 backend API and Web3 bridge flow visual",
        caption:
          "Representative API-flow visual for backend, wallet, approval, and bridge-style interactions.",
        isPlaceholder: true,
      },
    ],
    videos: [
      {
        type: "video",
        src: videoReel.playlistUrl,
        alt: "Portfolio playlist with Data2073 Web3 and game systems videos",
        caption: "Public playlist embedded as portfolio media until individual approved clips are selected.",
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
      "Structured Web3-related Unity flows around service calls, wallet state, approval checks, retries, and user-facing feedback.",
      "Supported backend/client integration for DataChip-style bridge and reward flows without exposing private keys, routes, or unreleased infrastructure details.",
      "Created a case-study shape that can later accept approved screenshots, architecture diagrams, and walkthrough clips.",
    ],
    tags: ["Web3", "DataChip", "APIs", "Unity"],
    category: "Integration Case Study",
    featured: true,
  },
  {
    slug: "merge-tactics-autobattler",
    title: "Merge Tactics Prototype Systems & Bot AI",
    summary:
      "Unity/C# prototype systems for a PvE auto-battler, including event-driven architecture, game-loop states, prototype combat flow, backend reward thinking, and readable bot AI design.",
    problem:
      "A new auto-battler prototype needed a clean technical foundation: game state separated from views, predictable loop phases, balance assets, backend-ready reward flows, and bot behavior that felt intentional instead of random.",
    solution:
      "The project notes show a server-authoritative, event-driven C# architecture with a MergeBus wrapper, core interfaces, GameLoopManager states, preparation commands, combat snapshots, UI shell, ScriptableObject balance assets, and weighted bot-evaluation design.",
    role:
      "Unity/C# systems developer shaping prototype architecture, gameplay flow, bot AI behavior, backend integration direction, and validation notes.",
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
        src: "/projects/merge-tactics-autobattler/merge-tactics-systems.png",
        alt: "Representative Merge Tactics systems architecture visual",
        caption:
          "Representative visual for Merge Tactics architecture, bot AI, backend reward, and validation work.",
        isPlaceholder: true,
      },
    ],
    videos: [],
    links: [
      {
        label: "Public CV",
        href: "https://flowcv.com/resume/j35ui14ak4tq",
      },
    ],
    results: [
      "Established a modular foundation with pure C# game state and MonoBehaviour view/binding separation.",
      "Outlined a readable weighted bot AI model with card value, placement score, effect value, recycling, and difficulty tuning.",
      "Captured backend and Android validation direction for wallet proof, reward flow, and cloud function handoffs.",
    ],
    tags: ["Unity", "C#", "Bot AI", "Architecture"],
    category: "Systems Case Study",
    featured: true,
  },
  {
    slug: "portfolio-case-study-platform",
    title: "Portfolio Case Study Platform",
    summary:
      "A static, content-driven Next.js portfolio system designed to publish Matheus's case studies, media, and outcomes without hardcoding private project details.",
    problem:
      "Matheus needed a professional public portfolio that could highlight Data2073, embed videos, support project detail pages, and remain easy to deploy to GitHub Pages or other static hosts.",
    solution:
      "The site uses reusable sections, typed content files, static project routes, media gallery support, SEO metadata, theme-aware styling, and deployment-ready static export settings.",
    role:
      "Portfolio architecture, content system, product narrative, frontend implementation, visual system, and deployment documentation.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export", "GitHub Pages"],
    company: "Personal portfolio",
    year: "2026",
    images: [
      {
        type: "image",
        src: "/projects/portfolio-platform/portfolio-system.png",
        alt: "Portfolio content system visual",
        caption: "Portfolio architecture visual.",
        isPlaceholder: true,
      },
    ],
    videos: [],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/matsaraiva/portfolio-matheus-lima",
      },
    ],
    results: [
      "Content files make profile copy, tools, companies, projects, images, and videos easy to edit.",
      "Project pages support problem, solution, role, stack, company, year, impact, tags, links, images, and videos.",
      "Static export settings support Vercel, Netlify, and GitHub Pages deployment paths.",
    ],
    tags: ["Portfolio", "Frontend", "Content System"],
    category: "Platform",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
