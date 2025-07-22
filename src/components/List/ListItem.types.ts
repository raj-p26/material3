export interface ListItemProps {
  label?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  supportingText?: string;
  disabled?: boolean;
  onClick?: (ev: React.MouseEvent) => void;
}
