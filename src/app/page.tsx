import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Data2073Section } from "@/components/sections/Data2073Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalProofSection } from "@/components/sections/TechnicalProofSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { VideoReelSection } from "@/components/sections/VideoReelSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <VideoReelSection />
        <Data2073Section />
        <TechnicalProofSection />
        <ToolsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
