import { useCallback } from "react";
import { Ripple } from "@components/Ripple";
import type { ButtonProps } from "./Button.types.ts";
import { motion } from "motion/react";
import "./Button.css";

const buttonBorders = {
  xs: 12,
  sm: 12,
  md: 16,
  lg: 28,
  xl: 28,
};

const activeButtonBorders = {
  xs: 8,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 16,
};

export function Button(props: ButtonProps) {
  const {
    size = "sm",
    className = "",
    shape = "round",
    variant = "filled",
    icon,
    toggleButton,
    selected,
    // ...otherProps
  } = props;
  if (!props.toggleButton && props.selected) {
    throw new Error(
      "`selected` prop can only be set if `toggleButton` prop is set"
    );
  }
  const initialBorderRadius = shape === "round" ? 100 : buttonBorders[size];

  if (props.toggleButton && variant === "text") {
    throw new Error("text button does not support toggle mode");
  }

  const getButtonClass = useCallback(() => {
    return toggleButton
      ? `${variant}-${selected ? "selected" : "unselected"}`
      : variant;
  }, [variant, toggleButton, selected]);

  const styles = {
    xs: `h-[32px] px-3 hover:rounded-lg ${icon ? "gap-1" : ""} text-[14px]`,
    sm: `h-[40px] px-4 hover:rounded-lg ${icon ? "gap-2" : ""} text-[14px]`,
    md: `h-[56px] px-6 hover:rounded-xl ${icon ? "gap-2" : ""} text-[16px]`,
    lg: `h-[96px] px-12 hover:rounded-2xl ${icon ? "gap-3" : ""} text-[24px]`,
    xl: `h-[136px] px-16 hover:rounded-2xl ${icon ? "gap-4" : ""} text-[32px]`,
  };

  const rippleColor = {
    filled: "primary",
    elevated: "surface",
    tonal: "tertiary",
    outlined: "surface",
    text: "primary",
  } as const;

  return (
    <motion.button
      key={`button-${Math.random() % 1000}`}
      initial={{
        borderRadius: initialBorderRadius,
      }}
      /// TODO: change this to have animation when button is tapped and not hovered.
      animate={{
        borderRadius: props.selected
          ? activeButtonBorders[size]
          : initialBorderRadius,
      }}
      transition={{
        duration: 0.35,
        ease: [0.42, 1.67, 0.21, 0.9],
      }}
      whileHover={
        props.disabled ? undefined : { borderRadius: activeButtonBorders[size] }
      }
      className={`button-base ${getButtonClass()} ${
        styles[size]
      } ${className} ${props.disabled ? "disabled-button" : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {/* <Ripple color={rippleColor[variant]} highEmphasis={variant === "text"}> */}
      {icon && <div className="flex items-center justify-center">{icon}</div>}
      <div>{props.children}</div>
      {/* </Ripple> */}
    </motion.button>
  );
}
