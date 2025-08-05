import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { BottomSheet } from "./BottomSheet";
import { SideSheet } from "./SideSheet";

describe("<BottomSheet> component", () => {
  afterEach(cleanup);

  it("should render the sheet", () => {
    render(<BottomSheet active />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should not render the sheet if it isn't active", () => {
    render(<BottomSheet />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

describe("<SideSheet> component", () => {
  afterEach(cleanup);

  it("should render the sheet", () => {
    render(<SideSheet active />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should not render the sheet if it isn't active", () => {
    render(<BottomSheet />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
