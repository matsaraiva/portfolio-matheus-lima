import { Briefcase, FolderGit2, Mail, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          description="Available for full-time game studio roles, indie contracts, and freelance gameplay/multiplayer engineering on Upwork."
          eyebrow="Contact &amp; Hire"
          title="Let's Build Great Games Together"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink
            href={profile.contact.upwork}
            icon={<Briefcase aria-hidden size={18} />}
            variant="primary"
          >
            Hire on Upwork
          </ButtonLink>
          <ButtonLink
            href={profile.contact.linkedin}
            icon={<UserRound aria-hidden size={18} />}
            variant="secondary"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink
            href={profile.contact.github}
            icon={<FolderGit2 aria-hidden size={18} />}
            variant="secondary"
          >
            GitHub
          </ButtonLink>
          {profile.contact.emailIsPlaceholder ? (
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/8 px-4 py-2.5 text-sm font-semibold text-neutral-300">
              <Mail aria-hidden size={18} />
              {profile.contact.emailLabel}
            </span>
          ) : (
            <ButtonLink
              href={profile.contact.email}
              icon={<Mail aria-hidden size={18} />}
              variant="secondary"
            >
              Email
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
