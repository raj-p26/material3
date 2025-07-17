import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ListItem } from "./ListItem";
import Plus from "@icons/Plus";

describe("<ListItem /> component", () => {
  afterEach(cleanup);

  it("should render ListItem", () => {
    render(<ListItem />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("should render ListItem with label", () => {
    render(<ListItem label="Custom Label" />);
    expect(screen.getByText("Custom Label")).toHaveClass("text-[16px]");
  });

  it("should render ListItem with supporting text", () => {
    const text = "Some sort of supporting text";
    render(<ListItem supportingText={text} />);

    expect(screen.getByText(text)).toHaveClass("text-[14px]");
  });

  it("should render leading icon", () => {
    const icon = <Plus />;
    render(<ListItem leading={icon} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
