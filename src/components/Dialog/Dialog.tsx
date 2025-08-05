import { useContext } from "react";
import { DialogContext } from "./context";
import { motion, AnimatePresence } from "motion/react";
import type {
  DialogProps,
  DialogSubtitleProps,
  DialogTitleProps,
} from "./Dialog.types";
import "./Dialog.css";

export function Dialog(props: DialogProps) {
  const { onClose = () => {}, children, staticBackdrop = false } = props;

  return (
    <DialogContext.Provider value={{ inside: true }}>
      <AnimatePresence>
        {props.active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.32 }}
            transition={{
              ease: [0.38, 1.21, 0.22, 1],
              duration: 0.5,
            }}
            exit={{ opacity: 0 }}
            key="backdrop"
            className="dialog-scrim"
            onClick={staticBackdrop ? undefined : onClose}
          ></motion.div>
        ) : undefined}
        {props.active ? (
          <motion.div
            initial={{ scale: 0 }}
            transition={{
              ease: [0.38, 1.21, 0.22, 1],
              duration: 0.5,
            }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="dialog-container"
            key="dialog-container"
            role="dialog"
          >
            {children}
          </motion.div>
        ) : undefined}
      </AnimatePresence>
    </DialogContext.Provider>
  );
}

function DialogTitle(props: DialogTitleProps) {
  const contextValue = useContext(DialogContext);
  if (!contextValue.inside)
    throw new Error(
      "<Dialog.Title> should only be used inside <Dialog> component"
    );

  return (
    <h1
      className={`text-2xl font-normal mb-4 ${
        props.centerTitle ? "text-center" : ""
      }`}
    >
      {props.children}
    </h1>
  );
}

function DialogSubtitle(props: DialogSubtitleProps) {
  const contextValue = useContext(DialogContext);
  if (!contextValue.inside) {
    throw new Error(
      "<Dialog.Body> should only be used inside <Dialog> component"
    );
  }

  return <p className="font-normal text-[14px] mb-6">{props.children}</p>;
}

function DialogBody(props: React.PropsWithChildren) {
  const context = useContext(DialogContext);
  if (!context || !context.inside) {
    throw new Error("<Dialog.Body> can only be used inside <Dialog>");
  }

  return <>{props.children}</>;
}

function DialogActions(props: React.PropsWithChildren) {
  const contextValue = useContext(DialogContext);
  if (!contextValue.inside) {
    throw new Error(
      "<Dialog.Body> should only be used inside <Dialog> component"
    );
  }

  return <div className="w-fit ml-auto space-x-2 flex">{props.children}</div>;
}

Dialog.Title = DialogTitle;
Dialog.SupportingText = DialogSubtitle;
Dialog.Actions = DialogActions;
Dialog.Body = DialogBody;
