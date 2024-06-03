import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/shared/nav-bar"), {
  ssr: false,
});
const HeaderSection = dynamic(() => import("@/sections/header-section"), {
  ssr: false,
});

import {
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
