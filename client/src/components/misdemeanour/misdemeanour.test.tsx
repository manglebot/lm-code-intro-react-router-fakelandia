import { render } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";

// import { render, waitFor, screen } from "@testing-library/react";

//just check rendering
test("renders DailyMix component without crashing", () => {
  render(<Misdemeanour />);
});
