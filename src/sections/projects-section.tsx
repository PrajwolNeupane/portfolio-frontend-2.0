import { FadeUp } from "@/components/shared";
import { getTopRatedProjects } from "@/enums/constant.enum";
import { Link } from "next-view-transitions";

export default function ProjectsSection() {
  return (
    <div
      className="flex flex-col gap-10 w-full items-center justify-center px-[10%] py-[100px] z-[4]"
      id="projects-section"
    >
      <FadeUp id="projects-title" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="projects-title">
          PROJECTS
        </h2>
      </FadeUp>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-full">
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
                <h2 className="text-main-lighter text-sm">{curr.title}</h2>
                <p className="text-2xs text-gray-300 line-clamp-5">
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
