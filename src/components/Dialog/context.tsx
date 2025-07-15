import { createContext } from "react";

export const DialogContext = createContext<{
  inside: boolean;
}>({ inside: false });
