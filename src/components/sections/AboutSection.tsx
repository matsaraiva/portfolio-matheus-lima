import { MapPin, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          description={profile.summary}
          eyebrow="Experience & About"
          title="Technical enough to build, product-minded enough to ship"
        />

        <div className="space-y-5">
          <article className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 text-neutral-950 dark:text-white">
              <UserRound aria-hidden className="text-emerald-700 dark:text-emerald-300" />
              <h3 className="text-xl font-semibold">Current positioning</h3>
            </div>
            <p className="mt-4 text-base leading-8 text-neutral-700 dark:text-neutral-300">
              {profile.about}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              <MapPin aria-hidden size={16} />
              {profile.location}
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {profile.publicNotes.map((note) => (
              <a
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-300/60 dark:hover:bg-white/8"
                href={note.href}
                key={note.label}
                rel="noreferrer"
                target="_blank"
              >
                <h4 className="font-semibold text-neutral-950 dark:text-white">{note.label}</h4>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {note.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
