export interface FABProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "baseline" | "medium" | "large";
  type?: "tonal" | "base";
  variant?: "primary" | "secondary" | "tertiary";
}
