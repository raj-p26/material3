import { describe, it, expect, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  afterEach(cleanup);

  it("render the <Card /> component", () => {
    render(<Card>Hello</Card>);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("check if variants are working properly or not", () => {
    const variants = ["filled", "elevated", "outlined"] as const;
    variants.forEach((variant) => {
      render(<Card variant={variant}>{variant} card</Card>);

      expect(screen.getByText(`${variant} card`)).toHaveClass(variant);
    });
  });

  it("check if clickable card has tabindex of 0", () => {
    render(<Card onClick={() => {}}>Clickable</Card>);

    const card = screen.getByText("Clickable");
    expect(card.getAttribute("tabindex")).toEqual("0");
  });

  it("check if disabled styles are set properly", () => {
    const variants = ["filled", "elevated", "outlined"] as const;

    variants.forEach((variant) => {
      render(
        <Card variant={variant} disabled>
          Disabled {variant}
        </Card>
      );

      const card = screen.getByText(`Disabled ${variant}`);
      expect(card).toHaveClass(`${variant}-disabled`);
    });
  });
});
