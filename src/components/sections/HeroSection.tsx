import Image from "next/image";
import { ArrowRight, PanelsTopLeft, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";

const focusAreas = ["Data2073", "Data systems", "Automation", "AI workflows", "Dashboards"];

export function HeroSection() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden pt-16 text-white">
      <Image
        alt="Abstract dashboard-style visual for Data2073 portfolio work"
        className="object-cover"
        fill
        loading="eager"
        sizes="100vw"
        src="/projects/data2073-dashboard-automation/dashboard-overview.png"
      />
      <div className="absolute inset-0 bg-neutral-950/76" />
      <div className="absolute inset-0 hero-grid opacity-45" />

      <div className="relative mx-auto flex min-h-[calc(88svh-4rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase text-emerald-200 backdrop-blur">
            <PanelsTopLeft aria-hidden size={16} />
            Data2073-centered portfolio
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-neutral-100 sm:text-xl">
            {profile.role}. {profile.hero}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#projects" icon={<ArrowRight aria-hidden size={18} />}>
              View Projects
            </ButtonLink>
            <ButtonLink
              href={profile.contact.linkedin}
              icon={<UserRound aria-hidden size={18} />}
              variant="secondary"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>

        <ul
          aria-label="Portfolio focus areas"
          className="mt-12 flex flex-wrap gap-3 text-sm text-neutral-200"
        >
          {focusAreas.map((area) => (
            <li
              className="rounded-md border border-white/16 bg-white/8 px-3 py-2 backdrop-blur"
              key={area}
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
