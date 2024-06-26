"use client";
import { Button } from "@/components/shared";
import cn from "@/utils/class-names";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar() {
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const links = [
    {
      name: "About",
      id: "about-section",
    },
    {
      name: "Skills",
      id: "skills-section",
    },
    {
      name: "Projects",
      id: "projects-section",
    },
    {
      name: "Activities",
      id: "activity-section",
    },
    {
      name: "Testimonials",
      id: "testimonials-section",
    },
    {
      name: "Contact",
      id: "contacts-section",
    },
  ];

  const handleSetActive = (to: string) => {
    setCurrentIndex(
      links.findIndex((curr) => curr.id == to) == -1
        ? 0
        : links.findIndex((curr) => curr.id == to)
    );
  };

  return (
    <div className="flex w-full items-center lg:px-20 rg:px-16 md:px-12 sm:px-10  px-6 py-5 justify-between z-[5] sticky top-0 backdrop-blur-[20px]">
      <h2 className="text-white lg:text-lg md:text-rg text-sm font-medium">
        PN
      </h2>
      <div className="lg:flex hidden items-center text-gray-100 text-xs 2xl:gap-10 xl:gap-8 gap-6 2xl:ml-20 xl:ml-14 ml-10 relative">
        {links?.map((curr, indx) => (
          <ScrollLink
            key={indx}
            to={curr.id}
            spy={true}
            smooth={true}
            duration={250}
            onSetActive={handleSetActive}
            classID="relative"
            offset={-20}
          >
            <div
              className={cn(
                `bg-main-lighter w-[5px] aspect-square rounded-full mx-auto transition-all duration-300 ease-in-out`,
                currentIndex === indx
                  ? " translate-y-[-4px] opacity-100"
                  : "translate-y-4 opacity-0"
              )}
            ></div>
            <h4 className="cursor-pointer hover:text-main-lighter transition-all">
              {curr.name}
            </h4>
          </ScrollLink>
        ))}
      </div>
      <Link
        target="blank"
        href={
          "https://drive.google.com/file/d/1R6KyuiaXQ7BUbgP6t-knX9lLZ33Rt6sS/view"
        }
      >
        <Button
          title="View My CV"
          className="2xl:w-[180px] xl:w-[160px] md:w-[150px] w-[120px]"
          variant="filled"
        />
      </Link>
    </div>
  );
}
