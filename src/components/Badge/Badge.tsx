interface BadgeProps {
  size?: "sm" | "lg";
  text?: string;
}

const badgeSizes = {
  sm: "min-h-[6px] min-w-[6px] w-fit",
  lg: "min-h-4 min-w-4 w-fit",
};

export function Badge(props: BadgeProps) {
  let { size, text } = props;
  if (text !== undefined) size = "lg";
  else size = "sm";

  return (
    <div
      role="status"
      className={`${badgeSizes[size]} px-1 flex items-center justify-center
      rounded-full bg-error text-on-error
      dark:bg-error-dark dark:text-on-error-dark
      text-[11px] font-medium`}
    >
      <span>{text}</span>
    </div>
  );
}
