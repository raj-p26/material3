import { useContext } from "react";
import { DialogContext } from "./context";
import type {
  DialogProps,
  DialogSubtitleProps,
  DialogTitleProps,
} from "./Dialog.types";
import "./Dialog.css";

export function Dialog(props: DialogProps) {
  const { onClose = () => {}, children, staticBackdrop = false } = props;
  if (!props.active) return <></>;

  return (
    <DialogContext.Provider value={{ inside: true }}>
      <div
        className="dialog-scrim"
        onClick={staticBackdrop ? undefined : onClose}
      ></div>
      <div className="dialog-container" role="dialog">
        {children}
      </div>
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
