import { FadeUp, TestimonialSlider } from "@/components/shared";
import { testimonials } from "@/enums/constant.enum";

export default function TestimonialsSection() {
  return (
    <div
      className="flex flex-col lg:gap-10 md:gap-6 gap-4 w-full items-center justify-center 2xl:px-[10%] lg:px-[8%] sm:px-[5%] px-[3%] xl:py-[50px] rg:py-[30px] py-[20px] z-[4]"
      id="testimonials-section"
    >
      <FadeUp id="testimonials-title" duration={0.75} dealy={0.5}>
        <h2
          className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-rg font-medium text-gray-300 leading-[100%]"
          id="testimonials-title"
        >
          TESTIMONIALS
        </h2>
      </FadeUp>
      <FadeUp id="testimonials-tag" duration={0.75} dealy={0.5}>
        <p
          id="testimonials-tag"
          className="md:text-sm sm:text-xs text-2xs text-main-lighter"
        >
          Hear from my colleagues / co workers
        </p>
      </FadeUp>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
}
