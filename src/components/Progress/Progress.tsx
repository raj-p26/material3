/// TODO: circular progress indicator
interface ProgressProps extends React.AllHTMLAttributes<HTMLProgressElement> {
  value?: number;
  min?: number;
  max?: number;
}

export function Progress(props: ProgressProps) {
  const { value, min, max } = props;
  if (min && value && value > min) {
    throw new Error("progress value is less than minimum value");
  }

  if (max && value && value > max) {
    throw new Error("progress value is greater than maximum value");
  }

  const progress = (value! / max!) * 100;

  return (
    <div className={`flex ${progress < 95 ? "gap-1" : ""}`} role="progressbar">
      <div
        style={{ width: `${progress}%` }}
        className="h-1 rounded-full bg-primary dark:bg-primary-dark"
      ></div>
      <div className="flex-1 h-1 rounded-full bg-secondary-container dark:bg-secondary-container-dark"></div>
      <div className="size-1 rounded-full bg-primary dark:bg-primary-dark"></div>
    </div>
  );
}
