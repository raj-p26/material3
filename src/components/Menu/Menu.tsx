import { Ripple } from "@components/Ripple";
import type { MenuItemProps, MenuProps } from "./Menu.types";
import { MenuContext } from "./context";
import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Menu(props: MenuProps) {
  const { active } = props;
  return (
    <MenuContext value={{ insideMenu: true }}>
      <AnimatePresence>
        {active && (
          <motion.div
            role="menu"
            key={"menu-" + Math.random() * 12345}
            initial={{
              translateY: -20,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              ease: [0.34, 0.8, 0.34, 1],
              duration: 0.35,
            }}
            exit={{
              translateY: -20,
              opacity: 0,
            }}
            className="min-w-[112px] max-w-[280px] shadow-elevation-level-2 py-1 rounded-sm bg-surface-container dark:bg-surface-container-dark"
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </MenuContext>
  );
}

function MenuItem(props: MenuItemProps) {
  const context = useContext(MenuContext);
  if (!context || !context.insideMenu) {
    throw new Error("MenuItem should only be used inside <Menu>");
  }
  const { leading, labelText, trailing, disabled } = props;
  const innerContent = (
    <div
      onClick={props.onClick}
      tabIndex={props.onClick ? 0 : undefined}
      role="menuitem"
      className={`
    ${
      disabled
        ? "bg-on-surface/10 dark:bg-on-surface-dark/10"
        : "bg-surface-container dark:bg-surface-container-dark"
    }
    outline-primary dark:outline-primary-dark focus:outline-3
    flex items-center h-12 px-3 ${!disabled ? "cursor-pointer" : ""}`}
    >
      {leading && (
        <span
          className={`inline-block mr-3
        ${
          disabled
            ? "text-on-surface/38 dark:text-on-surface-dark/38"
            : "text-on-surface-variant dark:text-on-surface-variant-dark"
        }
        `}
        >
          {leading}
        </span>
      )}
      {labelText && (
        <p
          className={`text-[14px] font-medium
        ${
          disabled
            ? "text-on-surface/38 dark:text-on-surface-dark/38"
            : "text-on-surface-variant dark:text-on-surface-variant-dark"
        }`}
        >
          {labelText}
        </p>
      )}
      {trailing && (
        <span
          className={`inline-block ml-auto
          ${
            disabled
              ? "text-on-surface/38 dark:text-on-surface-dark/38"
              : "text-on-surface-variant dark:text-on-surface-variant-dark"
          }`}
        >
          {trailing}
        </span>
      )}
    </div>
  );

  return disabled ? (
    innerContent
  ) : (
    <Ripple color="surface">{innerContent}</Ripple>
  );
}

Menu.Item = MenuItem;
