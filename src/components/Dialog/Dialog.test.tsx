import { Dialog } from "./Dialog";
import { screen, render, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

describe("<Dialog /> component tests", function () {
  afterEach(cleanup);

  it("should not render the component when not in active state", function () {
    render(
      <Dialog>
        <Dialog.Title>Hello</Dialog.Title>
      </Dialog>
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should render the component when in active state", function () {
    render(
      <Dialog active>
        <Dialog.Title>Hello</Dialog.Title>
      </Dialog>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should throw error if any of <Dialog> subcomponents are used outside <Dialog>", function () {
    expect(function () {
      render(<Dialog.Title>Hello</Dialog.Title>);
    }).toThrowError();

    expect(function () {
      render(<Dialog.SupportingText>Hi</Dialog.SupportingText>);
    }).toThrowError();

    expect(function () {
      render(<Dialog.Body>Hi</Dialog.Body>);
    }).toThrowError();
  });
});
