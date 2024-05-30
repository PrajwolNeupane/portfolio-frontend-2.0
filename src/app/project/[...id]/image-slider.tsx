"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

interface Props {
  images: (string | StaticImageData)[];
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
      className="absolute  top-1/2 left-4 z-10 bg-background/70 rounded-full p-2 shadow-md prev-button hover:bg-background/90 cursor-pointer transition-all duration-300 ease-in-out"
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

export default function ImageSlider({ images }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".next-button",
        prevEl: ".prev-button",
      }}
      scrollbar={{ draggable: true }}
      className="flex flex-col items-center justify-center w-full"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      pagination={{
        clickable: true,
      }}
    >
      <NextButton />
      <PrevButton />
      {images?.map((curr, indx) => (
        <SwiperSlide key={indx}>
          <Image
            src={curr}
            alt="Project Image"
            width={1000}
            height={1000}
            className="aspect-video w-full object-cover mt-6"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
