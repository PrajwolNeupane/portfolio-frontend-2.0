interface Props {
  w?: string;
  h?: string;
  stroke?: string;
  className?: string;
  svgClassName?: string;
}

export default function ({
  w = "20",
  h = "20",
  className,
  svgClassName,
}: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M424 96H88C65.9086 96 48 113.909 48 136V376C48 398.091 65.9086 416 88 416H424C446.091 416 464 398.091 464 376V136C464 113.909 446.091 96 424 96Z"
        stroke="black"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path
        d="M112 160L256 272L400 160"
        stroke="black"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}
