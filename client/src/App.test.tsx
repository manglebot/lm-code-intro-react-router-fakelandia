import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Router } from "express";

test("TODO: write tests!", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(false).toBeTruthy();
});
