import Check from "../icons/Check";
import "./Checkbox.css";
import { useRippleEffect } from "../../hooks/useRipple";

type CheckboxProps = {
  bg?: "primary" | "secondary" | "tertiary" | "error";
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const bgStyles = {
  primary:
    "bg-primary text-on-primary dark:bg-primary-dark dark:text-on-primary-dark",
  secondary:
    "bg-secondary text-on-secondary dark:bg-secondary-dark dark:text-on-secondary-dark",
  tertiary:
    "bg-tertiary text-on-tertiary dark:bg-tertiary-dark dark:text-on-tertiary-dark",
  error: "bg-error text-on-error dark:bg-error-dark dark:text-on-error-dark",
} as const;

export function Checkbox(props: CheckboxProps) {
  const { rippleContainerRef, createRipple } =
    useRippleEffect<HTMLLabelElement>();
  const { bg = "primary", checked, onChange, disabled } = props;

  return (
    <>
      <label
        tabIndex={disabled ? -1 : 0}
        className="size-8 flex items-center justify-center rounded-full cursor-pointer focus:outline-2 focus:outline-secondary dark:focus:outline-secondary-dark"
        ref={rippleContainerRef}
        onClick={disabled ? undefined : createRipple}
      >
        <input
          type="checkbox"
          id="material-checkbox"
          className="sr-only"
          checked={checked}
          onChange={disabled ? undefined : onChange}
          disabled={disabled}
        />
        <span
          className={`checkbox-base ${
            checked
              ? `${
                  disabled
                    ? "bg-on-surface/38 dark:bg-on-surface-dark/38"
                    : bgStyles[bg]
                } border-none`
              : "border border-outline-variant dark:border-outline-variant-dark"
          }`}
        >
          {checked && (
            <Check
              className={`size-[18px] ${
                disabled ? "text-surface/38 dark:text-surface-dark/38" : ""
              }`}
              strokeWidth={3}
            />
          )}
        </span>
      </label>
    </>
  );
}
