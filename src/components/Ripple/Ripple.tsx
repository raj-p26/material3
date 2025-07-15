import React, { useState } from "react";
import type { RippleButtonProps, RippleSpecs } from "./Ripple.types";

const colorMap = {
  primary: "bg-on-primary dark:bg-on-primary-dark",
  secondary: "bg-on-secondary dark:bg-on-secondary-dark",
  tertiary: "bg-on-tertiary dark:bg-on-tertiary-dark",
  surface: "bg-on-surface dark:bg-on-surface-dark",
  error: "bg-on-error dark:bg-on-error-dark",
};

const highEmphasisMap = {
  primary: "bg-primary dark:bg-primary-dark",
  secondary: "bg-secondary dark:bg-secondary-dark",
  tertiary: "bg-tertiary dark:bg-tertiary-dark",
  surface: "bg-surface dark:bg-surface-dark",
  error: "bg-error dark:bg-error-dark",
};

export function Ripple({
  children,
  color = "surface",
  highEmphasis = false,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleSpecs[]>([]);

  const handleClick = (event: React.MouseEvent) => {
    const button = event.currentTarget.getBoundingClientRect();
    const size = Math.max(button.width, button.height);
    const x = event.clientX - button.left - size / 2;
    const y = event.clientY - button.top - size / 2;

    setRipples((prevRipples) => [...prevRipples, { top: y, left: x, size }]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 700);
  };

  return (
    <div
      className="relative p-1 overflow-hidden rounded-lg outline-none cursor-pointer size-fit"
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className={`absolute rounded-full ${
            highEmphasis ? highEmphasisMap[color] : colorMap[color]
          } animate-ripple pointer-events-none`}
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.top,
            left: ripple.left,
          }}
        />
      ))}
    </div>
  );
}
