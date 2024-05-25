"use client";
import { Button } from "@/components/shared";
import cn from "@/utils/class-names";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize(); // Set initial viewport width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      name: "About",
      position: 1.5,
      id: "about-section",
    },
    {
      name: "Skills",
      position: 7.1,
      id: "skills-section",
    },
    {
      name: "Projects",
      position: 28,
      id: "#about-section",
    },
    {
      name: "Certification",
      position: 45.5,
      id: "#about-section",
    },
    {
      name: "Blogs",
      position: 61.5,
      id: "#about-section",
    },
    {
      name: "Activities",
      position: 75.5,
      id: "#about-section",
    },
    {
      name: "Testimonials",
      position: 92.5,
      id: "#about-section",
    },
  ];

  const handleSetActive = (to: string) => {
    setCurrentIndex(links.find((curr) => curr.id === to)?.position || null);
  };

  return (
    <div className="flex w-full items-center px-20 py-5 justify-between z-[5] sticky top-0 backdrop-blur-[10px]">
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
          >
            <h4 className="cursor-pointer hover:text-main-lighter transition-all">
              {curr.name}
            </h4>
          </Link>
        ))}
        <div
          className={cn(
            "aspect-square bg-main-lighter rounded-full absolute top-[-10px] transition-all ease-out delay-150",
            currentIndex != null ? "h-[6px]" : "h-[0px]"
          )}
          style={{
            left: currentIndex != null ? `${(viewportWidth * currentIndex) / 100}px` : "0px",
          }}
        ></div>
      </div>
      <Button title="View My CV" className="w-[180px]" variant="filled" />
    </div>
  );
}
