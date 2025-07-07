import { screen, render, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { FloatingActionButton } from "./FloatingActionButton";

const sizes = ["baseline", "large", "medium"] as const;

describe("FloatingActionButton component tests", () => {
  afterEach(cleanup);

  it("renders FloatingActionButton", () => {
    render(<FloatingActionButton>+</FloatingActionButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("checks if button sizes are set or not", () => {
    sizes.forEach((size) => {
      render(<FloatingActionButton size={size}>+</FloatingActionButton>);
    });

    const fabs = screen.getAllByRole("button");
    fabs.forEach((fab, idx) => {
      expect(fab).toHaveClass(`fab-${sizes[idx]}`);
    });
  });

  it("checks if FAB variants are set or not", () => {
    const variants = ["primary", "secondary", "tertiary"] as const;

    variants.forEach((variant, idx) => {
      render(
        <FloatingActionButton variant={variant}>{idx}</FloatingActionButton>
      );
    });

    const fabs = screen.getAllByRole("button");
    fabs.forEach((fab, idx) => {
      expect(fab).toHaveClass(`fab-tonal-${variants[idx]}`);
    });
  });

  it("checks if FAB types are properly set or not", () => {
    const types = ["base", "tonal"] as const;
    types.forEach((type_) => {
      render(<FloatingActionButton type={type_}>{type_}</FloatingActionButton>);
    });

    const fabs = screen.getAllByRole("button");
    fabs.forEach((fab, idx) => {
      expect(fab).toHaveClass(`fab-${types[idx]}-primary`);
    });
  });
});
