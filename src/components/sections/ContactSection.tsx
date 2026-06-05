import { FolderGit2, Mail, UserRound } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          description="LinkedIn, GitHub, and email are available for project, product, and technical conversations."
          eyebrow="Contact"
          title="Ready for Unity, backend, and product conversations"
        />

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={profile.contact.linkedin}
            icon={<UserRound aria-hidden size={18} />}
            variant="primary"
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
