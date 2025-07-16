interface DividerProps {
  inset?: "left" | "right" | "middle";
}

const insetStyles = {
  left: "ml-4",
  right: "mr-4",
  middle: "mx-4",
} as const;

export function Divider(props: DividerProps) {
  const { inset } = props;
  return (
    <hr
      className={`border border-outline-variant dark:border-outline-variant-dark my-2 ${
        inset ? insetStyles[inset] : ""
      }`}
    />
  );
}
