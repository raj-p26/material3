import type React from "react";

export interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "round" | "square";
  variant?: "elevated" | "filled" | "tonal" | "outlined" | "text";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (ev: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  toggleButton?: boolean;
}
