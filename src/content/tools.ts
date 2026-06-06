import type { ToolGroup } from "./types";

export const toolGroups: ToolGroup[] = [
  {
    title: "Data & BI",
    summary: "Game analytics, operational signals, and decision support.",
    tools: [
      "UGS Analytics",
      "PlayFab Analytics",
      "Remote Config",
      "Economy telemetry",
      "QA evidence",
      "KPI framing",
    ],
  },
  {
    title: "Automation",
    summary: "Repeatable validation, API workflows, and delivery support.",
    tools: [
      "Safe build wrappers",
      "Postman",
      "REST validation",
      "QA scripts",
      "Workflow mapping",
      "Technical documentation",
    ],
  },
  {
    title: "AI / ML",
    summary: "Applied AI and game-behavior systems where the product needs them.",
    tools: [
      "Weighted bot AI",
      "Heuristic evaluation",
      "Difficulty tuning",
      "AI-assisted analysis",
      "Prompt workflows",
    ],
  },
  {
    title: "Backend",
    summary: "Service logic, APIs, cloud functions, and integration boundaries.",
    tools: [
      "C#",
      "JavaScript / Node.js",
      ".NET",
      "Azure Functions",
      "Firebase Functions",
      "PlayFab CloudScript",
      "REST APIs",
      "Dependency injection",
    ],
  },
  {
    title: "Frontend",
    summary: "Unity interfaces, web UI, and product-facing workflows.",
    tools: [
      "Unity UI",
      "UI state machines",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Cloud / DevOps",
    summary: "Hosted game services, builds, and deployment-aware engineering.",
    tools: [
      "Unity Game Services",
      "Unity Netcode",
      "Unity Transport",
      "Gameye",
      "Headless servers",
      "GitHub Actions",
      "Static hosting",
    ],
  },
  {
    title: "Business / Product",
    summary: "Technical execution with support, validation, and product context.",
    tools: [
      "LiveOps",
      "Technical support",
      "Team supervision",
      "Stakeholder communication",
      "Feature validation",
      "Problem solving",
    ],
  },
];

export const data2073Stack = [
  {
    name: "Unity / C# Client",
    category: "Game Systems",
    note: "Gameplay, UI states, battle flows, bug fixing, optimization, and player-facing validation.",
  },
  {
    name: "Netcode & Multiplayer",
    category: "Online Architecture",
    note: "Unity Netcode, Unity Transport, matchmaking, lobbies, state synchronization, and dedicated-server thinking.",
  },
  {
    name: "UGS & LiveOps",
    category: "Operations",
    note: "Authentication, economy, analytics, Remote Config, Cloud Code, and live-service feature support.",
  },
  {
    name: "Backend APIs",
    category: "Integration",
    note: "REST endpoints, PlayFab/Azure/Firebase-style cloud functions, DTOs, and service boundaries.",
  },
  {
    name: "Sequence SDK",
    category: "Wallet Integration",
    note: "Embedded wallet creation, authentication, transaction signing, and asset-management flows connected to Unity UI and backend services.",
  },
  {
    name: "Web3 network integrations",
    category: "Platform Infrastructure",
    note: "Chain-aware service paths for asset movement, reward flows, approvals, and player-facing states without treating the network layer as the portfolio centerpiece.",
  },
  {
    name: "NFT & On-chain Assets",
    category: "Digital Assets",
    note: "NFT ownership validation, smart-contract-aware approval flows, on-chain asset transfer logic, and Unity UI states coherent across chain interactions.",
  },
  {
    name: "QA & Delivery",
    category: "Validation",
    note: "Safe builds, Android validation, troubleshooting, handoff documentation, and regression-focused checks.",
  },
];
