import type { IconProps } from "./icons.types";
import React from "react";

function X(props: IconProps) {
  const {
    fill = "none",
    strokeWidth = 1.5,
    stroke = "currentColor",
    className = "size-6",
  } = props;

  return (
    <>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
}

export default React.memo(X);
