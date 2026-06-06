import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Gamepad2,
  Network,
  ServerCog,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { companies } from "@/content/companies";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

const companyIcons = [
  Gamepad2,
  WalletCards,
  Building2,
  Network,
  Code2,
  BriefcaseBusiness,
  Gamepad2,
  ServerCog,
];

const companyImages = [
  "/projects/data2073-official/playstore-1.png",
  "/partners/sequence-wallet.png",
  "/partners/n3mus-tournaments.png",
  "/partners/intraverse-distribution.png",
  "/projects/merge-tactics-autobattler/gameplay.png",
  "/projects/bright-shooter/gameplay.png",
  "/projects/invaders-tower-defense-online/gameplay.png",
  "/profile/matheus-proof-map.png",
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => {
            const Icon: LucideIcon = companyIcons[index] ?? Building2;
            const image = companyImages[index] ?? "/profile/tooling-map.png";

            return (
              <article
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60"
                key={`${company.name}-${index}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950">
                  <Image
                    alt={`${company.name} visual reference`}
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={withBasePath(image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/82 via-neutral-950/12 to-transparent" />
                  <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-md bg-white text-neutral-950 shadow-lg">
                    <Icon aria-hidden size={22} />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-1 text-xs font-bold uppercase text-neutral-950">
                    {company.relationship}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">
                    {company.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                    {company.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
