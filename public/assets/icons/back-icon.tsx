interface Props {
  w?: string;
  h?: string;
  stroke?: string;
  color?: string;
}

export default function BackIcon({
  w = "20",
  h = "20",
  stroke = "4",
  color = "black",
}: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M244 400L100 256L244 112M120 256H412"
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
