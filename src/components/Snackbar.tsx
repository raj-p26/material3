import { useState } from "react";
import { SnackbarContext, type SnackbarConfig } from "@context/snackbarContext";
import X from "@icons/X";
import { Button } from "./Buttons/Button";

export function SnackbarProvider(props: React.PropsWithChildren) {
  const [config, setConfig] = useState<SnackbarConfig>({
    timeout: 4000,
    dismissible: true,
  });

  return (
    <SnackbarContext.Provider value={{ config, setConfig }}>
      {props.children}
      {config.content && (
        <Snackbar
          content={config.content}
          onDismiss={() => setConfig((pre) => ({ ...pre, content: undefined }))}
          dismissible={config.dismissible}
        />
      )}
    </SnackbarContext.Provider>
  );
}

type SnackbarProps = {
  content: string;
  dismissible?: boolean;
  onDismiss?: () => void;
};

function Snackbar({ content, dismissible, onDismiss }: SnackbarProps) {
  return (
    <div className="fixed bottom-0 left-0 h-12 w-[90vw] max-w-[400px] flex items-center justify-between mb-4 mx-4 px-3 pl-4 pr-3 line-clamp-2 text-[14px] font-medium bg-inverse-surface dark:bg-inverse-surface-dark text-inverse-on-surface dark:text-inverse-on-surface-dark shadow-elevation-level-3 rounded-sm">
      {content}
      {dismissible && (
        <Button onClick={onDismiss} variant="text">
          <span className="text-inverse-on-surface dark:text-inverse-on-surface-dark">
            <X />
          </span>
        </Button>
      )}
    </div>
  );
}
