import { render, waitFor } from "@testing-library/react";
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

// describe("Misdemeanour Component", () => {
//   beforeEach(() => {
//     vi.spyOn(global, "fetch").mockImplementation((url) => {
//       if (url.includes("api/misdemeanours/3")) {
//         return Promise.resolve({
//           ok: true,
//           json: () =>
//             Promise.resolve({
//               misdemeanours: [
//                 { citizenId: 4146, misdemeanour: "lift", date: "1/8/2024" },
//                 { citizenId: 21575, misdemeanour: "lift", date: "1/8/2024" },
//                 { citizenId: 15232, misdemeanour: "united", date: "1/8/2024" },
//               ],
//             }),
//         });
//       }
//       return Promise.resolve({ ok: false });
//     });
//   });

// afterEach(() => {
//   vi.restoreAllMocks();
// });

// it("renders the Misdemeanour component", () => {
//   render(<Misdemeanour />);
//   expect(screen.getByTestId("misdemeanour")).toBeInTheDocument();
//   expect(screen.getByText("Citizen ID")).toBeInTheDocument();
//   // Add more expectations specific to your component
// });

// it("fetches misdemeanours data on component mount", async () => {
//   render(<Misdemeanour />);
//   await waitFor(() => {
//     expect(global.fetch).toHaveBeenCalledWith(
//       "http://localhost:8080/api/misdemeanours/3"
//     );
//   });
// });

// });
