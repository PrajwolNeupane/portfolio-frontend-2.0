interface Props {
  w?: string;
  h?: string;
  stroke?: string;
  color?: string;
  className?: string;
  svgClassName?: string;
}

export default function ({
  w = "20",
  h = "20",
  svgClassName,
  className,
}: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M5 15V8M19 6V14C19 15.3261 18.4732 16.5979 17.5355 17.5355C16.5979 18.4732 15.3261 19 14 19H6C4.67392 19 3.40215 18.4732 2.46447 17.5355C1.52678 16.5979 1 15.3261 1 14V6C1 4.67392 1.52678 3.40215 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1H14C15.3261 1 16.5979 1.52678 17.5355 2.46447C18.4732 3.40215 19 4.67392 19 6Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
      />
      <path
        d="M9 15V11.75M9 11.75V7.99999M9 11.75C9 7.99999 15 7.99999 15 11.75V15M5 5.00999L5.01 4.99899"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
      />
    </svg>
  );
}
