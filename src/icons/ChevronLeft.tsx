import type { IconProps } from "./icons.types";

export default function ChevronLeft(props: IconProps) {
  const {
    fill = "none",
    strokeWidth = 1.5,
    stroke = "currentColor",
    className = "size-6",
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}
