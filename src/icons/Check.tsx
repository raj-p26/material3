import type { IconProps } from "./icons.types";

export default function Check(props: IconProps) {
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
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
