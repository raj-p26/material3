import Minus from "@icons/Minus";
import { AnimatePresence, motion } from "motion/react";
import type { SheetProps } from "./Sheet.types";

export function BottomSheet(props: SheetProps) {
  const { active, onDismiss, height } = props;

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
              initial={{ bottom: "-100%" }}
              transition={{ ease: [0.34, 0.8, 0.34, 1], duration: 0.5 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: "-100%" }}
              key={`sheet-${Math.random() * 12345}`}
              className="bg-surface dark:bg-surface-dark fixed bottom-0 z-100 shadow-elevation-level-1 rounded-t-[28px] w-full max-w-[600px] left-[50%] -translate-x-[50%]"
              style={{ height: height || window.innerHeight / 2 }}
              role="dialog"
            >
              <div
                className="my-[22px] text-on-surface-variant dark:text-on-surface-variant-dark"
                onClick={onDismiss}
                title="dismiss"
                aria-label="dismiss"
              >
                <Minus className="mx-auto size-8 cursor-grab" />
              </div>
              {props.children}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
