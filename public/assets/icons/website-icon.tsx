interface Props {
  w?: string;
  h?: string;
  stroke?: string;
  color?: string;
  className?: string;
  svgClassName?: string;
}

export default function WebsiteIcon({
  w = "20",
  h = "20",
  stroke = "2",
  className,
  svgClassName,
}: Props) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
        stroke="black"
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
      />
      <path
        d="M8 12C8 14.3869 8.42143 16.6761 9.17157 18.364C9.92172 20.0518 10.9391 21 12 21C13.0609 21 14.0783 20.0518 14.8284 18.364C15.5786 16.6761 16 14.3869 16 12C16 9.61305 15.5786 7.32387 14.8284 5.63604C14.0783 3.94821 13.0609 3 12 3C10.9391 3 9.92172 3.94821 9.17157 5.63604C8.42143 7.32387 8 9.61305 8 12Z"
        stroke="black"
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
      />
      <path
        d="M3 12C3 14.21 7.03 16 12 16C16.97 16 21 14.21 21 12C21 9.79 16.97 8 12 8C7.03 8 3 9.79 3 12Z"
        stroke="black"
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        className={className}
      />
    </svg>
  );
}
