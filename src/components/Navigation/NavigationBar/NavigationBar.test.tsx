import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { NavigationBar } from "./NavigationBar";

describe("<NavigationBar> Component", () => {
  afterEach(cleanup);

  it("should render the component on the screen", () => {
    render(<NavigationBar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

});
