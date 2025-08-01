import { useContext, useEffect, useState } from "react";
import { NavigationBarContext } from "./context";

type NavbarChild = React.ReactElement<NavbarItemProps, typeof Item>;

type NavbarProps = {
  children?: NavbarChild | NavbarChild[];
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export function NavigationBar(props: NavbarProps) {
  return (
    <NavigationBarContext value={{ insideNavbar: true }}>
      <nav
        className={`bg-surface-container dark:bg-surface-container-dark shadow-elevation-level-2`}
      >
        <div className="flex items-center justify-evenly mx-auto max-w-[600px]">
          {props.children}
        </div>
      </nav>
    </NavigationBarContext>
  );
}

interface NavbarItemProps {
  label?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  active?: boolean;
}

function Item(props: NavbarItemProps) {
  const context = useContext(NavigationBarContext);
  if (!context || !context.insideNavbar) {
    throw new Error(
      "NavigationBar.Item must only be used inside NavigationBar"
    );
  }
  const { icon, label, active, onClick } = props;
  const windowSize = useWindowSize();

  return (
    <div
      onClick={onClick}
      tabIndex={onClick && 1}
      className={`flex flex-1 items-center justify-center ${
        windowSize <= 600 ? "flex-col gap-y-1" : "gap-x-1"
      } ${
        active
          ? "bg-secondary-container dark:bg-secondary-container-dark text-on-secondary-container dark:text-on-secondary-container-dark hover:opacity-92 focus:opacity-90"
          : "hover:bg-on-secondary-container/8 dark:hover:bg-on-secondary-container-dark/8 focus:bg-on-secondary-container/10 dark:focus:bg-on-secondary-container-dark/10"
      } ${onClick ? "cursor-pointer" : ""} px-4 rounded-full h-13`}
    >
      {icon && <div>{icon}</div>}
      {label && <p className="text-[12px] font-medium">{label}</p>}
    </div>
  );
}

NavigationBar.Item = Item;
