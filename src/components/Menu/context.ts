import { createContext } from "react";

type MenuContextType = {
  insideMenu: boolean;
};

export const MenuContext = createContext<MenuContextType>({
  insideMenu: false,
});
