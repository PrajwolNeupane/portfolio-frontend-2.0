import { getProject } from "@/enums/constant.enum";
import { Link as TransLink } from "next-view-transitions";
import Link from "next/link";
import Image from "next/image";
import {
  BackIcon,
  GitHubIcon,
  WebsiteIcon,
} from "../../../../public/assets/icons";
import ImageSlider from "./image-slider";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const project = getProject(parseInt(id));

  return (
    <div className="flex relative xl:flex-row flex-col-reverse w-full min-h-[100vh] pb-5 pt-16 px-[5%] gap-20">
      <TransLink
        href={"/#projects-section"}
        className="flex items-center gap-3 group w-[80px] absolute top-5"
      >
        <div className="group-hover:translate-x-[-20px] transition-all ease-out duration-200">
          <BackIcon color="white" stroke="40" w="25" h="25" />
        </div>
        <div className="text-gray-200 text-2xs">Back</div>
      </TransLink>
      <div className="2xl:w-[40%] xl:w-[50%] w-[90%] flex flex-col gap-2">
        <h2 className="text-main-lighter lg:text-rg md:text-md text-sm">
          {project?.title}
        </h2>
        <p className="xl:text-xs md:text-2xs text-3xs text-gray-300 font-light">
          {project?.description}
        </p>
        <div className="w-full relative my-3">
          <div className="w-[120%] left-[-10%] h-[10px] bg-main-lighter blur-[60px] absolute"></div>
          <div className="w-full h-[0.5px] bg-gray-200"></div>
        </div>
        <div className="flex w-full items-center gap-4">
          {project?.repo_link ? (
            <Link href={project?.repo_link} target="blank">
              <GitHubIcon
                className="fill-gray-400 group-hover:fill-white transition-all ease-out duration-500"
                svgClassName="w-[40px] h-[40px] group"
              />
            </Link>
          ) : (
            <h2 className="text-gray-200 text-xs">Project is Private</h2>
          )}
          {project?.link ? (
            <Link href={project?.link} target="blank">
              <WebsiteIcon
                className="stroke-gray-400 group-hover:stroke-white transition-all ease-out duration-500"
                svgClassName="w-[40px] h-[40px] group"
                stroke="1"
              />
            </Link>
          ) : (
            <h2 className="text-gray-200 text-xs"> Not Live Yet</h2>
          )}
        </div>
      </div>
      <div className="2xl:w-[60%] xl:w-[50%] w-full flex xl:flex-col flex-row gap-2 justify-end">
        <div>
          <h3 className="text-gray-300 lg:text-sm md:text-xs text-2xs">
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {project?.skills.slice(0, 8)?.map((curr, indx) => (
              <div
                className="flex bg-background-darker py-2 px-6 rounded-xl items-center gap-3"
                key={indx}
              >
                <Image
                  alt="Skill Image"
                  width={50}
                  height={50}
                  src={curr?.image!}
                  className="2xl:w-[30px] xl:w-[28px] w-[25px] aspect-square rounded-full object-cover"
                />
                <h2 className="xl:text-2xs lg:text-3xs text-main-lighter">
                  {curr?.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        {!Array.isArray(project?.photo_url) ? (
          <Image
            alt="Project Image"
            width={1000}
            height={1000}
            className="aspect-video w-full object-cover mt-6"
            src={project?.photo_url!}
          />
        ) : (
          <ImageSlider images={project.photo_url} />
        )}
      </div>
    </div>
  );
}
