import type { CompanySlot } from "./types";

export const companies: CompanySlot[] = [
  {
    name: "Data2073",
    relationship: "Featured product work",
    note: "Shipped Unity game on Epic Games Store — cross-chain trading card game with weekly tournaments. Backend APIs, multiplayer architecture, LiveOps, and blockchain integration across the full stack.",
    status: "public",
  },
  {
    name: "Sequence",
    relationship: "Wallet infrastructure",
    note: "Sequence is the wallet SDK powering Data2073's player authentication and asset flows — handling embedded wallets, transaction signing, and cross-chain interactions across SKALE, Moonbeam, and Somnia.",
    status: "public",
  },
  {
    name: "N3mus",
    relationship: "Tournament platform partner",
    note: "N3mus Foundation hosts weekly Data2073 tournaments. Their platform connects the competitive layer of the game to on-chain rewards and player rankings.",
    status: "public",
  },
  {
    name: "intraVerse",
    relationship: "Distribution partner",
    note: "intraVerse provides a cross-game social and distribution layer for Data2073, connecting the game to a broader Web3 gaming ecosystem.",
    status: "public",
  },
  {
    name: "SKALE / Moonbeam / Somnia",
    relationship: "Blockchain networks",
    note: "The blockchains powering Data2073: SKALE (gas-free transactions), Moonbeam (EVM-compatible Polkadot parachain), and Somnia (new high-throughput chain). Cross-chain gameplay is a core feature of the product.",
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
    name: "Freelance",
    relationship: "Independent delivery",
    note: "Independent Unity projects for clients across mobile and game platforms — scope, architecture, and delivery handled end-to-end.",
    status: "public",
  },
];

export const data2073Outcomes = [
  {
    label: "Multiplayer architecture",
    value: "Server-authoritative",
    detail:
      "Dedicated servers, matchmaking, lobbies, Unity Netcode, and hosting migration — all built to preserve gameplay behavior across infrastructure changes.",
  },
  {
    label: "LiveOps backend",
    value: "UGS + REST APIs",
    detail:
      "Authentication, economy logic, analytics, Remote Config, Cloud Code, and live-service integrations across Unity Game Services and cloud functions.",
  },
  {
    label: "Web3 integration",
    value: "Sequence / SKALE / Moonbeam",
    detail:
      "Wallet authentication via Sequence SDK, NFT ownership validation, blockchain-to-game asset transfer flows, and Unity UI states that stay coherent across SKALE, Moonbeam, and Somnia chain interactions.",
  },
  {
    label: "Delivery quality",
    value: "Build + QA",
    detail:
      "Safe build wrappers, Android validation, bug fixing, performance optimization, regression checks, and handoff documentation for production-ready features.",
  },
];

export const workflow = [
  {
    title: "Frame the backend contract first",
    description:
      "Start from the API shape, service boundary, or platform constraint that the client or game system needs to depend on.",
  },
  {
    title: "Connect Unity, services, and APIs",
    description:
      "Build or validate client logic, DTOs, cloud function calls, wallet checks, matchmaking paths, and runtime states as one coherent flow.",
  },
  {
    title: "Validate through real delivery paths",
    description:
      "Use builds, live service calls, Android checks, QA evidence, and regression-focused validation before treating a feature as done.",
  },
  {
    title: "Document what ships",
    description:
      "Clear role descriptions, architecture notes, and outcome evidence — so handoffs are clean and the work speaks for itself.",
  },
];
