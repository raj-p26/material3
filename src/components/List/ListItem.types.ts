export interface ListItemProps {
  label?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  supportingText?: string;
  onClick?: (ev: React.MouseEvent) => void;
}
