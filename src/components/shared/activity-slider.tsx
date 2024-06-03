"use client";

import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
    <div className="flex w-full px-[12%] gap-[5%] py-10 items-center">
      <Image
        src={image}
        width={400}
        height={400}
        alt="Activity 2"
        className="w-[45%] object-cover"
      />
      <div className="flex w-[60%] flex-col gap-5">
        <h2 className="text-md text-gray-200">{title}</h2>
        {description.map((curr, indx) => (
          <p className="text-xs font-light text-gray-300" key={indx}>
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
        className="flex w-full items-center justify-center my-5 relative"
        id="activity-slider"
      >
        <div className="w-[90%] relative">
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
