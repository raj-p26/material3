type MenuItemComponentType = React.ReactElement<
  MenuItemProps,
  React.JSXElementConstructor<MenuItemProps>
>;

export interface MenuProps {
  children?: MenuItemComponentType | MenuItemComponentType[];
  active?: boolean;
}

export interface MenuItemProps {
  leading?: React.ReactElement;
  trailing?: React.ReactElement;
  labelText?: string;
  disabled?: boolean;
  onClick?: () => void;
}
