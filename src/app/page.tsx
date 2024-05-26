import { NavBar } from "@/components/shared";
import {
  HeaderSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
} from "@/sections";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HeaderSection />
      <AboutSection />
    </>
  );
}
