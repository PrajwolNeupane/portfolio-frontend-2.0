"use client";
import { Button } from "@/components/shared";
import cn from "@/utils/class-names";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

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
    // {
    //   name: "Certification",
    //   id: "#about-section",
    // },
    // {
    //   name: "Blogs",
    //   id: "#about-section",
    // },
    {
      name: "Activities",
      id: "#about-section",
    },
    {
      name: "Testimonials",
      id: "#about-section",
    },
    {
      name: "Contact",
      id: "contact-section",
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
    <div className="flex w-full items-center px-20 py-5 justify-between z-[5] sticky top-0 backdrop-blur-[20px]">
      <h2 className="text-white text-lg font-medium">PN</h2>
      <div className="flex items-center text-gray-100 text-xs gap-10 ml-20 relative">
        {links?.map((curr, indx) => (
          <Link
            key={indx}
            to={curr.id}
            spy={true}
            smooth={true}
            duration={250}
            onSetActive={handleSetActive}
            classID="relative"
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
          </Link>
        ))}
      </div>
      <Button title="View My CV" className="w-[180px]" variant="filled" />
    </div>
  );
}
