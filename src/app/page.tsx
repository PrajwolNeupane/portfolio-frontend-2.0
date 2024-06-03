import { NavBar } from "@/components/shared";
import {
  HeaderSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ActivitySection,
  TestimonialsSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ActivitySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
