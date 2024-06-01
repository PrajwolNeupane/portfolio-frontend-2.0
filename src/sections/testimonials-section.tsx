import { FadeUp, TestimonialSlider } from "@/components/shared";

export default function TestimonialsSection() {
  return (
    <div
      className="flex flex-col gap-2 w-full items-center justify-center px-[10%] py-[100px] z-[4]"
      id="testimonials-section"
    >
      <FadeUp id="testimonials-title" duration={0.75} dealy={0.5}>
        <h2
          className="text-4xl font-medium text-gray-300"
          id="testimonials-title"
        >
          TESTIMONIALS
        </h2>
      </FadeUp>
      <FadeUp id="testimonials-tag" duration={0.75} dealy={0.5}>
        <p id="testimonials-tag" className="text-main-lighter text-sm">
          Hear from my colleagues / co workers
        </p>
      </FadeUp>
      <TestimonialSlider />
    </div>
  );
}
