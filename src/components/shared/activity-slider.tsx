"use client";

import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import FadeUp from "./fade-up";

interface Props {
  activity: {
    title: string;
    image: StaticImageData;
    description: string[];
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

export function Slide({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string[];
}) {
  return (
    <div className="flex xl:flex-row flex-col w-full px-[12%] xl:gap-[5%] gap-[30px] 2xl:py-10 xl:py-5 py-0 items-center">
      <Image
        src={image}
        width={400}
        height={400}
        alt="Activity 2"
        className="xl:w-[45%] w-[70%] xl:object-cover object-contain"
      />
      <div className="flex xl:w-[60%] w-[100%] flex-col gap-5">
        <h2 className="rg:text-md sm:text-sm text-2xs text-gray-200 xl:text-left text-center">
          {title}
        </h2>
        {description.map((curr, indx) => (
          <p
            className="rg:text-xs sm:text-2xs text-3xs font-light text-gray-300"
            key={indx}
          >
            {curr}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ActivitySlider({ activity }: Props) {
  return (
    <FadeUp id="activity-slider" duration={0.75} dealy={0.5}>
      <div
        className="flex w-full items-center justify-center  relative"
        id="activity-slider"
      >
        <div className="2xl:w-[90%] xl:w-[95%] w-[98%] relative">
          <Swiper
            modules={[Navigation, Autoplay]}
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
            {activity?.map((curr, indx) => (
              <SwiperSlide
                className="flex w-full items-center justify-center"
                key={indx}
              >
                <Slide
                  image={curr.image}
                  title={curr.title}
                  description={curr.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </FadeUp>
  );
}
