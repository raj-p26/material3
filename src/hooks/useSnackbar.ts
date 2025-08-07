import { useContext, useEffect } from "react";
import { SnackbarContext } from "@context/snackbarContext";

export function useSnackbar() {
  const context = useContext(SnackbarContext);

  if (context === null)
    throw new Error("component doesn't have SnackbarProvider");

  const { timeout, content } = context.config!;

  useEffect(() => {
    if (content) {
      const interval = setTimeout(() => {
        context.setConfig!((prev) => ({
          ...prev,
          content: undefined,
        }));
      }, timeout);

      return () => {
        if (interval) clearTimeout(interval);
      };
    }

    return () => {};
  }, [content, timeout, context.setConfig]);

  const setContent = (content: string) => {
    context.setConfig!((prev) => ({ ...prev, content }));
  };

  return setContent;
}
