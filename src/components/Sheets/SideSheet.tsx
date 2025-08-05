import X from "@icons/X";
import type { SideSheetProps } from "./Sheet.types";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@components/Buttons/Button";

export function SideSheet(props: SideSheetProps) {
  const { active, children, onDismiss, title } = props;
  return (
    <>
      <AnimatePresence>
        {active ? (
          <>
            <motion.div
              key={`sheet-backdrop-${Math.random() * 12345}`}
              initial={{ opacity: 0 }}
              transition={{ ease: [0.34, 0.8, 0.34, 1], duration: 0.5 }}
              animate={{ opacity: 0.32 }}
              exit={{ opacity: 0 }}
              className="bg-scrim fixed top-0 right-0 bottom-0 left-0"
              onClick={onDismiss}
              aria-hidden="true"
            ></motion.div>
            <motion.div
              initial={{ right: "-100%" }}
              transition={{ ease: [0.34, 0.8, 0.34, 1], duration: 0.5 }}
              animate={{ right: 0 }}
              exit={{ right: "-100%" }}
              key={`sheet-${Math.random() * 12345}`}
              className="bg-surface dark:bg-surface-dark fixed top-0 bottom-0 z-100 shadow-elevation-level-1 rounded-l-[28px] w-full max-w-[400px] pl-4 pr-6 pt-6"
              role="dialog"
            >
              <div className="flex items-center mb-4">
                {title && (
                  <p className="text-on-surface-variant dark:text-on-surface-variant-dark text-[22px]">
                    {title}
                  </p>
                )}
                <div className="ml-auto">
                  <Button variant="text" onClick={onDismiss}>
                    <X />
                  </Button>
                </div>
              </div>
              {children}
            </motion.div>
          </>
        ) : undefined}
      </AnimatePresence>
    </>
  );
}
