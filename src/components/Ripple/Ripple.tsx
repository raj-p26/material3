/* eslint-disable-no-unused-vars */
/// TODO: work on Ripple component
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
  function createRipple(event: React.MouseEvent) {
    const button = event.currentTarget;
    const ripple = document.createElement("div");

    button.appendChild(ripple);
    const d = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = d + "px";
    const buttonRect = button.getBoundingClientRect();
    // ripple.classList.add(
    //   highEmphasis ? highEmphasisMap[color] : colorMap[color]
    // );
    const rippleColor = highEmphasis
      ? `--color-${color}-container`
      : `--color-${color}`;
    ripple.style.left = event.clientX - buttonRect.left - d / 2 + "px";
    ripple.style.top = event.clientY - buttonRect.top - d / 2 + "px";
    ripple.style.backgroundColor = `var(${rippleColor})`;
    ripple.style.animationDuration = `500ms`;
    ripple.style.animationTimingFunction = `cubic-bezier(0.34, 0.8, 0.34, 1)`;
    ripple.classList.add("ripple");
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  return (
    <div
      className="ripple-container"
      style={{
        borderRadius: `calc(infinity * 1)`,
        width: "100%",
        height: "100%",
      }}
      onClick={createRipple}
    >
      {children}
    </div>
  );
}
