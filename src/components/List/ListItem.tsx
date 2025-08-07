// import { Ripple } from "@components/Ripple";
import type { ListItemProps } from "./ListItem.types";

export function ListItem(props: ListItemProps) {
  const { onClick, disabled } = props;
  return (
    <div
      role="listitem"
      tabIndex={onClick && !disabled ? 0 : undefined}
      className={`
        ${
          disabled
            ? "bg-on-surface/10 dark:bg-on-surface-dark/10"
            : "bg-surface dark:bg-surface-dark"
        }
        focus:outline-3 outline-secondary dark:outline-secondary-dark
        px-4 py-2 ${onClick ? "cursor-pointer" : ""} flex gap-4`}
      onClick={onClick}
    >
      {props.leading && (
        <div className={disabled ? "opacity-38" : undefined}>
          {props.leading}
        </div>
      )}
      <div className="w-full">
        <p
          className={`${
            disabled
              ? "opacity-38"
              : "text-on-surface dark:text-on-surface-dark text-[16px]"
          }`}
        >
          {props.label}
        </p>
        <p
          className={`text-on-surface-variant dark:text-on-surface-variant-dark ${
            disabled ? "opacity-38" : ""
          } text-[14px] line-clamp-2 overflow-ellipsis`}
        >
          {props.supportingText}
        </p>
      </div>
      {props.trailing && (
        <div className={disabled ? "opacity-38" : undefined}>
          {props.trailing}
        </div>
      )}
    </div>
  );
  // return !disabled && onClick ? <Ripple>{content}</Ripple> : content;
}
