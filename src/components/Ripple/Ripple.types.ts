export interface RippleButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "surface" | "error";
  highEmphasis?: boolean;
}

export interface RippleSpecs {
  top: number;
  left: number;
  size: number;
}
