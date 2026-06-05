import { ArrowRight, Code2, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";

const focusAreas = [
  "Backend APIs",
  "System Architecture",
  "Unity / C#",
  "Netcode & Multiplayer",
  "UGS LiveOps",
  "Web3 Integration",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden pt-16 text-white" style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1f2d 40%, #0a2218 70%, #061a12 100%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(5,150,105,0.06) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 hero-grid opacity-20" />

      <div className="relative mx-auto flex min-h-[calc(88svh-4rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase text-emerald-200 backdrop-blur">
            <Code2 aria-hidden size={16} />
            Backend &amp; Systems Engineer
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
