"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
  images: (string | StaticImageData)[];
}

export default function ImageSlider({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        src={images[currentIndex]!}
        alt="Project Image"
        width={1000}
        height={1000}
        className="aspect-video w-full object-cover mt-6"
      />
      <div className="flex items-center w-full justify-between">
        <button
          className="bg-gray-300 hover:bg-gray-100 rounded-full w-10 text-xs aspect-square"
          onClick={prev}
        >
          {"<-"}
        </button>
        <div className="flex items-center gap-4">
          {repeatedImages
            .slice(
              currentIndex,
              currentIndex + 3 === repeatedImages.length
                ? repeatedImages.length
                : currentIndex + 3
            )
            .map((curr, indx) => (
              <Image
                key={indx}
                src={curr}
                alt="Project Image"
                width={200}
                height={200}
                className="aspect-video w-[170px] object-cover m-4 cursor-pointer opacity-50 hover:opacity-80 transition-all ease-out duration-200"
                onClick={() =>
                  handleClick((currentIndex + indx) % images.length)
                }
              />
            ))}
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-100 rounded-full w-10 text-xs aspect-square"
          onClick={next}
        >
          {"->"}
        </button>
      </div>
    </div>
  );
}
