import type { CardProps } from "./Card.types";
import { useRippleEffect } from "../../hooks/useRipple";
import "./Card.css";

export function Card(props: CardProps) {
  const { variant = "elevated", disabled = false, onClick } = props;
  const { createRipple, rippleContainerRef } =
    useRippleEffect<HTMLDivElement>();
  return (
    <div
      ref={rippleContainerRef}
      className={`card-base ${
        disabled ? `${variant}-disabled` : variant
      } w-fit ${onClick ? "cursor-pointer" : ""}`}
      tabIndex={!disabled && onClick ? 0 : -1}
      onClick={(event) => {
        if (onClick) {
          createRipple(event);
          onClick(event);
        }
      }}
    >
      {props.children}
    </div>
  );
}
