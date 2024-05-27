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
      className="flex flex-col w-full items-center justify-center h-[620px] gap-4 relative"
      id="header-section"
    >
      <div className="absolute top-[120px] flex flex-col items-start gap-1">
        <div className="flex items-end gap-2 ml-2 opacity-0" id="header-tag">
          <p className="text-gray-200 text-xs leading-[120%]">I am</p>
          <h4 className="font-medium text-md text-main-lighter leading-[100%]">
            Prajwol Neupane
          </h4>
        </div>
        <h2
          className="text-6xl font-medium text-main-lighter leading-[100%] opacity-0"
          id="header-title"
        >
          {"FRON-TEND"}
        </h2>
      </div>
      <Image
        id="developer-img"
        src={Developer}
        alt="Developer Image"
        width={1000}
        height={1000}
        className="w-[1000px] absolute bottom-[150px] z-[2] opacity-0"
      />
      <Image
        id="header-img"
        src={PrajwolNeupane}
        alt="Personal Image"
        width={1000}
        height={1000}
        className="w-[400px] absolute bottom-[90px] opacity-0"
      />
    </div>
  );
}
