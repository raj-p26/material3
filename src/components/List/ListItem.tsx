import { Ripple } from "@components/Ripple";
import type { ListItemProps } from "./ListItem.types";

export function ListItem(props: ListItemProps) {
  const { onClick } = props;
  const content = (
    <div
      role="listitem"
      className={`bg-surface dark:bg-surface-dark px-4 py-2 ${
        onClick ? "cursor-pointer" : ""
      } flex gap-4`}
      onClick={onClick}
    >
      {props.leading && <div>{props.leading}</div>}
      <div className="w-full">
        <p className="text-on-surface dark:text-on-surface-dark text-[16px]">
          {props.label}
        </p>
        <p className="text-on-surface-variant dark:text-on-surface-variant-dark text-[14px] line-clamp-2 overflow-ellipsis">
          {props.supportingText}
        </p>
      </div>
      {props.trailing && <div>{props.trailing}</div>}
    </div>
  );
  return onClick ? <Ripple>{content}</Ripple> : content;
}
