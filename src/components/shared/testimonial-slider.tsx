"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  LinkedinIcon,
  WebsiteIcon,
  MailIcon,
} from "../../../public/assets/icons";
import { toast } from "react-toastify";
import FadeUp from "./fade-up";

interface Props {
  testimonials: {
    name: string;
    role: string;
    photo: string;
    description: string;
    links: {
      name: string;
      link: string;
    }[];
  }[];
}

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="next-button absolute top-1/2 right-4 z-10 bg-background/80 rounded-full p-2 shadow-md hover:bg-background/90 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-main-lighter"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute top-1/2 left-0 z-10 bg-background/70 rounded-full p-2 shadow-md prev-button hover:bg-background/90 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-main-lighter"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export function Icon({ icon_name }: { icon_name: string }) {
  if (icon_name == "linkedin") {
    return (
      <LinkedinIcon
        className="stroke-gray-400 group-hover:stroke-gray-200 stroke-1"
        w="25"
        h="25"
        svgClassName="group"
      />
    );
  } else if (icon_name == "portfolio") {
    return (
      <WebsiteIcon
        className="stroke-gray-400 group-hover:stroke-gray-200"
        w="28"
        h="28"
        svgClassName="group"
        stroke="1"
      />
    );
  } else if (icon_name == "mail") {
    return (
      <MailIcon
        className="stroke-gray-400 group-hover:stroke-gray-200"
        w="28"
        h="28"
        svgClassName="group"
        stroke="1"
      />
    );
  }
}

export function Slide({
  image,
  name,
  role,
  description,
  links,
}: {
  image: string;
  name: string;
  role: string;
  description: string;
  links: {
    name: string;
    link: string;
  }[];
}) {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Email Copied");
      })
      .catch((err) => {
        toast.error("Error while copying email");
      });
  };

  return (
    <div className="bg-testimonial-gradient 2xl:w-[650px] xl:w-[600px] lg:w-[550px] rg:w-[530px] md:w-[500px] sm:w-[320px] w-[280px] py-8 px-6 rounded-2xl mx-auto mb-10">
      <div className="w-full flex flex-col gap-2 items-center justify-between">
        <Image
          src={image}
          alt="Person Image"
          width={300}
          height={300}
          className="rounded-full lg:w-[150px] md:w-[110px] sm:w-[90px] w-[70px] aspect-square object-cover"
        />
        <h3 className="lg:text-sm md:text-xs text-2xs text-gray-300 leading-[120%] mt-2">
          {name}
        </h3>
        <p className="text-main-lighter lg:text-2xs md:text-3xs text-[12px] text-center leading-[120%]">
          {role}
        </p>
        <div className="w-full items-center flex justify-center gap-4">
          {links.map((curr, indx) => {
            if (curr.name == "mail") {
              return (
                <div
                  key={indx}
                  className="cursor-pointer"
                  onClick={() => {
                    handleCopy(curr.link);
                  }}
                >
                  <Icon icon_name={curr.name} />
                </div>
              );
            } else {
              return (
                <Link href={curr.link} target="blank" key={indx}>
                  <Icon icon_name={curr.name} />
                </Link>
              );
            }
          })}
        </div>
        <p className="text-gray-100 lg:text-xs md:text-2xs text-3xs text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialSlider({ testimonials }: Props) {
  return (
    <FadeUp id="testimonial-slider" duration={0.75} dealy={0.5}>
      <div
        className="flex w-full items-center justify-center my-5 relative"
        id="testimonial-slider"
      >
        <div className="2xl:w-[90%] xl:w-[95%] w-[98%] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            scrollbar={{ draggable: true }}
            className="flex flex-col items-center justify-center w-full"
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
          >
            <NextButton />
            <PrevButton />
            {testimonials?.map((curr, indx) => (
              <SwiperSlide
                className="flex w-full items-center justify-center"
                key={indx}
              >
                <Slide
                  image={curr.photo}
                  name={curr.name}
                  role={curr.role}
                  description={curr.description}
                  links={curr.links}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </FadeUp>
  );
}
