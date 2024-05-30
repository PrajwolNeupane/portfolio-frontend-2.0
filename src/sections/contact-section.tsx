"use client";
import { FadeUp } from "@/components/shared";

export default function ContactSection() {
  const handleEmailClick = () => {
   
  };

  return (
    <div
      className="flex flex-col w-full items-center justify-center  px-[10%] pt-8 pb-20 gap-5 relative"
      id="contact-section"
    >
      <FadeUp id="contact-title" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="contact-title">
          CONTACT
        </h2>
      </FadeUp>
      <h4 className="text-md text-gray-300">Message Me</h4>
      <div className="w-2/3 flex flex-col gap-3">
        <div className="w-full flex items-centers gap-4">
          <input
            placeholder="Name"
            className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full"
          />
          <input
            placeholder="Email"
            type="email"
            className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full"
          />
        </div>
        <textarea
          placeholder="Your Message ?"
          className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full resize-none h-[200px]"
        ></textarea>
        <button
          className="bg-background-darker text-gray-300 py-3 text-2xs rounded-md hover:bg-background"
          onClick={handleEmailClick}
        >
          Send <span className="ml-2">🚀</span>
        </button>
      </div>
    </div>
  );
}
