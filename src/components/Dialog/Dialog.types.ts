export interface DialogProps {
  staticBackdrop?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  active?: boolean;
}

export interface DialogTitleProps {
  children: string;
  centerTitle?: boolean;
}

export interface DialogSubtitleProps {
  children: string;
}
