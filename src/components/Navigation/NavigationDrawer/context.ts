import { createContext } from "react";

type NavigationDrawerCtxType = { insideDrawer: boolean };

export const NavigationDrawerContext = createContext<NavigationDrawerCtxType>({
  insideDrawer: false,
});
