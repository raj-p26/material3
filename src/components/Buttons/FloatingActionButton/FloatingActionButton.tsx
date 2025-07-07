import "./FloatingActionButton.css";
import type { FABProps } from "./FloatingActionButton.types";
import { useRippleEffect } from "../../../hooks/useRipple";

export function FloatingActionButton(props: FABProps) {
  const {
    type = "tonal",
    size = "baseline",
    variant = "primary",
    children,
    onClick,
    ...rest
  } = props;
  const { rippleContainerRef, createRipple } =
    useRippleEffect<HTMLButtonElement>();

  return (
    <button
      ref={rippleContainerRef}
      {...rest}
      onClick={(event) => {
        createRipple(event);
        if (onClick) onClick(event);
      }}
      className={`block fab-${size} fab-${type}-${variant} cursor-pointer`}
    >
      {children}
    </button>
  );
}
