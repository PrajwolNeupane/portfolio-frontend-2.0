import { FadeUp } from "@/components/shared";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/contact-form"), {
  ssr: false,
});

export default function ContactSection() {
  return (
    <div
      className="flex flex-col w-full items-center justify-center  px-[10%] pt-8 pb-20 gap-2 relative"
      id="contacts-section"
    >
      <FadeUp id="contact-title" duration={0.75} dealy={0.5}>
        <h2 className="text-4xl font-medium text-gray-300" id="contact-title">
          CONTACT
        </h2>
      </FadeUp>
      <FadeUp id="contact-tag" duration={0.75} dealy={0.5}>
        <h4 className="text-sm text-main-lighter" id="contact-tag">
          Message Me
        </h4>
      </FadeUp>
      <ContactForm />
    </div>
  );
}
