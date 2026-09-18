import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EngineeringSection } from "@/components/sections/EngineeringSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection, MoreProjectsSection } from "@/components/sections/ProjectsSection";
import { VideoReelSection } from "@/components/sections/VideoReelSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <EngineeringSection />
        <MoreProjectsSection />
        <VideoReelSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
