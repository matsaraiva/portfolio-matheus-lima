import Image from "next/image";
import {
  BadgeCheck,
  CloudCog,
  Cpu,
  FileText,
  Gamepad2,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Swords,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { data2073Outcomes } from "@/content/companies";
import { data2073Stack } from "@/content/tools";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

const stackIcons: Record<string, LucideIcon> = {
  "Unity / C# Client": Gamepad2,
  "Netcode & Multiplayer": Network,
  "Combat & State Machines": Swords,
  "UGS & LiveOps": CloudCog,
  "Optimization & Profiling": Cpu,
  "Backend APIs & Cloud": ServerCog,
  "Steamworks & Platforms": Target,
  "QA & Build Validation": ShieldCheck,
};

const outcomeIcons: Record<string, LucideIcon> = {
  "Multiplayer netcode": Network,
  "Combat & gameplay loops": Swords,
  "LiveOps & services": CloudCog,
  "Delivery & optimization": BadgeCheck,
};

const proofPoints = [
  {
    icon: Swords,
    label: "Gameplay Systems",
    title: "Deterministic Combat & State Machines",
    description:
      "Finite state machines (FSM), animation event triggers, frame-accurate hitbox/hurtbox collision, and input buffering for responsive player control.",
  },
  {
    icon: Network,
    label: "Multiplayer Netcode",
    title: "Server-Authoritative Synchronization",
    description:
      "Unity Netcode for GameObjects (NGO), Unity Transport, dedicated server orchestration, matchmaking queues, and session persistence.",
  },
  {
    icon: Cpu,
    label: "Performance & Profiling",
    title: "Frame-Rate & Memory Stability",
    description:
      "Object pooling for high-density bullets and VFX, garbage collection reduction, draw call batching, and steady 60fps performance across PC and mobile.",
  },
  {
    icon: FileText,
    label: "Production Delivery",
    title: "Steam & Multi-Platform Validation",
    description:
      "Steamworks SDK integration, multi-platform build pipelines (Windows, Android), automated QA checks, and clean architecture handoffs.",
  },
];

export function TechnicalProofSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8" id="technical-proof">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="A closer look at the engineering layers behind the games: combat state machines, authoritative netcode, performance profiling, and production delivery."
          eyebrow="Technical Depth"
          title="Game Architecture &amp; Engineering Standards"
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-2xl dark:border-white/10">
            <Image
              alt="Unity, multiplayer netcode, combat architecture, and performance tooling map"
              className="aspect-[16/9] h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.02]"
              height={760}
              src={withBasePath("/profile/tooling-map.png")}
              width={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/52 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-center p-6 text-white">
              <p className="text-xs font-bold uppercase text-emerald-200">
                Unity + Multiplayer Engineering
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-100">
                Architecture that moves cleanly from gameplay input and physics to netcode, cloud services, and production builds.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {proofPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60"
                  key={item.title}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                      <Icon aria-hidden size={20} />
                    </span>
                    <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="mt-4 font-semibold text-neutral-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data2073Stack.map((item) => {
            const Icon = stackIcons[item.name] ?? Layers3;

            return (
              <article
                className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60"
                key={item.name}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-neutral-950 text-emerald-300 transition group-hover:bg-emerald-200 group-hover:text-neutral-950 dark:bg-white dark:text-neutral-950">
                    <Icon aria-hidden size={20} />
                  </span>
                  <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                    {item.category}
                  </p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-950 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {item.note}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data2073Outcomes.map((outcome) => {
            const Icon = outcomeIcons[outcome.label] ?? BadgeCheck;

            return (
              <article
                className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={outcome.label}
              >
                <div className="flex size-11 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                  <Icon aria-hidden size={20} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400">
                  {outcome.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-neutral-950 dark:text-white">
                  {outcome.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {outcome.detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
