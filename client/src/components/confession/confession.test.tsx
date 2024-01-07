import { render, waitFor, screen } from "@testing-library/react";
import Confession from "./confession";

//just check rendering
test("renders DailyMix component without crashing", () => {
  render(<Confession />);
});
