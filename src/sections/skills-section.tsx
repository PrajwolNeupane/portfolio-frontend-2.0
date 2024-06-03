import { FadeUp } from "@/components/shared";
import { skills } from "@/enums/constant.enum";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <div
      className="flex flex-col lg:gap-10 md:gap-6 gap-4 w-full items-center justify-center 2xl:px-[10%] lg:px-[8%] sm:px-[5%] px-[3%] xl:py-[50px] rg:py-[30px] py-[20px] z-[4]"
      id="skills-section"
    >
      <FadeUp id="skills-title" duration={0.75} dealy={0.5}>
        <h2
          className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-rg font-medium text-gray-300 leading-[100%]"
          id="skills-title"
        >
          SKILLS
        </h2>
      </FadeUp>
      <FadeUp id="skills-tag" duration={0.75} dealy={0.5}>
        <p
          id="skills-tag"
          className="md:text-sm sm:text-xs text-2xs text-main-lighter"
        >
          Skill gained so far
        </p>
      </FadeUp>
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 grid-cols-3  gap-x-10 gap-y-5">
        {skills?.map((curr, indx) => (
          <div
            key={indx}
            className="hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
          >
            <FadeUp id={`skill-tab`} duration={0.75} dealy={0.5}>
              <div
                className="flex flex-col items-center 2xl:p-10 xl:p-8 lg:p-6 rg:p-5 md:p-4 sm:p-3 p-2 bg-skill-gradient gap-4 rounded-[30px] "
                id={`skill-tab`}
              >
                <Image
                  src={curr.image}
                  width={500}
                  height={500}
                  alt="Skill Image"
                  className="2xl:w-[70px] xl:w-[60px] lg:w-[55px] rg:w-[50px] md:w-[45px] sm:w-[40px] w-[35px] aspect-square object-cover rounded-full"
                />
                <h2 className="text-main-lighter lg:text-xs sm:text-2xs text-3xs">
                  {curr.name}
                </h2>
              </div>
            </FadeUp>
          </div>
        ))}
      </div>
    </div>
  );
}
