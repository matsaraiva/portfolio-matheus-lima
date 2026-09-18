import type { CompanySlot } from "./types";

export const companies: CompanySlot[] = [
  {
    name: "Data2073",
    relationship: "Featured product work",
    note: "Published Unity game work across Google Play and Epic Games Store: backend APIs, multiplayer architecture, LiveOps, platform integrations, and production validation across the full stack.",
    status: "public",
  },
  {
    name: "Sequence",
    relationship: "Wallet infrastructure",
    note: "Wallet SDK work around player authentication and asset flows: embedded wallets, transaction signing, service integration, and player-facing state across Unity and backend systems.",
    status: "public",
  },
  {
    name: "N3mus",
    relationship: "Tournament platform partner",
    note: "Tournament platform partner connecting competitive gameplay to on-chain rewards, events, and player rankings.",
    status: "public",
  },
  {
    name: "intraVerse",
    relationship: "Distribution partner",
    note: "Cross-game social and distribution layer that connects game launches to a broader Web3 gaming ecosystem.",
    status: "public",
  },
  {
    name: "Osten Games",
    relationship: "C#/Unity engineer",
    note: "Unity/C# development across multiplayer systems, Web3 features, Unity Game Services, LiveOps tooling, QA, performance optimization, and backend integration.",
    status: "public",
  },
  {
    name: "Bright Games",
    relationship: "Unity developer",
    note: "Unity development experience across game features and delivery. Additional details available on request.",
    status: "public",
  },
  {
    name: "Sagui Games",
    relationship: "Founder & Indie Developer",
    note: "Indie game studio active since 2022. Developed and shipped Invaders Tower Defense Online on Steam, and Fly TD (developed 2022, launched 2023).",
    status: "public",
  },
  {
    name: "Freelance",
    relationship: "Independent delivery",
    note: "Independent Unity projects for clients across mobile and game platforms - scope, architecture, and delivery handled end-to-end.",
    status: "public",
  },
];

export const data2073Outcomes = [
  {
    label: "Multiplayer netcode",
    value: "Server-authoritative",
    detail:
      "Dedicated servers, matchmaking, lobbies, Unity Netcode (NGO), and hosting migration - all built to preserve deterministic gameplay.",
  },
  {
    label: "Combat & gameplay loops",
    value: "Responsive C# FSM",
    detail:
      "Finite state machines for combat, frame-accurate hitbox/hurtbox detection, input buffering, and clean separation between data and view.",
  },
  {
    label: "LiveOps & services",
    value: "UGS + REST APIs",
    detail:
      "Authentication, economy logic, remote config, telemetry, Cloud Code, and live-service integrations across Unity Gaming Services.",
  },
  {
    label: "Delivery & optimization",
    value: "Build + QA",
    detail:
      "Memory and frame-rate profiling, object pooling, mobile/PC multi-platform builds, Steamworks integration, and regression-free releases.",
  },
];

export const workflow = [
  {
    title: "Clean gameplay architecture & interfaces",
    description:
      "Separate game state and simulation from MonoBehaviour views using C# interfaces, event buses, and ScriptableObjects for designer-friendly tuning.",
  },
  {
    title: "Robust multiplayer & service integration",
    description:
      "Implement server-authoritative loops, state synchronization, matchmaking, and cloud backend contracts that handle latency gracefully.",
  },
  {
    title: "Performance profiling & optimization",
    description:
      "Profile CPU/GPU bottlenecks, implement object pooling for projectiles and VFX, minimize garbage collection, and stabilize frame rates on target hardware.",
  },
  {
    title: "Automated builds & production QA",
    description:
      "Maintain reliable multi-platform build pipelines for Steam, Android, and PC, verifying gameplay systems under load before release.",
  },
];
