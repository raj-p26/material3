export interface SheetProps extends React.PropsWithChildren {
  active?: boolean;
  onDismiss?: () => void;
  height?: number | string;
}

export interface SideSheetProps extends React.PropsWithChildren {
  active?: boolean;
  onDismiss?: () => void;
  title?: string;
}
