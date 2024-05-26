import { skills } from "@/enums/constant.enum";
import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex w-full min-h-[100vh] py-5 px-[5%] gap-20">
      <div className="w-[40%] flex flex-col gap-2">
        <Link href={"/#projects-section"} className="text-gray-200 text-2xs">
          Back
        </Link>
        <h2 className="text-main-lighter text-rg">
          Personal Portfolio Website
        </h2>
        <p className="text-xs text-gray-300 font-light">
          Project description. This is my portfolio site. Built using React and
          Material UI for a sleek and modern design, this site showcases my work
          and skills effectively. Axios is utilized for seamless data fetching,
          while Redux ensures efficient state management across the application.
          To bring the website to life, GSAP adds smooth and engaging
          animations, enhancing the user experience. Explore my projects, learn
          about my journey, and see the innovative solutions I have developed in
          the field of web development.
        </p>
        <p className="text-xs text-gray-300 font-light">
          Project description. This is my portfolio site. Built using React and
          Material UI for a sleek and modern design, this site showcases my work
          and skills effectively. Axios is utilized for seamless data fetching,
          while Redux ensures efficient state management across the application.
        </p>
      </div>
      <div className="w-[60%] flex flex-col gap-2 justify-end">
        <h3 className="text-gray-300 text-sm">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.slice(0, 8)?.map((curr, indx) => (
            <div
              className="flex bg-background-darker py-2 px-6 rounded-xl items-center gap-3"
              key={indx}
            >
              <Image
                alt="Skill Image"
                width={100}
                height={100}
                src={curr.image}
                className="w-[30px] aspect-square rounded-full object-cover"
              />
              <h2 className="text-2xs text-main-lighter">{curr.name}</h2>
            </div>
          ))}
        </div>
        <Image
          alt="Project Image"
          width={1000}
          height={1000}
          className="aspect-video w-full object-cover mt-6"
          src={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670605948046-Project-10.png?alt=media&token=b80b1d44-d604-40c8-9900-1206bf7e9040"
          }
        />
      </div>
    </div>
  );
}
