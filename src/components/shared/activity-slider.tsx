"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ActivitySlider() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          markers: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full overflow-hidden">
      <div ref={triggerRef}>
        <div
          className="flex flex-row items-start justify-start w-[400vw] relative h-[100vh]"
          ref={sectionRef}
        >
          <div className="bg-red-500 w-[100vw] h-[100vh]"></div>
          <div className="bg-blue-500 w-[100vw] h-[100vh]"></div>
          <div className="bg-orange-500 w-[100vw] h-[100vh]"></div>
          <div className="bg-green-500 w-[100vw] h-[100vh]"></div>
          {/* <div className="bg-purple-500 w-[100vw] h-[100vh]"></div>
        <div className="bg-yellow-500 w-[100vw] h-[100vh]"></div> */}
        </div>
      </div>
    </div>
  );
}
