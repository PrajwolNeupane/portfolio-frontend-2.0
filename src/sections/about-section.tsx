import { FadeUp } from "@/components/shared";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div
      className="flex flex-col lg:gap-10 md:gap-6 gap-4 w-full items-center justify-center 2xl:px-[10%] lg:px-[8%] sm:px-[5%] px-[3%] xl:py-[50px] rg:py-[30px] py-[20px] z-[4]"
      id="about-section"
    >
      <FadeUp id="about-head" duration={0.75} dealy={0.5}>
        <h2
          className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-rg font-medium text-gray-300 leading-[100%]"
          id="about-head"
        >
          ABOUT
        </h2>
      </FadeUp>
      <FadeUp id="about-tag" duration={0.75} dealy={0.5}>
        <p
          id="about-tag"
          className="md:text-sm sm:text-xs text-2xs text-main-lighter"
        >
          About my self
        </p>
      </FadeUp>
      <FadeUp id="about-content" duration={0.75} dealy={0.25}>
        <p
          className="lg:text-sm sm:text-xs text-2xs leading-[150%] text-gray-100 font-light text-center w-[90%] md:block hidden"
          id="about-content"
        >
          Hi 👋, I am <span className="text-main-lighter">Prajwol Neupane</span>
          , a <span className="text-main-lighter"> Frontend Developer</span>{" "}
          with a passion for building dynamic and responsive websites and
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
        <p
          className="lg:text-sm sm:text-xs text-2xs leading-[150%] text-gray-100 font-light text-center w-[90%] md:hidden block"
          id="about-content"
        >
          Hi 👋, I'm <span className="text-main-lighter">Prajwol Neupane</span>,
          a<span className="text-main-lighter">Frontend Developer</span> from
          Kathmandu. I build websites with{" "}
          <span className="text-main-lighter">React.js and Next.js</span>.
          Studying at Herald College Kathmandu 🎓 and working at
          <Link href="https://www.shotcoder.com/" target="_blank">
            <span className="text-main-lighter hover:underline">
              {" "}
              ShotCoder Tech
            </span>
          </Link>
          , I helped develop the
          <Link
            href="https://shikshya.app/"
            target="_blank"
            className="text-main-lighter hover:underline"
          >
            {" "}
            Admin Panel for Shiksya
          </Link>{" "}
          with{" "}
          <span className="text-main-lighter">
            React.js, Redux, and React Query
          </span>
          . I love music 🎸, designing 🎨, and video games 🎮. I lead website
          development at
          <Link
            href="https://uivisualscommunity.heraldcollege.edu.np/"
            target="_blank"
            className="text-main-lighter hover:underline"
          >
            {" "}
            UI Visuals
          </Link>
          . Always excited for new challenges 🚀.
        </p>
      </FadeUp>
    </div>
  );
}
