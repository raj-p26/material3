import { createContext } from "react";

export type SnackbarConfig = {
  content?: string;
  dismissible?: boolean;
  timeout?: number;
};

export type SnackbarContextType = {
  config?: SnackbarConfig;
  setConfig?: React.Dispatch<React.SetStateAction<SnackbarConfig>>;
};

export const SnackbarContext = createContext<SnackbarContextType | null>(null);
