import type { CompanySlot } from "./types";

export const companies: CompanySlot[] = [
  {
    name: "Data2073",
    relationship: "Featured product work",
    note: "Public game ecosystem and primary portfolio case study. Logo remains text-only until an approved asset is provided.",
    status: "public",
  },
  {
    name: "Osten Games",
    relationship: "C#/Unity role",
    note: "Public CV and local project notes connect the work to Unity, multiplayer, Web3, UGS, LiveOps, QA, optimization, and backend integration.",
    status: "public",
  },
  {
    name: "Bright Games",
    relationship: "Unity development experience",
    note: "Listed on the public CV. Add approved project details, dates, screenshots, or logo only after final confirmation.",
    status: "needs-confirmation",
  },
  {
    name: "Freelance Unity Work",
    relationship: "Independent delivery",
    note: "Listed on the public CV. Client names and media should stay private until Matheus approves them for publication.",
    status: "needs-confirmation",
  },
];

export const data2073Outcomes = [
  {
    label: "Multiplayer architecture",
    value: "Server-authoritative",
    detail:
      "Dedicated-server, matchmaking, lobbies, Unity Netcode, and hosting migration work framed around preserving gameplay behavior.",
  },
  {
    label: "LiveOps backend",
    value: "UGS + APIs",
    detail:
      "Authentication, economy logic, analytics, Remote Config, Cloud Code, and service integration support.",
  },
  {
    label: "Web3 systems",
    value: "Wallet / NFT / DataChip",
    detail:
      "Wallet reading, NFT validation, reward/bridge flows, smart-contract-aware approval paths, and Unity UI states.",
  },
  {
    label: "Delivery quality",
    value: "Build + QA",
    detail:
      "Safe build wrappers, Android validation, bug fixing, optimization, regression checks, and technical troubleshooting.",
  },
];

export const workflow = [
  {
    title: "Frame the gameplay or product risk",
    description:
      "Start from the player flow, platform constraint, backend contract, or LiveOps requirement that needs to work in production.",
  },
  {
    title: "Connect Unity, services, and APIs",
    description:
      "Build or validate the client logic, DTOs, backend calls, wallet checks, matchmaking paths, and runtime states as one flow.",
  },
  {
    title: "Test through real delivery paths",
    description:
      "Use builds, service calls, Android checks, QA evidence, and regression-focused validation before treating a feature as done.",
  },
  {
    title: "Document what is safe to share",
    description:
      "Keep public case studies clear about role, tools, problem, solution, videos, and impact without exposing private metrics or secrets.",
  },
];
