import Image from "next/image";
import {
  BadgeCheck,
  FolderGit2,
  GraduationCap,
  MapPin,
  Network,
  ServerCog,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { withBasePath } from "@/lib/media";

const noteIcons: Record<string, LucideIcon> = {
  "LinkedIn profile": Network,
  "GitHub profile": FolderGit2,
};

const highlights = [
  {
    icon: GraduationCap,
    title: "UFRN IT degree",
    copy: "Technical base across software, systems, and analytical problem solving.",
  },
  {
    icon: ServerCog,
    title: "Systems delivery",
    copy: "Unity, backend APIs, service integration, and production-facing validation.",
  },
  {
    icon: BadgeCheck,
    title: "Support mindset",
    copy: "Technical support and supervision experience applied to cleaner handoffs.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeader
            description={profile.summary}
            eyebrow="Experience & About"
            title="Technical enough to build, product-minded enough to ship"
          />

          <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-neutral-950 shadow-2xl dark:border-white/10">
            <Image
              alt="Representative professional proof map for Matheus Saraiva Lima"
              className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              height={760}
              src={withBasePath("/profile/matheus-proof-map.png")}
              width={1200}
            />
          </div>
        </div>

        <div className="space-y-5">
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 text-neutral-950 dark:text-white">
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                <UserRound aria-hidden size={20} />
              </span>
              <h3 className="text-xl font-semibold">Current positioning</h3>
            </div>
            <p className="mt-5 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              {profile.about}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-600 dark:bg-white/8 dark:text-neutral-300">
              <MapPin aria-hidden size={16} />
              {profile.location}
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-white/10 dark:bg-white/5"
                  key={item.title}
                >
                  <div className="flex size-10 items-center justify-center rounded-md bg-neutral-950 text-emerald-300 dark:bg-white dark:text-neutral-950">
                    <Icon aria-hidden size={18} />
                  </div>
                  <h4 className="mt-4 text-sm font-semibold text-neutral-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-neutral-600 dark:text-neutral-300">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {profile.publicNotes.map((note) => {
              const Icon = noteIcons[note.label] ?? Network;

              return (
                <a
                  className="group rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60 dark:hover:bg-white/8"
                  href={note.href}
                  key={note.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-emerald-200 text-neutral-950">
                      <Icon aria-hidden size={18} />
                    </span>
                    <h4 className="text-sm font-semibold text-neutral-950 dark:text-white">
                      {note.label}
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {note.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
