import { motion, AnimatePresence } from "motion/react";
import type {
  NavigationDrawerItemProps,
  NavigationDrawerProps,
} from "./NavigationDrawer.types";
import { useContext } from "react";
import { NavigationDrawerContext } from "./context";
// import { Ripple } from "@components/Ripple";
import X from "@icons/X";
import { Button } from "@components/Buttons/Button";

function NavigationDrawer(props: NavigationDrawerProps) {
  const { opened, onDismiss, headline } = props;
  return (
    <NavigationDrawerContext value={{ insideDrawer: true }}>
      <AnimatePresence>
        {opened ? (
          <motion.div
            key={`backdrop-${Math.random() * 12345}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { ease: [0.34, 0.8, 0.34, 1], duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
            aria-hidden
            className="bg-scrim fixed top-0 left-0 right-0 bottom-0"
            onClick={onDismiss}
          ></motion.div>
        ) : undefined}
        {opened ? (
          <motion.div
            role="menu"
            key={`modal-${Math.random() * 12345}`}
            initial={{ translateX: "-100%" }}
            animate={{
              translateX: 0,
              transition: { ease: [0.34, 0.8, 0.34, 1], duration: 0.2 },
            }}
            exit={{ translateX: "-100%" }}
            className="w-full max-w-[360px] bg-surface-container-low dark:bg-surface-container-low-dark fixed left-0 top-0 bottom-0 shadow-elevation-level-1 rounded-e-2xl px-3 pt-[28px]"
          >
            <div className="flex items-center mb-4">
              {headline && (
                <h1 className="text-[14px] font-medium text-on-surface-variant dark:text-on-surface-variant-dark">
                  {headline}
                </h1>
              )}
              <div className="ml-auto w-fit">
                <Button variant="text" onClick={onDismiss}>
                  <X />
                </Button>
              </div>
            </div>
            {props.children}
          </motion.div>
        ) : undefined}
      </AnimatePresence>
    </NavigationDrawerContext>
  );
}

function Item(props: NavigationDrawerItemProps) {
  const ctx = useContext(NavigationDrawerContext);

  if (!ctx || !ctx.insideDrawer) {
    throw new Error(
      "<NavigationDrawer.Item> should only be used inside <NavigationDrawer>"
    );
  }
  const { active, labelText, onSelect } = props;

  return (
    // <Ripple className="w-[336px]">
    <div
      tabIndex={0}
      onClick={onSelect}
      role="menuitem"
      className={`rounded-full py-3 px-4 -outline-offset-3 focus:outline-3 outline-secondary dark:outline-secondary-dark ${
        active
          ? "bg-secondary-container text-on-secondary-container dark:bg-secondary-container-dark dark:text-on-secondary-container-dark"
          : "hover:bg-on-surface/8 dark:hover:bg-on-surface-dark/8 focus:bg-on-surface/10 dark:focus:bg-on-surface-dark/10 text-on-surface-variant dark:text-on-surface-variant-dark"
      }`}
    >
      {labelText && <p>{labelText}</p>}
    </div>
    // </Ripple>
  );
}

NavigationDrawer.Item = Item;

export { NavigationDrawer };
