import Image from "next/image";
import {
  BadgeCheck,
  Cable,
  CloudCog,
  FileText,
  Gamepad2,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Target,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { data2073Outcomes } from "@/content/companies";
import { data2073Stack } from "@/content/tools";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

const stackIcons: Record<string, LucideIcon> = {
  "Unity / C# Client": Gamepad2,
  "Netcode & Multiplayer": Network,
  "UGS & LiveOps": CloudCog,
  "Backend APIs": ServerCog,
  "Sequence SDK": WalletCards,
  "SKALE / Moonbeam / Somnia": Network,
  "NFT & On-chain Assets": WalletCards,
  "QA & Delivery": ShieldCheck,
};

const outcomeIcons: Record<string, LucideIcon> = {
  "Multiplayer architecture": Network,
  "LiveOps backend": CloudCog,
  "Web3 integration": WalletCards,
  "Delivery quality": BadgeCheck,
};

const proofPoints = [
  {
    icon: Target,
    label: "API contracts",
    title: "Backend boundaries first",
    description:
      "REST endpoints, DTOs, service contracts, and data schemas clear enough for Unity and cloud systems to trust.",
  },
  {
    icon: Cable,
    label: "Integrations",
    title: "Services working as one flow",
    description:
      "Unity clients, cloud functions, wallet services, matchmaking, analytics, and platform APIs connected into player-facing paths.",
  },
  {
    icon: ShieldCheck,
    label: "Validation",
    title: "Production confidence",
    description:
      "Build checks, Android validation, QA evidence, performance fixes, and regression-focused delivery before a feature is treated as done.",
  },
  {
    icon: FileText,
    label: "Handoff",
    title: "Readable technical proof",
    description:
      "Architecture notes, API references, test context, and case-study material that make the work easier to review and continue.",
  },
];

export function TechnicalProofSection() {
  return (
    <section className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8" id="technical-proof">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="A closer look at the engineering layers behind the visual project work: client systems, APIs, cloud services, Web3 flows, validation, and handoff."
          eyebrow="Technical Depth"
          title="How the work holds together"
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-2xl dark:border-white/10">
            <Image
              alt="Backend, Unity, cloud, automation, and product validation tooling map"
              className="aspect-[16/9] h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.02]"
              height={760}
              src={withBasePath("/profile/tooling-map.png")}
              width={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/52 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-center p-6 text-white">
              <p className="text-xs font-bold uppercase text-emerald-200">
                Backend + Unity delivery
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-100">
                Systems work that moves from gameplay to services, cloud delivery, validation, and technical handoff.
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
