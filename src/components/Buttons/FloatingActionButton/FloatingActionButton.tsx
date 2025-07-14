import { Ripple } from "../../Ripple";
import "./FloatingActionButton.css";
import type { FABProps } from "./FloatingActionButton.types";

export function FloatingActionButton(props: FABProps) {
  const {
    type = "tonal",
    size = "baseline",
    variant = "primary",
    children,
    onClick,
    ...rest
  } = props;

  return (
    <Ripple color={variant}>
      <button
        {...rest}
        onClick={onClick}
        className={`block fab-${size} fab-${type}-${variant} cursor-pointer`}
      >
        {children}
      </button>
    </Ripple>
  );
}
