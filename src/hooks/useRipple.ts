import { useRef } from "react";

export function useRippleEffect<T extends HTMLElement>() {
  const rippleContainerRef = useRef<T>(null);

  const createRipple = (event: React.MouseEvent) => {
    const container = rippleContainerRef.current;

    if (!container) return;

    container.classList.add("relative");
    container.classList.add("overflow-hidden");

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.background = "rgba(0, 0, 0, 0.3)";
    ripple.style.animation = "animate-ripple 0.5s linear";

    container.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
      // removing position relative and overflow hidden to the container
      // breaks the animation.
      // TODO: find a way to fix that
    });
  };

  return { rippleContainerRef, createRipple };
}
