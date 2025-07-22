import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Menu } from "./Menu";

describe("<Menu> Component", () => {
  afterEach(cleanup);

  it("should render the menu", () => {
    render(
      <Menu active>
        <Menu.Item labelText="First" />
      </Menu>
    );

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should have N items in it", () => {
    render(
      <Menu active>
        <Menu.Item labelText="First" />
        <Menu.Item labelText="Second" />
        <Menu.Item labelText="Third" />
      </Menu>
    );

    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
  });

  it("should not render the menu if not active", () => {
    render(
      <Menu>
        <Menu.Item labelText="First" />
      </Menu>
    );

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
