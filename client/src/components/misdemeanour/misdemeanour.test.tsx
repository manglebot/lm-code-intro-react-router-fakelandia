import { render } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";
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

// import { render, waitFor, screen } from "@testing-library/react";

describe("Tests for Misdemeanour page", () => {
  test("renders Misdemeanour component without crashing", () => {
    // Arrange & Act
    const { getByText } = render(<Misdemeanour />);
    // Assert
    expect(getByText("Citizen ID")).toBeInTheDocument();
  });
});

describe("Tests for API Call", () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
  test("API call is made on component mount", () => {
    render(<Misdemeanour />);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8080/api/misdemeanours/10"
    );
  });
});
