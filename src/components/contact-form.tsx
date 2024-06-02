"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema, contactSchema } from "@/schema/contact.schema";
import { toast } from "react-toastify";
import { FadeUp } from "./shared";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase.config";

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const handleEmailClick = async (data: ContactSchema) => {
    try {
      await addDoc(collection(db, "messages"), {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date(),
      });
      toast.success("Message successfully send");
    } catch (e) {
      console.log("--Error on Form Submit----");
      console.log(e);
      toast.error("Message failed to send");
    }
  };

  return (
    <FadeUp id="contact-form" duration={0.75} dealy={0.5}>
      <form
        className="w-2/3 flex flex-col gap-3 mt-8"
        onSubmit={handleSubmit(handleEmailClick)}
        id="contact-form"
      >
        <div className="w-full flex items-centers gap-4">
          <div className="w-full space-y-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full"
            />
            <p className="text-red-500 text-2xs">{errors.name?.message}</p>
          </div>
          <div className="w-full space-y-2">
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full"
            />
            <p className="text-red-500 text-2xs">{errors.email?.message}</p>
          </div>
        </div>
        <textarea
          {...register("message")}
          placeholder="Your Message ?"
          className="bg-background-lighter text-gray-100 py-2 px-4 text-2xs placeholder:text-2xs outline-none rounded-md w-full resize-none h-[200px]"
        ></textarea>
        <p className="text-red-500 text-2xs">{errors.message?.message}</p>
        <button
          type="submit"
          className="bg-background-darker text-gray-300 py-3 text-2xs rounded-md hover:bg-background"
        >
          Send <span className="ml-2">🚀</span>
        </button>
      </form>
    </FadeUp>
  );
}
