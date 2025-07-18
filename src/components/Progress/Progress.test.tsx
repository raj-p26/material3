import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

describe("<Progress /> component", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<Progress />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should throw error if min is less than value", () => {
    expect(() => {
      render(<Progress min={10} value={50} />);
    }).toThrowError();
  });

  it("should throw error if max is less than value", () => {
    expect(() => {
      render(<Progress value={50} max={10} />);
    }).toThrowError();
  });
});
