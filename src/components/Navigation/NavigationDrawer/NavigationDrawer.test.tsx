import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { NavigationDrawer } from "./NavigationDrawer";

describe("<NavigationDrawer> component", () => {
  afterEach(cleanup);

  it("should render the component", () => {
    render(<NavigationDrawer opened />);

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should not render the component if it isn't in opened state", () => {
    render(<NavigationDrawer />);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("should have N items in the drawer", () => {
    const itemCount = 5;
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push(<NavigationDrawer.Item onSelect={() => {}} />);
    }

    render(<NavigationDrawer opened>{...items}</NavigationDrawer>);

    expect(screen.getAllByRole("menuitem")).toHaveLength(itemCount);
  });

  it("should throw error if items are used outside the drawer", () => {
    expect(() => {
      render(<NavigationDrawer.Item onSelect={() => {}} />);
    }).toThrowError();
  });
});
