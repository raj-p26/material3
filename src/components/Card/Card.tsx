import type { CardProps } from "./Card.types";
import { Ripple } from "../Ripple/Ripple";
import "./Card.css";

export function Card(props: CardProps) {
  const { variant = "elevated", disabled = false, onClick } = props;

  const content = (
    <div
      className={`card-base ${
        disabled ? `${variant}-disabled` : variant
      } w-fit ${onClick ? "cursor-pointer" : ""}`}
      tabIndex={!disabled && onClick ? 0 : -1}
      onClick={onClick}
    >
      {props.children}
    </div>
  );

  return onClick ? <Ripple color="surface">{content}</Ripple> : content;
}
