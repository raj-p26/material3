import { createContext } from "react";

interface NavigationBarContextType {
  insideNavbar: boolean;
}

export const NavigationBarContext = createContext<NavigationBarContextType>({
  insideNavbar: false,
});
