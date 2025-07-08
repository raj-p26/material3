import { screen, render, cleanup } from "@testing-library/react";
import { AppBar } from "./AppBar";
import { describe, it, expect, afterEach } from "vitest";

const titleSize = {
  sm: "text-[22px]",
  md: "text-[28px]",
  lg: "text-[36px]",
};

const subtitleSize = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[16px]",
};

describe("AppBar component", () => {
  afterEach(cleanup);
  it("renders the AppBar", () => {
    render(<AppBar title="App Bar" />);
    const appBar = screen.getByText("App Bar");

    expect(appBar).toBeInTheDocument();
  });

  it("renders the AppBar with subtitle", () => {
    render(<AppBar title="App Bar" subtitle="Some random subtitle" />);
    const appBar = screen.getByText("Some random subtitle");

    expect(appBar).toHaveClass("appbar-subtitle");
  });

  it("checks if title and subtitle are set with correct font size", () => {
    render(<AppBar title="App Bar" subtitle="Some random subtitle" />);
    const appBarTitle = screen.getByText("App Bar");
    const appBarSubtitle = screen.getByText("Some random subtitle");

    expect(appBarTitle).toHaveClass(titleSize["sm"]);
    expect(appBarSubtitle).toHaveClass(subtitleSize["sm"]);
  });

  it("checks if leading icon is set", () => {
    const backIcon = (
      <span className="material-symbols-outlined">arrow_back</span>
    );
    render(<AppBar leading={backIcon} />);

    expect(screen.getByText("arrow_back")).toBeInTheDocument();
  });
});
