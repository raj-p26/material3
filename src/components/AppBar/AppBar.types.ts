export interface AppBarProps {
  size?: "sm" | "md" | "lg";
  title?: string;
  subtitle?: string;
  centered?: boolean;
  leading?: React.ReactNode;
  children?: React.ReactNode;
}
