import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cable,
  CloudCog,
  Code2,
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
import { companies, data2073Outcomes } from "@/content/companies";
import { profile } from "@/content/profile";
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

const companyIcons = [
  Gamepad2,
  WalletCards,
  Building2,
  Network,
  Layers3,
  Code2,
  BriefcaseBusiness,
  Gamepad2,
  ServerCog,
];

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

export function Data2073Section() {
  return (
    <section
      className="bg-neutral-50 px-4 py-20 dark:bg-neutral-950 sm:px-6 lg:px-8"
      id="work-map"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description={profile.data2073.summary}
          eyebrow={profile.data2073.eyebrow}
          title={profile.data2073.title}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <section aria-labelledby="companies-heading">
            <div className="flex items-center gap-3">
              <Building2 aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="companies-heading"
              >
                Companies, clients, and partners
              </h3>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companies.map((company, index) => {
                const Icon = companyIcons[index] ?? Building2;

                return (
                  <article
                    className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60"
                    key={`${company.name}-${index}`}
                  >
                    <div className="flex size-12 items-center justify-center rounded-md bg-neutral-950 text-emerald-300 dark:bg-white dark:text-neutral-950">
                      <Icon aria-hidden size={22} />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-neutral-950 dark:text-white">
                      {company.name}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      {company.relationship}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {company.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="proof-heading">
            <div className="flex items-center gap-3">
              <ServerCog aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3
                className="text-2xl font-semibold text-neutral-950 dark:text-white"
                id="proof-heading"
              >
                What I build across projects
              </h3>
            </div>

            <div className="group relative mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-sm dark:border-white/10">
              <Image
                alt="Backend, Unity, cloud, automation, and product validation tooling map"
                className="aspect-[16/7] h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-[1.02]"
                height={760}
                src={withBasePath("/profile/tooling-map.png")}
                width={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-center p-5 text-white">
                <p className="text-xs font-bold uppercase text-emerald-200">
                  Backend + Unity delivery
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-100">
                  Work that moves across client systems, services, cloud delivery, product validation, and stakeholder handoff.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                    <h4 className="mt-4 font-semibold text-neutral-950 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-300">
                Featured technical case study
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-neutral-950 dark:text-white">
                Production game systems, backend APIs, LiveOps, and Web3 delivery
              </h3>
              <p className="mt-5 text-lg leading-9 text-neutral-700 dark:text-neutral-300">
                {profile.data2073.description}
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
                href={profile.data2073.sourceHref}
                rel="noreferrer"
                target="_blank"
              >
                Featured product reference
                <ArrowUpRight aria-hidden size={16} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Unity", "Multiplayer", "Web3"].map((label) => (
                <div
                  className="rounded-lg border border-emerald-300/50 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100"
                  key={label}
                >
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="mt-2 text-xs leading-5 opacity-80">Core work layer</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-2xl dark:border-white/10">
            <Image
              alt="Representative systems map for multiplayer, LiveOps, Web3, backend, and QA work"
              className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              height={1000}
              src={withBasePath("/projects/data2073-multiplayer-liveops/data2073-systems.png")}
              width={1600}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-transparent p-5 text-white">
              <p className="text-xs font-bold uppercase text-emerald-200">
                Visual architecture story
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-100">
                Client systems, matchmaking, dedicated servers, LiveOps, Web3 bridge, and QA delivery.
              </p>
            </div>
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
