import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "@/utils/class-names";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  variant?: "outline" | "filled";
}

export default function Button({ title, variant = "filled", ...props }: Props) {
  var className;
  if (variant == "outline") {
    className = `border-[1px] border-main py-2 px-2 rounded-md text-2xs text-white`;
  } else if (variant == "filled") {
    className =
      "bg-main-lighter py-2 px-2 rounded-md text-2xs text-white hover:bg-main transition-all ease-in delay-150";
  }
  return (
    <button {...props} className={cn(className, props.className)}>
      {title}
    </button>
  );
}
