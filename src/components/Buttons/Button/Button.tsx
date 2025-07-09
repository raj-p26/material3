import "./Button.css";
import type { ButtonProps } from "./Button.types.ts";
import { useRippleEffect } from "../../../hooks/useRipple.ts";

export function Button(props: ButtonProps) {
  let {
    size = "sm",
    children,
    className = "",
    shape = "round",
    variant = "filled",
    icon,
    onClick,
    ...otherProps
  } = props;

  const { createRipple, rippleContainerRef } =
    useRippleEffect<HTMLButtonElement>();

  let styles = {
    xs: `h-[32px] px-3 hover:rounded-lg ${icon ? "gap-1" : ""} text-[14px]`,
    sm: `h-[40px] px-4 hover:rounded-lg ${icon ? "gap-2" : ""} text-[14px]`,
    md: `h-[56px] px-6 hover:rounded-xl ${icon ? "gap-2" : ""} text-[16px]`,
    lg: `h-[96px] px-12 hover:rounded-2xl ${icon ? "gap-3" : ""} text-[24px]`,
    xl: `h-[136px] px-16 hover:rounded-2xl ${icon ? "gap-4" : ""} text-[32px]`,
  };

  return (
    <button
      ref={rippleContainerRef}
      className={`button-base ${variant} ${styles[size]} ${className} ${
        shape === "round" ? "rounded-full" : `square-${size}`
      }`}
      onClick={(event) => {
        createRipple(event);
        if (onClick) onClick(event);
      }}
      {...otherProps}
    >
      {icon && <div className="flex items-center justify-center ">{icon}</div>}
      <div>{props.children}</div>
    </button>
  );
}
