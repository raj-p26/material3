import type React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "round" | "square";
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  icon?: React.ReactNode;
}
