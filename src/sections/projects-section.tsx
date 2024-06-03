import { FadeUp } from "@/components/shared";
import { getTopRatedProjects } from "@/enums/constant.enum";
import { Link } from "next-view-transitions";

export default function ProjectsSection() {
  return (
    <div
      className="flex flex-col lg:gap-10 md:gap-6 gap-4 w-full items-center justify-center 2xl:px-[10%] lg:px-[8%] sm:px-[5%] px-[3%] xl:py-[50px] rg:py-[30px] py-[20px] z-[4]"
      id="projects-section"
    >
      <FadeUp id="projects-title" duration={0.75} dealy={0.5}>
        <h2
          className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-rg font-medium text-gray-300 leading-[100%]"
          id="projects-title"
        >
          PROJECTS
        </h2>
      </FadeUp>
      <FadeUp id="projects-tag" duration={0.75} dealy={0.5}>
        <p
          id="projects-tag"
          className="md:text-sm sm:text-xs text-2xs text-main-lighter"
        >
          Projects done so far
        </p>
      </FadeUp>
      <div className="grid rg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5 w-full">
        {getTopRatedProjects()?.map((curr, indx) => (
          <Link
            href={`/project/${curr.id}`}
            key={indx}
            className="col-span-1 hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
          >
            <FadeUp id={`skill-tab`} duration={0.75} dealy={0.5}>
              <div
                className="flex flex-col items-center p-10 bg-skill-gradient gap-4 rounded-[30px] "
                id={`skill-tab`}
              >
                <h2 className="text-main-lighter rg:text-sm sm:text-xs text-2xs">
                  {curr.title}
                </h2>
                <p className="rg:text-2xs sm:text-3xs text-[12px] text-gray-300 line-clamp-5">
                  {curr.description}
                </p>
              </div>
            </FadeUp>
          </Link>
        ))}
      </div>
    </div>
  );
}
