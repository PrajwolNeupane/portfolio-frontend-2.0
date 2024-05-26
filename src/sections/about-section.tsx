import { FadeUp } from "@/components/shared";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div
      className="flex flex-col gap-4 w-full items-center justify-center px-[10%] py-[100px] z-[4]"
      id="about-section"
    >
      <FadeUp id="about-head" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="about-head">
          ABOUT
        </h2>
      </FadeUp>
      <FadeUp id="about-content" duration={0.75} dealy={0.25}>
        <p
          className="text-sm leading-[150%] text-gray-100 font-light text-center w-[90%]"
          id="about-content"
        >
          Hi 👋, I am <span className="text-main-lighter">Prajwol Neupane</span>
          , a <span className="text-main-lighter">Frontend Developer</span> with
          a passion for building dynamic and responsive websites and
          applications. Based in Dilibazar, Kathmandu, I specialize in
          <span className="text-main-lighter">
            {" "}
            React.js, Next.js and other modern web technologies.
          </span>
          Currently studying Computer Science at Herald College Kathmandu 🎓, I
          combine academic knowledge with practical skills.{" "}
          <Link href={"https://www.shotcoder.com/"} target="blank">
            <span className="text-main-lighter hover:underline">
              At ShotCoder Tech, where I advanced from a React JS Intern to a
              Junior Frontend Developer
            </span>
          </Link>
          , I played a key role in developing the{" "}
          <Link
            href="https://shikshya.app/"
            target="blank"
            className="text-main-lighter hover:underline"
          >
            Admin Panel for Shiksya, a School Management Website
          </Link>
          , using{" "}
          <span className="text-main-lighter">
            React.js, Redux, and React Query
          </span>
          . In my free time, I enjoy playing musical instruments 🎸, designing
          creative projects 🎨, and playing video games 🎮. I also{" "}
          <span className="text-main-lighter">lead website developement</span>{" "}
          as a{" "}
          <Link
            href={"https://uivisualscommunity.heraldcollege.edu.np/"}
            target="blank"
            className="text-main-lighter hover:underline"
          >
            {" "}
            Member at UI Visuals,
          </Link>{" "}
          <Link
            href={"https://heraldcollege.edu.np/"}
            target="blank"
            className="text-main-lighter hover:underline"
          >
            Herald College.
          </Link>{" "}
          Driven by curiosity and a passion for innovation 🚀, I am always eager
          to take on new challenges in web development.
        </p>
      </FadeUp>
    </div>
  );
}
