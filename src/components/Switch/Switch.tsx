import type { SwitchProps } from "./Switch.types";

export function Switch(props: SwitchProps) {
  const { selected, onToggle } = props;
  return (
    <>
      <div
        onClick={onToggle}
        className="h-8 w-13 flex items-center rounded-full border-2 border-outline dark:border-outline-dark bg-surface-container-highest dark:bg-surface-container-highest-dark shadow-elevation-level-1 cursor-pointer"
      >
        <div
          className={`rounded-full size-6 ${
            selected ? "bg-primary dark:bg-primary-dark translate-x-[100%]" : ""
          }`}
        ></div>
      </div>
    </>
  );
}
