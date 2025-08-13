import type { SwitchProps } from "./Switch.types";
import "./Switch.css";

export function Switch(props: SwitchProps) {
  const { selected, disabled, onToggle } = props;
  const disableState = disabled ? "disabled" : "active";
  const selectionState = selected ? "selected" : "unselected";
  return (
    <>
      <div
        onClick={disabled ? undefined : onToggle}
        className={`switch-track-base switch-track-${disableState}-${selectionState}`}
      >
        <div
          className={`switch-handle-base switch-handle-${disableState}-${selectionState}`}
        ></div>
      </div>
    </>
  );
}
