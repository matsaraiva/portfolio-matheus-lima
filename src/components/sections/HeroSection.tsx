import Image from "next/image";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";
import { withBasePath } from "@/lib/media";
import { HeroReel } from "@/components/HeroReel";

const focusAreas = [
  "Unity / C#",
  "Gameplay Systems",
  "Multiplayer & Netcode",
  "Live Services & Cloud",
  "Steamworks & Mobile",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-24 text-white">
      {/* Background Isometric Game Art with Faded Backdrop Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          alt=""
          className="object-cover object-[82%_center] lg:object-right opacity-30 md:opacity-40 transition-opacity duration-700 filter brightness-90 saturate-90"
          fill
          sizes="100vw"
          src={withBasePath("/projects/invaders-tower-defense-online/steam-gameplay-coop.jpg")}
        />
        {/* Left-to-right smooth fade: solid dark on left for text, gently revealing art on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 md:via-neutral-950/65 to-neutral-950/30" />
        {/* Vertical fades: smooth top header transition and bottom section melt */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pt-20 lg:px-8 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-950/60 px-3 py-2 text-xs font-bold uppercase text-emerald-300 backdrop-blur-md">
            <Gamepad2 aria-hidden size={16} className="text-emerald-400" />
            Unity Gameplay & Multiplayer Developer
          </p>
          <p className="mb-4 text-sm font-medium tracking-wide text-neutral-300">{profile.name}</p>
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl xl:text-7xl">
            Gameplay.<br />Multiplayer.<br /><span className="text-emerald-300">Production.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-neutral-200 sm:text-xl">
            I build gameplay systems, multiplayer features, and service integrations in Unity and C# for PC and mobile games.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#projects" icon={<ArrowRight aria-hidden size={18} />}>
              Explore Selected Work
            </ButtonLink>
            <ButtonLink
              href="/#contact"
              variant="secondary"
            >
              Get in Touch
            </ButtonLink>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 text-xs font-medium text-neutral-300">
            <a className="inline-flex min-h-11 items-center hover:text-emerald-300" href={profile.contact.upwork} rel="noreferrer" target="_blank">Upwork ↗</a>
            <a className="inline-flex min-h-11 items-center hover:text-emerald-300" href={profile.contact.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a>
            <a className="inline-flex min-h-11 items-center hover:text-emerald-300" href={profile.contact.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          </div>
        </div>
        <HeroReel />
        </div>

        <ul
          aria-label="Portfolio focus areas"
          className="mt-10 flex flex-wrap gap-2.5 border-t border-white/10 pt-6 text-sm text-neutral-200"
        >
          {focusAreas.map((area) => (
            <li
              className="rounded-md border border-white/15 bg-neutral-900/70 px-3 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-md text-neutral-200 hover:border-emerald-400/40 hover:text-emerald-300 transition"
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
