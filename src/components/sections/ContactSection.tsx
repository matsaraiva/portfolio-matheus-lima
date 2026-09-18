import { Briefcase, FolderGit2, Mail, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  return (
    <section className="section-shell border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950" id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          description="Get in touch about Unity gameplay, multiplayer, or service-integration work."
          eyebrow="Contact &amp; Hire"
          title="Let’s build your next game system."
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
            variant="ghost"
          >
            LinkedIn
          </ButtonLink>
          <ButtonLink
            href={profile.contact.github}
            icon={<FolderGit2 aria-hidden size={18} />}
            variant="ghost"
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
              variant="ghost"
            >
              Email
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
