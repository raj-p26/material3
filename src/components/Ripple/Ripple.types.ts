export interface RippleButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "surface" | "error";
  highEmphasis?: boolean;
  size?: "full" | "fit";
}

export interface RippleSpecs {
  top: number;
  left: number;
  size: number;
}
