"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, Power4 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  id: string;
  duration?: number;
  dealy?: number;
}

export default function FadeUp({
  children,
  id,
  dealy = 0,
  duration = 0.5,
}: Props) {
  useEffect(() => {
    gsap.fromTo(
      `#${id}`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: dealy,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: `#${id}`,
        },
      }
    );
  }, []);

  return <>{children}</>;
}
