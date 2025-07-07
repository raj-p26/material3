import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { describe, it, expect, afterEach } from "vitest";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

describe("Button component", () => {
  afterEach(cleanup);

  it("renders the button", () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("checks for class names", () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText("Hello").hasAttribute("class"));
  });

  it("checks if button is disabled", () => {
    render(<Button disabled>Hello</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("checks if button variants are set", () => {
    const variants = [
      "filled",
      "elevated",
      "outlined",
      "text",
      "tonal",
    ] as const;
    variants.forEach((variant) => {
      render(<Button variant={variant}>Hello</Button>);
    });

    screen.getAllByRole("button").forEach((elem, idx) => {
      expect(elem).toHaveClass(variants[idx]);
    });
  });

  it("checks if square button styles are set properly", () => {
    render(<Button>Circle button</Button>);
    expect(screen.getByRole("button")).toHaveClass(/rounded-*/);

    const buttonTestID = "Square button";
    render(
      <Button data-testid={buttonTestID} shape="square">
        {buttonTestID}
      </Button>
    );
    expect(screen.getByTestId(buttonTestID)).toHaveClass(/square-*/);
  });

  it("checks if button styles according to sizes are set or not", () => {
    const heights = { xs: 32, sm: 40, md: 56, lg: 96, xl: 136 };

    sizes.map((size) => {
      render(<Button size={size}>Button {size}</Button>);
    });

    screen.getAllByRole("button").forEach((button, idx) => {
      const size = sizes[idx];
      expect(button).toHaveClass(`h-[${heights[size]}px]`);
    });
  });

  it("checks if button sets additional margin when passing an icon in different sizes", () => {
    const gaps = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 };
    sizes.forEach((size) => {
      render(
        <Button icon={<>+</>} size={size}>
          button
        </Button>
      );
    });

    screen.getAllByRole("button").forEach((elem, idx) => {
      const size = sizes[idx];
      expect(elem).toHaveClass(`gap-${gaps[size]}`);
    });
  });
});
