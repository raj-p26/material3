import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Checkbox } from "./Checkbox";

describe("<Checkbox /> component", () => {
  afterEach(cleanup);
  it("render the <Checkbox /> component", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("check if <Checkbox /> gets checked properly", () => {
    render(<Checkbox checked />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("checked");
  });
});
