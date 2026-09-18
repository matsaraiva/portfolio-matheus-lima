import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/SectionHeader";

const experience = [
  { name: "Osten Games", role: "Unity / C# Engineering", period: "2025–2026", work: "Multiplayer, service integrations, and game systems across Data2073 and Merge Tactics." },
  { name: "Sagui Games", role: "Founder & Indie Developer", period: "2024–2025", work: "Gameplay development and release delivery for Invaders Tower Defense Online, alongside work on Fly TD." },
  { name: "Bright Games", role: "Unity Development", period: "2024–2025", work: "Gameplay systems across shooter, FPS, and runner projects, including projectiles, player control, and enemy behavior." },
];

export function AboutSection() {
  return (
    <section className="section-shell bg-white dark:bg-neutral-950" id="about">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader eyebrow="The developer behind the systems" title="Hands-on with the game. Thoughtful about the system." description="I’m Matheus, a Unity and C# developer working across gameplay, multiplayer, and connected game services." />
          <p className="mt-6 text-base leading-8 text-neutral-600 dark:text-neutral-300">My experience spans independent game development and studio projects—from tower defense mechanics to online sessions and backend-connected player flows.</p>
          <div className="mt-7 space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
            <p className="flex items-center gap-3"><GraduationCap aria-hidden size={19} /> Bachelor in Information Technology · UFRN</p>
            <p className="flex items-center gap-3"><MapPin aria-hidden size={19} />{profile.location}</p>
          </div>
          <a className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300" href={profile.contact.linkedin} rel="noreferrer" target="_blank">Professional background <ArrowUpRight aria-hidden size={16} /></a>
        </div>
        <ol aria-label="Experience" className="space-y-0 border-l border-neutral-200 pl-7 dark:border-white/15">
          {experience.map((item) => (
            <li className="relative pb-9 last:pb-0" key={item.name}>
              <span aria-hidden className="absolute -left-[33px] top-1.5 size-2.5 rounded-full bg-emerald-600 ring-4 ring-white dark:bg-emerald-300 dark:ring-neutral-950" />
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{item.period} · {item.role}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{item.work}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
