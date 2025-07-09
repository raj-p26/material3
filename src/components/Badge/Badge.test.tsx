import { screen, render, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Badge } from "./Badge";

describe("Badge component tests", () => {
  afterEach(cleanup);

  it("render the Badge component", () => {
    render(<Badge text="*" />);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders the Badge without any text content", () => {
    render(<Badge />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
