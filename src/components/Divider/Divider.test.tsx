import { describe, it, afterEach, expect } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("<Divider /> component", () => {
  afterEach(cleanup);

  it("should render <Divider />", () => {
    render(<Divider />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("should check if insets are properly set or not", () => {
    const insets = ["left", "middle", "right"] as const;

    insets.forEach((inset) => {
      render(<Divider inset={inset} />);
    });

    screen.getAllByRole("separator").forEach((hr) => {
      expect(hr).toHaveClass(/m.-*/);
    });
  });
});
