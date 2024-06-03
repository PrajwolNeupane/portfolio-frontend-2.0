"use client";
import Image from "next/image";
import PrajwolNeupane from "../../public/assets/prajwol_neupane_2.png";
import Developer from "../../public/assets/Developer.svg";
import gsap from "gsap";
import { ScrollTrigger, Power4 } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderSection() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#header-section",
        start: "top center",
      },
    });

    timeline
      .fromTo(
        "#header-tag",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: Power4.easeOut }
      )
      .fromTo(
        "#header-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: Power4.easeOut },
        "-=0.7"
      )
      .fromTo(
        "#header-img",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: Power4.easeOut },
        "-=0.65"
      )
      .fromTo(
        "#developer-img",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: Power4.easeOut },
        "-=0.6"
      );
  }, []);

  return (
    <div
      className="flex flex-col w-full items-center justify-center 2xl:h-[620px] xl:h-[600px] lg:h-[550px] rg:h-[500px] md:h-[480px] sm:h-[450px] h-[400px] gap-4 relative"
      id="header-section"
    >
      <div className="absolute 2xl:top-[120px] rg:top-[150px] md:top-[160px] sm:top-[150px] top-[170px] flex flex-col items-start rg:gap-1 gap-4">
        <div className="flex items-end gap-2 ml-2 opacity-0" id="header-tag">
          <p className="text-gray-200 rg:text-xs md:text-2xs sm:text-3xs text-[10px] leading-[120%]">
            I am
          </p>
          <h4 className="font-medium 2xl:text-md rg:text-sm md:text-xs sm:text-2xs text-3xs text-main-lighter leading-[100%]">
            Prajwol Neupane
          </h4>
        </div>
        <h2
          className="2xl:text-6xl rg:text-5xl md:text-4xl sm:text-3xl text-xl font-medium text-main-lighter leading-[100%] opacity-0"
          id="header-title"
        >
          <span>FRON</span>
          <span> </span>
          <span className="xl:hidden inline"> </span>
          <span className="rg:hidden inline"> </span>
          <span className="md:hidden inline"> </span>
          <span className="sm:hidden inline"> </span>
          <span>TEND</span>
        </h2>
      </div>
      <Image
        id="developer-img"
        src={Developer}
        alt="Developer Image"
        width={1000}
        height={1000}
        className="2xl:w-[1000px] lg:w-[800px] rg:w-[750px] md:w-[600px] sm:w-[420px] w-[300px] absolute 2xl:bottom-[150px] xl:bottom-[150px] lg:bottom-[100px] rg:bottom-[60px] md:bottom-[70px] sm:bottom-[100px] bottom-[80px] z-[2] opacity-0"
      />
      <Image
        id="header-img"
        src={PrajwolNeupane}
        alt="Personal Image"
        width={1000}
        height={1000}
        className="2xl:w-[400px] rg:w-[380px] md:w-[280px] sm:w-[220px] w-[150px] absolute 2xl:bottom-[100px] xl:bottom-[80px] lg:bottom-[30px] rg:bottom-[-30px] md:bottom-[10px] sm:bottom-[50px] bottom-[50px] opacity-0"
      />
    </div>
  );
}
