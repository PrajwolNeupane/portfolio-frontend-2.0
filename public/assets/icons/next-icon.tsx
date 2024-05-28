interface Props {
  w?: string;
  h?: string;
  color?: string;
}

export default function NextIcon({
  w = "14",
  h = "14",
  color = "black",
}: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 7H10.5M10.5 7L7 10.5M10.5 7L7 3.5M13.5 3.5V10.5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
