import Image from "next/image";
import {
  Cloud,
  Cpu,
  Gamepad2,
  Layers3,
  Network,
  PackageCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toolGroups } from "@/content/tools";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

const groupIcons: Record<string, LucideIcon> = {
  "Gameplay & Mechanics": Gamepad2,
  "Netcode & Multiplayer": Network,
  "Architecture & Systems": Layers3,
  "Optimization & Profiling": Cpu,
  "Live Services & Backend": Cloud,
  "Platforms & Delivery": PackageCheck,
};

const deliveryLayers = [
  {
    icon: Gamepad2,
    title: "Gameplay & Client Layer",
    copy: "Character controllers, combat state machines, hitbox detection, physics, and responsive UI.",
  },
  {
    icon: Network,
    title: "Multiplayer & Live Services",
    copy: "Unity Netcode (NGO), dedicated servers, UGS Matchmaker, Cloud Code, and REST APIs.",
  },
  {
    icon: PackageCheck,
    title: "Optimization & Storefront Delivery",
    copy: "Memory/CPU profiling, object pooling, Steamworks SDK integration, and multiplatform builds.",
  },
];

export function ToolsSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8" id="tools">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="Organized by game development discipline — from core gameplay and netcode to systems architecture, profiling, and storefront delivery."
          eyebrow="Tools &amp; Skills"
          title="Game Engineering Tech Stack"
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-2xl dark:border-white/10">
            <Image
              alt="Representative tooling map for Unity, backend, cloud, automation, and product work"
              className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              height={760}
              src={withBasePath("/profile/tooling-map.png")}
              width={1200}
            />
          </div>

          <div className="grid gap-4">
            {deliveryLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  key={layer.title}
                >
                  <div className="flex size-12 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                    <Icon aria-hidden size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-950 dark:text-white">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {layer.copy}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {toolGroups.map((group) => {
            const Icon = groupIcons[group.title] ?? Wrench;

            return (
              <article
                className="group rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60"
                key={group.title}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-neutral-950 text-emerald-300 transition group-hover:bg-emerald-200 group-hover:text-neutral-950 dark:bg-white dark:text-neutral-950">
                    <Icon aria-hidden size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {group.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-white/8 dark:text-neutral-300"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
