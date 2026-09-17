import type { ToolGroup } from "./types";

export const toolGroups: ToolGroup[] = [
  {
    title: "Gameplay & Mechanics",
    summary: "Core game loops, combat state machines, character controllers, and physics.",
    tools: [
      "Unity",
      "C#",
      "Finite State Machines (FSM)",
      "Hitbox & Hurtbox Logic",
      "Character Controllers",
      "Animation Events",
      "Input Buffering",
      "2.5D & 3D Physics",
    ],
  },
  {
    title: "Netcode & Multiplayer",
    summary: "Server-authoritative loops, matchmaking, lobbies, and synchronization.",
    tools: [
      "Unity Netcode (NGO)",
      "Unity Transport",
      "UGS Matchmaker",
      "Lobbies & Relay",
      "Dedicated Servers",
      "Client Prediction",
      "Session Recovery",
    ],
  },
  {
    title: "Architecture & Systems",
    summary: "Modular C#, ScriptableObject pipelines, and decoupled game state.",
    tools: [
      "ScriptableObjects",
      "Event-Driven Architecture",
      "SOLID Principles",
      "Object Pooling",
      "Bot AI & Heuristics",
      "UI State Machines",
      "Save Systems",
    ],
  },
  {
    title: "Optimization & Profiling",
    summary: "CPU/GPU performance tuning, memory stabilization, and frame-rate optimization.",
    tools: [
      "Unity Profiler",
      "Memory Profiler",
      "Draw Call Batching",
      "GC Reduction",
      "Asset Bundles",
      "Mobile Thermal Tuning",
    ],
  },
  {
    title: "Live Services & Backend",
    summary: "Cloud functions, telemetry, player economy, and game services.",
    tools: [
      "Unity Gaming Services (UGS)",
      "UGS Cloud Code",
      "Remote Config",
      "UGS Analytics",
      "REST APIs",
      "Node.js / TypeScript",
      "PlayFab CloudScript",
      "Azure / Firebase Functions",
    ],
  },
  {
    title: "Platforms & Delivery",
    summary: "Target hardware workflows, storefront integrations, and production release.",
    tools: [
      "Steamworks SDK",
      "PC / Windows",
      "Android Builds",
      "Epic Games Store",
      "Git / GitHub Actions",
      "Production QA",
    ],
  },
];

export const data2073Stack = [
  {
    name: "Unity / C# Client",
    category: "Game Systems",
    note: "Gameplay loops, player controls, UI state machines, bug fixing, and platform-specific feel.",
  },
  {
    name: "Netcode & Multiplayer",
    category: "Online Architecture",
    note: "Unity Netcode, Unity Transport, matchmaking, lobbies, state synchronization, and dedicated-server orchestration.",
  },
  {
    name: "Combat & State Machines",
    category: "Gameplay Programming",
    note: "Deterministic FSMs, frame-accurate hitbox/hurtbox collision, input buffering, and animation events.",
  },
  {
    name: "UGS & LiveOps",
    category: "Live Operations",
    note: "Authentication, player economy, analytics, Remote Config, Cloud Code, and live-service feature support.",
  },
  {
    name: "Optimization & Profiling",
    category: "Performance",
    note: "Unity Profiler, object pooling for high-density bullets and VFX, GC minimization, and steady 60fps tuning.",
  },
  {
    name: "Backend APIs & Cloud",
    category: "Cloud Services",
    note: "REST endpoints, PlayFab/Azure/Firebase cloud functions, DTOs, and robust client service boundaries.",
  },
  {
    name: "Steamworks & Platforms",
    category: "Platforms & Delivery",
    note: "Steam achievements/stats, PC/Android build packaging, Epic Games Store delivery, and storefront compliance.",
  },
  {
    name: "QA & Build Validation",
    category: "Reliability",
    note: "Automated build scripts, regression-focused testing, memory profiling, and structured developer handoffs.",
  },
];
