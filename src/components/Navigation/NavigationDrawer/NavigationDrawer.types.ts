export interface NavigationDrawerProps {
  opened?: boolean;
  onDismiss?: () => void;
  headline?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export interface NavigationDrawerItemProps {
  active?: boolean;
  onSelect: () => void;
  icon?: React.ReactElement;
  labelText?: string;
}
