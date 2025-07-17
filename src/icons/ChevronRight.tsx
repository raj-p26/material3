import type { IconProps } from "./icons.types";

export default function ChevronRight(props: IconProps) {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
