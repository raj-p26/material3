export interface CardProps {
  variant?: "filled" | "elevated" | "outlined";
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
