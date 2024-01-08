import { render } from "@testing-library/react";
import Confession from "./confession";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  it,
  vi,
  JestAssertion,
} from "vitest";
import { ViteDevServer } from "vite";

describe("Tests for Confession page", () => {
  test("renders Confession component without crashing", () => {
    // Arrange & Act
    const { container } = render(<Confession />);
    // Assert
    container.querySelector(".confession__description");
  });

  // test("renders text on Confession page", () => {
  //   // Arrange & Act
  //   const { getByText, getByLabelText } = render(<Confession />);h

  //   // Assert
  //   expect(
  //     getByText("It's very difficult to catch people committing misdemeanours")
  //   ).toBeInTheDocument();
  //   expect(getByLabelText("Subject:")).toBeInTheDocument();
  // });
});
