import { render, waitFor, screen } from "@testing-library/react";
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
// import { ViteDevServer } from "vite";

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

describe("Misdemeanour Component mock tests", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockImplementation(
      async (url: string | Request) => {
        if (
          typeof url === "string" &&
          url.includes("http://localhost:8080/api/misdemeanours/10")
        ) {
          const mockResponse = {
            ok: true,
            json: async () => ({
              misdemeanours: [
                {
                  citizenId: 27011,
                  misdemeanour: "lift",
                  date: "1/8/2024",
                },
                {
                  citizenId: 19951,
                  misdemeanour: "vegetables",
                  date: "1/8/2024",
                },
                {
                  citizenId: 15461,
                  misdemeanour: "vegetables",
                  date: "1/8/2024",
                },
                {
                  citizenId: 910,
                  misdemeanour: "rudeness",
                  date: "1/8/2024",
                },
                {
                  citizenId: 16619,
                  misdemeanour: "united",
                  date: "1/8/2024",
                },
                {
                  citizenId: 4938,
                  misdemeanour: "united",
                  date: "1/8/2024",
                },
                {
                  citizenId: 13862,
                  misdemeanour: "rudeness",
                  date: "1/8/2024",
                },
                {
                  citizenId: 9230,
                  misdemeanour: "vegetables",
                  date: "1/8/2024",
                },
                {
                  citizenId: 26148,
                  misdemeanour: "vegetables",
                  date: "1/8/2024",
                },
                {
                  citizenId: 1206,
                  misdemeanour: "vegetables",
                  date: "1/8/2024",
                },
              ],
            }),
          } as Response;
          return Promise.resolve(mockResponse as Response);
        }
        return Promise.resolve({} as Response);
      }
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the Misdemeanour component", () => {
    render(<Misdemeanour />);
    expect(screen.getByTestId("misdemeanour")).toBeInTheDocument();
    expect(screen.getByText("Citizen ID")).toBeInTheDocument();
  });

  it("fetches misdemeanours data on component mount", async () => {
    render(<Misdemeanour />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:8080/api/misdemeanours/10"
      );
    });
  });
});
