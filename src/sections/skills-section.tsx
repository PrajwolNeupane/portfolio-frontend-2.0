import { FadeUp } from "@/components/shared";
import { skills } from "@/enums/constant.enum";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <div
      className="flex flex-col gap-10 w-full items-center justify-center px-[10%] py-[100px] z-[4]"
      id="skills-section"
    >
      <FadeUp id="skills-title" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="skills-title">
          SKILLS
        </h2>
      </FadeUp>
      <div className="grid grid-cols-5 gap-x-10 gap-y-5">
        {skills?.map((curr, indx) => (
          <div
            key={indx}
            className="hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
          >
            <FadeUp id={`skill-tab`} duration={0.75} dealy={0.5}>
              <div
                className="flex flex-col items-center p-10 bg-skill-gradient gap-4 rounded-[30px] "
                id={`skill-tab`}
              >
                <Image
                  src={curr.image}
                  width={500}
                  height={500}
                  alt="Skill Image"
                  className="w-[70px] aspect-square object-cover rounded-full"
                />
                <h2 className="text-main-lighter text-xs">{curr.name}</h2>
              </div>
            </FadeUp>
          </div>
        ))}
      </div>
    </div>
  );
}
